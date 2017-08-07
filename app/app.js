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
        // .when("/vision", {
        //     templateUrl: "app/vision/vision.html",
        //     controller: "visionCtrl"
        // })
        //  .when("/vision/:visionIndex", {
        //     templateUrl: "app/vision/visionDetails.html",
        //     controller: "visionDetailsCtrl"
        // })
        .when("/vision/newVision", {
            templateUrl: "app/components/vision/newVision/newVision.html",
            controller: "newVisionCtrl"
        })

});

// TODO: Delete this TESTINGGGGGGGGGG please update
// coachApp.controller("TestCtrl", function ($scope, User, activeUser, Recipe, recipes) {
//     var plainUser = {
//         "email": "Aharoni@Aharoni.com",
//         "password": "a123",
//         "firstName": "Aharoni",
//         "lastName": "Levi",
//         // "data": "Aharoni-data.json" יש 2 קבצי מידע: מטרות וחזון. איך נצרף ?
//         "targets":
//         "visions":
//     }

    // var user = new User(plainUser);

    // console.log(JSON.stringify(user));
    // console.log(activeUser.isLoggedIn());
    // activeUser.login(user);
    // console.log(JSON.stringify(activeUser.get()));
    // console.log(activeUser.isLoggedIn());
    // activeUser.logout();
    // console.log(activeUser.isLoggedIn());


    // var plainRecipe = {
    //     "name": "Shakshuka",
    //     "description": "An amazing egg dish",
    //     "duration": 40,
    //     "ingrediants": "Eggs, Tomattos, Oil",
    //     "steps": "Heat the pan, put the eggs",
    //     "imageUrl": "http://scontent.cdninstagram.com/t51.2885-15/s480x480/e35/c0.37.1080.1080/17438558_192469144582319_1152478392830918656_n.jpg?ig_cache_key=MTQ3NTg0MDMxNjE4ODA0ODY4NA%3D%3D.2.c"
    // }
