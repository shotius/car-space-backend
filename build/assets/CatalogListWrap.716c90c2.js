var b=Object.defineProperty;var n=Object.getOwnPropertySymbols;var i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;var m=(r,t,e)=>t in r?b(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,p=(r,t)=>{for(var e in t||(t={}))i.call(t,e)&&m(r,e,t[e]);if(n)for(var e of n(t))l.call(t,e)&&m(r,e,t[e]);return r};var s=(r,t)=>{var e={};for(var a in r)i.call(r,a)&&t.indexOf(a)<0&&(e[a]=r[a]);if(r!=null&&n)for(var a of n(r))t.indexOf(a)<0&&l.call(r,a)&&(e[a]=r[a]);return e};import{R as g}from"./vendor.576a7237.js";import{A as c}from"./index.38124d94.js";import{S as R}from"./simple-grid.2be9e23f.js";const E=h=>{var f=h,{active:r=!1,minW:t="1px",minH:e="1px",w:a="30px",h:o="30px",px:u="0px",children:d}=f,x=s(f,["active","minW","minH","w","h","px","children"]);return g.createElement(c,p({fontWeight:"light",minW:t,minH:e,w:a,h:o,px:u,borderRadius:"100px",bg:r?"autoOrange.500":"transparent",color:r?"#fff":"#000",_hover:{bg:r?"autoOrange.500":"transparent"},_active:{bg:"autoOrange.300"}},x),d)},S=a=>{var o=a,{children:r,gap:t="32px"}=o,e=s(o,["children","gap"]);return g.createElement(R,p({gridTemplateColumns:["1fr","1fr 1fr","repeat(3, 1fr)","repeat(4, 1fr)"],gap:t,w:"full"},e),r)};export{E as B,S as C};