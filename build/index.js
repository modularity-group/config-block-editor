!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=5)}([function(e,t){e.exports=window.wp.element},function(e,t,r){var o;!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var c=typeof o;if("string"===c||"number"===c)e.push(o);else if(Array.isArray(o)&&o.length){var a=n.apply(null,o);a&&e.push(a)}else if("object"===c)for(var l in o)r.call(o,l)&&o[l]&&e.push(l)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(o=function(){return n}.apply(t,[]))||(e.exports=o)}()},function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},r.apply(this,arguments)}e.exports=r},function(e,t){var r=wp.hooks.addFilter,o=lodash,n=o.assign,c=o.merge;r("blocks.registerBlockType","config-block-editor/wp-block-cover/supports",(function(e,t){return"core/cover"===t?n({},e,{supports:c(e.supports,{align:["full","wide"],color:{gradients:!1,__experimentalDuotone:!1}})}):e}))},function(e,t){var r=wp.hooks.addFilter,o=lodash,n=o.assign,c=o.merge;r("blocks.registerBlockType","config-block-editor/wp-block-cover/supports",(function(e,t){return"core/cover"===t?n({},e,{supports:c(e.supports,{align:["full","wide"],color:{gradients:!1,__experimentalDuotone:!1}})}):e}))},function(e,t,r){"use strict";r.r(t),r(3);var o=r(2),n=r.n(o),c=r(0),a=r(1),l=r.n(a),s=lodash,i=s.assign,p=s.merge,__=wp.i18n.__,u=wp.hooks.addFilter,f=wp.compose.createHigherOrderComponent,d=wp.element.Fragment,b=wp.blockEditor.InspectorControls,m=wp.components,g=m.PanelBody,k=m.ToggleControl;u("blocks.registerBlockType","config-block-editor/wp-block-cover/add-attributes",(function(e,t){return"core/cover"===t?i({},e,{attributes:p(e.attributes,{spaceBefore:{type:"boolean",default:!1},spaceAfter:{type:"boolean",default:!1}})}):e})),u("editor.BlockEdit","config-block-editor/wp-block-cover/add-inspector-controls",f((function(e){return function(t){var r=t.attributes,o=r.spaceBefore,n=r.spaceAfter,a=t.setAttributes;return"core/cover"!==t.name?Object(c.createElement)(e,t):Object(c.createElement)(d,null,Object(c.createElement)(e,t),Object(c.createElement)(b,null,Object(c.createElement)(g,{title:__("Spacing","modularity"),initialOpen:!0},Object(c.createElement)(k,{label:__("Space before","modularity"),checked:!!o,onChange:function(){a({spaceBefore:!o})}}),Object(c.createElement)(k,{label:__("Space after","modularity"),checked:!!n,onChange:function(){a({spaceAfter:!n})}}))))}}),"withInspectorControl")),u("editor.BlockListBlock","config-block-editor/wp-block-cover/add-editor-class",f((function(e){return function(t){var r=t.attributes,o=r.spaceBefore,a=r.spaceAfter,s=t.className;return"core/cover"!==t.name?Object(c.createElement)(e,t):Object(c.createElement)(e,n()({},t,{className:l()(s,o?"has-space-before":"",a?"has-space-after":"")}))}}),"withClientIdClassName")),u("blocks.getSaveContent.extraProps","config-block-editor/wp-block-cover/add-front-end-class",(function(e,t,r){if("core/cover"!==t.name)return e;var o=e.className,n=r.spaceBefore,c=r.spaceAfter;return i({},e,{className:l()(o,n?"has-space-before":"",c?"has-space-after":"")})}));var h=lodash,v=h.assign,w=h.merge,y=wp.i18n.__,O=wp.hooks.addFilter,j=wp.compose.createHigherOrderComponent,B=wp.element.Fragment,E=wp.blockEditor.InspectorControls,C=wp.components,x=C.PanelBody,A=C.ToggleControl;O("blocks.registerBlockType","config-block-editor/wp-block-columns/add-attributes",(function(e,t){return"core/columns"===t?v({},e,{attributes:w(e.attributes,{spaceBefore:{type:"boolean",default:!1},spaceAfter:{type:"boolean",default:!1},isBoxed:{type:"boolean",default:!1}})}):e})),O("editor.BlockEdit","config-block-editor/wp-block-columns/add-inspector-controls",j((function(e){return function(t){var r=t.attributes,o=r.spaceBefore,n=r.spaceAfter,a=r.isBoxed,l=t.setAttributes;return"core/columns"!==t.name?Object(c.createElement)(e,t):Object(c.createElement)(B,null,Object(c.createElement)(e,t),Object(c.createElement)(E,null,Object(c.createElement)(x,{title:y("Spacing & Layout","modularity"),initialOpen:!0},Object(c.createElement)(A,{label:y("Space before","modularity"),checked:!!o,onChange:function(){l({spaceBefore:!o})}}),Object(c.createElement)(A,{label:y("Space after","modularity"),checked:!!n,onChange:function(){l({spaceAfter:!n})}}),Object(c.createElement)(A,{label:y("Boxed","modularity"),checked:!!a,onChange:function(){l({isBoxed:!a})}}))))}}),"withInspectorControl")),O("editor.BlockListBlock","config-block-editor/wp-block-columns/add-editor-class",j((function(e){return function(t){var r=t.attributes,o=r.spaceBefore,a=r.spaceAfter,s=r.isBoxed,i=t.className;return"core/columns"!==t.name?Object(c.createElement)(e,t):Object(c.createElement)(e,n()({},t,{className:l()(i,o?"has-space-before":"",a?"has-space-after":"",s?"is-boxed":"")}))}}),"withClientIdClassName")),O("blocks.getSaveContent.extraProps","config-block-editor/wp-block-columns/add-front-end-class",(function(e,t,r){if("core/columns"!==t.name)return e;var o=e.className,n=r.spaceBefore,c=r.spaceAfter,a=r.isBoxed;return v({},e,{className:l()(o,n?"has-space-before":"",c?"has-space-after":"",a?"is-boxed":"")})}));var S=lodash,_=S.assign,N=S.merge,P=wp.i18n.__,T=wp.hooks.addFilter,I=wp.compose.createHigherOrderComponent,F=wp.element.Fragment,L=wp.blockEditor.InspectorControls,M=wp.components,H=M.PanelBody,D=M.ToggleControl;T("blocks.registerBlockType","config-block-editor/wp-block-group/add-attributes",(function(e,t){return"core/group"===t?_({},e,{attributes:N(e.attributes,{spaceBefore:{type:"boolean",default:!1},spaceAfter:{type:"boolean",default:!1}})}):e})),T("editor.BlockEdit","config-block-editor/wp-block-group/add-inspector-controls",I((function(e){return function(t){var r=t.attributes,o=r.spaceBefore,n=r.spaceAfter,a=t.setAttributes;return"core/group"!==t.name?Object(c.createElement)(e,t):Object(c.createElement)(F,null,Object(c.createElement)(e,t),Object(c.createElement)(L,null,Object(c.createElement)(H,{title:P("Spacing","modularity"),initialOpen:!0},Object(c.createElement)(D,{label:P("Space before","modularity"),checked:!!o,onChange:function(){a({spaceBefore:!o})}}),Object(c.createElement)(D,{label:P("Space after","modularity"),checked:!!n,onChange:function(){a({spaceAfter:!n})}}))))}}),"withInspectorControl")),T("editor.BlockListBlock","config-block-editor/wp-block-group/add-editor-class",I((function(e){return function(t){var r=t.attributes,o=r.spaceBefore,a=r.spaceAfter,s=t.className;return"core/group"!==t.name?Object(c.createElement)(e,t):Object(c.createElement)(e,n()({},t,{className:l()(s,o?"has-space-before":"",a?"has-space-after":"")}))}}),"withClientIdClassName")),T("blocks.getSaveContent.extraProps","config-block-editor/wp-block-group/add-front-end-class",(function(e,t,r){if("core/group"!==t.name)return e;var o=e.className,n=r.spaceBefore,c=r.spaceAfter;return _({},e,{className:l()(o,n?"has-space-before":"",c?"has-space-after":"")})})),r(4)}]);