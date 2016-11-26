(function() {

'use strict'
angular.module('public')
.directive('menuitemValidator', ['MenuService', function (MenuService) {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attr, ngModel) {
          ngModel.$asyncValidators.menunumber = function(modelValue, viewValue) {
            return MenuService.getMenuItem(viewValue).then(
              function(response) {
                ngModel.$setValidity('validate', true);
                return true;
              }, function (error) {
                ngModel.$setValidity('validate', false);
                return false;
              }
            );
          };
        }
    };
}]);


})();
