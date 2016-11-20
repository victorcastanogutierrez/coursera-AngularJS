(function () {
'use strict';

angular.module('Data')
.controller('ItemCategoriesController', ItemCategoriesController);

//Inject the resolve param (.state)
ItemCategoriesController.$inject = ['itemslist'];
function ItemCategoriesController(itemslist) {
  var itemCategories = this;

  itemCategories.items = itemslist.menu_items;
}



})();
