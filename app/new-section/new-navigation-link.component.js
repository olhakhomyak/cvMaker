'use strict';

angular.
module('newNavigationLink', []).
component('newNavigationLink', {
    templateUrl: 'new-section/new-navigation-link.template.html',
    controller: newNavigationLinkController,
    bindings: {
      section: '='
    }
});

function newNavigationLinkController($routeParams, cvMaker, $scope) {

    var $ctrl = this;

    $scope.sectionLink  = $ctrl.section;
}