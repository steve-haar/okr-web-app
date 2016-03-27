(function() {
	'use strict';

	angular
		.module('app')
		.factory('apiService', ['$http', apiService]);

	function apiService($http) {
		var baseUrl = 'https://vintageokrapi.azurewebsites.net';

		return {
			getCompanies: getCompanies,
			getCompany: getCompany,
			getUsers: getUsers,
			getCompanyObjectives: getCompanyObjectives
		};

		function getCompanies() {
			return $http.get(baseUrl + '/companies')
					.then(function(response) {
						return response.data;
					});
		}
		
		function getCompany(id, includes) {
			return $http.get(baseUrl + '/companies/' + id + '?include=' + includes)
					.then(function(response) {
						return response.data;
					});
		}
		
		function getUsers() {
			return $http.get(baseUrl + '/users')
					.then(function(response) {
						return response.data;
					});
		}
		
		function getCompanyObjectives(id) {
			return $http.get(baseUrl + '/companies/' + id + '/company-objectives')
					.then(function(response) {
						return response.data;
					});
		}
		
		
	}
}());