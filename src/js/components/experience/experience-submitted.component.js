(function () {
    'use strict';

    angular.module('cvMakerApp')
        .component('experienceSubmitted', {
            templateUrl: '../templates/components/experience/experience-submitted.template.html',
            bindings: {
                job: '='
            }
        })
        .controller('ExperienceSubmittedController', ExperienceSubmittedController);

    function ExperienceSubmittedController() {

        var $ctrl = this;

        /**
         * Add or remove item in the list of responsibilities
         * @constructor
         */
        $ctrl.RemoveItem = function (item) {
            $ctrl.items.splice($ctrl.items.indexOf(item), 1);
        };


        /**
         * Open modal window to remove education item
         */
        $ctrl.openModal = function () {
            $('#removeItem').modal('show');
        };
    }
})();