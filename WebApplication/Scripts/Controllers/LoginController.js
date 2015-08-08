(function () {
    "use strict";

    angular.module('app.controllers').controller('LoginCtrl', LoginCtrl);

    function LoginCtrl($scope) {

        $scope.doLogin = function (user) {
            LoginService.login(user, function (data) {
                user.access_token = response.data.id;
                UserService.setCurrentUser(user);
                $rootScope.$broadcast('authorized');
                $state.go('index');
            }, function (error) {
                alertService.addError(error.ExceptionMessage ? error.ExceptionMessage : error.Message);
            });
        };

    }
})();