var F=Object.defineProperty,I=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var A=(r,o,s)=>o in r?F(r,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[o]=s,D=(r,o)=>{for(var s in o||(o={}))L.call(o,s)&&A(r,s,o[s]);if(a)for(var s of a(o))z.call(o,s)&&A(r,s,o[s]);return r},W=(r,o)=>I(r,G(o));var M=(r,o)=>{var s={};for(var n in r)L.call(r,n)&&o.indexOf(n)<0&&(s[n]=r[n]);if(r!=null&&a)for(var n of a(r))o.indexOf(n)<0&&z.call(r,n)&&(s[n]=r[n]);return s};import{b as V,r as u,j as i,o as C,e as S,Z as x,T as k,K as _,V as T,a1 as E,$ as K,H as Q}from"./index.5a316967.js";import{D as Z}from"./DealerCarCard.6d17dc64.js";import{A as $}from"./ArrowNextIcon.6e54dc3a.js";import{A as q}from"./ArrowPrevIcon.9faba049.js";import{a as y,B as j}from"./range.9e64e692.js";import{u as J}from"./useMediaQueryMin.c210dc7c.js";import{C as O}from"./CatalogListWrap.ba533f38.js";import{u as U}from"./CatalogPage.783c3ff1.js";import"./TextSecondary.3b524e4b.js";import"./toTrippleNumber.af3f6dfa.js";import"./chakra-ui-image.esm.43e140aa.js";import"./CarCardHeading.e44ab24b.js";import"./useRoles.de92b421.js";import"./ScrollToTop.ec6dae38.js";import"./types.cb80ff16.js";import"./Card.c49580d4.js";import"./SelectSearch.89a9df70.js";import"./MobileYearSelect.43e800c6.js";import"./SelectWrapper.6c1dcb83.js";import"./ScrollableList.95429d6a.js";const X=({activePage:r,totalPages:o,onChange:s,paginNumbers:n})=>{const{isDesktop:h,isMobile:e,isTablet:c}=V(t=>t.globalAppState.screen),[d,p]=u.exports.useState([]),[b,f]=u.exports.useState([]),[H,m]=u.exports.useState([]),{isLargerThan:w}=J(360);let l=3;c&&(l=5),h&&(l=10);const N=d.length===1,R=b.length===1,B=r>b.length-l;return u.exports.useEffect(()=>{r===l?p(n.slice(0,l+1)):r>l?p([1]):p(n.slice(0,l)),r>l&&r<=o-l?m(e?[r-1,r,r+1]:[r-2,r-1,r,r+1,r+2]):m([]),r===o-l+1?(f(n.slice(o-l-1,o)),p([1])):r>o-l?(f(n.slice(o-l,o)),p([1])):f([o]),n.length<l+3&&(p([...n]),m([]),f([]))},[r,o]),i(C,{children:w?S(C,{w:"full",display:n.length>1?"flex":"none",children:[d.map(t=>i(y,{onClick:()=>s(t),active:r===t,children:i(x,{fontSize:"18px",fontWeight:"light",children:t})},t)),i(k,{display:N?"block":"none",children:"..."}),H.map(t=>i(y,{onClick:()=>s(t),active:r===t,children:i(x,{fontSize:"18px",fontWeight:"light",children:t})},t)),i(k,{display:R?"block":"none",children:"..."}),b.map(t=>i(y,{onClick:()=>s(t),active:r===t,display:w&&B?"block":"none",children:i(x,{fontSize:"18px",fontWeight:"light",children:t})},t))]}):S(_,{children:[i(k,{display:r>1?"block":"none",children:"..."}),i(y,{active:!0,children:i(x,{fontSize:"18px",fontWeight:"light",children:r})}),i(k,{display:r<n.length?"block":"none",children:"..."})]})})},Y=h=>{var e=h,{activePage:r,totalPages:o=1,onPageChange:s}=e,n=M(e,["activePage","totalPages","onPageChange"]);const c=[...Array(o).keys()].map(d=>d+1);return S(C,W(D({spacing:["1","2"]},n),{children:[i(j,{variant:"ghost",bg:"transparent",icon:q,disabled:r===1,onClick:()=>s(r-1),boxSize:"6",_active:{bg:"autoGrey.400"},display:o===1?"none":"block"}),i(X,{activePage:r,totalPages:o,onChange:s,paginNumbers:c}),i(j,{variant:"ghost",bg:"transparent",icon:$,fill:"#000",boxSize:"6",disabled:r===o,onClick:()=>s(r+1),_active:{bg:"autoGrey.400"},display:o===1?"none":"block"})]}))},yr=()=>{const{fethingCars:r,cars:o,totalPages:s,page:n,changePage:h}=U();return r?i(T,{h:"100vh",w:"full",children:i(E,{})}):S(T,{spacing:"90px",w:"full",children:[o.length?i(O,{gap:"16px",children:o.map((e,c)=>i(K,{justify:"center",children:i(Z,{car:e})},c))}):i(Q,{children:"No Results found"}),i(Y,{totalPages:s,activePage:n,onPageChange:e=>h(e),display:o.length?"flex":"none"})]})};export{yr as default};