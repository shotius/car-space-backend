import{r as l,a as N}from"./vendor.64e57edd.js";import{X as z,I as M,l as G,s as O,G as X,E as Y,K as J,v as x,t as E,L as P,Y as Q,Z as ee,_ as W,$ as te,a0 as k,a1 as re,a2 as ne,a3 as oe,a4 as ae,a5 as se,a6 as ie,a7 as le,a8 as ue,a9 as B}from"./index.5cd7a341.js";import"./prop-types.d6ec705b.js";function ce(e,t){var r=z(e);l.exports.useEffect(()=>{if(t!=null){var n=null;return n=window.setTimeout(()=>{r()},t),()=>{n&&window.clearTimeout(n)}}},[t,r])}function w(){return w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},w.apply(this,arguments)}var de=e=>l.exports.createElement(M,w({viewBox:"0 0 24 24"},e),l.exports.createElement("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"})),fe=e=>l.exports.createElement(M,w({viewBox:"0 0 24 24"},e),l.exports.createElement("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"})),D=e=>l.exports.createElement(M,w({viewBox:"0 0 24 24"},e),l.exports.createElement("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"}));function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},h.apply(this,arguments)}function ve(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,a;for(a=0;a<n.length;a++)o=n[a],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}var Z={info:{icon:fe,colorScheme:"blue"},warning:{icon:D,colorScheme:"orange"},success:{icon:de,colorScheme:"green"},error:{icon:D,colorScheme:"red"}},[me,pe]=G({name:"AlertContext",errorMessage:"useAlertContext: `context` is undefined. Seems you forgot to wrap alert components in `<Alert />`"}),he=O((e,t)=>{var r,n=X(e),{status:o="info"}=n,a=ve(n,["status"]),i=(r=e.colorScheme)!=null?r:Z[o].colorScheme,s=Y("Alert",h({},e,{colorScheme:i})),u=h({width:"100%",display:"flex",alignItems:"center",position:"relative",overflow:"hidden"},s.container);return l.exports.createElement(me,{value:{status:o}},l.exports.createElement(J,{value:s},l.exports.createElement(x.div,h({role:"alert",ref:t},a,{className:E("chakra-alert",e.className),__css:u}))))}),xe=O((e,t)=>{var r=P();return l.exports.createElement(x.div,h({ref:t},e,{className:E("chakra-alert__title",e.className),__css:r.title}))}),ge=O((e,t)=>{var r=P(),n=h({display:"inline"},r.description);return l.exports.createElement(x.div,h({ref:t},e,{className:E("chakra-alert__desc",e.className),__css:n}))}),ye=e=>{var{status:t}=pe(),{icon:r}=Z[t],n=P();return l.exports.createElement(x.span,h({display:"inherit"},e,{className:E("chakra-alert__icon",e.className),__css:n.icon}),l.exports.createElement(r,{w:"100%",h:"100%"}))};function S(){return S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},S.apply(this,arguments)}function be(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,a;for(a=0;a<n.length;a++)o=n[a],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}var Ke=O((e,t)=>{var{ratio:r=4/3,children:n,className:o}=e,a=be(e,["ratio","children","className"]),i=l.exports.Children.only(n),s=E("chakra-aspect-ratio",o);return l.exports.createElement(x.div,S({ref:t,position:"relative",className:s,_before:{height:0,content:'""',display:"block",paddingBottom:Q(r,u=>1/u*100+"%")},__css:{"& > *:not(style)":{overflow:"hidden",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},"& > img, & > video":{objectFit:"cover"}}},a),i)});function _(){return _=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_.apply(this,arguments)}function Ee(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,a;for(a=0;a<n.length;a++)o=n[a],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}var we=l.exports.forwardRef(function(t,r){var n=t.as,o=n===void 0?"span":n,a=t.style,i=a===void 0?{}:a,s=Ee(t,["as","style"]);return l.exports.createElement(o,_({ref:r,style:_({border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"},i)},s))});function Ae(e,t){if(e!=null)if(_e(e))e(t);else try{e.current=t}catch{throw new Error('Cannot assign value "'+t+'" to ref "'+e+'"')}}function Ce(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}function Te(e){return l.exports.forwardRef(e)}function Oe(e){return Ce()?e?e.ownerDocument:document:null}function _e(e){return!!(e&&{}.toString.call(e)=="[object Function]")}function Me(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return l.exports.useMemo(function(){return t.every(function(n){return n==null})?null:function(n){t.forEach(function(o){Ae(o,n)})}},[].concat(t))}function Pe(e){var t=l.exports.useRef(null);return l.exports.useEffect(function(){t.current=e},[e]),t.current}function j(){return j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},j.apply(this,arguments)}function Se(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,a;for(a=0;a<n.length;a++)o=n[a],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}var je={polite:-1,assertive:-1},g={polite:{},assertive:{}},A={polite:null,assertive:null},$,$e=Te(function(t,r){var n=t.as,o=n===void 0?"div":n,a=t.children,i=t.type,s=i===void 0?"polite":i,u=Se(t,["as","children","type"]),c=l.exports.useRef(null),d=Me(r,c),f=l.exports.useMemo(function(){return l.exports.createElement(o,j({},u,{ref:d,"data-reach-alert":!0}),a)},[a,u]);return Re(s,f,c),f});function L(e,t){var r=++je[e],n=function i(s){if(A[e])g[e][r]=s,R();else{var u=t.createElement("div");u.setAttribute("data-reach-live-"+e,"true"),A[e]=u,t.body.appendChild(A[e]),i(s)}},o=function(s){g[e][r]=s,R()},a=function(){delete g[e][r],R()};return{mount:n,update:o,unmount:a}}function R(){$!=null&&window.clearTimeout($),$=window.setTimeout(function(){Object.keys(g).forEach(function(e){var t=e,r=A[t];r&&N.exports.render(l.exports.createElement(we,{as:"div"},l.exports.createElement("div",{role:t==="assertive"?"alert":"status","aria-live":t},Object.keys(g[t]).map(function(n){return l.exports.cloneElement(g[t][n],{key:n,ref:null})}))),A[t])})},500)}function Re(e,t,r){var n=Pe(e),o=l.exports.useRef(null),a=l.exports.useRef(!1);l.exports.useEffect(function(){var i=Oe(r.current);a.current?n!==e?(o.current&&o.current.unmount(),o.current=L(e,i),o.current.mount(t)):o.current&&o.current.update(t):(a.current=!0,o.current=L(e,i),o.current.mount(t))},[t,e,n,r]),l.exports.useEffect(function(){return function(){o.current&&o.current.unmount()}},[])}function F(e,t){var r=q(e,t),n=r?e[r].findIndex(o=>o.id===t):-1;return{position:r,index:n}}var q=(e,t)=>{var r;return(r=Object.values(e).flat().find(n=>n.id===t))==null?void 0:r.position};function Ie(e){var t=e.includes("right"),r=e.includes("left"),n="center";return t&&(n="flex-end"),r&&(n="flex-start"),{display:"flex",flexDirection:"column",alignItems:n}}var Ne={initial:e=>{var{position:t}=e,r=["top","bottom"].includes(t)?"y":"x",n=["top-right","bottom-right"].includes(t)?1:-1;return t==="bottom"&&(n=1),{opacity:0,[r]:n*24}},animate:{opacity:1,y:0,x:0,scale:1,transition:{duration:.4,ease:[.4,0,.2,1]}},exit:{opacity:0,scale:.85,transition:{duration:.2,ease:[.4,0,1,1]}}},We=e=>{var{id:t,message:r,onCloseComplete:n,onRequestRemove:o,requestClose:a=!1,position:i="bottom",duration:s=5e3}=e,[u,c]=l.exports.useState(s),d=ee();W(()=>{d||n==null||n()},[d]),W(()=>{c(s)},[s]);var f=()=>c(null),V=()=>c(s),I=()=>{d&&o()};l.exports.useEffect(()=>{d&&a&&o()},[d,a,o]),ce(I,u);var U=l.exports.useMemo(()=>Ie(i),[i]);return l.exports.createElement(te.li,{layout:!0,className:"chakra-toast",variants:Ne,initial:"initial",animate:"animate",exit:"exit",onHoverStart:f,onHoverEnd:V,custom:{position:i},style:U},l.exports.createElement($e,{className:"chakra-toast__inner",style:{pointerEvents:"auto",maxWidth:560,minWidth:300,margin:"0.5rem"}},k(r)?r({id:t,onClose:I}):r))};function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},m.apply(this,arguments)}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class C extends l.exports.Component{constructor(t){var r;super(t);r=this,p(this,"state",{top:[],"top-left":[],"top-right":[],"bottom-left":[],bottom:[],"bottom-right":[]}),p(this,"notify",(o,a)=>{var i=this.createToast(o,a),{position:s,id:u}=i;return this.setState(c=>{var d=s.includes("top"),f=d?[i,...c[s]]:[...c[s],i];return m({},c,{[s]:f})}),u}),p(this,"updateToast",(o,a)=>{this.setState(i=>{var s=m({},i),{position:u,index:c}=F(s,o);return u&&c!==-1&&(s[u][c]=m({},s[u][c],a)),s})}),p(this,"closeAll",function(o){var{positions:a}=o===void 0?{}:o;r.setState(i=>{var s=["bottom","bottom-right","bottom-left","top","top-left","top-right"],u=a!=null?a:s;return u.reduce((c,d)=>(c[d]=i[d].map(f=>m({},f,{requestClose:!0})),c),{})})}),p(this,"createToast",(o,a)=>{var i,s;C.counter+=1;var u=(i=a.id)!=null?i:C.counter,c=(s=a.position)!=null?s:"top";return{id:u,message:o,position:c,duration:a.duration,onCloseComplete:a.onCloseComplete,onRequestRemove:()=>this.removeToast(String(u),c),status:a.status,requestClose:!1}}),p(this,"closeToast",o=>{this.setState(a=>{var i=q(a,o);return i?m({},a,{[i]:a[i].map(s=>s.id==o?m({},s,{requestClose:!0}):s)}):a})}),p(this,"removeToast",(o,a)=>{this.setState(i=>m({},i,{[a]:i[a].filter(s=>s.id!=o)}))}),p(this,"isVisible",o=>{var{position:a}=F(this.state,o);return Boolean(a)}),p(this,"getStyle",o=>{var a=o==="top"||o==="bottom",i=a?"0 auto":void 0,s=o.includes("top")?"env(safe-area-inset-top, 0px)":void 0,u=o.includes("bottom")?"env(safe-area-inset-bottom, 0px)":void 0,c=o.includes("left")?void 0:"env(safe-area-inset-right, 0px)",d=o.includes("right")?void 0:"env(safe-area-inset-left, 0px)";return{position:"fixed",zIndex:5500,pointerEvents:"none",display:"flex",flexDirection:"column",margin:i,top:s,bottom:u,right:c,left:d}});var n={notify:this.notify,closeAll:this.closeAll,close:this.closeToast,update:this.updateToast,isActive:this.isVisible};t.notify(n)}render(){return re(this.state).map(t=>{var r=this.state[t];return l.exports.createElement("ul",{key:t,id:"chakra-toast-manager-"+t,style:this.getStyle(t)},l.exports.createElement(ne,{initial:!1},r.map(n=>l.exports.createElement(We,m({key:n.id},n)))))})}}p(C,"counter",0);function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var K="chakra-toast-portal";class ke{constructor(){var t=this;if(v(this,"createToast",void 0),v(this,"removeAll",void 0),v(this,"closeToast",void 0),v(this,"updateToast",void 0),v(this,"isToastActive",void 0),v(this,"bindFunctions",i=>{this.createToast=i.notify,this.removeAll=i.closeAll,this.closeToast=i.close,this.updateToast=i.update,this.isToastActive=i.isActive}),v(this,"notify",function(i,s){return s===void 0&&(s={}),t.createToast==null?void 0:t.createToast(i,s)}),v(this,"close",i=>{var s;(s=this.closeToast)==null||s.call(this,i)}),v(this,"closeAll",i=>{var s;(s=this.removeAll)==null||s.call(this,i)}),v(this,"update",function(i,s){s===void 0&&(s={}),t.updateToast==null||t.updateToast(i,s)}),v(this,"isActive",i=>{var s;return(s=this.isToastActive)==null?void 0:s.call(this,i)}),!!oe){var r,n=document.getElementById(K);if(n)r=n;else{var o,a=document.createElement("div");a.id=K,(o=document.body)==null||o.appendChild(a),r=a}N.exports.render(l.exports.createElement(C,{notify:this.bindFunctions}),r)}}}var T=new ke;function H(e,t){var r;if(!!e){var n={"top-start":{ltr:"top-left",rtl:"top-right"},"top-end":{ltr:"top-right",rtl:"top-left"},"bottom-start":{ltr:"bottom-left",rtl:"bottom-right"},"bottom-end":{ltr:"bottom-right",rtl:"bottom-left"}},o=n[e];return(r=o==null?void 0:o[t])!=null?r:e}}function y(){return y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},y.apply(this,arguments)}var Be=e=>{var{status:t,variant:r,id:n,title:o,isClosable:a,onClose:i,description:s}=e,u=typeof n!="undefined"?"toast-"+n+"-title":void 0;return l.exports.createElement(he,{status:t,variant:r,id:n,alignItems:"start",borderRadius:"md",boxShadow:"lg",paddingEnd:8,textAlign:"start",width:"auto","aria-labelledby":u},l.exports.createElement(ye,null),l.exports.createElement(x.div,{flex:"1",maxWidth:"100%"},o&&l.exports.createElement(xe,{id:u},o),s&&l.exports.createElement(ge,{display:"block"},s)),a&&l.exports.createElement(le,{size:"sm",onClick:i,position:"absolute",insetEnd:1,top:1}))},De={duration:5e3,position:"bottom",variant:"solid"},b={theme:ue,colorMode:"light",toggleColorMode:B,setColorMode:B,defaultOptions:De};function Ze(e){var{theme:t=b.theme,colorMode:r=b.colorMode,toggleColorMode:n=b.toggleColorMode,setColorMode:o=b.setColorMode,defaultOptions:a=b.defaultOptions}=e===void 0?b:e,i=(u,c)=>l.exports.createElement(ae,{theme:t},l.exports.createElement(se.Provider,{value:{colorMode:r,setColorMode:o,toggleColorMode:n}},k(c.render)?c.render(u):l.exports.createElement(Be,y({},u,c)))),s=u=>{var c=y({},a,u);c.position=H(c.position,t.direction);var d=f=>i(f,c);return T.notify(d,c)};return s.close=T.close,s.closeAll=T.closeAll,s.update=(u,c)=>{if(!!u){var d=y({},a,c);d.position=H(d.position,t.direction),T.update(u,y({},d,{message:f=>i(f,d)}))}},s.isActive=T.isActive,s}function He(e){var{theme:t,setColorMode:r,toggleColorMode:n,colorMode:o}=ie();return l.exports.useMemo(()=>Ze({theme:t,colorMode:o,setColorMode:r,toggleColorMode:n,defaultOptions:e}),[t,r,n,o,e])}export{Ke as A,He as u};
