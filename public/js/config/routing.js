var app = angular.module('lunchModule', ["ngRoute"]);

app.config(function($routeProvider) {  // Routing goes here.
  $routeProvider
    .when ('/landng' , {
      cotnroller: 'landingCrtl',
      templateUrl: 'partials/landng.html'
  })

    .when('/restaurant', {
      controller: 'restaurantCtrl',
      templateUrl: 'partials/restaurant.html'
    })

    .when('/feederboard', {
      controller: 'feederboardCtrl',
      templateUrl: 'partials/feederboard.html'
    })

    .otherwise({ redirectTo: 'partials/landing.html'})
});
