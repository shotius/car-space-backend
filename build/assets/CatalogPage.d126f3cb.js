var Je=Object.defineProperty,Xe=Object.defineProperties;var et=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var Me=Object.prototype.hasOwnProperty,Re=Object.prototype.propertyIsEnumerable;var De=(t,n,s)=>n in t?Je(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,O=(t,n)=>{for(var s in n||(n={}))Me.call(n,s)&&De(t,s,n[s]);if(q)for(var s of q(n))Re.call(n,s)&&De(t,s,n[s]);return t},je=(t,n)=>Xe(t,et(n));var I=(t,n)=>{var s={};for(var r in t)Me.call(t,r)&&n.indexOf(r)<0&&(s[r]=t[r]);if(t!=null&&q)for(var r of q(t))n.indexOf(r)<0&&Re.call(t,r)&&(s[r]=t[r]);return s};import{R as e,r as p,u as tt}from"./vendor.576a7237.js";import{S as nt}from"./ScrollToTop.da3f839a.js";import{a as d,u as h,f as k,as as lt,be as U,aw as J,bf as He,V as b,J as H,T as C,c as st,av as _e,bg as rt,P as at,N as ct,L as ot,H as it,l as re,B as Be,bh as Y,bi as F,bj as z,bk as P,bl as G,bm as $,S as Le,g as L,bn as W,bo as V,bp as _,bq as K,br as X,bs as ee,bt as ut,ag as Ne,bu as Q,bv as Z,b9 as Ye,I as ze,bb as Pe,bw as Ge,k as ae,v as T,bx as ce,by as te,bz as oe,bA as ie,bB as pt,bC as mt,bD as dt,bE as ft,j as Et}from"./index.b5c2b2f7.js";import{u as ht,T as gt}from"./types.e421f34e.js";import{b as ue,a as ne}from"./ButtonRound.08a1ec52.js";import{C as $e}from"./Card.4ecdd92c.js";import{A as St}from"./aspect-ratio.7b334e60.js";import{I as xt}from"./image.5a4af73c.js";import{D as bt,C as We}from"./CurrencySwitcherButtons.35dc32cc.js";import{A as Ct,u as Ve,a as pe,B as yt,M as kt,Y as Ft,S as Ke,b as v,c as A,d as wt,e as Ot}from"./MobileModelSelect.501d10c6.js";import{A as Tt}from"./ArrowPrevIcon.28136b47.js";import{u as Qe}from"./useMediaQueryMin.adb50fce.js";import{C as vt}from"./CatalogListWrap.cde89ffd.js";import{S as me,C as le}from"./SelectTrigger.b67044b2.js";import{S as de,a as w,b as fe}from"./SelectWrapper.621e418e.js";import{S as At}from"./simple-grid.aa2caeda.js";import{c as N}from"./TextSecondary.99802333.js";import"./prop-types.d6ec705b.js";import"./react-redux.0b249e8a.js";import"./axios.7b768d2b.js";import"./formik.30c45d87.js";import"./yup.8a20e72b.js";import"./focus-visible.c4e3ef79.js";import"./swiper.3c4df1c1.js";import"./react-swipeable.2142026c.js";const It=({})=>{const t=d(a=>a.catalogBanner.isCatalogBannerOpen),n=d(a=>a.catalogBanner.catalogBannerDealerName),s=d(a=>a.catalogBanner.catalogBannerImage),r=h();return e.createElement($e,{w:"full",p:["4","30px"],display:t?"block":"none"},e.createElement(k,{spacing:"32px",position:"relative"},e.createElement(St,{minW:["60px",null,"80px"],ratio:1/1,borderRadius:"100px",bg:"white"},e.createElement(xt,{src:s,borderRadius:"100px",fallbackSrc:ht})),e.createElement(ue,{icon:lt,boxSize:6,position:"absolute",right:"-2",top:["50%","-2"],transform:["translateY(-50%)","translateY(0%)"],_active:{bg:"autoGrey.400"},onClick:()=>{r(U()),r(J("")),r(He())}}),e.createElement(b,{alignItems:"flex-start"},e.createElement(H,{fontSize:"16px"},n),e.createElement(C,{fontSize:"14px",lineHeight:"24px",opacity:"63%",pr:"35px",display:["none",null,"block"]},"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, magnam deleniti voluptatum officiis tempore aperiam quasi error hic reiciendis facilis dicta saepe quam vel ex tempora impedit accusamus blanditiis nisi? aperiam quasi error accusamus blanditiis nisi?"))))},Mt=s=>{var r=s,{children:t}=r,n=I(r,["children"]);return e.createElement($e,O({bg:["transparent",null,"autoBlue.400"],p:["0",null,"16px"],w:"full",minH:"auto"},n),t)},Rt=({activePage:t,totalPages:n,onChange:s,paginNumbers:r})=>{const{isDesktop:a,isMobile:u,isTablet:o}=d(y=>y.globalAppState.screen),[l,i]=p.exports.useState([]),[c,m]=p.exports.useState([]),[E,g]=p.exports.useState([]),{isLargerThan:x}=Qe(360);let f=3;o&&(f=5),a&&(f=10);const D=l.length===1,M=c.length===1,S=t>c.length-f;return p.exports.useEffect(()=>{t===f?i(r.slice(0,f+1)):t>f?i([1]):i(r.slice(0,f)),t>f&&t<=n-f?g(u?[t-1,t,t+1]:[t-2,t-1,t,t+1,t+2]):g([]),t===n-f+1?(m(r.slice(n-f-1,n)),i([1])):t>n-f?(m(r.slice(n-f,n)),i([1])):m([n]),r.length<f+3&&(i([...r]),g([]),m([]))},[t,n]),e.createElement(k,null,x?e.createElement(k,{w:"full",display:r.length>1?"flex":"none"},l.map(y=>e.createElement(ne,{key:y,onClick:()=>s(y),active:t===y},e.createElement(H,{fontSize:"18px",fontWeight:"light"},y))),e.createElement(C,{display:D?"block":"none"},"..."),E.map(y=>e.createElement(ne,{key:y,onClick:()=>s(y),active:t===y},e.createElement(H,{fontSize:"18px",fontWeight:"light"},y))),e.createElement(C,{display:M?"block":"none"},"..."),c.map(y=>e.createElement(ne,{key:y,onClick:()=>s(y),active:t===y,display:x&&S?"block":"none"},e.createElement(H,{fontSize:"18px",fontWeight:"light"},y)))):e.createElement(e.Fragment,null,e.createElement(C,{display:t>1?"block":"none"},"..."),e.createElement(ne,{active:!0},e.createElement(H,{fontSize:"18px",fontWeight:"light"},t)),e.createElement(C,{display:t<r.length?"block":"none"},"...")))},Dt=a=>{var u=a,{activePage:t,totalPages:n=1,onPageChange:s}=u,r=I(u,["activePage","totalPages","onPageChange"]);const o=[...Array(n).keys()].map(l=>l+1);return e.createElement(k,O({spacing:["1","2"]},r),e.createElement(ue,{variant:"ghost",bg:"transparent",icon:Tt,disabled:t===1,onClick:()=>s(t-1),boxSize:"6",_active:{bg:"autoGrey.400"},display:n===1?"none":"block"}),e.createElement(Rt,{activePage:t,totalPages:n,onChange:s,paginNumbers:o}),e.createElement(ue,{variant:"ghost",bg:"transparent",icon:Ct,fill:"#000",boxSize:"6",disabled:t===n,onClick:()=>s(t+1),_active:{bg:"autoGrey.400"},display:n===1?"none":"block"}))},jt=()=>{const t=d(S=>S.carsReducer.dealerCars),n=d(S=>S.carsPagination.activePage),s=d(S=>S.carsPagination.totalPages),r=d(S=>S.carsReducer.fetchingDealerCars),a=d(S=>S.userInfoSlice.isAuthenticated),u=d(S=>S.globalAppState.networkError),o=d(S=>S.globalAppState.catalogQuery),l=st(),i=p.exports.useRef(),c=d(S=>S.selectedCarFilters);p.exports.useEffect(()=>{u&&M()},[u]);const m=h(),E=tt(),g=Ve(),x=Number(g.get("page"))||1,f=pe();p.exports.useEffect(()=>(o?E.push({search:o}):(n?g.set("page",n.toString()):g.set("page",x.toString()),E.push({search:g.toString()}),m(_e(g.get("page"))),m(rt(!0)),m(J(g.toString()))),()=>{m(He())}),[]),p.exports.useEffect(()=>{a&&m(at(""))},[a]),p.exports.useEffect(()=>{o!==g.toString()&&(f(c),m(_e(g.get("page"))))},[x,o]);const D=S=>{g.set("page",String(S)),E.push({search:g.toString()})},M=()=>{i.current=l({title:u,status:"error",position:"top",duration:3e3,isClosable:!0})};return r?e.createElement(b,{h:"100vh",w:"full"},e.createElement(ct,null)):e.createElement(b,{spacing:"90px",w:"full"},t.length?e.createElement(vt,{gap:"16px"},t.map((S,y)=>e.createElement(ot,{justify:"center",key:y},e.createElement(bt,{car:S})))):e.createElement(it,null,"No Results found"),e.createElement(Dt,{totalPages:s,activePage:x,onPageChange:S=>D(S),display:t.length?"flex":"none"}))},Ht=()=>e.createElement("svg",{id:"Group_975","data-name":"Group 975",xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 40 40"},e.createElement("g",{id:"Rectangle_160","data-name":"Rectangle 160",fill:"none",stroke:"#3d405b",strokeWidth:"1.5"},e.createElement("rect",{width:"40",height:"40",rx:"8",stroke:"none"}),e.createElement("rect",{x:"0.75",y:"0.75",width:"38.5",height:"38.5",rx:"7.25",fill:"none"})),e.createElement("g",{id:"Group_937","data-name":"Group 937",transform:"translate(8 8)"},e.createElement("path",{id:"Path_454","data-name":"Path 454",d:"M0,0H24V24H0Z",fill:"none"}),e.createElement("path",{id:"Path_1582","data-name":"Path 1582",d:"M2.651,20.667a.96.96,0,0,0,.457.258,1.061,1.061,0,0,0,.522,0,1.012,1.012,0,0,0,.456-.254l6.266-6.278,6.272,6.277a1.027,1.027,0,0,0,1.435,0,1,1,0,0,0,.289-.723.968.968,0,0,0-.286-.713L11.79,12.954l6.272-6.265a.988.988,0,0,0,.291-.717.946.946,0,0,0-.294-.719,1,1,0,0,0-.723-.29.961.961,0,0,0-.712.287l-6.272,6.275L4.086,5.249a1,1,0,0,0-.456-.255,1.108,1.108,0,0,0-.522,0,.892.892,0,0,0-.457.262,1.028,1.028,0,0,0-.257.461,1.061,1.061,0,0,0,0,.522.951.951,0,0,0,.254.452l6.265,6.267L2.648,19.231a.993.993,0,0,0-.259.452,1.043,1.043,0,0,0,0,.527A.926.926,0,0,0,2.651,20.667Z",transform:"translate(1.647 -0.961)",fill:"#3d405b"}))),_t=()=>e.createElement("svg",{id:"Group_974","data-name":"Group 974",xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 40 40"},e.createElement("g",{id:"Rectangle_160","data-name":"Rectangle 160",fill:"none",stroke:"#3d405b",strokeWidth:"1.5"},e.createElement("rect",{width:"40",height:"40",rx:"8",stroke:"none"}),e.createElement("rect",{x:"0.75",y:"0.75",width:"38.5",height:"38.5",rx:"7.25",fill:"none"})),e.createElement("g",{id:"Group_131","data-name":"Group 131",transform:"translate(8 8)"},e.createElement("path",{id:"Path_454","data-name":"Path 454",d:"M0,0H24V24H0Z",fill:"none"}),e.createElement("path",{id:"Path_455","data-name":"Path 455",d:"M5.336,14.8a2.4,2.4,0,0,1,4.528,0H18v1.6H9.864a2.4,2.4,0,0,1-4.528,0H2V14.8Zm4.8-5.6a2.4,2.4,0,0,1,4.528,0H18v1.6H14.664a2.4,2.4,0,0,1-4.528,0H2V9.2Zm-4.8-5.6a2.4,2.4,0,0,1,4.528,0H18V5.2H9.864a2.4,2.4,0,0,1-4.528,0H2V3.6ZM7.6,5.2a.8.8,0,1,0-.8-.8A.8.8,0,0,0,7.6,5.2Zm4.8,5.6a.8.8,0,1,0-.8-.8A.8.8,0,0,0,12.4,10.8ZM7.6,16.4a.8.8,0,1,0-.8-.8A.8.8,0,0,0,7.6,16.4Z",transform:"translate(2 2.002)",fill:"#3d405b"}))),R=l=>{var i=l,{selected:t,label:n,children:s,clearSelected:r,onApply:a,size:u}=i,o=I(i,["selected","label","children","clearSelected","onApply","size"]);const[c,m]=p.exports.useState(!1),[E,g]=p.exports.useState("");p.exports.useEffect(()=>{t.length?g(`${t.join(", ")}`):g(n)},[t]);const x=()=>m(!1);return e.createElement(de,{areOptionsOpen:c},e.createElement(re,{isActive:c,onClick:()=>{x(),a()}}),e.createElement(w,null,e.createElement(me,{size:u,areOptionsOpen:c,clearCb:f=>{f.stopPropagation&&f.stopPropagation(),r(),m(!1)},areOptionsSelected:!!t.length,onClick:()=>m(f=>!f)},e.createElement(k,{pl:"4",pr:"28px",h:"40px",w:"full",bg:"white",_hover:{bg:"autoGrey.200"},borderRadius:"8px"},e.createElement(C,{opacity:c?"1":"0.5",noOfLines:1},E))),e.createElement(fe,O({isOpen:c},o),s)))},B=s=>{var r=s,{children:t}=r,n=I(r,["children"]);return e.createElement(Be,O({p:"4",w:"full",whiteSpace:"normal",borderRadius:"none",textAlign:"start",display:"flex",justifyContent:"flex-start",fontWeight:"400",variant:"ghost",_hover:{bg:"autoGrey.100"}},n),t)},Bt=({})=>{const[t,n]=p.exports.useState([]),{conditions:s}=d(l=>l.carsReducer),{conditions:r}=d(l=>l.selectedCarFilters),a=h(),u=s.filter(l=>l);p.exports.useEffect(()=>{r.length&&n(r)},[r]);const o=l=>{t.includes(l)?n(t.filter(i=>i!==l)):n([l].concat(t))};return e.createElement(R,{size:"md",selected:t,label:"condition",clearSelected:()=>{n([]),a(Y([]))},onApply:()=>a(Y(t)),top:"35px"},e.createElement(w,null,u.map(l=>e.createElement(B,{key:l,onClick:i=>{i.preventDefault(),o(l)}},e.createElement(F,{colorScheme:"autoOrange",isChecked:t==null?void 0:t.includes(l)},e.createElement(C,{w:"full"},l))))))},Lt=({})=>{const[t,n]=p.exports.useState([]),{cylinders:s}=d(l=>l.carsReducer),{cylinders:r}=d(l=>l.selectedCarFilters),a=h(),u=s.filter(l=>l).map(l=>l.toString());p.exports.useEffect(()=>{r.length&&n(r)},[r]);const o=l=>{t.includes(l)?n(t.filter(i=>i!==l)):n([l].concat(t))};return e.createElement(R,{size:"md",selected:t,label:"cylinders",clearSelected:()=>{n([]),a(z([]))},onApply:()=>a(z(t)),top:"35px"},e.createElement(w,null,u.map(l=>e.createElement(B,{key:l,onClick:i=>{i.preventDefault(),o(l)}},e.createElement(F,{colorScheme:"autoOrange",isChecked:t==null?void 0:t.includes(l)},e.createElement(C,{w:"full"},l))))))},Nt=({})=>{const[t,n]=p.exports.useState([]),{drives:s}=d(l=>l.carsReducer),{drives:r}=d(l=>l.selectedCarFilters),a=h(),u=s.filter(l=>l);p.exports.useEffect(()=>{r.length&&n(r)},[r]);const o=l=>{t.includes(l)?n(t.filter(i=>i!==l)):n([l].concat(t))};return e.createElement(R,{size:"md",selected:t,label:"drives",clearSelected:()=>{n([]),a(P([]))},onApply:()=>a(P(t)),top:"35px"},e.createElement(w,null,u.map(l=>e.createElement(B,{key:l,onClick:i=>{i.preventDefault(),o(l)}},e.createElement(F,{colorScheme:"autoOrange",isChecked:t==null?void 0:t.includes(l)},e.createElement(C,{w:"full"},l))))))},Yt=n=>{var t=I(n,[]);const[s,r]=p.exports.useState(!1),[a,u]=p.exports.useState(0),[o,l]=p.exports.useState(0),[i,c]=p.exports.useState(""),{engineFrom:m,engineTo:E}=d(f=>f.selectedCarFilters),g=h();p.exports.useEffect(()=>{c(a||o?`${a} - ${o}`:"engine")},[a,o]),p.exports.useEffect(()=>{m&&u(Number(m)),E&&l(Number(E))},[m,E]);const x=(f,D)=>{const M=[];for(let S=f;S<=D;S=parseFloat(((S*100+10)/100).toFixed(1)))M.push(S);return M};return e.createElement(de,je(O({},t),{areOptionsOpen:s,bg:"white",borderRadius:"8px"}),e.createElement(re,{isActive:s,onClick:()=>{r(!1),g(G(a)),g($(o))}}),e.createElement(w,null,e.createElement(me,{areOptionsOpen:s,clearCb:f=>{f.stopPropagation&&f.stopPropagation(),l(0),u(0),g(G(0)),g($(0)),c(""),r(!1)},areOptionsSelected:!!(a||o),onClick:()=>r(f=>!f)},e.createElement(k,{pl:"4",h:"40px",w:"full",_hover:{bg:"autoGrey.200"},borderRadius:"8px"},e.createElement(C,{opacity:s?"1":"0.5"},i))),e.createElement(fe,{isOpen:s,w:"full"},e.createElement(k,{h:"290px",w:"full",divider:e.createElement(Le,{borderColor:"autoGrey.400"}),pr:"2px"}," ",e.createElement(b,{h:"full",w:"full",spacing:"4"},e.createElement(C,{fontSize:"16px"},"From"),e.createElement(b,{h:"full",w:"full",spacing:"4",overflowY:"scroll",css:{"&::-webkit-scrollbar":{display:"none"}}},x(.5,6).map(f=>e.createElement(L,{fontSize:"16px",key:f,lineHeight:"21px",w:"full",color:a===f?"autoOrange.400":"#000",onClick:()=>{u(f),f>=o&&l(f)}},f.toFixed(1))))),e.createElement(b,{h:"full",w:"full",spacing:"4"},e.createElement(C,{fontSize:"16px"},"To"),e.createElement(b,{h:"full",w:"full",spacing:"4",overflowY:"scroll",css:{"&::-webkit-scrollbar":{display:"none"}}},x(.5,6).map(f=>e.createElement(L,{fontSize:"16px",key:f,lineHeight:"21px",w:"full",color:o===f?"autoOrange.400":"#000",onClick:()=>{l(f),f<=a&&u(f)}},f.toFixed(1)))))))))},zt=({})=>{const[t,n]=p.exports.useState([]),{fuels:s}=d(l=>l.carsReducer),{fuels:r}=d(l=>l.selectedCarFilters),a=h(),u=s.filter(l=>l);p.exports.useEffect(()=>{r.length&&n(r)},[r]);const o=l=>{t.includes(l)?n(t.filter(i=>i!==l)):n([l].concat(t))};return e.createElement(R,{size:"md",selected:t,label:"fuel type",clearSelected:()=>{n([]),a(W([]))},onApply:()=>a(W(t)),top:"35px"},e.createElement(w,null,u.map(l=>e.createElement(B,{key:l,onClick:i=>{i.preventDefault(),o(l)}},e.createElement(F,{colorScheme:"autoOrange",isChecked:t==null?void 0:t.includes(l)},e.createElement(C,{w:"full"},l))))))},Pt=({})=>{const[t,n]=p.exports.useState(null),{keys:s}=d(a=>a.selectedCarFilters);p.exports.useEffect(()=>{s&&n(s)},[s]);const r=h();return e.createElement(R,{size:"md",selected:t?[t]:[],label:t||"keys",clearSelected:()=>{n(null),r(V(null))},onApply:()=>t&&r(V(t)),top:"35px"},e.createElement(w,{align:"flex-start",spacing:"0"},e.createElement(k,{p:"2",pl:"4",onClick:()=>n(_.YES),_hover:{bg:"autoGrey.100"},w:"full",cursor:"pointer"},e.createElement("input",{type:"radio",name:"has_keys",value:"YES",checked:t==="YES",readOnly:!0}),e.createElement(C,null,"Yes")),e.createElement(k,{p:"2",pl:"4",onClick:()=>n(_.NO),_hover:{bg:"autoGrey.100"},w:"full",cursor:"pointer"},e.createElement("input",{type:"radio",name:"has_keys",value:"NO",checked:t==="NO",readOnly:!0}),e.createElement(C,null,"No"))," "))},Gt=({})=>{const[t,n]=p.exports.useState([]),{locations:s}=d(l=>l.carsReducer),{locations:r}=d(l=>l.selectedCarFilters),a=h(),u=s.filter(l=>l);p.exports.useEffect(()=>{r.length&&n(r)},[r]);const o=l=>{t.includes(l)?n(t.filter(i=>i!==l)):n([l].concat(t))};return e.createElement(R,{size:"md",selected:t,label:"location",clearSelected:()=>{n([]),a(K([]))},onApply:()=>a(K(t)),top:"35px"},e.createElement(w,null,u.map(l=>e.createElement(B,{key:l,onClick:i=>{i.preventDefault(),o(l)}},e.createElement(F,{colorScheme:"autoOrange",isChecked:t==null?void 0:t.includes(l)},e.createElement(C,{w:"full"},l))))))},$t=({})=>{const[t,n]=p.exports.useState(!1),[s,r]=p.exports.useState(""),[a,u]=p.exports.useState(""),[o,l]=p.exports.useState(""),{priceFrom:i,priceTo:c,currency:m}=d(x=>x.selectedCarFilters),E=h(),g=()=>{switch(m){case"GEL":return"\u20BE";case"EUR":return"\u20AC";case"USD":return"$"}};return p.exports.useEffect(()=>{i&&u(i),c&&l(c)},[i,c]),p.exports.useEffect(()=>{r(o&&a?` ${g()} ${a} - ${o} `:a?`from: ${m} ${a}`:o?`to: ${m} ${o}`:"price")},[a,o,m]),e.createElement(de,{areOptionsOpen:t},e.createElement(re,{isActive:t,onClick:()=>{n(!1),E(X(a)),E(ee(o)),E(ut(m))}}),e.createElement(w,null,e.createElement(me,{size:"md",areOptionsOpen:t,clearCb:x=>{x.stopPropagation&&x.stopPropagation(),E(X("")),E(ee("")),u(""),l(""),r("Price"),n(!1)},areOptionsSelected:!!a&&!!o,onClick:()=>n(x=>!x)},e.createElement(k,{pl:"4",h:"40px",w:"full",bg:"white",_hover:{bg:"autoGrey.200"},borderRadius:"8px"},e.createElement(C,{opacity:t?"1":"0.5"},s))),e.createElement(fe,{isOpen:t,w:"full",top:"35px"},e.createElement(b,{p:"0px 16px 16px",align:"flex-start"},e.createElement(We,null),e.createElement(b,null,e.createElement(Ne,{placeholder:"From",h:"37px",type:"number",value:a,onChange:x=>u(x.currentTarget.value)}),e.createElement(Ne,{placeholder:"To",h:"37px",type:"number",value:o,onChange:x=>l(x.currentTarget.value)}))))))},Wt=({})=>{const[t,n]=p.exports.useState([]),s=h(),{transmissions:r}=d(l=>l.carsReducer),{transmission:a}=d(l=>l.selectedCarFilters),u=r.filter(l=>l);p.exports.useEffect(()=>{a.length&&n(a)},[a]);const o=l=>{t.includes(l)?n(t.filter(i=>i!==l)):n([l].concat(t))};return e.createElement(R,{size:"md",selected:t,label:"transmission",clearSelected:()=>{n([]),s(Q([]))},onApply:()=>s(Q(t))},e.createElement(w,null,u.map(l=>e.createElement(B,{key:l,onClick:i=>{i.preventDefault(),o(l)}},e.createElement(F,{colorScheme:"autoOrange",isChecked:t==null?void 0:t.includes(l)},e.createElement(C,null,l))))))},Vt=({})=>{const[t,n]=p.exports.useState([]),{types:s}=d(l=>l.carsReducer),{types:r}=d(l=>l.selectedCarFilters),a=h(),u=s.filter(l=>l);p.exports.useEffect(()=>{r.length&&n(r)},[r]);const o=l=>{t.includes(l)?n(t.filter(i=>i!==l)):n([l].concat(t))};return e.createElement(R,{size:"md",selected:t,label:"types",clearSelected:()=>{n([]),a(Z([]))},onApply:()=>a(Z(t)),top:"35px"},e.createElement(w,null,u.map(l=>e.createElement(B,{key:l,onClick:i=>{i.preventDefault(),o(l)}},e.createElement(F,{colorScheme:"autoOrange",isChecked:t==null?void 0:t.includes(l)},e.createElement(C,{w:"full"},l))))))},Kt=u=>{var o=u,{p:t="2",bg:n="#fff",direction:s="row",borderRadius:r="md"}=o,a=I(o,["p","bg","direction","borderRadius"]);const l=h(),i=d(g=>g.selectedCarFilters),{isAdvancedFiltersOpen:c}=d(g=>g.selectedCarFilters),m=()=>l(Ge()),E=pe();return e.createElement(e.Fragment,null,e.createElement(Ye,O({p:t,bg:n,direction:s,borderRadius:r,alignItems:"center"},a),e.createElement(yt,{labelPadding:"2",w:["100%","100%","100%"]}),e.createElement(le,{height:["40px",null,null,"30px"],borderColor:"gray.300"}),e.createElement(kt,null),e.createElement(le,{height:["40px",null,null,"30px"],borderColor:"gray.300"}),e.createElement(Ft,null),e.createElement(k,{spacing:{md:"0",xl:"2"}},e.createElement(Ke,{w:{md:"140px",lg:"144px","2xl":"211px"},ml:[null,null,"0px","16px"],mr:"2",onClick:()=>E(i)}),c?e.createElement(ze,{icon:e.createElement(Ht,null),onClick:m,"aria-label":"close advanced filters",bg:"white",_hover:{bg:"white"},_active:{bg:"white"}}):e.createElement(ze,{onClick:m,icon:e.createElement(_t,null),"aria-label":"open advanced filters",bg:"white",_hover:{bg:"white"},_active:{bg:"white"}}))),e.createElement(Pe,{in:c},e.createElement(At,{templateColumns:[null,"1fr 1fr","repeat(3, 1fr)","repeat(5, 1fr)"],spacingX:"4",spacingY:"2",mt:["2","4",null,"4",null,"24px"]},e.createElement($t,null),e.createElement(Yt,null),e.createElement(Bt,null),e.createElement(Vt,null),e.createElement(Wt,null),e.createElement(Pt,null),e.createElement(Nt,null),e.createElement(Gt,null),e.createElement(zt,null),e.createElement(Lt,null))))},Qt=l=>{var i=l,{isKeyboardActive:t,children:n,w:s="full",bottom:r="10px",pr:a="4",pl:u="4"}=i,o=I(i,["isKeyboardActive","children","w","bottom","pr","pl"]);return e.createElement(e.Fragment,null,t?e.createElement(ae,O({w:s,position:"fixed",bottom:r,pr:a,pl:u,zIndex:"modal"},o),n):e.createElement(ae,O({w:s},o),n))},Zt=({isOpen:t,onClose:n})=>{const{keys:s}=d(l=>l.selectedCarFilters),[r,a]=p.exports.useState(s),u=h();p.exports.useEffect(()=>{a(s)},[]);const o=()=>{r&&u(V(r)),n()};return e.createElement(v,{isOpen:t,onClose:n,onSubmit:o},e.createElement(b,{w:"full",alignItems:"flex-start"},e.createElement(k,null,e.createElement("input",{type:"radio",name:"has_keys",value:"YES",checked:r==="YES",onChange:()=>a(_.YES)}),e.createElement(C,null,"Yes")),e.createElement(k,null,e.createElement("input",{type:"radio",name:"has_keys",value:"NO",checked:r==="NO",onChange:()=>a(_.NO)}),e.createElement(C,null,"No"))))},qt=({})=>{const{isOpen:t,onOpen:n,onClose:s}=T(),r=h(),{keys:a}=d(u=>u.selectedCarFilters);return e.createElement(e.Fragment,null,e.createElement(A,{onClick:n,label:a?`Keys: ${a}`:"Keys",hasValue:!!a,onClear:()=>r(V(_.NO))}),e.createElement(Zt,{isOpen:t,onClose:s}))},Ut=({isOpen:t,onClose:n})=>{const[s,r]=p.exports.useState([]),a=h(),{conditions:u}=d(c=>c.carsReducer),{conditions:o}=d(c=>c.selectedCarFilters);p.exports.useEffect(()=>{o.length&&r(o)},[o]);const l=()=>u.filter(c=>c),i=c=>{s.includes(c)?r(s.filter(m=>m!==c)):r(s.concat(c))};return e.createElement(v,{isOpen:t,onClose:n,onSubmit:()=>{a(Y(s)),n()}},e.createElement(b,{w:"full",alignItems:"flex-start",minH:"80vh",spacing:"16px"},l().map(c=>e.createElement(F,{colorScheme:"autoOrange",defaultChecked:o==null?void 0:o.includes(c),onChange:m=>{m.preventDefault(),i(c)},key:c},N(c)))))},Jt=({})=>{const{isOpen:t,onOpen:n,onClose:s}=T(),r=h(),{conditions:a}=d(u=>u.selectedCarFilters);return e.createElement(e.Fragment,null,e.createElement(A,{onClick:n,label:a.length?`Condition: ${N(a.join("; "))}`:"Condition",hasValue:!!a.length,onClear:()=>r(Y([]))}),e.createElement(Ut,{isOpen:t,onClose:s}))},Xt=({isOpen:t,onClose:n})=>{const[s,r]=p.exports.useState([]),a=h(),{cylinders:u}=d(c=>c.carsReducer),{cylinders:o}=d(c=>c.selectedCarFilters);p.exports.useEffect(()=>{o.length&&r(o)},[o]);const l=()=>u.filter(c=>c),i=c=>{s.includes(c)?r(s.filter(m=>m!==c)):r(s.concat(c))};return e.createElement(v,{isOpen:t,onClose:n,onSubmit:()=>{a(z(s)),n()}},e.createElement(b,{w:"full",alignItems:"flex-start",maxH:"80vh",spacing:"16px"},l().map(c=>e.createElement(F,{colorScheme:"autoOrange",defaultChecked:o==null?void 0:o.includes(c),onChange:m=>{m.preventDefault(),i(c)},key:c},c))))},en=({})=>{const{isOpen:t,onOpen:n,onClose:s}=T(),r=h(),{cylinders:a}=d(u=>u.selectedCarFilters);return e.createElement(e.Fragment,null,e.createElement(A,{onClick:n,label:a.length?`Cylinders: ${a.join(", ")}`:"Cylinders",hasValue:!!a.length,onClear:()=>r(z([]))}),e.createElement(Xt,{isOpen:t,onClose:s}))},tn=({isOpen:t,onClose:n})=>{const[s,r]=p.exports.useState([]),a=h(),{drives:u}=d(c=>c.carsReducer),{drives:o}=d(c=>c.selectedCarFilters);p.exports.useEffect(()=>{o.length&&r(o)},[o]);const l=()=>u.filter(c=>c),i=c=>{s.includes(c)?r(s.filter(m=>m!==c)):r(s.concat(c))};return e.createElement(v,{isOpen:t,onClose:n,onSubmit:()=>{a(P(s)),n()}},e.createElement(b,{w:"full",alignItems:"flex-start",spacing:"16px",maxH:"80vh"},l().map(c=>e.createElement(F,{colorScheme:"autoOrange",defaultChecked:o==null?void 0:o.includes(c),onChange:m=>{m.preventDefault(),i(c)},key:c},c))))},nn=({})=>{const{isOpen:t,onOpen:n,onClose:s}=T(),r=h(),{drives:a}=d(u=>u.selectedCarFilters);return e.createElement(e.Fragment,null,e.createElement(A,{onClick:n,label:a.join(", ")||"Drives",hasValue:!!a.length,onClear:()=>r(P([]))}),e.createElement(tn,{isOpen:t,onClose:s}))},ln=({isOpen:t,onClose:n})=>{const{engineFrom:s,engineTo:r}=d(E=>E.selectedCarFilters),[a,u]=p.exports.useState(s||.5),[o,l]=p.exports.useState(r||.5),i=h(),c=(E,g)=>{const x=[];for(let f=E;f<=g;f=parseFloat(((f*100+10)/100).toFixed(1)))x.push(f);return x},m=()=>{i(G(a)),i($(o)),n()};return e.createElement(v,{isOpen:t,onClose:n,onSubmit:m},e.createElement(k,{h:"full",divider:e.createElement(Le,{borderColor:"autoGrey.400"})},e.createElement(b,{h:"full",w:"full",spacing:"4"},e.createElement(H,{fontSize:"16px",fontWeight:"600"},"From"),e.createElement(b,{h:"full",w:"full",spacing:"4",overflowY:"scroll"},c(.5,6).map(E=>e.createElement(L,{fontSize:"16px",key:E,lineHeight:"21px",w:"full",color:a===E?"autoOrange.400":"#000",onClick:()=>{u(E),E>=o&&l(E)}},E.toFixed(1))))),e.createElement(b,{h:"full",w:"full",spacing:"4"},e.createElement(H,{fontSize:"16px",fontWeight:"600"},"To"),e.createElement(b,{h:"full",w:"full",spacing:"4",overflowY:"scroll"},c(.5,6).map(E=>e.createElement(L,{fontSize:"16px",key:E,lineHeight:"21px",w:"full",color:o===E?"autoOrange.400":"#000",onClick:()=>{l(E),E<=a&&u(E)}},E.toFixed(1)))))))},sn=({})=>{const{isOpen:t,onClose:n,onOpen:s}=T(),r=h(),{engineFrom:a,engineTo:u}=d(o=>o.selectedCarFilters);return e.createElement(e.Fragment,null,e.createElement(A,{label:a&&u?`Engine (from - to): ${Number(a).toFixed(1)}L -  ${Number(u).toFixed(1)}L `:"Engine",onClick:s,hasValue:!!(a&&u),onClear:()=>{r(G(null)),r($(null))}}),e.createElement(ln,{onClose:n,isOpen:t}))},rn=({isOpen:t,onClose:n})=>{const[s,r]=p.exports.useState([]),a=h(),{fuels:u}=d(c=>c.carsReducer),{fuels:o}=d(c=>c.selectedCarFilters);p.exports.useEffect(()=>{o.length&&r(o)},[o]);const l=()=>u.filter(c=>c),i=c=>{s.includes(c)?r(s.filter(m=>m!==c)):r(s.concat(c))};return e.createElement(v,{isOpen:t,onClose:n,onSubmit:()=>{a(W(s)),n()}},e.createElement(b,{w:"full",alignItems:"flex-start",spacing:"16px",minH:"30vh"},l().map(c=>e.createElement(F,{colorScheme:"autoOrange",defaultChecked:o==null?void 0:o.includes(c),onChange:m=>{m.preventDefault(),i(c)},key:c},N(c)))))},an=({})=>{const{isOpen:t,onOpen:n,onClose:s}=T(),r=h(),{fuels:a}=d(u=>u.selectedCarFilters);return e.createElement(e.Fragment,null,e.createElement(A,{onClick:n,label:a.length?`Fuel: ${N(a.join(", "))}`:"Fuel Types",hasValue:!!a.length,onClear:()=>r(W([]))}),e.createElement(rn,{isOpen:t,onClose:s}))},cn=({isOpen:t,onClose:n})=>{const[s,r]=p.exports.useState([]),a=h(),{locations:u}=d(c=>c.carsReducer),{locations:o}=d(c=>c.selectedCarFilters);p.exports.useEffect(()=>{o.length?r(o):r([])},[o]);const l=()=>u.filter(c=>c),i=c=>{s.includes(c)?r(s.filter(m=>m!==c)):r(s.concat(c))};return e.createElement(v,{isOpen:t,onClose:n,onSubmit:()=>{a(K(s)),n()}},e.createElement(b,{w:"full",alignItems:"flex-start",spacing:"16px"},l().map(c=>e.createElement(F,{colorScheme:"autoOrange",defaultChecked:o==null?void 0:o.includes(c),onChange:m=>{m.preventDefault(),i(c)},key:c},c))))},on=s=>{var r=s,{w:t="full"}=r,n=I(r,["w"]);const{isOpen:a,onOpen:u,onClose:o}=T(),l=h(),{locations:i}=d(c=>c.selectedCarFilters);return e.createElement(ae,O({minW:t,maxW:t},n),e.createElement(A,{onClick:u,label:i.length?` ${i.join(", ")}`:"Locations",hasValue:!!i.length,onClear:()=>l(K([]))}),e.createElement(cn,{isOpen:a,onClose:o}))},un=({isOpen:t,onClose:n})=>{const[s,r]=p.exports.useState([]),a=h(),{salesStatus:u}=d(i=>i.carsReducer),{salesStatus:o}=d(i=>i.selectedCarFilters);p.exports.useEffect(()=>{o.length&&r(o)},[o]);const l=i=>{s.includes(i)?r(s.filter(c=>c!==i)):r(s.concat(i))};return e.createElement(v,{isOpen:t,onClose:n,onSubmit:()=>{a(ce(s)),n()}},e.createElement(b,{w:"full",alignItems:"flex-start",maxH:"80vh",spacing:"16px"},u.map(i=>e.createElement(F,{colorScheme:"autoOrange",defaultChecked:o==null?void 0:o.includes(i),onChange:c=>{c.preventDefault(),l(i)},key:i},i))))},pn=({})=>{const{isOpen:t,onOpen:n,onClose:s}=T(),r=h(),{salesStatus:a}=d(u=>u.selectedCarFilters);return e.createElement(e.Fragment,null,e.createElement(A,{onClick:n,label:a.length?`Sales Status: ${a.join(", ")}`:"Sales Status",hasValue:!!a.length,onClear:()=>r(ce([]))}),e.createElement(un,{isOpen:t,onClose:s}))},mn=({isOpen:t,onClose:n})=>{const{transmission:s}=d(c=>c.selectedCarFilters),[r,a]=p.exports.useState(s),u=h(),o=Object.values(gt);p.exports.useEffect(()=>{a(s)},[]);const l=c=>{if(!r.includes(c))a([...r,c]);else{const m=r.filter(E=>E!=c);a(m)}},i=()=>{u(Q(r)),n()};return e.createElement(v,{isOpen:t,onClose:n,onSubmit:i},e.createElement(b,{w:"full",alignItems:"flex-start"},o.map(c=>e.createElement(F,{colorScheme:"autoOrange",defaultChecked:s==null?void 0:s.includes(c),onChange:m=>{m.preventDefault(),l(c)},boxShadow:"none !important",shadow:"none !important",key:c},c))))},dn=({})=>{const{isOpen:t,onOpen:n,onClose:s}=T(),r=h(),{transmission:a}=d(u=>u.selectedCarFilters);return e.createElement(e.Fragment,null,e.createElement(A,{onClick:n,label:a.length?`Transmission: ${a.join(", ")}`:"Transmission",hasValue:!!a.length,onClear:()=>r(Q([]))}),e.createElement(mn,{isOpen:t,onClose:s}))},fn=({isOpen:t,onClose:n})=>{const[s,r]=p.exports.useState([]),a=h(),{types:u}=d(c=>c.carsReducer),{types:o}=d(c=>c.selectedCarFilters);p.exports.useEffect(()=>{o.length&&r(o)},[o]);const l=()=>u.filter(c=>c),i=c=>{s.includes(c)?r(s.filter(m=>m!==c)):r(s.concat(c))};return e.createElement(v,{isOpen:t,onClose:n,onSubmit:()=>{a(Z(s)),n()}},e.createElement(b,{w:"full",alignItems:"flex-start",minH:"80vh",spacing:"16px"},l().map(c=>e.createElement(F,{colorScheme:"autoOrange",defaultChecked:o==null?void 0:o.includes(c),onChange:m=>{m.preventDefault(),i(c)},key:c},N(c)))))},En=({})=>{const{isOpen:t,onOpen:n,onClose:s}=T(),r=h(),{types:a}=d(u=>u.selectedCarFilters);return e.createElement(e.Fragment,null,e.createElement(A,{onClick:n,label:a.length?`Types: ${N(a.join("; "))}`:"Type",hasValue:!!a.length,onClear:()=>r(Z([]))}),e.createElement(fn,{isOpen:t,onClose:s}))},hn=({setKeyboardActive:t})=>{const[n,s]=p.exports.useState(""),[r,a]=p.exports.useState(""),{yearFrom:u,yearTo:o}=d(i=>i.selectedCarFilters),l=h();return p.exports.useEffect(()=>{s(u?u.toString():""),a(o?o.toString():"")},[u,o]),e.createElement(k,{borderRadius:"8px",bg:"white",spacing:0,flex:"1",p:"2px"},e.createElement(te,{pr:"2",placeholder:"Year from",type:"number",value:n,onChange:i=>s(i.currentTarget.value),onFocus:()=>t(!0),onBlur:()=>{t(!1),parseInt(n)>=(parseInt(r)||0)&&l(oe(parseInt(n))),l(ie(parseInt(n)))}}),e.createElement(le,{height:"30px"}),e.createElement(te,{placeholder:"Year to",type:"number",value:r,onChange:i=>a(i.currentTarget.value),onFocus:()=>t(!0),onBlur:()=>{t(!1),parseInt(r)<=parseInt(n)&&l(ie(parseInt(r))),l(oe(parseInt(r)||0))}}))},gn=({})=>{const[t,n]=p.exports.useState(!1),[s,r]=p.exports.useState(""),[a,u]=p.exports.useState(""),o=d(m=>m.selectedCarFilters),l=d(m=>m.selectedCarFilters.isAdvancedFiltersOpen),i=h(),c=pe();return e.createElement(Ye,null,e.createElement(L,{_hover:{textDecoration:"underline"},pr:"4",alignSelf:"flex-end",onClick:()=>{i(U()),i(J(""))}},"reset all filters"),e.createElement(wt,null),e.createElement(Ot,null),e.createElement(hn,{setKeyboardActive:n}),e.createElement(k,{justify:"space-between"},e.createElement(k,{borderRadius:"8px",bg:"white",spacing:0,flex:"1",p:"2px"},e.createElement(te,{pr:"2",placeholder:"Price from",type:"number",value:s,onChange:m=>r(m.currentTarget.value),onFocus:()=>n(!0),onBlur:()=>{n(!1),i(X(s))}}),e.createElement(le,{height:"30px"}),e.createElement(te,{placeholder:"Price to",type:"number",value:a,onChange:m=>u(m.currentTarget.value),onFocus:()=>n(!0),onBlur:()=>{n(!1),i(ee(a))}})),e.createElement(We,null)),e.createElement(Pe,{in:l},e.createElement(b,null,e.createElement(sn,null),e.createElement(Jt,null),e.createElement(En,null),e.createElement(on,null),e.createElement(dn,null),e.createElement(qt,null),e.createElement(nn,null),e.createElement(pn,null),e.createElement(an,null),e.createElement(en,null))),e.createElement(b,{pt:"2",spacing:"3"},e.createElement(Qt,{isKeyboardActive:t},e.createElement(Ke,{w:"full",isKeyboardActive:t,onClick:()=>c(o)})),e.createElement(Be,{variant:"link",onClick:()=>i(Ge()),bg:"transparent"},e.createElement(C,{color:"#000",display:t?"none":"block",lineHeight:"19px",fontWeight:"400"},l?"See less filter":"See more filter"))))},Sn=(t,n)=>{const s=n.slice().sort();return t.length===n.length&&t.slice().sort().every(function(r,a){return r===s[a]}),!1},xn=({modelQueryKeys:t,brands:n,query:s})=>{const r=[];return n.map(a=>r.push({brand:a,models:[]})),t.map(a=>{const u=a.slice(a.indexOf("[")+1,a.indexOf("]")),o=s.getAll(a);r.push({brand:u,models:o})}),r.filter(a=>a.models.length)},bn=()=>{const{isLargerThan:t}=Qe(737),n=Ve(),s=h(),{MODEL:r,YEAR_FROM:a,YEAR_TO:u,CONDITION:o,TYPE:l,LOCATION:i,TRANSMISSION:c,KEYS:m,DRIVE:E,SALES_STATUS:g,FUEL_TYPE:x,CYLINDER:f,ENGINE_FROM:D,ENGINE_TO:M,PRICE_FROM:S,PRICE_TO:y}=ft,Ze=d(j=>j.selectedCarFilters.brands),Ee=d(j=>j.carsReducer.brands);return p.exports.useEffect(()=>{const j=n.getAll("brand");Sn(j,Ze)||s(pt(j));const qe=[...new Set(Array.from(n.keys()).filter(Ue=>Ue.includes(`${r}[`)))],he=xn({brands:j,modelQueryKeys:qe,query:n});he.length&&s(mt(he));const ge=n.get(a);ge&&s(ie(parseInt(ge)));const Se=n.get(u);Se&&s(oe(parseInt(Se)));const xe=n.get(D);xe&&s(G(xe));const be=n.get(M);be&&s($(be));const Ce=n.get(S);Ce&&s(X(Ce));const ye=n.get(y);ye&&s(ee(ye));const ke=n.getAll(o);ke.length&&s(Y(ke));const Fe=n.getAll(l);Fe.length&&s(Z(Fe));const we=n.getAll(E);we.length&&s(P(we));const Oe=n.getAll(i);Oe.length&&s(K(Oe));const Te=n.getAll(c);Te.length&&s(Q(Te));const se=n.get(m);(se===_.NO||se===_.YES)&&s(V(se));const ve=n.getAll(g);ve.length&&s(ce(ve));const Ae=n.getAll(x);Ae.length&&s(W(Ae));const Ie=n.getAll(f);Ie.length&&s(z(Ie))},[n]),p.exports.useEffect(()=>{Ee.length||s(dt())},[Ee]),e.createElement(e.Fragment,null,t?e.createElement(Kt,null):e.createElement(gn,null))},Cn=()=>{const t=h();return p.exports.useEffect(()=>()=>{t(U())},[]),e.createElement(Et,{pt:["4","6",null,"8"]},e.createElement(b,{w:"full",spacing:["66px"]},e.createElement(b,{w:"full",alignItems:"flex-end"},e.createElement(Mt,null,e.createElement(bn,null)),e.createElement(L,{display:["none",null,"block"],_hover:{textDecoration:"underline"},pr:"4",onClick:()=>{t(U()),t(J(""))}},"reset all filters")),e.createElement(It,null),e.createElement(jt,null)))},Qn=()=>e.createElement(e.Fragment,null,e.createElement(nt,null),e.createElement(Cn,null));export{Qn as CatalogPage,Qn as default};