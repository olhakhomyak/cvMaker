(function () {
    'use strict';

    angular.
    module('cvMakerApp')
        .component('userEducation', {
            templateUrl: '../templates/components/education/education.template.html'
        })
        .controller('UserExperienceController', UserExperienceController);

    UserExperienceController.$inject = ['$scope', '$routeParams', 'cvMaker', '$compile', 'constants'];

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
                };
            }
})();
