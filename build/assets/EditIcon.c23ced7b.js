var V=Object.defineProperty,U=Object.defineProperties;var Y=Object.getOwnPropertyDescriptors;var H=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var I=(t,e,r)=>e in t?V(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,w=(t,e)=>{for(var r in e||(e={}))W.call(e,r)&&I(t,r,e[r]);if(H)for(var r of H(e))k.call(e,r)&&I(t,r,e[r]);return t},z=(t,e)=>U(t,Y(e));var T=(t,e)=>{var r={};for(var a in t)W.call(t,a)&&e.indexOf(a)<0&&(r[a]=t[a]);if(t!=null&&H)for(var a of H(t))e.indexOf(a)<0&&k.call(t,a)&&(r[a]=t[a]);return r};import{a9 as D,b2 as K,ag as G,bs as X,ah as Z,r as u,ab as q,aa as J,bd as x,bt as Q,bu as ee,bv as te,e as O,bw as re,j as c,bx as ae,f as ne,F as oe,m as ie,V as se,H as de,n as le,by as ce,t as ue,Y as ge,K as he}from"./index.4fce1fda.js";function L(){return L=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},L.apply(this,arguments)}function fe(t,e){if(t==null)return{};var r={},a=Object.keys(t),n,o;for(o=0;o<a.length;o++)n=a[o],!(e.indexOf(n)>=0)&&(r[n]=t[n]);return r}var pe=["className","rows"],me=D(function(t,e){var r=K("Textarea",t),a=G(t),n=a.className,o=a.rows,d=fe(a,pe),p=X(d),s=["h","minH","height","minHeight"],i=o?Z(r,s):r;return u.exports.createElement(q.textarea,L({ref:e,rows:o},p,{className:J("chakra-textarea",n),__css:i}))});const y="/api/blogs",ve=async()=>{const{data:t}=await x.get(y);return t},be=async t=>(await x.get(`${y}/${t}`)).data,xe=async t=>(await x.get(`${y}/random`,{params:{limit:t}})).data,ye=async t=>(await x.post(y,t)).data,Se=async t=>(await x.delete(`${y}/${t}`)).data,we=async t=>{const e=t.get("id");return(await x.put(`${y}/${e}`,t)).data},A={getAllBlogs:ve,getBlogById:be,createBlog:ye,deleteBlogById:Se,updateBlogById:we,getRandomBlogs:xe};var ze=u.exports.useLayoutEffect,Fe=function(e){var r=u.exports.useRef(e);return ze(function(){r.current=e}),r},$=function(e,r){if(typeof e=="function"){e(r);return}e.current=r},He=function(e,r){var a=u.exports.useRef();return u.exports.useCallback(function(n){e.current=n,a.current&&$(a.current,null),a.current=r,r&&$(r,n)},[r])},j={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},N=function(e){Object.keys(j).forEach(function(r){e.style.setProperty(r,j[r],"important")})},l=null,Re=function(e,r){var a=e.scrollHeight;return r.sizingStyle.boxSizing==="border-box"?a+r.borderSize:a-r.paddingSize};function Be(t,e,r,a){r===void 0&&(r=1),a===void 0&&(a=1/0),l||(l=document.createElement("textarea"),l.setAttribute("tabindex","-1"),l.setAttribute("aria-hidden","true"),N(l)),l.parentNode===null&&document.body.appendChild(l);var n=t.paddingSize,o=t.borderSize,d=t.sizingStyle,p=d.boxSizing;Object.keys(d).forEach(function(m){var h=m;l.style[h]=d[h]}),N(l),l.value=e;var s=Re(l,t);l.value="x";var i=l.scrollHeight-n,g=i*r;p==="border-box"&&(g=g+n+o),s=Math.max(g,s);var f=i*a;return p==="border-box"&&(f=f+n+o),s=Math.min(f,s),[s,i]}var _=function(){},Ce=function(e,r){return e.reduce(function(a,n){return a[n]=r[n],a},{})},Te=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],Le=!!document.documentElement.currentStyle,Ee=function(e){var r=window.getComputedStyle(e);if(r===null)return null;var a=Ce(Te,r),n=a.boxSizing;if(n==="")return null;Le&&n==="border-box"&&(a.width=parseFloat(a.width)+parseFloat(a.borderRightWidth)+parseFloat(a.borderLeftWidth)+parseFloat(a.paddingRight)+parseFloat(a.paddingLeft)+"px");var o=parseFloat(a.paddingBottom)+parseFloat(a.paddingTop),d=parseFloat(a.borderBottomWidth)+parseFloat(a.borderTopWidth);return{sizingStyle:a,paddingSize:o,borderSize:d}},Ie=function(e){var r=Fe(e);u.exports.useLayoutEffect(function(){var a=function(o){r.current(o)};return window.addEventListener("resize",a),function(){window.removeEventListener("resize",a)}},[])},We=function(e,r){var a=e.cacheMeasurements,n=e.maxRows,o=e.minRows,d=e.onChange,p=d===void 0?_:d,s=e.onHeightChange,i=s===void 0?_:s,g=Q(e,["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"]),f=g.value!==void 0,m=u.exports.useRef(null),h=He(m,r),R=u.exports.useRef(0),v=u.exports.useRef(),S=function(){var b=m.current,C=a&&v.current?v.current:Ee(b);if(!!C){v.current=C;var E=Be(C,b.value||b.placeholder||"x",o,n),F=E[0],M=E[1];R.current!==F&&(R.current=F,b.style.setProperty("height",F+"px","important"),i(F,{rowHeight:M}))}},B=function(b){f||S(),p(b)};return u.exports.useLayoutEffect(S),Ie(S),u.exports.createElement("textarea",ee({},g,{onChange:B,ref:h}))},ke=u.exports.forwardRef(We),Ae=ke;const $e=p=>{var s=p,{name:t,type:e="file",multiple:r=!1,value:a=void 0,style:n={marginTop:"10px"},label:o}=s,d=T(s,["name","type","multiple","value","style","label"]);const[i,g,{setValue:f}]=te(t);return O(re,{children:[c(ae,{mb:"0",htmlFor:o,children:o}),c("input",z(w(z(w({id:o,type:e,multiple:r},i),{value:a,style:n}),d),{onChange:m=>{const h=m.currentTarget.files;f(h)}}))]})},je={header:"",cover:null,body:""},Oe=({initBlog:t,operation:e="adding",closeForm:r=()=>{},refetchCb:a=()=>{}})=>{const n=ne(),o=t&&e==="modifing"?z(w({},t),{cover:null}):je;function d(i){return()=>A.createBlog(i).then(()=>{n({title:"Blog created",status:"success",position:"top",duration:3e3})}).catch(()=>{n({title:"Something went wrong",status:"error",position:"top"})})}function p(i){return()=>A.updateBlogById(i).then(()=>{r(),a(),n({title:"blog has been updated",status:"success",position:"top"})}).catch(()=>n({title:"Could not update blog",status:"error",position:"top"}))}function s(i,{setSubmitting:g}){const v=i,{cover:f}=v,m=T(v,["cover"]),h=new FormData;f&&h.append("cover",f[0]);for(let[S,B]of Object.entries(m))h.append(S,B);(e==="adding"?d(h):p(h))().finally(()=>g(!1))}return c(oe,{initialValues:o,onSubmit:s,children:({isSubmitting:i})=>c(ie,{children:O(se,{spacing:"4",children:[c(de,{children:"Add new blog"}),c(le,{name:"header",label:"Blog Heading",placeholder:"Heading"}),c($e,{name:"cover",label:"Cover"}),c(ce,{name:"body",children:({field:g})=>c(me,z(w({mt:"2"},g),{placeholder:"Write Description",size:"sm",as:Ae,maxRows:10}))}),c(ue,{isLoading:i,type:"submit",children:e==="adding"?" Add new Blog":"Update blog"})]})})})},Pe=ge({displayName:"EditIcon",viewBox:"0 0 1024 1024",path:c(he,{children:c("path",{d:"M347.6 699c1.6 0 3.2-0.2 4.8-0.4L486.9 675c1.6-0.3 3.1-1 4.2-2.2l339.1-339.1c3.1-3.1 3.1-8.2 0-11.3l-133-133c-1.5-1.5-3.5-2.3-5.7-2.3s-4.2 0.8-5.7 2.3l-339 339c-1.2 1.2-1.9 2.6-2.2 4.2L321 667.2c-1.5 8.9 1.2 17.5 7.5 23.8 5.3 5.2 11.9 8 19.1 8z m53.9-139.5l290.2-290.1 58.6 58.6-290.2 290.1-71.1 12.6 12.5-71.2zM739 827H284c-19.9 0-36-16.1-36-36s16.1-36 36-36h455c19.9 0 36 16.1 36 36s-16.1 36-36 36z"})})});export{Oe as A,Pe as E,$e as F,me as T,Ae as a,A as b};
