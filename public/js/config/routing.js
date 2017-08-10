var app = angular.module('lunchModule');

app.config(function($routeProvider) {  // Routing goes here.
  $routeProvider
    .when ('/landing' , {
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

    .otherwise({ redirectTo: '/landing'})
});
