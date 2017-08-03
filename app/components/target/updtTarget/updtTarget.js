coachApp.controller("targetUpdtCtrl", function ($scope, $location, targets, activeUser,  $routeParams, Target) {

    // If the user is not logged in going back to home screen
    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }

    // Creating a copy of the target object so changes won't be reflected on the array
    $scope.target = new Target(targets.get($routeParams.targetIndex));

    $scope.cancel = function() {
        $location.path("/targets");
    }

    $scope.update = function() {
        targets.update($routeParams.targetIndex, $scope.target);
        $location.path("/targets");
    }

    $scope.remove = function() {
        targets.remove($routeParams.targetIndex);
        $location.path("/targets");
    }
    
})
