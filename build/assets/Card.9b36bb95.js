var v=Object.defineProperty;var o=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;var m=(e,t,r)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,n=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&m(e,r,t[r]);if(o)for(var r of o(t))i.call(t,r)&&m(e,r,t[r]);return e};var f=(e,t)=>{var r={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&o)for(var a of o(e))t.indexOf(a)<0&&i.call(e,a)&&(r[a]=e[a]);return r};import{R as C}from"./vendor.576a7237.js";import{k as R}from"./index.c7e2f3f1.js";const l=b=>{var s=b,{minW:e,minH:t,bg:r="white",p:a="2.5",borderRadius:p="8px",bgActive:x,children:d}=s,j=f(s,["minW","minH","bg","p","borderRadius","bgActive","children"]);return C.createElement(R,n({minW:e,minH:t,bg:r,p:a,borderRadius:p,_active:{bg:`${x}`}},j),d)};export{l as C};
