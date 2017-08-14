// Import Angular module
var app = angular.module('lunchModule');

// Create the controller for the Feederboard view
app.controller('feederboardCtrl', function ($scope, resService, $location) {
  // Assign the
  $scope.data = resService.returnData();
<<<<<<< HEAD
  $scope.resName = ""; //Scope a resName to filter by restaurant name in feederboard
=======
  console.log($scope.data);
>>>>>>> 735fe0bcb98da6bddd77d74f5c34b729ea1f4d7d
  // Create function to allow routing on click of navigation buttons
  $scope.toLanding = function() {
    $location.path("/landing");
  };
  $scope.toRestaurantList = function() {
    $location.path("/restaurant");
  };
});
