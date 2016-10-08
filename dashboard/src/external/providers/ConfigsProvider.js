(function () {
    "use strict";
    angular.module("external")
        .provider("Configs", Configs);

    Configs.$inject = [];
    function Configs() {

        var _apiUrl_ = "http://jpbat.pt/" ;

        return {
            setApiUrl   : setApiUrl,
            getApiUrl   : getApiUrl,
            $get: function () {
                return {
                    get apiUrl(){
                        return _apiUrl_;
                    }
                };
            }
        };

        /**
         * Get api url
         *
         * @returns {String}
         */
        function getApiUrl () {
            return _apiUrl_;
        }

        /**
         * Set the url for the Api url
         *
         * @param {String} url
         */
        function setApiUrl (url) {
            _apiUrl_ = url;
        }

    }
})();
