(function() {

'use strict'
angular.module('public')
.component('signupForm', {
  templateUrl: 'src/public/signupform/signup-form.html',
  controller: SignUpFormController
});

SignUpFormController.$inject = ['SignupFactory', 'MenuService']
function SignUpFormController(SignupFactory, MenuService) {
  var $ctrl = this;
  $ctrl.saved = false;

  $ctrl.submit = function() {
    MenuService.getMenuItem($ctrl.menunumber).then(function (response) {
      var newSign = {
        firstname: $ctrl.firstname,
        lastname: $ctrl.lastname,
        email: $ctrl.email,
        phonenumber: $ctrl.phonenumber,
        menunumber: response
      };
      SignupFactory.saveUser(newSign);
      $ctrl.saved = true;
    });
  }
}


})();
