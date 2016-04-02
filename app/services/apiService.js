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
			putObjective: putObjective,
			getObjectiveAssociations: getObjectiveAssociations,
			getObjectiveAssociationsById: getObjectiveAssociationsById,
			getObjectiveAssociationsByObjectiveId: getObjectiveAssociationsByObjectiveId,
			getEmployeesByDepartment: getEmployeesByDepartment,
			getEmployeesByDepartmentAndId: getEmployeesByDepartmentAndId,
			getEmployee: getEmployee,
			getEmployeeById: getEmployeeById,
			deleteObjectiveAssociationsById: deleteObjectiveAssociationsById,
			deleteObjectiveAssociationsByObjectiveAssociationId: deleteObjectiveAssociationsByObjectiveAssociationId,
			deleteCompanyById: deleteCompanyById,
			deleteCompanyObjectivesById: deleteCompanyObjectivesById
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
			return $http.put(baseUrl + '/companies' + companyId + '/company-objectives' + objId)
					.then(function(response){
						return response.data;
						});
		}
		function getObjectiveAssociationsById(id) {
			return $http.get(baseUrl + '/companies/' + id + '/objective-associations')
			.then(function(response) {
				return response.data;
			})
		}
		function getObjectiveAssociations() {
			return $http.get(baseUrl + '/objective-associations')
			.then(function(response) {
				return response.data;
			})
		}
		function getObjectiveAssociationsByObjectiveId(id) {
			return $http.get(baseUrl + '/objective-associations/' + id)
			.then(function(response) {
				return response.data;
			})
		}
		function getEmployeesByDepartment(id, dept) {
			return $http.get(baseUrl + '/companies/' + id + '/departments/' + dept)
			.then(function(response) {
				return response.data;
			})
		}
		function getEmployeesByDepartmentAndId(id, dept, emp) {
			return $http.get(baseUrl + '/companies/' + id + '/departments/' + dept + '/employees/' + emp)
			.then(function(response) {
				return response.data;
			})
		}
		function getEmployee() {
			return $http.get(baseUrl + '/employees/')
			.then(function(response) {
				return response.data;
			})
		}
		function getEmployeeById(id) {
			return $http.get(baseUrl + '/employees/' + id)
			.then(function(response) {
				return response.data;
			})
		}
		
		//DELETES
		function deleteObjectiveAssociationsById(id, obj) {
			return $http.delete(baseUrl + '/companies/' + id + '/objective-associations/' + obj)
			.then(function(response) {
				return;
			})
		}
		function deleteObjectiveAssociationsByObjectiveAssociationId(id) {
			return $http.delete(baseUrl + '/objective-associations/' + id)
			.then(function(response) {
				return;
			})
		}
				
		function deleteCompanyById(id){
			return $http.delete(baseUrl + '/companies/' + id)
			.then(function(response){
				return;
			})
		}
		
		function deleteCompanyObjectivesById(companyId, objectiveId){
			return $http.delete(baseUrl + '/companies/' + companyId + '/company-objectives/' + objectiveId)
			.then(function(response){
				return;
			})
		}
		
	}
}());