(function () {
    'use strict';

    angular.module('newSection.emptySection', [])
        .component('emptySection', {
            templateUrl: 'new-section/empty-section.template.html',
            controller: EmptySectionController
        });

    function EmptySectionController($routeParams) {

        var $ctrl = this;

        $ctrl.sectionTitle = $routeParams.newSection;
    }
})();