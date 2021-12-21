var oe=Object.defineProperty,le=Object.defineProperties;var se=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var z=(t,a,r)=>a in t?oe(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,v=(t,a)=>{for(var r in a||(a={}))H.call(a,r)&&z(t,r,a[r]);if(R)for(var r of R(a))V.call(a,r)&&z(t,r,a[r]);return t},y=(t,a)=>le(t,se(a));var k=(t,a)=>{var r={};for(var o in t)H.call(t,o)&&a.indexOf(o)<0&&(r[o]=t[o]);if(t!=null&&R)for(var o of R(t))a.indexOf(o)<0&&V.call(t,o)&&(r[o]=t[o]);return r};import{r as w,R as e,k as ce,L as B,S as ie,e as F,g as me}from"./vendor.64e57edd.js";import{G as pe,bp as de,W as ue,aE as Ee,X as he,K as fe,J as ge,a as j,u as S,a5 as T,m as N,C as G,b0 as ve,bq as ye,ac as be,br as q,H as L,bs as d,bt as M,g as A,aV as we,T as O,h as _,aP as xe,b as Se,a2 as Ce,bu as Re,bv as ke,bw as $,bx as je,V as K,n as Te,I as Ae,aa as Oe,by as Fe,s as P,aN as Ne}from"./index.ed99825d.js";import{F as Y,a as J,b}from"./formik.178388d5.js";import{T as Q}from"./react-textarea-autosize.b1a14e4d.js";import{C as W}from"./Card.f097194a.js";import{T as Le}from"./types.401d8b7f.js";import{S as Pe}from"./select.833c9bba.js";import{c as We}from"./capitalizeEach.6ec19d92.js";import{S as De,a as Ie}from"./SelectTrigger.1178c3ed.js";import{S as Ue,a as He,b as Ve}from"./SelectWrapper.71820d9d.js";import{A as D}from"./aspect-ratio.fce6f4cd.js";import{I}from"./image.16c75bae.js";import"./prop-types.d6ec705b.js";import"./react-redux.d0311eef.js";import"./axios.7b768d2b.js";import"./yup.5af68d69.js";import"./focus-visible.85b77dad.js";function U(){return U=Object.assign||function(t){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},U.apply(this,arguments)}function ze(t,a){if(t==null)return{};var r={},o=Object.keys(t),m,l;for(l=0;l<o.length;l++)m=o[l],!(a.indexOf(m)>=0)&&(r[m]=t[m]);return r}var X=pe((t,a)=>{var r=de("Textarea",t),o=ue(t),{className:m,rows:l}=o,n=ze(o,["className","rows"]),s=Ee(n),c=["h","minH","height","minHeight"],i=l?he(r,c):r;return w.exports.createElement(fe.textarea,U({ref:a,rows:l},s,{className:ge("chakra-textarea",m),__css:i}))});const Be=()=>{const t=Object.values(Le),{addingDealerCar:a}=j(n=>n.carsReducer),{catalogQuery:r}=j(n=>n.globalAppState),o=S(),m=T(),l={manufacturer:"",modelGroup:"",modelDetail:"",bodyStyle:"",damage:"",location:"",odometer:0,cylinders:0,drive:"",engine:0,transmission:"",year:"",keys:"",fuelType:"",color:"",price:0,description:"",photos:null};return e.createElement(N,{pt:["32px",null,null,"40px"]},e.createElement(G,null,e.createElement(W,{w:"500px",bg:"#fff",p:"4"},e.createElement(Y,{initialValues:l,onSubmit:(n,{setFieldError:s})=>{const h=n,{photos:c,keys:i}=h,E=k(h,["photos","keys"]),f=new FormData;for(let g in E)f.append(g,n[g]);if(c)for(let g of c)f.append("photo[]",g);i&&f.append("keys",ve.YES);const p=new URLSearchParams(r);o(ye(f)).unwrap().then(()=>{o(be(p)),m({title:"New car edded successfully",position:"top",status:"success",duration:1500})}).catch(g=>{let C="";q(g)&&g.status===422&&(C="Fill in required fields",s("manufacturer","required")),m({title:C,position:"top",variant:"solid",status:"error",duration:2e3})})}},({values:n,setFieldValue:s})=>e.createElement(J,null,e.createElement(L,null,"Add Car"),e.createElement(d,{name:"manufacturer",placeholder:"Manufacturer"}),e.createElement(d,{name:"modelGroup",placeholder:"Model group"}),e.createElement(d,{name:"modelDetail",placeholder:"Model detail"}),e.createElement(d,{name:"bodyStyle",placeholder:"Body style"}),e.createElement(d,{name:"damage",placeholder:"damage"}),e.createElement(d,{name:"location",placeholder:"location"}),e.createElement(d,{name:"odometer",placeholder:"odometer",type:"number",value:n.odometer||""}),e.createElement(d,{name:"cylinders",placeholder:"cylinders",type:"number",value:n.cylinders||""}),e.createElement(d,{name:"drive",placeholder:"drive"}),e.createElement(d,{name:"engine",type:"number",value:n.engine||"",placeholder:"Engine capacity"}),e.createElement(b,{name:"transmission"},({field:c})=>e.createElement(M,{pt:"2"},e.createElement(Pe,y(v({},c),{bg:"#EAEAEB",opacity:"0.5",placeholder:"Transmission"}),t.map(i=>e.createElement("option",{key:i,value:i},i))))),e.createElement(d,{name:"year",placeholder:"Year",type:"number",value:n.year||""}),e.createElement(d,{name:"fuelType",placeholder:"Fuel type"}),e.createElement(d,{name:"color",placeholder:"Color"}),e.createElement(d,{name:"price",placeholder:"Price",type:"number",value:n.price||""}),e.createElement(b,{name:"keys"},({field:c})=>e.createElement(M,{pt:"2"},e.createElement(A,null,e.createElement(we,v({colorScheme:"autoOrange",name:"kes"},c)),e.createElement(O,null,"Has keys")))),e.createElement(b,{name:"description"},({field:c})=>e.createElement(X,y(v({mt:"2"},c),{placeholder:"Write Description",size:"sm",as:Q,maxRows:10}))),e.createElement(b,{name:"photos"},({field:c})=>e.createElement("input",y(v({type:"file"},c),{multiple:!0,value:void 0,onChange:i=>{const E=i.currentTarget.files;s("photos",E)}}))),e.createElement(_,{type:"submit",mt:"4",mb:"4",isLoading:a},"Add"))))))},Ge=o=>{var m=o,{onSelect:t,name:a}=m,r=k(m,["onSelect","name"]);const{isOpen:l,onToggle:n,onOpen:s,onClose:c}=xe(),[i,E]=w.exports.useState(),[f,p]=w.exports.useState(""),[h,g]=w.exports.useState(""),[C,Z]=w.exports.useState([]),ee=S(),te=T(),ae=()=>{p(i?i.fullName:"Search for user...")},re=u=>{ee(Re(u)).unwrap().then(x=>{Z(x)}).catch(()=>te({title:"Could not fetch users",position:"top",status:"error",duration:2e3}))},ne=C.filter(u=>u.fullName.toLocaleLowerCase().includes(h.toLocaleLowerCase()));return e.createElement(Ue,v({areOptionsOpen:l},r),e.createElement(Se,{onClick:c,isActive:l}),e.createElement(He,null,e.createElement(De,{areOptionsOpen:l,areOptionsSelected:!!i,clearCb:()=>{E(void 0)}},e.createElement(Ie,{autoComplete:"off",bg:"autoGrey.200",name:a||"",label:"Search for user...",placeholder:f,value:i?We(i.fullName):h,onChange:u=>{const x=u.currentTarget.value;re(x),g(x),E(void 0),x&&s()},onFocus:()=>{ae()}})),e.createElement(Ve,{isOpen:l},ne.map(u=>e.createElement(Ce,{h:"80px",onClick:()=>{p(u.fullName),n(),t(u.id),E(u)},key:u.id},e.createElement(A,{w:"full"},e.createElement(D,{ratio:1/1,w:"50px"},e.createElement(I,{w:"full",h:"full",src:u.avatar,fallbackSrc:"https://image.shutterstock.com/image-vector/profile-picture-avatar-icon-vector-260nw-1760295569.jpg",borderRadius:"100px"})),e.createElement(L,null,u.fullName)))))))},qe=({})=>{const t=S(),a=T(),{addingReview:r}=j(n=>n.customers),o={text:"",userId:"",photos:null},m=n=>{let s="";return n?n.length!==24&&(s="Invalid length"):s="Required",s},l=n=>{let s="";return n&&n.length>4&&(s="Photos must be less then 4"),s};return e.createElement(Y,{initialValues:o,onSubmit:(n,{setErrors:s})=>{const f=n,{photos:c}=f,i=k(f,["photos"]),E=new FormData;if(c)for(let p of c)E.append("photo[]",p);for(let[p,h]of Object.entries(i))E.append(p,h);t(ke(E)).unwrap().then(()=>{t($("")),a({title:"New Review added",duration:2e3,status:"success",position:"top"})}).catch(p=>{var h;q(p)&&p.status===422&&((h=p.errors)==null?void 0:h.length)&&s(je(p.errors))})}},({setFieldValue:n})=>e.createElement(J,null,e.createElement(L,{pb:"4"},"Add new Review"),e.createElement(b,{name:"userId",validate:m},({field:s,form:c})=>e.createElement(e.Fragment,null,e.createElement(Ge,y(v({},s),{name:"userId",onSelect:i=>{n("userId",i)}})),e.createElement(O,{as:"span",color:"red"},c.errors.userId))),e.createElement(b,{name:"text"},({field:s})=>e.createElement(X,y(v({mt:"2"},s),{placeholder:"Write Description",size:"sm",as:Q,maxRows:10}))),e.createElement(b,{name:"photos",validate:l},({field:s,form:c})=>e.createElement(e.Fragment,null,e.createElement("input",y(v({},s),{type:"file",multiple:!0,value:void 0,onChange:i=>{n("photos",i.currentTarget.files)}})),e.createElement(O,{as:"span",display:"block",color:"red"},c.errors.photos))),e.createElement(_,{type:"submit",mt:"4",isLoading:r},"Add Review")))},Me=({})=>{const{reviews:t,removingReview:a,fetchingReviews:r}=j(l=>l.customers),o=S(),m=T();return w.exports.useEffect(()=>{o($(""))},[]),e.createElement(N,{pt:["32px",null,null,"40px"]},e.createElement(G,null,e.createElement(K,{spacing:"32px"},e.createElement(W,{maxW:"500px",p:"4"},e.createElement(qe,null)),e.createElement(W,{w:"full",maxW:"500px"},e.createElement(K,{w:"full"},r?e.createElement(e.Fragment,null,"Getting Reviews...",e.createElement(Te,null)):t.length?t.map((l,n)=>e.createElement(A,{key:n,bg:"autoGrey.200",w:"full",p:"4",borderRadius:"8",opacity:a?"0.5":"1"},e.createElement(Ae,{icon:e.createElement(Oe,null),"aria-label":"remove review",isLoading:a,onClick:()=>{o(Fe(l.id)).then(()=>m({title:"Review Deleted",status:"success",duration:2e3,position:"top"})).catch(()=>m({title:"Could not delete the review, contact to the developer",status:"error",duration:2e3,position:"top"}))}}),e.createElement(D,{ratio:1/1,minW:"80px"},e.createElement(I,{src:l.user&&l.user.avatar,fallbackSrc:"https://image.shutterstock.com/image-vector/profile-picture-avatar-icon-vector-260nw-1760295569.jpg",borderRadius:"100px"})),e.createElement(O,{overflowWrap:"anywhere"},l.text),l.photos&&l.photos.map(s=>e.createElement(D,{key:s,ratio:1/1,minW:"60px"},e.createElement(I,{src:s}))))):e.createElement(e.Fragment,null,"No Review Yet"))))))},mt=()=>{const{path:t}=ce(),a=S();return console.log(t),e.createElement(N,null,e.createElement(A,{w:"full",justify:"center",pt:"4"},e.createElement(P,{border:"1px solid"},e.createElement(B,{to:`${t}/add-car`},"add new car")),e.createElement(P,{border:"1px solid"},e.createElement(B,{to:`${t}/add-review`},"add new Review")),e.createElement(P,{color:"red",border:"1px solid",onClick:()=>a(Ne())},"logout")),e.createElement(ie,null,e.createElement(F,{path:t,exact:!0},e.createElement(me,{to:`${t}/add-review`})),e.createElement(F,{path:`${t}/add-car`,render:()=>e.createElement(Be,null),exact:!0}),e.createElement(F,{path:`${t}/add-review`,render:()=>e.createElement(Me,null),exact:!0})))};export{mt as AdminPage,mt as default};
