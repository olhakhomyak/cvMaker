(function () {
    'use strict';

    angular.module('cvMakerApp')
        .component('newNavigationLink', {
            templateUrl: '../templates/components/new-section/new-navigation-link.template.html',
            bindings: {
                section: '='
            }
        })
        .controller('newNavigationLinkController', newNavigationLinkController);

    function newNavigationLinkController() {

        var $ctrl = this;

        $ctrl.sectionLink = $ctrl.section;
    }

})();