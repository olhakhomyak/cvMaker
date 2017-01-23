(function () {
    'use strict';

    angular.module('newSection')
        .component('newSectionPopup', {
            templateUrl: 'new-section/new-section-popup.template.html',
            controller: NewSectionController
        });

    function NewSectionController($scope, $routeParams, $compile) {

        var $ctrl = this;

        $ctrl.section = {
            name: null,
            count: 1
        };
        $ctrl.newSection = {
            name: null
        };

        $ctrl.addSection = function () {
            $ctrl.newSection.name = $ctrl.section.name;
            var newSection = angular.element("<new-navigation-link section='$ctrl.newSection.name'></new-navigation-link>");
            $("#addNewSectionLink").before(newSection);
            $compile(newSection)($scope);

            $ctrl.section.count++;

            $routeParams.newSection = $ctrl.section.count + "/" + $ctrl.section.name;

            $ctrl.section.name = '';
            $("#addSection").modal('hide');
        }
    }

})();