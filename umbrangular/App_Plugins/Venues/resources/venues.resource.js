(function () {
    'use strict';

    function venuesResource($http, umbRequestHelper) {

        var resource = {
            getAll: getAll,
            getByName: getByName,
            getById: getById,
            postSave: postSave,
            deleteById: deleteById,
            getAddressByUdi: getAddressByUdi
        };

        var base = "Backoffice/Venues/VenuesApi/"

        return resource;

        //////////

        function getAll() {
            return umbRequestHelper.resourcePromise(
                $http.get(base + "getAll"),
                "Failed to retrieve all venues"
            );
        }

        function getByName(name) {
            return umbRequestHelper.resourcePromise(
                $http.get(base + "getByName?name=" + name),
                "Failed to retrieve venue with name " + name
            );
        }

        function getById(id) {
            return umbRequestHelper.resourcePromise(
                $http.get(base + "GetById?id=" + id),
                "Failed to retrieve venue with ID " + id
            );
        }

        function postSave(venue) {
            return umbRequestHelper.resourcePromise(
                $http.post(base + "PostSave", venue),
                "Failed to save venue"
            );
        }

        function deleteById(id) {
            return umbRequestHelper.resourcePromise(
                $http.post(base + "DeleteById?id=" + id),
                "Failed to delete venue with ID " + id
            );
        }

        function getAddressByUdi (udi) {
            return umbRequestHelper.resourcePromise(
                $http.get("Backoffice/Api/Level2/GetAddressByUdi?udi=" + udi),
                "Failed to get address for venue with UDI " + udi
            );
        }

    }

    angular.module('umbraco.resources').factory('venuesResource', venuesResource);

})();
