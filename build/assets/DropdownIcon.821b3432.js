var y=Object.defineProperty;var l=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var b=(e,t,a)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))g.call(t,a)&&b(e,a,t[a]);if(l)for(var a of l(t))v.call(t,a)&&b(e,a,t[a]);return e};var p=(e,t)=>{var a={};for(var o in e)g.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&l)for(var o of l(e))t.indexOf(o)<0&&v.call(e,o)&&(a[o]=e[o]);return a};import{r as x,R as n,L as E}from"./vendor.941bfce7.js";import{m as C,d,I,H as j,V as _,e as B,T as L}from"./PublicLayout.6f3216c5.js";import{s as F,t as H,v as k}from"./index.88f070f9.js";import{B as A}from"./button.e62c2715.js";function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},f.apply(this,arguments)}function N(e,t){if(e==null)return{};var a={},o=Object.keys(e),r,i;for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&(a[r]=e[r]);return a}var T=F((e,t)=>{var{ratio:a=4/3,children:o,className:r}=e,i=N(e,["ratio","children","className"]),c=x.exports.Children.only(o),s=H("chakra-aspect-ratio",r);return x.exports.createElement(k.div,f({ref:t,position:"relative",className:s,_before:{height:0,content:'""',display:"block",paddingBottom:C(a,h=>1/h*100+"%")},__css:{"& > *:not(style)":{overflow:"hidden",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},"& > img, & > video":{objectFit:"cover"}}},i),c)});const R=d({displayName:"HeartFilled",viewBox:"0 0 16 15",path:n.createElement(n.Fragment,null,n.createElement("path",{id:"Icon_ionic-ios-heart","data-name":"Icon ionic-ios-heart",d:"M15.067,3.938h-.038a4.4,4.4,0,0,0-3.654,1.95,4.4,4.4,0,0,0-3.654-1.95H7.683A4.294,4.294,0,0,0,3.375,8.175a8.984,8.984,0,0,0,1.838,4.976,31.909,31.909,0,0,0,6.162,5.786,31.909,31.909,0,0,0,6.162-5.786,8.984,8.984,0,0,0,1.838-4.976A4.294,4.294,0,0,0,15.067,3.938Z",transform:"translate(-3.375 -3.938)",fill:"#fb5607"}))}),O=d({displayName:"HeartIcon",viewBox:"0 0 16 15",path:n.createElement(n.Fragment,null,n.createElement("path",{id:"Icon_material-favorite-border","data-name":"Icon material-favorite-border",d:"M14.6,4.5A4.75,4.75,0,0,0,11,6.208,4.75,4.75,0,0,0,7.4,4.5,4.406,4.406,0,0,0,3,9c0,3.09,2.72,5.608,6.84,9.433L11,19.5l1.16-1.079C16.28,14.6,19,12.086,19,9A4.406,4.406,0,0,0,14.6,4.5ZM11.08,17.211l-.08.082-.08-.082C7.112,13.688,4.6,11.358,4.6,9A2.764,2.764,0,0,1,7.4,6.135a3.127,3.127,0,0,1,2.856,1.929h1.5A3.108,3.108,0,0,1,14.6,6.135,2.764,2.764,0,0,1,17.4,9C17.4,11.358,14.888,13.688,11.08,17.211Z",transform:"translate(-3 -4.5)"}))}),M=h=>{var u=h,{bg:e="white",_activeBg:t={bg:"white"},_hoverBg:a={bg:"white"},icon:o,fill:r,boxSize:i,children:c}=u,s=p(u,["bg","_activeBg","_hoverBg","icon","fill","boxSize","children"]);return n.createElement(A,m({bg:e,onClick:s.onClick,_active:{bg:t},_hover:{bg:a}},s),n.createElement(I,{as:o,boxSize:i,fill:r}),c)},P=o=>{var r=o,{boxSize:e=6,liked:t}=r,a=p(r,["boxSize","liked"]);return n.createElement(M,m({icon:t?R:O,boxSize:e,bg:t?"#FB560729":"autoGrey.500",onClick:i=>{i.stopPropagation&&i.stopPropagation()},_hover:{fill:"red",bg:"#FB560729"}},a))},w=e=>{const t=e.toLocaleLowerCase().split(" "),a=[];return t.forEach(o=>{const r=o[0].toUpperCase()+o.slice(1);a.push(r)}),a.join(" ")},G=({car:e,liked:t=!1})=>n.createElement(j,{justifyContent:"space-between",w:"full"},n.createElement(_,{alignItems:"flex-start",spacing:"0"},n.createElement(B,{fontFamily:"Roboto Medium",fontSize:"18px",maxW:["200px","150px"],noOfLines:1,_hover:{textDecor:"underline"}},n.createElement(E,{to:`/car/${e==null?void 0:e.lN}`},w(e==null?void 0:e.m)," ",w(e==null?void 0:e.mG))),n.createElement(L,{opacity:"50%"},e==null?void 0:e.y)),n.createElement(P,{h:"40px",w:"36px",boxSize:5,liked:t})),V=d({displayName:"DropdownIcon",viewBox:"0 0 25 9",path:n.createElement(n.Fragment,null,n.createElement("path",{width:"10",height:"11",id:"dropdown",d:"M16.191,18.93l7.562-7.28a1.463,1.463,0,0,1,2.019,0,1.349,1.349,0,0,1,0,1.947L17.2,21.846a1.468,1.468,0,0,1-1.971.04L6.6,13.6a1.346,1.346,0,0,1,0-1.947,1.463,1.463,0,0,1,2.019,0Z",transform:"translate(-6.188 -11.246)",opacity:"1"}))});export{T as A,P as B,G as C,V as D,M as a,w as c};
