(function () {
    "use strict";
    angular.module("core")
        .config(function ($provide) {
            $provide.decorator("$exceptionHandler", function ($delegate, $injector) {
                return function (exception, cause) {
                    $delegate(exception, cause);
                    console.error(exception.message);
                };
        });
    });

}());