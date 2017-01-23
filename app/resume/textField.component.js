(function () {
    'use strict';

    angular
        .module('resume')
        .component('textField', {
            templateUrl: 'resume/textField.template.html',
            controller: TextfieldController,
            bindings: {}
        });


    function TextfieldController(cvMaker, $scope) {

        var $ctrl = this;

        cvMaker.userData().get().$promise.then(function (response) {
            $ctrl.userInfo = response.user.resume;

            $scope.data = {
                resume: $ctrl.userInfo
            };
        });

        $ctrl.saveResume = function (data) {
            console.log(data);
            cvMaker.userData(data).savePersonalData().$promise.then(function () {

            });
        };
    }

})();