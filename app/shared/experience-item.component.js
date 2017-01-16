'use strict';

angular.module('experienceItem', [])
    .component('experienceItem', {
        templateUrl: 'shared/experience-item.template.html',
        controller: ['$scope', 'cvMaker', '$timeout', '$window',
            function ExperienceItemController($scope, cvMaker, $timeout, $window) {

                var $ctrl = this;

                /**
                 * Add or remove item in the list of responsibilities
                 * @constructor
                 */
                $ctrl.items = [];

                $ctrl.AddItem = function () {
                    $ctrl.items.push($ctrl.newItem);
                    $ctrl.newItem = null;
                };

                $ctrl.RemoveItem = function (item) {
                    $ctrl.items.splice($ctrl.items.indexOf(item), 1);
                };

                $scope.job = {
                    user_id: 2
                };

                $ctrl.saveJobData = function (job) {
                    job.start_date = new Date(job.start_date).toISOString().slice(0, 19).replace('T', ' ');
                    job.end_date = new Date(job.end_date).toISOString().slice(0, 19).replace('T', ' ');
                    console.log(job);
                    cvMaker.userData(JSON.stringify(job)).saveJob().$promise.then(function () {
                        console.log('saved');

                        $timeout(function(){
                            $window.location.reload();
                        }, 1000);
                    });
                }
            }
        ]
    });
