var R=Object.defineProperty;var v=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var y=(e,a,r)=>a in e?R(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r,I=(e,a)=>{for(var r in a||(a={}))C.call(a,r)&&y(e,r,a[r]);if(v)for(var r of v(a))_.call(a,r)&&y(e,r,a[r]);return e};var k=(e,a)=>{var r={};for(var t in e)C.call(e,t)&&a.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&v)for(var t of v(e))a.indexOf(t)<0&&_.call(e,t)&&(r[t]=e[t]);return r};import{r as o,R as l}from"./vendor.506dd9e8.js";import{f as N,u as P,o as B,c as h,a as F,S as O,b as T,e as W,d as M,B as D,t as U}from"./index.ce29a962.js";import{m as V,n as z,V as H,a as S}from"./PublicLayout.69ee19e4.js";import{A as K}from"./aspect-ratio.1e6791cf.js";import{u as Z,I as q}from"./image.bfb47504.js";function A(e,a){if(e==null)return{};var r={},t=Object.keys(e),n,s;for(s=0;s<t.length;s++)n=t[s],!(a.indexOf(n)>=0)&&(r[n]=e[n]);return r}function m(){return m=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},m.apply(this,arguments)}function G(e){var[a,r]=e.split(" ");return a&&r?""+a.charAt(0)+r.charAt(0):a.charAt(0)}var J=e=>{var{name:a,getInitials:r}=e,t=A(e,["name","getInitials"]),n=T();return o.exports.createElement(h.div,m({role:"img","aria-label":a},t,{__css:n.label}),a?r==null?void 0:r(a):null)},j=e=>o.exports.createElement(h.svg,m({viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%",className:"chakra-avatar__svg"},e),o.exports.createElement("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),o.exports.createElement("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"})),Q={display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0},X=N((e,a)=>{var r=P("Avatar",e),t=B(e),{src:n,name:s,showBorder:u,borderRadius:i="full",onError:d,getInitials:g=G,icon:c=o.exports.createElement(j,null),iconLabel:f=" avatar",loading:p,children:x,borderColor:b,ignoreFallback:w}=t,L=A(t,["src","name","showBorder","borderRadius","onError","getInitials","icon","iconLabel","loading","children","borderColor","ignoreFallback"]),E=m({borderRadius:i,borderWidth:u?"2px":void 0},Q,r.container);return b&&(E.borderColor=b),o.exports.createElement(h.span,m({ref:a},L,{className:F("chakra-avatar",e.className),__css:E}),o.exports.createElement(O,{value:r},o.exports.createElement(Y,{src:n,loading:p,onError:d,getInitials:g,name:s,borderRadius:i,icon:c,iconLabel:f,ignoreFallback:w}),x))}),Y=e=>{var{src:a,onError:r,getInitials:t,name:n,borderRadius:s,loading:u,iconLabel:i,icon:d=o.exports.createElement(j,null),ignoreFallback:g}=e,c=Z({src:a,onError:r,ignoreFallback:g}),f=c==="loaded",p=!a||!f;return p?n?o.exports.createElement(J,{className:"chakra-avatar__initials",getInitials:t,name:n}):o.exports.cloneElement(d,{role:"img","aria-label":i}):o.exports.createElement(h.img,{src:a,alt:n,className:"chakra-avatar__img",loading:u,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius:s}})};const oe=g=>{var c=g,{image:e,mainText:a,secondaryText:r,direction:t=["row","column"],align:n="center",spacing:s=["4","10px"],w:u=["full","auto"],size:i=["49px","70px"]}=c,d=k(c,["image","mainText","secondaryText","direction","align","spacing","w","size"]);const{username:f}=W(x=>x.userInfoSlice),p=M();return l.createElement(V,I({direction:t,align:n,spacing:s,w:u},d),l.createElement(D,{position:"relative"},l.createElement(z,{zIndex:"1",position:"absolute",borderRadius:"100px",boxSize:8,bg:"white",top:"43px",right:"0px",_hover:{transform:"scale(1.2)"},_active:{transform:"scale(1.1)"},onClick:()=>p(U())}),e?l.createElement(K,{ratio:1/1,w:i},l.createElement(q,{src:e,alt:"delear",objectFit:"cover",borderRadius:"full"})):l.createElement(X,{name:f||"default",bg:"#3D405B",color:"#fff",w:i,h:i})),l.createElement(H,{align:["flex-start","center"],spacing:0},l.createElement(S,{maxW:"150px",isTruncated:!0},a),l.createElement(S,{fontSize:"16px",isTruncated:!0,maxW:"150px",opacity:"0.5"},r)))};export{oe as U};
