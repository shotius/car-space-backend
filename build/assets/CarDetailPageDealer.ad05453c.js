var re=Object.defineProperty,ne=Object.defineProperties;var se=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var H=(t,a,r)=>a in t?re(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,M=(t,a)=>{for(var r in a||(a={}))V.call(a,r)&&H(t,r,a[r]);if(T)for(var r of T(a))_.call(a,r)&&H(t,r,a[r]);return t},q=(t,a)=>ne(t,se(a));var F=(t,a)=>{var r={};for(var l in t)V.call(t,l)&&a.indexOf(l)<0&&(r[l]=t[l]);if(t!=null&&T)for(var l of T(t))a.indexOf(l)<0&&_.call(t,l)&&(r[l]=t[l]);return r};import{r as f,R as e,i as W,u as ce}from"./vendor.576a7237.js";import{C as ie}from"./CalculatorDesktop.b485249a.js";import{I as me,D as oe,k as E,C as P,u as z,a as v,M as pe,l as ue,m as Ee,n as G,p as de,q as L,c as fe,r as we,e as O,t as ge,i as U,H as s,F as $,T as n,h as Y,V as u,v as be,f as c,w as he,x as xe,y as ye,z as Se,S as Ce,A as x,E as ke,G as je,J as ve,K as De,j as R,L as Te,N as Me,O as ze,P as Fe,Q as Pe,B as Re}from"./index.8a45e820.js";import{S as Ae}from"./ScrollToTop.da3f839a.js";import{S as A,f as I,N as B,T as N}from"./swiper.3c4df1c1.js";import{S as C,a as y,u as Ie}from"./CurrencySwitcherButtons.9e738419.js";import{A as g}from"./aspect-ratio.d9d0811a.js";import{I as S}from"./image.98906098.js";import{F as Be,a as Ne,b as Ve}from"./formik.30c45d87.js";import{T as _e}from"./react-textarea-autosize.f1892001.js";import{T as He}from"./textarea.f786acd4.js";import{t as Z,c as D}from"./TextSecondary.aa780bf5.js";import{C as qe}from"./Card.5e5a28e7.js";import{N as m}from"./NotSpecified.29fff66c.js";import{B as We}from"./ButtonRound.5543634b.js";import{S as Ge}from"./spacer.1d42cfda.js";import"./prop-types.d6ec705b.js";import"./SliderBlue.46c3b3e0.js";import"./SelectWrapper.6c1b98d6.js";import"./react-redux.0b249e8a.js";import"./axios.7b768d2b.js";import"./yup.8a20e72b.js";import"./focus-visible.c4e3ef79.js";const K=f.exports.forwardRef((l,r)=>{var i=l,{role:t}=i,a=F(i,["role"]);return e.createElement(me,M({position:"absolute",left:t==="prev"?"0":"none",right:t==="next"?"0":"none",top:"0",h:"100vh",w:"10%",bg:"transparent",zIndex:"10",_hover:{bg:"transparent"},_active:{bg:"transparent",opacity:"0.1"},icon:e.createElement(oe,{boxSize:10,transform:t==="prev"?"rotate(90deg)":"rotate(-90deg)",fill:"autoGrey.200"}),ref:r},a))});var Le={"thumb-slider":"_thumb-slider_vciuw_1"};A.use([I,B,N]);const Oe=({images:t})=>{const[a,r]=f.exports.useState(null),l=f.exports.useRef(null),i=f.exports.useRef(null);return e.createElement(E,{w:"full"},e.createElement(K,{ref:l,"aria-label":"previous photo",role:"prev"}),e.createElement(K,{ref:i,"aria-label":"previous photo",role:"next"}),e.createElement(P,{h:"100vh",w:"70%",maxW:"750px",margin:"auto"},e.createElement(E,{w:"full"},e.createElement(E,{borderRadius:"8px",overflow:"hidden"},e.createElement(C,{spaceBetween:4,thumbs:{swiper:a},className:"mySwiper2",initialSlide:3,onInit:o=>{o.params.navigation.prevEl=l.current,o.params.navigation.nextEl=i.current,o.navigation.init(),o.navigation.update()}},t.map(o=>e.createElement(y,{key:o},e.createElement(g,{ratio:579/364,width:"full"},e.createElement(S,{src:o,borderRadius:"8px"})))))),e.createElement(E,{pt:"4"},e.createElement(C,{onSwiper:o=>r(o),spaceBetween:10,freeMode:!0,watchSlidesProgress:!0,slidesPerView:7,className:Le["thumb-slider"]},t.map(o=>e.createElement(y,{key:o},e.createElement(g,{ratio:103/70,cursor:"pointer",minW:"103px"},e.createElement(S,{src:o,borderRadius:"8px",width:"103px"})))))))))},Ue={imgUrls:["https://res.cloudinary.com/car-space-v1/image/upload/v1639259385/car-space/cars/medium-sized-cars/kp18xjlopjrkq0tkck2z.webp","https://res.cloudinary.com/car-space-v1/image/upload/v1639259385/car-space/cars/medium-sized-cars/kp18xjlopjrkq0tkck2z.webp","https://res.cloudinary.com/car-space-v1/image/upload/v1639259385/car-space/cars/medium-sized-cars/kp18xjlopjrkq0tkck2z.webp","https://res.cloudinary.com/car-space-v1/image/upload/v1639259385/car-space/cars/medium-sized-cars/kp18xjlopjrkq0tkck2z.webp","https://res.cloudinary.com/car-space-v1/image/upload/v1639259385/car-space/cars/medium-sized-cars/kp18xjlopjrkq0tkck2z.webp"],bSt:"TILT CAB",price:2e4,mG:"Model",c:"GRAY",cyl:4,dmg:"NORMAL WEAR",dr:"Rear-wheel drive",eng:5.2,fuel:"DIESEL",keys:"YES",lC:"USA",m:"GMC",mD:"W4500 W450",od:399744,trans:"AUTOMATIC",y:2007,imgT:"https://res.cloudinary.com/car-space-v1/image/upload/w_200,h_200,c_limit,e_blur:400,o_90,b_black/v1639057528/car-space/cars/medium-sized-cars/xtfrk4nbr22jhmrqklf8.webp",id:"61b208797674ba0135195899",dealername:"S S",mostDemand:!1},J=f.exports.createContext({car:Ue}),Q=()=>f.exports.useContext(J),$e=({})=>{const{car:t}=Q(),a=z(),r=v(i=>i.globalAppState.carDetailModalShown),l=()=>a(de());return e.createElement(pe,{isOpen:r,onClose:l,size:"full"},e.createElement(ue,{isActive:r,onClick:()=>{},bg:"black",zIndex:"modal",opacity:".8"}),e.createElement(Ee,{borderRadius:"none",opacity:"1",bg:"transparent"},e.createElement(G,{color:"white",zIndex:"modal",onClick:()=>{console.log("pressed"),l()}}),e.createElement(L,{p:"0"},e.createElement(Oe,{images:t.imgUrls}))))},Ye=({onClose:t})=>{const{isAuthenticated:a,phone:r,fullName:l}=v(w=>w.userInfoSlice),i=z(),o=fe(),j={name:a&&l?l:"",phone:a&&r?r:"",message:"",link:window.location.toString()};return e.createElement(Be,{initialValues:j,onSubmit:(w,{setSubmitting:b,setErrors:h})=>{i(we(w)).unwrap().then(()=>{t(),b(!1),o({title:"Message Sent",position:"top",status:"success"})}).catch(p=>{var d;b(!1),console.log(O(p),p),O(p)?p.status===422&&((d=p.errors)==null?void 0:d.length)&&h(ge(p.errors)):U(p)?(t(),o({title:p.error,position:"top",status:"error"})):o({title:"Something went wrong",position:"top",status:"error"})})}},({isSubmitting:w})=>e.createElement(Ne,null,e.createElement(s,null," Write you message here"),e.createElement($,{name:"name",placeholder:"Name"}),e.createElement($,{name:"phone",placeholder:"Phone",type:"number"}),e.createElement(Ve,{name:"message",vali:!0},({field:b,form:h})=>e.createElement(e.Fragment,null,e.createElement(He,q(M({mt:"2"},b),{placeholder:"Message...",size:"sm",as:_e,maxRows:10,isInvalid:h.errors.message})),e.createElement(n,{color:"red"},h.errors.message))),e.createElement(Y,{type:"submit",mt:"4",isLoading:w},"Ask for call")))},k=p=>{var d=p,{headingBg:t="autoBlue.400",headinCl:a="#fff",headingFontSize:r,headingPadding:l="12px 24px 12px 24px",bodyPadding:i="24px",w:o="full",maxW:j=[null,null,"480px","full"],heading:w,children:b}=d,h=F(d,["headingBg","headinCl","headingFontSize","headingPadding","bodyPadding","w","maxW","heading","children"]);return e.createElement(qe,M({p:"0",maxW:j,w:o},h),e.createElement(s,{bg:t,fontSize:r,borderTopRadius:"8px",padding:l,color:a},w),e.createElement(u,{p:i},b))},X=({car:t})=>{const{isOpen:a,onOpen:r,onClose:l}=be(),i=Ie();return e.createElement(e.Fragment,null,e.createElement(k,{heading:"Price",w:"full"},e.createElement(c,{w:"full",justify:"space-between",alignSelf:"flex-start"},e.createElement(c,{spacing:"4"},e.createElement(n,{opacity:"0.5"}," Price"),e.createElement(s,{color:"",fontSize:"20px"},i," ",Z(t.price))),e.createElement(Y,{maxW:"200px",onClick:r},"Contact"))),e.createElement(he,{isOpen:a,onClose:l,size:"sm"},e.createElement(xe,null),e.createElement(ye,null,e.createElement(G,null),e.createElement(Se,null,"Contact Form"),e.createElement(L,null,e.createElement(Ye,{onClose:l})))))},ee=({car:t})=>e.createElement(u,{divider:e.createElement(Ce,null),w:"full",spacing:"2.5"},e.createElement(c,{w:"full",justify:"space-between"},e.createElement(n,{opacity:"0.5"},"VIN number"),e.createElement(s,null," ",e.createElement(m,null))),e.createElement(c,{w:"full",justify:"space-between"},e.createElement(n,{opacity:"0.5"},"Manufacturer"),e.createElement(s,null,t.m?x(t.m):e.createElement(m,null))),e.createElement(c,{w:"full",justify:"space-between"},e.createElement(n,{opacity:"0.5"},"Model"),e.createElement(s,null,t.mD?D(t.mD):e.createElement(m,null))),e.createElement(c,{w:"full",justify:"space-between"},e.createElement(n,{opacity:"0.5"},"Year"),e.createElement(s,null,t.y||e.createElement(m,null))),e.createElement(c,{w:"full",justify:"space-between"},e.createElement(n,{opacity:"0.5"},"Category"),e.createElement(s,null,t.bSt||e.createElement(m,null))),e.createElement(c,{w:"full",justify:"space-between"},e.createElement(n,{opacity:"0.5"},"Fuel type"),e.createElement(s,null,t.fuel?x(t.fuel):e.createElement(m,null))),e.createElement(c,{w:"full",justify:"space-between"},e.createElement(n,{opacity:"0.5"},"Engine"),e.createElement(s,null,t.eng?e.createElement(e.Fragment,null,t.eng," L"):e.createElement(m,null))),e.createElement(c,{w:"full",justify:"space-between"},e.createElement(n,{opacity:"0.5"},"page"),e.createElement(s,null,t.od?e.createElement(e.Fragment,null,Z(t.od)," km"):e.createElement(m,null))),e.createElement(c,{w:"full",justify:"space-between"},e.createElement(n,{opacity:"0.5"},"Has Keys"),e.createElement(s,null,t.keys?x(t.keys):e.createElement(m,null))),e.createElement(c,{w:"full",justify:"space-between"},e.createElement(n,{opacity:"0.5"},"Cylinder"),e.createElement(s,null,t.cyl||e.createElement(m,null))),e.createElement(c,{w:"full",justify:"space-between"},e.createElement(n,{opacity:"0.5"},"Wheel"),e.createElement(s,null,t.dr||e.createElement(m,null))),e.createElement(c,{w:"full",justify:"space-between"},e.createElement(n,{opacity:"0.5"},"Color"),e.createElement(s,null,t.c?x(t.c):e.createElement(m,null))),e.createElement(c,{w:"full",justify:"space-between"},e.createElement(n,{opacity:"0.5"},"Gear type"),e.createElement(s,null,t.trans?x(t.trans):e.createElement(m,null))),e.createElement(c,{w:"full",justify:"space-between"},e.createElement(n,{opacity:"0.5"},"Highlights:"),e.createElement(s,null,t.dr?e.createElement(e.Fragment,null,t.dr==="DEFAULT"?"Run and Drive":e.createElement(e.Fragment,null,D(t.dr))):e.createElement(m,null)))),te=({variant:t,car:a})=>e.createElement(e.Fragment,null,t==="mobile"?e.createElement(k,{heading:"Car details",headingBg:"transparent",bg:"transparent",headinCl:"#000",headingFontSize:"20px",bodyPadding:"0",headingPadding:"12px 0px 25px 0px"},e.createElement(ee,{car:a})):e.createElement(k,{heading:"Car details"},e.createElement(ee,{car:a}))),Ze=({car:t})=>e.createElement(k,{heading:"Car information"},e.createElement(n,{pb:"30px",lineHeight:"27px",w:"full"},t.desc?x(t.desc):"No description"),e.createElement(u,{w:"full",p:"24px",borderRadius:"8px",bg:"#F4F4F4",spacing:"41px"},e.createElement(c,{w:"full",justify:"space-between"},e.createElement(u,{w:"full",alignItems:"flex-start",spacing:"4px"},e.createElement(n,{opacity:"0.5"},"Primary damage"),e.createElement(s,null,t.dmg?e.createElement(e.Fragment,null,D(t.dmg)):e.createElement(m,null))),e.createElement(u,{w:"full",alignItems:"flex-start",spacing:"4px"},e.createElement(n,{opacity:"0.5"},"Location"),e.createElement(s,null,t.lC||e.createElement(m,null)))),e.createElement(c,{w:"full",justify:"space-between"},e.createElement(u,{w:"full",alignItems:"flex-start",spacing:"4px"},e.createElement(n,{opacity:"0.5"},"Car dealder"),e.createElement(s,null,t.dealername?e.createElement(e.Fragment,null,D(t.dealername)):e.createElement(m,null))),e.createElement(u,{w:"full",alignItems:"flex-start",spacing:"4px"},e.createElement(n,{opacity:"0.5"},"Is Most demand"),e.createElement(s,null,t.mostDemand?"Yes":e.createElement(m,null)))))),Ke="_mobileCarDetailThumbs_1a7q5_1",Je="_thumbsSliderDesktop_1a7q5_6";var ae={mobileCarDetailThumbs:Ke,thumbsSliderDesktop:Je};A.use([I,B,N]);const Qe=({images:t})=>{const[a,r]=f.exports.useState(null),l=z();return e.createElement(E,{w:"full"},e.createElement(E,{borderRadius:"8px",overflow:"hidden"},e.createElement(C,{spaceBetween:4,thumbs:{swiper:a},className:"mySwiper2"},t.map(i=>e.createElement(y,{key:i},e.createElement(g,{ratio:579/364,width:"579px"},e.createElement(S,{src:i,borderRadius:"8px"})))))),e.createElement(E,{pt:"4"},e.createElement(C,{onSwiper:i=>r(i),spaceBetween:10,slidesPerView:5,freeMode:!0,watchSlidesProgress:!0,className:ae.thumbsSliderDesktop},t.slice(0,4).map(i=>e.createElement(y,{key:i},e.createElement(g,{ratio:103/70,cursor:"pointer",width:"103px"},e.createElement(S,{src:i,borderRadius:"8px",width:"103px"})))),e.createElement(y,null,e.createElement(g,{ratio:103/70,cursor:"pointer",width:"103px",onClick:()=>l(ke())},e.createElement(E,{borderRadius:"8px",h:"full",w:"full"},e.createElement(S,{src:t[t.length-1],width:"full",h:"full"}),e.createElement(E,{position:"absolute",right:"0",top:"0",bottom:"0",left:"0",cursor:"pointer",background:"rgba(0, 0, 0,0.5)",zIndex:"1"},e.createElement(P,{h:"full"},e.createElement(n,{fontSize:"18px",color:"white",opacity:"1"},t.length>5?`+${t.length-5}`:"See all")))))))))},Xe=je({displayName:"SeenIcon",viewBox:"0 0 14 12",path:e.createElement(e.Fragment,null,e.createElement("path",{id:"seen",d:"M8.181,3a7.182,7.182,0,0,1,7,6,7.181,7.181,0,0,1-7,6,7.182,7.182,0,0,1-7-6A7.181,7.181,0,0,1,8.181,3Zm0,10.667A5.866,5.866,0,0,0,13.86,9,5.866,5.866,0,0,0,8.181,4.34,5.867,5.867,0,0,0,2.5,9,5.867,5.867,0,0,0,8.181,13.667Zm0-1.667a3,3,0,0,1,0-6,3,3,0,0,1,0,6Zm0-1.333A1.667,1.667,0,1,0,6.563,9,1.643,1.643,0,0,0,8.181,10.667Z",transform:"translate(-1.181 -3)"}))}),le=({car:t})=>e.createElement(c,{w:"full",justify:"space-between"},e.createElement(u,{spacing:"0",alignItems:"flex-start"},e.createElement(ve,{fontSize:"20px",lineHeight:"26px",fontWeight:"light"},(t==null?void 0:t.y)||""," ",t==null?void 0:t.m," ",t==null?void 0:t.mG),e.createElement(c,null,e.createElement(n,{opacity:"0.5"},"Lot #"),e.createElement(n,{pr:"16px"},e.createElement(m,null)),e.createElement(De,{as:Xe,ml:"10px",opacity:"0.5"}),e.createElement(n,null,"15"))),e.createElement(We,{h:"48px",w:"50px",carId:t.id,buttonInactiveColor:"#E8E8E8"})),et=({})=>{const{car:t}=Q();return e.createElement(R,null,e.createElement(Te,{pt:"40px",justify:"space-between",position:"relative",alignItems:"start"},e.createElement(u,{spacing:"49px",w:"579px"},t.imgUrls.length?e.createElement(Qe,{images:t.imgUrls}):e.createElement(g,{ratio:579/364,width:"579px"},e.createElement(u,{bg:"autoGrey.400",borderRadius:"8px"},e.createElement(s,null,"No photos available"))),e.createElement(Ze,{car:t}),!1,e.createElement(te,{variant:"desktop",car:t})),e.createElement(Ge,{minW:"20px"}),e.createElement(u,{position:"relative",alignSelf:"stretch",spacing:"4"},e.createElement(le,{car:t}),e.createElement(u,{w:"441px",spacing:"32px",alignItems:"flex-start",position:"sticky",top:"90px"},e.createElement(X,{car:t}),e.createElement(ie,{children:!0,size:"regular"})))))},tt=({})=>e.createElement(k,{heading:"Transportation and fee"},e.createElement(u,{w:"full",spacing:"18px"},e.createElement(c,{w:"full",justify:"space-between"},e.createElement(n,{opacity:"0.5"},"Transportation in Poti"),e.createElement(s,null,"$ 400")),e.createElement(c,{w:"full",justify:"space-between"},e.createElement(n,{opacity:"0.5"},"Auction fee"),e.createElement(s,{textAlign:"end",w:"40%"},"$ 400")),e.createElement(c,{w:"full",justify:"space-between"},e.createElement(n,{opacity:"0.5"},"Total"),e.createElement(s,null,"$ 800")))),at=({car:t})=>e.createElement(k,{heading:"Car information"},e.createElement(u,{w:"full",spacing:"18px"},e.createElement(c,{w:"full",justify:"space-between"},e.createElement(n,{opacity:"0.5"},"Primary damage"),e.createElement(s,null,t.dmg?x(t.dmg):e.createElement(m,null))),e.createElement(c,{w:"full",justify:"space-between"},e.createElement(n,{opacity:"0.5"},"Secondary damage"),e.createElement(s,{textAlign:"end",w:"40%"},e.createElement(m,null))),e.createElement(c,{w:"full",justify:"space-between"},e.createElement(n,{opacity:"0.5"},"Dealer"),e.createElement(s,null,t.dealername?D(t.dealername):e.createElement(m,null))),e.createElement(c,{w:"full",justify:"space-between"},e.createElement(n,{opacity:"0.5"},"Location"),e.createElement(s,null,t.lC||e.createElement(m,null)))));A.use([I,B,N]);const lt=({images:t})=>{const[a,r]=f.exports.useState(null);return e.createElement(E,{w:"full"},e.createElement(E,{borderRadius:"8px"},e.createElement(C,{spaceBetween:0,thumbs:{swiper:a},className:"mySwiper2"},t.map(l=>e.createElement(y,{key:l},e.createElement(g,{ratio:3/2,width:"full"},e.createElement(S,{src:l})))))),e.createElement(E,{pt:"4",pl:"4"},e.createElement(C,{className:ae.mobileCarDetailThumbs,onSwiper:l=>r(l),spaceBetween:10,breakpoints:{200:{slidesPerView:2.2},260:{slidesPerView:2.6},290:{slidesPerView:2.8},300:{slidesPerView:3},320:{slidesPerView:3.2},340:{slidesPerView:3.4},370:{slidesPerView:3.8},400:{slidesPerView:4.1},420:{slidesPerView:4.3},445:{slidesPerView:4.5},480:{slidesPerView:4.8},500:{slidesPerView:5}},freeMode:!0,watchSlidesProgress:!0},t.map(l=>e.createElement(y,{key:l},e.createElement(g,{ratio:88/70,cursor:"pointer",width:"88px"},e.createElement(S,{src:l,borderRadius:"8px",width:"88px"})))))))},rt=({car:t})=>{const{fetchingMediums:a,fetchingThumbs:r}=v(i=>i.carImages),{lotNumber:l}=W();return e.createElement(e.Fragment,null,e.createElement(R,{p:"0"},a[l]||r[l]?e.createElement(e.Fragment,null,e.createElement(g,{ratio:3/2,width:"full"},e.createElement(E,{bg:"autoGrey.400"},e.createElement(Me,null)))):e.createElement(e.Fragment,null,t.imgUrls.length?e.createElement(lt,{images:t.imgUrls}):e.createElement(g,{ratio:3/2,width:"full"},e.createElement(E,{bg:"autoGrey.400"},e.createElement(s,null,"No photos available"))))),e.createElement(R,{pt:"4"},e.createElement(c,null,e.createElement(u,{spacing:"48px",w:"full"},e.createElement(le,{car:t}),e.createElement(n,{lineHeight:"24px",opacity:"0.5",mt:"24px !important"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ullam ex dolores incidunt, nam quam similique eius esse perspiciatis non, iure aperiam, laborum officiis omnis blanditiis quas consequuntur modi enim."),e.createElement(X,{car:t}),e.createElement(at,{car:t}),e.createElement(tt,null),e.createElement(te,{car:t,variant:"mobile"})))))},Mt=()=>{const[t,a]=f.exports.useState(),[r,l]=f.exports.useState(""),i=ce(),{dealerCars:o}=v(p=>p.carsReducer),j=v(p=>p.userInfoSlice.isAuthenticated),w=z(),{carId:b}=W(),{isDesktop:h}=ze();return f.exports.useEffect(()=>{j&&w(Fe(""));const p=o.find(d=>d.id===b);p?a(p):w(Pe(b)).unwrap().then(d=>a(d)).catch(d=>{U(d)?l(d.error||"Car Info not found"):l("Some thing bad happend :(, Try later...")})},[]),r?e.createElement(P,{h:"80vh"},e.createElement(u,null,e.createElement(s,{color:"autoOrange.500",fontSize:"24px"},r),e.createElement(Re,{variant:"link",onClick:()=>i.goBack()},"Go back"))):t?e.createElement(J.Provider,{value:{car:t}},e.createElement(Ae,null),h?e.createElement(e.Fragment,null,e.createElement(et,null),e.createElement($e,null)):e.createElement(rt,{car:t}),!1):e.createElement(e.Fragment,null,"...loading car info")};export{Mt as CarDetailPageDealer,Mt as default};