(function () {
	"use strict";

	function VenueEditController($scope, $routeParams, venuesResource, notificationsService) {

		var vm = this;
		var subviewsPath = "/app_plugins/venues/backoffice/venuestree/subviews/";

		vm.venue = {};
		vm.page = {};
		vm.page.navigation = [
            {
                "name": "Details",
                "icon": "icon-autofill",
                "view": subviewsPath + "details/details.html",
                "active": true
            },
            {
                "name": "Gallery",
                "icon": "icon-picture",
                "view": subviewsPath + "gallery/gallery.html",
                "active": false
            },
			{
                "name": "Booking",
                "icon": "icon-notepad",
                "view": subviewsPath + "booking/booking.html",
                "active": false
            }
        ];
		vm.page.keyboardShortcutsOverview = [
			{
				"name": "Genral",
				"shortcuts": [
					{
						"description": "Change view",
						"keys": [{ "key": "1" }, { "key": "3" }],
						"keyRange": true
					},
					{
						"description": "Save venue",
						"keys": {
							"win": [{ "key": "ctrl" }, { "key": "s" }],
							"mac": [{ "key": "cmd" }, { "key": "s" }]
						}
					}
				]
			},
			{
				"name": "Details",
				"shortcuts": [
					{
						"description": "Shortcut name",
				    	"keys": [{ "key": "alt" }, { "key": "shift" }, { "key": "e" }]
					}
				]
			}
        ];

		vm.save = save;

		function onInit() {

			vm.loading = true;

			// get venue
			venuesResource.getById($routeParams.id).then(function (venue) {
				vm.venue = venue;
				vm.loading = false;
			});
		}

		function save() {
		    vm.buttonState = "busy";
		    console.log(vm.venue);
		    venuesResource.postSave(vm.venue).then(function (savedVenue) {
		        vm.buttonState = "success";
		        vm.venue = savedVenue;
				notificationsService.success("Venue saved");
			});
		}

		onInit();

	}

	angular.module("umbraco").controller("My.Venue.EditController", VenueEditController);

})();
