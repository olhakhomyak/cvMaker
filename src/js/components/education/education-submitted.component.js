(function () {
    'use strict';

    angular.module('cvMakerApp')
        .component('educationSubmitted', {
            templateUrl: '../templates/components/education/education-submitted.template.html',
            bindings: {
              school: '='
            }
        })
        .controller('EducationSubmittedController', EducationSubmittedController);

    EducationSubmittedController.$inject = ['constants'];

    function EducationSubmittedController(constants) {

        var $ctrl = this;

        $ctrl.constants = constants;

        $ctrl.openModal = function () {
            $('#removeItem').modal('show');
        };

        $ctrl.converted_start_date = new Date($ctrl.school.start_date);
        $ctrl.converted_end_date = new Date($ctrl.school.end_date);
    }
})();