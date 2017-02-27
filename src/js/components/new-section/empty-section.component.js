(function () {
    'use strict';

    angular.module('cvMakerApp')
        .component('emptySection', {
            templateUrl: '../templates/components/new-section/empty-section.template.html'
        })
        .controller('EmptySectionController', EmptySectionController);

    EmptySectionController.$inject = ['$routeParams'];

    function EmptySectionController($routeParams) {

        var $ctrl = this;

        $ctrl.sectionTitle = $routeParams.newSection;
    }
})();