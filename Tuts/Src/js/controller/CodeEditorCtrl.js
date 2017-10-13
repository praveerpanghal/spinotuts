app.controller('CodeEditorCtrl', ['$route','JsonDataService','httpCall',
function ($route,JsonDataService,httpCall) {
    var vm=this;
    var jsonurl=JsonDataService.GetJsonInfo($route.current.templateUrl);
    httpCall.GetMethod(jsonurl)               
        .then(function(result) {   
        vm.JsonVals = result;  
     }, 
     function(error) { 
        console.log(error.statusText);
      $log.info(error);
    });

    vm.data="<h2>welcome to live editor</h2>";
    // new Jotted(document.querySelector('#jotted-demo-bin'), 
    new Jotted(document.querySelector('#jotted-demo-codemirror'), 
    {
     files: [
        {type: 'html',content: vm.data},
      {type: 'css',content: ''},
        {type: 'js',content: ''}
      ],
      pane: 'html',    
        plugins:[
        'codemirror'
      ]
    });
}]);