(function () {
    "use strict";

    angular.module('app.controllers').controller('LoginCtrl', LoginCtrl);
    LoginCtrl.$inject = ["$scope", "$rootScope", "$state", "LoginService", "UserService", "AlertService"];

    function LoginCtrl($scope, $rootScope, $state, LoginService, UserService, AlertService) {
        $scope.User = {};

        $scope.doLogin = function (user) {
            LoginService.login(user).success(function (data) {
                user.access_token = data.access_token;
                UserService.setCurrentUser(user);
                $rootScope.$broadcast('authorized');
                $state.go('home');
            }).error(function (error) {
                AlertService.addError(error.error_description);
                $scope.User = {};
            });
        };
    }
})();