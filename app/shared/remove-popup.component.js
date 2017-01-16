'use strict';

angular.
module('removePopup', []).
component('removePopup', {
    templateUrl: 'shared/remove-popup.template.html',
    controller: RemovePopupController,
    bindings: {
       item: "="
    }
});

function RemovePopupController(cvMaker, $window, $timeout) {

    var $ctrl = this;

    $ctrl.removeJob = function () {
        cvMaker.userData().removeJob().$promise.then(function () {
           console.log('removed');
        });
        $('#removeJob').modal('hide');

    }
}