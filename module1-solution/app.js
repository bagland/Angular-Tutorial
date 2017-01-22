(function() {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.message = "";
  $scope.checkIfTooMuch = function() {
    var lunch = $scope.lunchList.split(",");
    lunch = lunch.filter(function(item){
      return (item !== '');
    });
    if (lunch.length == 0) {
      $scope.message = "Please enter data first";
    } else if (lunch.length <= 3) {
      $scope.message = "Enjoy!";
    } else {
      $scope.message = "Too much!";
    }
  }
}

})();
