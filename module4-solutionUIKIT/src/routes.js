(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  .state('categories', {
    url: '/categories',
    templateUrl: 'src/data/templates/mainCategories.template.html',
    controller: 'MainCategoriesController as mainCategories',
    resolve: {
        categories: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
  })

  .state('items', {
    url: '/item/{itemShortName}',
    templateUrl: 'src/data/templates/itemDetail.template.html',
    controller: 'ItemCategoriesController as itemCategories',
    resolve: {
        itemslist: ['$stateParams', 'MenuDataService',
          function ($stateParams, MenuDataService) {
            return MenuDataService.getItemsForCategory($stateParams.itemShortName);
        }]
      }
  });
}
})();
