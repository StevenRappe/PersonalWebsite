
    
var app = angular.module('customersApp', ['ngRoute']);
   
app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'burrito',
                templateUrl: 'burrito.html'
            })
            .when('/taco.html', {
                controller: 'taco',
                templateUrl: 'taco.html'
            })
            .when('/burrito.html', {
                controller: 'burrito',
                templateUrl: 'burrito.html'
            });
            //.otherwise( { redirectTo: '/burrito.html' } );
});