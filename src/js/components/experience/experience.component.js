(function () {
    'use strict';

    angular.module('cvMakerApp')
        .component('userExperience', {
            templateUrl: '../templates/components/experience/experience.template.html'
        })
        .controller('UserExperienceController', UserExperienceController);

    UserExperienceController.$inject = ['$scope', 'cvMaker', '$compile'];

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