import{r as o}from"./vendor.64e57edd.js";import{s as v,E as w,G as j,aw as C,ax as N,ay as z,v as c,o as k,t as H,az as I}from"./index.cdbf346f.js";function s(){return s=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},s.apply(this,arguments)}function h(e,a){if(e==null)return{};var r={},t=Object.keys(e),l,n;for(n=0;n<t.length;n++)l=t[n],!(a.indexOf(l)>=0)&&(r[l]=e[l]);return r}var O=v((e,a)=>{var{children:r,placeholder:t,className:l}=e,n=h(e,["children","placeholder","className"]);return o.exports.createElement(c.select,s({},n,{ref:a,className:H("chakra-select",l)}),t&&o.exports.createElement("option",{value:""},t),r)}),A=v((e,a)=>{var r=w("Select",e),t=j(e),{rootProps:l,placeholder:n,icon:g,color:i,height:x,h:d,minH:m,minHeight:_,iconColor:p,iconSize:u}=t,y=h(t,["rootProps","placeholder","icon","color","height","h","minH","minHeight","iconColor","iconSize","isFullWidth"]),[E,S]=C(y,I),f=N(S),b={width:"100%",height:"fit-content",position:"relative",color:i},P=z({},r.field,{paddingEnd:"2rem",_focus:{zIndex:"unset"}});return o.exports.createElement(c.div,s({className:"chakra-select__wrapper",__css:b},E,l),o.exports.createElement(O,s({ref:a,height:d!=null?d:x,minH:m!=null?m:_,placeholder:n},f,{__css:P}),e.children),o.exports.createElement(L,s({"data-disabled":k(f.disabled)},(p||i)&&{color:p||i},{__css:r.icon},u&&{fontSize:u}),g))}),W=e=>o.exports.createElement("svg",s({viewBox:"0 0 24 24"},e),o.exports.createElement("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})),F=c("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),L=e=>{var{children:a=o.exports.createElement(W,null)}=e,r=h(e,["children"]),t=o.exports.cloneElement(a,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return o.exports.createElement(F,s({},r,{className:"chakra-select__icon-wrapper"}),o.exports.isValidElement(a)?t:null)};export{A as S};