coachApp.controller("targetUpdtCtrl", function ($scope, $location, targets, activeUser,  $routeParams, Target, $filter, $uibModal) {

    // If the user is not logged in going back to home screen
    // if (!activeUser.isLoggedIn()) {
    //     $location.path("/");
    //     return;
    // }

    targets.getCategories().then(function (response) {
        $scope.categories = response.data;
    });

    // Creating a copy of the target object so changes won't be reflected on the array
    $scope.target = new Target(targets.get($routeParams.targetIndex));
    $scope.date = new Date($scope.target.reqDate);

    $scope.cancel = function() {
        $location.path("/targets");
    }

    $scope.update = function() {
        if($scope.target.name && $scope.target.category && $scope.target.reqDate){                        
        targets.update($routeParams.targetIndex, $scope.target);
        $location.path("/targets");
    }
    else {
        alert("נא ודא ערכים בשדות שם , קטגוריא ותאריך יעד" )
    }
}


    $scope.remove = function() {
            $uibModal.open({
                templateUrl: "app/components/target/delAssure/delAssure.html",
                controller: "delAssureCtrl"
            })
        }    
})
