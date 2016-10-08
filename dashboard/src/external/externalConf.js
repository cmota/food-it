(function () {
    'use strict';
    angular.module('external')
        .config([     '$httpProvider','$provide',
            function ($httpProvider  , $provide ) {
                $provide.factory('HttpInterceptor', function($q) {
                    return {
                        'request'       : config    => config,
                        'requestError'  : rejection => $q.reject(rejection),
                        'response'      : response  => {
                            if(response.status===200){
                                return response.data && response.data.response || response;
                            }else{
                                return $q.reject(response);
                            }
                        },
                        'responseError' : rejection => $q.reject(rejection)
                    };
                });
                $httpProvider.interceptors.push('HttpInterceptor');
            }
        ]);
})();
