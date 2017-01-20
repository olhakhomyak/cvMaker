(function () {
    'use strict';

    angular
        .module('resumeTextfield', [])
        .component('textField', {
            templateUrl: 'resume/textField.template.html',
            controller: TextfieldController,
            bindings: {}
        });


    function TextfieldController(cvMaker) {

        var $ctrl = this;

        $ctrl.saveResume = function (data) {
            // console.log(data);
            cvMaker.userData(data).savePersonalData().$promise.then(function () {
                // console.log(data);
            });
        };
    }

})();