(function () {
"use strict";

angular.module('public')
.controller('UserInfoController', UserInfoController);

UserInfoController.$inject = ['SignupFactory']
function UserInfoController(SignupFactory) {
  var $ctrl = this;

  $ctrl.userData = SignupFactory.getSign();
}


})();
