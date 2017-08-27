coachApp.controller("NavCtrl", function ($scope, activeUser, $uibModal, visions, targets, $location) {

    $scope.isLoggedIn = function () {
        return activeUser.isLoggedIn();
    };

    $scope.login = function () {
        $uibModal.open({
            templateUrl: "app/components/login/login.html",
            controller: "LoginCtrl"
        })
    }

    $scope.logout = function () {
        activeUser.logout();
        $location.path("/"),
            targets.removeAll,
            visions.removeAll,
            discussions.removeAll
    }


});