var app = angular.module('lunchModule');

app.factory("landingService",function($http, $location){

///Placeholder for data returned from yelp API call
var payload=[];


////Method that makes api call to yelp and returns data meeting search term via primises
setSearch=function(term){
    //console.log("Getting stuff");
    var promise=$http({
        method:"GET",
        url:"/api/search/"+term
    }).then(function(response){
        //console.log("got stuff");
        payload=response.data.businesses;
      $location.path("/restaurant");
     //   console.log(payload);
    });

    return promise;
};


///Returns data from yelp api obtained useing setSearch above
getSearch=function(){
   // console.log("Getting data");
    return payload;
}

    ///Returns get and set functions for use in directives
    return {
        setSearch: setSearch,
        getSearch: getSearch
    }

});
