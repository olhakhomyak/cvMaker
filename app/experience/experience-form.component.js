(function () {
    'use strict';

    angular.module('experience')
        .component('experienceForm', {
            templateUrl: 'experience/experience-form.template.html',
            bindings: {
              job:'='
            },
            controller: ExperienceFormController
        });

    function ExperienceFormController($scope, cvMaker, $timeout, $window) {

        var $ctrl = this;

        //DATE FORMAT
        $scope.clear = function () {
            $scope.job.start_date = null;
            $scope.job.end_date = null;
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


        /**
         * Add or remove item in the list of responsibilities
         * @constructor
         */
        $ctrl.items = [];

        $ctrl.AddItem = function () {
            $ctrl.items.push($ctrl.newItem);
            $ctrl.newItem = null;
        };

        $ctrl.saveJobData = function (job) {
            job.start_date = new Date(job.start_date).toISOString().slice(0, 19).replace('T', ' ');
            job.end_date = new Date(job.end_date).toISOString().slice(0, 19).replace('T', ' ');
            cvMaker.userData(JSON.stringify(job)).saveJob().$promise.then(function () {
                console.log('job was saved');

                $timeout(function () {
                    $window.location.reload();
                }, 1000);
            });
        }
    }

})();