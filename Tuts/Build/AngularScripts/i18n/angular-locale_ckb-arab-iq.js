"use strict";angular.module("ngLocale",[],["$provide",function(e){function M(e){e+="";var M=e.indexOf(".");return M==-1?0:e.length-M-1}function n(e,n){var r=n;void 0===r&&(r=Math.min(M(e),3));var a=Math.pow(10,r),E=(e*a|0)%a;return{v:r,f:E}}var r={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["ب.ن","د.ن"],DAY:["یەکشەممە","دووشەممە","سێشەممە","چوارشەممە","پێنجشەممە","ھەینی","شەممە"],ERANAMES:["پێش زایین","زایینی"],ERAS:["پێش زاییین","ز"],FIRSTDAYOFWEEK:5,MONTH:["کانوونی دووەم","شوبات","ئازار","نیسان","ئایار","حوزەیران","تەمووز","ئاب","ئەیلوول","تشرینی یەکەم","تشرینی دووەم","کانونی یەکەم"],SHORTDAY:["یەکشەممە","دووشەممە","سێشەممە","چوارشەممە","پێنجشەممە","ھەینی","شەممە"],SHORTMONTH:["کانوونی دووەم","شوبات","ئازار","نیسان","ئایار","حوزەیران","تەمووز","ئاب","ئەیلوول","تشرینی یەکەم","تشرینی دووەم","کانونی یەکەم"],STANDALONEMONTH:["کانوونی دووەم","شوبات","ئازار","نیسان","ئایار","حوزەیران","تەمووز","ئاب","ئەیلوول","تشرینی یەکەم","تشرینی دووەم","کانونی یەکەم"],WEEKENDRANGE:[4,5],fullDate:"y MMMM d, EEEE",longDate:"dی MMMMی y",medium:"y MMM d HH:mm:ss",mediumDate:"y MMM d",mediumTime:"HH:mm:ss","short":"y-MM-dd HH:mm",shortDate:"y-MM-dd",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"din",DECIMAL_SEP:"٫",GROUP_SEP:"٬",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤ ",negSuf:"",posPre:"¤ ",posSuf:""}]},id:"ckb-arab-iq",localeID:"ckb_Arab_IQ",pluralCat:function(e,M){var a=0|e,E=n(e,M);return 1==a&&0==E.v?r.ONE:r.OTHER}})}]);