(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', DIController);

DIController.$inject = ['$scope', '$filter'];

function DIController ($scope,
                       $filter) {

  $scope.checkTooMuch = function () {
    var itemsArray = getItemsFromText($scope.items);
    $scope.result = getMessageForItems(itemsArray);
  }
}

function getItemsFromText (text) {
  return  text == undefined ? [] :
                              text.split(",").filter(assertValidItem);
}

function assertValidItem(item) {
  return item != "";
}

function getMessageForItems(items) {
  if (items.length == 0) {
    return "Please, enter data first";
  } else if (items.length <= 3) {
    return "Enjoy!"
  } else {
    return "Too much!";
  }
}

})();
