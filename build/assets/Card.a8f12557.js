var j=Object.defineProperty;var o=Object.getOwnPropertySymbols;var i=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var n=(e,t,r)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&n(e,r,t[r]);if(o)for(var r of o(t))m.call(t,r)&&n(e,r,t[r]);return e};var d=(e,t)=>{var r={};for(var a in e)i.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&o)for(var a of o(e))t.indexOf(a)<0&&m.call(e,a)&&(r[a]=e[a]);return r};import{R as v}from"./vendor.576a7237.js";import{k as C}from"./index.6b0d61f2.js";const l=R=>{var s=R,{minW:e,minH:t,bg:r="white",p:a="2.5",borderRadius:p="8px",bgActive:x,children:f}=s,b=d(s,["minW","minH","bg","p","borderRadius","bgActive","children"]);return v.createElement(C,c({minW:e,minH:t,bg:r,p:a,borderRadius:p,_active:{bg:`${x}`}},b),f)};export{l as C};
