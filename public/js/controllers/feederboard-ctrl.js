var app = angular.module('lunchModule');

app.controller('feederboardCtrl', function ($scope,resService) {
    $scope.data=resService.returnData();
    //console.log($scope.data);
});
