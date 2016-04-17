(function() {
  'use strict';

  angular
    .module('app')
    .controller('CreateCompanyObjectiveCtrl', ['$location', '$routeParams', 'apiService', CreateCompanyObjectiveCtrl]);

  function CreateCompanyObjectiveCtrl($location, $routeParams, apiService) {
    var vm = this;

    vm.companyId = $routeParams.companyId;
    vm.departments = [];
    vm.viewCompanyObjectives = function(){ $location.path("/companies/" + vm.companyId) };

    getDepartmentsByCompanyId(vm.companyId);

    function getDepartmentsByCompanyId(companyId) {
      apiService
        .getDepartmentsByCompanyId(companyId)
        .then(function(data) {
          vm.departments = data;
          console.log(data);
        });
    }
  }
}());
