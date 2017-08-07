coachApp.controller("newTargetCtrl", function ($scope, $location, Target, targets, activeUser ) {

    // If the user is not logged in going back to home screen
    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }

    targets.getCategories().then(function (response) {
        $scope.categories = response.data;
    });
    $scope.target = new Target({});

    $scope.cancel = function () {
        $location.path("/targets");
    }

    $scope.create = function () {
        targets.add($scope.target);
        $location.path("/targets");
    }
});