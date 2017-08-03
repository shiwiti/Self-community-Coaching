coachApp.controller("newVisionCtrl", function ($scope, $location, Vision, visions, activeUser ) {

    // If the user is not logged in going back to home screen
    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }

    $scope.vision = new Vision({});

    $scope.cancel = function () {
        $location.path("/vision");
    }

    $scope.create = function () {
        visions.add($scope.vision);
        $location.path("/vision");
    }
});