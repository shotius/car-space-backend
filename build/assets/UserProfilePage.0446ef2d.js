var be=Object.defineProperty;var O=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var J=(t,a,r)=>a in t?be(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,Q=(t,a)=>{for(var r in a||(a={}))K.call(a,r)&&J(t,r,a[r]);if(O)for(var r of O(a))Z.call(a,r)&&J(t,r,a[r]);return t};var X=(t,a)=>{var r={};for(var l in t)K.call(t,l)&&a.indexOf(l)<0&&(r[l]=t[l]);if(t!=null&&O)for(var l of O(t))a.indexOf(l)<0&&Z.call(t,l)&&(r[l]=t[l]);return r};import{r as i,u as W,k as D,R as e,S as we,f as M,e as ve}from"./vendor.576a7237.js";import{a0 as y,a9 as Ce,aa as Se,ac as ye,a2 as T,a1 as Te,ad as k,B as ee,k as U,g as ke,f as E,a as b,c as _,u as j,n as te,H as p,V as f,C as w,T as m,h as ae,b4 as re,b5 as je,M as Pe,x as le,m as Ie,q as ne,w as Ae,y as Oe,b6 as ze,A as P,N,aj as B,S as Fe,O as se,b7 as Le,P as Re,D as We,b8 as De,j as Me,b9 as Ue}from"./index.fac747c5.js";import{S as _e}from"./ScrollToTop.da3f839a.js";import{U as Ne}from"./UserAvatar.41ee6ca3.js";import{C as I}from"./Card.4ebcfb63.js";import{A as Be}from"./ArrowPrevIcon.11d84689.js";import{C as $e}from"./react-easy-crop.604fc41e.js";import{a as He,S as Ge,s as Ye}from"./SliderBlue.a274bccf.js";import{a as oe,B as Ve,C as qe}from"./ButtonRound.0377f02b.js";import{T as d,c as Ke,t as ce}from"./TextSecondary.b0d89cb5.js";import{N as u}from"./NotSpecified.f45b2685.js";import{I as z}from"./image.8af3539a.js";import{A as F}from"./aspect-ratio.390e20da.js";import{C as Ze}from"./CatalogListWrap.495dcb9e.js";import{S as Je}from"./simple-grid.0e51eaa7.js";import{d as ie,O as Qe}from"./OrderListCard.ad21f329.js";import"./prop-types.d6ec705b.js";import"./react-redux.0b249e8a.js";import"./axios.7b768d2b.js";import"./formik.30c45d87.js";import"./yup.8a20e72b.js";import"./focus-visible.c4e3ef79.js";function v(){return v=Object.assign||function(t){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(t[l]=r[l])}return t},v.apply(this,arguments)}function $(t,a){if(t==null)return{};var r={},l=Object.keys(t),s,n;for(n=0;n<l.length;n++)s=l[n],!(a.indexOf(s)>=0)&&(r[s]=t[s]);return r}var Xe=y((t,a)=>{var r=Ce("Table",t),l=Se(t),{className:s}=l,n=$(l,["className"]);return i.exports.createElement(ye,{value:r},i.exports.createElement(T.table,v({role:"table",ref:a,__css:r.table,className:Te("chakra-table",s)},n)))}),et=y((t,a)=>{var r=k();return i.exports.createElement(T.thead,v({},t,{ref:a,__css:r.thead}))}),tt=y((t,a)=>{var r=k();return i.exports.createElement(T.tbody,v({},t,{ref:a,__css:r.tbody}))}),C=y((t,a)=>{var{isNumeric:r}=t,l=$(t,["isNumeric"]),s=k();return i.exports.createElement(T.th,v({},l,{ref:a,__css:s.th,"data-is-numeric":r}))}),me=y((t,a)=>{var r=k();return i.exports.createElement(T.tr,v({role:"row"},t,{ref:a,__css:r.tr}))}),S=y((t,a)=>{var{isNumeric:r}=t,l=$(t,["isNumeric"]),s=k();return i.exports.createElement(T.td,v({role:"gridcell"},l,{ref:a,__css:s.td,"data-is-numeric":r}))});const H=c=>{var o=c,{activeBg:t="autoOrange.100",activeColor:a="#FB5607",to:r,clickCallback:l,children:s}=o,n=X(o,["activeBg","activeColor","to","clickCallback","children"]);const x=W(),g=D({path:r,exact:!0});return e.createElement(ee,Q({w:"full",borderRadius:"none",display:"flex",justifyContent:["start",null,null,"center"],p:"32px 32px",fontWeight:"500",bg:g?t:"#fff",color:g?a:"#000",_hover:{bg:g?"autoOrange.200":"autoGrey.200"},_active:{bg:"autoOrange.300"},onClick:()=>{l?l():x.push(r)}},n),s)},at=({zoom:t,imageUrl:a,onCropComplete:r,onZoomChange:l})=>{const[s,n]=i.exports.useState({x:0,y:0});return e.createElement($e,{image:a,crop:s,zoom:t,cropShape:"round",aspect:1/1,onCropChange:n,onCropComplete:r,onZoomChange:l})},rt=({acceptedFileTypes:t,setFile:a,setFilePath:r,setIsEditing:l})=>{const s=i.exports.useRef(null),n=o=>{o.currentTarget.files&&(r(URL.createObjectURL(o.currentTarget.files[0])),a(o.currentTarget.files[0]),l(!0))},c=()=>{var o;console.log("clicked"),(o=s.current)==null||o.click()};return e.createElement(U,{onClick:c,h:"120%",cursor:"pointer"},e.createElement(ke,{bg:"tranparent",h:"full",w:"full"},"upload a file"),e.createElement("input",{type:"file",accept:t,ref:s,onChange:o=>n(o),style:{display:"none"}}))},lt=({onChange:t,value:a,min:r,max:l,step:s})=>e.createElement(E,{w:"full",justify:"center"},e.createElement(oe,{fontSize:"30px",_active:{bg:"autoGrey.200"},onClick:()=>{a>r&&t(He(a,.1))}},"-"),e.createElement(Ge,{sliderValue:a,value:a,min:r,max:l,step:s,onChange:n=>t(n),w:"50%"}),e.createElement(oe,{fontSize:"20px",_active:{bg:"autoGrey.200"},onClick:()=>{a<l&&t(Ye(a,.1))}},"+")),nt=t=>new Promise((a,r)=>{const l=new Image;l.addEventListener("load",()=>a(l)),l.addEventListener("error",s=>r(s)),l.setAttribute("crossOrigin","anonymous"),l.src=t});function st(t){return t*Math.PI/180}async function ot(t,a,r=0){const l=await nt(t),s=document.createElement("canvas"),n=s.getContext("2d"),c=Math.max(l.width,l.height),o=2*(c/2*Math.sqrt(2));s.width=o,s.height=o,n==null||n.translate(o/2,o/2),n==null||n.rotate(st(r)),n==null||n.translate(-o/2,-o/2),n==null||n.drawImage(l,o/2-l.width*.5,o/2-l.height*.5);const x=n==null?void 0:n.getImageData(0,0,o,o);return s.width=a.width,s.height=a.height,x&&(n==null||n.putImageData(x,Math.round(0-o/2+l.width*.5-a.x),Math.round(0-o/2+l.height*.5-a.y))),new Promise(g=>{s.toBlob(A=>{g(A)},"image/jpeg")})}const ue=({toast:t,message:a})=>{t({title:a,status:"error",duration:2e3,isClosable:!0,position:"top"})},pe=({})=>{const[t,a]=i.exports.useState(1.3),[r,l]=i.exports.useState(null),[s,n]=i.exports.useState(null),[c,o]=i.exports.useState(""),[x,g]=i.exports.useState(!1),[A,fe]=i.exports.useState(null),[Ee,L]=i.exports.useState(!1),G=b(h=>h.userInfoSlice.avatar),Y=_(),V=j(),q=()=>{x?(g(!1),o("")):V(re())},de=h=>{a(h)},ge=i.exports.useCallback((h,R)=>{l(R)},[]),he=async()=>{const h=await ot(c,r);a(1),o(URL.createObjectURL(h)),g(!1),fe(h)};i.exports.useEffect(()=>{G&&(o(G),g(!0))},[]);const xe=async()=>{const h=new FormData;A?(h.append("profile-avatar",A,"coppedImage.jpg"),L(!0),V(je(h)).unwrap().then(()=>{L(!1),q()}).catch(R=>{console.log("error: ",R),L(!1),ue({toast:Y,message:"Unable to save photo. Please, try later"})})):ue({toast:Y,message:"Please Choose the picture."})};return e.createElement(e.Fragment,null,e.createElement(E,{position:"absolute",left:"10px",top:"20px",spacing:"2"},e.createElement(te,{position:"relative",top:"0",left:"0",as:Be,boxSize:6}),e.createElement(p,{fontSize:"20px"},"Profile Picture")),e.createElement(f,{w:"full",pt:"32px",spacing:"2"},e.createElement(w,{p:"8"},e.createElement(U,{h:"180px",w:"180px",borderRadius:"1000px",bg:"autoBlue.400",position:"relative",overflow:"hidden"},e.createElement(at,{imageUrl:c,zoom:t,onZoomChange:de,onCropComplete:ge}))),e.createElement(rt,{setFilePath:o,setFile:n,acceptedFileTypes:"image/*",setIsEditing:g}),x&&e.createElement(e.Fragment,null,e.createElement(m,{fontSize:"16px"},"Scale and Crop"),e.createElement(lt,{min:1,max:3,step:.1,value:t,onChange:a})),e.createElement(E,{w:"full",pt:"24px"},e.createElement(ae,{bg:"autoGrey.400",color:"black",_active:{bg:"autoGrey.600"},onClick:q},"Cancel"),e.createElement(ae,{isLoading:Ee,onClick:()=>{x?he():xe()}},x?"Crop":"Save"))))},ct=({})=>{const{isChangeProfilePictureOpen:t,screen:a}=b(n=>n.globalAppState),{isDesktop:r}=a,l=j(),s=()=>l(re());return e.createElement(e.Fragment,null,r?e.createElement(Pe,{isOpen:t,onClose:s,isCentered:!0,blockScrollOnMount:!0},e.createElement(le,null),e.createElement(Ie,{p:"32px 48px",w:"450px"},e.createElement(te,{top:"30px",right:"48px"}),e.createElement(pe,null),e.createElement(ne,{p:"0"}))):e.createElement(Ae,{isOpen:t,placement:"bottom",onClose:s,size:"full"},e.createElement(le,null),e.createElement(Oe,{maxH:"100%"},e.createElement(ne,null,e.createElement(w,{h:"full"},e.createElement(f,{w:"full"},e.createElement(pe,null)))))))},it=({})=>{const[t,a]=i.exports.useState(""),{path:r}=D(),l=j(),{avatar:s,fullName:n,phone:c}=b(o=>o.userInfoSlice);return i.exports.useEffect(()=>{s&&a(s)},[s]),e.createElement(I,{bg:"white",p:"0",w:["full",null,null,"200px"],maxH:"400px"},e.createElement(U,{p:"32px"},e.createElement(Ne,{username:n,image:t,secondaryText:`+995 ${c}`,size:"70px",showPhotoChange:!0})),e.createElement(ct,null),e.createElement(f,{pb:"24px",spacing:"0"},e.createElement(H,{to:`${r}/order-list`},"Order List"),e.createElement(H,{to:`${r}/favourites`},"Favourites"),e.createElement(H,{to:"/home",clickCallback:()=>l(ze())},"Log out")))},mt=({car:t})=>{const a=W();return e.createElement(I,{bg:"autoGrey.500",w:"full",p:"0",cursor:"pointer",onClick:()=>a.push(`/catalog/car/${t.id}`)},e.createElement(E,{w:"full",justify:"space-between",p:"16px",align:"stretch"},e.createElement(E,{spacing:"4",minW:"220px",p:"0"},e.createElement(F,{ratio:78/66,minW:"78px"},e.createElement(z,{src:t==null?void 0:t.imgUrls[0],borderRadius:"8px",fallbackSrc:"https://via.placeholder.com/150"})),e.createElement(f,{align:"flex-start"},e.createElement(d,null,"Name"),e.createElement(m,{fontSize:"16px",fontWeight:"500"},t.m?P(t.m):e.createElement(u,null)," ",t.mG?P(t.mG):e.createElement(u,{pl:"2",children:""})))),e.createElement(f,{align:"flex-start",w:"full",maxW:"80px",pt:"2"},e.createElement(d,null,"Year"),e.createElement(m,{fontSize:"16px",fontWeight:"500"},t.y||e.createElement(u,null))),e.createElement(f,{align:"flex-start",w:"full",pt:"2"},e.createElement(d,null,"Damage"),e.createElement(m,{fontSize:"16px",fontWeight:"500"},t.dmg?e.createElement(e.Fragment,null,P(t.dmg)):e.createElement(u,null))),e.createElement(f,{align:"flex-start",w:"full",pt:"2"},e.createElement(d,null,"Location"),e.createElement(m,{fontSize:"16px",fontWeight:"500"},t.lC||e.createElement(u,null))),e.createElement(f,{align:"flex-start",w:"full",pt:"2"},e.createElement(d,null,"Engine"),e.createElement(m,{fontSize:"16px",fontWeight:"500"},t.eng||e.createElement(u,null))),e.createElement(Ve,{carId:t.id,h:"46px",w:"45px"})))},ut=({})=>{const{favouriteCars:t}=b(r=>r.userInfoSlice),{favouriteCarsFetching:a}=b(r=>r.userInfoSlice);return e.createElement(I,{w:"full",p:"32px"},e.createElement(f,{w:"full",spacing:"4"},a?e.createElement(w,{w:"full",h:"300px"},e.createElement(N,null)):t.length?t.map(r=>e.createElement(mt,{key:r.id,car:r})):e.createElement(w,{w:"full",h:"300px"},e.createElement(p,null,"Your Favourites list is empty"))))},pt=({car:t})=>{const a=t.imgUrls,r=W();return e.createElement(I,{w:"full",p:"4",onClick:()=>r.push(`/catalog/car/${t.id}`)},e.createElement(f,{spacing:"4"},e.createElement(qe,{model:`${t.m} ${t.mG}`,id:t.id,year:Number(t.y)}),e.createElement(Je,{gridTemplateAreas:'"a a b" "a a c"',w:"full",maxH:"130px",gap:"2"},e.createElement(F,{overflow:"hidden",borderRadius:"8px",ratio:191/130,w:"full",gridArea:"a",maxH:"130px"},e.createElement(z,{src:a[0]?a[0]:void 0,fallbackSrc:B,borderRadius:"8px"})),e.createElement(F,{ratio:191/130,w:"full",gridArea:"b",maxH:"61px"},e.createElement(z,{src:a[1]?a[1]:void 0,fallbackSrc:B,borderRadius:"8px"})),e.createElement(F,{ratio:191/130,w:"full",gridArea:"c",maxH:"61px"},e.createElement(z,{src:a[2]?a[2]:void 0,fallbackSrc:B,borderRadius:"8px"}))),e.createElement(f,{divider:e.createElement(Fe,null),w:"full"},e.createElement(E,{w:"full",justify:"space-between"},e.createElement(d,null,"Damage"),e.createElement(p,null,t.dmg?Ke(t.dmg):e.createElement(u,null))),e.createElement(E,{w:"full",justify:"space-between"},e.createElement(d,null,"Mileage"),e.createElement(p,null,t.od?ce(t.od):e.createElement(u,null))),e.createElement(E,{w:"full",justify:"space-between"},e.createElement(d,null,"Location"),e.createElement(p,null,t.lC?P(t.lC):e.createElement(u,null))),e.createElement(E,{w:"full",justify:"space-between"},e.createElement(d,null,"Engine"),e.createElement(p,null,t.eng?P(t.eng.toString()):e.createElement(u,null))),e.createElement(E,{w:"full",justify:"space-between"},e.createElement(d,null,"Esimate Price"),e.createElement(p,null,t.price?e.createElement(e.Fragment,null,"$ ",ce(t.price)):e.createElement(u,null))),e.createElement(E,{w:"full",justify:"space-between"},e.createElement(d,null,"Total Price"),e.createElement(p,null,"$20 000")))))},ft=({})=>{const{favouriteCars:t}=b(a=>a.userInfoSlice);return e.createElement(e.Fragment,null,t.length?e.createElement(Ze,{pt:"48px"},t.map(a=>e.createElement(pt,{key:a.id,car:a}))):e.createElement(w,null,e.createElement(p,null,"Your favourites list is empty")))},Et=({})=>{const{isDesktop:t}=se(),a=j();return i.exports.useEffect(()=>{a(Le("")),a(Re(""))},[]),e.createElement(e.Fragment,null,t?e.createElement(ut,null):e.createElement(ft,null))},dt=({})=>e.createElement(Et,null),gt=({orderList:t})=>{const[a,r]=i.exports.useState([]),l=b(c=>c.orderedCars.fetching),s=_(),n=c=>{a.includes(c)?r(a.filter(o=>o!==c)):r(a.concat(c))};return e.createElement(I,{p:"32px",w:"full"},l?e.createElement(w,{w:"full",h:"full"},e.createElement(N,null)):t.length?e.createElement(Xe,null,e.createElement(et,null,e.createElement(me,{opacity:"0.5",fontSize:"14px",fontWeight:"light"},e.createElement(C,{p:[null,null,null,"2","4"],isTruncated:!0,fontWeight:"light"},e.createElement(m,{textTransform:"capitalize"},"Order Id")),e.createElement(C,{fontWeight:"light",px:"2"},e.createElement(m,{textTransform:"capitalize"},"Name")),e.createElement(C,{fontWeight:"light",px:"2"},e.createElement(m,{textTransform:"capitalize"},"Created")),e.createElement(C,{isTruncated:!0,fontWeight:"light"},e.createElement(m,{textTransform:"capitalize"},"Delivery Date")),e.createElement(C,{fontWeight:"light",p:[null,null,null,"2","4"]},e.createElement(m,{textTransform:"capitalize"},"Location")),e.createElement(C,{isTruncated:!0,p:"4",fontWeight:"light"},e.createElement(m,{textTransform:"capitalize"},"Total Price")),e.createElement(C,{fontWeight:"light"},e.createElement(m,{textTransform:"capitalize"},"Status")),e.createElement(C,{fontWeight:"light"}))),e.createElement(tt,null,t.map((c,o)=>e.createElement(me,{key:o,pt:"50px",_hover:{bg:"autoGrey.100"}},e.createElement(S,{w:"full",px:"4",title:c.id,py:[null,null,"8","8",""]},e.createElement(p,{w:"80px",isTruncated:!0,cursor:"pointer",onClick:()=>navigator.clipboard.writeText(c.id).then(()=>s({title:"Id copied to the clipboard",status:"success",position:"top"}))},c.id)),e.createElement(S,{title:c.carName,px:""},e.createElement(m,{noOfLines:a.includes(o)?10:1,fontSize:"16px",w:"100px"},c.carName)),e.createElement(S,{px:"2"},c.createdAt?ie(c.createdAt.toString()):e.createElement(u,null)),e.createElement(S,null,c.deliveryAt?ie(c.deliveryAt.toString()):e.createElement(u,null)," "),e.createElement(S,{p:[null,null,null,"2","4"]},c.location," "),e.createElement(S,{px:"4",title:`$ ${c.price}`},e.createElement(m,{fontSize:"inherit",maxW:"80px",isTruncated:!0},"$ ",c.price*1)),e.createElement(S,null,e.createElement(m,{whiteSpace:"nowrap"},c.status)," "),e.createElement(S,{p:"0"},e.createElement(ee,{variant:"link",minH:"50px",onClick:()=>n(o)},e.createElement(We,{transform:a.includes(o)?"rotate(180deg)":"none",transition:"all .2s"}))))))):e.createElement(w,{w:"full",h:"full"},e.createElement(p,null,"Your order list is empty")))},ht=({orderList:t})=>{const a=b(r=>r.orderedCars.fetching);return e.createElement(f,{w:"full",spacing:"24px",pt:"48px"},a?e.createElement(w,null,e.createElement(N,null)):t.length?t.map((r,l)=>e.createElement(Qe,{key:l,order:r})):e.createElement(p,null,"Your order list is empty"))},xt=({})=>{const[t,a]=i.exports.useState([]),{isDesktop:r}=se(),l=b(c=>c.userInfoSlice.id),s=_(),n=j();return i.exports.useEffect(()=>{l&&n(De(l)).unwrap().then(c=>a(c)).catch(c=>s({title:c,status:"error",position:"top"}))},[l]),e.createElement(e.Fragment,null,r?e.createElement(gt,{orderList:t}):e.createElement(ht,{orderList:t}))},Bt=()=>{const{path:t}=D();return e.createElement(Me,{pt:["16px","26px","32px","48px"]},e.createElement(_e,null),e.createElement(Ue,{direction:["column",null,null,"row"],spacing:"24px",w:"full"},e.createElement(it,null),e.createElement(we,null,e.createElement(M,{exact:!0,path:t,render:()=>e.createElement(ve,{to:`${t}/order-list`})}),e.createElement(M,{exact:!0,path:`${t}/order-list`,render:()=>e.createElement(xt,null)}),e.createElement(M,{exact:!0,path:`${t}/favourites`,render:()=>e.createElement(dt,null)}))))};export{Bt as UserProfilePage,Bt as default};
