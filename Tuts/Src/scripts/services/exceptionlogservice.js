define(['services/services'],
  function (services) {
      services.factory('exceptionlogservice', [
        function () {
            return {
               
                GetException: function (data) {
                    return data;
                }
            };
        }]);
  });
