var app = angular.module('lunchModule');

app.controller('restaurantCtrl', function($scope, $location,landingService,resService) {

    $scope.data=landingService.getSearch();
    //console.log($scope.data);
    $scope.toLanding=function(){
        $location.path("/landing");

    };

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

    $scope.print=function(item){

      //  console.log(item);
    };

    $scope.toFeederboard = function () {
        $location.path("/feederboard");

    };

    };
})