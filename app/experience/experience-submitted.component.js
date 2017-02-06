(function () {
    'use strict';

    angular.module('experience')
        .component('experienceSubmitted', {
            templateUrl: 'experience/experience-submitted.template.html',
            bindings: {
                job: '='
            },
            controller: ExperienceSubmittedController
        });

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