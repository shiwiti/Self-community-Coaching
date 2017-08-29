coachApp.controller("newDiscussionCtrl", function ($scope, $location, Discussion, discussions, activeUser, $uibModalInstance) {
    
        // If the user is not logged in going back to home screen
        if (!activeUser.isLoggedIn()) {
            $location.path("/");
            return;
        }
    
        discussions.getCategories().then(function (response) {
            $scope.categories = response.data;
        });
        $scope.target = new Discussion({});
    
        $scope.cancel = function () {
            $uibModalInstance.close("canceled");
            $location.path("/forum");
        }
    
        $scope.create = function () {
            if($scope.discussion.name){            
            $uibModalInstance.close("added");
            discussions.addDiscussion($scope.discussion);
            $location.path("/forum");
        }
        else {
            alert("נא ודא ערך בשדה שם" )
        }
    }
    
    });