import{r,R as e}from"./vendor.fc5c11f9.js";import{P as x,C as b,V as a,W as h,E as g,J as j}from"./PublicLayout.104a1ebc.js";import{D as O}from"./DropdownIcon.d5661251.js";import{Q as p,B as S}from"./index.1f1e2cec.js";import{I as m}from"./input-element.d811ae95.js";import{B as v}from"./button.c833a074.js";import"./prop-types.d6ec705b.js";import"./formik.72969a9f.js";import"./react-redux.ff867a7c.js";import"./axios.7b768d2b.js";import"./focus-visible.9643870d.js";const L=()=>{const[l,s]=r.exports.useState(!1),[i,c]=r.exports.useState([]),[f,n]=r.exports.useState(),[o,u]=r.exports.useState([]),d=["Option1","Option2","Option3","Option4","Option5","Option6","Option7","Option8","Option9","Option10"];r.exports.useEffect(()=>{n(o.join(", "))},[o.length]);const E=t=>{s(!0),u(o.concat(t))};return e.createElement(x,null,e.createElement(b,null,e.createElement(p,null,"Services"),e.createElement(a,{pt:"8"},e.createElement(S,{position:"absolute",top:"0",bottom:"0",left:"0",right:"0",bg:"rgba(0, 0, 0, 0)",display:l?"block":"none",onClick:()=>s(!1)}),e.createElement(a,{w:"400px",position:"relative"},e.createElement(h,{onFocus:()=>{s(!0),o.length&&c(o),n("")},onBlur:()=>{n("")}},e.createElement(g,{placeholder:i.length?i.join(", "):"Brands",value:f,onChange:t=>n(t.currentTarget.value),isTruncated:!0,_focus:{bg:"white"},pr:"32px"}),o.length?e.createElement(m,{children:e.createElement(j,null),cursor:"pointer",onClick:t=>{t.stopPropagation&&t.stopPropagation(),u([]),n(""),c([]),s(!1)}}):e.createElement(m,{children:e.createElement(O,{transform:l?"rotate(180deg)":"",transition:"all .2s"}),pointerEvents:"painted"})),e.createElement(a,{w:"full",position:"absolute",top:"40px",h:l?"300px":"0px",transition:"all .3s",bg:"white",boxShadow:"0px 3px 10px #00000029",borderRadius:"8px",p:l?"8px 0":"0"},e.createElement(a,{h:"full",w:"full",overflow:"auto"},d.map(t=>e.createElement(v,{onClick:()=>E(t)},e.createElement(p,null,t)))))),e.createElement(a,null,e.createElement(p,null,"Content")))))};export{L as ServicesPage,L as default};
