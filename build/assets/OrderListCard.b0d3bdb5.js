import{J as f,j as e,e as l,V as u,o as i,H as r,as as o,w as p,bp as w,U as m,B as y,_ as b,D as g}from"./index.1849e885.js";import{T as a}from"./TextSecondary.d5e148f3.js";import{t as D}from"./toTrippleNumber.af3f6dfa.js";import{N as S}from"./NotSpecified.f65ed8ea.js";import{C as j}from"./Card.01ecd54f.js";const h=(t,c=".")=>{const s=new Date(t),n=s.getDate(),d=s.getMonth()+1;return`${s.getFullYear()}${c}${d<=9?"0"+d:d}${c}${n<=9?"0"+n:n}`},$=({order:t})=>{const{createdAt:c,deliveryAt:s}=t,{isOpen:n,onToggle:d}=f();return e(j,{w:"full",pb:"0",children:l(u,{w:"full",p:"2",children:[l(i,{w:"full",justify:"space-between",children:[e(a,{children:"Order Id"}),e(r,{isTruncated:!0,children:t.id})]}),e(o,{w:"full"}),l(i,{w:"full",justify:"space-between",children:[e(a,{children:"Name"}),e(r,{children:t.carName})]}),e(o,{w:"full"}),l(i,{w:"full",justify:"space-between",children:[e(a,{children:"Created"}),e(r,{children:c?h(c.toString()):e(S,{})})]}),e(o,{w:"full"}),l(i,{w:"full",justify:"space-between",children:[e(a,{children:"Dealivery"}),e(r,{children:s&&h(s.toString())})]}),e(o,{w:"full"}),e(p,{w:"full",children:e(w,{in:n,children:l(u,{divider:e(m,{}),children:[l(i,{w:"full",justify:"space-between",children:[e(a,{children:"Location"}),e(r,{children:t.location})]}),l(i,{w:"full",justify:"space-between",children:[e(a,{children:"Total Price"}),l(r,{children:[D(t.price)," USD"]})]}),l(i,{w:"full",justify:"space-between",children:[e(a,{children:"Status"}),e(r,{children:t.status})]})]})})}),e(o,{w:"full",display:n?"block":"none"}),e(i,{children:l(y,{variant:"ghost",bg:"transparent",onClick:d,children:[n?"See less":"See more",e(b,{as:g,transform:n?"rotate(-180deg)":"rotate(0deg)",mb:"2px",ml:"2",transition:"all .2s"})]})})]})})};export{$ as O,h as d};
