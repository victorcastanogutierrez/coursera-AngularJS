(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://vcg-module5-solution.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
