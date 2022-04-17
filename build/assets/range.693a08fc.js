var P=Object.defineProperty,M=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var S=(t,a,e)=>a in t?P(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,f=(t,a)=>{for(var e in a||(a={}))A.call(a,e)&&S(t,e,a[e]);if(d)for(var e of d(a))k.call(a,e)&&S(t,e,a[e]);return t},C=(t,a)=>M(t,R(a));var x=(t,a)=>{var e={};for(var o in t)A.call(t,o)&&a.indexOf(o)<0&&(e[o]=t[o]);if(t!=null&&d)for(var o of d(t))a.indexOf(o)<0&&k.call(t,o)&&(e[o]=t[o]);return e};import{_ as L,j as i,O as H,e as b,B as _,a0 as T,r as w,a as v,b as I,a4 as F,f as B,aE as j,aF as E,aG as z,c as N,o as W,V as Z,T as G,L as Q,R as V,I as q,aH as J,aI as K,aJ as y,aK as U,aL as Y,k as $}from"./index.a179b8fa.js";import{c as X,T as tt}from"./TextSecondary.21a5048f.js";const at=L({displayName:"HeartFilled",viewBox:"0 0 16 15",path:i(H,{children:i("path",{id:"Icon_ionic-ios-heart","data-name":"Icon ionic-ios-heart",d:"M15.067,3.938h-.038a4.4,4.4,0,0,0-3.654,1.95,4.4,4.4,0,0,0-3.654-1.95H7.683A4.294,4.294,0,0,0,3.375,8.175a8.984,8.984,0,0,0,1.838,4.976,31.909,31.909,0,0,0,6.162,5.786,31.909,31.909,0,0,0,6.162-5.786,8.984,8.984,0,0,0,1.838-4.976A4.294,4.294,0,0,0,15.067,3.938Z",transform:"translate(-3.375 -3.938)",fill:"#DC1864"})})}),et=L({displayName:"HeartIcon",viewBox:"0 0 16 15",path:i(H,{children:i("path",{id:"Icon_material-favorite-border","data-name":"Icon material-favorite-border",d:"M14.6,4.5A4.75,4.75,0,0,0,11,6.208,4.75,4.75,0,0,0,7.4,4.5,4.406,4.406,0,0,0,3,9c0,3.09,2.72,5.608,6.84,9.433L11,19.5l1.16-1.079C16.28,14.6,19,12.086,19,9A4.406,4.406,0,0,0,14.6,4.5ZM11.08,17.211l-.08.082-.08-.082C7.112,13.688,4.6,11.358,4.6,9A2.764,2.764,0,0,1,7.4,6.135a3.127,3.127,0,0,1,2.856,1.929h1.5A3.108,3.108,0,0,1,14.6,6.135,2.764,2.764,0,0,1,17.4,9C17.4,11.358,14.888,13.688,11.08,17.211Z",transform:"translate(-3 -4.5)"})})}),ot=c=>{var s=c,{bg:t="white",_activeBg:a={bg:"white"},_hoverBg:e={bg:"white"},icon:o,fill:p,boxSize:r,children:l}=s,n=x(s,["bg","_activeBg","_hoverBg","icon","fill","boxSize","children"]);return b(_,C(f({bg:t,onClick:n.onClick,_active:{bg:a},_hover:{bg:e}},n),{children:[i(T,{as:o,boxSize:r,fill:p}),l]}))},st=p=>{var r=p,{boxSize:t=6,carId:a,buttonInactiveColor:e="autoGrey.500"}=r,o=x(r,["boxSize","carId","buttonInactiveColor"]);const[l,n]=w.exports.useState(!1),c=v(),{favouriteCarIds:s,likingCar:m,isAuthenticated:u}=I(h=>h.userInfoSlice),{isDesktop:g}=F(),D=B();return w.exports.useEffect(()=>{(s==null?void 0:s.length)&&s.includes(a)?n(!0):n(!1)},[s]),i(ot,f({icon:l?at:et,boxSize:t,bg:l?"autoOrange.100":e,onClick:h=>{h.stopPropagation&&h.stopPropagation(),u&&n(!l),u?m||c(j(a)).unwrap().then(()=>n(!0)).catch(O=>{n(!1),D({title:O,position:"top",duration:2e3,status:"error"})}):c(g?E():z())},_hover:{fill:"autoOrange.600",bg:"autoOrange.200"}},o))},ct=({id:t,model:a,year:e})=>{const{role:o}=I(c=>c.userInfoSlice),{catalogQuery:p}=I(c=>c.globalAppState),r=v(),l=N(),n=B();return b(W,{justifyContent:"space-between",w:"full",children:[b(Z,{alignItems:"flex-start",spacing:"0",children:[i(G,{fontFamily:"Roboto Medium",fontSize:"18px",maxW:["200px","150px"],noOfLines:1,_hover:{textDecor:"underline"},children:i(Q,{to:`/car/${t}`,children:X(a)})}),i(tt,{opacity:"50%",children:e||"Year: -"})]}),(o==null?void 0:o.toLocaleLowerCase())===V.ADMIN.toLocaleLowerCase()?i(q,{icon:i(J,{}),"aria-label":"delete car",onClick:c=>{c.stopPropagation&&c.stopPropagation(),r(K(t)).unwrap().then(()=>{const s=new URLSearchParams(p);r(y(s)).unwrap().then(m=>{const u=s.get("page");if(!m.length&&u&&u!=="1"){const g=parseInt(u)-1||"1";s.set("page",g.toString()),r(U(g)),r(Y(s.toString())),l.push({pathname:"/catalog",search:s.toString()}),r(y(s))}}),n({title:"Deleted successfully",position:"top",status:"success",duration:2e3})}).catch(s=>{$(s)&&n({title:s.message,position:"top",status:"error",duration:2e3}),n({title:"Could not delelete the card",position:"top",status:"error",duration:2e3})})}}):i(st,{h:"40px",w:"36px",boxSize:5,carId:t})]})},lt=c=>{var s=c,{active:t=!1,minW:a="1px",minH:e="1px",w:o="30px",h:p="30px",px:r="0px",children:l}=s,n=x(s,["active","minW","minH","w","h","px","children"]);return i(_,C(f({fontWeight:"light",minW:a,minH:e,w:o,h:p,px:r,borderRadius:"100px",bg:t?"autoOrange.500":"transparent",color:t?"#fff":"#000",_hover:{bg:t?"autoOrange.500":"transparent"},_active:{bg:"autoOrange.300"}},n),{children:l}))},pt=(t,a)=>{const e=Array(a-t+1).fill(0),o=t;return e.map((p,r)=>r+o)};export{st as B,ct as C,lt as a,ot as b,pt as r};