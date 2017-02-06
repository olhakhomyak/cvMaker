(function () {
    'use strict';

    angular.module('education')
        .component('educationForm', {
            templateUrl: 'education/education-form.template.html',
            controller: EducationFormController
        });

    function EducationFormController($scope, cvMaker, $timeout, $window, $location) {

        var $ctrl = this;

        //DATE FORMAT
        $scope.clear = function () {
            $scope.school.start_date = null;
            $scope.school.end_date = null;
        };
        $scope.openStartDate = function($event) {
            $scope.status.openedStartDate = true;
        };
        $scope.openEndDate = function($event) {
            $scope.status.openedEndDate = true;
        };
        $scope.dateOptions = {
            formatYear: 'yyyy',
            formatMonth: 'MMMM',
            minMode: 'month'
        };
        $scope.dateFormat = 'MMMM, yyyy';
        $scope.status = {
            openedStartDate: false,
            openedEndDate: false
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
        };
    }
})();