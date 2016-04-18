(function() {
  'use strict';

  angular
    .module('app')
    .controller('DepartmentObjectivesCtrl', ['$location', '$routeParams', '$mdToast', '$mdDialog', 'apiService', DepartmentObjectivesCtrl]);

  function DepartmentObjectivesCtrl($location, $routeParams, $mdToast, $mdDialog, apiService) {
    var vm = this;

    vm.companyId = $routeParams.companyId;
    vm.departmentId = $routeParams.departmentId;
    vm.department = {};
    vm.departmentObjectives = {};
    vm.viewCompanyObjectives = function(){ $location.path("/companies/" + vm.companyId); };
    vm.createNewDepartmentObjective = function(){ $location.path("/companies/" + vm.companyId + "/departments/" + vm.departmentId + "/department-objective/") };
    vm.editObjective = function(id){ $location.path("/companies/" + vm.companyId + "/departments/" + vm.departmentId + '/department-objective/' + id) };
    vm.showConfirmDeleteCompanyObjectiveDialog = showConfirmDeleteCompanyObjectiveDialog;

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

    function deleteDepartmentObjective(objectiveToDelete){
      var companyId = vm.companyId;
      var departmentId = vm.departmentId;
      var objectiveId = objectiveToDelete.id;
      apiService
        .deleteDepartmentObjectiveById(companyId, departmentId, objectiveId)
        .then(function(data){
          getDepartmentObjectivesById(vm.companyId, vm.departmentId);
          $mdToast.show(
            $mdToast.simple()
              .textContent('The ' + vm.department.name + ' department objective "' + objectiveToDelete.title + '" has been deleted!')
              .position('top right')
              .hideDelay(5000)
          );
        });
    }

    function showConfirmDeleteCompanyObjectiveDialog(objectiveToDelete) {
      // Appending dialog to document.body to cover sidenav in docs app
      var confirm = $mdDialog.confirm()
            .title('Delete Department Objective')
            .textContent('Are you sure you want to delete the ' + vm.department.name + ' department objective "'+ objectiveToDelete.title +'"?')
            //.targetEvent(ev)
            .ok('Yes!')
            .cancel('No');
      $mdDialog.show(confirm).then(function() {
        deleteDepartmentObjective(objectiveToDelete);
      }, function() {
        // Nothing
      });
    }
  }
}());
