(function() {

'use strict'
angular.module('public')
.component('signupForm', {
  templateUrl: 'src/public/signupform/signup-form.html',
  controller: SignUpFormController
});

SignUpFormController.$inject = ['SignupFactory']
function SignUpFormController(SignupFactory) {
  var $ctrl = this;
  $ctrl.saved = false;

  $ctrl.submit = function() {
    var newSign = {
      firstname: $ctrl.firstname,
      lastname: $ctrl.lastname,
      email: $ctrl.email,
      phonenumber: $ctrl.phonenumber,
      menunumber: $ctrl.menunumber
    };
    SignupFactory.saveUser(newSign);
  }
}


})();
