"use strict";angular.module("ngLocale",[],["$provide",function(e){function M(e){e+="";var M=e.indexOf(".");return M==-1?0:e.length-M-1}function n(e,n){var r=n;void 0===r&&(r=Math.min(M(e),3));var E=Math.pow(10,r),a=(e*E|0)%E;return{v:r,f:a}}var r={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["ⵜⵉⴼⴰⵡⵜ","ⵜⴰⴷⴳⴳⵯⴰⵜ"],DAY:["ⴰⵙⴰⵎⴰⵙ","ⴰⵢⵏⴰⵙ","ⴰⵙⵉⵏⴰⵙ","ⴰⴽⵕⴰⵙ","ⴰⴽⵡⴰⵙ","ⵙⵉⵎⵡⴰⵙ","ⴰⵙⵉⴹⵢⴰⵙ"],ERANAMES:["ⴷⴰⵜ ⵏ ⵄⵉⵙⴰ","ⴷⴼⴼⵉⵔ ⵏ ⵄⵉⵙⴰ"],ERAS:["ⴷⴰⵄ","ⴷⴼⵄ"],FIRSTDAYOFWEEK:0,MONTH:["ⵉⵏⵏⴰⵢⵔ","ⴱⵕⴰⵢⵕ","ⵎⴰⵕⵚ","ⵉⴱⵔⵉⵔ","ⵎⴰⵢⵢⵓ","ⵢⵓⵏⵢⵓ","ⵢⵓⵍⵢⵓⵣ","ⵖⵓⵛⵜ","ⵛⵓⵜⴰⵏⴱⵉⵔ","ⴽⵜⵓⴱⵔ","ⵏⵓⵡⴰⵏⴱⵉⵔ","ⴷⵓⵊⴰⵏⴱⵉⵔ"],SHORTDAY:["ⴰⵙⴰ","ⴰⵢⵏ","ⴰⵙⵉ","ⴰⴽⵕ","ⴰⴽⵡ","ⴰⵙⵉⵎ","ⴰⵙⵉⴹ"],SHORTMONTH:["ⵉⵏⵏ","ⴱⵕⴰ","ⵎⴰⵕ","ⵉⴱⵔ","ⵎⴰⵢ","ⵢⵓⵏ","ⵢⵓⵍ","ⵖⵓⵛ","ⵛⵓⵜ","ⴽⵜⵓ","ⵏⵓⵡ","ⴷⵓⵊ"],STANDALONEMONTH:["ⵉⵏⵏⴰⵢⵔ","ⴱⵕⴰⵢⵕ","ⵎⴰⵕⵚ","ⵉⴱⵔⵉⵔ","ⵎⴰⵢⵢⵓ","ⵢⵓⵏⵢⵓ","ⵢⵓⵍⵢⵓⵣ","ⵖⵓⵛⵜ","ⵛⵓⵜⴰⵏⴱⵉⵔ","ⴽⵜⵓⴱⵔ","ⵏⵓⵡⴰⵏⴱⵉⵔ","ⴷⵓⵊⴰⵏⴱⵉⵔ"],WEEKENDRANGE:[5,6],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM, y HH:mm:ss",mediumDate:"d MMM, y",mediumTime:"HH:mm:ss","short":"d/M/y HH:mm",shortDate:"d/M/y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"dh",DECIMAL_SEP:",",GROUP_SEP:" ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:"¤",posPre:"",posSuf:"¤"}]},id:"shi",localeID:"shi",pluralCat:function(e,M){var E=0|e,a=n(e,M);return 1==E&&0==a.v?r.ONE:r.OTHER}})}]);