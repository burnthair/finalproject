// Import Angular module
var app = angular.module('lunchModule');

// Create the controller for the Restaurant List view
app.controller('restaurantCtrl', function($scope, $location, landingService, resService) {
  
  //$scope.panelSlide=false;


  $scope.expand = function (item) {
    angular.forEach($scope.data, function (currentItem) {
      currentItem.showfull = currentItem === item && !currentItem.showfull;
    });
  };

  //Gets user name
  $scope.userName=landingService.getInfo().userName;
  // Get the search term that was stored in the Landing service
  $scope.searchTerm = landingService.getSearchTerm();
  $scope.titleTerm = landingService.getSearchTerm();
  $scope.times = ['11:30AM', '11:45AM', '12:00PM', '12:15PM', '12:30PM', '12:45PM', '1:00PM'];

  // Use the getSeach function in landingService to get resturants meeting search term in earea
  $scope.data = landingService.getSearch();
  //console.log($scope.data);
  // If user doesn't want to search, calls yelp api with default values
  $scope.toLanding = function() {
    $location.path("/landing");
  };
  // Similar to to Landing, takes you to feederboard if you choose to not pick a place to eat
  $scope.toFeederboard = function() {
    $location.path("/feederboard");
  };

  $scope.getData=function(){
    resService.getData().then(function(success){
      $location.path("/feederboard");
    })
  }
  // uses function from resService to take the info from clicked div and send to to database
  $scope.setData = function (id, name, personName, email ,address1, address2, price, rating, message, placeimg, time) {
    resService.setData(id, name, personName, email, address1, address2, price, rating, message, placeimg, time)
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
