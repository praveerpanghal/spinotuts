!function(t){function a(t){return t.replace(/([!"#$%&'()*+,.\/:;<=>?@\[\\\]^`{|}~])/g,"\\$1")}function e(t){var a=t.closest(".form-group");a&&a.length>0&&a.addClass("has-error").removeClass("has-success")}function r(t){var a=t.closest(".form-group");a&&a.length>0&&a.addClass("has-success").removeClass("has-error")}function n(a,r,n,s){r(n,s),t(s).hasClass("input-validation-error")&&e(s)}function s(t,a){var e=a.data("unobtrusiveContainer");t(a),e&&r(e)}t.fn.validateBootstrap=function(r){return this.each(function(){var o=t(this);r&&(o.removeData("validator"),o.removeData("unobtrusiveValidation"),t.validator.unobtrusive.parse(o));var i=o.data("validator");if(i){i.settings.errorClass+=" text-danger";var u=i.settings.errorPlacement,c=i.settings.success;i.settings.errorPlacement=function(t,a){n(o,u,t,a)},i.settings.success=function(t){s(c,t)},o.find(".input-validation-error").each(function(){var e=o.find("[data-valmsg-for='"+a(t(this)[0].name)+"']"),r=t(document.createElement(i.settings.errorElement)).addClass("text-danger").attr("for",a(t(this)[0].name)).text(e.text());n(o,u,r,t(this))})}else o.find(".input-validation-error").each(function(){e(t(this))})})},t(function(){t("form").validateBootstrap()})}(jQuery);