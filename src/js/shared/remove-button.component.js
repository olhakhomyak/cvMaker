(function () {
    'use strict';

    angular.module('cvMakerApp')
        .component('removeBtn', {
            templateUrl: '../templates/shared/remove-button.template.html',
            bindings: {
                data: "=",
                type: "@"
            }
        })
        .controller('RemoveBtnController', RemoveBtnController);

    RemoveBtnController.$inject = ['cvMaker'];

    function RemoveBtnController(cvMaker) {

        var $ctrl = this;

        switch ($ctrl.type) {
            case 'schoolItem':
                cvMaker.currentItem.type = $ctrl.type;
                cvMaker.currentItem.school.id = $ctrl.data.schoolId;
                break;
            case 'jobItem':
                cvMaker.currentItem.type = $ctrl.type;
                cvMaker.currentItem.job.id = $ctrl.data.jobId;
                break;
            case 'resumeAll':
                cvMaker.currentItem.type = $ctrl.type;
                break;
        }
    }
})();