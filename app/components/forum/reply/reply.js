coachApp.controller("newReplyCtrl", function ($scope, $location, Discussoin, discussoins, activeUser, $uibModalInstance) {
    
        // If the user is not logged in going back to home screen
        if (!activeUser.isLoggedIn()) {
            $location.path("/");
            return;
        }
    
    
        $scope.cancel = function () {
            $uibModalInstance.close("canceled");
            $location.path("/forum");
        }
    
        $scope.create = function () {
            if($scope.discussion.replyIndex.content){      // verify reply is not empty     
            $uibModalInstance.close("added");
            discussions.addReply($routeParams.discussionsIndex, $scope.discussion.reply);
            $location.path("/forum");
        }
        else {
            alert("נא ודא תוכן בשדה תגובה" )
        }
            }
    
    });