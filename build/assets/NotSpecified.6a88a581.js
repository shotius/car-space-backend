var c=Object.defineProperty;var r=Object.getOwnPropertySymbols;var s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var i=(e,a,t)=>a in e?c(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,m=(e,a)=>{for(var t in a||(a={}))s.call(a,t)&&i(e,t,a[t]);if(r)for(var t of r(a))p.call(a,t)&&i(e,t,a[t]);return e};var n=(e,a)=>{var t={};for(var o in e)s.call(e,o)&&a.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&r)for(var o of r(e))a.indexOf(o)<0&&p.call(e,o)&&(t[o]=e[o]);return t};import{R as d}from"./vendor.576a7237.js";import{T as f}from"./index.8f5de986.js";const j=t=>{var o=t,{children:e="-"}=o,a=n(o,["children"]);return d.createElement(f,m({as:"span",pl:"1"},a),e)};export{j as N};
