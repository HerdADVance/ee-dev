/*!
 * This source file is part of the open source project
 * ExpressionEngine (https://expressionengine.com)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
 * @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
 */
!function(t){"use strict";function i(i,e,n){a(i,n,e),i.toggle(e),i.each(function(i,e){var a=t(e).closest("fieldset");a.hasClass("fieldset-invalid")&&0==a.find("input:visible").not("input.btn").size()&&(a.removeClass("fieldset-invalid"),a.find("em.ee-form-error-message").remove())})}function e(e,a,d){e.each(function(){t(this).toggle(a),t(this).nextUntil("h2, .form-btns").each(function(){var e=t(this),s=e.data("group");s&&(n[s]=!a),a&&s?i(e,o[s],d):i(e,a,d)})})}function a(i,e,a){i.find(":radio").each(function(){var i=t(this);i.attr("disabled",!a);var e=i.data("el_checked");e||(e="checked"==t(this).attr("checked"),i.data("el_checked",e),i.change(function(){i.data("el_checked",i.prop("checked"))})),a&&i.prop("checked",e)})}var n={"always-hidden":!1},o={"always-hidden":!1};t(document).ready(function(){var i=t("*[data-group-toggle]:radio");a(i,"",!1),t("*[data-group-toggle]").each(function(i,e){if(!t(this).is(":radio")||t(this).is(":checked")){var a=t(this).data("groupToggle"),n=t(this).val();t.each(a,function(t,i){void 0!=o[i]&&0!=o[i]||(o[i]=!(t!=n))})}}),t("*[data-group-toggle]").each(function(i,e){if(!t(this).is(":radio")||t(this).is(":checked")){EE.cp.form_group_toggle(this);t(this).data("groupToggle")}})}),EE.cp.form_group_toggle=function(a){if(t(a).size()){var d=t(a).data("groupToggle"),s=t(a).val();o={"always-hidden":!1};var c=function(a,d){var c=t('*[data-group*="'+d+'"]').filter(function(i){return t(this).data("group").split("|").includes(d)}),r=t('*[data-section-group*="'+d+'"]').filter(function(){return t(this).data("sectionGroup").split("|").includes(d)});void 0!=o[d]&&0!=o[d]||(o[d]=a==s),i(c,!n[d]&&a==s),e(r,o[d])};t.each(d,function(t,i){t!=s&&c(t,i)}),c(s,d[s]);t(a).closest("form")}},EE.cp.fieldToggleDisable=function(i,e){t("fieldset :input:hidden",i).not(".filter-item__search input").not(".fields-grid-item:visible :input").attr("disabled",!0),t("fieldset:visible input[type=hidden]",i).attr("disabled",!1),e=e||"field_type",t('input[name="'+e+'"]',i).on("change",function(){t("fieldset :input",i).not(".filter-item__search input").attr("disabled",!0),t("fieldset:visible :input",i).not(".grid-blank-row :input").attr("disabled",!1)})}}(jQuery);