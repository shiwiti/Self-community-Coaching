// code for home page carousel detailed pages managing
coachApp.factory("Carousel", function () { //TODO add adequate json file
    function Carousel(plainObject) {
        this.name = plainObject.name;
        this.description = plainObject.description;
        this.imgUrl = plainObject.imgUrl;
    };

    return Carousel;
});


coachApp.controller("introCtrl", function ($scope,$location) {
    $scope.back = function() { //back to home page
        $location.path("/");
    }
});