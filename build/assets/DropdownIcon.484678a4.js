var j=Object.defineProperty;var f=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var W=(e,t,a)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,y=(e,t)=>{for(var a in t||(t={}))L.call(t,a)&&W(e,a,t[a]);if(f)for(var a of f(t))I.call(t,a)&&W(e,a,t[a]);return e};var w=(e,t)=>{var a={};for(var r in e)L.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&f)for(var r of f(e))t.indexOf(r)<0&&I.call(e,r)&&(a[r]=e[r]);return a};import{r as C,R as o,u as P,L as H}from"./vendor.1d447835.js";import{f as N,L as R,o as T,c as F,a as M,a0 as E,I as z,d as _,e as x,ae as O,a9 as Z,ab as U,H as Q,V,af as q,ag as k,ah as G,ai as K,aj as Y}from"./index.db40930d.js";import{B as $,u as J,a as X,h as ee,m as te,n as ae}from"./PublicLayout.36d61366.js";import{u as A}from"./use-toast.ad4ccd52.js";function b(){return b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},b.apply(this,arguments)}function D(e,t){if(e==null)return{};var a={},r=Object.keys(e),i,n;for(n=0;n<r.length;n++)i=r[n],!(t.indexOf(i)>=0)&&(a[i]=e[i]);return a}var he=N((e,t)=>{var a=R("Divider",e),{borderLeftWidth:r,borderBottomWidth:i,borderTopWidth:n,borderRightWidth:p,borderWidth:l,borderStyle:c,borderColor:s}=a,d=D(a,["borderLeftWidth","borderBottomWidth","borderTopWidth","borderRightWidth","borderWidth","borderStyle","borderColor"]),u=T(e),{className:h,orientation:g="horizontal",__css:m}=u,v=D(u,["className","orientation","__css"]),B={vertical:{borderLeftWidth:r||p||l||"1px",height:"100%"},horizontal:{borderBottomWidth:i||n||l||"1px",width:"100%"}};return C.exports.createElement(F.hr,b({ref:t,"aria-orientation":g},v,{__css:b({},d,{border:"0",borderColor:s,borderStyle:c},B[g],m),className:M("chakra-divider",h)}))});const re=E({displayName:"HeartFilled",viewBox:"0 0 16 15",path:o.createElement(o.Fragment,null,o.createElement("path",{id:"Icon_ionic-ios-heart","data-name":"Icon ionic-ios-heart",d:"M15.067,3.938h-.038a4.4,4.4,0,0,0-3.654,1.95,4.4,4.4,0,0,0-3.654-1.95H7.683A4.294,4.294,0,0,0,3.375,8.175a8.984,8.984,0,0,0,1.838,4.976,31.909,31.909,0,0,0,6.162,5.786,31.909,31.909,0,0,0,6.162-5.786,8.984,8.984,0,0,0,1.838-4.976A4.294,4.294,0,0,0,15.067,3.938Z",transform:"translate(-3.375 -3.938)",fill:"#fb5607"}))}),oe=E({displayName:"HeartIcon",viewBox:"0 0 16 15",path:o.createElement(o.Fragment,null,o.createElement("path",{id:"Icon_material-favorite-border","data-name":"Icon material-favorite-border",d:"M14.6,4.5A4.75,4.75,0,0,0,11,6.208,4.75,4.75,0,0,0,7.4,4.5,4.406,4.406,0,0,0,3,9c0,3.09,2.72,5.608,6.84,9.433L11,19.5l1.16-1.079C16.28,14.6,19,12.086,19,9A4.406,4.406,0,0,0,14.6,4.5ZM11.08,17.211l-.08.082-.08-.082C7.112,13.688,4.6,11.358,4.6,9A2.764,2.764,0,0,1,7.4,6.135a3.127,3.127,0,0,1,2.856,1.929h1.5A3.108,3.108,0,0,1,14.6,6.135,2.764,2.764,0,0,1,17.4,9C17.4,11.358,14.888,13.688,11.08,17.211Z",transform:"translate(-3 -4.5)"}))}),ne=c=>{var s=c,{bg:e="white",_activeBg:t={bg:"white"},_hoverBg:a={bg:"white"},icon:r,fill:i,boxSize:n,children:p}=s,l=w(s,["bg","_activeBg","_hoverBg","icon","fill","boxSize","children"]);return o.createElement($,y({bg:e,onClick:l.onClick,_active:{bg:t},_hover:{bg:a}},l),o.createElement(z,{as:r,boxSize:n,fill:i}),p)},se=i=>{var n=i,{boxSize:e=6,carId:t,buttonInactiveColor:a="autoGrey.500"}=n,r=w(n,["boxSize","carId","buttonInactiveColor"]);const[p,l]=C.exports.useState(!1),c=_(),{username:s,favouriteCarIds:d,likingCar:u}=x(m=>m.userInfoSlice),{isDesktop:h}=J(),g=A();return C.exports.useEffect(()=>{(d==null?void 0:d.length)&&d.includes(t)?l(!0):l(!1)},[d]),o.createElement(ne,y({icon:p?re:oe,boxSize:e,bg:p?"#FB560729":a,disabled:u,onClick:m=>{m.stopPropagation&&m.stopPropagation(),s?c(O(t)).unwrap().catch(v=>g({title:v,position:"top",duration:2e3,status:"error"})):c(h?Z():U())},_hover:{fill:"red",bg:"#FB560729"}},r))},ie=e=>{const t=e.toLocaleLowerCase().split(" ").map(r=>r.trim()).filter(r=>r.length),a=[];return t.forEach(r=>{const i=r[0].toUpperCase()+r.slice(1);a.push(i)}),a.join(" ")};var S;(function(e){e.ADMIN="admin",e.DEALER="dealer",e.USER="user"})(S||(S={}));const me=({id:e,model:t,year:a})=>{const{role:r}=x(c=>c.userInfoSlice),{catalogQuery:i}=x(c=>c.globalAppState),n=_(),p=P(),l=A();return o.createElement(Q,{justifyContent:"space-between",w:"full"},o.createElement(V,{alignItems:"flex-start",spacing:"0"},o.createElement(X,{fontFamily:"Roboto Medium",fontSize:"18px",maxW:["200px","150px"],noOfLines:1,_hover:{textDecor:"underline"}},o.createElement(H,{to:`/car/${e}`},ie(t))),o.createElement(ee,{opacity:"50%"},a||"Year: -")),(r==null?void 0:r.toLocaleLowerCase())===S.ADMIN.toLocaleLowerCase()?o.createElement(te,{icon:o.createElement(ae,null),"aria-label":"delete car",onClick:c=>{c.stopPropagation&&c.stopPropagation(),n(q(e)).unwrap().then(()=>{const s=new URLSearchParams(i);n(k(s)).unwrap().then(d=>{const u=s.get("page");if(!d.length&&u&&u!=="1"){const h=parseInt(u)-1||"1";s.set("page",h.toString()),n(G(h)),n(K(s.toString())),p.push({pathname:"/catalog",search:s.toString()}),n(k(s))}}),l({title:"Deleted successfully",position:"top",status:"success",duration:2e3})}).catch(s=>{Y(s)&&l({title:s.message,position:"top",status:"error",duration:2e3}),l({title:"Could not delelete the card",position:"top",status:"error",duration:2e3})})}}):o.createElement(se,{h:"40px",w:"36px",boxSize:5,carId:e}))},ge=e=>{const t=[...e.toString()].reverse().join("").match(/.{1,3}/g);return t?[...t==null?void 0:t.join(" ")].reverse():e},fe=E({displayName:"DropdownIcon",viewBox:"0 0 25 9",path:o.createElement(o.Fragment,null,o.createElement("path",{width:"10",height:"11",id:"dropdown",d:"M16.191,18.93l7.562-7.28a1.463,1.463,0,0,1,2.019,0,1.349,1.349,0,0,1,0,1.947L17.2,21.846a1.468,1.468,0,0,1-1.971.04L6.6,13.6a1.346,1.346,0,0,1,0-1.947,1.463,1.463,0,0,1,2.019,0Z",transform:"translate(-6.188 -11.246)",opacity:"1"}))});export{se as B,me as C,fe as D,he as a,ne as b,ie as c,ge as t};
