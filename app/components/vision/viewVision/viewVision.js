coachApp.controller("visionViewCtrl", function ($scope, $location, activeUser, visions) {

    // If the user is not logged in going back to home screen
    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }

    $scope.greetName = activeUser.get().fullName();

    // Making sure that we are only loading once
    if (visions.getAll().length === 0) {
        $scope.visionArr = [];
        visions.load(activeUser.get().visionsData);
        $scope.visionArr = visions.getAll();
    } else {
        $scope.visionArr = visions.getAll();
    }

    $scope.openDetails = function(index) {
        $location.path("/visions/" + index)
    }
});
