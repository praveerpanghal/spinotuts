"use strict";angular.module("ngLocale",[],["$provide",function(n){function m(n){n+="";var m=n.indexOf(".");return m==-1?0:n.length-m-1}function a(n,a){var g=a;void 0===g&&(g=Math.min(m(n),3));var r=Math.pow(10,g),e=(n*r|0)%r;return{v:g,f:e}}var g={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};n.value("$locale",{DATETIME_FORMATS:{AMPMS:["maná","kugú"],DAY:["sɔ́ndɔ","mɔ́ndɔ","sɔ́ndɔ mafú mába","sɔ́ndɔ mafú málal","sɔ́ndɔ mafú mána","mabágá má sukul","sásadi"],ERANAMES:["Bó Lahlɛ̄","Pfiɛ Burī"],ERAS:["BL","PB"],FIRSTDAYOFWEEK:0,MONTH:["ngwɛn matáhra","ngwɛn ńmba","ngwɛn ńlal","ngwɛn ńna","ngwɛn ńtan","ngwɛn ńtuó","ngwɛn hɛmbuɛrí","ngwɛn lɔmbi","ngwɛn rɛbvuâ","ngwɛn wum","ngwɛn wum navǔr","krísimin"],SHORTDAY:["sɔ́n","mɔ́n","smb","sml","smn","mbs","sas"],SHORTMONTH:["ng1","ng2","ng3","ng4","ng5","ng6","ng7","ng8","ng9","ng10","ng11","kris"],STANDALONEMONTH:["ngwɛn matáhra","ngwɛn ńmba","ngwɛn ńlal","ngwɛn ńna","ngwɛn ńtan","ngwɛn ńtuó","ngwɛn hɛmbuɛrí","ngwɛn lɔmbi","ngwɛn rɛbvuâ","ngwɛn wum","ngwɛn wum navǔr","krísimin"],WEEKENDRANGE:[5,6],fullDate:"EEEE d MMMM y",longDate:"d MMMM y",medium:"d MMM y HH:mm:ss",mediumDate:"d MMM y",mediumTime:"HH:mm:ss","short":"d/M/y HH:mm",shortDate:"d/M/y",shortTime:"HH:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"FCFA",DECIMAL_SEP:",",GROUP_SEP:" ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"nmg-cm",localeID:"nmg_CM",pluralCat:function(n,m){var r=0|n,e=a(n,m);return 1==r&&0==e.v?g.ONE:g.OTHER}})}]);