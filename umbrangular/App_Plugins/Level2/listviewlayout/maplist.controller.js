(function () {
    "use strict";

    function Level2Controller($scope, $location, listViewHelper, venuesResource) {

        var vm = this;

        vm.venues = [];
        vm.selectItem = selectItem;
        vm.clickItem = clickItem;

        function onInit() {
            // Get Address from UDI
            angular.forEach($scope.items, function (item) {
                venuesResource.getAddressByUdi(encodeURIComponent(item.venue))
                    .then(function (data) {
                        // update for list view
                        item.venue = data.value;
                        // add to venues collection for map
                        var venue = { "address": data.value };
                        vm.venues.push(venue);
                    });
            });
        }

        function selectItem(item) {
            if (item.selected) {
                listViewHelper.deselectItem(item, $scope.selection);
            } else {
                listViewHelper.selectItem(item, $scope.selection);
            }
        }

        function clickItem(item) {
            $location.url(item.editPath);
        }

        onInit();
    }
    angular.module("umbraco").controller("My.level2Controller", Level2Controller);
})();
