var e=Object.defineProperty,t=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(t,i,n)=>i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[i]=n;"undefined"!=typeof require&&require;
/*!
* vue3-sketch-ruler v0.0.0
* 2021年9月Wed Sep 15 2021 10:00:56 GMT+0800 (中国标准时间)
* 制作
*/
import{pushScopeId as s,popScopeId as a,withDirectives as r,openBlock as l,createElementBlock as h,normalizeStyle as c,createElementVNode as d,toDisplayString as u,vShow as v,resolveComponent as f,normalizeClass as g,createVNode as C,Fragment as p,renderList as m,createBlock as w}from"vue";const L={name:"LineRuler",data:()=>({startValue:0,showLine:!0}),props:{index:Number,start:Number,vertical:Boolean,scale:Number,value:Number,palette:Object,isShowReferLine:Boolean,thick:Number},computed:{offset(){const e=(this.startValue-this.start)*this.scale;this.showLine=!(e<0);const t=e+"px";return this.vertical?{top:t}:{left:t}},borderCursor(){const e=`1px solid ${this.palette.lineColor}`,s=this.vertical?{borderTop:e}:{borderLeft:e};return((e,s)=>{for(var a in s||(s={}))i.call(s,a)&&o(e,a,s[a]);if(t)for(var a of t(s))n.call(s,a)&&o(e,a,s[a]);return e})({cursor:this.isShowReferLine?this.vertical?"ns-resize":"ew-resize":"none"},s)},actionStyle(){return this.vertical?{left:this.thick+"px"}:{top:this.thick+"px"}}},methods:{handleDown(e){const t=this.vertical?e.clientY:e.clientX,i=this.startValue;this.$emit("onMouseDown");const n=e=>{const n=this.vertical?e.clientY:e.clientX,o=Math.round(i+(n-t)/this.scale);this.startValue=o},o=()=>{this.$emit("onRelease",this.startValue,this.index),document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",o)};document.addEventListener("mousemove",n),document.addEventListener("mouseup",o)},handleRemove(){this.$emit("onRemove",this.index)},initStartValue(){this.startValue=this.value}},mounted(){this.initStartValue()}};s("data-v-16f8325b");const b={class:"value"};a(),L.render=function(e,t,i,n,o,s){return r((l(),h("div",{class:"line",style:c([s.offset,s.borderCursor]),onMousedown:t[1]||(t[1]=(...e)=>s.handleDown&&s.handleDown(...e))},[d("div",{class:"action",style:c(s.actionStyle)},[d("span",{class:"del",onClick:t[0]||(t[0]=(...e)=>this.handleRemove&&this.handleRemove(...e))},"×"),d("span",b,u(o.startValue),1)],4)],36)),[[v,o.showLine]])},L.__scopeId="data-v-16f8325b";const S=e=>e<=.25?40:e<=.5?20:e<=1?10:e<=2?5:e<=4?2:1,R=(e,t,i)=>Math.round(t+e/i),y={name:"CanvasRuler",data:()=>({$canvas:{},canvasContext:{}}),props:{vertical:Boolean,start:Number,scale:Number,width:Number,height:Number,canvasConfigs:Object,selectStart:Number,selectLength:Number},emits:["onAddLine","onIndicatorShow","onIndicatorMove","onIndicatorHide"],watch:{start(){this.drawRuler()},width(e){this.updateCanvasContext(),this.drawRuler()},height(e){this.updateCanvasContext(),this.drawRuler()}},methods:{initCanvasRef(){this.$canvas=this.$refs.$canvas,this.canvasContext=this.$canvas&&this.$canvas.getContext("2d")},updateCanvasContext(){const{ratio:e}=this.canvasConfigs;this.$canvas.width=this.width*e,this.$canvas.height=this.height*e;const t=this.$canvas.getContext("2d");t.font=12*e+'px -apple-system,\n                "Helvetica Neue", ".SFNSText-Regular",\n                "SF UI Text", Arial, "PingFang SC", "Hiragino Sans GB",\n                "Microsoft YaHei", "WenQuanYi Zen Hei", sans-serif',t.lineWidth=1,t.textBaseline="middle"},drawRuler(){const e={scale:this.scale,width:this.width,height:this.height,canvasConfigs:this.canvasConfigs};this.vertical?((e,t,i,n)=>{const{scale:o,width:s,height:a,canvasConfigs:r}=n,{bgColor:l,fontColor:h,shadowColor:c,ratio:d,longfgColor:u,shortfgColor:v}=r;if(e.scale(d,d),e.clearRect(0,0,s,a),e.fillStyle=l,e.fillRect(0,0,s,a),i){const n=(i.y-t)*o,a=i.height*o;e.fillStyle=c,e.fillRect(0,n,3*s/8,a)}const f=S(o),g=f*o,C=10*f,p=C*o,m=Math.floor(t/f)*f,w=Math.floor(t/C)*C,L=(m-t)/f*g,b=(w-t)/C*p,R=t+Math.ceil(a/o);e.beginPath(),e.fillStyle=h,e.strokeStyle=u;for(let S=w,y=0;S<R;S+=C,y++){const t=b+y*p+.5;e.moveTo(0,t),e.save(),e.translate(.4*s,t),e.rotate(-Math.PI/2),e.scale(.83/d,.83/d),e.fillText(S,4*d,7*d),e.restore(),e.lineTo(9*s/16,t)}e.stroke(),e.closePath(),e.beginPath(),e.strokeStyle=v;for(let S=m,y=0;S<R;S+=f,y++){const t=L+y*g+.5;e.moveTo(0,t),S%C!=0&&e.lineTo(1*s/4,t)}e.stroke(),e.closePath(),e.setTransform(1,0,0,1,0,0)})(this.canvasContext,this.start,{y:this.selectStart,height:this.selectLength},e):((e,t,i,n)=>{const{scale:o,width:s,height:a,canvasConfigs:r}=n,{bgColor:l,fontColor:h,shadowColor:c,ratio:d,longfgColor:u,shortfgColor:v}=r;if(e.scale(d,d),e.clearRect(0,0,s,a),e.fillStyle=l,e.fillRect(0,0,s,a),i){const n=(i.x-t)*o,s=i.width*o;e.fillStyle=c,e.fillRect(n,0,s,3*a/8)}const f=S(o),g=f*o,C=10*f,p=C*o,m=Math.floor(t/f)*f,w=Math.floor(t/C)*C,L=(m-t)/f*g,b=(w-t)/C*p,R=t+Math.ceil(s/o);e.beginPath(),e.fillStyle=h,e.strokeStyle=u;for(let S=w,y=0;S<R;S+=C,y++){const t=b+y*p+.5;e.moveTo(t,0),e.save(),e.translate(t,.4*a),e.scale(.83/d,.83/d),e.fillText(S,4*d,7*d),e.restore(),e.lineTo(t,9*a/16)}e.stroke(),e.closePath(),e.beginPath(),e.strokeStyle=v;for(let S=m,y=0;S<R;S+=f,y++){const t=L+y*g+.5;e.moveTo(t,0),S%C!=0&&e.lineTo(t,1*a/4)}e.stroke(),e.closePath(),e.setTransform(1,0,0,1,0,0)})(this.canvasContext,this.start,{x:this.selectStart,width:this.selectLength},e)},handleClick(e){const t=this.vertical?e.offsetY:e.offsetX,i=R(t,this.start,this.scale);this.$emit("onAddLine",i)},handleEnter(e){const t=this.vertical?e.offsetY:e.offsetX,i=R(t,this.start,this.scale);this.$emit("onIndicatorShow",i)},handleMove(e){const t=this.vertical?e.offsetY:e.offsetX,i=R(t,this.start,this.scale);this.$emit("onIndicatorMove",i)},handleLeave(){this.$emit("onIndicatorHide")}},mounted(){this.initCanvasRef(),this.updateCanvasContext(),this.drawRuler()}};y.render=function(e,t,i,n,o,s){return l(),h("canvas",{class:"ruler",ref:"$canvas",onClick:t[0]||(t[0]=(...e)=>s.handleClick&&s.handleClick(...e)),onMouseenter:t[1]||(t[1]=(...e)=>s.handleEnter&&s.handleEnter(...e)),onMousemove:t[2]||(t[2]=(...e)=>s.handleMove&&s.handleMove(...e)),onMouseleave:t[3]||(t[3]=(...e)=>s.handleLeave&&s.handleLeave(...e))},null,544)};const k={name:"RulerWrapper",components:{CanvasRuler:y,LineRuler:L},props:{vertical:Boolean,scale:Number,width:Number,thick:Number,height:Number,start:Number,lines:Array,selectStart:Number,selectLength:Number,canvasConfigs:Object,palette:Object,isShowReferLine:Boolean,onShowRightMenu:Function,handleShowReferLine:Function},data:()=>({isDraggingLine:!1,showIndicator:!1,value:0}),computed:{rwClassName(){return this.vertical?"v-container":"h-container"},rwStyle(){const e={width:`calc(100% - ${this.thick}px)`,height:`${this.thick+1}px`,left:`${this.thick}px`},t={width:`${this.thick+1}px`,height:`calc(100% - ${this.thick}px)`,top:`${this.thick}px`};return this.vertical?t:e},lineStyle(){return{borderTop:`1px solid ${this.palette.lineColor}`,cursor:this.isShowReferLine?"ns-resize":"none"}},indicatorStyle(){const e=(this.value-this.start)*this.scale;let t="top",i="borderLeft";return t=this.vertical?"top":"left",i=this.vertical?"borderBottom":"borderLeft",{[t]:e+"px",[i]:`1px solid ${this.palette.lineColor}`}}},methods:{handleNewLine(e){this.lines.push(e),this.$emit("onLineChange",this.lines,this.vertical)},handleIndicatorShow(e){this.isDraggingLine||(this.showIndicator=!0,this.value=e)},handleIndicatorMove(e){this.showIndicator&&(this.value=e)},handleIndicatorHide(){this.showIndicator=!1},handleLineDown(){this.isDraggingLine=!0},handleLineRelease(e,t){this.isDraggingLine=!1;const i=e-this.start,n=(this.vertical?this.height:this.width)/this.scale;i<0||i>n?this.handleLineRemove(t):(this.lines[t]=e,this.$emit("onLineChange",this.lines,this.vertical))},handleLineRemove(e){this.lines.splice(e,1),this.$emit("onLineChange",this.lines,this.vertical)}}};s("data-v-494a0ed0");const x={class:"lines"},$={class:"value"};a(),k.render=function(e,t,i,n,o,s){const a=f("CanvasRuler"),L=f("LineRuler");return l(),h("div",{class:g(s.rwClassName),style:c(s.rwStyle)},[C(a,{vertical:i.vertical,scale:i.scale,width:i.width,height:i.height,start:i.start,selectStart:i.selectStart,selectLength:i.selectLength,canvasConfigs:i.canvasConfigs,onOnAddLine:s.handleNewLine,onOnIndicatorShow:s.handleIndicatorShow,onOnIndicatorMove:s.handleIndicatorMove,onOnIndicatorHide:s.handleIndicatorHide},null,8,["vertical","scale","width","height","start","selectStart","selectLength","canvasConfigs","onOnAddLine","onOnIndicatorShow","onOnIndicatorMove","onOnIndicatorHide"]),r(d("div",x,[(l(!0),h(p,null,m(i.lines,((e,t)=>(l(),w(L,{key:e+t,index:t,value:e>>0,scale:i.scale,start:i.start,thick:i.thick,palette:i.palette,vertical:i.vertical,isShowReferLine:i.isShowReferLine,onOnRemove:s.handleLineRemove,onOnMouseDown:s.handleLineDown,onOnRelease:s.handleLineRelease},null,8,["index","value","scale","start","thick","palette","vertical","isShowReferLine","onOnRemove","onOnMouseDown","onOnRelease"])))),128))],512),[[v,i.isShowReferLine]]),r(d("div",{class:"indicator",style:c(s.indicatorStyle)},[d("div",$,u(o.value),1)],4),[[v,o.showIndicator]])],6)},k.__scopeId="data-v-494a0ed0";const N={bgColor:"#fff",dividerColor:"#DBDBDB",listItem:{textColor:"#415058",hoverTextColor:"#298DF8",disabledTextColor:"rgba(65, 80, 88, 0.4)",bgColor:"#fff",hoverBgColor:"#F2F2F2"}},O={name:"SketchRule",components:{RulerWrapper:k},data:()=>({vertical:!0}),props:{scale:{type:Number,default:1},ratio:{type:Number,default:window.devicePixelRatio||1},thick:{type:Number,default:16},width:Number,height:Number,startX:{type:Number,default:0},startY:{type:Number,default:0},shadow:{type:Object,default:()=>({x:200,y:100,width:200,height:400})},horLineArr:{type:Array,default:()=>[100,200]},verLineArr:{type:Array,default:()=>[100,200]},cornerActive:Boolean,lang:String,isOpenMenuFeature:!1,handleShowRuler:{type:Function,default:()=>()=>{}},isShowReferLine:{type:Boolean,default:!0},handleShowReferLine:{type:Function,default:()=>()=>{}},palette:{type:Object,default:()=>({bgColor:"rgba(225,225,225, 0)",longfgColor:"#BABBBC",shortfgColor:"#C8CDD0",fontColor:"#7D8694",shadowColor:"#E8E8E8",lineColor:"#EB5648",borderColor:"#DADADC",cornerActiveColor:"rgb(235, 86, 72, 0.6)",menu:N})}},computed:{cornerActiveClass(){return this.cornerActive?" active":""},cornerStyle(){return{backgroundColor:this.palette.bgColor,width:this.thick+"px",height:this.thick+"px",borderRight:`1px solid ${this.palette.borderColor}`,borderBottom:`1px solid ${this.palette.borderColor}`}},canvasConfigs(){const{bgColor:e,longfgColor:t,shortfgColor:i,fontColor:n,shadowColor:o,lineColor:s,borderColor:a,cornerActiveColor:r}=this.palette;return{ratio:this.ratio,bgColor:e,longfgColor:t,shortfgColor:i,fontColor:n,shadowColor:o,lineColor:s,borderColor:a,cornerActiveColor:r}}},methods:{onCornerClick(e){this.$emit("onCornerClick",e)},handleLineChange(e,t){const i=t?{h:this.horLineArr,v:[...e]}:{h:[...e],v:this.verLineArr};this.$emit("handleLine",i)}}},I={class:"style-ruler mb-ruler",id:"mb-ruler"};function M(e){e.component(item.name,O)}O.render=function(e,t,i,n,o,s){const a=f("RulerWrapper");return l(),h("div",I,[C(a,{vertical:!1,width:i.width,height:i.thick,isShowReferLine:i.isShowReferLine,thick:i.thick,start:i.startX,lines:i.horLineArr,selectStart:i.shadow.x,selectLength:i.shadow.width,scale:i.scale,palette:i.palette,canvasConfigs:s.canvasConfigs,onOnLineChange:s.handleLineChange},null,8,["width","height","isShowReferLine","thick","start","lines","selectStart","selectLength","scale","palette","canvasConfigs","onOnLineChange"]),C(a,{vertical:!0,width:i.thick,height:i.height,isShowReferLine:i.isShowReferLine,thick:i.thick,start:i.startY,lines:i.verLineArr,selectStart:i.shadow.y,selectLength:i.shadow.height,scale:i.scale,palette:i.palette,canvasConfigs:s.canvasConfigs,onOnLineChange:s.handleLineChange},null,8,["width","height","isShowReferLine","thick","start","lines","selectStart","selectLength","scale","palette","canvasConfigs","onOnLineChange"]),d("a",{class:g(["corner",s.cornerActiveClass]),style:c(s.cornerStyle),onClick:t[0]||(t[0]=(...e)=>s.onCornerClick&&s.onCornerClick(...e))},null,6)])};const A={install:M,SketchRule:O};export{O as SketchRule,A as default,M as install};