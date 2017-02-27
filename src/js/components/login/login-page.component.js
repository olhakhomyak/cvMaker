(function () {
    'use strict';

    angular.module('cvMakerApp')
        .component('loginPage', {
            templateUrl: '../templates/components/login/login-page.template.html'
        })
        .controller('LoginPageController', LoginPageController);

    LoginPageController.$inject = ['$scope', 'cvMaker', 'constants'];

    function LoginPageController($scope, cvMaker, constants) {

        var $ctrl = this;

    }

})();
