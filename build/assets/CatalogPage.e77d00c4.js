var et=Object.defineProperty,tt=Object.defineProperties;var nt=Object.getOwnPropertyDescriptors;var Q=Object.getOwnPropertySymbols;var Ie=Object.prototype.hasOwnProperty,Me=Object.prototype.propertyIsEnumerable;var Re=(t,n,l)=>n in t?et(t,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[n]=l,O=(t,n)=>{for(var l in n||(n={}))Ie.call(n,l)&&Re(t,l,n[l]);if(Q)for(var l of Q(n))Me.call(n,l)&&Re(t,l,n[l]);return t},De=(t,n)=>tt(t,nt(n));var M=(t,n)=>{var l={};for(var a in t)Ie.call(t,a)&&n.indexOf(a)<0&&(l[a]=t[a]);if(t!=null&&Q)for(var a of Q(t))n.indexOf(a)<0&&Me.call(t,a)&&(l[a]=t[a]);return l};import{R as e,r as u,u as He}from"./vendor.64e57edd.js";import{u as d,h,i as lt,a as y,a1 as st,aW as je,V as S,e as j,T as x,a4 as Le,a5 as at,j as rt,a3 as ct,g as ot,F as it,H as pt,P as te,U as _e,aX as Y,aY as F,aZ as G,a_ as B,a$ as W,b0 as $,S as ze,aG as q,b1 as P,b2 as V,b3 as U,d as ut,I as ne,b4 as mt,b5 as dt,b6 as le,b7 as se,b8 as ft,O as Ne,b9 as K,ba as Z,aU as Ye,a0 as Ge,aT as Be,bb as We,b as ae,aS as T,bc as re,bd as X,be as ce,bf as oe,bg as Et,bh as ht,bi as gt,bj as St,bk as xt,bl as Ct,f as bt}from"./index.2f7165ca.js";import{a as ie,c as N}from"./CarCardHeading.6b9bd6e4.js";import{C as $e}from"./Card.4f85270a.js";import{I as yt}from"./image.aab89f17.js";import{D as kt,c as pe,d as w,e as ue}from"./SelectWrapper.d0c90e36.js";import{A as Ft,u as Pe,S as me,B as wt,C as J,M as Ot,Y as Tt,a as Ve,b as v,c as A,d as vt,e as At,s as It}from"./submitCarsSearch.e591eb5c.js";import{A as Mt}from"./ArrowPrevIcon.52df570a.js";import{u as Ue}from"./useMediaQueryMin.32891fbf.js";import{B as L,C as Rt}from"./CatalogListWrap.10eb5274.js";import{u as Dt}from"./use-toast.becbaba7.js";import{H as _}from"./contants.d6573c4d.js";import{S as Ht}from"./simple-grid.ea4586c8.js";import{T as jt}from"./types.401d8b7f.js";import"./prop-types.d6ec705b.js";import"./react-redux.d0311eef.js";import"./axios.7b768d2b.js";import"./formik.178388d5.js";import"./focus-visible.85b77dad.js";import"./swiper.3c4df1c1.js";import"./aspect-ratio.04aa6054.js";import"./react-swipeable.4de4e54d.js";var Lt="/assets/car with bg-1@2x.99b4319f.png";const _t=({})=>{const{isCatalogBannerOpen:t}=d(a=>a.globalAppState),n=h(),{isDesktop:l}=lt();return e.createElement(e.Fragment,null,l&&e.createElement($e,{w:"full",p:"30px",display:t?"block":"none"},e.createElement(y,{spacing:"32px",position:"relative"},e.createElement(yt,{src:Lt,w:["110px"],loading:"lazy"}),e.createElement(ie,{icon:st,boxSize:6,position:"absolute",right:"-2",top:"-2",_active:{bg:"autoGrey.400"},onClick:()=>n(je())}),e.createElement(S,{alignItems:"flex-start"},e.createElement(j,{fontSize:"16px"},"Certified Car"),e.createElement(x,{fontSize:"14px",lineHeight:"24px",opacity:"63%",pr:"35px"},"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, magnam deleniti voluptatum officiis tempore aperiam quasi error hic reiciendis facilis dicta saepe quam vel ex tempora impedit accusamus blanditiis nisi? aperiam quasi error accusamus blanditiis nisi?")))))},zt=l=>{var a=l,{children:t}=a,n=M(a,["children"]);return e.createElement($e,O({bg:["transparent",null,"autoBlue.400"],p:["0",null,"16px"],w:"full",minH:"auto"},n),t)},Nt=({activePage:t,totalPages:n,onChange:l,paginNumbers:a})=>{const{isDesktop:c,isMobile:p,isTablet:o}=d(b=>b.globalAppState.screen),[s,i]=u.exports.useState([]),[r,f]=u.exports.useState([]),[E,g]=u.exports.useState([]),{isLargerThan:k}=Ue(360);let m=3;o&&(m=5),c&&(m=10);const C=s.length===1,R=r.length===1,D=t>r.length-m;return u.exports.useEffect(()=>{t===m?i(a.slice(0,m+1)):t>m?i([1]):i(a.slice(0,m)),t>m&&t<=n-m?g(p?[t-1,t,t+1]:[t-2,t-1,t,t+1,t+2]):g([]),t===n-m+1?(f(a.slice(n-m-1,n)),i([1])):t>n-m?(f(a.slice(n-m,n)),i([1])):f([n]),a.length<m+3&&(i([...a]),g([]),f([]))},[t,n]),e.createElement(y,null,k?e.createElement(y,{w:"full",display:a.length>1?"flex":"none"},s.map(b=>e.createElement(L,{key:b,onClick:()=>l(b),active:t===b},e.createElement(j,{fontSize:"18px",fontWeight:"light"},b))),e.createElement(x,{display:C?"block":"none"},"..."),E.map(b=>e.createElement(L,{key:b,onClick:()=>l(b),active:t===b},e.createElement(j,{fontSize:"18px",fontWeight:"light"},b))),e.createElement(x,{display:R?"block":"none"},"..."),r.map(b=>e.createElement(L,{key:b,onClick:()=>l(b),active:t===b,display:k&&D?"block":"none"},e.createElement(j,{fontSize:"18px",fontWeight:"light"},b)))):e.createElement(e.Fragment,null,e.createElement(x,{display:t>1?"block":"none"},"..."),e.createElement(L,{active:!0},e.createElement(j,{fontSize:"18px",fontWeight:"light"},t)),e.createElement(x,{display:t<a.length?"block":"none"},"...")))},Yt=c=>{var p=c,{activePage:t,totalPages:n=1,onPageChange:l}=p,a=M(p,["activePage","totalPages","onPageChange"]);const o=[...Array(n).keys()].map(s=>s+1);return e.createElement(y,O({spacing:["1","2"]},a),e.createElement(ie,{variant:"ghost",bg:"transparent",icon:Mt,disabled:t===1,onClick:()=>l(t-1),boxSize:"6",_active:{bg:"autoGrey.400"},display:n===1?"none":"block"}),e.createElement(Nt,{activePage:t,totalPages:n,onChange:l,paginNumbers:o}),e.createElement(ie,{variant:"ghost",bg:"transparent",icon:Ft,fill:"#000",boxSize:"6",disabled:t===n,onClick:()=>l(t+1),_active:{bg:"autoGrey.400"},display:n===1?"none":"block"}))},Gt=()=>{const{dealerCars:t,fetchingDealerCars:n}=d(C=>C.carsReducer),{totalPages:l,activePage:a}=d(C=>C.carsPagination),{isAuthenticated:c}=d(C=>C.userInfoSlice),p=Dt(),o=u.exports.useRef(),{networkError:s,catalogQuery:i}=d(C=>C.globalAppState);u.exports.useEffect(()=>{s&&m()},[s]);const r=h(),f=He(),E=Pe(),g=Number(E.get("page"))||1;u.exports.useEffect(()=>(i?f.push({search:i}):(a?E.set("page",a.toString()):E.set("page",g.toString()),f.push({search:E.toString()}),r(Le(E.get("page"))),r(at(E.toString()))),()=>{r(je())}),[]),u.exports.useEffect(()=>{c&&r(rt(""))},[c]),u.exports.useEffect(()=>{i!==E.toString()&&(r(ct(E)),r(Le(E.get("page"))),setTimeout(()=>window.scrollTo(0,0)))},[g,i]);const k=C=>{E.set("page",String(C)),f.push({search:E.toString()})},m=()=>{o.current=p({title:s,status:"error",position:"top",duration:3e3,isClosable:!0})};return n?e.createElement(S,{h:"100vh",w:"full"},e.createElement(ot,null)):e.createElement(S,{spacing:"90px",w:"full"},t.length?e.createElement(Rt,{gap:"16px"},t.map((C,R)=>e.createElement(it,{justify:"center",key:R},e.createElement(kt,{car:C})))):e.createElement(pt,null,"No Results found"),e.createElement(Yt,{totalPages:l,activePage:g,onPageChange:C=>k(C),display:t.length?"flex":"none"}))},Bt=()=>e.createElement("svg",{id:"Group_975","data-name":"Group 975",xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 40 40"},e.createElement("g",{id:"Rectangle_160","data-name":"Rectangle 160",fill:"none",stroke:"#3d405b",strokeWidth:"1.5"},e.createElement("rect",{width:"40",height:"40",rx:"8",stroke:"none"}),e.createElement("rect",{x:"0.75",y:"0.75",width:"38.5",height:"38.5",rx:"7.25",fill:"none"})),e.createElement("g",{id:"Group_937","data-name":"Group 937",transform:"translate(8 8)"},e.createElement("path",{id:"Path_454","data-name":"Path 454",d:"M0,0H24V24H0Z",fill:"none"}),e.createElement("path",{id:"Path_1582","data-name":"Path 1582",d:"M2.651,20.667a.96.96,0,0,0,.457.258,1.061,1.061,0,0,0,.522,0,1.012,1.012,0,0,0,.456-.254l6.266-6.278,6.272,6.277a1.027,1.027,0,0,0,1.435,0,1,1,0,0,0,.289-.723.968.968,0,0,0-.286-.713L11.79,12.954l6.272-6.265a.988.988,0,0,0,.291-.717.946.946,0,0,0-.294-.719,1,1,0,0,0-.723-.29.961.961,0,0,0-.712.287l-6.272,6.275L4.086,5.249a1,1,0,0,0-.456-.255,1.108,1.108,0,0,0-.522,0,.892.892,0,0,0-.457.262,1.028,1.028,0,0,0-.257.461,1.061,1.061,0,0,0,0,.522.951.951,0,0,0,.254.452l6.265,6.267L2.648,19.231a.993.993,0,0,0-.259.452,1.043,1.043,0,0,0,0,.527A.926.926,0,0,0,2.651,20.667Z",transform:"translate(1.647 -0.961)",fill:"#3d405b"}))),Wt=()=>e.createElement("svg",{id:"Group_974","data-name":"Group 974",xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 40 40"},e.createElement("g",{id:"Rectangle_160","data-name":"Rectangle 160",fill:"none",stroke:"#3d405b",strokeWidth:"1.5"},e.createElement("rect",{width:"40",height:"40",rx:"8",stroke:"none"}),e.createElement("rect",{x:"0.75",y:"0.75",width:"38.5",height:"38.5",rx:"7.25",fill:"none"})),e.createElement("g",{id:"Group_131","data-name":"Group 131",transform:"translate(8 8)"},e.createElement("path",{id:"Path_454","data-name":"Path 454",d:"M0,0H24V24H0Z",fill:"none"}),e.createElement("path",{id:"Path_455","data-name":"Path 455",d:"M5.336,14.8a2.4,2.4,0,0,1,4.528,0H18v1.6H9.864a2.4,2.4,0,0,1-4.528,0H2V14.8Zm4.8-5.6a2.4,2.4,0,0,1,4.528,0H18v1.6H14.664a2.4,2.4,0,0,1-4.528,0H2V9.2Zm-4.8-5.6a2.4,2.4,0,0,1,4.528,0H18V5.2H9.864a2.4,2.4,0,0,1-4.528,0H2V3.6ZM7.6,5.2a.8.8,0,1,0-.8-.8A.8.8,0,0,0,7.6,5.2Zm4.8,5.6a.8.8,0,1,0-.8-.8A.8.8,0,0,0,12.4,10.8ZM7.6,16.4a.8.8,0,1,0-.8-.8A.8.8,0,0,0,7.6,16.4Z",transform:"translate(2 2.002)",fill:"#3d405b"}))),H=s=>{var i=s,{selected:t,label:n,children:l,clearSelected:a,onApply:c,size:p}=i,o=M(i,["selected","label","children","clearSelected","onApply","size"]);const[r,f]=u.exports.useState(!1),[E,g]=u.exports.useState("");u.exports.useEffect(()=>{t.length?g(`${t.join(", ")}`):g(n)},[t]);const k=()=>f(!1);return e.createElement(pe,{areOptionsOpen:r},e.createElement(te,{isActive:r,onClick:()=>{k(),c()}}),e.createElement(w,null,e.createElement(me,{size:p,areOptionsOpen:r,clearCb:m=>{m.stopPropagation&&m.stopPropagation(),a(),f(!1)},areOptionsSelected:!!t.length,onClick:()=>f(m=>!m)},e.createElement(y,{pl:"4",pr:"28px",h:"40px",w:"full",bg:"white",_hover:{bg:"autoGrey.200"},borderRadius:"8px"},e.createElement(x,{opacity:r?"1":"0.5",noOfLines:1},E))),e.createElement(ue,O({isOpen:r},o),l)))},z=l=>{var a=l,{children:t}=a,n=M(a,["children"]);return e.createElement(_e,O({p:"4",w:"full",whiteSpace:"normal",borderRadius:"none",textAlign:"start",display:"flex",justifyContent:"flex-start",fontWeight:"400",variant:"ghost",_hover:{bg:"autoGrey.100"}},n),t)},$t=({})=>{const[t,n]=u.exports.useState([]),{conditions:l}=d(s=>s.carsReducer),{conditions:a}=d(s=>s.selectedCarFilters),c=h(),p=l.filter(s=>s);u.exports.useEffect(()=>{a.length&&n(a)},[a]);const o=s=>{t.includes(s)?n(t.filter(i=>i!==s)):n([s].concat(t))};return e.createElement(H,{size:"md",selected:t,label:"condition",clearSelected:()=>{n([]),c(Y([]))},onApply:()=>c(Y(t)),top:"35px"},e.createElement(w,null,p.map(s=>e.createElement(z,{key:s,onClick:i=>{i.preventDefault(),o(s)}},e.createElement(F,{colorScheme:"autoOrange",isChecked:t==null?void 0:t.includes(s)},e.createElement(x,{w:"full"},s))))))},Pt=({})=>{const[t,n]=u.exports.useState([]),{cylinders:l}=d(s=>s.carsReducer),{cylinders:a}=d(s=>s.selectedCarFilters),c=h(),p=l.filter(s=>s).map(s=>s.toString());u.exports.useEffect(()=>{a.length&&n(a)},[a]);const o=s=>{t.includes(s)?n(t.filter(i=>i!==s)):n([s].concat(t))};return e.createElement(H,{size:"md",selected:t,label:"cylinders",clearSelected:()=>{n([]),c(G([]))},onApply:()=>c(G(t)),top:"35px"},e.createElement(w,null,p.map(s=>e.createElement(z,{key:s,onClick:i=>{i.preventDefault(),o(s)}},e.createElement(F,{colorScheme:"autoOrange",isChecked:t==null?void 0:t.includes(s)},e.createElement(x,{w:"full"},s))))))},Vt=({})=>{const[t,n]=u.exports.useState([]),{drives:l}=d(s=>s.carsReducer),{drives:a}=d(s=>s.selectedCarFilters),c=h(),p=l.filter(s=>s);u.exports.useEffect(()=>{a.length&&n(a)},[a]);const o=s=>{t.includes(s)?n(t.filter(i=>i!==s)):n([s].concat(t))};return e.createElement(H,{size:"md",selected:t,label:"drives",clearSelected:()=>{n([]),c(B([]))},onApply:()=>c(B(t)),top:"35px"},e.createElement(w,null,p.map(s=>e.createElement(z,{key:s,onClick:i=>{i.preventDefault(),o(s)}},e.createElement(F,{colorScheme:"autoOrange",isChecked:t==null?void 0:t.includes(s)},e.createElement(x,{w:"full"},s))))))},Ut=n=>{var t=M(n,[]);const[l,a]=u.exports.useState(!1),[c,p]=u.exports.useState(0),[o,s]=u.exports.useState(0),[i,r]=u.exports.useState(""),{engineFrom:f,engineTo:E}=d(m=>m.selectedCarFilters),g=h();u.exports.useEffect(()=>{r(c||o?`${c} - ${o}`:"engine")},[c,o]),u.exports.useEffect(()=>{f&&p(Number(f)),E&&s(Number(E))},[f,E]);const k=(m,C)=>{const R=[];for(let D=m;D<=C;D=parseFloat(((D*100+10)/100).toFixed(1)))R.push(D);return R};return e.createElement(pe,De(O({},t),{areOptionsOpen:l,bg:"white",borderRadius:"8px"}),e.createElement(te,{isActive:l,onClick:()=>{a(!1),g(W(c)),g($(o))}}),e.createElement(w,null,e.createElement(me,{areOptionsOpen:l,clearCb:m=>{m.stopPropagation&&m.stopPropagation(),s(0),p(0),g(W(0)),g($(0)),r(""),a(!1)},areOptionsSelected:!!(c||o),onClick:()=>a(m=>!m)},e.createElement(y,{pl:"4",h:"40px",w:"full",_hover:{bg:"autoGrey.200"},borderRadius:"8px"},e.createElement(x,{opacity:l?"1":"0.5"},i))),e.createElement(ue,{isOpen:l,w:"full"},e.createElement(y,{h:"290px",w:"full",divider:e.createElement(ze,{borderColor:"autoGrey.400"}),pr:"2px"}," ",e.createElement(S,{h:"full",w:"full",spacing:"4"},e.createElement(x,{fontSize:"16px"},"From"),e.createElement(S,{h:"full",w:"full",spacing:"4",overflowY:"scroll",css:{"&::-webkit-scrollbar":{display:"none"}}},k(.5,6).map(m=>e.createElement(q,{fontSize:"16px",key:m,lineHeight:"21px",w:"full",color:c===m?"autoOrange.400":"#000",onClick:()=>{p(m),m>=o&&s(m)}},m.toFixed(1))))),e.createElement(S,{h:"full",w:"full",spacing:"4"},e.createElement(x,{fontSize:"16px"},"To"),e.createElement(S,{h:"full",w:"full",spacing:"4",overflowY:"scroll",css:{"&::-webkit-scrollbar":{display:"none"}}},k(.5,6).map(m=>e.createElement(q,{fontSize:"16px",key:m,lineHeight:"21px",w:"full",color:o===m?"autoOrange.400":"#000",onClick:()=>{s(m),m<=c&&p(m)}},m.toFixed(1)))))))))},Kt=({})=>{const[t,n]=u.exports.useState([]),{fuels:l}=d(s=>s.carsReducer),{fuels:a}=d(s=>s.selectedCarFilters),c=h(),p=l.filter(s=>s);u.exports.useEffect(()=>{a.length&&n(a)},[a]);const o=s=>{t.includes(s)?n(t.filter(i=>i!==s)):n([s].concat(t))};return e.createElement(H,{size:"md",selected:t,label:"fuel type",clearSelected:()=>{n([]),c(P([]))},onApply:()=>c(P(t)),top:"35px"},e.createElement(w,null,p.map(s=>e.createElement(z,{key:s,onClick:i=>{i.preventDefault(),o(s)}},e.createElement(F,{colorScheme:"autoOrange",isChecked:t==null?void 0:t.includes(s)},e.createElement(x,{w:"full"},s))))))},Zt=({})=>{const[t,n]=u.exports.useState(null),{keys:l}=d(c=>c.selectedCarFilters);u.exports.useEffect(()=>{l&&n(l)},[l]);const a=h();return e.createElement(H,{size:"md",selected:t?[t]:[],label:t||"keys",clearSelected:()=>{n(null),a(V(null))},onApply:()=>t&&a(V(t)),top:"35px"},e.createElement(w,{align:"flex-start",spacing:"0"},e.createElement(y,{p:"2",pl:"4",onClick:()=>n(_.YES),_hover:{bg:"autoGrey.100"},w:"full",cursor:"pointer"},e.createElement("input",{type:"radio",name:"has_keys",value:"YES",checked:t==="YES",readOnly:!0}),e.createElement(x,null,"Yes")),e.createElement(y,{p:"2",pl:"4",onClick:()=>n(_.NO),_hover:{bg:"autoGrey.100"},w:"full",cursor:"pointer"},e.createElement("input",{type:"radio",name:"has_keys",value:"NO",checked:t==="NO",readOnly:!0}),e.createElement(x,null,"No"))," "))},Qt=({})=>{const[t,n]=u.exports.useState([]),{locations:l}=d(s=>s.carsReducer),{locations:a}=d(s=>s.selectedCarFilters),c=h(),p=l.filter(s=>s);u.exports.useEffect(()=>{a.length&&n(a)},[a]);const o=s=>{t.includes(s)?n(t.filter(i=>i!==s)):n([s].concat(t))};return e.createElement(H,{size:"md",selected:t,label:"location",clearSelected:()=>{n([]),c(U([]))},onApply:()=>c(U(t)),top:"35px"},e.createElement(w,null,p.map(s=>e.createElement(z,{key:s,onClick:i=>{i.preventDefault(),o(s)}},e.createElement(F,{colorScheme:"autoOrange",isChecked:t==null?void 0:t.includes(s)},e.createElement(x,{w:"full"},s))))))},qt=ut({displayName:"EuroIcon",viewBox:"0 0 12 23",path:e.createElement(e.Fragment,null,e.createElement("text",{id:"_","data-name":"\u20AC",transform:"translate(0 19)",fontSize:"20",fontFamily:"HelveticaNeue, Helvetica Neue"},e.createElement("tspan",{x:"0",y:"0"},"\u20AC")))}),Ke=({currency:t,setCurrency:n})=>e.createElement(y,{borderRadius:"8px",bg:"white",spacing:"2px",flexBasis:"30%",justify:"space-between",p:"7px"},e.createElement(L,{onClick:()=>n("GEL"),active:t==="GEL"},e.createElement(ne,{as:mt,fill:t==="GEL"?"#fff":"#000",boxSize:7,fontWeight:"400"})),e.createElement(L,{onClick:()=>n("USD"),active:t==="USD"},e.createElement(ne,{as:dt,boxSize:6,fontWeight:"400",fill:t==="USD"?"#fff":"#000"})),e.createElement(L,{onClick:()=>n("EUR"),active:t==="EUR",fontSize:"20px",fontWeight:"400"},e.createElement(ne,{as:qt,boxSize:6,fontWeight:"400",fill:t==="EUR"?"#fff":"#000"}))),Xt=({})=>{const[t,n]=u.exports.useState(!1),[l,a]=u.exports.useState("GEL"),[c,p]=u.exports.useState(""),[o,s]=u.exports.useState(""),[i,r]=u.exports.useState(""),{priceFrom:f,priceTo:E}=d(m=>m.selectedCarFilters),g=h(),k=()=>{switch(l){case"GEL":return"\u20BE";case"EUR":return"\u20AC";case"USD":return"$"}};return u.exports.useEffect(()=>{f&&s(f),E&&r(E)},[f,E]),u.exports.useEffect(()=>{p(i&&o?` ${k()} ${o} - ${i} `:o?`from: ${l} ${o}`:i?`to: ${l} ${i}`:"price")},[o,i,l]),e.createElement(pe,{areOptionsOpen:t},e.createElement(te,{isActive:t,onClick:()=>{n(!1),g(le(o)),g(se(i)),g(ft(l))}}),e.createElement(w,null,e.createElement(me,{size:"md",areOptionsOpen:t,clearCb:m=>{m.stopPropagation&&m.stopPropagation(),g(le("")),g(se("")),s(""),r(""),p("Price"),n(!1)},areOptionsSelected:!!o&&!!i,onClick:()=>n(m=>!m)},e.createElement(y,{pl:"4",h:"40px",w:"full",bg:"white",_hover:{bg:"autoGrey.200"},borderRadius:"8px"},e.createElement(x,{opacity:t?"1":"0.5"},c))),e.createElement(ue,{isOpen:t,w:"full",top:"35px"},e.createElement(S,{p:"0px 16px 16px",align:"flex-start"},e.createElement(Ke,{currency:l,setCurrency:a}),e.createElement(S,null,e.createElement(Ne,{placeholder:"From",h:"37px",type:"number",value:o,onChange:m=>s(m.currentTarget.value)}),e.createElement(Ne,{placeholder:"To",h:"37px",type:"number",value:i,onChange:m=>r(m.currentTarget.value)}))))))},Jt=({})=>{const[t,n]=u.exports.useState([]),l=h(),{transmissions:a}=d(s=>s.carsReducer),{transmission:c}=d(s=>s.selectedCarFilters),p=a.filter(s=>s);u.exports.useEffect(()=>{c.length&&n(c)},[c]);const o=s=>{t.includes(s)?n(t.filter(i=>i!==s)):n([s].concat(t))};return e.createElement(H,{size:"md",selected:t,label:"transmission",clearSelected:()=>{n([]),l(K([]))},onApply:()=>l(K(t))},e.createElement(w,null,p.map(s=>e.createElement(z,{key:s,onClick:i=>{i.preventDefault(),o(s)}},e.createElement(F,{colorScheme:"autoOrange",isChecked:t==null?void 0:t.includes(s)},e.createElement(x,null,s))))))},en=({})=>{const[t,n]=u.exports.useState([]),{types:l}=d(s=>s.carsReducer),{types:a}=d(s=>s.selectedCarFilters),c=h(),p=l.filter(s=>s);u.exports.useEffect(()=>{a.length&&n(a)},[a]);const o=s=>{t.includes(s)?n(t.filter(i=>i!==s)):n([s].concat(t))};return e.createElement(H,{size:"md",selected:t,label:"types",clearSelected:()=>{n([]),c(Z([]))},onApply:()=>c(Z(t)),top:"35px"},e.createElement(w,null,p.map(s=>e.createElement(z,{key:s,onClick:i=>{i.preventDefault(),o(s)}},e.createElement(F,{colorScheme:"autoOrange",isChecked:t==null?void 0:t.includes(s)},e.createElement(x,{w:"full"},s))))))},tn=o=>{var s=o,{p:t="2",bg:n="#fff",direction:l="row",borderRadius:a="md",onSubmit:c}=s,p=M(s,["p","bg","direction","borderRadius","onSubmit"]);const i=h(),{isAdvancedFiltersOpen:r}=d(E=>E.selectedCarFilters),f=()=>i(We());return e.createElement(e.Fragment,null,e.createElement(Ye,O({p:t,bg:n,direction:l,borderRadius:a,alignItems:"center"},p),e.createElement(wt,{labelPadding:"2",w:["100%","100%","100%"]}),e.createElement(J,{height:["40px",null,null,"30px"],borderColor:"gray.300"}),e.createElement(Ot,null),e.createElement(J,{height:["40px",null,null,"30px"],borderColor:"gray.300"}),e.createElement(Tt,null),e.createElement(y,{spacing:{md:"0",xl:"2"}},e.createElement(Ve,{w:{md:"140px",lg:"144px","2xl":"211px"},ml:[null,null,"0px","16px"],mr:"2",onClick:c}),r?e.createElement(Ge,{icon:e.createElement(Bt,null),onClick:f,"aria-label":"close advanced filters",bg:"white",_hover:{bg:"white"},_active:{bg:"white"}}):e.createElement(Ge,{onClick:f,icon:e.createElement(Wt,null),"aria-label":"open advanced filters",bg:"white",_hover:{bg:"white"},_active:{bg:"white"}}))),e.createElement(Be,{in:r},e.createElement(Ht,{templateColumns:[null,"1fr 1fr","repeat(3, 1fr)","repeat(5, 1fr)"],spacingX:"4",spacingY:"2",mt:["2","4",null,"4",null,"24px"]},e.createElement(Xt,null),e.createElement(Ut,null),e.createElement($t,null),e.createElement(en,null),e.createElement(Jt,null),e.createElement(Zt,null),e.createElement(Vt,null),e.createElement(Qt,null),e.createElement(Kt,null),e.createElement(Pt,null))))},nn=s=>{var i=s,{isKeyboardActive:t,children:n,w:l="full",bottom:a="10px",pr:c="4",pl:p="4"}=i,o=M(i,["isKeyboardActive","children","w","bottom","pr","pl"]);return e.createElement(e.Fragment,null,t?e.createElement(ae,O({w:l,position:"fixed",bottom:a,pr:c,pl:p,zIndex:"modal"},o),n):e.createElement(ae,O({w:l},o),n))},ln=({isOpen:t,onClose:n})=>{const{keys:l}=d(s=>s.selectedCarFilters),[a,c]=u.exports.useState(l),p=h();u.exports.useEffect(()=>{c(l)},[]);const o=()=>{a&&p(V(a)),n()};return e.createElement(v,{isOpen:t,onClose:n,onSubmit:o},e.createElement(S,{w:"full",alignItems:"flex-start"},e.createElement(y,null,e.createElement("input",{type:"radio",name:"has_keys",value:"YES",checked:a==="YES",onChange:()=>c(_.YES)}),e.createElement(x,null,"Yes")),e.createElement(y,null,e.createElement("input",{type:"radio",name:"has_keys",value:"NO",checked:a==="NO",onChange:()=>c(_.NO)}),e.createElement(x,null,"No"))))},sn=({})=>{const{isOpen:t,onOpen:n,onClose:l}=T(),a=h(),{keys:c}=d(p=>p.selectedCarFilters);return e.createElement(e.Fragment,null,e.createElement(A,{onClick:n,label:c?`Keys: ${c}`:"Keys",hasValue:!!c,onClear:()=>a(V(_.NO))}),e.createElement(ln,{isOpen:t,onClose:l}))},an=({isOpen:t,onClose:n})=>{const[l,a]=u.exports.useState([]),c=h(),{conditions:p}=d(r=>r.carsReducer),{conditions:o}=d(r=>r.selectedCarFilters);u.exports.useEffect(()=>{o.length&&a(o)},[o]);const s=()=>p.filter(r=>r),i=r=>{l.includes(r)?a(l.filter(f=>f!==r)):a(l.concat(r))};return e.createElement(v,{isOpen:t,onClose:n,onSubmit:()=>{c(Y(l)),n()}},e.createElement(S,{w:"full",alignItems:"flex-start",minH:"80vh",spacing:"16px"},s().map(r=>e.createElement(F,{colorScheme:"autoOrange",defaultChecked:o==null?void 0:o.includes(r),onChange:f=>{f.preventDefault(),i(r)},key:r},N(r)))))},rn=({})=>{const{isOpen:t,onOpen:n,onClose:l}=T(),a=h(),{conditions:c}=d(p=>p.selectedCarFilters);return e.createElement(e.Fragment,null,e.createElement(A,{onClick:n,label:c.length?`Condition: ${N(c.join("; "))}`:"Condition",hasValue:!!c.length,onClear:()=>a(Y([]))}),e.createElement(an,{isOpen:t,onClose:l}))},cn=({isOpen:t,onClose:n})=>{const[l,a]=u.exports.useState([]),c=h(),{cylinders:p}=d(r=>r.carsReducer),{cylinders:o}=d(r=>r.selectedCarFilters);u.exports.useEffect(()=>{o.length&&a(o)},[o]);const s=()=>p.filter(r=>r),i=r=>{l.includes(r)?a(l.filter(f=>f!==r)):a(l.concat(r))};return e.createElement(v,{isOpen:t,onClose:n,onSubmit:()=>{c(G(l)),n()}},e.createElement(S,{w:"full",alignItems:"flex-start",maxH:"80vh",spacing:"16px"},s().map(r=>e.createElement(F,{colorScheme:"autoOrange",defaultChecked:o==null?void 0:o.includes(r),onChange:f=>{f.preventDefault(),i(r)},key:r},r))))},on=({})=>{const{isOpen:t,onOpen:n,onClose:l}=T(),a=h(),{cylinders:c}=d(p=>p.selectedCarFilters);return e.createElement(e.Fragment,null,e.createElement(A,{onClick:n,label:c.length?`Cylinders: ${c.join(", ")}`:"Cylinders",hasValue:!!c.length,onClear:()=>a(G([]))}),e.createElement(cn,{isOpen:t,onClose:l}))},pn=({isOpen:t,onClose:n})=>{const[l,a]=u.exports.useState([]),c=h(),{drives:p}=d(r=>r.carsReducer),{drives:o}=d(r=>r.selectedCarFilters);u.exports.useEffect(()=>{o.length&&a(o)},[o]);const s=()=>p.filter(r=>r),i=r=>{l.includes(r)?a(l.filter(f=>f!==r)):a(l.concat(r))};return e.createElement(v,{isOpen:t,onClose:n,onSubmit:()=>{c(B(l)),n()}},e.createElement(S,{w:"full",alignItems:"flex-start",spacing:"16px",maxH:"80vh"},s().map(r=>e.createElement(F,{colorScheme:"autoOrange",defaultChecked:o==null?void 0:o.includes(r),onChange:f=>{f.preventDefault(),i(r)},key:r},r))))},un=({})=>{const{isOpen:t,onOpen:n,onClose:l}=T(),a=h(),{drives:c}=d(p=>p.selectedCarFilters);return e.createElement(e.Fragment,null,e.createElement(A,{onClick:n,label:c.join(", ")||"Drives",hasValue:!!c.length,onClear:()=>a(B([]))}),e.createElement(pn,{isOpen:t,onClose:l}))},mn=({isOpen:t,onClose:n})=>{const{engineFrom:l,engineTo:a}=d(E=>E.selectedCarFilters),[c,p]=u.exports.useState(l||.5),[o,s]=u.exports.useState(a||.5),i=h(),r=(E,g)=>{const k=[];for(let m=E;m<=g;m=parseFloat(((m*100+10)/100).toFixed(1)))k.push(m);return k},f=()=>{i(W(c)),i($(o)),n()};return e.createElement(v,{isOpen:t,onClose:n,onSubmit:f},e.createElement(y,{h:"full",divider:e.createElement(ze,{borderColor:"autoGrey.400"})},e.createElement(S,{h:"full",w:"full",spacing:"4"},e.createElement(j,{fontSize:"16px",fontWeight:"600"},"From"),e.createElement(S,{h:"full",w:"full",spacing:"4",overflowY:"scroll"},r(.5,6).map(E=>e.createElement(q,{fontSize:"16px",key:E,lineHeight:"21px",w:"full",color:c===E?"autoOrange.400":"#000",onClick:()=>{p(E),E>=o&&s(E)}},E.toFixed(1))))),e.createElement(S,{h:"full",w:"full",spacing:"4"},e.createElement(j,{fontSize:"16px",fontWeight:"600"},"To"),e.createElement(S,{h:"full",w:"full",spacing:"4",overflowY:"scroll"},r(.5,6).map(E=>e.createElement(q,{fontSize:"16px",key:E,lineHeight:"21px",w:"full",color:o===E?"autoOrange.400":"#000",onClick:()=>{s(E),E<=c&&p(E)}},E.toFixed(1)))))))},dn=({})=>{const{isOpen:t,onClose:n,onOpen:l}=T(),a=h(),{engineFrom:c,engineTo:p}=d(o=>o.selectedCarFilters);return e.createElement(e.Fragment,null,e.createElement(A,{label:c&&p?`Engine (from - to): ${Number(c).toFixed(1)}L -  ${Number(p).toFixed(1)}L `:"Engine",onClick:l,hasValue:!!(c&&p),onClear:()=>{a(W(null)),a($(null))}}),e.createElement(mn,{onClose:n,isOpen:t}))},fn=({isOpen:t,onClose:n})=>{const[l,a]=u.exports.useState([]),c=h(),{fuels:p}=d(r=>r.carsReducer),{fuels:o}=d(r=>r.selectedCarFilters);u.exports.useEffect(()=>{o.length&&a(o)},[o]);const s=()=>p.filter(r=>r),i=r=>{l.includes(r)?a(l.filter(f=>f!==r)):a(l.concat(r))};return e.createElement(v,{isOpen:t,onClose:n,onSubmit:()=>{c(P(l)),n()}},e.createElement(S,{w:"full",alignItems:"flex-start",spacing:"16px",minH:"30vh"},s().map(r=>e.createElement(F,{colorScheme:"autoOrange",defaultChecked:o==null?void 0:o.includes(r),onChange:f=>{f.preventDefault(),i(r)},key:r},N(r)))))},En=({})=>{const{isOpen:t,onOpen:n,onClose:l}=T(),a=h(),{fuels:c}=d(p=>p.selectedCarFilters);return e.createElement(e.Fragment,null,e.createElement(A,{onClick:n,label:c.length?`Fuel: ${N(c.join(", "))}`:"Fuel Types",hasValue:!!c.length,onClear:()=>a(P([]))}),e.createElement(fn,{isOpen:t,onClose:l}))},hn=({isOpen:t,onClose:n})=>{const[l,a]=u.exports.useState([]),c=h(),{locations:p}=d(r=>r.carsReducer),{locations:o}=d(r=>r.selectedCarFilters);u.exports.useEffect(()=>{o.length?a(o):a([])},[o]);const s=()=>p.filter(r=>r),i=r=>{l.includes(r)?a(l.filter(f=>f!==r)):a(l.concat(r))};return e.createElement(v,{isOpen:t,onClose:n,onSubmit:()=>{c(U(l)),n()}},e.createElement(S,{w:"full",alignItems:"flex-start",spacing:"16px"},s().map(r=>e.createElement(F,{colorScheme:"autoOrange",defaultChecked:o==null?void 0:o.includes(r),onChange:f=>{f.preventDefault(),i(r)},key:r},r))))},gn=l=>{var a=l,{w:t="full"}=a,n=M(a,["w"]);const{isOpen:c,onOpen:p,onClose:o}=T(),s=h(),{locations:i}=d(r=>r.selectedCarFilters);return e.createElement(ae,O({minW:t,maxW:t},n),e.createElement(A,{onClick:p,label:i.length?` ${i.join(", ")}`:"Locations",hasValue:!!i.length,onClear:()=>s(U([]))}),e.createElement(hn,{isOpen:c,onClose:o}))},Sn=({isOpen:t,onClose:n})=>{const[l,a]=u.exports.useState([]),c=h(),{salesStatus:p}=d(i=>i.carsReducer),{salesStatus:o}=d(i=>i.selectedCarFilters);u.exports.useEffect(()=>{o.length&&a(o)},[o]);const s=i=>{l.includes(i)?a(l.filter(r=>r!==i)):a(l.concat(i))};return e.createElement(v,{isOpen:t,onClose:n,onSubmit:()=>{c(re(l)),n()}},e.createElement(S,{w:"full",alignItems:"flex-start",maxH:"80vh",spacing:"16px"},p.map(i=>e.createElement(F,{colorScheme:"autoOrange",defaultChecked:o==null?void 0:o.includes(i),onChange:r=>{r.preventDefault(),s(i)},key:i},i))))},xn=({})=>{const{isOpen:t,onOpen:n,onClose:l}=T(),a=h(),{salesStatus:c}=d(p=>p.selectedCarFilters);return e.createElement(e.Fragment,null,e.createElement(A,{onClick:n,label:c.length?`Sales Status: ${c.join(", ")}`:"Sales Status",hasValue:!!c.length,onClear:()=>a(re([]))}),e.createElement(Sn,{isOpen:t,onClose:l}))},Cn=({isOpen:t,onClose:n})=>{const{transmission:l}=d(r=>r.selectedCarFilters),[a,c]=u.exports.useState(l),p=h(),o=Object.values(jt);u.exports.useEffect(()=>{c(l)},[]);const s=r=>{if(!a.includes(r))c([...a,r]);else{const f=a.filter(E=>E!=r);c(f)}},i=()=>{p(K(a)),n()};return e.createElement(v,{isOpen:t,onClose:n,onSubmit:i},e.createElement(S,{w:"full",alignItems:"flex-start"},o.map(r=>e.createElement(F,{colorScheme:"autoOrange",defaultChecked:l==null?void 0:l.includes(r),onChange:f=>{f.preventDefault(),s(r)},boxShadow:"none !important",shadow:"none !important",key:r},r))))},bn=({})=>{const{isOpen:t,onOpen:n,onClose:l}=T(),a=h(),{transmission:c}=d(p=>p.selectedCarFilters);return e.createElement(e.Fragment,null,e.createElement(A,{onClick:n,label:c.length?`Transmission: ${c.join(", ")}`:"Transmission",hasValue:!!c.length,onClear:()=>a(K([]))}),e.createElement(Cn,{isOpen:t,onClose:l}))},yn=({isOpen:t,onClose:n})=>{const[l,a]=u.exports.useState([]),c=h(),{types:p}=d(r=>r.carsReducer),{types:o}=d(r=>r.selectedCarFilters);u.exports.useEffect(()=>{o.length&&a(o)},[o]);const s=()=>p.filter(r=>r),i=r=>{l.includes(r)?a(l.filter(f=>f!==r)):a(l.concat(r))};return e.createElement(v,{isOpen:t,onClose:n,onSubmit:()=>{c(Z(l)),n()}},e.createElement(S,{w:"full",alignItems:"flex-start",minH:"80vh",spacing:"16px"},s().map(r=>e.createElement(F,{colorScheme:"autoOrange",defaultChecked:o==null?void 0:o.includes(r),onChange:f=>{f.preventDefault(),i(r)},key:r},N(r)))))},kn=({})=>{const{isOpen:t,onOpen:n,onClose:l}=T(),a=h(),{types:c}=d(p=>p.selectedCarFilters);return e.createElement(e.Fragment,null,e.createElement(A,{onClick:n,label:c.length?`Types: ${N(c.join("; "))}`:"Type",hasValue:!!c.length,onClear:()=>a(Z([]))}),e.createElement(yn,{isOpen:t,onClose:l}))},Fn=({setKeyboardActive:t})=>{const[n,l]=u.exports.useState(""),[a,c]=u.exports.useState(""),{yearFrom:p,yearTo:o}=d(i=>i.selectedCarFilters),s=h();return u.exports.useEffect(()=>{l(p?p.toString():""),c(o?o.toString():"")},[p,o]),e.createElement(y,{borderRadius:"8px",bg:"white",spacing:0,flex:"1",p:"2px"},e.createElement(X,{pr:"2",placeholder:"Year from",type:"number",value:n,onChange:i=>l(i.currentTarget.value),onFocus:()=>t(!0),onBlur:()=>{t(!1),parseInt(n)>=(parseInt(a)||0)&&s(ce(parseInt(n))),s(oe(parseInt(n)))}}),e.createElement(J,{height:"30px"}),e.createElement(X,{placeholder:"Year to",type:"number",value:a,onChange:i=>c(i.currentTarget.value),onFocus:()=>t(!0),onBlur:()=>{t(!1),parseInt(a)<=parseInt(n)&&s(oe(parseInt(a))),s(ce(parseInt(a)||0))}}))},wn=({onSubmit:t})=>{const[n,l]=u.exports.useState("GEL"),{isAdvancedFiltersOpen:a}=d(s=>s.selectedCarFilters),c=h(),[p,o]=u.exports.useState(!1);return e.createElement(Ye,null,e.createElement(vt,null),e.createElement(At,null),e.createElement(Fn,{setKeyboardActive:o}),e.createElement(y,{justify:"space-between"},e.createElement(y,{borderRadius:"8px",bg:"white",spacing:0,flex:"1",p:"2px"},e.createElement(X,{pr:"2",placeholder:"Price from",type:"number",onFocus:()=>o(!0),onBlur:()=>o(!1)}),e.createElement(J,{height:"30px"}),e.createElement(X,{placeholder:"Price to",type:"number",onFocus:()=>o(!0),onBlur:()=>o(!1)})),e.createElement(Ke,{currency:n,setCurrency:l})),e.createElement(Be,{in:a},e.createElement(S,null,e.createElement(dn,null),e.createElement(rn,null),e.createElement(kn,null),e.createElement(gn,null),e.createElement(bn,null),e.createElement(sn,null),e.createElement(un,null),e.createElement(xn,null),e.createElement(En,null),e.createElement(on,null))),e.createElement(S,{pt:"2",spacing:"3"},e.createElement(nn,{isKeyboardActive:p},e.createElement(Ve,{w:"full",isKeyboardActive:p,onClick:t})),e.createElement(_e,{variant:"link",onClick:()=>c(We()),bg:"transparent"},e.createElement(x,{color:"#000",display:p?"none":"block",lineHeight:"19px",fontWeight:"400"},a?"See less filter":"See more filter"))))},On=(t,n)=>{const l=n.slice().sort();return t.length===n.length&&t.slice().sort().every(function(a,c){return a===l[c]}),!1},Tn=({modelQueryKeys:t,brands:n,query:l})=>{const a=[];return n.map(c=>a.push({brand:c,models:[]})),t.map(c=>{const p=c.slice(c.indexOf("[")+1,c.indexOf("]")),o=l.getAll(c);a.push({brand:p,models:o})}),a.filter(c=>c.models.length)},vn=()=>{const{isLargerThan:t}=Ue(737),n=Pe(),l=h(),a=He(),{MODEL:c,YEAR_FROM:p,YEAR_TO:o,CONDITION:s,TYPE:i,LOCATION:r,TRANSMISSION:f,KEYS:E,DRIVE:g,SALES_STATUS:k,FUEL_TYPE:m,CYLINDER:C,ENGINE_FROM:R,ENGINE_TO:D,PRICE_FROM:b,PRICE_TO:Ze}=St,{brands:Qe}=d(I=>I.selectedCarFilters),{brands:de}=d(I=>I.carsReducer),qe=d(I=>I.selectedCarFilters);u.exports.useEffect(()=>{const I=n.getAll("brand");On(I,Qe)||l(Et(I));const Xe=[...new Set(Array.from(n.keys()).filter(Je=>Je.includes(`${c}[`)))],Ee=Tn({brands:I,modelQueryKeys:Xe,query:n});Ee.length&&l(ht(Ee));const he=n.get(p);he&&l(oe(parseInt(he)));const ge=n.get(o);ge&&l(ce(parseInt(ge)));const Se=n.get(R);Se&&l(W(Se));const xe=n.get(D);xe&&l($(xe));const Ce=n.get(b);Ce&&l(le(Ce));const be=n.get(Ze);be&&l(se(be));const ye=n.getAll(s);ye.length&&l(Y(ye));const ke=n.getAll(i);ke.length&&l(Z(ke));const Fe=n.getAll(g);Fe.length&&l(B(Fe));const we=n.getAll(r);we.length&&l(U(we));const Oe=n.getAll(f);Oe.length&&l(K(Oe));const ee=n.get(E);(ee===_.NO||ee===_.YES)&&l(V(ee));const Te=n.getAll(k);Te.length&&l(re(Te));const ve=n.getAll(m);ve.length&&l(P(ve));const Ae=n.getAll(C);Ae.length&&l(G(Ae))},[n]),u.exports.useEffect(()=>{de.length||l(gt())},[de]);const fe=()=>{It({dispatch:l,query:n,history:a,filters:qe}),!t&&l(xt())};return e.createElement(e.Fragment,null,t?e.createElement(tn,{onSubmit:fe}):e.createElement(wn,{onSubmit:fe}))},An=()=>{const t=h();return u.exports.useEffect(()=>()=>{t(Ct())},[]),e.createElement(bt,{pt:["4","6",null,"8"]},e.createElement(S,{w:"full",spacing:["66px"]},e.createElement(zt,null,e.createElement(vn,null)),e.createElement(_t,null),e.createElement(Gt,null)))},Jn=()=>e.createElement(An,null);export{Jn as CatalogPage,Jn as default};
