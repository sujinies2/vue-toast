!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("tui-editor")):"function"==typeof define&&define.amd?define(["tui-editor"],e):"object"==typeof exports?exports.toastui=e(require("tui-editor")):t.toastui=e(t.tui.Editor)}(window,function(t){return function(t){var e={};function i(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=e,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=1)}([function(e,i){e.exports=t},function(t,e,i){"use strict";i.r(e);var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"tuiEditor"})};r._withStripped=!0;var n=i(0),o=i.n(n),u=["load","change","stateChange","focus","blur"],s=["insertText","setValue","setMarkdown","setHtml","reset"];function a(t,e,i,r,n,o,u,s){var a,d="function"==typeof t?t.options:t;if(e&&(d.render=e,d.staticRenderFns=i,d._compiled=!0),r&&(d.functional=!0),o&&(d._scopeId="data-v-"+o),u?(a=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(u)},d._ssrRegister=a):n&&(a=s?function(){n.call(this,this.$root.$options.shadowRoot)}:n),a)if(d.functional){d._injectStyles=a;var l=d.render;d.render=function(t,e){return a.call(e),l(t,e)}}else{var f=d.beforeCreate;d.beforeCreate=f?[].concat(f,a):[a]}return{exports:t,options:d}}var d=a({name:"TuiEditor",props:{previewStyle:{type:String},height:{type:String},value:{type:String},mode:{type:String},options:{type:Object},html:{type:String},visible:{type:Boolean,default:!0}},data:function(){return{editor:null}},computed:{editorOptions:function(){var t=Object.assign({},this.options);return t.initialValue=this.value,t.initialEditType=this.mode,t.height=this.height,t.previewStyle=this.previewStyle,t}},watch:{previewStyle:function(t){this.editor.changePreviewStyle(t)},value:function(t,e){t!==e&&t!==this.editor.getValue()&&this.editor.setValue(t)},height:function(t){this.editor.height(t)},mode:function(t){this.editor.changeMode(t)},html:function(t){this.editor.setHtml(t),this.$emit("input",this.editor.getValue())},visible:function(t){t?this.editor.show():this.editor.hide()}},mounted:function(){var t=this,e={};u.forEach(function(i){e[i]=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];t.$emit.apply(t,[i].concat(r))}});var i=Object.assign(this.editorOptions,{el:this.$refs.tuiEditor,events:e});this.editor=new o.a(i),this.$listeners.input&&this.editor.on("change",function(){t.$emit("input",t.editor.getValue())})},destroyed:function(){var t=this;u.forEach(function(e){t.editor.off(e)}),this.editor.remove()},methods:{invoke:function(t){var e=null;if(this.editor[t]){for(var i,r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];e=(i=this.editor)[t].apply(i,n),s.indexOf(t)>-1&&this.$emit("input",this.editor.getValue())}return e}}},r,[],!1,null,null,null);d.options.__file="src/Editor.vue";var l=d.exports,f=function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"tuiEditorViewer"})};f._withStripped=!0;var c=a({name:"TuiEditorViewer",props:{height:{type:String},value:{type:String},exts:{type:Array}},data:function(){return{editor:null}},watch:{value:function(t,e){t!==e&&this.editor.setValue(t)}},mounted:function(){var t=this,e={};u.forEach(function(i){e[i]=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];t.$emit.apply(t,[i].concat(r))}}),this.editor=o.a.factory({el:this.$refs.tuiEditorViewer,exts:this.exts,events:e,initialValue:this.value,height:this.height,viewer:!0})},destroyed:function(){var t=this;u.forEach(function(e){t.editor.off(e)}),this.editor.remove()},methods:{invoke:function(t){var e=null;if(this.editor[t]){for(var i,r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];e=(i=this.editor)[t].apply(i,n)}return e}}},f,[],!1,null,null,null);c.options.__file="src/Viewer.vue";var h=c.exports;i.d(e,"Editor",function(){return l}),i.d(e,"Viewer",function(){return h})}])});