'use strict';

angular.
module('emptySection', []).
component('emptySection', {
    templateUrl: 'new-section/empty-section.template.html',
    controller: EmptySectionController
});

function EmptySectionController($routeParams, cvMaker, $scope) {

    var $ctrl = this;

    $scope.sectionTitle = $routeParams.newSection;
}