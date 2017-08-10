var app = angular.module('lunchModule');

app.controller('feederboardCtrl', function ($scope,resService) {

    $scope.data=function(parm){
            resService.returnData().then(function(success){
                console.log(data);

            });

    }
});
