var Se=Object.defineProperty,Ce=Object.defineProperties;var ke=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var te=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable;var re=(t,r,a)=>r in t?Se(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,b=(t,r)=>{for(var a in r||(r={}))te.call(r,a)&&re(t,a,r[a]);if(M)for(var a of M(r))ae.call(r,a)&&re(t,a,r[a]);return t},v=(t,r)=>Ce(t,ke(r));var L=(t,r)=>{var a={};for(var n in t)te.call(t,n)&&r.indexOf(n)<0&&(a[n]=t[n]);if(t!=null&&M)for(var n of M(t))r.indexOf(n)<0&&ae.call(t,n)&&(a[n]=t[n]);return a};import{r as p,R as e,k as Ae,L as H,S as Oe,f as W,e as Te}from"./vendor.576a7237.js";import{a0 as ne,a9 as De,aa as Re,by as Ne,ay as je,bz as Fe,a2 as K,Y as Ie,a1 as Le,bA as Pe,u as C,c as N,a as U,bB as Be,j as _,bC as We,bD as Ue,V as S,H as k,F as h,h as $,T as j,I as Q,ap as J,bE as _e,f as F,bF as ze,ba as Me,bG as He,ar as $e,e as le,t as oe,bH as se,bI as ce,C as Z,v as Ve,l as Ge,ai as Ye,bJ as qe,bK as Ke,bL as ie,N as X,bM as Qe,bN as Je,B as A,bO as Ze,bP as Xe,w as et,x as tt,y as at,n as rt,z as nt,q as lt,aZ as me,aY as ot,bQ as st,aW as ct}from"./index.8f5de986.js";import{S as it,a as mt,C as V}from"./SelectTrigger.b48fb64a.js";import{a as dt,b as pt,c as ut,S as Et}from"./SelectWrapper.f969b51d.js";import{u as ft,F as G,a as Y,b as I}from"./formik.30c45d87.js";import{C as O}from"./Card.bd990255.js";import{A as z}from"./aspect-ratio.0a08b954.js";import{T as de,c as ht}from"./TextSecondary.f32f1a2b.js";import{I as q}from"./image.fa0333cf.js";import{T as pe}from"./react-textarea-autosize.f1892001.js";import{T as gt}from"./types.401d8b7f.js";import{T as ue}from"./textarea.77766770.js";import{d as xt,O as bt}from"./OrderListCard.ddcc23b0.js";import"./prop-types.d6ec705b.js";import"./react-redux.0b249e8a.js";import"./axios.7b768d2b.js";import"./yup.8a20e72b.js";import"./focus-visible.c4e3ef79.js";import"./NotSpecified.6a88a581.js";function D(){return D=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},D.apply(this,arguments)}function ee(t,r){if(t==null)return{};var a={},n=Object.keys(t),s,l;for(l=0;l<n.length;l++)s=n[l],!(r.indexOf(s)>=0)&&(a[s]=t[s]);return a}var yt=ne((t,r)=>{var{children:a,placeholder:n,className:s}=t,l=ee(t,["children","placeholder","className"]);return p.exports.createElement(K.select,D({},l,{ref:r,className:Le("chakra-select",s)}),n&&p.exports.createElement("option",{value:""},n),a)}),Ee=ne((t,r)=>{var a=De("Select",t),n=Re(t),{rootProps:s,placeholder:l,icon:i,color:o,height:c,h:d,minH:u,minHeight:E,iconColor:m,iconSize:f}=n,w=ee(n,["rootProps","placeholder","icon","color","height","h","minH","minHeight","iconColor","iconSize","isFullWidth"]),[x,T]=Ne(w,Pe),g=je(T),R={width:"100%",height:"fit-content",position:"relative",color:o},P=Fe({},a.field,{paddingEnd:"2rem",_focus:{zIndex:"unset"}});return p.exports.createElement(K.div,D({className:"chakra-select__wrapper",__css:R},x,s),p.exports.createElement(yt,D({ref:r,height:d!=null?d:c,minH:u!=null?u:E,placeholder:l},g,{__css:P}),t.children),p.exports.createElement(St,D({"data-disabled":Ie(g.disabled)},(m||o)&&{color:m||o},{__css:a.icon},f&&{fontSize:f}),i))}),vt=t=>p.exports.createElement("svg",D({viewBox:"0 0 24 24"},t),p.exports.createElement("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})),wt=K("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),St=t=>{var{children:r=p.exports.createElement(vt,null)}=t,a=ee(t,["children"]),n=p.exports.cloneElement(r,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return p.exports.createElement(wt,D({},a,{className:"chakra-select__icon-wrapper"}),p.exports.isValidElement(r)?n:null)};const Ct=i=>{var o=i,{name:t,type:r="file",multiple:a=!1,value:n=void 0,style:s={marginTop:"10px"}}=o,l=L(o,["name","type","multiple","value","style"]);const[c,d,{setValue:u}]=ft(t);return e.createElement("input",v(b(v(b({type:r,multiple:a},c),{value:n,style:s}),l),{onChange:E=>{const m=E.currentTarget.files;u(m)}}))},kt=({})=>{const[t,r]=p.exports.useState(!1),a=C(),n=N(),s=U(c=>c.banners.banners),l={place:1,banner:null};p.exports.useEffect(()=>{i()},[]);function i(){a(Be())}function o(c){r(!0),a(_e(c)).then(()=>{i(),r(!1),n({title:"banner deleted",position:"top"})}).catch(()=>{r(!1),n({title:"could not delelte the banner",position:"top",status:"error"})})}return e.createElement(_,{pt:["32px",null,null,"40px"]},e.createElement(We,null,e.createElement(O,{w:"full"},e.createElement(G,{initialValues:l,onSubmit:(c,{setSubmitting:d})=>{const{banner:u}=c,E=new FormData;u&&E.append("banner",u[0]),E.append("place",c.place.toString()),a(Ue(E)).unwrap().then(()=>{n({title:"banner added",position:"top",status:"success"}),d(!1)}).catch(m=>{n({title:m,position:"top",status:"error"}),d(!1)})}},({isSubmitting:c})=>e.createElement(Y,null,e.createElement(S,{align:"flex-start"},e.createElement(k,{textAlign:"center",w:"full"},"Add remove Banners"),e.createElement(h,{name:"place",type:"number",label:"banner index"}),e.createElement(Ct,{name:"banner"}),e.createElement($,{w:"200px",type:"submit",isLoading:c},"add banner")))))),e.createElement(O,{mt:"4",p:"0"},e.createElement(k,{w:"full",textAlign:"center",pt:"4"},"Banners"),e.createElement(S,{align:"flex-start"},s.map(c=>e.createElement(S,{w:"full",align:"flex-start",key:c.img,position:"relative"},e.createElement(j,{position:"absolute",top:"20px",left:"10px",bg:"white",zIndex:"1",padding:"4"},"index: ",c.place,"."),e.createElement(z,{w:"full"},e.createElement("img",{src:c.img})),e.createElement(Q,{icon:e.createElement(J,null),"aria-label":"delete banner",position:"absolute",right:"10px",top:"20px",onClick:()=>o(c.id),isLoading:t}))))))};var fe="/assets/user.09206652.png";const he=i=>{var o=i,{avatar:t,index:r,mainText:a,secondaryText:n,verified:s}=o,l=L(o,["avatar","index","mainText","secondaryText","verified"]);return e.createElement(F,b({cursor:"pointer",transition:"all .2s",_hover:{bg:"autoGrey.200"},w:"full",py:"4",px:"2"},l),e.createElement(j,{alignSelf:"flex-end"},"."),e.createElement(z,{w:"40px",ratio:1/1,borderRadius:"100px",bg:"white"},e.createElement(q,{src:t,borderRadius:"100px",fallbackSrc:fe})),e.createElement(S,{align:"flex-start",spacing:"0"},e.createElement(j,null,a),e.createElement(F,null,e.createElement(de,null,n),s!==void 0&&e.createElement(e.Fragment,null,s!==void 0&&s?e.createElement(de,{color:"green"},"verified"):e.createElement(j,{color:"red"},"no verified")))))},At=({onSelect:t})=>{const[r,a]=p.exports.useState([]),n=C();p.exports.useEffect(()=>{s()},[]);function s(){n(ze("")).unwrap().then(l=>a(l))}return e.createElement(S,{w:"full"},r.length?r.map(l=>e.createElement(he,{key:l.id,avatar:l.avatar,mainText:l.fullName,secondaryText:l.role,verified:l.verified,onClick:()=>{t(l)}})):e.createElement(k,{py:"4"},"Dealers will Appear here"))},Ot=({dealer:t})=>{const r=Object.values(gt),{addingDealerCar:a}=U(o=>o.carsReducer),{catalogQuery:n}=U(o=>o.globalAppState),s=C(),l=N(),i={manufacturer:"Toyouta",modelGroup:"",modelDetail:"",bodyStyle:"",damage:"",location:"",odometer:0,cylinders:0,drive:"",engine:0,transmission:"",year:"",keys:"",fuelType:"",color:"",price:0,description:"",photos:null,mostDemand:!1,dealerName:t?t.fullName:"",dealerId:t?t.id:void 0};return e.createElement(G,{initialValues:i,enableReinitialize:!0,onSubmit:(o,{setErrors:c})=>{const w=o,{photos:d,keys:u}=w,E=L(w,["photos","keys"]),m=new FormData;for(let x in E)m.append(x,o[x]);if(d)for(let x of d)m.append("photo[]",x);u&&m.append("keys",Me.YES);const f=new URLSearchParams(n);s(He(m)).unwrap().then(()=>{s($e(f)),l({title:"New car edded successfully",position:"top",status:"success",duration:1500})}).catch(x=>{le(x)?x.status===422&&(c(oe(x.errors)),x.errors.forEach(({msg:T})=>l({title:T,position:"top",variant:"solid",status:"error",duration:2e3}))):l({title:"Error occured!",position:"top",variant:"solid",status:"error",duration:2e3})})}},({values:o,setFieldValue:c})=>e.createElement(Y,null,e.createElement(k,null,"Add Car"),e.createElement(h,{name:"dealerName",placeholder:"Dealer name"}),e.createElement(h,{name:"manufacturer",placeholder:"Manufacturer"}),e.createElement(h,{name:"modelGroup",placeholder:"Model group"}),e.createElement(h,{name:"modelDetail",placeholder:"Model detail"}),e.createElement(h,{name:"bodyStyle",placeholder:"Body style"}),e.createElement(h,{name:"damage",placeholder:"damage"}),e.createElement(h,{name:"location",placeholder:"location"}),e.createElement(h,{name:"odometer",placeholder:"odometer",type:"number",value:o.odometer||""}),e.createElement(h,{name:"cylinders",placeholder:"cylinders",type:"number",value:o.cylinders||""}),e.createElement(h,{name:"drive",placeholder:"drive"}),e.createElement(h,{name:"engine",type:"number",value:o.engine||"",placeholder:"Engine capacity"}),e.createElement(I,{name:"transmission"},({field:d})=>e.createElement(se,{pt:"2"},e.createElement(Ee,v(b({},d),{bg:"#EAEAEB",opacity:"0.5",placeholder:"Transmission"}),r.map(u=>e.createElement("option",{key:u,value:u},u))))),e.createElement(h,{name:"year",placeholder:"Year",type:"number",value:o.year||""}),e.createElement(h,{name:"fuelType",placeholder:"Fuel type"}),e.createElement(h,{name:"color",placeholder:"Color"}),e.createElement(h,{name:"price",placeholder:"Price",type:"number",value:o.price||""}),e.createElement(ce,{name:"keys",label:"Has keys"}),e.createElement(ce,{name:"mostDemand",label:"Most demand"}),e.createElement(I,{name:"description"},({field:d})=>e.createElement(ue,v(b({mt:"2"},d),{placeholder:"Write Description",size:"sm",as:pe,maxRows:10}))),e.createElement(I,{name:"photos"},({field:d})=>e.createElement("input",v(b({type:"file"},d),{multiple:!0,value:void 0,style:{marginTop:"12px"},onChange:u=>{const E=u.currentTarget.files;c("photos",E)}}))),e.createElement($,{type:"submit",mt:"4",mb:"4",isLoading:a},"Add")))},Tt=()=>{const[t,r]=p.exports.useState();return e.createElement(_,{pt:["32px",null,null,"40px"]},e.createElement(Z,null,e.createElement(F,{w:"full",justify:"center"},e.createElement(O,{w:"500px",bg:"#fff",p:"4"},e.createElement(Ot,{dealer:t})),e.createElement(O,{maxW:"250px",w:"full",alignSelf:"flex-start",p:"0"},e.createElement(At,{onSelect:r})))))},ge=s=>{var l=s,{onSelect:t,name:r,onUserSelect:a}=l,n=L(l,["onSelect","name","onUserSelect"]);const{isOpen:i,onToggle:o,onOpen:c,onClose:d}=Ve(),[u,E]=p.exports.useState(),[m,f]=p.exports.useState(""),[w,x]=p.exports.useState(""),[T,g]=p.exports.useState([]),[R,P]=p.exports.useState(!1),xe=C(),be=N(),ye=()=>{f(u?u.fullName:"Search for user...")},ve=y=>{P(!0),xe(qe(y)).unwrap().then(B=>{g(B),P(!1)}).catch(()=>{be({title:"Could not fetch users",position:"top",status:"error",duration:2e3}),P(!1)})},we=T.filter(y=>y.fullName.toLocaleLowerCase().includes(w.toLocaleLowerCase()));return e.createElement(dt,b({areOptionsOpen:i},n),e.createElement(Ge,{onClick:d,isActive:i}),e.createElement(pt,null,e.createElement(it,{areOptionsOpen:i,areOptionsSelected:!!u,clearCb:()=>{E(void 0)}},e.createElement(mt,{autoComplete:"off",bg:"autoGrey.200",name:r||"",label:"Search for user...",placeholder:m,value:u?ht(u.fullName):w,onChange:y=>{const B=y.currentTarget.value;ve(B),x(B),E(void 0),B&&c()},onFocus:()=>{ye()}})),e.createElement(ut,{isOpen:i},R?e.createElement(k,{textAlign:"center",w:"full"},"Fetching ..."," "):we.map(y=>e.createElement(Ye,{h:"80px",onClick:()=>{f(y.fullName),o(),t(y.id),a&&a(y),E(y)},key:y.id},e.createElement(F,{w:"full",py:"2"},e.createElement(z,{ratio:1/1,w:"50px"},e.createElement(q,{w:"full",h:"full",src:y.avatar,fallbackSrc:fe,borderRadius:"100px"})),e.createElement(k,null,y.fullName)))))))},Dt=({})=>{const t=C(),r=N(),{addingReview:a}=U(i=>i.customers),n={text:"",userId:"",photos:null},s=i=>{let o="";return i?i.length!==24&&(o="Invalid length"):o="Required",o},l=i=>{let o="";return i&&i.length>4&&(o="Photos must be less then 4"),o};return e.createElement(G,{initialValues:n,onSubmit:(i,{setErrors:o})=>{const E=i,{photos:c}=E,d=L(E,["photos"]),u=new FormData;if(c)for(let m of c)u.append("photo[]",m);for(let[m,f]of Object.entries(d))u.append(m,f);t(Ke(u)).unwrap().then(()=>{t(ie("")),r({title:"New Review added",duration:2e3,status:"success",position:"top"})}).catch(m=>{var f;le(m)&&m.status===422&&((f=m.errors)==null?void 0:f.length)&&o(oe(m.errors))})}},({setFieldValue:i})=>e.createElement(Y,null,e.createElement(k,{pb:"4"},"Add new Review"),e.createElement(I,{name:"userId",validate:s},({field:o,form:c})=>e.createElement(e.Fragment,null,e.createElement(ge,v(b({},o),{name:"userId",onSelect:d=>{i("userId",d)}})),e.createElement(j,{as:"span",color:"red"},c.errors.userId))),e.createElement(I,{name:"text"},({field:o})=>e.createElement(ue,v(b({mt:"2"},o),{placeholder:"Write Description",size:"sm",as:pe,maxRows:10}))),e.createElement(I,{name:"photos",validate:l},({field:o,form:c})=>e.createElement(e.Fragment,null,e.createElement("input",v(b({},o),{type:"file",multiple:!0,value:void 0,style:{marginTop:"12px"},onChange:d=>{i("photos",d.currentTarget.files)}})),e.createElement(j,{as:"span",display:"block",color:"red"},c.errors.photos))),e.createElement($,{type:"submit",mt:"4",isLoading:a},"Add Review")))},Rt=({})=>{const{reviews:t,removingReview:r,fetchingReviews:a}=U(l=>l.customers),n=C(),s=N();return p.exports.useEffect(()=>{n(ie(""))},[]),e.createElement(_,{pt:["32px",null,null,"40px"]},e.createElement(Z,null,e.createElement(S,{spacing:"32px"},e.createElement(O,{maxW:"500px",p:"4"},e.createElement(Dt,null)),e.createElement(O,{w:"full",maxW:"500px"},e.createElement(S,{w:"full"},a?e.createElement(e.Fragment,null,"Getting Reviews...",e.createElement(X,null)):t.length?t.map((l,i)=>e.createElement(F,{key:i,bg:"autoGrey.200",w:"full",p:"4",borderRadius:"8",opacity:r?"0.5":"1"},e.createElement(Q,{icon:e.createElement(J,null),"aria-label":"remove review",isLoading:r,onClick:()=>{n(Qe(l.id)).then(()=>s({title:"Review Deleted",status:"success",duration:2e3,position:"top"})).catch(()=>s({title:"Could not delete the review, contact to the developer",status:"error",duration:2e3,position:"top"}))}}),e.createElement(z,{ratio:1/1,minW:"80px"},e.createElement(q,{src:l.user&&l.user.avatar,fallbackSrc:"https://image.shutterstock.com/image-vector/profile-picture-avatar-icon-vector-260nw-1760295569.jpg",borderRadius:"100px"})),e.createElement(j,{overflowWrap:"anywhere"},l.text),l.photos&&l.photos.map(o=>e.createElement(z,{key:o,ratio:1/1,minW:"60px"},e.createElement(q,{src:o}))))):e.createElement(e.Fragment,null,"No Review Yet"))))))},Nt=({setSelectedUser:t})=>{const[r,a]=p.exports.useState([]),[n,s]=p.exports.useState(!1),[l,i]=p.exports.useState(1),[o,c]=p.exports.useState(1),d=20,u=C();p.exports.useEffect(()=>{E(l)},[l]);function E(m){s(!0),u(Je(`page=${m}&limit=${d}`)).unwrap().then(f=>{a(f.users),c(f.totalPages),s(!1)})}return e.createElement(S,{align:"flex-start",spacing:"0"},n&&e.createElement(Z,{w:"full"},e.createElement(X,{justifySelf:"center"})),r.map((m,f)=>e.createElement(he,{key:m.id,index:(l-1)*d+f+1,onClick:()=>t(m),avatar:m.avatar,mainText:m.fullName,secondaryText:m.role,verified:m.verified})),e.createElement(F,{w:"full",justify:"space-between",px:"2",py:"4"},e.createElement(A,{variant:"link",color:"#427AD6",disabled:l===1,onClick:()=>{i(m=>m-1)}},"Prev"),e.createElement(A,{variant:"link",color:"#427AD6",disabled:l===o,onClick:()=>{i(l+1)}},"Next")))},jt=({operation:t,userId:r,car:a,closeDrawer:n})=>{const s=C(),l=N();let i;return a&&t==="modifying"?i={carName:a.carName,deliveryAt:a.deliveryAt?xt(a.deliveryAt.toString(),"-"):new Date,location:a.location,price:a.price,status:a.status}:i={carName:"",deliveryAt:new Date,location:"",price:0,status:""},e.createElement(G,{initialValues:i,onSubmit:(o,{setSubmitting:c})=>{t==="modifying"&&a?s(Ze({carId:a.id,props:v(b({},o),{userId:r})})).unwrap().then(()=>{c(!1),n()}).catch(d=>{c(!1),l({title:d,status:"error",position:"top"}),n()}):s(Xe(v(b({},o),{userId:r}))).unwrap().then(()=>{c(!1),n()}).catch(d=>{l({title:d,status:"error",position:"top"}),c(!1),n()})}},({isSubmitting:o})=>e.createElement(Y,null,e.createElement(h,{name:"carName",placeholder:"car name"}),e.createElement(h,{name:"location",placeholder:"Location"}),e.createElement(h,{name:"price",placeholder:"Price",type:"number"}),e.createElement(I,{name:"status"},({field:c})=>e.createElement(se,{pt:"2"},e.createElement(Ee,v(b({},c),{bg:"#EAEAEB",opacity:"0.5",placeholder:"Status"}),e.createElement("option",{value:"Completed"},"Completed"),e.createElement("option",{value:"On The Way"},"On the way")))),e.createElement(h,{name:"deliveryAt",bg:"#EAEAEB",opacity:"0.5",placeholder:"Status",type:"date",label:"Delivery at:  dd/mm/yyyy"}),e.createElement($,{mt:"4",type:"submit",isLoading:o},t==="modifying"?"Update car":"Add Car")))},Ft=({isEditing:t,setIsEditing:r,operationOnTheCar:a,selectedUser:n,selectedCar:s,handleGetUserOrders:l})=>e.createElement(et,{isOpen:t,placement:"right",onClose:()=>{r(!1)},size:"md"},e.createElement(tt,null),e.createElement(at,null,e.createElement(rt,null),e.createElement(nt,null,"Change/Add a Car"),e.createElement(lt,null,e.createElement(jt,{operation:a,userId:n?n.id:"",car:s,closeDrawer:()=>{r(!1),n&&l(n.id)}})))),It=({})=>{const[t,r]=p.exports.useState([]),[a,n]=p.exports.useState(!1),[s,l]=p.exports.useState(),[i,o]=p.exports.useState(!1),[c,d]=p.exports.useState("adding"),[u,E]=p.exports.useState(),m=N(),f=C();function w(g){n(!0),f(ot(g)).unwrap().then(R=>{r(R),n(!1)}).catch(()=>n(!1))}function x(g){f(st(g)).unwrap().then(()=>{s&&w(s.id)}).catch(R=>m({title:R,position:"top",status:"error"}))}function T(g){l(g),w(g.id)}return e.createElement(_,{pt:["32px",null,null,"40px"]},e.createElement(me,{w:"full",justify:"flex-end",spacing:"4",direction:["column",null,"row"],align:"center"},e.createElement(O,{w:"full",maxW:"650px",p:"32px",alignSelf:"flex-start"},e.createElement(S,null,e.createElement(k,{textAlign:"center",fontSize:"24px"},"Add or Change Order"),e.createElement(ge,{onSelect:()=>{},onUserSelect:T}),e.createElement(S,{pt:"4",w:"full"},s&&e.createElement(A,{mb:"2",onClick:()=>{o(!0),d("adding")}},"+ add new Car for ",s.fullName),a?e.createElement(X,null):t.length?t.map(g=>e.createElement(O,{w:"full",key:g.id,boxShadow:"0px 0px 10px lightgrey"},e.createElement(S,null,e.createElement(F,{w:"full",justify:"space-between"},e.createElement(A,{variant:"ghost",color:"autoOrange.500",onClick:()=>{o(!0),d("modifying"),E(g)}},"Modify order"),e.createElement(Q,{onClick:()=>x(g.id),icon:e.createElement(J,null),"aria-label":"delete order"})),e.createElement(bt,{order:g})))):e.createElement(k,{w:"full",textAlign:"center",pt:"4"},"No Ordered Cars")))),e.createElement(O,{maxW:["full","450px","250px"],px:"0",w:"full",alignSelf:"flex-start"},e.createElement(Nt,{setSelectedUser:T})),e.createElement(Ft,{isEditing:i,setIsEditing:o,operationOnTheCar:c,selectedUser:s,selectedCar:u,handleGetUserOrders:w})))},ta=()=>{const{path:t}=Ae(),r=C();return e.createElement(_,null,e.createElement(Et,null),e.createElement(me,{w:"full",justify:"center",pt:"4",direction:["column",null,"row"],align:"center"},e.createElement(A,{variant:"link"},e.createElement(H,{to:`${t}/add-car`,style:{color:"black"}},"Car")),e.createElement(V,{height:"20px",borderColor:"black",display:["none",null,"block"]}),e.createElement(A,{variant:"link"},e.createElement(H,{style:{color:"black"},to:`${t}/add-review`},"Review")),e.createElement(V,{height:"20px",borderColor:"black",display:["none",null,"block"]}),e.createElement(A,{variant:"link"},e.createElement(H,{style:{color:"black"},to:`${t}/add-order`},"Ordereds")),e.createElement(V,{height:"20px",borderColor:"black",display:["none",null,"block"]}),e.createElement(A,{variant:"link"},e.createElement(H,{style:{color:"black"},to:`${t}/banners`},"Banners")),e.createElement(V,{height:"20px",borderColor:"black",display:["none",null,"block"]}),e.createElement(A,{color:"red",border:"1px solid",onClick:()=>r(ct())},"logout")),e.createElement(Oe,null,e.createElement(W,{path:t,exact:!0},e.createElement(Te,{to:`${t}/add-review`})),e.createElement(W,{path:`${t}/add-car`,render:()=>e.createElement(Tt,null),exact:!0}),e.createElement(W,{path:`${t}/add-review`,render:()=>e.createElement(Rt,null),exact:!0}),e.createElement(W,{path:`${t}/add-order`,render:()=>e.createElement(It,null),exact:!0}),e.createElement(W,{path:`${t}/banners`,render:()=>e.createElement(kt,null),exact:!0})))};export{ta as AdminPage,ta as default};
