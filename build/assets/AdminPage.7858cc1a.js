import{k as c,R as e,L as i}from"./vendor.3ffe2d28.js";import{G as l,ac as d,ad as m}from"./index.52b447cf.js";import{B as t}from"./button.2f54e695.js";import"./react-redux.0820abdd.js";import"./axios.7b768d2b.js";import"./focus-visible.f3cbf9e5.js";const j=()=>{const o=l(),s=c(),a=()=>{o(d()).then(()=>s.push("/"))},n=()=>{m.get("/api/me").then(r=>console.log(r))};return e.createElement("div",null,e.createElement(t,{onClick:a},"logout"),e.createElement(t,{onClick:n},"Me"),e.createElement(i,{to:"/dealer/dashboard"},"dealer"),e.createElement("h1",{style:{textAlign:"center"}},"Admin page"))};export{j as AdminPage,j as default};
