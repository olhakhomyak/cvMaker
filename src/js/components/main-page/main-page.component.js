(function () {
    'use strict';

    angular.module('cvMakerApp')
        .component('mainPage', {
            templateUrl: '../templates/components/main-page/main-page.template.html'
    })
        .controller('MainPageController', MainPageController);

    MainPageController.$inject = ['cvMaker', 'constants'];

    function MainPageController(cvMaker, constants) {

        var $ctrl = this;

        $ctrl.user = {};

        $ctrl.constants = constants;

        $ctrl.edit = function () {
            $ctrl.user.edit = !$ctrl.user.edit;
        };

        $ctrl.addSection = function () {
            $('#addSection').modal('show');
        };

        cvMaker.userData().get().$promise.then(function (response) {
            $ctrl.userInfo = response.user;
            console.log($ctrl.userInfo);
        });
    }

})();
