var U=Object.defineProperty;var I=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var V=(t,n,r)=>n in t?U(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,M=(t,n)=>{for(var r in n||(n={}))A.call(n,r)&&V(t,r,n[r]);if(I)for(var r of I(n))B.call(n,r)&&V(t,r,n[r]);return t};var H=(t,n)=>{var r={};for(var c in t)A.call(t,c)&&n.indexOf(c)<0&&(r[c]=t[c]);if(t!=null&&I)for(var c of I(t))n.indexOf(c)<0&&B.call(t,c)&&(r[c]=t[c]);return r};import{R as e,r as S,k as N}from"./vendor.1d447835.js";import{H as a,a as l,b as z,i as C,k as T,O as X,u as J,P as Q}from"./PublicLayout.36d61366.js";import{C as ee,a as te,D as le}from"./DamnCard.b6c37399.js";import{S as v,a as w,b as ae}from"./SelectWrapper.6a0581bf.js";import{C as ne}from"./Card.c4247a9e.js";import{V as s,H as i,g as re,B as p,C as G,a0 as ie,a1 as ce,I as me,e as P,K as R,d as se,av as oe,aw as ue,ax as pe}from"./index.db40930d.js";import{t as L,c as j,B as Ee}from"./DropdownIcon.484678a4.js";import{S as de}from"./simple-grid.06e946cc.js";import{N as m}from"./NotSpecified.248637eb.js";import{S as $,f as q,N as W,T as _}from"./swiper.3c4df1c1.js";import{A as d}from"./aspect-ratio.8c66dbd7.js";import{I as D}from"./image.a04870b1.js";import{S as ge}from"./spacer.8b97d77a.js";import"./prop-types.d6ec705b.js";import"./formik.89f0ab96.js";import"./SliderBlue.23a1795d.js";import"./react-redux.f7be6d05.js";import"./axios.7b768d2b.js";import"./focus-visible.b325fe5e.js";import"./use-toast.ad4ccd52.js";const y=f=>{var k=f,{headingBg:t="autoBlue.400",headinCl:n="#fff",headingFontSize:r,headingPadding:c="12px 24px 12px 24px",bodyPadding:o="24px",w:E="full",maxW:g=[null,null,"480px","full"],heading:x,children:u}=k,F=H(k,["headingBg","headinCl","headingFontSize","headingPadding","bodyPadding","w","maxW","heading","children"]);return e.createElement(ne,M({p:"0",maxW:g,w:E},F),e.createElement(a,{bg:t,fontSize:r,borderTopRadius:"8px",padding:c,color:n},x),e.createElement(s,{p:o},u))},Z=({car:t})=>e.createElement(y,{heading:"Bid information",w:"full"},e.createElement(i,{w:"full",alignItems:"baseline"},e.createElement(s,{w:"full",align:"flex-start",spacing:"0"},e.createElement(l,{opacity:"0.5"}," Current bid"),e.createElement(a,{color:"autoOrange.500",fontSize:"20px"},"$ ",L(Number(t.curB)))),e.createElement(s,{w:"full",align:"flex-start",spacing:"0"},e.createElement(l,{opacity:"0.5"}," Time leeft"),e.createElement(a,null,"1d 3h 10m"))),e.createElement(de,{spacingX:"15px",spacingY:"10px",w:"full",pt:"4",minChildWidth:"170px"},e.createElement(z,null,"Contact"),e.createElement(z,{color:"#000",gridRow:1,bg:"#F0F0F0",_active:{bg:"autoGrey.400"},display:"flex",alignItems:"center"},"But it now",e.createElement(l,{opacity:"0.5",ml:"4"}," ","$ ",Number(t.bin).toFixed(0))))),O=({car:t})=>e.createElement(s,{divider:e.createElement(re,null),w:"full",spacing:"2.5"},e.createElement(i,{w:"full",justify:"space-between"},e.createElement(l,{opacity:"0.5"},"VIN number"),e.createElement(a,null,t.lN||e.createElement(m,null))),e.createElement(i,{w:"full",justify:"space-between"},e.createElement(l,{opacity:"0.5"},"Manufacturer"),e.createElement(a,null,t.m?C(t.m):e.createElement(m,null))),e.createElement(i,{w:"full",justify:"space-between"},e.createElement(l,{opacity:"0.5"},"Model"),e.createElement(a,null,t.mD?j(t.mD):e.createElement(m,null))),e.createElement(i,{w:"full",justify:"space-between"},e.createElement(l,{opacity:"0.5"},"Year"),e.createElement(a,null,t.y||e.createElement(m,null))),e.createElement(i,{w:"full",justify:"space-between"},e.createElement(l,{opacity:"0.5"},"Category"),e.createElement(a,null,t.bSt||e.createElement(m,null))),e.createElement(i,{w:"full",justify:"space-between"},e.createElement(l,{opacity:"0.5"},"Fuel type"),e.createElement(a,null,t.fuel?C(t.fuel):e.createElement(m,null))),e.createElement(i,{w:"full",justify:"space-between"},e.createElement(l,{opacity:"0.5"},"Engine"),e.createElement(a,null,t.eng?e.createElement(e.Fragment,null,t.eng," L"):e.createElement(m,null))),e.createElement(i,{w:"full",justify:"space-between"},e.createElement(l,{opacity:"0.5"},"page"),e.createElement(a,null,t.od?e.createElement(e.Fragment,null,L(parseInt(t.od))," km"):e.createElement(m,null))),e.createElement(i,{w:"full",justify:"space-between"},e.createElement(l,{opacity:"0.5"},"Has Keys"),e.createElement(a,null,t.keys?C(t.keys):e.createElement(m,null))),e.createElement(i,{w:"full",justify:"space-between"},e.createElement(l,{opacity:"0.5"},"Cylinder"),e.createElement(a,null,t.cyl||e.createElement(m,null))),e.createElement(i,{w:"full",justify:"space-between"},e.createElement(l,{opacity:"0.5"},"Wheel"),e.createElement(a,null,t.dr||e.createElement(m,null))),e.createElement(i,{w:"full",justify:"space-between"},e.createElement(l,{opacity:"0.5"},"Color"),e.createElement(a,null,t.c?C(t.c):e.createElement(m,null))),e.createElement(i,{w:"full",justify:"space-between"},e.createElement(l,{opacity:"0.5"},"Gear type"),e.createElement(a,null,t.trans?C(t.trans):e.createElement(m,null))),e.createElement(i,{w:"full",justify:"space-between"},e.createElement(l,{opacity:"0.5"},"Highlights:"),e.createElement(a,null,t.rd?e.createElement(e.Fragment,null,t.rd==="DEFAULT"?"Run and Drive":e.createElement(e.Fragment,null,j(t.rd))):e.createElement(m,null)))),K=({variant:t,car:n})=>e.createElement(e.Fragment,null,t==="mobile"?e.createElement(y,{heading:"Car details",headingBg:"transparent",bg:"transparent",headinCl:"#000",headingFontSize:"20px",bodyPadding:"0",headingPadding:"12px 0px 25px 0px"},e.createElement(O,{car:n})):e.createElement(y,{heading:"Car details"},e.createElement(O,{car:n}))),fe=({car:t})=>e.createElement(y,{heading:"Car information"},e.createElement(l,{pb:"30px",lineHeight:"27px"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci autem deserunt doloribus reprehenderit quibusdam facere laudantium, neque nostrum nisi pariatur molestias ducimus esse quo in quis, accusamus excepturi assumenda modi?"),e.createElement(s,{w:"full",p:"24px",borderRadius:"8px",bg:"#F4F4F4",spacing:"41px"},e.createElement(i,{w:"full",justify:"space-between"},e.createElement(s,{w:"full",alignItems:"flex-start",spacing:"4px"},e.createElement(l,{opacity:"0.5"},"Primary damage"),e.createElement(a,null,t.dmg?e.createElement(e.Fragment,null,j(t.dmg)):e.createElement(m,null))),e.createElement(s,{w:"full",alignItems:"flex-start",spacing:"4px"},e.createElement(l,{opacity:"0.5"},"Secondary damage"),e.createElement(a,null,t.sDmg?e.createElement(e.Fragment,null,j(t.sDmg)):e.createElement(m,null)))),e.createElement(i,{w:"full",justify:"space-between"},e.createElement(s,{w:"full",alignItems:"flex-start",spacing:"4px"},e.createElement(l,{opacity:"0.5"},"Sales Status"),e.createElement(a,null,t.sS||e.createElement(m,null))),e.createElement(s,{w:"full",alignItems:"flex-start",spacing:"4px"},e.createElement(l,{opacity:"0.5"},"Location"),e.createElement(a,null,t.lC||e.createElement(m,null)))))),we=({})=>e.createElement(y,{heading:"Transportation and fee"},e.createElement(i,{w:"full",justify:"space-between",align:"flex-start"},e.createElement(s,{align:"flex-start",spacing:"1"},e.createElement(l,{opacity:"0.5"}," Transportation to Poti"),e.createElement(a,null,"$ 400")),e.createElement(s,{align:"flex-start",spacing:"1"},e.createElement(l,{opacity:"0.5"}," Auction fee"),e.createElement(a,null,"$ 400")),e.createElement(i,{p:"17px 24px",borderRadius:"8px",bg:"autoGrey.200"},e.createElement(l,{opacity:"0.5"},"Total"),e.createElement(a,null,"$ 800"))));$.use([q,W,_]);const be=({thumbs:t,images:n})=>{const[r,c]=S.exports.useState(null);return e.createElement(p,{w:"full"},e.createElement(p,{borderRadius:"8px",overflow:"hidden"},e.createElement(v,{spaceBetween:4,thumbs:{swiper:r},className:"mySwiper2"},n.map(o=>e.createElement(w,{key:o},e.createElement(d,{ratio:579/364,width:"579px"},e.createElement(D,{src:o,borderRadius:"8px"})))))),e.createElement(p,{pt:"4"},e.createElement(v,{onSwiper:o=>c(o),spaceBetween:10,slidesPerView:5,freeMode:!0,watchSlidesProgress:!0,className:"mySwiper"},t.slice(0,t.length-1).map(o=>e.createElement(w,{key:o},e.createElement(d,{ratio:103/70,cursor:"pointer",width:"103px"},e.createElement(D,{src:o,borderRadius:"8px",width:"103px"})))),e.createElement(w,{style:{position:"relative"}},e.createElement(d,{ratio:103/70,cursor:"pointer",width:"103px"},e.createElement(p,{borderRadius:"8px"},e.createElement(D,{src:t[t.length-1],width:"103px"}),e.createElement(p,{position:"absolute",top:"0",right:"0",bottom:"0",left:"0",cursor:"pointer",background:"rgba(0, 0, 0,0.5)",zIndex:"1"},e.createElement(G,{h:"full"},e.createElement(l,{fontSize:"24px",color:"white",opacity:"1"},"+6")))))))))},ye=ie({displayName:"SeenIcon",viewBox:"0 0 14 12",path:e.createElement(e.Fragment,null,e.createElement("path",{id:"seen",d:"M8.181,3a7.182,7.182,0,0,1,7,6,7.181,7.181,0,0,1-7,6,7.182,7.182,0,0,1-7-6A7.181,7.181,0,0,1,8.181,3Zm0,10.667A5.866,5.866,0,0,0,13.86,9,5.866,5.866,0,0,0,8.181,4.34,5.867,5.867,0,0,0,2.5,9,5.867,5.867,0,0,0,8.181,13.667Zm0-1.667a3,3,0,0,1,0-6,3,3,0,0,1,0,6Zm0-1.333A1.667,1.667,0,1,0,6.563,9,1.643,1.643,0,0,0,8.181,10.667Z",transform:"translate(-1.181 -3)"}))}),Y=({car:t})=>e.createElement(i,{w:"full",justify:"space-between"},e.createElement(s,{spacing:"0",alignItems:"flex-start"},e.createElement(ce,{fontSize:"20px",lineHeight:"26px",fontWeight:"light"},t==null?void 0:t.y," ",t==null?void 0:t.m," ",t==null?void 0:t.mG),e.createElement(i,null,e.createElement(l,{opacity:"0.5"},"Lot #"),e.createElement(l,{pr:"16px"},t.lN||"-"),e.createElement(me,{as:ye,ml:"10px",opacity:"0.5"}),e.createElement(l,null,"15"))),e.createElement(Ee,{h:"48px",w:"50px",carId:t.id,buttonInactiveColor:"#E8E8E8"})),xe=({car:t,thumbs:n,images:r})=>{const{fetchingMediums:c,fetchingThumbs:o}=P(g=>g.carImages),{lotNumber:E}=N();return e.createElement(T,null,e.createElement(X,{pt:"40px",justify:"space-between",position:"relative",alignItems:"start"},e.createElement(s,{spacing:"49px",w:"579px"},c[E]||o[E]?e.createElement(e.Fragment,null,e.createElement(d,{ratio:579/364,width:"579px"},e.createElement(p,{bg:"autoGrey.400",borderRadius:"8px"},e.createElement(R,null)))):e.createElement(e.Fragment,null,!n.length||!r.length?e.createElement(d,{ratio:579/364,width:"579px"},e.createElement(s,{bg:"autoGrey.400",borderRadius:"8px"},e.createElement(a,null,"No photos available"))):e.createElement(be,{thumbs:n,images:r})),e.createElement(fe,{car:t}),e.createElement(we,null),e.createElement(K,{variant:"desktop",car:t})),e.createElement(ge,{minW:"20px"}),e.createElement(s,{position:"relative",alignSelf:"stretch",spacing:"4"},e.createElement(Y,{car:t}),e.createElement(s,{w:"441px",spacing:"32px",alignItems:"flex-start",position:"sticky",top:"90px"},e.createElement(Z,{car:t}),e.createElement(ee,{children:!0,size:"regular"})))))},he=({})=>e.createElement(y,{heading:"Transportation and fee"},e.createElement(s,{w:"full",spacing:"18px"},e.createElement(i,{w:"full",justify:"space-between"},e.createElement(l,{opacity:"0.5"},"Transportation in Poti"),e.createElement(a,null,"$ 400")),e.createElement(i,{w:"full",justify:"space-between"},e.createElement(l,{opacity:"0.5"},"Auction fee"),e.createElement(a,{textAlign:"end",w:"40%"},"$ 400")),e.createElement(i,{w:"full",justify:"space-between"},e.createElement(l,{opacity:"0.5"},"Total"),e.createElement(a,null,"$ 800")))),Se=({car:t})=>e.createElement(y,{heading:"Car information"},e.createElement(s,{w:"full",spacing:"18px"},e.createElement(i,{w:"full",justify:"space-between"},e.createElement(l,{opacity:"0.5"},"Primary damage"),e.createElement(a,null,t.dmg?C(t.dmg):e.createElement(m,null))),e.createElement(i,{w:"full",justify:"space-between"},e.createElement(l,{opacity:"0.5"},"Secondary damage"),e.createElement(a,{textAlign:"end",w:"40%"},t.sDmg?j(t.sDmg):e.createElement(m,null))),e.createElement(i,{w:"full",justify:"space-between"},e.createElement(l,{opacity:"0.5"},"Sales Status"),e.createElement(a,null,t.sS?j(t.sS):e.createElement(m,null))),e.createElement(i,{w:"full",justify:"space-between"},e.createElement(l,{opacity:"0.5"},"Location"),e.createElement(a,null,t.lC||e.createElement(m,null))))),Ce="_mobileCarDetailThumbs_1l2po_1";var je={mobileCarDetailThumbs:Ce};$.use([q,W,_]);const De=({thumbs:t,images:n})=>{const[r,c]=S.exports.useState(null),{fetchingThumbs:o,fetchingMediums:E}=P(u=>u.carImages),{lotNumber:g}=N(),x=Array(5).fill(0);return e.createElement(p,{w:"full"},e.createElement(p,{borderRadius:"8px"},e.createElement(v,{spaceBetween:0,thumbs:{swiper:r},className:"mySwiper2"},E[g]?e.createElement(e.Fragment,null,x.map(u=>e.createElement(w,{key:u},e.createElement(d,{ratio:3/2,width:"full"},e.createElement(p,{bg:"autoGrey.400"},e.createElement(R,null)))))):e.createElement(e.Fragment,null,n.map(u=>e.createElement(w,{key:u},e.createElement(d,{ratio:3/2,width:"full"},e.createElement(D,{src:u}))))))),e.createElement(p,{pt:"4",pl:"4"},e.createElement(v,{className:je.mobileCarDetailThumbs,onSwiper:u=>c(u),spaceBetween:10,breakpoints:{200:{slidesPerView:2.2},260:{slidesPerView:2.6},290:{slidesPerView:2.8},300:{slidesPerView:3},320:{slidesPerView:3.2},340:{slidesPerView:3.4},370:{slidesPerView:3.8},400:{slidesPerView:4.1},420:{slidesPerView:4.3},445:{slidesPerView:4.5},480:{slidesPerView:4.8},500:{slidesPerView:5}},freeMode:!0,watchSlidesProgress:!0},o[g]?e.createElement(e.Fragment,null,Array(5).fill(0).map(u=>e.createElement(w,{key:u},e.createElement(d,{ratio:3/2,width:"full"},e.createElement(p,{bg:"autoGrey.400",borderRadius:"8px"},e.createElement(R,null)))))):e.createElement(e.Fragment,null,t.slice(0,t.length-1).map(u=>e.createElement(w,{key:u},e.createElement(d,{ratio:88/70,cursor:"pointer",width:"88px"},e.createElement(D,{src:u,borderRadius:"8px",width:"88px"})))),e.createElement(w,{style:{position:"relative"}},e.createElement(d,{ratio:88/70,cursor:"pointer",width:"88px"},e.createElement(p,{borderRadius:"8px"},e.createElement(D,{src:t[t.length-1],width:"full",h:"full"}),e.createElement(p,{position:"absolute",top:"0",right:"0",bottom:"0",left:"0",borderRadius:"8px",cursor:"pointer",background:"rgba(0, 0, 0,0.5)",zIndex:"1"},e.createElement(G,{h:"full"},e.createElement(l,{fontSize:"24px",color:"white",opacity:"1"},"+6"))))))))))},Fe=({car:t,images:n,thumbs:r})=>{const{fetchingMediums:c,fetchingThumbs:o}=P(g=>g.carImages),{lotNumber:E}=N();return e.createElement(e.Fragment,null,e.createElement(T,{p:"0"},c[E]||o[E]?e.createElement(e.Fragment,null,e.createElement(d,{ratio:3/2,width:"full"},e.createElement(p,{bg:"autoGrey.400"},e.createElement(R,null)))):e.createElement(e.Fragment,null,r.length&&n.length?e.createElement(De,{thumbs:r,images:n}):e.createElement(d,{ratio:3/2,width:"full"},e.createElement(p,{bg:"autoGrey.400"},e.createElement(a,null,"No photos available"))))),e.createElement(T,{pt:"4"},e.createElement(i,null,e.createElement(s,{spacing:"48px",w:"full"},e.createElement(Y,{car:t}),e.createElement(l,{lineHeight:"24px",opacity:"0.5",mt:"24px !important"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ullam ex dolores incidunt, nam quam similique eius esse perspiciatis non, iure aperiam, laborum officiis omnis blanditiis quas consequuntur modi enim."),e.createElement(Z,{car:t}),e.createElement(Se,{car:t}),e.createElement(he,null),e.createElement(K,{car:t,variant:"mobile"})))))},Ke=()=>{const[t,n]=S.exports.useState(),[r,c]=S.exports.useState([]),[o,E]=S.exports.useState([]),{cars:g}=P(h=>h.carsReducer),{thumbImages:x,mediumImages:u}=P(h=>h.carImages),F=se(),{lotNumber:f}=N(),{isDesktop:k}=J();return S.exports.useEffect(()=>{u[f]?E(u[f]):F(oe(parseInt(f))).unwrap().then(b=>E(b)),x[f]?c(x[f]):F(ue(parseInt(f))).unwrap().then(b=>c(b));const h=g.find(b=>b.lN===f);h?n(h):F(pe(Number(f))).unwrap().then(b=>n(b))},[]),t?e.createElement(Q,null,k?e.createElement(xe,{car:t,thumbs:r,images:o}):e.createElement(Fe,{car:t,thumbs:r,images:o}),e.createElement(T,{mt:"65px"},e.createElement(ae,{mainText:"Similar vehicles"})),e.createElement(T,{mt:[null,null,null,"-20px"],p:["0",null,null,"4"]},e.createElement(te,{car:le}))):e.createElement(e.Fragment,null,"...loading car info")};export{Ke as CarDetailPage,Ke as default};
