var R=Object.defineProperty;var c=Object.getOwnPropertySymbols;var l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;var p=(e,a,t)=>a in e?R(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,m=(e,a)=>{for(var t in a||(a={}))l.call(a,t)&&p(e,t,a[t]);if(c)for(var t of c(a))i.call(a,t)&&p(e,t,a[t]);return e};var f=(e,a)=>{var t={};for(var r in e)l.call(e,r)&&a.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&c)for(var r of c(e))a.indexOf(r)<0&&i.call(e,r)&&(t[r]=e[r]);return t};import{R as o,y as S,a5 as k,ae as w,af as y,aG as A,V as j}from"./vendor.816f6e72.js";import{u as B,P as I,K as P,H as x}from"./index.cee6b4cf.js";const U=T=>{var s=T,{image:e,username:a,mainText:t,secondaryText:r,direction:u=["row","column"],align:d="center",spacing:g=["4","10px"],w:b=["full","auto"],size:n=["49px","70px"],showPhotoChange:E=!1}=s,v=f(s,["image","username","mainText","secondaryText","direction","align","spacing","w","size","showPhotoChange"]);const h=B();return o.createElement(S,m({direction:u,align:d,spacing:g,w:b},v),o.createElement(k,{position:"relative"},o.createElement(I,{zIndex:"1",position:"absolute",borderRadius:"100px",boxSize:8,bg:"white",top:"43px",right:"0px",_hover:{transform:"scale(1.2)"},_active:{transform:"scale(1.1)"},display:E?"block":"none",onClick:()=>h(P())}),e?o.createElement(w,{ratio:1/1,w:n},o.createElement(y,{src:e,alt:"profile avatar",objectFit:"cover",borderRadius:"full"})):o.createElement(A,{name:a||"default",bg:"#3D405B",color:"#fff",w:n,h:n})),o.createElement(j,{align:["flex-start","center"],spacing:0},o.createElement(x,{maxW:"150px",isTruncated:!0},a),o.createElement(x,{fontSize:"16px",isTruncated:!0,maxW:"150px",opacity:"0.5",pt:"1"},r)))};export{U};