"use strict";angular.module("ngLocale",[],["$provide",function(a){function e(a){a+="";var e=a.indexOf(".");return e==-1?0:a.length-e-1}function i(a,i){var o=i;void 0===o&&(o=Math.min(e(a),3));var n=Math.pow(10,o),m=(a*n|0)%n;return{v:o,f:m}}var o={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["WD","WB"],DAY:["Dilbata","Wiixata","Qibxata","Roobii","Kamiisa","Jimaata","Sanbata"],ERANAMES:["KD","KB"],ERAS:["KD","KB"],FIRSTDAYOFWEEK:0,MONTH:["Amajjii","Guraandhala","Bitooteessa","Elba","Caamsa","Waxabajjii","Adooleessa","Hagayya","Fuulbana","Onkololeessa","Sadaasa","Muddee"],SHORTDAY:["Dil","Wix","Qib","Rob","Kam","Jim","San"],SHORTMONTH:["Ama","Gur","Bit","Elb","Cam","Wax","Ado","Hag","Ful","Onk","Sad","Mud"],STANDALONEMONTH:["Amajjii","Guraandhala","Bitooteessa","Elba","Caamsa","Waxabajjii","Adooleessa","Hagayya","Fuulbana","Onkololeessa","Sadaasa","Muddee"],WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"dd MMMM y",medium:"dd-MMM-y h:mm:ss a",mediumDate:"dd-MMM-y",mediumTime:"h:mm:ss a","short":"dd/MM/yy h:mm a",shortDate:"dd/MM/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"Ksh",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",posSuf:""}]},id:"om-ke",localeID:"om_KE",pluralCat:function(a,e){var n=0|a,m=i(a,e);return 1==n&&0==m.v?o.ONE:o.OTHER}})}]);