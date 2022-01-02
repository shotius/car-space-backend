var se=Object.defineProperty,ie=Object.defineProperties;var ce=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var $=(t,a,n)=>a in t?se(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,T=(t,a)=>{for(var n in a||(a={}))q.call(a,n)&&$(t,n,a[n]);if(k)for(var n of k(a))G.call(a,n)&&$(t,n,a[n]);return t},L=(t,a)=>ie(t,ce(a));var M=(t,a)=>{var n={};for(var l in t)q.call(t,l)&&a.indexOf(l)<0&&(n[l]=t[l]);if(t!=null&&k)for(var l of k(t))a.indexOf(l)<0&&G.call(t,l)&&(n[l]=t[l]);return n};import{r as g,R as e,i as W,u as me}from"./vendor.576a7237.js";import{I as oe,D as ue,k as p,C as R,u as F,a as P,M as pe,l as Ee,m as de,n as O,p as fe,q as U,c as ge,r as we,e as Z,t as be,i as K,H as s,F as B,T as r,h as I,V as u,v as he,f as i,w as xe,x as ye,y as Se,z as Ce,S as ve,A as v,E as je,G as De,J as ke,K as Te,j as D,L as Fe,N as Pe,O as Me,P as Re,Q as Be,B as Ie}from"./index.54f3a40e.js";import{D as Y,C as Ae,a as Ne}from"./CalculatorDesktop.d798b119.js";import{S as j,a as x,b as ze}from"./SectionHeader.79db9595.js";import{S as A,f as N,N as z,T as V}from"./swiper.3c4df1c1.js";import{A as w}from"./aspect-ratio.d2032e15.js";import{I as y}from"./image.05460c11.js";import{F as Ve,a as He,b as _e}from"./formik.30c45d87.js";import{T as qe}from"./react-textarea-autosize.f1892001.js";import{T as Ge}from"./textarea.9627d3f0.js";import{t as J,c as H}from"./TextSecondary.ec16bcfe.js";import{N as m}from"./NotSpecified.81ff94a9.js";import{C as $e}from"./Card.9023f2ad.js";import{S as Le}from"./simple-grid.49dfdb6d.js";import{B as We}from"./CarCardHeading.e6022fa8.js";import{S as Oe}from"./spacer.46ff978e.js";import"./prop-types.d6ec705b.js";import"./react-redux.0b249e8a.js";import"./axios.7b768d2b.js";import"./yup.df40d5b6.js";import"./focus-visible.c4e3ef79.js";import"./SliderBlue.55f11178.js";import"./SelectWrapper.de7e8273.js";const Q=g.exports.forwardRef((l,n)=>{var c=l,{role:t}=c,a=M(c,["role"]);return e.createElement(oe,T({position:"absolute",left:t==="prev"?"0":"none",right:t==="next"?"0":"none",top:"0",h:"100vh",w:"10%",bg:"transparent",zIndex:"10",_hover:{bg:"transparent"},_active:{bg:"transparent",opacity:"0.1"},icon:e.createElement(ue,{boxSize:10,transform:t==="prev"?"rotate(90deg)":"rotate(-90deg)",fill:"autoGrey.200"}),ref:n},a))});var Ue={"thumb-slider":"_thumb-slider_vciuw_1"};A.use([N,z,V]);const Ze=({images:t})=>{const[a,n]=g.exports.useState(null),l=g.exports.useRef(null),c=g.exports.useRef(null);return e.createElement(p,{w:"full"},e.createElement(Q,{ref:l,"aria-label":"previous photo",role:"prev"}),e.createElement(Q,{ref:c,"aria-label":"previous photo",role:"next"}),e.createElement(R,{h:"100vh",w:"70%",maxW:"750px",margin:"auto"},e.createElement(p,{w:"full"},e.createElement(p,{borderRadius:"8px",overflow:"hidden"},e.createElement(j,{spaceBetween:4,thumbs:{swiper:a},className:"mySwiper2",initialSlide:3,onInit:o=>{o.params.navigation.prevEl=l.current,o.params.navigation.nextEl=c.current,o.navigation.init(),o.navigation.update()}},t.map(o=>e.createElement(x,{key:o},e.createElement(w,{ratio:579/364,width:"full"},e.createElement(y,{src:o,borderRadius:"8px"})))))),e.createElement(p,{pt:"4"},e.createElement(j,{onSwiper:o=>n(o),spaceBetween:10,freeMode:!0,watchSlidesProgress:!0,slidesPerView:7,className:Ue["thumb-slider"]},t.map(o=>e.createElement(x,{key:o},e.createElement(w,{ratio:103/70,cursor:"pointer",minW:"103px"},e.createElement(y,{src:o,borderRadius:"8px",width:"103px"})))))))))},X=g.exports.createContext({car:Y}),ee=()=>g.exports.useContext(X),Ke=({})=>{const{car:t}=ee(),a=F(),n=P(c=>c.globalAppState.carDetailModalShown),l=()=>a(fe());return e.createElement(pe,{isOpen:n,onClose:l,size:"full"},e.createElement(Ee,{isActive:n,onClick:()=>{},bg:"black",zIndex:"modal",opacity:".8"}),e.createElement(de,{borderRadius:"none",opacity:"1",bg:"transparent"},e.createElement(O,{color:"white",zIndex:"modal",onClick:()=>{console.log("pressed"),l()}}),e.createElement(U,{p:"0"},e.createElement(Ze,{images:t.imgUrls}))))},Ye=({onClose:t})=>{const{isAuthenticated:a,phone:n,fullName:l,email:c}=P(b=>b.userInfoSlice),o=F(),h=ge(),C={name:a&&l?l:"",phone:a&&n?n:"",email:a?c:"",message:""};return e.createElement(Ve,{initialValues:C,onSubmit:(b,{setSubmitting:d,setErrors:E})=>{o(we(b)).unwrap().then(()=>{t(),d(!1),h({title:"Message Sent",position:"top",status:"success"})}).catch(f=>{var _;d(!1),console.log(Z(f),f),Z(f)?f.status===422&&((_=f.errors)==null?void 0:_.length)&&E(be(f.errors)):K(f)?(t(),h({title:f.error,position:"top",status:"error"})):h({title:"Something went wrong",position:"top",status:"error"})})}},({isSubmitting:b})=>e.createElement(He,null,e.createElement(s,null," Write you message here"),!a&&e.createElement(e.Fragment,null,e.createElement(B,{name:"name",placeholder:"Name"}),e.createElement(B,{name:"phone",placeholder:"Phone",type:"number"}),e.createElement(B,{name:"email",placeholder:"Email",type:"email"})),e.createElement(_e,{name:"message",vali:!0},({field:d,form:E})=>e.createElement(e.Fragment,null,e.createElement(Ge,L(T({mt:"2"},d),{placeholder:"Message...",size:"sm",as:qe,maxRows:10,isInvalid:E.errors.message})),console.log(E.errors),e.createElement(r,{color:"red"},E.errors.message))),e.createElement(I,{type:"submit",mt:"4",isLoading:b},"Submit")))},S=E=>{var f=E,{headingBg:t="autoBlue.400",headinCl:a="#fff",headingFontSize:n,headingPadding:l="12px 24px 12px 24px",bodyPadding:c="24px",w:o="full",maxW:h=[null,null,"480px","full"],heading:C,children:b}=f,d=M(f,["headingBg","headinCl","headingFontSize","headingPadding","bodyPadding","w","maxW","heading","children"]);return e.createElement($e,T({p:"0",maxW:h,w:o},d),e.createElement(s,{bg:t,fontSize:n,borderTopRadius:"8px",padding:l,color:a},C),e.createElement(u,{p:c},b))},te=({car:t})=>{const{isOpen:a,onOpen:n,onClose:l}=he();return e.createElement(e.Fragment,null,e.createElement(S,{heading:"Bid information",w:"full"},e.createElement(i,{w:"full",alignItems:"baseline"},e.createElement(u,{w:"full",align:"flex-start",spacing:"0"},e.createElement(r,{opacity:"0.5"}," Current bid"),e.createElement(s,{color:"autoOrange.500",fontSize:"20px"},"$ ",e.createElement(m,null))),e.createElement(u,{w:"full",align:"flex-start",spacing:"0"},e.createElement(r,{opacity:"0.5"}," Time left"),e.createElement(s,null,e.createElement(m,null)))),e.createElement(Le,{spacingX:"15px",spacingY:"10px",w:"full",pt:"4",minChildWidth:"170px"},e.createElement(I,{onClick:n},"Contact"),e.createElement(I,{color:"#000",gridRow:1,bg:"#F0F0F0",_active:{bg:"autoGrey.400"},display:"flex",alignItems:"center"},e.createElement(i,null,e.createElement(r,null,"Buy it now"),e.createElement(r,{opacity:"0.5",ml:"4"},"$ ",J(t.price)))))),e.createElement(xe,{isOpen:a,onClose:l,size:"sm"},e.createElement(ye,null),e.createElement(Se,null,e.createElement(O,null),e.createElement(Ce,null,"Contact Form"),e.createElement(U,null,e.createElement(Ye,{onClose:l})))))},ae=({car:t})=>e.createElement(u,{divider:e.createElement(ve,null),w:"full",spacing:"2.5"},e.createElement(i,{w:"full",justify:"space-between"},e.createElement(r,{opacity:"0.5"},"VIN number"),e.createElement(s,null," ",e.createElement(m,null),"`")),e.createElement(i,{w:"full",justify:"space-between"},e.createElement(r,{opacity:"0.5"},"Manufacturer"),e.createElement(s,null,t.m?v(t.m):e.createElement(m,null))),e.createElement(i,{w:"full",justify:"space-between"},e.createElement(r,{opacity:"0.5"},"Model"),e.createElement(s,null,t.mD?H(t.mD):e.createElement(m,null))),e.createElement(i,{w:"full",justify:"space-between"},e.createElement(r,{opacity:"0.5"},"Year"),e.createElement(s,null,t.y||e.createElement(m,null))),e.createElement(i,{w:"full",justify:"space-between"},e.createElement(r,{opacity:"0.5"},"Category"),e.createElement(s,null,t.bSt||e.createElement(m,null))),e.createElement(i,{w:"full",justify:"space-between"},e.createElement(r,{opacity:"0.5"},"Fuel type"),e.createElement(s,null,t.fuel?v(t.fuel):e.createElement(m,null))),e.createElement(i,{w:"full",justify:"space-between"},e.createElement(r,{opacity:"0.5"},"Engine"),e.createElement(s,null,t.eng?e.createElement(e.Fragment,null,t.eng," L"):e.createElement(m,null))),e.createElement(i,{w:"full",justify:"space-between"},e.createElement(r,{opacity:"0.5"},"page"),e.createElement(s,null,t.od?e.createElement(e.Fragment,null,J(t.od)," km"):e.createElement(m,null))),e.createElement(i,{w:"full",justify:"space-between"},e.createElement(r,{opacity:"0.5"},"Has Keys"),e.createElement(s,null,t.keys?v(t.keys):e.createElement(m,null))),e.createElement(i,{w:"full",justify:"space-between"},e.createElement(r,{opacity:"0.5"},"Cylinder"),e.createElement(s,null,t.cyl||e.createElement(m,null))),e.createElement(i,{w:"full",justify:"space-between"},e.createElement(r,{opacity:"0.5"},"Wheel"),e.createElement(s,null,t.dr||e.createElement(m,null))),e.createElement(i,{w:"full",justify:"space-between"},e.createElement(r,{opacity:"0.5"},"Color"),e.createElement(s,null,t.c?v(t.c):e.createElement(m,null))),e.createElement(i,{w:"full",justify:"space-between"},e.createElement(r,{opacity:"0.5"},"Gear type"),e.createElement(s,null,t.trans?v(t.trans):e.createElement(m,null))),e.createElement(i,{w:"full",justify:"space-between"},e.createElement(r,{opacity:"0.5"},"Highlights:"),e.createElement(s,null,t.dr?e.createElement(e.Fragment,null,t.dr==="DEFAULT"?"Run and Drive":e.createElement(e.Fragment,null,H(t.dr))):e.createElement(m,null)))),le=({variant:t,car:a})=>e.createElement(e.Fragment,null,t==="mobile"?e.createElement(S,{heading:"Car details",headingBg:"transparent",bg:"transparent",headinCl:"#000",headingFontSize:"20px",bodyPadding:"0",headingPadding:"12px 0px 25px 0px"},e.createElement(ae,{car:a})):e.createElement(S,{heading:"Car details"},e.createElement(ae,{car:a}))),Je=({car:t})=>e.createElement(S,{heading:"Car information"},e.createElement(r,{pb:"30px",lineHeight:"27px"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci autem deserunt doloribus reprehenderit quibusdam facere laudantium, neque nostrum nisi pariatur molestias ducimus esse quo in quis, accusamus excepturi assumenda modi?"),e.createElement(u,{w:"full",p:"24px",borderRadius:"8px",bg:"#F4F4F4",spacing:"41px"},e.createElement(i,{w:"full",justify:"space-between"},e.createElement(u,{w:"full",alignItems:"flex-start",spacing:"4px"},e.createElement(r,{opacity:"0.5"},"Primary damage"),e.createElement(s,null,t.dmg?e.createElement(e.Fragment,null,H(t.dmg)):e.createElement(m,null))),e.createElement(u,{w:"full",alignItems:"flex-start",spacing:"4px"},e.createElement(r,{opacity:"0.5"},"Location"),e.createElement(s,null,t.lC||e.createElement(m,null)))))),Qe=({})=>e.createElement(S,{heading:"Transportation and fee"},e.createElement(i,{w:"full",justify:"space-between",align:"flex-start"},e.createElement(u,{align:"flex-start",spacing:"1"},e.createElement(r,{opacity:"0.5"}," Transportation to Poti"),e.createElement(s,null,"$ 400")),e.createElement(u,{align:"flex-start",spacing:"1"},e.createElement(r,{opacity:"0.5"}," Auction fee"),e.createElement(s,null,"$ 400")),e.createElement(i,{p:"17px 24px",borderRadius:"8px",bg:"autoGrey.200"},e.createElement(r,{opacity:"0.5"},"Total"),e.createElement(s,null,"$ 800")))),Xe="_mobileCarDetailThumbs_1a7q5_1",et="_thumbsSliderDesktop_1a7q5_6";var ne={mobileCarDetailThumbs:Xe,thumbsSliderDesktop:et};A.use([N,z,V]);const tt=({images:t})=>{const[a,n]=g.exports.useState(null),l=F();return e.createElement(p,{w:"full"},e.createElement(p,{borderRadius:"8px",overflow:"hidden"},e.createElement(j,{spaceBetween:4,thumbs:{swiper:a},className:"mySwiper2"},t.map(c=>e.createElement(x,{key:c},e.createElement(w,{ratio:579/364,width:"579px"},e.createElement(y,{src:c,borderRadius:"8px"})))))),e.createElement(p,{pt:"4"},e.createElement(j,{onSwiper:c=>n(c),spaceBetween:10,slidesPerView:5,freeMode:!0,watchSlidesProgress:!0,className:ne.thumbsSliderDesktop},t.slice(0,4).map(c=>e.createElement(x,{key:c},e.createElement(w,{ratio:103/70,cursor:"pointer",width:"103px"},e.createElement(y,{src:c,borderRadius:"8px",width:"103px"})))),e.createElement(x,null,e.createElement(w,{ratio:103/70,cursor:"pointer",width:"103px",onClick:()=>l(je())},e.createElement(p,{borderRadius:"8px",h:"full",w:"full"},e.createElement(y,{src:t[t.length-1],width:"full",h:"full"}),e.createElement(p,{position:"absolute",right:"0",top:"0",bottom:"0",left:"0",cursor:"pointer",background:"rgba(0, 0, 0,0.5)",zIndex:"1"},e.createElement(R,{h:"full"},e.createElement(r,{fontSize:"18px",color:"white",opacity:"1"},t.length>5?`+${t.length-5}`:"See all")))))))))},at=De({displayName:"SeenIcon",viewBox:"0 0 14 12",path:e.createElement(e.Fragment,null,e.createElement("path",{id:"seen",d:"M8.181,3a7.182,7.182,0,0,1,7,6,7.181,7.181,0,0,1-7,6,7.182,7.182,0,0,1-7-6A7.181,7.181,0,0,1,8.181,3Zm0,10.667A5.866,5.866,0,0,0,13.86,9,5.866,5.866,0,0,0,8.181,4.34,5.867,5.867,0,0,0,2.5,9,5.867,5.867,0,0,0,8.181,13.667Zm0-1.667a3,3,0,0,1,0-6,3,3,0,0,1,0,6Zm0-1.333A1.667,1.667,0,1,0,6.563,9,1.643,1.643,0,0,0,8.181,10.667Z",transform:"translate(-1.181 -3)"}))}),re=({car:t})=>e.createElement(i,{w:"full",justify:"space-between"},e.createElement(u,{spacing:"0",alignItems:"flex-start"},e.createElement(ke,{fontSize:"20px",lineHeight:"26px",fontWeight:"light"},(t==null?void 0:t.y)||""," ",t==null?void 0:t.m," ",t==null?void 0:t.mG),e.createElement(i,null,e.createElement(r,{opacity:"0.5"},"Lot #"),e.createElement(r,{pr:"16px"},e.createElement(m,null)),e.createElement(Te,{as:at,ml:"10px",opacity:"0.5"}),e.createElement(r,null,"15"))),e.createElement(We,{h:"48px",w:"50px",carId:t.id,buttonInactiveColor:"#E8E8E8"})),lt=({})=>{const{car:t}=ee();return e.createElement(D,null,e.createElement(Fe,{pt:"40px",justify:"space-between",position:"relative",alignItems:"start"},e.createElement(u,{spacing:"49px",w:"579px"},t.imgUrls.length?e.createElement(tt,{images:t.imgUrls}):e.createElement(w,{ratio:579/364,width:"579px"},e.createElement(u,{bg:"autoGrey.400",borderRadius:"8px"},e.createElement(s,null,"No photos available"))),e.createElement(Je,{car:t}),e.createElement(Qe,null),e.createElement(le,{variant:"desktop",car:t})),e.createElement(Oe,{minW:"20px"}),e.createElement(u,{position:"relative",alignSelf:"stretch",spacing:"4"},e.createElement(re,{car:t}),e.createElement(u,{w:"441px",spacing:"32px",alignItems:"flex-start",position:"sticky",top:"90px"},e.createElement(te,{car:t}),e.createElement(Ae,{children:!0,size:"regular"})))))},nt=({})=>e.createElement(S,{heading:"Transportation and fee"},e.createElement(u,{w:"full",spacing:"18px"},e.createElement(i,{w:"full",justify:"space-between"},e.createElement(r,{opacity:"0.5"},"Transportation in Poti"),e.createElement(s,null,"$ 400")),e.createElement(i,{w:"full",justify:"space-between"},e.createElement(r,{opacity:"0.5"},"Auction fee"),e.createElement(s,{textAlign:"end",w:"40%"},"$ 400")),e.createElement(i,{w:"full",justify:"space-between"},e.createElement(r,{opacity:"0.5"},"Total"),e.createElement(s,null,"$ 800")))),rt=({car:t})=>e.createElement(S,{heading:"Car information"},e.createElement(u,{w:"full",spacing:"18px"},e.createElement(i,{w:"full",justify:"space-between"},e.createElement(r,{opacity:"0.5"},"Primary damage"),e.createElement(s,null,t.dmg?v(t.dmg):e.createElement(m,null))),e.createElement(i,{w:"full",justify:"space-between"},e.createElement(r,{opacity:"0.5"},"Secondary damage"),e.createElement(s,{textAlign:"end",w:"40%"},e.createElement(m,null))),e.createElement(i,{w:"full",justify:"space-between"},e.createElement(r,{opacity:"0.5"},"Sales Status"),e.createElement(s,null,e.createElement(m,null))),e.createElement(i,{w:"full",justify:"space-between"},e.createElement(r,{opacity:"0.5"},"Location"),e.createElement(s,null,t.lC||e.createElement(m,null)))));A.use([N,z,V]);const st=({images:t})=>{const[a,n]=g.exports.useState(null);return e.createElement(p,{w:"full"},e.createElement(p,{borderRadius:"8px"},e.createElement(j,{spaceBetween:0,thumbs:{swiper:a},className:"mySwiper2"},t.map(l=>e.createElement(x,{key:l},e.createElement(w,{ratio:3/2,width:"full"},e.createElement(y,{src:l})))))),e.createElement(p,{pt:"4",pl:"4"},e.createElement(j,{className:ne.mobileCarDetailThumbs,onSwiper:l=>n(l),spaceBetween:10,breakpoints:{200:{slidesPerView:2.2},260:{slidesPerView:2.6},290:{slidesPerView:2.8},300:{slidesPerView:3},320:{slidesPerView:3.2},340:{slidesPerView:3.4},370:{slidesPerView:3.8},400:{slidesPerView:4.1},420:{slidesPerView:4.3},445:{slidesPerView:4.5},480:{slidesPerView:4.8},500:{slidesPerView:5}},freeMode:!0,watchSlidesProgress:!0},t.map(l=>e.createElement(x,{key:l},e.createElement(w,{ratio:88/70,cursor:"pointer",width:"88px"},e.createElement(y,{src:l,borderRadius:"8px",width:"88px"})))))))},it=({car:t})=>{const{fetchingMediums:a,fetchingThumbs:n}=P(c=>c.carImages),{lotNumber:l}=W();return e.createElement(e.Fragment,null,e.createElement(D,{p:"0"},a[l]||n[l]?e.createElement(e.Fragment,null,e.createElement(w,{ratio:3/2,width:"full"},e.createElement(p,{bg:"autoGrey.400"},e.createElement(Pe,null)))):e.createElement(e.Fragment,null,t.imgUrls.length?e.createElement(st,{images:t.imgUrls}):e.createElement(w,{ratio:3/2,width:"full"},e.createElement(p,{bg:"autoGrey.400"},e.createElement(s,null,"No photos available"))))),e.createElement(D,{pt:"4"},e.createElement(i,null,e.createElement(u,{spacing:"48px",w:"full"},e.createElement(re,{car:t}),e.createElement(r,{lineHeight:"24px",opacity:"0.5",mt:"24px !important"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ullam ex dolores incidunt, nam quam similique eius esse perspiciatis non, iure aperiam, laborum officiis omnis blanditiis quas consequuntur modi enim."),e.createElement(te,{car:t}),e.createElement(rt,{car:t}),e.createElement(nt,null),e.createElement(le,{car:t,variant:"mobile"})))))},Rt=()=>{const[t,a]=g.exports.useState(),[n,l]=g.exports.useState(""),c=me(),{dealerCars:o}=P(d=>d.carsReducer),h=F(),{carId:C}=W(),{isDesktop:b}=Me();return g.exports.useEffect(()=>{h(Re(""));const d=o.find(E=>E.id===C);d?a(d):h(Be(C)).unwrap().then(E=>a(E)).catch(E=>{K(E)?l(E.error||"Car Info not found"):l("Some thing bad happend :(, Try later...")})},[]),n?e.createElement(R,{h:"80vh"},e.createElement(u,null,e.createElement(s,{color:"autoOrange.500",fontSize:"24px"},n),e.createElement(Ie,{variant:"link",onClick:()=>c.goBack()},"Go back"))):t?e.createElement(X.Provider,{value:{car:t}},b?e.createElement(e.Fragment,null,e.createElement(lt,null),e.createElement(Ke,null)):e.createElement(it,{car:t}),e.createElement(D,{mt:"65px"},e.createElement(ze,{mainText:"Similar vehicles"})),e.createElement(D,{mt:[null,null,null,"-20px"],p:["0",null,null,"4"]},e.createElement(Ne,{car:Y}))):e.createElement(e.Fragment,null,"...loading car info")};export{Rt as CarDetailPageDealer,Rt as default};
