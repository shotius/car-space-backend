import{r as i}from"./vendor.3ffe2d28.js";import{l as D,p as c,a1 as F,n as N,t as w,v as P,o as f,s as G,O as C}from"./index.52b447cf.js";function H(e,r){if(e!=null){if(typeof e=="function"){e(r);return}try{e.current=r}catch{throw new Error("Cannot assign value '"+r+"' to ref '"+e+"'")}}}function z(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return i.exports.useMemo(()=>r.every(n=>n==null)?null:n=>{r.forEach(a=>{a&&H(a,n)})},r)}var[ne,V]=D({strict:!1,name:"ButtonGroupContext"}),B={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},U=c("span",{baseStyle:B});c("input",{baseStyle:B});function d(){return d=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},d.apply(this,arguments)}function q(e,r){if(e==null)return{};var t={},n=Object.keys(e),a,s;for(s=0;s<n.length;s++)a=n[s],!(r.indexOf(a)>=0)&&(t[a]=e[a]);return t}var J=F({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),Q=N((e,r)=>{var t=w("Spinner",e),n=P(e),{label:a="Loading...",thickness:s="2px",speed:o="0.45s",emptyColor:u="transparent",className:l}=n,p=q(n,["label","thickness","speed","emptyColor","className"]),g=f("chakra-spinner",l),h=d({display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderRadius:"99999px",borderWidth:s,borderBottomColor:u,borderLeftColor:u,animation:J+" "+o+" linear infinite"},t);return i.exports.createElement(c.div,d({ref:r,__css:h,className:g},p),a&&i.exports.createElement(U,null,a))});function v(){return v=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},v.apply(this,arguments)}function X(e,r){if(e==null)return{};var t={},n=Object.keys(e),a,s;for(s=0;s<n.length;s++)a=n[s],!(r.indexOf(a)>=0)&&(t[a]=e[a]);return t}var k=e=>{var{label:r,placement:t,children:n=i.exports.createElement(Q,{color:"currentColor",width:"1em",height:"1em"}),className:a,__css:s}=e,o=X(e,["label","placement","spacing","children","className","__css"]),u=f("chakra-button__spinner",a),l=t==="start"?"marginEnd":"marginStart",p=i.exports.useMemo(()=>v({display:"flex",alignItems:"center",position:r?"relative":"absolute",[l]:r?"0.5rem":0,fontSize:"1em",lineHeight:"normal"},s),[s,r,l]);return i.exports.createElement(c.div,v({className:u},o,{__css:p}),n)};function b(){return b=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},b.apply(this,arguments)}function Y(e,r){if(e==null)return{};var t={},n=Object.keys(e),a,s;for(s=0;s<n.length;s++)a=n[s],!(r.indexOf(a)>=0)&&(t[a]=e[a]);return t}var I=e=>{var{children:r,className:t}=e,n=Y(e,["children","className"]),a=i.exports.isValidElement(r)?i.exports.cloneElement(r,{"aria-hidden":!0,focusable:!1}):r,s=f("chakra-button__icon",t);return i.exports.createElement(c.span,b({display:"inline-flex",alignSelf:"center",flexShrink:0},n,{className:s}),a)};function Z(e){var[r,t]=i.exports.useState(!e),n=i.exports.useCallback(s=>{!s||t(s.tagName==="BUTTON")},[]),a=r?"button":void 0;return{ref:n,type:a}}function ee(e,r){if(e==null)return{};var t={},n=Object.keys(e),a,s;for(s=0;s<n.length;s++)a=n[s],!(r.indexOf(a)>=0)&&(t[a]=e[a]);return t}function m(){return m=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},m.apply(this,arguments)}var ae=N((e,r)=>{var t=V(),n=w("Button",m({},t,e)),a=P(e),{isDisabled:s=t==null?void 0:t.isDisabled,isLoading:o,isActive:u,isFullWidth:l,children:p,leftIcon:g,rightIcon:h,loadingText:x,iconSpacing:L="0.5rem",type:y,spinner:_,spinnerPlacement:S="start",className:W,as:O}=a,$=ee(a,["isDisabled","isLoading","isActive","isFullWidth","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"]),A=i.exports.useMemo(()=>{var j,R=G({},(j=n==null?void 0:n._focus)!=null?j:{},{zIndex:1});return m({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",width:l?"100%":"auto"},n,!!t&&{_focus:R})},[n,t,l]),{ref:K,type:M}=Z(O),E={rightIcon:h,leftIcon:g,iconSpacing:L,children:p};return i.exports.createElement(c.button,m({disabled:s||o,ref:z(r,K),as:O,type:y!=null?y:M,"data-active":C(u),"data-loading":C(o),__css:A,className:f("chakra-button",W)},$),o&&S==="start"&&i.exports.createElement(k,{className:"chakra-button__spinner--start",label:x,placement:"start"},_),o?x||i.exports.createElement(c.span,{opacity:0},i.exports.createElement(T,E)):i.exports.createElement(T,E),o&&S==="end"&&i.exports.createElement(k,{className:"chakra-button__spinner--end",label:x,placement:"end"},_))});function T(e){var{leftIcon:r,rightIcon:t,children:n,iconSpacing:a}=e;return i.exports.createElement(i.exports.Fragment,null,r&&i.exports.createElement(I,{marginEnd:a},r),n,t&&i.exports.createElement(I,{marginStart:a},t))}export{ae as B,Q as S,B as v};
