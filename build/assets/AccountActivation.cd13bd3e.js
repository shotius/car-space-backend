import{r as s,ad as R,u as w,R as t,h as u,V as y,B as I,_ as i}from"./vendor.816f6e72.js";import{u as b,a as f,b as D,s as k,H as p,R as C,T}from"./index.cee6b4cf.js";const j=({})=>{const[o,r]=s.exports.useState(null),[h,c]=s.exports.useState("Failed To Activate"),[d,a]=s.exports.useState(!1),{hash:m}=R(),S=b(),n=f(e=>e.userInfoSlice.role),l=f(e=>e.userInfoSlice.isAuthenticated),E=w(),[v,x]=s.exports.useState(5),[A,g]=s.exports.useState(!1);return s.exports.useEffect(()=>{l&&(g(!0),setTimeout(()=>E.replace(`/${n}/dashboard`),5e3),setInterval(()=>x(e=>e-1),1e3))},[l]),s.exports.useEffect(()=>{a(!0),D.verifyAccount(m).then(({results:e})=>{r(!0),c(""),a(!1),localStorage.setItem("USER_ROLE",e.role),S(k(e))}).catch(e=>{r(!1),a(!1),c(e.response.data.error)})},[]),d?t.createElement(u,{h:"90vh"},t.createElement(p,null,"Activating...")):t.createElement(u,{h:"90vh"},t.createElement(y,null,t.createElement(p,{color:o?"autoOrange.500":"red",fontSize:["24px","32px",null,"48px"]},o?"Account activated successfully!":h||"Failed to Activate"),t.createElement(I,{variant:"link",color:"black"},n?t.createElement(i,{to:`/${C.USER}/dashboard`},"go to profile"):t.createElement(i,{to:"/home"},"go to home")),A&&t.createElement(T,null,"redirecting in ",t.createElement("span",{style:{color:"red"}},v)," ","seconds")))};export{j as AccountActivation,j as default};