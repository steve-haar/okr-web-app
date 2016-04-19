(function() {
  'use strict';

  angular
    .module('app')
    .controller('DepartmentObjectivesCtrl', ['$location', '$routeParams', '$mdToast', '$mdDialog', 'apiService', 'gravatarService', DepartmentObjectivesCtrl]);

  function DepartmentObjectivesCtrl($location, $routeParams, $mdToast, $mdDialog, apiService, gravatarService) {
    var vm = this;

    vm.getGravatar = gravatarService.get;
    vm.companyId = $routeParams.companyId;
    vm.departmentId = $routeParams.departmentId;
    vm.department = {};
    vm.departmentObjectives = [];
    vm.departmentEmployees = [];
    vm.addingKeyResultTo = -1;
    vm.addingEmployeeTo = -1;
    vm.employeeAddId = -1;
    vm.keyResultData = '';
    vm.viewCompanyObjectives = function(){ $location.path("/companies/" + vm.companyId); };
    vm.createNewDepartmentObjective = function(){ $location.path("/companies/" + vm.companyId + "/departments/" + vm.departmentId + "/department-objective/") };
    vm.editObjective = function(id){ $location.path("/companies/" + vm.companyId + "/departments/" + vm.departmentId + '/department-objective/' + id) };
    vm.addKeyResult = addKeyResult;
    vm.addKeyResultTo = addKeyResultTo;
    vm.cancelAddingKeyResult = cancelAddingKeyResult;
    vm.isAddingKeyResultTo = isAddingKeyResultTo;
    vm.addEmployeeTo = addEmployeeTo;
    vm.cancelAddingEmployee = cancelAddingEmployee;
    vm.isAddingEmployeeTo = isAddingEmployeeTo;
    vm.addEmployee = addEmployee;
    vm.showConfirmDeleteCompanyObjectiveDialog = showConfirmDeleteCompanyObjectiveDialog;
    vm.showConfirmRemoveEmployeeDialog = showConfirmRemoveEmployeeDialog;
    vm.showConfirmRemoveKeyResultDialog = showConfirmRemoveKeyResultDialog;

    getDepartmentById(vm.companyId, vm.departmentId);
    getDepartmentObjectivesById(vm.companyId, vm.departmentId);
    getEmployees();

    // Add/Remove Employees
    function addEmployeeTo(objective){
      vm.addingEmployeeTo = objective.id;
    }

    function cancelAddingEmployee(){
      vm.employeeAddId = -1;
      vm.addingEmployeeTo = -1;
    }

    function isAddingEmployeeTo(objective) {
      return (objective.id == vm.addingEmployeeTo);
    }

    function addKeyResultTo(objective){
      vm.addingKeyResultTo = objective.id;
    }

    function addEmployee(){
      if (vm.employeeAddId == -1) {
        return;
      }

      var newAssignment = {
        departmentId: parseInt(vm.departmentId),
        companyId: parseInt(vm.companyId),
        departmentObjectiveId: parseInt(vm.addingEmployeeTo),
        employeeId: parseInt(vm.employeeAddId)
      };

      apiService
        .postAssignment(newAssignment)
        .then(function(data){
          var obj = findObjectiveById(data.departmentObjectiveId);
          if (obj != undefined){
            var employee = findEmployeeById(data.employeedId);
            getDepartmentObjectivesById(vm.companyId, vm.departmentId);
            cancelAddingEmployee();
            $mdToast.show(
              $mdToast.simple()
                .textContent('"'+ employee.firstName + ' ' + employee.lastName +'" has been added to the department objective "' + obj.title + '"!')
                .position('top right')
                .hideDelay(5000)
            );
          }
        });
    }

    // Add/Remove Key Results
    function cancelAddingKeyResult(){
      vm.keyResultData = '';
      vm.addingKeyResultTo = -1;
    }

    function isAddingKeyResultTo(objective) {
      return (objective.id == vm.addingKeyResultTo);
    }

    function findObjectiveById(id){
      for (var i = 0; i < vm.departmentObjectives.length; i++){
        if (vm.departmentObjectives[i].id == id)
          return vm.departmentObjectives[i];
      }
      return undefined;
    }

    function findEmployeeById(id){
      for (var i = 0; i < vm.departmentEmployees.length; i++){
        if (vm.departmentEmployees[i].id == id)
          return vm.departmentEmployees[i];
      }
      return undefined;
    }

    function addKeyResult(){
      if (vm.keyResultData.trim() == '') {
        return;
      }

      var newKeyResult = {
        title: vm.keyResultData,
        companyId: vm.companyId,
        departmentId: vm.departmentId,
        departmentObjectiveId: vm.addingKeyResultTo
      };

      apiService
        .postKeyResult(newKeyResult)
        .then(function(data){
          var obj = findObjectiveById(data.departmentObjectiveId);
          if (obj != undefined){
            obj.keyResults.push(data);
            $mdToast.show(
              $mdToast.simple()
                .textContent('Key result "'+ data.title +'" has been added to the department objective "' + obj.title + '"!')
                .position('top right')
                .hideDelay(5000)
            );
          }
        });
    }

    function getEmployees(){
      apiService
        .getCompanyEmployees(vm.companyId)
        .then(function(data){
          vm.departmentEmployees = data;
        });
    }

    function getDepartmentById(companyId, departmentId) {
      apiService
        .getDepartmentById(companyId, departmentId)
        .then(function(data) {
          vm.department = data;
        });
    }

    function getDepartmentObjectivesById(companyId, departmentId) {
      apiService
        .getDepartmentObjectivesById(companyId, departmentId)
        .then(function(data) {
          vm.departmentObjectives = data;
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

    function deleteAssignment(objective, assignmentToDelete){
      apiService
        .deleteAssignmentById(assignmentToDelete.id)
        .then(function(data){
          getDepartmentObjectivesById(vm.companyId, vm.departmentId);
          $mdToast.show(
            $mdToast.simple()
              .textContent(assignmentToDelete.employee.firstName + ' ' + assignmentToDelete.employee.lastName + ' has been removed from the department objective "' + objective.title + '"!')
              .position('top right')
              .hideDelay(5000)
          );
        });
    }

    function deleteKeyResult(objective, keyResultToDelete){
      apiService
        .deleteKeyResultById(keyResultToDelete.id)
        .then(function(data){
          getDepartmentObjectivesById(vm.companyId, vm.departmentId);
          $mdToast.show(
            $mdToast.simple()
              .textContent('The Key Result "' + keyResultToDelete.title + '" has been removed from the department objective "' + objective.title + '"!')
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

    function showConfirmRemoveEmployeeDialog(objective, assignmentToRemove) {
      // Appending dialog to document.body to cover sidenav in docs app
      var confirm = $mdDialog.confirm()
            .title('Remove Employee from Objective')
            .textContent('Are you sure you want to remove ' + assignmentToRemove.employee.firstName + ' ' + assignmentToRemove.employee.lastName + ' from the objective "'+ objective.title +'"?')
            //.targetEvent(ev)
            .ok('Yes!')
            .cancel('No');
      $mdDialog.show(confirm).then(function() {
        deleteAssignment(objective, assignmentToRemove);
      }, function() {
        // Nothing
      });
    }

    function showConfirmRemoveKeyResultDialog(objective, keyResultToRemove) {
      // Appending dialog to document.body to cover sidenav in docs app
      var confirm = $mdDialog.confirm()
            .title('Remove Key Result from Objective')
            .textContent('Are you sure you want to remove the Key Result "' + keyResultToRemove.title + '" from the objective "'+ objective.title +'"?')
            //.targetEvent(ev)
            .ok('Yes!')
            .cancel('No');
      $mdDialog.show(confirm).then(function() {
        deleteKeyResult(objective, keyResultToRemove);
      }, function() {
        // Nothing
      });
    }
  }
}());
