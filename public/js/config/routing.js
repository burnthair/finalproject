// Import Angular module
var app = angular.module('lunchModule');

// Angular routing implemented below
app.config(function($routeProvider) {
  $routeProvider
    .when ('/landing', {
      controller: 'landingCtrl',
      templateUrl: 'partials/landing.html'
    })
    .when('/restaurant', {
      controller: 'restaurantCtrl',
      templateUrl: 'partials/restaurant.html'
    })
    .when('/feederboard', {
      controller: 'feederboardCtrl',
      templateUrl: 'partials/feederboard.html'
    })
    .otherwise({ redirectTo: '/landing'});
});
