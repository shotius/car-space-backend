import{J as h,j as e,e as l,V as o,o as i,H as r,as as a,w as p,bp as w,U as m,B as b,_ as y,D as S}from"./index.5a316967.js";import{T as t}from"./TextSecondary.3b524e4b.js";import{d as u}from"./dateToYMD.5f347133.js";import{t as j}from"./toTrippleNumber.af3f6dfa.js";import{N as D}from"./NotSpecified.ed2c9df6.js";import{C as g}from"./Card.c49580d4.js";const O=({order:n})=>{const{createdAt:c,deliveryAt:d}=n,{isOpen:s,onToggle:f}=h();return e(g,{w:"full",pb:"0",children:l(o,{w:"full",p:"2",children:[l(i,{w:"full",justify:"space-between",children:[e(t,{children:"Order Id"}),e(r,{isTruncated:!0,children:n.id})]}),e(a,{w:"full"}),l(i,{w:"full",justify:"space-between",children:[e(t,{children:"Name"}),e(r,{children:n.carName})]}),e(a,{w:"full"}),l(i,{w:"full",justify:"space-between",children:[e(t,{children:"Created"}),e(r,{children:c?u(c.toString()):e(D,{})})]}),e(a,{w:"full"}),l(i,{w:"full",justify:"space-between",children:[e(t,{children:"Dealivery"}),e(r,{children:d&&u(d.toString())})]}),e(a,{w:"full"}),e(p,{w:"full",children:e(w,{in:s,children:l(o,{divider:e(m,{}),children:[l(i,{w:"full",justify:"space-between",children:[e(t,{children:"Location"}),e(r,{children:n.location})]}),l(i,{w:"full",justify:"space-between",children:[e(t,{children:"Total Price"}),l(r,{children:[j(n.price)," USD"]})]}),l(i,{w:"full",justify:"space-between",children:[e(t,{children:"Status"}),e(r,{children:n.status})]})]})})}),e(a,{w:"full",display:s?"block":"none"}),e(i,{children:l(b,{variant:"ghost",bg:"transparent",onClick:f,children:[s?"See less":"See more",e(y,{as:S,transform:s?"rotate(-180deg)":"rotate(0deg)",mb:"2px",ml:"2",transition:"all .2s"})]})})]})})};export{O};