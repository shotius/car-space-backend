var G=Object.defineProperty;var x=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var S=(t,c,n)=>c in t?G(t,c,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[c]=n,C=(t,c)=>{for(var n in c||(c={}))h.call(c,n)&&S(t,n,c[n]);if(x)for(var n of x(c))j.call(c,n)&&S(t,n,c[n]);return t};var v=(t,c)=>{var n={};for(var m in t)h.call(t,m)&&c.indexOf(m)<0&&(n[m]=t[m]);if(t!=null&&x)for(var m of x(t))c.indexOf(m)<0&&j.call(t,m)&&(n[m]=t[m]);return n};import{R as e,r as g,u as z}from"./vendor.41c4480e.js";import{T as a,C as w,u as L,P}from"./PublicLayout.6cabdb62.js";import{H as r,S as W,C as A,a as q,D as N}from"./DamnCard.21847c1e.js";import{B as V,S as _,a as p,A as o,b as Y,c as $}from"./ScrollableDiv.bb8c0c38.js";import{C as J,I as i,S as I}from"./Card.3024965c.js";import{V as s,S as K,H as l,F as O}from"./text.95d9bb63.js";import{H as Z,B as b,u as U,c as Q}from"./index.248baa81.js";import{S as X,f as ee,N as te,T as ae}from"./swiper.f8600706.js";import{B as M}from"./ButtonRegular.c336dc87.js";import"./button.19728747.js";import"./input.fb78becf.js";import"./react-icons.6337afae.js";import"./react-redux.b99307fc.js";import"./axios.7b768d2b.js";import"./focus-visible.a5aa1618.js";const d=oe=>{var y=oe,{headingBg:t="autoBlue.400",headinCl:c="#fff",headingFontSize:n,headingPadding:m="12px 24px 12px 24px",bodyPadding:f="24px",w:u="full",maxW:E=[null,null,"480px","full"],heading:D,children:T}=y,H=v(y,["headingBg","headinCl","headingFontSize","headingPadding","bodyPadding","w","maxW","heading","children"]);return e.createElement(J,C({p:"0",maxW:E,w:u},H),e.createElement(r,{bg:t,fontSize:n,borderTopRadius:"8px",padding:m,color:c},D),e.createElement(s,{p:f},T))},B=({})=>e.createElement(s,{divider:e.createElement(K,null),w:"full",spacing:"2.5"},e.createElement(l,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"VIN number"),e.createElement(r,null,"123123123")),e.createElement(l,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Manufacturer"),e.createElement(r,null,"Chevrolet")),e.createElement(l,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Model"),e.createElement(r,null,"Cruze")),e.createElement(l,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Year"),e.createElement(r,null,"2012")),e.createElement(l,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Category"),e.createElement(r,null,"Jeep")),e.createElement(l,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Fuel type"),e.createElement(r,null,"Petro")),e.createElement(l,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Engine"),e.createElement(r,null,"5.6")),e.createElement(l,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Mileage"),e.createElement(r,null,"123 123 km")),e.createElement(l,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Color"),e.createElement(r,null,"Black")),e.createElement(l,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Interior Color"),e.createElement(r,null,"Red")),e.createElement(l,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Cylinder"),e.createElement(r,null,"5")),e.createElement(l,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Wheel"),e.createElement(r,null,"4X4")),e.createElement(l,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Airbags"),e.createElement(r,null,"4")),e.createElement(l,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Gear type"),e.createElement(r,null,"Tiptonoc"))),R=({variant:t})=>e.createElement(e.Fragment,null,t==="mobile"?e.createElement(d,{heading:"Car details",headingBg:"transparent",bg:"transparent",headinCl:"#000",headingFontSize:"20px",bodyPadding:"0",headingPadding:"12px 0px 25px 0px"},e.createElement(B,null)):e.createElement(d,{heading:"Car details"},e.createElement(B,null))),re=({})=>e.createElement(d,{heading:"Car information"},e.createElement(a,{pb:"30px",lineHeight:"27px"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci autem deserunt doloribus reprehenderit quibusdam facere laudantium, neque nostrum nisi pariatur molestias ducimus esse quo in quis, accusamus excepturi assumenda modi?"),e.createElement(s,{w:"full",p:"24px",borderRadius:"8px",bg:"#F4F4F4",spacing:"41px"},e.createElement(l,{w:"full",justify:"space-between"},e.createElement(s,{w:"full",alignItems:"flex-start",spacing:"4px"},e.createElement(a,{opacity:"0.5"},"Primary damage"),e.createElement(r,null,"Front End")),e.createElement(s,{w:"full",alignItems:"flex-start",spacing:"4px"},e.createElement(a,{opacity:"0.5"},"Secondary damage"),e.createElement(r,null,"Front End"))),e.createElement(l,{w:"full",justify:"space-between"},e.createElement(s,{w:"full",alignItems:"flex-start",spacing:"4px"},e.createElement(a,{opacity:"0.5"},"Primary damage"),e.createElement(r,null,"Front End")),e.createElement(s,{w:"full",alignItems:"flex-start",spacing:"4px"},e.createElement(a,{opacity:"0.5"},"Secondary damage"),e.createElement(r,null,"Front End"))))),le=({})=>e.createElement(d,{heading:"Transportation and fee"},e.createElement(l,{w:"full",justify:"space-between",align:"flex-start"},e.createElement(s,{align:"flex-start",spacing:"1"},e.createElement(a,{opacity:"0.5"}," Transportation to Poti"),e.createElement(r,null,"$ 400")),e.createElement(s,{align:"flex-start",spacing:"1"},e.createElement(a,{opacity:"0.5"}," Auction fee"),e.createElement(r,null,"$ 400")),e.createElement(l,{p:"17px 24px",borderRadius:"8px",bg:"autoGrey.200"},e.createElement(a,{opacity:"0.5"},"Total"),e.createElement(r,null,"$ 800")))),k=({car:t})=>e.createElement(l,{w:"full",justify:"space-between"},e.createElement(s,{spacing:"0",alignItems:"flex-start"},e.createElement(Z,{fontSize:"20px",lineHeight:"26px",fontWeight:"light"},t==null?void 0:t.y," ",t==null?void 0:t.m," ",t==null?void 0:t.mG),e.createElement(l,null,e.createElement(a,{opacity:"0.5"},"Lot #"),e.createElement(a,null,t==null?void 0:t.lN))),e.createElement(V,null));X.use([ee,te,ae]);const ne=()=>{const[t,c]=g.exports.useState(null);return e.createElement(b,{w:"full"},e.createElement(b,{borderRadius:"8px"},e.createElement(_,{spaceBetween:10,thumbs:{swiper:t},className:"mySwiper2"},e.createElement(p,null,e.createElement(o,{ratio:579/364,width:"579px"},e.createElement(i,{src:"https://stat.overdrive.in/wp-content/odgallery/2020/06/57263_2020_Mercedes_Benz_GLS.jpg",borderRadius:"8px"}))),e.createElement(p,null,e.createElement(o,{ratio:579/364,width:"579px"},e.createElement(i,{src:"https://media.istockphoto.com/photos/generic-red-suv-on-a-white-background-side-view-picture-id1157655660?k=20&m=1157655660&s=612x612&w=0&h=WOtAthbmJ9iG1zbKo4kNUsAGMe6-xM-E7a8TMxb5xmk=",borderRadius:"8px"}))),e.createElement(p,null,e.createElement(o,{ratio:579/364,width:"579px"},e.createElement(i,{src:"https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",borderRadius:"8px"}))),e.createElement(p,null,e.createElement(o,{ratio:579/364,width:"579px"},e.createElement(i,{src:"https://media.istockphoto.com/photos/classic-car-picture-id466771069?k=20&m=466771069&s=612x612&w=0&h=BFsJcpBuT0Ijm2VZm9FfLsEkWv5YKIuvcDlf8jVk7MQ=",borderRadius:"8px"}))),e.createElement(p,null,e.createElement(o,{ratio:579/364,width:"579px"},e.createElement(i,{src:"https://media.wired.com/photos/5d09594a62bcb0c9752779d9/master/pass/Transpo_G70_TA-518126.jpg",borderRadius:"8px"}))))),e.createElement(b,{pt:"4"},e.createElement(_,{onSwiper:n=>c(n),spaceBetween:10,slidesPerView:5,freeMode:!0,watchSlidesProgress:!0,className:"mySwiper"},e.createElement(p,null,e.createElement(o,{ratio:103/70,cursor:"pointer",width:"103px"},e.createElement(i,{src:"https://stat.overdrive.in/wp-content/odgallery/2020/06/57263_2020_Mercedes_Benz_GLS.jpg",borderRadius:"8px"}))),e.createElement(p,null,e.createElement(o,{ratio:103/70,cursor:"pointer"},e.createElement(i,{src:"https://media.istockphoto.com/photos/generic-red-suv-on-a-white-background-side-view-picture-id1157655660?k=20&m=1157655660&s=612x612&w=0&h=WOtAthbmJ9iG1zbKo4kNUsAGMe6-xM-E7a8TMxb5xmk=",borderRadius:"8px"}))),e.createElement(p,null,e.createElement(o,{ratio:103/70,cursor:"pointer"},e.createElement(i,{src:"https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",borderRadius:"8px"}))),e.createElement(p,null,e.createElement(o,{ratio:103/70,cursor:"pointer"},e.createElement(i,{src:"https://media.istockphoto.com/photos/classic-car-picture-id466771069?k=20&m=466771069&s=612x612&w=0&h=BFsJcpBuT0Ijm2VZm9FfLsEkWv5YKIuvcDlf8jVk7MQ=",borderRadius:"8px"}))),e.createElement(p,null,e.createElement(o,{ratio:103/70,cursor:"pointer"},e.createElement(i,{src:"https://media.wired.com/photos/5d09594a62bcb0c9752779d9/master/pass/Transpo_G70_TA-518126.jpg",borderRadius:"8px",width:"103px"}))))))},F=({})=>e.createElement(d,{heading:"Bid information",w:"full"},e.createElement(l,{w:"full",alignItems:"baseline"},e.createElement(s,{w:"full",align:"flex-start",spacing:"0"},e.createElement(a,{opacity:"0.5"}," Current bid"),e.createElement(r,{color:"autoOrange.500",fontSize:"20px"},"$2 500")),e.createElement(s,{w:"full",align:"flex-start",spacing:"0"},e.createElement(a,{opacity:"0.5"}," Time leeft"),e.createElement(r,null,"1d 3h 10m"))),e.createElement(I,{spacingX:"15px",spacingY:"10px",w:"full",pt:"4",minChildWidth:"170px"},e.createElement(M,null,"Contact"),e.createElement(M,{color:"#000",gridRow:1,bg:"#F0F0F0",_active:{bg:"autoGrey.400"},display:"flex",alignItems:"center"},"But it now",e.createElement(a,{opacity:"0.5",ml:"4"}," ","$2 500")))),ce=({car:t})=>e.createElement(w,{position:"relative"},e.createElement(O,{pt:"40px",justify:"space-between",position:"relative",alignItems:"start"},e.createElement(s,{spacing:"49px",w:"579px"},e.createElement(ne,null),e.createElement(re,null),e.createElement(le,null),e.createElement(R,{variant:"desktop"})),e.createElement(W,{minW:"20px"}),e.createElement(s,{w:"441px",spacing:"32px",alignItems:"flex-start",position:"sticky",top:"110px"},e.createElement(k,{car:t}),e.createElement(F,null),e.createElement(A,{children:!0,size:"regular"})))),ie=({})=>e.createElement(e.Fragment,null,e.createElement(o,{ratio:375/295,w:"full",maxH:"400px"},e.createElement(i,{src:"https://stat.overdrive.in/wp-content/odgallery/2020/06/57263_2020_Mercedes_Benz_GLS.jpg"})),e.createElement(Y,{cardCount:5,w:"full",spacing:"2",p:"8px 16px 8px 16px",pt:"2"},e.createElement(i,{src:"https://stat.overdrive.in/wp-content/odgallery/2020/06/57263_2020_Mercedes_Benz_GLS.jpg",minW:"109px",borderRadius:"8px"}),e.createElement(i,{src:"https://stat.overdrive.in/wp-content/odgallery/2020/06/57263_2020_Mercedes_Benz_GLS.jpg",minW:"109px",borderRadius:"8px"}),e.createElement(i,{src:"https://stat.overdrive.in/wp-content/odgallery/2020/06/57263_2020_Mercedes_Benz_GLS.jpg",minW:"109px",borderRadius:"8px"}),e.createElement(i,{src:"https://stat.overdrive.in/wp-content/odgallery/2020/06/57263_2020_Mercedes_Benz_GLS.jpg",minW:"109px",borderRadius:"8px"}),e.createElement(i,{src:"https://stat.overdrive.in/wp-content/odgallery/2020/06/57263_2020_Mercedes_Benz_GLS.jpg",minW:"109px",borderRadius:"8px"}))),se=()=>e.createElement(d,{heading:"Car information"},e.createElement(s,{w:"full",spacing:"18px"},e.createElement(l,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Primary damage"),e.createElement(r,null,"Front End")),e.createElement(l,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Secondary damage"),e.createElement(r,null,"Front End")),e.createElement(l,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Car condition"),e.createElement(r,null,"Front End")),e.createElement(l,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Location"),e.createElement(r,null,"USA")))),me=({car:t})=>e.createElement(e.Fragment,null,e.createElement(w,{p:"0"},e.createElement(ie,null)),e.createElement(w,{pt:"4"},e.createElement(l,null,e.createElement(s,{spacing:"48px",w:"full"},e.createElement(k,{car:t}),e.createElement(a,{lineHeight:"24px",opacity:"0.5",mt:"24px !important"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ullam ex dolores incidunt, nam quam similique eius esse perspiciatis non, iure aperiam, laborum officiis omnis blanditiis quas consequuntur modi enim."),e.createElement(F,null),e.createElement(se,null),e.createElement(R,{variant:"mobile"}))))),Me=()=>{const{isDesktop:t}=L(),{lotNumber:c}=z(),[n,m]=g.exports.useState(),{cars:f}=U(u=>u.carsReducer);return g.exports.useEffect(()=>{const u=f.find(E=>E.lN===c);u?m(u):Q.getSingleCar(c).then(E=>m(E))},[]),e.createElement(P,null,t?e.createElement(ce,{car:n}):e.createElement(me,{car:n}),e.createElement(w,{mt:"65px"},e.createElement($,{mainText:"Similar vehicles"}),e.createElement(q,{car:N})))};export{Me as CarDetailPage,Me as default};
