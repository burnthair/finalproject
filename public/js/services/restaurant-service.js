// Import Angular module
var app = angular.module('lunchModule');

// Create a service to handle calls from the database
app.factory("resService", function ($http, $httpParamSerializer) {

  // Create variable for data returned from the database that will populate the Feederboard view
  var feederData = [];

  // Function takes parameters from Angular item to send to database
  function setData(id, name, personName, address1, address2, price, rating) {
    var data = {
      id: id,
      name: name,
      personName: personName,
      address1: address1,
      address2: address2,
      price: price,
      rating: rating
    };
    var p = $http({
      method: "POST",
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      url: "/api/reserve",
      data: $.param(data)
    });
    return p;
  };

  // Create function
  function getData() {
    var p = $http({
      method: "GET",
      url: "/api/reserve",
    })
    .then(function(response) {
      feederData = response.data.rows;
      return feederData;
    });
    return p;
  };

  // Create function to return the data to populate the Feederboard
  function returnData() {
    return feederData;
  };

  // Return the set, get, and return functions
  return {
    setData:setData,
    getData:getData,
    returnData:returnData
  };

});
