'use strict';

angular
    .module('resumeTextfield', [])
    .component('textField', {
        templateUrl: 'resume/textField.template.html',
        controller: TextfieldController,
        bindings: {}
    });


function TextfieldController($scope, cvMaker) {
    var $ctrl = this;

    $ctrl.saveResume = function (data) {
        cvMaker.userData(JSON.stringify(data)).savePersonalData().$promise.then(function () {
            console.log(data);
        });
    };
}