// Import Angular module
var app = angular.module('lunchModule');

// Create the controller for the Restaurant List view
app.controller('restaurantCtrl', function($scope, $location, landingService, resService) {
  
  $scope.panelSlide=false;
  //Gets user name
  $scope.userName=landingService.getName();
  // Get the search term that was stored in the Landing service
  $scope.searchTerm = landingService.getSearchTerm();
  $scope.titleTerm = landingService.getSearchTerm();

  // Use the getSeach function in landingService to get resturants meeting search term in earea
  $scope.data = landingService.getSearch();
  // If user doesn't want to search, calls yelp api with default values
  $scope.toLanding = function() {
    $location.path("/landing");
  };
  // Similar to to Landing, takes you to feederboard if you choose to not pick a place to eat
  $scope.toFeederboard = function() {
    $location.path("/feederboard");
  };
  // uses function from resService to take the info from clicked div and send to to database
  $scope.setData = function(id, name, personName, address1, address2, price, rating, message) {
    resService.setData(id, name, personName, address1, address2, price, rating, message)
      .then(function(success) {
        return resService.getData();
      })
      .then(function(success) {
        $location.path("/feederboard");
      });
    ////Test function
    $scope.print = function(item) {
    //console.log(item);
    };
  };
});
