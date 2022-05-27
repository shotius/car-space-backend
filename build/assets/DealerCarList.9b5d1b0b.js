var Q=Object.defineProperty,j=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var N=(t,e,r)=>e in t?Q(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,z=(t,e)=>{for(var r in e||(e={}))R.call(e,r)&&N(t,r,e[r]);if(x)for(var r of x(e))D.call(e,r)&&N(t,r,e[r]);return t},L=(t,e)=>j(t,q(e));var H=(t,e)=>{var r={};for(var s in t)R.call(t,s)&&e.indexOf(s)<0&&(r[s]=t[s]);if(t!=null&&x)for(var s of x(t))e.indexOf(s)<0&&D.call(t,s)&&(r[s]=t[s]);return r};import{b as p,r as a,j as o,o as E,e as w,Z as b,T as y,K as B,aH as G,f as V,a as _,c as K,cn as O,cz as U,bq as Z,a3 as $,V as I,a1 as J,$ as X,H as Y}from"./index.845c161f.js";import{D as v}from"./DealerCarCard.aff5c9f5.js";import{A as P}from"./ArrowNextIcon.e91d4315.js";import{A as tt}from"./ArrowPrevIcon.c1374314.js";import{a as C,B as T}from"./range.d8f929ea.js";import{u as et}from"./useMediaQueryMin.403f863d.js";import{C as rt}from"./CatalogListWrap.aa358248.js";import{f as W,u as st}from"./MobileYearSelect.a0caff30.js";import"./TextSecondary.e3c84d79.js";import"./toTrippleNumber.af3f6dfa.js";import"./chakra-ui-image.esm.edc23447.js";import"./CarCardHeading.a463417c.js";import"./SelectSearch.70567fa7.js";import"./SelectWrapper.0fda1c1a.js";import"./ScrollableList.0b0b6477.js";import"./Card.a106318a.js";const ot=({activePage:t,totalPages:e,onChange:r,paginNumbers:s})=>{const{isDesktop:u,isMobile:l,isTablet:h}=p(c=>c.globalAppState.screen),[f,d]=a.exports.useState([]),[S,g]=a.exports.useState([]),[A,m]=a.exports.useState([]),{isLargerThan:k}=et(360);let i=3;h&&(i=5),u&&(i=10);const F=f.length===1,n=S.length===1,M=t>S.length-i;return a.exports.useEffect(()=>{t===i?d(s.slice(0,i+1)):t>i?d([1]):d(s.slice(0,i)),t>i&&t<=e-i?m(l?[t-1,t,t+1]:[t-2,t-1,t,t+1,t+2]):m([]),t===e-i+1?(g(s.slice(e-i-1,e)),d([1])):t>e-i?(g(s.slice(e-i,e)),d([1])):g([e]),s.length<i+3&&(d([...s]),m([]),g([]))},[t,e]),o(E,{children:k?w(E,{w:"full",display:s.length>1?"flex":"none",children:[f.map(c=>o(C,{onClick:()=>r(c),active:t===c,children:o(b,{fontSize:"18px",fontWeight:"light",children:c})},c)),o(y,{display:F?"block":"none",children:"..."}),A.map(c=>o(C,{onClick:()=>r(c),active:t===c,children:o(b,{fontSize:"18px",fontWeight:"light",children:c})},c)),o(y,{display:n?"block":"none",children:"..."}),S.map(c=>o(C,{onClick:()=>r(c),active:t===c,display:k&&M?"block":"none",children:o(b,{fontSize:"18px",fontWeight:"light",children:c})},c))]}):w(B,{children:[o(y,{display:t>1?"block":"none",children:"..."}),o(C,{active:!0,children:o(b,{fontSize:"18px",fontWeight:"light",children:t})}),o(y,{display:t<s.length?"block":"none",children:"..."})]})})},nt=u=>{var l=u,{activePage:t,totalPages:e=1,onPageChange:r}=l,s=H(l,["activePage","totalPages","onPageChange"]);const h=[...Array(e).keys()].map(f=>f+1);return w(E,L(z({spacing:["1","2"]},s),{children:[o(T,{variant:"ghost",bg:"transparent",icon:tt,disabled:t===1,onClick:()=>r(t-1),boxSize:"6",_active:{bg:"autoGrey.400"},display:e===1?"none":"block"}),o(ot,{activePage:t,totalPages:e,onChange:r,paginNumbers:h}),o(T,{variant:"ghost",bg:"transparent",icon:P,fill:"#000",boxSize:"6",disabled:t===e,onClick:()=>r(t+1),_active:{bg:"autoGrey.400"},display:e===1?"none":"block"})]}))},it=()=>{const[t,e]=a.exports.useState(null),r=W();function s(){return Number(r.get("page"))||1}function u(){t?r.set("page",t.toString()):r.set("page",s().toString()),e(s()),G(r.toString())}return{setActiveCatalogPage:u}},ct=()=>{const t=V(),e=a.exports.useRef(),r=p(l=>l.globalAppState.networkError),s=()=>{e.current=t({title:r,status:"error",position:"top",duration:3e3,isClosable:!0})};return{checkForNetworkError:()=>{r&&s()},NetworkErrorAlert:s}},lt=()=>{const t=_(),e=W(),r=K(),s=st(),{setActiveCatalogPage:u}=it(),{checkForNetworkError:l}=ct(),h=Number(e.get("page"))||1,f=p(n=>n.carsReducer.dealerCars),d=p(n=>n.carsReducer.totalPages),S=p(n=>n.carsReducer.fetchingDealerCars),g=p(n=>n.userInfoSlice.isAuthenticated),A=p(n=>n.globalAppState.networkError),m=p(n=>n.globalAppState.catalogQuery),k=p(n=>n.selectedCarFilters),i=p(n=>n.carsReducer.brands);return a.exports.useEffect(()=>{!i.length&&f.length&&t(O())},[i,f]),a.exports.useEffect(()=>{l()},[A]),a.exports.useEffect(()=>(m||(t(U(!0)),u()),()=>{t(Z())}),[]),a.exports.useEffect(()=>{g&&t($(""))},[g]),a.exports.useEffect(()=>{s(k)},[h,m]),a.exports.useEffect(()=>{console.log("foo queryChanged: ",e.toString())},[e]),{query:e,cars:f,fethingCars:S,totalPages:d,page:h,changePage:n=>{e.set("page",String(n)),r.push({search:e.toString()})}}},Ft=()=>{const{fethingCars:t,cars:e,totalPages:r,page:s,changePage:u}=lt();return t?o(I,{h:"100vh",w:"full",children:o(J,{})}):w(I,{spacing:"90px",w:"full",children:[e.length?o(rt,{gap:"16px",children:e.map((l,h)=>o(X,{justify:"center",children:o(v,{car:l})},h))}):o(Y,{children:"No Results found"}),o(nt,{totalPages:r,activePage:s,onPageChange:l=>u(l),display:e.length?"flex":"none"})]})};export{Ft as default};
