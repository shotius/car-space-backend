var m=Object.defineProperty;var r=Object.getOwnPropertySymbols;var s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;var p=(e,t,a)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,f=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&p(e,a,t[a]);if(r)for(var a of r(t))c.call(t,a)&&p(e,a,t[a]);return e};var i=(e,t)=>{var a={};for(var o in e)s.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&r)for(var o of r(e))t.indexOf(o)<0&&c.call(e,o)&&(a[o]=e[o]);return a};import{R as n}from"./vendor.816f6e72.js";import{T as d}from"./index.cee6b4cf.js";const j=a=>{var o=a,{children:e="-"}=o,t=i(o,["children"]);return n.createElement(d,f({as:"span",pl:"1"},t),e)};export{j as N};
