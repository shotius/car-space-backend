import{r as s}from"./vendor.fc5c11f9.js";import{m}from"./PublicLayout.8834c789.js";import{s as p,t as d,v as h}from"./index.f8c14498.js";function n(){return n=Object.assign||function(t){for(var a=1;a<arguments.length;a++){var e=arguments[a];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},n.apply(this,arguments)}function v(t,a){if(t==null)return{};var e={},r=Object.keys(t),o,i;for(i=0;i<r.length;i++)o=r[i],!(a.indexOf(o)>=0)&&(e[o]=t[o]);return e}var y=p((t,a)=>{var{ratio:e=4/3,children:r,className:o}=t,i=v(t,["ratio","children","className"]),c=s.exports.Children.only(r),l=d("chakra-aspect-ratio",o);return s.exports.createElement(h.div,n({ref:a,position:"relative",className:l,_before:{height:0,content:'""',display:"block",paddingBottom:m(e,f=>1/f*100+"%")},__css:{"& > *:not(style)":{overflow:"hidden",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},"& > img, & > video":{objectFit:"cover"}}},i),c)});export{y as A};
