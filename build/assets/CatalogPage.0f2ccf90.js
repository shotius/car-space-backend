var Je=Object.defineProperty,Xe=Object.defineProperties;var et=Object.getOwnPropertyDescriptors;var Q=Object.getOwnPropertySymbols;var Ie=Object.prototype.hasOwnProperty,Me=Object.prototype.propertyIsEnumerable;var Re=(t,n,s)=>n in t?Je(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,O=(t,n)=>{for(var s in n||(n={}))Ie.call(n,s)&&Re(t,s,n[s]);if(Q)for(var s of Q(n))Me.call(n,s)&&Re(t,s,n[s]);return t},He=(t,n)=>Xe(t,et(n));var I=(t,n)=>{var s={};for(var r in t)Ie.call(t,r)&&n.indexOf(r)<0&&(s[r]=t[r]);if(t!=null&&Q)for(var r of Q(t))n.indexOf(r)<0&&Me.call(t,r)&&(s[r]=t[r]);return s};import{R as e,r as u,u as tt}from"./vendor.576a7237.js";import{a as f,u as h,O as nt,f as k,ao as lt,a$ as De,V as S,J as j,T as C,c as st,ar as je,as as rt,P as at,N as ct,L as ot,H as it,l as te,B as Le,b0 as Y,b1 as F,b2 as B,b3 as G,b4 as W,b5 as $,S as _e,g as q,b6 as P,b7 as V,b8 as L,b9 as K,G as pt,K as ne,ba as ut,bb as mt,bc as le,bd as se,be as ze,af as Ne,bf as U,bg as Z,aY as Ye,I as Be,a_ as Ge,bh as We,k as re,v as T,bi as ae,bj as J,bk as ce,bl as oe,bm as dt,bn as ft,bo as Et,bp as ht,bq as gt,j as St}from"./index.96394f1d.js";import{a as ie}from"./CarCardHeading.4e82a98f.js";import{C as $e}from"./Card.7789212d.js";import{I as xt}from"./image.ef5e93a8.js";import{D as Ct}from"./SectionHeader.40f5d685.js";import{A as bt,u as Pe,a as pe,B as yt,M as kt,Y as Ft,S as Ve,b as v,c as A,d as wt,e as Ot}from"./MobileModelSelect.76a6257c.js";import{A as Tt}from"./ArrowPrevIcon.f1c1b037.js";import{u as Ke}from"./useMediaQueryMin.29057633.js";import{B as _,C as vt}from"./CatalogListWrap.c05f2bf2.js";import{S as ue,C as X}from"./SelectTrigger.a4f448e3.js";import{S as me,a as w,b as de}from"./SelectWrapper.0aa84a0f.js";import{S as At}from"./simple-grid.89cf21e7.js";import{c as N}from"./TextSecondary.4fbe14fb.js";import{T as It}from"./types.401d8b7f.js";import"./prop-types.d6ec705b.js";import"./react-redux.0b249e8a.js";import"./axios.7b768d2b.js";import"./formik.30c45d87.js";import"./yup.df40d5b6.js";import"./focus-visible.c4e3ef79.js";import"./swiper.3c4df1c1.js";import"./aspect-ratio.db608f12.js";import"./react-swipeable.2142026c.js";var Mt="/assets/car with bg-1@2x.99b4319f.png";const Rt=({})=>{const{isCatalogBannerOpen:t}=f(r=>r.globalAppState),n=h(),{isDesktop:s}=nt();return e.createElement(e.Fragment,null,s&&e.createElement($e,{w:"full",p:"30px",display:t?"block":"none"},e.createElement(k,{spacing:"32px",position:"relative"},e.createElement(xt,{src:Mt,w:["110px"],loading:"lazy"}),e.createElement(ie,{icon:lt,boxSize:6,position:"absolute",right:"-2",top:"-2",_active:{bg:"autoGrey.400"},onClick:()=>n(De())}),e.createElement(S,{alignItems:"flex-start"},e.createElement(j,{fontSize:"16px"},"Certified Car"),e.createElement(C,{fontSize:"14px",lineHeight:"24px",opacity:"63%",pr:"35px"},"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, magnam deleniti voluptatum officiis tempore aperiam quasi error hic reiciendis facilis dicta saepe quam vel ex tempora impedit accusamus blanditiis nisi? aperiam quasi error accusamus blanditiis nisi?")))))},Ht=s=>{var r=s,{children:t}=r,n=I(r,["children"]);return e.createElement($e,O({bg:["transparent",null,"autoBlue.400"],p:["0",null,"16px"],w:"full",minH:"auto"},n),t)},Dt=({activePage:t,totalPages:n,onChange:s,paginNumbers:r})=>{const{isDesktop:a,isMobile:p,isTablet:o}=f(b=>b.globalAppState.screen),[l,i]=u.exports.useState([]),[c,d]=u.exports.useState([]),[E,g]=u.exports.useState([]),{isLargerThan:y}=Ke(360);let m=3;o&&(m=5),a&&(m=10);const H=l.length===1,M=c.length===1,x=t>c.length-m;return u.exports.useEffect(()=>{t===m?i(r.slice(0,m+1)):t>m?i([1]):i(r.slice(0,m)),t>m&&t<=n-m?g(p?[t-1,t,t+1]:[t-2,t-1,t,t+1,t+2]):g([]),t===n-m+1?(d(r.slice(n-m-1,n)),i([1])):t>n-m?(d(r.slice(n-m,n)),i([1])):d([n]),r.length<m+3&&(i([...r]),g([]),d([]))},[t,n]),e.createElement(k,null,y?e.createElement(k,{w:"full",display:r.length>1?"flex":"none"},l.map(b=>e.createElement(_,{key:b,onClick:()=>s(b),active:t===b},e.createElement(j,{fontSize:"18px",fontWeight:"light"},b))),e.createElement(C,{display:H?"block":"none"},"..."),E.map(b=>e.createElement(_,{key:b,onClick:()=>s(b),active:t===b},e.createElement(j,{fontSize:"18px",fontWeight:"light"},b))),e.createElement(C,{display:M?"block":"none"},"..."),c.map(b=>e.createElement(_,{key:b,onClick:()=>s(b),active:t===b,display:y&&x?"block":"none"},e.createElement(j,{fontSize:"18px",fontWeight:"light"},b)))):e.createElement(e.Fragment,null,e.createElement(C,{display:t>1?"block":"none"},"..."),e.createElement(_,{active:!0},e.createElement(j,{fontSize:"18px",fontWeight:"light"},t)),e.createElement(C,{display:t<r.length?"block":"none"},"...")))},jt=a=>{var p=a,{activePage:t,totalPages:n=1,onPageChange:s}=p,r=I(p,["activePage","totalPages","onPageChange"]);const o=[...Array(n).keys()].map(l=>l+1);return e.createElement(k,O({spacing:["1","2"]},r),e.createElement(ie,{variant:"ghost",bg:"transparent",icon:Tt,disabled:t===1,onClick:()=>s(t-1),boxSize:"6",_active:{bg:"autoGrey.400"},display:n===1?"none":"block"}),e.createElement(Dt,{activePage:t,totalPages:n,onChange:s,paginNumbers:o}),e.createElement(ie,{variant:"ghost",bg:"transparent",icon:bt,fill:"#000",boxSize:"6",disabled:t===n,onClick:()=>s(t+1),_active:{bg:"autoGrey.400"},display:n===1?"none":"block"}))},Lt=()=>{const{dealerCars:t,fetchingDealerCars:n}=f(x=>x.carsReducer),{totalPages:s,activePage:r}=f(x=>x.carsPagination),{isAuthenticated:a}=f(x=>x.userInfoSlice),p=st(),o=u.exports.useRef(),{networkError:l,catalogQuery:i}=f(x=>x.globalAppState),c=f(x=>x.selectedCarFilters);u.exports.useEffect(()=>{l&&M()},[l]);const d=h(),E=tt(),g=Pe(),y=Number(g.get("page"))||1,m=pe();u.exports.useEffect(()=>(i?E.push({search:i}):(r?g.set("page",r.toString()):g.set("page",y.toString()),E.push({search:g.toString()}),d(je(g.get("page"))),d(rt(g.toString()))),()=>{d(De())}),[]),u.exports.useEffect(()=>{a&&d(at(""))},[a]),u.exports.useEffect(()=>{i!==g.toString()&&(m(c),d(je(g.get("page"))),setTimeout(()=>window.scrollTo(0,0)))},[y,i]);const H=x=>{g.set("page",String(x)),E.push({search:g.toString()})},M=()=>{o.current=p({title:l,status:"error",position:"top",duration:3e3,isClosable:!0})};return n?e.createElement(S,{h:"100vh",w:"full"},e.createElement(ct,null)):e.createElement(S,{spacing:"90px",w:"full"},t.length?e.createElement(vt,{gap:"16px"},t.map((x,b)=>e.createElement(ot,{justify:"center",key:b},e.createElement(Ct,{car:x})))):e.createElement(it,null,"No Results found"),e.createElement(jt,{totalPages:s,activePage:y,onPageChange:x=>H(x),display:t.length?"flex":"none"}))},_t=()=>e.createElement("svg",{id:"Group_975","data-name":"Group 975",xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 40 40"},e.createElement("g",{id:"Rectangle_160","data-name":"Rectangle 160",fill:"none",stroke:"#3d405b",strokeWidth:"1.5"},e.createElement("rect",{width:"40",height:"40",rx:"8",stroke:"none"}),e.createElement("rect",{x:"0.75",y:"0.75",width:"38.5",height:"38.5",rx:"7.25",fill:"none"})),e.createElement("g",{id:"Group_937","data-name":"Group 937",transform:"translate(8 8)"},e.createElement("path",{id:"Path_454","data-name":"Path 454",d:"M0,0H24V24H0Z",fill:"none"}),e.createElement("path",{id:"Path_1582","data-name":"Path 1582",d:"M2.651,20.667a.96.96,0,0,0,.457.258,1.061,1.061,0,0,0,.522,0,1.012,1.012,0,0,0,.456-.254l6.266-6.278,6.272,6.277a1.027,1.027,0,0,0,1.435,0,1,1,0,0,0,.289-.723.968.968,0,0,0-.286-.713L11.79,12.954l6.272-6.265a.988.988,0,0,0,.291-.717.946.946,0,0,0-.294-.719,1,1,0,0,0-.723-.29.961.961,0,0,0-.712.287l-6.272,6.275L4.086,5.249a1,1,0,0,0-.456-.255,1.108,1.108,0,0,0-.522,0,.892.892,0,0,0-.457.262,1.028,1.028,0,0,0-.257.461,1.061,1.061,0,0,0,0,.522.951.951,0,0,0,.254.452l6.265,6.267L2.648,19.231a.993.993,0,0,0-.259.452,1.043,1.043,0,0,0,0,.527A.926.926,0,0,0,2.651,20.667Z",transform:"translate(1.647 -0.961)",fill:"#3d405b"}))),zt=()=>e.createElement("svg",{id:"Group_974","data-name":"Group 974",xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 40 40"},e.createElement("g",{id:"Rectangle_160","data-name":"Rectangle 160",fill:"none",stroke:"#3d405b",strokeWidth:"1.5"},e.createElement("rect",{width:"40",height:"40",rx:"8",stroke:"none"}),e.createElement("rect",{x:"0.75",y:"0.75",width:"38.5",height:"38.5",rx:"7.25",fill:"none"})),e.createElement("g",{id:"Group_131","data-name":"Group 131",transform:"translate(8 8)"},e.createElement("path",{id:"Path_454","data-name":"Path 454",d:"M0,0H24V24H0Z",fill:"none"}),e.createElement("path",{id:"Path_455","data-name":"Path 455",d:"M5.336,14.8a2.4,2.4,0,0,1,4.528,0H18v1.6H9.864a2.4,2.4,0,0,1-4.528,0H2V14.8Zm4.8-5.6a2.4,2.4,0,0,1,4.528,0H18v1.6H14.664a2.4,2.4,0,0,1-4.528,0H2V9.2Zm-4.8-5.6a2.4,2.4,0,0,1,4.528,0H18V5.2H9.864a2.4,2.4,0,0,1-4.528,0H2V3.6ZM7.6,5.2a.8.8,0,1,0-.8-.8A.8.8,0,0,0,7.6,5.2Zm4.8,5.6a.8.8,0,1,0-.8-.8A.8.8,0,0,0,12.4,10.8ZM7.6,16.4a.8.8,0,1,0-.8-.8A.8.8,0,0,0,7.6,16.4Z",transform:"translate(2 2.002)",fill:"#3d405b"}))),R=l=>{var i=l,{selected:t,label:n,children:s,clearSelected:r,onApply:a,size:p}=i,o=I(i,["selected","label","children","clearSelected","onApply","size"]);const[c,d]=u.exports.useState(!1),[E,g]=u.exports.useState("");u.exports.useEffect(()=>{t.length?g(`${t.join(", ")}`):g(n)},[t]);const y=()=>d(!1);return e.createElement(me,{areOptionsOpen:c},e.createElement(te,{isActive:c,onClick:()=>{y(),a()}}),e.createElement(w,null,e.createElement(ue,{size:p,areOptionsOpen:c,clearCb:m=>{m.stopPropagation&&m.stopPropagation(),r(),d(!1)},areOptionsSelected:!!t.length,onClick:()=>d(m=>!m)},e.createElement(k,{pl:"4",pr:"28px",h:"40px",w:"full",bg:"white",_hover:{bg:"autoGrey.200"},borderRadius:"8px"},e.createElement(C,{opacity:c?"1":"0.5",noOfLines:1},E))),e.createElement(de,O({isOpen:c},o),s)))},z=s=>{var r=s,{children:t}=r,n=I(r,["children"]);return e.createElement(Le,O({p:"4",w:"full",whiteSpace:"normal",borderRadius:"none",textAlign:"start",display:"flex",justifyContent:"flex-start",fontWeight:"400",variant:"ghost",_hover:{bg:"autoGrey.100"}},n),t)},Nt=({})=>{const[t,n]=u.exports.useState([]),{conditions:s}=f(l=>l.carsReducer),{conditions:r}=f(l=>l.selectedCarFilters),a=h(),p=s.filter(l=>l);u.exports.useEffect(()=>{r.length&&n(r)},[r]);const o=l=>{t.includes(l)?n(t.filter(i=>i!==l)):n([l].concat(t))};return e.createElement(R,{size:"md",selected:t,label:"condition",clearSelected:()=>{n([]),a(Y([]))},onApply:()=>a(Y(t)),top:"35px"},e.createElement(w,null,p.map(l=>e.createElement(z,{key:l,onClick:i=>{i.preventDefault(),o(l)}},e.createElement(F,{colorScheme:"autoOrange",isChecked:t==null?void 0:t.includes(l)},e.createElement(C,{w:"full"},l))))))},Yt=({})=>{const[t,n]=u.exports.useState([]),{cylinders:s}=f(l=>l.carsReducer),{cylinders:r}=f(l=>l.selectedCarFilters),a=h(),p=s.filter(l=>l).map(l=>l.toString());u.exports.useEffect(()=>{r.length&&n(r)},[r]);const o=l=>{t.includes(l)?n(t.filter(i=>i!==l)):n([l].concat(t))};return e.createElement(R,{size:"md",selected:t,label:"cylinders",clearSelected:()=>{n([]),a(B([]))},onApply:()=>a(B(t)),top:"35px"},e.createElement(w,null,p.map(l=>e.createElement(z,{key:l,onClick:i=>{i.preventDefault(),o(l)}},e.createElement(F,{colorScheme:"autoOrange",isChecked:t==null?void 0:t.includes(l)},e.createElement(C,{w:"full"},l))))))},Bt=({})=>{const[t,n]=u.exports.useState([]),{drives:s}=f(l=>l.carsReducer),{drives:r}=f(l=>l.selectedCarFilters),a=h(),p=s.filter(l=>l);u.exports.useEffect(()=>{r.length&&n(r)},[r]);const o=l=>{t.includes(l)?n(t.filter(i=>i!==l)):n([l].concat(t))};return e.createElement(R,{size:"md",selected:t,label:"drives",clearSelected:()=>{n([]),a(G([]))},onApply:()=>a(G(t)),top:"35px"},e.createElement(w,null,p.map(l=>e.createElement(z,{key:l,onClick:i=>{i.preventDefault(),o(l)}},e.createElement(F,{colorScheme:"autoOrange",isChecked:t==null?void 0:t.includes(l)},e.createElement(C,{w:"full"},l))))))},Gt=n=>{var t=I(n,[]);const[s,r]=u.exports.useState(!1),[a,p]=u.exports.useState(0),[o,l]=u.exports.useState(0),[i,c]=u.exports.useState(""),{engineFrom:d,engineTo:E}=f(m=>m.selectedCarFilters),g=h();u.exports.useEffect(()=>{c(a||o?`${a} - ${o}`:"engine")},[a,o]),u.exports.useEffect(()=>{d&&p(Number(d)),E&&l(Number(E))},[d,E]);const y=(m,H)=>{const M=[];for(let x=m;x<=H;x=parseFloat(((x*100+10)/100).toFixed(1)))M.push(x);return M};return e.createElement(me,He(O({},t),{areOptionsOpen:s,bg:"white",borderRadius:"8px"}),e.createElement(te,{isActive:s,onClick:()=>{r(!1),g(W(a)),g($(o))}}),e.createElement(w,null,e.createElement(ue,{areOptionsOpen:s,clearCb:m=>{m.stopPropagation&&m.stopPropagation(),l(0),p(0),g(W(0)),g($(0)),c(""),r(!1)},areOptionsSelected:!!(a||o),onClick:()=>r(m=>!m)},e.createElement(k,{pl:"4",h:"40px",w:"full",_hover:{bg:"autoGrey.200"},borderRadius:"8px"},e.createElement(C,{opacity:s?"1":"0.5"},i))),e.createElement(de,{isOpen:s,w:"full"},e.createElement(k,{h:"290px",w:"full",divider:e.createElement(_e,{borderColor:"autoGrey.400"}),pr:"2px"}," ",e.createElement(S,{h:"full",w:"full",spacing:"4"},e.createElement(C,{fontSize:"16px"},"From"),e.createElement(S,{h:"full",w:"full",spacing:"4",overflowY:"scroll",css:{"&::-webkit-scrollbar":{display:"none"}}},y(.5,6).map(m=>e.createElement(q,{fontSize:"16px",key:m,lineHeight:"21px",w:"full",color:a===m?"autoOrange.400":"#000",onClick:()=>{p(m),m>=o&&l(m)}},m.toFixed(1))))),e.createElement(S,{h:"full",w:"full",spacing:"4"},e.createElement(C,{fontSize:"16px"},"To"),e.createElement(S,{h:"full",w:"full",spacing:"4",overflowY:"scroll",css:{"&::-webkit-scrollbar":{display:"none"}}},y(.5,6).map(m=>e.createElement(q,{fontSize:"16px",key:m,lineHeight:"21px",w:"full",color:o===m?"autoOrange.400":"#000",onClick:()=>{l(m),m<=a&&p(m)}},m.toFixed(1)))))))))},Wt=({})=>{const[t,n]=u.exports.useState([]),{fuels:s}=f(l=>l.carsReducer),{fuels:r}=f(l=>l.selectedCarFilters),a=h(),p=s.filter(l=>l);u.exports.useEffect(()=>{r.length&&n(r)},[r]);const o=l=>{t.includes(l)?n(t.filter(i=>i!==l)):n([l].concat(t))};return e.createElement(R,{size:"md",selected:t,label:"fuel type",clearSelected:()=>{n([]),a(P([]))},onApply:()=>a(P(t)),top:"35px"},e.createElement(w,null,p.map(l=>e.createElement(z,{key:l,onClick:i=>{i.preventDefault(),o(l)}},e.createElement(F,{colorScheme:"autoOrange",isChecked:t==null?void 0:t.includes(l)},e.createElement(C,{w:"full"},l))))))},$t=({})=>{const[t,n]=u.exports.useState(null),{keys:s}=f(a=>a.selectedCarFilters);u.exports.useEffect(()=>{s&&n(s)},[s]);const r=h();return e.createElement(R,{size:"md",selected:t?[t]:[],label:t||"keys",clearSelected:()=>{n(null),r(V(null))},onApply:()=>t&&r(V(t)),top:"35px"},e.createElement(w,{align:"flex-start",spacing:"0"},e.createElement(k,{p:"2",pl:"4",onClick:()=>n(L.YES),_hover:{bg:"autoGrey.100"},w:"full",cursor:"pointer"},e.createElement("input",{type:"radio",name:"has_keys",value:"YES",checked:t==="YES",readOnly:!0}),e.createElement(C,null,"Yes")),e.createElement(k,{p:"2",pl:"4",onClick:()=>n(L.NO),_hover:{bg:"autoGrey.100"},w:"full",cursor:"pointer"},e.createElement("input",{type:"radio",name:"has_keys",value:"NO",checked:t==="NO",readOnly:!0}),e.createElement(C,null,"No"))," "))},Pt=({})=>{const[t,n]=u.exports.useState([]),{locations:s}=f(l=>l.carsReducer),{locations:r}=f(l=>l.selectedCarFilters),a=h(),p=s.filter(l=>l);u.exports.useEffect(()=>{r.length&&n(r)},[r]);const o=l=>{t.includes(l)?n(t.filter(i=>i!==l)):n([l].concat(t))};return e.createElement(R,{size:"md",selected:t,label:"location",clearSelected:()=>{n([]),a(K([]))},onApply:()=>a(K(t)),top:"35px"},e.createElement(w,null,p.map(l=>e.createElement(z,{key:l,onClick:i=>{i.preventDefault(),o(l)}},e.createElement(F,{colorScheme:"autoOrange",isChecked:t==null?void 0:t.includes(l)},e.createElement(C,{w:"full"},l))))))},Vt=pt({displayName:"EuroIcon",viewBox:"0 0 12 23",path:e.createElement(e.Fragment,null,e.createElement("text",{id:"_","data-name":"\u20AC",transform:"translate(0 19)",fontSize:"20",fontFamily:"HelveticaNeue, Helvetica Neue"},e.createElement("tspan",{x:"0",y:"0"},"\u20AC")))}),Ue=({currency:t,setCurrency:n})=>e.createElement(k,{borderRadius:"8px",bg:"white",spacing:"2px",flexBasis:"30%",justify:"space-between",p:"7px"},e.createElement(_,{onClick:()=>n("USD"),active:t==="USD"},e.createElement(ne,{as:ut,boxSize:6,fontWeight:"400",fill:t==="USD"?"#fff":"#000"})),e.createElement(_,{onClick:()=>n("GEL"),active:t==="GEL"},e.createElement(ne,{as:mt,fill:t==="GEL"?"#fff":"#000",boxSize:7,fontWeight:"400"})),e.createElement(_,{onClick:()=>n("EUR"),active:t==="EUR",fontSize:"20px",fontWeight:"400"},e.createElement(ne,{as:Vt,boxSize:6,fontWeight:"400",fill:t==="EUR"?"#fff":"#000"}))),Kt=({})=>{const[t,n]=u.exports.useState(!1),[s,r]=u.exports.useState(""),[a,p]=u.exports.useState(""),[o,l]=u.exports.useState(""),{priceFrom:i,priceTo:c,currency:d}=f(m=>m.selectedCarFilters),E=h();function g(m){E(ze(m))}const y=()=>{switch(d){case"GEL":return"\u20BE";case"EUR":return"\u20AC";case"USD":return"$"}};return u.exports.useEffect(()=>{i&&p(i),c&&l(c)},[i,c]),u.exports.useEffect(()=>{r(o&&a?` ${y()} ${a} - ${o} `:a?`from: ${d} ${a}`:o?`to: ${d} ${o}`:"price")},[a,o,d]),e.createElement(me,{areOptionsOpen:t},e.createElement(te,{isActive:t,onClick:()=>{n(!1),E(le(a)),E(se(o)),E(ze(d))}}),e.createElement(w,null,e.createElement(ue,{size:"md",areOptionsOpen:t,clearCb:m=>{m.stopPropagation&&m.stopPropagation(),E(le("")),E(se("")),p(""),l(""),r("Price"),n(!1)},areOptionsSelected:!!a&&!!o,onClick:()=>n(m=>!m)},e.createElement(k,{pl:"4",h:"40px",w:"full",bg:"white",_hover:{bg:"autoGrey.200"},borderRadius:"8px"},e.createElement(C,{opacity:t?"1":"0.5"},s))),e.createElement(de,{isOpen:t,w:"full",top:"35px"},e.createElement(S,{p:"0px 16px 16px",align:"flex-start"},e.createElement(Ue,{currency:d,setCurrency:g}),e.createElement(S,null,e.createElement(Ne,{placeholder:"From",h:"37px",type:"number",value:a,onChange:m=>p(m.currentTarget.value)}),e.createElement(Ne,{placeholder:"To",h:"37px",type:"number",value:o,onChange:m=>l(m.currentTarget.value)}))))))},Ut=({})=>{const[t,n]=u.exports.useState([]),s=h(),{transmissions:r}=f(l=>l.carsReducer),{transmission:a}=f(l=>l.selectedCarFilters),p=r.filter(l=>l);u.exports.useEffect(()=>{a.length&&n(a)},[a]);const o=l=>{t.includes(l)?n(t.filter(i=>i!==l)):n([l].concat(t))};return e.createElement(R,{size:"md",selected:t,label:"transmission",clearSelected:()=>{n([]),s(U([]))},onApply:()=>s(U(t))},e.createElement(w,null,p.map(l=>e.createElement(z,{key:l,onClick:i=>{i.preventDefault(),o(l)}},e.createElement(F,{colorScheme:"autoOrange",isChecked:t==null?void 0:t.includes(l)},e.createElement(C,null,l))))))},Zt=({})=>{const[t,n]=u.exports.useState([]),{types:s}=f(l=>l.carsReducer),{types:r}=f(l=>l.selectedCarFilters),a=h(),p=s.filter(l=>l);u.exports.useEffect(()=>{r.length&&n(r)},[r]);const o=l=>{t.includes(l)?n(t.filter(i=>i!==l)):n([l].concat(t))};return e.createElement(R,{size:"md",selected:t,label:"types",clearSelected:()=>{n([]),a(Z([]))},onApply:()=>a(Z(t)),top:"35px"},e.createElement(w,null,p.map(l=>e.createElement(z,{key:l,onClick:i=>{i.preventDefault(),o(l)}},e.createElement(F,{colorScheme:"autoOrange",isChecked:t==null?void 0:t.includes(l)},e.createElement(C,{w:"full"},l))))))},Qt=p=>{var o=p,{p:t="2",bg:n="#fff",direction:s="row",borderRadius:r="md"}=o,a=I(o,["p","bg","direction","borderRadius"]);const l=h(),i=f(g=>g.selectedCarFilters),{isAdvancedFiltersOpen:c}=f(g=>g.selectedCarFilters),d=()=>l(We()),E=pe();return e.createElement(e.Fragment,null,e.createElement(Ye,O({p:t,bg:n,direction:s,borderRadius:r,alignItems:"center"},a),e.createElement(yt,{labelPadding:"2",w:["100%","100%","100%"]}),e.createElement(X,{height:["40px",null,null,"30px"],borderColor:"gray.300"}),e.createElement(kt,null),e.createElement(X,{height:["40px",null,null,"30px"],borderColor:"gray.300"}),e.createElement(Ft,null),e.createElement(k,{spacing:{md:"0",xl:"2"}},e.createElement(Ve,{w:{md:"140px",lg:"144px","2xl":"211px"},ml:[null,null,"0px","16px"],mr:"2",onClick:()=>E(i)}),c?e.createElement(Be,{icon:e.createElement(_t,null),onClick:d,"aria-label":"close advanced filters",bg:"white",_hover:{bg:"white"},_active:{bg:"white"}}):e.createElement(Be,{onClick:d,icon:e.createElement(zt,null),"aria-label":"open advanced filters",bg:"white",_hover:{bg:"white"},_active:{bg:"white"}}))),e.createElement(Ge,{in:c},e.createElement(At,{templateColumns:[null,"1fr 1fr","repeat(3, 1fr)","repeat(5, 1fr)"],spacingX:"4",spacingY:"2",mt:["2","4",null,"4",null,"24px"]},e.createElement(Kt,null),e.createElement(Gt,null),e.createElement(Nt,null),e.createElement(Zt,null),e.createElement(Ut,null),e.createElement($t,null),e.createElement(Bt,null),e.createElement(Pt,null),e.createElement(Wt,null),e.createElement(Yt,null))))},qt=l=>{var i=l,{isKeyboardActive:t,children:n,w:s="full",bottom:r="10px",pr:a="4",pl:p="4"}=i,o=I(i,["isKeyboardActive","children","w","bottom","pr","pl"]);return e.createElement(e.Fragment,null,t?e.createElement(re,O({w:s,position:"fixed",bottom:r,pr:a,pl:p,zIndex:"modal"},o),n):e.createElement(re,O({w:s},o),n))},Jt=({isOpen:t,onClose:n})=>{const{keys:s}=f(l=>l.selectedCarFilters),[r,a]=u.exports.useState(s),p=h();u.exports.useEffect(()=>{a(s)},[]);const o=()=>{r&&p(V(r)),n()};return e.createElement(v,{isOpen:t,onClose:n,onSubmit:o},e.createElement(S,{w:"full",alignItems:"flex-start"},e.createElement(k,null,e.createElement("input",{type:"radio",name:"has_keys",value:"YES",checked:r==="YES",onChange:()=>a(L.YES)}),e.createElement(C,null,"Yes")),e.createElement(k,null,e.createElement("input",{type:"radio",name:"has_keys",value:"NO",checked:r==="NO",onChange:()=>a(L.NO)}),e.createElement(C,null,"No"))))},Xt=({})=>{const{isOpen:t,onOpen:n,onClose:s}=T(),r=h(),{keys:a}=f(p=>p.selectedCarFilters);return e.createElement(e.Fragment,null,e.createElement(A,{onClick:n,label:a?`Keys: ${a}`:"Keys",hasValue:!!a,onClear:()=>r(V(L.NO))}),e.createElement(Jt,{isOpen:t,onClose:s}))},en=({isOpen:t,onClose:n})=>{const[s,r]=u.exports.useState([]),a=h(),{conditions:p}=f(c=>c.carsReducer),{conditions:o}=f(c=>c.selectedCarFilters);u.exports.useEffect(()=>{o.length&&r(o)},[o]);const l=()=>p.filter(c=>c),i=c=>{s.includes(c)?r(s.filter(d=>d!==c)):r(s.concat(c))};return e.createElement(v,{isOpen:t,onClose:n,onSubmit:()=>{a(Y(s)),n()}},e.createElement(S,{w:"full",alignItems:"flex-start",minH:"80vh",spacing:"16px"},l().map(c=>e.createElement(F,{colorScheme:"autoOrange",defaultChecked:o==null?void 0:o.includes(c),onChange:d=>{d.preventDefault(),i(c)},key:c},N(c)))))},tn=({})=>{const{isOpen:t,onOpen:n,onClose:s}=T(),r=h(),{conditions:a}=f(p=>p.selectedCarFilters);return e.createElement(e.Fragment,null,e.createElement(A,{onClick:n,label:a.length?`Condition: ${N(a.join("; "))}`:"Condition",hasValue:!!a.length,onClear:()=>r(Y([]))}),e.createElement(en,{isOpen:t,onClose:s}))},nn=({isOpen:t,onClose:n})=>{const[s,r]=u.exports.useState([]),a=h(),{cylinders:p}=f(c=>c.carsReducer),{cylinders:o}=f(c=>c.selectedCarFilters);u.exports.useEffect(()=>{o.length&&r(o)},[o]);const l=()=>p.filter(c=>c),i=c=>{s.includes(c)?r(s.filter(d=>d!==c)):r(s.concat(c))};return e.createElement(v,{isOpen:t,onClose:n,onSubmit:()=>{a(B(s)),n()}},e.createElement(S,{w:"full",alignItems:"flex-start",maxH:"80vh",spacing:"16px"},l().map(c=>e.createElement(F,{colorScheme:"autoOrange",defaultChecked:o==null?void 0:o.includes(c),onChange:d=>{d.preventDefault(),i(c)},key:c},c))))},ln=({})=>{const{isOpen:t,onOpen:n,onClose:s}=T(),r=h(),{cylinders:a}=f(p=>p.selectedCarFilters);return e.createElement(e.Fragment,null,e.createElement(A,{onClick:n,label:a.length?`Cylinders: ${a.join(", ")}`:"Cylinders",hasValue:!!a.length,onClear:()=>r(B([]))}),e.createElement(nn,{isOpen:t,onClose:s}))},sn=({isOpen:t,onClose:n})=>{const[s,r]=u.exports.useState([]),a=h(),{drives:p}=f(c=>c.carsReducer),{drives:o}=f(c=>c.selectedCarFilters);u.exports.useEffect(()=>{o.length&&r(o)},[o]);const l=()=>p.filter(c=>c),i=c=>{s.includes(c)?r(s.filter(d=>d!==c)):r(s.concat(c))};return e.createElement(v,{isOpen:t,onClose:n,onSubmit:()=>{a(G(s)),n()}},e.createElement(S,{w:"full",alignItems:"flex-start",spacing:"16px",maxH:"80vh"},l().map(c=>e.createElement(F,{colorScheme:"autoOrange",defaultChecked:o==null?void 0:o.includes(c),onChange:d=>{d.preventDefault(),i(c)},key:c},c))))},rn=({})=>{const{isOpen:t,onOpen:n,onClose:s}=T(),r=h(),{drives:a}=f(p=>p.selectedCarFilters);return e.createElement(e.Fragment,null,e.createElement(A,{onClick:n,label:a.join(", ")||"Drives",hasValue:!!a.length,onClear:()=>r(G([]))}),e.createElement(sn,{isOpen:t,onClose:s}))},an=({isOpen:t,onClose:n})=>{const{engineFrom:s,engineTo:r}=f(E=>E.selectedCarFilters),[a,p]=u.exports.useState(s||.5),[o,l]=u.exports.useState(r||.5),i=h(),c=(E,g)=>{const y=[];for(let m=E;m<=g;m=parseFloat(((m*100+10)/100).toFixed(1)))y.push(m);return y},d=()=>{i(W(a)),i($(o)),n()};return e.createElement(v,{isOpen:t,onClose:n,onSubmit:d},e.createElement(k,{h:"full",divider:e.createElement(_e,{borderColor:"autoGrey.400"})},e.createElement(S,{h:"full",w:"full",spacing:"4"},e.createElement(j,{fontSize:"16px",fontWeight:"600"},"From"),e.createElement(S,{h:"full",w:"full",spacing:"4",overflowY:"scroll"},c(.5,6).map(E=>e.createElement(q,{fontSize:"16px",key:E,lineHeight:"21px",w:"full",color:a===E?"autoOrange.400":"#000",onClick:()=>{p(E),E>=o&&l(E)}},E.toFixed(1))))),e.createElement(S,{h:"full",w:"full",spacing:"4"},e.createElement(j,{fontSize:"16px",fontWeight:"600"},"To"),e.createElement(S,{h:"full",w:"full",spacing:"4",overflowY:"scroll"},c(.5,6).map(E=>e.createElement(q,{fontSize:"16px",key:E,lineHeight:"21px",w:"full",color:o===E?"autoOrange.400":"#000",onClick:()=>{l(E),E<=a&&p(E)}},E.toFixed(1)))))))},cn=({})=>{const{isOpen:t,onClose:n,onOpen:s}=T(),r=h(),{engineFrom:a,engineTo:p}=f(o=>o.selectedCarFilters);return e.createElement(e.Fragment,null,e.createElement(A,{label:a&&p?`Engine (from - to): ${Number(a).toFixed(1)}L -  ${Number(p).toFixed(1)}L `:"Engine",onClick:s,hasValue:!!(a&&p),onClear:()=>{r(W(null)),r($(null))}}),e.createElement(an,{onClose:n,isOpen:t}))},on=({isOpen:t,onClose:n})=>{const[s,r]=u.exports.useState([]),a=h(),{fuels:p}=f(c=>c.carsReducer),{fuels:o}=f(c=>c.selectedCarFilters);u.exports.useEffect(()=>{o.length&&r(o)},[o]);const l=()=>p.filter(c=>c),i=c=>{s.includes(c)?r(s.filter(d=>d!==c)):r(s.concat(c))};return e.createElement(v,{isOpen:t,onClose:n,onSubmit:()=>{a(P(s)),n()}},e.createElement(S,{w:"full",alignItems:"flex-start",spacing:"16px",minH:"30vh"},l().map(c=>e.createElement(F,{colorScheme:"autoOrange",defaultChecked:o==null?void 0:o.includes(c),onChange:d=>{d.preventDefault(),i(c)},key:c},N(c)))))},pn=({})=>{const{isOpen:t,onOpen:n,onClose:s}=T(),r=h(),{fuels:a}=f(p=>p.selectedCarFilters);return e.createElement(e.Fragment,null,e.createElement(A,{onClick:n,label:a.length?`Fuel: ${N(a.join(", "))}`:"Fuel Types",hasValue:!!a.length,onClear:()=>r(P([]))}),e.createElement(on,{isOpen:t,onClose:s}))},un=({isOpen:t,onClose:n})=>{const[s,r]=u.exports.useState([]),a=h(),{locations:p}=f(c=>c.carsReducer),{locations:o}=f(c=>c.selectedCarFilters);u.exports.useEffect(()=>{o.length?r(o):r([])},[o]);const l=()=>p.filter(c=>c),i=c=>{s.includes(c)?r(s.filter(d=>d!==c)):r(s.concat(c))};return e.createElement(v,{isOpen:t,onClose:n,onSubmit:()=>{a(K(s)),n()}},e.createElement(S,{w:"full",alignItems:"flex-start",spacing:"16px"},l().map(c=>e.createElement(F,{colorScheme:"autoOrange",defaultChecked:o==null?void 0:o.includes(c),onChange:d=>{d.preventDefault(),i(c)},key:c},c))))},mn=s=>{var r=s,{w:t="full"}=r,n=I(r,["w"]);const{isOpen:a,onOpen:p,onClose:o}=T(),l=h(),{locations:i}=f(c=>c.selectedCarFilters);return e.createElement(re,O({minW:t,maxW:t},n),e.createElement(A,{onClick:p,label:i.length?` ${i.join(", ")}`:"Locations",hasValue:!!i.length,onClear:()=>l(K([]))}),e.createElement(un,{isOpen:a,onClose:o}))},dn=({isOpen:t,onClose:n})=>{const[s,r]=u.exports.useState([]),a=h(),{salesStatus:p}=f(i=>i.carsReducer),{salesStatus:o}=f(i=>i.selectedCarFilters);u.exports.useEffect(()=>{o.length&&r(o)},[o]);const l=i=>{s.includes(i)?r(s.filter(c=>c!==i)):r(s.concat(i))};return e.createElement(v,{isOpen:t,onClose:n,onSubmit:()=>{a(ae(s)),n()}},e.createElement(S,{w:"full",alignItems:"flex-start",maxH:"80vh",spacing:"16px"},p.map(i=>e.createElement(F,{colorScheme:"autoOrange",defaultChecked:o==null?void 0:o.includes(i),onChange:c=>{c.preventDefault(),l(i)},key:i},i))))},fn=({})=>{const{isOpen:t,onOpen:n,onClose:s}=T(),r=h(),{salesStatus:a}=f(p=>p.selectedCarFilters);return e.createElement(e.Fragment,null,e.createElement(A,{onClick:n,label:a.length?`Sales Status: ${a.join(", ")}`:"Sales Status",hasValue:!!a.length,onClear:()=>r(ae([]))}),e.createElement(dn,{isOpen:t,onClose:s}))},En=({isOpen:t,onClose:n})=>{const{transmission:s}=f(c=>c.selectedCarFilters),[r,a]=u.exports.useState(s),p=h(),o=Object.values(It);u.exports.useEffect(()=>{a(s)},[]);const l=c=>{if(!r.includes(c))a([...r,c]);else{const d=r.filter(E=>E!=c);a(d)}},i=()=>{p(U(r)),n()};return e.createElement(v,{isOpen:t,onClose:n,onSubmit:i},e.createElement(S,{w:"full",alignItems:"flex-start"},o.map(c=>e.createElement(F,{colorScheme:"autoOrange",defaultChecked:s==null?void 0:s.includes(c),onChange:d=>{d.preventDefault(),l(c)},boxShadow:"none !important",shadow:"none !important",key:c},c))))},hn=({})=>{const{isOpen:t,onOpen:n,onClose:s}=T(),r=h(),{transmission:a}=f(p=>p.selectedCarFilters);return e.createElement(e.Fragment,null,e.createElement(A,{onClick:n,label:a.length?`Transmission: ${a.join(", ")}`:"Transmission",hasValue:!!a.length,onClear:()=>r(U([]))}),e.createElement(En,{isOpen:t,onClose:s}))},gn=({isOpen:t,onClose:n})=>{const[s,r]=u.exports.useState([]),a=h(),{types:p}=f(c=>c.carsReducer),{types:o}=f(c=>c.selectedCarFilters);u.exports.useEffect(()=>{o.length&&r(o)},[o]);const l=()=>p.filter(c=>c),i=c=>{s.includes(c)?r(s.filter(d=>d!==c)):r(s.concat(c))};return e.createElement(v,{isOpen:t,onClose:n,onSubmit:()=>{a(Z(s)),n()}},e.createElement(S,{w:"full",alignItems:"flex-start",minH:"80vh",spacing:"16px"},l().map(c=>e.createElement(F,{colorScheme:"autoOrange",defaultChecked:o==null?void 0:o.includes(c),onChange:d=>{d.preventDefault(),i(c)},key:c},N(c)))))},Sn=({})=>{const{isOpen:t,onOpen:n,onClose:s}=T(),r=h(),{types:a}=f(p=>p.selectedCarFilters);return e.createElement(e.Fragment,null,e.createElement(A,{onClick:n,label:a.length?`Types: ${N(a.join("; "))}`:"Type",hasValue:!!a.length,onClear:()=>r(Z([]))}),e.createElement(gn,{isOpen:t,onClose:s}))},xn=({setKeyboardActive:t})=>{const[n,s]=u.exports.useState(""),[r,a]=u.exports.useState(""),{yearFrom:p,yearTo:o}=f(i=>i.selectedCarFilters),l=h();return u.exports.useEffect(()=>{s(p?p.toString():""),a(o?o.toString():"")},[p,o]),e.createElement(k,{borderRadius:"8px",bg:"white",spacing:0,flex:"1",p:"2px"},e.createElement(J,{pr:"2",placeholder:"Year from",type:"number",value:n,onChange:i=>s(i.currentTarget.value),onFocus:()=>t(!0),onBlur:()=>{t(!1),parseInt(n)>=(parseInt(r)||0)&&l(ce(parseInt(n))),l(oe(parseInt(n)))}}),e.createElement(X,{height:"30px"}),e.createElement(J,{placeholder:"Year to",type:"number",value:r,onChange:i=>a(i.currentTarget.value),onFocus:()=>t(!0),onBlur:()=>{t(!1),parseInt(r)<=parseInt(n)&&l(oe(parseInt(r))),l(ce(parseInt(r)||0))}}))},Cn=({})=>{const[t,n]=u.exports.useState("GEL"),s=f(i=>i.selectedCarFilters),r=pe(),{isAdvancedFiltersOpen:a}=f(i=>i.selectedCarFilters),p=h(),[o,l]=u.exports.useState(!1);return e.createElement(Ye,null,e.createElement(wt,null),e.createElement(Ot,null),e.createElement(xn,{setKeyboardActive:l}),e.createElement(k,{justify:"space-between"},e.createElement(k,{borderRadius:"8px",bg:"white",spacing:0,flex:"1",p:"2px"},e.createElement(J,{pr:"2",placeholder:"Price from",type:"number",onFocus:()=>l(!0),onBlur:()=>l(!1)}),e.createElement(X,{height:"30px"}),e.createElement(J,{placeholder:"Price to",type:"number",onFocus:()=>l(!0),onBlur:()=>l(!1)})),e.createElement(Ue,{currency:t,setCurrency:n})),e.createElement(Ge,{in:a},e.createElement(S,null,e.createElement(cn,null),e.createElement(tn,null),e.createElement(Sn,null),e.createElement(mn,null),e.createElement(hn,null),e.createElement(Xt,null),e.createElement(rn,null),e.createElement(fn,null),e.createElement(pn,null),e.createElement(ln,null))),e.createElement(S,{pt:"2",spacing:"3"},e.createElement(qt,{isKeyboardActive:o},e.createElement(Ve,{w:"full",isKeyboardActive:o,onClick:()=>r(s)})),e.createElement(Le,{variant:"link",onClick:()=>p(We()),bg:"transparent"},e.createElement(C,{color:"#000",display:o?"none":"block",lineHeight:"19px",fontWeight:"400"},a?"See less filter":"See more filter"))))},bn=(t,n)=>{const s=n.slice().sort();return t.length===n.length&&t.slice().sort().every(function(r,a){return r===s[a]}),!1},yn=({modelQueryKeys:t,brands:n,query:s})=>{const r=[];return n.map(a=>r.push({brand:a,models:[]})),t.map(a=>{const p=a.slice(a.indexOf("[")+1,a.indexOf("]")),o=s.getAll(a);r.push({brand:p,models:o})}),r.filter(a=>a.models.length)},kn=()=>{const{isLargerThan:t}=Ke(737),n=Pe(),s=h(),{MODEL:r,YEAR_FROM:a,YEAR_TO:p,CONDITION:o,TYPE:l,LOCATION:i,TRANSMISSION:c,KEYS:d,DRIVE:E,SALES_STATUS:g,FUEL_TYPE:y,CYLINDER:m,ENGINE_FROM:H,ENGINE_TO:M,PRICE_FROM:x,PRICE_TO:b}=ht,Ze=f(D=>D.selectedCarFilters.brands),fe=f(D=>D.carsReducer.brands);return u.exports.useEffect(()=>{const D=n.getAll("brand");bn(D,Ze)||s(dt(D));const Qe=[...new Set(Array.from(n.keys()).filter(qe=>qe.includes(`${r}[`)))],Ee=yn({brands:D,modelQueryKeys:Qe,query:n});Ee.length&&s(ft(Ee));const he=n.get(a);he&&s(oe(parseInt(he)));const ge=n.get(p);ge&&s(ce(parseInt(ge)));const Se=n.get(H);Se&&s(W(Se));const xe=n.get(M);xe&&s($(xe));const Ce=n.get(x);Ce&&s(le(Ce));const be=n.get(b);be&&s(se(be));const ye=n.getAll(o);ye.length&&s(Y(ye));const ke=n.getAll(l);ke.length&&s(Z(ke));const Fe=n.getAll(E);Fe.length&&s(G(Fe));const we=n.getAll(i);we.length&&s(K(we));const Oe=n.getAll(c);Oe.length&&s(U(Oe));const ee=n.get(d);(ee===L.NO||ee===L.YES)&&s(V(ee));const Te=n.getAll(g);Te.length&&s(ae(Te));const ve=n.getAll(y);ve.length&&s(P(ve));const Ae=n.getAll(m);Ae.length&&s(B(Ae))},[n]),u.exports.useEffect(()=>{fe.length||s(Et())},[fe]),e.createElement(e.Fragment,null,t?e.createElement(Qt,null):e.createElement(Cn,null))},Fn=()=>{const t=h();return u.exports.useEffect(()=>()=>{t(gt())},[]),e.createElement(St,{pt:["4","6",null,"8"]},e.createElement(S,{w:"full",spacing:["66px"]},e.createElement(Ht,null,e.createElement(kn,null)),e.createElement(Rt,null),e.createElement(Lt,null)))},Qn=()=>e.createElement(Fn,null);export{Qn as CatalogPage,Qn as default};