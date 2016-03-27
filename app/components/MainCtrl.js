(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainCtrl', ['apiService', MainCtrl]);

    function MainCtrl(apiService) {
        var vm = this;

		vm.company = {};
		vm.companyId = 1;
        vm.getCompany = getCompany;
		vm.getCompanyObjectives = getCompanyObjectives;
		
		getCompany();
		
		function getCompany(){
			apiService
				.getCompany(vm.companyId, 'departments.employees')
				.then(function(data) {
					vm.company = data;
				});
		}
		
		function getCompanyObjectives(){
			apiService
				.getCompanyObjectives(vm.companyId)
				.then(function(data) {
					vm.companyObjectives = data;
				});
		}
    }
}());