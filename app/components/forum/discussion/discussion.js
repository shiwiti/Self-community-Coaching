coachApp.controller("newDiscussoinCtrl", function ($scope, $location, Discussoin, discussoins, activeUser, $uibModalInstance) {
    
        // If the user is not logged in going back to home screen
        if (!activeUser.isLoggedIn()) {
            $location.path("/");
            return;
        }
    
        discussoins.getCategories().then(function (response) {
            $scope.categories = response.data;
        });
        $scope.target = new Discussoin({});
    
        $scope.cancel = function () {
            $uibModalInstance.close("canceled");
            $location.path("/forum");
        }
    
        $scope.create = function () {
            if($scope.discussoin.name){            
            $uibModalInstance.close("added");
            discussoins.addDiscussion($scope.discussoin);
            $location.path("/forum");
        }
        else {
            alert("נא ודא ערך בשדה שם" )
        }
    }
    
    });