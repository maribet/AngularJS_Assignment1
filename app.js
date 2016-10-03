(function () {
'use strict';

angular.module('LunchChecker', [])
.controller('LunchCheckerController', LunchCheckerController);

LunchCheckerController.$inject = ['$scope'];
function LunchCheckerController($scope) {

  $scope.lunchlist = "";
  $scope.resultmessage = "";

   $scope.getListLengthResult = function () {

     if ($scope.lunchlist == "") {
      $scope.resultmessage = "Please enter data first";
    }
    else {
      if (checkListLength($scope.lunchlist) <= 3) {
        $scope.resultmessage = "Enjoy!";
      }
      else {
        $scope.resultmessage = "Too much!";
      }
    }
  }

  function checkListLength(text) {
    var lunchitems = text.split(',');
    var count = 0;
    lunchitems.forEach(function (item, index, array) {
      if (item.trim() != "") {
        count++;
        //console.log(item, count);
      };
    });
    return count;
  }

}

})();
