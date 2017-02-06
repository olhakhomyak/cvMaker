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