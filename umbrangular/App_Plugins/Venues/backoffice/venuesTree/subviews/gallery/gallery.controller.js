(function () {
	"use strict";

	function VenueGalleryController($scope) {

		var vm = this;
		
		vm.clickItem = clickItem;
		vm.openLightbox = openLightbox;
		vm.closeLightbox = closeLightbox;

		vm.images = [
			{
				"name": "typed-the-most-random-picture-on-the-internet_o_1993597.jpg",
				"properties": [
					{
						"alias": "umbracoWidth",
						"value": 1024
					},
					{
						"alias": "umbracoHeight",
						"value": 683
					},
					{
						"alias": "umbracoFile",
						"editor": "Umbraco.ImageCropper",
						"value": {
							"src": "https://c1.staticflickr.com/5/4250/34717837342_dd34b2dc68_b.jpg"
						}
					}
				]
			},
			{
				"name": "random-pic-internet-15.jpg",
				"properties": [
					{
						"alias": "umbracoWidth",
						"value": 1600
					},
					{
						"alias": "umbracoHeight",
						"value": 1067
					},
					{
						"alias": "umbracoFile",
						"editor": "Umbraco.ImageCropper",
						"value": {
							"src": "https://c1.staticflickr.com/4/3878/33446033056_be7c56ccf1_h.jpg"
						}
					}
				]
			},
			{
				"name": "random-pic-internet-02.jpg",
				"properties": [
					{
						"alias": "umbracoWidth",
						"value": 800
					},
					{
						"alias": "umbracoHeight",
						"value": 532
					},
					{
						"alias": "umbracoFile",
						"editor": "Umbraco.ImageCropper",
						"value": {
							"src": "https://c1.staticflickr.com/3/2933/33403011131_9a4350ef18_c.jpg"
						}
					}
				]
			},
			{
				"name": "i-searched-for-most-random-picture-on-the-internet_o_842124.jpg",
				"properties": [
					{
						"alias": "umbracoWidth",
						"value": 1600
					},
					{
						"alias": "umbracoHeight",
						"value": 1067
					},
					{
						"alias": "umbracoFile",
						"editor": "Umbraco.ImageCropper",
						"value": {
							"src": "https://c1.staticflickr.com/4/3696/33372791396_c78cc3fb96_h.jpg"
						}
					}
				]
			},
			{
				"name": "download-2.jpg",
				"properties": [
					{
						"alias": "umbracoWidth",
						"value": 1024
					},
					{
						"alias": "umbracoHeight",
						"value": 668
					},
					{
						"alias": "umbracoFile",
						"editor": "Umbraco.ImageCropper",
						"value": {
							"src": "https://c1.staticflickr.com/4/3890/33124940212_d22022a0c6_b.jpg"
						}
					}
				]
			},
			{
				"name": "7448bcf78ed91e6945d3dd6be6f0321e.jpg",
				"properties": [
					{
						"alias": "umbracoWidth",
						"value": 500
					},
					{
						"alias": "umbracoHeight",
						"value": 333
					},
					{
						"alias": "umbracoFile",
						"editor": "Umbraco.ImageCropper",
						"value": {
							"src": "https://c1.staticflickr.com/3/2912/32443792534_9588f85a1c.jpg"
						}
					}
				]
			}
		];

		function clickItem(item, event, index) {
			openLightbox(index, vm.images);
		}

		function openLightbox(itemIndex, items) {

			angular.forEach(items, function(item){
				item.source = item.image;
			});

            vm.lightbox = {
                show: true,
                items: items,
                activeIndex: itemIndex
            };
        }

        function closeLightbox() {
            vm.lightbox.show = false;
            vm.lightbox = null;
        }

	}

	angular.module("umbraco").controller("My.Venue.GalleryController", VenueGalleryController);

})();
