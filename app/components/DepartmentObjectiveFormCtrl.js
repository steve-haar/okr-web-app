(function() {
  'use strict';

  angular
    .module('app')
    .controller('DepartmentObjectiveFormCtrl', ['$location', '$routeParams', '$mdToast', 'apiService', DepartmentObjectiveFormCtrl]);

  function DepartmentObjectiveFormCtrl($location, $routeParams, $mdToast, apiService) {
    var vm = this;

    vm.companyId = $routeParams.companyId;
    vm.departmentId = $routeParams.departmentId;
    vm.department = {};
    vm.companyObjectiveToAssignTo = -1;
    vm.companyObjectives = [];
    vm.isCreate = ($routeParams.objectiveId === undefined) ? true : false;
    vm.objectiveData =  {
      id: 0,
      title: '',
      description: '',
      estimatedCompletionDate: new Date(),
      percentage: 0
    };
    vm.viewDepartmentObjectives = function(){ $location.path("/companies/" + vm.companyId + '/departments/' + vm.departmentId) };
    vm.postCreateDepartmentObjective = postCreateDepartmentObjective;
    vm.putDepartmentObjective = putDepartmentObjective;

    if (!vm.isCreate) {
      getDepartmentObjectiveById(vm.companyId, vm.departmentId, $routeParams.objectiveId);
    }
    getDepartmentById(vm.companyId, vm.departmentId);
    getCompanyObjectives();

    function getDepartmentById(companyId, departmentId) {
      apiService
        .getDepartmentById(companyId, departmentId)
        .then(function(data) {
          vm.department = data;
        });
    }

    function getCompanyObjectives(){
      apiService
        .getCompanyObjectivesById(vm.companyId)
        .then(function(data) {
          vm.companyObjectives = data;
        });
    }

    function postCreateDepartmentObjective(){
      if (vm.objectiveData.title.trim() == '') return;
      if (vm.companyObjectiveToAssignTo == -1) return;

      apiService
        .postDepartmentObjective(vm.companyId, vm.departmentId, vm.objectiveData)
        .then(function(data){
            var association = {
              companyId: vm.companyId,
              departmentId: vm.departmentId,
              companyObjectiveId: vm.companyObjectiveToAssignTo,
              departmentObjectiveId: data.id
            }

            postObjectiveAssociation(association);

            $mdToast.show(
              $mdToast.simple()
                .textContent('The objective "' + vm.objectiveData.title + '" has been created under the ""'+ vm.department.name +'"" department!')
                .position('top right')
                .hideDelay(3000)
            );

            $location.path("/companies/" + vm.companyId + '/departments/' + vm.departmentId);
        });
    }

    function postObjectiveAssociation(data){
      apiService
        .postObjectiveAssociation(data)
        .then(function(data){});
    }

    function putDepartmentObjective(){
      var data = angular.copy(vm.objectiveData);
      data.percentage = data.percentage / 100;

      apiService
        .putDepartmentObjective(vm.companyId, vm.departmentId, data)
        .then(function(data){
          $mdToast.show(
            $mdToast.simple()
              .textContent('The ' + vm.department.name + ' department objective "' + data.title + '" has been updated!')
              .position('top right')
              .hideDelay(3000)
          );
          $location.path("/companies/" + vm.companyId + '/departments/' + vm.departmentId);
        });
    }

    function getDepartmentObjectiveById(companyId, departmentId, objectiveId){
      apiService
        .getDepartmentObjectiveById(companyId, departmentId, objectiveId)
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
