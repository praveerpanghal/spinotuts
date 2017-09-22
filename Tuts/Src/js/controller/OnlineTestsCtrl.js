app.controller('OnlineTestsCtrl', ['$scope','$route','JsonDataService','httpCall',function ($scope,$route,JsonDataService,httpCall) {
      var jsonurl=JsonDataService.GetJsonInfo($route.current.templateUrl);
      httpCall.GetMethod(jsonurl)               
          .then(function(result) {   
          $scope.JsonVals = result;  
       }, 
       function(error) { 
        $log.info(error);
      });
      $scope.testLists=[
      {"category":"Html","test_title":"Demo Course Name 1","test_url":"demo_course_name_1","duration":"60","test_id":"1"},
      {"category":"Css","test_title":"Demo Course Name 2","test_url":"demo_course_name_2","duration":"60","test_id":"2"},
      {"category":"Javascript","test_title":"Demo Course Name 3","test_url":"demo_course_name_3","duration":"60","test_id":"3"},
      {"category":"Bootstrap","test_title":"Demo Course Name 4","test_url":"demo_course_name_4","duration":"60","test_id":"4"},
      {"category":"Html","test_title":"Demo Course Name 5","test_url":"demo_course_name_5","duration":"60","test_id":"5"},
      {"category":"Css","test_title":"Demo Course Name 6","test_url":"demo_course_name_6","duration":"60","test_id":"6"},
      {"category":"Bootstrap","test_title":"Demo Course Name 7","test_url":"demo_course_name_7","duration":"60","test_id":"7"},
      {"category":"Javascript","test_title":"Demo Course Name 8","test_url":"demo_course_name_8","duration":"60","test_id":"8"},
      {"category":"Html","test_title":"Demo Course Name 9","test_url":"demo_course_name_9","duration":"60","test_id":"9"},
      {"category":"JQuery","test_title":"Demo Course Name 10","test_url":"demo_course_name_10","duration":"60","test_id":"10"}
      ];
}]);