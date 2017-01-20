(function () {
    'use strict';

    angular
        .module('resume.resumeTextfield', [])
        .component('textField', {
            templateUrl: 'resume/textField.template.html',
            controller: TextfieldController
        });


    function TextfieldController(cvMaker) {

        var $ctrl = this;

        $ctrl.saveResume = function (data) {
            cvMaker.userData(data).savePersonalData().$promise.then(function () {
            });
        };
    }

})();