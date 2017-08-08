// Service that manges the active user
coachApp.factory("delAssure", function () {

 delAssure = function() {
        $uibModal.open({
            templateUrl: "app/services/delAssure/delAssure.html",
            controller: "delAssureCtrl"
        })
    }


});