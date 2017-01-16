(function () {
    'use strict';

    angular.module('addNewSectionBtn', [])
        .component('addNewSectionBtn', {
            templateUrl: 'shared/add-new-section-button.template.html',
            bindings: {
                type: "="
            },
            controller: ['$scope', '$routeParams', 'cvMaker', '$compile',
                function AddNewSectionBtnController($scope, $routeParams, cvMaker, $compile) {
                    var $ctrl = this;

                    $scope.buttonText = null;

                    switch ($ctrl.type) {
                        case 'experience': $scope.buttonText = "Add company";
                            break;
                        case 'education': $scope.buttonText = "Add school";
                            break;
                    }

                }
            ]
        });

})();