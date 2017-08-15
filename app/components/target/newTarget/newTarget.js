coachApp.controller("newTargetCtrl", function ($scope, $location, Target, targets, activeUser, $uibModalInstance) {

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
        $uibModalInstance.close("canceled");
        $location.path("/targets");
    }

    $scope.create = function () {
        if($scope.target.name && $scope.target.category && $scope.target.reqDate){            
        $uibModalInstance.close("added");
        targets.add($scope.target);
        $location.path("/targets");
    }
    else {
        alert("נא ודא ערכים בשדות שם , קטגוריא ותאריך יעד" )
    }
}

});