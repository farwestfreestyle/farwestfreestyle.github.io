(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{331:function(t,e,n){"use strict";n(196);var r={props:["section"],computed:{items:function(){return this.$store.getters.getSection(this.section).links},isEventsPage:function(){return"/events/schedule"===this.$route.path}},methods:{isSelected:function(t){return t.link==this.$route.path},isSelectedLink:function(t){return this.isSelected(t)?"":t.link}}},l=n(32),o=n(49),c=n.n(o),d=n(139),v=n(88),j=n(40),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-list",{staticStyle:{"background-color":"transparent"}},[t._l(t.items,(function(e,i){return n("v-list-item",{key:i,class:{link:!0,selected:t.isSelected(e)},attrs:{nuxt:!t.isSelected(e),href:t.isSelectedLink(e)}},[n("v-list-item-title",[t._v(t._s(e.title))])],1)})),t._v(" "),t.isEventsPage?n("v-list-item",[n("a",{attrs:{href:"/files/western-states-freestyle-2019-2020-sc.pdf"}},[t._v("Western Region/FIS Freestyle 2019/2020 Schedule")])]):t._e()],2)],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VList:d.a,VListItem:v.a,VListItemTitle:j.c})},469:function(t,e,n){var map={"./af":333,"./af.js":333,"./ar":334,"./ar-dz":335,"./ar-dz.js":335,"./ar-kw":336,"./ar-kw.js":336,"./ar-ly":337,"./ar-ly.js":337,"./ar-ma":338,"./ar-ma.js":338,"./ar-sa":339,"./ar-sa.js":339,"./ar-tn":340,"./ar-tn.js":340,"./ar.js":334,"./az":341,"./az.js":341,"./be":342,"./be.js":342,"./bg":343,"./bg.js":343,"./bm":344,"./bm.js":344,"./bn":345,"./bn.js":345,"./bo":346,"./bo.js":346,"./br":347,"./br.js":347,"./bs":348,"./bs.js":348,"./ca":349,"./ca.js":349,"./cs":350,"./cs.js":350,"./cv":351,"./cv.js":351,"./cy":352,"./cy.js":352,"./da":353,"./da.js":353,"./de":354,"./de-at":355,"./de-at.js":355,"./de-ch":356,"./de-ch.js":356,"./de.js":354,"./dv":357,"./dv.js":357,"./el":358,"./el.js":358,"./en-SG":359,"./en-SG.js":359,"./en-au":360,"./en-au.js":360,"./en-ca":361,"./en-ca.js":361,"./en-gb":362,"./en-gb.js":362,"./en-ie":363,"./en-ie.js":363,"./en-il":364,"./en-il.js":364,"./en-nz":365,"./en-nz.js":365,"./eo":366,"./eo.js":366,"./es":367,"./es-do":368,"./es-do.js":368,"./es-us":369,"./es-us.js":369,"./es.js":367,"./et":370,"./et.js":370,"./eu":371,"./eu.js":371,"./fa":372,"./fa.js":372,"./fi":373,"./fi.js":373,"./fo":374,"./fo.js":374,"./fr":375,"./fr-ca":376,"./fr-ca.js":376,"./fr-ch":377,"./fr-ch.js":377,"./fr.js":375,"./fy":378,"./fy.js":378,"./ga":379,"./ga.js":379,"./gd":380,"./gd.js":380,"./gl":381,"./gl.js":381,"./gom-latn":382,"./gom-latn.js":382,"./gu":383,"./gu.js":383,"./he":384,"./he.js":384,"./hi":385,"./hi.js":385,"./hr":386,"./hr.js":386,"./hu":387,"./hu.js":387,"./hy-am":388,"./hy-am.js":388,"./id":389,"./id.js":389,"./is":390,"./is.js":390,"./it":391,"./it-ch":392,"./it-ch.js":392,"./it.js":391,"./ja":393,"./ja.js":393,"./jv":394,"./jv.js":394,"./ka":395,"./ka.js":395,"./kk":396,"./kk.js":396,"./km":397,"./km.js":397,"./kn":398,"./kn.js":398,"./ko":399,"./ko.js":399,"./ku":400,"./ku.js":400,"./ky":401,"./ky.js":401,"./lb":402,"./lb.js":402,"./lo":403,"./lo.js":403,"./lt":404,"./lt.js":404,"./lv":405,"./lv.js":405,"./me":406,"./me.js":406,"./mi":407,"./mi.js":407,"./mk":408,"./mk.js":408,"./ml":409,"./ml.js":409,"./mn":410,"./mn.js":410,"./mr":411,"./mr.js":411,"./ms":412,"./ms-my":413,"./ms-my.js":413,"./ms.js":412,"./mt":414,"./mt.js":414,"./my":415,"./my.js":415,"./nb":416,"./nb.js":416,"./ne":417,"./ne.js":417,"./nl":418,"./nl-be":419,"./nl-be.js":419,"./nl.js":418,"./nn":420,"./nn.js":420,"./pa-in":421,"./pa-in.js":421,"./pl":422,"./pl.js":422,"./pt":423,"./pt-br":424,"./pt-br.js":424,"./pt.js":423,"./ro":425,"./ro.js":425,"./ru":426,"./ru.js":426,"./sd":427,"./sd.js":427,"./se":428,"./se.js":428,"./si":429,"./si.js":429,"./sk":430,"./sk.js":430,"./sl":431,"./sl.js":431,"./sq":432,"./sq.js":432,"./sr":433,"./sr-cyrl":434,"./sr-cyrl.js":434,"./sr.js":433,"./ss":435,"./ss.js":435,"./sv":436,"./sv.js":436,"./sw":437,"./sw.js":437,"./ta":438,"./ta.js":438,"./te":439,"./te.js":439,"./tet":440,"./tet.js":440,"./tg":441,"./tg.js":441,"./th":442,"./th.js":442,"./tl-ph":443,"./tl-ph.js":443,"./tlh":444,"./tlh.js":444,"./tr":445,"./tr.js":445,"./tzl":446,"./tzl.js":446,"./tzm":447,"./tzm-latn":448,"./tzm-latn.js":448,"./tzm.js":447,"./ug-cn":449,"./ug-cn.js":449,"./uk":450,"./uk.js":450,"./ur":451,"./ur.js":451,"./uz":452,"./uz-latn":453,"./uz-latn.js":453,"./uz.js":452,"./vi":454,"./vi.js":454,"./x-pseudo":455,"./x-pseudo.js":455,"./yo":456,"./yo.js":456,"./zh-cn":457,"./zh-cn.js":457,"./zh-hk":458,"./zh-hk.js":458,"./zh-tw":459,"./zh-tw.js":459};function r(t){var e=l(t);return n(e)}function l(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=l,t.exports=r,r.id=469},470:function(t,e,n){var content=n(535);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("9ad3d786",content,!0,{sourceMap:!1})},534:function(t,e,n){"use strict";var r=n(470);n.n(r).a},535:function(t,e,n){(t.exports=n(11)(!1)).push([t.i,".western-pdf{margin-top:20px}.schedule-banner{margin-top:100px}.schedule-banner>div:first-child{border:2px solid red}.month{color:#000}.link>div{color:#000!important}.link:hover>div{text-decoration:underline}.selected{font-weight:700}.selected:hover>div{text-decoration:none!important}.calendar-details,.calendar-details-access,.calendar-details-title{color:#000!important}.calendar-details-title{font-weight:700}",""])},572:function(t,e,n){"use strict";n.r(e);var r=n(331),l=n(330),o=n.n(l),c={layout:"secondary",components:{LefthandNav:r.a},data:function(){return{focus:"2020-01-01",start:null,end:null,selectedEvent:{},selectedElement:null,selectedOpen:!1}},mounted:function(){this.$refs.calendar.checkChange()},computed:{title:function(){var t=this.start,e=this.end;if(console.log("start",t,"end",e),!t||!e)return"";var n=this.monthFormatter(t),r=(this.monthFormatter(e),t.year);e.year;return"".concat(n," ").concat(r)},monthFormatter:function(){return this.$refs.calendar.getFormatter({timeZone:"UTC",month:"long"})},today:function(){return o()().format("YYYY-MM-DD")},events:function(){return this.$store.getters.events}},methods:{setToday:function(){console.log("here",o()().format("YYYY-MM-DD")),this.focus=this.today},prev:function(){this.$refs.calendar.prev()},next:function(){this.$refs.calendar.next()},viewDay:function(t){var e=t.date;console.log("view day"),this.focus=e,this.type="day"},showEvent:function(t){var e=this,n=t.nativeEvent,r=t.event;console.log("show event");var l=function(){e.selectedEvent=r,e.selectedElement=n.target,setTimeout((function(){return e.selectedOpen=!0}),10)};this.selectedOpen?(this.selectedOpen=!1,setTimeout(l,10)):l(),n.stopPropagation()},updateRange:function(t){var e=t.start,n=t.end;this.start=e,this.end=n}}},d=(n(534),n(32)),v=n(49),j=n.n(v),h=n(141),m=n(530),f=n(89),k=n(568),_=n(488),y=n(471),w=n(319),E=n(320),x=n(138),C=n(326),z=n(321),T=n(48),O=n(324),S=n(143),V=n(43),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticStyle:{"min-height":"800px"}},[n("v-row",[n("v-col",{staticClass:"pa-4 mt-6 d-none d-md-flex",attrs:{sm:"12",md:"4"}},[n("LefthandNav",{attrs:{section:"events"}})],1),t._v(" "),n("v-col",{staticClass:"pb-10",attrs:{sm:"12",md:"8"}},[n("div",{staticClass:"hdr"},[t._v("Schedule")]),t._v(" "),n("hr",{staticClass:"hrr"}),t._v(" "),n("v-sheet",{attrs:{height:"400"}},[n("v-toolbar",{attrs:{flat:"",color:"#728EBF"}},[n("v-btn",{staticClass:"mr-4",attrs:{outlined:""},on:{click:t.setToday}},[t._v("Today")]),t._v(" "),n("v-btn",{attrs:{fab:"",text:"",small:""},on:{click:t.prev}},[n("v-icon",{attrs:{small:""}},[t._v("mdi-chevron-left")])],1),t._v(" "),n("v-btn",{attrs:{fab:"",text:"",small:""},on:{click:t.next}},[n("v-icon",{attrs:{small:""}},[t._v("mdi-chevron-right")])],1),t._v(" "),n("v-toolbar-title",[t._v(t._s(t.title))]),t._v(" "),n("v-spacer")],1),t._v(" "),n("v-calendar",{ref:"calendar",attrs:{type:"month",now:t.today,light:"",events:t.events},on:{"click:event":t.showEvent,"click:more":t.viewDay,change:t.updateRange},model:{value:t.focus,callback:function(e){t.focus=e},expression:"focus"}}),t._v(" "),n("v-menu",{attrs:{"close-on-content-click":!1,activator:t.selectedElement,"offset-x":""},model:{value:t.selectedOpen,callback:function(e){t.selectedOpen=e},expression:"selectedOpen"}},[n("v-card",{attrs:{color:"grey lighten-4","min-width":"350px",flat:""}},[n("v-toolbar",{attrs:{color:t.selectedEvent.color,dark:""}},[n("v-toolbar-title",{domProps:{innerHTML:t._s(t.selectedEvent.name)}}),t._v(" "),n("v-spacer")],1),t._v(" "),n("v-card-text",[n("div",{staticClass:"calendar-details-title",domProps:{innerHTML:t._s(t.selectedEvent.title)}}),t._v(" "),n("div",{staticClass:"calendar-details",domProps:{innerHTML:t._s(t.selectedEvent.details)}}),t._v(" "),t.selectedEvent.access?n("div",{staticClass:"calendar-details-access",domProps:{innerHTML:t._s(t.selectedEvent.access)}}):t._e(),t._v(" "),t.selectedEvent.results?n("div",t._l(t.selectedEvent.results,(function(e){return n("div",{key:e.id},[n("nuxt-link",{attrs:{to:e.path}},[t._v(t._s(e.label))])],1)})),0):t._e()]),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{text:"",color:"secondary"},on:{click:function(e){t.selectedOpen=!1}}},[t._v("\n\t\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t\t")])],1)],1)],1)],1),t._v(" "),n("v-sheet",{staticClass:"schedule-banner",attrs:{height:"100"}},[n("v-banner",{staticClass:"mt-5",attrs:{light:""}},[n("v-avatar",{attrs:{slot:"icon",color:"red accent-4",size:"40"},slot:"icon"},[n("v-icon",{attrs:{icon:"mdi-alert",color:"white"}},[t._v("mdi-alert")])],1),t._v(" "),n("b",[t._v("EVENT DATES ARE SUBJECT TO CHANGE DUE TO CONDITIONS BEYOND OUR CONTROL.")])],1)],1),t._v(" "),n("p",{staticClass:"western-pdf hidden-md-and-up"},[n("a",{attrs:{href:"/files/western-states-freestyle-2019-2020-sc.pdf"}},[t._v("Western Region/FIS Freestyle 2019/2020 Schedule")])])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;j()(component,{VAvatar:h.a,VBanner:m.a,VBtn:f.a,VCalendar:k.a,VCard:_.a,VCardActions:y.a,VCardText:y.b,VCol:w.a,VContainer:E.a,VIcon:x.a,VMenu:C.a,VRow:z.a,VSheet:T.a,VSpacer:O.a,VToolbar:S.a,VToolbarTitle:V.b})}}]);