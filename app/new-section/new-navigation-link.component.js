(function () {
    'use strict';

    angular.module('newSection')
        .component('newNavigationLink', {
            templateUrl: 'new-section/new-navigation-link.template.html',
            controller: newNavigationLinkController,
            bindings: {
                section: '='
            }
        });

    function newNavigationLinkController() {

        var $ctrl = this;

        $ctrl.sectionLink = $ctrl.section;
    }

})();