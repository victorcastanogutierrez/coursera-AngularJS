(function() {
'use strict';

angular.module('public')
.factory('SignupFactory', SignupFactory);

function SignupFactory() {
  var signUpUser;

  return {
    saveUser: function (userData) {
      signUpUser = userData;
    },
    getSign: function () {
      return signUpUser;
    }
  };
}


})();
