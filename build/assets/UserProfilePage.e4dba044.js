var he=Object.defineProperty;var O=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var V=(t,a,r)=>a in t?he(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,Z=(t,a)=>{for(var r in a||(a={}))Y.call(a,r)&&V(t,r,a[r]);if(O)for(var r of O(a))Q.call(a,r)&&V(t,r,a[r]);return t};var q=(t,a)=>{var r={};for(var n in t)Y.call(t,n)&&a.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&O)for(var n of O(t))a.indexOf(n)<0&&Q.call(t,n)&&(r[n]=t[n]);return r};import{r as i,u as U,k as W,R as e,S as xe,f as D,e as be}from"./vendor.576a7237.js";import{P as y,$ as we,a0 as Ce,a2 as ve,R as S,Q as ye,a3 as T,A as K,f as M,d as Se,H as f,a as _,u as k,k as J,n as E,V as p,e as j,T as m,B as X,aM as ee,aN as Te,g as v,M as ke,aO as te,j as je,m as ae,aP as Pe,aQ as Ie,aR as Ae,p as P,w as re,S as Oe,x as ne,aS as ze,y as Re,D as Fe,aT as Le,C as Ue,aU as We}from"./index.38124d94.js";import{U as De}from"./UserAvatar.f5046a35.js";import{C as I}from"./Card.7d4ae326.js";import{A as Me}from"./ArrowPrevIcon.13b5c6bb.js";import{C as _e}from"./react-easy-crop.604fc41e.js";import{a as Ne,S as $e,s as Be}from"./safeOperations.ebf42ecd.js";import{B as le,C as He}from"./CatalogListWrap.716c90c2.js";import{T as d,c as Ge,t as se}from"./TextSecondary.11750561.js";import{B as Ye,C as Qe}from"./CarCardHeading.a9363174.js";import{N as u}from"./NotSpecified.74fd68fb.js";import{I as z}from"./image.44631398.js";import{A as R}from"./aspect-ratio.73a99b93.js";import{S as Ve}from"./simple-grid.2be9e23f.js";import{d as oe,O as Ze}from"./OrderListCard.ec182cc1.js";import"./prop-types.d6ec705b.js";import"./react-redux.0b249e8a.js";import"./axios.7b768d2b.js";import"./formik.30c45d87.js";import"./yup.df40d5b6.js";import"./focus-visible.c4e3ef79.js";function b(){return b=Object.assign||function(t){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},b.apply(this,arguments)}function N(t,a){if(t==null)return{};var r={},n=Object.keys(t),s,l;for(l=0;l<n.length;l++)s=n[l],!(a.indexOf(s)>=0)&&(r[s]=t[s]);return r}var qe=y((t,a)=>{var r=we("Table",t),n=Ce(t),{className:s}=n,l=N(n,["className"]);return i.exports.createElement(ve,{value:r},i.exports.createElement(S.table,b({role:"table",ref:a,__css:r.table,className:ye("chakra-table",s)},l)))}),Ke=y((t,a)=>{var r=T();return i.exports.createElement(S.thead,b({},t,{ref:a,__css:r.thead}))}),Je=y((t,a)=>{var r=T();return i.exports.createElement(S.tbody,b({},t,{ref:a,__css:r.tbody}))}),w=y((t,a)=>{var{isNumeric:r}=t,n=N(t,["isNumeric"]),s=T();return i.exports.createElement(S.th,b({},n,{ref:a,__css:s.th,"data-is-numeric":r}))}),ce=y((t,a)=>{var r=T();return i.exports.createElement(S.tr,b({role:"row"},t,{ref:a,__css:r.tr}))}),C=y((t,a)=>{var{isNumeric:r}=t,n=N(t,["isNumeric"]),s=T();return i.exports.createElement(S.td,b({role:"gridcell"},n,{ref:a,__css:s.td,"data-is-numeric":r}))});const $=c=>{var o=c,{activeBg:t="autoOrange.100",activeColor:a="#FB5607",to:r,clickCallback:n,children:s}=o,l=q(o,["activeBg","activeColor","to","clickCallback","children"]);const g=U(),h=W({path:r,exact:!0});return e.createElement(K,Z({w:"full",borderRadius:"none",display:"flex",justifyContent:["start",null,null,"center"],p:"32px 32px",fontWeight:"500",bg:h?t:"#fff",color:h?a:"#000",_hover:{bg:h?"autoOrange.200":"autoGrey.200"},_active:{bg:"autoOrange.300"},onClick:()=>{n?n():g.push(r)}},l),s)},Xe=({zoom:t,imageUrl:a,onCropComplete:r,onZoomChange:n})=>{const[s,l]=i.exports.useState({x:0,y:0});return e.createElement(_e,{image:a,crop:s,zoom:t,cropShape:"round",aspect:1/1,onCropChange:l,onCropComplete:r,onZoomChange:n})},et=({acceptedFileTypes:t,setFile:a,setFilePath:r,setIsEditing:n})=>{const s=i.exports.useRef(null),l=o=>{o.currentTarget.files&&(r(URL.createObjectURL(o.currentTarget.files[0])),a(o.currentTarget.files[0]),n(!0))},c=()=>{var o;console.log("clicked"),(o=s.current)==null||o.click()};return e.createElement(M,{onClick:c,h:"120%",cursor:"pointer"},e.createElement(Se,{bg:"tranparent",h:"full",w:"full"},"upload a file"),e.createElement("input",{type:"file",accept:t,ref:s,onChange:o=>l(o),style:{display:"none"}}))},tt=({onChange:t,value:a,min:r,max:n,step:s})=>e.createElement(f,{w:"full",justify:"center"},e.createElement(le,{fontSize:"30px",_active:{bg:"autoGrey.200"},onClick:()=>{a>r&&t(Ne(a,.1))}},"-"),e.createElement($e,{value:a,min:r,max:n,step:s,onChange:l=>t(l),w:"50%"}),e.createElement(le,{fontSize:"20px",_active:{bg:"autoGrey.200"},onClick:()=>{a<n&&t(Be(a,.1))}},"+")),at=t=>new Promise((a,r)=>{const n=new Image;n.addEventListener("load",()=>a(n)),n.addEventListener("error",s=>r(s)),n.setAttribute("crossOrigin","anonymous"),n.src=t});function rt(t){return t*Math.PI/180}async function nt(t,a,r=0){const n=await at(t),s=document.createElement("canvas"),l=s.getContext("2d"),c=Math.max(n.width,n.height),o=2*(c/2*Math.sqrt(2));s.width=o,s.height=o,l==null||l.translate(o/2,o/2),l==null||l.rotate(rt(r)),l==null||l.translate(-o/2,-o/2),l==null||l.drawImage(n,o/2-n.width*.5,o/2-n.height*.5);const g=l==null?void 0:l.getImageData(0,0,o,o);return s.width=a.width,s.height=a.height,g&&(l==null||l.putImageData(g,Math.round(0-o/2+n.width*.5-a.x),Math.round(0-o/2+n.height*.5-a.y))),new Promise(h=>{s.toBlob(A=>{h(A)},"image/jpeg")})}const ie=({toast:t,message:a})=>{t({title:a,status:"error",duration:2e3,isClosable:!0,position:"top"})},me=({})=>{const[t,a]=i.exports.useState(1.3),[r,n]=i.exports.useState(null),[s,l]=i.exports.useState(null),[c,o]=i.exports.useState(""),[g,h]=i.exports.useState(!1),[A,ue]=i.exports.useState(null),[pe,F]=i.exports.useState(!1),B=_(),H=k(),G=()=>{g?(h(!1),o("")):H(ee())},fe=x=>{a(x)},Ee=i.exports.useCallback((x,L)=>{n(L)},[]),de=async()=>{const x=await nt(c,r);a(1),o(URL.createObjectURL(x)),h(!1),ue(x)},ge=async()=>{const x=new FormData;A?(x.append("profile-avatar",A,"coppedImage.jpg"),F(!0),H(Te(x)).unwrap().then(()=>{F(!1),G()}).catch(L=>{console.log("error: ",L),F(!1),ie({toast:B,message:"Unable to save photo. Please, try later"})})):ie({toast:B,message:"Please Choose the picture."})};return e.createElement(e.Fragment,null,e.createElement(f,{position:"absolute",left:"10px",top:"20px",spacing:"2"},e.createElement(J,{position:"relative",top:"0",left:"0",as:Me,boxSize:6}),e.createElement(E,{fontSize:"20px"},"Profile Picture")),e.createElement(p,{w:"full",pt:"32px",spacing:"2"},e.createElement(j,{p:"8"},e.createElement(M,{h:"180px",w:"180px",borderRadius:"1000px",bg:"autoBlue.400",position:"relative",overflow:"hidden"},e.createElement(Xe,{imageUrl:c,zoom:t,onZoomChange:fe,onCropComplete:Ee}))),g?e.createElement(e.Fragment,null,e.createElement(m,{fontSize:"16px"},"Scale and Crop"),e.createElement(tt,{min:1,max:3,step:.1,value:t,onChange:a})):e.createElement(et,{setFilePath:o,setFile:l,acceptedFileTypes:"image/*",setIsEditing:h}),e.createElement(f,{w:"full",pt:"24px"},e.createElement(X,{bg:"autoGrey.400",color:"black",_active:{bg:"autoGrey.600"},onClick:G},"Cancel"),e.createElement(X,{isLoading:pe,onClick:()=>{g?de():ge()}},g?"Crop":"Save"))))},lt=({})=>{const{isChangeProfilePictureOpen:t,screen:a}=v(l=>l.globalAppState),{isDesktop:r}=a,n=k(),s=()=>n(ee());return e.createElement(e.Fragment,null,r?e.createElement(ke,{isOpen:t,onClose:s,isCentered:!0,blockScrollOnMount:!0},e.createElement(te,null),e.createElement(je,{p:"32px 48px",w:"450px"},e.createElement(J,{top:"30px",right:"48px"}),e.createElement(me,null),e.createElement(ae,{p:"0"}))):e.createElement(Pe,{isOpen:t,placement:"bottom",onClose:s,size:"full"},e.createElement(te,null),e.createElement(Ie,{maxH:"100%"},e.createElement(ae,null,e.createElement(j,{h:"full"},e.createElement(p,{w:"full"},e.createElement(me,null)))))))},st=({})=>{const[t,a]=i.exports.useState(""),{path:r}=W(),n=k(),{avatar:s,fullName:l,phone:c}=v(o=>o.userInfoSlice);return i.exports.useEffect(()=>{s&&a(s)},[s]),e.createElement(I,{bg:"white",p:"0",w:["full",null,null,"200px"],maxH:"400px"},e.createElement(M,{p:"32px"},e.createElement(De,{username:l,image:t,secondaryText:`+995 ${c}`,size:"70px",showPhotoChange:!0})),e.createElement(lt,null),e.createElement(p,{pb:"24px",spacing:"0"},e.createElement($,{to:`${r}/order-list`},"Order List"),e.createElement($,{to:`${r}/favourites`},"Favourites"),e.createElement($,{to:"/home",clickCallback:()=>n(Ae())},"Log out")))},ot=({car:t})=>{const a=U();return e.createElement(I,{bg:"autoGrey.500",w:"full",p:"0",cursor:"pointer",onClick:()=>a.push(`/catalog/car/${t.id}`)},e.createElement(f,{w:"full",justify:"space-between",p:"16px",align:"stretch"},e.createElement(f,{spacing:"4",minW:"220px",p:"0"},e.createElement(R,{ratio:78/66,minW:"78px"},e.createElement(z,{src:t==null?void 0:t.imgUrls[0],borderRadius:"8px",fallbackSrc:"https://via.placeholder.com/150"})),e.createElement(p,{align:"flex-start"},e.createElement(d,null,"Name"),e.createElement(m,{fontSize:"16px",fontWeight:"500"},t.m?P(t.m):e.createElement(u,null)," ",t.mG?P(t.mG):e.createElement(u,{pl:"2",children:""})))),e.createElement(p,{align:"flex-start",w:"full",maxW:"80px",pt:"2"},e.createElement(d,null,"Year"),e.createElement(m,{fontSize:"16px",fontWeight:"500"},t.y||e.createElement(u,null))),e.createElement(p,{align:"flex-start",w:"full",pt:"2"},e.createElement(d,null,"Damage"),e.createElement(m,{fontSize:"16px",fontWeight:"500"},t.dmg?e.createElement(e.Fragment,null,P(t.dmg)):e.createElement(u,null))),e.createElement(p,{align:"flex-start",w:"full",pt:"2"},e.createElement(d,null,"Location"),e.createElement(m,{fontSize:"16px",fontWeight:"500"},t.lC||e.createElement(u,null))),e.createElement(p,{align:"flex-start",w:"full",pt:"2"},e.createElement(d,null,"Engine"),e.createElement(m,{fontSize:"16px",fontWeight:"500"},t.eng||e.createElement(u,null))),e.createElement(Ye,{carId:t.id,h:"46px",w:"45px"})))},ct=({})=>{const{favouriteCars:t}=v(r=>r.userInfoSlice),{favouriteCarsFetching:a}=v(r=>r.userInfoSlice);return e.createElement(I,{w:"full",p:"32px"},e.createElement(p,{w:"full",spacing:"4"},a?e.createElement(j,{w:"full",h:"300px"},e.createElement(re,null)):t.length?t.map(r=>e.createElement(ot,{key:r.id,car:r})):e.createElement(E,null,"Your Favourites list is empty")))},it=({car:t})=>{const a=t.imgUrls,r=U();return e.createElement(I,{w:"full",p:"4",onClick:()=>r.push(`/catalog/car/${t.id}`)},e.createElement(p,{spacing:"4"},e.createElement(Qe,{model:`${t.m} ${t.mG}`,id:t.id,year:Number(t.y)}),e.createElement(Ve,{gridTemplateAreas:'"a a b" "a a c"',w:"full",maxH:"130px",gap:"2"},e.createElement(R,{overflow:"hidden",borderRadius:"8px",ratio:191/130,w:"full",gridArea:"a",maxH:"130px"},e.createElement(z,{src:a&&a.length?a[0]:`https://${t==null?void 0:t.imgT}`,filter:"auto",blur:a&&a.length?"none":"10px",saturation:.9,borderRadius:"8px"})),e.createElement(R,{ratio:191/130,w:"full",gridArea:"b",maxH:"61px"},e.createElement(z,{src:a&&a.length?a[1]:`https://${t==null?void 0:t.imgT}`,borderRadius:"8px"})),e.createElement(R,{ratio:191/130,w:"full",gridArea:"c",maxH:"61px"},e.createElement(z,{src:a&&a.length?a[2]:`https://${t==null?void 0:t.imgT}`,borderRadius:"8px"}))),e.createElement(p,{divider:e.createElement(Oe,null),w:"full"},e.createElement(f,{w:"full",justify:"space-between"},e.createElement(d,null,"Damage"),e.createElement(E,null,t.dmg?Ge(t.dmg):e.createElement(u,null))),e.createElement(f,{w:"full",justify:"space-between"},e.createElement(d,null,"Mileage"),e.createElement(E,null,t.od?se(t.od):e.createElement(u,null))),e.createElement(f,{w:"full",justify:"space-between"},e.createElement(d,null,"Location"),e.createElement(E,null,t.lC?P(t.lC):e.createElement(u,null))),e.createElement(f,{w:"full",justify:"space-between"},e.createElement(d,null,"Engine"),e.createElement(E,null,t.eng?P(t.eng.toString()):e.createElement(u,null))),e.createElement(f,{w:"full",justify:"space-between"},e.createElement(d,null,"Esimate Price"),e.createElement(E,null,t.price?e.createElement(e.Fragment,null,"$ ",se(t.price)):e.createElement(u,null))),e.createElement(f,{w:"full",justify:"space-between"},e.createElement(d,null,"Total Price"),e.createElement(E,null,"$20 000")))))},mt=({})=>{const{favouriteCars:t}=v(a=>a.userInfoSlice);return e.createElement(He,{pt:"48px"},t.map(a=>e.createElement(it,{key:a.id,car:a})))},ut=({})=>{const{isDesktop:t}=ne(),a=k();return i.exports.useEffect(()=>{a(ze("")),a(Re(""))},[]),e.createElement(e.Fragment,null,t?e.createElement(ct,null):e.createElement(mt,null))},pt=({})=>e.createElement(ut,null),ft=({orderList:t})=>{const[a,r]=i.exports.useState([]),n=v(c=>c.orderedCars.fetching),s=_(),l=c=>{a.includes(c)?r(a.filter(o=>o!==c)):r(a.concat(c))};return e.createElement(I,{p:"32px",w:"full"},n?e.createElement(j,{w:"full",h:"full"},e.createElement(re,null)):t.length?e.createElement(qe,null,e.createElement(Ke,null,e.createElement(ce,{opacity:"0.5",fontSize:"14px",fontWeight:"light"},e.createElement(w,{p:[null,null,null,"2","4"],isTruncated:!0,fontWeight:"light"},e.createElement(m,{textTransform:"capitalize"},"Order Id")),e.createElement(w,{fontWeight:"light",px:"2"},e.createElement(m,{textTransform:"capitalize"},"Name")),e.createElement(w,{fontWeight:"light",px:"2"},e.createElement(m,{textTransform:"capitalize"},"Created")),e.createElement(w,{isTruncated:!0,fontWeight:"light"},e.createElement(m,{textTransform:"capitalize"},"Delivery Date")),e.createElement(w,{fontWeight:"light",p:[null,null,null,"2","4"]},e.createElement(m,{textTransform:"capitalize"},"Location")),e.createElement(w,{isTruncated:!0,p:"4",fontWeight:"light"},e.createElement(m,{textTransform:"capitalize"},"Total Price")),e.createElement(w,{fontWeight:"light"},e.createElement(m,{textTransform:"capitalize"},"Status")),e.createElement(w,{fontWeight:"light"}))),e.createElement(Je,null,t.map((c,o)=>e.createElement(ce,{key:o,pt:"50px",_hover:{bg:"autoGrey.100"}},e.createElement(C,{w:"full",px:"4",title:c.id,py:[null,null,"8","8",""]},e.createElement(E,{w:"80px",isTruncated:!0,cursor:"pointer",onClick:()=>navigator.clipboard.writeText(c.id).then(()=>s({title:"Id copied to the clipboard",status:"success",position:"top"}))},c.id)),e.createElement(C,{title:c.carName,px:""},e.createElement(m,{noOfLines:a.includes(o)?10:1,fontSize:"16px",w:"100px"},c.carName)),e.createElement(C,{px:"2"},c.createdAt?oe(c.createdAt.toString()):e.createElement(u,null)),e.createElement(C,null,c.deliveryAt?oe(c.deliveryAt.toString()):e.createElement(u,null)," "),e.createElement(C,{p:[null,null,null,"2","4"]},c.location," "),e.createElement(C,{px:"4",title:`$ ${c.price}`},e.createElement(m,{fontSize:"inherit",maxW:"80px",isTruncated:!0},"$ ",c.price*1)),e.createElement(C,null,e.createElement(m,{whiteSpace:"nowrap"},c.status)," "),e.createElement(C,{p:"0"},e.createElement(K,{variant:"link",minH:"50px",onClick:()=>l(o)},e.createElement(Fe,{transform:a.includes(o)?"rotate(180deg)":"none",transition:"all .2s"}))))))):e.createElement(j,null,e.createElement(E,null,"Your order list is empty")))},Et=({orderList:t})=>e.createElement(p,{w:"full",spacing:"24px",pt:"48px"},t.length?t.map((a,r)=>e.createElement(Ze,{key:r,order:a})):e.createElement(E,null,"Your order list is empty")),dt=({})=>{const[t,a]=i.exports.useState([]),{isDesktop:r}=ne(),n=v(c=>c.userInfoSlice.id),s=_(),l=k();return i.exports.useEffect(()=>{n&&l(Le(n)).unwrap().then(c=>a(c)).catch(c=>s({title:c,status:"error",position:"top"}))},[n]),e.createElement(e.Fragment,null,r?e.createElement(ft,{orderList:t}):e.createElement(Et,{orderList:t}))},Dt=()=>{const{path:t}=W();return e.createElement(Ue,{pt:["16px","26px","32px","48px"]},e.createElement(We,{direction:["column",null,null,"row"],spacing:"24px",w:"full"},e.createElement(st,null),e.createElement(xe,null,e.createElement(D,{exact:!0,path:t,render:()=>e.createElement(be,{to:`${t}/order-list`})}),e.createElement(D,{exact:!0,path:`${t}/order-list`,render:()=>e.createElement(dt,null)}),e.createElement(D,{exact:!0,path:`${t}/favourites`,render:()=>e.createElement(pt,null)}))))};export{Dt as UserProfilePage,Dt as default};