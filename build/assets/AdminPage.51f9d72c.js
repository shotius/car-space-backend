import{u as r,R as e,L as l}from"./vendor.fc5c11f9.js";import{u as i,l as m,aq as p}from"./index.bd2e0c23.js";import{B as t}from"./button.ba62f39a.js";import"./prop-types.d6ec705b.js";import"./react-redux.ff867a7c.js";import"./axios.7b768d2b.js";import"./focus-visible.9643870d.js";const E=()=>{const a=i(),o=r(),s=()=>{a(m()).then(()=>o.push("/"))},n=()=>{p.get("/api/me").then(c=>console.log(c))};return e.createElement("div",null,e.createElement(t,{onClick:s},"logout"),e.createElement(t,{onClick:n},"Me"),e.createElement(t,{onClick:()=>o.push("/home")},"Home"),e.createElement(t,{onClick:()=>o.push("/catalog")},"catalog"),e.createElement(l,{to:"/dealer/dashboard"},"dealer"),e.createElement("h1",{style:{textAlign:"center"}},"Admin page"))};export{E as AdminPage,E as default};
