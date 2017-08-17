coachApp.controller("viewTargetCtrl", function ($scope, $http, $location, activeUser, targets, $uibModal) {

    // If the user is not logged in going back to home screen
    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }

    $scope.greetName = activeUser.get().fullName();

    // Making sure that we are only loading once
    if (targets.getAll().length === 0) {
        $scope.targetArr = [];

        targets.load(activeUser.get().targetsData);
        $scope.targetArr = targets.getAll();
    } else {
        $scope.targetArr = targets.getAll();
    }

    $scope.getTotalTargets = function () {
        return $scope.targetArr.length;
    }

    $scope.getCompletedTargets = function () {
        $scope.compTargs = 0;
        for (var i = 0; i < $scope.targetArr.length; i++) {

            // targetPlainObjectArr.reqDate[i] = formatDate(targetPlainObjectArr.reqDate[i]);
            if (!$scope.targetArr[i].completed) {
                $scope.compTargs++;
            }
        }
        return $scope.compTargs;
    }

    // var isCompleted = function () {
    //     return $scope.targetArr ? true : false;
    // };

    // $scope.isCompletedTargetHebrew = function () {
    //     $scope.compTargsArr = [];
    //     for (var i = 0; i < $scope.targetArr.length; i++) {

    //     if ($scope.targetArr[i].completed === true) {
    //         $scope.compTargsArr.push("סגורה")
    //     }
    //     else {
    //         $scope.compTargsArr.push("פתוחה")
    //     }
    //     }
    //     return $scope.compTargsArr;
    // }

    $scope.openDetails = function (index) {
        $location.path("/targets/" + index)
    }

    $scope.addTarget = function () {
        $uibModal.open({
            templateUrl: "app/components/target/newTarget/newTarget.html",
            controller: "newTargetCtrl"
        })
    }

    $scope.filterBytargetName = function (item) {
        if (!$scope.filterTarget) {
            return true;
        } else if (item.name.indexOf($scope.filterTarget) != -1) {
            return true;
        } else {
            return false;
        }
    };

// display target.completed boolean in Hebrew at the targets table column "מצב המטרה"
$scope.isCompHebr = function (target){
    var txt;
    
    if (target.completed) {
        txt = "סגורה"
    }
else {
    txt = "פתוחה"
}
return txt;
}

});
