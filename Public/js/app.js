var app = angular.module("growBike", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
    .when("/home", {
        templateUrl: "html/home.html",
        controller: "HomeController"
    })
    .when("/about", {
        templateUrl: "html/about.html",
        controller: "AboutController"
    })
    .when("/bikes", {
        templateUrl: "html/bikes.html",
        controller: "BikeController"
    })
    .otherwise({
        redirectTo: "/home"
    });
});