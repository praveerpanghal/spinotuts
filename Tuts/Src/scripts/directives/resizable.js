define(['directives/directives'], function (directives) {
    directives.directive('resizable', ['$rootScope', function ($rootScope) {
        return {
            restrict: 'A',
            //may need the model to be passed in here so we can apply changes to its left/top positions
            link: function (scope, element, attrs) {

                element.resizable(
                  {
                      maxHeight: 200,
                      minHeight: 100,
                      //aspectRatio: 16 / 9,
                      stop: function (event, ui) {
                          scope.$apply(function () {
                              scope.updateScale(
                                  scope.imageitem.name,
                                  {
                                      top: ui.position.top,
                                      left: ui.position.left
                                  },
                                  {
                                      width: ui.size.width,
                                      height: ui.size.height
                                  }
                              );
                          });
                      }
                  });
            }
        };
    }]);
});

