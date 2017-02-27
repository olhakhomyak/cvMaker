(function () {
    'use strict';

    angular.module('cvMakerApp')
        .component('addNewSectionBtn', {
            templateUrl: '../templates/shared/add-new-section-button.template.html',
            bindings: {
                type: "="
            }
        })
        .controller('AddNewSectionBtnController', AddNewSectionBtnController);


    function AddNewSectionBtnController() {
        var $ctrl = this;

        $ctrl.buttonText = null;

        switch ($ctrl.type) {
            case 'experience':
                $ctrl.buttonText = "Add one more company";
                break;
            case 'education':
                $ctrl.buttonText = "Add one more school";
                break;
        }
    }

})();