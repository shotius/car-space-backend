var A=Object.defineProperty;var i=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var v=(t,a,r)=>a in t?A(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,C=(t,a)=>{for(var r in a||(a={}))y.call(a,r)&&v(t,r,a[r]);if(i)for(var r of i(a))h.call(a,r)&&v(t,r,a[r]);return t};var S=(t,a)=>{var r={};for(var s in t)y.call(t,s)&&a.indexOf(s)<0&&(r[s]=t[s]);if(t!=null&&i)for(var s of i(t))a.indexOf(s)<0&&h.call(t,s)&&(r[s]=t[s]);return r};import{u as H,h as w,R as e,S as P,e as x,f as R}from"./vendor.941bfce7.js";import{V as u,H as c,T as n,a as l,S as D,u as _,I as O,P as T,C as B,b as $}from"./PublicLayout.99b395f9.js";import{U as z}from"./UserAvatar.c7748a6a.js";import{C as m,I as p,S as I}from"./Card.01d48c09.js";import{B as k}from"./button.8ca4613a.js";import{u as M,B as N,l as G}from"./index.2eea2684.js";import{A as E,B as V,C as W,D as Y}from"./DropdownIcon.e024dfa4.js";import{C as q}from"./CatalogListWrap.423e2221.js";import{D as J}from"./DamnCard.be0d542a.js";import"./prop-types.d6ec705b.js";import"./formik.1f2ce066.js";import"./react-select.249f8a2a.js";import"./react-redux.385ab694.js";import"./axios.7b768d2b.js";import"./focus-visible.59cde91a.js";const g=re=>{var j=re,{activeBg:t="autoOrange.100",activeColor:a="#FB5607",to:r,clickCallback:s,children:L}=j,F=S(j,["activeBg","activeColor","to","clickCallback","children"]);const U=H(),d=w({path:r,exact:!0});return e.createElement(k,C({w:"full",borderRadius:"none",display:"flex",justifyContent:["start",null,null,"center"],p:"32px 32px",bg:d?t:"#fff",color:d?a:"#000",_hover:{bg:d?"autoOrange.200":"autoGrey.200"},_active:{bg:"autoOrange.300"},onClick:()=>{s?s():U.push(r)}},F),L)},K=({})=>{const{path:t}=w(),a=M();return e.createElement(m,{bg:"white",p:"0",w:["full",null,null,"200px"],maxH:"400px"},e.createElement(N,{p:"32px"},e.createElement(z,{image:"https://www.elitesingles.co.uk/wp-content/uploads/sites/59/2019/11/2b_en_articleslide_sm2-350x264.jpg",mainText:"Full Name",secondaryText:"+995 123123 123",size:"70px"})),e.createElement(u,{pb:"24px",spacing:"0"},e.createElement(g,{to:`${t}/order-list`},"Order List"),e.createElement(g,{to:`${t}/favourites`},"Favourites"),e.createElement(g,{to:"/home",clickCallback:()=>a(G())},"Log out")))},o=({})=>e.createElement(m,{bg:"autoGrey.500",w:"full",p:"0"},e.createElement(c,{w:"full",justify:"space-between",p:"16px"},e.createElement(c,{spacing:"4"},e.createElement(E,{ratio:78/66,w:"78px"},e.createElement(p,{src:"https://www.1auto.co/storage/ready_for_sales/20210914113121_photo-1552519507-da3b142c6e3d.jpg",borderRadius:"8px"})),e.createElement(u,{align:"flex-start"},e.createElement(n,null,"Name"),e.createElement(l,{fontSize:"16px"},"Chevrolet Cruze"))),e.createElement(u,{align:"flex-start"},e.createElement(n,null,"Year"),e.createElement(l,{fontSize:"16px"},"2018")),e.createElement(u,{align:"flex-start"},e.createElement(n,null,"Damage"),e.createElement(l,{fontSize:"16px"},"Front End")),e.createElement(u,{align:"flex-start"},e.createElement(n,null,"Location"),e.createElement(l,{fontSize:"16px"},"Engine")),e.createElement(V,{liked:!0,h:"46px",w:"45px"}))),Q=({})=>e.createElement(m,{w:"full",p:"32px"},e.createElement(u,{w:"full",spacing:"4"},e.createElement(o,null),e.createElement(o,null),e.createElement(o,null),e.createElement(o,null),e.createElement(o,null),e.createElement(o,null))),f=({})=>e.createElement(m,{w:"full",p:"4"},e.createElement(u,{spacing:"4"},e.createElement(W,{car:J,liked:!0}),e.createElement(I,{gridTemplateAreas:'"a a b" "a a c"',w:"full",maxH:"130px",gap:"2"},e.createElement(E,{ratio:191/130,w:"full",gridArea:"a",maxH:"130px"},e.createElement(p,{src:"https://www.1auto.co/storage/ready_for_sales/20210914113121_photo-1552519507-da3b142c6e3d.jpg",borderRadius:"8px"})),e.createElement(E,{ratio:191/130,w:"full",gridArea:"b",maxH:"61px"},e.createElement(p,{src:"https://www.1auto.co/storage/ready_for_sales/20210914113121_photo-1552519507-da3b142c6e3d.jpg",borderRadius:"8px"})),e.createElement(E,{ratio:191/130,w:"full",gridArea:"c",maxH:"61px"},e.createElement(p,{src:"https://www.1auto.co/storage/ready_for_sales/20210914113121_photo-1552519507-da3b142c6e3d.jpg",borderRadius:"8px"}))),e.createElement(u,{divider:e.createElement(D,null),w:"full"},e.createElement(c,{w:"full",justify:"space-between"},e.createElement(n,null,"Damage"),e.createElement(l,null,"Front End")),e.createElement(c,{w:"full",justify:"space-between"},e.createElement(n,null,"Mileage"),e.createElement(l,null,"10 000")),e.createElement(c,{w:"full",justify:"space-between"},e.createElement(n,null,"Location"),e.createElement(l,null,"Usa")),e.createElement(c,{w:"full",justify:"space-between"},e.createElement(n,null,"Engine"),e.createElement(l,null,"4.4")),e.createElement(c,{w:"full",justify:"space-between"},e.createElement(n,null,"Esimate Price"),e.createElement(l,null,"$20 000")),e.createElement(c,{w:"full",justify:"space-between"},e.createElement(n,null,"Total Price"),e.createElement(l,null,"$20 000"))))),X=({})=>e.createElement(q,{pt:"48px"},e.createElement(f,null),e.createElement(f,null),e.createElement(f,null),e.createElement(f,null)),Z=({})=>{const{isDesktop:t}=_();return e.createElement(e.Fragment,null,t?e.createElement(Q,null):e.createElement(X,null))},ee=({})=>e.createElement(Z,null),te=({})=>e.createElement(m,{p:"32px",w:"full"},e.createElement(l,{w:"full",textAlign:"center"},"Table")),b=({})=>e.createElement(m,{w:"full",pb:"0"},e.createElement(u,{divider:e.createElement(D,null),w:"full",p:"2"},e.createElement(c,{w:"full",justify:"space-between"},e.createElement(n,null,"Order Name"),e.createElement(l,null,"12341324")),e.createElement(c,{w:"full",justify:"space-between"},e.createElement(n,null,"Name"),e.createElement(l,null,"Chevrolet")),e.createElement(c,{w:"full",justify:"space-between"},e.createElement(n,null,"Created"),e.createElement(l,null,"01.01.2021")),e.createElement(c,{w:"full",justify:"space-between"},e.createElement(n,null,"Dealivery"),e.createElement(l,null,"01.03.2021")),e.createElement(c,{w:"full",justify:"space-between"},e.createElement(n,null,"Location"),e.createElement(l,null,"USA")),e.createElement(c,{w:"full",justify:"space-between"},e.createElement(n,null,"Total Price"),e.createElement(l,null,"10 000 USD")),e.createElement(c,{w:"full",justify:"space-between"},e.createElement(n,null,"Status"),e.createElement(l,null,"Complated")),e.createElement(c,null,e.createElement(k,{variant:"ghost",bg:"transparent"},"See more ",e.createElement(O,{as:Y,transform:"rotate(-90deg)",mb:"2px",ml:"2"}))))),le=({})=>e.createElement(u,{w:"full",spacing:"24px",pt:"48px"},e.createElement(b,null),e.createElement(b,null),e.createElement(b,null)),ae=({})=>{const{isDesktop:t}=_();return e.createElement(e.Fragment,null,t?e.createElement(te,null):e.createElement(le,null))},ye=()=>{const{path:t}=w();return e.createElement(T,null,e.createElement(B,{pt:["16px","26px","32px","48px"]},e.createElement($,{direction:["column",null,null,"row"],spacing:"24px",w:"full"},e.createElement(K,null),e.createElement(P,null,e.createElement(x,{exact:!0,path:t,render:()=>e.createElement(R,{to:`${t}/order-list`})}),e.createElement(x,{exact:!0,path:`${t}/order-list`,render:()=>e.createElement(ae,null)}),e.createElement(x,{exact:!0,path:`${t}/favourites`,render:()=>e.createElement(ee,null)})))))};export{ye as UserProfilePage,ye as default};
