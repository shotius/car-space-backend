import{r as s,i as g,u as j,R as t,L as l}from"./vendor.576a7237.js";import{u as y,a as u,b as R,s as w,C as p,H as m,V as I,B as k,R as C,T as D}from"./index.8f5de986.js";import"./prop-types.d6ec705b.js";import"./react-redux.0b249e8a.js";import"./axios.7b768d2b.js";import"./formik.30c45d87.js";import"./yup.8a20e72b.js";import"./focus-visible.c4e3ef79.js";const $=({})=>{const[a,r]=s.exports.useState(null),[f,c]=s.exports.useState("Failed To Activate"),[d,o]=s.exports.useState(!1),{hash:h}=g(),S=y(),n=u(e=>e.userInfoSlice.role),i=u(e=>e.userInfoSlice.isAuthenticated),E=j(),[v,x]=s.exports.useState(5),[A,b]=s.exports.useState(!1);return s.exports.useEffect(()=>{i&&(b(!0),setTimeout(()=>E.replace(`/${n}/dashboard`),5e3),setInterval(()=>x(e=>e-1),1e3))},[i]),s.exports.useEffect(()=>{o(!0),R.verifyAccount(h).then(({results:e})=>{r(!0),c(""),o(!1),localStorage.setItem("USER_ROLE",e.role),S(w(e))}).catch(e=>{r(!1),o(!1),c(e.response.data.error)})},[]),d?t.createElement(p,{h:"90vh"},t.createElement(m,null,"Activating...")):t.createElement(p,{h:"90vh"},t.createElement(I,null,t.createElement(m,{color:a?"autoOrange.500":"red",fontSize:["24px","32px",null,"48px"]},a?"Account activated successfully!":f||"Failed to Activate"),t.createElement(k,{variant:"link",color:"black"},n?t.createElement(l,{to:`/${C.USER}/dashboard`},"go to profile"):t.createElement(l,{to:"/home"},"go to home")),A&&t.createElement(D,null,"redirecting in ",t.createElement("span",{style:{color:"red"}},v)," ","seconds")))};export{$ as AccountActivation,$ as default};
