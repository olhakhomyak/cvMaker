(function () {
    'use strict';

    angular.module('cvMakerApp')
        .component('removePopup', {
            templateUrl: '../templates/shared/remove-popup.template.html',
            bindings: {
                item: "="
            }
        })
        .controller('RemovePopupController', RemovePopupController);

    RemovePopupController.$inject = ['cvMaker', '$window', '$timeout'];

    function RemovePopupController(cvMaker, $window, $timeout) {

        var $ctrl = this;

        $ctrl.removeItem = function () {
            switch (cvMaker.currentItem.type) {
                case 'schoolItem': {
                    cvMaker.userData().removeSchool().$promise.then(function () {
                        console.log('school was removed');
                        $timeout(function () {
                            $window.location.reload();
                        }, 1000);
                    });
                }
                    break;
                case 'jobItem': {
                    cvMaker.userData().removeJob().$promise.then(function () {
                        console.log('job was removed');
                        $timeout(function () {
                            $window.location.reload();
                        }, 1000);
                    });
                }
                    break;
                case 'resumeAll': {
                    cvMaker.userData().removeResume().$promise.then(function () {
                        console.log('resume was removed');
                        $timeout(function () {
                            $window.location.reload();
                        }, 1000);
                    });
                    break;
                }
            }
            $('#removeJob').modal('hide');

        };
    }
})();