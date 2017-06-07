(function () {
	"use strict";

	function VenueDetailsController($scope) {

        var vm = this;

        vm.properties = {
            "description": { label: "Description", description: "A short description of the venue" },
            "map": { label: "Location" },
            "address": { label: "Address", description: "Enter the address of the venue" },
            "capacity": { label: "Capacity", description: "The size of the venue" }
        };

        console.log($scope.model);
        vm.locations = [];

        vm.addToMap = addToMap;
        vm.removeFromMap = removeFromMap;
        vm.changeAddress = changeAddress;

        function onInit() {
            if ($scope.model.address) {
                addToMap();
            }
        }

        function addToMap() {
            vm.locations.push({ "address": $scope.model.address });
        }

        function removeFromMap() {
            vm.locations = [];
            $scope.model.address = "";
        }

        function changeAddress() {
            if (!$scope.model.address) {
                vm.locations = [];
            }
        }
		
        onInit();

	}

	angular.module("umbraco").controller("My.Venue.DetailsController", VenueDetailsController);

})();
