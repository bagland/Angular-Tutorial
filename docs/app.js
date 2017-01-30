(function() {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var ctrl = this;

  ctrl.items = ShoppingListCheckOffService.getToBuyItems();
  ctrl.buyItem = function(itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var ctrl = this;

  ctrl.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  var toBuyItems = [
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Bread",
      quantity: "3"
    },
    {
      name: "Meat",
      quantity: "1"
    },
    {
      name: "Cookies",
      quantity: "6"
    },
    {
      name: "Donuts",
      quantity: "8"
    }
  ];

  var boughtItems = [];

  service.buyItem = function(itemIndex) {
    var item = toBuyItems[itemIndex];
    boughtItems.push(item);
    toBuyItems.splice(itemIndex, 1);
  };

  service.getBoughtItems = function() {
    return boughtItems;
  };

  service.getToBuyItems = function() {
    return toBuyItems;
  }
}

})();
