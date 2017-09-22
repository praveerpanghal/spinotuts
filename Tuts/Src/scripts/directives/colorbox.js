define(['directives/directives'], function (directives) {
    directives.directive('colorbox', ['$rootScope', function ($rootScope) {
        return {
            restrict: 'A',
            //may need the model to be passed in here so we can apply changes to its left/top positions
            link: function (scope, element, attrs) {
                $(element).colorbox({ rel: 'group3', transition: "elastic", width: "50%", height: "50%" });
            }
        };
    }]);
});
