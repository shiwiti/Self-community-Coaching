coachApp.controller("visionUpdtCtrl", function ($scope, $location, visions, activeUser,  $routeParams, Vision, $filter) {

    // If the user is not logged in going back to home screen
    // if (!activeUser.isLoggedIn()) {
    //     $location.path("/");
    //     return;
    // }

    visions.getCategories().then(function (response) {
        $scope.categories = response.data;
    });

    // Creating a copy of the vision object so changes won't be reflected on the array
    $scope.vision = new Vision(visions.get($routeParams.visionIndex));
    $scope.date = new Date($scope.vision.reqDate);

    $scope.cancel = function() {
        $location.path("/visions");
    }

    $scope.update = function() {
        visions.update($routeParams.visionIndex, $scope.vision);
        $location.path("/visions");
    }

    $scope.remove = function() {
        visions.remove($routeParams.visionIndex);
        $location.path("/visions");
    }
    
})
