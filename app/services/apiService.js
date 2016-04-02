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
			getKeyResults: getKeyResults,
			getKeyResultsByID: getKeyResultsByID,
			getKeyResultsByCompanyIDCompanyObjID: getKeyResultsByCompanyIDCompanyObjID,
			getKeyResultsByCompanyIDCompanyObjIDKeyID: getKeyResultsByCompanyIDCompanyObjIDKeyID,
			getKeyResultsByCompanyIDDeptID: getKeyResultsByCompanyIDDeptID,
			getKeyResultsByCompanyIDDeptIDKeyID: getKeyResultsByCompanyIDDeptIDKeyID
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
		
		function getKeyResults(){
			return $http.get(baseUrl +'/key-results')
				.then(function(response) {
					return response.data;
				});
		}
		function getKeyResultsByID(id){
			return $http.get(baseUrl+ '/key-results/'+id)
				.then(function(response){
					return response.data;
				});
		}
		
				function getKeyResultsByCompanyIDCompanyObjID(companyId,companyObjectiveId){
			return $http.get(baseUrl+'/companies/'+companyId+'/companyObjectives/'+companyObjectiveId+'/key-results')
			.then(function(response){
				return response.data;
			});
		}
		function getKeyResultsByCompanyIDCompanyObjIDKeyID(companyId, companyObjectiveId,id){
			return $http.get(baseUrl+'/companies/'+companyId+'/companyObjectives/'+ companyObjectiveId+'/key-results/'+id)
			.then(function(response){
				return response.data;
			});
		}
		
		function getKeyResultsByCompanyIDDeptID(companyId,departmentObjectiveId){
			return $http.get(baseUrl+'/companies/'+companyId+'/departmentObjectives/'+departmentObjectiveId+'/key-results/')
			.then(function(response){
				return response.data;
			});
		}
		
		function getKeyResultsByCompanyIDDeptIDKeyID(companyId, departmentObjectiveId,id){
			return $http.get(baseUrl+'/companies/'+companyId+'/departmentObbjectives/'+departmentObjectiveId+'/key-results/'+id)
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
		//PUTS
		
		
		//POSTS
		
		
		//DELETES
		
		
	}
}());