import{u as g,ae as y,r as P,v as x,D as k,E as C,R as e,w as T,x as v,V as R,z as F,h as S}from"./vendor.e3897af0.js";import{u as A,c as D,i as V,d as j,F as c,T as B,e as u,o as b,B as q,C as z}from"./index.7544a19d.js";import{C as G}from"./Card.31eca356.js";const H=({})=>{const r=A(),n=g(),{token:m}=y(),[l,i]=P.exports.useState(""),s=x(),w=k().shape({password:C().min(4,"Too Short").max(50,"Too long").required("Required")});return e.createElement(T,{validationSchema:w,initialValues:{password:"",retypePassword:""},onSubmit:(t,{setErrors:h,setSubmitting:o,resetForm:E})=>{const{password:p,retypePassword:f}=t;p!==f?(h({password:"passwords does not patch",retypePassword:"passwords does not match"}),o(!1)):r(D({token:m,password:p})).unwrap().then(()=>{s({title:"Password changed successfully",position:"top",status:"success"}),n.push("/"),o(!1),E()}).catch(a=>{o(!1),V(a)&&a.error==="Token is outdated"?(i("Token you provided is oudated "),s({title:"Token you provided is oudated ",position:"top",status:"error"})):j(a)?a.errors.map(d=>{d.msg==="Token is invalid"&&i("Token is invalid"),s({title:d.msg,status:"error",position:"top"})}):s({title:"Something went wrong ;(, try later",position:"top",status:"error"})})}},({isSubmitting:t})=>e.createElement(v,null,e.createElement(R,{spacing:4,align:"flex-start"},e.createElement(c,{name:"password",type:"password",label:"Password",placeholder:"Password"}),e.createElement(c,{name:"retypePassword",type:"password",label:"Retype Password",placeholder:"Retype Password",w:"full"}),l&&e.createElement(F,null,e.createElement(B,{color:"red"},l),e.createElement(u,{onClick:()=>r(b()),color:"#427AD6"},"Go take one")),e.createElement(q,{isLoading:t,type:"submit"},"Change password"),e.createElement(u,{color:"#427AD6",fontSize:"14px",onClick:()=>n.push("/")},"Go on home page"))))},O=({})=>e.createElement(z,null,e.createElement(S,{h:"70vh"},e.createElement(G,{p:["32px",null,"42px 64px"],w:"full",maxW:"450px"},e.createElement(H,null))));export{O as ChangePasswordPage,O as default};
