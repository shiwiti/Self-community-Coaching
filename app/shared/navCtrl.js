coachApp.controller("NavCtrl", function ($scope, activeUser) { 

    $scope.isLoggedIn = function() {
        return activeUser.isLoggedIn();
    };
});