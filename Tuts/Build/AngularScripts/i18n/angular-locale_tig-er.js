"use strict";angular.module("ngLocale",[],["$provide",function(e){function M(e){e+="";var M=e.indexOf(".");return M==-1?0:e.length-M-1}function a(e,a){var n=a;void 0===n&&(n=Math.min(M(e),3));var r=Math.pow(10,n),m=(e*r|0)%r;return{v:n,f:m}}var n={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["ቀደም ሰርምዕል","ሓቆ ስርምዕል"],DAY:["ሰንበት ዓባይ","ሰኖ","ታላሸኖ","ኣረርባዓ","ከሚሽ","ጅምዓት","ሰንበት ንኢሽ"],MONTH:["ጃንዩወሪ","ፌብሩወሪ","ማርች","ኤፕረል","ሜይ","ጁን","ጁላይ","ኦገስት","ሴፕቴምበር","ኦክተውበር","ኖቬምበር","ዲሴምበር"],SHORTDAY:["ሰ/ዓ","ሰኖ","ታላሸ","ኣረር","ከሚሽ","ጅምዓ","ሰ/ን"],SHORTMONTH:["ጃንዩ","ፌብሩ","ማርች","ኤፕረ","ሜይ","ጁን","ጁላይ","ኦገስ","ሴፕቴ","ኦክተ","ኖቬም","ዲሴም"],fullDate:"EEEE፡ dd MMMM ዮም y G",longDate:"dd MMMM y",medium:"dd-MMM-y h:mm:ss a",mediumDate:"dd-MMM-y",mediumTime:"h:mm:ss a","short":"dd/MM/yy h:mm a",shortDate:"dd/MM/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"Nfk",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"¤-",negSuf:"",posPre:"¤",posSuf:""}]},id:"tig-er",pluralCat:function(e,M){var r=0|e,m=a(e,M);return 1==r&&0==m.v?n.ONE:n.OTHER}})}]);