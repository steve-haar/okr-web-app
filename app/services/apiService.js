(function() {
	'use strict';

	angular
		.module('app')
		.factory('apiService', ['$http', apiService]);

	function apiService($http) {
		var baseUrl = 'https://vintageokrapi.azurewebsites.net';
		
		//export function here
		return {
			getCompanies: getCompanies,
			getCompany: getCompany,
			getUsers: getUsers,
			getCompanyObjectivesById: getCompanyObjectivesById,
			getDepartmentObjectivesById: getDepartmentObjectivesById,
			getDepartments: getDepartments,
			getAssignments: getAssignments,
			putObjective: putObjective
		};
		
		//define functions here
		
		//GETS
		
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
		
		function getCompanyObjectivesById(id) {
			return $http.get(baseUrl + '/companies/' + id + '/company-objectives')
					.then(function(response) {
						return response.data;
					});
		}
		
		function getDepartmentObjectivesById(id){
			return $http.get(baseUrl + '/companies/' + id + '/department-objectives')
					.then(function(response) {
						return response.data;
					});
		}
		
		function getDepartments(id){
			return $http.get(baseUrl + '/companies/' + id + '/departments')
					.then(function(response){
						return response.data;
					});
		}
		
		function getAssignments(){
			return $http.get(baseUrl + '/assignments')
					.then(function(response){
						return response.data;
					});
		}
	
		//POSTS
		
		//PUTS
		
		function putObjective(companyId, objId){
			return $http.get(baseUrl + '/companies' + companyId + '/company-objectives' + objId)
					.then(function(response){
						return response.data;
					});
		}
		
		//DELETES
		
	}
}());