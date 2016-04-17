(function() {
  'use strict';

  angular
    .module('app')
    .controller('CreateCompanyObjectiveCtrl', ['$location', '$routeParams', '$mdToast', 'apiService', CreateCompanyObjectiveCtrl]);

  function CreateCompanyObjectiveCtrl($location, $routeParams, $mdToast, apiService) {
    var vm = this;

    vm.companyId = $routeParams.companyId;
    vm.departments = [];
    vm.isCreate = true;
    vm.objectiveData =  {
      name: '',
      description: '',
      estimatedCompletionDate: '',
      percentage: 0
    };
    vm.viewCompanyObjectives = function(){ $location.path("/companies/" + vm.companyId) };
    vm.postCreateCompanyObjective = postCreateCompanyObjective;

    getDepartmentsByCompanyId(vm.companyId);

    function postCreateCompanyObjective(){

      vm.objectiveData.percentage = vm.objectiveData.percentage / 100;

      apiService
        .postCreateCompanyObjective(vm.companyId, vm.objectiveData)
        .then(function(data){
          $location.path("/companies/" + vm.companyId);
          console.log(data);
        });
    }

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
