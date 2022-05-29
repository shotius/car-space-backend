var O=Object.defineProperty,W=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var C=(t,e,r)=>e in t?O(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,w=(t,e)=>{for(var r in e||(e={}))S.call(e,r)&&C(t,r,e[r]);if(x)for(var r of x(e))y.call(e,r)&&C(t,r,e[r]);return t},A=(t,e)=>W(t,D(e));var R=(t,e)=>{var r={};for(var a in t)S.call(t,a)&&e.indexOf(a)<0&&(r[a]=t[a]);if(t!=null&&x)for(var a of x(t))e.indexOf(a)<0&&y.call(t,a)&&(r[a]=t[a]);return r};import{a9 as M,af as H,ag as U,r as o,ab as p,aa as V,ai as z,ak as K,a as Z,e as k,bk as q,w as G,j as g,bo as J,be as Q,A as X,V as Y,H as L}from"./index.5a316967.js";import{u as ee,I as ae}from"./chakra-ui-image.esm.43e140aa.js";function P(t,e){if(t==null)return{};var r={},a=Object.keys(t),n,i;for(i=0;i<a.length;i++)n=a[i],!(e.indexOf(n)>=0)&&(r[n]=t[n]);return r}function v(){return v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},v.apply(this,arguments)}var re=["name","getInitials"],te=["src","srcSet","name","showBorder","borderRadius","onError","getInitials","icon","iconLabel","loading","children","borderColor","ignoreFallback"];function ne(t){var e=t.split(" "),r=e[0],a=e[1];return r&&a?""+r.charAt(0)+a.charAt(0):r.charAt(0)}var ie=function(e){var r=e.name,a=e.getInitials,n=P(e,re),i=K();return o.exports.createElement(p.div,v({role:"img","aria-label":r},n,{__css:i.label}),r?a==null?void 0:a(r):null)},j=function(e){return o.exports.createElement(p.svg,v({viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%",className:"chakra-avatar__svg"},e),o.exports.createElement("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),o.exports.createElement("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"}))},oe={display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0},le=M(function(t,e){var r=H("Avatar",t),a=U(t),n=a.src,i=a.srcSet,s=a.name,f=a.showBorder,l=a.borderRadius,c=l===void 0?"full":l,d=a.onError,h=a.getInitials,m=h===void 0?ne:h,u=a.icon,_=u===void 0?o.exports.createElement(j,null):u,b=a.iconLabel,F=b===void 0?" avatar":b,T=a.loading,N=a.children,I=a.borderColor,$=a.ignoreFallback,B=P(a,te),E=v({borderRadius:c,borderWidth:f?"2px":void 0},oe,r.container);return I&&(E.borderColor=I),o.exports.createElement(p.span,v({ref:e},B,{className:V("chakra-avatar",t.className),__css:E}),o.exports.createElement(z,{value:r},o.exports.createElement(se,{src:n,srcSet:i,loading:T,onError:d,getInitials:m,name:s,borderRadius:c,icon:_,iconLabel:F,ignoreFallback:$}),N))}),se=function(e){var r=e.src,a=e.srcSet,n=e.onError,i=e.getInitials,s=e.name,f=e.borderRadius,l=e.loading,c=e.iconLabel,d=e.icon,h=d===void 0?o.exports.createElement(j,null):d,m=e.ignoreFallback,u=ee({src:r,onError:n,ignoreFallback:m}),_=u==="loaded",b=!r||!_;return b?s?o.exports.createElement(ie,{className:"chakra-avatar__initials",getInitials:i,name:s}):o.exports.cloneElement(h,{role:"img","aria-label":c}):o.exports.createElement(p.img,{src:r,srcSet:a,alt:s,className:"chakra-avatar__img",loading:l,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius:f}})};const ue=h=>{var m=h,{image:t,username:e,mainText:r,secondaryText:a,direction:n=["row","column"],align:i="center",spacing:s=["4","10px"],w:f=["full","auto"],size:l=["49px","70px"],showPhotoChange:c=!1}=m,d=R(m,["image","username","mainText","secondaryText","direction","align","spacing","w","size","showPhotoChange"]);const u=Z();return k(q,A(w({direction:n,align:i,spacing:s,w:f},d),{children:[k(G,{position:"relative",children:[g(J,{zIndex:"1",position:"absolute",borderRadius:"100px",boxSize:8,bg:"white",top:"43px",right:"0px",_hover:{transform:"scale(1.2)"},_active:{transform:"scale(1.1)"},display:c?"block":"none",onClick:()=>u(Q())}),t?g(X,{ratio:1/1,w:l,children:g(ae,{src:t,alt:"profile avatar",objectFit:"cover",borderRadius:"full"})}):g(le,{name:e||"default",bg:"#3D405B",color:"#fff",w:l,h:l})]}),k(Y,{align:["flex-start","center"],spacing:0,children:[g(L,{maxW:"150px",isTruncated:!0,children:e}),g(L,{fontSize:"16px",isTruncated:!0,maxW:"150px",opacity:"0.5",pt:"1",children:a})]})]}))};export{ue as U};