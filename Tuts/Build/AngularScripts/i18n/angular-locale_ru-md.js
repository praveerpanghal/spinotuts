"use strict";angular.module("ngLocale",[],["$provide",function(M){function e(M){M+="";var e=M.indexOf(".");return e==-1?0:M.length-e-1}function r(M,r){var n=r;void 0===n&&(n=Math.min(e(M),3));var E=Math.pow(10,n),a=(M*E|0)%E;return{v:n,f:a}}var n={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};M.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],ERANAMES:["до н. э.","н. э."],ERAS:["до н. э.","н. э."],FIRSTDAYOFWEEK:0,MONTH:["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"],SHORTDAY:["вс","пн","вт","ср","чт","пт","сб"],SHORTMONTH:["янв.","февр.","марта","апр.","мая","июня","июля","авг.","сент.","окт.","нояб.","дек."],STANDALONEMONTH:["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"],WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM y 'г'.",longDate:"d MMMM y 'г'.",medium:"d MMM y 'г'. H:mm:ss",mediumDate:"d MMM y 'г'.",mediumTime:"H:mm:ss","short":"dd.MM.yy H:mm",shortDate:"dd.MM.yy",shortTime:"H:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"MDL",DECIMAL_SEP:",",GROUP_SEP:" ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"ru-md",localeID:"ru_MD",pluralCat:function(M,e){var E=0|M,a=r(M,e);return 0==a.v&&E%10==1&&E%100!=11?n.ONE:0==a.v&&E%10>=2&&E%10<=4&&(E%100<12||E%100>14)?n.FEW:0==a.v&&E%10==0||0==a.v&&E%10>=5&&E%10<=9||0==a.v&&E%100>=11&&E%100<=14?n.MANY:n.OTHER}})}]);