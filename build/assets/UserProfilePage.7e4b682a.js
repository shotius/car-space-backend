var we=Object.defineProperty;var T=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var K=(t,l,a)=>l in t?we(t,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[l]=a,J=(t,l)=>{for(var a in l||(l={}))Z.call(l,a)&&K(t,a,l[a]);if(T)for(var a of T(l))q.call(l,a)&&K(t,a,l[a]);return t};var Q=(t,l)=>{var a={};for(var n in t)Z.call(t,n)&&l.indexOf(n)<0&&(a[n]=t[n]);if(t!=null&&T)for(var n of T(t))l.indexOf(n)<0&&q.call(t,n)&&(a[n]=t[n]);return a};import{r as i,u as U,f as z,R as e,S as be,b as M,d as Ce}from"./vendor.506dd9e8.js";import{T as ye,H as u,M as X,a as c,V as p,C as _,b as ee,B as te,c as ve,d as le,e as Se,f as ae,D as De,g as Pe,h as m,i as C,S as ne,u as re,j as je,k as ke,I as Te,P as Ie,l as Ae,m as Le}from"./PublicLayout.b6f7a4ec.js";import{U as Fe}from"./UserAvatar.99758acf.js";import{C as y,S as Ne}from"./Card.a323d183.js";import{B}from"./button.e59928d7.js";import{A as Oe}from"./ArrowPrevIcon.297e934b.js";import{C as Re}from"./react-easy-crop.03971dcd.js";import{f as v,u as Ue,o as ze,S as Me,c as S,a as _e,b as D,B as I,d as A,t as se,s as Be,e as P,l as $e,g as We,h as He}from"./index.70576edf.js";import{B as oe,C as Ge}from"./CatalogListWrap.4c00aa3a.js";import{S as Ve,D as Ye}from"./DamnCard.1b725f46.js";import{u as Ze}from"./use-toast.b959d564.js";import{B as qe,C as Ke,c as Je,t as $,D as ce,a as j}from"./DropdownIcon.897eb337.js";import{N as f}from"./NotSpecified.46896583.js";import{A as L}from"./aspect-ratio.db2a3de1.js";import{I as F}from"./image.54319b9c.js";import"./prop-types.d6ec705b.js";import"./formik.b6109983.js";import"./react-redux.84e4588f.js";import"./axios.7b768d2b.js";import"./focus-visible.064b564c.js";function h(){return h=Object.assign||function(t){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},h.apply(this,arguments)}function W(t,l){if(t==null)return{};var a={},n=Object.keys(t),r,s;for(s=0;s<n.length;s++)r=n[s],!(l.indexOf(r)>=0)&&(a[r]=t[r]);return a}var Qe=v((t,l)=>{var a=Ue("Table",t),n=ze(t),{className:r}=n,s=W(n,["className"]);return i.exports.createElement(Me,{value:a},i.exports.createElement(S.table,h({role:"table",ref:l,__css:a.table,className:_e("chakra-table",r)},s)))}),Xe=v((t,l)=>{var a=D();return i.exports.createElement(S.thead,h({},t,{ref:l,__css:a.thead}))}),et=v((t,l)=>{var a=D();return i.exports.createElement(S.tbody,h({},t,{ref:l,__css:a.tbody}))}),x=v((t,l)=>{var{isNumeric:a}=t,n=W(t,["isNumeric"]),r=D();return i.exports.createElement(S.th,h({},n,{ref:l,__css:r.th,"data-is-numeric":a}))}),ie=v((t,l)=>{var a=D();return i.exports.createElement(S.tr,h({role:"row"},t,{ref:l,__css:a.tr}))}),w=v((t,l)=>{var{isNumeric:a}=t,n=W(t,["isNumeric"]),r=D();return i.exports.createElement(S.td,h({role:"gridcell"},n,{ref:l,__css:r.td,"data-is-numeric":a}))});const H=b=>{var o=b,{activeBg:t="autoOrange.100",activeColor:l="#FB5607",to:a,clickCallback:n,children:r}=o,s=Q(o,["activeBg","activeColor","to","clickCallback","children"]);const E=U(),d=z({path:a,exact:!0});return e.createElement(B,J({w:"full",borderRadius:"none",display:"flex",justifyContent:["start",null,null,"center"],p:"32px 32px",bg:d?t:"#fff",color:d?l:"#000",_hover:{bg:d?"autoOrange.200":"autoGrey.200"},_active:{bg:"autoOrange.300"},onClick:()=>{n?n():E.push(a)}},s),r)},tt=({zoom:t,imageUrl:l,onCropComplete:a,onZoomChange:n})=>{const[r,s]=i.exports.useState({x:0,y:0});return e.createElement(Re,{image:l,crop:r,zoom:t,cropShape:"round",aspect:1/1,onCropChange:s,onCropComplete:a,onZoomChange:n})},lt=({acceptedFileTypes:t,setFile:l,setFilePath:a,setIsEditing:n})=>{const r=i.exports.useRef(null),s=o=>{o.currentTarget.files&&(a(URL.createObjectURL(o.currentTarget.files[0])),l(o.currentTarget.files[0]),n(!0))},b=()=>{var o;console.log("clicked"),(o=r.current)==null||o.click()};return e.createElement(I,{onClick:b,h:"120%",cursor:"pointer"},e.createElement(ye,{bg:"tranparent",h:"full",w:"full"},"upload a file"),e.createElement("input",{type:"file",accept:t,ref:r,onChange:o=>s(o),style:{display:"none"}}))},ue=t=>t.toString().split(".")[1].length,at=(t,l)=>{const a=ue(l)*10;return(t*a-l*a)/a},nt=(t,l)=>{const a=ue(l)*10;return(t*a+l*a)/a},rt=({onChange:t,value:l,min:a,max:n,step:r})=>e.createElement(u,{w:"full",justify:"center"},e.createElement(oe,{fontSize:"30px",_active:{bg:"autoGrey.200"},onClick:()=>{l>a&&t(at(l,.1))}},"-"),e.createElement(Ve,{value:l,min:a,max:n,step:r,onChange:s=>t(s),w:"50%"}),e.createElement(oe,{fontSize:"20px",_active:{bg:"autoGrey.200"},onClick:()=>{l<n&&t(nt(l,.1))}},"+")),st=t=>new Promise((l,a)=>{const n=new Image;n.addEventListener("load",()=>l(n)),n.addEventListener("error",r=>a(r)),n.setAttribute("crossOrigin","anonymous"),n.src=t});function ot(t){return t*Math.PI/180}async function ct(t,l,a=0){const n=await st(t),r=document.createElement("canvas"),s=r.getContext("2d"),b=Math.max(n.width,n.height),o=2*(b/2*Math.sqrt(2));r.width=o,r.height=o,s==null||s.translate(o/2,o/2),s==null||s.rotate(ot(a)),s==null||s.translate(-o/2,-o/2),s==null||s.drawImage(n,o/2-n.width*.5,o/2-n.height*.5);const E=s==null?void 0:s.getImageData(0,0,o,o);return r.width=l.width,r.height=l.height,E&&(s==null||s.putImageData(E,Math.round(0-o/2+n.width*.5-l.x),Math.round(0-o/2+n.height*.5-l.y))),new Promise(d=>{r.toBlob(k=>{d(k)},"image/jpeg")})}const me=({toast:t,message:l})=>{t({title:l,status:"error",duration:2e3,isClosable:!0,position:"top"})},pe=({})=>{const[t,l]=i.exports.useState(1.3),[a,n]=i.exports.useState(null),[r,s]=i.exports.useState(null),[b,o]=i.exports.useState(""),[E,d]=i.exports.useState(!1),[k,Ee]=i.exports.useState(null),[de,O]=i.exports.useState(!1),G=Ze(),V=A(),Y=()=>{E?(d(!1),o("")):V(se())},fe=g=>{l(g)},ge=i.exports.useCallback((g,R)=>{n(R)},[]),he=async()=>{const g=await ct(b,a);l(1),o(URL.createObjectURL(g)),d(!1),Ee(g)},xe=async()=>{const g=new FormData;k?(g.append("profile-avatar",k,"coppedImage.jpg"),O(!0),V(Be(g)).unwrap().then(()=>{O(!1),Y()}).catch(R=>{console.log("error: ",R),O(!1),me({toast:G,message:"Unable to save photo. Please, try later"})})):me({toast:G,message:"Please Choose the picture."})};return e.createElement(e.Fragment,null,e.createElement(u,{position:"absolute",left:"10px",top:"20px",spacing:"2"},e.createElement(X,{position:"relative",top:"0",left:"0",as:Oe,boxSize:6}),e.createElement(c,{fontSize:"20px"},"Profile Picture")),e.createElement(p,{w:"full",pt:"32px",spacing:"2"},e.createElement(_,{p:"8"},e.createElement(I,{h:"180px",w:"180px",borderRadius:"1000px",bg:"autoBlue.400",position:"relative",overflow:"hidden"},e.createElement(tt,{imageUrl:b,zoom:t,onZoomChange:fe,onCropComplete:ge}))),E?e.createElement(e.Fragment,null,e.createElement(ee,{fontSize:"16px"},"Scale and Crop"),e.createElement(rt,{min:1,max:3,step:.1,value:t,onChange:l})):e.createElement(lt,{setFilePath:o,setFile:s,acceptedFileTypes:"image/*",setIsEditing:d}),e.createElement(u,{w:"full",pt:"24px"},e.createElement(te,{bg:"autoGrey.400",color:"black",_active:{bg:"autoGrey.600"},onClick:Y},"Cancel"),e.createElement(te,{isLoading:de,onClick:()=>{E?he():xe()}},E?"Crop":"Save"))))},it=({})=>{const{isChangeProfilePictureOpen:t,screen:l}=P(s=>s.globalAppState),{isDesktop:a}=l,n=A(),r=()=>n(se());return e.createElement(e.Fragment,null,a?e.createElement(ve,{isOpen:t,onClose:r,isCentered:!0,blockScrollOnMount:!0},e.createElement(le,null),e.createElement(Se,{p:"32px 48px",w:"450px"},e.createElement(X,{top:"30px",right:"48px"}),e.createElement(pe,null),e.createElement(ae,{p:"0"}))):e.createElement(De,{isOpen:t,placement:"bottom",onClose:r,size:"full"},e.createElement(le,null),e.createElement(Pe,{maxH:"100%"},e.createElement(ae,null,e.createElement(_,{h:"full"},e.createElement(p,{w:"full"},e.createElement(pe,null)))))))},ut=({})=>{const{path:t}=z(),l=A(),{avatar:a}=P(n=>n.userInfoSlice);return e.createElement(y,{bg:"white",p:"0",w:["full",null,null,"200px"],maxH:"400px"},e.createElement(I,{p:"32px"},e.createElement(Fe,{image:a,mainText:"Full Name",secondaryText:"+995 123123 123",size:"70px"})),e.createElement(it,null),e.createElement(p,{pb:"24px",spacing:"0"},e.createElement(H,{to:`${t}/order-list`},"Order List"),e.createElement(H,{to:`${t}/favourites`},"Favourites"),e.createElement(H,{to:"/home",clickCallback:()=>l($e())},"Log out")))},mt=({car:t})=>{const l=U();return e.createElement(y,{bg:"autoGrey.500",w:"full",p:"0",cursor:"pointer",onClick:()=>l.push(`/catalog/car/${t==null?void 0:t.lN}`)},e.createElement(u,{w:"full",justify:"space-between",p:"16px"},e.createElement(u,{spacing:"4",minW:"220px"},e.createElement(L,{ratio:78/66,minW:"78px"},e.createElement(F,{src:`https://${t==null?void 0:t.imgT}`,borderRadius:"8px"})),e.createElement(p,{align:"flex-start"},e.createElement(m,null,"Name"),e.createElement(c,{fontSize:"16px"},C(t.m)," ",C(t.mG)))),e.createElement(p,{align:"flex-start",w:"full",maxW:"80px"},e.createElement(m,null,"Year"),e.createElement(c,{fontSize:"16px"},t.y?e.createElement(e.Fragment,null,C(t.y)):e.createElement(f,null))),e.createElement(p,{align:"flex-start",w:"full"},e.createElement(m,null,"Damage"),e.createElement(c,{fontSize:"16px"},t.dmg?e.createElement(e.Fragment,null,C(t.dmg)):e.createElement(f,null))),e.createElement(p,{align:"flex-start",w:"full"},e.createElement(m,null,"Location"),e.createElement(c,{fontSize:"16px"},t.lC?e.createElement(e.Fragment,null,C(t.lC)):e.createElement(f,null))),e.createElement(p,{align:"flex-start",w:"full"},e.createElement(m,null,"Engine"),e.createElement(c,{fontSize:"16px"},t.eng||e.createElement(f,null))),e.createElement(qe,{lotNumber:t.lN,h:"46px",w:"45px"})))},pt=({})=>{const{favouriteCars:t}=P(a=>a.userInfoSlice),{favouriteCarsFetching:l}=P(a=>a.userInfoSlice);return e.createElement(y,{w:"full",p:"32px"},e.createElement(p,{w:"full",spacing:"4"},l?e.createElement(c,null,"...loading"):t.map(a=>e.createElement(mt,{key:a.lN,car:a}))))},Et=({car:t})=>{const l=t.imgsM,a=U();return e.createElement(y,{w:"full",p:"4",onClick:()=>a.push(`/catalog/car/${t==null?void 0:t.lN}`)},e.createElement(p,{spacing:"4"},e.createElement(Ke,{car:Ye,lotNumber:"39029881"}),e.createElement(Ne,{gridTemplateAreas:'"a a b" "a a c"',w:"full",maxH:"130px",gap:"2"},e.createElement(L,{overflow:"hidden",borderRadius:"8px",ratio:191/130,w:"full",gridArea:"a",maxH:"130px"},e.createElement(F,{src:l&&l.length?l[0]:`https://${t==null?void 0:t.imgT}`,filter:"auto",blur:l&&l.length?"none":"10px",saturation:.9,borderRadius:"8px"})),e.createElement(L,{ratio:191/130,w:"full",gridArea:"b",maxH:"61px"},e.createElement(F,{src:l&&l.length?l[1]:`https://${t==null?void 0:t.imgT}`,borderRadius:"8px"})),e.createElement(L,{ratio:191/130,w:"full",gridArea:"c",maxH:"61px"},e.createElement(F,{src:l&&l.length?l[2]:`https://${t==null?void 0:t.imgT}`,borderRadius:"8px"}))),e.createElement(p,{divider:e.createElement(ne,null),w:"full"},e.createElement(u,{w:"full",justify:"space-between"},e.createElement(m,null,"Damage"),e.createElement(c,null,t.dmg?Je(t.dmg):e.createElement(f,null))),e.createElement(u,{w:"full",justify:"space-between"},e.createElement(m,null,"Mileage"),e.createElement(c,null,t.od?$(parseInt(t.od)):e.createElement(f,null))),e.createElement(u,{w:"full",justify:"space-between"},e.createElement(m,null,"Location"),e.createElement(c,null,t.lC?C(t.lC):e.createElement(f,null))),e.createElement(u,{w:"full",justify:"space-between"},e.createElement(m,null,"Engine"),e.createElement(c,null,t.eng?C(t.eng):e.createElement(f,null))),e.createElement(u,{w:"full",justify:"space-between"},e.createElement(m,null,"Esimate Price"),e.createElement(c,null,t.eRV?e.createElement(e.Fragment,null,"$ ",$(parseInt(t.eRV))):e.createElement(f,null))),e.createElement(u,{w:"full",justify:"space-between"},e.createElement(m,null,"Total Price"),e.createElement(c,null,"$20 000")))))},dt=({})=>{const{favouriteCars:t}=P(l=>l.userInfoSlice);return e.createElement(Ge,{pt:"48px"},t.map(l=>e.createElement(Et,{key:l.lN,car:l})))},ft=({})=>{const{isDesktop:t}=re(),l=A();return i.exports.useEffect(()=>{l(We()),l(He())},[]),e.createElement(e.Fragment,null,t?e.createElement(pt,null):e.createElement(dt,null))},gt=({})=>e.createElement(ft,null),N=t=>{const l=t.getDate(),a=t.getMonth()+1,n=t.getFullYear();return`${l<=9?"0"+l:l}.${a<=9?"0"+a:a}.${n}`},ht=({orderList:t})=>{const[l,a]=i.exports.useState([]),n=r=>{l.includes(r)?a(l.filter(s=>s!==r)):a(l.concat(r))};return e.createElement(y,{p:"32px",w:"full"},t.length?e.createElement(Qe,null,e.createElement(Xe,null,e.createElement(ie,{opacity:"0.5",fontSize:"14px",fontWeight:"light"},e.createElement(x,{p:[null,null,null,"2","4"],isTruncated:!0,fontWeight:"light"},"Order Id"),e.createElement(x,{fontWeight:"light"},"Name"),e.createElement(x,{fontWeight:"light"},"Created"),e.createElement(x,{isTruncated:!0,fontWeight:"light"},"Delivery Date"),e.createElement(x,{fontWeight:"light",p:[null,null,null,"2","4"]},"Location"),e.createElement(x,{isTruncated:!0,p:"4",fontWeight:"light"},"Total Price"),e.createElement(x,{fontWeight:"light"},"Status"),e.createElement(x,{fontWeight:"light"}))),e.createElement(et,null,t.map((r,s)=>e.createElement(ie,{key:s,pt:"50px"},e.createElement(w,{w:"full",p:[null,null,null,"2","8"],isTruncated:!0},e.createElement(c,null,r.orderId)),e.createElement(w,null,e.createElement(ee,{noOfLines:l.includes(s)?5:1,fontSize:"16px"},r.name)),e.createElement(w,null,N(r.createdDate)," "),e.createElement(w,null,N(r.deliveryDate)," "),e.createElement(w,{p:[null,null,null,"2","4"]},r.location," "),e.createElement(w,null," $ ",r.totalPrice),e.createElement(w,null,r.status," "),e.createElement(w,{p:"0"},e.createElement(B,{variant:"link",onClick:()=>n(s),minH:"50px"},e.createElement(ce,{transform:l.includes(s)?"rotate(180deg)":"none",transition:"all .2s"}))))))):e.createElement(_,null,e.createElement(c,null,"Order list is empty")))},xt=({order:t})=>{const{createdDate:l,deliveryDate:a}=t,{isOpen:n,onToggle:r}=je();return e.createElement(y,{w:"full",pb:"0"},e.createElement(p,{w:"full",p:"2"},e.createElement(u,{w:"full",justify:"space-between"},e.createElement(m,null,"Order Id"),e.createElement(c,null,t.orderId)),e.createElement(j,{w:"full"}),e.createElement(u,{w:"full",justify:"space-between"},e.createElement(m,null,"Name"),e.createElement(c,null,t.name)),e.createElement(j,{w:"full"}),e.createElement(u,{w:"full",justify:"space-between"},e.createElement(m,null,"Created"),e.createElement(c,null,N(l))),e.createElement(j,{w:"full"}),e.createElement(u,{w:"full",justify:"space-between"},e.createElement(m,null,"Dealivery"),e.createElement(c,null,N(a))),e.createElement(j,{w:"full"}),e.createElement(I,{w:"full"},e.createElement(ke,{in:n},e.createElement(p,{divider:e.createElement(ne,null)},e.createElement(u,{w:"full",justify:"space-between"},e.createElement(m,null,"Location"),e.createElement(c,null,t.location)),e.createElement(u,{w:"full",justify:"space-between"},e.createElement(m,null,"Total Price"),e.createElement(c,null,$(t.totalPrice)," USD")),e.createElement(u,{w:"full",justify:"space-between"},e.createElement(m,null,"Status"),e.createElement(c,null,t.status))))),e.createElement(j,{w:"full",display:n?"block":"none"}),e.createElement(u,null,e.createElement(B,{variant:"ghost",bg:"transparent",onClick:r},n?"See less":"See more",e.createElement(Te,{as:ce,transform:n?"rotate(-180deg)":"rotate(-90deg)",mb:"2px",ml:"2",transition:"all .2s"})))))},wt=({orderList:t})=>e.createElement(p,{w:"full",spacing:"24px",pt:"48px"},t.map((l,a)=>e.createElement(xt,{key:a,order:l}))),bt=({})=>{const t=[{orderId:123123,name:"Chevrolet Cruze",createdDate:new Date,deliveryDate:new Date(2021,12,12),location:"USA",totalPrice:2e4,status:"Completed"},{orderId:123123,name:"Chevrolet Cruze Chevrolet",createdDate:new Date,deliveryDate:new Date(2021,12,12),location:"USA",totalPrice:2e4,status:"Completed"},{orderId:123123,name:"Chevrolet Cruze",createdDate:new Date,deliveryDate:new Date(2021,12,12),location:"USA",totalPrice:2e4,status:"Completed"},{orderId:123123,name:"Chevrolet Cruze",createdDate:new Date,deliveryDate:new Date(2021,12,12),location:"USA",totalPrice:2e4,status:"Completed"},{orderId:123123,name:"Chevrolet Cruze",createdDate:new Date,deliveryDate:new Date(2021,12,12),location:"USA",totalPrice:2e4,status:"Completed"}],{isDesktop:l}=re();return e.createElement(e.Fragment,null,l?e.createElement(ht,{orderList:t}):e.createElement(wt,{orderList:t}))},$t=()=>{const{path:t}=z();return e.createElement(Ie,null,e.createElement(Ae,{pt:["16px","26px","32px","48px"]},e.createElement(Le,{direction:["column",null,null,"row"],spacing:"24px",w:"full"},e.createElement(ut,null),e.createElement(be,null,e.createElement(M,{exact:!0,path:t,render:()=>e.createElement(Ce,{to:`${t}/order-list`})}),e.createElement(M,{exact:!0,path:`${t}/order-list`,render:()=>e.createElement(bt,null)}),e.createElement(M,{exact:!0,path:`${t}/favourites`,render:()=>e.createElement(gt,null)})))))};export{$t as UserProfilePage,$t as default};