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
		vm.keyResultId = "Key Result Id";
		vm.companyObjectiveId = "Company Objective Id"
    vm.getCompany = getCompany;
		vm.getDepartments = getDepartments;
		vm.getCompanyObjectivesById = getCompanyObjectivesById;
		vm.getDepartmentObjectivesById = getDepartmentObjectivesById;
		vm.getAssignments = getAssignments;
		vm.putCompanyObjective = putCompanyObjective;
		vm.getObjectiveAssociationsById = getObjectiveAssociationsById;
		vm.getObjectiveAssociations = getObjectiveAssociations;
		vm.getObjectiveAssociationsByObjectiveId = getObjectiveAssociationsByObjectiveId;
		vm.getEmployeesByDepartment = getEmployeesByDepartment;
		vm.getEmployeesByDepartmentAndId = getEmployeesByDepartmentAndId;
		vm.getEmployees = getEmployees;
		vm.getEmployeeById = getEmployeeById;
		vm.getKeyResults = getKeyResults;
		vm.getKeyResultsByID = getKeyResultsByID;
		vm.getKeyResultsByCompanyIDCompanyObjID = getKeyResultsByCompanyIDCompanyObjID;
		vm.getKeyResultsByCompanyIDCompanyObjIDKeyID = getKeyResultsByCompanyIDCompanyObjIDKeyID;
		vm.getKeyResultsByCompanyIDDeptID = getKeyResultsByCompanyIDDeptID;
		vm.getKeyResultsByCompanyIDDeptIDKeyID = getKeyResultsByCompanyIDDeptIDKeyID;
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
			//Fields will contain current object values. All values are overwritten.
			//id may not be changeable.
			var updatedObj = {
				companyId: "vm.companyId",
				company: "vm.company",
				id: "vm.id",
				title: "vm.title",
				description: "vm.description",
				percentage: "vm.percentage",
				estimatedCompletionDate: "vm.estimatedCompletionDate",
				keyResults: "vm.keyResults",
				objectiveAssociations: "vm.objectiveAssociations"
			};
			
			apiService
				.putCompanyObjective(updatedObj)
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
