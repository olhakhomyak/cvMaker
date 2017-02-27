(function () {
    'use strict';

    angular.module('education')
        .component('educationForm', {
            templateUrl: 'education/education-form.template.html',
            controller: EducationFormController
        });

    function EducationFormController($scope, cvMaker, $timeout, $window, $location) {

        var $ctrl = this;

        //DATE FORMAT
        $scope.clear = function () {
            $scope.school.start_date = null;
            $scope.school.end_date = null;
        };
        $scope.openStartDate = function($event) {
            $scope.status.openedStartDate = true;
        };
        $scope.openEndDate = function($event) {
            $scope.status.openedEndDate = true;
        };
        $scope.dateOptions = {
            formatYear: 'yyyy',
            formatMonth: 'MMMM',
            minMode: 'month'
        };
        $scope.dateFormat = 'MMMM, yyyy';
        $scope.status = {
            openedStartDate: false,
            openedEndDate: false
        };


        $ctrl.saveSchoolData = function (school) {
            school.start_date = new Date(school.start_date).toISOString().slice(0, 19).replace('T', ' ');
            school.end_date = new Date(school.end_date).toISOString().slice(0, 19).replace('T', ' ');
            cvMaker.userData(school).saveSchool().$promise.then(function () {
                console.log('school was saved');

                $timeout(function () {
                    $window.location.reload();
                }, 1000);
            });
        };
    }
})();
(function () {
    'use strict';

    angular.module('education')
        .component('educationSubmitted', {
            templateUrl: 'education/education-submitted.template.html',
            bindings: {
              school: '='
            },
            controller: EducationSubmittedController
        });

    function EducationSubmittedController(constants) {

        var $ctrl = this;

        $ctrl.constants = constants;

        $ctrl.openModal = function () {
            $('#removeItem').modal('show');
        };

        $ctrl.converted_start_date = new Date($ctrl.school.start_date);
        $ctrl.converted_end_date = new Date($ctrl.school.end_date);
    }
})();
(function () {
    'use strict';

    angular.
    module('education').
    component('userEducation', {
        templateUrl: 'education/education.template.html',
        controller: ['$scope', '$routeParams', 'cvMaker', '$compile',
            function UserExperienceController($scope, $routeParams, cvMaker, $compile, constants) {

                var $ctrl = this;

                $ctrl.type = 'education';
                $ctrl.constants = constants;


                /**
                 * add new form
                 */
                $ctrl.addSectionItem = function () {
                    var newSchool = angular.element("<education-form>");
                    $("#education-item").append(newSchool);
                    $compile(newSchool)($scope);
                };


                /**
                 * get all user data
                 */
                cvMaker.userData().get().$promise.then(function (response) {
                    $ctrl.userInfo = response.user;
                });


                /**
                 * open modal window for removing selected content
                 */
                $ctrl.openModal = function () {
                    $('#removeItem').modal('show');
                };
            }
        ]
    });
})();

(function () {
    'use strict';

    angular.module('education', [
        'ngRoute',
        'main.cvMaker'
    ]);
})();

(function () {
    'use strict';

    angular.module('experience')
        .component('experienceForm', {
            templateUrl: 'experience/experience-form.template.html',
            bindings: {
              job:'='
            },
            controller: ExperienceFormController
        });

    function ExperienceFormController($scope, cvMaker, $timeout, $window) {

        var $ctrl = this;

        //DATE FORMAT
        $scope.clear = function () {
            $scope.job.start_date = null;
            $scope.job.end_date = null;
        };
        $scope.openStartDate = function($event) {
            $scope.status.openedStartDate = true;
        };
        $scope.openEndDate = function($event) {
            $scope.status.openedEndDate = true;
        };
        $scope.dateOptions = {
            formatYear: 'yyyy',
            formatMonth: 'MMMM',
            minMode: 'month'
        };
        $scope.dateFormat = 'MMMM, yyyy';
        $scope.status = {
            openedStartDate: false,
            openedEndDate: false
        };


        /**
         * Add or remove item in the list of responsibilities
         * @constructor
         */
        $ctrl.items = [];

        $ctrl.AddItem = function () {
            $ctrl.items.push($ctrl.newItem);
            $ctrl.newItem = null;
        };

        $ctrl.saveJobData = function (job) {
            job.start_date = new Date(job.start_date).toISOString().slice(0, 19).replace('T', ' ');
            job.end_date = new Date(job.end_date).toISOString().slice(0, 19).replace('T', ' ');
            cvMaker.userData(JSON.stringify(job)).saveJob().$promise.then(function () {
                console.log('job was saved');

                $timeout(function () {
                    $window.location.reload();
                }, 1000);
            });
        };
    }

})();
(function () {
    'use strict';

    angular.module('experience')
        .component('experienceSubmitted', {
            templateUrl: 'experience/experience-submitted.template.html',
            bindings: {
                job: '='
            },
            controller: ExperienceSubmittedController
        });

    function ExperienceSubmittedController() {

        var $ctrl = this;

        /**
         * Add or remove item in the list of responsibilities
         * @constructor
         */
        $ctrl.RemoveItem = function (item) {
            $ctrl.items.splice($ctrl.items.indexOf(item), 1);
        };


        /**
         * Open modal window to remove education item
         */
        $ctrl.openModal = function () {
            $('#removeItem').modal('show');
        };
    }
})();
(function () {
    'use strict';

    angular.module('experience')
        .component('userExperience', {
            templateUrl: 'experience/experience.template.html',
            controller: UserExperienceController
        });

    function UserExperienceController($scope, cvMaker, $compile) {

        var $ctrl = this;

        $ctrl.type = 'experience';

        $ctrl.addSectionItem = function () {
            var newJob = angular.element("<experience-form>");
            $("#job-experience").append(newJob);
            $compile(newJob)($scope);
        };

        cvMaker.userData().get().$promise.then(function (response) {
            $ctrl.userInfo = response.user;
        });
    }
})();
'use strict';

angular.module('experience', [
  'ngRoute',
  'main.cvMaker'
]);

(function () {
    'use strict';

    angular.module('main', ['main.cvMaker']);
})();

(function () {
    'use strict';

    angular.module('mainPage')
        .component('mainPage', {
            templateUrl: 'main-page/main-page.template.html',
            controller: MainPageController
    });

    function MainPageController(cvMaker) {

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

})();

(function () {
    'use strict';

    angular.module('mainPage', ['main.cvMaker']);
})();


(function () {
    'use strict';

    angular.module('newSection')
        .component('emptySection', {
            templateUrl: 'new-section/empty-section.template.html',
            controller: EmptySectionController
        });

    function EmptySectionController($routeParams) {

        var $ctrl = this;

        $ctrl.sectionTitle = $routeParams.newSection;
    }
})();
(function () {
    'use strict';

    angular.module('newSection')
        .component('newNavigationLink', {
            templateUrl: 'new-section/new-navigation-link.template.html',
            controller: newNavigationLinkController,
            bindings: {
                section: '='
            }
        });

    function newNavigationLinkController() {

        var $ctrl = this;

        $ctrl.sectionLink = $ctrl.section;
    }

})();
(function () {
    'use strict';

    angular.module('newSection')
        .component('newSectionPopup', {
            templateUrl: 'new-section/new-section-popup.template.html',
            controller: NewSectionController
        });

    function NewSectionController($scope, $routeParams, $compile) {

        var $ctrl = this;

        $ctrl.section = {
            name: null,
            count: 1
        };
        $ctrl.newSection = {
            name: null
        };

        $ctrl.addSection = function () {
            $ctrl.newSection.name = $ctrl.section.name;
            var newSection = angular.element("<new-navigation-link section='$ctrl.newSection.name'></new-navigation-link>");
            $("#addNewSectionLink").before(newSection);
            $compile(newSection)($scope);

            $ctrl.section.count++;

            $routeParams.newSection = $ctrl.section.count + "/" + $ctrl.section.name;

            $ctrl.section.name = '';
            $("#addSection").modal('hide');
        };
    }

})();
(function () {
  'use strict';

  angular.module('newSection', [
    'ngRoute',
    'main.cvMaker'
  ]);
})();

(function () {
    'use strict';

    angular.module('resume', [])
        .component('userResume', {
            templateUrl: 'resume/resume.template.html',
            controller: UserResumeController
    });

    function UserResumeController() {
        var $ctrl = this;

        $ctrl.openModal = function () {
            $('#removeItem').modal('show');
        };
    }

})();
(function () {
    'use strict';

    angular
        .module('resume', [
            'ngRoute',
            'main.cvMaker'
        ]);
})();


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
(function () {
    'use strict';

    angular.module('shared')
        .component('addNewSectionBtn', {
            templateUrl: 'shared/add-new-section-button.template.html',
            bindings: {
                type: "="
            },
            controller: AddNewSectionBtnController
        });


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
(function () {
    'use strict';
    angular
        .module('shared')
        .directive('isActiveNav', [ '$location', function($location) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                scope.location = $location;
                var path = attrs.href;
                path = path.substring(1);
                console.log(path);
                scope.$watch('location.path()', function(newPath) {
                    if(path === '!' + newPath) {
                        element.parent().addClass('active');
                    } else {
                        element.parent().removeClass('active');
                    }
                });
            }
        };
    }]);
})();
(function () {
    'use strict';

    angular.module('shared')
        .component('removeBtn', {
            templateUrl: 'shared/remove-button.template.html',
            bindings: {
                data: "=",
                type: "@"
            },
            controller: RemoveBtnController
        });

    function RemoveBtnController(cvMaker) {

        var $ctrl = this;

        switch ($ctrl.type) {
            case 'schoolItem':
                cvMaker.currentItem.type = $ctrl.type;
                cvMaker.currentItem.school.id = $ctrl.data.schoolId;
                break;
            case 'jobItem':
                cvMaker.currentItem.type = $ctrl.type;
                cvMaker.currentItem.job.id = $ctrl.data.jobId;
                break;
            case 'resumeAll':
                cvMaker.currentItem.type = $ctrl.type;
                break;
        }
    }
})();
(function () {
    'use strict';

    angular.module('shared')
        .component('removePopup', {
            templateUrl: 'shared/remove-popup.template.html',
            controller: RemovePopupController,
            bindings: {
                item: "="
            }
        });

    function RemovePopupController(cvMaker, $window, $timeout) {

        var $ctrl = this;

        $ctrl.removeItem = function () {
            switch (cvMaker.currentItem.type) {
                case 'schoolItem': {
                    cvMaker.userData().removeSchool().$promise.then(function () {
                        console.log('school was removed');
                        $timeout(function () {
                            $window.location.reload();
                        }, 1000);
                    });
                }
                    break;
                case 'jobItem': {
                    cvMaker.userData().removeJob().$promise.then(function () {
                        console.log('job was removed');
                        $timeout(function () {
                            $window.location.reload();
                        }, 1000);
                    });
                }
                    break;
                case 'resumeAll': {
                    cvMaker.userData().removeResume().$promise.then(function () {
                        console.log('resume was removed');
                        $timeout(function () {
                            $window.location.reload();
                        }, 1000);
                    });
                    break;
                }
            }
            $('#removeJob').modal('hide');

        };
    }
})();
(function () {
    'use strict';

    angular.module('shared')
        .component('saveButton', {
            templateUrl: 'shared/save-button.template.html',
            controller: SaveButtonController
        });

    function SaveButtonController(cvMaker) {

        var $ctrl = this;

        cvMaker.userData().get().$promise.then(function (response) {
            $ctrl.userInfo = response.user;
        });
    }
})();
(function () {
    'use strict';

    angular
        .module('shared', [
            'ngRoute',
            'main.cvMaker'
        ]);
})();

