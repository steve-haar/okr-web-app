(function() {
  'use strict';

  angular
    .module('app')
    .controller('CompanyObjectiveFormCtrl', ['$location', '$routeParams', '$mdToast', 'apiService', CompanyObjectiveFormCtrl]);

  function CompanyObjectiveFormCtrl($location, $routeParams, $mdToast, apiService) {
    var vm = this;

    vm.companyId = $routeParams.companyId;
    vm.departments = [];
    vm.isCreate = ($routeParams.objectiveId === undefined) ? true : false;
    vm.objectiveData =  {
      id: 0,
      title: '',
      description: '',
      estimatedCompletionDate: new Date(),
      percentage: 0
    };

    vm.viewCompanyObjectives = function(){ $location.path("/companies/" + vm.companyId) };
    vm.postCreateCompanyObjective = postCreateCompanyObjective;
    vm.putCompanyObjective = putCompanyObjective;

    if (!vm.isCreate) {
      getCompanyObjectiveById(vm.companyId, $routeParams.objectiveId);
    }

    function postCreateCompanyObjective(){
      apiService
        .postCreateCompanyObjective(vm.companyId, vm.objectiveData)
        .then(function(data){
          $mdToast.show(
            $mdToast.simple()
              .textContent('The company objective "' + vm.objectiveData.title + '" has been created!')
              .position('top right')
              .hideDelay(3000)
          );
          $location.path("/companies/" + vm.companyId);
        });
    }

    function putCompanyObjective(){
      var data =   angular.copy(vm.objectiveData);
      data.percentage = data.percentage / 100;

      apiService
        .putCompanyObjective(data)
        .then(function(data){
          $mdToast.show(
            $mdToast.simple()
              .textContent('The company objective "' + data.title + '" has been updated!')
              .position('top right')
              .hideDelay(3000)
          );
          $location.path("/companies/" + vm.companyId);
        });
    }

    function getDepartmentsByCompanyId(companyId) {
      apiService
        .getDepartmentsByCompanyId(companyId)
        .then(function(data) {
          vm.departments = data;
        });
    }

    function getCompanyObjectiveById(companyId, objectiveId){
      apiService
        .getCompanyObjectiveById(companyId, objectiveId)
        .then(function(data) {
          if (data.estimatedCompletionDate == "0001-01-01T00:00:00")
            data.estimatedCompletionDate = new Date();
          else
            data.estimatedCompletionDate = new Date(data.estimatedCompletionDate);

          data.percentage = data.percentage * 100;
          vm.objectiveData = data;
        });
    }
  }
}());
