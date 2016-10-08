(function () {
    "use strict";
    angular.module("external")
        .factory("VegetableService", VegetableService);

    VegetableService.$inject = ["$http","Configs"];
    function VegetableService(   $http , Configs ) {
        return {
            getAll,
            getMine,
            add,
            update
        };

        function getAll() {
            return $http({
                method  : "GET",
                url     : `${Configs.apiUrl}vegetables`
            });
        }

        function getMine() {
            return $http({
                method  : "GET",
                url     : `${Configs.apiUrl}me`
            });
        }

        function add(vegetable) {
            return $http({
                method  : "POST",
                url     : `${Configs.apiUrl}me`,
                body    : vegetable
            });
        }

        function update(vegetable) {
            return $http({
                method  : "PATCH",
                url     : `${Configs.apiUrl}me`,
                body    : vegetable
            });
        }
    }
})();
