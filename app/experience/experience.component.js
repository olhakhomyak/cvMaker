(function () {
    'use strict';

    angular.module('experience')
        .component('userExperience', {
            templateUrl: 'experience/experience.template.html',
            controller: UserExperienceController
        });

    function UserExperienceController($scope, cvMaker, $compile) {

        var $ctrl = this;

        $ctrl.type = 'experience';

        $ctrl.addSectionItem = function () {
            var newJob = angular.element("<experience-form>");
            $("#job-experience").append(newJob);
            $compile(newJob)($scope);
        };

        cvMaker.userData().get().$promise.then(function (response) {
            $ctrl.userInfo = response.user;
        });
    }
})();