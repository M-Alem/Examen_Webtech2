var app = angular.module('App', ['ngRoute'])

app.config(function($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'assets/views/home.html',
                controller: 'homeCtrl'
            })
            .when('/actor', {
                templateUrl: 'assets/views/persons.html',
                controller: 'actorCtrl'
            })
            .otherwise({
                redirectTo: '/home'
            });
    })
    
	app.controller('MainController', ['$scope', function($scope) {}])
