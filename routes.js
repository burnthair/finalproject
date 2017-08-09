var express = require('express');
var http=require('http');
var request = require("request");
var router=express.Router();

var auth={};

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
//                 client_id: 'eauRpAeBCINN3K1nAN1q6g',
//                 client_secret: 'C3qSUaBgbSza3W0GfCbcnMH6O6GafAIap1B6hjBYq1nTBTAYv5QdUoDSojB12bdS',
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


router.get("/search/:searchTerm", function (req, res) {
var data={};
    var options = {
        method: 'GET',
        url: 'https://api.yelp.com/v3/businesses/search',
        qs:
        {
            term: req.params.searchTerm,
            latitude: '37.786882',
            longitude: '-122.399972'
        },
        headers:
        {
            'postman-token': '4e034573-7290-50e9-04da-162b718ab23a',
            'cache-control': 'no-cache',
            'authorization': "Bearer K_PQ3CzLELpz-MgkBPPvSG6IEZT7a3ZBUCXh5pduDgOusntHyITg39wXDZtLJZD5bw1VhaB13h49XLgN-5tfSbf2GjIMHROR3l2_tNb28j2XUtTqm9MmDh29plSHWXYx"

        }
    };

    request(options, function (error, response, body) {
        data=body;
        // if (error) throw new Error(error);
        //console.log(date.getTime());
        //console.log(auth.expires_at);
        res.send(data);
        console.log("Seach body is" + data);
        
    });
  
    });

   

// });
    







module.exports.router=router;