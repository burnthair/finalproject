var app = angular.module("lunchModule");

app.config(function($routeProvider){
    $routeProvider
        .when("/landing",{
            templateUrl:"./partials/landing.html",
            controller:"./controllers/landing-ctrl.js"

        })

        .when("/restaurant", {
            templateUrl: "./partials/restaurant.html",
            controller: "./controllers/restaurant-ctrl.js"

        })

        .when("/feeerboard", {
            templateUrl: "./partials/feederboard.html",
            controller: "./controllers/feederboard-ctrl.js"

        })

        .otherwise(redirectTo("/landing"))





});