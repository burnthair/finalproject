var app = angular.module('lunchModule');

app.directive('restaurantListItem', function() {

  return {
    replace: false,
    restrict: 'E',
    templateUrl: 'partials/restaurantlistitem.html'
  };

});

app.directive('feederboardItem', function() {

  return {
    replace: false,
    restrict: 'E',
    templateUrl: 'partials/feederboarditem.html'
  };

});
