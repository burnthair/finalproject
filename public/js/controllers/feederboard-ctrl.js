// Import Angular module
var app = angular.module('lunchModule');

// Create the controller for the Feederboard view
app.controller('feederboardCtrl', function ($scope, resService, $location) {
  // Assign the
  $scope.expand = function (item) {
    angular.forEach($scope.data, function (currentItem) {
      currentItem.showfull = currentItem === item && !currentItem.showfull;
    });
  };

  // $scope.find="Grand Circus";
  $scope.data = resService.returnData();
  //console.log($scope.data);
  $scope.resName = ""; //Scope a resName to filter by restaurant name in feederboard
  // Create function to allow routing on click of navigation buttons
  $scope.toLanding = function() {
    $location.path("/landing");
  };
  $scope.toRestaurantList = function() {
    $location.path("/restaurant");
  };
});
