(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{331:function(t,e,n){"use strict";n(196);var r={props:["section"],computed:{items:function(){return this.$store.getters.getSection(this.section).links},isEventsPage:function(){return"/events/schedule"===this.$route.path}},methods:{isSelected:function(t){return t.link==this.$route.path},isSelectedLink:function(t){return this.isSelected(t)?"":t.link}}},o=n(32),l=n(49),c=n.n(l),d=n(139),v=n(88),h=n(40),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-list",{staticStyle:{"background-color":"transparent"}},[t._l(t.items,(function(e,i){return n("v-list-item",{key:i,class:{link:!0,selected:t.isSelected(e)},attrs:{nuxt:!t.isSelected(e),href:t.isSelectedLink(e)}},[n("v-list-item-title",[t._v(t._s(e.title))])],1)})),t._v(" "),t.isEventsPage?n("v-list-item",[n("a",{attrs:{href:"/files/western-states-freestyle-2019-2020-sc.pdf"}},[t._v("Western Region/FIS Freestyle 2019/2020 Schedule")])]):t._e()],2)],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VList:d.a,VListItem:v.a,VListItemTitle:h.c})},463:function(t,e,n){var content=n(519);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("710917aa",content,!0,{sourceMap:!1})},518:function(t,e,n){"use strict";var r=n(463);n.n(r).a},519:function(t,e,n){(t.exports=n(11)(!1)).push([t.i,".link>div{color:#000!important}.link:hover>div{text-decoration:underline}.selected{font-weight:700}.selected:hover>div{text-decoration:none!important}",""])},563:function(t,e,n){"use strict";n.r(e);var r={layout:"secondary",components:{LefthandNav:n(331).a}},o=(n(518),n(32)),l=n(49),c=n.n(l),d=n(89),v=n(319),h=n(320),m=n(118),f=n(321),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticStyle:{"min-height":"800px"}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-img",{attrs:{height:"300",src:"/images/northstar-hero-image.jpg"}})],1),t._v(" "),n("v-row",[n("v-col",{staticClass:"pa-4 mt-6 d-none d-md-flex",attrs:{sm:"12",md:"4"}},[n("LefthandNav",{attrs:{section:"clubs"}})],1),t._v(" "),n("v-col",{attrs:{sm:"12",md:"8"}},[n("div",{staticClass:"hdr"},[t._v("Northstar")]),t._v(" "),n("hr",{staticClass:"hrr"}),t._v(" "),n("p",[t._v("This program is designed for skiers who have the desire to compete in moguls, with a focus on development. Training includes skiing moguls, slopestyle, halfpipe, powder, trees, jumps, gates, steeps, and more. Athletes will train on a private mogul course in our Northstar Training Arena approximately 50%-60% of the time. We introduce competitive skiing, and allow athletes to develop their own personal vision for the sport.")]),t._v(" "),n("div",{staticClass:"text-center"},[n("v-btn",{attrs:{href:"https://www.northstarcalifornia.com/plan-your-trip/ski-and-ride-lessons/products/Mogul-Part-Time"}},[t._v("Visit Team Site")])],1)])],1),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCol:v.a,VContainer:h.a,VImg:m.a,VRow:f.a})}}]);