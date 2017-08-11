var express = require('express');
var http = require('http');
var request = require("request");
var pg = require("pg");
var conPool = require("./pgconnectionpool");
var url = require('url');
var router = express.Router();

// var bodyParser = require('body-parser')

var auth = {};
/////working progress to automatically reauthenticate yelp api token once it expires


//get token


// router.get("/search", /**function(req, res,next){
//     if ((new Date().getTime() < auth.expires_at)){
//         //new Date().getTime()<auth.expires_at
//         next("route");
//         }  else {next()}
//     },*/

//     function(req, res,next) {
//         var options = {
//             method: 'POST',
//             url: 'https://api.yelp.com/oauth2/token',
//             headers:
//             {
//                 'postman-token': '134b4f35-d8e6-7640-4020-4f099945132e',
//                 'cache-control': 'no-cache',
//                 'content-type': 'application/x-www-form-urlencoded'
//             },
//             form:
//             {
//                 client_id: "eauRpAeBCINN3K1nAN1q6g",
//                 client_secret: ,
//                 grant_type: 'client_credentials'
//             }
//         };
//             request(options, function (error, response, body) {
//             auth=JSON.parse(body);
//             auth.expires_at=new Date().getTime()+auth.expires_in;
//             //console.log("Auth object"+auth);
//         //if (error) throw new Error(error);
//         // console.log(body);
//             });
//    });

///get method, takes search term from landing page and calls yelp api, then returns a json of results
router.get("/search/:searchTerm", function (req, res) {
var data={};
    var options = {
        method: 'GET',
        url: 'https://api.yelp.com/v3/businesses/search',
        qs:
        {
            term: req.params.searchTerm,
            radius: 1609,
            latitude: '42.3359244',
            longitude: '-83.0519076'
        },
        headers:
        {
            'postman-token': '4e034573-7290-50e9-04da-162b718ab23a',
            'cache-control': 'no-cache',
            'authorization': "Bearer K_PQ3CzLELpz-MgkBPPvSG6IEZT7a3ZBUCXh5pduDgOusntHyITg39wXDZtLJZD5bw1VhaB13h49XLgN-5tfSbf2GjIMHROR3l2_tNb28j2XUtTqm9MmDh29plSHWXYx"
        }
    };
    ///actual yelp get request, calls yelp api using options from above
        request(options, function (error, response, body) {
            data=body;

            //Send response data back to angular
            res.send(data);
        // console.log("Seach body is" + data);

        });

    });

///Post request to send data from yelp api for selected resturant on the resturant view to database for storage
router.post("/reserve", function(req, res){
        // console.log("Got the post");
        // console.log(req.body

    //Collects values sent from angular ng-repeats  from yelp
    var values=[
        "Grand Circus",
        req.body.id,
        req.body.name,
        req.body.address1,
        req.body.adress2,
        req.body.rating,
        req.body.price,
        req.body.personName,
        req.body.message

    ]

    ///Takes values and iserts data into database
    conPool.pool.connect(function (err, client, done) {

       // console.log("Posting");
            client.query(
                'INSERT INTO public.customer (personorg, resid, resname, resaddress1, resaddress2, resrating, resprice, personname, personmsg)'+
                'values($1::text, $2::text, $3::text, $4::text, $5::text, $6::real, $7::text, $8::text, 9::text)',
                values,
                function (err, result) {
                    done();
                //     if (err) return console.error(err);
                    // console.log("Posted")
                    //  console.log(result.rows);
                });
        });
        //when response is good, send good status back to angular to set off promise chain
        res.sendStatus(200);

});





router.get("/reserve", function (req, res) {
  //  console.log("Getting the post");
    // console.log(req.body

    conPool.pool.connect(function (err, client, done) {

        client.query('SELECT resid, resname, resaddress1, resaddress2, resrating, resprice, array_agg(t.personname) as person \
        FROM public.customer t \
        GROUP BY	resid, resname, resaddress1, resaddress2, resrating,resprice',
             function (err, result) {
                done();
                if (err) return console.error(err);
                console.log("The result is "+result);
                res.send(result);

            })
    });


});

// });


module.exports.router=router;
