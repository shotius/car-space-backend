var x=Object.defineProperty,y=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var g=(r,t,e)=>t in r?x(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,i=(r,t)=>{for(var e in t||(t={}))h.call(t,e)&&g(r,e,t[e]);if(c)for(var e of c(t))m.call(t,e)&&g(r,e,t[e]);return r},C=(r,t)=>y(r,S(t));var l=(r,t)=>{var e={};for(var o in r)h.call(r,o)&&t.indexOf(o)<0&&(e[o]=r[o]);if(r!=null&&c)for(var o of c(r))t.indexOf(o)<0&&m.call(r,o)&&(e[o]=r[o]);return e};import{j as a,C as f,at as w,au as I,O as b,aw as v,aH as j,D as E,e as G,av as _}from"./index.a179b8fa.js";import{c as k}from"./TextSecondary.21a5048f.js";const H=e=>{var o=e,{height:r}=o,t=l(o,["height"]);return a(f,{height:r,children:a(w,i({orientation:"vertical"},t))})},O=u=>{var s=u,{label:r,placeholder:t,isDisabled:e,labelPadding:o,value:n}=s,p=l(s,["label","placeholder","isDisabled","labelPadding","value"]);return a(I,i({pl:o||"4",cursor:e?"not-allowed":"text",bg:"transparent",isDisabled:e,border:"none",opacity:e?"0.4":"1",placeholder:k(t)||r,isTruncated:!0,_focus:{bg:"white"},_hover:{bg:"autoGrey.200"},_placeholder:{color:n||r!==t?"black":"grey"},pr:"32px"},p))},z=({areOptionsSelected:r,isDisabled:t,areOptionsOpen:e,clearCb:o,size:n="lg"})=>a(b,{children:r?a(v,{children:a(j,{}),cursor:"pointer",opacity:"0.6",transition:"all .3s",transform:"rotate(90deg)",onClick:o}):a(v,{children:a(E,{opacity:t?"0.18":"0.4",boxSize:n==="lg"?5:4,transform:e?"rotate(180deg)":"",transition:"all .2s"}),pointerEvents:"painted"})}),R=D=>{var d=D,{children:r,areOptionsOpen:t,isDisabled:e,clearCb:o,areOptionsSelected:n,cursor:p="pointer",size:u}=d,s=l(d,["children","areOptionsOpen","isDisabled","clearCb","areOptionsSelected","cursor","size"]);return G(_,C(i({cursor:p},s),{children:[r,a(z,{areOptionsSelected:n,areOptionsOpen:t,isDisabled:e,clearCb:o,size:u})]}))};export{H as C,R as S,O as a};