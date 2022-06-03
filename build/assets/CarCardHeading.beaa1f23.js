var R=Object.defineProperty;var g=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var C=(t,a,e)=>a in t?R(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,S=(t,a)=>{for(var e in a||(a={}))x.call(a,e)&&C(t,e,a[e]);if(g)for(var e of g(a))A.call(a,e)&&C(t,e,a[e]);return t};var y=(t,a)=>{var e={};for(var o in t)x.call(t,o)&&a.indexOf(o)<0&&(e[o]=t[o]);if(t!=null&&g)for(var o of g(t))a.indexOf(o)<0&&A.call(t,o)&&(e[o]=t[o]);return e};import{Y as b,j as r,K as w,r as I,a as H,b as L,a2 as T,f as B,aB as _,aC as v,aD as E,c as M,e as k,o as F,V as O,T as j,L as z,I as G,aE as Z,aF as N,aG as D,aH as Q,aI as U,k as V}from"./index.8597a41f.js";import{B as W,c as Y,T as q}from"./ButtonRound.3ba11ee7.js";import{u as K}from"./useRoles.6ffe10b6.js";const $=b({displayName:"HeartFilled",viewBox:"0 0 16 15",path:r(w,{children:r("path",{id:"Icon_ionic-ios-heart","data-name":"Icon ionic-ios-heart",d:"M15.067,3.938h-.038a4.4,4.4,0,0,0-3.654,1.95,4.4,4.4,0,0,0-3.654-1.95H7.683A4.294,4.294,0,0,0,3.375,8.175a8.984,8.984,0,0,0,1.838,4.976,31.909,31.909,0,0,0,6.162,5.786,31.909,31.909,0,0,0,6.162-5.786,8.984,8.984,0,0,0,1.838-4.976A4.294,4.294,0,0,0,15.067,3.938Z",transform:"translate(-3.375 -3.938)",fill:"#DC1864"})})}),J=b({displayName:"HeartIcon",viewBox:"0 0 16 15",path:r(w,{children:r("path",{id:"Icon_material-favorite-border","data-name":"Icon material-favorite-border",d:"M14.6,4.5A4.75,4.75,0,0,0,11,6.208,4.75,4.75,0,0,0,7.4,4.5,4.406,4.406,0,0,0,3,9c0,3.09,2.72,5.608,6.84,9.433L11,19.5l1.16-1.079C16.28,14.6,19,12.086,19,9A4.406,4.406,0,0,0,14.6,4.5ZM11.08,17.211l-.08.082-.08-.082C7.112,13.688,4.6,11.358,4.6,9A2.764,2.764,0,0,1,7.4,6.135a3.127,3.127,0,0,1,2.856,1.929h1.5A3.108,3.108,0,0,1,14.6,6.135,2.764,2.764,0,0,1,17.4,9C17.4,11.358,14.888,13.688,11.08,17.211Z",transform:"translate(-3 -4.5)"})})}),X=m=>{var c=m,{boxSize:t=6,carId:a,buttonInactiveColor:e="autoGrey.500"}=c,o=y(c,["boxSize","carId","buttonInactiveColor"]);const[p,n]=I.exports.useState(!1),i=H(),{favouriteCarIds:l,likingCar:s,isAuthenticated:d}=L(h=>h.userInfoSlice),{isDesktop:u}=T(),f=B();return I.exports.useEffect(()=>{(l==null?void 0:l.length)&&l.includes(a)?n(!0):n(!1)},[l]),r(W,S({icon:p?$:J,boxSize:t,bg:p?"autoOrange.100":e,onClick:h=>{h.stopPropagation&&h.stopPropagation(),d&&n(!p),d?s||i(_(a)).unwrap().then(()=>n(!0)).catch(P=>{n(!1),f({title:P,position:"top",duration:2e3,status:"error"})}):i(u?v():E())},_hover:{fill:"autoOrange.600",bg:"autoOrange.200"}},o))},st=({id:t,model:a,year:e})=>{const{isAdmin:o}=K(),{catalogQuery:m}=L(i=>i.globalAppState),c=H(),p=M(),n=B();return k(F,{justifyContent:"space-between",w:"full",children:[k(O,{alignItems:"flex-start",spacing:"0",children:[r(j,{fontFamily:"Roboto Medium",fontSize:"18px",maxW:["200px","150px"],noOfLines:1,_hover:{textDecor:"underline"},children:r(z,{to:`/car/${t}`,children:Y(a)})}),r(q,{opacity:"50%",children:e||"Year: -"})]}),o?r(G,{icon:r(Z,{}),"aria-label":"delete car",onClick:i=>{i.stopPropagation&&i.stopPropagation(),confirm("Do you realy want to delete the car?")&&c(N(t)).unwrap().then(()=>{const s=new URLSearchParams(m);c(D(s)).unwrap().then(d=>{const u=s.get("page");if(!d.cars.length&&u&&u!=="1"){const f=parseInt(u)-1||"1";s.set("page",f.toString()),c(Q(s.toString())),p.push({pathname:U,search:s.toString()}),c(D(s))}}),n({title:"Deleted successfully",position:"top",status:"success",duration:2e3})}).catch(s=>{V(s)&&n({title:s.message,position:"top",status:"error",duration:2e3}),n({title:"Could not delelete the card",position:"top",status:"error",duration:2e3})})}}):r(X,{h:"40px",w:"36px",boxSize:5,carId:t})]})};export{X as B,st as C};