var I=Object.defineProperty;var u=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var _=(r,a,e)=>a in r?I(r,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[a]=e,d=(r,a)=>{for(var e in a||(a={}))h.call(a,e)&&_(r,e,a[e]);if(u)for(var e of u(a))y.call(a,e)&&_(r,e,a[e]);return r};var f=(r,a)=>{var e={};for(var t in r)h.call(r,t)&&a.indexOf(t)<0&&(e[t]=r[t]);if(r!=null&&u)for(var t of u(r))a.indexOf(t)<0&&y.call(r,t)&&(e[t]=r[t]);return e};import{r as m,R as s,L as P}from"./vendor.a1e1707f.js";import{C,V as k,F as q,T as j,b as N}from"./text.09075d6d.js";import{u as O,F as S,a as R}from"./formik.4be5d63a.js";import{b as v,F as A}from"./use-form-control.c1cd1745.js";import{k as g,x as T,y as F,S as H,m as b,l as E,G as M,A as V,Q as B,a5 as U,H as W}from"./index.2a853879.js";import{I as $}from"./input.60b405bb.js";import{B as z}from"./button.cba85436.js";import"./react-redux.c1e48ce4.js";import"./axios.7b768d2b.js";import"./focus-visible.5865a200.js";function p(){return p=Object.assign||function(r){for(var a=1;a<arguments.length;a++){var e=arguments[a];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t])}return r},p.apply(this,arguments)}var D=g((r,a)=>{var e=T("FormError",r),t=F(r),n=v();return n!=null&&n.isInvalid?m.exports.createElement(H,{value:e},m.exports.createElement(b.div,p({},n==null?void 0:n.getErrorMessageProps(t,a),{className:E("chakra-form__error-message",r.className),__css:p({display:"flex",alignItems:"center"},e.text)}))):null});function o(){return o=Object.assign||function(r){for(var a=1;a<arguments.length;a++){var e=arguments[a];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t])}return r},o.apply(this,arguments)}function G(r,a){if(r==null)return{};var e={},t=Object.keys(r),n,l;for(l=0;l<t.length;l++)n=t[l],!(a.indexOf(n)>=0)&&(e[n]=r[n]);return e}var K=g((r,a)=>{var e,t=M("FormLabel",r),n=F(r),{children:l,requiredIndicator:i=m.exports.createElement(Q,null)}=n,x=G(n,["className","children","requiredIndicator"]),c=v(),L=(e=c==null?void 0:c.getLabelProps(x,a))!=null?e:o({ref:a},x);return m.exports.createElement(b.label,o({},L,{className:E("chakra-form__label",n.className),__css:o({display:"block",textAlign:"start"},t)}),l,c!=null&&c.isRequired?i:null)}),Q=g((r,a)=>{var e=v(),t=V();if(!(e!=null&&e.isRequired))return null;var n=E("chakra-form__required-indicator",r.className);return m.exports.createElement(b.span,o({},e==null?void 0:e.getRequiredIndicatorProps(r,a),{__css:t.requiredIndicator,className:n}))});const J=t=>{var n=t,{variant:r,children:a}=n,e=f(n,["variant","children"]);return s.createElement(C,d({maxW:r==="full"?"1640px":r==="regular"?"860px":"350px"},e),a)},w=t=>{var n=t,{label:r,size:a}=n,e=f(n,["label","size"]);const[l,{error:i}]=O(e);return s.createElement(A,{isInvalid:!!i},s.createElement(K,{htmlFor:l.name},r),s.createElement($,d(d({},l),e)),i?s.createElement(D,null,i):null)},X=()=>{const r=B();return s.createElement(S,{initialValues:{username:"",password:""},onSubmit:a=>{const e={username:a.username,password:a.password};r(U(e))}},()=>s.createElement(R,null,s.createElement(W,{w:"full",textAlign:"center",mb:4},"Login"),s.createElement(k,{spacing:4},s.createElement(w,{name:"username",label:"Username",placeholder:"username"}),s.createElement(w,{name:"password",label:"Password",placeholder:"password",type:"password"}),s.createElement(z,{variant:"solid",w:"full",colorScheme:"blue",type:"submit"},"Login"),s.createElement(q,{color:"gray.500",as:"sub"},s.createElement(j,null,"if you aren't car dealer or an admin go to "),s.createElement(j,{color:"blue.500",as:"u",pl:1},s.createElement(P,{to:"/home"},"Home"))))))},Y=()=>s.createElement(N,{h:"100vh"},s.createElement(J,{variant:"small"},s.createElement(X,null))),ce=()=>s.createElement(Y,null);export{ce as Login,ce as default};
