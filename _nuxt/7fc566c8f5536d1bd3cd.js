(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{307:function(t,e,n){"use strict";n(184);var l={props:["section"],created:function(){console.log("created",this.section)},computed:{items:function(){return this.$store.getters.getSection(this.section).links}},methods:{isSelected:function(t){return t.link==this.$route.path},isSelectedLink:function(t){return this.isSelected(t)?"":t.link}}},o=n(41),c=n(81),r=n.n(c),d=n(131),h=n(79),v=n(67),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list",{staticStyle:{"background-color":"transparent"}},t._l(t.items,(function(e,i){return n("v-list-item",{key:i,class:{link:!0,selected:t.isSelected(e)},attrs:{nuxt:!t.isSelected(e),href:t.isSelectedLink(e)}},[n("v-list-item-title",[t._v(t._s(e.title))])],1)})),1)}),[],!1,null,null,null);e.a=component.exports;r()(component,{VList:d.a,VListItem:h.a,VListItemTitle:v.c})},315:function(t,e,n){var content=n(336);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("6838114f",content,!0,{sourceMap:!1})},335:function(t,e,n){"use strict";var l=n(315);n.n(l).a},336:function(t,e,n){(t.exports=n(11)(!1)).push([t.i,".link>div{color:#000!important}.link:hover>div{text-decoration:underline}.selected{font-weight:700}.selected:hover>div{text-decoration:none!important}",""])},358:function(t,e,n){"use strict";n.r(e);var l={layout:"index",components:{LefthandNav:n(307).a}},o=(n(335),n(41)),c=n(81),r=n.n(c),d=n(299),h=n(306),v=n(301),component=Object(o.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",{staticStyle:{"min-height":"400px"}},[e("v-row",[e("v-col",{staticClass:"pa-4 mt-6 d-none d-md-flex",attrs:{sm:"12",md:"4"}},[e("LefthandNav",{attrs:{section:"events"}})],1),this._v(" "),e("v-col",{attrs:{sm:"12",md:"8"}},[e("div",{staticClass:"hdr"},[this._v("Schedule & Results")]),this._v(" "),e("hr",{staticClass:"hrr"}),this._v(" "),e("p",[this._v("schedule and results")])])],1)],1)}),[],!1,null,null,null);e.default=component.exports;r()(component,{VCol:d.a,VContainer:h.a,VRow:v.a})}}]);