(this["webpackJsonpreact-calendar-toolkit"]=this["webpackJsonpreact-calendar-toolkit"]||[]).push([[0],{10:function(e,t,a){e.exports={grid:"Day_grid__3UuOz",placeholder:"Day_placeholder__3XkR1",wrapper:"Day_wrapper__16e8X",isDisabled:"Day_isDisabled__biXes",isSelected:"Day_isSelected__91sfQ",isWeekend:"Day_isWeekend__3pTsr",isCurrent:"Day_isCurrent__1b9Zu",isHighlighted:"Day_isHighlighted__qI345"}},12:function(e,t,a){e.exports={scrollContainer:"Year_scrollContainer__2dHSr",grid:"Year_grid__1K7Ky",wrapper:"Year_wrapper__BNZvU",isSelected:"Year_isSelected__GWYvX",isCurrent:"Year_isCurrent__b4Plg"}},15:function(e,t,a){e.exports={grid:"Month_grid__RMUU4",wrapper:"Month_wrapper__26EZU",isDisabled:"Month_isDisabled__2_hGg",isSelected:"Month_isSelected__Tm-YS",isCurrent:"Month_isCurrent__9dGCg"}},23:function(e,t,a){e.exports={wrapper:"PopoverWrapper_wrapper__31e3f",bottom:"PopoverWrapper_bottom__Hoq8x",top:"PopoverWrapper_top__21lXO",right:"PopoverWrapper_right__YyJpv",left:"PopoverWrapper_left__ouRAm",triangle:"PopoverWrapper_triangle__1OdYD"}},30:function(e,t,a){e.exports={wrapper:"Header_wrapper__3LlIc",currentDate:"Header_currentDate__I8odQ",title:"Header_title__wvhXO"}},31:function(e,t,a){e.exports={wrapper:"Selector_wrapper__1Bzba",buttons:"Selector_buttons__1zCrb",stepper:"Selector_stepper__4VzX_"}},32:function(e,t,a){e.exports={grid:"Weekdays_grid__2ZV-z",wrapper:"Weekdays_wrapper__3QHus"}},39:function(e,t,a){e.exports={input:"Input_input__P_5e7"}},40:function(e,t,a){e.exports={datepickerWrapper:"DatepickerWrapper_datepickerWrapper__btUR3"}},42:function(e,t,a){e.exports={container:"PopoverProvider_container__33AUu"}},43:function(e,t,a){e.exports={content:"ModalWrapper_content__2KCKo"}},44:function(e,t,a){e.exports={container:"ModalProvider_container__29DOd"}},51:function(e,t,a){e.exports=a(61)},56:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(21),o=a.n(i),c=a(37),s=a(45),l=a(20),d=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return function(){for(var e=arguments.length,a=new Array(e),n=0;n<e;n++)a[n]=arguments[n];return t.reduceRight((function(e,t){return Array.isArray(e)?t.apply(void 0,Object(l.a)(e)):t(e)}),a)}},u=a(28),p=function(e){var t=e.initialState,a=e.reducer,i=e.context;return function(e){var o=e.children,c=i.Provider,s=Object(n.useReducer)(a,t),l=Object(u.a)(s,2),d=l[0],p=l[1];return r.a.createElement(c,{value:{state:d,dispatch:p}},o)}},m=Object(n.createContext)({}),f=function(){return Object(n.useContext)(m)},h=m,b=a(7),v={isVisible:!1},g=p({initialState:v,reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_DATEPICKER":var a=t.payload;return Object(b.a)(Object(b.a)({},e),{},{isVisible:a});default:return e}},context:h}),D=function(e){return function(t){return r.a.createElement(g,null,r.a.createElement(e,t))}},y=Object(n.createContext)({}),_=function(){return Object(n.useContext)(y)},O={},w=p({initialState:O,reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_DATE":var a=t.payload,n=a.selectedTimestamp,r=a.precision;return Object(b.a)(Object(b.a)({},e),{},{selectedTimestamp:n,precision:r||e.precision});case"SET_VISIBILITY":var i=t.payload.visibleTimestamp;return Object(b.a)(Object(b.a)({},e),{},{visibleTimestamp:i});case"SET_TODAY":var o=t.payload.todayTimestamp;return Object(b.a)(Object(b.a)({},e),{},{todayTimestamp:o});case"SET_PRECISION":return Object(b.a)(Object(b.a)({},e),{},{precision:t.payload});default:return e}},context:y}),E=function(e){return function(t){return r.a.createElement(w,null,r.a.createElement(e,t))}},C=a(6),j=a.n(C),k=function(){var e=_().state,t=e.selectedTimestamp,a=e.todayTimestamp,n=e.visibleTimestamp;return!!t&&!!a&&!!n},S=a(77),T=a(81),P=a(82),x=a(74),W=a(83),N=a(75),A=a(93),I=a(84),L=a(85),M=a(86),H=a(80),R=a(76),B=a(87),z=a(88),V=S.a,Y=T.a,F=P.a,K=x.a,X=function(e){return Object(W.a)(e)},G=function(e){return Object(N.a)(e)},U=I.a,Z=function(e){return Object(L.a)(e)},q=function(e,t,a){return{day:K,month:Y,year:F}[e](t,a)},J=M.a,Q=H.a,$=function(e,t){return d(X,R.a)(t,e)},ee=function(){var e=_().dispatch;return{setDate:function(t){e({type:"SET_DATE",payload:{selectedTimestamp:X(t)}})},setToday:function(t){e({type:"SET_TODAY",payload:{todayTimestamp:X(t)}})},setVisibility:function(t){e({type:"SET_VISIBILITY",payload:{visibleTimestamp:X(t)}})},setPrecision:function(t){e({type:"SET_PRECISION",payload:t})}}},te=function(e){var t=e.initialDate,a=e.today,r=e.minPrecision,i=ee(),o=i.setPrecision,c=i.setVisibility,s=i.setDate,l=i.setToday,d=k();Object(n.useEffect)((function(){d||(s(t),c(t),l(a),o(r))}),[d,t,r,s,o,l,c,a])},ae=a(89),ne=a(90),re=a(91),ie=a(92),oe=a(79);var ce=function(e){var t=this;return function a(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return r.length>=e.length?e.apply(t,r):function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return a.apply(t,r.concat(n))}}},se=ce((function(e,t){var a=Object(ae.a)(e),n=Object(ae.a)(t)+1;return Object(l.a)(Array(n-a).keys()).map((function(t,n){return{name:{numeric:a+n},date:Object(z.a)(n,e)}}))})),le=ce((function(e,t){var a=Object(ne.a)(t);return Object(l.a)(Array(12).keys()).map((function(t){return{wide:e.localize.month(t,{width:"wide"}),abbreviated:e.localize.month(t,{width:"abbreviated"}),narrow:e.localize.month(t,{width:"narrow"}),numeric:t}})).map((function(e,t){return{name:e,date:Object(N.a)($(a,t))}}))})),de=ce((function(e,t){var a=Q(t),n=J(a),r=Object(re.a)({locale:e},a),i=Object(ie.a)({locale:e},n),o=Object(oe.a)(r,i);return new Array(o+1).fill("").map((function(e,t){return{date:Object(B.a)(t,r),name:{numeric:Object(A.a)(Object(B.a)(t,r))}}}))})),ue=a(29),pe=a(18),me=r.a.createContext({}),fe=function(){return Object(n.useContext)(me)},he=function(e){var t=e.children,a=e.dateFnsLocale;return r.a.createElement(me.Provider,{value:a},t)};he.defaultProps={dateFnsLocale:pe.a};var be=function(e){return function(t){var a=t.dateFnsLocale,n=Object(ue.a)(t,["dateFnsLocale"]);return r.a.createElement(he,{dateFnsLocale:a},r.a.createElement(e,n))}},ve=function(){return function(e){return Object(l.a)(Array(7).keys()).map((function(t){var a=t+e.options.weekStartsOn===7?0:t+e.options.weekStartsOn;return{short:e.localize.day(a,{width:"short"}),narrow:e.localize.day(a,{width:"narrow"}),abbreviated:e.localize.day(a,{width:"abbreviated"}),wide:e.localize.day(a,{width:"wide"}),numeric:t}}))}(fe())},ge=function(e){var t=fe();return{day:de(t),month:le(t),year:se}[e]},De=a(10),ye=a.n(De),_e=function(e){var t=e.children,a=e.className;return r.a.createElement("div",{className:a||ye.a.grid},t)},Oe=a(15),we=a.n(Oe),Ee=function(e){var t=e.children,a=e.className;return r.a.createElement("div",{className:a||we.a.grid,role:"grid"},t)},Ce=a(12),je=a.n(Ce),ke=function(e){var t=e.children,a=e.className;return r.a.createElement("div",{className:je.a.scrollContainer},r.a.createElement("div",{className:a||je.a.grid},t))},Se=function(e){var t=e.disableDate,a=e.endDate,r=e.precision,i=e.startDate,o=e.highlightDate,c=e.onDateSet,s=e.highlightWeekends,l=e.visibleTimestamp,d=e.selectedTimestamp,u=e.todayTimestamp,p=Object(n.useCallback)((function(e){return"year"!==r&&("month"===r?!U({start:Q(i),end:J(a)},e):t({date:e,isWeekend:Z(e),precision:r})||!U({start:i,end:a},e))}),[t,a,r,i]),m=Object(n.useCallback)((function(e){return o({date:e,isWeekend:Z(e),precision:r})}),[o,r]),f=Object(n.useCallback)((function(e){!p(e)&&c(e)}),[p,c]);return{getIsDisabled:p,getIsHighlighted:m,handleDateSet:f,getIsWeekend:function(e){return"day"===r&&s&&Z(e)},getBelongsToSameMonth:function(e){return"day"===r&&Y(e,l)},getIsSelected:function(e){return q(r,e,d)},getIsCurrent:function(e){return q(r,e,u)}}},Te=function(e){var t=e.onDateSet,a=e.wrapperClassName,n=e.todayTimestamp,i=e.selectedTimestamp,o=e.visibleTimestamp,c=e.renderAs,s=e.precision,l=e.startDate,d=e.endDate,u=e.disableDate,p=e.highlightDate,m=e.highlightWeekends,f=ge(s),h="year"===s?f(l,d):f(o),b=Se({disableDate:u,endDate:d,precision:s,startDate:l,highlightDate:p,onDateSet:t,highlightWeekends:m,visibleTimestamp:o,selectedTimestamp:i,todayTimestamp:n}),v=b.getIsDisabled,g=b.getIsHighlighted,D=b.handleDateSet,y=b.getIsWeekend,_=b.getBelongsToSameMonth,O=b.getIsSelected,w=b.getIsCurrent,E={day:_e,month:Ee,year:ke}[s],C=c;return r.a.createElement(E,{className:a},h.map((function(e){var t=e.name,a=e.date;return r.a.createElement(C,{isWeekend:y(a),onDateSet:D,isSelected:O(a),isCurrent:w(),belongsToSameMonth:_(a),isDisabled:v(a),isHighlighted:g(a),name:t,date:a,key:a})})))};Te.defaultProps={highlightWeekends:!1};var Pe=Te,xe=a(78),We=function(){var e=fe();return{incrementMonthLabel:Object(xe.a)({locale:e,addSuffix:!0},new Date(2020,0,1),new Date(2020,1,1)),decrementMonthLabel:Object(xe.a)({locale:e,addSuffix:!0},new Date(2020,1,1),new Date(2020,0,1))}},Ne=function(e){var t=e.startDate,a=e.endDate,r=e.visibleTimestamp,i=ee(),o=i.setVisibility,c=i.setPrecision,s=Object(n.useCallback)((function(e){return U({start:Q(t),end:J(a)},e)}),[a,t]);return{onSetPrecision:Object(n.useCallback)((function(e){c(e)}),[c]),onIncrementMonth:Object(n.useCallback)((function(){var e=$(r,1);s(e)&&o(e)}),[s,o,r]),onDecrementMonth:Object(n.useCallback)((function(){var e,t,a=(e=r,t=1,d(X,R.a)(-t,e));s(a)&&o(a)}),[s,o,r])}},Ae=function(e){var t=e.todayTimestamp,a=e.selectedTimestamp,n=e.renderAs,i=e.startDate,o=e.endDate,c=e.visibleTimestamp,s=e.precision,l=We(),d=Ne({startDate:i,endDate:o,visibleTimestamp:c}),u=d.onSetPrecision,p=d.onIncrementMonth,m=d.onDecrementMonth,f=n;return r.a.createElement(f,{precision:s,monthStepperLabels:l,incrementMonth:p,decrementMonth:m,setPrecision:u,todayDate:G(t),selectedDate:G(a),visibleDate:G(c)})},Ie=function(e){var t=e.renderAs,a=e.title,n=_().state,i=n.selectedTimestamp,o=n.todayTimestamp,c=t;return r.a.createElement(c,{selectedDate:G(i),todayDate:G(o),title:a})},Le=a(38),Me="rgba(0, 0, 0, 0.38)",He={fontPrimary:"Helvetica Neue",fontSecondary:"Arial",fontFallback:"sans-serif",fontSize:"14px",fontWeight:"400",fontSizeSmall:"10px",fontSizeBig:"24px",calendarWidth:"240px",datePickerWidth:"calc(var(--calendarWidth) + var(--innerPadding) * 2)",selectorHeight:"36px",calendarHeight:"200px",innerPadding:"12px",entryHeight:"32px",entryMargin:"1px",datepickerBorderRadius:"4px",entryBorderRadius:"4px",bgColor:"white",textColor:"black",headerBgColor:"#43a047",weekendTextColor:"red",headerTextColor:"white",borderColor:Me,modalBgColor:Me,weekDayColor:Me,entryHoverColor:"rgba(0, 0, 0, 0.08)",entrySelectedColor:"#43a047",entryHighlightColor:"lightblue",inputWidth:"90px",inputPadding:"8px",inputBorderRadius:"4px",inputBorderColor:Me,inputHighlightColor:"lightblue"},Re=r.a.createContext({}),Be=function(){return Object(n.useContext)(Re)},ze=function(e){var t=e.children,a=e.theme;return r.a.createElement(Re.Provider,{value:a},t)};ze.defaultProps={theme:{}};var Ve=function(e){return function(t){var a=t.theme,n=Object(ue.a)(t,["theme"]);return r.a.createElement(ze,{theme:a},r.a.createElement(e,n))}},Ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,t=Be(),a=Object(b.a)(Object(b.a)({},e),t),n=Object(Le.useTheme)(a),r=n.ref,i=n.setRef,o=n.style;return{ref:r,setRef:i,style:o}},Fe=a(40),Ke=function(e){var t=e.title,a=e.children,n=e.className,i=Ye(),o=i.setRef,c=i.style;return r.a.createElement("div",{style:c,ref:o,className:n,"aria-label":t,role:"dialog"},a)};Ke.defaultProps={className:a.n(Fe).a.datepickerWrapper};var Xe=Ke,Ge=function(){var e=fe();return V({locale:e})},Ue=a(30),Ze=a.n(Ue),qe=function(e){var t=e.selectedDate,a=e.title,n=(e.todayDate,Ge());return r.a.createElement("div",{className:Ze.a.wrapper},r.a.createElement("div",{className:Ze.a.title},a),r.a.createElement("div",{"aria-live":"polite",className:Ze.a.currentDate},n("MMM do",t)))},Je=a(31),Qe=a.n(Je),$e=function(e){e.selectedDate,e.todayDate;var t=e.setPrecision,a=e.decrementMonth,n=e.incrementMonth,i=e.precision,o=e.monthStepperLabels,c=e.visibleDate,s=Ge(),l=s("y",c),d=s("LLLL",c);return r.a.createElement("div",{className:Qe.a.wrapper},r.a.createElement("div",{className:Qe.a.buttons},r.a.createElement("button",{onClick:function(){t("year")},"aria-live":"polite",type:"button"},l),"year"!==i&&r.a.createElement("button",{onClick:function(){t("month")},"aria-live":"polite",type:"button"},d)),"day"===i&&r.a.createElement("div",{className:Qe.a.stepper},r.a.createElement("button",{onClick:function(){a()},"aria-label":o.decrementMonthLabel,type:"button"},"\u27e8"),r.a.createElement("button",{onClick:function(){n()},"aria-label":o.incrementMonthLabel,type:"button"},"\u27e9")))},et=a(5),tt=a(11),at=a.n(tt),nt=function(e){var t,a=e.onDateSet,n=e.date,i=e.belongsToSameMonth,o=e.isCurrent,c=e.isSelected,s=e.isDisabled,l=e.isHighlighted,d=e.isWeekend,u=e.name,p=Ge(),m=function(){a(n)};return i?r.a.createElement("div",{tabIndex:s?"-1":"0",role:"button",onClick:m,onKeyDown:m,className:at()((t={},Object(et.a)(t,ye.a.wrapper,!0),Object(et.a)(t,ye.a.isCurrent,o),Object(et.a)(t,ye.a.isSelected,c),Object(et.a)(t,ye.a.isDisabled,s),Object(et.a)(t,ye.a.isWeekend,d),Object(et.a)(t,ye.a.isHighlighted,l),t)),"aria-disabled":s,"aria-label":p("do LLLL EEEE",n)},u.numeric):r.a.createElement("div",{className:ye.a.placeholder})},rt=function(e){var t,a=e.onDateSet,n=e.date,i=e.isDisabled,o=e.isCurrent,c=e.isSelected,s=e.name,l=e.isHighlighted,d=function(){a(n)};return r.a.createElement("div",{tabIndex:i?"-1":"0",role:"button",onClick:d,onKeyPress:d,className:at()((t={},Object(et.a)(t,we.a.wrapper,!0),Object(et.a)(t,we.a.isSelected,c),Object(et.a)(t,we.a.isDisabled,i),Object(et.a)(t,we.a.isCurrent,o),Object(et.a)(t,we.a.isHighlighted,l),t)),"aria-disabled":i,"aria-label":s.wide},s.abbreviated)},it=function(e){var t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)},ot=function(e){var t;window.addEventListener("scroll",(function(){window.clearTimeout(t),t=setTimeout((function(){e()}),66)}),!1)},ct=function(){var e=window.scrollX,t=window.scrollY;window.scrollTo(e,t)},st=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=arguments.length>2?arguments[2]:void 0;Object(n.useEffect)((function(){var n=e.current,r=n&&n.closest(t);return n&&a&&r&&(r.addEventListener("scroll",(function(e){window.addEventListener("scroll",ct)}),!1),ot((function(){window.removeEventListener("scroll",ct)})),it(r)&&n.scrollIntoView({block:"nearest",inline:"nearest"})),function(){window.removeEventListener("scroll",ct)}}),[a,t,e])},lt=function(e){var t,a=e.isHighlighted,i=e.onDateSet,o=e.date,c=e.isSelected,s=e.isCurrent,l=e.name,d=Object(n.useRef)(),u=function(){i(o)};return st(d,".".concat(je.a.scrollContainer),c),r.a.createElement("div",{ref:d,tabIndex:"0",role:"button",onClick:u,onKeyPress:u,className:at()((t={},Object(et.a)(t,je.a.wrapper,!0),Object(et.a)(t,je.a.isCurrent,s),Object(et.a)(t,je.a.isSelected,c),Object(et.a)(t,je.a.isHighlighted,a),t)),"aria-label":l.numeric},l.numeric)},dt=a(32),ut=a.n(dt),pt=function(e){var t=e.names;return r.a.createElement("div",{className:ut.a.grid,role:"presentation"},t.map((function(e){return r.a.createElement("div",{key:e.short,className:ut.a.wrapper,"aria-label":e.wide},e.short)})))},mt=Object.freeze({supportedPrecisions:Object.freeze(["year","month","day"])}),ft=function(e){var t=_().state.precision,a=ee().setPrecision,n=function(e,t){var a=e.indexOf(t);return e[a+1]}(function(t){var a=t.indexOf(e);return t.slice(0,a+1)}(mt.supportedPrecisions),t);return function(){n&&a(n)}},ht=function(e,t){var a=_().state.precision,r=ee(),i=r.setDate,o=r.setVisibility,c=ft(t);return{handleDateSet:Object(n.useCallback)((function(n){a===t?(e(n),i(n)):(o(n),c())}),[c,t,e,a,i,o])}},bt=function(e){var t=e.initialDate,a=e.today,i=e.showHeader,o=e.title,c=e.minPrecision,s=e.onDateSet,l=e.renderDayAs,d=e.dayCalendarClassName,u=e.renderMonthAs,p=e.monthCalendarClassName,m=e.renderYearAs,f=e.yearCalendarClassName,h=e.renderWeekdaysAs,b=e.startDate,v=e.endDate,g=e.disableDate,D=e.highlightWeekends,y=e.renderHeaderAs,O=e.renderSelectorAs,w=e.highlightDate,E=e.wrapperClassName,C=_().state,j=C.selectedTimestamp,S=C.todayTimestamp,T=C.visibleTimestamp,P=C.precision,x=k(),W=ht(s,c).handleDateSet;te({initialDate:t,today:a,minPrecision:c});var N=h,A=ve();return x&&r.a.createElement(Xe,{className:E||void 0,title:o},i&&r.a.createElement(Ie,{renderAs:y,title:o}),r.a.createElement(Ae,{precision:P,renderAs:O,selectedTimestamp:j,todayTimestamp:S,visibleTimestamp:T,startDate:b,endDate:v}),"day"===P&&r.a.createElement(n.Fragment,null,r.a.createElement(N,{names:A}),r.a.createElement(Pe,{precision:"day",highlightWeekends:D,wrapperClassName:d,renderAs:l,disableDate:g,highlightDate:w,selectedTimestamp:j,visibleTimestamp:T,todayTimestamp:S,onDateSet:W,startDate:b,endDate:v})),"month"===P&&r.a.createElement(Pe,{precision:"month",disableDate:g,highlightDate:w,wrapperClassName:p,renderAs:u,selectedTimestamp:j,visibleTimestamp:T,todayTimestamp:S,onDateSet:W,startDate:b,endDate:v}),"year"===P&&r.a.createElement(Pe,{precision:"year",disableDate:g,highlightDate:w,wrapperClassName:f,renderAs:m,selectedTimestamp:j,visibleTimestamp:T,todayTimestamp:S,onDateSet:W,startDate:b,endDate:v}))};j.a.instanceOf(Date),j.a.instanceOf(Date),j.a.instanceOf(Date),j.a.instanceOf(Date),j.a.bool,j.a.string,j.a.oneOf(["year","month","day"]),j.a.func.isRequired,j.a.string,j.a.elementType,j.a.string,j.a.elementType,j.a.string,j.a.elementType,j.a.string,j.a.elementType,j.a.elementType,j.a.elementType,j.a.func,j.a.func,j.a.bool,j.a.shape({}),j.a.shape({});bt.defaultProps={initialDate:new Date(2020,0,6),startDate:new Date(2020,0,1),endDate:new Date(2020,1,25),today:new Date(Date.now()),wrapperClassName:"",showHeader:!0,title:"",minPrecision:"day",renderDayAs:nt,dayCalendarClassName:"",renderMonthAs:rt,monthCalendarClassName:"",renderYearAs:lt,yearCalendarClassName:"",renderWeekdaysAs:pt,renderHeaderAs:qe,renderSelectorAs:$e,disableDate:function(e){e.isWeekend,e.precision,e.date;return!1},highlightDate:function(e){e.isWeekend,e.precision,e.date;return!1},highlightWeekends:!0};var vt=bt,gt=vt,Dt=function(){var e=f().dispatch;return{toggleDatepicker:function(t){e({type:"TOGGLE_DATEPICKER",payload:t})}}},yt=a(39),_t=a.n(yt),Ot=function(e){var t=e.toggleDatepicker,a=e.value,n=(e.date,e.onChange,Ye()),i=n.setRef,o=n.style;return r.a.createElement("input",{style:o,ref:i,className:_t.a.input,readOnly:!0,value:a,onClick:function(e){e.stopPropagation(),t(!0)},type:"text"})},wt=a(41),Et=a.n(wt),Ct=a(42),jt=a.n(Ct),kt=function(e){var t=e.renderDatepickerAs,a=e.isVisible,n=e.children,i=e.toggleDatepicker,o=e.wrapPopoverWith,c=t,s=o;return r.a.createElement(Et.a,{align:"start",isOpen:a,position:["bottom","top"],padding:0,containerClassName:jt.a.container,content:function(e){var t=e.position;return r.a.createElement(s,{toggleDatepicker:i,position:t},r.a.createElement(c,null))}},n)};kt.defaultProps={};var St=kt,Tt=function(e,t){Object(n.useEffect)((function(){var a=function(a){e.current&&!e.current.contains(a.target)&&t()};return document.addEventListener("mousedown",a),document.addEventListener("touchstart",a),function(){document.removeEventListener("mousedown",a),document.removeEventListener("touchstart",a)}}),[e,t])},Pt=a(23),xt=a.n(Pt),Wt=function(e){var t,a,i=e.position,o=e.children,c=e.toggleDatepicker,s=Ye(),l=s.ref,d=s.setRef,u=s.style;return Tt(l,(function(){c(!1)})),Object(n.useEffect)((function(){var e=function(){c(!1)};return document.addEventListener("scroll",e),function(){document.removeEventListener("scroll",e)}}),[c]),r.a.createElement("div",{style:u,ref:d,className:at()((t={},Object(et.a)(t,xt.a.wrapper,!0),Object(et.a)(t,xt.a[i],!0),t))},r.a.createElement("div",{className:at()((a={},Object(et.a)(a,xt.a.triangle,!0),Object(et.a)(a,xt.a[i],!0),a))}),o)},Nt=a(43),At=a.n(Nt),It=function(e){var t=e.children,a=e.toggleDatepicker,i=Object(n.useRef)();return Tt(i,(function(){a(!1)})),r.a.createElement("div",{ref:i,className:At.a.content},t)},Lt=a(44),Mt=a.n(Lt),Ht=function(e){var t=e.onDateSet,a=e.hideOnSelect,r=Dt().toggleDatepicker,i=Ge(),o=_().state.selectedTimestamp;return{handleDateSet:Object(n.useCallback)((function(e){t(e),a&&r(!1)}),[a,t,r]),formatValue:Object(n.useCallback)((function(e){return i(e,G(o))}),[i,o]),getDate:function(){return G(o)}}},Rt=function(e){var t=e.renderInputAs,a=e.mode,n=e.formatPattern,i=e.renderDatepickerAs,o=e.onDateSet,c=e.popoverProvider,s=e.wrapPopoverWith,l=e.modalProvider,d=e.wrapModalWith,u=e.hideOnSelect,p=e.datePickerProps,m=e.datePickerDefaultProps,h=f().state.isVisible,v=Dt().toggleDatepicker,g=Ht({onDateSet:o,hideOnSelect:u}),D=g.handleDateSet,y=g.formatValue,_=g.getDate,O="popover"===a?c:l,w=t,E=i,C=Object(b.a)(Object(b.a)({},m),p),j=C.initialDate,S=C.today,T=C.minPrecision;te({initialDate:j,today:S,minPrecision:T});var P=k(),x=r.a.forwardRef((function(e,t){var a=e.children;return r.a.createElement("div",{ref:t},a)}));return P&&r.a.createElement(O,{isVisible:h,toggleDatepicker:v,wrapPopoverWith:s,wrapModalWith:d,renderDatepickerAs:function(){return r.a.createElement(E,Object.assign({showHeader:"modal"===a,onDateSet:D},p))}},r.a.createElement(x,null,r.a.createElement(w,{onChange:o,date:_(),value:y(n),toggleDatepicker:v})))};Rt.defaultProps={mode:"popover",hideOnSelect:!0,renderInputAs:Ot,renderDatepickerAs:vt,formatPattern:"MM/dd/yyyy",popoverProvider:St,wrapPopoverWith:Wt,wrapModalWith:It,modalProvider:function(e){var t=e.toggleDatepicker,a=e.children,i=e.isVisible,c=e.renderDatepickerAs,s=e.wrapModalWith,l=Object(n.useRef)(),d=Object(n.useState)(!1),p=Object(u.a)(d,2),m=p[0],f=p[1],h=c,b=s,v=Be();return Object(n.useEffect)((function(){var e=v.modalBgColor||He.modalBgColor;return i&&!m&&(l.current=document.createElement("div"),l.current.classList.add(Mt.a.container),l.current.style.setProperty("--".concat("modalBgColor"),e),document.body.appendChild(l.current),f(!0)),function(){m&&l.current.remove(),m&&f(!1)}}),[m,i,v]),r.a.createElement(n.Fragment,null,a,i&&m&&o.a.createPortal(r.a.createElement(b,{toggleDatepicker:t},r.a.createElement(h,null)),l.current))},datePickerProps:{},datePickerDefaultProps:{initialDate:new Date(2020,0,8),today:new Date,minPrecision:"day"}};var Bt=Rt,zt=d(E,D,be,Ve)(Bt),Vt=d(E,be,Ve)(gt),Yt=(a(56),function(e){var t=e.date;e.precision;return Object(c.a)(t,new Date(2020,0,7))}),Ft=function(){return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"container"},r.a.createElement(Vt,{startDate:new Date(1999,11,6),endDate:new Date(2020,1,25),minPrecision:"day",highlightDate:Yt,onDateSet:function(e){console.log("date set",e)},title:"Demo datepicker",theme:{headerBgColor:"purple"}})),r.a.createElement("div",{className:"container"},r.a.createElement(zt,{mode:"popover",minPrecision:"month",onDateSet:function(e){},dateFnsLocale:s.a,title:"Demo datepicker"})))};o.a.render(r.a.createElement(Ft,null),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.77bc36b0.chunk.js.map