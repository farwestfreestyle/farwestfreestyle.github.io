(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{331:function(t,e,n){"use strict";n(196);var r={props:["section"],computed:{items:function(){return this.$store.getters.getSection(this.section).links},isEventsPage:function(){return"/events/schedule"===this.$route.path}},methods:{isSelected:function(t){return t.link==this.$route.path},isSelectedLink:function(t){return this.isSelected(t)?"":t.link}}},l=n(32),o=n(49),c=n.n(o),d=n(139),f=n(88),v=n(40),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-list",{staticStyle:{"background-color":"transparent"}},[t._l(t.items,(function(e,i){return n("v-list-item",{key:i,class:{link:!0,selected:t.isSelected(e)},attrs:{nuxt:!t.isSelected(e),href:t.isSelectedLink(e)}},[n("v-list-item-title",[t._v(t._s(e.title))])],1)})),t._v(" "),t.isEventsPage?n("v-list-item",[n("a",{attrs:{href:"/files/western-states-freestyle-2019-2020-sc.pdf"}},[t._v("Western Region/FIS Freestyle 2019/2020 Schedule")])]):t._e()],2)],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VList:d.a,VListItem:f.a,VListItemTitle:v.c})},468:function(t,e,n){var content=n(533);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("722f8f0b",content,!0,{sourceMap:!1})},532:function(t,e,n){"use strict";var r=n(468);n.n(r).a},533:function(t,e,n){(t.exports=n(11)(!1)).push([t.i,".link>div{color:#000!important}.link:hover>div{text-decoration:underline}.selected{font-weight:700}.selected:hover>div{text-decoration:none!important}.result{padding:5px 0;border-bottom:0 dotted #999}.result:last-child{border-bottom:0}",""])},580:function(t,e,n){"use strict";n.r(e);var r=n(331),l=n(175),o={layout:"secondary",components:{LefthandNav:r.a},data:function(){return{}},computed:{results:function(){return l.config.results}},methods:{getPath:function(t){return t.pdf?t.pdf:"/events/archived-results/".concat(t.type,"/").concat(t.date)}}},c=(n(532),n(32)),d=n(49),f=n.n(d),v=n(319),h=n(320),m=n(321),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticStyle:{"min-height":"800px"}},[n("v-row",[n("v-col",{staticClass:"pa-4 mt-6 d-none d-md-flex",attrs:{sm:"12",md:"4"}},[n("LefthandNav",{attrs:{section:"events"}})],1),t._v(" "),n("v-col",{attrs:{sm:"12",md:"8"}},[n("div",{staticClass:"hdr"},[t._v("Results")]),t._v(" "),n("hr",{staticClass:"hrr"}),t._v(" "),t._l(t.results,(function(e){return n("div",{key:e.id,staticClass:"result"},[e.pdf?n("a",{attrs:{href:"",target:"pdf",href:e.pdf}},[t._v(t._s(e.label))]):n("nuxt-link",{attrs:{to:t.getPath(e)}},[t._v(t._s(e.label))])],1)}))],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VCol:v.a,VContainer:h.a,VRow:m.a})}}]);