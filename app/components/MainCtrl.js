(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainCtrl', ['apiService', MainCtrl]);

    function MainCtrl(apiService) {
        var vm = this;

		//add functions here to be used
		//vm.company = {};
		/*
		vm.companyId = "Company Id";
		vm.id = "id";
		vm.title = "Title";
		vm.description = "description";
		vm.percentage = .25;
		vm.estimatedCompletionDate = "2018-12-10T00:00:00";
		vm.name = "(company) Name";
		vm.employeeId = "Employee Id";
		vm.departmentId = "Department Id";
		vm.objectiveAssociationsId = "Obj Associations Id";
		vm.objectiveId = "Objective Id";
		vm.keyResultId = "Key Result Id";
		vm.companyObjectiveId = "Company Objective Id";
		vm.month = "Month (int)";
		vm.departmentObjectiveId = "department objective id";
		vm.firstName = "first name";
		vm.lastName = "last name";
		vm.email = "email@address.com";
		*/
		vm.getCompany = getCompany;
		vm.getDepartments = getDepartments;
		vm.getCompanyObjectivesById = getCompanyObjectivesById;
		vm.getDepartmentObjectivesById = getDepartmentObjectivesById;
		vm.getAssignments = getAssignments;
		vm.getObjectiveAssociationsById = getObjectiveAssociationsById;
		vm.getObjectiveAssociations = getObjectiveAssociations;
		vm.getObjectiveAssociationsByObjectiveId = getObjectiveAssociationsByObjectiveId;
		vm.getEmployeesByDepartment = getEmployeesByDepartment;
		vm.getEmployeesByDepartmentAndId = getEmployeesByDepartmentAndId;
		vm.getEmployees = getEmployees;
		vm.getEmployeeById = getEmployeeById;
		vm.getKeyResults = getKeyResults;
		vm.getKeyResultsByID = getKeyResultsByID;
		//vm.getKeyResultsByCompanyIDCompanyObjID = getKeyResultsByCompanyIDCompanyObjID;
		//vm.getKeyResultsByCompanyIDCompanyObjIDKeyID = getKeyResultsByCompanyIDCompanyObjIDKeyID;
		//vm.getKeyResultsByCompanyIDDeptID = getKeyResultsByCompanyIDDeptID;
		//vm.getKeyResultsByCompanyIDDeptIDKeyID = getKeyResultsByCompanyIDDeptIDKeyID;
		vm.putCompany = putCompany;
		vm.putCompanyObjective = putCompanyObjective;
		vm.putDepartmentObjective = putDepartmentObjective;
		vm.putDepartment = putDepartment;
		vm.putEmployee = putEmployee;
		vm.putKeyResult = putKeyResult;
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

		function putCompanyObjective(){
			var updatedObj = {
				"companyId": vm.companyId,
				"company": vm.company,
				"id": vm.id,
				"title": vm.title,
				"description": vm.description,
				"percentage": vm.percentage,
				"estimatedCompletionDate": vm.estimatedCompletionDate,
				"keyResults": vm.keyResults,
				"objectiveAssociations": vm.objectiveAssociations
			};
			
			apiService
				.putCompanyObjective(updatedObj)
				.then(function(data) {
				});
		}
		
		function putCompany(){
			var updatedObj = {
				"id": vm.id,
				"name": vm.name
			};
			
			apiService
				.putCompany(updatedObj)
				.then(function(data) {
				});
		}
		
		function putDepartmentObjective(){
			var updatedObj = {
				"companyId": vm.companyId,
				"departmentId": vm.departmentId,
				"department": vm.department,
				"assignments": vm.assignments,
				"id": vm.id,
				"title": vm.title,
				"description": vm.description,
				"percentage": vm.percentage,
				"estimatedCompletionDate": vm.estimatedCompletionDate,
				"keyResults": vm.keyResults,
				"objectiveAssociations": vm.objectiveAssociations
			};
			
			apiService
				.putDepartmentObjective(updatedObj)
				.then(function(data) {
				});
		}
		
		function putDepartment(){
			var updatedObj = {
				"id": vm.id,
				"companyId": vm.companyId,
				"name": vm.name,
				"company": vm.company,
				"employees": vm.employees,
				"departmentObjectives": vm.departmentObjectives
			};
			
			apiService
				.putDepartment(updatedObj)
				.then(function(data) {
				});
		}

		function putEmployee(){
			var updatedObj = {
				"id": vm.id,
				"companyId": vm.companyId,
				"departmentId": vm.departmentId,
				"firstName": vm.firstName,
				"lastName": vm.lastName,
				"emailAddress": vm.email,
				"department": vm.department,
				"assignments": vm.assignments
			};
			
			apiService
				.putEmployee(updatedObj)
				.then(function(data) {
				});
		}
		
		function putKeyResult(){
			var updatedObj = {
				"id": vm.id,
				"companyId": vm.companyId,
				"departmentId": vm.departmentId,
				"companyObjectiveId": vm.companyObjectiveId,
				"departmentObjectiveId": vm.departmentObjectiveId,
				"title": vm.title,
				"companyObjective": vm.companyObjective,
				"departmentObjective": vm.departmentObjective
			};
			
			apiService
				.putKeyResult(updatedObj)
				.then(function(data) {
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
		function getEmployees() {
			apiService
				.getEmployees
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
				.getKeyResults()
				.then(function(data){
					vm.KeyResults = data;
				});
		}
				function getKeyResultsByID(){
			apiService
				.getKeyResultsByID(vm.keyResultId)
				.then(function(data){
					vm.KeyResults = data;
				});
		}
				function getKeyResultsByCompanyIDCompanyObjID(){
			apiService
				.getKeyResultsByCompanyIDCompanyObjID(vm.companyId, vm.companyObjectiveId)
				.then(function(data){
					vm.KeyResults = data;
				});
		}
				function getKeyResultsByCompanyIDCompanyObjIDKeyID(){
			apiService
				.getKeyResultsByCompanyIDCompanyObjIDKeyID(vm.companyId,vm.companyObjectiveId,vm.keyId)
				.then(function(data){
					vm.KeyResults = data;
				});
		}
				function getKeyResultsByCompanyIDDeptID(){
			apiService
				.getKeyResultsByCompanyIDDeptID(vm.companyId, vm.departmentId)
				.then(function(data){
					vm.KeyResults = data;
				});
		}
				function getKeyResultsByCompanyIDDeptIDKeyID(){
			apiService
				.getKeyResultsByCompanyIDDeptIDKeyID(vm.companyId, vm.departmentId,vm.keyId)
				.then(function(data){
					vm.KeyResults = data;
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
