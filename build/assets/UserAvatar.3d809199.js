var b=Object.defineProperty;var o=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;var i=(e,t,a)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,l=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&i(e,a,t[a]);if(o)for(var a of o(t))n.call(t,a)&&i(e,a,t[a]);return e};var p=(e,t)=>{var a={};for(var r in e)m.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&o)for(var r of o(e))t.indexOf(r)<0&&n.call(e,r)&&(a[r]=e[r]);return a};import{R as c}from"./vendor.fc5c11f9.js";import{g as j,V as R,H as u}from"./PublicLayout.509a9a27.js";import{A as S}from"./aspect-ratio.2ab376bf.js";import{I as v}from"./image.6d76a9dd.js";const T=y=>{var s=y,{image:e,mainText:t,secondaryText:a,direction:r=["row","column"],align:d="center",spacing:f=["4","10px"],w:x=["full","auto"],size:g=["49px","70px"]}=s,E=p(s,["image","mainText","secondaryText","direction","align","spacing","w","size"]);return c.createElement(j,l({direction:r,align:d,spacing:f,w:x},E),c.createElement(S,{ratio:1/1,w:g},c.createElement(v,{src:e,alt:"delear",objectFit:"cover",borderRadius:"full"})),c.createElement(R,{align:["flex-start","center"],spacing:0},c.createElement(u,{maxW:"150px",isTruncated:!0},t),c.createElement(u,{fontSize:"16px",isTruncated:!0,maxW:"150px",opacity:"0.5"},a)))};export{T as U};