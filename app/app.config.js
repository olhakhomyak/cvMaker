(function () {
    'use strict';

    angular.module('cvMakerApp')
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
                    template: '<user-education></user-education>'
                }).when('/:newSection', {
                    template: '<empty-section></empty-section>'
                }).otherwise('/main');
            }
        ]);
})();

