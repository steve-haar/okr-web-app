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
        vm.getCompany = getCompany;
		vm.getDepartments = getDepartments;
		vm.getCompanyObjectivesById = getCompanyObjectivesById;
		vm.getDepartmentObjectivesById = getDepartmentObjectivesById;
		vm.getAssignments = getAssignments;
		vm.putObjective = putObjective;
		
		
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
    }
}());