
var app = angular.module('app', ['ngRoute']);
   
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'homeController'
        })
        .when('/profile.html', {
            controller: 'profileController',
            //controller: 'homeController',
            templateUrl: 'app/views/profile.html'
        })
        .when('/skillSet.html', {
            controller: 'skillSetController',
            templateUrl: 'app/views/skillSet.html'
        })
        .when('/experience.html', {
            controller: 'experienceController',
            templateUrl: 'app/views/experience.html'
        })
        .when('/education.html', {
            controller: 'educationController',
            templateUrl: 'app/views/education.html'
        })
        .otherwise({
            controller: 'profileController',
            templateUrl: 'app/views/profile.html'
        })
});