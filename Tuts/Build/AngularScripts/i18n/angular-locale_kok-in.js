"use strict";angular.module("ngLocale",[],["$provide",function(e){function a(e){e+="";var a=e.indexOf(".");return a==-1?0:e.length-a-1}function n(e,n){var M=n;void 0===M&&(M=Math.min(a(e),3));var r=Math.pow(10,M),E=(e*r|0)%r;return{v:M,f:E}}var M={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["म.पू.","म.नं."],DAY:["आदित्यवार","सोमवार","मंगळार","बुधवार","गुरुवार","शुक्रवार","शनिवार"],ERANAMES:["क्रिस्तपूर्व","क्रिस्तशखा"],ERAS:["क्रिस्तपूर्व","क्रिस्तशखा"],FIRSTDAYOFWEEK:6,MONTH:["जानेवारी","फेब्रुवारी","मार्च","एप्रिल","मे","जून","जुलै","ओगस्ट","सेप्टेंबर","ओक्टोबर","नोव्हेंबर","डिसेंबर"],SHORTDAY:["रवि","सोम","मंगळ","बुध","गुरु","शुक्र","शनि"],SHORTMONTH:["जानेवारी","फेब्रुवारी","मार्च","एप्रिल","मे","जून","जुलै","ओगस्ट","सेप्टेंबर","ओक्टोबर","नोव्हेंबर","डिसेंबर"],STANDALONEMONTH:["जानेवारी","फेब्रुवारी","मार्च","एप्रिल","मे","जून","जुलै","ओगस्ट","सेप्टेंबर","ओक्टोबर","नोव्हेंबर","डिसेंबर"],WEEKENDRANGE:[6,6],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"dd-MM-y h:mm:ss a",mediumDate:"dd-MM-y",mediumTime:"h:mm:ss a","short":"d-M-yy h:mm a",shortDate:"d-M-yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"₹",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:2,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:2,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤ ",negSuf:"",posPre:"¤ ",posSuf:""}]},id:"kok-in",localeID:"kok_IN",pluralCat:function(e,a){var r=0|e,E=n(e,a);return 1==r&&0==E.v?M.ONE:M.OTHER}})}]);