var d=Object.defineProperty,f=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var x=(r,t,a)=>t in r?d(r,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[t]=a,c=(r,t)=>{for(var a in t||(t={}))i.call(t,a)&&x(r,a,t[a]);if(s)for(var a of s(t))p.call(t,a)&&x(r,a,t[a]);return r},j=(r,t)=>f(r,g(t));var m=(r,t)=>{var a={};for(var o in r)i.call(r,o)&&t.indexOf(o)<0&&(a[o]=r[o]);if(r!=null&&s)for(var o of s(r))t.indexOf(o)<0&&p.call(r,o)&&(a[o]=r[o]);return a};import{j as h,w as u}from"./index.1849e885.js";const $=v=>{var e=v,{minW:r,minH:t,bg:a="white",p:o="2.5",borderRadius:n="8px",bgActive:w,children:C}=e,b=m(e,["minW","minH","bg","p","borderRadius","bgActive","children"]);return h(u,j(c({minW:r,minH:t,bg:a,p:o,borderRadius:n,_active:{bg:`${w}`}},b),{children:C}))};export{$ as C};
