(function () {
    "use strict";

    function EditController($scope) {

        var vm = this;

        vm.locations = [];

        vm.addToMap = addToMap;
        vm.removeFromMap = removeFromMap;
        vm.changeAddress = changeAddress;

        function onInit() {
            if($scope.model.value) {
                addToMap();
            }
        }

        function addToMap() {
            vm.locations.push({"address": $scope.model.value});
        }

        function removeFromMap() {
            vm.locations = [];
            $scope.model.value = "";
        }
        
        function changeAddress() {
            if(!$scope.model.value) {
                vm.locations = [];
            }
        }

        onInit();

    }

    angular.module("umbraco").controller("My.EditController", EditController);

})();
