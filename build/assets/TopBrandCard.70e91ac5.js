var g=Object.defineProperty,E=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var u=(e,t,a)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))f.call(t,a)&&u(e,a,t[a]);if(i)for(var a of i(t))x.call(t,a)&&u(e,a,t[a]);return e},b=(e,t)=>E(e,j(t));var m=(e,t)=>{var a={};for(var r in e)f.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&i)for(var r of i(e))t.indexOf(r)<0&&x.call(e,r)&&(a[r]=e[r]);return a};import{R as l,L as S}from"./vendor.f60fafbd.js";import{f as C}from"./PublicLayout.7e84e829.js";import{F as w}from"./text.bf94b5b9.js";import{H as y,X as h}from"./index.42f65ce7.js";import{S as H,C as T}from"./Card.7c1bdfa2.js";import{A as v}from"./SearchButton.d92dcca6.js";import{I}from"./image.b8f630b3.js";const D=L=>{var c=L,{mainText:e,mainFontSize:t={base:"26px",lg:"18px",xl:"20px","2xl":"24px"},mainlineHeight:a={lg:"24px",xl:"26px"},secondaryText:r,secondaryFontSize:n="16px",secondaryTextOpacity:o="50%",mb:s="24px"}=c,d=m(c,["mainText","mainFontSize","mainlineHeight","secondaryText","secondaryFontSize","secondaryTextOpacity","mb"]);return l.createElement(w,b(p({justifyContent:"space-between",mb:s},d),{w:"full",alignItems:"baseline"}),l.createElement(y,{fontSize:t,lineHeight:a,fontWeight:"400"},e),l.createElement(C,{opacity:o,fontSize:n,color:"#000"},l.createElement(S,{to:"#"},r)))},M=o=>{var s=o,{cardCount:e,columnsLaptop:t=6,columnsHD:a=6,children:r}=s,n=m(s,["cardCount","columnsLaptop","columnsHD","children"]);return l.createElement(H,p({overflow:"auto",gap:"4",gridTemplateColumns:[`repeat(${e}, 1fr)`,null,null,`repeat(${t}, 1fr)`,`repeat(${a}, 1fr)`],css:{"&::-webkit-scrollbar":{display:"none"}}},n),r)},P=n=>{var o=n,{image:e,imageWidth:t=["53px",null,null,"56px","70px","81px"],cardColor:a="autoGrey.600"}=o,r=m(o,["image","imageWidth","cardColor"]);return l.createElement(T,p({bg:a},r),l.createElement(h,{h:"full",w:"full"},l.createElement(v,{ratio:1/1,w:t},l.createElement(I,{src:e}))))};export{D as S,P as T,M as a};
