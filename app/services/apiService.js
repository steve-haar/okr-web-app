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
			getDepartmentsByCompanyId: getDepartmentsByCompanyId,
			getAssignments: getAssignments,
			putCompanyObjective: putCompanyObjective,
			getObjectiveAssociations: getObjectiveAssociations,
			getObjectiveAssociationsById: getObjectiveAssociationsById,
			getObjectiveAssociationsByObjectiveId: getObjectiveAssociationsByObjectiveId,
			getEmployeesByDepartment: getEmployeesByDepartment,
			getEmployeesByDepartmentAndId: getEmployeesByDepartmentAndId,
			getEmployees: getEmployees,
			getEmployeeById: getEmployeeById,
			getKeyResults: getKeyResults,
			getKeyResultsByID: getKeyResultsByID,
			//getKeyResultsByCompanyIDCompanyObjID: getKeyResultsByCompanyIDCompanyObjID,
			//getKeyResultsByCompanyIDCompanyObjIDKeyID: getKeyResultsByCompanyIDCompanyObjIDKeyID,
			//getKeyResultsByCompanyIDDeptID: getKeyResultsByCompanyIDDeptID,
			//getKeyResultsByCompanyIDDeptIDKeyID: getKeyResultsByCompanyIDDeptIDKeyID,
			deleteObjectiveAssociationsById: deleteObjectiveAssociationsById,
			deleteObjectiveAssociationsByObjectiveAssociationId: deleteObjectiveAssociationsByObjectiveAssociationId,
			deleteCompanyById: deleteCompanyById,
			deleteCompanyObjectivesById: deleteCompanyObjectivesById,
			deleteEmployeeById: deleteEmployeeById,
			deleteEmployeeByAllId: deleteEmployeeByAllId,
			deleteEmployeeByDepartmentId: deleteEmployeeByDepartmentId,
			deleteDepartmentById: deleteDepartmentById,
			postCompany: postCompany
			
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
			return $http.get(baseUrl + '/companies/' + id + '/company-objectives/?include=objectiveAssociations,objectiveAssociations.departmentObjective')
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
		function getDepartmentsByCompanyId(id){
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
			return $http.get(baseUrl+ '/key-results/' + id)
				.then(function(response){
					return response.data;
				});
		}

		/* This functionality has been removed from the API
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
		*/ 
		
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
		function getEmployees() {
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
		
		
		//POSTS
		function postCompany(newObj){
			return $http.post(baseUrl + '/companies', newObj)
			.then(funtion(response))
		}
		
		
		//PUTS

		function putCompanyObjective(updatedObj){
			return $http.put(baseUrl + '/companies/' + updatedObj.companyId + '/company-objectives/' + updatedObj.id, updatedObj)
					.then(function(response){
						return response.data;
						});
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
		function deleteEmployeeById(id) {
			return $http.delete(baseUrl + '/employees/' + id)
			.then(function(response) {
				return;
			})
		}
		function deleteEmployeeByAllId(company, dept, emp) {
			return $http.delete(baseUrl + '/companies/' + company + '/departments/' + dept + '/employees/' + emp)
			.then(function(response) {
				return;
			})
		}
		function deleteEmployeeByDepartmentId(company, dept) {
			return $http.delete(baseUrl + '/companies/' + company + '/departments/' + dept + '/employees')
			.then(function(response) {
				return;
			})
		}
		function deleteDepartmentById(companyId, deptartmentId){
			return $http.delete(baseUrl + '/companies/' + companyId + '/departments/' + deptartmentId)
			.then(function(response){
				return;
			})
		}
	}
}());
