"use strict";angular.module("ngLocale",[],["$provide",function(i){function a(i){i+="";var a=i.indexOf(".");return a==-1?0:i.length-a-1}function M(i,M){var e=M;void 0===e&&(e=Math.min(a(i),3));var o=Math.pow(10,e),m=(i*o|0)%o;return{v:e,f:m}}var e={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};i.value("$locale",{DATETIME_FORMATS:{AMPMS:["comme","lilli"],DAY:["Com’yakke","Comlaaɗii","Comzyiiɗii","Comkolle","Comkaldǝɓlii","Comgaisuu","Comzyeɓsuu"],ERANAMES:["KǝPel Kristu","Pel Kristu"],ERAS:["KK","PK"],FIRSTDAYOFWEEK:0,MONTH:["Fĩi Loo","Cokcwaklaŋne","Cokcwaklii","Fĩi Marfoo","Madǝǝuutǝbijaŋ","Mamǝŋgwãafahbii","Mamǝŋgwãalii","Madǝmbii","Fĩi Dǝɓlii","Fĩi Mundaŋ","Fĩi Gwahlle","Fĩi Yuru"],SHORTDAY:["Cya","Cla","Czi","Cko","Cka","Cga","Cze"],SHORTMONTH:["FLO","CLA","CKI","FMF","MAD","MBI","MLI","MAM","FDE","FMU","FGW","FYU"],STANDALONEMONTH:["Fĩi Loo","Cokcwaklaŋne","Cokcwaklii","Fĩi Marfoo","Madǝǝuutǝbijaŋ","Mamǝŋgwãafahbii","Mamǝŋgwãalii","Madǝmbii","Fĩi Dǝɓlii","Fĩi Mundaŋ","Fĩi Gwahlle","Fĩi Yuru"],WEEKENDRANGE:[5,6],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",mediumDate:"d MMM y",mediumTime:"HH:mm:ss","short":"d/M/y HH:mm",shortDate:"d/M/y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"FCFA",DECIMAL_SEP:",",GROUP_SEP:".",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",posSuf:""}]},id:"mua-cm",localeID:"mua_CM",pluralCat:function(i,a){var o=0|i,m=M(i,a);return 1==o&&0==m.v?e.ONE:e.OTHER}})}]);