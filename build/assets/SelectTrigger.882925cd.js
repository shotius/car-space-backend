var h=Object.defineProperty;var l=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var E=(e,r,t)=>r in e?h(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,s=(e,r)=>{for(var t in r||(r={}))u.call(r,t)&&E(e,t,r[t]);if(l)for(var t of l(r))d.call(r,t)&&E(e,t,r[t]);return e};var i=(e,r)=>{var t={};for(var a in e)u.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&l)for(var a of l(e))r.indexOf(a)<0&&d.call(e,a)&&(t[a]=e[a]);return t};import{R as n}from"./vendor.576a7237.js";import{C as S,af as C,ag as v,ap as I,D as b,ah as x}from"./index.b51c9897.js";import{c as y}from"./ScrollToTop.f11963cf.js";import{I as g}from"./SelectWrapper.38da50b7.js";const _=t=>{var a=t,{height:e}=a,r=i(a,["height"]);return n.createElement(S,{height:e},n.createElement(C,s({orientation:"vertical"},r)))},k=p=>{var c=p,{label:e,placeholder:r,isDisabled:t,labelPadding:a}=c,o=i(c,["label","placeholder","isDisabled","labelPadding"]);return n.createElement(v,s({pl:a||"4",cursor:t?"not-allowed":"text",bg:"transparent",isDisabled:t,border:"none",opacity:t?"0.4":"1",placeholder:y(r)||e,isTruncated:!0,_focus:{bg:"white"},_hover:{bg:"autoGrey.200"},pr:"32px"},o))},j=({areOptionsSelected:e,isDisabled:r,areOptionsOpen:t,clearCb:a,size:o="lg"})=>n.createElement(n.Fragment,null,e?n.createElement(g,{children:n.createElement(I,null),cursor:"pointer",opacity:"0.6",transition:"all .3s",transform:"rotate(90deg)",onClick:a}):n.createElement(g,{children:n.createElement(b,{opacity:r?"0.18":"0.4",boxSize:o==="lg"?5:4,transform:t?"rotate(180deg)":"",transition:"all .2s"}),pointerEvents:"painted"})),A=w=>{var m=w,{children:e,areOptionsOpen:r,isDisabled:t,clearCb:a,areOptionsSelected:o,cursor:p="pointer",size:c}=m,f=i(m,["children","areOptionsOpen","isDisabled","clearCb","areOptionsSelected","cursor","size"]);return n.createElement(x,s({cursor:p},f),e,n.createElement(j,{areOptionsSelected:o,areOptionsOpen:r,isDisabled:t,clearCb:a,size:c}))};export{_ as C,A as S,k as a};
