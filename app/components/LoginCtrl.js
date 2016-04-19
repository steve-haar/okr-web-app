(function() {
  'use strict';

  angular
    .module('app')
    .controller('LoginCtrl', ['$location', 'apiService', LoginCtrl]);

  function LoginCtrl($location, apiService) {
    var vm = this;

    vm.login = login;
    vm.email = "lskywalker@rebelalliance.com";
    vm.error = false;

    function login(){
      apiService.getEmployees().then(function(data){
        var employeeExists = false;
        var employees = data;

        for (var i = 0; i < employees.length; i++) {
          var employee = employees[i];
          if (employee.emailAddress.trim() == vm.email.trim()){
            employeeExists = true;
            break;
          }
        }

        if (employeeExists || vm.email == 'lskywalker@rebelalliance.com')
          $location.path("/companies/1");
        else (!employeeExists)
          vm.error = 'Invalid email address.';
      });
    }

  }
}());
