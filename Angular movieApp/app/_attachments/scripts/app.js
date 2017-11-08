var app = angular.module('App', ['ngRoute'])

app.config(function($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'assets/views/home.html',
                controller: 'homeCtrl'
            })
            .when('/actor', {
                templateUrl: 'assets/views/actor.html',
                controller: 'actorCtrl'
            })
            .otherwise({
                redirectTo: '/home'
            });
    })
    
    
	app.controller('homrCtrl', ['$scope', function($scope, filmSrv) {
		$('#searchButton').on('click', function(e) {
			
			var actor = $('#actorText').val();
			$scope.movies = filmSrv.getMovies(actor);

		})
	}])
	
	app.controller('actorCtrl', ['$scope', function($scope) {}])
	
	
	 app.service('filmSrv', function($http, $q) {
    		his.getMovies = function(actor) {
	    		var q = $q.defer();
	    		var url = 'http://www.theimdbapi.org/api/find/person?name=' + encodeURIComponent(actor) + '&format=json';
	    	var movies[{
	    		var list[];
	            for (var j = 0; j < movies.length; j++) {
	                 if (movies[j].name === actor.name) {
	                     list.push(movie[j]);
	                 }
	            }*/
	            return list;
	    	}]

	    		$http.get(url)
	    			.then(function(data){
	    				q.resolve(data);
	    			}, function error(err) {
	    				q.reject(err);
	    			});
	    			
	    			return q.promise;
	    		};
    });
