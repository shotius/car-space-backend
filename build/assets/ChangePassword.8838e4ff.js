import{u as E,i as g,r as x,R as e}from"./vendor.576a7237.js";import{u as P,a as k,c as C,i as T,b,V as j,F as c,H as v,T as F,d as m,o as R,B as S,C as A,e as D}from"./index.38124d94.js";import{C as V}from"./Card.7d4ae326.js";import{F as B,a as H}from"./formik.30c45d87.js";import{c as q,a as G}from"./yup.df40d5b6.js";import"./prop-types.d6ec705b.js";import"./react-redux.0b249e8a.js";import"./axios.7b768d2b.js";import"./focus-visible.c4e3ef79.js";const z=({})=>{const r=P(),n=E(),{token:u}=g(),[i,l]=x.exports.useState(""),s=k(),w=q().shape({password:G().min(4,"Too Short").max(50,"Too long").required("Required")});return e.createElement(B,{validationSchema:w,initialValues:{password:"",retypePassword:""},onSubmit:(t,{setErrors:h,setSubmitting:o,resetForm:f})=>{const{password:p,retypePassword:y}=t;p!==y?(h({password:"passwords does not patch",retypePassword:"passwords does not match"}),o(!1)):r(C({token:u,password:p})).unwrap().then(()=>{s({title:"Password changed successfully",position:"top",status:"success"}),n.push("/"),o(!1),f()}).catch(a=>{o(!1),T(a)&&a.error==="Token is outdated"?(l("Token you provided is oudated "),s({title:"Token you provided is oudated ",position:"top",status:"error"})):b(a)?a.errors.map(d=>{d.msg==="Token is invalid"&&l("Token is invalid"),s({title:d.msg,status:"error",position:"top"})}):s({title:"Something went wrong ;(, try later",position:"top",status:"error"})})}},({isSubmitting:t})=>e.createElement(H,null,e.createElement(j,{spacing:4,align:"flex-start"},e.createElement(c,{name:"password",type:"password",label:"Password",placeholder:"Password"}),e.createElement(c,{name:"retypePassword",type:"password",label:"Retype Password",placeholder:"Retype Password",w:"full"}),i&&e.createElement(v,null,e.createElement(F,{color:"red"},i),e.createElement(m,{onClick:()=>r(R()),color:"#427AD6"},"Go take one")),e.createElement(S,{isLoading:t,type:"submit"},"Change password"),e.createElement(m,{color:"#427AD6",fontSize:"14px",onClick:()=>n.push("/")},"Go on home page"))))},Q=({})=>e.createElement(A,null,e.createElement(D,{h:"70vh"},e.createElement(V,{p:["32px",null,"42px 64px"],w:"full",maxW:"450px"},e.createElement(z,null))));export{Q as ChangePasswordPage,Q as default};