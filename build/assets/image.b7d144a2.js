import{r as l}from"./vendor.64e57edd.js";import{a8 as O,s as S,J as j,v as p}from"./index.1cd6d2cd.js";function E(a){var{loading:t,src:r,srcSet:e,onLoad:n,onError:i,crossOrigin:u,sizes:g,ignoreFallback:d}=a,[m,v]=l.exports.useState("pending");l.exports.useEffect(()=>{v(r?"loading":"pending")},[r]);var o=l.exports.useRef(),h=l.exports.useCallback(()=>{if(!!r){f();var s=new Image;s.src=r,u&&(s.crossOrigin=u),e&&(s.srcset=e),g&&(s.sizes=g),t&&(s.loading=t),s.onload=b=>{f(),v("loaded"),n==null||n(b)},s.onerror=b=>{f(),v("failed"),i==null||i(b)},o.current=s}},[r,u,e,g,n,i,t]),f=()=>{o.current&&(o.current.onload=null,o.current.onerror=null,o.current=null)};return O(()=>{if(!d)return m==="loading"&&h(),()=>{f()}},[m,h,d]),d?"loaded":m}function c(){return c=Object.assign||function(a){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(a[e]=r[e])}return a},c.apply(this,arguments)}function k(a,t){if(a==null)return{};var r={},e=Object.keys(a),n,i;for(i=0;i<e.length;i++)n=e[i],!(t.indexOf(n)>=0)&&(r[n]=a[n]);return r}var x=l.exports.forwardRef((a,t)=>{var{htmlWidth:r,htmlHeight:e,alt:n}=a,i=k(a,["htmlWidth","htmlHeight","alt"]);return l.exports.createElement("img",c({width:r,height:e,ref:t,alt:n},i))}),y=S((a,t)=>{var{fallbackSrc:r,fallback:e,src:n,srcSet:i,align:u,fit:g,loading:d,ignoreFallback:m,crossOrigin:v}=a,o=k(a,["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"]),h=d!=null||m||r===void 0&&e===void 0,f=E(c({},a,{ignoreFallback:h})),s=c({ref:t,objectFit:g,objectPosition:u},h?o:j(o,["onError","onLoad"]));return f!=="loaded"?e||l.exports.createElement(p.img,c({as:x,className:"chakra-image__placeholder",src:r},s)):l.exports.createElement(p.img,c({as:x,src:n,srcSet:i,crossOrigin:v,loading:d,className:"chakra-image"},s))});export{y as I,E as u};
