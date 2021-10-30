var Ie=Object.defineProperty,Ne=Object.defineProperties;var ze=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var te=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable;var re=(e,r,n)=>r in e?Ie(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,B=(e,r)=>{for(var n in r||(r={}))te.call(r,n)&&re(e,n,r[n]);if($)for(var n of $(r))ne.call(r,n)&&re(e,n,r[n]);return e},le=(e,r)=>Ne(e,ze(r));var O=(e,r)=>{var n={};for(var t in e)te.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&$)for(var t of $(e))r.indexOf(t)<0&&ne.call(e,t)&&(n[t]=e[t]);return n};import{r as u,R as i,L as ie}from"./vendor.a1e1707f.js";import{k as L,p as je,u as Be,q as oe,T as F,l as Re}from"./PublicLayout.b7c9c159.js";import{A as ae,B as We}from"./ButtonHeart.16c37d07.js";import{S as A,N as Me,P as Pe}from"./swiper.dc36158d.js";import{k as J,G as Ae,y as se,m as G,l as ce,x as Te,a0 as He,o as Ve,M as De,a1 as $e,B as W,H as M}from"./index.ed2bcab6.js";import{V as k,H as T,S as Le,F as Fe}from"./text.bf8bcfd3.js";import{C as ue}from"./center.710b22a4.js";import{a as Ge}from"./input.aa926013.js";import{B as ke}from"./button.65ebee7d.js";import{C as Ze,I as Ke}from"./Card.4a7c9f8a.js";function Z(){return Z=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},Z.apply(this,arguments)}function pe(e,r){if(e==null)return{};var n={},t=Object.keys(e),a,o;for(o=0;o<t.length;o++)a=t[o],!(r.indexOf(a)>=0)&&(n[a]=e[a]);return n}var qe=J((e,r)=>{var n=Ae("Divider",e),{borderLeftWidth:t,borderBottomWidth:a,borderTopWidth:o,borderRightWidth:s,borderWidth:h,borderStyle:f,borderColor:l}=n,p=pe(n,["borderLeftWidth","borderBottomWidth","borderTopWidth","borderRightWidth","borderWidth","borderStyle","borderColor"]),d=se(e),{className:g,orientation:x="horizontal",__css:S}=d,_=pe(d,["className","orientation","__css"]),w={vertical:{borderLeftWidth:t||s||h||"1px",height:"100%"},horizontal:{borderBottomWidth:a||o||h||"1px",width:"100%"}};return u.exports.createElement(G.hr,Z({ref:r,"aria-orientation":x},_,{__css:Z({},p,{border:"0",borderColor:l,borderStyle:f},w[x],S),className:ce("chakra-divider",g)}))});function y(){return y=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},y.apply(this,arguments)}function Q(e,r){if(e==null)return{};var n={},t=Object.keys(e),a,o;for(o=0;o<t.length;o++)a=t[o],!(r.indexOf(a)>=0)&&(n[a]=e[a]);return n}var Ye=J((e,r)=>{var{children:n,placeholder:t,className:a}=e,o=Q(e,["children","placeholder","className"]);return u.exports.createElement(G.select,y({},o,{ref:r,className:ce("chakra-select",a)}),t&&u.exports.createElement("option",{value:""},t),n)}),Je=J((e,r)=>{var n=Te("Select",e),t=se(e),{rootProps:a,placeholder:o,icon:s,color:h,height:f,h:l,minH:p,minHeight:d,iconColor:g,iconSize:x}=t,S=Q(t,["rootProps","placeholder","icon","color","height","h","minH","minHeight","iconColor","iconSize","isFullWidth"]),[_,w]=He(S,$e),b=Ge(w),c={width:"100%",height:"fit-content",position:"relative",color:h},N=Ve({},n.field,{paddingEnd:"2rem",_focus:{zIndex:"unset"}});return u.exports.createElement(G.div,y({className:"chakra-select__wrapper",__css:c},_,a),u.exports.createElement(Ye,y({ref:r,height:l!=null?l:f,minH:p!=null?p:d,placeholder:o},b,{__css:N}),e.children),u.exports.createElement(Xe,y({"data-disabled":De(b.disabled)},(g||h)&&{color:g||h},{__css:n.icon},x&&{fontSize:x}),s))}),Qe=e=>u.exports.createElement("svg",y({viewBox:"0 0 24 24"},e),u.exports.createElement("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})),Ue=G("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),Xe=e=>{var{children:r=u.exports.createElement(Qe,null)}=e,n=Q(e,["children"]),t=u.exports.cloneElement(r,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return u.exports.createElement(Ue,y({},n,{className:"chakra-select__icon-wrapper"}),u.exports.isValidElement(r)?t:null)};function et(e,{threshold:r=0,root:n=null,rootMargin:t="0%",freezeOnceVisible:a=!1}){const[o,s]=u.exports.useState(),h=(o==null?void 0:o.isIntersecting)&&a,f=([l])=>{s(l)};return u.exports.useEffect(()=>{const l=e==null?void 0:e.current;if(!!!window.IntersectionObserver||h||!l)return;const d={threshold:r,root:n,rootMargin:t},g=new IntersectionObserver(f,d);return g.observe(l),()=>g.disconnect()},[e,r,n,t,h]),o}function R(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function I(e,r){const n=["__proto__","constructor","prototype"];Object.keys(r).filter(t=>n.indexOf(t)<0).forEach(t=>{typeof e[t]=="undefined"?e[t]=r[t]:R(r[t])&&R(e[t])&&Object.keys(r[t]).length>0?r[t].__swiper__?e[t]=r[t]:I(e[t],r[t]):e[t]=r[t]})}function de(e={}){return e.navigation&&typeof e.navigation.nextEl=="undefined"&&typeof e.navigation.prevEl=="undefined"}function fe(e={}){return e.pagination&&typeof e.pagination.el=="undefined"}function me(e={}){return e.scrollbar&&typeof e.scrollbar.el=="undefined"}function he(e=""){const r=e.split(" ").map(t=>t.trim()).filter(t=>!!t),n=[];return r.forEach(t=>{n.indexOf(t)<0&&n.push(t)}),n.join(" ")}const ge=["modules","init","_direction","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","_spaceBetween","_slidesPerView","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_preloadImages","updateOnImagesReady","_loop","_loopAdditionalSlides","_loopedSlides","_loopFillGroupWithBlank","loopPreventsSlide","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideBlankClass","slideActiveClass","slideDuplicateActiveClass","slideVisibleClass","slideDuplicateClass","slideNextClass","slideDuplicateNextClass","slidePrevClass","slideDuplicatePrevClass","wrapperClass","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","lazy","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom"];function tt(e={}){const r={on:{}},n={},t={};I(r,A.defaults),I(r,A.extendedDefaults),r._emitClasses=!0,r.init=!1;const a={},o=ge.map(s=>s.replace(/_/,""));return Object.keys(e).forEach(s=>{o.indexOf(s)>=0?R(e[s])?(r[s]={},t[s]={},I(r[s],e[s]),I(t[s],e[s])):(r[s]=e[s],t[s]=e[s]):s.search(/on[A-Z]/)===0&&typeof e[s]=="function"?n[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:a[s]=e[s]}),["navigation","pagination","scrollbar"].forEach(s=>{r[s]===!0&&(r[s]={}),r[s]===!1&&delete r[s]}),{params:r,passedParams:t,rest:a,events:n}}function nt(e){return new A(e)}function rt({el:e,nextEl:r,prevEl:n,paginationEl:t,scrollbarEl:a,swiper:o},s){de(s)&&r&&n&&(o.params.navigation.nextEl=r,o.originalParams.navigation.nextEl=r,o.params.navigation.prevEl=n,o.originalParams.navigation.prevEl=n),fe(s)&&t&&(o.params.pagination.el=t,o.originalParams.pagination.el=t),me(s)&&a&&(o.params.scrollbar.el=a,o.originalParams.scrollbar.el=a),o.init(e)}function xe(e,r){let n=r.slidesPerView;if(r.breakpoints){const a=A.prototype.getBreakpoint(r.breakpoints),o=a in r.breakpoints?r.breakpoints[a]:void 0;o&&o.slidesPerView&&(n=o.slidesPerView)}let t=Math.ceil(parseFloat(r.loopedSlides||n,10));return t+=r.loopAdditionalSlides,t>e.length&&(t=e.length),t}function lt(e,r,n){const t=r.map((f,l)=>i.cloneElement(f,{swiper:e,"data-swiper-slide-index":l}));function a(f,l,p){return i.cloneElement(f,{key:`${f.key}-duplicate-${l}-${p}`,className:`${f.props.className||""} ${n.slideDuplicateClass}`})}if(n.loopFillGroupWithBlank){const f=n.slidesPerGroup-t.length%n.slidesPerGroup;if(f!==n.slidesPerGroup)for(let l=0;l<f;l+=1){const p=i.createElement("div",{className:`${n.slideClass} ${n.slideBlankClass}`});t.push(p)}}n.slidesPerView==="auto"&&!n.loopedSlides&&(n.loopedSlides=t.length);const o=xe(t,n),s=[],h=[];return t.forEach((f,l)=>{l<o&&h.push(a(f,l,"prepend")),l<t.length&&l>=t.length-o&&s.push(a(f,l,"append"))}),e&&(e.loopedSlides=o),[...s,...t,...h]}function it(e,r,n,t){const a=[];if(!r)return a;const o=l=>{a.indexOf(l)<0&&a.push(l)},s=t.map(l=>l.key),h=n.map(l=>l.key);return s.join("")!==h.join("")&&o("children"),t.length!==n.length&&o("children"),ge.filter(l=>l[0]==="_").map(l=>l.replace(/_/,"")).forEach(l=>{if(l in e&&l in r)if(R(e[l])&&R(r[l])){const p=Object.keys(e[l]),d=Object.keys(r[l]);p.length!==d.length?o(l):(p.forEach(g=>{e[l][g]!==r[l][g]&&o(l)}),d.forEach(g=>{e[l][g]!==r[l][g]&&o(l)}))}else e[l]!==r[l]&&o(l)}),a}function ve(e){const r=[];return i.Children.toArray(e).forEach(n=>{n.type&&n.type.displayName==="SwiperSlide"?r.push(n):n.props&&n.props.children&&ve(n.props.children).forEach(t=>r.push(t))}),r}function ot(e){const r=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return i.Children.toArray(e).forEach(t=>{if(t.type&&t.type.displayName==="SwiperSlide")r.push(t);else if(t.props&&t.props.slot&&n[t.props.slot])n[t.props.slot].push(t);else if(t.props&&t.props.children){const a=ve(t.props.children);a.length>0?a.forEach(o=>r.push(o)):n["container-end"].push(t)}else n["container-end"].push(t)}),{slides:r,slots:n}}function at({swiper:e,slides:r,passedParams:n,changedParams:t,nextEl:a,prevEl:o,scrollbarEl:s,paginationEl:h}){const f=t.filter(m=>m!=="children"&&m!=="direction"),{params:l,pagination:p,navigation:d,scrollbar:g,virtual:x,thumbs:S}=e;let _,w,b,c,N;t.includes("thumbs")&&n.thumbs&&n.thumbs.swiper&&l.thumbs&&!l.thumbs.swiper&&(_=!0),t.includes("controller")&&n.controller&&n.controller.control&&l.controller&&!l.controller.control&&(w=!0),t.includes("pagination")&&n.pagination&&(n.pagination.el||h)&&(l.pagination||l.pagination===!1)&&p&&!p.el&&(b=!0),t.includes("scrollbar")&&n.scrollbar&&(n.scrollbar.el||s)&&(l.scrollbar||l.scrollbar===!1)&&g&&!g.el&&(c=!0),t.includes("navigation")&&n.navigation&&(n.navigation.prevEl||o)&&(n.navigation.nextEl||a)&&(l.navigation||l.navigation===!1)&&d&&!d.prevEl&&!d.nextEl&&(N=!0);const V=m=>{!e[m]||(e[m].destroy(),m==="navigation"?(l[m].prevEl=void 0,l[m].nextEl=void 0,e[m].prevEl=void 0,e[m].nextEl=void 0):(l[m].el=void 0,e[m].el=void 0))};f.forEach(m=>{if(R(l[m])&&R(n[m]))I(l[m],n[m]);else{const z=n[m];(z===!0||z===!1)&&(m==="navigation"||m==="pagination"||m==="scrollbar")?z===!1&&V(m):l[m]=n[m]}}),t.includes("children")&&x&&l.virtual.enabled?(x.slides=r,x.update(!0)):t.includes("children")&&e.lazy&&e.params.lazy.enabled&&e.lazy.load(),_&&S.init()&&S.update(!0),w&&(e.controller.control=l.controller.control),b&&(h&&(l.pagination.el=h),p.init(),p.render(),p.update()),c&&(s&&(l.scrollbar.el=s),g.init(),g.updateSize(),g.setTranslate()),N&&(a&&(l.navigation.nextEl=a),o&&(l.navigation.prevEl=o),d.init(),d.update()),t.includes("allowSlideNext")&&(e.allowSlideNext=n.allowSlideNext),t.includes("allowSlidePrev")&&(e.allowSlidePrev=n.allowSlidePrev),t.includes("direction")&&e.changeDirection(n.direction,!1),e.update()}function st(e){!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.lazy&&e.params.lazy.enabled&&e.lazy.load(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())}function ct(e,r,n){if(!n)return null;const t=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`};return r.filter((a,o)=>o>=n.from&&o<=n.to).map(a=>i.cloneElement(a,{swiper:e,style:t}))}function H(e,r){return typeof window=="undefined"?u.exports.useEffect(e,r):u.exports.useLayoutEffect(e,r)}function U(){return U=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},U.apply(this,arguments)}const be=u.exports.forwardRef((h={},s)=>{var f=h,{className:e,tag:r="div",wrapperTag:n="div",children:t,onSwiper:a}=f,o=O(f,["className","tag","wrapperTag","children","onSwiper"]);let l=!1;const[p,d]=u.exports.useState("swiper"),[g,x]=u.exports.useState(null),[S,_]=u.exports.useState(!1),w=u.exports.useRef(!1),b=u.exports.useRef(null),c=u.exports.useRef(null),N=u.exports.useRef(null),V=u.exports.useRef(null),m=u.exports.useRef(null),z=u.exports.useRef(null),K=u.exports.useRef(null),q=u.exports.useRef(null),{params:E,passedParams:Y,rest:_e,events:j}=tt(o),{slides:C,slots:D}=ot(t),ee=()=>{_(!S)};if(Object.assign(E.on,{_containerClasses(v,ye){d(ye)}}),!b.current&&(Object.assign(E.on,j),l=!0,c.current=nt(E),c.current.loopCreate=()=>{},c.current.loopDestroy=()=>{},E.loop&&(c.current.loopedSlides=xe(C,E)),c.current.virtual&&c.current.params.virtual.enabled)){c.current.virtual.slides=C;const v={cache:!1,slides:C,renderExternal:x,renderExternalUpdate:!1};I(c.current.params.virtual,v),I(c.current.originalParams.virtual,v)}c.current&&c.current.on("_beforeBreakpoint",ee);const we=()=>{l||!j||!c.current||Object.keys(j).forEach(v=>{c.current.on(v,j[v])})},Ce=()=>{!j||!c.current||Object.keys(j).forEach(v=>{c.current.off(v,j[v])})};u.exports.useEffect(()=>()=>{c.current&&c.current.off("_beforeBreakpoint",ee)}),u.exports.useEffect(()=>{!w.current&&c.current&&(c.current.emitSlidesClasses(),w.current=!0)}),H(()=>{if(s&&(s.current=b.current),!!b.current)return rt({el:b.current,nextEl:m.current,prevEl:z.current,paginationEl:K.current,scrollbarEl:q.current,swiper:c.current},E),a&&a(c.current),()=>{c.current&&!c.current.destroyed&&c.current.destroy(!0,!1)}},[]),H(()=>{we();const v=it(Y,N.current,C,V.current);return N.current=Y,V.current=C,v.length&&c.current&&!c.current.destroyed&&at({swiper:c.current,slides:C,passedParams:Y,changedParams:v,nextEl:m.current,prevEl:z.current,scrollbarEl:q.current,paginationEl:K.current}),()=>{Ce()}}),H(()=>{st(c.current)},[g]);function Oe(){return E.virtual?ct(c.current,C,g):!E.loop||c.current&&c.current.destroyed?C.map(v=>i.cloneElement(v,{swiper:c.current})):lt(c.current,C,E)}return i.createElement(r,U({ref:b,className:he(`${p}${e?` ${e}`:""}`)},_e),D["container-start"],de(E)&&i.createElement(i.Fragment,null,i.createElement("div",{ref:z,className:"swiper-button-prev"}),i.createElement("div",{ref:m,className:"swiper-button-next"})),me(E)&&i.createElement("div",{ref:q,className:"swiper-scrollbar"}),fe(E)&&i.createElement("div",{ref:K,className:"swiper-pagination"}),i.createElement(n,{className:"swiper-wrapper"},D["wrapper-start"],Oe(),D["wrapper-end"]),D["container-end"])});be.displayName="Swiper";function X(){return X=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},X.apply(this,arguments)}const P=u.exports.forwardRef((f={},h)=>{var l=f,{tag:e="div",children:r,className:n="",swiper:t,zoom:a,virtualIndex:o}=l,s=O(l,["tag","children","className","swiper","zoom","virtualIndex"]);const p=u.exports.useRef(null),[d,g]=u.exports.useState("swiper-slide");function x(w,b,c){b===p.current&&g(c)}H(()=>{if(h&&(h.current=p.current),!(!p.current||!t)){if(t.destroyed){d!=="swiper-slide"&&g("swiper-slide");return}return t.on("_slideClass",x),()=>{!t||t.off("_slideClass",x)}}}),H(()=>{t&&p.current&&g(t.getSlideClasses(p.current))},[t]);let S;typeof r=="function"&&(S={isActive:d.indexOf("swiper-slide-active")>=0||d.indexOf("swiper-slide-duplicate-active")>=0,isVisible:d.indexOf("swiper-slide-visible")>=0,isDuplicate:d.indexOf("swiper-slide-duplicate")>=0,isPrev:d.indexOf("swiper-slide-prev")>=0||d.indexOf("swiper-slide-duplicate-prev")>=0,isNext:d.indexOf("swiper-slide-next")>=0||d.indexOf("swiper-slide-duplicate-next")>=0});const _=()=>typeof r=="function"?r(S):r;return i.createElement(e,X({ref:p,className:he(`${d}${n?` ${n}`:""}`),"data-swiper-slide-index":o},s),a?i.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof a=="number"?a:void 0},_()):_())});P.displayName="SwiperSlide";const Ee=L({displayName:"DropdownIcon",viewBox:"0 0 25 9",path:i.createElement(i.Fragment,null,i.createElement("path",{width:"10",height:"11",id:"dropdown",d:"M16.191,18.93l7.562-7.28a1.463,1.463,0,0,1,2.019,0,1.349,1.349,0,0,1,0,1.947L17.2,21.846a1.468,1.468,0,0,1-1.971.04L6.6,13.6a1.346,1.346,0,0,1,0-1.947,1.463,1.463,0,0,1,2.019,0Z",transform:"translate(-6.188 -11.246)",opacity:"1"}))}),Se=u.exports.forwardRef((o,a)=>{var s=o,{isVisible:e,zIndex:r="2",side:n}=s,t=O(s,["isVisible","zIndex","side"]);return i.createElement(je,B({position:"absolute",right:n==="right"?"0":"null",left:n==="left"?"0":"null",zIndex:r,ref:a,icon:i.createElement(Ee,{fill:"white",boxSize:"5",ml:"5px"}),borderRadius:"none",transform:n==="right"?"rotate(-90deg)":"rotate(270deg)",bg:"black",w:{md:"50px","2xl":"70px"},mr:n==="right"?{md:"-10px","2xl":"-15px"}:"0px",ml:n==="left"?{md:"-10px","2xl":"-15px"}:"0px",borderTopRadius:n==="right"?"100px":"0px",borderBottomRadius:n==="left"?"100px":"0px",opacity:".65",display:e?"block":"none",_hover:{bg:"black"},_active:{bg:"black",opacity:".9"}},t))});A.use([Me,Pe]);const ut=()=>{const e=u.exports.useRef(null),r=u.exports.useRef(null),[n,t]=u.exports.useState(!1),[a]=Be("(min-width: 1024px)");return i.createElement(ae,{ratio:311/292,w:"full",overflow:"hidden",borderRadius:"md",maxH:["192px",null,null,"160px","190px","218px"],onMouseEnter:()=>{a&&t(!0)},onMouseLeave:()=>t(!1)},i.createElement(be,{className:"CarImagesSwiper",slidesPerView:1,spaceBetween:3,pagination:!0,onInit:o=>{o.params.navigation.prevEl=e.current,o.params.navigation.nextEl=r.current,o.navigation.init(),o.navigation.update()}},i.createElement(P,null,i.createElement(W,{backgroundImage:"https://stat.overdrive.in/wp-content/odgallery/2020/06/57263_2020_Mercedes_Benz_GLS.jpg",backgroundSize:"cover",backgroundPosition:"center",w:"full",h:"full"})),i.createElement(P,null,i.createElement(W,{backgroundImage:"https://media.istockphoto.com/photos/generic-red-suv-on-a-white-background-side-view-picture-id1157655660?k=20&m=1157655660&s=612x612&w=0&h=WOtAthbmJ9iG1zbKo4kNUsAGMe6-xM-E7a8TMxb5xmk=",backgroundSize:"cover",backgroundPosition:"center",w:"100%",h:"full"})),i.createElement(P,null,i.createElement(W,{backgroundImage:"https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",backgroundSize:"cover",backgroundPosition:"center",w:"100%",h:"full"})),i.createElement(P,null,i.createElement(W,{backgroundImage:"https://media.istockphoto.com/photos/classic-car-picture-id466771069?k=20&m=466771069&s=612x612&w=0&h=BFsJcpBuT0Ijm2VZm9FfLsEkWv5YKIuvcDlf8jVk7MQ=",backgroundSize:"cover",backgroundPosition:"center",w:"100%",h:"full"})),i.createElement(P,null,i.createElement(W,{backgroundImage:"https://media.wired.com/photos/5d09594a62bcb0c9752779d9/master/pass/Transpo_G70_TA-518126.jpg",backgroundSize:"cover",backgroundPosition:"center",w:"100%",h:"full"})),i.createElement(Se,{isVisible:n,ref:r,side:"right","aria-label":"next slide"}),i.createElement(Se,{isVisible:n,ref:e,side:"left","aria-label":"previous slide"})))},wt=({car:e})=>{const r=u.exports.useRef(null),n=et(r,{});return n==null||n.isIntersecting,u.exports.useEffect(()=>{},[]),i.createElement(W,{ref:r,w:"full",bg:"white",borderRadius:"8px",p:"19px",maxW:["388px","343px",null,"324px","388px","398px"]},i.createElement(k,{w:"full",spacing:["19px",null,null,"19px","15px"]},i.createElement(T,{justifyContent:"space-between",w:"full"},i.createElement(k,{alignItems:"flex-start",spacing:"0"},i.createElement(M,{fontSize:["16px",null,null,"18px",null,"24px"],fontWeight:"400",maxW:"220px",isTruncated:!0,_hover:{textDecor:"underline"}},i.createElement(ie,{to:`/car/${e==null?void 0:e.lN}`},e==null?void 0:e.m," ",e==null?void 0:e.mG)),i.createElement(oe,{opacity:"50%"},e==null?void 0:e.y)),i.createElement(We,null)),i.createElement(ut,null),i.createElement(k,{w:"full",divider:i.createElement(Le,null)},i.createElement(k,{flex:"1",alignItems:"flex-start",minW:"150px",mb:"2",w:"full"},i.createElement(T,null,i.createElement(F,{opacity:"63%"},"Damage: "),i.createElement(M,{fontWeight:"400",fontSize:"16px"},e==null?void 0:e.dmg)),i.createElement(T,null,i.createElement(F,{opacity:"63%"},"Mileage:"),i.createElement(M,{fontWeight:"400",fontSize:"16px"},e==null?void 0:e.od," km"))),i.createElement(T,{justifyContent:"space-between",w:"full"},i.createElement(F,{opacity:"63%"},"Estimate Price"),i.createElement(M,{fontSize:["20px",null,null,"18px","24px"],color:"autoOrange.500",pr:"4",fontWeight:"400"},"$ 20 000")),i.createElement(T,{justifyContent:"space-between",w:"full"},i.createElement(F,{opacity:"63%"},"Estimate Price"),i.createElement(M,{fontSize:["20px",null,null,"18px","24px"],pr:"4",fontWeight:"400"},"$ 20 000")))))},Ct=L({displayName:"ArrowNextIcon",viewBox:"0 0 24 24",path:i.createElement(i.Fragment,null,i.createElement("path",{id:"Path_457","data-name":"Path 457",d:"M0,0H24V24H0Z",fill:"transparent"}),i.createElement("path",{id:"Path_458","data-name":"Path 458",d:"M16.172,10.758,10.808,5.585l1.414-1.363L20,11.722l-7.778,7.5-1.414-1.363,5.364-5.172H4V10.758Z",transform:"translate(0 -0.223)"}))}),Ot=L({displayName:"ArrowPrevIcon",viewBox:"0 0 24 24",path:i.createElement(i.Fragment,null,i.createElement("g",{id:"prev",transform:"translate(24 24) rotate(180)"},i.createElement("path",{id:"Path_457","data-name":"Path 457",d:"M0,0H24V24H0Z",fill:"none"}),i.createElement("path",{id:"Path_458","data-name":"Path 458",d:"M12.172,6.536,6.808,1.363,8.222,0,16,7.5,8.222,15,6.808,13.637l5.364-5.172H0V6.536Z",transform:"translate(4 4.999)"})))}),yt=n=>{var t=n,{height:e}=t,r=O(t,["height"]);return i.createElement(ue,{height:e},i.createElement(qe,B({orientation:"vertical"},r)))},It=l=>{var p=l,{color:e="#a6a6a6",bg:r="#fff",opacity:n="0.5",border:t="none",fontSize:a=["16px",null,null,"18px",null,"24px"],h:o=["44px",null,"40px",null,null,"50px"],arrowColor:s="#a6a6a6",children:h}=p,f=O(p,["color","bg","opacity","border","fontSize","h","arrowColor","children"]);return i.createElement(Je,B({color:e,bg:r,border:t,fontSize:a,h:o,icon:i.createElement(Ee,{fill:s})},f)," ",h)},pt=L({displayName:"SearchIcon",viewBox:"0 0 27 27",path:i.createElement("path",{id:"SEARCH",d:"M31.184,29.539l-7.509-7.578a10.7,10.7,0,1,0-1.624,1.645l7.46,7.529a1.156,1.156,0,0,0,1.631.042A1.163,1.163,0,0,0,31.184,29.539ZM15.265,23.7a8.449,8.449,0,1,1,5.977-2.474A8.4,8.4,0,0,1,15.265,23.7Z",transform:"translate(-4.5 -4.493)"})}),Nt=p=>{var d=p,{h:e=["44px",null,"40px",null,null,"50px"],bg:r="autoOrange.500",fontSize:n=["16px",null,null,null,null,"18px"],borderRadius:t="8px",w:a={xl:"144px","2xl":"155px"},maxW:o={xl:"144px","2xl":"155px"},variant:s="solid",color:h="#fff",fontWeight:f="light"}=d,l=O(d,["h","bg","fontSize","borderRadius","w","maxW","variant","color","fontWeight"]);return i.createElement(ke,B({variant:s,bg:r,h:e,w:a,color:h,fontWeight:f,maxW:o,fontSize:n,borderRadius:t,_hover:{bg:"autoOrange.400"},_active:{bg:"autoOrange.200"}},l),i.createElement(Re,{as:pt,mr:["1",null,null,"1.5",null,"12px"],boxSize:["4",null,null,null,"4","5"],fill:"white"})," ","Search")},zt=a=>{var o=a,{image:e,imageWidth:r=["53px",null,null,"56px","70px","81px"],cardColor:n="autoGrey.600"}=o,t=O(o,["image","imageWidth","cardColor"]);return i.createElement(Ze,B({bg:n},t),i.createElement(ue,{h:"full",w:"full"},i.createElement(ae,{ratio:1/1,w:r},i.createElement(Ke,{src:e}))))},jt=f=>{var l=f,{mainText:e,mainFontSize:r={base:"26px",lg:"18px",xl:"20px","2xl":"24px"},mainlineHeight:n={lg:"24px",xl:"26px"},secondaryText:t,secondaryFontSize:a="16px",secondaryTextOpacity:o="50%",mb:s="24px"}=l,h=O(l,["mainText","mainFontSize","mainlineHeight","secondaryText","secondaryFontSize","secondaryTextOpacity","mb"]);return i.createElement(Fe,le(B({justifyContent:"space-between",mb:s},h),{w:"full",alignItems:"baseline"}),i.createElement(M,{fontSize:r,lineHeight:n,fontWeight:"400"},e),i.createElement(oe,{opacity:o,fontSize:a,color:"#000"},i.createElement(ie,{to:"#"},t)))};export{Ot as A,It as C,Ee as D,Nt as S,zt as T,Ct as a,yt as b,pt as c,jt as d,qe as e,Je as f,wt as g,be as h,P as i};
