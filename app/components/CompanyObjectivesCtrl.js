(function() {
  'use strict';

  angular
    .module('app')
    .controller('CompanyObjectivesCtrl', ['$location', 'apiService', CompanyObjectivesCtrl]);

  function CompanyObjectivesCtrl($location, apiService) {
    var vm = this;

    vm.companyId = 1;
    vm.companyObjectives = {};
    vm.companyDepartments = {};

    getCompanyObjectivesById(vm.companyId);
    getCompanyDepartmentsById(vm.companyId);

    function getCompanyObjectivesById(id){
      apiService
        .getCompanyObjectivesById(id)
        .then(function(data) {
          vm.companyObjectives = data;
          console.log(data);
        });
    }

    function getCompanyDepartmentsById(id){
      apiService
        .getDepartmentObjectivesById(id)
        .then(function(data) {
          vm.companyDepartments = data;
          console.log(data);
        });
    }

  }
}());
