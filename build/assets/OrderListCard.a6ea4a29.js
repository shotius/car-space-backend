import{R as e}from"./vendor.576a7237.js";import{v as E,V as u,f as a,H as n,af as o,k as f,bb as d,S as p,B as w,K as b,D as y}from"./index.3b7ee551.js";import{T as r,t as S}from"./TextSecondary.79a6ed72.js";import{N as g}from"./NotSpecified.3eb7846a.js";import{C as j}from"./Card.2f059099.js";const i=(t,s=".")=>{const c=new Date(t),l=c.getDate(),m=c.getMonth()+1;return`${c.getFullYear()}${s}${m<=9?"0"+m:m}${s}${l<=9?"0"+l:l}`},N=({order:t})=>{const{createdAt:s,deliveryAt:c}=t,{isOpen:l,onToggle:m}=E();return e.createElement(j,{w:"full",pb:"0"},e.createElement(u,{w:"full",p:"2"},e.createElement(a,{w:"full",justify:"space-between"},e.createElement(r,null,"Order Id"),e.createElement(n,{isTruncated:!0},t.id)),e.createElement(o,{w:"full"}),e.createElement(a,{w:"full",justify:"space-between"},e.createElement(r,null,"Name"),e.createElement(n,null,t.carName)),e.createElement(o,{w:"full"}),e.createElement(a,{w:"full",justify:"space-between"},e.createElement(r,null,"Created"),e.createElement(n,null,s?i(s.toString()):e.createElement(g,null))),e.createElement(o,{w:"full"}),e.createElement(a,{w:"full",justify:"space-between"},e.createElement(r,null,"Dealivery"),e.createElement(n,null,c&&i(c.toString()))),e.createElement(o,{w:"full"}),e.createElement(f,{w:"full"},e.createElement(d,{in:l},e.createElement(u,{divider:e.createElement(p,null)},e.createElement(a,{w:"full",justify:"space-between"},e.createElement(r,null,"Location"),e.createElement(n,null,t.location)),e.createElement(a,{w:"full",justify:"space-between"},e.createElement(r,null,"Total Price"),e.createElement(n,null,S(t.price)," USD")),e.createElement(a,{w:"full",justify:"space-between"},e.createElement(r,null,"Status"),e.createElement(n,null,t.status))))),e.createElement(o,{w:"full",display:l?"block":"none"}),e.createElement(a,null,e.createElement(w,{variant:"ghost",bg:"transparent",onClick:m},l?"See less":"See more",e.createElement(b,{as:y,transform:l?"rotate(-180deg)":"rotate(0deg)",mb:"2px",ml:"2",transition:"all .2s"})))))};export{N as O,i as d};
