(function () {
    'use strict';

    angular.module('resume', [])
        .component('userResume', {
            templateUrl: 'resume/resume.template.html',
            controller: UserResumeController
    });
    
    function UserResumeController() {

    }

})();