coachApp.controller("homeCtrl", function ($scope, $uibModal) {
    $scope.login = function() {
        $uibModal.open({
            templateUrl: "app/login/login.html",
            controller: "LoginCtrl"
        })
    }
});