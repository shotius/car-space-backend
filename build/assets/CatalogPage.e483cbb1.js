var De=Object.defineProperty,He=Object.defineProperties;var Pe=Object.getOwnPropertyDescriptors;var te=Object.getOwnPropertySymbols;var me=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable;var Se=(e,n,o)=>n in e?De(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,M=(e,n)=>{for(var o in n||(n={}))me.call(n,o)&&Se(e,o,n[o]);if(te)for(var o of te(n))Ce.call(n,o)&&Se(e,o,n[o]);return e},R=(e,n)=>He(e,Pe(n));var B=(e,n)=>{var o={};for(var s in e)me.call(e,s)&&n.indexOf(s)<0&&(o[s]=e[s]);if(e!=null&&te)for(var s of te(e))n.indexOf(s)<0&&Ce.call(e,s)&&(o[s]=e[s]);return o};import{b as u,a as m,br as se,aL as re,bs as ke,j as t,e as f,o as w,A as Ne,aH as _e,V as y,$ as L,T as k,r as p,O as T,aK as Oe,f as Le,c as ze,bt as Ye,a5 as Ge,a3 as $e,a1 as Ve,H as We,x as pe,B as we,bu as V,bv as F,bw as W,bx as j,by as K,bz as Q,X as Fe,p as G,bA as Z,bB as q,bC as z,bD as U,bE as le,bF as oe,bG as je,au as xe,bH as X,bI as J,bl as Te,I as be,bq as Ee,bi as Ke,bJ as ve,w as ie,P as D,bK as ye,bL as Qe,bM as Ze,bN as qe,bO as Ue,bP as Xe,bQ as Je,bR as et,bS as tt,v as nt}from"./index.a179b8fa.js";import{S as st}from"./ScrollToTop.a7861fba.js";import{u as lt,T as ot}from"./types.cb80ff16.js";import{b as ae,a as ne}from"./range.693a08fc.js";import{C as Ae}from"./Card.abd9be45.js";import{I as rt}from"./chakra-ui-image.esm.69a35d05.js";import{D as ct,C as Me}from"./CurrencySwitcherButtons.f490b66a.js";import{A as it,u as ce,a as he,B as at,M as dt,Y as pt,S as Re,b as H,c as P,d as ht,e as ut,f as ft}from"./MobileYearSelect.a5d0e25c.js";import{A as gt}from"./ArrowPrevIcon.c2091d02.js";import{u as Ie}from"./useMediaQueryMin.583e979b.js";import{C as St}from"./CatalogListWrap.7521ec07.js";import{S as ue,C as de}from"./SelectTrigger.9b3fff4a.js";import{S as fe,a as E,b as ge}from"./SelectWrapper.5461406b.js";import{c as I}from"./TextSecondary.21a5048f.js";const mt=()=>{const e=u(a=>a.catalogBanner.isCatalogBannerOpen),n=u(a=>a.catalogBanner.catalogBannerDealerName),o=u(a=>a.catalogBanner.catalogBannerImage),s=m();return{dealerImage:o,dealerName:n,isOpen:e,closeBanner:()=>{s(se()),s(re("")),s(ke())}}},Ct=({})=>{const{isOpen:e,dealerImage:n,dealerName:o,closeBanner:s}=mt();return t(Ae,{w:"full",p:["4","30px"],display:e?"block":"none",children:f(w,{spacing:"32px",position:"relative",children:[t(Ne,{minW:["60px",null,"80px"],ratio:1/1,borderRadius:"100px",bg:"white",children:t(rt,{src:n,borderRadius:"100px",fallbackSrc:lt})}),t(ae,{icon:_e,boxSize:6,position:"absolute",right:"-2",top:["50%","-2"],transform:["translateY(-50%)","translateY(0%)"],_active:{bg:"autoGrey.400"},onClick:s}),f(y,{alignItems:"flex-start",children:[t(L,{fontSize:"16px",children:o}),t(k,{fontSize:"14px",lineHeight:"24px",opacity:"63%",pr:"35px",display:["none",null,"block"],children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, magnam deleniti voluptatum officiis tempore aperiam quasi error hic reiciendis facilis dicta saepe quam vel ex tempora impedit accusamus blanditiis nisi? aperiam quasi error accusamus blanditiis nisi?"})]})]})})},xt=o=>{var s=o,{children:e}=s,n=B(s,["children"]);return t(Ae,R(M({bg:["transparent",null,"autoBlue.400"],p:["0",null,"16px"],w:"full",minH:"auto"},n),{children:e}))},bt=({activePage:e,totalPages:n,onChange:o,paginNumbers:s})=>{const{isDesktop:r,isMobile:a,isTablet:i}=u(C=>C.globalAppState.screen),[l,d]=p.exports.useState([]),[c,h]=p.exports.useState([]),[g,b]=p.exports.useState([]),{isLargerThan:O}=Ie(360);let S=3;i&&(S=5),r&&(S=10);const x=l.length===1,v=c.length===1,A=e>c.length-S;return p.exports.useEffect(()=>{e===S?d(s.slice(0,S+1)):e>S?d([1]):d(s.slice(0,S)),e>S&&e<=n-S?b(a?[e-1,e,e+1]:[e-2,e-1,e,e+1,e+2]):b([]),e===n-S+1?(h(s.slice(n-S-1,n)),d([1])):e>n-S?(h(s.slice(n-S,n)),d([1])):h([n]),s.length<S+3&&(d([...s]),b([]),h([]))},[e,n]),t(w,{children:O?f(w,{w:"full",display:s.length>1?"flex":"none",children:[l.map(C=>t(ne,{onClick:()=>o(C),active:e===C,children:t(L,{fontSize:"18px",fontWeight:"light",children:C})},C)),t(k,{display:x?"block":"none",children:"..."}),g.map(C=>t(ne,{onClick:()=>o(C),active:e===C,children:t(L,{fontSize:"18px",fontWeight:"light",children:C})},C)),t(k,{display:v?"block":"none",children:"..."}),c.map(C=>t(ne,{onClick:()=>o(C),active:e===C,display:O&&A?"block":"none",children:t(L,{fontSize:"18px",fontWeight:"light",children:C})},C))]}):f(T,{children:[t(k,{display:e>1?"block":"none",children:"..."}),t(ne,{active:!0,children:t(L,{fontSize:"18px",fontWeight:"light",children:e})}),t(k,{display:e<s.length?"block":"none",children:"..."})]})})},yt=r=>{var a=r,{activePage:e,totalPages:n=1,onPageChange:o}=a,s=B(a,["activePage","totalPages","onPageChange"]);const i=[...Array(n).keys()].map(l=>l+1);return f(w,R(M({spacing:["1","2"]},s),{children:[t(ae,{variant:"ghost",bg:"transparent",icon:gt,disabled:e===1,onClick:()=>o(e-1),boxSize:"6",_active:{bg:"autoGrey.400"},display:n===1?"none":"block"}),t(bt,{activePage:e,totalPages:n,onChange:o,paginNumbers:i}),t(ae,{variant:"ghost",bg:"transparent",icon:it,fill:"#000",boxSize:"6",disabled:e===n,onClick:()=>o(e+1),_active:{bg:"autoGrey.400"},display:n===1?"none":"block"})]}))},kt=()=>{const e=u(a=>a.carsPagination.activePage),n=ce(),o=m(),s=Number(n.get("page"))||1;return{setActiveCatalogPage:()=>{e?n.set("page",e.toString()):n.set("page",s.toString()),o(Oe(n.get("page"))),o(re(n.toString()))}}},Ot=()=>{const e=Le(),n=p.exports.useRef(),o=u(a=>a.globalAppState.networkError),s=()=>{n.current=e({title:o,status:"error",position:"top",duration:3e3,isClosable:!0})};return{checkForNetworkError:()=>{o&&s()},NetworkErrorAlert:s}},wt=()=>{const e=m(),n=ce(),o=ze(),s=he(),{setActiveCatalogPage:r}=kt(),{checkForNetworkError:a}=Ot(),i=Number(n.get("page"))||1,l=u(x=>x.carsReducer.dealerCars),d=u(x=>x.carsPagination.totalPages),c=u(x=>x.carsReducer.fetchingDealerCars),h=u(x=>x.userInfoSlice.isAuthenticated),g=u(x=>x.globalAppState.networkError),b=u(x=>x.globalAppState.catalogQuery),O=u(x=>x.selectedCarFilters);return p.exports.useEffect(()=>{a()},[g]),p.exports.useEffect(()=>(b||(e(Ye(!0)),r()),()=>{e(ke())}),[]),p.exports.useEffect(()=>{h&&e(Ge(""))},[h]),p.exports.useEffect(()=>{b!==n.toString()&&(s(O),e(Oe(n.get("page"))))},[i,b]),{query:n,cars:l,fethingCars:c,totalPages:d,page:i,changePage:x=>{n.set("page",String(x)),o.push({search:n.toString()})}}},Ft=()=>{const{fethingCars:e,cars:n,totalPages:o,page:s,changePage:r}=wt();return e?t(y,{h:"100vh",w:"full",children:t($e,{})}):f(y,{spacing:"90px",w:"full",children:[n.length?t(St,{gap:"16px",children:n.map((a,i)=>t(Ve,{justify:"center",children:t(ct,{car:a})},i))}):t(We,{children:"No Results found"}),t(yt,{totalPages:o,activePage:s,onPageChange:a=>r(a),display:n.length?"flex":"none"})]})};const Tt=()=>f("svg",{id:"Group_975","data-name":"Group 975",xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 40 40",children:[f("g",{id:"Rectangle_160","data-name":"Rectangle 160",fill:"none",stroke:"#3d405b",strokeWidth:"1.5",children:[t("rect",{width:"40",height:"40",rx:"8",stroke:"none"}),t("rect",{x:"0.75",y:"0.75",width:"38.5",height:"38.5",rx:"7.25",fill:"none"})]}),f("g",{id:"Group_937","data-name":"Group 937",transform:"translate(8 8)",children:[t("path",{id:"Path_454","data-name":"Path 454",d:"M0,0H24V24H0Z",fill:"none"}),t("path",{id:"Path_1582","data-name":"Path 1582",d:"M2.651,20.667a.96.96,0,0,0,.457.258,1.061,1.061,0,0,0,.522,0,1.012,1.012,0,0,0,.456-.254l6.266-6.278,6.272,6.277a1.027,1.027,0,0,0,1.435,0,1,1,0,0,0,.289-.723.968.968,0,0,0-.286-.713L11.79,12.954l6.272-6.265a.988.988,0,0,0,.291-.717.946.946,0,0,0-.294-.719,1,1,0,0,0-.723-.29.961.961,0,0,0-.712.287l-6.272,6.275L4.086,5.249a1,1,0,0,0-.456-.255,1.108,1.108,0,0,0-.522,0,.892.892,0,0,0-.457.262,1.028,1.028,0,0,0-.257.461,1.061,1.061,0,0,0,0,.522.951.951,0,0,0,.254.452l6.265,6.267L2.648,19.231a.993.993,0,0,0-.259.452,1.043,1.043,0,0,0,0,.527A.926.926,0,0,0,2.651,20.667Z",transform:"translate(1.647 -0.961)",fill:"#3d405b"})]})]}),Et=()=>f("svg",{id:"Group_974","data-name":"Group 974",xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 40 40",children:[f("g",{id:"Rectangle_160","data-name":"Rectangle 160",fill:"none",stroke:"#3d405b",strokeWidth:"1.5",children:[t("rect",{width:"40",height:"40",rx:"8",stroke:"none"}),t("rect",{x:"0.75",y:"0.75",width:"38.5",height:"38.5",rx:"7.25",fill:"none"})]}),f("g",{id:"Group_131","data-name":"Group 131",transform:"translate(8 8)",children:[t("path",{id:"Path_454","data-name":"Path 454",d:"M0,0H24V24H0Z",fill:"none"}),t("path",{id:"Path_455","data-name":"Path 455",d:"M5.336,14.8a2.4,2.4,0,0,1,4.528,0H18v1.6H9.864a2.4,2.4,0,0,1-4.528,0H2V14.8Zm4.8-5.6a2.4,2.4,0,0,1,4.528,0H18v1.6H14.664a2.4,2.4,0,0,1-4.528,0H2V9.2Zm-4.8-5.6a2.4,2.4,0,0,1,4.528,0H18V5.2H9.864a2.4,2.4,0,0,1-4.528,0H2V3.6ZM7.6,5.2a.8.8,0,1,0-.8-.8A.8.8,0,0,0,7.6,5.2Zm4.8,5.6a.8.8,0,1,0-.8-.8A.8.8,0,0,0,12.4,10.8ZM7.6,16.4a.8.8,0,1,0-.8-.8A.8.8,0,0,0,7.6,16.4Z",transform:"translate(2 2.002)",fill:"#3d405b"})]})]}),vt=({selected:e,label:n,onApply:o,clearSelected:s})=>{const[r,a]=p.exports.useState(!1),[i,l]=p.exports.useState("");p.exports.useEffect(()=>{e.length?l(`${e.join(", ")}`):l(n)},[e]);const d=()=>a(!1),c=()=>{d(),o()},h=O=>{O.stopPropagation&&O.stopPropagation(),s(),a(!1)},g=!!e.length;return{closeOptions:d,areOptionsOpen:r,setAreOptionsOpen:a,placeholder:i,handeClose:c,clearCb:h,areOptionsSelected:g,isBlack:r||g}},N=l=>{var d=l,{selected:e,label:n,children:o,clearSelected:s,onApply:r,size:a}=d,i=B(d,["selected","label","children","clearSelected","onApply","size"]);const{areOptionsOpen:c,setAreOptionsOpen:h,placeholder:g,clearCb:b,handeClose:O,areOptionsSelected:S,isBlack:x}=vt({selected:e,label:n,onApply:r,clearSelected:s});return f(fe,{areOptionsOpen:c,children:[t(pe,{isActive:c,onClick:O}),f(E,{children:[t(ue,{size:a,areOptionsOpen:c,clearCb:b,areOptionsSelected:S,onClick:()=>h(v=>!v),children:t(w,{pl:"4",pr:"28px",h:"40px",w:"full",bg:"white",_hover:{bg:"autoGrey.200"},borderRadius:"8px",children:t(k,{opacity:x?"1":"0.5",noOfLines:1,children:g})})}),t(ge,R(M({isOpen:c},i),{children:o}))]})]})},Y=o=>{var s=o,{children:e}=s,n=B(s,["children"]);return t(we,R(M({p:"4",w:"full",whiteSpace:"normal",borderRadius:"none",textAlign:"start",display:"flex",justifyContent:"flex-start",fontWeight:"400",variant:"ghost",_hover:{bg:"autoGrey.100"}},n),{children:e}))},At=({})=>{const[e,n]=p.exports.useState([]),{conditions:o}=u(l=>l.carsReducer),{conditions:s}=u(l=>l.selectedCarFilters),r=m(),a=o.filter(l=>l);p.exports.useEffect(()=>{s.length?n(s):n([])},[s]);const i=l=>{e.includes(l)?n(e.filter(d=>d!==l)):n([l].concat(e))};return t(N,{size:"md",selected:e,label:"condition",clearSelected:()=>{n([]),r(V([]))},onApply:()=>r(V(e)),top:"35px",children:t(E,{children:a.map(l=>t(Y,{onClick:d=>{d.preventDefault(),i(l)},children:t(F,{colorScheme:"autoOrange",isChecked:e==null?void 0:e.includes(l),children:t(k,{w:"full",children:I(l)})})},l))})})},Mt=({})=>{const[e,n]=p.exports.useState([]),{cylinders:o}=u(l=>l.carsReducer),{cylinders:s}=u(l=>l.selectedCarFilters),r=m(),a=o.filter(l=>l).map(l=>l.toString());p.exports.useEffect(()=>{s.length?n(s):n([])},[s]);const i=l=>{e.includes(l)?n(e.filter(d=>d!==l)):n([l].concat(e))};return t(N,{size:"md",selected:e,label:"cylinders",clearSelected:()=>{n([]),r(W([]))},onApply:()=>r(W(e)),top:"35px",children:t(E,{children:a.map(l=>t(Y,{onClick:d=>{d.preventDefault(),i(l)},children:t(F,{colorScheme:"autoOrange",isChecked:e==null?void 0:e.includes(l),children:t(k,{w:"full",children:l})})},l))})})},Rt=({})=>{const[e,n]=p.exports.useState([]),{drives:o}=u(l=>l.carsReducer),{drives:s}=u(l=>l.selectedCarFilters),r=m(),a=o.filter(l=>l);p.exports.useEffect(()=>{s.length?n(s):n([])},[s]);const i=l=>{e.includes(l)?n(e.filter(d=>d!==l)):n([l].concat(e))};return t(N,{size:"md",selected:e,label:"drives",clearSelected:()=>{n([]),r(j([]))},onApply:()=>r(j(e)),top:"35px",children:t(E,{children:a.map(l=>t(Y,{onClick:d=>{d.preventDefault(),i(l)},children:t(F,{colorScheme:"autoOrange",isChecked:e==null?void 0:e.includes(l),children:t(k,{w:"full",children:l})})},l))})})},It=()=>{const[e,n]=p.exports.useState(!1),[o,s]=p.exports.useState(0),[r,a]=p.exports.useState(0),[i,l]=p.exports.useState(""),{engineFrom:d,engineTo:c}=u(C=>C.selectedCarFilters),h=m();p.exports.useEffect(()=>{l(o||r?`${o} - ${r}`:"engine")},[o,r]),p.exports.useEffect(()=>{s(d?Number(d):0),a(c?Number(c):0)},[d,c]);const g=(C,ee)=>{const $=[];for(let _=C;_<=ee;_=parseFloat(((_*100+10)/100).toFixed(1)))$.push(_);return $},b=()=>{n(!1),h(K(o)),h(Q(r))},O=C=>{C.stopPropagation&&C.stopPropagation(),a(0),s(0),h(K(0)),h(Q(0)),l(""),n(!1)},S=C=>{s(C),C>=r&&a(C)},x=C=>{a(C),C<=o&&s(C)},v=!!(o||r);return{areOptionsOpen:e,generatedEngines:g,engineFrom:o,engineTo:r,handleClose:b,claerCb:O,setAreOptionsOpen:n,areOptionsSelected:v,isBlack:e||v,placeholder:i,handleSelectEngineFrom:S,handleSelectEngineTo:x}},Bt=n=>{var e=B(n,[]);const{placeholder:o,generatedEngines:s,areOptionsOpen:r,handleClose:a,engineFrom:i,engineTo:l,claerCb:d,setAreOptionsOpen:c,isBlack:h,areOptionsSelected:g,handleSelectEngineFrom:b,handleSelectEngineTo:O}=It();return f(fe,R(M({},e),{areOptionsOpen:r,bg:"white",borderRadius:"8px",children:[t(pe,{isActive:r,onClick:a}),f(E,{children:[t(ue,{areOptionsOpen:r,clearCb:d,areOptionsSelected:g,onClick:()=>c(S=>!S),children:t(w,{pl:"4",h:"40px",w:"full",_hover:{bg:"autoGrey.200"},borderRadius:"8px",children:t(k,{opacity:h?"1":"0.5",children:o})})}),t(ge,{isOpen:r,w:"full",children:f(w,{h:"290px",w:"full",divider:t(Fe,{borderColor:"autoGrey.400"}),pr:"2px",children:[" ",f(y,{h:"full",w:"full",spacing:"4",children:[t(k,{fontSize:"16px",children:"From"}),t(y,{h:"full",w:"full",spacing:"4",overflowY:"scroll",css:{"&::-webkit-scrollbar":{display:"none"}},children:s(.5,6).map(S=>t(G,{fontSize:"16px",lineHeight:"21px",w:"full",color:i===S?"autoOrange.400":"#000",onClick:()=>b(S),children:S.toFixed(1)},S))})]}),f(y,{h:"full",w:"full",spacing:"4",children:[t(k,{fontSize:"16px",children:"To"}),t(y,{h:"full",w:"full",spacing:"4",overflowY:"scroll",css:{"&::-webkit-scrollbar":{display:"none"}},children:s(.5,6).map(S=>t(G,{fontSize:"16px",lineHeight:"21px",w:"full",color:l===S?"autoOrange.400":"#000",onClick:()=>O(S),children:S.toFixed(1)},S))})]})]})})]})]}))},Dt=({})=>{const[e,n]=p.exports.useState([]),{fuels:o}=u(l=>l.carsReducer),{fuels:s}=u(l=>l.selectedCarFilters),r=m(),a=o.filter(l=>l);p.exports.useEffect(()=>{s.length?n(s):n([])},[s]);const i=l=>{e.includes(l)?n(e.filter(d=>d!==l)):n([l].concat(e))};return t(N,{size:"md",selected:e,label:"fuel type",clearSelected:()=>{n([]),r(Z([]))},onApply:()=>r(Z(e)),top:"35px",children:t(E,{children:a.map(l=>t(Y,{onClick:d=>{d.preventDefault(),i(l)},children:t(F,{colorScheme:"autoOrange",isChecked:e==null?void 0:e.includes(l),children:t(k,{w:"full",children:I(l)})})},l))})})},Ht=({})=>{const[e,n]=p.exports.useState(null),o=u(r=>r.selectedCarFilters.keys);p.exports.useEffect(()=>{n(o||null)},[o]);const s=m();return t(N,{size:"md",selected:e?[e]:[],label:e||"keys",clearSelected:()=>{n(null),s(q(null))},onApply:()=>e&&s(q(e)),top:"35px",children:f(E,{align:"flex-start",spacing:"0",children:[f(w,{p:"2",pl:"4",onClick:()=>n(z.YES),_hover:{bg:"autoGrey.100"},w:"full",cursor:"pointer",children:[t("input",{type:"radio",name:"has_keys",value:"YES",checked:e==="YES",readOnly:!0}),t(k,{children:"Yes"})]}),f(w,{p:"2",pl:"4",onClick:()=>n(z.NO),_hover:{bg:"autoGrey.100"},w:"full",cursor:"pointer",children:[t("input",{type:"radio",name:"has_keys",value:"NO",checked:e==="NO",readOnly:!0}),t(k,{children:"No"})]})," "]})})},Pt=({})=>{const[e,n]=p.exports.useState([]),{locations:o}=u(l=>l.carsReducer),{locations:s}=u(l=>l.selectedCarFilters),r=m(),a=o.filter(l=>l);p.exports.useEffect(()=>{s.length?n(s):n([])},[s]);const i=l=>{e.includes(l)?n(e.filter(d=>d!==l)):n([l].concat(e))};return t(N,{size:"md",selected:e,label:"location",clearSelected:()=>{n([]),r(U([]))},onApply:()=>r(U(e)),top:"35px",children:t(E,{children:a.map(l=>t(Y,{onClick:d=>{d.preventDefault(),i(l)},children:t(F,{colorScheme:"autoOrange",isChecked:e==null?void 0:e.includes(l),children:t(k,{w:"full",children:l})})},l))})})},Nt=()=>{const[e,n]=p.exports.useState(!1),[o,s]=p.exports.useState(""),[r,a]=p.exports.useState(""),[i,l]=p.exports.useState(""),{priceFrom:d,priceTo:c,currency:h}=u(A=>A.selectedCarFilters),g=m(),b=()=>{switch(h){case"GEL":return"\u20BE";case"EUR":return"\u20AC";case"USD":return"$"}};p.exports.useEffect(()=>{a(d||""),l(c||"")},[d,c]),p.exports.useEffect(()=>{s(i&&r?` ${b()} ${r} - ${i} `:r?`from: ${h} ${r}`:i?`to: ${h} ${i}`:"price")},[r,i,h]);const O=()=>{n(!1),g(le(r)),g(oe(i)),g(je(h))},S=A=>{A.stopPropagation&&A.stopPropagation(),g(le("")),g(oe("")),a(""),l(""),s("Price"),n(!1)},x=!!r||!!i;return{areOptionsOpen:e,setAreOptionsOpen:n,placeholder:o,handleClose:O,clearCb:S,priceFrom:r,priceTo:i,areOptionsSelected:x,setPriceFrom:a,setPriceTo:l,isBlack:e||x}},_t=({})=>{const{placeholder:e,clearCb:n,handleClose:o,areOptionsOpen:s,setAreOptionsOpen:r,priceFrom:a,priceTo:i,areOptionsSelected:l,setPriceFrom:d,setPriceTo:c,isBlack:h}=Nt();return f(fe,{areOptionsOpen:s,children:[t(pe,{isActive:s,onClick:o}),f(E,{children:[t(ue,{size:"md",areOptionsOpen:s,clearCb:n,areOptionsSelected:l,onClick:()=>r(g=>!g),children:t(w,{pl:"4",h:"40px",w:"full",bg:"white",_hover:{bg:"autoGrey.200"},borderRadius:"8px",children:t(k,{opacity:h?"1":"0.5",children:e})})}),t(ge,{isOpen:s,w:"full",top:"35px",children:f(y,{p:"0px 16px 16px",align:"flex-start",children:[t(Me,{}),f(y,{children:[t(xe,{placeholder:"From",h:"37px",type:"number",value:a,onChange:g=>d(g.currentTarget.value)}),t(xe,{placeholder:"To",h:"37px",type:"number",value:i,onChange:g=>c(g.currentTarget.value)})]})]})})]})]})},Lt=({})=>{const[e,n]=p.exports.useState([]),o=m(),s=u(l=>l.carsReducer.transmissions),r=u(l=>l.selectedCarFilters.transmission),a=s.filter(l=>l);p.exports.useEffect(()=>{r.length?n(r):n([])},[r]);const i=l=>{e.includes(l)?n(e.filter(d=>d!==l)):n([l].concat(e))};return t(N,{size:"md",selected:e,label:"transmission",clearSelected:()=>{n([]),o(X([]))},onApply:()=>o(X(e)),children:t(E,{children:a.map(l=>t(Y,{onClick:d=>{d.preventDefault(),i(l)},children:t(F,{colorScheme:"autoOrange",isChecked:e==null?void 0:e.includes(l),children:t(k,{children:I(l)})})},l))})})},zt=({})=>{const[e,n]=p.exports.useState([]),{types:o}=u(l=>l.carsReducer),{types:s}=u(l=>l.selectedCarFilters),r=m(),a=o.filter(l=>l);p.exports.useEffect(()=>{s.length?n(s):n([])},[s]);const i=l=>{e.includes(l)?n(e.filter(d=>d!==l)):n([l].concat(e))};return t(N,{size:"md",selected:e,label:"types",clearSelected:()=>{n([]),r(J([]))},onApply:()=>r(J(e)),top:"35px",children:t(E,{children:a.map(l=>t(Y,{onClick:d=>{d.preventDefault(),i(l)},children:t(F,{colorScheme:"autoOrange",isChecked:e==null?void 0:e.includes(l),children:t(k,{w:"full",children:I(l)})})},l))})})},Yt=a=>{var i=a,{p:e="2",bg:n="#fff",direction:o="row",borderRadius:s="md"}=i,r=B(i,["p","bg","direction","borderRadius"]);const l=m(),d=u(b=>b.selectedCarFilters),c=u(b=>b.selectedCarFilters.isAdvancedFiltersOpen),h=()=>l(ve()),g=he();return f(T,{children:[f(Te,R(M({p:e,bg:n,direction:o,borderRadius:s,alignItems:"center"},r),{children:[t(at,{labelPadding:"2",w:["100%","100%","100%"]}),t(de,{height:["40px",null,null,"30px"],borderColor:"gray.300"}),t(dt,{}),t(de,{height:["40px",null,null,"30px"],borderColor:"gray.300"}),t(pt,{}),f(w,{spacing:{md:"0",xl:"2"},children:[t(Re,{w:{md:"140px",lg:"144px","2xl":"211px"},ml:[null,null,"0px","16px"],mr:"2",onClick:()=>g(d)}),c?t(be,{icon:t(Tt,{}),onClick:h,"aria-label":"close advanced filters",bg:"white",_hover:{bg:"white"},_active:{bg:"white"}}):t(be,{onClick:h,icon:t(Et,{}),"aria-label":"open advanced filters",bg:"white",_hover:{bg:"white"},_active:{bg:"white"}})]})]})),t(Ee,{in:c,className:"collapsableFilters",children:f(Ke,{templateColumns:[null,"1fr 1fr","repeat(3, 1fr)","repeat(5, 1fr)"],spacingX:"4",spacingY:"2",mt:["2","4",null,"4",null,"24px"],children:[t(_t,{}),t(Bt,{}),t(At,{}),t(zt,{}),t(Lt,{}),t(Ht,{}),t(Rt,{}),t(Pt,{}),t(Dt,{}),t(Mt,{})]})})]})},Gt=l=>{var d=l,{isKeyboardActive:e,children:n,w:o="full",bottom:s="10px",pr:r="4",pl:a="4"}=d,i=B(d,["isKeyboardActive","children","w","bottom","pr","pl"]);return t(T,{children:e?t(ie,R(M({w:o,position:"fixed",bottom:s,pr:r,pl:a,zIndex:"modal"},i),{children:n})):t(ie,R(M({w:o},i),{children:n}))})},$t=({isOpen:e,onClose:n})=>{const{keys:o}=u(l=>l.selectedCarFilters),[s,r]=p.exports.useState(o),a=m();return p.exports.useEffect(()=>{r(o)},[]),t(H,{isOpen:e,onClose:n,onSubmit:()=>{s&&a(q(s)),n()},children:f(y,{w:"full",alignItems:"flex-start",children:[f(w,{children:[t("input",{type:"radio",name:"has_keys",value:"YES",checked:s==="YES",onChange:()=>r(z.YES)}),t(k,{children:"Yes"})]}),f(w,{children:[t("input",{type:"radio",name:"has_keys",value:"NO",checked:s==="NO",onChange:()=>r(z.NO)}),t(k,{children:"No"})]})]})})},Vt=({})=>{const{isOpen:e,onOpen:n,onClose:o}=D(),s=m(),{keys:r}=u(a=>a.selectedCarFilters);return f(T,{children:[t(P,{onClick:n,label:r?`Keys: ${r}`:"Keys",hasValue:!!r,onClear:()=>s(q(z.NO))}),t($t,{isOpen:e,onClose:o})]})},Wt=({isOpen:e,onClose:n})=>{const[o,s]=p.exports.useState([]),r=m(),{conditions:a}=u(c=>c.carsReducer),{conditions:i}=u(c=>c.selectedCarFilters);p.exports.useEffect(()=>{i.length&&s(i)},[i]);const l=()=>a.filter(c=>c),d=c=>{o.includes(c)?s(o.filter(h=>h!==c)):s(o.concat(c))};return t(H,{isOpen:e,onClose:n,onSubmit:()=>{r(V(o)),n()},children:t(y,{w:"full",alignItems:"flex-start",minH:"80vh",spacing:"16px",children:l().map(c=>t(F,{colorScheme:"autoOrange",defaultChecked:i==null?void 0:i.includes(c),onChange:h=>{h.preventDefault(),d(c)},children:I(c)},c))})})},jt=({})=>{const{isOpen:e,onOpen:n,onClose:o}=D(),s=m(),{conditions:r}=u(a=>a.selectedCarFilters);return f(T,{children:[t(P,{onClick:n,label:r.length?`Condition: ${I(r.join("; "))}`:"Condition",hasValue:!!r.length,onClear:()=>s(V([]))}),t(Wt,{isOpen:e,onClose:o})]})},Kt=({isOpen:e,onClose:n})=>{const[o,s]=p.exports.useState([]),r=m(),{cylinders:a}=u(c=>c.carsReducer),{cylinders:i}=u(c=>c.selectedCarFilters);p.exports.useEffect(()=>{i.length&&s(i)},[i]);const l=()=>a.filter(c=>c),d=c=>{o.includes(c)?s(o.filter(h=>h!==c)):s(o.concat(c))};return t(H,{isOpen:e,onClose:n,onSubmit:()=>{r(W(o)),n()},children:t(y,{w:"full",alignItems:"flex-start",maxH:"80vh",spacing:"16px",children:l().map(c=>t(F,{colorScheme:"autoOrange",defaultChecked:i==null?void 0:i.includes(c),onChange:h=>{h.preventDefault(),d(c)},children:c},c))})})},Qt=({})=>{const{isOpen:e,onOpen:n,onClose:o}=D(),s=m(),{cylinders:r}=u(a=>a.selectedCarFilters);return f(T,{children:[t(P,{onClick:n,label:r.length?`Cylinders: ${r.join(", ")}`:"Cylinders",hasValue:!!r.length,onClear:()=>s(W([]))}),t(Kt,{isOpen:e,onClose:o})]})},Zt=({isOpen:e,onClose:n})=>{const[o,s]=p.exports.useState([]),r=m(),{drives:a}=u(c=>c.carsReducer),{drives:i}=u(c=>c.selectedCarFilters);p.exports.useEffect(()=>{i.length&&s(i)},[i]);const l=()=>a.filter(c=>c),d=c=>{o.includes(c)?s(o.filter(h=>h!==c)):s(o.concat(c))};return t(H,{isOpen:e,onClose:n,onSubmit:()=>{r(j(o)),n()},children:t(y,{w:"full",alignItems:"flex-start",spacing:"16px",maxH:"80vh",children:l().map(c=>t(F,{colorScheme:"autoOrange",defaultChecked:i==null?void 0:i.includes(c),onChange:h=>{h.preventDefault(),d(c)},children:c},c))})})},qt=({})=>{const{isOpen:e,onOpen:n,onClose:o}=D(),s=m(),{drives:r}=u(a=>a.selectedCarFilters);return f(T,{children:[t(P,{onClick:n,label:r.join(", ")||"Drives",hasValue:!!r.length,onClear:()=>s(j([]))}),t(Zt,{isOpen:e,onClose:o})]})},Ut=({isOpen:e,onClose:n})=>{const{engineFrom:o,engineTo:s}=u(g=>g.selectedCarFilters),[r,a]=p.exports.useState(o||.5),[i,l]=p.exports.useState(s||.5),d=m(),c=(g,b)=>{const O=[];for(let S=g;S<=b;S=parseFloat(((S*100+10)/100).toFixed(1)))O.push(S);return O};return t(H,{isOpen:e,onClose:n,onSubmit:()=>{d(K(r)),d(Q(i)),n()},children:f(w,{h:"full",divider:t(Fe,{borderColor:"autoGrey.400"}),children:[f(y,{h:"full",w:"full",spacing:"4",children:[t(L,{fontSize:"16px",fontWeight:"600",children:"From"}),t(y,{h:"full",w:"full",spacing:"4",overflowY:"scroll",children:c(.5,6).map(g=>t(G,{fontSize:"16px",lineHeight:"21px",w:"full",color:r===g?"autoOrange.400":"#000",onClick:()=>{a(g),g>=i&&l(g)},children:g.toFixed(1)},g))})]}),f(y,{h:"full",w:"full",spacing:"4",children:[t(L,{fontSize:"16px",fontWeight:"600",children:"To"}),t(y,{h:"full",w:"full",spacing:"4",overflowY:"scroll",children:c(.5,6).map(g=>t(G,{fontSize:"16px",lineHeight:"21px",w:"full",color:i===g?"autoOrange.400":"#000",onClick:()=>{l(g),g<=r&&a(g)},children:g.toFixed(1)},g))})]})]})})},Xt=({})=>{const{isOpen:e,onClose:n,onOpen:o}=D(),s=m(),{engineFrom:r,engineTo:a}=u(i=>i.selectedCarFilters);return f(T,{children:[t(P,{label:r&&a?`Engine (from - to): ${Number(r).toFixed(1)}L -  ${Number(a).toFixed(1)}L `:"Engine",onClick:o,hasValue:!!(r&&a),onClear:()=>{s(K(null)),s(Q(null))}}),t(Ut,{onClose:n,isOpen:e})]})},Jt=({isOpen:e,onClose:n})=>{const[o,s]=p.exports.useState([]),r=m(),{fuels:a}=u(c=>c.carsReducer),{fuels:i}=u(c=>c.selectedCarFilters);p.exports.useEffect(()=>{i.length&&s(i)},[i]);const l=()=>a.filter(c=>c),d=c=>{o.includes(c)?s(o.filter(h=>h!==c)):s(o.concat(c))};return t(H,{isOpen:e,onClose:n,onSubmit:()=>{r(Z(o)),n()},children:t(y,{w:"full",alignItems:"flex-start",spacing:"16px",minH:"30vh",children:l().map(c=>t(F,{colorScheme:"autoOrange",defaultChecked:i==null?void 0:i.includes(c),onChange:h=>{h.preventDefault(),d(c)},children:I(c)},c))})})},en=({})=>{const{isOpen:e,onOpen:n,onClose:o}=D(),s=m(),{fuels:r}=u(a=>a.selectedCarFilters);return f(T,{children:[t(P,{onClick:n,label:r.length?`Fuel: ${I(r.join(", "))}`:"Fuel Types",hasValue:!!r.length,onClear:()=>s(Z([]))}),t(Jt,{isOpen:e,onClose:o})]})},tn=({isOpen:e,onClose:n})=>{const[o,s]=p.exports.useState([]),r=m(),{locations:a}=u(c=>c.carsReducer),{locations:i}=u(c=>c.selectedCarFilters);p.exports.useEffect(()=>{i.length?s(i):s([])},[i]);const l=()=>a.filter(c=>c),d=c=>{o.includes(c)?s(o.filter(h=>h!==c)):s(o.concat(c))};return t(H,{isOpen:e,onClose:n,onSubmit:()=>{r(U(o)),n()},children:t(y,{w:"full",alignItems:"flex-start",spacing:"16px",children:l().map(c=>t(F,{colorScheme:"autoOrange",defaultChecked:i==null?void 0:i.includes(c),onChange:h=>{h.preventDefault(),d(c)},children:c},c))})})},nn=o=>{var s=o,{w:e="full"}=s,n=B(s,["w"]);const{isOpen:r,onOpen:a,onClose:i}=D(),l=m(),{locations:d}=u(c=>c.selectedCarFilters);return f(ie,R(M({minW:e,maxW:e},n),{children:[t(P,{onClick:a,label:d.length?` ${d.join(", ")}`:"Locations",hasValue:!!d.length,onClear:()=>l(U([]))}),t(tn,{isOpen:r,onClose:i})]}))},sn=({setKeyboardActive:e})=>{const[n,o]=p.exports.useState(""),[s,r]=p.exports.useState(""),a=m(),{priceFrom:i,priceTo:l}=u(d=>d.selectedCarFilters);return p.exports.useEffect(()=>{o(i?i.toString():""),r(l?l.toString():"")},[i,l]),f(w,{borderRadius:"8px",bg:"white",spacing:0,flex:"1",p:"2px",children:[t(ye,{pr:"2",placeholder:"Price from",opacity:n?"1":"0.7",type:"number",value:n,onChange:d=>o(d.currentTarget.value),onFocus:()=>e(!0),onBlur:()=>{e(!1),a(le(n))}}),t(de,{height:"30px"}),t(ye,{placeholder:"Price to",type:"number",opacity:n?"1":"0.7",value:s,onChange:d=>r(d.currentTarget.value),onFocus:()=>e(!0),onBlur:()=>{e(!1),a(oe(s))}})]})},ln=({isOpen:e,onClose:n})=>{const{transmission:o}=u(c=>c.selectedCarFilters),[s,r]=p.exports.useState(o),a=m(),i=Object.values(ot);p.exports.useEffect(()=>{r(o)},[]);const l=c=>{if(!s.includes(c))r([...s,c]);else{const h=s.filter(g=>g!=c);r(h)}};return t(H,{isOpen:e,onClose:n,onSubmit:()=>{a(X(s)),n()},children:t(y,{w:"full",alignItems:"flex-start",children:i.map(c=>t(F,{colorScheme:"autoOrange",defaultChecked:o==null?void 0:o.includes(c),onChange:h=>{h.preventDefault(),l(c)},boxShadow:"none !important",shadow:"none !important",children:c},c))})})},on=({})=>{const{isOpen:e,onOpen:n,onClose:o}=D(),s=m(),{transmission:r}=u(a=>a.selectedCarFilters);return f(T,{children:[t(P,{onClick:n,label:r.length?`Transmission: ${r.join(", ")}`:"Transmission",hasValue:!!r.length,onClear:()=>s(X([]))}),t(ln,{isOpen:e,onClose:o})]})},rn=({isOpen:e,onClose:n})=>{const[o,s]=p.exports.useState([]),r=m(),{types:a}=u(c=>c.carsReducer),{types:i}=u(c=>c.selectedCarFilters);p.exports.useEffect(()=>{i.length&&s(i)},[i]);const l=()=>a.filter(c=>c),d=c=>{o.includes(c)?s(o.filter(h=>h!==c)):s(o.concat(c))};return t(H,{isOpen:e,onClose:n,onSubmit:()=>{r(J(o)),n()},children:t(y,{w:"full",alignItems:"flex-start",minH:"80vh",spacing:"16px",children:l().map(c=>t(F,{colorScheme:"autoOrange",defaultChecked:i==null?void 0:i.includes(c),onChange:h=>{h.preventDefault(),d(c)},children:I(c)},c))})})},cn=({})=>{const{isOpen:e,onOpen:n,onClose:o}=D(),s=m(),{types:r}=u(a=>a.selectedCarFilters);return f(T,{children:[t(P,{onClick:n,label:r.length?`Types: ${I(r.join("; "))}`:"Type",hasValue:!!r.length,onClear:()=>s(J([]))}),t(rn,{isOpen:e,onClose:o})]})},an=({})=>{const[e,n]=p.exports.useState(!1),o=u(i=>i.selectedCarFilters),s=u(i=>i.selectedCarFilters.isAdvancedFiltersOpen),r=m(),a=he();return f(Te,{children:[t(G,{_hover:{textDecoration:"underline"},pr:"4",alignSelf:"flex-end",onClick:()=>{r(se()),r(re(""))},children:"reset all filters"}),t(ht,{}),t(ut,{}),t(ft,{}),f(w,{justify:"space-between",children:[t(sn,{setKeyboardActive:n}),t(Me,{})]}),t(Ee,{in:s,children:f(y,{children:[t(Xt,{}),t(jt,{}),t(cn,{}),t(nn,{}),t(on,{}),t(Vt,{}),t(qt,{}),t(en,{}),t(Qt,{})]})}),f(y,{pt:"2",spacing:"3",children:[t(Gt,{isKeyboardActive:e,children:t(Re,{w:"full",isKeyboardActive:e,onClick:()=>{a(o),r(Qe())}})}),t(we,{variant:"link",onClick:()=>r(ve()),bg:"transparent",children:t(k,{color:"#000",display:e?"none":"block",lineHeight:"19px",fontWeight:"400",children:s?"See less filter":"See more filter"})})]})]})},dn=(e,n)=>{const o=n.slice().sort();return e.length===n.length&&e.slice().sort().every(function(s,r){return s===o[r]}),!1},pn=({modelQueryKeys:e,brands:n,query:o})=>{const s=[];return n.map(r=>s.push({brand:r,models:[]})),e.map(r=>{const a=r.slice(r.indexOf("[")+1,r.indexOf("]")),i=o.getAll(r);s.push({brand:a,models:i})}),s.filter(r=>r.models.length)},{MODEL:hn,YEAR_FROM:un,YEAR_TO:fn,CONDITION:gn,TYPE:Sn,LOCATION:mn,TRANSMISSION:Cn,KEYS:xn,DRIVE:bn,SALES_STATUS:yn,FUEL_TYPE:kn,CYLINDER:On,ENGINE_FROM:wn,ENGINE_TO:Fn,PRICE_FROM:Tn,PRICE_TO:En}=et,vn=()=>{const e=ce(),n=m(),o=u(r=>r.selectedCarFilters.brands);return{parseQueries:()=>{const r=e.getAll("brand");dn(r,o)||n(Ze(r));const a=[...new Set(Array.from(e.keys()).filter(Be=>Be.includes(`${hn}[`)))],i=pn({brands:r,modelQueryKeys:a,query:e});i.length&&n(qe(i));const l=e.get(un);l&&n(Ue(parseInt(l)));const d=e.get(fn);d&&n(Xe(parseInt(d)));const c=e.get(wn);c&&n(K(c));const h=e.get(Fn);h&&n(Q(h));const g=e.get(Tn);g&&n(le(g));const b=e.get(En);b&&n(oe(b));const O=e.getAll(gn);O.length&&n(V(O));const S=e.getAll(Sn);S.length&&n(J(S));const x=e.getAll(bn);x.length&&n(j(x));const v=e.getAll(mn);v.length&&n(U(v));const A=e.getAll(Cn);A.length&&n(X(A));const C=e.get(xn);(C===z.NO||C===z.YES)&&n(q(C));const ee=e.getAll(yn);ee.length&&n(Je(ee));const $=e.getAll(kn);$.length&&n(Z($));const _=e.getAll(On);_.length&&n(W(_))}}},An=()=>{const{isLargerThan:e}=Ie(737),n=u(a=>a.carsReducer.brands),o=ce(),s=m(),{parseQueries:r}=vn();return p.exports.useEffect(()=>{r()},[o]),p.exports.useEffect(()=>{n.length||s(tt())},[n]),t(T,{children:e?t(Yt,{}):t(an,{})})},Mn=()=>{const e=m();return p.exports.useEffect(()=>()=>{e(se())},[]),t(nt,{pt:["4","6",null,"8"],children:f(y,{w:"full",spacing:["66px"],children:[f(y,{w:"full",alignItems:"flex-end",children:[t(xt,{children:t(An,{})}),t(G,{display:["none",null,"block"],_hover:{textDecoration:"underline"},pr:"4",onClick:()=>{e(re("")),e(se())},children:"reset all filters"})]}),t(Ct,{}),t(Ft,{})]})})},jn=()=>f(T,{children:[t(st,{}),t(Mn,{})]});export{jn as CatalogPage,jn as default};
