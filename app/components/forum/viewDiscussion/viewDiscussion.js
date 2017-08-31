coachApp.controller("viewDiscCtrl", function ($scope, $location, activeUser, Discussion ,discussions, $uibModal) {
    
        // If the user is not logged in going back to home screen
        if (!activeUser.isLoggedIn()) {
            $location.path("/");
            return;
        }
    
        $scope.greetName = activeUser.get().fullName();
    
    // Creating a copy of the discussion object so changes won't be reflected on the array
    $scope.discussion = new Discussion(discussions.get($routeParams.forumIndex));
    // $scope.date = new Date($scope.target.reqDate);

    $scope.cancel = function() {
        $location.path("/forum");
    }

    $scope.addReply = function() {
            $uibModal.open({
                templateUrl: "app/components/forum/reply/reply.html",
                controller: "newReplyCtrl"
            })
        }
    
})
