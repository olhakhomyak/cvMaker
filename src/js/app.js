(function () {
    'use strict';

    angular.module('cvMakerApp', [
        'ngAnimate',
        'ngRoute',
        'ngResource',
        'ui.bootstrap'
    ])
        .config(['$locationProvider', '$routeProvider',
            function config($locationProvider, $routeProvider) {
                $locationProvider.hashPrefix('!');

                $routeProvider.when('/main', {
                    template: '<main-page></main-page>'
                }).when('/resume', {
                    template: '<user-resume></user-resume>'
                }).when('/experience', {
                    template: '<user-experience></user-experience>'
                }).when('/education', {
                    template: '<login-page></login-page>'
                }).when('/:newSection', {
                    template: '<empty-section></empty-section>'
                }).otherwise('/main');
            }
        ]);
})();

