
(function () {
    'use strict';
    angular.module('app')
        .config([     '$httpProvider','$locationProvider',
            function ($httpProvider  , $locationProvider ) {
                $locationProvider.html5Mode(true);
            }
        ]);
})();
