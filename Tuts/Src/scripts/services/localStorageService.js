define(['services/services'],
  function (services) {
      services.factory('LocalStorageService', [
        function () {

            return {
                
                isSupported: function () {
                    try {
                        return 'localStorage' in window && window['localStorage'] !== null;
                    } catch (e) {
                        return false;
                    }
                },
                
                save: function (key, value) {
                    localStorage[key] = JSON.stringify(value);
                },
                
                fetch: function (key) {
                    return localStorage[key];
                },
                
                parse: function(value) {
                    return JSON.parse(value);
                },

                clear: function (key) {
                    localStorage.removeItem(key);
                },



            };
        }]);
  });
