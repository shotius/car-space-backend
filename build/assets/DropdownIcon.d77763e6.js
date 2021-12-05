var B=Object.defineProperty;var f=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var C=(e,t,r)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,b=(e,t)=>{for(var r in t||(t={}))w.call(t,r)&&C(e,r,t[r]);if(f)for(var r of f(t))E.call(t,r)&&C(e,r,t[r]);return e};var g=(e,t)=>{var r={};for(var o in e)w.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&f)for(var o of f(e))t.indexOf(o)<0&&E.call(e,o)&&(r[o]=e[o]);return r};import{r as v,R as a,L}from"./vendor.506dd9e8.js";import{f as j,J as A,o as D,c as H,a as F,d as N,e as T,a7 as P,a1 as R,a3 as z}from"./index.ce29a962.js";import{q as x,I as M,u as O,H as Z,V as G,b as V,h as q}from"./PublicLayout.69ee19e4.js";import{B as J}from"./button.c3901463.js";function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},u.apply(this,arguments)}function W(e,t){if(e==null)return{};var r={},o=Object.keys(e),n,i;for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&(r[n]=e[n]);return r}var oe=j((e,t)=>{var r=A("Divider",e),{borderLeftWidth:o,borderBottomWidth:n,borderTopWidth:i,borderRightWidth:c,borderWidth:s,borderStyle:d,borderColor:h}=r,l=W(r,["borderLeftWidth","borderBottomWidth","borderTopWidth","borderRightWidth","borderWidth","borderStyle","borderColor"]),p=D(e),{className:m,orientation:y="horizontal",__css:S}=p,I=W(p,["className","orientation","__css"]),k={vertical:{borderLeftWidth:o||c||s||"1px",height:"100%"},horizontal:{borderBottomWidth:n||i||s||"1px",width:"100%"}};return v.exports.createElement(H.hr,u({ref:t,"aria-orientation":y},I,{__css:u({},l,{border:"0",borderColor:h,borderStyle:d},k[y],S),className:F("chakra-divider",m)}))});const K=x({displayName:"HeartFilled",viewBox:"0 0 16 15",path:a.createElement(a.Fragment,null,a.createElement("path",{id:"Icon_ionic-ios-heart","data-name":"Icon ionic-ios-heart",d:"M15.067,3.938h-.038a4.4,4.4,0,0,0-3.654,1.95,4.4,4.4,0,0,0-3.654-1.95H7.683A4.294,4.294,0,0,0,3.375,8.175a8.984,8.984,0,0,0,1.838,4.976,31.909,31.909,0,0,0,6.162,5.786,31.909,31.909,0,0,0,6.162-5.786,8.984,8.984,0,0,0,1.838-4.976A4.294,4.294,0,0,0,15.067,3.938Z",transform:"translate(-3.375 -3.938)",fill:"#fb5607"}))}),U=x({displayName:"HeartIcon",viewBox:"0 0 16 15",path:a.createElement(a.Fragment,null,a.createElement("path",{id:"Icon_material-favorite-border","data-name":"Icon material-favorite-border",d:"M14.6,4.5A4.75,4.75,0,0,0,11,6.208,4.75,4.75,0,0,0,7.4,4.5,4.406,4.406,0,0,0,3,9c0,3.09,2.72,5.608,6.84,9.433L11,19.5l1.16-1.079C16.28,14.6,19,12.086,19,9A4.406,4.406,0,0,0,14.6,4.5ZM11.08,17.211l-.08.082-.08-.082C7.112,13.688,4.6,11.358,4.6,9A2.764,2.764,0,0,1,7.4,6.135a3.127,3.127,0,0,1,2.856,1.929h1.5A3.108,3.108,0,0,1,14.6,6.135,2.764,2.764,0,0,1,17.4,9C17.4,11.358,14.888,13.688,11.08,17.211Z",transform:"translate(-3 -4.5)"}))}),$=d=>{var h=d,{bg:e="white",_activeBg:t={bg:"white"},_hoverBg:r={bg:"white"},icon:o,fill:n,boxSize:i,children:c}=h,s=g(h,["bg","_activeBg","_hoverBg","icon","fill","boxSize","children"]);return a.createElement(J,b({bg:e,onClick:s.onClick,_active:{bg:t},_hover:{bg:r}},s),a.createElement(M,{as:o,boxSize:i,fill:n}),c)},Q=n=>{var i=n,{boxSize:e=6,lotNumber:t,buttonInactiveColor:r="autoGrey.500"}=i,o=g(i,["boxSize","lotNumber","buttonInactiveColor"]);const[c,s]=v.exports.useState(!1),d=N(),{username:h,favouriteLotNumbers:l}=T(m=>m.userInfoSlice),{isDesktop:p}=O();return v.exports.useEffect(()=>{(l==null?void 0:l.length)&&l.includes(t)?s(!0):s(!1)},[l]),a.createElement($,b({icon:c?K:U,boxSize:e,bg:c?"#FB560729":r,onClick:m=>{m.stopPropagation&&m.stopPropagation(),d(h?P(t):p?R():z())},_hover:{fill:"red",bg:"#FB560729"}},o))},_=e=>{const t=e.toLocaleLowerCase().split(" ").map(o=>o.trim()).filter(o=>o.length),r=[];return t.forEach(o=>{const n=o[0].toUpperCase()+o.slice(1);r.push(n)}),r.join(" ")},ae=({car:e})=>a.createElement(Z,{justifyContent:"space-between",w:"full"},a.createElement(G,{alignItems:"flex-start",spacing:"0"},a.createElement(V,{fontFamily:"Roboto Medium",fontSize:"18px",maxW:["200px","150px"],noOfLines:1,_hover:{textDecor:"underline"}},a.createElement(L,{to:`/car/${e==null?void 0:e.lN}`},_(e==null?void 0:e.m)," ",_(e.mG))),a.createElement(q,{opacity:"50%"},e==null?void 0:e.y)),a.createElement(Q,{h:"40px",w:"36px",boxSize:5,lotNumber:e.lN})),ne=e=>{const t=[...e.toString()].reverse().join("").match(/.{1,3}/g);return t?[...t==null?void 0:t.join(" ")].reverse():e},ie=x({displayName:"DropdownIcon",viewBox:"0 0 25 9",path:a.createElement(a.Fragment,null,a.createElement("path",{width:"10",height:"11",id:"dropdown",d:"M16.191,18.93l7.562-7.28a1.463,1.463,0,0,1,2.019,0,1.349,1.349,0,0,1,0,1.947L17.2,21.846a1.468,1.468,0,0,1-1.971.04L6.6,13.6a1.346,1.346,0,0,1,0-1.947,1.463,1.463,0,0,1,2.019,0Z",transform:"translate(-6.188 -11.246)",opacity:"1"}))});export{Q as B,ae as C,ie as D,oe as a,$ as b,_ as c,ne as t};
