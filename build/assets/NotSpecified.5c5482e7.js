var c=Object.defineProperty;var r=Object.getOwnPropertySymbols;var s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var i=(e,t,a)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&i(e,a,t[a]);if(r)for(var a of r(t))p.call(t,a)&&i(e,a,t[a]);return e};var n=(e,t)=>{var a={};for(var o in e)s.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&r)for(var o of r(e))t.indexOf(o)<0&&p.call(e,o)&&(a[o]=e[o]);return a};import{R as d}from"./vendor.816f6e72.js";import{T as f}from"./index.544d3174.js";const j=a=>{var o=a,{children:e="-"}=o,t=n(o,["children"]);return d.createElement(f,m({as:"span",pl:"1"},t),e)};export{j as N};
