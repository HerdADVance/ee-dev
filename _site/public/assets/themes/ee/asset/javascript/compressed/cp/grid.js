/*!
 * This source file is part of the open source project
 * ExpressionEngine (https://expressionengine.com)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
 * @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
 */
!function(t){var e=window.Grid={_eventHandlers:[],bind:function(t,e,i){void 0==this._eventHandlers[e]&&(this._eventHandlers[e]=[]),this._eventHandlers[e][t]=i}};e.Publish=function(e,i){null===e||void 0===e||t(e).closest(".fluid-field-templates").size()>0||(this.root=t(e),this.parentContainer=this.root.parents(".fieldset-faux"),this.blankRow=t("tr.grid-blank-row",this.root),this.emptyField=t("tr.no-results",this.root),this.tableActions=t("tr.tbl-action",this.root),this.rowContainer=this.root.find("> tbody"),this.addButtonToolbar=t("ul.toolbar:has(li.add)",this.parentContainer),this.header=null,this.rowSelector="tr",this.cellSelector="td",this.reorderHandleContainerSelector="th.reorder-col, td.reorder-col",this.deleteContainerHeaderSelector="th.grid-remove",this.deleteButtonsSelector="td:last-child .toolbar .remove:has(a[rel=remove_row])",this.sortableParams={},this.settings=void 0!==i?i:EE.grid_field_settings[e.id],this.init(),this.eventHandlers=[])},e.MiniField=function(e,i){this.root=t(e),this.root.data("gridInitialized",!0),this.parentContainer=this.root,this.blankRow=t(".grid-blank-row",this.root),this.emptyField=t(".field-no-results",this.root),this.tableActions=null,this.rowContainer=t(".keyvalue-item-container",this.root),this.addButtonToolbar=t("> [rel=add_row]",this.parentContainer),this.header=t(".fields-keyvalue-header",this.root),this.rowSelector=".fields-keyvalue-item",this.cellSelector=".field-control",this.reorderHandleContainerSelector="ul.toolbar:has(li.reorder)",this.deleteContainerHeaderSelector=null,this.deleteButtonsSelector="ul.toolbar:has(li.remove)",this.sortableParams={sortableContainer:".keyvalue-item-container",handle:"li.reorder",cancel:"li.sort-cancel",item:".fields-keyvalue-item"},this.settings=i,this.init(),this._addNewRowOnEnter(),this.eventHandlers=[]},t.fn.miniGrid=function(i){return this.each(function(){if(!t(this).data("gridInitialized"))return new e.MiniField(this,i)})},e.Publish.prototype=e.MiniField.prototype={init:function(){this._bindSortable(),this._bindAddButton(),this._bindDeleteButton(),this._toggleRowManipulationButtons(),this._fieldDisplay(),this.original_row_count=this._getRows().size(),this.blankRow.find(":input").attr("disabled","disabled")},_addNewRowOnEnter:function(){var e=this;t(this.root).on("keypress","input[type=text]",function(i){13==i.keyCode&&(i.preventDefault(),e._addRow(),t(e.rowSelector,e.root).last().find("input[type=text]").first().focus())})},_bindSortable:function(){var e=this,i={beforeSort:function(t){e._fireEvent("beforeSort",t)},afterSort:function(i){e._fireEvent("afterSort",i),t(document).trigger("entry:preview")}};i=t.extend(i,this.sortableParams),this.root.eeTableReorder(i)},_addMinimumRows:function(){var t=this._getRows().size(),e=this.settings.grid_min_rows-t;for(0==t&&0==e&&this._setNoResultsVisible(!0);e>0;)this._addRow(),e--},_toggleRowManipulationButtons:function(){var e=this._getRows().size(),i=(this.root.find("th.reorder-col"),this.root.find("th.grid-remove"),e>0);this.addButtonToolbar.toggle(i),t(this.reorderHandleContainerSelector,this.root).toggle(i),t(this.deleteContainerHeaderSelector,this.root).toggle(i),this.header&&this.header.toggle(i),""!==this.settings.grid_max_rows&&this.addButtonToolbar.toggle(e<this.settings.grid_max_rows&&e>0),""!==this.settings.grid_min_rows&&t(this.deleteButtonsSelector,this.root).toggle(e>this.settings.grid_min_rows),t(this.reorderHandleContainerSelector,this.rowContainer).toggleClass("sort-cancel",1==e)},_getRows:function(){return this.rowContainer.children(this.rowSelector).not(this.blankRow.add(this.emptyField).add(this.tableActions))},_bindAddButton:function(){var e=this;t("a[rel=add_row]",this.parentContainer).add(".tbl-action a.add",this.root).on("click",function(t){t.preventDefault(),e._addRow()})},_addRow:function(){el=this.blankRow.clone(),el.removeClass("grid-blank-row"),el.removeClass("hidden"),this.original_row_count++,el.html(el.html().replace(RegExp("new_row_[0-9]{1,}","g"),"new_row_"+this.original_row_count)),t("> "+this.cellSelector,el).attr("data-new-row-id","new_row_"+this.original_row_count),el.find(":input").removeAttr("disabled"),this.tableActions&&this.tableActions.length?this.tableActions.before(el):this.rowContainer.append(el),this._setNoResultsVisible(!1),this._toggleRowManipulationButtons(),this._fireEvent("display",el),t(document).trigger("entry:preview"),t(this.root).trigger("grid:addRow",el),EE.cp&&void 0!==EE.cp.formValidation&&EE.cp.formValidation.bindInputs(el)},_bindDeleteButton:function(){var e=this;this.root.on("click","a[rel=remove_row]",function(i){i.preventDefault();var n=t(this).closest(e.rowSelector);e._fireEvent("remove",n),t(document).trigger("entry:preview"),n.remove(),e._toggleRowManipulationButtons(),0==e._getRows().size()&&e._setNoResultsVisible(!0),0==t("td.invalid",e.root).size()&&EE.cp&&void 0!==EE.cp.formValidation&&EE.cp.formValidation.markFieldValid(t("input, select, textarea",e.blankRow).eq(0))})},_setNoResultsVisible:function(t){this.emptyField.toggleClass("hidden",!t),t?this.emptyField.find(":input").removeAttr("disabled"):this.emptyField.find(":input").attr("disabled","disabled")},_fieldDisplay:function(){var e=this;setTimeout(function(){e._getRows().each(function(){e._fireEvent("display",t(this))}),e._addMinimumRows()},500)},_fireEvent:function(i,n){if(void 0!==e._eventHandlers[i])for(var o in e._eventHandlers[i])n.find('td[data-fieldtype="'+o+'"]').each(function(){e._eventHandlers[i][o](t(this))})}},e.Settings=function(e){this.root=t(".fields-grid-setup"),this.colTemplateContainer=t("#grid_col_settings_elements"),this.blankColumn=this.colTemplateContainer.find(".fields-grid-item"),this.settings=e,this.init()},e.Settings.prototype={init:function(){this._bindSortable(),this._bindExpandButton(),this._expandErroredColumns(),this._bindActionButtons(this.root),this._toggleDeleteButtons(),this._bindColTypeChange(),this._bindAutoColName(this.root.find('div.fields-grid-item[data-field-name^="new_"]')),this._settingsDisplay(),this.colTemplateContainer.find(":input").attr("disabled","disabled")},_bindSortable:function(){this.root.sortable({axis:"y",containment:"parent",handle:".fields-grid-tool-reorder",items:".fields-grid-item",sort:EE.sortable_sort_helper}),t(this.root).on("click",".fields-grid-tool-reorder",function(t){t.preventDefault()})},_bindExpandButton:function(){var e=this;t(this.root).on("click",".fields-grid-tool-expand",function(i){e._toggleColumnExpand(t(this).parents(".fields-grid-item")),i.preventDefault()})},_expandErroredColumns:function(){var e=this;t(".fields-grid-item",this.root).each(function(i,n){t(".fieldset-invalid",n).size()&&e._toggleColumnExpand(t(n),!0)})},_toggleColumnExpand:function(e,i){var n="fields-grid-item---open",o=e.hasClass(n),r=t(".toggle-header",e),s=t("b",r),l=t("span.txt-fade",r),a=t('input[name$="[col_label]"]',e).val(),d=t('input[name$="[col_type]"]',e).val();o&&(s.html(a),l.html("("+d+")")),e.toggleClass(n,void 0!==i?i:!o)},_bindActionButtons:function(t){this._bindAddButton(t),this._bindCopyButton(t),this._bindDeleteButton(t)},_bindAddButton:function(e){var i=this;e.find(".fields-grid-tool-add").on("click",function(e){e.preventDefault();var n=t(this).parents(".fields-grid-item");i._insertColumn(i._buildNewColumn(),n)})},_bindCopyButton:function(e){var i=this;e.find(".fields-grid-tool-copy").off("click").on("click",function(e){e.preventDefault();var n=t(this).parents(".fields-grid-item");i._toggleColumnExpand(n,!1),i._insertColumn(i._buildNewColumn(n),n)})},_bindDeleteButton:function(e){var i=this;e.on("click",".fields-grid-tool-remove",function(e){e.preventDefault();var n=t(this).parents(".fields-grid-item");n.index()==t(".fields-grid-item:last",i.root).index()?(n.remove(),i._toggleDeleteButtons()):n.animate({opacity:0},200,function(){n.html(""),n.animate({height:0},200,function(){n.remove(),i._toggleDeleteButtons()})});var o=t("fieldset.fieldset-invalid input",i.root);o.size()?o.trigger("blur"):t("input[name=field_name]").trigger("blur")})},_toggleDeleteButtons:function(){var t=this.root.find(".fields-grid-item").size()>1,e=this.root.find(".fields-grid-tool-remove");e.toggle(t)},_insertColumn:function(e,i){var n=t(".fields-grid-item:last",this.root);void 0==i&&(i=n),i.index()!=n.index()&&e.css({opacity:0}),e.insertAfter(i),this._toggleDeleteButtons(),e.animate({opacity:1},400),this._bindAutoColName(e),this._bindActionButtons(e),EE.cp.formValidation.bindInputs(e),Dropdown.renderFields(e),this._toggleColumnExpand(e,!0),t("body").animate({scrollTop:e.offset().top-10},500),this._fireEvent("displaySettings",t(".grid-col-settings-custom > div",e))},_bindAutoColName:function(e){e.each(function(e,i){t('input[name$="\\[col_label\\]"]',i).bind("keyup keydown",function(){t(this).ee_url_title(t(i).find('input[name$="\\[col_name\\]"]'),!0)})})},_buildNewColumn:function(e){if(void 0==e)e=this.blankColumn.clone();else{e=this._cloneWithFormValues(e);var i=e.find("input[name*=col_type]").val();e.find("div[data-dropdown-react]").attr("data-initial-value",i)}e.find('input[name$="\\[col_name\\]"]').attr("value","");var n="new_"+t(".fields-grid-item",this.root).size(),o=e.data("field-name");return e.html(this._swapNamespace(e.html(),o,n)),e.attr("data-field-name",n),e.find(":input").removeAttr("disabled").removeClass("grid_settings_error"),e},_bindColTypeChange:function(){var e=this;this.root.on("change",'input[name$="\\[col_type\\]"]',function(i){var n=e.colTemplateContainer.find(".grid_col_settings_custom_field_"+t(this).val()+":last").clone();n.find(":input").removeAttr("disabled");var o=t(this).parents(".fields-grid-item").find(".grid-col-settings-custom"),r=o.parents(".fields-grid-item").attr("data-field-name"),s="(new_)?[0-9]{1,}";n.html(e._swapNamespace(n.html(),s,r)),o.html(n),e._fireEvent("displaySettings",n)})},_swapNamespace:function(t,e,i){return t.replace(RegExp('name="grid\\[cols\\]\\['+e+"\\]","g"),'name="grid[cols]['+i+"]").replace(RegExp('data-input-value="grid\\[cols\\]\\['+e+"\\]","g"),'data-input-value="grid[cols]['+i+"]")},_cloneWithFormValues:function(e){var i=e.clone();return e.find(":input:enabled").each(function(){var e=i.find(":input[name='"+t(this).attr("name")+"']:enabled");t(this).is("select")?e.find("option").removeAttr("selected").filter('[value="'+t(this).val()+'"]').attr("selected","selected"):"checkbox"==t(this).attr("type")?t(this).prop("checked")&&e.attr("checked","checked"):"radio"==t(this).attr("type")?(e=e.filter("[value='"+t(this).val()+"']").removeAttr("checked"),t(this).prop("checked")&&(e.attr("checked","checked"),console.log(e))):t(this).is("textarea")?e.html(t(this).val()):e.attr("value",t(this).val())}),i},_settingsDisplay:function(){var e=this;this.root.find(".fields-grid-item").each(function(){e._fireEvent("displaySettings",t(".grid-col-settings-custom > div",this))})},_fireEvent:function(i,n){var o=n.data("fieldtype");void 0!==e._eventHandlers[i]&&void 0!=e._eventHandlers[i][o]&&e._eventHandlers[i][o](t(n))}},EE.grid=function(i,n){return void 0==n&&(n=t(i).data("grid-settings")),new e.Publish(i,n)},EE.grid_settings=function(t){return new e.Settings(t)},"undefined"!=typeof _&&"undefined"!==EE.grid_cache&&_.each(EE.grid_cache,function(t){e.bind.apply(e,t)}),t(document).ready(function(){FluidField.on("grid","add",function(e){EE.grid(t("table",e))})})}(jQuery);