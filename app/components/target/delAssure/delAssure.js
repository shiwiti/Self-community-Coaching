//  that manges the delete assurence
// coachApp.factory("delAssure", function ($scope,$routeParams, $uibModalInstance, $http, $location) {


coachApp.controller("delAssureCtrl", function ($scope, $location, $uibModalInstance, targets, $routeParams) {

    $scope.removeA = function () {
        $uibModalInstance.close("user delete assured");    
        targets.remove($routeParams.targetIndex);
        $location.path("/targets");
    }

    $scope.dismiss = function () {
        $uibModalInstance.close("User dismissed");
    }


});