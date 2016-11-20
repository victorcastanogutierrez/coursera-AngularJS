(function () {
'use strict';

angular.module('Data')
.controller('MainCategoriesController', MainCategoriesController);

//Inject the resolve param (.state)
MainCategoriesController.$inject = ['categories'];
function MainCategoriesController(categories) {
  var mainCategories = this;
  mainCategories.categoriesList = categories;
}

})();
