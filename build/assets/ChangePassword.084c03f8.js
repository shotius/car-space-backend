import{a as P,c as k,u as x,r as T,f as C,g as v,h as F,j as s,F as S,i as A,k as R,l as D,m as V,e as c,V as j,n as u,o as q,T as E,p as h,q as b,t as B,v as G,C as H}from"./index.95644e87.js";import{C as z}from"./Card.0790e8ae.js";const I=({})=>{const t=P(),n=k(),{token:w}=x(),[i,d]=T.exports.useState(""),o=C(),m=v().shape({password:F().min(4,"Too Short").max(50,"Too long").required("Required")});return s(S,{validationSchema:m,initialValues:{password:"",retypePassword:""},onSubmit:(e,{setErrors:g,setSubmitting:r,resetForm:f})=>{const{password:l,retypePassword:y}=e;l!==y?(g({password:"passwords does not patch",retypePassword:"passwords does not match"}),r(!1)):t(A({token:w,password:l})).unwrap().then(()=>{o({title:"Password changed successfully",position:"top",status:"success"}),n.push("/"),r(!1),f()}).catch(a=>{r(!1),R(a)&&a.error==="Token is outdated"?(d("Token you provided is oudated "),o({title:"Token you provided is oudated ",position:"top",status:"error"})):D(a)?a.errors.map(p=>{p.msg==="Token is invalid"&&d("Token is invalid"),o({title:p.msg,status:"error",position:"top"})}):o({title:"Something went wrong ;(, try later",position:"top",status:"error"})})},children:({isSubmitting:e})=>s(V,{children:c(j,{spacing:4,align:"flex-start",children:[s(u,{name:"password",type:"password",label:"Password",placeholder:"Password"}),s(u,{name:"retypePassword",type:"password",label:"Retype Password",placeholder:"Retype Password",w:"full"}),i&&c(q,{children:[s(E,{color:"red",children:i}),s(h,{onClick:()=>t(b()),color:"#427AD6",children:"Go take one"})]}),s(B,{isLoading:e,type:"submit",children:"Change password"}),s(h,{color:"#427AD6",fontSize:"14px",onClick:()=>n.push("/"),children:"Go on home page"})]})})})},O=({})=>s(G,{children:s(H,{h:"70vh",children:s(z,{p:["32px",null,"42px 64px"],w:"full",maxW:"450px",children:s(I,{})})})});export{O as ChangePasswordPage,O as default};
