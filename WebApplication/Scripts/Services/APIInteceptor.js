﻿(function () {
    "use strict";

    angular.module('app.services').service('APIInterceptor', APIInterceptor);
    APIInterceptor.$inject = ['$rootScope', 'UserService'];

    function APIInterceptor($rootScope, UserService) {

        var service = this;

        service.request = function (config) {
            var currentUser = UserService.getCurrentUser(),
                access_token = currentUser ? currentUser.access_token : null;

            if (access_token) {
                config.headers.authorization = access_token;
            }
            return config;
        };

        service.responseError = function (response) {
            if (response.status === 401) {
                $rootScope.$broadcast('unauthorized');
            }
            return response;
        };

    }
})();