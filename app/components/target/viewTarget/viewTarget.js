coachApp.controller("viewTargetCtrl", function ($scope, $http, $location, activeUser, targets) {

    // If the user is not logged in going back to home screen
    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }

    $scope.greetName = activeUser.get().fullName();

    // Making sure that we are only loading once
    if (targets.getAll().length === 0) {
        $scope.targetArr = [];
        $http.get(activeUser.get().targetsData).then(function(response) {
            targets.load(response.targetsData);
            $scope.targetArr = targets.getAll();
        });
    } else {
        $scope.targetArr = targets.getAll();
    }

    $scope.openDetails = function(index) {
        $location.path("/targets/" + index)
    }


      $scope.filterBytargetName = function(item) {
    if (!$scope.filterTarget) {
      return true;
    } else if (item.name.indexOf($scope.filterTarget) != -1) {
      return true;
    } else {
      return false;
    }
  };

});
