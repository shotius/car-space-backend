var h=Object.defineProperty;var l=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var E=(t,r,e)=>r in t?h(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,p=(t,r)=>{for(var e in r||(r={}))u.call(r,e)&&E(t,e,r[e]);if(l)for(var e of l(r))d.call(r,e)&&E(t,e,r[e]);return t};var s=(t,r)=>{var e={};for(var a in t)u.call(t,a)&&r.indexOf(a)<0&&(e[a]=t[a]);if(t!=null&&l)for(var a of l(t))r.indexOf(a)<0&&d.call(t,a)&&(e[a]=t[a]);return e};import{R as n}from"./vendor.64e57edd.js";import{c as S}from"./capitalizeEach.6ec19d92.js";import{O as I,a3 as x,W as y,P as b}from"./index.136f45ba.js";import{I as g}from"./SelectWrapper.9f67e227.js";const T=i=>{var c=i,{label:t,placeholder:r,isDisabled:e,labelPadding:a}=c,o=s(c,["label","placeholder","isDisabled","labelPadding"]);return n.createElement(I,p({pl:a||"4",cursor:e?"not-allowed":"text",bg:"transparent",isDisabled:e,border:"none",opacity:e?"0.4":"1",placeholder:S(r)||t,isTruncated:!0,_focus:{bg:"white"},_hover:{bg:"autoGrey.200"},pr:"32px"},o))},j=({areOptionsSelected:t,isDisabled:r,areOptionsOpen:e,clearCb:a,size:o="lg"})=>n.createElement(n.Fragment,null,t?n.createElement(g,{children:n.createElement(x,null),cursor:"pointer",opacity:"0.6",transition:"all .3s",transform:"rotate(90deg)",onClick:a}):n.createElement(g,{children:n.createElement(y,{opacity:r?"0.18":"0.4",boxSize:o==="lg"?5:4,transform:e?"rotate(180deg)":"",transition:"all .2s"}),pointerEvents:"painted"})),W=w=>{var m=w,{children:t,areOptionsOpen:r,isDisabled:e,clearCb:a,areOptionsSelected:o,cursor:i="pointer",size:c}=m,f=s(m,["children","areOptionsOpen","isDisabled","clearCb","areOptionsSelected","cursor","size"]);return n.createElement(b,p({cursor:i},f),t,n.createElement(j,{areOptionsSelected:o,areOptionsOpen:r,isDisabled:e,clearCb:a,size:c}))};export{W as S,T as a};
