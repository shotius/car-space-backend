var we=Object.defineProperty,ke=Object.defineProperties;var ye=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var X=(t,n,l)=>n in t?we(t,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[n]=l,h=(t,n)=>{for(var l in n||(n={}))$.call(n,l)&&X(t,l,n[l]);if(_)for(var l of _(n))Q.call(n,l)&&X(t,l,n[l]);return t},N=(t,n)=>ke(t,ye(n));var C=(t,n)=>{var l={};for(var a in t)$.call(t,a)&&n.indexOf(a)<0&&(l[a]=t[a]);if(t!=null&&_)for(var a of _(t))n.indexOf(a)<0&&Q.call(t,a)&&(l[a]=t[a]);return l};import{r as d,R as e,k as ve,i as Fe}from"./vendor.1cf5a679.js";import{v as Be,a as v,y as M,G as J,V as b,T as I,u as P,z as ee,J as G,K as Re,L as te,M as ne,N as le,O as ae,Q as Te,E as Me,R as O,U as re,W as V,X as oe,B as se,Y as We,S as Ie,Z as H,_ as ce,$ as Oe,C as He,F as ze,P as Ae}from"./PublicLayout.8fc405d4.js";import{C as ie,I as De,S as pe}from"./Card.774f8c09.js";import{v as _e,s as Y,t as me,G as je,H as R,R as z,B as Z,a3 as Le,a4 as Ne,u as T,a5 as Ge,a6 as Ve,a7 as Ye,a8 as ue,a9 as de,aa as Ze,ab as Ue}from"./index.ee3caca8.js";import{d as fe,c as qe,b as Ke,D as $e,C as Qe}from"./ScrollableDiv.4202527e.js";import{A as Xe,a as Je,C as U,b as j,S as Ee,c as Pe,T as A}from"./TopBrandCard.f42b0bb5.js";import{B as xe,S as et}from"./button.4fbb508c.js";import{u as tt}from"./react-swipeable.12ee3054.js";import"./formik.9fd2e1e7.js";import"./react-redux.67e44965.js";import"./axios.7b768d2b.js";import"./focus-visible.77ad1e22.js";import"./react-icons.ef718fdc.js";import"./swiper.3c4df1c1.js";function D(){return D=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var l=arguments[n];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a])}return t},D.apply(this,arguments)}function q(t,n){if(t==null)return{};var l={},a=Object.keys(t),r,o;for(o=0;o<a.length;o++)r=a[o],!(n.indexOf(r)>=0)&&(l[r]=t[r]);return l}var nt=_e("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),K=Y((t,n)=>{var l,a,{placement:r="left"}=t,o=q(t,["placement"]),i=je(),c=i.field,p=r==="left"?"insetStart":"insetEnd",s={[p]:"0",width:(l=c==null?void 0:c.height)!=null?l:c==null?void 0:c.h,height:(a=c==null?void 0:c.height)!=null?a:c==null?void 0:c.h,fontSize:c==null?void 0:c.fontSize};return d.exports.createElement(nt,D({ref:n,__css:s},o))});K.id="InputElement";var ge=Y((t,n)=>{var{className:l}=t,a=q(t,["className"]),r=me("chakra-input__left-element",l);return d.exports.createElement(K,D({ref:n,placement:"left",className:r},a))});ge.id="InputLeftElement";var he=Y((t,n)=>{var{className:l}=t,a=q(t,["className"]),r=me("chakra-input__right-element",l);return d.exports.createElement(K,D({ref:n,placement:"right",className:r},a))});he.id="InputRightElement";const lt=({})=>{const[t]=Be("(min-width: 1280px)"),[n,l]=d.exports.useState(!0);return e.createElement(e.Fragment,null,t&&e.createElement(ie,{w:"full",p:"30px",display:n?"block":"none"},e.createElement(v,{spacing:"32px",position:"relative"},e.createElement(De,{src:"src/assets/png/car with bg-1@2x.png",w:["110px"]}),e.createElement(M,{icon:J,boxSize:6,position:"absolute",right:"-2",top:"-2",_active:{bg:"autoGrey.400"},onClick:()=>l(!1)}),e.createElement(b,{alignItems:"flex-start"},e.createElement(R,{fontSize:"16px"},"Certified Car"),e.createElement(I,{fontSize:"14px",lineHeight:"24px",opacity:"63%"},"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, magnam deleniti voluptatum officiis tempore aperiam quasi error hic reiciendis facilis dicta saepe quam vel ex tempora impedit accusamus blanditiis nisi? aperiam quasi error accusamus blanditiis nisi?")))))},W=p=>{var s=p,{active:t=!1,minW:n="1px",minH:l="1px",w:a="30px",h:r="30px",px:o="0px",children:i}=s,c=C(s,["active","minW","minH","w","h","px","children"]);return e.createElement(xe,h({fontWeight:"light",minW:n,minH:l,w:a,h:r,px:o,borderRadius:"100px",bg:t?"autoOrange.500":"transparent",color:t?"#fff":"#000",_hover:{bg:t?"autoOrange.500":"transparent"},_active:{bg:"autoOrange.300"}},c),i)},at=({activePage:t,totalPages:n,onChange:l,paginNumbers:a})=>{const{isMobile:r,isTablet:o,isDesktop:i}=P(),[c,p]=d.exports.useState([]),[s,f]=d.exports.useState([]),[u,k]=d.exports.useState([]),y=c.length===1,m=s.length===1;let g=3;r||(g=5);let x=3;return o&&(x=5),i&&(x=10),d.exports.useEffect(()=>{t===x?p(a.slice(0,x+1)):t>x?p([1]):p(a.slice(0,x)),t>x&&t<=n-x?k(a.slice(t-Math.floor(g/2)-1,t+Math.floor(g/2))):k([]),t===n-x+1?f(a.slice(n-x-1,n)):t>n-x?f(a.slice(n-x,n)):f([n]),a.length<x+3&&(p([...a]),k([]),f([]))},[t,n]),e.createElement(e.Fragment,null,c.map(E=>e.createElement(W,{key:E,onClick:()=>l(E),active:t===E},e.createElement(R,{fontSize:"18px",fontWeight:"light"},E))),e.createElement(I,{display:y?"block":"none"},"..."),u.map(E=>e.createElement(W,{key:E,onClick:()=>l(E),active:t===E},e.createElement(R,{fontSize:"18px",fontWeight:"light"},E))),e.createElement(I,{display:m?"block":"none"},"..."),s.map(E=>e.createElement(W,{key:E,onClick:()=>l(E),active:t===E},e.createElement(R,{fontSize:"18px",fontWeight:"light"},E))))},rt=({activePage:t,totalPages:n=0,onChange:l})=>{const a=[...Array(n).keys()].map(r=>r+1);return e.createElement(v,{pt:"18px",pb:"18px",spacing:["1","2"],maxW:"100%",flexWrap:"wrap"},e.createElement(M,{variant:"ghost",bg:"transparent",icon:Xe,disabled:t===1,onClick:()=>l(t-1),boxSize:"6",_active:{bg:"autoGrey.400"}}),e.createElement(at,{activePage:t,totalPages:n,onChange:l,paginNumbers:a}),e.createElement(M,{variant:"ghost",bg:"transparent",icon:Je,fill:"#000",boxSize:"6",disabled:t===n,onClick:()=>l(t+1),_active:{bg:"autoGrey.400"}}))},ot=l=>{var a=l,{children:t}=a,n=C(a,["children"]);return e.createElement(pe,h({gridTemplateColumns:["1fr","1fr 1fr","repeat(3, 1fr)","repeat(4, 1fr)"],spacing:"4",w:"full"},n),t)},st=l=>{var a=l,{children:t}=a,n=C(a,["children"]);return e.createElement(ie,h({bg:["transparent","autoBlue.400"],p:["4",null,"16px"],w:"full",minH:"auto"},n),t)};function ct(){return new URLSearchParams(ve().search)}const it=ee({displayName:"CloseOutlineIcon",viewBox:"0 0 49 50",path:e.createElement(e.Fragment,null,e.createElement("g",{id:"Rectangle_160","data-name":"Rectangle 160",fill:"#fff",stroke:"#000","stroke-width":"2"},e.createElement("rect",{width:"49",height:"50",rx:"8",stroke:"none"}),e.createElement("rect",{x:"1",y:"1",width:"47",height:"48",rx:"7",fill:"none"})),e.createElement("path",{id:"close_icon","data-name":"close icon",d:"M25.523,9.323l-1.8-1.8-7.2,7.2-7.2-7.2-1.8,1.8,7.2,7.2-7.2,7.2,1.8,1.8,7.2-7.2,7.2,7.2,1.8-1.8-7.2-7.2Z",transform:"translate(7.476 8.477)"})," ")}),pt=ee({displayName:"FiltersIcon",viewBox:"0 0 61 62",path:e.createElement(e.Fragment,null,e.createElement("g",{id:"Rectangle_160","data-name":"Rectangle 160",fill:"#fff",stroke:"#000",strokeWidth:"2"},e.createElement("rect",{width:"61",height:"62",rx:"8",stroke:"none"}),e.createElement("rect",{x:"1",y:"1",width:"59",height:"60",rx:"7",fill:"none"})),e.createElement("g",{id:"Group_131","data-name":"Group 131",transform:"translate(19 19)"},e.createElement("path",{id:"Path_454","data-name":"Path 454",d:"M0,0H24V24H0Z",fill:"none"}),e.createElement("path",{id:"Path_455","data-name":"Path 455",d:"M6.17,18a3,3,0,0,1,5.66,0H22v2H11.83a3,3,0,0,1-5.66,0H2V18Zm6-7a3,3,0,0,1,5.66,0H22v2H17.83a3,3,0,0,1-5.66,0H2V11Zm-6-7a3,3,0,0,1,5.66,0H22V6H11.83A3,3,0,0,1,6.17,6H2V4ZM9,6A1,1,0,1,0,8,5,1,1,0,0,0,9,6Zm6,7a1,1,0,1,0-1-1A1,1,0,0,0,15,13ZM9,20a1,1,0,1,0-1-1A1,1,0,0,0,9,20Z"})))}),mt=c=>{var p=c,{isOpen:t,onToggle:n,p:l="8px 8px 8px 0px",bg:a="#fff",direction:r="row",borderRadius:o="md"}=p,i=C(p,["isOpen","onToggle","p","bg","direction","borderRadius"]);return e.createElement(G,h({p:l,bg:a,direction:r,borderRadius:o,alignItems:"center",pl:"0px"},i),e.createElement(U,{placeholder:"Brand"}),e.createElement(j,{height:["40px",null,null,"30px"],borderColor:"gray.300"}),e.createElement(U,{placeholder:"Model"}),e.createElement(j,{height:["40px",null,null,"30px"],borderColor:"gray.300"}),e.createElement(U,{placeholder:"Year"}),e.createElement(v,{spacing:{md:"0",xl:"2"}},e.createElement(Ee,{w:{md:"140px",lg:"144px","2xl":"211px"},ml:[null,null,"0px","16px"]}),t?e.createElement(M,{icon:it,boxSize:[null,null,"10",null,"10","12"],onClick:n,p:"0",pr:[null,null,"0","0","-4"],pl:[null,null,"2","12px"]}):e.createElement(M,{icon:pt,boxSize:[null,null,"10",null,"10","12"],onClick:n,pr:[null,null,"0","0","-4"],pl:[null,null,"2","12px"]})))},S=r=>{var o=r,{onClick:t,label:n,textOpacity:l="0.5"}=o,a=C(o,["onClick","label","textOpacity"]);return e.createElement(v,h({h:["44px",null,"40px",null,null,"62px"],w:"full",bg:"white",borderRadius:"8px",onClick:t,pl:"4",pr:"2",justify:"space-between"},a),e.createElement(I,{opacity:l,fontSize:["16px",null,null,"18px",null,"24px"]},n),e.createElement(Re,{as:fe,boxSize:"5",opacity:l}))},ut=({brands:t,isOpen:n,onClose:l})=>{const a=d.exports.useRef(null),[r,o]=d.exports.useState(!0),[i,c]=d.exports.useState(""),[p,s]=d.exports.useState(""),f=z();d.exports.useEffect(()=>{t&&s(t[0])},[t]);const k=t.reduce((m,g)=>m.length===0||m[m.length-1][0]!==g[0]?m.concat(g[0]).concat(g):m.concat(g),[]).filter(m=>m.toLocaleLowerCase().includes(i.toLocaleLowerCase())),y=tt({onSwipedDown:()=>{l()}});return e.createElement(te,{isOpen:n,onClose:l,initialFocusRef:a,placement:"bottom"},e.createElement(ne,null),e.createElement(le,{h:"80%",borderTopRadius:"16px",p:"32px 48px 16px 48px"},e.createElement(ae,N(h({},y),{borderTopRadius:"16px",p:"0"})," ",e.createElement(b,{spacing:"4",pb:"4",bg:"white",zIndex:"10",w:"full"},e.createElement(Te,{w:"full"},e.createElement(ge,{children:e.createElement(Pe,{fill:"autoGrey.400"})}),e.createElement(he,{children:e.createElement(Me,{w:"full",h:"full"},e.createElement(M,{icon:J,onClick:()=>{c("")},bg:"transparent"})),display:i?"block":"none"}),e.createElement(O,{placeholder:"Search",borderRadius:"8px",variant:"filled",pl:"40px",value:i,onChange:m=>c(m.target.value),onFocus:()=>{o(!1)},onBlur:()=>{o(!0)}})),e.createElement(qe,{mainText:"Top Brands",mainFontSize:"16px",display:r?"block":"none"}),e.createElement(Ke,{cardCount:5,w:"full",display:r?"grid":"none"},e.createElement(A,{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png",maxW:"50px",maxH:"50px",imageWidth:"20px"}),e.createElement(A,{image:"https://i.pinimg.com/originals/03/e1/b0/03e1b0207489ad32d10b9a860ffc6623.png",maxW:"50px",maxH:"50px",imageWidth:"20px"}),e.createElement(A,{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png",maxW:"50px",maxH:"50px",imageWidth:"20px"}),e.createElement(A,{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png",maxW:"50px",maxH:"50px",imageWidth:"20px"}),e.createElement(A,{image:"https://i.pinimg.com/originals/03/e1/b0/03e1b0207489ad32d10b9a860ffc6623.png",maxW:"50px",maxH:"50px",imageWidth:"20px"})))),e.createElement(re,{p:"0"},e.createElement(b,{alignItems:"flex-start",w:"full",overflowY:"scroll",spacing:"2",pt:"4"},k.map(m=>e.createElement(Z,{key:m,p:"0"},m.length===1?e.createElement(R,{fontSize:"16px",fontWeight:"light"},m,e.createElement($e,{w:"40px",mt:"6px",borderColor:"autoGrey.400"})):e.createElement(V,{onClick:()=>s(m),color:p===m?"autoOrange.500":"#000",fontSize:"16px"},m))))),e.createElement(oe,{p:"16px 0"}," ",e.createElement(se,{ref:a,p:"0.5",onClick:()=>{f(Le(p)),f(Ne(p)),l()}},"Apply"))))},be=i=>{var c=i,{isOpen:t,onClose:n,submit:l,header:a,children:r}=c,o=C(c,["isOpen","onClose","submit","header","children"]);return e.createElement(te,h({isOpen:t,onClose:n,placement:"bottom"},o),e.createElement(ne,null),e.createElement(le,{maxH:"80%",borderTopRadius:"16px",p:"32px 48px 0px 48px"},e.createElement(ae,{p:"0"},a||null),e.createElement(re,{p:"3px"},r),e.createElement(oe,{p:"16px 0"},e.createElement(se,{onClick:l},"Apply"))))},dt=({isOpen:t,onClose:n})=>{const{transsmision:l}=T(s=>s.carFilterReducer),[a,r]=d.exports.useState(l),o=z(),i=["Manual","Automatic","CVT"];d.exports.useEffect(()=>{r(l)},[]);const c=s=>{if(!a.includes(s))r([...a,s]);else{const f=a.filter(u=>u!=s);r(f)}},p=()=>{o(Ge(a)),n()};return e.createElement(be,{isOpen:t,onClose:n,submit:p},e.createElement(b,{w:"full",alignItems:"flex-start"},i.map(s=>e.createElement(We,{colorScheme:"autoOrange",defaultChecked:l==null?void 0:l.includes(s),onChange:f=>{f.preventDefault(),c(s)},key:s},s))))},ft=({isOpen:t,onClose:n})=>{const{engineFrom:l,engineTo:a}=T(u=>u.carFilterReducer),[r,o]=d.exports.useState(l||.5),[i,c]=d.exports.useState(a||.5),p=z(),s=(u,k)=>{const y=[];for(let m=u;m<=k;m=parseFloat(((m*100+10)/100).toFixed(1)))y.push(m);return y},f=()=>{p(Ve(r)),p(Ye(i)),n()};return e.createElement(be,{isOpen:t,onClose:n,submit:f},e.createElement(v,{h:"full",divider:e.createElement(Ie,{borderColor:"autoGrey.400"})},e.createElement(b,{h:"full",w:"full",spacing:"4"},e.createElement(R,{fontSize:"16px",fontWeight:"600"},"From"),e.createElement(b,{overflowY:"scroll",h:"full",w:"full",spacing:"4"},s(.5,6).map(u=>e.createElement(V,{fontSize:"16px",key:u,lineHeight:"21px",w:"full",color:r===u?"autoOrange.400":"#000",onClick:()=>{o(u),u>=i&&c(u)}},u.toFixed(1))))),e.createElement(b,{h:"full",w:"full",spacing:"4"},e.createElement(R,{fontSize:"16px",fontWeight:"600"},"To"),e.createElement(b,{overflowY:"scroll",h:"full",w:"full",spacing:"4"},s(.5,6).map(u=>e.createElement(V,{fontSize:"16px",key:u,lineHeight:"21px",w:"full",color:i===u?"autoOrange.400":"#000",onClick:()=>{c(u),u<=r&&o(u)}},u.toFixed(1)))))))},Et=c=>{var p=c,{isKeyboardActive:t,children:n,w:l="full",bottom:a="10px",pr:r="4",pl:o="4"}=p,i=C(p,["isKeyboardActive","children","w","bottom","pr","pl"]);return e.createElement(e.Fragment,null,t?e.createElement(Z,h({w:l,position:"fixed",bottom:a,pr:r,pl:o,zIndex:"modal"},i),n):e.createElement(Z,h({w:l},i),n))},xt=()=>{const{brand:t}=T(B=>B.carFilterReducer),[n,l]=d.exports.useState("LARI"),a=z(),{isOpen:r,onClose:o,onOpen:i}=H(),{isOpen:c,onClose:p,onOpen:s}=H(),{isOpen:f,onClose:u,onOpen:k}=H(),{isOpen:y,onToggle:m}=H(),{models:g}=T(B=>B.carsReducer),{brands:x}=T(B=>B.carsReducer),[E,F]=d.exports.useState(!1),[L,Ce]=d.exports.useState(""),Se=()=>{g.length!==0&&i()};return e.createElement(G,null,e.createElement(S,{onClick:i,label:t||"Brand"}),e.createElement(ut,{brands:x,isOpen:r,onClose:o}),e.createElement(S,{onClick:Se,label:"Models",textOpacity:g.length!==0?"0.5":"0.2"}),e.createElement(v,{borderRadius:"8px",bg:"white",spacing:0,flex:"1",p:"2px"},e.createElement(O,{pr:"2",placeholder:"Year from",type:"number",value:L,onChange:B=>Ce(B.currentTarget.value),onFocus:()=>F(!0),onBlur:()=>{F(!1),a(L?ue(L):ue(null))}}),e.createElement(j,{height:"30px"}),e.createElement(O,{placeholder:"Year to",type:"number",onFocus:()=>F(!0),onBlur:()=>F(!1)})),e.createElement(v,{justify:"space-between"},e.createElement(v,{borderRadius:"8px",bg:"white",spacing:0,flex:"1",p:"2px"},e.createElement(O,{pr:"2",placeholder:"Price from",type:"number",onFocus:()=>F(!0),onBlur:()=>F(!1)}),e.createElement(j,{height:"30px"}),e.createElement(O,{placeholder:"Price to",type:"number",onFocus:()=>F(!0),onBlur:()=>F(!1)})),e.createElement(v,{borderRadius:"8px",bg:"white",spacing:"2px",flexBasis:"30%",justify:"space-between",p:"7px"},e.createElement(W,{onClick:()=>l("LARI"),active:n==="LARI"},"\u10DA"),e.createElement(W,{onClick:()=>l("USD"),active:n==="USD"},"$"),e.createElement(W,{onClick:()=>l("EUR"),active:n==="EUR"},"\u20AC"))),e.createElement(ce,{in:y},e.createElement(b,null,e.createElement(S,{onClick:s,label:"Engine"}),e.createElement(ft,{onClose:p,isOpen:c}),e.createElement(S,{onClick:()=>console.log("cliecked"),label:"Mileage"}),e.createElement(S,{onClick:()=>console.log("cliecked"),label:"Condition"}),e.createElement(S,{onClick:()=>console.log("cliecked"),label:"Type"}),e.createElement(S,{onClick:()=>console.log("cliecked"),label:"Location"}),e.createElement(S,{onClick:k,label:"Transmission"}),e.createElement(dt,{isOpen:f,onClose:u}),e.createElement(S,{onClick:()=>console.log("cliecked"),label:"Drive"}),e.createElement(S,{onClick:()=>console.log("cliecked"),label:"Fuel"}))),e.createElement(b,{pt:"2",spacing:"3"},e.createElement(Et,{isKeyboardActive:E},e.createElement(Ee,{w:"full"})),e.createElement(xe,{variant:"link",onClick:m,bg:"transparent"},e.createElement(I,{color:"#000",display:E?"none":"block",lineHeight:"19px"},y?"See less filter":"See more filter"))))},w=s=>{var f=s,{color:t="#a6a6a6",bg:n="white",opacity:l="0.5",border:a="none",fontSize:r=[null,null,null,"16px",null,"20px"],h:o=["44px",null,"40px",null,null,"59px"],arrowColor:i="#a6a6a6",children:c}=f,p=C(f,["color","bg","opacity","border","fontSize","h","arrowColor","children"]);return e.createElement(Oe,h({color:t,bg:n,border:a,fontSize:r,h:o,icon:e.createElement(fe,{fill:i})},p)," ",c)},gt=a=>{var r=a,{isOpen:t,onToggle:n}=r,l=C(r,["isOpen","onToggle"]);const{isMobile:o}=P();return e.createElement(G,N(h({},l),{spacing:"0"}),o&&e.createElement(xt,null),!o&&e.createElement(mt,{isOpen:t,onToggle:n}),!o&&e.createElement(ce,{in:t},e.createElement(pe,{templateColumns:[null,"1fr 1fr","repeat(3, 1fr)","repeat(5, 1fr)"],spacingX:"4",spacingY:"2",mt:["2","4",null,"4",null,"24px"]},e.createElement(w,{placeholder:"Engine"}),e.createElement(w,{placeholder:"Engine"}),e.createElement(w,{placeholder:"Mileage"}),e.createElement(w,{placeholder:"Condition"}),e.createElement(w,{placeholder:"Type"}),e.createElement(w,{placeholder:"Location"}),e.createElement(w,{placeholder:"Transmission"}),e.createElement(w,{placeholder:"Drive"}),e.createElement(w,{placeholder:"Fuel"}),e.createElement(w,{placeholder:"Cylinder"}))))},ht=()=>{const{isOpen:t,onToggle:n}=H(),{cars:l,fethingCars:a}=T(s=>s.carsReducer),{activePage:r,totalPages:o}=T(s=>s.carsPagination),i=z(),c=Fe(),p=ct();return d.exports.useEffect(()=>{let s=Number(p.get("page"))||1;i(de(s)),i(Ze())},[]),d.exports.useEffect(()=>{c.push({pathname:"/catalog",search:`?page=${r}`}),i(Ue(r)),window.scrollTo(0,0)},[r]),e.createElement(He,{pt:["4","6",null,"8","16"]},e.createElement(b,{w:"full",spacing:["66px"]},e.createElement(st,null,e.createElement(gt,{isOpen:t,onToggle:n})),e.createElement(lt,null),a?e.createElement(b,{h:"100vh",w:"full"},e.createElement(et,null)):e.createElement(ot,null,l.map((s,f)=>e.createElement(ze,{justify:"center",key:f},e.createElement(Qe,{car:s})))),e.createElement(rt,{totalPages:o,activePage:r,onChange:s=>i(de(s))})))},bt=()=>e.createElement(Ae,null,e.createElement(ht,null)),zt=()=>e.createElement(bt,null);export{zt as CatalogPage,zt as default};
