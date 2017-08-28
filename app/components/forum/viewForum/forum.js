coachApp.controller("viewForumCtrl", function ($scope, $http, $location, activeUser, discussions, $uibModal) {

    // If the user is not logged in going back to home screen
    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }

    $scope.greetName = activeUser.get().fullName();

    // Making sure that we are only loading once
    if (discussions.getAll().length === 0) {
        $scope.discussionsArr = [];

        $http.get(activeUser.get().forumData).then(function (response) {
            discussions.load(response.data);
            $scope.discussionsArr = discussions.getAll();
        });
    } else {
        $scope.discussionsArr = discussions.getAll();
    }


    $scope.getTotalDiscussions = function () {
        return $scope.discussionsArr.length;
    }

    $scope.getTargetDiscussions = function () {
        $scope.targsDisc = 0;
        for (var i = 0; i < $scope.discussionsArr.length; i++) {
            if ($scope.discussionsArr[i].section === "מטרה") {
                $scope.targsDisc++;
            }
        }
        return $scope.targsDisc;
    }


    $scope.openDetails = function (index) {
        $location.path("/forum/" + index)
    }

    $scope.addDiscussion = function () {
        $uibModal.open({
            templateUrl: "app/components/forum/discussion/discussion.html",
            controller: "newDiscussionCtrl"
        })
    }

    $scope.filterByDiscussionName = function (item) {
        if (!$scope.filterDiscussion) {
            return true;
        } else if (item.name.indexOf($scope.filterDiscussion) != -1) {
            return true;
        } else {
            return false;
        }
    };

});
