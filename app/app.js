var coachApp = angular.module("coachApp", ["ngRoute", "ngAnimate", "ui.bootstrap"]);

coachApp.config(function ($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "app/components/home/home.html",
        controller: "homeCtrl"
    })
        .when("/targets", {
            templateUrl: "app/components/target/viewTarget/viewTarget.html",
            controller: "viewTargetCtrl"
        })
        
        .when("/targets/newTarget", {
            templateUrl: "app/components/target/newTarget/newTarget.html",
            controller: "newTargetCtrl"
        })
         .when("/targets/:targetIndex", {
             templateUrl: "app/components/target/updtTarget/updtTarget.html",
             controller: "targetUpdtCtrl"
 })
         .when("/visions", {
             templateUrl: "app/components/vision/viewVision/viewVision.html",
             controller: "visionViewCtrl"
         })
       
        .when("/visions/newVision", {
            templateUrl: "app/components/vision/newVision/newVision.html",
            controller: "newVisionCtrl"
        })
  .when("/visions/:visionIndex", {
            templateUrl: "app/components/vision/updtVision/updtVision.html",
            controller: "visionUpdtCtrl"
        })
        
        .when("/:crslIndex ", {
            templateUrl: "app/components/home/intro-coach/intro.html",
            controller: "introCtrl"
        })
});