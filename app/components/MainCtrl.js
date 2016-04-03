(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainCtrl', ['apiService', MainCtrl]);

    function MainCtrl(apiService) {
        var vm = this;
		
		//add functions here to be used
		vm.company = {};
		vm.companyId = "Company Id";
		vm.employeeId = "Employee Id";
		vm.departmentId = "Department Id";
		vm.objectiveAssociationsId = "Obj Associations Id";
		vm.objectiveId = "Objective Id";
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
		vm.getKeyResults = getKeyResults;
		vm.getKeyResultsByID = getKeyResultsByID;
		vm.getKeyResultByCompanyIDCompanyObjID = getKeyResultByCompanyIDCompanyObjID;
		vm.getKeyResultByCompanyIDCompanyObjIDKeyID = getKeyResultByCompanyIDCompanyObjIDKeyID;
		vm.getKeyResultByCompanyIDDeptID = getKeyResultByCompanyIDDeptID;
		vm.getKeyResultByCompanyIDDeptIDKeyID = getKeyResultByCompanyIDDeptIDKeyID;
		vm.deleteObjectiveAssociationsById = deleteObjectiveAssociationsById;
		vm.deleteObjectiveAssociationsByObjectiveAssociationId = deleteObjectiveAssociationsByObjectiveAssociationId;
		vm.deleteCompanyById = deleteCompanyById;
		vm.deleteCompanyObjectivesById = deleteCompanyObjectivesById;
		vm.deleteEmployeeById = deleteEmployeeById;
		vm.deleteEmployeeByAllId = deleteEmployeeByAllId;
		vm.deleteEmployeesByDepartment = deleteEmployeesByDepartment;
		vm.deleteDepartmentById = deleteDepartmentById;

		
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

			function getKeyResults(){
			apiService
				.getKeyResults(vm.companyId)
				.then(function(data){
					vm.getKeyResults = data;
			});
		}
				function getKeyResultsByID(){
			apiService
				.getKeyResultsByID(vm.companyId)
				.then(function(data){
					vm.getKeyResultsByID = data;
				});
		}
				function getKeyResultByCompanyIDCompanyObjID(){
			apiService
				.getKeyResultByCompanyIDCompanyObjID(vm.companyId, vm.companyObjectiveId)
				.then(function(data){
					vm.getKeyResultByCompanyIDCompanyObjID = data;
				});
		}
				function getKeyResultByCompanyIDCompanyObjIDKeyID(){
			apiService
				.getKeyResultByCompanyIDCompanyObjIDKeyID(vm.companyId,vm.companyObjectiveId,vm.keyId)
				.then(function(data){
					vm.getKeyResultByCompanyIDCompanyObjIDKeyID = data;
				});
		}
				function getKeyResultByCompanyIDDeptID(){
			apiService
				.getKeyResultByCompanyIDDeptID(vm.companyId, vm.departmentId)
				.then(function(data){
					vm.getKeyResultByCompanyIDDeptID = data;
				});
		}
				function getKeyResultByCompanyIDDeptIDKeyID(){
			apiService
				.getKeyResultByCompanyIDDeptIDKeyID(vm.companyId, vm.departmentId,vm.keyId)
				.then(function(data){
					vm.getKeyResultByCompanyIDDeptIDKeyID = data;
				});

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
		function deleteDepartmentById(){
			apiService
				.deleteDepartmentById(vm.companyId, vm.departmentId);
		}
    }
}());