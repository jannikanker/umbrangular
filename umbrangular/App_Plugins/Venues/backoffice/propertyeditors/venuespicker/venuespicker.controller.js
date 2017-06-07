angular.module("umbraco")
    .controller("My.Venues.VenuesPickerController", function ($scope, $routeParams, venuesResource) {

        var vm = this;

        vm.venues = [];

        vm.openVenuePicker = openVenuePicker;
        vm.removePickedVenue = removePickedVenue;

        function openVenuePicker() {

            vm.venuePicker = {
                view: "/app_plugins/venues/backoffice/overlays/venuespicker/venuespicker.html",
                title: "Select a venue",
                subtitle: "Select where this concert will take place",
                show: true,
                submit: function(model) {

                    if(model.selection && model.selection.length > 0) {
                        selectVenue(model.selection[0]);
                    }

                    vm.venuePicker.show = false;
                    vm.venuePicker = null;
                },
                close: function(oldModel) {
                    vm.venuePicker.show = false;
                    vm.venuePicker = null;
                }
            };

        }

        function removePickedVenue(index) {
            $scope.model.value = null;
            vm.venues.splice(index, 1);
        }

        function selectVenue(venue) {
            $scope.model.value = venue.id;
            vm.venues = [];
            vm.venues.push(venue);
        }

        function onInit() {
            if ($scope.model.value) {
                venuesResource.getById($scope.model.value).then(function (response) {
                    vm.venues.push(response);
                });
            }
        }

        onInit();

    });