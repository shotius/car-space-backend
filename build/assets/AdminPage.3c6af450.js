var Ae=Object.defineProperty,Oe=Object.defineProperties;var Te=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var le=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable;var ne=(t,n,a)=>n in t?Ae(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,b=(t,n)=>{for(var a in n||(n={}))le.call(n,a)&&ne(t,a,n[a]);if($)for(var a of $(n))oe.call(n,a)&&ne(t,a,n[a]);return t},w=(t,n)=>Oe(t,Te(n));var L=(t,n)=>{var a={};for(var r in t)le.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&$)for(var r of $(t))n.indexOf(r)<0&&oe.call(t,r)&&(a[r]=t[r]);return a};import{ab as ce,ah as De,ai as Ee,b$ as Ne,aO as Re,c0 as Fe,r as u,ad as X,aa as Ie,ac as Pe,c1 as _e,c2 as Le,j as e,a as A,f as _,b as j,c3 as Be,e as p,v as M,c4 as We,F as K,c5 as Ue,m as q,V as k,H as D,n as x,t as Q,T as F,A as z,I as Z,aH as ee,c6 as je,o as P,O as H,c7 as ze,bC as He,c8 as Me,aJ as $e,l as de,K as pe,N as I,c9 as he,ca as ie,C as te,P as Ve,x as Ge,ax as Ye,cb as Ke,cc as qe,cd as ue,a3 as re,ce as Qe,cf as Je,B as O,cg as Xe,ch as Ze,Q as et,S as tt,U as rt,z as at,W as nt,G as lt,bl as me,bk as ot,ci as it,be as st,L as V,bh as ct,bm as dt,bn as U,bo as pt}from"./index.2dfc81ff.js";import{S as ht,a as ut,C as G}from"./SelectTrigger.72bcb400.js";import{S as mt}from"./ScrollToTop.445f7e54.js";import{C as T}from"./Card.4afd7067.js";import{T as se,c as ft}from"./TextSecondary.e487116c.js";import{u as fe,T as gt}from"./types.cb80ff16.js";import{I as Y}from"./chakra-ui-image.esm.512fb486.js";import{T as ge,a as xe}from"./react-textarea-autosize.browser.esm.f47866f2.js";import{S as xt,a as vt,b as yt}from"./SelectWrapper.e2993b3e.js";import{d as bt,O as wt}from"./OrderListCard.d3919ab2.js";import"./NotSpecified.36c47951.js";function R(){return R=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},R.apply(this,arguments)}function ae(t,n){if(t==null)return{};var a={},r=Object.keys(t),s,l;for(l=0;l<r.length;l++)s=r[l],!(n.indexOf(s)>=0)&&(a[s]=t[s]);return a}var St=["children","placeholder","className"],Ct=["rootProps","placeholder","icon","color","height","h","minH","minHeight","iconColor","iconSize","isFullWidth"],kt=["children"],At=ce(function(t,n){var a=t.children,r=t.placeholder,s=t.className,l=ae(t,St);return u.exports.createElement(X.select,R({},l,{ref:n,className:Pe("chakra-select",s)}),r&&u.exports.createElement("option",{value:""},r),a)}),ve=ce(function(t,n){var a=De("Select",t),r=Ee(t),s=r.rootProps,l=r.placeholder,c=r.icon,o=r.color,i=r.height,h=r.h,m=r.minH,f=r.minHeight,d=r.iconColor,g=r.iconSize;r.isFullWidth;var C=ae(r,Ct),v=Ne(C,_e),E=v[0],y=v[1],N=Re(y),B={width:"100%",height:"fit-content",position:"relative",color:o},J=Fe({paddingEnd:"2rem"},a.field,{_focus:{zIndex:"unset"}});return u.exports.createElement(X.div,R({className:"chakra-select__wrapper",__css:B},E,s),u.exports.createElement(At,R({ref:n,height:h!=null?h:i,minH:m!=null?m:f,placeholder:l},N,{__css:J}),t.children),u.exports.createElement(Dt,R({"data-disabled":Ie(N.disabled)},(d||o)&&{color:d||o},{__css:a.icon},g&&{fontSize:g}),c))}),Ot=function(n){return u.exports.createElement("svg",R({viewBox:"0 0 24 24"},n),u.exports.createElement("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}))},Tt=X("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),Dt=function(n){var a=n.children,r=a===void 0?u.exports.createElement(Ot,null):a,s=ae(n,kt),l=u.exports.cloneElement(r,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return u.exports.createElement(Tt,R({},s,{className:"chakra-select__icon-wrapper"}),u.exports.isValidElement(r)?l:null)};const Et=c=>{var o=c,{name:t,type:n="file",multiple:a=!1,value:r=void 0,style:s={marginTop:"10px"}}=o,l=L(o,["name","type","multiple","value","style"]);const[i,h,{setValue:m}]=Le(t);return e("input",w(b(w(b({type:n,multiple:a},i),{value:r,style:s}),l),{onChange:f=>{const d=f.currentTarget.files;m(d)}}))},Nt=({})=>{const[t,n]=u.exports.useState(!1),a=A(),r=_(),s=j(i=>i.banners.banners),l={place:1,banner:null};u.exports.useEffect(()=>{c()},[]);function c(){a(Be())}function o(i){n(!0),a(je(i)).then(()=>{c(),n(!1),r({title:"banner deleted",position:"top"})}).catch(()=>{n(!1),r({title:"could not delelte the banner",position:"top",status:"error"})})}return p(M,{pt:["32px",null,null,"40px"],children:[e(We,{children:e(T,{w:"full",children:e(K,{initialValues:l,onSubmit:(i,{setSubmitting:h})=>{const{banner:m}=i,f=new FormData;m&&f.append("banner",m[0]),f.append("place",i.place.toString()),a(Ue(f)).unwrap().then(()=>{r({title:"banner added",position:"top",status:"success"}),h(!1)}).catch(d=>{r({title:d,position:"top",status:"error"}),h(!1)})},children:({isSubmitting:i})=>e(q,{children:p(k,{align:"flex-start",children:[e(D,{textAlign:"center",w:"full",children:"Add remove Banners"}),e(x,{name:"place",type:"number",label:"banner index"}),e(Et,{name:"banner"}),e(Q,{w:"200px",type:"submit",isLoading:i,children:"add banner"})]})})})})}),p(T,{mt:"4",p:"0",children:[e(D,{w:"full",textAlign:"center",pt:"4",children:"Banners"}),e(k,{align:"flex-start",children:s.map(i=>p(k,{w:"full",align:"flex-start",position:"relative",children:[p(F,{position:"absolute",top:"20px",left:"10px",bg:"white",zIndex:"1",padding:"4",children:["index: ",i.place,"."]}),e(z,{w:"full",children:e("img",{src:i.img})}),e(Z,{icon:e(ee,{}),"aria-label":"delete banner",position:"absolute",right:"10px",top:"20px",onClick:()=>o(i.id),isLoading:t})]},i.img))})]})]})},ye=c=>{var o=c,{avatar:t,index:n,mainText:a,secondaryText:r,verified:s}=o,l=L(o,["avatar","index","mainText","secondaryText","verified"]);return p(P,w(b({cursor:"pointer",transition:"all .2s",_hover:{bg:"autoGrey.200"},w:"full",py:"4",px:"2"},l),{children:[e(F,{alignSelf:"flex-end",children:"."}),e(z,{w:"40px",ratio:1/1,borderRadius:"100px",bg:"white",children:e(Y,{src:t,borderRadius:"100px",fallbackSrc:fe})}),p(k,{align:"flex-start",spacing:"0",children:[e(F,{children:a}),p(P,{children:[e(se,{children:r}),s!==void 0&&e(H,{children:s!==void 0&&s?e(se,{color:"green",children:"verified"}):e(F,{color:"red",children:"no verified"})})]})]})]}))},Rt=({onSelect:t})=>{const[n,a]=u.exports.useState([]),r=A();u.exports.useEffect(()=>{s()},[]);function s(){r(ze("")).unwrap().then(l=>a(l))}return e(k,{w:"full",children:n.length?n.map(l=>e(ye,{avatar:l.avatar,mainText:l.fullName,secondaryText:l.role,verified:l.verified,onClick:()=>{t(l)}},l.id)):e(D,{py:"4",children:"Dealers will Appear here"})})},Ft=({dealer:t})=>{const n=Object.values(gt),{addingDealerCar:a}=j(o=>o.carsReducer),{catalogQuery:r}=j(o=>o.globalAppState),s=A(),l=_(),c={manufacturer:"",modelGroup:"",modelDetail:"",bodyStyle:"",damage:"",location:"",odometer:0,cylinders:0,drive:"",engine:0,transmission:"",year:"",keys:"",fuelType:"",color:"",price:0,description:"",photos:null,mostDemand:!1,dealerName:t?t.fullName:"",dealerId:t?t.id:void 0};return e(K,{initialValues:c,enableReinitialize:!0,onSubmit:(o,{setErrors:i})=>{const C=o,{photos:h,keys:m}=C,f=L(C,["photos","keys"]),d=new FormData;for(let v in f)d.append(v,o[v]);if(h)for(let v of h)d.append("photo[]",v);m&&d.append("keys",He.YES);const g=new URLSearchParams(r);s(Me(d)).unwrap().then(()=>{s($e(g)),l({title:"New car edded successfully",position:"top",status:"success",duration:1500})}).catch(v=>{de(v)?v.status===422&&(i(pe(v.errors)),v.errors.forEach(({msg:E})=>l({title:E,position:"top",variant:"solid",status:"error",duration:2e3}))):l({title:"Error occured!",position:"top",variant:"solid",status:"error",duration:2e3})})},children:({values:o,setFieldValue:i})=>p(q,{children:[e(D,{children:"Add Car"}),e(x,{name:"dealerName",placeholder:"Dealer name"}),e(x,{name:"manufacturer",placeholder:"Manufacturer"}),e(x,{name:"modelGroup",placeholder:"Model group"}),e(x,{name:"modelDetail",placeholder:"Model detail"}),e(x,{name:"bodyStyle",placeholder:"Body style"}),e(x,{name:"damage",placeholder:"damage"}),e(x,{name:"location",placeholder:"location"}),e(x,{name:"odometer",placeholder:"odometer",type:"number",value:o.odometer||""}),e(x,{name:"cylinders",placeholder:"cylinders",type:"number",value:o.cylinders||""}),e(x,{name:"drive",placeholder:"drive"}),e(x,{name:"engine",type:"number",value:o.engine||"",placeholder:"Engine capacity"}),e(I,{name:"transmission",children:({field:h})=>e(he,{pt:"2",children:e(ve,w(b({},h),{bg:"#EAEAEB",opacity:"0.5",placeholder:"Transmission",children:n.map(m=>e("option",{value:m,children:m},m))}))})}),e(x,{name:"year",placeholder:"Year",type:"number",value:o.year||""}),e(x,{name:"fuelType",placeholder:"Fuel type"}),e(x,{name:"color",placeholder:"Color"}),e(x,{name:"price",placeholder:"Price",type:"number",value:o.price||""}),e(ie,{name:"keys",label:"Has keys"}),e(ie,{name:"mostDemand",label:"Most demand"}),e(I,{name:"description",children:({field:h})=>e(ge,w(b({mt:"2"},h),{placeholder:"Write Description",size:"sm",as:xe,maxRows:10}))}),e(I,{name:"photos",children:({field:h})=>e("input",w(b({type:"file"},h),{multiple:!0,value:void 0,style:{marginTop:"12px"},onChange:m=>{const f=m.currentTarget.files;i("photos",f)}}))}),e(Q,{type:"submit",mt:"4",mb:"4",isLoading:a,children:"Add"})]})})},It=()=>{const[t,n]=u.exports.useState();return e(M,{pt:["32px",null,null,"40px"],children:e(te,{children:p(P,{w:"full",justify:"center",children:[e(T,{w:"500px",bg:"#fff",p:"4",children:e(Ft,{dealer:t})}),e(T,{maxW:"250px",w:"full",alignSelf:"flex-start",p:"0",children:e(Rt,{onSelect:n})})]})})})},be=s=>{var l=s,{onSelect:t,name:n,onUserSelect:a}=l,r=L(l,["onSelect","name","onUserSelect"]);const{isOpen:c,onToggle:o,onOpen:i,onClose:h}=Ve(),[m,f]=u.exports.useState(),[d,g]=u.exports.useState(""),[C,v]=u.exports.useState(""),[E,y]=u.exports.useState([]),[N,B]=u.exports.useState(!1),J=A(),we=_(),Se=()=>{g(m?m.fullName:"Search for user...")},Ce=S=>{B(!0),J(Ke(S)).unwrap().then(W=>{y(W),B(!1)}).catch(()=>{we({title:"Could not fetch users",position:"top",status:"error",duration:2e3}),B(!1)})},ke=E.filter(S=>S.fullName.toLocaleLowerCase().includes(C.toLocaleLowerCase()));return p(xt,w(b({areOptionsOpen:c},r),{children:[e(Ge,{onClick:h,isActive:c}),p(vt,{children:[e(ht,{areOptionsOpen:c,areOptionsSelected:!!m,clearCb:()=>{f(void 0)},children:e(ut,{autoComplete:"off",bg:"autoGrey.200",name:n||"",label:"Search for user...",placeholder:d,value:m?ft(m.fullName):C,onChange:S=>{const W=S.currentTarget.value;Ce(W),v(W),f(void 0),W&&i()},onFocus:()=>{Se()}})}),e(yt,{isOpen:c,children:N?p(D,{textAlign:"center",w:"full",children:["Fetching ..."," "]}):ke.map(S=>e(Ye,{h:"80px",onClick:()=>{g(S.fullName),o(),t(S.id),a&&a(S),f(S)},children:p(P,{w:"full",py:"2",children:[e(z,{ratio:1/1,w:"50px",children:e(Y,{w:"full",h:"full",src:S.avatar,fallbackSrc:fe,borderRadius:"100px"})}),e(D,{children:S.fullName})]})},S.id))})]})]}))},Pt=({})=>{const t=A(),n=_(),{addingReview:a}=j(c=>c.customers),r={text:"",userId:"",photos:null},s=c=>{let o="";return c?c.length!==24&&(o="Invalid length"):o="Required",o},l=c=>{let o="";return c&&c.length>4&&(o="Photos must be less then 4"),o};return e(K,{initialValues:r,onSubmit:(c,{setErrors:o})=>{const f=c,{photos:i}=f,h=L(f,["photos"]),m=new FormData;if(i)for(let d of i)m.append("photo[]",d);for(let[d,g]of Object.entries(h))m.append(d,g);t(qe(m)).unwrap().then(()=>{t(ue("")),n({title:"New Review added",duration:2e3,status:"success",position:"top"})}).catch(d=>{var g;de(d)&&d.status===422&&((g=d.errors)==null?void 0:g.length)&&o(pe(d.errors))})},children:({setFieldValue:c})=>p(q,{children:[e(D,{pb:"4",children:"Add new Review"}),e(I,{name:"userId",validate:s,children:({field:o,form:i})=>p(H,{children:[e(be,w(b({},o),{name:"userId",onSelect:h=>{c("userId",h)}})),e(F,{as:"span",color:"red",children:i.errors.userId})]})}),e(I,{name:"text",children:({field:o})=>e(ge,w(b({mt:"2"},o),{placeholder:"Write Description",size:"sm",as:xe,maxRows:10}))}),e(I,{name:"photos",validate:l,children:({field:o,form:i})=>p(H,{children:[e("input",w(b({},o),{type:"file",multiple:!0,value:void 0,style:{marginTop:"12px"},onChange:h=>{c("photos",h.currentTarget.files)}})),e(F,{as:"span",display:"block",color:"red",children:i.errors.photos})]})}),e(Q,{type:"submit",mt:"4",isLoading:a,children:"Add Review"})]})})},_t=({})=>{const{reviews:t,removingReview:n,fetchingReviews:a}=j(l=>l.customers),r=A(),s=_();return u.exports.useEffect(()=>{r(ue(""))},[]),e(M,{pt:["32px",null,null,"40px"],children:e(te,{children:p(k,{spacing:"32px",children:[e(T,{maxW:"500px",p:"4",children:e(Pt,{})}),e(T,{w:"full",maxW:"500px",children:e(k,{w:"full",children:a?p(H,{children:["Getting Reviews...",e(re,{})]}):t.length?t.map((l,c)=>{var o;return p(P,{bg:"autoGrey.200",w:"full",p:"4",borderRadius:"8",opacity:n?"0.5":"1",children:[e(Z,{icon:e(ee,{}),"aria-label":"remove review",isLoading:n,onClick:()=>{r(Qe(l.id)).then(()=>s({title:"Review Deleted",status:"success",duration:2e3,position:"top"})).catch(()=>s({title:"Could not delete the review, contact to the developer",status:"error",duration:2e3,position:"top"}))}}),e(z,{ratio:1/1,minW:"80px",children:e(Y,{src:(o=l.user)==null?void 0:o.avatar,fallbackSrc:"https://image.shutterstock.com/image-vector/profile-picture-avatar-icon-vector-260nw-1760295569.jpg",borderRadius:"100px"})}),e(F,{overflowWrap:"anywhere",children:l.text}),l.photos&&l.photos.map(i=>e(z,{ratio:1/1,minW:"60px",children:e(Y,{src:i})},i))]},c)}):e(H,{children:"No Review Yet"})})})]})})})},Lt=({setSelectedUser:t})=>{const[n,a]=u.exports.useState([]),[r,s]=u.exports.useState(!1),[l,c]=u.exports.useState(1),[o,i]=u.exports.useState(1),h=20,m=A();u.exports.useEffect(()=>{f(l)},[l]);function f(d){s(!0),m(Je(`page=${d}&limit=${h}`)).unwrap().then(g=>{a(g.users),i(g.totalPages),s(!1)})}return p(k,{align:"flex-start",spacing:"0",children:[r&&e(te,{w:"full",children:e(re,{justifySelf:"center"})}),n.map((d,g)=>e(ye,{index:(l-1)*h+g+1,onClick:()=>t(d),avatar:d.avatar,mainText:d.fullName,secondaryText:d.role,verified:d.verified},d.id)),p(P,{w:"full",justify:"space-between",px:"2",py:"4",children:[e(O,{variant:"link",color:"#427AD6",disabled:l===1,onClick:()=>{c(d=>d-1)},children:"Prev"}),e(O,{variant:"link",color:"#427AD6",disabled:l===o,onClick:()=>{c(l+1)},children:"Next"})]})]})},Bt=({operation:t,userId:n,car:a,closeDrawer:r})=>{const s=A(),l=_();let c;return a&&t==="modifying"?c={carName:a.carName,deliveryAt:a.deliveryAt?bt(a.deliveryAt.toString(),"-"):new Date,location:a.location,price:a.price,status:a.status}:c={carName:"",deliveryAt:new Date,location:"",price:0,status:""},e(K,{initialValues:c,onSubmit:(o,{setSubmitting:i})=>{t==="modifying"&&a?s(Xe({carId:a.id,props:w(b({},o),{userId:n})})).unwrap().then(()=>{i(!1),r()}).catch(h=>{i(!1),l({title:h,status:"error",position:"top"}),r()}):s(Ze(w(b({},o),{userId:n}))).unwrap().then(()=>{i(!1),r()}).catch(h=>{l({title:h,status:"error",position:"top"}),i(!1),r()})},children:({isSubmitting:o})=>p(q,{children:[e(x,{name:"carName",placeholder:"car name"}),e(x,{name:"location",placeholder:"Location"}),e(x,{name:"price",placeholder:"Price",type:"number"}),e(I,{name:"status",children:({field:i})=>e(he,{pt:"2",children:p(ve,w(b({},i),{bg:"#EAEAEB",opacity:"0.5",placeholder:"Status",children:[e("option",{value:"Completed",children:"Completed"}),e("option",{value:"On The Way",children:"On the way"})]}))})}),e(x,{name:"deliveryAt",bg:"#EAEAEB",opacity:"0.5",placeholder:"Status",type:"date",label:"Delivery at:  dd/mm/yyyy"}),e(Q,{mt:"4",type:"submit",isLoading:o,children:t==="modifying"?"Update car":"Add Car"})]})})},Wt=({isEditing:t,setIsEditing:n,operationOnTheCar:a,selectedUser:r,selectedCar:s,handleGetUserOrders:l})=>p(et,{isOpen:t,placement:"right",onClose:()=>{n(!1)},size:"md",children:[e(tt,{}),p(rt,{children:[e(at,{}),e(nt,{children:"Change/Add a Car"}),e(lt,{children:e(Bt,{operation:a,userId:r?r.id:"",car:s,closeDrawer:()=>{n(!1),r&&l(r.id)}})})]})]}),Ut=({})=>{const[t,n]=u.exports.useState([]),[a,r]=u.exports.useState(!1),[s,l]=u.exports.useState(),[c,o]=u.exports.useState(!1),[i,h]=u.exports.useState("adding"),[m,f]=u.exports.useState(),d=_(),g=A();function C(y){r(!0),g(ot(y)).unwrap().then(N=>{n(N),r(!1)}).catch(()=>r(!1))}function v(y){g(it(y)).unwrap().then(()=>{s&&C(s.id)}).catch(N=>d({title:N,position:"top",status:"error"}))}function E(y){l(y),C(y.id)}return e(M,{pt:["32px",null,null,"40px"],children:p(me,{w:"full",justify:"flex-end",spacing:"4",direction:["column",null,"row"],align:"center",children:[e(T,{w:"full",maxW:"650px",p:"32px",alignSelf:"flex-start",children:p(k,{children:[e(D,{textAlign:"center",fontSize:"24px",children:"Add or Change Order"}),e(be,{onSelect:()=>{},onUserSelect:E}),p(k,{pt:"4",w:"full",children:[s&&p(O,{mb:"2",onClick:()=>{o(!0),h("adding")},children:["+ add new Car for ",s.fullName]}),a?e(re,{}):t.length?t.map(y=>e(T,{w:"full",boxShadow:"0px 0px 10px lightgrey",children:p(k,{children:[p(P,{w:"full",justify:"space-between",children:[e(O,{variant:"ghost",color:"autoOrange.500",onClick:()=>{o(!0),h("modifying"),f(y)},children:"Modify order"}),e(Z,{onClick:()=>v(y.id),icon:e(ee,{}),"aria-label":"delete order"})]}),e(wt,{order:y})]})},y.id)):e(D,{w:"full",textAlign:"center",pt:"4",children:"No Ordered Cars"})]})]})}),e(T,{maxW:["full","450px","250px"],px:"0",w:"full",alignSelf:"flex-start",children:e(Lt,{setSelectedUser:E})}),e(Wt,{isEditing:c,setIsEditing:o,operationOnTheCar:i,selectedUser:s,selectedCar:m,handleGetUserOrders:C})]})})},Xt=()=>{const{path:t}=st(),n=A();return p(M,{children:[e(mt,{}),p(me,{w:"full",justify:"center",pt:"4",direction:["column",null,"row"],align:"center",children:[e(O,{variant:"link",children:e(V,{to:`${t}/add-car`,style:{color:"black"},children:"Car"})}),e(G,{height:"20px",borderColor:"black",display:["none",null,"block"]}),e(O,{variant:"link",children:e(V,{style:{color:"black"},to:`${t}/add-review`,children:"Review"})}),e(G,{height:"20px",borderColor:"black",display:["none",null,"block"]}),e(O,{variant:"link",children:e(V,{style:{color:"black"},to:`${t}/add-order`,children:"Ordereds"})}),e(G,{height:"20px",borderColor:"black",display:["none",null,"block"]}),e(O,{variant:"link",children:e(V,{style:{color:"black"},to:`${t}/banners`,children:"Banners"})}),e(G,{height:"20px",borderColor:"black",display:["none",null,"block"]}),e(O,{color:"red",border:"1px solid",onClick:()=>n(ct()),children:"logout"})]}),p(dt,{children:[e(U,{path:t,exact:!0,children:e(pt,{to:`${t}/add-review`})}),e(U,{path:`${t}/add-car`,render:()=>e(It,{}),exact:!0}),e(U,{path:`${t}/add-review`,render:()=>e(_t,{}),exact:!0}),e(U,{path:`${t}/add-order`,render:()=>e(Ut,{}),exact:!0}),e(U,{path:`${t}/banners`,render:()=>e(Nt,{}),exact:!0})]})]})};export{Xt as AdminPage,Xt as default};
