var express = require('express');
var http = require('http');
var request = require("request");
var pg = require("pg");
var conPool = require("./pgconnectionpool");
var url = require('url');
var router = express.Router();
// var bodyParser = require('body-parser')

var auth = {};
//working progress to automatically reauthenticate yelp api token once it expires

//get token
router.get("/search/:searchTerm", function(req, res,next){
    //console.log("Auth is "+auth.expires_in);
    if ((auth.expires_in)&&(new Date().getTime() < auth.expires_at)){
        //new Date().getTime()<auth.expires_at
        next("route");
        }  else {next()}
    },

    function(req, res,next) {
        var options = {
            method: 'POST',
            url: 'https://api.yelp.com/oauth2/token',
            headers:
            {
                'postman-token': '134b4f35-d8e6-7640-4020-4f099945132e',
                'cache-control': 'no-cache',
                'content-type': 'application/x-www-form-urlencoded'
            },
            form:
            {
                client_id: "eauRpAeBCINN3K1nAN1q6g",
                client_secret: 'C3qSUaBgbSza3W0GfCbcnMH6O6GafAIap1B6hjBYq1nTBTAYv5QdUoDSojB12bdS' ,
                grant_type: 'client_credentials'
            }
        };
            request(options, function (error, response, body) {
            auth=JSON.parse(body);
            auth.expires_at=new Date().getTime()+auth.expires_in;
            next("route");
           // console.log("Auth object"+ auth.auth_key);
        //if (error) throw new Error(error);
        // console.log(body);
            });
   });

// get method, takes search term from landing page and calls yelp api, then returns a json of results
router.get("/search/:searchTerm", function(req, res) {
  var data = {};
  var options = {
    method: 'GET',
    url: 'https://api.yelp.com/v3/businesses/search',
    qs: {
      term: req.params.searchTerm,
      radius: 1609,
      latitude: '42.3359244',
      longitude: '-83.0519076',
      sort_by: 'distance'
    },
    headers:
    {    'postman-token': 'feb7b54b-358d-36e6-e292-d8f3ed03a637',
        'cache-control': 'no-cache',
        authorization: 'Bearer '+auth.access_token
     // 'authorization': "Bearer K_PQ3CzLELpz-MgkBPPvSG6IEZT7a3ZBUCXh5pduDgOusntHyITg39wXDZtLJZD5bw1VhaB13h49XLgN-5tfSbf2GjIMHROR3l2_tNb28j2XUtTqm9MmDh29plSHWXYx"
    }
  };
  // actual yelp get request, calls yelp api using options from above
  request(options, function (error, response, body) {
    data = body;
    //Send response data back to angular
    res.send(data);
  });
});

///Post request to send data from yelp api for selected resturant on the resturant view to database for storage
router.post("/reserve", function(req, res){

  // Collects values sent from angular ng-repeats  from yelp
  var values = [
    req.body.org,
    req.body.id,
    req.body.name,
    req.body.personName,
    req.body.personEmail,
    req.body.address1,
    req.body.address2,
    req.body.price,
    req.body.rating,
    req.body.message,
    req.body.placeimg,
    req.body.time
  ];

  // Takes values and iserts data into database
  conPool.pool.connect(function(err, client, done) {

    client.query(
    'DELETE from public.customer \
    WHERE personname=values($4::text)',
    values,
    function (err, result) {
              done();
    });

  client.query(
    'INSERT INTO public.customer (personorg\
                                , resid\
                                , resname\
                                , personname\
                                , personemail\
                                , resaddress1\
                                , resaddress2\
                                , resprice\
                                , resrating\
                                , personmsg\
                                , resimg\
                                , persontime)\
                          values($1::text\
                            , $2::text\
                            , $3::text\
                            , $4::text\
                            , $5::text\
                            , $6::text\
                            , $7::text\
                            , $8::text\
                            , $9::real\
                            , $10::text\
                            , $11::text\
                            , $12::text)',
    values,
    function(err, result) {
        // console.log(err);
      done();
      res.json(result);
    });
  });
  //when response is good, send good status back to angular to set off promise chain
  //res.sendStatus(200);
});

router.get("/reserve", function(req, res) {
  conPool.pool.connect(function(err, client, done) {
    client.query(
    'SELECT resid\
    ,personorg\
    ,resname\
    ,resaddress1\
    ,resaddress2\
    ,resrating\
    ,resprice\
    ,resimg\
    ,cast(count(distinct personname) as integer) as count\
    ,array_agg(t.personname) as person\
    ,array_agg(cast(t.personname::text||\' @ \'||t.persontime::text||\': \' ||t.personmsg::text as varchar)) as messages\
     FROM public.customer t \
     GROUP BY	resid, resname, resaddress1, resaddress2, resrating,resprice,resimg,personorg\
     order by count desc',
    function(err, result) {
      done();
      if (err) return console.error(err);
      // console.log("The result is "+result);
      res.send(result);
    });
  });
});

module.exports.router = router;
