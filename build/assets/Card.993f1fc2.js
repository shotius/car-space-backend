var j=Object.defineProperty;var o=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;var m=(e,t,r)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,n=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&m(e,r,t[r]);if(o)for(var r of o(t))i.call(t,r)&&m(e,r,t[r]);return e};var p=(e,t)=>{var r={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&o)for(var a of o(e))t.indexOf(a)<0&&i.call(e,a)&&(r[a]=e[a]);return r};import{R as v}from"./vendor.576a7237.js";import{k as C}from"./index.b51c9897.js";const l=R=>{var s=R,{minW:e,minH:t,bg:r="white",p:a="2.5",borderRadius:x="8px",bgActive:d,children:b}=s,f=p(s,["minW","minH","bg","p","borderRadius","bgActive","children"]);return v.createElement(C,n({minW:e,minH:t,bg:r,p:a,borderRadius:x,_active:{bg:`${d}`}},f),b)};export{l as C};
