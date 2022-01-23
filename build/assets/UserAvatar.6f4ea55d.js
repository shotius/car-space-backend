var L=Object.defineProperty;var v=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var k=(e,a,r)=>a in e?L(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r,y=(e,a)=>{for(var r in a||(a={}))_.call(a,r)&&k(e,r,a[r]);if(v)for(var r of v(a))C.call(a,r)&&k(e,r,a[r]);return e};var I=(e,a)=>{var r={};for(var t in e)_.call(e,t)&&a.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&v)for(var t of v(e))a.indexOf(t)<0&&C.call(e,t)&&(r[t]=e[t]);return r};import{r as o,R as i}from"./vendor.576a7237.js";import{a0 as N,a9 as F,aa as P,a2 as h,a1 as B,ac as T,ad as O,u as W,aZ as M,k as D,a_ as U,aU as H,V,H as w}from"./index.8f5de986.js";import{u as Z,I as z}from"./image.fa0333cf.js";import{A as K}from"./aspect-ratio.0a08b954.js";function A(e,a){if(e==null)return{};var r={},t=Object.keys(e),n,l;for(l=0;l<t.length;l++)n=t[l],!(a.indexOf(n)>=0)&&(r[n]=e[n]);return r}function d(){return d=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},d.apply(this,arguments)}function q(e){var[a,r]=e.split(" ");return a&&r?""+a.charAt(0)+r.charAt(0):a.charAt(0)}var G=e=>{var{name:a,getInitials:r}=e,t=A(e,["name","getInitials"]),n=O();return o.exports.createElement(h.div,d({role:"img","aria-label":a},t,{__css:n.label}),a?r==null?void 0:r(a):null)},j=e=>o.exports.createElement(h.svg,d({viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%",className:"chakra-avatar__svg"},e),o.exports.createElement("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),o.exports.createElement("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"})),J={display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0},Q=N((e,a)=>{var r=F("Avatar",e),t=P(e),{src:n,name:l,showBorder:u,borderRadius:c="full",onError:s,getInitials:f=q,icon:p=o.exports.createElement(j,null),iconLabel:g=" avatar",loading:m,children:x,borderColor:b,ignoreFallback:S}=t,R=A(t,["src","name","showBorder","borderRadius","onError","getInitials","icon","iconLabel","loading","children","borderColor","ignoreFallback"]),E=d({borderRadius:c,borderWidth:u?"2px":void 0},J,r.container);return b&&(E.borderColor=b),o.exports.createElement(h.span,d({ref:a},R,{className:B("chakra-avatar",e.className),__css:E}),o.exports.createElement(T,{value:r},o.exports.createElement(X,{src:n,loading:m,onError:s,getInitials:f,name:l,borderRadius:c,icon:p,iconLabel:g,ignoreFallback:S}),x))}),X=e=>{var{src:a,onError:r,getInitials:t,name:n,borderRadius:l,loading:u,iconLabel:c,icon:s=o.exports.createElement(j,null),ignoreFallback:f}=e,p=Z({src:a,onError:r,ignoreFallback:f}),g=p==="loaded",m=!a||!g;return m?n?o.exports.createElement(G,{className:"chakra-avatar__initials",getInitials:t,name:n}):o.exports.cloneElement(s,{role:"img","aria-label":c}):o.exports.createElement(h.img,{src:a,alt:n,className:"chakra-avatar__img",loading:u,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius:l}})};const te=g=>{var m=g,{image:e,username:a,mainText:r,secondaryText:t,direction:n=["row","column"],align:l="center",spacing:u=["4","10px"],w:c=["full","auto"],size:s=["49px","70px"],showPhotoChange:f=!1}=m,p=I(m,["image","username","mainText","secondaryText","direction","align","spacing","w","size","showPhotoChange"]);const x=W();return i.createElement(M,y({direction:n,align:l,spacing:u,w:c},p),i.createElement(D,{position:"relative"},i.createElement(U,{zIndex:"1",position:"absolute",borderRadius:"100px",boxSize:8,bg:"white",top:"43px",right:"0px",_hover:{transform:"scale(1.2)"},_active:{transform:"scale(1.1)"},display:f?"block":"none",onClick:()=>x(H())}),e?i.createElement(K,{ratio:1/1,w:s},i.createElement(z,{src:e,alt:"profile avatar",objectFit:"cover",borderRadius:"full"})):i.createElement(Q,{name:a||"default",bg:"#3D405B",color:"#fff",w:s,h:s})),i.createElement(V,{align:["flex-start","center"],spacing:0},i.createElement(w,{maxW:"150px",isTruncated:!0},a),i.createElement(w,{fontSize:"16px",isTruncated:!0,maxW:"150px",opacity:"0.5",pt:"1"},t)))};export{te as U};
