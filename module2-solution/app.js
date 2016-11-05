(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buyer = this;

  buyer.items = ShoppingListCheckOffService.getToBuyList();

  buyer.isListEmpty = function() {
    return buyer.items.length == 0;
  }

  buyer.buyItem = function(index) {
    ShoppingListCheckOffService.buyItem(index);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alBuyer = this;

  alBuyer.items = ShoppingListCheckOffService.getAlreadyBoughtList();

  alBuyer.isListEmpty = function() {
    return alBuyer.items.length == 0;
  }
}

function ShoppingListCheckOffService() {
  var service = this;

  var defaultValues = [
    {
      name: 'Butter',
      quantity: 10
    },
    {
      name: 'Cheese',
      quantity: 7
    },
    {
      name: 'Milk',
      quantity: 3
    },
    {
      name: 'Yogurt',
      quantity: 8
    },
    {
      name: 'Corn',
      quantity: 6
    }
  ];

  var toBuyList = defaultValues;
  var alreadyBoughtList = [];

  service.buyItem = function (index) {
    alreadyBoughtList.push(
      toBuyList.splice(index, 1)[0]
    );
  }

  service.getToBuyList = function() {
    return toBuyList;
  }

  service.getAlreadyBoughtList = function() {
    return alreadyBoughtList;
  }
}


})();
