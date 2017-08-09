var app = angular.module('lunchModule');

app.controller('landingCtrl', function($scope, $location,landingService) {

    console.log("landing ctrl loaded");
    $scope.search="";
    $scope.setSearch=function(parm){
        landingService.setSearch(parm)
        
    };
    
    $scope.seeWhats=function(){
        landingService.setSearch("");
       // console.log("clicked");
        $location.path("/restaurant");
    
    }


});
