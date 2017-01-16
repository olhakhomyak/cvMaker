'use strict';

angular.module('resume', []).component('userResume', {
    templateUrl: 'resume/resume.template.html',
    controller: UserExperienceController,
    bindings: {

    }


});

function UserExperienceController($routeParams, cvMaker) {
    var $ctrl = this;

}