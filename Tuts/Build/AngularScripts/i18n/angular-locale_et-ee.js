"use strict";angular.module("ngLocale",[],["$provide",function(e){function a(e){e+="";var a=e.indexOf(".");return a==-1?0:e.length-a-1}function r(e,r){var m=r;void 0===m&&(m=Math.min(a(e),3));var u=Math.pow(10,m),n=(e*u|0)%u;return{v:m,f:n}}var m={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["pühapäev","esmaspäev","teisipäev","kolmapäev","neljapäev","reede","laupäev"],ERANAMES:["enne meie aega","meie aja järgi"],ERAS:["e.m.a.","m.a.j."],FIRSTDAYOFWEEK:0,MONTH:["jaanuar","veebruar","märts","aprill","mai","juuni","juuli","august","september","oktoober","november","detsember"],SHORTDAY:["P","E","T","K","N","R","L"],SHORTMONTH:["jaan","veebr","märts","apr","mai","juuni","juuli","aug","sept","okt","nov","dets"],STANDALONEMONTH:["jaanuar","veebruar","märts","aprill","mai","juuni","juuli","august","september","oktoober","november","detsember"],WEEKENDRANGE:[5,6],fullDate:"EEEE, d. MMMM y",longDate:"d. MMMM y",medium:"d. MMM y H:mm.ss",mediumDate:"d. MMM y",mediumTime:"H:mm.ss","short":"dd.MM.yy H:mm",shortDate:"dd.MM.yy",shortTime:"H:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"€",DECIMAL_SEP:",",GROUP_SEP:" ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"et-ee",localeID:"et_EE",pluralCat:function(e,a){var u=0|e,n=r(e,a);return 1==u&&0==n.v?m.ONE:m.OTHER}})}]);