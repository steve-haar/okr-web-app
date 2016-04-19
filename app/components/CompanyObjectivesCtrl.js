(function() {
  'use strict';

  angular
    .module('app')
    .controller('CompanyObjectivesCtrl', ['$location', '$routeParams', '$mdToast', '$mdDialog', 'apiService', CompanyObjectivesCtrl]);

  function CompanyObjectivesCtrl($location, $routeParams, $mdToast, $mdDialog, apiService) {
    var vm = this;

    vm.companyId = $routeParams.companyId;
    vm.company = {};
    vm.companyObjectives = [];
    vm.companyDepartments = [];
    vm.createNewObjective = function(){ $location.path("/companies/" + vm.companyId + "/company-objective/") };
    vm.editObjective = function(id){ $location.path("/companies/" + vm.companyId + "/company-objective/" + id) };
    vm.showConfirmDeleteCompanyObjectiveDialog = showConfirmDeleteCompanyObjectiveDialog;

    getCompanyObjectivesById(vm.companyId);
    getDepartmentsByCompanyId(vm.companyId);
    getCompany(vm.companyId);


    function getCompany(id) {
      apiService
        .getCompany(id)
        .then(function(data) {
          vm.company = data;
          console.log(data);
        });
    }

    function getCompanyObjectivesById(id){
      apiService
        .getCompanyObjectivesById(id)
        .then(function(data) {
          vm.companyObjectives = data;
          console.log(data);
        });
    }

    function getDepartmentsByCompanyId(id){
      apiService
        .getDepartmentsByCompanyId(id)
        .then(function(data) {
          vm.companyDepartments = data;
          console.log(data);
        });
    }

    function deleteCompanyObjective(objectiveToDelete){
      var companyId = vm.companyId;
      var objectiveId = objectiveToDelete.id;
      apiService
        .deleteCompanyObjectivesById(companyId, objectiveId)
        .then(function(data){
          $mdToast.show(
            $mdToast.simple()
              .textContent('The company objective "' + objectiveToDelete.title + '" has been deleted!')
              .position('top right')
              .hideDelay(5000)
          );
          getCompanyObjectivesById(vm.companyId);
        });
    }

    function showConfirmDeleteCompanyObjectiveDialog(objectiveToDelete) {
      // Appending dialog to document.body to cover sidenav in docs app
      var confirm = $mdDialog.confirm()
            .title('Delete Company Objective')
            .textContent('Are you sure you want to delete the company objective "'+ objectiveToDelete.title +'"?')
            //.targetEvent(ev)
            .ok('Yes!')
            .cancel('No');
      $mdDialog.show(confirm).then(function() {
        deleteCompanyObjective(objectiveToDelete);
      }, function() {
        // Nothing
      });
    };
  }
}());
