var Ue=Object.defineProperty,Je=Object.defineProperties;var Xe=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var Ie=Object.prototype.hasOwnProperty,Me=Object.prototype.propertyIsEnumerable;var Re=(t,n,s)=>n in t?Ue(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,O=(t,n)=>{for(var s in n||(n={}))Ie.call(n,s)&&Re(t,s,n[s]);if(q)for(var s of q(n))Me.call(n,s)&&Re(t,s,n[s]);return t},De=(t,n)=>Je(t,Xe(n));var T=(t,n)=>{var s={};for(var r in t)Ie.call(t,r)&&n.indexOf(r)<0&&(s[r]=t[r]);if(t!=null&&q)for(var r of q(t))n.indexOf(r)<0&&Me.call(t,r)&&(s[r]=t[r]);return s};import{R as e,r as m,u as et}from"./vendor.576a7237.js";import{S as tt}from"./ScrollToTop.da3f839a.js";import{a as d,u as h,f as k,as as nt,be as U,aw as J,bf as je,V as b,J as H,T as C,c as lt,av as He,bg as st,P as rt,N as at,L as ct,H as ot,l as re,B as _e,bh as Y,bi as F,bj as z,bk as P,bl as G,bm as $,S as Be,g as L,bn as W,bo as V,bp as _,bq as K,br as X,bs as ee,bt as it,ag as Le,bu as Q,bv as Z,b9 as Ne,I as Ye,bb as ze,bw as Pe,k as ae,v,bx as te,by as ce,bz as oe,bA as pt,bB as ut,bC as mt,bD as dt,bE as ft,j as Et}from"./index.8a45e820.js";import{u as ht,T as gt}from"./types.e421f34e.js";import{b as ie,a as ne}from"./ButtonRound.5543634b.js";import{C as Ge}from"./Card.5e5a28e7.js";import{A as St}from"./aspect-ratio.d9d0811a.js";import{I as xt}from"./image.98906098.js";import{D as bt,C as $e}from"./CurrencySwitcherButtons.9e738419.js";import{A as Ct,u as We,a as pe,B as yt,M as kt,Y as Ft,S as Ve,b as A,c as I,d as wt,e as Ot}from"./MobileModelSelect.a6a7ca0b.js";import{A as Tt}from"./ArrowPrevIcon.8785e65b.js";import{u as Ke}from"./useMediaQueryMin.bb2fc07a.js";import{C as vt}from"./CatalogListWrap.6abb96e6.js";import{S as ue,C as le}from"./SelectTrigger.afd5e6a7.js";import{S as me,a as w,b as de}from"./SelectWrapper.6c1b98d6.js";import{S as At}from"./simple-grid.ceaa2e73.js";import{c as N}from"./TextSecondary.aa780bf5.js";import"./prop-types.d6ec705b.js";import"./react-redux.0b249e8a.js";import"./axios.7b768d2b.js";import"./formik.30c45d87.js";import"./yup.8a20e72b.js";import"./focus-visible.c4e3ef79.js";import"./swiper.3c4df1c1.js";import"./react-swipeable.2142026c.js";const It=({})=>{const t=d(a=>a.catalogBanner.isCatalogBannerOpen),n=d(a=>a.catalogBanner.catalogBannerDealerName),s=d(a=>a.catalogBanner.catalogBannerImage),r=h();return e.createElement(Ge,{w:"full",p:["4","30px"],display:t?"block":"none"},e.createElement(k,{spacing:"32px",position:"relative"},e.createElement(St,{minW:["60px",null,"80px"],ratio:1/1,borderRadius:"100px",bg:"white"},e.createElement(xt,{src:s,borderRadius:"100px",fallbackSrc:ht})),e.createElement(ie,{icon:nt,boxSize:6,position:"absolute",right:"-2",top:["50%","-2"],transform:["translateY(-50%)","translateY(0%)"],_active:{bg:"autoGrey.400"},onClick:()=>{r(U()),r(J("")),r(je())}}),e.createElement(b,{alignItems:"flex-start"},e.createElement(H,{fontSize:"16px"},n),e.createElement(C,{fontSize:"14px",lineHeight:"24px",opacity:"63%",pr:"35px",display:["none",null,"block"]},"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, magnam deleniti voluptatum officiis tempore aperiam quasi error hic reiciendis facilis dicta saepe quam vel ex tempora impedit accusamus blanditiis nisi? aperiam quasi error accusamus blanditiis nisi?"))))},Mt=s=>{var r=s,{children:t}=r,n=T(r,["children"]);return e.createElement(Ge,O({bg:["transparent",null,"autoBlue.400"],p:["0",null,"16px"],w:"full",minH:"auto"},n),t)},Rt=({activePage:t,totalPages:n,onChange:s,paginNumbers:r})=>{const{isDesktop:a,isMobile:i,isTablet:o}=d(y=>y.globalAppState.screen),[l,p]=m.exports.useState([]),[c,u]=m.exports.useState([]),[E,g]=m.exports.useState([]),{isLargerThan:x}=Ke(360);let f=3;o&&(f=5),a&&(f=10);const D=l.length===1,M=c.length===1,S=t>c.length-f;return m.exports.useEffect(()=>{t===f?p(r.slice(0,f+1)):t>f?p([1]):p(r.slice(0,f)),t>f&&t<=n-f?g(i?[t-1,t,t+1]:[t-2,t-1,t,t+1,t+2]):g([]),t===n-f+1?(u(r.slice(n-f-1,n)),p([1])):t>n-f?(u(r.slice(n-f,n)),p([1])):u([n]),r.length<f+3&&(p([...r]),g([]),u([]))},[t,n]),e.createElement(k,null,x?e.createElement(k,{w:"full",display:r.length>1?"flex":"none"},l.map(y=>e.createElement(ne,{key:y,onClick:()=>s(y),active:t===y},e.createElement(H,{fontSize:"18px",fontWeight:"light"},y))),e.createElement(C,{display:D?"block":"none"},"..."),E.map(y=>e.createElement(ne,{key:y,onClick:()=>s(y),active:t===y},e.createElement(H,{fontSize:"18px",fontWeight:"light"},y))),e.createElement(C,{display:M?"block":"none"},"..."),c.map(y=>e.createElement(ne,{key:y,onClick:()=>s(y),active:t===y,display:x&&S?"block":"none"},e.createElement(H,{fontSize:"18px",fontWeight:"light"},y)))):e.createElement(e.Fragment,null,e.createElement(C,{display:t>1?"block":"none"},"..."),e.createElement(ne,{active:!0},e.createElement(H,{fontSize:"18px",fontWeight:"light"},t)),e.createElement(C,{display:t<r.length?"block":"none"},"...")))},Dt=a=>{var i=a,{activePage:t,totalPages:n=1,onPageChange:s}=i,r=T(i,["activePage","totalPages","onPageChange"]);const o=[...Array(n).keys()].map(l=>l+1);return e.createElement(k,O({spacing:["1","2"]},r),e.createElement(ie,{variant:"ghost",bg:"transparent",icon:Tt,disabled:t===1,onClick:()=>s(t-1),boxSize:"6",_active:{bg:"autoGrey.400"},display:n===1?"none":"block"}),e.createElement(Rt,{activePage:t,totalPages:n,onChange:s,paginNumbers:o}),e.createElement(ie,{variant:"ghost",bg:"transparent",icon:Ct,fill:"#000",boxSize:"6",disabled:t===n,onClick:()=>s(t+1),_active:{bg:"autoGrey.400"},display:n===1?"none":"block"}))},jt=()=>{const t=d(S=>S.carsReducer.dealerCars),n=d(S=>S.carsPagination.activePage),s=d(S=>S.carsPagination.totalPages),r=d(S=>S.carsReducer.fetchingDealerCars),a=d(S=>S.userInfoSlice.isAuthenticated),i=d(S=>S.globalAppState.networkError),o=d(S=>S.globalAppState.catalogQuery),l=lt(),p=m.exports.useRef(),c=d(S=>S.selectedCarFilters);m.exports.useEffect(()=>{i&&M()},[i]);const u=h(),E=et(),g=We(),x=Number(g.get("page"))||1,f=pe();m.exports.useEffect(()=>(o?E.push({search:o}):(n?g.set("page",n.toString()):g.set("page",x.toString()),E.push({search:g.toString()}),u(He(g.get("page"))),u(st(!0)),u(J(g.toString()))),()=>{u(je())}),[]),m.exports.useEffect(()=>{a&&u(rt(""))},[a]),m.exports.useEffect(()=>{o!==g.toString()&&(f(c),u(He(g.get("page"))))},[x,o]);const D=S=>{g.set("page",String(S)),E.push({search:g.toString()})},M=()=>{p.current=l({title:i,status:"error",position:"top",duration:3e3,isClosable:!0})};return r?e.createElement(b,{h:"100vh",w:"full"},e.createElement(at,null)):e.createElement(b,{spacing:"90px",w:"full"},t.length?e.createElement(vt,{gap:"16px"},t.map((S,y)=>e.createElement(ct,{justify:"center",key:y},e.createElement(bt,{car:S})))):e.createElement(ot,null,"No Results found"),e.createElement(Dt,{totalPages:s,activePage:x,onPageChange:S=>D(S),display:t.length?"flex":"none"}))},Ht=()=>e.createElement("svg",{id:"Group_975","data-name":"Group 975",xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 40 40"},e.createElement("g",{id:"Rectangle_160","data-name":"Rectangle 160",fill:"none",stroke:"#3d405b",strokeWidth:"1.5"},e.createElement("rect",{width:"40",height:"40",rx:"8",stroke:"none"}),e.createElement("rect",{x:"0.75",y:"0.75",width:"38.5",height:"38.5",rx:"7.25",fill:"none"})),e.createElement("g",{id:"Group_937","data-name":"Group 937",transform:"translate(8 8)"},e.createElement("path",{id:"Path_454","data-name":"Path 454",d:"M0,0H24V24H0Z",fill:"none"}),e.createElement("path",{id:"Path_1582","data-name":"Path 1582",d:"M2.651,20.667a.96.96,0,0,0,.457.258,1.061,1.061,0,0,0,.522,0,1.012,1.012,0,0,0,.456-.254l6.266-6.278,6.272,6.277a1.027,1.027,0,0,0,1.435,0,1,1,0,0,0,.289-.723.968.968,0,0,0-.286-.713L11.79,12.954l6.272-6.265a.988.988,0,0,0,.291-.717.946.946,0,0,0-.294-.719,1,1,0,0,0-.723-.29.961.961,0,0,0-.712.287l-6.272,6.275L4.086,5.249a1,1,0,0,0-.456-.255,1.108,1.108,0,0,0-.522,0,.892.892,0,0,0-.457.262,1.028,1.028,0,0,0-.257.461,1.061,1.061,0,0,0,0,.522.951.951,0,0,0,.254.452l6.265,6.267L2.648,19.231a.993.993,0,0,0-.259.452,1.043,1.043,0,0,0,0,.527A.926.926,0,0,0,2.651,20.667Z",transform:"translate(1.647 -0.961)",fill:"#3d405b"}))),_t=()=>e.createElement("svg",{id:"Group_974","data-name":"Group 974",xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 40 40"},e.createElement("g",{id:"Rectangle_160","data-name":"Rectangle 160",fill:"none",stroke:"#3d405b",strokeWidth:"1.5"},e.createElement("rect",{width:"40",height:"40",rx:"8",stroke:"none"}),e.createElement("rect",{x:"0.75",y:"0.75",width:"38.5",height:"38.5",rx:"7.25",fill:"none"})),e.createElement("g",{id:"Group_131","data-name":"Group 131",transform:"translate(8 8)"},e.createElement("path",{id:"Path_454","data-name":"Path 454",d:"M0,0H24V24H0Z",fill:"none"}),e.createElement("path",{id:"Path_455","data-name":"Path 455",d:"M5.336,14.8a2.4,2.4,0,0,1,4.528,0H18v1.6H9.864a2.4,2.4,0,0,1-4.528,0H2V14.8Zm4.8-5.6a2.4,2.4,0,0,1,4.528,0H18v1.6H14.664a2.4,2.4,0,0,1-4.528,0H2V9.2Zm-4.8-5.6a2.4,2.4,0,0,1,4.528,0H18V5.2H9.864a2.4,2.4,0,0,1-4.528,0H2V3.6ZM7.6,5.2a.8.8,0,1,0-.8-.8A.8.8,0,0,0,7.6,5.2Zm4.8,5.6a.8.8,0,1,0-.8-.8A.8.8,0,0,0,12.4,10.8ZM7.6,16.4a.8.8,0,1,0-.8-.8A.8.8,0,0,0,7.6,16.4Z",transform:"translate(2 2.002)",fill:"#3d405b"}))),R=l=>{var p=l,{selected:t,label:n,children:s,clearSelected:r,onApply:a,size:i}=p,o=T(p,["selected","label","children","clearSelected","onApply","size"]);const[c,u]=m.exports.useState(!1),[E,g]=m.exports.useState("");m.exports.useEffect(()=>{t.length?g(`${t.join(", ")}`):g(n)},[t]);const x=()=>u(!1);return e.createElement(me,{areOptionsOpen:c},e.createElement(re,{isActive:c,onClick:()=>{x(),a()}}),e.createElement(w,null,e.createElement(ue,{size:i,areOptionsOpen:c,clearCb:f=>{f.stopPropagation&&f.stopPropagation(),r(),u(!1)},areOptionsSelected:!!t.length,onClick:()=>u(f=>!f)},e.createElement(k,{pl:"4",pr:"28px",h:"40px",w:"full",bg:"white",_hover:{bg:"autoGrey.200"},borderRadius:"8px"},e.createElement(C,{opacity:c?"1":"0.5",noOfLines:1},E))),e.createElement(de,O({isOpen:c},o),s)))},B=s=>{var r=s,{children:t}=r,n=T(r,["children"]);return e.createElement(_e,O({p:"4",w:"full",whiteSpace:"normal",borderRadius:"none",textAlign:"start",display:"flex",justifyContent:"flex-start",fontWeight:"400",variant:"ghost",_hover:{bg:"autoGrey.100"}},n),t)},Bt=({})=>{const[t,n]=m.exports.useState([]),{conditions:s}=d(l=>l.carsReducer),{conditions:r}=d(l=>l.selectedCarFilters),a=h(),i=s.filter(l=>l);m.exports.useEffect(()=>{r.length&&n(r)},[r]);const o=l=>{t.includes(l)?n(t.filter(p=>p!==l)):n([l].concat(t))};return e.createElement(R,{size:"md",selected:t,label:"condition",clearSelected:()=>{n([]),a(Y([]))},onApply:()=>a(Y(t)),top:"35px"},e.createElement(w,null,i.map(l=>e.createElement(B,{key:l,onClick:p=>{p.preventDefault(),o(l)}},e.createElement(F,{colorScheme:"autoOrange",isChecked:t==null?void 0:t.includes(l)},e.createElement(C,{w:"full"},l))))))},Lt=({})=>{const[t,n]=m.exports.useState([]),{cylinders:s}=d(l=>l.carsReducer),{cylinders:r}=d(l=>l.selectedCarFilters),a=h(),i=s.filter(l=>l).map(l=>l.toString());m.exports.useEffect(()=>{r.length&&n(r)},[r]);const o=l=>{t.includes(l)?n(t.filter(p=>p!==l)):n([l].concat(t))};return e.createElement(R,{size:"md",selected:t,label:"cylinders",clearSelected:()=>{n([]),a(z([]))},onApply:()=>a(z(t)),top:"35px"},e.createElement(w,null,i.map(l=>e.createElement(B,{key:l,onClick:p=>{p.preventDefault(),o(l)}},e.createElement(F,{colorScheme:"autoOrange",isChecked:t==null?void 0:t.includes(l)},e.createElement(C,{w:"full"},l))))))},Nt=({})=>{const[t,n]=m.exports.useState([]),{drives:s}=d(l=>l.carsReducer),{drives:r}=d(l=>l.selectedCarFilters),a=h(),i=s.filter(l=>l);m.exports.useEffect(()=>{r.length&&n(r)},[r]);const o=l=>{t.includes(l)?n(t.filter(p=>p!==l)):n([l].concat(t))};return e.createElement(R,{size:"md",selected:t,label:"drives",clearSelected:()=>{n([]),a(P([]))},onApply:()=>a(P(t)),top:"35px"},e.createElement(w,null,i.map(l=>e.createElement(B,{key:l,onClick:p=>{p.preventDefault(),o(l)}},e.createElement(F,{colorScheme:"autoOrange",isChecked:t==null?void 0:t.includes(l)},e.createElement(C,{w:"full"},l))))))},Yt=n=>{var t=T(n,[]);const[s,r]=m.exports.useState(!1),[a,i]=m.exports.useState(0),[o,l]=m.exports.useState(0),[p,c]=m.exports.useState(""),{engineFrom:u,engineTo:E}=d(f=>f.selectedCarFilters),g=h();m.exports.useEffect(()=>{c(a||o?`${a} - ${o}`:"engine")},[a,o]),m.exports.useEffect(()=>{u&&i(Number(u)),E&&l(Number(E))},[u,E]);const x=(f,D)=>{const M=[];for(let S=f;S<=D;S=parseFloat(((S*100+10)/100).toFixed(1)))M.push(S);return M};return e.createElement(me,De(O({},t),{areOptionsOpen:s,bg:"white",borderRadius:"8px"}),e.createElement(re,{isActive:s,onClick:()=>{r(!1),g(G(a)),g($(o))}}),e.createElement(w,null,e.createElement(ue,{areOptionsOpen:s,clearCb:f=>{f.stopPropagation&&f.stopPropagation(),l(0),i(0),g(G(0)),g($(0)),c(""),r(!1)},areOptionsSelected:!!(a||o),onClick:()=>r(f=>!f)},e.createElement(k,{pl:"4",h:"40px",w:"full",_hover:{bg:"autoGrey.200"},borderRadius:"8px"},e.createElement(C,{opacity:s?"1":"0.5"},p))),e.createElement(de,{isOpen:s,w:"full"},e.createElement(k,{h:"290px",w:"full",divider:e.createElement(Be,{borderColor:"autoGrey.400"}),pr:"2px"}," ",e.createElement(b,{h:"full",w:"full",spacing:"4"},e.createElement(C,{fontSize:"16px"},"From"),e.createElement(b,{h:"full",w:"full",spacing:"4",overflowY:"scroll",css:{"&::-webkit-scrollbar":{display:"none"}}},x(.5,6).map(f=>e.createElement(L,{fontSize:"16px",key:f,lineHeight:"21px",w:"full",color:a===f?"autoOrange.400":"#000",onClick:()=>{i(f),f>=o&&l(f)}},f.toFixed(1))))),e.createElement(b,{h:"full",w:"full",spacing:"4"},e.createElement(C,{fontSize:"16px"},"To"),e.createElement(b,{h:"full",w:"full",spacing:"4",overflowY:"scroll",css:{"&::-webkit-scrollbar":{display:"none"}}},x(.5,6).map(f=>e.createElement(L,{fontSize:"16px",key:f,lineHeight:"21px",w:"full",color:o===f?"autoOrange.400":"#000",onClick:()=>{l(f),f<=a&&i(f)}},f.toFixed(1)))))))))},zt=({})=>{const[t,n]=m.exports.useState([]),{fuels:s}=d(l=>l.carsReducer),{fuels:r}=d(l=>l.selectedCarFilters),a=h(),i=s.filter(l=>l);m.exports.useEffect(()=>{r.length&&n(r)},[r]);const o=l=>{t.includes(l)?n(t.filter(p=>p!==l)):n([l].concat(t))};return e.createElement(R,{size:"md",selected:t,label:"fuel type",clearSelected:()=>{n([]),a(W([]))},onApply:()=>a(W(t)),top:"35px"},e.createElement(w,null,i.map(l=>e.createElement(B,{key:l,onClick:p=>{p.preventDefault(),o(l)}},e.createElement(F,{colorScheme:"autoOrange",isChecked:t==null?void 0:t.includes(l)},e.createElement(C,{w:"full"},l))))))},Pt=({})=>{const[t,n]=m.exports.useState(null),{keys:s}=d(a=>a.selectedCarFilters);m.exports.useEffect(()=>{s&&n(s)},[s]);const r=h();return e.createElement(R,{size:"md",selected:t?[t]:[],label:t||"keys",clearSelected:()=>{n(null),r(V(null))},onApply:()=>t&&r(V(t)),top:"35px"},e.createElement(w,{align:"flex-start",spacing:"0"},e.createElement(k,{p:"2",pl:"4",onClick:()=>n(_.YES),_hover:{bg:"autoGrey.100"},w:"full",cursor:"pointer"},e.createElement("input",{type:"radio",name:"has_keys",value:"YES",checked:t==="YES",readOnly:!0}),e.createElement(C,null,"Yes")),e.createElement(k,{p:"2",pl:"4",onClick:()=>n(_.NO),_hover:{bg:"autoGrey.100"},w:"full",cursor:"pointer"},e.createElement("input",{type:"radio",name:"has_keys",value:"NO",checked:t==="NO",readOnly:!0}),e.createElement(C,null,"No"))," "))},Gt=({})=>{const[t,n]=m.exports.useState([]),{locations:s}=d(l=>l.carsReducer),{locations:r}=d(l=>l.selectedCarFilters),a=h(),i=s.filter(l=>l);m.exports.useEffect(()=>{r.length&&n(r)},[r]);const o=l=>{t.includes(l)?n(t.filter(p=>p!==l)):n([l].concat(t))};return e.createElement(R,{size:"md",selected:t,label:"location",clearSelected:()=>{n([]),a(K([]))},onApply:()=>a(K(t)),top:"35px"},e.createElement(w,null,i.map(l=>e.createElement(B,{key:l,onClick:p=>{p.preventDefault(),o(l)}},e.createElement(F,{colorScheme:"autoOrange",isChecked:t==null?void 0:t.includes(l)},e.createElement(C,{w:"full"},l))))))},$t=({})=>{const[t,n]=m.exports.useState(!1),[s,r]=m.exports.useState(""),[a,i]=m.exports.useState(""),[o,l]=m.exports.useState(""),{priceFrom:p,priceTo:c,currency:u}=d(x=>x.selectedCarFilters),E=h(),g=()=>{switch(u){case"GEL":return"\u20BE";case"EUR":return"\u20AC";case"USD":return"$"}};return m.exports.useEffect(()=>{p&&i(p),c&&l(c)},[p,c]),m.exports.useEffect(()=>{r(o&&a?` ${g()} ${a} - ${o} `:a?`from: ${u} ${a}`:o?`to: ${u} ${o}`:"price")},[a,o,u]),e.createElement(me,{areOptionsOpen:t},e.createElement(re,{isActive:t,onClick:()=>{n(!1),E(X(a)),E(ee(o)),E(it(u))}}),e.createElement(w,null,e.createElement(ue,{size:"md",areOptionsOpen:t,clearCb:x=>{x.stopPropagation&&x.stopPropagation(),E(X("")),E(ee("")),i(""),l(""),r("Price"),n(!1)},areOptionsSelected:!!a&&!!o,onClick:()=>n(x=>!x)},e.createElement(k,{pl:"4",h:"40px",w:"full",bg:"white",_hover:{bg:"autoGrey.200"},borderRadius:"8px"},e.createElement(C,{opacity:t?"1":"0.5"},s))),e.createElement(de,{isOpen:t,w:"full",top:"35px"},e.createElement(b,{p:"0px 16px 16px",align:"flex-start"},e.createElement($e,null),e.createElement(b,null,e.createElement(Le,{placeholder:"From",h:"37px",type:"number",value:a,onChange:x=>i(x.currentTarget.value)}),e.createElement(Le,{placeholder:"To",h:"37px",type:"number",value:o,onChange:x=>l(x.currentTarget.value)}))))))},Wt=({})=>{const[t,n]=m.exports.useState([]),s=h(),{transmissions:r}=d(l=>l.carsReducer),{transmission:a}=d(l=>l.selectedCarFilters),i=r.filter(l=>l);m.exports.useEffect(()=>{a.length&&n(a)},[a]);const o=l=>{t.includes(l)?n(t.filter(p=>p!==l)):n([l].concat(t))};return e.createElement(R,{size:"md",selected:t,label:"transmission",clearSelected:()=>{n([]),s(Q([]))},onApply:()=>s(Q(t))},e.createElement(w,null,i.map(l=>e.createElement(B,{key:l,onClick:p=>{p.preventDefault(),o(l)}},e.createElement(F,{colorScheme:"autoOrange",isChecked:t==null?void 0:t.includes(l)},e.createElement(C,null,l))))))},Vt=({})=>{const[t,n]=m.exports.useState([]),{types:s}=d(l=>l.carsReducer),{types:r}=d(l=>l.selectedCarFilters),a=h(),i=s.filter(l=>l);m.exports.useEffect(()=>{r.length&&n(r)},[r]);const o=l=>{t.includes(l)?n(t.filter(p=>p!==l)):n([l].concat(t))};return e.createElement(R,{size:"md",selected:t,label:"types",clearSelected:()=>{n([]),a(Z([]))},onApply:()=>a(Z(t)),top:"35px"},e.createElement(w,null,i.map(l=>e.createElement(B,{key:l,onClick:p=>{p.preventDefault(),o(l)}},e.createElement(F,{colorScheme:"autoOrange",isChecked:t==null?void 0:t.includes(l)},e.createElement(C,{w:"full"},l))))))},Kt=i=>{var o=i,{p:t="2",bg:n="#fff",direction:s="row",borderRadius:r="md"}=o,a=T(o,["p","bg","direction","borderRadius"]);const l=h(),p=d(g=>g.selectedCarFilters),{isAdvancedFiltersOpen:c}=d(g=>g.selectedCarFilters),u=()=>l(Pe()),E=pe();return e.createElement(e.Fragment,null,e.createElement(Ne,O({p:t,bg:n,direction:s,borderRadius:r,alignItems:"center"},a),e.createElement(yt,{labelPadding:"2",w:["100%","100%","100%"]}),e.createElement(le,{height:["40px",null,null,"30px"],borderColor:"gray.300"}),e.createElement(kt,null),e.createElement(le,{height:["40px",null,null,"30px"],borderColor:"gray.300"}),e.createElement(Ft,null),e.createElement(k,{spacing:{md:"0",xl:"2"}},e.createElement(Ve,{w:{md:"140px",lg:"144px","2xl":"211px"},ml:[null,null,"0px","16px"],mr:"2",onClick:()=>E(p)}),c?e.createElement(Ye,{icon:e.createElement(Ht,null),onClick:u,"aria-label":"close advanced filters",bg:"white",_hover:{bg:"white"},_active:{bg:"white"}}):e.createElement(Ye,{onClick:u,icon:e.createElement(_t,null),"aria-label":"open advanced filters",bg:"white",_hover:{bg:"white"},_active:{bg:"white"}}))),e.createElement(ze,{in:c},e.createElement(At,{templateColumns:[null,"1fr 1fr","repeat(3, 1fr)","repeat(5, 1fr)"],spacingX:"4",spacingY:"2",mt:["2","4",null,"4",null,"24px"]},e.createElement($t,null),e.createElement(Yt,null),e.createElement(Bt,null),e.createElement(Vt,null),e.createElement(Wt,null),e.createElement(Pt,null),e.createElement(Nt,null),e.createElement(Gt,null),e.createElement(zt,null),e.createElement(Lt,null))))},Qt=l=>{var p=l,{isKeyboardActive:t,children:n,w:s="full",bottom:r="10px",pr:a="4",pl:i="4"}=p,o=T(p,["isKeyboardActive","children","w","bottom","pr","pl"]);return e.createElement(e.Fragment,null,t?e.createElement(ae,O({w:s,position:"fixed",bottom:r,pr:a,pl:i,zIndex:"modal"},o),n):e.createElement(ae,O({w:s},o),n))},Zt=({isOpen:t,onClose:n})=>{const{keys:s}=d(l=>l.selectedCarFilters),[r,a]=m.exports.useState(s),i=h();m.exports.useEffect(()=>{a(s)},[]);const o=()=>{r&&i(V(r)),n()};return e.createElement(A,{isOpen:t,onClose:n,onSubmit:o},e.createElement(b,{w:"full",alignItems:"flex-start"},e.createElement(k,null,e.createElement("input",{type:"radio",name:"has_keys",value:"YES",checked:r==="YES",onChange:()=>a(_.YES)}),e.createElement(C,null,"Yes")),e.createElement(k,null,e.createElement("input",{type:"radio",name:"has_keys",value:"NO",checked:r==="NO",onChange:()=>a(_.NO)}),e.createElement(C,null,"No"))))},qt=({})=>{const{isOpen:t,onOpen:n,onClose:s}=v(),r=h(),{keys:a}=d(i=>i.selectedCarFilters);return e.createElement(e.Fragment,null,e.createElement(I,{onClick:n,label:a?`Keys: ${a}`:"Keys",hasValue:!!a,onClear:()=>r(V(_.NO))}),e.createElement(Zt,{isOpen:t,onClose:s}))},Ut=({isOpen:t,onClose:n})=>{const[s,r]=m.exports.useState([]),a=h(),{conditions:i}=d(c=>c.carsReducer),{conditions:o}=d(c=>c.selectedCarFilters);m.exports.useEffect(()=>{o.length&&r(o)},[o]);const l=()=>i.filter(c=>c),p=c=>{s.includes(c)?r(s.filter(u=>u!==c)):r(s.concat(c))};return e.createElement(A,{isOpen:t,onClose:n,onSubmit:()=>{a(Y(s)),n()}},e.createElement(b,{w:"full",alignItems:"flex-start",minH:"80vh",spacing:"16px"},l().map(c=>e.createElement(F,{colorScheme:"autoOrange",defaultChecked:o==null?void 0:o.includes(c),onChange:u=>{u.preventDefault(),p(c)},key:c},N(c)))))},Jt=({})=>{const{isOpen:t,onOpen:n,onClose:s}=v(),r=h(),{conditions:a}=d(i=>i.selectedCarFilters);return e.createElement(e.Fragment,null,e.createElement(I,{onClick:n,label:a.length?`Condition: ${N(a.join("; "))}`:"Condition",hasValue:!!a.length,onClear:()=>r(Y([]))}),e.createElement(Ut,{isOpen:t,onClose:s}))},Xt=({isOpen:t,onClose:n})=>{const[s,r]=m.exports.useState([]),a=h(),{cylinders:i}=d(c=>c.carsReducer),{cylinders:o}=d(c=>c.selectedCarFilters);m.exports.useEffect(()=>{o.length&&r(o)},[o]);const l=()=>i.filter(c=>c),p=c=>{s.includes(c)?r(s.filter(u=>u!==c)):r(s.concat(c))};return e.createElement(A,{isOpen:t,onClose:n,onSubmit:()=>{a(z(s)),n()}},e.createElement(b,{w:"full",alignItems:"flex-start",maxH:"80vh",spacing:"16px"},l().map(c=>e.createElement(F,{colorScheme:"autoOrange",defaultChecked:o==null?void 0:o.includes(c),onChange:u=>{u.preventDefault(),p(c)},key:c},c))))},en=({})=>{const{isOpen:t,onOpen:n,onClose:s}=v(),r=h(),{cylinders:a}=d(i=>i.selectedCarFilters);return e.createElement(e.Fragment,null,e.createElement(I,{onClick:n,label:a.length?`Cylinders: ${a.join(", ")}`:"Cylinders",hasValue:!!a.length,onClear:()=>r(z([]))}),e.createElement(Xt,{isOpen:t,onClose:s}))},tn=({isOpen:t,onClose:n})=>{const[s,r]=m.exports.useState([]),a=h(),{drives:i}=d(c=>c.carsReducer),{drives:o}=d(c=>c.selectedCarFilters);m.exports.useEffect(()=>{o.length&&r(o)},[o]);const l=()=>i.filter(c=>c),p=c=>{s.includes(c)?r(s.filter(u=>u!==c)):r(s.concat(c))};return e.createElement(A,{isOpen:t,onClose:n,onSubmit:()=>{a(P(s)),n()}},e.createElement(b,{w:"full",alignItems:"flex-start",spacing:"16px",maxH:"80vh"},l().map(c=>e.createElement(F,{colorScheme:"autoOrange",defaultChecked:o==null?void 0:o.includes(c),onChange:u=>{u.preventDefault(),p(c)},key:c},c))))},nn=({})=>{const{isOpen:t,onOpen:n,onClose:s}=v(),r=h(),{drives:a}=d(i=>i.selectedCarFilters);return e.createElement(e.Fragment,null,e.createElement(I,{onClick:n,label:a.join(", ")||"Drives",hasValue:!!a.length,onClear:()=>r(P([]))}),e.createElement(tn,{isOpen:t,onClose:s}))},ln=({isOpen:t,onClose:n})=>{const{engineFrom:s,engineTo:r}=d(E=>E.selectedCarFilters),[a,i]=m.exports.useState(s||.5),[o,l]=m.exports.useState(r||.5),p=h(),c=(E,g)=>{const x=[];for(let f=E;f<=g;f=parseFloat(((f*100+10)/100).toFixed(1)))x.push(f);return x},u=()=>{p(G(a)),p($(o)),n()};return e.createElement(A,{isOpen:t,onClose:n,onSubmit:u},e.createElement(k,{h:"full",divider:e.createElement(Be,{borderColor:"autoGrey.400"})},e.createElement(b,{h:"full",w:"full",spacing:"4"},e.createElement(H,{fontSize:"16px",fontWeight:"600"},"From"),e.createElement(b,{h:"full",w:"full",spacing:"4",overflowY:"scroll"},c(.5,6).map(E=>e.createElement(L,{fontSize:"16px",key:E,lineHeight:"21px",w:"full",color:a===E?"autoOrange.400":"#000",onClick:()=>{i(E),E>=o&&l(E)}},E.toFixed(1))))),e.createElement(b,{h:"full",w:"full",spacing:"4"},e.createElement(H,{fontSize:"16px",fontWeight:"600"},"To"),e.createElement(b,{h:"full",w:"full",spacing:"4",overflowY:"scroll"},c(.5,6).map(E=>e.createElement(L,{fontSize:"16px",key:E,lineHeight:"21px",w:"full",color:o===E?"autoOrange.400":"#000",onClick:()=>{l(E),E<=a&&i(E)}},E.toFixed(1)))))))},sn=({})=>{const{isOpen:t,onClose:n,onOpen:s}=v(),r=h(),{engineFrom:a,engineTo:i}=d(o=>o.selectedCarFilters);return e.createElement(e.Fragment,null,e.createElement(I,{label:a&&i?`Engine (from - to): ${Number(a).toFixed(1)}L -  ${Number(i).toFixed(1)}L `:"Engine",onClick:s,hasValue:!!(a&&i),onClear:()=>{r(G(null)),r($(null))}}),e.createElement(ln,{onClose:n,isOpen:t}))},rn=({isOpen:t,onClose:n})=>{const[s,r]=m.exports.useState([]),a=h(),{fuels:i}=d(c=>c.carsReducer),{fuels:o}=d(c=>c.selectedCarFilters);m.exports.useEffect(()=>{o.length&&r(o)},[o]);const l=()=>i.filter(c=>c),p=c=>{s.includes(c)?r(s.filter(u=>u!==c)):r(s.concat(c))};return e.createElement(A,{isOpen:t,onClose:n,onSubmit:()=>{a(W(s)),n()}},e.createElement(b,{w:"full",alignItems:"flex-start",spacing:"16px",minH:"30vh"},l().map(c=>e.createElement(F,{colorScheme:"autoOrange",defaultChecked:o==null?void 0:o.includes(c),onChange:u=>{u.preventDefault(),p(c)},key:c},N(c)))))},an=({})=>{const{isOpen:t,onOpen:n,onClose:s}=v(),r=h(),{fuels:a}=d(i=>i.selectedCarFilters);return e.createElement(e.Fragment,null,e.createElement(I,{onClick:n,label:a.length?`Fuel: ${N(a.join(", "))}`:"Fuel Types",hasValue:!!a.length,onClear:()=>r(W([]))}),e.createElement(rn,{isOpen:t,onClose:s}))},cn=({isOpen:t,onClose:n})=>{const[s,r]=m.exports.useState([]),a=h(),{locations:i}=d(c=>c.carsReducer),{locations:o}=d(c=>c.selectedCarFilters);m.exports.useEffect(()=>{o.length?r(o):r([])},[o]);const l=()=>i.filter(c=>c),p=c=>{s.includes(c)?r(s.filter(u=>u!==c)):r(s.concat(c))};return e.createElement(A,{isOpen:t,onClose:n,onSubmit:()=>{a(K(s)),n()}},e.createElement(b,{w:"full",alignItems:"flex-start",spacing:"16px"},l().map(c=>e.createElement(F,{colorScheme:"autoOrange",defaultChecked:o==null?void 0:o.includes(c),onChange:u=>{u.preventDefault(),p(c)},key:c},c))))},on=s=>{var r=s,{w:t="full"}=r,n=T(r,["w"]);const{isOpen:a,onOpen:i,onClose:o}=v(),l=h(),{locations:p}=d(c=>c.selectedCarFilters);return e.createElement(ae,O({minW:t,maxW:t},n),e.createElement(I,{onClick:i,label:p.length?` ${p.join(", ")}`:"Locations",hasValue:!!p.length,onClear:()=>l(K([]))}),e.createElement(cn,{isOpen:a,onClose:o}))},pn=({isOpen:t,onClose:n})=>{const{transmission:s}=d(c=>c.selectedCarFilters),[r,a]=m.exports.useState(s),i=h(),o=Object.values(gt);m.exports.useEffect(()=>{a(s)},[]);const l=c=>{if(!r.includes(c))a([...r,c]);else{const u=r.filter(E=>E!=c);a(u)}},p=()=>{i(Q(r)),n()};return e.createElement(A,{isOpen:t,onClose:n,onSubmit:p},e.createElement(b,{w:"full",alignItems:"flex-start"},o.map(c=>e.createElement(F,{colorScheme:"autoOrange",defaultChecked:s==null?void 0:s.includes(c),onChange:u=>{u.preventDefault(),l(c)},boxShadow:"none !important",shadow:"none !important",key:c},c))))},un=({})=>{const{isOpen:t,onOpen:n,onClose:s}=v(),r=h(),{transmission:a}=d(i=>i.selectedCarFilters);return e.createElement(e.Fragment,null,e.createElement(I,{onClick:n,label:a.length?`Transmission: ${a.join(", ")}`:"Transmission",hasValue:!!a.length,onClear:()=>r(Q([]))}),e.createElement(pn,{isOpen:t,onClose:s}))},mn=({isOpen:t,onClose:n})=>{const[s,r]=m.exports.useState([]),a=h(),{types:i}=d(c=>c.carsReducer),{types:o}=d(c=>c.selectedCarFilters);m.exports.useEffect(()=>{o.length&&r(o)},[o]);const l=()=>i.filter(c=>c),p=c=>{s.includes(c)?r(s.filter(u=>u!==c)):r(s.concat(c))};return e.createElement(A,{isOpen:t,onClose:n,onSubmit:()=>{a(Z(s)),n()}},e.createElement(b,{w:"full",alignItems:"flex-start",minH:"80vh",spacing:"16px"},l().map(c=>e.createElement(F,{colorScheme:"autoOrange",defaultChecked:o==null?void 0:o.includes(c),onChange:u=>{u.preventDefault(),p(c)},key:c},N(c)))))},dn=({})=>{const{isOpen:t,onOpen:n,onClose:s}=v(),r=h(),{types:a}=d(i=>i.selectedCarFilters);return e.createElement(e.Fragment,null,e.createElement(I,{onClick:n,label:a.length?`Types: ${N(a.join("; "))}`:"Type",hasValue:!!a.length,onClear:()=>r(Z([]))}),e.createElement(mn,{isOpen:t,onClose:s}))},fn=({setKeyboardActive:t})=>{const[n,s]=m.exports.useState(""),[r,a]=m.exports.useState(""),{yearFrom:i,yearTo:o}=d(p=>p.selectedCarFilters),l=h();return m.exports.useEffect(()=>{s(i?i.toString():""),a(o?o.toString():"")},[i,o]),e.createElement(k,{borderRadius:"8px",bg:"white",spacing:0,flex:"1",p:"2px"},e.createElement(te,{pr:"2",placeholder:"Year from",type:"number",value:n,onChange:p=>s(p.currentTarget.value),onFocus:()=>t(!0),onBlur:()=>{t(!1),parseInt(n)>=(parseInt(r)||0)&&l(ce(parseInt(n))),l(oe(parseInt(n)))}}),e.createElement(le,{height:"30px"}),e.createElement(te,{placeholder:"Year to",type:"number",value:r,onChange:p=>a(p.currentTarget.value),onFocus:()=>t(!0),onBlur:()=>{t(!1),parseInt(r)<=parseInt(n)&&l(oe(parseInt(r))),l(ce(parseInt(r)||0))}}))},En=({})=>{const[t,n]=m.exports.useState(!1),[s,r]=m.exports.useState(""),[a,i]=m.exports.useState(""),o=d(u=>u.selectedCarFilters),l=d(u=>u.selectedCarFilters.isAdvancedFiltersOpen),p=h(),c=pe();return e.createElement(Ne,null,e.createElement(L,{_hover:{textDecoration:"underline"},pr:"4",alignSelf:"flex-end",onClick:()=>{p(U()),p(J(""))}},"reset all filters"),e.createElement(wt,null),e.createElement(Ot,null),e.createElement(fn,{setKeyboardActive:n}),e.createElement(k,{justify:"space-between"},e.createElement(k,{borderRadius:"8px",bg:"white",spacing:0,flex:"1",p:"2px"},e.createElement(te,{pr:"2",placeholder:"Price from",type:"number",value:s,onChange:u=>r(u.currentTarget.value),onFocus:()=>n(!0),onBlur:()=>{n(!1),p(X(s))}}),e.createElement(le,{height:"30px"}),e.createElement(te,{placeholder:"Price to",type:"number",value:a,onChange:u=>i(u.currentTarget.value),onFocus:()=>n(!0),onBlur:()=>{n(!1),p(ee(a))}})),e.createElement($e,null)),e.createElement(ze,{in:l},e.createElement(b,null,e.createElement(sn,null),e.createElement(Jt,null),e.createElement(dn,null),e.createElement(on,null),e.createElement(un,null),e.createElement(qt,null),e.createElement(nn,null),e.createElement(an,null),e.createElement(en,null))),e.createElement(b,{pt:"2",spacing:"3"},e.createElement(Qt,{isKeyboardActive:t},e.createElement(Ve,{w:"full",isKeyboardActive:t,onClick:()=>c(o)})),e.createElement(_e,{variant:"link",onClick:()=>p(Pe()),bg:"transparent"},e.createElement(C,{color:"#000",display:t?"none":"block",lineHeight:"19px",fontWeight:"400"},l?"See less filter":"See more filter"))))},hn=(t,n)=>{const s=n.slice().sort();return t.length===n.length&&t.slice().sort().every(function(r,a){return r===s[a]}),!1},gn=({modelQueryKeys:t,brands:n,query:s})=>{const r=[];return n.map(a=>r.push({brand:a,models:[]})),t.map(a=>{const i=a.slice(a.indexOf("[")+1,a.indexOf("]")),o=s.getAll(a);r.push({brand:i,models:o})}),r.filter(a=>a.models.length)},Sn=()=>{const{isLargerThan:t}=Ke(737),n=We(),s=h(),{MODEL:r,YEAR_FROM:a,YEAR_TO:i,CONDITION:o,TYPE:l,LOCATION:p,TRANSMISSION:c,KEYS:u,DRIVE:E,SALES_STATUS:g,FUEL_TYPE:x,CYLINDER:f,ENGINE_FROM:D,ENGINE_TO:M,PRICE_FROM:S,PRICE_TO:y}=ft,Qe=d(j=>j.selectedCarFilters.brands),fe=d(j=>j.carsReducer.brands);return m.exports.useEffect(()=>{const j=n.getAll("brand");hn(j,Qe)||s(pt(j));const Ze=[...new Set(Array.from(n.keys()).filter(qe=>qe.includes(`${r}[`)))],Ee=gn({brands:j,modelQueryKeys:Ze,query:n});Ee.length&&s(ut(Ee));const he=n.get(a);he&&s(oe(parseInt(he)));const ge=n.get(i);ge&&s(ce(parseInt(ge)));const Se=n.get(D);Se&&s(G(Se));const xe=n.get(M);xe&&s($(xe));const be=n.get(S);be&&s(X(be));const Ce=n.get(y);Ce&&s(ee(Ce));const ye=n.getAll(o);ye.length&&s(Y(ye));const ke=n.getAll(l);ke.length&&s(Z(ke));const Fe=n.getAll(E);Fe.length&&s(P(Fe));const we=n.getAll(p);we.length&&s(K(we));const Oe=n.getAll(c);Oe.length&&s(Q(Oe));const se=n.get(u);(se===_.NO||se===_.YES)&&s(V(se));const Te=n.getAll(g);Te.length&&s(mt(Te));const ve=n.getAll(x);ve.length&&s(W(ve));const Ae=n.getAll(f);Ae.length&&s(z(Ae))},[n]),m.exports.useEffect(()=>{fe.length||s(dt())},[fe]),e.createElement(e.Fragment,null,t?e.createElement(Kt,null):e.createElement(En,null))},xn=()=>{const t=h();return m.exports.useEffect(()=>()=>{t(U())},[]),e.createElement(Et,{pt:["4","6",null,"8"]},e.createElement(b,{w:"full",spacing:["66px"]},e.createElement(b,{w:"full",alignItems:"flex-end"},e.createElement(Mt,null,e.createElement(Sn,null)),e.createElement(L,{display:["none",null,"block"],_hover:{textDecoration:"underline"},pr:"4",onClick:()=>{t(U()),t(J(""))}},"reset all filters")),e.createElement(It,null),e.createElement(jt,null)))},Vn=()=>e.createElement(e.Fragment,null,e.createElement(tt,null),e.createElement(xn,null));export{Vn as CatalogPage,Vn as default};