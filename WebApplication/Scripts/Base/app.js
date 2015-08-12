angular.module('app.controllers', []);
angular.module('app.services', []);
angular.module('app.directives', []);

var app = angular.module("MyApp", ['ui.router', 'angular-storage', 'app.controllers', 'app.services', 'app.directives', 'app.routes']);

app.constant('AUTHENTICATONSERVER_URI', 'http://localhost:7001/');
app.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

    $httpProvider.interceptors.push('LoadingInterceptor');
    $httpProvider.interceptors.push('APIInterceptor');
});