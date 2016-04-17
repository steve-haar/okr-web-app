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

	.when('/companies/:companyId', {
		templateUrl: 'app/views/company-objectives.html',
		controller: 'CompanyObjectivesCtrl',
		controllerAs: 'vm'
	})

	.when('/companies/:companyId/departments/:departmentId', {
		templateUrl: 'app/views/department-objectives.html',
		controller: 'DepartmentObjectivesCtrl',
		controllerAs: 'vm'
	})


	.when('/companies/:companyId/company-objective/create', {
		templateUrl: 'app/views/create-edit-company-objective.html',
		controller: 'CreateCompanyObjectiveCtrl',
		controllerAs: 'vm'
	})

	.when('/demo', {
		templateUrl: 'app/views/demo.html',
		controller: 'MainCtrl',
		controllerAs: 'main'
	})

	.otherwise({
		redirectTo: '/login'
	});

	/*$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});*/
}]);
