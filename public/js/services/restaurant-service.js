// Import Angular module
var app = angular.module('lunchModule');

// Create a service to handle calls from the database
app.factory("resService", function ($http, $httpParamSerializer) {

  // Create variable for data returned from the database that will populate the Feederboard view
  var feederData = [];

  // Function takes parameters from Angular item to send to database
  function setData(personorg,placeid, placename, personName, useremail, placedisplayaddress1, placedisplayaddress2, placeprice, placerating, message, placeimage_url, time) {

    var data = {
      org: personorg,
      id: placeid,
      name: placename,
      time: time,
      personName: personName,
      personEmail: useremail,
      address1: placedisplayaddress1,
      address2: placedisplayaddress2,
      price: placeprice,
      rating: placerating,
      message: message,
      placeimg: placeimage_url
    };

    console.log(data);
    var p = $http({
      method: "POST",
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      url: "/api/reserve",
      data: $.param(data)
    }).then(function(success){
      feederData = success.data.rows;
     // console.log('setData', feederData);
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
      console.log('getData', feederData);
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
