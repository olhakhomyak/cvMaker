(function () {
    'use strict';

    angular.module('educationItem', [])
        .component('educationItem', {
            templateUrl: 'shared/education-item.template.html',
            controller: EducationItemController
        });

    function EducationItemController($scope, cvMaker, $timeout, $window) {

        var $ctrl = this;

        $scope.school = {
            user_id: 2
        };

        $ctrl.saveSchoolData = function (school) {
            school.start_date = new Date(school.start_date).toISOString().slice(0, 19).replace('T', ' ');
            school.end_date = new Date(school.end_date).toISOString().slice(0, 19).replace('T', ' ');
            cvMaker.userData(school).saveSchool().$promise.then(function () {
                console.log('school was saved');

                $timeout(function () {
                    $window.location.reload();
                }, 1000);
            });
        }
    }
})();