var et=Object.defineProperty,tt=Object.defineProperties;var nt=Object.getOwnPropertyDescriptors;var Q=Object.getOwnPropertySymbols;var Ie=Object.prototype.hasOwnProperty,Me=Object.prototype.propertyIsEnumerable;var Re=(t,n,l)=>n in t?et(t,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[n]=l,O=(t,n)=>{for(var l in n||(n={}))Ie.call(n,l)&&Re(t,l,n[l]);if(Q)for(var l of Q(n))Me.call(n,l)&&Re(t,l,n[l]);return t},He=(t,n)=>tt(t,nt(n));var M=(t,n)=>{var l={};for(var a in t)Ie.call(t,a)&&n.indexOf(a)<0&&(l[a]=t[a]);if(t!=null&&Q)for(var a of Q(t))n.indexOf(a)<0&&Me.call(t,a)&&(l[a]=t[a]);return l};import{R as e,r as u,u as De}from"./vendor.99726a2e.js";import{u as lt,k as st,T as x,F as at,H as rt,h as je,X as F,J as q,Y as ct,Z as ot,I as Le,j as _e,V as ze,U as T,_ as J,P as it,C as pt}from"./PublicLayout.30f21c4b.js";import{u as d,d as h,H as y,ay as Ne,V as S,a as j,ai as Be,aj as ut,g as mt,ah as dt,b as ft,az as B,aA as Y,aB as G,aC as P,aD as W,S as Ye,aE as $,aF as V,aG as K,c as Et,I as te,aH as ne,aI as le,aJ as ht,aK as U,aL as Z,a1 as Ge,aM as Pe,B as se,aN as ae,aO as re,aP as ce,aQ as gt,aR as St,aS as xt,aT as Ct,aU as bt,aV as yt}from"./index.c1fe9b16.js";import{b as oe,c as N}from"./CarCardHeading.7e5feac0.js";import{C as We}from"./Card.e07ae1d5.js";import{I as kt}from"./image.301fe6c9.js";import{D as Ft,c as ie,d as pe,e as w,f as ue}from"./SelectWrapper.8603c039.js";import{A as wt,u as $e,S as me,B as Ot,C as X,M as Tt,Y as vt,a as Ve,b as v,c as A,d as At,e as It,s as Mt}from"./submitCarsSearch.343835c7.js";import{A as Rt}from"./ArrowPrevIcon.6090b341.js";import{u as Ke}from"./useMediaQueryMin.b825f88b.js";import{B as L,C as Ht}from"./CatalogListWrap.7c5cf234.js";import{u as Dt}from"./use-toast.e2b20c33.js";import{H as _}from"./contants.d6573c4d.js";import{S as jt}from"./simple-grid.1a3cc4de.js";import{T as Lt}from"./types.401d8b7f.js";import"./prop-types.d6ec705b.js";import"./formik.78ddb322.js";import"./react-redux.9e699590.js";import"./axios.7b768d2b.js";import"./focus-visible.88d37904.js";import"./swiper.3c4df1c1.js";import"./aspect-ratio.a0e9cde5.js";import"./react-swipeable.5cb7bd51.js";var _t="/assets/car with bg-1@2x.99b4319f.png";const zt=({})=>{const{isCatalogBannerOpen:t}=d(a=>a.globalAppState),n=h(),{isDesktop:l}=lt();return e.createElement(e.Fragment,null,l&&e.createElement(We,{w:"full",p:"30px",display:t?"block":"none"},e.createElement(y,{spacing:"32px",position:"relative"},e.createElement(kt,{src:_t,w:["110px"],loading:"lazy"}),e.createElement(oe,{icon:st,boxSize:6,position:"absolute",right:"-2",top:"-2",_active:{bg:"autoGrey.400"},onClick:()=>n(Ne())}),e.createElement(S,{alignItems:"flex-start"},e.createElement(j,{fontSize:"16px"},"Certified Car"),e.createElement(x,{fontSize:"14px",lineHeight:"24px",opacity:"63%",pr:"35px"},"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, magnam deleniti voluptatum officiis tempore aperiam quasi error hic reiciendis facilis dicta saepe quam vel ex tempora impedit accusamus blanditiis nisi? aperiam quasi error accusamus blanditiis nisi?")))))},Nt=l=>{var a=l,{children:t}=a,n=M(a,["children"]);return e.createElement(We,O({bg:["transparent",null,"autoBlue.400"],p:["0",null,"16px"],w:"full",minH:"auto"},n),t)},Bt=({activePage:t,totalPages:n,onChange:l,paginNumbers:a})=>{const{isDesktop:c,isMobile:p,isTablet:o}=d(b=>b.globalAppState.screen),[s,i]=u.exports.useState([]),[r,f]=u.exports.useState([]),[E,g]=u.exports.useState([]),{isLargerThan:k}=Ke(360);let m=3;o&&(m=5),c&&(m=10);const C=s.length===1,R=r.length===1,H=t>r.length-m;return u.exports.useEffect(()=>{t===m?i(a.slice(0,m+1)):t>m?i([1]):i(a.slice(0,m)),t>m&&t<=n-m?g(p?[t-1,t,t+1]:[t-2,t-1,t,t+1,t+2]):g([]),t===n-m+1?(f(a.slice(n-m-1,n)),i([1])):t>n-m?(f(a.slice(n-m,n)),i([1])):f([n]),a.length<m+3&&(i([...a]),g([]),f([]))},[t,n]),e.createElement(y,null,k?e.createElement(y,{w:"full",display:a.length>1?"flex":"none"},s.map(b=>e.createElement(L,{key:b,onClick:()=>l(b),active:t===b},e.createElement(j,{fontSize:"18px",fontWeight:"light"},b))),e.createElement(x,{display:C?"block":"none"},"..."),E.map(b=>e.createElement(L,{key:b,onClick:()=>l(b),active:t===b},e.createElement(j,{fontSize:"18px",fontWeight:"light"},b))),e.createElement(x,{display:R?"block":"none"},"..."),r.map(b=>e.createElement(L,{key:b,onClick:()=>l(b),active:t===b,display:k&&H?"block":"none"},e.createElement(j,{fontSize:"18px",fontWeight:"light"},b)))):e.createElement(e.Fragment,null,e.createElement(x,{display:t>1?"block":"none"},"..."),e.createElement(L,{active:!0},e.createElement(j,{fontSize:"18px",fontWeight:"light"},t)),e.createElement(x,{display:t<a.length?"block":"none"},"...")))},Yt=c=>{var p=c,{activePage:t,totalPages:n=1,onPageChange:l}=p,a=M(p,["activePage","totalPages","onPageChange"]);const o=[...Array(n).keys()].map(s=>s+1);return e.createElement(y,O({spacing:["1","2"]},a),e.createElement(oe,{variant:"ghost",bg:"transparent",icon:Rt,disabled:t===1,onClick:()=>l(t-1),boxSize:"6",_active:{bg:"autoGrey.400"},display:n===1?"none":"block"}),e.createElement(Bt,{activePage:t,totalPages:n,onChange:l,paginNumbers:o}),e.createElement(oe,{variant:"ghost",bg:"transparent",icon:wt,fill:"#000",boxSize:"6",disabled:t===n,onClick:()=>l(t+1),_active:{bg:"autoGrey.400"},display:n===1?"none":"block"}))},Gt=()=>{const{dealerCars:t,fetchingDealerCars:n}=d(C=>C.carsReducer),{totalPages:l,activePage:a}=d(C=>C.carsPagination),{isAuthenticated:c}=d(C=>C.userInfoSlice),p=Dt(),o=u.exports.useRef(),{networkError:s,catalogQuery:i}=d(C=>C.globalAppState);u.exports.useEffect(()=>{s&&m()},[s]);const r=h(),f=De(),E=$e(),g=Number(E.get("page"))||1;u.exports.useEffect(()=>(i?f.push({search:i}):(a?E.set("page",a.toString()):E.set("page",g.toString()),f.push({search:E.toString()}),r(Be(E.get("page"))),r(ut(E.toString()))),()=>{r(Ne())}),[]),u.exports.useEffect(()=>{c&&r(mt(""))},[c]),u.exports.useEffect(()=>{i!==E.toString()&&(r(dt(E)),r(Be(E.get("page"))),setTimeout(()=>window.scrollTo(0,0)))},[g,i]);const k=C=>{E.set("page",String(C)),f.push({search:E.toString()})},m=()=>{o.current=p({title:s,status:"error",position:"top",duration:3e3,isClosable:!0})};return n?e.createElement(S,{h:"100vh",w:"full"},e.createElement(ft,null)):e.createElement(S,{spacing:"90px",w:"full"},t.length?e.createElement(Ht,{gap:"16px"},t.map((C,R)=>e.createElement(at,{justify:"center",key:R},e.createElement(Ft,{car:C})))):e.createElement(rt,null,"No Results found"),e.createElement(Yt,{totalPages:l,activePage:g,onPageChange:C=>k(C),display:t.length?"flex":"none"}))},Pt=()=>e.createElement("svg",{id:"Group_975","data-name":"Group 975",xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 40 40"},e.createElement("g",{id:"Rectangle_160","data-name":"Rectangle 160",fill:"none",stroke:"#3d405b",strokeWidth:"1.5"},e.createElement("rect",{width:"40",height:"40",rx:"8",stroke:"none"}),e.createElement("rect",{x:"0.75",y:"0.75",width:"38.5",height:"38.5",rx:"7.25",fill:"none"})),e.createElement("g",{id:"Group_937","data-name":"Group 937",transform:"translate(8 8)"},e.createElement("path",{id:"Path_454","data-name":"Path 454",d:"M0,0H24V24H0Z",fill:"none"}),e.createElement("path",{id:"Path_1582","data-name":"Path 1582",d:"M2.651,20.667a.96.96,0,0,0,.457.258,1.061,1.061,0,0,0,.522,0,1.012,1.012,0,0,0,.456-.254l6.266-6.278,6.272,6.277a1.027,1.027,0,0,0,1.435,0,1,1,0,0,0,.289-.723.968.968,0,0,0-.286-.713L11.79,12.954l6.272-6.265a.988.988,0,0,0,.291-.717.946.946,0,0,0-.294-.719,1,1,0,0,0-.723-.29.961.961,0,0,0-.712.287l-6.272,6.275L4.086,5.249a1,1,0,0,0-.456-.255,1.108,1.108,0,0,0-.522,0,.892.892,0,0,0-.457.262,1.028,1.028,0,0,0-.257.461,1.061,1.061,0,0,0,0,.522.951.951,0,0,0,.254.452l6.265,6.267L2.648,19.231a.993.993,0,0,0-.259.452,1.043,1.043,0,0,0,0,.527A.926.926,0,0,0,2.651,20.667Z",transform:"translate(1.647 -0.961)",fill:"#3d405b"}))),Wt=()=>e.createElement("svg",{id:"Group_974","data-name":"Group 974",xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 40 40"},e.createElement("g",{id:"Rectangle_160","data-name":"Rectangle 160",fill:"none",stroke:"#3d405b",strokeWidth:"1.5"},e.createElement("rect",{width:"40",height:"40",rx:"8",stroke:"none"}),e.createElement("rect",{x:"0.75",y:"0.75",width:"38.5",height:"38.5",rx:"7.25",fill:"none"})),e.createElement("g",{id:"Group_131","data-name":"Group 131",transform:"translate(8 8)"},e.createElement("path",{id:"Path_454","data-name":"Path 454",d:"M0,0H24V24H0Z",fill:"none"}),e.createElement("path",{id:"Path_455","data-name":"Path 455",d:"M5.336,14.8a2.4,2.4,0,0,1,4.528,0H18v1.6H9.864a2.4,2.4,0,0,1-4.528,0H2V14.8Zm4.8-5.6a2.4,2.4,0,0,1,4.528,0H18v1.6H14.664a2.4,2.4,0,0,1-4.528,0H2V9.2Zm-4.8-5.6a2.4,2.4,0,0,1,4.528,0H18V5.2H9.864a2.4,2.4,0,0,1-4.528,0H2V3.6ZM7.6,5.2a.8.8,0,1,0-.8-.8A.8.8,0,0,0,7.6,5.2Zm4.8,5.6a.8.8,0,1,0-.8-.8A.8.8,0,0,0,12.4,10.8ZM7.6,16.4a.8.8,0,1,0-.8-.8A.8.8,0,0,0,7.6,16.4Z",transform:"translate(2 2.002)",fill:"#3d405b"}))),D=s=>{var i=s,{selected:t,label:n,children:l,clearSelected:a,onApply:c,size:p}=i,o=M(i,["selected","label","children","clearSelected","onApply","size"]);const[r,f]=u.exports.useState(!1),[E,g]=u.exports.useState("");u.exports.useEffect(()=>{t.length?g(`${t.join(", ")}`):g(n)},[t]);const k=()=>f(!1);return e.createElement(ie,{areOptionsOpen:r},e.createElement(pe,{isActive:r,onClick:()=>{k(),c()}}),e.createElement(w,null,e.createElement(me,{size:p,areOptionsOpen:r,clearCb:m=>{m.stopPropagation&&m.stopPropagation(),a(),f(!1)},areOptionsSelected:!!t.length,onClick:()=>f(m=>!m)},e.createElement(y,{pl:"4",pr:"28px",h:"40px",w:"full",bg:"white",_hover:{bg:"autoGrey.200"},borderRadius:"8px"},e.createElement(x,{opacity:r?"1":"0.5",noOfLines:1},E))),e.createElement(ue,O({isOpen:r},o),l)))},z=l=>{var a=l,{children:t}=a,n=M(a,["children"]);return e.createElement(je,O({p:"4",w:"full",whiteSpace:"normal",borderRadius:"none",textAlign:"start",display:"flex",justifyContent:"flex-start",fontWeight:"400",variant:"ghost",_hover:{bg:"autoGrey.100"}},n),t)},$t=({})=>{const[t,n]=u.exports.useState([]),{conditions:l}=d(s=>s.carsReducer),{conditions:a}=d(s=>s.selectedCarFilters),c=h(),p=l.filter(s=>s);u.exports.useEffect(()=>{a.length&&n(a)},[a]);const o=s=>{t.includes(s)?n(t.filter(i=>i!==s)):n([s].concat(t))};return e.createElement(D,{size:"md",selected:t,label:"condition",clearSelected:()=>{n([]),c(B([]))},onApply:()=>c(B(t)),top:"35px"},e.createElement(w,null,p.map(s=>e.createElement(z,{key:s,onClick:i=>{i.preventDefault(),o(s)}},e.createElement(F,{colorScheme:"autoOrange",isChecked:t==null?void 0:t.includes(s)},e.createElement(x,{w:"full"},s))))))},Vt=({})=>{const[t,n]=u.exports.useState([]),{cylinders:l}=d(s=>s.carsReducer),{cylinders:a}=d(s=>s.selectedCarFilters),c=h(),p=l.filter(s=>s).map(s=>s.toString());u.exports.useEffect(()=>{a.length&&n(a)},[a]);const o=s=>{t.includes(s)?n(t.filter(i=>i!==s)):n([s].concat(t))};return e.createElement(D,{size:"md",selected:t,label:"cylinders",clearSelected:()=>{n([]),c(Y([]))},onApply:()=>c(Y(t)),top:"35px"},e.createElement(w,null,p.map(s=>e.createElement(z,{key:s,onClick:i=>{i.preventDefault(),o(s)}},e.createElement(F,{colorScheme:"autoOrange",isChecked:t==null?void 0:t.includes(s)},e.createElement(x,{w:"full"},s))))))},Kt=({})=>{const[t,n]=u.exports.useState([]),{drives:l}=d(s=>s.carsReducer),{drives:a}=d(s=>s.selectedCarFilters),c=h(),p=l.filter(s=>s);u.exports.useEffect(()=>{a.length&&n(a)},[a]);const o=s=>{t.includes(s)?n(t.filter(i=>i!==s)):n([s].concat(t))};return e.createElement(D,{size:"md",selected:t,label:"drives",clearSelected:()=>{n([]),c(G([]))},onApply:()=>c(G(t)),top:"35px"},e.createElement(w,null,p.map(s=>e.createElement(z,{key:s,onClick:i=>{i.preventDefault(),o(s)}},e.createElement(F,{colorScheme:"autoOrange",isChecked:t==null?void 0:t.includes(s)},e.createElement(x,{w:"full"},s))))))},Ut=n=>{var t=M(n,[]);const[l,a]=u.exports.useState(!1),[c,p]=u.exports.useState(0),[o,s]=u.exports.useState(0),[i,r]=u.exports.useState(""),{engineFrom:f,engineTo:E}=d(m=>m.selectedCarFilters),g=h();u.exports.useEffect(()=>{r(c||o?`${c} - ${o}`:"engine")},[c,o]),u.exports.useEffect(()=>{f&&p(Number(f)),E&&s(Number(E))},[f,E]);const k=(m,C)=>{const R=[];for(let H=m;H<=C;H=parseFloat(((H*100+10)/100).toFixed(1)))R.push(H);return R};return e.createElement(ie,He(O({},t),{areOptionsOpen:l,bg:"white",borderRadius:"8px"}),e.createElement(pe,{isActive:l,onClick:()=>{a(!1),g(P(c)),g(W(o))}}),e.createElement(w,null,e.createElement(me,{areOptionsOpen:l,clearCb:m=>{m.stopPropagation&&m.stopPropagation(),s(0),p(0),g(P(0)),g(W(0)),r(""),a(!1)},areOptionsSelected:!!(c||o),onClick:()=>a(m=>!m)},e.createElement(y,{pl:"4",h:"40px",w:"full",_hover:{bg:"autoGrey.200"},borderRadius:"8px"},e.createElement(x,{opacity:l?"1":"0.5"},i))),e.createElement(ue,{isOpen:l,w:"full"},e.createElement(y,{h:"290px",w:"full",divider:e.createElement(Ye,{borderColor:"autoGrey.400"}),pr:"2px"}," ",e.createElement(S,{h:"full",w:"full",spacing:"4"},e.createElement(x,{fontSize:"16px"},"From"),e.createElement(S,{h:"full",w:"full",spacing:"4",overflowY:"scroll",css:{"&::-webkit-scrollbar":{display:"none"}}},k(.5,6).map(m=>e.createElement(q,{fontSize:"16px",key:m,lineHeight:"21px",w:"full",color:c===m?"autoOrange.400":"#000",onClick:()=>{p(m),m>=o&&s(m)}},m.toFixed(1))))),e.createElement(S,{h:"full",w:"full",spacing:"4"},e.createElement(x,{fontSize:"16px"},"To"),e.createElement(S,{h:"full",w:"full",spacing:"4",overflowY:"scroll",css:{"&::-webkit-scrollbar":{display:"none"}}},k(.5,6).map(m=>e.createElement(q,{fontSize:"16px",key:m,lineHeight:"21px",w:"full",color:o===m?"autoOrange.400":"#000",onClick:()=>{s(m),m<=c&&p(m)}},m.toFixed(1)))))))))},Zt=({})=>{const[t,n]=u.exports.useState([]),{fuels:l}=d(s=>s.carsReducer),{fuels:a}=d(s=>s.selectedCarFilters),c=h(),p=l.filter(s=>s);u.exports.useEffect(()=>{a.length&&n(a)},[a]);const o=s=>{t.includes(s)?n(t.filter(i=>i!==s)):n([s].concat(t))};return e.createElement(D,{size:"md",selected:t,label:"fuel type",clearSelected:()=>{n([]),c($([]))},onApply:()=>c($(t)),top:"35px"},e.createElement(w,null,p.map(s=>e.createElement(z,{key:s,onClick:i=>{i.preventDefault(),o(s)}},e.createElement(F,{colorScheme:"autoOrange",isChecked:t==null?void 0:t.includes(s)},e.createElement(x,{w:"full"},s))))))},Qt=({})=>{const[t,n]=u.exports.useState(null),{keys:l}=d(c=>c.selectedCarFilters);u.exports.useEffect(()=>{l&&n(l)},[l]);const a=h();return e.createElement(D,{size:"md",selected:t?[t]:[],label:t||"keys",clearSelected:()=>{n(null),a(V(null))},onApply:()=>t&&a(V(t)),top:"35px"},e.createElement(w,{align:"flex-start",spacing:"0"},e.createElement(y,{p:"2",pl:"4",onClick:()=>n(_.YES),_hover:{bg:"autoGrey.100"},w:"full",cursor:"pointer"},e.createElement("input",{type:"radio",name:"has_keys",value:"YES",checked:t==="YES",readOnly:!0}),e.createElement(x,null,"Yes")),e.createElement(y,{p:"2",pl:"4",onClick:()=>n(_.NO),_hover:{bg:"autoGrey.100"},w:"full",cursor:"pointer"},e.createElement("input",{type:"radio",name:"has_keys",value:"NO",checked:t==="NO",readOnly:!0}),e.createElement(x,null,"No"))," "))},qt=({})=>{const[t,n]=u.exports.useState([]),{locations:l}=d(s=>s.carsReducer),{locations:a}=d(s=>s.selectedCarFilters),c=h(),p=l.filter(s=>s);u.exports.useEffect(()=>{a.length&&n(a)},[a]);const o=s=>{t.includes(s)?n(t.filter(i=>i!==s)):n([s].concat(t))};return e.createElement(D,{size:"md",selected:t,label:"location",clearSelected:()=>{n([]),c(K([]))},onApply:()=>c(K(t)),top:"35px"},e.createElement(w,null,p.map(s=>e.createElement(z,{key:s,onClick:i=>{i.preventDefault(),o(s)}},e.createElement(F,{colorScheme:"autoOrange",isChecked:t==null?void 0:t.includes(s)},e.createElement(x,{w:"full"},s))))))},Jt=Et({displayName:"EuroIcon",viewBox:"0 0 12 23",path:e.createElement(e.Fragment,null,e.createElement("text",{id:"_","data-name":"\u20AC",transform:"translate(0 19)",fontSize:"20",fontFamily:"HelveticaNeue, Helvetica Neue"},e.createElement("tspan",{x:"0",y:"0"},"\u20AC")))}),Ue=({currency:t,setCurrency:n})=>e.createElement(y,{borderRadius:"8px",bg:"white",spacing:"2px",flexBasis:"30%",justify:"space-between",p:"7px"},e.createElement(L,{onClick:()=>n("GEL"),active:t==="GEL"},e.createElement(te,{as:ct,fill:t==="GEL"?"#fff":"#000",boxSize:7,fontWeight:"400"})),e.createElement(L,{onClick:()=>n("USD"),active:t==="USD"},e.createElement(te,{as:ot,boxSize:6,fontWeight:"400",fill:t==="USD"?"#fff":"#000"})),e.createElement(L,{onClick:()=>n("EUR"),active:t==="EUR",fontSize:"20px",fontWeight:"400"},e.createElement(te,{as:Jt,boxSize:6,fontWeight:"400",fill:t==="EUR"?"#fff":"#000"}))),Xt=({})=>{const[t,n]=u.exports.useState(!1),[l,a]=u.exports.useState("GEL"),[c,p]=u.exports.useState(""),[o,s]=u.exports.useState(""),[i,r]=u.exports.useState(""),{priceFrom:f,priceTo:E}=d(m=>m.selectedCarFilters),g=h(),k=()=>{switch(l){case"GEL":return"\u20BE";case"EUR":return"\u20AC";case"USD":return"$"}};return u.exports.useEffect(()=>{f&&s(f),E&&r(E)},[f,E]),u.exports.useEffect(()=>{p(i&&o?` ${k()} ${o} - ${i} `:o?`from: ${l} ${o}`:i?`to: ${l} ${i}`:"price")},[o,i,l]),e.createElement(ie,{areOptionsOpen:t},e.createElement(pe,{isActive:t,onClick:()=>{n(!1),g(ne(o)),g(le(i)),g(ht(l))}}),e.createElement(w,null,e.createElement(me,{size:"md",areOptionsOpen:t,clearCb:m=>{m.stopPropagation&&m.stopPropagation(),g(ne("")),g(le("")),s(""),r(""),p("Price"),n(!1)},areOptionsSelected:!!o&&!!i,onClick:()=>n(m=>!m)},e.createElement(y,{pl:"4",h:"40px",w:"full",bg:"white",_hover:{bg:"autoGrey.200"},borderRadius:"8px"},e.createElement(x,{opacity:t?"1":"0.5"},c))),e.createElement(ue,{isOpen:t,w:"full",top:"35px"},e.createElement(S,{p:"0px 16px 16px",align:"flex-start"},e.createElement(Ue,{currency:l,setCurrency:a}),e.createElement(S,null,e.createElement(Le,{placeholder:"From",h:"37px",type:"number",value:o,onChange:m=>s(m.currentTarget.value)}),e.createElement(Le,{placeholder:"To",h:"37px",type:"number",value:i,onChange:m=>r(m.currentTarget.value)}))))))},en=({})=>{const[t,n]=u.exports.useState([]),l=h(),{transmissions:a}=d(s=>s.carsReducer),{transmission:c}=d(s=>s.selectedCarFilters),p=a.filter(s=>s);u.exports.useEffect(()=>{c.length&&n(c)},[c]);const o=s=>{t.includes(s)?n(t.filter(i=>i!==s)):n([s].concat(t))};return e.createElement(D,{size:"md",selected:t,label:"transmission",clearSelected:()=>{n([]),l(U([]))},onApply:()=>l(U(t))},e.createElement(w,null,p.map(s=>e.createElement(z,{key:s,onClick:i=>{i.preventDefault(),o(s)}},e.createElement(F,{colorScheme:"autoOrange",isChecked:t==null?void 0:t.includes(s)},e.createElement(x,null,s))))))},tn=({})=>{const[t,n]=u.exports.useState([]),{types:l}=d(s=>s.carsReducer),{types:a}=d(s=>s.selectedCarFilters),c=h(),p=l.filter(s=>s);u.exports.useEffect(()=>{a.length&&n(a)},[a]);const o=s=>{t.includes(s)?n(t.filter(i=>i!==s)):n([s].concat(t))};return e.createElement(D,{size:"md",selected:t,label:"types",clearSelected:()=>{n([]),c(Z([]))},onApply:()=>c(Z(t)),top:"35px"},e.createElement(w,null,p.map(s=>e.createElement(z,{key:s,onClick:i=>{i.preventDefault(),o(s)}},e.createElement(F,{colorScheme:"autoOrange",isChecked:t==null?void 0:t.includes(s)},e.createElement(x,{w:"full"},s))))))},nn=o=>{var s=o,{p:t="2",bg:n="#fff",direction:l="row",borderRadius:a="md",onSubmit:c}=s,p=M(s,["p","bg","direction","borderRadius","onSubmit"]);const i=h(),{isAdvancedFiltersOpen:r}=d(E=>E.selectedCarFilters),f=()=>i(Pe());return e.createElement(e.Fragment,null,e.createElement(Ge,O({p:t,bg:n,direction:l,borderRadius:a,alignItems:"center"},p),e.createElement(Ot,{labelPadding:"2",w:["100%","100%","100%"]}),e.createElement(X,{height:["40px",null,null,"30px"],borderColor:"gray.300"}),e.createElement(Tt,null),e.createElement(X,{height:["40px",null,null,"30px"],borderColor:"gray.300"}),e.createElement(vt,null),e.createElement(y,{spacing:{md:"0",xl:"2"}},e.createElement(Ve,{w:{md:"140px",lg:"144px","2xl":"211px"},ml:[null,null,"0px","16px"],mr:"2",onClick:c}),r?e.createElement(_e,{icon:e.createElement(Pt,null),onClick:f,"aria-label":"close advanced filters",bg:"white",_hover:{bg:"white"},_active:{bg:"white"}}):e.createElement(_e,{onClick:f,icon:e.createElement(Wt,null),"aria-label":"open advanced filters",bg:"white",_hover:{bg:"white"},_active:{bg:"white"}}))),e.createElement(ze,{in:r},e.createElement(jt,{templateColumns:[null,"1fr 1fr","repeat(3, 1fr)","repeat(5, 1fr)"],spacingX:"4",spacingY:"2",mt:["2","4",null,"4",null,"24px"]},e.createElement(Xt,null),e.createElement(Ut,null),e.createElement($t,null),e.createElement(tn,null),e.createElement(en,null),e.createElement(Qt,null),e.createElement(Kt,null),e.createElement(qt,null),e.createElement(Zt,null),e.createElement(Vt,null))))},ln=s=>{var i=s,{isKeyboardActive:t,children:n,w:l="full",bottom:a="10px",pr:c="4",pl:p="4"}=i,o=M(i,["isKeyboardActive","children","w","bottom","pr","pl"]);return e.createElement(e.Fragment,null,t?e.createElement(se,O({w:l,position:"fixed",bottom:a,pr:c,pl:p,zIndex:"modal"},o),n):e.createElement(se,O({w:l},o),n))},sn=({isOpen:t,onClose:n})=>{const{keys:l}=d(s=>s.selectedCarFilters),[a,c]=u.exports.useState(l),p=h();u.exports.useEffect(()=>{c(l)},[]);const o=()=>{a&&p(V(a)),n()};return e.createElement(v,{isOpen:t,onClose:n,onSubmit:o},e.createElement(S,{w:"full",alignItems:"flex-start"},e.createElement(y,null,e.createElement("input",{type:"radio",name:"has_keys",value:"YES",checked:a==="YES",onChange:()=>c(_.YES)}),e.createElement(x,null,"Yes")),e.createElement(y,null,e.createElement("input",{type:"radio",name:"has_keys",value:"NO",checked:a==="NO",onChange:()=>c(_.NO)}),e.createElement(x,null,"No"))))},an=({})=>{const{isOpen:t,onOpen:n,onClose:l}=T(),a=h(),{keys:c}=d(p=>p.selectedCarFilters);return e.createElement(e.Fragment,null,e.createElement(A,{onClick:n,label:c?`Keys: ${c}`:"Keys",hasValue:!!c,onClear:()=>a(V(_.NO))}),e.createElement(sn,{isOpen:t,onClose:l}))},rn=({isOpen:t,onClose:n})=>{const[l,a]=u.exports.useState([]),c=h(),{conditions:p}=d(r=>r.carsReducer),{conditions:o}=d(r=>r.selectedCarFilters);u.exports.useEffect(()=>{o.length&&a(o)},[o]);const s=()=>p.filter(r=>r),i=r=>{l.includes(r)?a(l.filter(f=>f!==r)):a(l.concat(r))};return e.createElement(v,{isOpen:t,onClose:n,onSubmit:()=>{c(B(l)),n()}},e.createElement(S,{w:"full",alignItems:"flex-start",minH:"80vh",spacing:"16px"},s().map(r=>e.createElement(F,{colorScheme:"autoOrange",defaultChecked:o==null?void 0:o.includes(r),onChange:f=>{f.preventDefault(),i(r)},key:r},N(r)))))},cn=({})=>{const{isOpen:t,onOpen:n,onClose:l}=T(),a=h(),{conditions:c}=d(p=>p.selectedCarFilters);return e.createElement(e.Fragment,null,e.createElement(A,{onClick:n,label:c.length?`Condition: ${N(c.join("; "))}`:"Condition",hasValue:!!c.length,onClear:()=>a(B([]))}),e.createElement(rn,{isOpen:t,onClose:l}))},on=({isOpen:t,onClose:n})=>{const[l,a]=u.exports.useState([]),c=h(),{cylinders:p}=d(r=>r.carsReducer),{cylinders:o}=d(r=>r.selectedCarFilters);u.exports.useEffect(()=>{o.length&&a(o)},[o]);const s=()=>p.filter(r=>r),i=r=>{l.includes(r)?a(l.filter(f=>f!==r)):a(l.concat(r))};return e.createElement(v,{isOpen:t,onClose:n,onSubmit:()=>{c(Y(l)),n()}},e.createElement(S,{w:"full",alignItems:"flex-start",maxH:"80vh",spacing:"16px"},s().map(r=>e.createElement(F,{colorScheme:"autoOrange",defaultChecked:o==null?void 0:o.includes(r),onChange:f=>{f.preventDefault(),i(r)},key:r},r))))},pn=({})=>{const{isOpen:t,onOpen:n,onClose:l}=T(),a=h(),{cylinders:c}=d(p=>p.selectedCarFilters);return e.createElement(e.Fragment,null,e.createElement(A,{onClick:n,label:c.length?`Cylinders: ${c.join(", ")}`:"Cylinders",hasValue:!!c.length,onClear:()=>a(Y([]))}),e.createElement(on,{isOpen:t,onClose:l}))},un=({isOpen:t,onClose:n})=>{const[l,a]=u.exports.useState([]),c=h(),{drives:p}=d(r=>r.carsReducer),{drives:o}=d(r=>r.selectedCarFilters);u.exports.useEffect(()=>{o.length&&a(o)},[o]);const s=()=>p.filter(r=>r),i=r=>{l.includes(r)?a(l.filter(f=>f!==r)):a(l.concat(r))};return e.createElement(v,{isOpen:t,onClose:n,onSubmit:()=>{c(G(l)),n()}},e.createElement(S,{w:"full",alignItems:"flex-start",spacing:"16px",maxH:"80vh"},s().map(r=>e.createElement(F,{colorScheme:"autoOrange",defaultChecked:o==null?void 0:o.includes(r),onChange:f=>{f.preventDefault(),i(r)},key:r},r))))},mn=({})=>{const{isOpen:t,onOpen:n,onClose:l}=T(),a=h(),{drives:c}=d(p=>p.selectedCarFilters);return e.createElement(e.Fragment,null,e.createElement(A,{onClick:n,label:c.join(", ")||"Drives",hasValue:!!c.length,onClear:()=>a(G([]))}),e.createElement(un,{isOpen:t,onClose:l}))},dn=({isOpen:t,onClose:n})=>{const{engineFrom:l,engineTo:a}=d(E=>E.selectedCarFilters),[c,p]=u.exports.useState(l||.5),[o,s]=u.exports.useState(a||.5),i=h(),r=(E,g)=>{const k=[];for(let m=E;m<=g;m=parseFloat(((m*100+10)/100).toFixed(1)))k.push(m);return k},f=()=>{i(P(c)),i(W(o)),n()};return e.createElement(v,{isOpen:t,onClose:n,onSubmit:f},e.createElement(y,{h:"full",divider:e.createElement(Ye,{borderColor:"autoGrey.400"})},e.createElement(S,{h:"full",w:"full",spacing:"4"},e.createElement(j,{fontSize:"16px",fontWeight:"600"},"From"),e.createElement(S,{h:"full",w:"full",spacing:"4",overflowY:"scroll"},r(.5,6).map(E=>e.createElement(q,{fontSize:"16px",key:E,lineHeight:"21px",w:"full",color:c===E?"autoOrange.400":"#000",onClick:()=>{p(E),E>=o&&s(E)}},E.toFixed(1))))),e.createElement(S,{h:"full",w:"full",spacing:"4"},e.createElement(j,{fontSize:"16px",fontWeight:"600"},"To"),e.createElement(S,{h:"full",w:"full",spacing:"4",overflowY:"scroll"},r(.5,6).map(E=>e.createElement(q,{fontSize:"16px",key:E,lineHeight:"21px",w:"full",color:o===E?"autoOrange.400":"#000",onClick:()=>{s(E),E<=c&&p(E)}},E.toFixed(1)))))))},fn=({})=>{const{isOpen:t,onClose:n,onOpen:l}=T(),a=h(),{engineFrom:c,engineTo:p}=d(o=>o.selectedCarFilters);return e.createElement(e.Fragment,null,e.createElement(A,{label:c&&p?`Engine (from - to): ${Number(c).toFixed(1)}L -  ${Number(p).toFixed(1)}L `:"Engine",onClick:l,hasValue:!!(c&&p),onClear:()=>{a(P(null)),a(W(null))}}),e.createElement(dn,{onClose:n,isOpen:t}))},En=({isOpen:t,onClose:n})=>{const[l,a]=u.exports.useState([]),c=h(),{fuels:p}=d(r=>r.carsReducer),{fuels:o}=d(r=>r.selectedCarFilters);u.exports.useEffect(()=>{o.length&&a(o)},[o]);const s=()=>p.filter(r=>r),i=r=>{l.includes(r)?a(l.filter(f=>f!==r)):a(l.concat(r))};return e.createElement(v,{isOpen:t,onClose:n,onSubmit:()=>{c($(l)),n()}},e.createElement(S,{w:"full",alignItems:"flex-start",spacing:"16px",minH:"30vh"},s().map(r=>e.createElement(F,{colorScheme:"autoOrange",defaultChecked:o==null?void 0:o.includes(r),onChange:f=>{f.preventDefault(),i(r)},key:r},N(r)))))},hn=({})=>{const{isOpen:t,onOpen:n,onClose:l}=T(),a=h(),{fuels:c}=d(p=>p.selectedCarFilters);return e.createElement(e.Fragment,null,e.createElement(A,{onClick:n,label:c.length?`Fuel: ${N(c.join(", "))}`:"Fuel Types",hasValue:!!c.length,onClear:()=>a($([]))}),e.createElement(En,{isOpen:t,onClose:l}))},gn=({isOpen:t,onClose:n})=>{const[l,a]=u.exports.useState([]),c=h(),{locations:p}=d(r=>r.carsReducer),{locations:o}=d(r=>r.selectedCarFilters);u.exports.useEffect(()=>{o.length?a(o):a([])},[o]);const s=()=>p.filter(r=>r),i=r=>{l.includes(r)?a(l.filter(f=>f!==r)):a(l.concat(r))};return e.createElement(v,{isOpen:t,onClose:n,onSubmit:()=>{c(K(l)),n()}},e.createElement(S,{w:"full",alignItems:"flex-start",spacing:"16px"},s().map(r=>e.createElement(F,{colorScheme:"autoOrange",defaultChecked:o==null?void 0:o.includes(r),onChange:f=>{f.preventDefault(),i(r)},key:r},r))))},Sn=l=>{var a=l,{w:t="full"}=a,n=M(a,["w"]);const{isOpen:c,onOpen:p,onClose:o}=T(),s=h(),{locations:i}=d(r=>r.selectedCarFilters);return e.createElement(se,O({minW:t,maxW:t},n),e.createElement(A,{onClick:p,label:i.length?` ${i.join(", ")}`:"Locations",hasValue:!!i.length,onClear:()=>s(K([]))}),e.createElement(gn,{isOpen:c,onClose:o}))},xn=({isOpen:t,onClose:n})=>{const[l,a]=u.exports.useState([]),c=h(),{salesStatus:p}=d(i=>i.carsReducer),{salesStatus:o}=d(i=>i.selectedCarFilters);u.exports.useEffect(()=>{o.length&&a(o)},[o]);const s=i=>{l.includes(i)?a(l.filter(r=>r!==i)):a(l.concat(i))};return e.createElement(v,{isOpen:t,onClose:n,onSubmit:()=>{c(ae(l)),n()}},e.createElement(S,{w:"full",alignItems:"flex-start",maxH:"80vh",spacing:"16px"},p.map(i=>e.createElement(F,{colorScheme:"autoOrange",defaultChecked:o==null?void 0:o.includes(i),onChange:r=>{r.preventDefault(),s(i)},key:i},i))))},Cn=({})=>{const{isOpen:t,onOpen:n,onClose:l}=T(),a=h(),{salesStatus:c}=d(p=>p.selectedCarFilters);return e.createElement(e.Fragment,null,e.createElement(A,{onClick:n,label:c.length?`Sales Status: ${c.join(", ")}`:"Sales Status",hasValue:!!c.length,onClear:()=>a(ae([]))}),e.createElement(xn,{isOpen:t,onClose:l}))},bn=({isOpen:t,onClose:n})=>{const{transmission:l}=d(r=>r.selectedCarFilters),[a,c]=u.exports.useState(l),p=h(),o=Object.values(Lt);u.exports.useEffect(()=>{c(l)},[]);const s=r=>{if(!a.includes(r))c([...a,r]);else{const f=a.filter(E=>E!=r);c(f)}},i=()=>{p(U(a)),n()};return e.createElement(v,{isOpen:t,onClose:n,onSubmit:i},e.createElement(S,{w:"full",alignItems:"flex-start"},o.map(r=>e.createElement(F,{colorScheme:"autoOrange",defaultChecked:l==null?void 0:l.includes(r),onChange:f=>{f.preventDefault(),s(r)},boxShadow:"none !important",shadow:"none !important",key:r},r))))},yn=({})=>{const{isOpen:t,onOpen:n,onClose:l}=T(),a=h(),{transmission:c}=d(p=>p.selectedCarFilters);return e.createElement(e.Fragment,null,e.createElement(A,{onClick:n,label:c.length?`Transmission: ${c.join(", ")}`:"Transmission",hasValue:!!c.length,onClear:()=>a(U([]))}),e.createElement(bn,{isOpen:t,onClose:l}))},kn=({isOpen:t,onClose:n})=>{const[l,a]=u.exports.useState([]),c=h(),{types:p}=d(r=>r.carsReducer),{types:o}=d(r=>r.selectedCarFilters);u.exports.useEffect(()=>{o.length&&a(o)},[o]);const s=()=>p.filter(r=>r),i=r=>{l.includes(r)?a(l.filter(f=>f!==r)):a(l.concat(r))};return e.createElement(v,{isOpen:t,onClose:n,onSubmit:()=>{c(Z(l)),n()}},e.createElement(S,{w:"full",alignItems:"flex-start",minH:"80vh",spacing:"16px"},s().map(r=>e.createElement(F,{colorScheme:"autoOrange",defaultChecked:o==null?void 0:o.includes(r),onChange:f=>{f.preventDefault(),i(r)},key:r},N(r)))))},Fn=({})=>{const{isOpen:t,onOpen:n,onClose:l}=T(),a=h(),{types:c}=d(p=>p.selectedCarFilters);return e.createElement(e.Fragment,null,e.createElement(A,{onClick:n,label:c.length?`Types: ${N(c.join("; "))}`:"Type",hasValue:!!c.length,onClear:()=>a(Z([]))}),e.createElement(kn,{isOpen:t,onClose:l}))},wn=({setKeyboardActive:t})=>{const[n,l]=u.exports.useState(""),[a,c]=u.exports.useState(""),{yearFrom:p,yearTo:o}=d(i=>i.selectedCarFilters),s=h();return u.exports.useEffect(()=>{l(p?p.toString():""),c(o?o.toString():"")},[p,o]),e.createElement(y,{borderRadius:"8px",bg:"white",spacing:0,flex:"1",p:"2px"},e.createElement(J,{pr:"2",placeholder:"Year from",type:"number",value:n,onChange:i=>l(i.currentTarget.value),onFocus:()=>t(!0),onBlur:()=>{t(!1),parseInt(n)>=(parseInt(a)||0)&&s(re(parseInt(n))),s(ce(parseInt(n)))}}),e.createElement(X,{height:"30px"}),e.createElement(J,{placeholder:"Year to",type:"number",value:a,onChange:i=>c(i.currentTarget.value),onFocus:()=>t(!0),onBlur:()=>{t(!1),parseInt(a)<=parseInt(n)&&s(ce(parseInt(a))),s(re(parseInt(a)||0))}}))},On=({onSubmit:t})=>{const[n,l]=u.exports.useState("GEL"),{isAdvancedFiltersOpen:a}=d(s=>s.selectedCarFilters),c=h(),[p,o]=u.exports.useState(!1);return e.createElement(Ge,null,e.createElement(At,null),e.createElement(It,null),e.createElement(wn,{setKeyboardActive:o}),e.createElement(y,{justify:"space-between"},e.createElement(y,{borderRadius:"8px",bg:"white",spacing:0,flex:"1",p:"2px"},e.createElement(J,{pr:"2",placeholder:"Price from",type:"number",onFocus:()=>o(!0),onBlur:()=>o(!1)}),e.createElement(X,{height:"30px"}),e.createElement(J,{placeholder:"Price to",type:"number",onFocus:()=>o(!0),onBlur:()=>o(!1)})),e.createElement(Ue,{currency:n,setCurrency:l})),e.createElement(ze,{in:a},e.createElement(S,null,e.createElement(fn,null),e.createElement(cn,null),e.createElement(Fn,null),e.createElement(Sn,null),e.createElement(yn,null),e.createElement(an,null),e.createElement(mn,null),e.createElement(Cn,null),e.createElement(hn,null),e.createElement(pn,null))),e.createElement(S,{pt:"2",spacing:"3"},e.createElement(ln,{isKeyboardActive:p},e.createElement(Ve,{w:"full",isKeyboardActive:p,onClick:t})),e.createElement(je,{variant:"link",onClick:()=>c(Pe()),bg:"transparent"},e.createElement(x,{color:"#000",display:p?"none":"block",lineHeight:"19px",fontWeight:"400"},a?"See less filter":"See more filter"))))},Tn=(t,n)=>{const l=n.slice().sort();return t.length===n.length&&t.slice().sort().every(function(a,c){return a===l[c]}),!1},vn=({modelQueryKeys:t,brands:n,query:l})=>{const a=[];return n.map(c=>a.push({brand:c,models:[]})),t.map(c=>{const p=c.slice(c.indexOf("[")+1,c.indexOf("]")),o=l.getAll(c);a.push({brand:p,models:o})}),a.filter(c=>c.models.length)},An=()=>{const{isLargerThan:t}=Ke(737),n=$e(),l=h(),a=De(),{MODEL:c,YEAR_FROM:p,YEAR_TO:o,CONDITION:s,TYPE:i,LOCATION:r,TRANSMISSION:f,KEYS:E,DRIVE:g,SALES_STATUS:k,FUEL_TYPE:m,CYLINDER:C,ENGINE_FROM:R,ENGINE_TO:H,PRICE_FROM:b,PRICE_TO:Ze}=Ct,{brands:Qe}=d(I=>I.selectedCarFilters),{brands:de}=d(I=>I.carsReducer),qe=d(I=>I.selectedCarFilters);u.exports.useEffect(()=>{const I=n.getAll("brand");Tn(I,Qe)||l(gt(I));const Je=[...new Set(Array.from(n.keys()).filter(Xe=>Xe.includes(`${c}[`)))],Ee=vn({brands:I,modelQueryKeys:Je,query:n});Ee.length&&l(St(Ee));const he=n.get(p);he&&l(ce(parseInt(he)));const ge=n.get(o);ge&&l(re(parseInt(ge)));const Se=n.get(R);Se&&l(P(Se));const xe=n.get(H);xe&&l(W(xe));const Ce=n.get(b);Ce&&l(ne(Ce));const be=n.get(Ze);be&&l(le(be));const ye=n.getAll(s);ye.length&&l(B(ye));const ke=n.getAll(i);ke.length&&l(Z(ke));const Fe=n.getAll(g);Fe.length&&l(G(Fe));const we=n.getAll(r);we.length&&l(K(we));const Oe=n.getAll(f);Oe.length&&l(U(Oe));const ee=n.get(E);(ee===_.NO||ee===_.YES)&&l(V(ee));const Te=n.getAll(k);Te.length&&l(ae(Te));const ve=n.getAll(m);ve.length&&l($(ve));const Ae=n.getAll(C);Ae.length&&l(Y(Ae))},[n]),u.exports.useEffect(()=>{de.length||l(xt())},[de]);const fe=()=>{Mt({dispatch:l,query:n,history:a,filters:qe}),!t&&l(bt())};return e.createElement(e.Fragment,null,t?e.createElement(nn,{onSubmit:fe}):e.createElement(On,{onSubmit:fe}))},In=()=>{const t=h();return u.exports.useEffect(()=>()=>{t(yt())},[]),e.createElement(it,null,e.createElement(pt,{pt:["4","6",null,"8"]},e.createElement(S,{w:"full",spacing:["66px"]},e.createElement(Nt,null,e.createElement(An,null)),e.createElement(zt,null),e.createElement(Gt,null))))},tl=()=>e.createElement(In,null);export{tl as CatalogPage,tl as default};
