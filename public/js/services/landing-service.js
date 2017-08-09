var app = angular.module('lunchModule');

app.factory("landingService",function($http, $location){




var payload=[];

setSearch=function(term){
    console.log("Getting stuff");
    var promise=$http({
        method:"GET",
        url:"/api/search/"+term
    }).then(function(response){
        //console.log("got stuff");
        payload=response.data.businesses;
      $location.path("/restaurant");
        console.log(payload);
    });

    return promise;
};

getSearch=function(){
    console.log("Getting data");
    return payload;
}


    return {
        setSearch: setSearch,
        getSearch: getSearch
    }

});
