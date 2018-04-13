"use strict";angular.module("ngLocale",[],["$provide",function(n){function e(n){n+="";var e=n.indexOf(".");return e==-1?0:n.length-e-1}function d(n,d){var t=d;void 0===t&&(t=Math.min(e(n),3));var a=Math.pow(10,t),u=(n*a|0)%a;return{v:t,f:u}}var t={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};n.value("$locale",{DATETIME_FORMATS:{AMPMS:["a.g","a.k"],DAY:["tsuʔntsɨ","tsuʔukpà","tsuʔughɔe","tsuʔutɔ̀mlò","tsuʔumè","tsuʔughɨ̂m","tsuʔndzɨkɔʔɔ"],ERANAMES:["Sěe Kɨ̀lesto","Bǎa Kɨ̀lesto"],ERAS:["SK","BK"],FIRSTDAYOFWEEK:0,MONTH:["ndzɔ̀ŋɔ̀nùm","ndzɔ̀ŋɔ̀kƗ̀zùʔ","ndzɔ̀ŋɔ̀tƗ̀dʉ̀ghà","ndzɔ̀ŋɔ̀tǎafʉ̄ghā","ndzɔ̀ŋèsèe","ndzɔ̀ŋɔ̀nzùghò","ndzɔ̀ŋɔ̀dùmlo","ndzɔ̀ŋɔ̀kwîfɔ̀e","ndzɔ̀ŋɔ̀tƗ̀fʉ̀ghàdzughù","ndzɔ̀ŋɔ̀ghǔuwelɔ̀m","ndzɔ̀ŋɔ̀chwaʔàkaa wo","ndzɔ̀ŋèfwòo"],SHORTDAY:["nts","kpa","ghɔ","tɔm","ume","ghɨ","dzk"],SHORTMONTH:["nùm","kɨz","tɨd","taa","see","nzu","dum","fɔe","dzu","lɔm","kaa","fwo"],STANDALONEMONTH:["ndzɔ̀ŋɔ̀nùm","ndzɔ̀ŋɔ̀kƗ̀zùʔ","ndzɔ̀ŋɔ̀tƗ̀dʉ̀ghà","ndzɔ̀ŋɔ̀tǎafʉ̄ghā","ndzɔ̀ŋèsèe","ndzɔ̀ŋɔ̀nzùghò","ndzɔ̀ŋɔ̀dùmlo","ndzɔ̀ŋɔ̀kwîfɔ̀e","ndzɔ̀ŋɔ̀tƗ̀fʉ̀ghàdzughù","ndzɔ̀ŋɔ̀ghǔuwelɔ̀m","ndzɔ̀ŋɔ̀chwaʔàkaa wo","ndzɔ̀ŋèfwòo"],WEEKENDRANGE:[5,6],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM, y HH:mm:ss",mediumDate:"d MMM, y",mediumTime:"HH:mm:ss","short":"d/M/y HH:mm",shortDate:"d/M/y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"FCFA",DECIMAL_SEP:",",GROUP_SEP:" ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:"¤",posPre:"",posSuf:"¤"}]},id:"agq",localeID:"agq",pluralCat:function(n,e){var a=0|n,u=d(n,e);return 1==a&&0==u.v?t.ONE:t.OTHER}})}]);