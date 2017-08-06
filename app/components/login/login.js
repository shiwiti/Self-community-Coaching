coachApp.controller("LoginCtrl", function ($scope, $uibModalInstance, $http, $location, activeUser, User) {

    // TODO: Detele this 
    $scope.email = "aharoni@gmail.com";
    $scope.password = "123";

    $http.get("app/model/users.json").then(function (response) {
        $scope.users = [];
        for (var i = 0; i < response.data.length; i++) {
            $scope.users.push(new User(response.data[i]));
        }
        //console.log(JSON.stringify($scope.users));
    },
function(response) {
    console.log("Error!!! " + response.statusText);
});

    $scope.failedAttempt = false;

    $scope.login = function() {
        var user = getLoggedInUser();
        if (user != null) {
            activeUser.login(user);
            $uibModalInstance.close("Logged-in");
            $location.path("/vision")
        } else {
            $scope.failedAttempt = true;
        }




        //console.log($scope.email + " " + $scope.password)
    }

    var getLoggedInUser = function() {
        for (var i = 0; i < $scope.users.length; i++) {
            if ($scope.users[i].email === $scope.email && $scope.users[i].password === $scope.password) {
                return $scope.users[i];
            }
        }
        return null;
    }

    $scope.dismiss = function () {
        $uibModalInstance.close("User dismissed");
    }
});
