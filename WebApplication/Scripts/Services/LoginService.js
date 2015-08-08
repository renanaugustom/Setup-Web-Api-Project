(function () {
    "use strict";

    angular.module('app.services').service('LoginService', LoginService);

    function LoginService($http) {

        var service = this,
            path = 'Users/';

        function getUrl() {
            return ENDPOINT_URI + path;
        }

        function getLogUrl(action) {
            return getUrl() + action;
        }

        service.login = function (credentials) {
            return $http.post(getLogUrl('login'), credentials);
        };

        service.logout = function () {
            return $http.post(getLogUrl('logout'));
        };

        service.register = function (user) {
            return $http.post(getUrl(), user);
        };
    }
})();