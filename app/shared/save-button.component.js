'use strict';

angular.
module('saveButton', []).
component('saveButton', {
    templateUrl: 'shared/save-button.template.html',
    controller: ['$routeParams', 'cvMaker', '$timeout', '$window',
        function SaveButtonController($routeParams, cvMaker, $timeout, $window) {

            var $ctrl = this;

            cvMaker.userData().get().$promise.then(function (response) {
                $ctrl.userInfo = response.user;
            });


        }
    ]
});
