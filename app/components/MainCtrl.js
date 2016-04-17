(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainCtrl', ['apiService', MainCtrl]);

    function MainCtrl(apiService) {
        var vm = this;

		vm.getCompany = getCompany;
		vm.getCompanies = getCompanies;
		vm.getCompanyObjectives = getCompanyObjectives;
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
		vm.putCompany = putCompany;
		vm.putCompanyObjective = putCompanyObjective;
		vm.putDepartmentObjective = putDepartmentObjective;
		vm.putDepartment = putDepartment;
		vm.putEmployee = putEmployee;
		vm.putKeyResult = putKeyResult;
		vm.postCompany = postCompany;
		vm.postAssignment = postAssignment;
		vm.postCompanyObjective = postCompanyObjective;
		vm.postDepartmentObjective = postDepartmentObjective;
		vm.postDepartment = postDepartment;
		vm.postEmployee = postEmployee;
		vm.postKeyResult = postKeyResult;
		vm.deleteObjectiveAssociationsById = deleteObjectiveAssociationsById;
		vm.deleteObjectiveAssociationsByObjectiveAssociationId = deleteObjectiveAssociationsByObjectiveAssociationId;
		vm.deleteCompanyById = deleteCompanyById;
		vm.deleteCompanyObjectivesById = deleteCompanyObjectivesById;
		vm.deleteEmployeeById = deleteEmployeeById;
		vm.deleteEmployeeByAllId = deleteEmployeeByAllId;
		vm.deleteEmployeesByDepartment = deleteEmployeesByDepartment;
		vm.deleteDepartmentById = deleteDepartmentById;
		
		

		
		//GETS
		
		function getCompany(){
			apiService
				.getCompany(vm.companyId, 'departments.employees')
				.then(function(data) {
					vm.company = data;
				});
		}
		function getCompanies() {
			apiService
			.getCompanies()
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
		function getCompanyObjectives(){
			apiService
				.getCompanyObjectives()
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
		
		
		//PUTS
		
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

		
		//POSTS
		
		function postCompany(){
			var newObj = {
			"id": vm.companyId,
			"name": vm.name
			};
			apiService
				.postCompany(newObj)
				.then(function(data) {
				});
		}
		function postAssignment() {
			var newObj = {
				"id": vm.assignmentId,
				"departmentId": vm.departmentId,
				"companyId": vm.companyId,
				"departmentObjectiveId": vm.departmentObjectiveId,
				"employeeId": vm.employeeId,
				"month": vm.month
			};
			apiService
				.postAssignment(newObj)
				.then(function(data) {
				});
		}
		function postCompanyObjective() {
			var newObj = {
				"companyId": vm.companyId,
				"id": vm.companyObjectiveId,
				"title": vm.title,
				"description": vm.description,
				"percentage": vm.percentage
			};
			apiService
				.postCompanyObjective(newObj)
				.then(function(data) {
				});
		}
		function postDepartmentObjective() {
			var newObj = {
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
				.postDepartmentObjective(newObj)
				.then(function(data) {
				});
		}
		function postDepartment() {
			var newObj = {
				"id": vm.id,
				"companyId": vm.companyId,
				"name": vm.name,
				"company": vm.company,
				"employees": vm.employees,
				"departmentObjectives": vm.departmentObjectives
			};
			apiService
				.postDepartment(newObj)
				.then(function(data) {
				});
		}
		function postEmployee() {
			var newObj = {
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
				.postEmployee(newObj)
				.then(function(data) {
				});
		}
		function postKeyResult() {
			var newObj = {
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
				.postKeyResult(newObj)
				.then(function(data) {
				});
		}
		
		
		//DELETES
		
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
