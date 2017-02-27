(function () {
    'use strict';

    angular.module('cvMakerApp')
        .component('saveButton', {
            templateUrl: '../templates/shared/save-button.template.html'
        })
        .controller('SaveButtonController', SaveButtonController);

    SaveButtonController.$inject = ['cvMaker'];

    function SaveButtonController(cvMaker) {

        var $ctrl = this;

        cvMaker.userData().get().$promise.then(function (response) {
            $ctrl.userInfo = response.user;
        });
    }
})();