angular.module('app', [
	'ngMaterial',
	'ngRoute'
])
.config(['$mdThemingProvider', function($mdThemingProvider){
	$mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('indigo');
}])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider

	.when('/login', {
		templateUrl: 'app/views/login.html',
		controller: 'LoginCtrl',
		controllerAs: 'vm'
	})

	.when('/company-objectives', {
		templateUrl: 'app/views/company-objectives.html',
		controller: 'CompanyObjectivesCtrl',
		controllerAs: 'vm'
	})

	.otherwise({
		redirectTo: '/login'
	});

	/*$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});*/
}]);
