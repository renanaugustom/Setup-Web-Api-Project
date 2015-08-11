(function () {
    "use strict";

    angular.module('app.services').service('AlertService', AlertService);
    AlertService.$inject = ['$rootScope', '$timeout'];

    function AlertService($rootScope, $timeout) {
        //TODO: Lock screen when the error alert show up
        $rootScope.alerts = [];
        var alertService = {};

        alertService.addSuccess = function (mensagem) {
            var alert = { msg: mensagem, type: 'success' };
            $rootScope.alerts.push(alert);
            $timeout(function () {
                var index = $rootScope.alerts.indexOf(alert);
                if (index != -1) {
                    $rootScope.alerts.splice(index, 1);
                }
            }, 5000)
        };

        alertService.addError = function (mensagem) {
            $rootScope.alerts.push({ msg: mensagem, type: 'danger'});
        };

        alertService.closeAlert = function (index) {
            $rootScope.alerts.splice(index, 1);
        };

        alertService.cleanAlerts = function (index) {
            $rootScope.alerts = [];
        };

        return alertService;
    }
})();