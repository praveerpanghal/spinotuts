app.service('JsonDataService',  function () {
        this.GetJsonInfo = function(name){            
       return "json/"+name.substring(name.lastIndexOf("/")+1).substr(0,name.substring(name.lastIndexOf("/")+1).indexOf("."))+".json";    
        }
     });


    app.service('httpCall',  ['$http', '$q',function ($http, $q) {
      this.PostMethod= function(url,data) {
              var deferred = $q.defer();
                   return $http.post(url,data)
                    .then(function (response) {
                deferred.resolve(response.data);
                return deferred.promise;
                 }, function (response) {
                deferred.reject(response);
                return deferred.promise;
            })
              }
     this.GetMethod= function(url) {
              var deferred = $q.defer();
                   return $http.get(url)
                    .then(function (response) {
                deferred.resolve(response.data);
                return deferred.promise;
                 }, function (response) {
                deferred.reject(response);
                return deferred.promise;
            })
              }
        }
    ]);