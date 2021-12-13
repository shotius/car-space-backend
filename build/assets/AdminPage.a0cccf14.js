var P=Object.defineProperty,A=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var C=(a,r,t)=>r in a?P(a,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[r]=t,f=(a,r)=>{for(var t in r||(r={}))x.call(r,t)&&C(a,t,r[t]);if(y)for(var t of y(r))j.call(r,t)&&C(a,t,r[t]);return a},h=(a,r)=>A(a,F(r));var T=(a,r)=>{var t={};for(var o in a)x.call(a,o)&&r.indexOf(o)<0&&(t[o]=a[o]);if(a!=null&&y)for(var o of y(a))r.indexOf(o)<0&&j.call(a,o)&&(t[o]=a[o]);return t};import{r as D,R as e}from"./vendor.1d447835.js";import{F as O,a as R,b as E}from"./formik.89f0ab96.js";import{T as H}from"./react-textarea-autosize.1eb580d3.js";import{a2 as L,P as _,k as B,B as K,H as N,a3 as l,a4 as S,a5 as q,X as z,a as M,b as V}from"./PublicLayout.36d61366.js";import{C as G}from"./Card.c4247a9e.js";import{f as U,L as W,o as Y,ad as I,c as Q,a as X,e as k,d as J,l as Z,C as $,a_ as ee,ag as ae,a6 as te,H as re}from"./index.db40930d.js";import{T as oe}from"./types.4f381c0a.js";import{u as ne}from"./use-toast.ad4ccd52.js";import"./prop-types.d6ec705b.js";import"./react-redux.f7be6d05.js";import"./axios.7b768d2b.js";import"./focus-visible.b325fe5e.js";function g(){return g=Object.assign||function(a){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(a[o]=t[o])}return a},g.apply(this,arguments)}function le(a,r){if(a==null)return{};var t={},o=Object.keys(a),c,m;for(m=0;m<o.length;m++)c=o[m],!(r.indexOf(c)>=0)&&(t[c]=a[c]);return t}var se=U((a,r)=>{var t=W("Textarea",a),o=Y(a),{className:c,rows:m}=o,n=le(o,["className","rows"]),d=L(n),s=["h","minH","height","minHeight"],i=m?I(t,s):t;return D.exports.createElement(Q.textarea,g({ref:r,rows:m},d,{className:X("chakra-textarea",c),__css:i}))});const xe=()=>{const a=Object.values(oe),{addingDealerCar:r}=k(n=>n.carsReducer),{catalogQuery:t}=k(n=>n.globalAppState),o=J(),c=ne(),m={manufacturer:"",modelGroup:"",modelDetail:"",bodyStyle:"",damage:"",location:"",odometer:0,cylinders:0,drive:"",engine:0,transmission:"",year:"",hasKeys:"",fuelType:"",color:"",price:0,description:"",photos:null};return e.createElement(_,null,e.createElement(B,{pt:["32px",null,null,"40px"]},e.createElement(K,{onClick:()=>o(Z())},"logout"),e.createElement($,null,e.createElement(G,{w:"500px",bg:"#fff",p:"4"},e.createElement(O,{initialValues:m,onSubmit:(n,{setFieldError:d})=>{const b=n,{photos:s}=b,i=T(b,["photos"]),u=new FormData;for(let p in i)u.append(p,n[p]);if(s)for(let p of s)u.append("photo[]",p);const w=new URLSearchParams(t);o(ee(u)).unwrap().then(()=>{o(ae(w)),c({title:"New car edded successfully",position:"top",status:"success",duration:1500})}).catch(p=>{let v="";te(p)&&p.status===422&&(v="Fill in required fields",d("manufacturer","required")),c({title:v,position:"top",variant:"solid",status:"error",duration:2e3})})}},({values:n,setFieldValue:d})=>e.createElement(R,null,e.createElement(N,null,"Add Car"),e.createElement(l,{name:"manufacturer",placeholder:"Manufacturer"}),e.createElement(l,{name:"modelGroup",placeholder:"Model group"}),e.createElement(l,{name:"modelDetail",placeholder:"Model detail"}),e.createElement(l,{name:"bodyStyle",placeholder:"Body style"}),e.createElement(l,{name:"damage",placeholder:"damage"}),e.createElement(l,{name:"location",placeholder:"location"}),e.createElement(l,{name:"odometer",placeholder:"odometer",type:"number",value:n.odometer||""}),e.createElement(l,{name:"cylinders",placeholder:"cylinders",type:"number",value:n.cylinders||""}),e.createElement(l,{name:"drive",placeholder:"drive"}),e.createElement(l,{name:"engine",type:"number",value:n.engine||"",placeholder:"Engine capacity"}),e.createElement(E,{name:"transmission"},({field:s})=>e.createElement(S,{pt:"2"},e.createElement(q,h(f({},s),{bg:"#EAEAEB",opacity:"0.5",placeholder:"Transmission"}),a.map(i=>e.createElement("option",{key:i,value:i},i))))),e.createElement(l,{name:"year",placeholder:"Year",type:"number",value:n.year||""}),e.createElement(l,{name:"fuelType",placeholder:"Fuel type"}),e.createElement(l,{name:"color",placeholder:"Color"}),e.createElement(l,{name:"price",placeholder:"Price",type:"number",value:n.price||""}),e.createElement(E,{name:"hasKeys"},({field:s})=>e.createElement(S,{pt:"2"},e.createElement(re,null,e.createElement(z,f({colorScheme:"autoOrange",name:"hasKeys",value:"YES"},s)),e.createElement(M,null,"Has keys")))),e.createElement(E,{name:"description"},({field:s})=>e.createElement(se,h(f({mt:"2"},s),{placeholder:"Write Description",size:"sm",as:H,maxRows:10}))),e.createElement(E,{name:"photos"},({field:s})=>e.createElement("input",h(f({type:"file"},s),{multiple:!0,value:void 0,onChange:i=>{const u=i.currentTarget.files;d("photos",u)}}))),e.createElement(V,{type:"submit",mt:"4",mb:"4",isLoading:r},"Add")))))))};export{xe as AdminPage,xe as default};
