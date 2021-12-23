var Se=Object.defineProperty,_e=Object.defineProperties;var Ce=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var k=(e,r,n)=>r in e?Se(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,H=(e,r)=>{for(var n in r||(r={}))X.call(r,n)&&k(e,n,r[n]);if(A)for(var n of A(r))Y.call(r,n)&&k(e,n,r[n]);return e},ee=(e,r)=>_e(e,Ce(r));var N=(e,r)=>{var n={};for(var t in e)X.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&A)for(var t of A(e))r.indexOf(t)<0&&Y.call(e,t)&&(n[t]=e[t]);return n};import{R as l,r as f,u as F,L as we}from"./vendor.64e57edd.js";import{A as G,e as te,s as ne,D as re,a4 as Re,f as ie,V as q,S as Oe,H as T,T as z,r as K,v as ye}from"./index.bd088769.js";import{c as Ie}from"./capitalizeEach.6ec19d92.js";import{C as Ne,t as P}from"./CarCardHeading.511fde01.js";import{S as j,N as ze,P as $e}from"./swiper.3c4df1c1.js";import{A as U}from"./aspect-ratio.5ab9639c.js";import{I as le}from"./image.01039edd.js";const et=(e,r)=>{const n=Array(r-e+1).fill(0),t=e;return n.map((s,o)=>o+t)};function y(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function _(e,r){const n=["__proto__","constructor","prototype"];Object.keys(r).filter(t=>n.indexOf(t)<0).forEach(t=>{typeof e[t]=="undefined"?e[t]=r[t]:y(r[t])&&y(e[t])&&Object.keys(r[t]).length>0?r[t].__swiper__?e[t]=r[t]:_(e[t],r[t]):e[t]=r[t]})}function oe(e={}){return e.navigation&&typeof e.navigation.nextEl=="undefined"&&typeof e.navigation.prevEl=="undefined"}function ae(e={}){return e.pagination&&typeof e.pagination.el=="undefined"}function se(e={}){return e.scrollbar&&typeof e.scrollbar.el=="undefined"}function ue(e=""){const r=e.split(" ").map(t=>t.trim()).filter(t=>!!t),n=[];return r.forEach(t=>{n.indexOf(t)<0&&n.push(t)}),n.join(" ")}const ce=["modules","init","_direction","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","_spaceBetween","_slidesPerView","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_preloadImages","updateOnImagesReady","_loop","_loopAdditionalSlides","_loopedSlides","_loopFillGroupWithBlank","loopPreventsSlide","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideBlankClass","slideActiveClass","slideDuplicateActiveClass","slideVisibleClass","slideDuplicateClass","slideNextClass","slideDuplicateNextClass","slidePrevClass","slideDuplicatePrevClass","wrapperClass","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","lazy","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom"];function je(e={}){const r={on:{}},n={},t={};_(r,j.defaults),_(r,j.extendedDefaults),r._emitClasses=!0,r.init=!1;const s={},o=ce.map(a=>a.replace(/_/,""));return Object.keys(e).forEach(a=>{o.indexOf(a)>=0?y(e[a])?(r[a]={},t[a]={},_(r[a],e[a]),_(t[a],e[a])):(r[a]=e[a],t[a]=e[a]):a.search(/on[A-Z]/)===0&&typeof e[a]=="function"?n[`${a[2].toLowerCase()}${a.substr(3)}`]=e[a]:s[a]=e[a]}),["navigation","pagination","scrollbar"].forEach(a=>{r[a]===!0&&(r[a]={}),r[a]===!1&&delete r[a]}),{params:r,passedParams:t,rest:s,events:n}}function Be(e){return new j(e)}function Ve({el:e,nextEl:r,prevEl:n,paginationEl:t,scrollbarEl:s,swiper:o},a){oe(a)&&r&&n&&(o.params.navigation.nextEl=r,o.originalParams.navigation.nextEl=r,o.params.navigation.prevEl=n,o.originalParams.navigation.prevEl=n),ae(a)&&t&&(o.params.pagination.el=t,o.originalParams.pagination.el=t),se(a)&&s&&(o.params.scrollbar.el=s,o.originalParams.scrollbar.el=s),o.init(e)}function pe(e,r){let n=r.slidesPerView;if(r.breakpoints){const s=j.prototype.getBreakpoint(r.breakpoints),o=s in r.breakpoints?r.breakpoints[s]:void 0;o&&o.slidesPerView&&(n=o.slidesPerView)}let t=Math.ceil(parseFloat(r.loopedSlides||n,10));return t+=r.loopAdditionalSlides,t>e.length&&(t=e.length),t}function De(e,r,n){const t=r.map((c,i)=>l.cloneElement(c,{swiper:e,"data-swiper-slide-index":i}));function s(c,i,d){return l.cloneElement(c,{key:`${c.key}-duplicate-${i}-${d}`,className:`${c.props.className||""} ${n.slideDuplicateClass}`})}if(n.loopFillGroupWithBlank){const c=n.slidesPerGroup-t.length%n.slidesPerGroup;if(c!==n.slidesPerGroup)for(let i=0;i<c;i+=1){const d=l.createElement("div",{className:`${n.slideClass} ${n.slideBlankClass}`});t.push(d)}}n.slidesPerView==="auto"&&!n.loopedSlides&&(n.loopedSlides=t.length);const o=pe(t,n),a=[],v=[];return t.forEach((c,i)=>{i<o&&v.push(s(c,i,"prepend")),i<t.length&&i>=t.length-o&&a.push(s(c,i,"append"))}),e&&(e.loopedSlides=o),[...a,...t,...v]}function Ae(e,r,n,t){const s=[];if(!r)return s;const o=i=>{s.indexOf(i)<0&&s.push(i)},a=t.map(i=>i.key),v=n.map(i=>i.key);return a.join("")!==v.join("")&&o("children"),t.length!==n.length&&o("children"),ce.filter(i=>i[0]==="_").map(i=>i.replace(/_/,"")).forEach(i=>{if(i in e&&i in r)if(y(e[i])&&y(r[i])){const d=Object.keys(e[i]),g=Object.keys(r[i]);d.length!==g.length?o(i):(d.forEach(m=>{e[i][m]!==r[i][m]&&o(i)}),g.forEach(m=>{e[i][m]!==r[i][m]&&o(i)}))}else e[i]!==r[i]&&o(i)}),s}function fe(e){const r=[];return l.Children.toArray(e).forEach(n=>{n.type&&n.type.displayName==="SwiperSlide"?r.push(n):n.props&&n.props.children&&fe(n.props.children).forEach(t=>r.push(t))}),r}function He(e){const r=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return l.Children.toArray(e).forEach(t=>{if(t.type&&t.type.displayName==="SwiperSlide")r.push(t);else if(t.props&&t.props.slot&&n[t.props.slot])n[t.props.slot].push(t);else if(t.props&&t.props.children){const s=fe(t.props.children);s.length>0?s.forEach(o=>r.push(o)):n["container-end"].push(t)}else n["container-end"].push(t)}),{slides:r,slots:n}}function Te({swiper:e,slides:r,passedParams:n,changedParams:t,nextEl:s,prevEl:o,scrollbarEl:a,paginationEl:v}){const c=t.filter(p=>p!=="children"&&p!=="direction"),{params:i,pagination:d,navigation:g,scrollbar:m,virtual:S,thumbs:C}=e;let w,I,h,u,$;t.includes("thumbs")&&n.thumbs&&n.thumbs.swiper&&i.thumbs&&!i.thumbs.swiper&&(w=!0),t.includes("controller")&&n.controller&&n.controller.control&&i.controller&&!i.controller.control&&(I=!0),t.includes("pagination")&&n.pagination&&(n.pagination.el||v)&&(i.pagination||i.pagination===!1)&&d&&!d.el&&(h=!0),t.includes("scrollbar")&&n.scrollbar&&(n.scrollbar.el||a)&&(i.scrollbar||i.scrollbar===!1)&&m&&!m.el&&(u=!0),t.includes("navigation")&&n.navigation&&(n.navigation.prevEl||o)&&(n.navigation.nextEl||s)&&(i.navigation||i.navigation===!1)&&g&&!g.prevEl&&!g.nextEl&&($=!0);const V=p=>{!e[p]||(e[p].destroy(),p==="navigation"?(i[p].prevEl=void 0,i[p].nextEl=void 0,e[p].prevEl=void 0,e[p].nextEl=void 0):(i[p].el=void 0,e[p].el=void 0))};c.forEach(p=>{if(y(i[p])&&y(n[p]))_(i[p],n[p]);else{const R=n[p];(R===!0||R===!1)&&(p==="navigation"||p==="pagination"||p==="scrollbar")?R===!1&&V(p):i[p]=n[p]}}),t.includes("children")&&S&&i.virtual.enabled?(S.slides=r,S.update(!0)):t.includes("children")&&e.lazy&&e.params.lazy.enabled&&e.lazy.load(),w&&C.init()&&C.update(!0),I&&(e.controller.control=i.controller.control),h&&(v&&(i.pagination.el=v),d.init(),d.render(),d.update()),u&&(a&&(i.scrollbar.el=a),m.init(),m.updateSize(),m.setTranslate()),$&&(s&&(i.navigation.nextEl=s),o&&(i.navigation.prevEl=o),g.init(),g.update()),t.includes("allowSlideNext")&&(e.allowSlideNext=n.allowSlideNext),t.includes("allowSlidePrev")&&(e.allowSlidePrev=n.allowSlidePrev),t.includes("direction")&&e.changeDirection(n.direction,!1),e.update()}function Le(e){!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.lazy&&e.params.lazy.enabled&&e.lazy.load(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())}function Me(e,r,n){if(!n)return null;const t=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`};return r.filter((s,o)=>o>=n.from&&o<=n.to).map(s=>l.cloneElement(s,{swiper:e,style:t}))}function B(e,r){return typeof window=="undefined"?f.exports.useEffect(e,r):f.exports.useLayoutEffect(e,r)}function Q(){return Q=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},Q.apply(this,arguments)}const de=f.exports.forwardRef((v={},a)=>{var c=v,{className:e,tag:r="div",wrapperTag:n="div",children:t,onSwiper:s}=c,o=N(c,["className","tag","wrapperTag","children","onSwiper"]);let i=!1;const[d,g]=f.exports.useState("swiper"),[m,S]=f.exports.useState(null),[C,w]=f.exports.useState(!1),I=f.exports.useRef(!1),h=f.exports.useRef(null),u=f.exports.useRef(null),$=f.exports.useRef(null),V=f.exports.useRef(null),p=f.exports.useRef(null),R=f.exports.useRef(null),L=f.exports.useRef(null),M=f.exports.useRef(null),{params:b,passedParams:W,rest:ve,events:O}=je(o),{slides:E,slots:D}=He(t),J=()=>{w(!C)};if(Object.assign(b.on,{_containerClasses(x,Ee){g(Ee)}}),!h.current&&(Object.assign(b.on,O),i=!0,u.current=Be(b),u.current.loopCreate=()=>{},u.current.loopDestroy=()=>{},b.loop&&(u.current.loopedSlides=pe(E,b)),u.current.virtual&&u.current.params.virtual.enabled)){u.current.virtual.slides=E;const x={cache:!1,slides:E,renderExternal:S,renderExternalUpdate:!1};_(u.current.params.virtual,x),_(u.current.originalParams.virtual,x)}u.current&&u.current.on("_beforeBreakpoint",J);const xe=()=>{i||!O||!u.current||Object.keys(O).forEach(x=>{u.current.on(x,O[x])})},be=()=>{!O||!u.current||Object.keys(O).forEach(x=>{u.current.off(x,O[x])})};f.exports.useEffect(()=>()=>{u.current&&u.current.off("_beforeBreakpoint",J)}),f.exports.useEffect(()=>{!I.current&&u.current&&(u.current.emitSlidesClasses(),I.current=!0)}),B(()=>{if(a&&(a.current=h.current),!!h.current)return Ve({el:h.current,nextEl:p.current,prevEl:R.current,paginationEl:L.current,scrollbarEl:M.current,swiper:u.current},b),s&&s(u.current),()=>{u.current&&!u.current.destroyed&&u.current.destroy(!0,!1)}},[]),B(()=>{xe();const x=Ae(W,$.current,E,V.current);return $.current=W,V.current=E,x.length&&u.current&&!u.current.destroyed&&Te({swiper:u.current,slides:E,passedParams:W,changedParams:x,nextEl:p.current,prevEl:R.current,scrollbarEl:M.current,paginationEl:L.current}),()=>{be()}}),B(()=>{Le(u.current)},[m]);function he(){return b.virtual?Me(u.current,E,m):!b.loop||u.current&&u.current.destroyed?E.map(x=>l.cloneElement(x,{swiper:u.current})):De(u.current,E,b)}return l.createElement(r,Q({ref:h,className:ue(`${d}${e?` ${e}`:""}`)},ve),D["container-start"],oe(b)&&l.createElement(l.Fragment,null,l.createElement("div",{ref:R,className:"swiper-button-prev"}),l.createElement("div",{ref:p,className:"swiper-button-next"})),se(b)&&l.createElement("div",{ref:M,className:"swiper-scrollbar"}),ae(b)&&l.createElement("div",{ref:L,className:"swiper-pagination"}),l.createElement(n,{className:"swiper-wrapper"},D["wrapper-start"],he(),D["wrapper-end"]),D["container-end"])});de.displayName="Swiper";function Z(){return Z=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},Z.apply(this,arguments)}const ge=f.exports.forwardRef((c={},v)=>{var i=c,{tag:e="div",children:r,className:n="",swiper:t,zoom:s,virtualIndex:o}=i,a=N(i,["tag","children","className","swiper","zoom","virtualIndex"]);const d=f.exports.useRef(null),[g,m]=f.exports.useState("swiper-slide");function S(I,h,u){h===d.current&&m(u)}B(()=>{if(v&&(v.current=d.current),!(!d.current||!t)){if(t.destroyed){g!=="swiper-slide"&&m("swiper-slide");return}return t.on("_slideClass",S),()=>{!t||t.off("_slideClass",S)}}}),B(()=>{t&&d.current&&m(t.getSlideClasses(d.current))},[t]);let C;typeof r=="function"&&(C={isActive:g.indexOf("swiper-slide-active")>=0||g.indexOf("swiper-slide-duplicate-active")>=0,isVisible:g.indexOf("swiper-slide-visible")>=0,isDuplicate:g.indexOf("swiper-slide-duplicate")>=0,isPrev:g.indexOf("swiper-slide-prev")>=0||g.indexOf("swiper-slide-duplicate-prev")>=0,isNext:g.indexOf("swiper-slide-next")>=0||g.indexOf("swiper-slide-duplicate-next")>=0});const w=()=>typeof r=="function"?r(C):r;return l.createElement(e,Z({ref:d,className:ue(`${g}${n?` ${n}`:""}`),"data-swiper-slide-index":o},a),s?l.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof s=="number"?s:void 0},w()):w())});ge.displayName="SwiperSlide";const We=f.exports.forwardRef((s,t)=>{var o=s,{isVisible:e,zIndex:r="22"}=o,n=N(o,["isVisible","zIndex"]);return l.createElement(G,H({position:"absolute",display:e?"block":"none",top:"0",right:"-33px",bottom:"0",h:"full",bg:"transparent",pl:"30px",_hover:{bg:"transparent"},_active:{bg:"transparent",opacity:"0.6"},zIndex:r,ref:t},n),l.createElement(te,{h:"50px",w:"40px",pr:"15px",pb:"3px",bg:"rgba(0, 0, 0, .5)",borderLeftRadius:"100px"},l.createElement(ne,{as:re,fill:"white",transform:"rotate(-90deg)"})))}),Fe=f.exports.forwardRef((s,t)=>{var o=s,{isVisible:e,zIndex:r="22"}=o,n=N(o,["isVisible","zIndex"]);return l.createElement(G,H({position:"absolute",display:e?"block":"none",top:"0",right:"0",bottom:"0",left:"-35px",h:"full",bg:"transparent",pr:"30px",_hover:{bg:"transparent"},_active:{bg:"transparent",opacity:"0.6"},zIndex:r,ref:t},n),l.createElement(te,{h:"50px",w:"40px",pl:"15px",bg:"rgba(0, 0, 0, .5)",borderRightRadius:"100px",_active:{opacity:"0.6"}},l.createElement(ne,{as:re,fill:"white",transform:"rotate(90deg)"})))}),Ge="_CarImagesSwiper_1ye4r_2",qe="_CarImagesSwiperHover_1ye4r_18";var me={CarImagesSwiper:Ge,CarImagesSwiperHover:qe};j.use([ze,$e]);const Ke=({images:e,to:r})=>{const n=f.exports.useRef(null),t=f.exports.useRef(null),[s,o]=f.exports.useState(!1),[a]=Re("(min-width: 1024px)"),v=F();return l.createElement(U,{ratio:[311/292,null,null,231/143],zIndex:"0",w:"full",borderRadius:"8px",cursor:"auto",maxH:["192px",null,"143px"],onClick:c=>{c.stopPropagation&&c.stopPropagation()},onMouseEnter:()=>{a&&o(!0)},onMouseLeave:()=>o(!1)},l.createElement(de,{className:s?me.CarImagesSwiperHover:me.CarImagesSwiper,slidesPerView:1,spaceBetween:0,pagination:!0,onInit:c=>{c.params.navigation.prevEl=n.current,c.params.navigation.nextEl=t.current,c.navigation.init(),c.navigation.update()}},e.map((c,i)=>l.createElement(ge,{key:i},l.createElement(U,null,l.createElement(le,{src:c,fallbackSrc:"https://via.placeholder.com/150"})))),l.createElement(ie,{w:["140px","100px"],h:"full",bg:"transparent",display:["none",null,null,"block"],zIndex:"1",position:"absolute",cursor:"pointer",onClick:()=>v.push(r)}),l.createElement(We,{isVisible:s,ref:t,"aria-label":"next slide"}),l.createElement(Fe,{isVisible:s,ref:n,"aria-label":"previous slide"})))},tt=({car:e})=>{var n;const r=F();return l.createElement(ie,{className:"hoverable",w:["full",null,null,null],bg:"white",borderRadius:"8px",p:"4",maxW:["388px","343px",null],cursor:"pointer",onClick:()=>r.push(`/catalog/car/${e.id}`)},l.createElement(q,{w:"full",spacing:["19px",null,null,"14px","15px"]},l.createElement(Ne,{model:`${e.m} ${e.mG||""}`,id:e.id,year:Number(e.y)}),e.imgUrls.length?l.createElement(Ke,{images:e.imgUrls.slice(0,5),to:`/catalog/car/${e.id}`}):l.createElement(U,{ratio:[311/292,null,null,231/143],w:"full",maxH:["192px",null,"143px"],borderRadius:"8px",overflow:"hidden"},l.createElement(le,{src:"https://via.placeholder.com/150"})),l.createElement(q,{w:"full",divider:l.createElement(Oe,null)},l.createElement(q,{alignItems:"flex-start",minW:"150px",mb:"2",w:"full",spacing:"8px"},l.createElement(T,{w:"full"},l.createElement(z,{opacity:"63%"},"Damage: "),l.createElement(z,{fontFamily:["Roboto Medium",null,"Roboto Regular"],noOfLines:1,maxW:"full"},(e==null?void 0:e.dmg)?Ie(e==null?void 0:e.dmg):"-")),l.createElement(T,null,l.createElement(z,{opacity:"63%"},"Mileage:"),l.createElement(z,{fontFamily:["Roboto Medium",null,"Roboto Regular"]},P(e==null?void 0:e.od)," km"))),l.createElement(T,{justifyContent:"space-between",w:"full"},l.createElement(z,{opacity:"63%"},"Estimate Price"),l.createElement(K,{fontSize:["20px",null,"16px"],color:"autoOrange.500",pr:["4","0","4"],fontWeight:"400"},"$ ",P((n=e.price)!=null?n:0))),l.createElement(T,{justifyContent:"space-between",w:"full"},l.createElement(z,{opacity:"63%"},"Buy it now price"),l.createElement(K,{fontSize:["20px",null,"16px"],pr:["4","0","4"],fontWeight:"400"},"$ ",e.price?P(e.price):"0")))))},nt=i=>{var d=i,{mainText:e,mainFontSize:r=["20px",null,"18px"],mainlineHeight:n={lg:"24px",xl:"26px"},secondaryText:t,secondaryFontSize:s=["16px",null,null,"18px"],secondaryTextOpacity:o="40%",mb:a="8px",to:v=""}=d,c=N(d,["mainText","mainFontSize","mainlineHeight","secondaryText","secondaryFontSize","secondaryTextOpacity","mb","to"]);const g=F();return l.createElement(ye,ee(H({justifyContent:"space-between",mb:a},c),{w:"full",alignItems:"baseline"}),l.createElement(K,{fontSize:r,lineHeight:n,fontWeight:"400"},e),l.createElement(G,{variant:"link",opacity:o,fontSize:s,color:"#000",fontWeight:"light",onClick:()=>g.push(v)},l.createElement(we,{to:"#"},t)))};export{tt as D,de as S,ge as a,nt as b,et as r};
