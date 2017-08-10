coachApp.controller("NavCtrl", function ($scope, activeUser,$uibModal) { 

    $scope.isLoggedIn = function() {
        return activeUser.isLoggedIn();
    };

 $scope.login = function() {
        $uibModal.open({
            templateUrl: "app/components/login/login.html",
            controller: "LoginCtrl"
        })
    }

});