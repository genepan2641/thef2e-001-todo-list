webpackJsonp([1],{"+orn":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(s("PJh5")),n=a(s("IC97")),o=a(s("SVjV"));function a(t){return t&&t.__esModule?t:{default:t}}e.default={components:{DatePicker:n.default,VueTimepicker:o.default},props:{isDone:{type:Boolean,default:!1},isCritical:{type:Boolean,default:!1},title:{type:String,default:""},index:{type:Number},savedFile:{},deadlineDate:{type:Date},deadlineTime:{type:Object},savedComment:{type:String},hash:{type:String}},data:function(){return{newTitle:this.title,isEdit:!1,comment:"",date:"",time:{hh:"",mm:""},file:{},showTitleInput:!1}},created:function(){this.date=this.deadlineDate,this.time=this.deadlineTime,this.comment=this.savedComment},computed:{hasSavedTime:function(){return""!=this.deadlineTime.hh&&""!=this.deadlineTime.mm},hasSavedDate:function(){return null!=this.deadlineDate},hasSavedFile:function(){return void 0!=this.savedFile&&this.savedFile.__proto__.constructor==File},displayDate:function(){return(0,i.default)(this.deadlineDate).format("YYYY-MM-DD")}},methods:{enterTitleInput:function(){this.showTitleInput=!0},leaveTitleInput:function(){this.showTitleInput=!1,this.newTitle=this.title},updateTitle:function(){this.showTitleInput=!1,this.$emit("update-title",{newTitle:this.newTitle||"type something here..",index:this.index})},handleCheck:function(){this.$emit("item-completed",this.hash)},handleStared:function(){this.$emit("item-stared",this.hash)},handleEdit:function(){this.isEdit?this.cancelEdit():this.$emit("item-click-edit",this.hash)},handleDelete:function(){this.$emit("item-delete",this.hash)},cancelEdit:function(){this.isEdit=!1,this.comment=this.savedComment,this.date=this.deadlineDate,this.time=this.deadlineTime,this.file=null},selectDate:function(t){this.date=t},processFile:function(t){this.file=t.target.files[0]},saveEdit:function(){this.$emit("save-edit",{date:this.date,time:this.time,comment:this.comment,file:this.file,index:this.index}),this.isEdit=!1}}}},"3th1":function(t,e,s){"use strict";var i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"todoItem",class:[t.isCritical?"todoItem-isCritical":""]},[s("div",{staticClass:"todoItem__header"},[t._m(0),t._v(" "),s("label",{staticClass:"todoItem__input",attrs:{for:"todoItem__check"+t.index}},[s("input",{staticClass:"todoItem__check",attrs:{id:"todoItem__check"+t.index,type:"checkbox"},domProps:{value:t.isDone,checked:t.isDone},on:{input:function(e){t.handleCheck()}}}),t._v(" "),t.isDone?s("i",{staticClass:"todoItem__checkFa fas fa-check-square"}):s("i",{staticClass:"todoItem__boxFa far fa-square"})]),t._v(" "),s("div",{staticClass:"todoItem__content"},[t.showTitleInput?s("input",{directives:[{name:"model",rawName:"v-model",value:t.newTitle,expression:"newTitle"}],staticClass:"w100 formControl",attrs:{type:"text"},domProps:{value:t.newTitle},on:{blur:t.leaveTitleInput,keydown:[function(e){return"button"in e||!t._k(e.keyCode,"esc",27,e.key,"Escape")?t.leaveTitleInput(e):null},function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.updateTitle(e):null}],input:function(e){e.target.composing||(t.newTitle=e.target.value)}}}):s("p",{staticClass:"todoItem__title",class:{"todoItem__title-isDone":t.isDone},on:{dblclick:t.enterTitleInput}},[t._v(t._s(t.title))]),t._v(" "),s("div",{staticClass:"todoItem__status"},[t.hasSavedDate||t.hasSavedTime?s("span",[s("i",{staticClass:"todlItem__statusIcon far fa-calendar-alt"}),s("span",{staticClass:"font-sm"},[t._v(t._s(t.displayDate))])]):t._e(),t._v(" "),t.hasSavedFile?s("i",{staticClass:"todlItem__statusIcon far fa-file"}):t._e(),t._v(" "),""!=t.savedComment.trim()?s("i",{staticClass:"todlItem__statusIcon far fa-comment-dots"}):t._e()])]),t._v(" "),s("div",{staticClass:"todoItem__tool"},[s("i",{staticClass:"todoItem__starFa  fa-star",class:[t.isCritical?"fas todoItem__starFa-isCritical":"far"],on:{click:function(e){t.handleStared()}}}),t._v(" "),s("i",{staticClass:"todoItem__editIcon fas fa-pencil-alt",on:{click:t.handleEdit}}),t._v(" "),s("i",{staticClass:"todoItem__deleteIcon fas fa-times",on:{click:t.handleDelete}})])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isEdit,expression:"isEdit"}],staticClass:"todoItem__editSection"},[s("div",{staticClass:"editSection__body"},[s("div",{staticClass:"editSection__inputGroup"},[t._m(1),t._v(" "),s("date-picker",{attrs:{value:t.date,"clear-button":!0,format:"yyyy/MM/dd","input-class":"formControl"},on:{selected:t.selectDate}}),t._v(" "),s("vue-timepicker",{model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],1),t._v(" "),s("div",{staticClass:"editSection__inputGroup"},[t._m(2),t._v(" "),s("input",{staticClass:"hide",attrs:{id:"fileUpload"+t.index,type:"file"},on:{change:function(e){t.processFile(e)}}}),t._v(" "),null!=t.file?s("span",[t._v(t._s(t.file.name))]):t._e(),t._v(" "),s("label",{staticClass:"editSection__uploadIcon",attrs:{for:"fileUpload"+t.index}},[t._v("+")])]),t._v(" "),s("div",{staticClass:"editSection__inputGroup"},[t._m(3),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],staticClass:"editSection__commentInput",attrs:{placeholder:"Add Comment",name:"",id:"",cols:"10",rows:"10"},domProps:{value:t.comment},on:{input:function(e){e.target.composing||(t.comment=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"editSection__footer"},[s("div",{staticClass:"editSection__btn editSection__btn-cancel",on:{click:t.cancelEdit}},[t._v("X Cancel")]),t._v(" "),s("div",{staticClass:"editSection__btn editSection__btn-primary",on:{click:t.saveEdit}},[t._v("＋ Save")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"todoItem__panelContainer"},[e("div",{staticClass:"todoItem__panel"},[e("span",{staticClass:"todoItem__dot"}),this._v(" "),e("span",{staticClass:"todoItem__dot"}),this._v(" "),e("span",{staticClass:"todoItem__dot"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"todoItem__subTitle"},[e("i",{staticClass:"far fa-calendar-alt"}),this._v(" DeadLine")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"todoItem__subTitle"},[e("i",{staticClass:"far fa-file"}),this._v(" File")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"todoItem__subTitle"},[e("i",{staticClass:"far fa-comment-dots"}),this._v(" Comment")])}]};e.a=i},"7sA3":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("gCMD"),n=s.n(i);for(var o in i)"default"!==o&&function(t){s.d(e,t,function(){return i[t]})}(o);var a=s("SrSY");var r=function(t){s("AVdg")},l=s("VU/8")(n.a,a.a,!1,r,null,null);e.default=l.exports},AVdg:function(t,e){},J8T8:function(t,e,s){"use strict";var i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"header"},[s("div",{staticClass:"container filter__container"},[s("div",{staticClass:"filter",class:{"filter-active":"all"==t.filter},on:{click:function(e){t.updateFilter("all")}}},[t._v("My Tasks")]),t._v(" "),s("div",{staticClass:"filter",class:{"filter-active":"progress"==t.filter},on:{click:function(e){t.updateFilter("progress")}}},[t._v("In Progress")]),t._v(" "),s("div",{staticClass:"filter",class:{"filter-active":"completed"==t.filter},on:{click:function(e){t.updateFilter("completed")}}},[t._v("Completed")])])]),t._v(" "),s("div",{staticClass:"body"},[s("div",{staticClass:"container"},[s("div",{staticClass:"newTodo"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodoTitle,expression:"newTodoTitle"}],staticClass:"newTodo__input",attrs:{type:"text",placeholder:"＋ Add Task"},domProps:{value:t.newTodoTitle},on:{keydown:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.addTodo(e):null},input:function(e){e.target.composing||(t.newTodoTitle=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"btnContainer"},[s("button",{staticClass:"btn-primary",on:{click:t.clearCompleted}},[t._v("Clear Completed")]),t._v(" "),s("button",{staticClass:"btn-primary",on:{click:t.completeAll}},[t._v("Complete All")])]),t._v(" "),s("draggable",{attrs:{options:{draggable:".todoItem"}},model:{value:t.todos,callback:function(e){t.todos=e},expression:"todos"}},t._l(t.filteredTodos,function(e,i){return s("todo-item",{key:i,ref:"todoItem",refInFor:!0,attrs:{"is-done":e.isDone,"is-critical":e.isCritical,title:e.title,hash:e.hash,"saved-comment":e.savedComment,"deadline-date":e.deadlineDate,"deadline-time":e.deadlineTime,"saved-file":e.savedFile,index:i},on:{"update-title":t.updateTitle,"item-completed":t.itemCompleted,"item-stared":t.itemStared,"item-click-edit":t.itemClickEdit,"save-edit":t.saveEdit,"item-delete":t.itemDelete}})})),t._v(" "),s("p",{staticClass:"leftWording"},[t._v(t._s(t.notDoneNum)+" tasks left")])],1)])])},staticRenderFns:[]};e.a=i},M93x:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("xJD8"),n=s.n(i);for(var o in i)"default"!==o&&function(t){s.d(e,t,function(){return i[t]})}(o);var a=s("J8T8");var r=function(t){s("dvVZ")},l=s("VU/8")(n.a,a.a,!1,r,null,null);e.default=l.exports},NHnr:function(t,e,s){"use strict";var i=o(s("7+uW")),n=o(s("M93x"));function o(t){return t&&t.__esModule?t:{default:t}}i.default.config.productionTip=!1,new i.default({el:"#app",components:{App:n.default},template:"<App/>"})},SrSY:function(t,e,s){"use strict";var i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"time-picker"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.displayTime,expression:"displayTime"}],staticClass:"display-time",attrs:{id:t.id,type:"text",readonly:""},domProps:{value:t.displayTime},on:{click:function(e){return e.stopPropagation(),t.toggleDropdown(e)},input:function(e){e.target.composing||(t.displayTime=e.target.value)}}}),t._v(" "),t.hideClearButton?t._e():s("span",{directives:[{name:"show",rawName:"v-show",value:!t.showDropdown&&t.showClearBtn,expression:"!showDropdown && showClearBtn"}],staticClass:"clear-btn",on:{click:function(e){return e.stopPropagation(),t.clearTime(e)}}},[t._v("×")]),t._v(" "),t.showDropdown?s("div",{staticClass:"time-picker-overlay",on:{click:function(e){return e.stopPropagation(),t.toggleDropdown(e)}}}):t._e(),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showDropdown,expression:"showDropdown"}],staticClass:"dropdown"},[s("div",{staticClass:"select-list"},[s("ul",{staticClass:"hours"},[s("li",{staticClass:"hint",domProps:{textContent:t._s(t.hourType)}}),t._v(" "),t._l(t.hours,function(e){return s("li",{class:{active:t.hour===e},domProps:{textContent:t._s(e)},on:{click:function(s){s.stopPropagation(),t.select("hour",e)}}})})],2),t._v(" "),s("ul",{staticClass:"minutes"},[s("li",{staticClass:"hint",domProps:{textContent:t._s(t.minuteType)}}),t._v(" "),t._l(t.minutes,function(e){return s("li",{class:{active:t.minute===e},domProps:{textContent:t._s(e)},on:{click:function(s){s.stopPropagation(),t.select("minute",e)}}})})],2),t._v(" "),t.secondType?s("ul",{staticClass:"seconds"},[s("li",{staticClass:"hint",domProps:{textContent:t._s(t.secondType)}}),t._v(" "),t._l(t.seconds,function(e){return s("li",{class:{active:t.second===e},domProps:{textContent:t._s(e)},on:{click:function(s){s.stopPropagation(),t.select("second",e)}}})})],2):t._e(),t._v(" "),t.apmType?s("ul",{staticClass:"apms"},[s("li",{staticClass:"hint",domProps:{textContent:t._s(t.apmType)}}),t._v(" "),t._l(t.apms,function(e){return s("li",{class:{active:t.apm===e},domProps:{textContent:t._s(e)},on:{click:function(s){s.stopPropagation(),t.select("apm",e)}}})})],2):t._e()])])])},staticRenderFns:[]};e.a=i},UF17:function(t,e){},"Yw/y":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("+orn"),n=s.n(i);for(var o in i)"default"!==o&&function(t){s.d(e,t,function(){return i[t]})}(o);var a=s("3th1");var r=function(t){s("UF17")},l=s("VU/8")(n.a,a.a,!1,r,null,null);e.default=l.exports},dvVZ:function(t,e){},gCMD:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(s("fZjL")),n=o(s("mvHQ"));function o(t){return t&&t.__esModule?t:{default:t}}var a={HOUR_TOKENS:["HH","H","hh","h","kk","k"],MINUTE_TOKENS:["mm","m"],SECOND_TOKENS:["ss","s"],APM_TOKENS:["A","a"]};e.default={name:"VueTimepicker",props:{value:{type:Object},hideClearButton:{type:Boolean},format:{type:String},minuteInterval:{type:Number},secondInterval:{type:Number},id:{type:String}},data:function(){return{hours:[],minutes:[],seconds:[],apms:[],showDropdown:!1,muteWatch:!1,hourType:"HH",minuteType:"mm",secondType:"",apmType:"",hour:"",minute:"",second:"",apm:"",fullValues:void 0}},computed:{displayTime:function(){var t=String(this.format||"HH:mm");return this.hour&&(t=t.replace(new RegExp(this.hourType,"g"),this.hour)),this.minute&&(t=t.replace(new RegExp(this.minuteType,"g"),this.minute)),this.second&&this.secondType&&(t=t.replace(new RegExp(this.secondType,"g"),this.second)),this.apm&&this.apmType&&(t=t.replace(new RegExp(this.apmType,"g"),this.apm)),t},showClearBtn:function(){return!!(this.hour&&""!==this.hour||this.minute&&""!==this.minute)}},watch:{format:"renderFormat",minuteInterval:function(t){this.renderList("minute",t)},secondInterval:function(t){this.renderList("second",t)},value:"readValues",displayTime:"fillValues"},methods:{formatValue:function(t,e){switch(t){case"H":case"m":case"s":return String(e);case"HH":case"mm":case"ss":return e<10?"0"+e:String(e);case"h":case"k":return String(e+1);case"hh":case"kk":return e+1<10?"0"+(e+1):String(e+1);default:return""}},checkAcceptingType:function(t,e,s){if(!t||!e||!e.length)return"";for(var i=0;i<t.length;i++)if(e.indexOf(t[i])>-1)return t[i];return s||""},renderFormat:function(t){(t=t||this.format)&&t.length||(t="HH:mm"),this.hourType=this.checkAcceptingType(a.HOUR_TOKENS,t,"HH"),this.minuteType=this.checkAcceptingType(a.MINUTE_TOKENS,t,"mm"),this.secondType=this.checkAcceptingType(a.SECOND_TOKENS,t),this.apmType=this.checkAcceptingType(a.APM_TOKENS,t),this.renderHoursList(),this.renderList("minute"),this.secondType&&this.renderList("second"),this.apmType&&this.renderApmList();var e=this;this.$nextTick(function(){e.readValues()})},renderHoursList:function(){var t="h"===this.hourType||"hh"===this.hourType?12:24;this.hours=[];for(var e=0;e<t;e++)this.hours.push(this.formatValue(this.hourType,e))},renderList:function(t,e){if("second"===t)e=e||this.secondInterval;else{if("minute"!==t)return;e=e||this.minuteInterval}0===e?e=60:e>60?(window.console.warn("`"+t+"-interval` should be less than 60. Current value is",e),e=1):e<1?(window.console.warn("`"+t+"-interval` should be NO less than 1. Current value is",e),e=1):e||(e=1),"minute"===t?this.minutes=[]:this.seconds=[];for(var s=0;s<60;s+=e)"minute"===t?this.minutes.push(this.formatValue(this.minuteType,s)):this.seconds.push(this.formatValue(this.secondType,s))},renderApmList:function(){this.apms=[],this.apmType&&(this.apms="A"===this.apmType?["AM","PM"]:["am","pm"])},readValues:function(){if(this.value&&!this.muteWatch){var t=JSON.parse((0,n.default)(this.value||{})),e=(0,i.default)(t);0!==e.length&&(e.indexOf(this.hourType)>-1&&(this.hour=t[this.hourType]),e.indexOf(this.minuteType)>-1&&(this.minute=t[this.minuteType]),e.indexOf(this.secondType)>-1?this.second=t[this.secondType]:this.second=0,e.indexOf(this.apmType)>-1&&(this.apm=t[this.apmType]),this.fillValues())}},fillValues:function(){var t={},e=this.hour,s=this.hourType,i=e||0===e?Number(e):"",n=this.isTwelveHours(s),o=!(!n||!this.apm)&&String(this.apm).toLowerCase();if(a.HOUR_TOKENS.forEach(function(a){if(a!==s){var r=void 0,l=void 0;switch(a){case"H":case"HH":if(!String(i).length)return void(t[a]="");r=n?"pm"===o?i<12?i+12:i:i%12:i%24,t[a]="HH"===a&&r<10?"0"+r:String(r);break;case"k":case"kk":if(!String(i).length)return void(t[a]="");r=n?"pm"===o?i<12?i+12:i:12===i?24:i:0===i?24:i,t[a]="kk"===a&&r<10?"0"+r:String(r);break;case"h":case"hh":if(o)r=i,l=o||"am";else{if(!String(i).length)return t[a]="",t.a="",void(t.A="");i>11?(l="pm",r=12===i?12:i%12):(l=n?"":"am",r=i%12==0?12:i)}t[a]="hh"===a&&r<10?"0"+r:String(r),t.a=l,t.A=l.toUpperCase()}}else t[a]=e}),this.minute||0===this.minute){var r=Number(this.minute);t.m=String(r),t.mm=r<10?"0"+r:String(r)}else t.m="",t.mm="";if(this.second||0===this.second){var l=Number(this.second);t.s=String(l),t.ss=l<10?"0"+l:String(l)}else t.s="",t.ss="";this.fullValues=t,this.updateTimeValue(t),this.$emit("change",{data:t})},updateTimeValue:function(t){this.muteWatch=!0;var e=this,s=JSON.parse((0,n.default)(this.value||{})),o={};(0,i.default)(s).forEach(function(e){o[e]=t[e]}),this.$emit("input",o),this.$nextTick(function(){e.muteWatch=!1})},isTwelveHours:function(t){return"h"===t||"hh"===t},toggleDropdown:function(){this.showDropdown=!this.showDropdown},select:function(t,e){"hour"===t?this.hour=e:"minute"===t?this.minute=e:"second"===t?this.second=e:"apm"===t&&(this.apm=e)},clearTime:function(){this.hour="",this.minute="",this.second="",this.apm=""}},mounted:function(){this.renderFormat()}}},uslO:function(t,e,s){var i={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function n(t){return s(o(t))}function o(t){var e=i[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}n.keys=function(){return Object.keys(i)},n.resolve=o,t.exports=n,n.id="uslO"},xJD8:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(s("DAYN")),n=o(s("Yw/y"));function o(t){return t&&t.__esModule?t:{default:t}}e.default={name:"App",data:function(){return{todos:[],newTodoTitle:"",filter:"all"}},created:function(){for(var t in 4)this.addTodo()},computed:{notDoneNum:function(){return this.todos.filter(function(t){return!t.isDone}).length},filteredTodos:function(){return"all"==this.filter?this.todos:"progress"==this.filter?this.todos.filter(function(t){return!t.isDone}):"completed"==this.filter?this.todos.filter(function(t){return t.isDone}):void 0}},methods:{addTodo:function(){this.todos.push({title:this.newTodoTitle||"Type Something Here...",isDone:!1,isCritical:!1,deadlineDate:null,deadlineTime:{hh:"",mm:""},savedComment:"",savedFile:null,hash:function(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}()}),this.newTodoTitle=""},clearCompleted:function(){this.todos=this.todos.filter(function(t){return!t.isDone})},completeAll:function(){this.todos.forEach(function(t){t.isDone=!0})},updateTitle:function(t){this.todos[t.index].title=t.newTitle},updateFilter:function(t){this.filter=t},itemCompleted:function(t){var e=this.todos.filter(function(e){return e.hash==t}),s=this.todos.indexOf(e[0]);this.$set(this.todos[s],"isDone",!this.todos[s].isDone)},itemStared:function(t){var e=this.todos.filter(function(e){return e.hash==t}),s=this.todos.indexOf(e[0]);this.$set(this.todos[s],"isCritical",!this.todos[s].isCritical),this.todos.sort(function(t,e){return t.isCritical?-1:1})},itemClickEdit:function(t){this.$refs.todoItem.forEach(function(t){t.isEdit=!1});var e=this.todos.filter(function(e){return e.hash==t}),s=this.todos.indexOf(e[0]);this.$refs.todoItem[s].isEdit=!0},itemDelete:function(t){var e=this.todos.filter(function(e){return e.hash==t}),s=this.todos.indexOf(e[0]);this.todos.splice(s,1)},saveEdit:function(t){this.todos[t.index].deadlineDate=t.date,this.todos[t.index].deadlineTime=t.time,this.todos[t.index].savedFile=t.file,this.todos[t.index].savedComment=t.comment}},components:{TodoItem:n.default,draggable:i.default}}}},["NHnr"]);
//# sourceMappingURL=app.449af752d0f4b032a9de.js.map