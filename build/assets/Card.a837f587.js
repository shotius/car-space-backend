var v=Object.defineProperty;var o=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;var i=(e,t,r)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))f.call(t,r)&&i(e,r,t[r]);if(o)for(var r of o(t))s.call(t,r)&&i(e,r,t[r]);return e};var n=(e,t)=>{var r={};for(var a in e)f.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&o)for(var a of o(e))t.indexOf(a)<0&&s.call(e,a)&&(r[a]=e[a]);return r};import{R as C}from"./vendor.576a7237.js";import{f as R}from"./index.ff9cafc7.js";const u=b=>{var c=b,{minW:e,minH:t,bg:r="white",p:a="2.5",borderRadius:p="8px",bgActive:x,children:d}=c,j=n(c,["minW","minH","bg","p","borderRadius","bgActive","children"]);return C.createElement(R,m({minW:e,minH:t,bg:r,p:a,borderRadius:p,_active:{bg:`${x}`}},j),d)};export{u as C};
