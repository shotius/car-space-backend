import{u as g,ad as y,r as P,v as x,J as k,K as C,R as e,w as T,x as v,V as R,z as F,h as S}from"./vendor.816f6e72.js";import{u as A,c as b,i as D,d as V,F as c,T as j,e as u,o as B,B as q,C as z}from"./index.cee6b4cf.js";import{C as G}from"./Card.b167faf4.js";const H=({})=>{const r=A(),n=g(),{token:m}=y(),[l,i]=P.exports.useState(""),s=x(),w=k().shape({password:C().min(4,"Too Short").max(50,"Too long").required("Required")});return e.createElement(T,{validationSchema:w,initialValues:{password:"",retypePassword:""},onSubmit:(t,{setErrors:h,setSubmitting:o,resetForm:f})=>{const{password:p,retypePassword:E}=t;p!==E?(h({password:"passwords does not patch",retypePassword:"passwords does not match"}),o(!1)):r(b({token:m,password:p})).unwrap().then(()=>{s({title:"Password changed successfully",position:"top",status:"success"}),n.push("/"),o(!1),f()}).catch(a=>{o(!1),D(a)&&a.error==="Token is outdated"?(i("Token you provided is oudated "),s({title:"Token you provided is oudated ",position:"top",status:"error"})):V(a)?a.errors.map(d=>{d.msg==="Token is invalid"&&i("Token is invalid"),s({title:d.msg,status:"error",position:"top"})}):s({title:"Something went wrong ;(, try later",position:"top",status:"error"})})}},({isSubmitting:t})=>e.createElement(v,null,e.createElement(R,{spacing:4,align:"flex-start"},e.createElement(c,{name:"password",type:"password",label:"Password",placeholder:"Password"}),e.createElement(c,{name:"retypePassword",type:"password",label:"Retype Password",placeholder:"Retype Password",w:"full"}),l&&e.createElement(F,null,e.createElement(j,{color:"red"},l),e.createElement(u,{onClick:()=>r(B()),color:"#427AD6"},"Go take one")),e.createElement(q,{isLoading:t,type:"submit"},"Change password"),e.createElement(u,{color:"#427AD6",fontSize:"14px",onClick:()=>n.push("/")},"Go on home page"))))},L=({})=>e.createElement(z,null,e.createElement(S,{h:"70vh"},e.createElement(G,{p:["32px",null,"42px 64px"],w:"full",maxW:"450px"},e.createElement(H,null))));export{L as ChangePasswordPage,L as default};