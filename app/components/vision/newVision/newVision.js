coachApp.controller("newVisionCtrl", function ($scope, $location, Vision, visions, activeUser, $uibModalInstance) {

    // If the user is not logged in going back to home screen
    // if (!activeUser.isLoggedIn()) {
    //     $location.path("/");
    //     return;
    // }

    visions.getCategories().then(function (response) {
        $scope.categories = response.data;
    });
    $scope.vision = new Vision({});

    $scope.cancel = function () {
        $uibModalInstance.close("canceled");
        $location.path("/visions");
    }

    $scope.create = function () {
        $uibModalInstance.close("added");
        visions.add($scope.vision);
        $location.path("/visions");
    }
});