(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'itemList.html',
    restrict: 'E',
    scope: {
      foundItems: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true,
    link: FoundItemsDirectiveLink,
    transclude: true
  };
  return ddo;
}

function FoundItemsDirectiveLink (scope, element, attrs, controller) {
  scope.$watch('list.isListEmpty()', function (newValue, oldValue) {
    if (newValue === true) {
      displayWarning();
    }
    else {
      removeWarning();
    }
  });

  function displayWarning() {
    var warningElem = element.find("div.warn");
    warningElem.css('display', 'block');
  }

  function removeWarning() {
    var warningElem = element.find('div.warn');
    warningElem.css('display', 'none');
  }
}

function FoundItemsDirectiveController () {
  var list = this;

  list.isListEmpty = function () {
    return list.foundItems && list.foundItems.length == 0;
  }
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController (MenuSearchService) {
  var ndList = this;

  ndList.warningMessage = "Nothing found";

  ndList.findItems = function() {
    if (ndList.searchTerm == "") {
      ndList.found = [];
    } else {
      var promise = MenuSearchService.getMatchedMenuItems(ndList.searchTerm);
      promise.then(function(result) {
        ndList.found = result;
      });
    }
  };

  ndList.removeItem = function (index) {
    ndList.found.splice(index, 1);
  };
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    var promise = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
    })
    return promise.then(function (result) {
      var foundItems = result.data.menu_items;
      foundItems = foundItems.filter(function (element) {
        return element.description.indexOf(searchTerm) != -1;
      });
      return foundItems;
    });
  }
}

})();
