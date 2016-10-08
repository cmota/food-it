(function () {
    'use strict';
    angular.module('app')
        .run(function ($rootScope) {
            $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options){ console.log("start",arguments) });
            $rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams){console.log("404",arguments);});
            $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){console.log("ok",arguments);});
            $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error){console.log("fail",arguments);})
        });
})();
