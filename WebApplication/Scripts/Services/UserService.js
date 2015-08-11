(function () {
    "use strict";

    angular.module('app.services').service('UserService', UserService);

    function UserService(store) {

        var service = this,
        currentUser = null;

        service.setCurrentUser = function (user) {
            currentUser = user;
            store.set('user', user);
            return currentUser;
        };

        service.getCurrentUser = function () {
            if (!currentUser) {
                currentUser = store.get('user');
            }
            return currentUser;
        };

        service.isAuthenticated = function () {
            return !!service.getCurrentUser();
        };
    }
})();