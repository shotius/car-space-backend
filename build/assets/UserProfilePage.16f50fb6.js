var at=Object.defineProperty,st=Object.defineProperties;var ct=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var Re=Object.prototype.hasOwnProperty,Me=Object.prototype.propertyIsEnumerable;var Ee=(t,o,e)=>o in t?at(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,Te=(t,o)=>{for(var e in o||(o={}))Re.call(o,e)&&Ee(t,e,o[e]);if(V)for(var e of V(o))Me.call(o,e)&&Ee(t,e,o[e]);return t},ze=(t,o)=>st(t,ct(o));var Ae=(t,o)=>{var e={};for(var r in t)Re.call(t,r)&&o.indexOf(r)<0&&(e[r]=t[r]);if(t!=null&&V)for(var r of V(t))o.indexOf(r)<0&&Me.call(t,r)&&(e[r]=t[r]);return e};import{a9 as F,af as lt,ag as pt,r as u,ai as ht,ab as j,aa as dt,ak as G,c as Ce,bd as ye,j as n,B as qe,ay as O,e as h,w as Se,p as ut,o as P,b as z,f as be,a as $,K as N,z as Ve,H as S,V as b,C as I,T as m,t as De,be as Je,bf as ft,M as mt,O as Ne,y as gt,G as Ie,N as vt,P as xt,bg as wt,A as ee,W as B,a1 as _e,bh as Ct,az as ce,U as yt,a2 as Ke,bi as St,a3 as bt,D as _t,bj as Pt,v as Et,bk as Rt,bl as Mt,bm as le,bn as Tt}from"./index.5a316967.js";import{S as zt}from"./ScrollToTop.ec6dae38.js";import{U as At}from"./UserAvatar.bb7a0ddb.js";import{C as Y}from"./Card.c49580d4.js";import{A as Dt}from"./ArrowPrevIcon.9faba049.js";import{a as Nt,S as It,s as Wt}from"./SliderBlue.6faa9ecb.js";import{a as We}from"./range.9e64e692.js";import{I as te}from"./chakra-ui-image.esm.43e140aa.js";import{T as E,c as Lt}from"./TextSecondary.3b524e4b.js";import{B as Ot,C as kt}from"./CarCardHeading.e44ab24b.js";import{N as y}from"./NotSpecified.ed2c9df6.js";import{C as Ft}from"./CatalogListWrap.ba533f38.js";import{t as Le}from"./toTrippleNumber.af3f6dfa.js";import{d as Oe}from"./dateToYMD.5f347133.js";import{O as jt}from"./OrderListCard.642e5479.js";import"./useRoles.de92b421.js";function W(){return W=Object.assign||function(t){for(var o=1;o<arguments.length;o++){var e=arguments[o];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},W.apply(this,arguments)}function Pe(t,o){if(t==null)return{};var e={},r=Object.keys(t),i,a;for(a=0;a<r.length;a++)i=r[a],!(o.indexOf(i)>=0)&&(e[i]=t[i]);return e}var Ut=["className"],Zt=["isNumeric"],Ht=["isNumeric"],Bt=F(function(t,o){var e=lt("Table",t),r=pt(t),i=r.className,a=Pe(r,Ut);return u.exports.createElement(ht,{value:e},u.exports.createElement(j.table,W({role:"table",ref:o,__css:e.table,className:dt("chakra-table",i)},a)))}),Gt=F(function(t,o){var e=G();return u.exports.createElement(j.thead,W({},t,{ref:o,__css:e.thead}))}),$t=F(function(t,o){var e=G();return u.exports.createElement(j.tbody,W({},t,{ref:o,__css:e.tbody}))}),A=F(function(t,o){var e=t.isNumeric,r=Pe(t,Zt),i=G();return u.exports.createElement(j.th,W({},r,{ref:o,__css:i.th,"data-is-numeric":e}))}),ke=F(function(t,o){var e=G();return u.exports.createElement(j.tr,W({role:"row"},t,{ref:o,__css:e.tr}))}),D=F(function(t,o){var e=t.isNumeric,r=Pe(t,Ht),i=G();return u.exports.createElement(j.td,W({role:"gridcell"},r,{ref:o,__css:i.td,"data-is-numeric":e}))});const pe=c=>{var s=c,{activeBg:t="autoOrange.100",activeColor:o="autoOrange.500",to:e,clickCallback:r,children:i}=s,a=Ae(s,["activeBg","activeColor","to","clickCallback","children"]);const l=Ce(),p=ye({path:e,exact:!0});return n(qe,ze(Te({w:"full",borderRadius:"none",display:"flex",justifyContent:["start",null,null,"center"],p:"32px 32px",fontWeight:"500",bg:p?t:"#fff",color:p?o:"#000",_hover:{bg:p?"autoOrange.200":"autoGrey.200"},_active:{bg:"autoOrange.300"},onClick:()=>{r?r():l.push(e)}},a),{children:i}))};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var he=function(t,o){return he=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])},he(t,o)};function Yt(t,o){he(t,o);function e(){this.constructor=t}t.prototype=o===null?Object.create(o):(e.prototype=o.prototype,new e)}var f=function(){return f=Object.assign||function(o){for(var e,r=1,i=arguments.length;r<i;r++){e=arguments[r];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(o[a]=e[a])}return o},f.apply(this,arguments)},Fe=!1,L,de,ue,re,oe,Qe,ne,fe,me,ge,et,ve,xe,tt,rt;function w(){if(!Fe){Fe=!0;var t=navigator.userAgent,o=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(t),e=/(Mac OS X)|(Windows)|(Linux)/.exec(t);if(ve=/\b(iPhone|iP[ao]d)/.exec(t),xe=/\b(iP[ao]d)/.exec(t),ge=/Android/i.exec(t),tt=/FBAN\/\w+;/i.exec(t),rt=/Mobile/i.exec(t),et=!!/Win64/.exec(t),o){L=o[1]?parseFloat(o[1]):o[5]?parseFloat(o[5]):NaN,L&&document&&document.documentMode&&(L=document.documentMode);var r=/(?:Trident\/(\d+.\d+))/.exec(t);Qe=r?parseFloat(r[1])+4:L,de=o[2]?parseFloat(o[2]):NaN,ue=o[3]?parseFloat(o[3]):NaN,re=o[4]?parseFloat(o[4]):NaN,re?(o=/(?:Chrome\/(\d+\.\d+))/.exec(t),oe=o&&o[1]?parseFloat(o[1]):NaN):oe=NaN}else L=de=ue=oe=re=NaN;if(e){if(e[1]){var i=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(t);ne=i?parseFloat(i[1].replace("_",".")):!0}else ne=!1;fe=!!e[2],me=!!e[3]}else ne=fe=me=!1}}var we={ie:function(){return w()||L},ieCompatibilityMode:function(){return w()||Qe>L},ie64:function(){return we.ie()&&et},firefox:function(){return w()||de},opera:function(){return w()||ue},webkit:function(){return w()||re},safari:function(){return we.webkit()},chrome:function(){return w()||oe},windows:function(){return w()||fe},osx:function(){return w()||ne},linux:function(){return w()||me},iphone:function(){return w()||ve},mobile:function(){return w()||ve||xe||ge||rt},nativeApp:function(){return w()||tt},android:function(){return w()||ge},ipad:function(){return w()||xe}},Xt=we,J=!!(typeof window!="undefined"&&window.document&&window.document.createElement),qt={canUseDOM:J,canUseWorkers:typeof Worker!="undefined",canUseEventListeners:J&&!!(window.addEventListener||window.attachEvent),canUseViewport:J&&!!window.screen,isInWorker:!J},Vt=qt,ot=Vt,nt;ot.canUseDOM&&(nt=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0);/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */function Jt(t,o){if(!ot.canUseDOM||o&&!("addEventListener"in document))return!1;var e="on"+t,r=e in document;if(!r){var i=document.createElement("div");i.setAttribute(e,"return;"),r=typeof i[e]=="function"}return!r&&nt&&t==="wheel"&&(r=document.implementation.hasFeature("Events.wheel","3.0")),r}var Kt=Jt,Qt=Xt,er=Kt,je=10,Ue=40,Ze=800;function it(t){var o=0,e=0,r=0,i=0;return"detail"in t&&(e=t.detail),"wheelDelta"in t&&(e=-t.wheelDelta/120),"wheelDeltaY"in t&&(e=-t.wheelDeltaY/120),"wheelDeltaX"in t&&(o=-t.wheelDeltaX/120),"axis"in t&&t.axis===t.HORIZONTAL_AXIS&&(o=e,e=0),r=o*je,i=e*je,"deltaY"in t&&(i=t.deltaY),"deltaX"in t&&(r=t.deltaX),(r||i)&&t.deltaMode&&(t.deltaMode==1?(r*=Ue,i*=Ue):(r*=Ze,i*=Ze)),r&&!o&&(o=r<1?-1:1),i&&!e&&(e=i<1?-1:1),{spinX:o,spinY:e,pixelX:r,pixelY:i}}it.getEventType=function(){return Qt.firefox()?"DOMMouseScroll":er("wheel")?"wheel":"mousewheel"};var tr=it,rr=tr;function or(t,o,e,r,i,a){a===void 0&&(a=0);var c=k(t,o,a),s=c.width,l=c.height,p=Math.min(s,e),d=Math.min(l,r);return p>d*i?{width:d*i,height:d}:{width:p,height:p/i}}function nr(t){return t.width>t.height?t.width/t.naturalWidth:t.height/t.naturalHeight}function K(t,o,e,r,i){i===void 0&&(i=0);var a=k(o.width,o.height,i),c=a.width,s=a.height;return{x:He(t.x,c,e.width,r),y:He(t.y,s,e.height,r)}}function He(t,o,e,r){var i=o*r/2-e/2;return ie(t,-i,i)}function Be(t,o){return Math.sqrt(Math.pow(t.y-o.y,2)+Math.pow(t.x-o.x,2))}function Ge(t,o){return Math.atan2(o.y-t.y,o.x-t.x)*180/Math.PI}function ir(t,o,e,r,i,a,c){a===void 0&&(a=0),c===void 0&&(c=!0);var s=c?ar:sr,l=k(o.width,o.height,a),p=k(o.naturalWidth,o.naturalHeight,a),d={x:s(100,((l.width-e.width/i)/2-t.x/i)/l.width*100),y:s(100,((l.height-e.height/i)/2-t.y/i)/l.height*100),width:s(100,e.width/l.width*100/i),height:s(100,e.height/l.height*100/i)},g=Math.round(s(p.width,d.width*p.width/100)),_=Math.round(s(p.height,d.height*p.height/100)),T=p.width>=p.height*r,v=T?{width:Math.round(_*r),height:_}:{width:g,height:Math.round(g/r)},x=f(f({},v),{x:Math.round(s(p.width-v.width,d.x*p.width/100)),y:Math.round(s(p.height-v.height,d.y*p.height/100))});return{croppedAreaPercentages:d,croppedAreaPixels:x}}function ar(t,o){return Math.min(t,Math.max(0,o))}function sr(t,o){return o}function cr(t,o,e,r,i,a){var c=k(o.width,o.height,e),s=ie(r.width/c.width*(100/t.width),i,a),l={x:s*c.width/2-r.width/2-c.width*s*(t.x/100),y:s*c.height/2-r.height/2-c.height*s*(t.y/100)};return{crop:l,zoom:s}}function lr(t,o,e){var r=nr(o);return e.height>e.width?e.height/(t.height*r):e.width/(t.width*r)}function pr(t,o,e,r,i,a){e===void 0&&(e=0);var c=k(o.naturalWidth,o.naturalHeight,e),s=ie(lr(t,o,r),i,a),l=r.height>r.width?r.height/t.height:r.width/t.width,p={x:((c.width-t.width)/2-t.x)*l,y:((c.height-t.height)/2-t.y)*l};return{crop:p,zoom:s}}function $e(t,o){return{x:(o.x+t.x)/2,y:(o.y+t.y)/2}}function hr(t){return t*Math.PI/180}function k(t,o,e){var r=hr(e);return{width:Math.abs(Math.cos(r)*t)+Math.abs(Math.sin(r)*o),height:Math.abs(Math.sin(r)*t)+Math.abs(Math.cos(r)*o)}}function ie(t,o,e){return Math.min(Math.max(t,o),e)}function Q(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];return t.filter(function(e){return typeof e=="string"&&e.length>0}).join(" ").trim()}var dr=`.reactEasyCrop_Container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  user-select: none;
  touch-action: none;
  cursor: move;
  display: flex;
  justify-content: center;
  align-items: center;
}

.reactEasyCrop_Image,
.reactEasyCrop_Video {
  will-change: transform; /* this improves performances and prevent painting issues on iOS Chrome */
}

.reactEasyCrop_Contain {
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.reactEasyCrop_Cover_Horizontal {
  width: 100%;
  height: auto;
}
.reactEasyCrop_Cover_Vertical {
  width: auto;
  height: 100%;
}

.reactEasyCrop_CropArea {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  box-shadow: 0 0 0 9999em;
  color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

.reactEasyCrop_CropAreaRound {
  border-radius: 50%;
}

.reactEasyCrop_CropAreaGrid::before {
  content: ' ';
  box-sizing: border-box;
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 0;
  bottom: 0;
  left: 33.33%;
  right: 33.33%;
  border-top: 0;
  border-bottom: 0;
}

.reactEasyCrop_CropAreaGrid::after {
  content: ' ';
  box-sizing: border-box;
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 33.33%;
  bottom: 33.33%;
  left: 0;
  right: 0;
  border-left: 0;
  border-right: 0;
}
`,ur=1,fr=3,mr=function(t){Yt(o,t);function o(){var e=t!==null&&t.apply(this,arguments)||this;return e.imageRef=null,e.videoRef=null,e.containerRef=null,e.styleRef=null,e.containerRect=null,e.mediaSize={width:0,height:0,naturalWidth:0,naturalHeight:0},e.dragStartPosition={x:0,y:0},e.dragStartCrop={x:0,y:0},e.lastPinchDistance=0,e.lastPinchRotation=0,e.rafDragTimeout=null,e.rafPinchTimeout=null,e.wheelTimer=null,e.state={cropSize:null,hasWheelJustStarted:!1},e.preventZoomSafari=function(r){return r.preventDefault()},e.cleanEvents=function(){document.removeEventListener("mousemove",e.onMouseMove),document.removeEventListener("mouseup",e.onDragStopped),document.removeEventListener("touchmove",e.onTouchMove),document.removeEventListener("touchend",e.onDragStopped)},e.clearScrollEvent=function(){e.containerRef&&e.containerRef.removeEventListener("wheel",e.onWheel),e.wheelTimer&&clearTimeout(e.wheelTimer)},e.onMediaLoad=function(){var r=e.computeSizes();r&&(e.emitCropData(),e.setInitialCrop(r)),e.props.onMediaLoaded&&e.props.onMediaLoaded(e.mediaSize)},e.setInitialCrop=function(r){if(e.props.initialCroppedAreaPercentages){var i=cr(e.props.initialCroppedAreaPercentages,e.mediaSize,e.props.rotation,r,e.props.minZoom,e.props.maxZoom),a=i.crop,c=i.zoom;e.props.onCropChange(a),e.props.onZoomChange&&e.props.onZoomChange(c)}else if(e.props.initialCroppedAreaPixels){var s=pr(e.props.initialCroppedAreaPixels,e.mediaSize,e.props.rotation,r,e.props.minZoom,e.props.maxZoom),a=s.crop,c=s.zoom;e.props.onCropChange(a),e.props.onZoomChange&&e.props.onZoomChange(c)}},e.computeSizes=function(){var r,i,a,c,s,l,p=e.imageRef||e.videoRef;if(p&&e.containerRef){e.containerRect=e.containerRef.getBoundingClientRect();var d=e.containerRect.width/e.containerRect.height,g=((r=e.imageRef)===null||r===void 0?void 0:r.naturalWidth)||((i=e.videoRef)===null||i===void 0?void 0:i.videoWidth)||0,_=((a=e.imageRef)===null||a===void 0?void 0:a.naturalHeight)||((c=e.videoRef)===null||c===void 0?void 0:c.videoHeight)||0,T=p.offsetWidth<g||p.offsetHeight<_,v=g/_,x=void 0;if(T)switch(e.props.objectFit){default:case"contain":x=d>v?{width:e.containerRect.height*v,height:e.containerRect.height}:{width:e.containerRect.width,height:e.containerRect.width/v};break;case"horizontal-cover":x={width:e.containerRect.width,height:e.containerRect.width/v};break;case"vertical-cover":x={width:e.containerRect.height*v,height:e.containerRect.height};break}else x={width:p.offsetWidth,height:p.offsetHeight};e.mediaSize=f(f({},x),{naturalWidth:g,naturalHeight:_});var R=e.props.cropSize?e.props.cropSize:or(e.mediaSize.width,e.mediaSize.height,e.containerRect.width,e.containerRect.height,e.props.aspect,e.props.rotation);return(((s=e.state.cropSize)===null||s===void 0?void 0:s.height)!==R.height||((l=e.state.cropSize)===null||l===void 0?void 0:l.width)!==R.width)&&e.props.onCropSizeChange&&e.props.onCropSizeChange(R),e.setState({cropSize:R},e.recomputeCropPosition),R}},e.onMouseDown=function(r){r.preventDefault(),document.addEventListener("mousemove",e.onMouseMove),document.addEventListener("mouseup",e.onDragStopped),e.onDragStart(o.getMousePoint(r))},e.onMouseMove=function(r){return e.onDrag(o.getMousePoint(r))},e.onTouchStart=function(r){e.props.onTouchRequest&&!e.props.onTouchRequest(r)||(document.addEventListener("touchmove",e.onTouchMove,{passive:!1}),document.addEventListener("touchend",e.onDragStopped),r.touches.length===2?e.onPinchStart(r):r.touches.length===1&&e.onDragStart(o.getTouchPoint(r.touches[0])))},e.onTouchMove=function(r){r.preventDefault(),r.touches.length===2?e.onPinchMove(r):r.touches.length===1&&e.onDrag(o.getTouchPoint(r.touches[0]))},e.onDragStart=function(r){var i,a,c=r.x,s=r.y;e.dragStartPosition={x:c,y:s},e.dragStartCrop=f({},e.props.crop),(a=(i=e.props).onInteractionStart)===null||a===void 0||a.call(i)},e.onDrag=function(r){var i=r.x,a=r.y;e.rafDragTimeout&&window.cancelAnimationFrame(e.rafDragTimeout),e.rafDragTimeout=window.requestAnimationFrame(function(){if(!!e.state.cropSize&&!(i===void 0||a===void 0)){var c=i-e.dragStartPosition.x,s=a-e.dragStartPosition.y,l={x:e.dragStartCrop.x+c,y:e.dragStartCrop.y+s},p=e.props.restrictPosition?K(l,e.mediaSize,e.state.cropSize,e.props.zoom,e.props.rotation):l;e.props.onCropChange(p)}})},e.onDragStopped=function(){var r,i;e.cleanEvents(),e.emitCropData(),(i=(r=e.props).onInteractionEnd)===null||i===void 0||i.call(r)},e.onWheel=function(r){if(!(e.props.onWheelRequest&&!e.props.onWheelRequest(r))){r.preventDefault();var i=o.getMousePoint(r),a=rr(r).pixelY,c=e.props.zoom-a*e.props.zoomSpeed/200;e.setNewZoom(c,i),e.state.hasWheelJustStarted||e.setState({hasWheelJustStarted:!0},function(){var s,l;return(l=(s=e.props).onInteractionStart)===null||l===void 0?void 0:l.call(s)}),e.wheelTimer&&clearTimeout(e.wheelTimer),e.wheelTimer=window.setTimeout(function(){return e.setState({hasWheelJustStarted:!1},function(){var s,l;return(l=(s=e.props).onInteractionEnd)===null||l===void 0?void 0:l.call(s)})},250)}},e.getPointOnContainer=function(r){var i=r.x,a=r.y;if(!e.containerRect)throw new Error("The Cropper is not mounted");return{x:e.containerRect.width/2-(i-e.containerRect.left),y:e.containerRect.height/2-(a-e.containerRect.top)}},e.getPointOnMedia=function(r){var i=r.x,a=r.y,c=e.props,s=c.crop,l=c.zoom;return{x:(i+s.x)/l,y:(a+s.y)/l}},e.setNewZoom=function(r,i){if(!(!e.state.cropSize||!e.props.onZoomChange)){var a=e.getPointOnContainer(i),c=e.getPointOnMedia(a),s=ie(r,e.props.minZoom,e.props.maxZoom),l={x:c.x*s-a.x,y:c.y*s-a.y},p=e.props.restrictPosition?K(l,e.mediaSize,e.state.cropSize,s,e.props.rotation):l;e.props.onCropChange(p),e.props.onZoomChange(s)}},e.getCropData=function(){if(!e.state.cropSize)return null;var r=e.props.restrictPosition?K(e.props.crop,e.mediaSize,e.state.cropSize,e.props.zoom,e.props.rotation):e.props.crop;return ir(r,e.mediaSize,e.state.cropSize,e.getAspect(),e.props.zoom,e.props.rotation,e.props.restrictPosition)},e.emitCropData=function(){var r=e.getCropData();if(!!r){var i=r.croppedAreaPercentages,a=r.croppedAreaPixels;e.props.onCropComplete&&e.props.onCropComplete(i,a),e.props.onCropAreaChange&&e.props.onCropAreaChange(i,a)}},e.emitCropAreaChange=function(){var r=e.getCropData();if(!!r){var i=r.croppedAreaPercentages,a=r.croppedAreaPixels;e.props.onCropAreaChange&&e.props.onCropAreaChange(i,a)}},e.recomputeCropPosition=function(){if(!!e.state.cropSize){var r=e.props.restrictPosition?K(e.props.crop,e.mediaSize,e.state.cropSize,e.props.zoom,e.props.rotation):e.props.crop;e.props.onCropChange(r),e.emitCropData()}},e}return o.prototype.componentDidMount=function(){window.addEventListener("resize",this.computeSizes),this.containerRef&&(this.props.zoomWithScroll&&this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}),this.containerRef.addEventListener("gesturestart",this.preventZoomSafari),this.containerRef.addEventListener("gesturechange",this.preventZoomSafari)),this.props.disableAutomaticStylesInjection||(this.styleRef=document.createElement("style"),this.styleRef.setAttribute("type","text/css"),this.styleRef.innerHTML=dr,document.head.appendChild(this.styleRef)),this.imageRef&&this.imageRef.complete&&this.onMediaLoad()},o.prototype.componentWillUnmount=function(){var e;window.removeEventListener("resize",this.computeSizes),this.containerRef&&(this.containerRef.removeEventListener("gesturestart",this.preventZoomSafari),this.containerRef.removeEventListener("gesturechange",this.preventZoomSafari)),this.styleRef&&((e=this.styleRef.parentNode)===null||e===void 0||e.removeChild(this.styleRef)),this.cleanEvents(),this.props.zoomWithScroll&&this.clearScrollEvent()},o.prototype.componentDidUpdate=function(e){var r,i,a,c,s,l,p,d,g;e.rotation!==this.props.rotation?(this.computeSizes(),this.recomputeCropPosition()):e.aspect!==this.props.aspect?this.computeSizes():e.zoom!==this.props.zoom?this.recomputeCropPosition():((r=e.cropSize)===null||r===void 0?void 0:r.height)!==((i=this.props.cropSize)===null||i===void 0?void 0:i.height)||((a=e.cropSize)===null||a===void 0?void 0:a.width)!==((c=this.props.cropSize)===null||c===void 0?void 0:c.width)?this.computeSizes():(((s=e.crop)===null||s===void 0?void 0:s.x)!==((l=this.props.crop)===null||l===void 0?void 0:l.x)||((p=e.crop)===null||p===void 0?void 0:p.y)!==((d=this.props.crop)===null||d===void 0?void 0:d.y))&&this.emitCropAreaChange(),e.zoomWithScroll!==this.props.zoomWithScroll&&this.containerRef&&(this.props.zoomWithScroll?this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}):this.clearScrollEvent()),e.video!==this.props.video&&((g=this.videoRef)===null||g===void 0||g.load())},o.prototype.getAspect=function(){var e=this.props,r=e.cropSize,i=e.aspect;return r?r.width/r.height:i},o.prototype.onPinchStart=function(e){var r=o.getTouchPoint(e.touches[0]),i=o.getTouchPoint(e.touches[1]);this.lastPinchDistance=Be(r,i),this.lastPinchRotation=Ge(r,i),this.onDragStart($e(r,i))},o.prototype.onPinchMove=function(e){var r=this,i=o.getTouchPoint(e.touches[0]),a=o.getTouchPoint(e.touches[1]),c=$e(i,a);this.onDrag(c),this.rafPinchTimeout&&window.cancelAnimationFrame(this.rafPinchTimeout),this.rafPinchTimeout=window.requestAnimationFrame(function(){var s=Be(i,a),l=r.props.zoom*(s/r.lastPinchDistance);r.setNewZoom(l,c),r.lastPinchDistance=s;var p=Ge(i,a),d=r.props.rotation+(p-r.lastPinchRotation);r.props.onRotationChange&&r.props.onRotationChange(d),r.lastPinchRotation=p})},o.prototype.render=function(){var e=this,r=this.props,i=r.image,a=r.video,c=r.mediaProps,s=r.transform,l=r.crop,p=l.x,d=l.y,g=r.rotation,_=r.zoom,T=r.cropShape,v=r.showGrid,x=r.style,R=x.containerStyle,X=x.cropAreaStyle,q=x.mediaStyle,U=r.classes,ae=U.containerClassName,se=U.cropAreaClassName,C=U.mediaClassName,M=r.objectFit;return O.createElement("div",{onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart,ref:function(H){return e.containerRef=H},"data-testid":"container",style:R,className:Q("reactEasyCrop_Container",ae)},i?O.createElement("img",f({alt:"",className:Q("reactEasyCrop_Image",M==="contain"&&"reactEasyCrop_Contain",M==="horizontal-cover"&&"reactEasyCrop_Cover_Horizontal",M==="vertical-cover"&&"reactEasyCrop_Cover_Vertical",C)},c,{src:i,ref:function(H){return e.imageRef=H},style:f(f({},q),{transform:s||"translate("+p+"px, "+d+"px) rotate("+g+"deg) scale("+_+")"}),onLoad:this.onMediaLoad})):a&&O.createElement("video",f({autoPlay:!0,loop:!0,muted:!0,className:Q("reactEasyCrop_Video",M==="contain"&&"reactEasyCrop_Contain",M==="horizontal-cover"&&"reactEasyCrop_Cover_Horizontal",M==="vertical-cover"&&"reactEasyCrop_Cover_Vertical",C)},c,{ref:function(H){return e.videoRef=H},onLoadedMetadata:this.onMediaLoad,style:f(f({},q),{transform:s||"translate("+p+"px, "+d+"px) rotate("+g+"deg) scale("+_+")"}),controls:!1}),(Array.isArray(a)?a:[{src:a}]).map(function(Z){return O.createElement("source",f({key:Z.src},Z))})),this.state.cropSize&&O.createElement("div",{style:f(f({},X),{width:this.state.cropSize.width,height:this.state.cropSize.height}),"data-testid":"cropper",className:Q("reactEasyCrop_CropArea",T==="round"&&"reactEasyCrop_CropAreaRound",v&&"reactEasyCrop_CropAreaGrid",se)}))},o.defaultProps={zoom:1,rotation:0,aspect:4/3,maxZoom:fr,minZoom:ur,cropShape:"rect",objectFit:"contain",showGrid:!0,style:{},classes:{},mediaProps:{},zoomSpeed:1,restrictPosition:!0,zoomWithScroll:!0},o.getMousePoint=function(e){return{x:Number(e.clientX),y:Number(e.clientY)}},o.getTouchPoint=function(e){return{x:Number(e.clientX),y:Number(e.clientY)}},o}(O.Component),gr=mr;const vr=({zoom:t,imageUrl:o,onCropComplete:e,onZoomChange:r})=>{const[i,a]=u.exports.useState({x:0,y:0});return n(gr,{image:o,crop:i,zoom:t,cropShape:"round",aspect:1/1,onCropChange:a,onCropComplete:e,onZoomChange:r})},xr=({acceptedFileTypes:t,setFile:o,setFilePath:e,setIsEditing:r})=>{const i=u.exports.useRef(null),a=s=>{s.currentTarget.files&&(e(URL.createObjectURL(s.currentTarget.files[0])),o(s.currentTarget.files[0]),r(!0))};return h(Se,{onClick:()=>{var s;console.log("clicked"),(s=i.current)==null||s.click()},h:"120%",cursor:"pointer",children:[n(ut,{bg:"tranparent",h:"full",w:"full",children:"upload a file"}),n("input",{type:"file",accept:t,ref:i,onChange:s=>a(s),style:{display:"none"}})]})},wr=({onChange:t,value:o,min:e,max:r,step:i})=>h(P,{w:"full",justify:"center",children:[n(We,{fontSize:"30px",_active:{bg:"autoGrey.200"},onClick:()=>{o>e&&t(Nt(o,.1))},children:"-"}),n(It,{sliderValue:o,value:o,min:e,max:r,step:i,onChange:a=>t(a),w:"50%"}),n(We,{fontSize:"20px",_active:{bg:"autoGrey.200"},onClick:()=>{o<r&&t(Wt(o,.1))},children:"+"})]}),Cr=t=>new Promise((o,e)=>{const r=new Image;r.addEventListener("load",()=>o(r)),r.addEventListener("error",i=>e(i)),r.setAttribute("crossOrigin","anonymous"),r.src=t});function yr(t){return t*Math.PI/180}async function Sr(t,o,e=0){const r=await Cr(t),i=document.createElement("canvas"),a=i.getContext("2d"),c=Math.max(r.width,r.height),s=2*(c/2*Math.sqrt(2));i.width=s,i.height=s,a==null||a.translate(s/2,s/2),a==null||a.rotate(yr(e)),a==null||a.translate(-s/2,-s/2),a==null||a.drawImage(r,s/2-r.width*.5,s/2-r.height*.5);const l=a==null?void 0:a.getImageData(0,0,s,s);return i.width=o.width,i.height=o.height,l&&(a==null||a.putImageData(l,Math.round(0-s/2+r.width*.5-o.x),Math.round(0-s/2+r.height*.5-o.y))),new Promise(p=>{i.toBlob(d=>{p(d)},"image/jpeg")})}const Ye=({toast:t,message:o})=>{t({title:o,status:"error",duration:2e3,isClosable:!0,position:"top"})},Xe=({})=>{const[t,o]=u.exports.useState(1.3),[e,r]=u.exports.useState(null),[i,a]=u.exports.useState(null),[c,s]=u.exports.useState(""),[l,p]=u.exports.useState(!1),[d,g]=u.exports.useState(null),[_,T]=u.exports.useState(!1),v=z(C=>C.userInfoSlice.avatar),x=be(),R=$(),X=()=>{l?(p(!1),s("")):R(Je())},q=C=>{o(C)},U=u.exports.useCallback((C,M)=>{r(M)},[]),ae=async()=>{const C=await Sr(c,e);o(1),s(URL.createObjectURL(C)),p(!1),g(C)};u.exports.useEffect(()=>{v&&(s(v),p(!0))},[]);const se=async()=>{const C=new FormData;d?(C.append("profile-avatar",d,"coppedImage.jpg"),T(!0),R(ft(C)).unwrap().then(()=>{T(!1),X()}).catch(M=>{console.log("error: ",M),T(!1),Ye({toast:x,message:"Unable to save photo. Please, try later"})})):Ye({toast:x,message:"Please Choose the picture."})};return h(N,{children:[h(P,{position:"absolute",left:"10px",top:"20px",spacing:"2",children:[n(Ve,{position:"relative",top:"0",left:"0",as:Dt,boxSize:6}),n(S,{fontSize:"20px",children:"Profile Picture"})]}),h(b,{w:"full",pt:"32px",spacing:"2",children:[n(I,{p:"8",children:n(Se,{h:"180px",w:"180px",borderRadius:"1000px",bg:"autoBlue.400",position:"relative",overflow:"hidden",children:n(vr,{imageUrl:c,zoom:t,onZoomChange:q,onCropComplete:U})})}),n(xr,{setFilePath:s,setFile:a,acceptedFileTypes:"image/*",setIsEditing:p}),l&&h(N,{children:[n(m,{fontSize:"16px",children:"Scale and Crop"}),n(wr,{min:1,max:3,step:.1,value:t,onChange:o})]}),h(P,{w:"full",pt:"24px",children:[n(De,{bg:"autoGrey.400",color:"black",_active:{bg:"autoGrey.600"},onClick:X,children:"Cancel"}),n(De,{isLoading:_,onClick:()=>{l?ae():se()},children:l?"Crop":"Save"})]})]})]})},br=({})=>{const{isChangeProfilePictureOpen:t,screen:o}=z(a=>a.globalAppState),{isDesktop:e}=o,r=$(),i=()=>r(Je());return n(N,{children:e?h(mt,{isOpen:t,onClose:i,isCentered:!0,blockScrollOnMount:!0,children:[n(Ne,{}),h(gt,{p:"32px 48px",w:"450px",children:[n(Ve,{top:"30px",right:"48px"}),n(Xe,{}),n(Ie,{p:"0"})]})]}):h(vt,{isOpen:t,placement:"bottom",onClose:i,size:"full",children:[n(Ne,{}),n(xt,{maxH:"100%",children:n(Ie,{children:n(I,{h:"full",children:n(b,{w:"full",children:n(Xe,{})})})})})]})})},_r=({})=>{const[t,o]=u.exports.useState(""),{path:e}=ye(),r=$(),{avatar:i,fullName:a,phone:c}=z(s=>s.userInfoSlice);return u.exports.useEffect(()=>{i&&o(i)},[i]),h(Y,{bg:"white",p:"0",w:["full",null,null,"200px"],maxH:"400px",children:[n(Se,{p:"32px",children:n(At,{username:a,image:t,secondaryText:`+995 ${c}`,size:"70px",showPhotoChange:!0})}),n(br,{}),h(b,{pb:"24px",spacing:"0",children:[n(pe,{to:`${e}/order-list`,children:"Order List"}),n(pe,{to:`${e}/favourites`,children:"Favourites"}),n(pe,{to:"/home",clickCallback:()=>r(wt()),children:"Log out"})]})]})},Pr=({car:t})=>{const o=Ce();return n(Y,{bg:"autoGrey.500",w:"full",p:"0",cursor:"pointer",onClick:()=>o.push(`/catalog/car/${t.id}`),children:h(P,{w:"full",justify:"space-between",p:"16px",align:"stretch",children:[h(P,{spacing:"4",minW:"220px",p:"0",children:[n(ee,{ratio:78/66,minW:"78px",children:n(te,{src:t==null?void 0:t.imgUrls[0],borderRadius:"8px",fallbackSrc:"https://via.placeholder.com/150"})}),h(b,{align:"flex-start",children:[n(E,{children:"Name"}),h(m,{fontSize:"16px",fontWeight:"500",children:[t.m?B(t.m):n(y,{})," ",t.mG?B(t.mG):n(y,{pl:"2",children:""})]})]})]}),h(b,{align:"flex-start",w:"full",maxW:"80px",pt:"2",children:[n(E,{children:"Year"}),n(m,{fontSize:"16px",fontWeight:"500",children:t.y||n(y,{})})]}),h(b,{align:"flex-start",w:"full",pt:"2",children:[n(E,{children:"Damage"}),n(m,{fontSize:"16px",fontWeight:"500",children:t.dmg?n(N,{children:B(t.dmg)}):n(y,{})})]}),h(b,{align:"flex-start",w:"full",pt:"2",children:[n(E,{children:"Location"}),n(m,{fontSize:"16px",fontWeight:"500",children:t.lC||n(y,{})})]}),h(b,{align:"flex-start",w:"full",pt:"2",children:[n(E,{children:"Engine"}),n(m,{fontSize:"16px",fontWeight:"500",children:t.eng||n(y,{})})]}),n(Ot,{carId:t.id,h:"46px",w:"45px"})]})})},Er=({})=>{const{favouriteCars:t}=z(e=>e.userInfoSlice),{favouriteCarsFetching:o}=z(e=>e.userInfoSlice);return n(Y,{w:"full",p:"32px",children:n(b,{w:"full",spacing:"4",children:o?n(I,{w:"full",h:"300px",children:n(_e,{})}):t.length?t.map(e=>n(Pr,{car:e},e.id)):n(I,{w:"full",h:"300px",children:n(S,{children:"Your Favourites list is empty"})})})})},Rr=({car:t})=>{const o=t.imgUrls,e=Ce();return n(Y,{w:"full",p:"4",onClick:()=>e.push(`/catalog/car/${t.id}`),children:h(b,{spacing:"4",children:[n(kt,{model:`${t.m} ${t.mG}`,id:t.id,year:Number(t.y)}),h(Ct,{gridTemplateAreas:'"a a b" "a a c"',w:"full",maxH:"130px",gap:"2",children:[n(ee,{overflow:"hidden",borderRadius:"8px",ratio:191/130,w:"full",gridArea:"a",maxH:"130px",children:n(te,{src:o[0]?o[0]:void 0,fallbackSrc:ce,borderRadius:"8px"})}),n(ee,{ratio:191/130,w:"full",gridArea:"b",maxH:"61px",children:n(te,{src:o[1]?o[1]:void 0,fallbackSrc:ce,borderRadius:"8px"})}),n(ee,{ratio:191/130,w:"full",gridArea:"c",maxH:"61px",children:n(te,{src:o[2]?o[2]:void 0,fallbackSrc:ce,borderRadius:"8px"})})]}),h(b,{divider:n(yt,{}),w:"full",children:[h(P,{w:"full",justify:"space-between",children:[n(E,{children:"Damage"}),n(S,{children:t.dmg?Lt(t.dmg):n(y,{})})]}),h(P,{w:"full",justify:"space-between",children:[n(E,{children:"Mileage"}),n(S,{children:t.od?Le(t.od):n(y,{})})]}),h(P,{w:"full",justify:"space-between",children:[n(E,{children:"Location"}),n(S,{children:t.lC?B(t.lC):n(y,{})})]}),h(P,{w:"full",justify:"space-between",children:[n(E,{children:"Engine"}),n(S,{children:t.eng?B(t.eng.toString()):n(y,{})})]}),h(P,{w:"full",justify:"space-between",children:[n(E,{children:"Esimate Price"}),n(S,{children:t.price?h(N,{children:["$ ",Le(t.price)]}):n(y,{})})]}),h(P,{w:"full",justify:"space-between",children:[n(E,{children:"Total Price"}),n(S,{children:"$20 000"})]})]})]})})},Mr=({})=>{const{favouriteCars:t}=z(o=>o.userInfoSlice);return n(N,{children:t.length?n(Ft,{pt:"48px",children:t.map(o=>n(Rr,{car:o},o.id))}):n(I,{children:n(S,{children:"Your favourites list is empty"})})})},Tr=({})=>{const{isDesktop:t}=Ke(),o=$();return u.exports.useEffect(()=>{o(St("")),o(bt(""))},[]),n(N,{children:t?n(Er,{}):n(Mr,{})})},zr=({})=>n(Tr,{}),Ar=({orderList:t})=>{const[o,e]=u.exports.useState([]),r=z(c=>c.orderedCars.fetching),i=be(),a=c=>{o.includes(c)?e(o.filter(s=>s!==c)):e(o.concat(c))};return n(Y,{p:"32px",w:"full",children:r?n(I,{w:"full",h:"full",children:n(_e,{})}):t.length?h(Bt,{children:[n(Gt,{children:h(ke,{opacity:"0.5",fontSize:"14px",fontWeight:"light",children:[n(A,{p:[null,null,null,"2","4"],isTruncated:!0,fontWeight:"light",children:n(m,{textTransform:"capitalize",children:"Order Id"})}),n(A,{fontWeight:"light",px:"2",children:n(m,{textTransform:"capitalize",children:"Name"})}),n(A,{fontWeight:"light",px:"2",children:n(m,{textTransform:"capitalize",children:"Purchase date"})}),n(A,{isTruncated:!0,fontWeight:"light",children:n(m,{textTransform:"capitalize",children:"Delivery Date"})}),n(A,{fontWeight:"light",p:[null,null,null,"2","4"],children:n(m,{textTransform:"capitalize",children:"Location"})}),n(A,{isTruncated:!0,p:"4",fontWeight:"light",children:n(m,{textTransform:"capitalize",children:"Total Price"})}),n(A,{fontWeight:"light",children:n(m,{textTransform:"capitalize",children:"Status"})}),n(A,{fontWeight:"light"})]})}),n($t,{children:t.map((c,s)=>h(ke,{pt:"50px",_hover:{bg:"autoGrey.100"},children:[n(D,{w:"full",px:"4",title:c.id,py:[null,null,"8","8",""],children:n(S,{w:"80px",isTruncated:!0,cursor:"pointer",onClick:()=>navigator.clipboard.writeText(c.id).then(()=>i({title:"Id copied to the clipboard",status:"success",position:"top"})),children:c.id})}),n(D,{title:c.carName,px:"",children:n(m,{noOfLines:o.includes(s)?10:1,fontSize:"16px",w:"100px",children:c.carName})}),n(D,{px:"2",children:c.createdAt?Oe(c.createdAt.toString()):n(y,{})}),h(D,{children:[c.deliveryAt?Oe(c.deliveryAt.toString()):n(y,{})," "]}),h(D,{p:[null,null,null,"2","4"],children:[c.location," "]}),n(D,{px:"4",title:`$ ${c.price}`,children:h(m,{fontSize:"inherit",maxW:"80px",isTruncated:!0,children:["$ ",c.price*1]})}),h(D,{children:[n(m,{whiteSpace:"nowrap",children:c.status})," "]}),n(D,{p:"0",children:n(qe,{variant:"link",minH:"50px",onClick:()=>a(s),children:n(_t,{transform:o.includes(s)?"rotate(180deg)":"none",transition:"all .2s"})})})]},s))})]}):n(I,{w:"full",h:"full",children:n(S,{children:"Your order list is empty"})})})},Dr=({orderList:t})=>{const o=z(e=>e.orderedCars.fetching);return n(b,{w:"full",spacing:"24px",pt:"48px",children:o?n(I,{children:n(_e,{})}):t.length?t.map((e,r)=>n(jt,{order:e},r)):n(S,{children:"Your order list is empty"})})},Nr=({})=>{const[t,o]=u.exports.useState([]),{isDesktop:e}=Ke(),r=z(c=>c.userInfoSlice.id),i=be(),a=$();return u.exports.useEffect(()=>{r&&a(Pt(r)).unwrap().then(c=>o(c)).catch(c=>i({title:c,status:"error",position:"top"}))},[r]),n(N,{children:e?n(Ar,{orderList:t}):n(Dr,{orderList:t})})},Jr=()=>{const{path:t}=ye();return h(Et,{pt:["16px","26px","32px","48px"],children:[n(zt,{}),h(Rt,{direction:["column",null,null,"row"],spacing:"24px",w:"full",children:[n(_r,{}),h(Mt,{children:[n(le,{exact:!0,path:t,render:()=>n(Tt,{to:`${t}/order-list`})}),n(le,{exact:!0,path:`${t}/order-list`,render:()=>n(Nr,{})}),n(le,{exact:!0,path:`${t}/favourites`,render:()=>n(zr,{})})]})]})]})};export{Jr as UserProfilePage,Jr as default};