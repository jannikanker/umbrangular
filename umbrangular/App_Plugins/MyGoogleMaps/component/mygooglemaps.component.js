(function() {
    'use strict';

    function MyGoogleMapsComponent($timeout, assetsService) {

        var directive = {
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: "/App_Plugins/MyGoogleMaps/component/mygooglemaps.html",
            scope: {
                locations: "=?"
            },
            link: link
        };

        return directive;

        function link(scope, element, attr, ctrl) {

            var geocoder;
            var map;
            var markers = [];
            var item = element.find(".my-google-maps").context;

            function onInit() {
                loadmap();
            }

            function loadmap() {
                
                $timeout(function(){
                    geocoder = new google.maps.Geocoder();
                    map = new google.maps.Map(item, {
                        center: { lat: -34.397, lng: 150.644 },
                        zoom: 8
                    });
                    // check for locations
                    if(scope.locations && scope.locations.length > 0) {
                        angular.forEach(scope.locations, function(location){
                            lookup(location.address);
                        });
                    }
                });

            }

            function lookup(address) {
                
                if(geocoder) {
                    geocoder.geocode({ 'address': address }, function(results, status) {
                        if (status == 'OK') {
                            // set marker
                            setMarker(results[0].geometry.location);
                        }
                    });
                }
            }

            // Adds a marker to the map and push to the array.
            function setMarker(position) {
                var marker = new google.maps.Marker({
                    map: map,
                    position: position
                });
                markers.push(marker);
                fitBounds(markers);
            }

            // Sets the map on all markers in the array.
            function setMapOnAll(map) {
                for (var i = 0; i < markers.length; i++) {
                    markers[i].setMap(map);
                }
            }

            // Deletes all markers in the array by removing references to them.
            function deleteMarkers() {
                setMapOnAll(null);
                markers = [];
            }

            function fitBounds(markers) {
                var bounds = new google.maps.LatLngBounds();
                for (var i = 0; i < markers.length; i++) {
                    bounds.extend(markers[i].getPosition());
                }
                map.fitBounds(bounds);
            }

            // Watch for new locations added to the array
            scope.$watchCollection('locations', function(newValue, oldValue){

                if (newValue === oldValue) { return; }
                if (oldValue === undefined || newValue === undefined) { return; }

                deleteMarkers();
                angular.forEach(newValue, function(location){
                    if(location.address) {
                        lookup(location.address);
                    }
                });
            });

            onInit();

        }

    }

    angular.module('umbraco.directives').directive('myGoogleMaps', MyGoogleMapsComponent);

})();