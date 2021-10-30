var B=Object.defineProperty;var d=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var j=(t,r,c)=>r in t?B(t,r,{enumerable:!0,configurable:!0,writable:!0,value:c}):t[r]=c,f=(t,r)=>{for(var c in r||(r={}))x.call(r,c)&&j(t,c,r[c]);if(d)for(var c of d(r))b.call(r,c)&&j(t,c,r[c]);return t};var g=(t,r)=>{var c={};for(var i in t)x.call(t,i)&&r.indexOf(i)<0&&(c[i]=t[i]);if(t!=null&&d)for(var i of d(t))r.indexOf(i)<0&&b.call(t,i)&&(c[i]=t[i]);return c};import{R as e,u as R,r as C}from"./vendor.a1e1707f.js";import{T as a,C as y,u as F,P as M}from"./PublicLayout.b7c9c159.js";import{H as S,u as L,c as H}from"./index.ed2bcab6.js";import{C as P,I as u}from"./Card.4a7c9f8a.js";import{V as m,H as n,S as z,a as G}from"./text.bf8bcfd3.js";import{B as h}from"./ButtonRegular.a01c44ea.js";import{A as T,S as D,B as q}from"./ButtonHeart.16c37d07.js";import"./button.65ebee7d.js";import"./react-redux.c1e48ce4.js";import"./axios.7b768d2b.js";import"./focus-visible.5865a200.js";import"./react-icons.6f0a56ff.js";const l=E=>{var s=E,{fontSize:t="16px",fontWeight:r="light",children:c}=s,i=g(s,["fontSize","fontWeight","children"]);return e.createElement(S,f({fontSize:t,fontWeight:r},i),c)},p=J=>{var w=J,{headingBg:t="autoBlue.400",headinCl:r="#fff",headingFontSize:c,w:i="full",maxW:E=[null,null,"480px"],heading:s,children:o}=w,v=g(w,["headingBg","headinCl","headingFontSize","w","maxW","heading","children"]);return e.createElement(P,f({p:"0",maxW:E,w:i},v),e.createElement(l,{bg:t,fontSize:c,borderTopRadius:"8px",padding:"12px 16px 12px 16px",color:r},s),e.createElement(m,{p:"4"},o))},W=({})=>e.createElement(p,{heading:"Car information"},e.createElement(a,{pb:"30px",lineHeight:"27px"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci autem deserunt doloribus reprehenderit quibusdam facere laudantium, neque nostrum nisi pariatur molestias ducimus esse quo in quis, accusamus excepturi assumenda modi?"),e.createElement(m,{w:"full",p:"24px",borderRadius:"8px",bg:"#F4F4F4",spacing:"41px"},e.createElement(n,{w:"full",justify:"space-between"},e.createElement(m,{w:"full",alignItems:"flex-start",spacing:"4px"},e.createElement(a,{opacity:"0.5"},"Primary damage"),e.createElement(l,null,"Front End")),e.createElement(m,{w:"full",alignItems:"flex-start",spacing:"4px"},e.createElement(a,{opacity:"0.5"},"Secondary damage"),e.createElement(l,null,"Front End"))),e.createElement(n,{w:"full",justify:"space-between"},e.createElement(m,{w:"full",alignItems:"flex-start",spacing:"4px"},e.createElement(a,{opacity:"0.5"},"Primary damage"),e.createElement(l,null,"Front End")),e.createElement(m,{w:"full",alignItems:"flex-start",spacing:"4px"},e.createElement(a,{opacity:"0.5"},"Secondary damage"),e.createElement(l,null,"Front End"))))),_=()=>e.createElement(p,{heading:"Car details"},e.createElement(m,{divider:e.createElement(z,null),w:"full",spacing:"2.5"},e.createElement(n,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"VIN number"),e.createElement(l,null,"123123123")),e.createElement(n,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Manufacturer"),e.createElement(l,null,"Chevrolet")),e.createElement(n,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Model"),e.createElement(l,null,"Cruze")),e.createElement(n,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Year"),e.createElement(l,null,"2012")),e.createElement(n,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Category"),e.createElement(l,null,"Jeep")),e.createElement(n,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Fuel type"),e.createElement(l,null,"Petro")),e.createElement(n,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Engine"),e.createElement(l,null,"5.6")),e.createElement(n,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Mileage"),e.createElement(l,null,"123 123 km")),e.createElement(n,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Color"),e.createElement(l,null,"Black")),e.createElement(n,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Interior Color"),e.createElement(l,null,"Red")),e.createElement(n,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Cylinder"),e.createElement(l,null,"5")),e.createElement(n,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Wheel"),e.createElement(l,null,"4X4")),e.createElement(n,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Airbags"),e.createElement(l,null,"4")),e.createElement(n,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Gear type"),e.createElement(l,null,"Tiptonoc")))),k=({})=>e.createElement(y,null,e.createElement(n,{bg:"green"},e.createElement(m,{spacing:"49px"},e.createElement(l,{p:"100px"},"Card Picture Slider"),e.createElement(W,null),e.createElement(p,{heading:"Transportation and fee"},e.createElement(n,{w:"full",justify:"space-between"},e.createElement(m,{align:"flex-start",spacing:"1"},e.createElement(a,{opacity:"0.5"}," Transportation to Poti"),e.createElement(l,null,"$ 400")),e.createElement(m,{align:"flex-start",spacing:"1"},e.createElement(a,{opacity:"0.5"}," Auction fee"),e.createElement(l,null,"$ 400")),e.createElement(n,{p:"17px 24px",borderRadius:"8px",bg:"autoGrey.200"},e.createElement(a,{opacity:"0.5"},"Total"),e.createElement(l,null,"$ 800")))),e.createElement(_,null)),e.createElement(m,{bg:"red"},e.createElement(l,null,"Calculatro and bidding info")))),A=({})=>e.createElement(p,{heading:"Bid information"},e.createElement(n,{w:"full",alignItems:"baseline"},e.createElement(m,{w:"full",align:"flex-start",spacing:"0"},e.createElement(a,{opacity:"0.5"}," Current bid"),e.createElement(l,{color:"autoOrange.500",fontSize:"20px"},"$2 500")),e.createElement(m,{w:"full",align:"flex-start",spacing:"0"},e.createElement(a,{opacity:"0.5"}," Time leeft"),e.createElement(l,null,"1d 3h 10m"))),e.createElement(G,{spacing:["10px","15px"],w:"full",pt:"4",direction:["column","row-reverse"]},e.createElement(h,null,"Contact"),e.createElement(h,{color:"#000",bg:"#F0F0F0",_active:{bg:"autoGrey.400"}},"But it now",e.createElement(a,{opacity:"0.5",ml:"4"}," ","$2 500")))),$=({})=>e.createElement(e.Fragment,null,e.createElement(T,{ratio:375/295,w:"full",maxH:"400px"},e.createElement(u,{src:"https://stat.overdrive.in/wp-content/odgallery/2020/06/57263_2020_Mercedes_Benz_GLS.jpg"})),e.createElement(D,{cardCount:5,w:"full",spacing:"2",p:"8px 16px 8px 16px",pt:"2"},e.createElement(u,{src:"https://stat.overdrive.in/wp-content/odgallery/2020/06/57263_2020_Mercedes_Benz_GLS.jpg",minW:"109px",borderRadius:"8px"}),e.createElement(u,{src:"https://stat.overdrive.in/wp-content/odgallery/2020/06/57263_2020_Mercedes_Benz_GLS.jpg",minW:"109px",borderRadius:"8px"}),e.createElement(u,{src:"https://stat.overdrive.in/wp-content/odgallery/2020/06/57263_2020_Mercedes_Benz_GLS.jpg",minW:"109px",borderRadius:"8px"}),e.createElement(u,{src:"https://stat.overdrive.in/wp-content/odgallery/2020/06/57263_2020_Mercedes_Benz_GLS.jpg",minW:"109px",borderRadius:"8px"}),e.createElement(u,{src:"https://stat.overdrive.in/wp-content/odgallery/2020/06/57263_2020_Mercedes_Benz_GLS.jpg",minW:"109px",borderRadius:"8px"}))),N=()=>e.createElement(p,{heading:"Car information"},e.createElement(m,{w:"full",spacing:"18px"},e.createElement(n,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Primary damage"),e.createElement(l,null,"Front End")),e.createElement(n,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Secondary damage"),e.createElement(l,null,"Front End")),e.createElement(n,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Car condition"),e.createElement(l,null,"Front End")),e.createElement(n,{w:"full",justify:"space-between"},e.createElement(a,{opacity:"0.5"},"Location"),e.createElement(l,null,"USA")))),V=({car:t})=>e.createElement(n,{w:"full",justify:"space-between"},e.createElement(m,{spacing:"0",alignItems:"flex-start"},e.createElement(S,{fontSize:"20px",lineHeight:"26px",fontWeight:"light"},t==null?void 0:t.y," ",t==null?void 0:t.m," ",t==null?void 0:t.mG),e.createElement(n,null,e.createElement(a,{opacity:"0.5"},"Lot #"),e.createElement(a,null,t==null?void 0:t.lN))),e.createElement(q,null)),O=({car:t})=>e.createElement(e.Fragment,null,e.createElement(y,{p:"0"},e.createElement($,null)),e.createElement(y,{pt:"4"},e.createElement(n,null,e.createElement(m,{spacing:"48px",w:"full"},e.createElement(V,{car:t}),e.createElement(a,{lineHeight:"24px",opacity:"0.5",mt:"24px !important"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ullam ex dolores incidunt, nam quam similique eius esse perspiciatis non, iure aperiam, laborum officiis omnis blanditiis quas consequuntur modi enim."),e.createElement(A,null),e.createElement(N,null),e.createElement(_,null))))),Q=t=>{const[r]=F(`(min-width: ${t}px)`);return{isLargerThan:r}},ie=()=>{const{isLargerThan:t}=Q(600),{lotNumber:r}=R(),[c,i]=C.exports.useState(),{cars:E}=L(s=>s.carsReducer);return C.exports.useEffect(()=>{const s=E.find(o=>o.lN===r);s?i(s):H.getSingleCar(r).then(o=>i(o))},[]),e.createElement(M,null,t?e.createElement(k,null):e.createElement(O,{car:c}))};export{ie as CarDetailPage,ie as default};