(function() {
	'use strict';
	angular.module('app.portfolio')
	.config(['$routeProvider', function($routeProvider){
		$routeProvider
		.when('/',{templateUrl:'app/views/landing.html',controller:'landingController as LC'})
		.otherwise({redirectTo:'/404'});
	}]);
})();