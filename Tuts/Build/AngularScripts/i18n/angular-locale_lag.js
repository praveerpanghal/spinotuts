"use strict";angular.module("ngLocale",[],["$provide",function(a){function n(a){a+="";var n=a.indexOf(".");return n==-1?0:a.length-n-1}function i(a,i){var e=i;void 0===e&&(e=Math.min(n(a),3));var m=Math.pow(10,e),t=(a*m|0)%m;return{v:e,f:t}}var e={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["TOO","MUU"],DAY:["Jumapíiri","Jumatátu","Jumaíne","Jumatáano","Alamíisi","Ijumáa","Jumamóosi"],ERANAMES:["Kɨrɨsitʉ sɨ anavyaal","Kɨrɨsitʉ akavyaalwe"],ERAS:["KSA","KA"],FIRSTDAYOFWEEK:0,MONTH:["Kʉfúngatɨ","Kʉnaanɨ","Kʉkeenda","Kwiikumi","Kwiinyambála","Kwiidwaata","Kʉmʉʉnchɨ","Kʉvɨɨrɨ","Kʉsaatʉ","Kwiinyi","Kʉsaano","Kʉsasatʉ"],SHORTDAY:["Píili","Táatu","Íne","Táano","Alh","Ijm","Móosi"],SHORTMONTH:["Fúngatɨ","Naanɨ","Keenda","Ikúmi","Inyambala","Idwaata","Mʉʉnchɨ","Vɨɨrɨ","Saatʉ","Inyi","Saano","Sasatʉ"],STANDALONEMONTH:["Kʉfúngatɨ","Kʉnaanɨ","Kʉkeenda","Kwiikumi","Kwiinyambála","Kwiidwaata","Kʉmʉʉnchɨ","Kʉvɨɨrɨ","Kʉsaatʉ","Kwiinyi","Kʉsaano","Kʉsasatʉ"],WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y h:mm:ss a",mediumDate:"d MMM y",mediumTime:"h:mm:ss a","short":"dd/MM/y h:mm a",shortDate:"dd/MM/y",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"TSh",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤ ",negSuf:"",posPre:"¤ ",posSuf:""}]},id:"lag",localeID:"lag",pluralCat:function(a,n){var m=0|a,t=i(a,n);return 1==m&&0==t.v?e.ONE:e.OTHER}})}]);