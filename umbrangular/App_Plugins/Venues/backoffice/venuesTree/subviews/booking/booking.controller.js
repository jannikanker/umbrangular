(function () {
	"use strict";

	function VenueBookingController() {

		var vm = this;

		vm.overallRating = 0;

		vm.reviews = [
			{
				"authorName": "Emil Wangaa",
                "authorAvatar": "https://pbs.twimg.com/profile_images/765479312921358336/fZZWxjeE.jpg",
				"reviewContent": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin mattis odio nec venenatis",
				"reviewTitle": "The best",
				"rating": 5
			},
			{
                "authorName": "Georgs Bormanis",
                "authorAvatar": "https://pbs.twimg.com/profile_images/844854810784387072/AbQqnt2X.jpg",
				"reviewContent": "Onec quis luctus nibh, ultrices molestie turpis. Suspendisse vitae nisl ac felis viverra mattis ornare sit amet massa.",
				"reviewTitle": "The worst",
				"rating": 1
			},
			{
				"authorName": "Sofie Toft Kristensen",
                "authorAvatar": "https://pbs.twimg.com/profile_images/814436672909754368/VvRrwupi.jpg",
				"reviewContent": "The best",
				"reviewTitle": "It's okay",
				"rating": 3
			}
		];

		function onInit() {
			vm.overallRating = getOverallRating(vm.reviews);
		}

		function getOverallRating(reviews) {
			var reviewTotal = 0;
			angular.forEach(reviews, function(review){
				reviewTotal = reviewTotal + review.rating;
			});
			return reviewTotal / reviews.length;
		}

		onInit();

	}

	angular.module("umbraco").controller("My.Venue.BookingController", VenueBookingController);

})();
