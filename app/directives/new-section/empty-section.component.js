(function () {
    'use strict';

    angular.module('newSection')
        .component('emptySection', {
            templateUrl: 'directives/new-section/empty-section.template.html',
            controller: EmptySectionController
        });

    function EmptySectionController($routeParams) {

        var $ctrl = this;

        $ctrl.sectionTitle = $routeParams.newSection;
    }
})();