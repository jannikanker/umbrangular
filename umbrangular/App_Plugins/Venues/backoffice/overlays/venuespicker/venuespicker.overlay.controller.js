angular.module("umbraco")
    .controller("My.Venues.Overlays.VenuesPickerController", function($scope, venuesResource) {

        var vm = this;

        vm.venues = [];

        vm.selectVenue = selectVenue;

        //////////

        function onInit() {
            // hide submit button
            $scope.model.hideSubmitButton = true;
            // make sure we can push to something
            if(!$scope.model.selection) {
                $scope.model.selection = [];
            }
            // get venues
            venuesResource.getAll().then(function(venues){
                vm.venues = venues;
            });
        }

        function selectVenue(venue) {
            $scope.model.selection.push(venue);
            $scope.model.submit($scope.model);
        }

        onInit();

    });