!function(a){function e(a,e,n){a.rules[e]=n,a.message&&(a.messages[e]=a.message)}function n(a){return a.replace(/^\s+|\s+$/g,"").split(/\s*,\s*/g)}function t(a){return a.replace(/([!"#$%&'()*+,.\/:;<=>?@\[\\\]^`{|}~])/g,"\\$1")}function r(a){return a.substr(0,a.lastIndexOf(".")+1)}function i(a,e){return 0===a.indexOf("*.")&&(a=a.replace("*.",e)),a}function d(e,n){var r=a(this).find("[data-valmsg-for='"+t(n[0].name)+"']"),i=r.attr("data-valmsg-replace"),d=i?a.parseJSON(i)!==!1:null;r.removeClass("field-validation-valid").addClass("field-validation-error"),e.data("unobtrusiveContainer",r),d?(r.empty(),e.removeClass("input-validation-error").appendTo(r)):e.hide()}function o(e,n){var t=a(this).find("[data-valmsg-summary=true]"),r=t.find("ul");r&&r.length&&n.errorList.length&&(r.empty(),t.addClass("validation-summary-errors").removeClass("validation-summary-valid"),a.each(n.errorList,function(){a("<li />").html(this.message).appendTo(r)}))}function s(e){var n=e.data("unobtrusiveContainer"),t=n.attr("data-valmsg-replace"),r=t?a.parseJSON(t):null;n&&(n.addClass("field-validation-valid").removeClass("field-validation-error"),e.removeData("unobtrusiveContainer"),r&&n.empty())}function l(e){var n=a(this);n.data("validator").resetForm(),n.find(".validation-summary-errors").addClass("validation-summary-valid").removeClass("validation-summary-errors"),n.find(".field-validation-error").addClass("field-validation-valid").removeClass("field-validation-error").removeData("unobtrusiveContainer").find(">*").removeData("unobtrusiveContainer")}function m(e){var n=a(e),t=n.data(f),r=a.proxy(l,e);return t||(t={options:{errorClass:"input-validation-error",errorElement:"span",errorPlacement:a.proxy(d,e),invalidHandler:a.proxy(o,e),messages:{},rules:{},success:a.proxy(s,e)},attachValidation:function(){n.unbind("reset."+f,r).bind("reset."+f,r).validate(this.options)},validate:function(){return n.validate(),n.valid()}},n.data(f,t)),t}var u,p=a.validator,f="unobtrusiveValidation";p.unobtrusive={adapters:[],parseElement:function(e,n){var t,r,i,d=a(e),o=d.parents("form")[0];o&&(t=m(o),t.options.rules[e.name]=r={},t.options.messages[e.name]=i={},a.each(this.adapters,function(){var n="data-val-"+this.name,t=d.attr(n),s={};void 0!==t&&(n+="-",a.each(this.params,function(){s[this]=d.attr(n+this)}),this.adapt({element:e,form:o,message:t,params:s,rules:r,messages:i}))}),a.extend(r,{__dummy__:!0}),n||t.attachValidation())},parse:function(e){var n=a(e).parents("form").andSelf().add(a(e).find("form")).filter("form");a(e).find(":input").filter("[data-val=true]").each(function(){p.unobtrusive.parseElement(this,!0)}),n.each(function(){var a=m(this);a&&a.attachValidation()})}},u=p.unobtrusive.adapters,u.add=function(a,e,n){return n||(n=e,e=[]),this.push({name:a,params:e,adapt:n}),this},u.addBool=function(a,n){return this.add(a,function(t){e(t,n||a,!0)})},u.addMinMax=function(a,n,t,r,i,d){return this.add(a,[i||"min",d||"max"],function(a){var i=a.params.min,d=a.params.max;i&&d?e(a,r,[i,d]):i?e(a,n,i):d&&e(a,t,d)})},u.addSingleVal=function(a,n,t){return this.add(a,[n||"val"],function(r){e(r,t||a,r.params[n])})},p.addMethod("__dummy__",function(a,e,n){return!0}),p.addMethod("regex",function(a,e,n){var t;return!!this.optional(e)||(t=new RegExp(n).exec(a),t&&0===t.index&&t[0].length===a.length)}),p.addMethod("nonalphamin",function(a,e,n){var t;return n&&(t=a.match(/\W/g),t=t&&t.length>=n),t}),p.methods.extension?(u.addSingleVal("accept","mimtype"),u.addSingleVal("extension","extension")):u.addSingleVal("extension","extension","accept"),u.addSingleVal("regex","pattern"),u.addBool("creditcard").addBool("date").addBool("digits").addBool("email").addBool("number").addBool("url"),u.addMinMax("length","minlength","maxlength","rangelength").addMinMax("range","min","max","range"),u.addMinMax("minlength","minlength").addMinMax("maxlength","minlength","maxlength"),u.add("equalto",["other"],function(n){var d=r(n.element.name),o=n.params.other,s=i(o,d),l=a(n.form).find(":input").filter("[name='"+t(s)+"']")[0];e(n,"equalTo",l)}),u.add("required",function(a){"INPUT"===a.element.tagName.toUpperCase()&&"CHECKBOX"===a.element.type.toUpperCase()||e(a,"required",!0)}),u.add("remote",["url","type","additionalfields"],function(d){var o={url:d.params.url,type:d.params.type||"GET",data:{}},s=r(d.element.name);a.each(n(d.params.additionalfields||d.element.name),function(e,n){var r=i(n,s);o.data[r]=function(){return a(d.form).find(":input").filter("[name='"+t(r)+"']").val()}}),e(d,"remote",o)}),u.add("password",["min","nonalphamin","regex"],function(a){a.params.min&&e(a,"minlength",a.params.min),a.params.nonalphamin&&e(a,"nonalphamin",a.params.nonalphamin),a.params.regex&&e(a,"regex",a.params.regex)}),a(function(){p.unobtrusive.parse(document)})}(jQuery);