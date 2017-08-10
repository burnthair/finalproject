var app = angular.module('lunchModule');

app.controller('restaurantCtrl', function($scope, $location,landingService,resService) {
////Use the getSeach function in landingService to get resturants meeting search term in earea

    $scope.data=landingService.getSearch();
    //console.log($scope.data);

    ///If user doesn't want to search, calls yelp api with default values
    $scope.toLanding=function(){
        $location.path("/landing");

    };


    //Similar to to Landing, takes you to feederboard if you choose to not pick a place to eat
    $scope.toFeederboard = function () {
        $location.path("/feederboard");

    };

    ////uses function from resService to take the info from clicked div and send to to database
    $scope.setData = function (id,name,personName, address1, address2, price, rating){
       // console.log(id+", "+name+", "+address1+", "+ address2+", " +price+", "+rating);
        resService.setData(id, 
            name, 
            personName,
            address1, 
            address2, 
            price, 
            rating).then(function (success) {
               return resService.getData();
            }).then(function(success){
                $location.path("/feederboard");

            });
    
            ////Test function
    $scope.print=function(item){

      //  console.log(item);
    };

    

    };
})