(function () {
    "use strict";

    angular.module('app.controllers').controller('IndexController', IndexController);
    IndexController.$inject = ['$rootScope', '$state', 'LoginService', 'UserService'];

    function IndexController($rootScope, $state, LoginService, UserService) {
       
        var index = this;

        function logout() {
            LoginService.logout()
                .then(function (response) {
                    index.currentUser = UserService.setCurrentUser(null);
                    $state.go('login');
                }, function (error) {
                    console.log(error);
                });
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