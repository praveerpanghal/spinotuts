"use strict";angular.module("ngLocale",[],["$provide",function(r){function e(r){r+="";var e=r.indexOf(".");return e==-1?0:r.length-e-1}function O(r,O){var s=O;void 0===s&&(s=Math.min(e(r),3));var h=Math.pow(10,s),n=(r*h|0)%h;return{v:s,f:n}}var s={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};r.value("$locale",{DATETIME_FORMATS:{AMPMS:["Àárɔ̀","Ɔ̀sán"],DAY:["Ɔjɔ́ Àìkú","Ɔjɔ́ Ajé","Ɔjɔ́ Ìsɛ́gun","Ɔjɔ́rú","Ɔjɔ́bɔ","Ɔjɔ́ Ɛtì","Ɔjɔ́ Àbámɛ́ta"],ERANAMES:["Saju Kristi","Lehin Kristi"],ERAS:["SK","LK"],FIRSTDAYOFWEEK:0,MONTH:["Oshù Shɛ́rɛ́","Oshù Èrèlè","Oshù Ɛrɛ̀nà","Oshù Ìgbé","Oshù Ɛ̀bibi","Oshù Òkúdu","Oshù Agɛmɔ","Oshù Ògún","Oshù Owewe","Oshù Ɔ̀wàrà","Oshù Bélú","Oshù Ɔ̀pɛ̀"],SHORTDAY:["Àìkú","Ajé","Ìsɛ́gun","Ɔjɔ́rú","Ɔjɔ́bɔ","Ɛtì","Àbámɛ́ta"],SHORTMONTH:["Shɛ́rɛ́","Èrèlè","Ɛrɛ̀nà","Ìgbé","Ɛ̀bibi","Òkúdu","Agɛmɔ","Ògún","Owewe","Ɔ̀wàrà","Bélú","Ɔ̀pɛ̀"],STANDALONEMONTH:["Oshù Shɛ́rɛ́","Oshù Èrèlè","Oshù Ɛrɛ̀nà","Oshù Ìgbé","Oshù Ɛ̀bibi","Oshù Òkúdu","Oshù Agɛmɔ","Oshù Ògún","Oshù Owewe","Oshù Ɔ̀wàrà","Oshù Bélú","Oshù Ɔ̀pɛ̀"],WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM y",longDate:"d MMMM y",medium:"d MMM y h:mm:ss a",mediumDate:"d MMM y",mediumTime:"h:mm:ss a","short":"dd/MM/y h:mm a",shortDate:"dd/MM/y",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"CFA",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",posSuf:""}]},id:"yo-bj",localeID:"yo_BJ",pluralCat:function(r,e){var h=0|r,n=O(r,e);return 1==h&&0==n.v?s.ONE:s.OTHER}})}]);