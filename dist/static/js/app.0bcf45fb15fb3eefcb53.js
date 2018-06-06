webpackJsonp([1],{"+orn":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o(i("IC97")),n=o(i("SVjV"));function o(t){return t&&t.__esModule?t:{default:t}}e.default={components:{DatePicker:s.default,VueTimepicker:n.default},props:{isDone:{type:Boolean,default:!1},isCritical:{type:Boolean,default:!1},title:{type:String,default:""},index:{type:Number},savedFile:{},deadlineDate:{type:Date},deadlineTime:{type:Object},savedComment:{type:String},hash:{type:String}},data:function(){return{newTitle:this.title,isEdit:!1,comment:"",date:"",time:{hh:"",mm:""},file:{},showTitleInput:!1}},created:function(){this.date=this.deadlineDate,this.time=this.deadlineTime,this.comment=this.savedComment},computed:{hasSavedTime:function(){return""!=this.deadlineTime.hh&&""!=this.deadlineTime.mm},hasSavedDate:function(){return null!=this.deadlineDate},hasSavedFile:function(){return void 0!=this.savedFile&&this.savedFile.__proto__.constructor==File}},methods:{enterTitleInput:function(){this.showTitleInput=!0},leaveTitleInput:function(){this.showTitleInput=!1,this.newTitle=this.title},updateTitle:function(){this.showTitleInput=!1,this.$emit("update-title",{newTitle:this.newTitle,index:this.index})},handleCheck:function(){this.$emit("item-completed",this.index)},handleStared:function(){this.$emit("item-stared",this.index)},handleEdit:function(){this.isEdit?this.cancelEdit():this.$emit("item-click-edit",this.index)},handleDelete:function(){this.$emit("item-delete",this.hash)},cancelEdit:function(){this.isEdit=!1,this.comment=this.savedComment,this.date=this.deadlineDate,this.time=this.deadlineTime,this.file=null},selectDate:function(t){this.date=t},processFile:function(t){this.file=t.target.files[0]},saveEdit:function(){this.$emit("save-edit",{date:this.date,time:this.time,comment:this.comment,file:this.file,index:this.index}),this.isEdit=!1}}}},"7sA3":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("gCMD"),n=i.n(s);for(var o in s)"default"!==o&&function(t){i.d(e,t,function(){return s[t]})}(o);var a=i("SrSY");var r=function(t){i("AVdg")},l=i("VU/8")(n.a,a.a,!1,r,null,null);e.default=l.exports},AVdg:function(t,e){},BJx9:function(t,e){},M93x:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("xJD8"),n=i.n(s);for(var o in s)"default"!==o&&function(t){i.d(e,t,function(){return s[t]})}(o);var a=i("R8Dv");var r=function(t){i("BJx9")},l=i("VU/8")(n.a,a.a,!1,r,null,null);e.default=l.exports},NHnr:function(t,e,i){"use strict";var s=o(i("7+uW")),n=o(i("M93x"));function o(t){return t&&t.__esModule?t:{default:t}}s.default.config.productionTip=!1,new s.default({el:"#app",components:{App:n.default},template:"<App/>"})},NnJ0:function(t,e,i){"use strict";var s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"todoItem",class:[t.isCritical?"todoItem-isCritical":""]},[i("div",{staticClass:"todoItem__header"},[t._m(0),t._v(" "),i("label",{staticClass:"todoItem__input",attrs:{for:"todoItem__check"+t.index}},[i("input",{staticClass:"todoItem__check",attrs:{id:"todoItem__check"+t.index,type:"checkbox"},domProps:{value:t.isDone,checked:t.isDone},on:{input:function(e){t.handleCheck()}}}),t._v(" "),t.isDone?i("i",{staticClass:"todoItem__checkFa fas fa-check-square"}):i("i",{staticClass:"todoItem__boxFa far fa-square"})]),t._v(" "),i("div",{staticClass:"todoItem__content"},[t.showTitleInput?i("input",{directives:[{name:"model",rawName:"v-model",value:t.newTitle,expression:"newTitle"}],staticClass:"w100 formControl",attrs:{type:"text"},domProps:{value:t.newTitle},on:{blur:t.leaveTitleInput,keydown:[function(e){return"button"in e||!t._k(e.keyCode,"esc",27,e.key,"Escape")?t.leaveTitleInput(e):null},function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.updateTitle(e):null}],input:function(e){e.target.composing||(t.newTitle=e.target.value)}}}):i("p",{staticClass:"todoItem__title",class:{"todoItem__title-isDone":t.isDone},on:{dblclick:t.enterTitleInput}},[t._v(t._s(t.title))]),t._v(" "),i("div",{staticClass:"todoItem__status"},[t.hasSavedDate||t.hasSavedTime?i("i",{staticClass:"todlItem__statusIcon far fa-calendar-alt"}):t._e(),t._v(" "),t.hasSavedFile?i("i",{staticClass:"todlItem__statusIcon far fa-file"}):t._e(),t._v(" "),""!=t.savedComment.trim()?i("i",{staticClass:"todlItem__statusIcon far fa-comment-dots"}):t._e()])]),t._v(" "),i("div",{staticClass:"todoItem__tool"},[i("i",{staticClass:"todoItem__starFa  fa-star",class:[t.isCritical?"fas todoItem__starFa-isCritical":"far"],on:{click:function(e){t.handleStared()}}}),t._v(" "),i("i",{staticClass:"todoItem__editIcon fas fa-pencil-alt",on:{click:t.handleEdit}}),t._v(" "),i("i",{staticClass:"todoItem__deleteIcon fas fa-times",on:{click:t.handleDelete}})])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isEdit,expression:"isEdit"}],staticClass:"todoItem__editSection"},[i("div",{staticClass:"editSection__body"},[i("div",{staticClass:"editSection__inputGroup"},[t._m(1),t._v(" "),i("date-picker",{attrs:{value:t.date,"clear-button":!0,format:"yyyy/MM/dd","input-class":"formControl"},on:{selected:t.selectDate}}),t._v(" "),i("vue-timepicker",{model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],1),t._v(" "),i("div",{staticClass:"editSection__inputGroup"},[t._m(2),t._v(" "),i("input",{staticClass:"hide",attrs:{id:"fileUpload"+t.index,type:"file"},on:{change:function(e){t.processFile(e)}}}),t._v(" "),null!=t.file?i("span",[t._v(t._s(t.file.name))]):t._e(),t._v(" "),i("label",{staticClass:"editSection__uploadIcon",attrs:{for:"fileUpload"+t.index}},[t._v("+")])]),t._v(" "),i("div",{staticClass:"editSection__inputGroup"},[t._m(3),t._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],staticClass:"editSection__commentInput",attrs:{placeholder:"Add Comment",name:"",id:"",cols:"10",rows:"10"},domProps:{value:t.comment},on:{input:function(e){e.target.composing||(t.comment=e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"editSection__footer"},[i("div",{staticClass:"editSection__btn editSection__btn-cancel",on:{click:t.cancelEdit}},[t._v("X Cancel")]),t._v(" "),i("div",{staticClass:"editSection__btn editSection__btn-primary",on:{click:t.saveEdit}},[t._v("＋ Save")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"todoItem__panelContainer"},[e("div",{staticClass:"todoItem__panel"},[e("span",{staticClass:"todoItem__dot"}),this._v(" "),e("span",{staticClass:"todoItem__dot"}),this._v(" "),e("span",{staticClass:"todoItem__dot"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"todoItem__subTitle"},[e("i",{staticClass:"far fa-calendar-alt"}),this._v(" DeadLine")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"todoItem__subTitle"},[e("i",{staticClass:"far fa-file"}),this._v(" File")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"todoItem__subTitle"},[e("i",{staticClass:"far fa-comment-dots"}),this._v(" Comment")])}]};e.a=s},R8Dv:function(t,e,i){"use strict";var s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"header"},[i("div",{staticClass:"container filter__container"},[i("div",{staticClass:"filter",class:{"filter-active":"all"==t.filter},on:{click:function(e){t.updateFilter("all")}}},[t._v("My Tasks")]),t._v(" "),i("div",{staticClass:"filter",class:{"filter-active":"progress"==t.filter},on:{click:function(e){t.updateFilter("progress")}}},[t._v("In Progress")]),t._v(" "),i("div",{staticClass:"filter",class:{"filter-active":"completed"==t.filter},on:{click:function(e){t.updateFilter("completed")}}},[t._v("Completed")])])]),t._v(" "),i("div",{staticClass:"body"},[i("div",{staticClass:"container"},[i("div",{staticClass:"newTodo"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodoTitle,expression:"newTodoTitle"}],staticClass:"newTodo__input",attrs:{type:"text",placeholder:"＋ Add Task"},domProps:{value:t.newTodoTitle},on:{keydown:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.addTodo(e):null},input:function(e){e.target.composing||(t.newTodoTitle=e.target.value)}}})]),t._v(" "),i("draggable",{attrs:{options:{draggable:".todoItem"}},model:{value:t.todos,callback:function(e){t.todos=e},expression:"todos"}},t._l(t.filteredTodos,function(e,s){return i("todo-item",{key:s,ref:"todoItem",refInFor:!0,attrs:{"is-done":e.isDone,"is-critical":e.isCritical,title:e.title,hash:e.hash,"saved-comment":e.savedComment,"deadline-date":e.deadlineDate,"deadline-time":e.deadlineTime,"saved-file":e.savedFile,index:s},on:{"update-title":t.updateTitle,"item-completed":t.itemCompleted,"item-stared":t.itemStared,"item-click-edit":t.itemClickEdit,"save-edit":t.saveEdit,"item-delete":t.itemDelete}})})),t._v(" "),i("p",{staticClass:"leftWording"},[t._v(t._s(t.notDoneNum)+" tasks left")])],1)])])},staticRenderFns:[]};e.a=s},SrSY:function(t,e,i){"use strict";var s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"time-picker"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.displayTime,expression:"displayTime"}],staticClass:"display-time",attrs:{id:t.id,type:"text",readonly:""},domProps:{value:t.displayTime},on:{click:function(e){return e.stopPropagation(),t.toggleDropdown(e)},input:function(e){e.target.composing||(t.displayTime=e.target.value)}}}),t._v(" "),t.hideClearButton?t._e():i("span",{directives:[{name:"show",rawName:"v-show",value:!t.showDropdown&&t.showClearBtn,expression:"!showDropdown && showClearBtn"}],staticClass:"clear-btn",on:{click:function(e){return e.stopPropagation(),t.clearTime(e)}}},[t._v("×")]),t._v(" "),t.showDropdown?i("div",{staticClass:"time-picker-overlay",on:{click:function(e){return e.stopPropagation(),t.toggleDropdown(e)}}}):t._e(),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showDropdown,expression:"showDropdown"}],staticClass:"dropdown"},[i("div",{staticClass:"select-list"},[i("ul",{staticClass:"hours"},[i("li",{staticClass:"hint",domProps:{textContent:t._s(t.hourType)}}),t._v(" "),t._l(t.hours,function(e){return i("li",{class:{active:t.hour===e},domProps:{textContent:t._s(e)},on:{click:function(i){i.stopPropagation(),t.select("hour",e)}}})})],2),t._v(" "),i("ul",{staticClass:"minutes"},[i("li",{staticClass:"hint",domProps:{textContent:t._s(t.minuteType)}}),t._v(" "),t._l(t.minutes,function(e){return i("li",{class:{active:t.minute===e},domProps:{textContent:t._s(e)},on:{click:function(i){i.stopPropagation(),t.select("minute",e)}}})})],2),t._v(" "),t.secondType?i("ul",{staticClass:"seconds"},[i("li",{staticClass:"hint",domProps:{textContent:t._s(t.secondType)}}),t._v(" "),t._l(t.seconds,function(e){return i("li",{class:{active:t.second===e},domProps:{textContent:t._s(e)},on:{click:function(i){i.stopPropagation(),t.select("second",e)}}})})],2):t._e(),t._v(" "),t.apmType?i("ul",{staticClass:"apms"},[i("li",{staticClass:"hint",domProps:{textContent:t._s(t.apmType)}}),t._v(" "),t._l(t.apms,function(e){return i("li",{class:{active:t.apm===e},domProps:{textContent:t._s(e)},on:{click:function(i){i.stopPropagation(),t.select("apm",e)}}})})],2):t._e()])])])},staticRenderFns:[]};e.a=s},"Yw/y":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("+orn"),n=i.n(s);for(var o in s)"default"!==o&&function(t){i.d(e,t,function(){return s[t]})}(o);var a=i("NnJ0");var r=function(t){i("zwTg")},l=i("VU/8")(n.a,a.a,!1,r,null,null);e.default=l.exports},gCMD:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o(i("fZjL")),n=o(i("mvHQ"));function o(t){return t&&t.__esModule?t:{default:t}}var a={HOUR_TOKENS:["HH","H","hh","h","kk","k"],MINUTE_TOKENS:["mm","m"],SECOND_TOKENS:["ss","s"],APM_TOKENS:["A","a"]};e.default={name:"VueTimepicker",props:{value:{type:Object},hideClearButton:{type:Boolean},format:{type:String},minuteInterval:{type:Number},secondInterval:{type:Number},id:{type:String}},data:function(){return{hours:[],minutes:[],seconds:[],apms:[],showDropdown:!1,muteWatch:!1,hourType:"HH",minuteType:"mm",secondType:"",apmType:"",hour:"",minute:"",second:"",apm:"",fullValues:void 0}},computed:{displayTime:function(){var t=String(this.format||"HH:mm");return this.hour&&(t=t.replace(new RegExp(this.hourType,"g"),this.hour)),this.minute&&(t=t.replace(new RegExp(this.minuteType,"g"),this.minute)),this.second&&this.secondType&&(t=t.replace(new RegExp(this.secondType,"g"),this.second)),this.apm&&this.apmType&&(t=t.replace(new RegExp(this.apmType,"g"),this.apm)),t},showClearBtn:function(){return!!(this.hour&&""!==this.hour||this.minute&&""!==this.minute)}},watch:{format:"renderFormat",minuteInterval:function(t){this.renderList("minute",t)},secondInterval:function(t){this.renderList("second",t)},value:"readValues",displayTime:"fillValues"},methods:{formatValue:function(t,e){switch(t){case"H":case"m":case"s":return String(e);case"HH":case"mm":case"ss":return e<10?"0"+e:String(e);case"h":case"k":return String(e+1);case"hh":case"kk":return e+1<10?"0"+(e+1):String(e+1);default:return""}},checkAcceptingType:function(t,e,i){if(!t||!e||!e.length)return"";for(var s=0;s<t.length;s++)if(e.indexOf(t[s])>-1)return t[s];return i||""},renderFormat:function(t){(t=t||this.format)&&t.length||(t="HH:mm"),this.hourType=this.checkAcceptingType(a.HOUR_TOKENS,t,"HH"),this.minuteType=this.checkAcceptingType(a.MINUTE_TOKENS,t,"mm"),this.secondType=this.checkAcceptingType(a.SECOND_TOKENS,t),this.apmType=this.checkAcceptingType(a.APM_TOKENS,t),this.renderHoursList(),this.renderList("minute"),this.secondType&&this.renderList("second"),this.apmType&&this.renderApmList();var e=this;this.$nextTick(function(){e.readValues()})},renderHoursList:function(){var t="h"===this.hourType||"hh"===this.hourType?12:24;this.hours=[];for(var e=0;e<t;e++)this.hours.push(this.formatValue(this.hourType,e))},renderList:function(t,e){if("second"===t)e=e||this.secondInterval;else{if("minute"!==t)return;e=e||this.minuteInterval}0===e?e=60:e>60?(window.console.warn("`"+t+"-interval` should be less than 60. Current value is",e),e=1):e<1?(window.console.warn("`"+t+"-interval` should be NO less than 1. Current value is",e),e=1):e||(e=1),"minute"===t?this.minutes=[]:this.seconds=[];for(var i=0;i<60;i+=e)"minute"===t?this.minutes.push(this.formatValue(this.minuteType,i)):this.seconds.push(this.formatValue(this.secondType,i))},renderApmList:function(){this.apms=[],this.apmType&&(this.apms="A"===this.apmType?["AM","PM"]:["am","pm"])},readValues:function(){if(this.value&&!this.muteWatch){var t=JSON.parse((0,n.default)(this.value||{})),e=(0,s.default)(t);0!==e.length&&(e.indexOf(this.hourType)>-1&&(this.hour=t[this.hourType]),e.indexOf(this.minuteType)>-1&&(this.minute=t[this.minuteType]),e.indexOf(this.secondType)>-1?this.second=t[this.secondType]:this.second=0,e.indexOf(this.apmType)>-1&&(this.apm=t[this.apmType]),this.fillValues())}},fillValues:function(){var t={},e=this.hour,i=this.hourType,s=e||0===e?Number(e):"",n=this.isTwelveHours(i),o=!(!n||!this.apm)&&String(this.apm).toLowerCase();if(a.HOUR_TOKENS.forEach(function(a){if(a!==i){var r=void 0,l=void 0;switch(a){case"H":case"HH":if(!String(s).length)return void(t[a]="");r=n?"pm"===o?s<12?s+12:s:s%12:s%24,t[a]="HH"===a&&r<10?"0"+r:String(r);break;case"k":case"kk":if(!String(s).length)return void(t[a]="");r=n?"pm"===o?s<12?s+12:s:12===s?24:s:0===s?24:s,t[a]="kk"===a&&r<10?"0"+r:String(r);break;case"h":case"hh":if(o)r=s,l=o||"am";else{if(!String(s).length)return t[a]="",t.a="",void(t.A="");s>11?(l="pm",r=12===s?12:s%12):(l=n?"":"am",r=s%12==0?12:s)}t[a]="hh"===a&&r<10?"0"+r:String(r),t.a=l,t.A=l.toUpperCase()}}else t[a]=e}),this.minute||0===this.minute){var r=Number(this.minute);t.m=String(r),t.mm=r<10?"0"+r:String(r)}else t.m="",t.mm="";if(this.second||0===this.second){var l=Number(this.second);t.s=String(l),t.ss=l<10?"0"+l:String(l)}else t.s="",t.ss="";this.fullValues=t,this.updateTimeValue(t),this.$emit("change",{data:t})},updateTimeValue:function(t){this.muteWatch=!0;var e=this,i=JSON.parse((0,n.default)(this.value||{})),o={};(0,s.default)(i).forEach(function(e){o[e]=t[e]}),this.$emit("input",o),this.$nextTick(function(){e.muteWatch=!1})},isTwelveHours:function(t){return"h"===t||"hh"===t},toggleDropdown:function(){this.showDropdown=!this.showDropdown},select:function(t,e){"hour"===t?this.hour=e:"minute"===t?this.minute=e:"second"===t?this.second=e:"apm"===t&&(this.apm=e)},clearTime:function(){this.hour="",this.minute="",this.second="",this.apm=""}},mounted:function(){this.renderFormat()}}},xJD8:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o(i("DAYN")),n=o(i("Yw/y"));function o(t){return t&&t.__esModule?t:{default:t}}e.default={name:"App",data:function(){return{todos:[],newTodoTitle:"",filter:"all"}},created:function(){for(var t in 4)this.addTodo()},computed:{notDoneNum:function(){return this.todos.filter(function(t){return!t.isDone}).length},filteredTodos:function(){return"all"==this.filter?this.todos:"progress"==this.filter?this.todos.filter(function(t){return!t.isDone}):"completed"==this.filter?this.todos.filter(function(t){return t.isDone}):void 0}},methods:{addTodo:function(){this.todos.push({title:this.newTodoTitle||"Type Something Here...",isDone:!1,isCritical:!1,deadlineDate:null,deadlineTime:{hh:"",mm:""},savedComment:"",savedFile:null,hash:function(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}()}),this.newTodoTitle=""},updateTitle:function(t){this.todos[t.index].title=t.newTitle},updateFilter:function(t){this.filter=t},itemCompleted:function(t){this.$set(this.todos[t],"isDone",!this.todos[t].isDone)},itemStared:function(t){this.$set(this.todos[t],"isCritical",!this.todos[t].isCritical)},itemClickEdit:function(t){this.$refs.todoItem.forEach(function(t){t.isEdit=!1}),this.$refs.todoItem[t].isEdit=!0},itemDelete:function(t){var e=this.todos.filter(function(e){return e.hash==t}),i=this.todos.indexOf(e[0]);this.todos.splice(i,1)},saveEdit:function(t){this.todos[t.index].deadlineDate=t.date,this.todos[t.index].deadlineTime=t.time,this.todos[t.index].savedFile=t.file,this.todos[t.index].savedComment=t.comment}},components:{TodoItem:n.default,draggable:s.default}}},zwTg:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.0bcf45fb15fb3eefcb53.js.map