(function () {
    'use strict';

    angular.module('shared')
        .component('saveButton', {
            templateUrl: 'directives/shared/save-button.template.html',
            controller: SaveButtonController
        });

    function SaveButtonController(cvMaker) {

        var $ctrl = this;

        cvMaker.userData().get().$promise.then(function (response) {
            $ctrl.userInfo = response.user;
        });
    }
})();