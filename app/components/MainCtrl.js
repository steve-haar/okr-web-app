(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainCtrl', ['apiService', MainCtrl]);

    function MainCtrl(apiService) {
        var vm = this;
		
		//add functions here to be used
		vm.company = {};
		vm.companyId = 1;
		vm.employeeId = 9999;
		vm.departmentId = 1;
		vm.objectiveAssociationsId = 1;
		vm.objectiveId = 65535;
        vm.getCompany = getCompany;
		vm.getDepartments = getDepartments;
		vm.getCompanyObjectivesById = getCompanyObjectivesById;
		vm.getDepartmentObjectivesById = getDepartmentObjectivesById;
		vm.getAssignments = getAssignments;
		vm.putObjective = putObjective;
		vm.getObjectiveAssociationsById = getObjectiveAssociationsById;
		vm.getObjectiveAssociations = getObjectiveAssociations;
		vm.getObjectiveAssociationsByObjectiveId = getObjectiveAssociationsByObjectiveId;
		vm.getEmployeesByDepartment = getEmployeesByDepartment;
		vm.getEmployeesByDepartmentAndId = getEmployeesByDepartmentAndId;
		vm.getEmployee = getEmployee;
		vm.getEmployeeById = getEmployeeById;
		vm.deleteObjectiveAssociationsById = deleteObjectiveAssociationsById;
		vm.deleteObjectiveAssociationsByObjectiveAssociationId = deleteObjectiveAssociationsByObjectiveAssociationId;
		vm.deleteCompanyById = deleteCompanyById;
		vm.deleteCompanyObjectivesById = deleteCompanyObjectivesById;
		vm.deleteEmployeeById = deleteEmployeeById;
		vm.deleteEmployeeByAllId = deleteEmployeeByAllId;
		vm.deleteEmployeesByDepartment = deleteEmployeesByDepartment;
		
		//functions can be called above their definition, as shown here
		//getCompany();
		
		
		//define functions here with apiService call. uses Request Url from swagger api.
		function getCompany(){
			apiService
				.getCompany(vm.companyId, 'departments.employees')
				.then(function(data) {
					vm.company = data;
				});
		}
		function getCompanyObjectivesById(){
			apiService
				.getCompanyObjectivesById(vm.companyId)
				.then(function(data) {
					vm.companyObjectives = data;
				});
		}
		
		function getDepartmentObjectivesById(){
			apiService
				.getDepartmentObjectivesById(vm.companyId)
				.then(function(data) {
					vm.departmentObjectives = data;
				});
		}
		
		function getDepartments(){
			apiService
				.getDepartments(vm.companyId)
				.then(function(data){
					vm.departments = data;
				});
		}
		
		function getAssignments(){
			apiService
				.getAssignments()
				.then(function(data){
					vm.assignments = data;
				});
		}
		
		function putObjective(){
			apiService
				.putObjective(vm.companyId, vm.objId)
				.then(function(data) {
					vm.newObjective = data;
				});
		}

		function getObjectiveAssociationsById(){
			apiService
				.getObjectiveAssociationsById(vm.companyId)
				.then(function(data){
					vm.objectiveAssociations = data;
				});
		}
		function getObjectiveAssociations(){
			apiService
				.getObjectiveAssociations
				.then(function(data){
					vm.objectiveAssociations = data;
				});
		}
		function getObjectiveAssociationsByObjectiveId(){
			apiService
				.getObjectiveAssociationsByObjectiveId
				.then(function(data){
					vm.objectiveAssociations = data;
				});
		}
		function getEmployeesByDepartment() {
			apiService
			.getEmployeesByDepartment
			.then(function(data) {
				vm.Employee = data;
			})
		}
		function getEmployeesByDepartmentAndId() {
				apiService
			.getEmployeesByDepartmentAndId
			.then(function(data) {
				vm.Employee = data;
			})
		}
		function getEmployee() {
				apiService
			.getEmployee
			.then(function(data) {
				vm.Employee = data;
			})
		}
		function getEmployeeById() {
				apiService
			.getEmployeeById
			.then(function(data) {
				vm.Employee = data;
			})
		}
		
		function deleteObjectiveAssociationsById() {
			apiService.deleteObjectiveAssociationsById(vm.companyId, vm.departmentId);
		}
		function deleteObjectiveAssociationsByObjectiveAssociationId() {
			apiService.deleteObjectiveAssociationsByObjectiveAssociationId(vm.objectiveAssociationsId);
		}
		function deleteCompanyById(){
			apiService
				.deleteCompanyById(vm.companyId);
		}
		function deleteCompanyObjectivesById(){
			apiService
				.deleteCompanyObjectivesById(vm.companyId, vm.objectiveId);
		}
		function deleteEmployeeById() {
			apiService
			.deleteEmployeeById(vm.employeeId);
		}
		function deleteEmployeeByAllId() {
			apiService
			.deleteEmployeeByAllId(vm.companyId, vm.departmentId, vm.employeeId);
		}
		function deleteEmployeesByDepartment() {
			apiService
			.deleteEmployeesByDepartment(vm.companyId, vm.departmentId);
		}
    }
}());