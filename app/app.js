var coachApp = angular.module("coachApp", ["ngRoute", "ngAnimate", "ui.bootstrap"]);

coachApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/home/home.html",
            controller: "homeCtrl"
        })
        // .when("/targets", {
        //     templateUrl: "app/target/targetsGallery.html",
        //     controller: "targetsGalleryCtrl"
        // })
        // .when("/targets/:targetIndex", {
        //     templateUrl: "app/targets/targetDetails.html",
        //     controller: "targetDetailsCtrl"
        // })
        // .when("/newTarget", {
        //     templateUrl: "app/targets/newTarget.html",
        //     controller: "newTargetCtrl"
        // })
        // .when("/vision", {
        //     templateUrl: "app/vision/vision.html",
        //     controller: "visionCtrl"
        // })
        //  .when("/vision/:visionIndex", {
        //     templateUrl: "app/vision/visionDetails.html",
        //     controller: "visionDetailsCtrl"
        // })
        // .when("/vision/newVision", {
        //     templateUrl: "app/vision/newVision.html",
        //     controller: "newVisionCtrl"
        // })

});