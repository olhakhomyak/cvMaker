'use strict';

angular.
  module('education').
  component('userEducation', {
    templateUrl: 'education/education.template.html',
    controller: ['$scope', '$routeParams', 'cvMaker', '$compile',
      function UserExperienceController($scope, $routeParams, cvMaker, $compile) {

        var $ctrl = this;

        $ctrl.type = 'education';

        $ctrl.addSectionItem = function () {
              var newSchool = angular.element("<education-item>");
              $("#education-item").append(newSchool);
              $compile(newSchool)($scope);
        };

          cvMaker.userData().get().$promise.then(function (response) {
              $ctrl.userInfo = response.user;
              console.log($ctrl.userInfo);
          });

          $ctrl.openModal = function () {
              $('#removeJob').modal('show');
          }
      }
    ]
  });
