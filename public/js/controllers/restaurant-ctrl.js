var app = angular.module('lunchModule');

app.controller('restaurantCtrl', function($scope, $location,landingService) {

    $scope.data=landingService.getSearch();
    console.log($scope.data);
    $scope.toLanding=function(){
        $location.path("/landing");

    };

    $scope.toFeederboard = function () {
        $location.path("/feederboard");

    };


});
