(function () {
    "use strict";

    angular.module('app.controllers').controller('HomeController', HomeController);
    HomeController.$inject = ['$scope'];

    function HomeController($scope) {
        $scope.setOnLoginScreen(false);
    }
})();