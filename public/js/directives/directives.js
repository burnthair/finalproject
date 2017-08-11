// Import Angular module
var app = angular.module('lunchModule');

// Create the directive for the Restaurant List items
app.directive('restaurantListItem', function() {

  return {
    replace: false,
    restrict: 'E',
    templateUrl: 'partials/restaurantlistitem.html'
  };

});

// Create the directive for the Feederboard items
app.directive('feederboardItem', function() {

  return {
    replace: false,
    restrict: 'E',
    templateUrl: 'partials/feederboarditem.html'
  };

});
