var d=Object.defineProperty;var a=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;var p=(t,r,e)=>r in t?d(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,c=(t,r)=>{for(var e in r||(r={}))u.call(r,e)&&p(t,e,r[e]);if(a)for(var e of a(r))l.call(r,e)&&p(t,e,r[e]);return t};var i=(t,r)=>{var e={};for(var o in t)u.call(t,o)&&r.indexOf(o)<0&&(e[o]=t[o]);if(t!=null&&a)for(var o of a(t))r.indexOf(o)<0&&l.call(t,o)&&(e[o]=t[o]);return e};import{r as h,R as v}from"./vendor.41c4480e.js";import{B as j}from"./button.4e7941a2.js";const E=h.exports.forwardRef((w,R)=>{var s=w,{h:t=["44px",null,"40px"],fontSize:r=["16px"],borderRadius:e="8px",variant:o="solid",fontWeight:x="light",bg:n="autoOrange.500",color:f="white",w:m="full",children:g}=s,B=i(s,["h","fontSize","borderRadius","variant","fontWeight","bg","color","w","children"]);return v.createElement(j,c({variant:o,color:f,h:t,w:m,bg:n,fontWeight:x,fontSize:r,borderRadius:e,_hover:{bg:n},_active:{bg:"autoOrange.400"},ref:R},B),g)});export{E as B};
