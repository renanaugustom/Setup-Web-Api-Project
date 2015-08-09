(function () {
    "use strict";

    angular.module('app.services').service('LoginService', LoginService);

    function LoginService($http, AUTHENTICATONSERVER_URI) {

        var service = this, tokenPath = 'security/token', path = 'User/';
        var customHeaders = {
            'Content-Type': 'application/x-www-form-urlencoded',
        };

        function getTokenUrl() {
            return AUTHENTICATONSERVER_URI + tokenPath;
        }

        service.login = function (credentials) {
            var params = {
                username: credentials.user,
                password: credentials.password,
                grant_type: 'password'
            };
            return $http.post(getTokenUrl(), $.param(params), { headers: customHeaders });
        };
    }
})();