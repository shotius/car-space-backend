var Q=Object.defineProperty;var v=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var _=(t,n,r)=>n in t?Q(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,k=(t,n)=>{for(var r in n||(n={}))A.call(n,r)&&_(t,r,n[r]);if(v)for(var r of v(n))H.call(n,r)&&_(t,r,n[r]);return t};var T=(t,n)=>{var r={};for(var l in t)A.call(t,l)&&n.indexOf(l)<0&&(r[l]=t[l]);if(t!=null&&v)for(var l of v(t))n.indexOf(l)<0&&H.call(t,l)&&(r[l]=t[l]);return r};import{r as E,R as e,i as q,u as ee}from"./vendor.64e57edd.js";import{I as te,D as ae,B as p,C as P,u as R,a as F,M as le,b as ne,c as re,d as ie,e as ce,f as se,H as i,V as o,g as c,T as a,h as $,S as me,i as h,t as oe,j as ue,k as pe,l as Ee,m as C,F as de,n as fe,o as ge,p as we,q as be,r as xe,s as he}from"./index.ed99825d.js";import{D as G,C as ye,a as Ce}from"./CalculatorDesktop.a29df80d.js";import{S as y,a as g,b as Se}from"./SectionHeader.33da361a.js";import{S as B,f as M,N as I,T as N}from"./swiper.3c4df1c1.js";import{A as d}from"./aspect-ratio.fce6f4cd.js";import{I as w}from"./image.16c75bae.js";import{t as W,B as je}from"./CarCardHeading.de3d6598.js";import{N as s}from"./NotSpecified.614ee40e.js";import{C as ve}from"./Card.f097194a.js";import{S as De}from"./simple-grid.ce6c7a61.js";import{c as V}from"./capitalizeEach.6ec19d92.js";import{S as ke}from"./spacer.a049f0ed.js";import"./prop-types.d6ec705b.js";import"./react-redux.d0311eef.js";import"./axios.7b768d2b.js";import"./formik.178388d5.js";import"./yup.5af68d69.js";import"./focus-visible.85b77dad.js";import"./safeOperations.c48a80c3.js";import"./SelectWrapper.71820d9d.js";import"./select.833c9bba.js";const L=E.exports.forwardRef((l,r)=>{var m=l,{role:t}=m,n=T(m,["role"]);return e.createElement(te,k({position:"absolute",left:t==="prev"?"0":"none",right:t==="next"?"0":"none",top:"0",h:"100vh",w:"10%",bg:"transparent",zIndex:"10",_hover:{bg:"transparent"},_active:{bg:"transparent",opacity:"0.1"},icon:e.createElement(ae,{boxSize:10,transform:t==="prev"?"rotate(90deg)":"rotate(-90deg)",fill:"autoGrey.200"}),ref:r},n))});var Te={"thumb-slider":"_thumb-slider_vciuw_1"};B.use([M,I,N]);const Pe=({images:t})=>{const[n,r]=E.exports.useState(null),l=E.exports.useRef(null),m=E.exports.useRef(null);return e.createElement(p,{w:"full"},e.createElement(L,{ref:l,"aria-label":"previous photo",role:"prev"}),e.createElement(L,{ref:m,"aria-label":"previous photo",role:"next"}),e.createElement(P,{h:"100vh",w:"70%",maxW:"750px",margin:"auto"},e.createElement(p,{w:"full"},e.createElement(p,{borderRadius:"8px",overflow:"hidden"},e.createElement(y,{spaceBetween:4,thumbs:{swiper:n},className:"mySwiper2",initialSlide:3,onInit:u=>{u.params.navigation.prevEl=l.current,u.params.navigation.nextEl=m.current,u.navigation.init(),u.navigation.update()}},t.map(u=>e.createElement(g,{key:u},e.createElement(d,{ratio:579/364,width:"full"},e.createElement(w,{src:u,borderRadius:"8px"})))))),e.createElement(p,{pt:"4"},e.createElement(y,{onSwiper:u=>r(u),spaceBetween:10,freeMode:!0,watchSlidesProgress:!0,slidesPerView:7,className:Te["thumb-slider"]},t.map(u=>e.createElement(g,{key:u},e.createElement(d,{ratio:103/70,cursor:"pointer",minW:"103px"},e.createElement(w,{src:u,borderRadius:"8px",width:"103px"})))))))))},O=E.exports.createContext({car:G}),U=()=>E.exports.useContext(O),Re=({})=>{const{car:t}=U(),n=R(),r=F(m=>m.globalAppState.carDetailModalShown),l=()=>n(ce());return e.createElement(le,{isOpen:r,onClose:l,size:"full"},e.createElement(ne,{isActive:r,onClick:()=>{},bg:"black",zIndex:"modal",opacity:".8"}),e.createElement(re,{borderRadius:"none",opacity:"1",bg:"transparent"},e.createElement(ie,{color:"white",zIndex:"modal",onClick:()=>{console.log("pressed"),l()}}),e.createElement(se,{p:"0"},e.createElement(Pe,{images:t.imgUrls}))))},b=f=>{var z=f,{headingBg:t="autoBlue.400",headinCl:n="#fff",headingFontSize:r,headingPadding:l="12px 24px 12px 24px",bodyPadding:m="24px",w:u="full",maxW:S=[null,null,"480px","full"],heading:j,children:D}=z,x=T(z,["headingBg","headinCl","headingFontSize","headingPadding","bodyPadding","w","maxW","heading","children"]);return e.createElement(ve,k({p:"0",maxW:S,w:u},x),e.createElement(i,{bg:t,fontSize:r,borderTopRadius:"8px",padding:l,color:n},j),e.createElement(o,{p:m},D))},Z=({car:t})=>e.createElement(b,{heading:"Bid information",w:"full"},e.createElement(c,{w:"full",alignItems:"baseline"},e.createElement(o,{w:"full",align:"flex-start",spacing:"0"},e.createElement(a,{opacity:"0.5"}," Current bid"),e.createElement(i,{color:"autoOrange.500",fontSize:"20px"},"$ ",e.createElement(s,null))),e.createElement(o,{w:"full",align:"flex-start",spacing:"0"},e.createElement(a,{opacity:"0.5"}," Time left"),e.createElement(i,null,e.createElement(s,null)))),e.createElement(De,{spacingX:"15px",spacingY:"10px",w:"full",pt:"4",minChildWidth:"170px"},e.createElement($,null,"Contact"),e.createElement($,{color:"#000",gridRow:1,bg:"#F0F0F0",_active:{bg:"autoGrey.400"},display:"flex",alignItems:"center"},e.createElement(c,null,e.createElement(a,null,"Buy it now"),e.createElement(a,{opacity:"0.5",ml:"4"}," ","$ ",W(t.price)))))),Y=({car:t})=>e.createElement(o,{divider:e.createElement(me,null),w:"full",spacing:"2.5"},e.createElement(c,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"VIN number"),e.createElement(i,null," ",e.createElement(s,null),"`")),e.createElement(c,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Manufacturer"),e.createElement(i,null,t.m?h(t.m):e.createElement(s,null))),e.createElement(c,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Model"),e.createElement(i,null,t.mD?V(t.mD):e.createElement(s,null))),e.createElement(c,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Year"),e.createElement(i,null,t.y||e.createElement(s,null))),e.createElement(c,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Category"),e.createElement(i,null,t.bSt||e.createElement(s,null))),e.createElement(c,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Fuel type"),e.createElement(i,null,t.fuel?h(t.fuel):e.createElement(s,null))),e.createElement(c,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Engine"),e.createElement(i,null,t.eng?e.createElement(e.Fragment,null,t.eng," L"):e.createElement(s,null))),e.createElement(c,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"page"),e.createElement(i,null,t.od?e.createElement(e.Fragment,null,W(t.od)," km"):e.createElement(s,null))),e.createElement(c,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Has Keys"),e.createElement(i,null,t.keys?h(t.keys):e.createElement(s,null))),e.createElement(c,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Cylinder"),e.createElement(i,null,t.cyl||e.createElement(s,null))),e.createElement(c,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Wheel"),e.createElement(i,null,t.dr||e.createElement(s,null))),e.createElement(c,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Color"),e.createElement(i,null,t.c?h(t.c):e.createElement(s,null))),e.createElement(c,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Gear type"),e.createElement(i,null,t.trans?h(t.trans):e.createElement(s,null))),e.createElement(c,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Highlights:"),e.createElement(i,null,t.dr?e.createElement(e.Fragment,null,t.dr==="DEFAULT"?"Run and Drive":e.createElement(e.Fragment,null,V(t.dr))):e.createElement(s,null)))),K=({variant:t,car:n})=>e.createElement(e.Fragment,null,t==="mobile"?e.createElement(b,{heading:"Car details",headingBg:"transparent",bg:"transparent",headinCl:"#000",headingFontSize:"20px",bodyPadding:"0",headingPadding:"12px 0px 25px 0px"},e.createElement(Y,{car:n})):e.createElement(b,{heading:"Car details"},e.createElement(Y,{car:n}))),Fe=({car:t})=>e.createElement(b,{heading:"Car information"},e.createElement(a,{pb:"30px",lineHeight:"27px"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci autem deserunt doloribus reprehenderit quibusdam facere laudantium, neque nostrum nisi pariatur molestias ducimus esse quo in quis, accusamus excepturi assumenda modi?"),e.createElement(o,{w:"full",p:"24px",borderRadius:"8px",bg:"#F4F4F4",spacing:"41px"},e.createElement(c,{w:"full",justify:"space-between"},e.createElement(o,{w:"full",alignItems:"flex-start",spacing:"4px"},e.createElement(a,{opacity:"0.5"},"Primary damage"),e.createElement(i,null,t.dmg?e.createElement(e.Fragment,null,V(t.dmg)):e.createElement(s,null))),e.createElement(o,{w:"full",alignItems:"flex-start",spacing:"4px"},e.createElement(a,{opacity:"0.5"},"Location"),e.createElement(i,null,t.lC||e.createElement(s,null)))))),Be=({})=>e.createElement(b,{heading:"Transportation and fee"},e.createElement(c,{w:"full",justify:"space-between",align:"flex-start"},e.createElement(o,{align:"flex-start",spacing:"1"},e.createElement(a,{opacity:"0.5"}," Transportation to Poti"),e.createElement(i,null,"$ 400")),e.createElement(o,{align:"flex-start",spacing:"1"},e.createElement(a,{opacity:"0.5"}," Auction fee"),e.createElement(i,null,"$ 400")),e.createElement(c,{p:"17px 24px",borderRadius:"8px",bg:"autoGrey.200"},e.createElement(a,{opacity:"0.5"},"Total"),e.createElement(i,null,"$ 800")))),Me="_mobileCarDetailThumbs_1a7q5_1",Ie="_thumbsSliderDesktop_1a7q5_6";var X={mobileCarDetailThumbs:Me,thumbsSliderDesktop:Ie};B.use([M,I,N]);const Ne=({images:t})=>{const[n,r]=E.exports.useState(null),l=R();return e.createElement(p,{w:"full"},e.createElement(p,{borderRadius:"8px",overflow:"hidden"},e.createElement(y,{spaceBetween:4,thumbs:{swiper:n},className:"mySwiper2"},t.map(m=>e.createElement(g,{key:m},e.createElement(d,{ratio:579/364,width:"579px"},e.createElement(w,{src:m,borderRadius:"8px"})))))),e.createElement(p,{pt:"4"},e.createElement(y,{onSwiper:m=>r(m),spaceBetween:10,slidesPerView:5,freeMode:!0,watchSlidesProgress:!0,className:X.thumbsSliderDesktop},t.slice(0,4).map(m=>e.createElement(g,{key:m},e.createElement(d,{ratio:103/70,cursor:"pointer",width:"103px"},e.createElement(w,{src:m,borderRadius:"8px",width:"103px"})))),e.createElement(g,null,e.createElement(d,{ratio:103/70,cursor:"pointer",width:"103px",onClick:()=>l(oe())},e.createElement(p,{borderRadius:"8px",h:"full",w:"full"},e.createElement(w,{src:t[t.length-1],width:"full",h:"full"}),e.createElement(p,{position:"absolute",right:"0",top:"0",bottom:"0",left:"0",cursor:"pointer",background:"rgba(0, 0, 0,0.5)",zIndex:"1"},e.createElement(P,{h:"full"},e.createElement(a,{fontSize:"18px",color:"white",opacity:"1"},t.length>5?`+${t.length-5}`:"See all")))))))))},Ve=ue({displayName:"SeenIcon",viewBox:"0 0 14 12",path:e.createElement(e.Fragment,null,e.createElement("path",{id:"seen",d:"M8.181,3a7.182,7.182,0,0,1,7,6,7.181,7.181,0,0,1-7,6,7.182,7.182,0,0,1-7-6A7.181,7.181,0,0,1,8.181,3Zm0,10.667A5.866,5.866,0,0,0,13.86,9,5.866,5.866,0,0,0,8.181,4.34,5.867,5.867,0,0,0,2.5,9,5.867,5.867,0,0,0,8.181,13.667Zm0-1.667a3,3,0,0,1,0-6,3,3,0,0,1,0,6Zm0-1.333A1.667,1.667,0,1,0,6.563,9,1.643,1.643,0,0,0,8.181,10.667Z",transform:"translate(-1.181 -3)"}))}),J=({car:t})=>e.createElement(c,{w:"full",justify:"space-between"},e.createElement(o,{spacing:"0",alignItems:"flex-start"},e.createElement(pe,{fontSize:"20px",lineHeight:"26px",fontWeight:"light"},(t==null?void 0:t.y)||""," ",t==null?void 0:t.m," ",t==null?void 0:t.mG),e.createElement(c,null,e.createElement(a,{opacity:"0.5"},"Lot #"),e.createElement(a,{pr:"16px"},e.createElement(s,null)),e.createElement(Ee,{as:Ve,ml:"10px",opacity:"0.5"}),e.createElement(a,null,"15"))),e.createElement(je,{h:"48px",w:"50px",carId:t.id,buttonInactiveColor:"#E8E8E8"})),ze=({})=>{const{car:t}=U();return e.createElement(C,null,e.createElement(de,{pt:"40px",justify:"space-between",position:"relative",alignItems:"start"},e.createElement(o,{spacing:"49px",w:"579px"},t.imgUrls.length?e.createElement(Ne,{images:t.imgUrls}):e.createElement(d,{ratio:579/364,width:"579px"},e.createElement(o,{bg:"autoGrey.400",borderRadius:"8px"},e.createElement(i,null,"No photos available"))),e.createElement(Fe,{car:t}),e.createElement(Be,null),e.createElement(K,{variant:"desktop",car:t})),e.createElement(ke,{minW:"20px"}),e.createElement(o,{position:"relative",alignSelf:"stretch",spacing:"4"},e.createElement(J,{car:t}),e.createElement(o,{w:"441px",spacing:"32px",alignItems:"flex-start",position:"sticky",top:"90px"},e.createElement(Z,{car:t}),e.createElement(ye,{children:!0,size:"regular"})))))},Ae=({})=>e.createElement(b,{heading:"Transportation and fee"},e.createElement(o,{w:"full",spacing:"18px"},e.createElement(c,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Transportation in Poti"),e.createElement(i,null,"$ 400")),e.createElement(c,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Auction fee"),e.createElement(i,{textAlign:"end",w:"40%"},"$ 400")),e.createElement(c,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Total"),e.createElement(i,null,"$ 800")))),He=({car:t})=>e.createElement(b,{heading:"Car information"},e.createElement(o,{w:"full",spacing:"18px"},e.createElement(c,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Primary damage"),e.createElement(i,null,t.dmg?h(t.dmg):e.createElement(s,null))),e.createElement(c,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Secondary damage"),e.createElement(i,{textAlign:"end",w:"40%"},e.createElement(s,null))),e.createElement(c,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Sales Status"),e.createElement(i,null,e.createElement(s,null))),e.createElement(c,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Location"),e.createElement(i,null,t.lC||e.createElement(s,null)))));B.use([M,I,N]);const _e=({images:t})=>{const[n,r]=E.exports.useState(null);return e.createElement(p,{w:"full"},e.createElement(p,{borderRadius:"8px"},e.createElement(y,{spaceBetween:0,thumbs:{swiper:n},className:"mySwiper2"},t.map(l=>e.createElement(g,{key:l},e.createElement(d,{ratio:3/2,width:"full"},e.createElement(w,{src:l})))))),e.createElement(p,{pt:"4",pl:"4"},e.createElement(y,{className:X.mobileCarDetailThumbs,onSwiper:l=>r(l),spaceBetween:10,breakpoints:{200:{slidesPerView:2.2},260:{slidesPerView:2.6},290:{slidesPerView:2.8},300:{slidesPerView:3},320:{slidesPerView:3.2},340:{slidesPerView:3.4},370:{slidesPerView:3.8},400:{slidesPerView:4.1},420:{slidesPerView:4.3},445:{slidesPerView:4.5},480:{slidesPerView:4.8},500:{slidesPerView:5}},freeMode:!0,watchSlidesProgress:!0},t.map(l=>e.createElement(g,{key:l},e.createElement(d,{ratio:88/70,cursor:"pointer",width:"88px"},e.createElement(w,{src:l,borderRadius:"8px",width:"88px"})))))))},qe=({car:t})=>{const{fetchingMediums:n,fetchingThumbs:r}=F(m=>m.carImages),{lotNumber:l}=q();return e.createElement(e.Fragment,null,e.createElement(C,{p:"0"},n[l]||r[l]?e.createElement(e.Fragment,null,e.createElement(d,{ratio:3/2,width:"full"},e.createElement(p,{bg:"autoGrey.400"},e.createElement(fe,null)))):e.createElement(e.Fragment,null,t.imgUrls.length?e.createElement(_e,{images:t.imgUrls}):e.createElement(d,{ratio:3/2,width:"full"},e.createElement(p,{bg:"autoGrey.400"},e.createElement(i,null,"No photos available"))))),e.createElement(C,{pt:"4"},e.createElement(c,null,e.createElement(o,{spacing:"48px",w:"full"},e.createElement(J,{car:t}),e.createElement(a,{lineHeight:"24px",opacity:"0.5",mt:"24px !important"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ullam ex dolores incidunt, nam quam similique eius esse perspiciatis non, iure aperiam, laborum officiis omnis blanditiis quas consequuntur modi enim."),e.createElement(Z,{car:t}),e.createElement(He,{car:t}),e.createElement(Ae,null),e.createElement(K,{car:t,variant:"mobile"})))))},ut=()=>{const[t,n]=E.exports.useState(),[r,l]=E.exports.useState(""),m=ee(),{dealerCars:u}=F(x=>x.carsReducer),S=R(),{carId:j}=q(),{isDesktop:D}=ge();return E.exports.useEffect(()=>{S(we(""));const x=u.find(f=>f.id===j);x?n(x):S(be(j)).unwrap().then(f=>n(f)).catch(f=>{xe(f)?l(f.error||"Car Info not found"):l("Some thing bad happend :(, Try later...")})},[]),r?e.createElement(P,{h:"80vh"},e.createElement(o,null,e.createElement(i,{color:"autoOrange.500",fontSize:"24px"},r),e.createElement(he,{variant:"link",onClick:()=>m.goBack()},"Go back"))):t?e.createElement(O.Provider,{value:{car:t}},D?e.createElement(e.Fragment,null,e.createElement(ze,null),e.createElement(Re,null)):e.createElement(qe,{car:t}),e.createElement(C,{mt:"65px"},e.createElement(Se,{mainText:"Similar vehicles"})),e.createElement(C,{mt:[null,null,null,"-20px"],p:["0",null,null,"4"]},e.createElement(Ce,{car:G}))):e.createElement(e.Fragment,null,"...loading car info")};export{ut as CarDetailPageDealer,ut as default};
