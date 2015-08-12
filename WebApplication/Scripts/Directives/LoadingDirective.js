(function () {
    "use strict";

    angular.module('app.directives').directive('loader', LoadingDirective);
    LoadingDirective.$inject = ['$rootScope'];

    function LoadingDirective($rootScope) {
        return function ($scope, element, attrs) {
            $scope.$on("loader_show", function () {
                return element.show();
            });
            return $scope.$on("loader_hide", function () {
                return element.hide();
            });
        };
    }
})();
