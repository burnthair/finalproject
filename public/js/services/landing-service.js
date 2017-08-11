// Import Angular module
var app = angular.module('lunchModule');

// Create a service to handle pulling the data from the Yelp API
app.factory("landingService", function($http, $location) {

  // Create variable to hold the data returned from Yelp API call
  var payload = [];
  // Create a variable to store the search term in for recall on the Restaurant List view
  var searchTerm;

  var userName;
  // Method that makes API call to Yelp and returns data meeting search term via primises
  setSearch = function(term) {
    var promise = $http({
      method:"GET",
      url:"/api/search/" + term
    })
    .then(function(response) {
      payload = response.data.businesses;

      if (term = "restaurant") {
        searchTerm = "all";
      } else {
        searchTerm = term;
      }

      $location.path("/restaurant");
    });
    return promise;
  };

  // Function to return data from Yelp API obtained using setSearch above
  getSearch = function() {
    return payload;
  };

  // Function to return the search term for display on the Restaurant List view
  getSearchTerm = function(){
    return searchTerm;
  }

  setName=function(name){
    userName=name;

  };

  getName=function(){
    return userName;
  };

  // Returns the get and set functions for use in directives
  return {
      getName:getName,
      setName: setName,
      setSearch: setSearch,
      getSearch: getSearch,
      getSearchTerm: getSearchTerm
  };

});
