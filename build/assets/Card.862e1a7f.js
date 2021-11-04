var F=Object.defineProperty;var b=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var R=(r,t,e)=>t in r?F(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,k=(r,t)=>{for(var e in t||(t={}))C.call(t,e)&&R(r,e,t[e]);if(b)for(var e of b(t))y.call(t,e)&&R(r,e,t[e]);return r};var G=(r,t)=>{var e={};for(var a in r)C.call(r,a)&&t.indexOf(a)<0&&(e[a]=r[a]);if(r!=null&&b)for(var a of b(r))t.indexOf(a)<0&&y.call(r,a)&&(e[a]=r[a]);return e};import{r as f,R as A}from"./vendor.41c4480e.js";import{k as L}from"./PublicLayout.6b8aaf61.js";import{l as w,Q as W,n as x,X as S,o as I,B as $}from"./index.ae6229d1.js";import{c as _}from"./text.925162cb.js";function N(r){var{loading:t,src:e,srcSet:a,onLoad:n,onError:o,crossOrigin:s,sizes:l,ignoreFallback:u}=r,[c,d]=f.exports.useState("pending");f.exports.useEffect(()=>{d(e?"loading":"pending")},[e]);var m=f.exports.useRef(),p=f.exports.useCallback(()=>{if(!!e){g();var i=new Image;i.src=e,s&&(i.crossOrigin=s),a&&(i.srcset=a),l&&(i.sizes=l),t&&(i.loading=t),i.onload=h=>{g(),d("loaded"),n==null||n(h)},i.onerror=h=>{g(),d("failed"),o==null||o(h)},m.current=i}},[e,s,a,l,n,o,t]),g=()=>{m.current&&(m.current.onload=null,m.current.onerror=null,m.current=null)};return L(()=>{if(!u)return c==="loading"&&p(),()=>{g()}},[c,p,u]),u?"loaded":c}function v(){return v=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a])}return r},v.apply(this,arguments)}function E(r,t){if(r==null)return{};var e={},a=Object.keys(r),n,o;for(o=0;o<a.length;o++)n=a[o],!(t.indexOf(n)>=0)&&(e[n]=r[n]);return e}var P=f.exports.forwardRef((r,t)=>{var{htmlWidth:e,htmlHeight:a,alt:n}=r,o=E(r,["htmlWidth","htmlHeight","alt"]);return f.exports.createElement("img",v({width:e,height:a,ref:t,alt:n},o))}),M=w((r,t)=>{var{fallbackSrc:e,fallback:a,src:n,srcSet:o,align:s,fit:l,loading:u,ignoreFallback:c,crossOrigin:d}=r,m=E(r,["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"]),p=u!=null||c||e===void 0&&a===void 0,g=N(v({},r,{ignoreFallback:p})),i=v({ref:t,objectFit:l,objectPosition:s},p?m:W(m,["onError","onLoad"]));return g!=="loaded"?a||f.exports.createElement(x.img,v({as:P,className:"chakra-image__placeholder",src:e},i)):f.exports.createElement(x.img,v({as:P,src:n,srcSet:o,crossOrigin:d,loading:u,className:"chakra-image"},i))});function O(){return O=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a])}return r},O.apply(this,arguments)}function T(r,t){if(r==null)return{};var e={},a=Object.keys(r),n,o;for(o=0;o<a.length;o++)n=a[o],!(t.indexOf(n)>=0)&&(e[n]=r[n]);return e}var K=w((r,t)=>{var{area:e,templateAreas:a,gap:n,rowGap:o,columnGap:s,column:l,row:u,autoFlow:c,autoRows:d,templateRows:m,autoColumns:p,templateColumns:g}=r,i=T(r,["area","templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"]),h={display:"grid",gridArea:e,gridTemplateAreas:a,gridGap:n,gridRowGap:o,gridColumnGap:s,gridAutoColumns:p,gridColumn:l,gridRow:u,gridAutoFlow:c,gridAutoRows:d,gridTemplateRows:m,gridTemplateColumns:g};return f.exports.createElement(x.div,O({ref:t,__css:h},i))});function j(){return j=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a])}return r},j.apply(this,arguments)}function X(r,t){if(r==null)return{};var e={},a=Object.keys(r),n,o;for(o=0;o<a.length;o++)n=a[o],!(t.indexOf(n)>=0)&&(e[n]=r[n]);return e}var U=w((r,t)=>{var{columns:e,spacingX:a,spacingY:n,spacing:o,minChildWidth:s}=r,l=X(r,["columns","spacingX","spacingY","spacing","minChildWidth"]),u=s?B(s):H(e);return f.exports.createElement(K,j({ref:t,gap:o,columnGap:a,rowGap:n,templateColumns:u},l))});function z(r){return I(r)?r+"px":r}function B(r){return _(r,t=>S(t)?null:"repeat(auto-fit, minmax("+z(t)+", 1fr))")}function H(r){return _(r,t=>S(t)?null:"repeat("+t+", minmax(0, 1fr))")}const V=u=>{var c=u,{minW:r,minH:t,bg:e="white",p:a="2.5",borderRadius:n="8px",bgActive:o,children:s}=c,l=G(c,["minW","minH","bg","p","borderRadius","bgActive","children"]);return A.createElement($,k({minW:r,minH:t,bg:e,p:a,borderRadius:n,_active:{bg:`${o}`}},l),s)};export{V as C,M as I,U as S};