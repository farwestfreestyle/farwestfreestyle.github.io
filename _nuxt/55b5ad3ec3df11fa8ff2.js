(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{317:function(e,t,o){var content=o(340);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(12).default)("bc049656",content,!0,{sourceMap:!1})},339:function(e,t,o){"use strict";var n=o(317);o.n(n).a},340:function(e,t,o){(e.exports=o(11)(!1)).push([e.i,".farwestlogo{width:15rem}.img{width:100%;height:100%}.home-cards>div{margin-top:1rem;overflow:hidden}",""])},350:function(e,t,o){"use strict";o.r(t);var n=o(22),r=o(33),l=(new(function(){function e(){Object(n.a)(this,e),this.init=!1,this.avgArr=[],this.imageUrl="https://www.cueframehq.com/icon.png",this.downloadSize=104361,this.startTime=0,this.endTime=0}return Object(r.a)(e,[{key:"showProgressMessage",value:function(e){var t=document.getElementById("msg"),o="";if("string"==typeof e)o=e;else{for(var n="",i=0;i<e.length;i++)n+=e[i];o=n}t.innerHtml=o;var r=document.getElementById("progress");if(r){var l="string"==typeof e?e:e.join("<br />");r.innerHTML=l}}},{key:"initiateSpeedDetection",value:function(){var e=this;this.init||this.showProgressMessage("Loading the image, please wait..."),this.init=!0,window.setTimeout((function(){e.measureConnectionSpeed()}),1)}},{key:"measureConnectionSpeed",value:function(){var e=this,t=new Image;t.onload=function(){e.endTime=(new Date).getTime(),e.showResults()},this.startTime=(new Date).getTime();var o="?nnn="+this.startTime;t.src=this.imageUrl+o}},{key:"showResults",value:function(){var e=(this.endTime-this.startTime)/1e3,t=(8*this.downloadSize/e).toFixed(2),o=(t/1024).toFixed(2),n=(o/1024).toFixed(2);if(this.showProgressMessage(["Your connection speed is:",t+" bps",o+" kbps",n+" Mbps"]),this.avgArr.length>10){var r=0;this.avgArr.forEach((function(e){r+=parseInt(e)})),console.log("total",r);var l=r/this.avgArr.length;this.showProgressMessage("Average Connection speed is ".concat(l," Mbps"))}else this.avgArr.push(n),this.start()}},{key:"start",value:function(){this.initiateSpeedDetection()}}]),e}()),{layout:"index",data:function(){return{msg:"",items:[{src:"/images/squaw-01.jpg"},{src:"/images/squaw-02.jpg"}]}},mounted:function(){console.log("mounted")},methods:{onIntersect:function(e,t){console.log("on intersect",t)}}}),c=(o(339),o(41)),h=o(81),v=o.n(h),d=o(359),m=o(361),f=o(299),w=o(306),y=o(301),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home-cards"},[o("v-carousel",{staticClass:"hidden-sm-and-down",attrs:{"hide-delimiter-background":"","show-arrows-on-hover":""}},e._l(e.items,(function(e,i){return o("v-carousel-item",{key:i,attrs:{src:e.src,"reverse-transition":"fade-transition",transition:"fade-transition"}})})),1),e._v(" "),o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"12",md:"4"}},[o("img",{staticClass:"farwestlogo",attrs:{src:"/images/farwest-freestyle-logo.svg"}})]),e._v(" "),o("v-col",{attrs:{cols:"12",xs:"12",md:"8"}},[o("div",{staticClass:"hdr"},[e._v("WELCOME")]),e._v(" "),o("p",[e._v("Far West Freestyle is the western division of the United States Ski and Snowboard Association (USSA).")]),e._v(" "),o("p",[e._v("We sanction, organize, finance and host amateur level freestyle ski events in, and around, the Lake Tahoe area.")]),e._v(" "),o("hr",{staticClass:"hrr"}),e._v(" "),o("div",{staticClass:"hdr"},[e._v("ABOUT")]),e._v(" "),o("p",[e._v("Our events are held at Ski areas such as Heavenly Valley, Squaw Valley, Boreal, Sugar Bowl and Sierra at Tahoe. Athletes compete in age ranges from as young as 7 years of age up through their early 20s. We also have adults competing at a Master's level in Far West events.")]),e._v(" "),o("p",[e._v("Our competitive events are in Moguls, Dual Moguls, Slopestyle and Half-pipe, and Big Air.")]),e._v(" "),o("hr",{staticClass:"hrr"}),e._v(" "),o("div",{staticClass:"hdr"},[e._v("VOLUNTEERS")]),e._v(" "),o("p",[e._v("Our events are organized by a board made up of parent volunteers from various freestyle teams. This group works with competitor teams and the USSA to schedule and organize our events.")]),e._v(" "),o("p",[e._v("We rely solely on the support of parent volunteers to assist with the numerous jobs required to put on a good event, which is why all parents of competitors are encouraged to volunteer.")]),e._v(" "),o("p",[e._v("sponsors go here")])])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;v()(component,{VCarousel:d.a,VCarouselItem:m.a,VCol:f.a,VContainer:w.a,VRow:y.a})}}]);