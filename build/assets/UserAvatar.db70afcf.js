var j=Object.defineProperty;var o=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;var i=(e,a,t)=>a in e?j(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,l=(e,a)=>{for(var t in a||(a={}))m.call(a,t)&&i(e,t,a[t]);if(o)for(var t of o(a))n.call(a,t)&&i(e,t,a[t]);return e};var p=(e,a)=>{var t={};for(var r in e)m.call(e,r)&&a.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&o)for(var r of o(e))a.indexOf(r)<0&&n.call(e,r)&&(t[r]=e[r]);return t};import{R as c}from"./vendor.fc5c11f9.js";import{d as b,V as R,a as f}from"./PublicLayout.1f049d87.js";import{A as S}from"./aspect-ratio.0829df4c.js";import{I as v}from"./image.3afdeb9e.js";const U=y=>{var s=y,{image:e,mainText:a,secondaryText:t,direction:r=["row","column"],align:d="center",spacing:u=["4","10px"],w:x=["full","auto"],size:E=["49px","70px"]}=s,g=p(s,["image","mainText","secondaryText","direction","align","spacing","w","size"]);return c.createElement(b,l({direction:r,align:d,spacing:u,w:x},g),c.createElement(S,{ratio:1/1,w:E},c.createElement(v,{src:e,alt:"delear",objectFit:"cover",borderRadius:"full"})),c.createElement(R,{align:["flex-start","center"],spacing:0},c.createElement(f,{maxW:"150px",isTruncated:!0},a),c.createElement(f,{fontSize:"16px",isTruncated:!0,maxW:"150px",opacity:"0.5"},t)))};export{U};
