(function () {
    "use strict";

    angular.module('app.controllers').controller('IndexController', IndexController);
    IndexController.$inject = ['$rootScope', '$state', 'LoginService', 'UserService'];

    function IndexController($rootScope, $state, LoginService, UserService) {
       
        var index = this;

        $rootScope.onLoginScreen = false;

        $rootScope.setOnLoginScreen = function (onLoginScreen) {
            $rootScope.onLoginScreen = onLoginScreen;
        };

        function logout() {
            //TODO: Call a backend service to invalidate token
            index.currentUser = UserService.setCurrentUser(null);
            $state.go('login');
        }

        $rootScope.$on('authorized', function () {
            index.currentUser = UserService.getCurrentUser();
        });

        $rootScope.$on('unauthorized', function () {
            index.currentUser = UserService.setCurrentUser(null);
            $state.go('login');
        });

        index.logout = logout;
        index.currentUser = UserService.getCurrentUser();

    }
})();