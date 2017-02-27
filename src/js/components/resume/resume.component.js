(function () {
    'use strict';

    angular.module('cvMakerApp')
        .component('userResume', {
            templateUrl: '../templates/components/resume/resume.template.html'
    })
        .controller('UserResumeController', UserResumeController);

    function UserResumeController() {
        var $ctrl = this;

        $ctrl.openModal = function () {
            $('#removeItem').modal('show');
        };
    }

})();