"use strict";angular.module("ngLocale",[],["$provide",function(a){function i(a){a+="";var i=a.indexOf(".");return i==-1?0:a.length-i-1}function e(a,e){var r=e;void 0===r&&(r=Math.min(i(a),3));var M=Math.pow(10,r),m=(a*M|0)%M;return{v:r,f:m}}var r={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["Ma/Mo","Mambia/Mog"],DAY:["Chumapiri","Chumatato","Chumaine","Chumatano","Aramisi","Ichuma","Esabato"],ERANAMES:["Yeso ataiborwa","Yeso kaiboirwe"],ERAS:["YA","YK"],FIRSTDAYOFWEEK:0,MONTH:["Chanuari","Feburari","Machi","Apiriri","Mei","Juni","Chulai","Agosti","Septemba","Okitoba","Nobemba","Disemba"],SHORTDAY:["Cpr","Ctt","Cmn","Cmt","Ars","Icm","Est"],SHORTMONTH:["Can","Feb","Mac","Apr","Mei","Jun","Cul","Agt","Sep","Okt","Nob","Dis"],STANDALONEMONTH:["Chanuari","Feburari","Machi","Apiriri","Mei","Juni","Chulai","Agosti","Septemba","Okitoba","Nobemba","Disemba"],WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y h:mm:ss a",mediumDate:"d MMM y",mediumTime:"h:mm:ss a","short":"dd/MM/y h:mm a",shortDate:"dd/MM/y",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"Ksh",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",posSuf:""}]},id:"guz-ke",localeID:"guz_KE",pluralCat:function(a,i){var M=0|a,m=e(a,i);return 1==M&&0==m.v?r.ONE:r.OTHER}})}]);