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
  };
});
