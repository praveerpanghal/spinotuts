"use strict";angular.module("ngLocale",[],["$provide",function(e){function M(e){e+="";var M=e.indexOf(".");return M==-1?0:e.length-M-1}function n(e,n){var E=n;void 0===E&&(E=Math.min(M(e),3));var r=Math.pow(10,E),a=(e*r|0)%r;return{v:E,f:a}}var E={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["ӕмбисбоны размӕ","ӕмбисбоны фӕстӕ"],DAY:["хуыцаубон","къуырисӕр","дыццӕг","ӕртыццӕг","цыппӕрӕм","майрӕмбон","сабат"],ERANAMES:["н.д.а.","н.д."],ERAS:["н.д.а.","н.д."],FIRSTDAYOFWEEK:0,MONTH:["январы","февралы","мартъийы","апрелы","майы","июны","июлы","августы","сентябры","октябры","ноябры","декабры"],SHORTDAY:["хцб","крс","дцг","ӕрт","цпр","мрб","сбт"],SHORTMONTH:["янв.","фев.","мар.","апр.","мая","июны","июлы","авг.","сен.","окт.","ноя.","дек."],STANDALONEMONTH:["Январь","Февраль","Мартъи","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM, y 'аз'",longDate:"d MMMM, y 'аз'",medium:"dd MMM y 'аз' HH:mm:ss",mediumDate:"dd MMM y 'аз'",mediumTime:"HH:mm:ss","short":"dd.MM.yy HH:mm",shortDate:"dd.MM.yy",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"GEL",DECIMAL_SEP:",",GROUP_SEP:" ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤ ",negSuf:"",posPre:"¤ ",posSuf:""}]},id:"os",localeID:"os",pluralCat:function(e,M){var r=0|e,a=n(e,M);return 1==r&&0==a.v?E.ONE:E.OTHER}})}]);