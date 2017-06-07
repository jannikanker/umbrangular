(function() {
    'use strict';

    function VenueReviewComponent() {

        var directive = {
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: "/App_Plugins/Venues/backoffice/components/myvenuereview/myvenuereview.html",
            scope: {
                review: "="
            }
        };
        return directive;
    }

    angular.module('umbraco.directives').directive('myVenueReview', VenueReviewComponent);

})();