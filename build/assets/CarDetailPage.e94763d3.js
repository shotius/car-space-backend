var G=Object.defineProperty;var x=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var C=(t,c,n)=>c in t?G(t,c,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[c]=n,S=(t,c)=>{for(var n in c||(c={}))y.call(c,n)&&C(t,n,c[n]);if(x)for(var n of x(c))j.call(c,n)&&C(t,n,c[n]);return t};var v=(t,c)=>{var n={};for(var m in t)y.call(t,m)&&c.indexOf(m)<0&&(n[m]=t[m]);if(t!=null&&x)for(var m of x(t))c.indexOf(m)<0&&j.call(t,m)&&(n[m]=t[m]);return n};import{R as e,r as b,i as H}from"./vendor.fc5c11f9.js";import{a as r,V as i,S as L,H as l,e as a,f as P,B as _,C as w,F as W,u as A,P as N}from"./PublicLayout.4c5b6153.js";import{S as q,C as V,a as Y}from"./CalculatorDesktop.38668f7a.js";import{S as M,a as p,b as I,c as $}from"./ScrollableDiv.041168bb.js";import{C as J,I as s,S as K}from"./Card.8ce3147e.js";import{B as O,A as o}from"./CarCardHeading.8014a89d.js";import{Q as U,B as f,U as Z,a2 as Q}from"./index.ed245afb.js";import{S as X,f as ee,N as te,T as ae}from"./swiper.3c4df1c1.js";import{D as re}from"./DamnCard.be0d542a.js";import"./prop-types.d6ec705b.js";import"./button.7237d606.js";import"./formik.72969a9f.js";import"./DropdownIcon.d278ad8c.js";import"./react-redux.ff867a7c.js";import"./axios.7b768d2b.js";import"./focus-visible.9643870d.js";const d=pe=>{var h=pe,{headingBg:t="autoBlue.400",headinCl:c="#fff",headingFontSize:n,headingPadding:m="12px 24px 12px 24px",bodyPadding:g="24px",w:u="full",maxW:E=[null,null,"480px","full"],heading:D,children:T}=h,z=v(h,["headingBg","headinCl","headingFontSize","headingPadding","bodyPadding","w","maxW","heading","children"]);return e.createElement(J,S({p:"0",maxW:E,w:u},z),e.createElement(r,{bg:t,fontSize:n,borderTopRadius:"8px",padding:m,color:c},D),e.createElement(i,{p:g},T))},k=({})=>e.createElement(i,{divider:e.createElement(L,null),w:"full",spacing:"2.5"},e.createElement(l,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"VIN number"),e.createElement(r,null,"123123123")),e.createElement(l,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Manufacturer"),e.createElement(r,null,"Chevrolet")),e.createElement(l,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Model"),e.createElement(r,null,"Cruze")),e.createElement(l,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Year"),e.createElement(r,null,"2012")),e.createElement(l,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Category"),e.createElement(r,null,"Jeep")),e.createElement(l,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Fuel type"),e.createElement(r,null,"Petro")),e.createElement(l,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Engine"),e.createElement(r,null,"5.6")),e.createElement(l,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Mileage"),e.createElement(r,null,"123 123 km")),e.createElement(l,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Color"),e.createElement(r,null,"Black")),e.createElement(l,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Interior Color"),e.createElement(r,null,"Red")),e.createElement(l,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Cylinder"),e.createElement(r,null,"5")),e.createElement(l,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Wheel"),e.createElement(r,null,"4X4")),e.createElement(l,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Airbags"),e.createElement(r,null,"4")),e.createElement(l,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Gear type"),e.createElement(r,null,"Tiptonoc"))),R=({variant:t})=>e.createElement(e.Fragment,null,t==="mobile"?e.createElement(d,{heading:"Car details",headingBg:"transparent",bg:"transparent",headinCl:"#000",headingFontSize:"20px",bodyPadding:"0",headingPadding:"12px 0px 25px 0px"},e.createElement(k,null)):e.createElement(d,{heading:"Car details"},e.createElement(k,null))),le=({})=>e.createElement(d,{heading:"Car information"},e.createElement(a,{pb:"30px",lineHeight:"27px"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci autem deserunt doloribus reprehenderit quibusdam facere laudantium, neque nostrum nisi pariatur molestias ducimus esse quo in quis, accusamus excepturi assumenda modi?"),e.createElement(i,{w:"full",p:"24px",borderRadius:"8px",bg:"#F4F4F4",spacing:"41px"},e.createElement(l,{w:"full",justify:"space-between"},e.createElement(i,{w:"full",alignItems:"flex-start",spacing:"4px"},e.createElement(a,{opacity:"0.5"},"Primary damage"),e.createElement(r,null,"Front End")),e.createElement(i,{w:"full",alignItems:"flex-start",spacing:"4px"},e.createElement(a,{opacity:"0.5"},"Secondary damage"),e.createElement(r,null,"Front End"))),e.createElement(l,{w:"full",justify:"space-between"},e.createElement(i,{w:"full",alignItems:"flex-start",spacing:"4px"},e.createElement(a,{opacity:"0.5"},"Primary damage"),e.createElement(r,null,"Front End")),e.createElement(i,{w:"full",alignItems:"flex-start",spacing:"4px"},e.createElement(a,{opacity:"0.5"},"Secondary damage"),e.createElement(r,null,"Front End"))))),ne=({})=>e.createElement(d,{heading:"Transportation and fee"},e.createElement(l,{w:"full",justify:"space-between",align:"flex-start"},e.createElement(i,{align:"flex-start",spacing:"1"},e.createElement(a,{opacity:"0.5"}," Transportation to Poti"),e.createElement(r,null,"$ 400")),e.createElement(i,{align:"flex-start",spacing:"1"},e.createElement(a,{opacity:"0.5"}," Auction fee"),e.createElement(r,null,"$ 400")),e.createElement(l,{p:"17px 24px",borderRadius:"8px",bg:"autoGrey.200"},e.createElement(a,{opacity:"0.5"},"Total"),e.createElement(r,null,"$ 800")))),B=({car:t})=>e.createElement(l,{w:"full",justify:"space-between"},e.createElement(i,{spacing:"0",alignItems:"flex-start"},e.createElement(U,{fontSize:"20px",lineHeight:"26px",fontWeight:"light"},t==null?void 0:t.y," ",t==null?void 0:t.m," ",t==null?void 0:t.mG),e.createElement(l,null,e.createElement(a,{opacity:"0.5"},"Lot #"),e.createElement(a,null,t==null?void 0:t.lN))),e.createElement(O,{h:"48px",w:"50px",lotNumber:"39029881",buttonInactiveColor:"#E8E8E8"}));X.use([ee,te,ae]);const ce=()=>{const[t,c]=b.exports.useState(null);return e.createElement(f,{w:"full"},e.createElement(f,{borderRadius:"8px"},e.createElement(M,{spaceBetween:10,thumbs:{swiper:t},className:"mySwiper2"},e.createElement(p,null,e.createElement(o,{ratio:579/364,width:"579px"},e.createElement(s,{src:"https://stat.overdrive.in/wp-content/odgallery/2020/06/57263_2020_Mercedes_Benz_GLS.jpg",borderRadius:"8px"}))),e.createElement(p,null,e.createElement(o,{ratio:579/364,width:"579px"},e.createElement(s,{src:"https://media.istockphoto.com/photos/generic-red-suv-on-a-white-background-side-view-picture-id1157655660?k=20&m=1157655660&s=612x612&w=0&h=WOtAthbmJ9iG1zbKo4kNUsAGMe6-xM-E7a8TMxb5xmk=",borderRadius:"8px"}))),e.createElement(p,null,e.createElement(o,{ratio:579/364,width:"579px"},e.createElement(s,{src:"https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",borderRadius:"8px"}))),e.createElement(p,null,e.createElement(o,{ratio:579/364,width:"579px"},e.createElement(s,{src:"https://media.istockphoto.com/photos/classic-car-picture-id466771069?k=20&m=466771069&s=612x612&w=0&h=BFsJcpBuT0Ijm2VZm9FfLsEkWv5YKIuvcDlf8jVk7MQ=",borderRadius:"8px"}))),e.createElement(p,null,e.createElement(o,{ratio:579/364,width:"579px"},e.createElement(s,{src:"https://media.wired.com/photos/5d09594a62bcb0c9752779d9/master/pass/Transpo_G70_TA-518126.jpg",borderRadius:"8px"}))))),e.createElement(f,{pt:"4"},e.createElement(M,{onSwiper:n=>c(n),spaceBetween:10,slidesPerView:5,freeMode:!0,watchSlidesProgress:!0,className:"mySwiper"},e.createElement(p,null,e.createElement(o,{ratio:103/70,cursor:"pointer",width:"103px"},e.createElement(s,{src:"https://stat.overdrive.in/wp-content/odgallery/2020/06/57263_2020_Mercedes_Benz_GLS.jpg",borderRadius:"8px",width:"103px"}))),e.createElement(p,null,e.createElement(o,{ratio:103/70,cursor:"pointer",width:"103px"},e.createElement(s,{src:"https://media.istockphoto.com/photos/generic-red-suv-on-a-white-background-side-view-picture-id1157655660?k=20&m=1157655660&s=612x612&w=0&h=WOtAthbmJ9iG1zbKo4kNUsAGMe6-xM-E7a8TMxb5xmk=",borderRadius:"8px",width:"103px"}))),e.createElement(p,null,e.createElement(o,{ratio:103/70,cursor:"pointer",width:"103px"},e.createElement(s,{src:"https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",borderRadius:"8px",width:"103px"}))),e.createElement(p,null,e.createElement(o,{ratio:103/70,cursor:"pointer",width:"103px"},e.createElement(s,{src:"https://media.istockphoto.com/photos/classic-car-picture-id466771069?k=20&m=466771069&s=612x612&w=0&h=BFsJcpBuT0Ijm2VZm9FfLsEkWv5YKIuvcDlf8jVk7MQ=",borderRadius:"8px",width:"103px"}))),e.createElement(p,{style:{position:"relative"}},e.createElement(f,{position:"absolute",top:"0",right:"5px",bottom:"0",left:"0",borderRadius:"8px",cursor:"pointer",background:"rgba(0, 0, 0,0.5)",zIndex:"1"},e.createElement(P,{h:"full"},e.createElement(a,{fontSize:"24px",color:"white",opacity:"1"},"+6"))),e.createElement(o,{ratio:103/70,cursor:"pointer",width:"103px"},e.createElement(s,{src:"https://media.wired.com/photos/5d09594a62bcb0c9752779d9/master/pass/Transpo_G70_TA-518126.jpg",borderRadius:"8px",width:"103px"}))))))},F=({})=>e.createElement(d,{heading:"Bid information",w:"full"},e.createElement(l,{w:"full",alignItems:"baseline"},e.createElement(i,{w:"full",align:"flex-start",spacing:"0"},e.createElement(a,{opacity:"0.5"}," Current bid"),e.createElement(r,{color:"autoOrange.500",fontSize:"20px"},"$2 500")),e.createElement(i,{w:"full",align:"flex-start",spacing:"0"},e.createElement(a,{opacity:"0.5"}," Time leeft"),e.createElement(r,null,"1d 3h 10m"))),e.createElement(K,{spacingX:"15px",spacingY:"10px",w:"full",pt:"4",minChildWidth:"170px"},e.createElement(_,null,"Contact"),e.createElement(_,{color:"#000",gridRow:1,bg:"#F0F0F0",_active:{bg:"autoGrey.400"},display:"flex",alignItems:"center"},"But it now",e.createElement(a,{opacity:"0.5",ml:"4"}," ","$2 500")))),ie=({car:t})=>e.createElement(w,{position:"relative"},e.createElement(W,{pt:"40px",justify:"space-between",position:"relative",alignItems:"start"},e.createElement(i,{spacing:"49px",w:"579px"},e.createElement(ce,null),e.createElement(le,null),e.createElement(ne,null),e.createElement(R,{variant:"desktop"})),e.createElement(q,{minW:"20px"}),e.createElement(i,{w:"441px",spacing:"32px",alignItems:"flex-start",position:"sticky",top:"110px"},e.createElement(B,{car:t}),e.createElement(F,null),e.createElement(V,{children:!0,size:"regular"})))),se=({})=>e.createElement(e.Fragment,null,e.createElement(o,{ratio:375/295,w:"full",maxH:"400px"},e.createElement(s,{src:"https://stat.overdrive.in/wp-content/odgallery/2020/06/57263_2020_Mercedes_Benz_GLS.jpg"})),e.createElement(I,{cardCount:5,w:"full",spacing:"2",p:"8px 16px 8px 16px",pt:"2"},e.createElement(s,{src:"https://stat.overdrive.in/wp-content/odgallery/2020/06/57263_2020_Mercedes_Benz_GLS.jpg",minW:"109px",borderRadius:"8px"}),e.createElement(s,{src:"https://stat.overdrive.in/wp-content/odgallery/2020/06/57263_2020_Mercedes_Benz_GLS.jpg",minW:"109px",borderRadius:"8px"}),e.createElement(s,{src:"https://stat.overdrive.in/wp-content/odgallery/2020/06/57263_2020_Mercedes_Benz_GLS.jpg",minW:"109px",borderRadius:"8px"}),e.createElement(s,{src:"https://stat.overdrive.in/wp-content/odgallery/2020/06/57263_2020_Mercedes_Benz_GLS.jpg",minW:"109px",borderRadius:"8px"}),e.createElement(s,{src:"https://stat.overdrive.in/wp-content/odgallery/2020/06/57263_2020_Mercedes_Benz_GLS.jpg",minW:"109px",borderRadius:"8px"}))),me=()=>e.createElement(d,{heading:"Car information"},e.createElement(i,{w:"full",spacing:"18px"},e.createElement(l,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Primary damage"),e.createElement(r,null,"Front End")),e.createElement(l,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Secondary damage"),e.createElement(r,null,"Front End")),e.createElement(l,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Car condition"),e.createElement(r,null,"Front End")),e.createElement(l,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Location"),e.createElement(r,null,"USA")))),oe=({car:t})=>e.createElement(e.Fragment,null,e.createElement(w,{p:"0"},e.createElement(se,null)),e.createElement(w,{pt:"4"},e.createElement(l,null,e.createElement(i,{spacing:"48px",w:"full"},e.createElement(B,{car:t}),e.createElement(a,{lineHeight:"24px",opacity:"0.5",mt:"24px !important"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ullam ex dolores incidunt, nam quam similique eius esse perspiciatis non, iure aperiam, laborum officiis omnis blanditiis quas consequuntur modi enim."),e.createElement(F,null),e.createElement(me,null),e.createElement(R,{variant:"mobile"}))))),Re=()=>{const{isDesktop:t}=A(),{lotNumber:c}=H(),[n,m]=b.exports.useState(),{cars:g}=Z(u=>u.carsReducer);return b.exports.useEffect(()=>{const u=g.find(E=>E.lN===c);u?m(u):Q.getSingleCar(c).then(E=>m(E))},[]),e.createElement(N,null,t?e.createElement(ie,{car:n}):e.createElement(oe,{car:n}),e.createElement(w,{mt:"65px"},e.createElement($,{mainText:"Similar vehicles"}),e.createElement(Y,{car:re})))};export{Re as CarDetailPage,Re as default};
