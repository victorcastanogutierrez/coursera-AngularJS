(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http', 'ApiBasePath'];
function MenuDataService ($http, ApiBasePath) {
  var service = this;
  this.getAllCategories = function() {
      return $http({
        method: "GET",
        url: (ApiBasePath + "/categories.json"),
      })
      .then(function (result) {
        return result.data;
      });
  };

  this.getItemsForCategory =  function (categoryShortName) {
      return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json?category=" + categoryShortName),
      })
      .then(function (result) {
        return result.data;
      });
  }
}

})();
