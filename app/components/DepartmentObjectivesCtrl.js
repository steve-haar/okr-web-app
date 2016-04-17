(function() {
  'use strict';

  angular
    .module('app')
    .controller('DepartmentObjectivesCtrl', ['$location', '$routeParams', 'apiService', DepartmentObjectivesCtrl]);

  function DepartmentObjectivesCtrl($location, $routeParams, apiService) {
    var vm = this;

    vm.companyId = 1;
    vm.departmentId = $routeParams.departmentId;
    vm.department = {};
    vm.departmentObjectives = {};

    getDepartmentById(vm.companyId, vm.departmentId);
    getDepartmentObjectivesById(vm.companyId, vm.departmentId);

    function getDepartmentById(companyId, departmentId) {
      apiService
        .getDepartmentById(companyId, departmentId)
        .then(function(data) {
          vm.department = data;
          console.log(data);
        });
    }

    function getDepartmentObjectivesById(companyId, departmentId) {
      apiService
        .getDepartmentObjectivesById(companyId, departmentId)
        .then(function(data) {
          vm.departmentObjectives = data;
          console.log(data);
        });
    }
  }
}());
