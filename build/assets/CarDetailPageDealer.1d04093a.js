var ge=Object.defineProperty,ye=Object.defineProperties;var ve=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var ee=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable;var Q=(e,r,l)=>r in e?ge(e,r,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[r]=l,H=(e,r)=>{for(var l in r||(r={}))ee.call(r,l)&&Q(e,l,r[l]);if(N)for(var l of N(r))te.call(r,l)&&Q(e,l,r[l]);return e},ie=(e,r)=>ye(e,ve(r));var F=(e,r)=>{var l={};for(var a in e)ee.call(e,a)&&r.indexOf(a)<0&&(l[a]=e[a]);if(e!=null&&N)for(var a of N(e))r.indexOf(a)<0&&te.call(e,a)&&(l[a]=e[a]);return l};import{r as I,j as t,I as Se,D as Ce,e as i,w as C,C as W,A,a as U,b as O,M as we,x as Te,y as ke,z as re,E as Me,G as oe,H as u,V as v,J as Ie,K as w,o as f,T as c,t as De,N as Pe,O as je,P as Ae,Q as Re,S as ze,U as Be,W as z,X as ne,Y as Ee,Z as Ve,_ as _e,v as L,$ as qe,a0 as Ne,u as de,a1 as Oe,c as $e,a2 as He,a3 as Fe,a4 as Ge,k as Le,B as We}from"./index.5a316967.js";import{C as Ue}from"./CalculatorDesktop.63d244bb.js";import{S as Ye}from"./ScrollToTop.ec6dae38.js";import{i as Ze,$ as le,n as G,S as Y,N as Z,a as V,b as B,u as Xe}from"./DealerCarCard.6d17dc64.js";import{I as E}from"./chakra-ui-image.esm.43e140aa.js";import{t as ce}from"./toTrippleNumber.af3f6dfa.js";import{C as Ke}from"./Card.c49580d4.js";import{c as q}from"./TextSecondary.3b524e4b.js";import{N as b}from"./NotSpecified.ed2c9df6.js";import{B as Je}from"./CarCardHeading.e44ab24b.js";import"./ScrollableList.95429d6a.js";import"./range.9e64e692.js";import"./SliderBlue.6faa9ecb.js";import"./SelectWrapper.6c1dcb83.js";import"./useRoles.de92b421.js";function X({swiper:e,extendParams:r,on:l}){r({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let a=!1,p=!1;e.thumbs={swiper:null};function g(){const h=e.thumbs.swiper;if(!h)return;const n=h.clickedIndex,m=h.clickedSlide;if(m&&le(m).hasClass(e.params.thumbs.slideThumbActiveClass)||typeof n=="undefined"||n===null)return;let d;if(h.params.loop?d=parseInt(le(h.clickedSlide).attr("data-swiper-slide-index"),10):d=n,e.params.loop){let D=e.activeIndex;e.slides.eq(D).hasClass(e.params.slideDuplicateClass)&&(e.loopFix(),e._clientLeft=e.$wrapperEl[0].clientLeft,D=e.activeIndex);const T=e.slides.eq(D).prevAll(`[data-swiper-slide-index="${d}"]`).eq(0).index(),y=e.slides.eq(D).nextAll(`[data-swiper-slide-index="${d}"]`).eq(0).index();typeof T=="undefined"?d=y:typeof y=="undefined"?d=T:y-D<D-T?d=y:d=T}e.slideTo(d)}function S(){const{thumbs:h}=e.params;if(a)return!1;a=!0;const n=e.constructor;if(h.swiper instanceof n)e.thumbs.swiper=h.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1});else if(Ze(h.swiper)){const m=Object.assign({},h.swiper);Object.assign(m,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new n(m),p=!0}return e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",g),!0}function o(h){const n=e.thumbs.swiper;if(!n)return;const m=n.params.slidesPerView==="auto"?n.slidesPerViewDynamic():n.params.slidesPerView,d=e.params.thumbs.autoScrollOffset,D=d&&!n.params.loop;if(e.realIndex!==n.realIndex||D){let x=n.activeIndex,s,R;if(n.params.loop){n.slides.eq(x).hasClass(n.params.slideDuplicateClass)&&(n.loopFix(),n._clientLeft=n.$wrapperEl[0].clientLeft,x=n.activeIndex);const P=n.slides.eq(x).prevAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index(),M=n.slides.eq(x).nextAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index();typeof P=="undefined"?s=M:typeof M=="undefined"?s=P:M-x===x-P?s=n.params.slidesPerGroup>1?M:x:M-x<x-P?s=M:s=P,R=e.activeIndex>e.previousIndex?"next":"prev"}else s=e.realIndex,R=s>e.previousIndex?"next":"prev";D&&(s+=R==="next"?d:-1*d),n.visibleSlidesIndexes&&n.visibleSlidesIndexes.indexOf(s)<0&&(n.params.centeredSlides?s>x?s=s-Math.floor(m/2)+1:s=s+Math.floor(m/2)-1:s>x&&n.params.slidesPerGroup,n.slideTo(s,h?0:void 0))}let T=1;const y=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(T=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(T=1),T=Math.floor(T),n.slides.removeClass(y),n.params.loop||n.params.virtual&&n.params.virtual.enabled)for(let x=0;x<T;x+=1)n.$wrapperEl.children(`[data-swiper-slide-index="${e.realIndex+x}"]`).addClass(y);else for(let x=0;x<T;x+=1)n.slides.eq(e.realIndex+x).addClass(y)}l("beforeInit",()=>{const{thumbs:h}=e.params;!h||!h.swiper||(S(),o(!0))}),l("slideChange update resize observerUpdate",()=>{!e.thumbs.swiper||o()}),l("setTransition",(h,n)=>{const m=e.thumbs.swiper;!m||m.setTransition(n)}),l("beforeDestroy",()=>{const h=e.thumbs.swiper;!h||p&&h&&h.destroy()}),Object.assign(e.thumbs,{init:S,update:o})}function K({swiper:e,extendParams:r,emit:l,once:a}){r({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function p(){const{touchEventsData:S,touches:o}=e;S.velocities.length===0&&S.velocities.push({position:o[e.isHorizontal()?"startX":"startY"],time:S.touchStartTime}),S.velocities.push({position:o[e.isHorizontal()?"currentX":"currentY"],time:G()})}function g({currentPos:S}){const{params:o,$wrapperEl:h,rtlTranslate:n,snapGrid:m,touchEventsData:d}=e,T=G()-d.touchStartTime;if(S<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(S>-e.maxTranslate()){e.slides.length<m.length?e.slideTo(m.length-1):e.slideTo(e.slides.length-1);return}if(o.freeMode.momentum){if(d.velocities.length>1){const k=d.velocities.pop(),j=d.velocities.pop(),xe=k.position-j.position,J=k.time-j.time;e.velocity=xe/J,e.velocity/=2,Math.abs(e.velocity)<o.freeMode.minimumVelocity&&(e.velocity=0),(J>150||G()-k.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=o.freeMode.momentumVelocityRatio,d.velocities.length=0;let y=1e3*o.freeMode.momentumRatio;const x=e.velocity*y;let s=e.translate+x;n&&(s=-s);let R=!1,P;const M=Math.abs(e.velocity)*20*o.freeMode.momentumBounceRatio;let $;if(s<e.maxTranslate())o.freeMode.momentumBounce?(s+e.maxTranslate()<-M&&(s=e.maxTranslate()-M),P=e.maxTranslate(),R=!0,d.allowMomentumBounce=!0):s=e.maxTranslate(),o.loop&&o.centeredSlides&&($=!0);else if(s>e.minTranslate())o.freeMode.momentumBounce?(s-e.minTranslate()>M&&(s=e.minTranslate()+M),P=e.minTranslate(),R=!0,d.allowMomentumBounce=!0):s=e.minTranslate(),o.loop&&o.centeredSlides&&($=!0);else if(o.freeMode.sticky){let k;for(let j=0;j<m.length;j+=1)if(m[j]>-s){k=j;break}Math.abs(m[k]-s)<Math.abs(m[k-1]-s)||e.swipeDirection==="next"?s=m[k]:s=m[k-1],s=-s}if($&&a("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(n?y=Math.abs((-s-e.translate)/e.velocity):y=Math.abs((s-e.translate)/e.velocity),o.freeMode.sticky){const k=Math.abs((n?-s:s)-e.translate),j=e.slidesSizesGrid[e.activeIndex];k<j?y=o.speed:k<2*j?y=o.speed*1.5:y=o.speed*2.5}}else if(o.freeMode.sticky){e.slideToClosest();return}o.freeMode.momentumBounce&&R?(e.updateProgress(P),e.setTransition(y),e.setTranslate(s),e.transitionStart(!0,e.swipeDirection),e.animating=!0,h.transitionEnd(()=>{!e||e.destroyed||!d.allowMomentumBounce||(l("momentumBounce"),e.setTransition(o.speed),setTimeout(()=>{e.setTranslate(P),h.transitionEnd(()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(l("_freeModeNoMomentumRelease"),e.updateProgress(s),e.setTransition(y),e.setTranslate(s),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,h.transitionEnd(()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(s),e.updateActiveIndex(),e.updateSlidesClasses()}else if(o.freeMode.sticky){e.slideToClosest();return}else o.freeMode&&l("_freeModeNoMomentumRelease");(!o.freeMode.momentum||T>=o.longSwipesMs)&&(e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchMove:p,onTouchEnd:g}})}const ae=I.exports.forwardRef((a,l)=>{var p=a,{role:e}=p,r=F(p,["role"]);return t(Se,H({position:"absolute",left:e==="prev"?"0":"none",right:e==="next"?"0":"none",top:"0",h:"100vh",w:"10%",bg:"transparent",zIndex:"10",_hover:{bg:"transparent"},_active:{bg:"transparent",opacity:"0.1"},icon:t(Ce,{boxSize:10,transform:e==="prev"?"rotate(90deg)":"rotate(-90deg)",fill:"autoGrey.200"}),ref:l},r))});var Qe={"thumb-slider":"_thumb-slider_vciuw_1"};Y.use([K,Z,X]);const et=({images:e})=>{const[r,l]=I.exports.useState(null),a=I.exports.useRef(null),p=I.exports.useRef(null);return i(C,{w:"full",children:[t(ae,{ref:a,"aria-label":"previous photo",role:"prev"}),t(ae,{ref:p,"aria-label":"previous photo",role:"next"}),t(W,{h:"100vh",w:"70%",maxW:"950px",margin:"auto",children:i(C,{w:"full",children:[t(C,{borderRadius:"8px",overflow:"hidden",children:t(V,{spaceBetween:4,thumbs:{swiper:r},className:"mySwiper2",onInit:g=>{g.params.navigation.prevEl=a.current,g.params.navigation.nextEl=p.current,g.navigation.init(),g.navigation.update()},children:e.map(g=>t(B,{children:t(A,{ratio:5/3,width:"full",children:t(E,{src:g,borderRadius:"8px"})})},g))})}),t(C,{pt:"4",children:t(V,{onSwiper:g=>l(g),spaceBetween:10,freeMode:!0,watchSlidesProgress:!0,slidesPerView:7,className:Qe["thumb-slider"],children:e.map(g=>t(B,{children:t(A,{ratio:103/70,cursor:"pointer",minW:"103px",children:t(E,{src:g,borderRadius:"8px",width:"103px"})})},g))})})]})})]})},tt={imgUrls:["https://res.cloudinary.com/car-space-v1/image/upload/v1639259385/car-space/cars/medium-sized-cars/kp18xjlopjrkq0tkck2z.webp","https://res.cloudinary.com/car-space-v1/image/upload/v1639259385/car-space/cars/medium-sized-cars/kp18xjlopjrkq0tkck2z.webp","https://res.cloudinary.com/car-space-v1/image/upload/v1639259385/car-space/cars/medium-sized-cars/kp18xjlopjrkq0tkck2z.webp","https://res.cloudinary.com/car-space-v1/image/upload/v1639259385/car-space/cars/medium-sized-cars/kp18xjlopjrkq0tkck2z.webp","https://res.cloudinary.com/car-space-v1/image/upload/v1639259385/car-space/cars/medium-sized-cars/kp18xjlopjrkq0tkck2z.webp"],bSt:"TILT CAB",price:2e4,mG:"Model",c:"GRAY",cyl:4,dmg:"NORMAL WEAR",dr:"Rear-wheel drive",eng:5.2,fuel:"DIESEL",keys:"YES",lC:"USA",m:"GMC",mD:"W4500 W450",od:399744,trans:"AUTOMATIC",y:2007,imgT:"https://res.cloudinary.com/car-space-v1/image/upload/w_200,h_200,c_limit,e_blur:400,o_90,b_black/v1639057528/car-space/cars/medium-sized-cars/xtfrk4nbr22jhmrqklf8.webp",id:"61b208797674ba0135195899",dealername:"S S",mostDemand:!1},ue=I.exports.createContext({car:tt}),he=()=>I.exports.useContext(ue),it=({})=>{const{car:e}=he(),r=U(),l=O(p=>p.globalAppState.carDetailModalShown),a=()=>r(Me());return i(we,{isOpen:l,onClose:a,size:"full",children:[t(Te,{isActive:l,onClick:()=>{},bg:"black",zIndex:"modal",opacity:".8"}),i(ke,{borderRadius:"none",opacity:"1",bg:"transparent",children:[t(re,{color:"white",zIndex:"modal",onClick:()=>{a()}}),t(oe,{p:"0",children:t(et,{images:e.imgUrls})})]})]})},_=m=>{var d=m,{headingBg:e="autoBlue.400",headinCl:r="#fff",headingFontSize:l,headingPadding:a="12px 24px 12px 24px",bodyPadding:p="24px",w:g="full",maxW:S=[null,null,"480px","full"],heading:o,children:h}=d,n=F(d,["headingBg","headinCl","headingFontSize","headingPadding","bodyPadding","w","maxW","heading","children"]);return i(Ke,ie(H({p:"0",maxW:S,w:g},n),{children:[t(u,{bg:e,fontSize:l,borderTopRadius:"8px",padding:a,color:r,children:o}),t(v,{p,children:h})]}))},pe=({car:e})=>{const{isOpen:r,onOpen:l,onClose:a}=Ie(),p=Xe();return i(w,{children:[t(_,{heading:"Price",w:"full",children:i(f,{w:"full",justify:"space-between",alignSelf:"flex-start",children:[i(f,{spacing:"4",children:[t(c,{opacity:"0.5",children:" Price"}),i(u,{color:"",fontSize:"20px",children:[p," ",ce(e.price)]})]}),t(De,{maxW:["150px",null,null,"190px"],onClick:l,children:"Contact"})]})}),i(Pe,{isOpen:r,onClose:a,size:"sm",children:[t(je,{}),i(Ae,{children:[t(re,{}),t(Re,{children:"Contact Form"}),t(oe,{children:t(ze,{onClose:a})})]})]})]})},se=({car:e})=>i(v,{divider:t(Be,{}),w:"full",spacing:"2.5",children:[i(f,{w:"full",justify:"space-between",children:[t(c,{opacity:"0.5",children:"VIN number"}),i(u,{children:[" ",t(b,{})]})]}),i(f,{w:"full",justify:"space-between",children:[t(c,{opacity:"0.5",children:"Manufacturer"}),t(u,{children:e.m?z(e.m):t(b,{})})]}),i(f,{w:"full",justify:"space-between",children:[t(c,{opacity:"0.5",children:"Model"}),t(u,{children:e.mD?q(e.mD):t(b,{})})]}),i(f,{w:"full",justify:"space-between",children:[t(c,{opacity:"0.5",children:"Year"}),t(u,{children:e.y||t(b,{})})]}),i(f,{w:"full",justify:"space-between",children:[t(c,{opacity:"0.5",children:"Category"}),t(u,{children:e.bSt||t(b,{})})]}),i(f,{w:"full",justify:"space-between",children:[t(c,{opacity:"0.5",children:"Fuel type"}),t(u,{children:e.fuel?z(e.fuel):t(b,{})})]}),i(f,{w:"full",justify:"space-between",children:[t(c,{opacity:"0.5",children:"Engine"}),t(u,{children:e.eng?i(w,{children:[e.eng," L"]}):t(b,{})})]}),i(f,{w:"full",justify:"space-between",children:[t(c,{opacity:"0.5",children:"page"}),t(u,{children:e.od?i(w,{children:[ce(e.od)," km"]}):t(b,{})})]}),i(f,{w:"full",justify:"space-between",children:[t(c,{opacity:"0.5",children:"Has Keys"}),t(u,{children:e.keys?z(e.keys):t(b,{})})]}),i(f,{w:"full",justify:"space-between",children:[t(c,{opacity:"0.5",children:"Cylinder"}),t(u,{children:e.cyl||t(b,{})})]}),i(f,{w:"full",justify:"space-between",children:[t(c,{opacity:"0.5",children:"Wheel"}),t(u,{children:e.dr||t(b,{})})]}),i(f,{w:"full",justify:"space-between",children:[t(c,{opacity:"0.5",children:"Color"}),t(u,{children:e.c?z(e.c):t(b,{})})]}),i(f,{w:"full",justify:"space-between",children:[t(c,{opacity:"0.5",children:"Gear type"}),t(u,{children:e.trans?z(e.trans):t(b,{})})]}),i(f,{w:"full",justify:"space-between",children:[t(c,{opacity:"0.5",children:"Highlights:"}),t(u,{children:e.dr?t(w,{children:e.dr==="DEFAULT"?"Run and Drive":t(w,{children:q(e.dr)})}):t(b,{})})]})]}),me=({variant:e,car:r})=>t(w,{children:e==="mobile"?t(_,{heading:"Car details",headingBg:"transparent",bg:"transparent",headinCl:"#000",headingFontSize:"20px",bodyPadding:"0",headingPadding:"12px 0px 25px 0px",children:t(se,{car:r})}):t(_,{heading:"Car details",children:t(se,{car:r})})}),nt=({car:e})=>i(_,{heading:"Car information",children:[t(c,{pb:"30px",lineHeight:"27px",w:"full",children:e.desc?z(e.desc):"No description"}),i(v,{w:"full",p:"24px",borderRadius:"8px",bg:"#F4F4F4",spacing:"41px",children:[i(f,{w:"full",justify:"space-between",children:[i(v,{w:"full",alignItems:"flex-start",spacing:"4px",children:[t(c,{opacity:"0.5",children:"Primary damage"}),t(u,{children:e.dmg?t(w,{children:q(e.dmg)}):t(b,{})})]}),i(v,{w:"full",alignItems:"flex-start",spacing:"4px",children:[t(c,{opacity:"0.5",children:"Location"}),t(u,{children:e.lC||t(b,{})})]})]}),i(f,{w:"full",justify:"space-between",children:[i(v,{w:"full",alignItems:"flex-start",spacing:"4px",children:[t(c,{opacity:"0.5",children:"Car dealder"}),t(u,{children:e.dealername?t(w,{children:q(e.dealername)}):t(b,{})})]}),i(v,{w:"full",alignItems:"flex-start",spacing:"4px",children:[t(c,{opacity:"0.5",children:"Is Most demand"}),t(u,{children:e.mostDemand?"Yes":t(b,{})})]})]})]})]}),lt="_mobileCarDetailThumbs_1a7q5_1",at="_thumbsSliderDesktop_1a7q5_6";var fe={mobileCarDetailThumbs:lt,thumbsSliderDesktop:at};Y.use([K,Z,X]);const st=({images:e})=>{const[r,l]=I.exports.useState(null),a=U();return i(C,{w:"full",children:[t(C,{borderRadius:"8px",overflow:"hidden",children:t(V,{spaceBetween:4,thumbs:{swiper:r},className:"mySwiper2",children:e.map(p=>t(B,{children:t(A,{ratio:579/364,width:"579px",children:t(E,{src:p,borderRadius:"8px",onClick:()=>a(ne()),cursor:"pointer"})})},p))})}),t(C,{pt:"4",children:i(V,{onSwiper:p=>l(p),spaceBetween:10,slidesPerView:5,freeMode:!0,watchSlidesProgress:!0,className:fe.thumbsSliderDesktop,children:[e.slice(0,4).map(p=>t(B,{children:t(A,{ratio:103/70,cursor:"pointer",width:"103px",children:t(E,{src:p,borderRadius:"8px",width:"103px"})})},p)),t(B,{children:t(A,{ratio:103/70,cursor:"pointer",width:"103px",onClick:()=>a(ne()),children:i(C,{borderRadius:"8px",h:"full",w:"full",children:[t(E,{src:e[e.length-1],width:"full",h:"full"}),t(C,{position:"absolute",right:"0",top:"0",bottom:"0",left:"0",cursor:"pointer",background:"rgba(0, 0, 0,0.5)",zIndex:"1",children:t(W,{h:"full",children:t(c,{fontSize:"18px",color:"white",opacity:"1",children:e.length>5?`+${e.length-5}`:"See all"})})})]})})})]})})]})},rt=Ee({displayName:"SeenIcon",viewBox:"0 0 14 12",path:t(w,{children:t("path",{id:"seen",d:"M8.181,3a7.182,7.182,0,0,1,7,6,7.181,7.181,0,0,1-7,6,7.182,7.182,0,0,1-7-6A7.181,7.181,0,0,1,8.181,3Zm0,10.667A5.866,5.866,0,0,0,13.86,9,5.866,5.866,0,0,0,8.181,4.34,5.867,5.867,0,0,0,2.5,9,5.867,5.867,0,0,0,8.181,13.667Zm0-1.667a3,3,0,0,1,0-6,3,3,0,0,1,0,6Zm0-1.333A1.667,1.667,0,1,0,6.563,9,1.643,1.643,0,0,0,8.181,10.667Z",transform:"translate(-1.181 -3)"})})}),be=({car:e})=>i(f,{w:"full",justify:"space-between",children:[i(v,{spacing:"0",alignItems:"flex-start",children:[i(Ve,{fontSize:"20px",lineHeight:"26px",fontWeight:"light",children:[(e==null?void 0:e.y)||""," ",e==null?void 0:e.m," ",e==null?void 0:e.mG]}),i(f,{children:[t(c,{opacity:"0.5",children:"Lot #"}),t(c,{pr:"16px",children:t(b,{})}),t(_e,{as:rt,ml:"10px",opacity:"0.5"}),t(c,{children:"15"})]})]}),t(Je,{h:"48px",w:"50px",carId:e.id,buttonInactiveColor:"#E8E8E8"})]}),ot=({})=>{const{car:e}=he();return t(L,{children:i(qe,{pt:"40px",justify:"space-between",position:"relative",alignItems:"start",children:[i(v,{spacing:"49px",w:"579px",children:[e.imgUrls.length?t(st,{images:e.imgUrls}):t(A,{ratio:579/364,width:"579px",children:t(v,{bg:"autoGrey.400",borderRadius:"8px",children:t(u,{children:"No photos available"})})}),t(nt,{car:e}),!1,t(me,{variant:"desktop",car:e})]}),t(Ne,{minW:"20px"}),i(v,{position:"relative",alignSelf:"stretch",spacing:"4",children:[t(be,{car:e}),i(v,{w:"441px",spacing:"32px",alignItems:"flex-start",position:"sticky",top:"90px",children:[t(pe,{car:e}),t(Ue,{children:!0,size:"regular"})]})]})]})})},dt=({})=>t(_,{heading:"Transportation and fee",children:i(v,{w:"full",spacing:"18px",children:[i(f,{w:"full",justify:"space-between",children:[t(c,{opacity:"0.5",children:"Transportation in Poti"}),t(u,{children:"$ 400"})]}),i(f,{w:"full",justify:"space-between",children:[t(c,{opacity:"0.5",children:"Auction fee"}),t(u,{textAlign:"end",w:"40%",children:"$ 400"})]}),i(f,{w:"full",justify:"space-between",children:[t(c,{opacity:"0.5",children:"Total"}),t(u,{children:"$ 800"})]})]})}),ct=({car:e})=>t(_,{heading:"Car information",children:i(v,{w:"full",spacing:"18px",children:[i(f,{w:"full",justify:"space-between",children:[t(c,{opacity:"0.5",children:"Primary damage"}),t(u,{children:e.dmg?z(e.dmg):t(b,{})})]}),i(f,{w:"full",justify:"space-between",children:[t(c,{opacity:"0.5",children:"Secondary damage"}),t(u,{textAlign:"end",w:"40%",children:t(b,{})})]}),i(f,{w:"full",justify:"space-between",children:[t(c,{opacity:"0.5",children:"Dealer"}),t(u,{children:e.dealername?q(e.dealername):t(b,{})})]}),i(f,{w:"full",justify:"space-between",children:[t(c,{opacity:"0.5",children:"Location"}),t(u,{children:e.lC||t(b,{})})]})]})});Y.use([K,Z,X]);const ut=({images:e})=>{const[r,l]=I.exports.useState(null);return i(C,{w:"full",children:[t(C,{borderRadius:"8px",children:t(V,{spaceBetween:0,thumbs:{swiper:r},className:"mySwiper2",children:e.map(a=>t(B,{children:t(A,{ratio:3/2,width:"full",children:t(E,{src:a})})},a))})}),t(C,{pt:"4",pl:"4",children:t(V,{className:fe.mobileCarDetailThumbs,onSwiper:a=>l(a),spaceBetween:10,breakpoints:{200:{slidesPerView:2.2},260:{slidesPerView:2.6},290:{slidesPerView:2.8},300:{slidesPerView:3},320:{slidesPerView:3.2},340:{slidesPerView:3.4},370:{slidesPerView:3.8},400:{slidesPerView:4.1},420:{slidesPerView:4.3},445:{slidesPerView:4.5},480:{slidesPerView:4.8},500:{slidesPerView:5}},freeMode:!0,watchSlidesProgress:!0,children:e.map(a=>t(B,{children:t(A,{ratio:88/70,cursor:"pointer",width:"88px",children:t(E,{src:a,borderRadius:"8px",width:"88px"})})},a))})})]})},ht=({car:e})=>{const{fetchingMediums:r,fetchingThumbs:l}=O(p=>p.carImages),{lotNumber:a}=de();return i(w,{children:[t(L,{p:"0",children:r[a]||l[a]?t(w,{children:t(A,{ratio:3/2,width:"full",children:t(C,{bg:"autoGrey.400",children:t(Oe,{})})})}):t(w,{children:e.imgUrls.length?t(ut,{images:e.imgUrls}):t(A,{ratio:3/2,width:"full",children:t(C,{bg:"autoGrey.400",children:t(u,{children:"No photos available"})})})})}),t(L,{pt:"4",children:t(f,{children:i(v,{spacing:"48px",w:"full",children:[t(be,{car:e}),t(c,{lineHeight:"24px",opacity:"0.5",mt:"24px !important",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ullam ex dolores incidunt, nam quam similique eius esse perspiciatis non, iure aperiam, laborum officiis omnis blanditiis quas consequuntur modi enim."}),t(pe,{car:e}),t(ct,{car:e}),t(dt,{}),t(me,{car:e,variant:"mobile"})]})})})]})},Pt=()=>{const[e,r]=I.exports.useState(),[l,a]=I.exports.useState(""),p=$e(),{dealerCars:g}=O(m=>m.carsReducer),S=O(m=>m.userInfoSlice.isAuthenticated),o=U(),{carId:h}=de(),{isDesktop:n}=He();return I.exports.useEffect(()=>{S&&o(Fe(""));const m=g.find(d=>d.id===h);m?r(m):o(Ge(h)).unwrap().then(d=>r(d)).catch(d=>{Le(d)?a(d.error||"Car Info not found"):a("Some thing bad happend :(, Try later...")})},[]),l?t(W,{h:"80vh",children:i(v,{children:[t(u,{color:"autoOrange.500",fontSize:"24px",children:l}),t(We,{variant:"link",onClick:()=>p.goBack(),children:"Go back"})]})}):e?i(ue.Provider,{value:{car:e},children:[t(Ye,{}),n?i(w,{children:[t(ot,{}),t(it,{})]}):t(ht,{car:e}),!1]}):t(w,{children:"...loading car info"})};export{Pt as CarDetailPageDealer,Pt as default};
