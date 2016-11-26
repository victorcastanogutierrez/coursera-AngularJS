(function() {
'use strict';

angular.module('public')
.factory('SignupFactory', SignupFactory);

function SignupFactory() {
  var signUpUser;

  return {
    saveUser: function (userData) {
      console.log("saved");
      signUpUser = userData;
    },
    getSign: function () {
      console.log("hola", signUpUser);
      return signUpUser;
    }
  };
}


})();
