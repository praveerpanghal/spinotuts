(function(){function n(n,r,t){for(var e=(t||0)-1,u=n?n.length:0;++e<u;)if(n[e]===r)return e;return-1}function r(n,r){for(var t=n.criteria,e=r.criteria,u=-1,o=t.length;++u<o;){var i=t[u],f=e[u];if(i!==f){if(i>f||"undefined"==typeof i)return 1;if(i<f||"undefined"==typeof f)return-1}}return n.index-r.index}function t(n){return"\\"+jr[n]}function e(n,r,t){r||(r=0),"undefined"==typeof t&&(t=n?n.length:0);for(var e=-1,u=t-r||0,o=Array(u<0?0:u);++e<u;)o[e]=n[r+e];return o}function u(n){return n instanceof u?n:new o(n)}function o(n,r){this.__chain__=!!r,this.__wrapped__=n}function i(n){function r(){if(u){var n=e(u);Ir.apply(n,arguments)}if(this instanceof r){var i=f(t.prototype),a=t.apply(i,n||arguments);return D(a)?a:i}return t.apply(o,n||arguments)}var t=n[0],u=n[2],o=n[4];return r}function f(n,r){return D(n)?$r(n):{}}function a(n,r,t){if("function"!=typeof n)return Gn;if("undefined"==typeof r||!("prototype"in n))return n;switch(t){case 1:return function(t){return n.call(r,t)};case 2:return function(t,e){return n.call(r,t,e)};case 3:return function(t,e,u){return n.call(r,t,e,u)};case 4:return function(t,e,u,o){return n.call(r,t,e,u,o)}}return Bn(n,r)}function c(n){function r(){var n=p?a:this;if(o){var g=e(o);Ir.apply(g,arguments)}if((i||v)&&(g||(g=e(arguments)),i&&Ir.apply(g,i),v&&g.length<l))return u|=16,c([t,h?u:u&-4,g,null,a,l]);if(g||(g=arguments),s&&(t=n[y]),this instanceof r){n=f(t.prototype);var _=t.apply(n,g);return D(_)?_:n}return t.apply(n,g)}var t=n[0],u=n[1],o=n[2],i=n[3],a=n[4],l=n[5],p=1&u,s=2&u,v=4&u,h=8&u,y=t;return r}function l(n,r){for(var t=-1,e=d(),u=n?n.length:0,o=[];++t<u;){var i=n[t];e(r,i)<0&&o.push(i)}return o}function p(n,r,t,e){for(var u=(e||0)-1,o=n?n.length:0,i=[];++u<o;){var f=n[u];if(f&&"object"==typeof f&&"number"==typeof f.length&&(Jr(f)||w(f))){r||(f=p(f,r,t));var a=-1,c=f.length,l=i.length;for(i.length+=c;++a<c;)i[l++]=f[a]}else t||i.push(f)}return i}function s(n,r,t,e){if(n===r)return 0!==n||1/n==1/r;var o=typeof n,i=typeof r;if(!(n!==n||n&&wr[o]||r&&wr[i]))return!1;if(null==n||null==r)return n===r;var f=kr.call(n),a=kr.call(r);if(f!=a)return!1;switch(f){case hr:case yr:return+n==+r;case _r:return n!=+n?r!=+r:0==n?1/n==1/r:n==+r;case mr:case br:return n==String(r)}var c=f==vr;if(!c){var l=n instanceof u,p=r instanceof u;if(l||p)return s(l?n.__wrapped__:n,p?r.__wrapped__:r,t,e);if(f!=dr)return!1;var v=n.constructor,h=r.constructor;if(v!=h&&!(q(v)&&v instanceof v&&q(h)&&h instanceof h)&&"constructor"in n&&"constructor"in r)return!1}t||(t=[]),e||(e=[]);for(var y=t.length;y--;)if(t[y]==n)return e[y]==r;var g=!0,_=0;if(t.push(n),e.push(r),c){if(_=r.length,g=_==n.length)for(;_--&&(g=s(n[_],r[_],t,e)););}else nt(r,function(r,u,o){if(Dr.call(o,u))return _++,!(g=Dr.call(n,u)&&s(n[u],r,t,e))&&fr}),g&&nt(n,function(n,r,t){if(Dr.call(t,r))return!(g=--_>-1)&&fr});return t.pop(),e.pop(),g}function v(n,r){return n+qr(Gr()*(r-n+1))}function h(n,r,t){for(var e=-1,u=d(),o=n?n.length:0,i=[],f=t?[]:i;++e<o;){var a=n[e],c=t?t(a,e,n):a;(r?!e||f[f.length-1]!==c:u(f,c)<0)&&(t&&f.push(c),i.push(a))}return i}function y(n){return function(r,t,e){var u={};t=Un(t,e,3);var o=-1,i=r?r.length:0;if("number"==typeof i)for(;++o<i;){var f=r[o];n(u,f,t(f,o,r),r)}else rt(r,function(r,e,o){n(u,r,t(r,e,o),o)});return u}}function g(n,r,t,e,u,o){var f=2&r,a=16&r,l=32&r;if(!f&&!q(n))throw new TypeError;a&&!t.length&&(r&=-17,a=t=!1),l&&!e.length&&(r&=-33,l=e=!1);var p=1==r||17===r?i:c;return p([n,r,t,e,u,o])}function _(n){return Qr[n]}function d(){var r=(r=u.indexOf)===dn?n:r;return r}function m(n){return"function"==typeof n&&Br.test(n)}function b(n){return Xr[n]}function w(n){return n&&"object"==typeof n&&"number"==typeof n.length&&kr.call(n)==sr||!1}function j(n){if(!n)return n;for(var r=1,t=arguments.length;r<t;r++){var e=arguments[r];if(e)for(var u in e)n[u]=e[u]}return n}function x(n){return D(n)?Jr(n)?e(n):j({},n):n}function T(n){if(!n)return n;for(var r=1,t=arguments.length;r<t;r++){var e=arguments[r];if(e)for(var u in e)"undefined"==typeof n[u]&&(n[u]=e[u])}return n}function E(n){var r=[];return nt(n,function(n,t){q(n)&&r.push(t)}),r.sort()}function A(n,r){return!!n&&Dr.call(n,r)}function S(n){for(var r=-1,t=Lr(n),e=t.length,u={};++r<e;){var o=t[r];u[n[o]]=o}return u}function O(n){return n===!0||n===!1||n&&"object"==typeof n&&kr.call(n)==hr||!1}function N(n){return n&&"object"==typeof n&&kr.call(n)==yr||!1}function R(n){return n&&1===n.nodeType||!1}function k(n){if(!n)return!0;if(Jr(n)||z(n))return!n.length;for(var r in n)if(Dr.call(n,r))return!1;return!0}function B(n,r){return s(n,r)}function F(n){return zr(n)&&!Cr(parseFloat(n))}function q(n){return"function"==typeof n}function D(n){return!(!n||!wr[typeof n])}function I(n){return $(n)&&n!=+n}function M(n){return null===n}function $(n){return"number"==typeof n||n&&"object"==typeof n&&kr.call(n)==_r||!1}function W(n){return n&&wr[typeof n]&&kr.call(n)==mr||!1}function z(n){return"string"==typeof n||n&&"object"==typeof n&&kr.call(n)==br||!1}function C(n){return"undefined"==typeof n}function P(n){var r=[];nt(n,function(n,t){r.push(t)}),r=l(r,p(arguments,!0,!1,1));for(var t=-1,e=r.length,u={};++t<e;){var o=r[t];u[o]=n[o]}return u}function U(n){for(var r=-1,t=Lr(n),e=t.length,u=Array(e);++r<e;){var o=t[r];u[r]=[o,n[o]]}return u}function V(n){for(var r=-1,t=p(arguments,!0,!1,1),e=t.length,u={};++r<e;){var o=t[r];o in n&&(u[o]=n[o])}return u}function G(n){for(var r=-1,t=Lr(n),e=t.length,u=Array(e);++r<e;)u[r]=n[t[r]];return u}function H(n,r){var t=d(),e=n?n.length:0,u=!1;return e&&"number"==typeof e?u=t(n,r)>-1:rt(n,function(n){return(u=n===r)&&fr}),u}function J(n,r,t){var e=!0;r=Un(r,t,3);var u=-1,o=n?n.length:0;if("number"==typeof o)for(;++u<o&&(e=!!r(n[u],u,n)););else rt(n,function(n,t,u){return!(e=!!r(n,t,u))&&fr});return e}function K(n,r,t){var e=[];r=Un(r,t,3);var u=-1,o=n?n.length:0;if("number"==typeof o)for(;++u<o;){var i=n[u];r(i,u,n)&&e.push(i)}else rt(n,function(n,t,u){r(n,t,u)&&e.push(n)});return e}function L(n,r,t){r=Un(r,t,3);var e=-1,u=n?n.length:0;if("number"!=typeof u){var o;return rt(n,function(n,t,e){if(r(n,t,e))return o=n,fr}),o}for(;++e<u;){var i=n[e];if(r(i,e,n))return i}}function Q(n,r){return vn(n,r,!0)}function X(n,r,t){var e=-1,u=n?n.length:0;if(r=r&&"undefined"==typeof t?r:a(r,t,3),"number"==typeof u)for(;++e<u&&r(n[e],e,n)!==fr;);else rt(n,r)}function Y(n,r){var t=n?n.length:0;if("number"==typeof t)for(;t--&&r(n[t],t,n)!==!1;);else{var e=Lr(n);t=e.length,rt(n,function(n,u,o){return u=e?e[--t]:--t,r(o[u],u,o)===!1&&fr})}}function Z(n,r){var t=e(arguments,2),u=-1,o="function"==typeof r,i=n?n.length:0,f=Array("number"==typeof i?i:0);return X(n,function(n){f[++u]=(o?r:n[r]).apply(n,t)}),f}function nn(n,r,t){var e=-1,u=n?n.length:0;if(r=Un(r,t,3),"number"==typeof u)for(var o=Array(u);++e<u;)o[e]=r(n[e],e,n);else o=[],rt(n,function(n,t,u){o[++e]=r(n,t,u)});return o}function rn(n,r,t){var e=-(1/0),u=e;"function"!=typeof r&&t&&t[r]===n&&(r=null);var o=-1,i=n?n.length:0;if(null==r&&"number"==typeof i)for(;++o<i;){var f=n[o];f>u&&(u=f)}else r=Un(r,t,3),X(n,function(n,t,o){var i=r(n,t,o);i>e&&(e=i,u=n)});return u}function tn(n,r,t){var e=1/0,u=e;"function"!=typeof r&&t&&t[r]===n&&(r=null);var o=-1,i=n?n.length:0;if(null==r&&"number"==typeof i)for(;++o<i;){var f=n[o];f<u&&(u=f)}else r=Un(r,t,3),X(n,function(n,t,o){var i=r(n,t,o);i<e&&(e=i,u=n)});return u}function en(n,r,t,e){if(!n)return t;var u=arguments.length<3;r=Un(r,e,4);var o=-1,i=n.length;if("number"==typeof i)for(u&&(t=n[++o]);++o<i;)t=r(t,n[o],o,n);else rt(n,function(n,e,o){t=u?(u=!1,n):r(t,n,e,o)});return t}function un(n,r,t,e){var u=arguments.length<3;return r=Un(r,e,4),Y(n,function(n,e,o){t=u?(u=!1,n):r(t,n,e,o)}),t}function on(n,r,t){return r=Un(r,t,3),K(n,function(n,t,e){return!r(n,t,e)})}function fn(n,r,t){if(n&&"number"!=typeof n.length&&(n=G(n)),null==r||t)return n?n[v(0,n.length-1)]:or;var e=an(n);return e.length=Vr(Ur(0,r),e.length),e}function an(n){var r=-1,t=n?n.length:0,e=Array("number"==typeof t?t:0);return X(n,function(n){var t=v(0,++r);e[r]=e[t],e[t]=n}),e}function cn(n){var r=n?n.length:0;return"number"==typeof r?r:Lr(n).length}function ln(n,r,t){var e;r=Un(r,t,3);var u=-1,o=n?n.length:0;if("number"==typeof o)for(;++u<o&&!(e=r(n[u],u,n)););else rt(n,function(n,t,u){return(e=r(n,t,u))&&fr});return!!e}function pn(n,t,e){var u=-1,o=n?n.length:0,i=Array("number"==typeof o?o:0);for(t=Un(t,e,3),X(n,function(n,r,e){i[++u]={criteria:[t(n,r,e)],index:u,value:n}}),o=i.length,i.sort(r);o--;)i[o]=i[o].value;return i}function sn(n){return Jr(n)?e(n):n&&"number"==typeof n.length?nn(n):G(n)}function vn(n,r,t){return t&&k(r)?or:(t?L:K)(n,r)}function hn(n){for(var r=-1,t=n?n.length:0,e=[];++r<t;){var u=n[r];u&&e.push(u)}return e}function yn(n){return l(n,p(arguments,!0,!0,1))}function gn(n,r,t){var u=0,o=n?n.length:0;if("number"!=typeof r&&null!=r){var i=-1;for(r=Un(r,t,3);++i<o&&r(n[i],i,n);)u++}else if(u=r,null==u||t)return n?n[0]:or;return e(n,0,Vr(Ur(0,u),o))}function _n(n,r){return p(n,r)}function dn(r,t,e){if("number"==typeof e){var u=r?r.length:0;e=e<0?Ur(0,u+e):e||0}else if(e){var o=En(r,t);return r[o]===t?o:-1}return n(r,t,e)}function mn(n,r,t){var u=0,o=n?n.length:0;if("number"!=typeof r&&null!=r){var i=o;for(r=Un(r,t,3);i--&&r(n[i],i,n);)u++}else u=null==r||t?1:r||u;return e(n,0,Vr(Ur(0,o-u),o))}function bn(){for(var n=[],r=-1,t=arguments.length;++r<t;){var e=arguments[r];(Jr(e)||w(e))&&n.push(e)}var u=n[0],o=-1,i=d(),f=u?u.length:0,a=[];n:for(;++o<f;)if(e=u[o],i(a,e)<0){for(var r=t;--r;)if(i(n[r],e)<0)continue n;a.push(e)}return a}function wn(n,r,t){var u=0,o=n?n.length:0;if("number"!=typeof r&&null!=r){var i=o;for(r=Un(r,t,3);i--&&r(n[i],i,n);)u++}else if(u=r,null==u||t)return n?n[o-1]:or;return e(n,Ur(0,o-u))}function jn(n,r,t){var e=n?n.length:0;for("number"==typeof t&&(e=(t<0?Ur(0,e+t):Vr(t,e-1))+1);e--;)if(n[e]===r)return e;return-1}function xn(n,r,t){n=+n||0,t=+t||1,null==r&&(r=n,n=0);for(var e=-1,u=Ur(0,Fr((r-n)/t)),o=Array(u);++e<u;)o[e]=n,n+=t;return o}function Tn(n,r,t){if("number"!=typeof r&&null!=r){var u=0,o=-1,i=n?n.length:0;for(r=Un(r,t,3);++o<i&&r(n[o],o,n);)u++}else u=null==r||t?1:Ur(0,r);return e(n,u)}function En(n,r,t,e){var u=0,o=n?n.length:u;for(t=t?Un(t,e,1):Gn,r=t(r);u<o;){var i=u+o>>>1;t(n[i])<r?u=i+1:o=i}return u}function An(){return h(p(arguments,!0,!0))}function Sn(n,r,t,e){return"boolean"!=typeof r&&null!=r&&(e=t,t="function"!=typeof r&&e&&e[r]===n?null:r,r=!1),null!=t&&(t=Un(t,e,3)),h(n,r,t)}function On(n){return l(n,e(arguments,1))}function Nn(){for(var n=-1,r=rn(ot(arguments,"length")),t=Array(r<0?0:r);++n<r;)t[n]=ot(arguments,n);return t}function Rn(n,r){var t=-1,e=n?n.length:0,u={};for(r||!e||Jr(n[0])||(r=[]);++t<e;){var o=n[t];r?u[o]=r[t]:o&&(u[o[0]]=o[1])}return u}function kn(n,r){if(!q(r))throw new TypeError;return function(){if(--n<1)return r.apply(this,arguments)}}function Bn(n,r){return arguments.length>2?g(n,17,e(arguments,2),null,r):g(n,1,null,null,r)}function Fn(n){for(var r=arguments.length>1?p(arguments,!0,!1,1):E(n),t=-1,e=r.length;++t<e;){var u=r[t];n[u]=g(n[u],1,null,null,n)}return n}function qn(){for(var n=arguments,r=n.length;r--;)if(!q(n[r]))throw new TypeError;return function(){for(var r=arguments,t=n.length;t--;)r=[n[t].apply(this,r)];return r[0]}}function Dn(n,r,t){var e,u,o,i,f,a,c,l=0,p=!1,s=!0;if(!q(n))throw new TypeError;if(r=Ur(0,r)||0,t===!0){var v=!0;s=!1}else D(t)&&(v=t.leading,p="maxWait"in t&&(Ur(r,t.maxWait)||0),s="trailing"in t?t.trailing:s);var h=function(){var t=r-(it()-i);if(t<=0){u&&clearTimeout(u);var p=c;u=a=c=or,p&&(l=it(),o=n.apply(f,e),a||u||(e=f=null))}else a=setTimeout(h,t)},y=function(){a&&clearTimeout(a),u=a=c=or,(s||p!==r)&&(l=it(),o=n.apply(f,e),a||u||(e=f=null))};return function(){if(e=arguments,i=it(),f=this,c=s&&(a||!v),p===!1)var t=v&&!a;else{u||v||(l=i);var g=p-(i-l),_=g<=0;_?(u&&(u=clearTimeout(u)),l=i,o=n.apply(f,e)):u||(u=setTimeout(y,g))}return _&&a?a=clearTimeout(a):a||r===p||(a=setTimeout(h,r)),t&&(_=!0,o=n.apply(f,e)),!_||a||u||(e=f=null),o}}function In(n){if(!q(n))throw new TypeError;var r=e(arguments,1);return setTimeout(function(){n.apply(or,r)},1)}function Mn(n,r){if(!q(n))throw new TypeError;var t=e(arguments,2);return setTimeout(function(){n.apply(or,t)},r)}function $n(n,r){var t={};return function(){var e=r?r.apply(this,arguments):ar+arguments[0];return Dr.call(t,e)?t[e]:t[e]=n.apply(this,arguments)}}function Wn(n){var r,t;if(!q(n))throw new TypeError;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}}function zn(n){return g(n,16,e(arguments,1))}function Cn(n,r,t){var e=!0,u=!0;if(!q(n))throw new TypeError;return t===!1?e=!1:D(t)&&(e="leading"in t?t.leading:e,u="trailing"in t?t.trailing:u),t={},t.leading=e,t.maxWait=r,t.trailing=u,Dn(n,r,t)}function Pn(n,r){return g(r,16,[n])}function Un(n,r,t){var e=typeof n;if(null==n||"function"==e)return a(n,r,t);if("object"!=e)return Kn(n);var u=Lr(n);return function(r){for(var t=u.length,e=!1;t--&&(e=r[u[t]]===n[u[t]]););return e}}function Vn(n){return null==n?"":String(n).replace(Zr,_)}function Gn(n){return n}function Hn(n){X(E(n),function(r){var t=u[r]=n[r];u.prototype[r]=function(){var n=[this.__wrapped__];Ir.apply(n,arguments);var r=t.apply(u,n);return this.__chain__?new o(r,(!0)):r}})}function Jn(){return xr._=Rr,this}function Kn(n){return function(r){return r[n]}}function Ln(n,r){return null==n&&null==r&&(r=1),n=+n||0,null==r?(r=n,n=0):r=+r||0,n+qr(Gr()*(r-n+1))}function Qn(n,r){if(n){var t=n[r];return q(t)?n[r]():t}}function Xn(n,r,e){var o=u,i=o.templateSettings;n=String(n||""),e=T({},e,i);var f=0,a="__p += '",c=e.variable,l=RegExp((e.escape||lr).source+"|"+(e.interpolate||lr).source+"|"+(e.evaluate||lr).source+"|$","g");n.replace(l,function(r,e,u,o,i){return a+=n.slice(f,i).replace(pr,t),e&&(a+="' +\n_.escape("+e+") +\n'"),o&&(a+="';\n"+o+";\n__p += '"),u&&(a+="' +\n((__t = ("+u+")) == null ? '' : __t) +\n'"),f=i+r.length,r}),a+="';\n",c||(c="obj",a="with ("+c+" || {}) {\n"+a+"\n}\n"),a="function("+c+") {\nvar __t, __p = '', __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n"+a+"return __p\n}";try{var p=Function("_","return "+a)(o)}catch(s){throw s.source=a,s}return r?p(r):(p.source=a,p)}function Yn(n,r,t){n=(n=+n)>-1?n:0;var e=-1,u=Array(n);for(r=a(r,t,1);++e<n;)u[e]=r(e);return u}function Zn(n){return null==n?"":String(n).replace(Yr,b)}function nr(n){var r=++ir+"";return n?n+r:r}function rr(n){return n=new o(n),n.__chain__=!0,n}function tr(n,r){return r(n),n}function er(){return this.__chain__=!0,this}function ur(){return this.__wrapped__}var or,ir=0,fr={},ar=+new Date+"",cr=/<%=([\s\S]+?)%>/g,lr=/($^)/,pr=/['\n\r\t\u2028\u2029\\]/g,sr="[object Arguments]",vr="[object Array]",hr="[object Boolean]",yr="[object Date]",gr="[object Function]",_r="[object Number]",dr="[object Object]",mr="[object RegExp]",br="[object String]",wr={"boolean":!1,"function":!0,object:!0,number:!1,string:!1,undefined:!1},jr={"\\":"\\","'":"'","\n":"n","\r":"r","\t":"t","\u2028":"u2028","\u2029":"u2029"},xr=wr[typeof window]&&window||this,Tr=wr[typeof exports]&&exports&&!exports.nodeType&&exports,Er=wr[typeof module]&&module&&!module.nodeType&&module,Ar=Er&&Er.exports===Tr&&Tr,Sr=wr[typeof global]&&global;!Sr||Sr.global!==Sr&&Sr.window!==Sr||(xr=Sr);var Or=[],Nr=Object.prototype,Rr=xr._,kr=Nr.toString,Br=RegExp("^"+String(kr).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$"),Fr=Math.ceil,qr=Math.floor,Dr=Nr.hasOwnProperty,Ir=Or.push,Mr=Nr.propertyIsEnumerable,$r=m($r=Object.create)&&$r,Wr=m(Wr=Array.isArray)&&Wr,zr=xr.isFinite,Cr=xr.isNaN,Pr=m(Pr=Object.keys)&&Pr,Ur=Math.max,Vr=Math.min,Gr=Math.random;o.prototype=u.prototype;var Hr={};!function(){var n={0:1,length:1};Hr.spliceObjects=(Or.splice.call(n,0,1),!n[0])}(1),u.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:cr,variable:""},$r||(f=function(){function n(){}return function(r){if(D(r)){n.prototype=r;var t=new n;n.prototype=null}return t||xr.Object()}}()),w(arguments)||(w=function(n){return n&&"object"==typeof n&&"number"==typeof n.length&&Dr.call(n,"callee")&&!Mr.call(n,"callee")||!1});var Jr=Wr||function(n){return n&&"object"==typeof n&&"number"==typeof n.length&&kr.call(n)==vr||!1},Kr=function(n){var r,t=n,e=[];if(!t)return e;if(!wr[typeof n])return e;for(r in t)Dr.call(t,r)&&e.push(r);return e},Lr=Pr?function(n){return D(n)?Pr(n):[]}:Kr,Qr={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"},Xr=S(Qr),Yr=RegExp("("+Lr(Xr).join("|")+")","g"),Zr=RegExp("["+Lr(Qr).join("")+"]","g"),nt=function(n,r){var t,e=n,u=e;if(!e)return u;if(!wr[typeof e])return u;for(t in e)if(r(e[t],t,n)===fr)return u;return u},rt=function(n,r){var t,e=n,u=e;if(!e)return u;if(!wr[typeof e])return u;for(t in e)if(Dr.call(e,t)&&r(e[t],t,n)===fr)return u;return u};q(/x/)&&(q=function(n){return"function"==typeof n&&kr.call(n)==gr});var tt=y(function(n,r,t){Dr.call(n,t)?n[t]++:n[t]=1}),et=y(function(n,r,t){(Dr.call(n,t)?n[t]:n[t]=[]).push(r)}),ut=y(function(n,r,t){n[t]=r}),ot=nn,it=m(it=Date.now)&&it||function(){return(new Date).getTime()};u.after=kn,u.bind=Bn,u.bindAll=Fn,u.chain=rr,u.compact=hn,u.compose=qn,u.countBy=tt,u.debounce=Dn,u.defaults=T,u.defer=In,u.delay=Mn,u.difference=yn,u.filter=K,u.flatten=_n,u.forEach=X,u.functions=E,u.groupBy=et,u.indexBy=ut,u.initial=mn,u.intersection=bn,u.invert=S,u.invoke=Z,u.keys=Lr,u.map=nn,u.max=rn,u.memoize=$n,u.min=tn,u.omit=P,u.once=Wn,u.pairs=U,u.partial=zn,u.pick=V,u.pluck=ot,u.range=xn,u.reject=on,u.rest=Tn,u.shuffle=an,u.sortBy=pn,u.tap=tr,u.throttle=Cn,u.times=Yn,u.toArray=sn,u.union=An,u.uniq=Sn,u.values=G,u.where=vn,u.without=On,u.wrap=Pn,u.zip=Nn,u.collect=nn,u.drop=Tn,u.each=X,u.extend=j,u.methods=E,u.object=Rn,u.select=K,u.tail=Tn,u.unique=Sn,u.clone=x,u.contains=H,u.escape=Vn,u.every=J,u.find=L,u.has=A,u.identity=Gn,u.indexOf=dn,u.isArguments=w,u.isArray=Jr,u.isBoolean=O,u.isDate=N,u.isElement=R,u.isEmpty=k,u.isEqual=B,u.isFinite=F,u.isFunction=q,u.isNaN=I,u.isNull=M,u.isNumber=$,u.isObject=D,u.isRegExp=W,u.isString=z,u.isUndefined=C,u.lastIndexOf=jn,u.mixin=Hn,u.noConflict=Jn,u.random=Ln,u.reduce=en,u.reduceRight=un,u.result=Qn,u.size=cn,u.some=ln,u.sortedIndex=En,u.template=Xn,u.unescape=Zn,u.uniqueId=nr,u.all=J,u.any=ln,u.detect=L,u.findWhere=Q,u.foldl=en,u.foldr=un,u.include=H,u.inject=en,u.first=gn,u.last=wn,u.sample=fn,u.take=gn,u.head=gn,Hn(u),u.VERSION="2.4.1",u.prototype.chain=er,u.prototype.value=ur,X(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var r=Or[n];u.prototype[n]=function(){var n=this.__wrapped__;return r.apply(n,arguments),Hr.spliceObjects||0!==n.length||delete n[0],this}}),X(["concat","join","slice"],function(n){var r=Or[n];u.prototype[n]=function(){var n=this.__wrapped__,t=r.apply(n,arguments);return this.__chain__&&(t=new o(t),t.__chain__=!0),t}}),"function"==typeof define&&"object"==typeof define.amd&&define.amd?(xr._=u,define(function(){return u})):Tr&&Er?Ar?(Er.exports=u)._=u:Tr._=u:xr._=u}).call(this);