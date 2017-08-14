// Import Angular module
var app = angular.module('lunchModule');

// Create the controller for the Landing view
app.controller('landingCtrl', function($scope, $location, landingService) {
  $scope.search = "";
  $scope.setSearch = function(param) {
    landingService.setSearch(param);
  };
  $scope.seeWhats = function() {
    landingService.setSearch("restaurants");
    $location.path("/restaurant");
  };
  // function notificationsCtrl($scope, $interval) {
  //   var fun = function () {
  //     $scope.search = foods[Math.floor(Math.random()*20)];
  //   };
  //   fun();
  //   $interval(fun, 10000);
  // };


});
