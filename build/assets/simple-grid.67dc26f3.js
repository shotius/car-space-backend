import{r as p}from"./vendor.cfb83e27.js";import{f as c,c as b,ai as f,G as j}from"./index.89c64e47.js";import{p as g}from"./PublicLayout.cc0552fc.js";function l(){return l=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a])}return r},l.apply(this,arguments)}function y(r,t){if(r==null)return{};var e={},a=Object.keys(r),n,o;for(o=0;o<a.length;o++)n=a[o],!(t.indexOf(n)>=0)&&(e[n]=r[n]);return e}var O=c((r,t)=>{var{area:e,templateAreas:a,gap:n,rowGap:o,columnGap:i,column:s,row:u,autoFlow:d,autoRows:w,templateRows:v,autoColumns:h,templateColumns:C}=r,x=y(r,["area","templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"]),G={display:"grid",gridArea:e,gridTemplateAreas:a,gridGap:n,gridRowGap:o,gridColumnGap:i,gridAutoColumns:h,gridColumn:s,gridRow:u,gridAutoFlow:d,gridAutoRows:w,gridTemplateRows:v,gridTemplateColumns:C};return p.exports.createElement(b.div,l({ref:t,__css:G},x))});function m(){return m=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a])}return r},m.apply(this,arguments)}function R(r,t){if(r==null)return{};var e={},a=Object.keys(r),n,o;for(o=0;o<a.length;o++)n=a[o],!(t.indexOf(n)>=0)&&(e[n]=r[n]);return e}var L=c((r,t)=>{var{columns:e,spacingX:a,spacingY:n,spacing:o,minChildWidth:i}=r,s=R(r,["columns","spacingX","spacingY","spacing","minChildWidth"]),u=i?P(i):_(e);return p.exports.createElement(O,m({ref:t,gap:o,columnGap:a,rowGap:n,templateColumns:u},s))});function A(r){return j(r)?r+"px":r}function P(r){return g(r,t=>f(t)?null:"repeat(auto-fit, minmax("+A(t)+", 1fr))")}function _(r){return g(r,t=>f(t)?null:"repeat("+t+", minmax(0, 1fr))")}export{L as S};
