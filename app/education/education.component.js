(function () {
    'use strict';

    angular.
    module('education').
    component('userEducation', {
        templateUrl: 'education/education.template.html',
        controller: ['$scope', '$routeParams', 'cvMaker', '$compile',
            function UserExperienceController($scope, $routeParams, cvMaker, $compile, constants) {

                var $ctrl = this;

                $ctrl.type = 'education';
                $ctrl.constants = constants;


                /**
                 * add new form
                 */
                $ctrl.addSectionItem = function () {
                    var newSchool = angular.element("<education-form>");
                    $("#education-item").append(newSchool);
                    $compile(newSchool)($scope);
                };


                /**
                 * get all user data
                 */
                cvMaker.userData().get().$promise.then(function (response) {
                    $ctrl.userInfo = response.user;
                });


                /**
                 * open modal window for removing selected content
                 */
                $ctrl.openModal = function () {
                    $('#removeItem').modal('show');
                }
            }
        ]
    });
})();
