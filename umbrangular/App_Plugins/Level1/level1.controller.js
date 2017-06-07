(function () {
    "use strict";

    function Level1Controller ($scope) {

        var vm = this;
        
        vm.checkValue = checkValue;

        function checkValue () {
            if($scope.model.value === "" || $scope.model.value == null ) {
                $scope.model.value = "Umbraco HQ";
            }
        }

        function onInit() {
            checkValue();
        }

        onInit();

    }

    angular.module("umbraco").controller("My.level1Controller", Level1Controller);

})();
