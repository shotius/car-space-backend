import{r as p}from"./vendor.64e57edd.js";import{P as c,R,a9 as g,al as d,am as b}from"./index.bd088769.js";function l(){return l=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a])}return r},l.apply(this,arguments)}function j(r,t){if(r==null)return{};var e={},a=Object.keys(r),n,o;for(o=0;o<a.length;o++)n=a[o],!(t.indexOf(n)>=0)&&(e[n]=r[n]);return e}var y=c((r,t)=>{var{area:e,templateAreas:a,gap:n,rowGap:o,columnGap:i,column:s,row:u,autoFlow:f,autoRows:w,templateRows:v,autoColumns:h,templateColumns:C}=r,x=j(r,["area","templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"]),G={display:"grid",gridArea:e,gridTemplateAreas:a,gridGap:n,gridRowGap:o,gridColumnGap:i,gridAutoColumns:h,gridColumn:s,gridRow:u,gridAutoFlow:f,gridAutoRows:w,gridTemplateRows:v,gridTemplateColumns:C};return p.exports.createElement(R.div,l({ref:t,__css:G},x))});function m(){return m=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a])}return r},m.apply(this,arguments)}function O(r,t){if(r==null)return{};var e={},a=Object.keys(r),n,o;for(o=0;o<a.length;o++)n=a[o],!(t.indexOf(n)>=0)&&(e[n]=r[n]);return e}var F=c((r,t)=>{var{columns:e,spacingX:a,spacingY:n,spacing:o,minChildWidth:i}=r,s=O(r,["columns","spacingX","spacingY","spacing","minChildWidth"]),u=i?P(i):_(e);return p.exports.createElement(y,m({ref:t,gap:o,columnGap:a,rowGap:n,templateColumns:u},s))});function A(r){return b(r)?r+"px":r}function P(r){return g(r,t=>d(t)?null:"repeat(auto-fit, minmax("+A(t)+", 1fr))")}function _(r){return g(r,t=>d(t)?null:"repeat("+t+", minmax(0, 1fr))")}export{F as S};
