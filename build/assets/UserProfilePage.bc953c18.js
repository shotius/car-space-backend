var we=Object.defineProperty;var T=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var J=(t,a,l)=>a in t?we(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,Q=(t,a)=>{for(var l in a||(a={}))Z.call(a,l)&&J(t,l,a[l]);if(T)for(var l of T(a))q.call(a,l)&&J(t,l,a[l]);return t};var X=(t,a)=>{var l={};for(var n in t)Z.call(t,n)&&a.indexOf(n)<0&&(l[n]=t[n]);if(t!=null&&T)for(var n of T(t))a.indexOf(n)<0&&q.call(t,n)&&(l[n]=t[n]);return l};import{r as c,u as M,k as W,R as e,S as be,e as N,g as Ce}from"./vendor.64e57edd.js";import{s as v,E as ve,G as ye,K as Se,v as y,t as De,L as D,R as _,b as A,aA as je,a as i,Y as Pe,h as U,aB as ee,H as u,V as p,C as $,T as C,B as te,aC as ae,aD as ke,u as j,aE as Ie,aF as le,aG as Te,aH as ne,aI as Ae,aJ as Ue,aK as Le,c as P,S as re,i as se,aL as Oe,j as Fe,U as oe,aM as Re,N as k,aN as ze,I as Me,f as We,aO as Ne}from"./index.1cd6d2cd.js";import{U as _e}from"./UserAvatar.f772ef0c.js";import{C as S}from"./Card.965a6c4b.js";import{A as $e}from"./ArrowPrevIcon.f9676b3e.js";import{C as Be}from"./react-easy-crop.bb978622.js";import{B as ce,C as He}from"./CatalogListWrap.24543768.js";import{S as Ge}from"./SliderBlue.d09cf533.js";import{T as m,B as Ye,C as Ke,t as B}from"./CarCardHeading.07e84c58.js";import{N as d}from"./NotSpecified.df9796af.js";import{I as L}from"./image.b7d144a2.js";import{A as O}from"./aspect-ratio.4fc3c43d.js";import{c as Ve}from"./capitalizeEach.6ec19d92.js";import{S as Ze}from"./simple-grid.594067ef.js";import"./prop-types.d6ec705b.js";import"./react-redux.d0311eef.js";import"./axios.7b768d2b.js";import"./formik.178388d5.js";import"./yup.5af68d69.js";import"./focus-visible.85b77dad.js";function x(){return x=Object.assign||function(t){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n])}return t},x.apply(this,arguments)}function H(t,a){if(t==null)return{};var l={},n=Object.keys(t),r,s;for(s=0;s<n.length;s++)r=n[s],!(a.indexOf(r)>=0)&&(l[r]=t[r]);return l}var qe=v((t,a)=>{var l=ve("Table",t),n=ye(t),{className:r}=n,s=H(n,["className"]);return c.exports.createElement(Se,{value:l},c.exports.createElement(y.table,x({role:"table",ref:a,__css:l.table,className:De("chakra-table",r)},s)))}),Je=v((t,a)=>{var l=D();return c.exports.createElement(y.thead,x({},t,{ref:a,__css:l.thead}))}),Qe=v((t,a)=>{var l=D();return c.exports.createElement(y.tbody,x({},t,{ref:a,__css:l.tbody}))}),w=v((t,a)=>{var{isNumeric:l}=t,n=H(t,["isNumeric"]),r=D();return c.exports.createElement(y.th,x({},n,{ref:a,__css:r.th,"data-is-numeric":l}))}),ie=v((t,a)=>{var l=D();return c.exports.createElement(y.tr,x({role:"row"},t,{ref:a,__css:l.tr}))}),b=v((t,a)=>{var{isNumeric:l}=t,n=H(t,["isNumeric"]),r=D();return c.exports.createElement(y.td,x({role:"gridcell"},n,{ref:a,__css:r.td,"data-is-numeric":l}))});const G=E=>{var o=E,{activeBg:t="autoOrange.100",activeColor:a="#FB5607",to:l,clickCallback:n,children:r}=o,s=X(o,["activeBg","activeColor","to","clickCallback","children"]);const f=M(),g=W({path:l,exact:!0});return e.createElement(_,Q({w:"full",borderRadius:"none",display:"flex",justifyContent:["start",null,null,"center"],p:"32px 32px",fontWeight:"500",bg:g?t:"#fff",color:g?a:"#000",_hover:{bg:g?"autoOrange.200":"autoGrey.200"},_active:{bg:"autoOrange.300"},onClick:()=>{n?n():f.push(l)}},s),r)},Xe=({zoom:t,imageUrl:a,onCropComplete:l,onZoomChange:n})=>{const[r,s]=c.exports.useState({x:0,y:0});return e.createElement(Be,{image:a,crop:r,zoom:t,cropShape:"round",aspect:1/1,onCropChange:s,onCropComplete:l,onZoomChange:n})},et=({acceptedFileTypes:t,setFile:a,setFilePath:l,setIsEditing:n})=>{const r=c.exports.useRef(null),s=o=>{o.currentTarget.files&&(l(URL.createObjectURL(o.currentTarget.files[0])),a(o.currentTarget.files[0]),n(!0))},E=()=>{var o;console.log("clicked"),(o=r.current)==null||o.click()};return e.createElement(A,{onClick:E,h:"120%",cursor:"pointer"},e.createElement(je,{bg:"tranparent",h:"full",w:"full"},"upload a file"),e.createElement("input",{type:"file",accept:t,ref:r,onChange:o=>s(o),style:{display:"none"}}))},ue=t=>t.toString().split(".")[1].length,tt=(t,a)=>{const l=ue(a)*10;return(t*l-a*l)/l},at=(t,a)=>{const l=ue(a)*10;return(t*l+a*l)/l},lt=({onChange:t,value:a,min:l,max:n,step:r})=>e.createElement(i,{w:"full",justify:"center"},e.createElement(ce,{fontSize:"30px",_active:{bg:"autoGrey.200"},onClick:()=>{a>l&&t(tt(a,.1))}},"-"),e.createElement(Ge,{value:a,min:l,max:n,step:r,onChange:s=>t(s),w:"50%"}),e.createElement(ce,{fontSize:"20px",_active:{bg:"autoGrey.200"},onClick:()=>{a<n&&t(at(a,.1))}},"+")),nt=t=>new Promise((a,l)=>{const n=new Image;n.addEventListener("load",()=>a(n)),n.addEventListener("error",r=>l(r)),n.setAttribute("crossOrigin","anonymous"),n.src=t});function rt(t){return t*Math.PI/180}async function st(t,a,l=0){const n=await nt(t),r=document.createElement("canvas"),s=r.getContext("2d"),E=Math.max(n.width,n.height),o=2*(E/2*Math.sqrt(2));r.width=o,r.height=o,s==null||s.translate(o/2,o/2),s==null||s.rotate(rt(l)),s==null||s.translate(-o/2,-o/2),s==null||s.drawImage(n,o/2-n.width*.5,o/2-n.height*.5);const f=s==null?void 0:s.getImageData(0,0,o,o);return r.width=a.width,r.height=a.height,f&&(s==null||s.putImageData(f,Math.round(0-o/2+n.width*.5-a.x),Math.round(0-o/2+n.height*.5-a.y))),new Promise(g=>{r.toBlob(I=>{g(I)},"image/jpeg")})}const me=({toast:t,message:a})=>{t({title:a,status:"error",duration:2e3,isClosable:!0,position:"top"})},pe=({})=>{const[t,a]=c.exports.useState(1.3),[l,n]=c.exports.useState(null),[r,s]=c.exports.useState(null),[E,o]=c.exports.useState(""),[f,g]=c.exports.useState(!1),[I,de]=c.exports.useState(null),[Ee,R]=c.exports.useState(!1),Y=Pe(),K=U(),V=()=>{f?(g(!1),o("")):K(ae())},fe=h=>{a(h)},ge=c.exports.useCallback((h,z)=>{n(z)},[]),he=async()=>{const h=await st(E,l);a(1),o(URL.createObjectURL(h)),g(!1),de(h)},xe=async()=>{const h=new FormData;I?(h.append("profile-avatar",I,"coppedImage.jpg"),R(!0),K(ke(h)).unwrap().then(()=>{R(!1),V()}).catch(z=>{console.log("error: ",z),R(!1),me({toast:Y,message:"Unable to save photo. Please, try later"})})):me({toast:Y,message:"Please Choose the picture."})};return e.createElement(e.Fragment,null,e.createElement(i,{position:"absolute",left:"10px",top:"20px",spacing:"2"},e.createElement(ee,{position:"relative",top:"0",left:"0",as:$e,boxSize:6}),e.createElement(u,{fontSize:"20px"},"Profile Picture")),e.createElement(p,{w:"full",pt:"32px",spacing:"2"},e.createElement($,{p:"8"},e.createElement(A,{h:"180px",w:"180px",borderRadius:"1000px",bg:"autoBlue.400",position:"relative",overflow:"hidden"},e.createElement(Xe,{imageUrl:E,zoom:t,onZoomChange:fe,onCropComplete:ge}))),f?e.createElement(e.Fragment,null,e.createElement(C,{fontSize:"16px"},"Scale and Crop"),e.createElement(lt,{min:1,max:3,step:.1,value:t,onChange:a})):e.createElement(et,{setFilePath:o,setFile:s,acceptedFileTypes:"image/*",setIsEditing:g}),e.createElement(i,{w:"full",pt:"24px"},e.createElement(te,{bg:"autoGrey.400",color:"black",_active:{bg:"autoGrey.600"},onClick:V},"Cancel"),e.createElement(te,{isLoading:Ee,onClick:()=>{f?he():xe()}},f?"Crop":"Save"))))},ot=({})=>{const{isChangeProfilePictureOpen:t,screen:a}=j(s=>s.globalAppState),{isDesktop:l}=a,n=U(),r=()=>n(ae());return e.createElement(e.Fragment,null,l?e.createElement(Ie,{isOpen:t,onClose:r,isCentered:!0,blockScrollOnMount:!0},e.createElement(le,null),e.createElement(Te,{p:"32px 48px",w:"450px"},e.createElement(ee,{top:"30px",right:"48px"}),e.createElement(pe,null),e.createElement(ne,{p:"0"}))):e.createElement(Ae,{isOpen:t,placement:"bottom",onClose:r,size:"full"},e.createElement(le,null),e.createElement(Ue,{maxH:"100%"},e.createElement(ne,null,e.createElement($,{h:"full"},e.createElement(p,{w:"full"},e.createElement(pe,null)))))))},ct=({})=>{const[t,a]=c.exports.useState(""),{path:l}=W(),n=U(),{avatar:r,fullName:s,phone:E}=j(o=>o.userInfoSlice);return c.exports.useEffect(()=>{r&&a(r)},[r]),e.createElement(S,{bg:"white",p:"0",w:["full",null,null,"200px"],maxH:"400px"},e.createElement(A,{p:"32px"},e.createElement(_e,{username:s,image:t,secondaryText:`+995 ${E}`,size:"70px",showPhotoChange:!0})),e.createElement(ot,null),e.createElement(p,{pb:"24px",spacing:"0"},e.createElement(G,{to:`${l}/order-list`},"Order List"),e.createElement(G,{to:`${l}/favourites`},"Favourites"),e.createElement(G,{to:"/home",clickCallback:()=>n(Le())},"Log out")))},it=({car:t})=>{const a=M();return e.createElement(S,{bg:"autoGrey.500",w:"full",p:"0",cursor:"pointer",onClick:()=>a.push(`/catalog/car/${t.id}`)},e.createElement(i,{w:"full",justify:"space-between",p:"16px",align:"stretch"},e.createElement(i,{spacing:"4",minW:"220px",p:"0"},e.createElement(O,{ratio:78/66,minW:"78px"},e.createElement(L,{src:t==null?void 0:t.imgUrls[0],borderRadius:"8px",fallbackSrc:"https://via.placeholder.com/150"})),e.createElement(p,{align:"flex-start"},e.createElement(m,null,"Name"),e.createElement(C,{fontSize:"16px",fontWeight:"500"},t.m?P(t.m):e.createElement(d,null)," ",t.mG?P(t.mG):e.createElement(d,{pl:"2",children:""})))),e.createElement(p,{align:"flex-start",w:"full",maxW:"80px",pt:"2"},e.createElement(m,null,"Year"),e.createElement(C,{fontSize:"16px",fontWeight:"500"},t.y||e.createElement(d,null))),e.createElement(p,{align:"flex-start",w:"full",pt:"2"},e.createElement(m,null,"Damage"),e.createElement(C,{fontSize:"16px",fontWeight:"500"},t.dmg?e.createElement(e.Fragment,null,P(t.dmg)):e.createElement(d,null))),e.createElement(p,{align:"flex-start",w:"full",pt:"2"},e.createElement(m,null,"Location"),e.createElement(C,{fontSize:"16px",fontWeight:"500"},t.lC||e.createElement(d,null))),e.createElement(p,{align:"flex-start",w:"full",pt:"2"},e.createElement(m,null,"Engine"),e.createElement(C,{fontSize:"16px",fontWeight:"500"},t.eng||e.createElement(d,null))),e.createElement(Ye,{carId:t.id,h:"46px",w:"45px"})))},ut=({})=>{const{favouriteCars:t}=j(l=>l.userInfoSlice),{favouriteCarsFetching:a}=j(l=>l.userInfoSlice);return e.createElement(S,{w:"full",p:"32px"},e.createElement(p,{w:"full",spacing:"4"},a?e.createElement(u,null,"...loading"):t.length?t.map(l=>e.createElement(it,{key:l.id,car:l})):e.createElement(u,null,"Your Favourite cars will appear here")))},mt=({car:t})=>{const a=t.imgUrls,l=M();return e.createElement(S,{w:"full",p:"4",onClick:()=>l.push(`/catalog/car/${t.id}`)},e.createElement(p,{spacing:"4"},e.createElement(Ke,{model:`${t.m} ${t.mG}`,id:t.id,year:Number(t.y)}),e.createElement(Ze,{gridTemplateAreas:'"a a b" "a a c"',w:"full",maxH:"130px",gap:"2"},e.createElement(O,{overflow:"hidden",borderRadius:"8px",ratio:191/130,w:"full",gridArea:"a",maxH:"130px"},e.createElement(L,{src:a&&a.length?a[0]:`https://${t==null?void 0:t.imgT}`,filter:"auto",blur:a&&a.length?"none":"10px",saturation:.9,borderRadius:"8px"})),e.createElement(O,{ratio:191/130,w:"full",gridArea:"b",maxH:"61px"},e.createElement(L,{src:a&&a.length?a[1]:`https://${t==null?void 0:t.imgT}`,borderRadius:"8px"})),e.createElement(O,{ratio:191/130,w:"full",gridArea:"c",maxH:"61px"},e.createElement(L,{src:a&&a.length?a[2]:`https://${t==null?void 0:t.imgT}`,borderRadius:"8px"}))),e.createElement(p,{divider:e.createElement(re,null),w:"full"},e.createElement(i,{w:"full",justify:"space-between"},e.createElement(m,null,"Damage"),e.createElement(u,null,t.dmg?Ve(t.dmg):e.createElement(d,null))),e.createElement(i,{w:"full",justify:"space-between"},e.createElement(m,null,"Mileage"),e.createElement(u,null,t.od?B(t.od):e.createElement(d,null))),e.createElement(i,{w:"full",justify:"space-between"},e.createElement(m,null,"Location"),e.createElement(u,null,t.lC?P(t.lC):e.createElement(d,null))),e.createElement(i,{w:"full",justify:"space-between"},e.createElement(m,null,"Engine"),e.createElement(u,null,t.eng?P(t.eng.toString()):e.createElement(d,null))),e.createElement(i,{w:"full",justify:"space-between"},e.createElement(m,null,"Esimate Price"),e.createElement(u,null,t.price?e.createElement(e.Fragment,null,"$ ",B(t.price)):e.createElement(d,null))),e.createElement(i,{w:"full",justify:"space-between"},e.createElement(m,null,"Total Price"),e.createElement(u,null,"$20 000")))))},pt=({})=>{const{favouriteCars:t}=j(a=>a.userInfoSlice);return e.createElement(He,{pt:"48px"},t.map(a=>e.createElement(mt,{key:a.id,car:a})))},dt=({})=>{const{isDesktop:t}=se(),a=U();return c.exports.useEffect(()=>{a(Oe("")),a(Fe(""))},[]),e.createElement(e.Fragment,null,t?e.createElement(ut,null):e.createElement(pt,null))},Et=({})=>e.createElement(dt,null),F=t=>{const a=t.getDate(),l=t.getMonth()+1,n=t.getFullYear();return`${a<=9?"0"+a:a}.${l<=9?"0"+l:l}.${n}`},ft=({orderList:t})=>{const[a,l]=c.exports.useState([]),n=r=>{a.includes(r)?l(a.filter(s=>s!==r)):l(a.concat(r))};return e.createElement(S,{p:"32px",w:"full"},t.length?e.createElement(qe,null,e.createElement(Je,null,e.createElement(ie,{opacity:"0.5",fontSize:"14px",fontWeight:"light"},e.createElement(w,{p:[null,null,null,"2","4"],isTruncated:!0,fontWeight:"light"},"Order Id"),e.createElement(w,{fontWeight:"light"},"Name"),e.createElement(w,{fontWeight:"light"},"Created"),e.createElement(w,{isTruncated:!0,fontWeight:"light"},"Delivery Date"),e.createElement(w,{fontWeight:"light",p:[null,null,null,"2","4"]},"Location"),e.createElement(w,{isTruncated:!0,p:"4",fontWeight:"light"},"Total Price"),e.createElement(w,{fontWeight:"light"},"Status"),e.createElement(w,{fontWeight:"light"}))),e.createElement(Qe,null,t.map((r,s)=>e.createElement(ie,{key:s,pt:"50px",onClick:()=>n(s),cursor:"pointer",_hover:{bg:"autoGrey.100"}},e.createElement(b,{w:"full",p:[null,null,null,"2","8"],isTruncated:!0},e.createElement(u,null,r.orderId)),e.createElement(b,null,e.createElement(C,{noOfLines:a.includes(s)?5:1,fontSize:"16px"},r.name)),e.createElement(b,null,F(r.createdDate)," "),e.createElement(b,null,F(r.deliveryDate)," "),e.createElement(b,{p:[null,null,null,"2","4"]},r.location," "),e.createElement(b,null," $ ",r.totalPrice),e.createElement(b,null,r.status," "),e.createElement(b,{p:"0"},e.createElement(_,{variant:"link",minH:"50px"},e.createElement(oe,{transform:a.includes(s)?"rotate(180deg)":"none",transition:"all .2s"}))))))):e.createElement($,null,e.createElement(u,null,"Order list is empty")))},gt=({order:t})=>{const{createdDate:a,deliveryDate:l}=t,{isOpen:n,onToggle:r}=Re();return e.createElement(S,{w:"full",pb:"0"},e.createElement(p,{w:"full",p:"2"},e.createElement(i,{w:"full",justify:"space-between"},e.createElement(m,null,"Order Id"),e.createElement(u,null,t.orderId)),e.createElement(k,{w:"full"}),e.createElement(i,{w:"full",justify:"space-between"},e.createElement(m,null,"Name"),e.createElement(u,null,t.name)),e.createElement(k,{w:"full"}),e.createElement(i,{w:"full",justify:"space-between"},e.createElement(m,null,"Created"),e.createElement(u,null,F(a))),e.createElement(k,{w:"full"}),e.createElement(i,{w:"full",justify:"space-between"},e.createElement(m,null,"Dealivery"),e.createElement(u,null,F(l))),e.createElement(k,{w:"full"}),e.createElement(A,{w:"full"},e.createElement(ze,{in:n},e.createElement(p,{divider:e.createElement(re,null)},e.createElement(i,{w:"full",justify:"space-between"},e.createElement(m,null,"Location"),e.createElement(u,null,t.location)),e.createElement(i,{w:"full",justify:"space-between"},e.createElement(m,null,"Total Price"),e.createElement(u,null,B(t.totalPrice)," USD")),e.createElement(i,{w:"full",justify:"space-between"},e.createElement(m,null,"Status"),e.createElement(u,null,t.status))))),e.createElement(k,{w:"full",display:n?"block":"none"}),e.createElement(i,null,e.createElement(_,{variant:"ghost",bg:"transparent",onClick:r},n?"See less":"See more",e.createElement(Me,{as:oe,transform:n?"rotate(-180deg)":"rotate(0deg)",mb:"2px",ml:"2",transition:"all .2s"})))))},ht=({orderList:t})=>e.createElement(p,{w:"full",spacing:"24px",pt:"48px"},t.map((a,l)=>e.createElement(gt,{key:l,order:a}))),xt=({})=>{const t=[{orderId:123123,name:"Chevrolet Cruze",createdDate:new Date,deliveryDate:new Date(2021,12,12),location:"USA",totalPrice:2e4,status:"Completed"},{orderId:123123,name:"Chevrolet Cruze Chevrolet",createdDate:new Date,deliveryDate:new Date(2021,12,12),location:"USA",totalPrice:2e4,status:"Completed"},{orderId:123123,name:"Chevrolet Cruze",createdDate:new Date,deliveryDate:new Date(2021,12,12),location:"USA",totalPrice:2e4,status:"Completed"},{orderId:123123,name:"Chevrolet Cruze",createdDate:new Date,deliveryDate:new Date(2021,12,12),location:"USA",totalPrice:2e4,status:"Completed"},{orderId:123123,name:"Chevrolet Cruze",createdDate:new Date,deliveryDate:new Date(2021,12,12),location:"USA",totalPrice:2e4,status:"Completed"}],{isDesktop:a}=se();return e.createElement(e.Fragment,null,a?e.createElement(ft,{orderList:t}):e.createElement(ht,{orderList:t}))},Nt=()=>{const{path:t}=W();return e.createElement(We,{pt:["16px","26px","32px","48px"]},e.createElement(Ne,{direction:["column",null,null,"row"],spacing:"24px",w:"full"},e.createElement(ct,null),e.createElement(be,null,e.createElement(N,{exact:!0,path:t,render:()=>e.createElement(Ce,{to:`${t}/order-list`})}),e.createElement(N,{exact:!0,path:`${t}/order-list`,render:()=>e.createElement(xt,null)}),e.createElement(N,{exact:!0,path:`${t}/favourites`,render:()=>e.createElement(Et,null)}))))};export{Nt as UserProfilePage,Nt as default};