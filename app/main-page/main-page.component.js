'use strict';

angular.module('mainPage').component('mainPage', {
    templateUrl: 'main-page/main-page.template.html',
    controller: ['$routeParams', 'cvMaker',
        function MainPageController($routeParams, cvMaker) {

            var $ctrl = this;

            $ctrl.user = {};

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
    ]
});
