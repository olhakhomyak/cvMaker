'use strict';

angular.module('experience').component('userExperience', {
    templateUrl: 'experience/experience.template.html',
    controller: ['$scope', 'cvMaker', '$compile',
        function UserExperienceController($scope, cvMaker, $compile) {

            var $ctrl = this;

            $ctrl.type = 'experience';

            $ctrl.addSectionItem = function () {
                var newJob = angular.element("<experience-item>");
                $("#job-experience").append(newJob);
                $compile(newJob)($scope);
            };

            cvMaker.userData().get().$promise.then(function (response) {
                $ctrl.userInfo = response.user;
            });

            $ctrl.openModal = function () {
                $('#removeJob').modal('show');
            };
        }
    ]
});
