var Z=Object.defineProperty;var x=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var k=(t,r,c)=>r in t?Z(t,r,{enumerable:!0,configurable:!0,writable:!0,value:c}):t[r]=c,v=(t,r)=>{for(var c in r||(r={}))D.call(r,c)&&k(t,c,r[c]);if(x)for(var c of x(r))T.call(r,c)&&k(t,c,r[c]);return t};var R=(t,r)=>{var c={};for(var i in t)D.call(t,i)&&r.indexOf(i)<0&&(c[i]=t[i]);if(t!=null&&x)for(var i of x(t))r.indexOf(i)<0&&T.call(t,i)&&(c[i]=t[i]);return c};import{R as e,r as h,h as B}from"./vendor.99726a2e.js";import{H as a,T as l,B as A,c as g,C as y,F as O,u as Y,P as K}from"./PublicLayout.30f21c4b.js";import{C as X,a as J,D as Q}from"./DamnCard.5ef3fa3a.js";import{S as C,a as E,b as ee}from"./SelectWrapper.8603c039.js";import{t as V,c as j,B as te}from"./CarCardHeading.7e5feac0.js";import{N as m}from"./NotSpecified.68041cbd.js";import{C as le}from"./Card.e07ae1d5.js";import{V as o,H as n,S as ae,B as u,C as H,c as ne,a as re,I as ie,b as P,u as N,d as ce,g as me,e as se}from"./index.c1fe9b16.js";import{S as oe}from"./simple-grid.1a3cc4de.js";import{S as I,f as M,N as z,T as G}from"./swiper.3c4df1c1.js";import{A as p}from"./aspect-ratio.a0e9cde5.js";import{I as w}from"./image.301fe6c9.js";import{S as ue}from"./spacer.81f6a7e4.js";import"./prop-types.d6ec705b.js";import"./formik.78ddb322.js";import"./SliderBlue.cdd3cf28.js";import"./contants.d6573c4d.js";import"./use-toast.e2b20c33.js";import"./react-redux.9e699590.js";import"./axios.7b768d2b.js";import"./focus-visible.88d37904.js";const d=Se=>{var F=Se,{headingBg:t="autoBlue.400",headinCl:r="#fff",headingFontSize:c,headingPadding:i="12px 24px 12px 24px",bodyPadding:s="24px",w:S="full",maxW:f=[null,null,"480px","full"],heading:b,children:_}=F,U=R(F,["headingBg","headinCl","headingFontSize","headingPadding","bodyPadding","w","maxW","heading","children"]);return e.createElement(le,v({p:"0",maxW:f,w:S},U),e.createElement(a,{bg:t,fontSize:c,borderTopRadius:"8px",padding:i,color:r},b),e.createElement(o,{p:s},_))},L=({car:t})=>e.createElement(d,{heading:"Bid information",w:"full"},e.createElement(n,{w:"full",alignItems:"baseline"},e.createElement(o,{w:"full",align:"flex-start",spacing:"0"},e.createElement(l,{opacity:"0.5"}," Current bid"),e.createElement(a,{color:"autoOrange.500",fontSize:"20px"},"$ ",e.createElement(m,null))),e.createElement(o,{w:"full",align:"flex-start",spacing:"0"},e.createElement(l,{opacity:"0.5"}," Time left"),e.createElement(a,null,e.createElement(m,null)))),e.createElement(oe,{spacingX:"15px",spacingY:"10px",w:"full",pt:"4",minChildWidth:"170px"},e.createElement(A,null,"Contact"),e.createElement(A,{color:"#000",gridRow:1,bg:"#F0F0F0",_active:{bg:"autoGrey.400"},display:"flex",alignItems:"center"},e.createElement(n,null,e.createElement(l,null,"Buy it now"),e.createElement(l,{opacity:"0.5",ml:"4"}," ","$ ",V(t.price)))))),$=({car:t})=>e.createElement(o,{divider:e.createElement(ae,null),w:"full",spacing:"2.5"},e.createElement(n,{w:"full",justify:"space-between"},e.createElement(l,{opacity:"0.5"},"VIN number"),e.createElement(a,null," ",e.createElement(m,null))),e.createElement(n,{w:"full",justify:"space-between"},e.createElement(l,{opacity:"0.5"},"Manufacturer"),e.createElement(a,null,t.m?g(t.m):e.createElement(m,null))),e.createElement(n,{w:"full",justify:"space-between"},e.createElement(l,{opacity:"0.5"},"Model"),e.createElement(a,null,t.mD?j(t.mD):e.createElement(m,null))),e.createElement(n,{w:"full",justify:"space-between"},e.createElement(l,{opacity:"0.5"},"Year"),e.createElement(a,null,t.y||e.createElement(m,null))),e.createElement(n,{w:"full",justify:"space-between"},e.createElement(l,{opacity:"0.5"},"Category"),e.createElement(a,null,t.bSt||e.createElement(m,null))),e.createElement(n,{w:"full",justify:"space-between"},e.createElement(l,{opacity:"0.5"},"Fuel type"),e.createElement(a,null,t.fuel?g(t.fuel):e.createElement(m,null))),e.createElement(n,{w:"full",justify:"space-between"},e.createElement(l,{opacity:"0.5"},"Engine"),e.createElement(a,null,t.eng?e.createElement(e.Fragment,null,t.eng," L"):e.createElement(m,null))),e.createElement(n,{w:"full",justify:"space-between"},e.createElement(l,{opacity:"0.5"},"page"),e.createElement(a,null,t.od?e.createElement(e.Fragment,null,V(t.od)," km"):e.createElement(m,null))),e.createElement(n,{w:"full",justify:"space-between"},e.createElement(l,{opacity:"0.5"},"Has Keys"),e.createElement(a,null,t.keys?g(t.keys):e.createElement(m,null))),e.createElement(n,{w:"full",justify:"space-between"},e.createElement(l,{opacity:"0.5"},"Cylinder"),e.createElement(a,null,t.cyl||e.createElement(m,null))),e.createElement(n,{w:"full",justify:"space-between"},e.createElement(l,{opacity:"0.5"},"Wheel"),e.createElement(a,null,t.dr||e.createElement(m,null))),e.createElement(n,{w:"full",justify:"space-between"},e.createElement(l,{opacity:"0.5"},"Color"),e.createElement(a,null,t.c?g(t.c):e.createElement(m,null))),e.createElement(n,{w:"full",justify:"space-between"},e.createElement(l,{opacity:"0.5"},"Gear type"),e.createElement(a,null,t.trans?g(t.trans):e.createElement(m,null))),e.createElement(n,{w:"full",justify:"space-between"},e.createElement(l,{opacity:"0.5"},"Highlights:"),e.createElement(a,null,t.dr?e.createElement(e.Fragment,null,t.dr==="DEFAULT"?"Run and Drive":e.createElement(e.Fragment,null,j(t.dr))):e.createElement(m,null)))),q=({variant:t,car:r})=>e.createElement(e.Fragment,null,t==="mobile"?e.createElement(d,{heading:"Car details",headingBg:"transparent",bg:"transparent",headinCl:"#000",headingFontSize:"20px",bodyPadding:"0",headingPadding:"12px 0px 25px 0px"},e.createElement($,{car:r})):e.createElement(d,{heading:"Car details"},e.createElement($,{car:r}))),pe=({car:t})=>e.createElement(d,{heading:"Car information"},e.createElement(l,{pb:"30px",lineHeight:"27px"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci autem deserunt doloribus reprehenderit quibusdam facere laudantium, neque nostrum nisi pariatur molestias ducimus esse quo in quis, accusamus excepturi assumenda modi?"),e.createElement(o,{w:"full",p:"24px",borderRadius:"8px",bg:"#F4F4F4",spacing:"41px"},e.createElement(n,{w:"full",justify:"space-between"},e.createElement(o,{w:"full",alignItems:"flex-start",spacing:"4px"},e.createElement(l,{opacity:"0.5"},"Primary damage"),e.createElement(a,null,t.dmg?e.createElement(e.Fragment,null,j(t.dmg)):e.createElement(m,null))),e.createElement(o,{w:"full",alignItems:"flex-start",spacing:"4px"},e.createElement(l,{opacity:"0.5"},"Location"),e.createElement(a,null,t.lC||e.createElement(m,null)))))),Ee=({})=>e.createElement(d,{heading:"Transportation and fee"},e.createElement(n,{w:"full",justify:"space-between",align:"flex-start"},e.createElement(o,{align:"flex-start",spacing:"1"},e.createElement(l,{opacity:"0.5"}," Transportation to Poti"),e.createElement(a,null,"$ 400")),e.createElement(o,{align:"flex-start",spacing:"1"},e.createElement(l,{opacity:"0.5"}," Auction fee"),e.createElement(a,null,"$ 400")),e.createElement(n,{p:"17px 24px",borderRadius:"8px",bg:"autoGrey.200"},e.createElement(l,{opacity:"0.5"},"Total"),e.createElement(a,null,"$ 800"))));I.use([M,z,G]);const de=({images:t})=>{const[r,c]=h.exports.useState(null);return e.createElement(u,{w:"full"},e.createElement(u,{borderRadius:"8px",overflow:"hidden"},e.createElement(C,{spaceBetween:4,thumbs:{swiper:r},className:"mySwiper2"},t.map(i=>e.createElement(E,{key:i},e.createElement(p,{ratio:579/364,width:"579px"},e.createElement(w,{src:i,borderRadius:"8px"})))))),e.createElement(u,{pt:"4"},e.createElement(C,{onSwiper:i=>c(i),spaceBetween:10,slidesPerView:5,freeMode:!0,watchSlidesProgress:!0,className:"mySwiper"},t.slice(0,t.length-1).map(i=>e.createElement(E,{key:i},e.createElement(p,{ratio:103/70,cursor:"pointer",width:"103px"},e.createElement(w,{src:i,borderRadius:"8px",width:"103px"})))),e.createElement(E,{style:{position:"relative"}},e.createElement(p,{ratio:103/70,cursor:"pointer",width:"103px"},e.createElement(u,{borderRadius:"8px"},e.createElement(w,{src:t[t.length-1],width:"103px"}),e.createElement(u,{position:"absolute",top:"0",right:"0",bottom:"0",left:"0",cursor:"pointer",background:"rgba(0, 0, 0,0.5)",zIndex:"1"},e.createElement(H,{h:"full"},e.createElement(l,{fontSize:"24px",color:"white",opacity:"1"},"+6")))))))))},fe=ne({displayName:"SeenIcon",viewBox:"0 0 14 12",path:e.createElement(e.Fragment,null,e.createElement("path",{id:"seen",d:"M8.181,3a7.182,7.182,0,0,1,7,6,7.181,7.181,0,0,1-7,6,7.182,7.182,0,0,1-7-6A7.181,7.181,0,0,1,8.181,3Zm0,10.667A5.866,5.866,0,0,0,13.86,9,5.866,5.866,0,0,0,8.181,4.34,5.867,5.867,0,0,0,2.5,9,5.867,5.867,0,0,0,8.181,13.667Zm0-1.667a3,3,0,0,1,0-6,3,3,0,0,1,0,6Zm0-1.333A1.667,1.667,0,1,0,6.563,9,1.643,1.643,0,0,0,8.181,10.667Z",transform:"translate(-1.181 -3)"}))}),W=({car:t})=>e.createElement(n,{w:"full",justify:"space-between"},e.createElement(o,{spacing:"0",alignItems:"flex-start"},e.createElement(re,{fontSize:"20px",lineHeight:"26px",fontWeight:"light"},(t==null?void 0:t.y)||""," ",t==null?void 0:t.m," ",t==null?void 0:t.mG),e.createElement(n,null,e.createElement(l,{opacity:"0.5"},"Lot #"),e.createElement(l,{pr:"16px"},e.createElement(m,null)),e.createElement(ie,{as:fe,ml:"10px",opacity:"0.5"}),e.createElement(l,null,"15"))),e.createElement(te,{h:"48px",w:"50px",carId:t.id,buttonInactiveColor:"#E8E8E8"})),ge=({car:t})=>e.createElement(y,null,e.createElement(O,{pt:"40px",justify:"space-between",position:"relative",alignItems:"start"},e.createElement(o,{spacing:"49px",w:"579px"},t.imgUrls.length?e.createElement(de,{images:t.imgUrls}):e.createElement(p,{ratio:579/364,width:"579px"},e.createElement(o,{bg:"autoGrey.400",borderRadius:"8px"},e.createElement(a,null,"No photos available"))),e.createElement(pe,{car:t}),e.createElement(Ee,null),e.createElement(q,{variant:"desktop",car:t})),e.createElement(ue,{minW:"20px"}),e.createElement(o,{position:"relative",alignSelf:"stretch",spacing:"4"},e.createElement(W,{car:t}),e.createElement(o,{w:"441px",spacing:"32px",alignItems:"flex-start",position:"sticky",top:"90px"},e.createElement(L,{car:t}),e.createElement(X,{children:!0,size:"regular"}))))),we=({})=>e.createElement(d,{heading:"Transportation and fee"},e.createElement(o,{w:"full",spacing:"18px"},e.createElement(n,{w:"full",justify:"space-between"},e.createElement(l,{opacity:"0.5"},"Transportation in Poti"),e.createElement(a,null,"$ 400")),e.createElement(n,{w:"full",justify:"space-between"},e.createElement(l,{opacity:"0.5"},"Auction fee"),e.createElement(a,{textAlign:"end",w:"40%"},"$ 400")),e.createElement(n,{w:"full",justify:"space-between"},e.createElement(l,{opacity:"0.5"},"Total"),e.createElement(a,null,"$ 800")))),be=({car:t})=>e.createElement(d,{heading:"Car information"},e.createElement(o,{w:"full",spacing:"18px"},e.createElement(n,{w:"full",justify:"space-between"},e.createElement(l,{opacity:"0.5"},"Primary damage"),e.createElement(a,null,t.dmg?g(t.dmg):e.createElement(m,null))),e.createElement(n,{w:"full",justify:"space-between"},e.createElement(l,{opacity:"0.5"},"Secondary damage"),e.createElement(a,{textAlign:"end",w:"40%"},e.createElement(m,null))),e.createElement(n,{w:"full",justify:"space-between"},e.createElement(l,{opacity:"0.5"},"Sales Status"),e.createElement(a,null,e.createElement(m,null))),e.createElement(n,{w:"full",justify:"space-between"},e.createElement(l,{opacity:"0.5"},"Location"),e.createElement(a,null,t.lC||e.createElement(m,null))))),ye="_mobileCarDetailThumbs_1l2po_1";var xe={mobileCarDetailThumbs:ye};I.use([M,z,G]);const he=({images:t})=>{const[r,c]=h.exports.useState(null),i=Array(5).fill(0);return e.createElement(u,{w:"full"},e.createElement(u,{borderRadius:"8px"},e.createElement(C,{spaceBetween:0,thumbs:{swiper:r},className:"mySwiper2"},t.length?e.createElement(e.Fragment,null,t.map(s=>e.createElement(E,{key:s},e.createElement(p,{ratio:3/2,width:"full"},e.createElement(w,{src:s}))))):e.createElement(e.Fragment,null,i.map(s=>e.createElement(E,{key:s},e.createElement(p,{ratio:3/2,width:"full"},e.createElement(u,{bg:"autoGrey.400"},e.createElement(P,null)))))))),e.createElement(u,{pt:"4",pl:"4"},e.createElement(C,{className:xe.mobileCarDetailThumbs,onSwiper:s=>c(s),spaceBetween:10,breakpoints:{200:{slidesPerView:2.2},260:{slidesPerView:2.6},290:{slidesPerView:2.8},300:{slidesPerView:3},320:{slidesPerView:3.2},340:{slidesPerView:3.4},370:{slidesPerView:3.8},400:{slidesPerView:4.1},420:{slidesPerView:4.3},445:{slidesPerView:4.5},480:{slidesPerView:4.8},500:{slidesPerView:5}},freeMode:!0,watchSlidesProgress:!0},t.length?e.createElement(e.Fragment,null,t.slice(0,t.length-1).map(s=>e.createElement(E,{key:s},e.createElement(p,{ratio:88/70,cursor:"pointer",width:"88px"},e.createElement(w,{src:s,borderRadius:"8px",width:"88px"})))),e.createElement(E,{style:{position:"relative"}},e.createElement(p,{ratio:88/70,cursor:"pointer",width:"88px"},e.createElement(u,{borderRadius:"8px"},e.createElement(w,{src:t[t.length-1],width:"full",h:"full"}),e.createElement(u,{position:"absolute",top:"0",right:"0",bottom:"0",left:"0",borderRadius:"8px",cursor:"pointer",background:"rgba(0, 0, 0,0.5)",zIndex:"1"},e.createElement(H,{h:"full"},e.createElement(l,{fontSize:"24px",color:"white",opacity:"1"},"+6"))))))):e.createElement(e.Fragment,null,Array(5).fill(0).map(s=>e.createElement(E,{key:s},e.createElement(p,{ratio:3/2,width:"full"},e.createElement(u,{bg:"autoGrey.400",borderRadius:"8px"},e.createElement(P,null)))))))))},Ce=({car:t})=>{const{fetchingMediums:r,fetchingThumbs:c}=N(s=>s.carImages),{lotNumber:i}=B();return e.createElement(e.Fragment,null,e.createElement(y,{p:"0"},r[i]||c[i]?e.createElement(e.Fragment,null,e.createElement(p,{ratio:3/2,width:"full"},e.createElement(u,{bg:"autoGrey.400"},e.createElement(P,null)))):e.createElement(e.Fragment,null,t.imgUrls.length?e.createElement(he,{images:t.imgUrls}):e.createElement(p,{ratio:3/2,width:"full"},e.createElement(u,{bg:"autoGrey.400"},e.createElement(a,null,"No photos available"))))),e.createElement(y,{pt:"4"},e.createElement(n,null,e.createElement(o,{spacing:"48px",w:"full"},e.createElement(W,{car:t}),e.createElement(l,{lineHeight:"24px",opacity:"0.5",mt:"24px !important"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ullam ex dolores incidunt, nam quam similique eius esse perspiciatis non, iure aperiam, laborum officiis omnis blanditiis quas consequuntur modi enim."),e.createElement(L,{car:t}),e.createElement(be,{car:t}),e.createElement(we,null),e.createElement(q,{car:t,variant:"mobile"})))))},Ue=()=>{const[t,r]=h.exports.useState(),{dealerCars:c}=N(f=>f.carsReducer),i=ce(),{carId:s}=B(),{isDesktop:S}=Y();return h.exports.useEffect(()=>{i(me(""));const f=c.find(b=>b.id===s);f?r(f):i(se(s)).unwrap().then(b=>r(b))},[]),t?e.createElement(K,null,S?e.createElement(ge,{car:t}):e.createElement(Ce,{car:t}),e.createElement(y,{mt:"65px"},e.createElement(ee,{mainText:"Similar vehicles"})),e.createElement(y,{mt:[null,null,null,"-20px"],p:["0",null,null,"4"]},e.createElement(J,{car:Q}))):e.createElement(e.Fragment,null,"...loading car info")};export{Ue as CarDetailPageDealer,Ue as default};
