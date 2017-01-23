(function () {
    'use strict';

    angular.module('education')
        .component('educationSubmitted', {
            templateUrl: 'education/education-submitted.template.html',
            bindings: {
              school: '='
            },
            controller: EducationSubmittedController
        });

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