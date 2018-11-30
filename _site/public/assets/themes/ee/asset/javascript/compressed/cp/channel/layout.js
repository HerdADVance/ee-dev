/*!
 * This source file is part of the open source project
 * ExpressionEngine (https://expressionengine.com)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
 * @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
 */
$(document).ready(function(){function e(){var e=n.find("a.act").parents("li").eq(0);return n.find("li").index(e)}function a(e){var a=$(e).parents(".layout-item").eq(0);return $("div.tab-open .layout-item").index(a)}function i(){n.find("li a").droppable({accept:".layout-grid-wrap .col-group",hoverClass:"highlight",tolerance:"pointer",drop:function(a,i){if(clearTimeout(r),$(this).trigger("click"),i.draggable.remove(),$('<div class="col-group"></div>').append(i.draggable.html()).prependTo($("div.tab-open .layout-grid-wrap")),$(i.draggable).has(".field-option-required")){var l=$(this).closest("li");$(l).find(".tab-off").length>0&&$(l).find(".tab-off").trigger("click")}EE.publish_layout[e()].fields.unshift(t),t=null},over:function(e,a){tab=this,r=setTimeout(function(){$(tab).trigger("click"),o.sortable("refreshPositions")},d)},out:function(e,a){clearTimeout(r)},deactivate:function(e,a){clearTimeout(r)}})}var t,l=$("#debug").remove(),n=$("form .tab-wrap ul.tabs"),o=$("form .tab-wrap div.tab");n.sortable({cancel:"li:first-child",items:"li",start:function(e,a){tab_index_at_start=n.find("li").index(a.item[0])},update:function(e,a){var i=n.find("li").index(a.item[0]),t=EE.publish_layout.splice(tab_index_at_start,1);EE.publish_layout.splice(i,0,t[0]),tab_index_at_start=NaN}});var r,d=500;i();var s={appendTo:"div.form-standard",connectWith:"div.tab",cursor:"move",forceHelperSize:!0,forcePlaceholderSize:!0,handle:".layout-item .reorder",helper:"clone",items:".layout-grid-wrap .col-group",placeholder:"drag-placeholder",start:function(a,i){var l=o.filter(".tab-open").find(".layout-grid-wrap .col-group").index(i.item[0]);t=EE.publish_layout[e()].fields.splice(l,1)[0],i.placeholder.append('<div class="none"></div>')},stop:function(a,i){if(i.position!=i.originalPosition&&null!=t){var l=o.filter(".tab-open").find(".layout-grid-wrap .col-group").index(i.item[0]);EE.publish_layout[e()].fields.splice(l,0,t),t=null}}};o.sortable(s),$(".tab-on, .tab-off").on("click",function(e){var a=$(this).parents("li").eq(0),i=n.find("li").index(a),t=o.filter("."+$(a).find("a").eq(0).attr("rel"));return EE.publish_layout[i].visible&&t.has(".field-option-required").length>0?void $("body").prepend(EE.alert.required.replace("%s",a.text())):(EE.publish_layout[i].visible=!EE.publish_layout[i].visible,$(this).toggleClass("tab-on tab-off"),void e.preventDefault())}),$(".modal-add-new-tab button").on("click",function(e){var a=$('.modal-add-new-tab input[name="tab_name"]'),t=$('.modal-add-new-tab input[name="tab_name"]').val(),l="custom__"+t.replace(/ /g,"_").replace(/&/g,"and").toLowerCase(),r=/^[^*>:+()\[\]=|"'.#$]+$/;if($(".modal-add-new-tab .setting-field em").remove(),a.parents("fieldset").removeClass("invalid"),""===t)a.after($("<em></em>").append(a.data("required"))),a.parents("fieldset").addClass("invalid");else if(r.test(t)){for(var d=!1,p=0;p<EE.publish_layout.length;p++)EE.publish_layout[p].id==l&&(d=!0);if(d)a.after($("<em></em>").append(a.data("duplicate"))),a.parents("fieldset").addClass("invalid");else{var u={id:l,name:t,visible:!0,fields:[]};EE.publish_layout.push(u);var f=$("form .tab-wrap ul.tabs li").length;n.find("li a").droppable("destroy"),n.append('<li><a href="" rel="t-'+f+'">'+t+'</a> <span class="tab-remove"></span></li>'),o.filter(".t-"+(f-1)).after('<div class="tab t-'+f+'"><div class="layout-grid-wrap"></div></div>'),i(),o=$("form .tab-wrap div.tab"),o.eq(-1).sortable(s),$(".modal-add-new-tab .m-close").trigger("click")}}else a.after($("<em></em>").append(a.data("illegal"))),a.parents("fieldset").addClass("invalid");e.preventDefault()}),$(".modal-add-new-tab .m-close").on("click",function(e){$('.modal-add-new-tab input[name="tab_name"]').val(""),$(".modal-add-new-tab .setting-field em").remove(),$('.modal-add-new-tab input[name="tab_name"]').parents("fieldset").removeClass("invalid")}),$(".modal-add-new-tab form").on("submit",function(e){$(".modal-add-new-tab .submit").trigger("click"),e.preventDefault()}),n.on("click",".tab-remove",function(e){var a=$(this).parents("li").eq(0),i=$("ul.tabs li").index(a),t=o.filter("."+$(a).find("a").eq(0).attr("rel"));return t.find(".layout-grid-wrap").html().trim()?void $("body").prepend(EE.alert.not_empty.replace("%s",a.text())):(EE.publish_layout.splice(i,1),a.remove(),void t.remove())}),$("[data-publish] form").on("click",".field-option-hide input",function(i){var t=e(),l=a(this);EE.publish_layout[t].fields[l].visible=!EE.publish_layout[t].fields[l].visible}),$("[data-publish] form").on("click",".field-option-collapse input",function(i){var t=e(),l=a(this);EE.publish_layout[t].fields[l].collapsed=!EE.publish_layout[t].fields[l].collapsed}),$("[data-publish] form").on("submit",function(e){$('input[name="field_layout"]').val(JSON.stringify(EE.publish_layout))}),$("body").append(l)});