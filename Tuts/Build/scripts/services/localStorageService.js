define(["services/services"],function(e){e.factory("LocalStorageService",[function(){return{isSupported:function(){try{return"localStorage"in window&&null!==window.localStorage}catch(e){return!1}},save:function(e,r){localStorage[e]=JSON.stringify(r)},fetch:function(e){return localStorage[e]},parse:function(e){return JSON.parse(e)},clear:function(e){localStorage.removeItem(e)}}}])});