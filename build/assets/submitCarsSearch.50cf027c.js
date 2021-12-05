var Je=Object.defineProperty,Xe=Object.defineProperties;var qe=Object.getOwnPropertyDescriptors;var Y=Object.getOwnPropertySymbols;var Ce=Object.prototype.hasOwnProperty,Se=Object.prototype.propertyIsEnumerable;var ye=(t,l,a)=>l in t?Je(t,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[l]=a,w=(t,l)=>{for(var a in l||(l={}))Ce.call(l,a)&&ye(t,a,l[a]);if(Y)for(var a of Y(l))Se.call(l,a)&&ye(t,a,l[a]);return t},L=(t,l)=>Xe(t,qe(l));var B=(t,l)=>{var a={};for(var r in t)Ce.call(t,r)&&l.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&Y)for(var r of Y(t))l.indexOf(r)<0&&Se.call(t,r)&&(a[r]=t[r]);return a};import{r as f,R as e,k as et}from"./vendor.506dd9e8.js";import{q as V,C as X,b as T,I as q,W as tt,Z as ee,a3 as Me,V as A,N as at,a as lt,T as U,_ as Pe,H as te,S as rt,a2 as nt,u as ot,D as we,d as Be,g as Oe,a4 as ve,f as ke,a5 as _e,B as Ae,j as Re,h as st}from"./PublicLayout.69ee19e4.js";import{a as ae,c as j,D as Ze,b as Ie}from"./DropdownIcon.d77763e6.js";import{B as Le}from"./button.c3901463.js";import{c as le,d as re,e as ne,f as oe,b as ct}from"./SelectWrapper.b6c0d3f2.js";import{c as it,f as se,a as Te,b as pt,d as F,e as v,aD as $,aI as ce,aJ as Fe,aE as H,B as Q,aB as We,aC as Ge,V as dt,aK as ft,al as mt,ak as je,aG as ut}from"./index.ce29a962.js";import{u as Et}from"./react-swipeable.5aa2e132.js";import{C as xt,S as ht}from"./Card.3a6b92ef.js";function N(){return N=Object.assign||function(t){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},N.apply(this,arguments)}function ie(t,l){if(t==null)return{};var a={},r=Object.keys(t),n,s;for(s=0;s<r.length;s++)n=r[s],!(l.indexOf(n)>=0)&&(a[n]=t[n]);return a}var gt=it("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),pe=se((t,l)=>{var a,r,{placement:n="left"}=t,s=ie(t,["placement"]),o=pt(),c=o.field,d=n==="left"?"insetStart":"insetEnd",p={[d]:"0",width:(a=c==null?void 0:c.height)!=null?a:c==null?void 0:c.h,height:(r=c==null?void 0:c.height)!=null?r:c==null?void 0:c.h,fontSize:c==null?void 0:c.fontSize};return f.exports.createElement(gt,N({ref:l,__css:p},s))});pe.id="InputElement";var He=se((t,l)=>{var{className:a}=t,r=ie(t,["className"]),n=Te("chakra-input__left-element",a);return f.exports.createElement(pe,N({ref:l,placement:"left",className:n},r))});He.id="InputLeftElement";var K=se((t,l)=>{var{className:a}=t,r=ie(t,["className"]),n=Te("chakra-input__right-element",a);return f.exports.createElement(pe,N({ref:l,placement:"right",className:n},r))});K.id="InputRightElement";const Zt=V({displayName:"ArrowNextIcon",viewBox:"0 0 24 24",path:e.createElement(e.Fragment,null,e.createElement("path",{id:"Path_457","data-name":"Path 457",d:"M0,0H24V24H0Z",fill:"transparent"}),e.createElement("path",{id:"Path_458","data-name":"Path 458",d:"M16.172,10.758,10.808,5.585l1.414-1.363L20,11.722l-7.778,7.5-1.414-1.363,5.364-5.172H4V10.758Z",transform:"translate(0 -0.223)"}))});function It(){const{search:t}=et();return f.exports.useMemo(()=>new URLSearchParams(t),[t])}const Lt=a=>{var r=a,{height:t}=r,l=B(r,["height"]);return e.createElement(X,{height:t},e.createElement(ae,w({orientation:"vertical"},l)))},Ne=V({displayName:"SearchIcon",viewBox:"0 0 27 27",path:e.createElement("path",{id:"SEARCH",d:"M31.184,29.539l-7.509-7.578a10.7,10.7,0,1,0-1.624,1.645l7.46,7.529a1.156,1.156,0,0,0,1.631.042A1.163,1.163,0,0,0,31.184,29.539ZM15.265,23.7a8.449,8.449,0,1,1,5.977-2.474A8.4,8.4,0,0,1,15.265,23.7Z",transform:"translate(-4.5 -4.493)"})}),Tt=f.exports.forwardRef((g,x)=>{var m=g,{h:t=["44px",null,"40px"],bg:l="autoOrange.500",fontSize:a=["16px",null],borderRadius:r="8px",w:n={xl:"144px","2xl":"155px"},maxW:s={xl:"144px","2xl":"155px"},variant:o="solid",color:c="#fff",fontWeight:d="light",isKeyboardActive:p}=m,C=B(m,["h","bg","fontSize","borderRadius","w","maxW","variant","color","fontWeight","isKeyboardActive"]);return e.createElement(Le,w({ref:x,variant:o,bg:l,h:t,w:n,color:c,fontWeight:d,maxW:s,fontSize:a,borderRadius:r,_hover:{bg:"autoOrange.500"},_active:{bg:"autoOrange.400"}},C),p?e.createElement(T,null,"Apply"):e.createElement(e.Fragment,null,e.createElement(q,{as:Ne,mr:["1",null,null,"1.5",null,"12px"],boxSize:["4",null,null,null,"4","5"],fill:"white"})," ","Search"))}),R=V({displayName:"BmwIcon",viewBox:"0 0 56 56",path:e.createElement(e.Fragment,null," ",e.createElement("path",{id:"Path_804","data-name":"Path 804",d:"M28,0A28,28,0,1,1,0,28,28.054,28.054,0,0,1,28,0Z"}),e.createElement("path",{id:"Path_805","data-name":"Path 805",d:"M46.835,35.813,40.228,30.13,42.7,27.253a5.41,5.41,0,0,1,1.411-1.236,2.313,2.313,0,0,1,1.334-.3,1.94,1.94,0,0,1,1.132.449,1.774,1.774,0,0,1,.566.953,2.435,2.435,0,0,1-.088,1.325,2.708,2.708,0,0,1,1.518-.554,1.932,1.932,0,0,1,1.324.487,2.263,2.263,0,0,1,.667.971,2.3,2.3,0,0,1,.132,1.091,3.346,3.346,0,0,1-.4,1.119,7.736,7.736,0,0,1-.953,1.332ZM43.878,31.5,45.3,29.845a5.681,5.681,0,0,0,.755-1.033,1.444,1.444,0,0,0,.171-.865,1.139,1.139,0,0,0-.408-.692,1.261,1.261,0,0,0-.735-.315,1.223,1.223,0,0,0-.793.228,6.675,6.675,0,0,0-1.1,1.088l-1.317,1.531Zm3.05,2.624,1.641-1.907a6.967,6.967,0,0,0,.563-.717,2.423,2.423,0,0,0,.322-.741,1.351,1.351,0,0,0-.033-.7,1.366,1.366,0,0,0-.426-.631,1.315,1.315,0,0,0-.832-.334,1.537,1.537,0,0,0-.908.281A5.819,5.819,0,0,0,46.182,30.4l-1.524,1.772ZM57.82,26.051V18.577h1.97l2.339,5.292c.216.493.375.861.472,1.107q.169-.407.527-1.2l2.366-5.2h1.761v7.474H65.994V19.795l-2.873,6.256H61.941l-2.859-6.362v6.362Zm17.873,4.364,4.573-6.2.624.77-3.1,3.941q-.478.614-.992,1.2c.737-.356,1.161-.56,1.279-.612l4.786-2.091.734.906-2.274,3.189a20.68,20.68,0,0,1-1.693,2.1c.423-.225.921-.471,1.489-.738l4.443-2.128.612.756-7.054,3.139-.587-.724,3.445-4.772q.432-.6.535-.729-.471.234-.815.384l-5.388,2.373Z",transform:"translate(-35.103 -16.21)",fill:"#fff"}),e.createElement("path",{id:"Path_806","data-name":"Path 806",d:"M238.211,221.948a16.294,16.294,0,0,1-16.263,16.263V221.948Z",transform:"translate(-193.671 -193.671)",fill:"#00acec"}),e.createElement("path",{id:"Path_807","data-name":"Path 807",d:"M238.211,106.212a16.294,16.294,0,0,0-16.263-16.263v16.263Z",transform:"translate(-193.671 -78.489)",fill:"#fff"}),e.createElement("path",{id:"Path_808","data-name":"Path 808",d:"M89.95,106.212a16.294,16.294,0,0,1,16.263-16.263v16.263Z",transform:"translate(-78.49 -78.489)",fill:"#00acec"}),e.createElement("path",{id:"Path_809","data-name":"Path 809",d:"M89.95,221.948a16.294,16.294,0,0,0,16.263,16.263V221.948Z",transform:"translate(-78.49 -193.671)",fill:"#fff"}))}),J=V({displayName:"MercedesIcon",viewBox:"0 0 61 61",path:e.createElement(e.Fragment,null,"  ",e.createElement("defs",null,e.createElement("linearGradient",{id:"linear-gradient",x1:"0.117",y1:"0.853",x2:"0.883",y2:"0.211",gradientUnits:"objectBoundingBox"},e.createElement("stop",{offset:"0",stopColor:"#fff"}),e.createElement("stop",{offset:"0.1",stopColor:"#e7e8e6"}),e.createElement("stop",{offset:"0.1",stopColor:"#cdd0d0"}),e.createElement("stop",{offset:"0.2",stopColor:"#b5bbbd"}),e.createElement("stop",{offset:"0.2",stopColor:"#a5acaf"}),e.createElement("stop",{offset:"0.3",stopColor:"#9ba3a7"}),e.createElement("stop",{offset:"0.3",stopColor:"#98a0a4"}),e.createElement("stop",{offset:"0.4",stopColor:"#828a8f"}),e.createElement("stop",{offset:"0.5",stopColor:"#667075"}),e.createElement("stop",{offset:"0.6",stopColor:"#535c63"}),e.createElement("stop",{offset:"0.7",stopColor:"#475158"}),e.createElement("stop",{offset:"0.8",stopColor:"#434d54"}),e.createElement("stop",{offset:"1",stopColor:"#475157"})),e.createElement("linearGradient",{id:"linear-gradient-2",x1:"0.117",y1:"0.856",x2:"0.882",y2:"0.213",gradientUnits:"objectBoundingBox"},e.createElement("stop",{offset:"0",stopColor:"#0b1f2a"}),e.createElement("stop",{offset:"0.2",stopColor:"#333f47"}),e.createElement("stop",{offset:"0.5",stopColor:"#777f84"}),e.createElement("stop",{offset:"0.5",stopColor:"#81898d"}),e.createElement("stop",{offset:"0.7",stopColor:"#b3b8b8"}),e.createElement("stop",{offset:"0.8",stopColor:"#d2d5d3"}),e.createElement("stop",{offset:"0.8",stopColor:"#dee0dd"}),e.createElement("stop",{offset:"1",stopColor:"#fbfbfb"})),e.createElement("linearGradient",{id:"linear-gradient-3",x1:"25.762",y1:"-2.515",x2:"26.104",y2:"-3.455",gradientUnits:"objectBoundingBox"},e.createElement("stop",{offset:"0",stopColor:"#e1e3e1"}),e.createElement("stop",{offset:"0.1",stopColor:"#c1c5c4"}),e.createElement("stop",{offset:"0.3",stopColor:"#9ba1a2"}),e.createElement("stop",{offset:"0.5",stopColor:"#7d8487"}),e.createElement("stop",{offset:"0.7",stopColor:"#687074",stopOpacity:"0"}),e.createElement("stop",{offset:"0.8",stopColor:"#5b6469",stopOpacity:"0"}),e.createElement("stop",{offset:"1",stopColor:"#576065",stopOpacity:"0"})),e.createElement("linearGradient",{id:"linear-gradient-4",x1:"0.25",y1:"0.969",x2:"0.75",y2:"0.103"}),e.createElement("linearGradient",{id:"linear-gradient-5",x1:"0.504",y1:"-0.43",x2:"0.434",y2:"-0.63",gradientUnits:"objectBoundingBox"},e.createElement("stop",{offset:"0",stopColor:"#27343c"}),e.createElement("stop",{offset:"1",stopColor:"#00111e",stopOpacity:"0"})),e.createElement("linearGradient",{id:"linear-gradient-6",x1:"1.71",y1:"1.199",x2:"1.043",y2:"1.365",gradientUnits:"objectBoundingBox"},e.createElement("stop",{offset:"0.1",stopColor:"#02131f"}),e.createElement("stop",{offset:"0.9",stopColor:"#02131f",stopOpacity:"0"})),e.createElement("linearGradient",{id:"linear-gradient-7",x1:"1.003",y1:"-0.212",x2:"0.833",y2:"-0.297",gradientUnits:"objectBoundingBox"},e.createElement("stop",{offset:"0.2",stopColor:"#02131f",stopOpacity:"0.8"}),e.createElement("stop",{offset:"0.9",stopColor:"#02131f",stopOpacity:"0"})),e.createElement("linearGradient",{id:"linear-gradient-8",x1:"0.531",y1:"-0.649",x2:"0.506",y2:"-0.54",gradientUnits:"objectBoundingBox"},e.createElement("stop",{offset:"0",stopColor:"#02131f"}),e.createElement("stop",{offset:"0.1",stopColor:"#02131f"}),e.createElement("stop",{offset:"1",stopColor:"#02131f",stopOpacity:"0"})),e.createElement("linearGradient",{id:"linear-gradient-9",x1:"0.788",y1:"1.62",x2:"0.064",y2:"1.606",gradientUnits:"objectBoundingBox"},e.createElement("stop",{offset:"0.3",stopColor:"#02131f"}),e.createElement("stop",{offset:"0.8",stopColor:"#02131f",stopOpacity:"0"})),e.createElement("linearGradient",{id:"linear-gradient-10",x1:"0.81",y1:"1.622",x2:"0.321",y2:"1.611",gradientUnits:"objectBoundingBox"},e.createElement("stop",{offset:"0.4",stopColor:"#27343c"}),e.createElement("stop",{offset:"1",stopColor:"#3b474e",stopOpacity:"0"})),e.createElement("linearGradient",{id:"linear-gradient-11",x1:"-0.048",y1:"0.327",x2:"1.204",y2:"-0.073",gradientUnits:"objectBoundingBox"},e.createElement("stop",{offset:"0",stopColor:"#24303a",stopOpacity:"0"}),e.createElement("stop",{offset:"0",stopColor:"#25323b",stopOpacity:"0"}),e.createElement("stop",{offset:"0.1",stopColor:"#27343c"})),e.createElement("linearGradient",{id:"linear-gradient-12",x1:"0.5",y1:"-0.835",x2:"0.5",y2:"0.177",gradientUnits:"objectBoundingBox"},e.createElement("stop",{offset:"0.3",stopColor:"#a5abaf"}),e.createElement("stop",{offset:"1",stopColor:"#a5abaf",stopOpacity:"0"})),e.createElement("linearGradient",{id:"linear-gradient-13",x1:"0.5",y1:"1.007",x2:"0.5",y2:"0.007",gradientUnits:"objectBoundingBox"},e.createElement("stop",{offset:"0",stopColor:"#dee0dd"}),e.createElement("stop",{offset:"0",stopColor:"#c5c9c7"}),e.createElement("stop",{offset:"0",stopColor:"#9ea4a5"}),e.createElement("stop",{offset:"0",stopColor:"#82898c"}),e.createElement("stop",{offset:"0",stopColor:"#71797d"}),e.createElement("stop",{offset:"0",stopColor:"#6b7378"}),e.createElement("stop",{offset:"0.2",stopColor:"#333f47"}),e.createElement("stop",{offset:"0.5",stopColor:"#27343c"}),e.createElement("stop",{offset:"0.8",stopColor:"#333f47"}),e.createElement("stop",{offset:"1",stopColor:"#434d54"})),e.createElement("linearGradient",{id:"linear-gradient-14",x1:"0.845",y1:"1.34",x2:"0.333",y2:"0.856",gradientUnits:"objectBoundingBox"},e.createElement("stop",{offset:"0.7",stopColor:"#27343c"}),e.createElement("stop",{offset:"0.7",stopColor:"#2b373f"}),e.createElement("stop",{offset:"0.7",stopColor:"#36424a"}),e.createElement("stop",{offset:"0.7",stopColor:"#49545b"}),e.createElement("stop",{offset:"0.8",stopColor:"#646d73",stopOpacity:"0"}),e.createElement("stop",{offset:"0.8",stopColor:"#868d92",stopOpacity:"0"}),e.createElement("stop",{offset:"0.8",stopColor:"#b0b5b8",stopOpacity:"0"}),e.createElement("stop",{offset:"0.8",stopColor:"#e1e3e4",stopOpacity:"0"}),e.createElement("stop",{offset:"0.8",stopColor:"#fff",stopOpacity:"0"}))),e.createElement("path",{id:"outer_24_",d:"M60.35,30.525A29.825,29.825,0,1,1,30.525.7,29.808,29.808,0,0,1,60.35,30.525ZM30.525,2.51A28.014,28.014,0,1,0,58.539,30.525,27.938,27.938,0,0,0,30.525,2.51Z",transform:"translate(-0.025 -0.025)",fill:"url(#linear-gradient)"}),e.createElement("path",{id:"Path_109","data-name":"Path 109",d:"M30.592,2.6A27.992,27.992,0,1,0,58.585,30.592,27.916,27.916,0,0,0,30.592,2.6Zm0,54.176A26.183,26.183,0,1,1,56.776,30.592,26.168,26.168,0,0,1,30.592,56.776Z",transform:"translate(-0.092 -0.092)",fill:"url(#linear-gradient-2)"}),e.createElement("path",{id:"Path_110","data-name":"Path 110",d:"M30.5,60.333A29.833,29.833,0,1,0,.667,30.5,29.816,29.816,0,0,0,30.5,60.333ZM30.5,0A30.5,30.5,0,1,1,0,30.5,30.59,30.59,0,0,1,30.5,0Z",opacity:"0.4",fill:"url(#linear-gradient-3)"}),e.createElement("path",{id:"Path_111","data-name":"Path 111",d:"M2.2,30.673A28.378,28.378,0,1,1,30.578,58.956,28.469,28.469,0,0,1,2.2,30.673Zm8.856-19.617a27.589,27.589,0,0,0-.1,39.139A28.043,28.043,0,0,0,30.578,58.29,27.636,27.636,0,0,0,58.194,30.673,28.043,28.043,0,0,0,50.1,11.056a27.362,27.362,0,0,0-39.044,0Z",transform:"translate(-0.078 -0.078)",fill:"#fff"}),e.createElement("path",{id:"Path_112","data-name":"Path 112",d:"M30.656,56.912A26.234,26.234,0,0,1,12.106,12.106a26.234,26.234,0,1,1,37.1,37.1A26.048,26.048,0,0,1,30.656,56.912Zm0-.761a25.4,25.4,0,1,0-17.98-43.38A24.733,24.733,0,0,0,5.161,30.656a25.5,25.5,0,0,0,25.5,25.5Z",transform:"translate(-0.156 -0.156)",opacity:"0.4",fill:"url(#linear-gradient-4)"}),e.createElement("path",{id:"Path_113","data-name":"Path 113",d:"M53.837,43.53c-.475-.386-18.8-15.143-18.8-15.143L30.758,3.6a1.63,1.63,0,0,0-.855.772L26.864,28.484,7.965,43.241s-.38.482-.57.772a1.907,1.907,0,0,0-.095.772l23.363-9.741,23.363,9.741a1.394,1.394,0,0,0-.19-1.254Z",transform:"translate(-0.259 -0.128)",fill:"#fff"}),e.createElement("path",{id:"Path_114","data-name":"Path 114",d:"M32.193,32.795,32,37.232l21.8,8.777a1.737,1.737,0,0,0,1.929-.193L32.482,32.7A.185.185,0,0,0,32.193,32.795Z",transform:"translate(-1.864 -1.635)",fill:"#565f64"}),e.createElement("path",{id:"Path_115","data-name":"Path 115",d:"M32.2,32.795a23.038,23.038,0,0,0,2.7,3.762,22.277,22.277,0,0,0,4.726,3.762L53.8,46.009a1.737,1.737,0,0,0,1.929-.193L32.489,32.7A.185.185,0,0,0,32.2,32.795Z",transform:"translate(-1.871 -1.635)",fill:"url(#linear-gradient-5)"}),e.createElement("path",{id:"Path_116","data-name":"Path 116",d:"M55.662,44.85c0-.1-.1-.193-.193-.386L35.6,29.9l-2.7,1.736s.193.1.289,0a2.414,2.414,0,0,1,1.447,0c.482.193,21.026,13.31,21.026,13.214h0Z",transform:"translate(-1.896 -1.511)",fill:"rgba(164,170,174,0.6)"}),e.createElement("path",{id:"Path_117","data-name":"Path 117",d:"M55.086,43.96,36.568,29.3l-.868.579,19.869,14.66A2.557,2.557,0,0,0,55.086,43.96Z",transform:"translate(-1.995 -1.483)",fill:"#333e46"}),e.createElement("path",{id:"Path_118","data-name":"Path 118",d:"M32.479,30.32l-.1.1s0,.193.193.1c.1-.1,2.894-1.543,3.858-2.122L33.057,5.243A1.68,1.68,0,0,0,31.9,3.7l.386,26.813.193-.193Z",transform:"translate(-1.524 -0.131)",fill:"#565f64"}),e.createElement("path",{id:"Path_119","data-name":"Path 119",d:"M29.969,5.261V6.515L27.847,27.83a.877.877,0,0,0,.386.772l1.254.965.868-23.534.1-1.833a1.568,1.568,0,0,0-.482,1.061ZM28.812,29.952l-1.157-.964L8.075,43.166s-.579.386-.675.772l.675-.386L28.619,30.627c.386-.193.482-.386.193-.675Z",transform:"translate(-0.263 -0.149)",fill:"rgba(164,170,174,0.6)"}),e.createElement("path",{id:"Path_120","data-name":"Path 120",d:"M30.834,32.795c0-.1-.1-.193-.193-.1L7.3,45.912a1.939,1.939,0,0,0,1.929.193l21.8-8.777Z",transform:"translate(-0.259 -1.636)",fill:"#565f64"}),e.createElement("path",{id:"Path_121","data-name":"Path 121",d:"M32.4,30.442l.1-.1-.1.1a.094.094,0,0,0,.1.1h.1c.1-.1,2.894-1.543,3.858-2.122l-.386-2.8L33.075,5.268a1.179,1.179,0,0,0-.289-.868S34.233,23.883,34.233,26A6.3,6.3,0,0,1,32.4,30.442Z",transform:"translate(-1.545 -0.156)",fill:"url(#linear-gradient-6)"}),e.createElement("path",{id:"Path_122","data-name":"Path 122",d:"M30.834,32.795c0-.1-.1-.193-.193-.1L7.3,45.912a1.939,1.939,0,0,0,1.929.193l21.8-8.777Z",transform:"translate(-0.259 -1.636)",fill:"url(#linear-gradient-7)"}),e.createElement("path",{id:"Path_123","data-name":"Path 123",d:"M9.261,46.021l21.8-8.777L30.866,33a5.524,5.524,0,0,1-2.894,3.376c-1.35.772-14.275,7.137-18.9,9.356a6.09,6.09,0,0,1-.868.386,1.056,1.056,0,0,0,1.061-.1Z",transform:"translate(-0.291 -1.649)",opacity:"0.8",fill:"url(#linear-gradient-8)"}),e.createElement("path",{id:"Path_124","data-name":"Path 124",d:"M32.479,30.32l-.1.1s0,.193.193.1c.1-.1,2.894-1.543,3.858-2.122L33.057,5.243A1.68,1.68,0,0,0,31.9,3.7l.386,26.813.193-.193Z",transform:"translate(-1.524 -0.131)",fill:"url(#linear-gradient-9)"}),e.createElement("path",{id:"Path_125","data-name":"Path 125",d:"M32.479,30.32l-.1.1s0,.193.193.1c.1-.1,2.894-1.543,3.858-2.122L33.057,5.243A1.68,1.68,0,0,0,31.9,3.7l.386,26.813.193-.193Z",transform:"translate(-1.524 -0.131)",fill:"url(#linear-gradient-10)"}),e.createElement("path",{id:"Path_126","data-name":"Path 126",d:"M4.944,43.534C4.269,41.991.411,34.468,4.654,20H3.015a47.727,47.727,0,0,0-1.929,7.234S.893,28.2.8,29.259a21.941,21.941,0,0,0-.1,2.315,25.252,25.252,0,0,0,1.447,9.163,28.157,28.157,0,0,0,7.909,12.442,27.666,27.666,0,0,0,12.153,5.691C21.533,58.773,9.959,53.854,4.944,43.534Z",transform:"translate(-0.025 -1.438)",fill:"url(#linear-gradient-11)"}),e.createElement("path",{id:"Path_127","data-name":"Path 127",d:"M32.368,32.6H31.5c.1,0,.193,0,.193.1l.193,4.437h.1l.193-4.437c0-.1.1-.193.193-.1Z",transform:"translate(-1.482 -1.556)",fill:"url(#linear-gradient-12)"}),e.createElement("path",{id:"Path_128","data-name":"Path 128",d:"M41.645,2.3C51.772,6.11,61.321,16.588,61.321,29.829A29.086,29.086,0,0,1,32,58.882v1.524c16.4,0,30.189-13.336,30.189-29.815A29.86,29.86,0,0,0,41.645,2.3Z",transform:"translate(-1.864 -0.082)",fill:"url(#linear-gradient-13)"}),e.createElement("path",{id:"Path_129","data-name":"Path 129",d:"M32.289.7h0Z",transform:"translate(-1.502 -0.025)",fill:"#fff"}),e.createElement("path",{id:"Path_130","data-name":"Path 130",d:"M57.955,19.593C51.2,4.065,35.965,3.2,35.1,3.1H35c11.67,2.122,19.1,9.741,21.7,17.747v.1a30.28,30.28,0,0,1,1.833,9.934,26.374,26.374,0,0,1-2.122,10.61c-.1.482-.193,1.061-.289,1.061h1.543C62.3,33.868,60.27,25.091,57.955,19.593Z",transform:"translate(-1.971 -0.11)",fill:"url(#linear-gradient-14)"}),e.createElement("path",{id:"Path_131","data-name":"Path 131",d:"M2.2,30.673A28.378,28.378,0,1,1,30.578,58.956,28.469,28.469,0,0,1,2.2,30.673Zm8.856-19.617a27.589,27.589,0,0,0-.1,39.139A28.043,28.043,0,0,0,30.578,58.29,27.636,27.636,0,0,0,58.194,30.673,28.043,28.043,0,0,0,50.1,11.056a27.362,27.362,0,0,0-39.044,0Z",transform:"translate(-0.078 -0.078)",fill:"#fbfbfb"}),e.createElement("path",{id:"Path_132","data-name":"Path 132",d:"M7.9,43.366,27.576,29.188a19.956,19.956,0,0,0,2.99,1.35c.193.1.193-.1.193-.1l-2.411-2.025a.877.877,0,0,1-.386-.772L30.276,4.4c-.1.1-.1.289-.193.386a.87.87,0,0,0-.1.482L26.611,28.513,8.093,43.077C8,43.173,7.9,43.269,7.9,43.366Z",transform:"translate(-0.28 -0.156)",fill:"#333f47"}))}),k=C=>{var x=C,{icon:t,w:l=["88px","115px","125px","143px"],h:a=["80px","110px","125px","132px"],maxW:r=["120px","130px","140px","143px"],maxH:n=["90px","120px","135px","132px"],imageWidth:s=["41px",null,null,"56px"],cardColor:o="autoGrey.600",boxSize:c=[10,null,14,16],className:d}=x,p=B(x,["icon","w","h","maxW","maxH","imageWidth","cardColor","boxSize","className"]);return e.createElement(xt,L(w({bg:o,h:a,w:l},p),{className:d,cursor:"pointer",maxW:r,maxH:n}),e.createElement(X,{h:"full",w:"full"},e.createElement(q,{as:t,boxSize:c})))},ze=s=>{var o=s,{label:t,placeholder:l,isDisabled:a,labelPadding:r}=o,n=B(o,["label","placeholder","isDisabled","labelPadding"]);return e.createElement(tt,w({pl:r||"4",cursor:a?"not-allowed":"text",bg:"transparent",isDisabled:a,border:"none",opacity:a?"0.4":"1",placeholder:j(l)||t,isTruncated:!0,_focus:{bg:"white"},_hover:{bg:"autoGrey.200"},pr:"32px"},n))},bt=({areOptionsSelected:t,isDisabled:l,areOptionsOpen:a,clearCb:r,size:n="lg"})=>e.createElement(e.Fragment,null,t?e.createElement(K,{children:e.createElement(ee,null),cursor:"pointer",opacity:"0.6",transition:"all .3s",transform:"rotate(90deg)",onClick:r}):e.createElement(K,{children:e.createElement(Ze,{opacity:l?"0.18":"0.4",boxSize:n==="lg"?5:4,transform:a?"rotate(180deg)":"",transition:"all .2s"}),pointerEvents:"painted"})),de=d=>{var p=d,{children:t,areOptionsOpen:l,isDisabled:a,clearCb:r,areOptionsSelected:n,cursor:s="pointer",size:o}=p,c=B(p,["children","areOptionsOpen","isDisabled","clearCb","areOptionsSelected","cursor","size"]);return e.createElement(Me,w({cursor:s},c),t,e.createElement(bt,{areOptionsSelected:n,areOptionsOpen:l,isDisabled:a,clearCb:r,size:o}))},De=t=>t.reduce((l,a)=>l.length===0||l[l.length-1][0]!==a[0]?l.concat(a[0]).concat(a):l.concat(a),[]),Ft=a=>{var r=a,{labelPadding:t}=r,l=B(r,["labelPadding"]);const[n,s]=f.exports.useState(!1),[o,c]=f.exports.useState([]),[d,p]=f.exports.useState(""),[C,x]=f.exports.useState(""),[g,m]=f.exports.useState(""),E=F(),{brands:i}=v(b=>b.carsReducer),{brands:M}=v(b=>b.selectedCarFilters);f.exports.useEffect(()=>{n&&x(o.join(", ")),h()},[o.length]),f.exports.useEffect(()=>{M.length?c(M):c([])},[M]);const S=b=>{o.includes(b)?(c(o.filter(W=>W!==b)),x(o.join(", "))):c([b].concat(o))},h=()=>{o.length?p(()=>`${o.join(", ")}`):p(()=>"Brands")},O=De(i).filter(b=>b.toLocaleLowerCase().includes(g.toLocaleLowerCase()));return e.createElement(le,L(w({},l),{areOptionsOpen:n}),e.createElement(re,{isActive:n,onClick:()=>{s(!1),h(),E($(o)),E(ce(o)),x(""),m("")}}),e.createElement(ne,null,e.createElement(de,{onClick:()=>s(!0),areOptionsOpen:n,areOptionsSelected:!!o.length,clearCb:b=>{b.stopPropagation&&b.stopPropagation(),c([]),x(""),p(""),s(!1),E($([])),E(Fe([])),E(H([]))}},e.createElement(ze,{labelPadding:t,label:"Brands",placeholder:d,value:C?j(C):g,onChange:b=>m(b.currentTarget.value),onFocus:()=>{s(!0),h(),x("")}})),e.createElement(oe,{isOpen:n,maxH:"380px"},e.createElement(A,{h:"full",w:"full",overflowY:n?"auto":"hidden",align:"flex-start",p:"4",pt:"2",spacing:"2",css:{"&::-webkit-scrollbar":{width:"6px"},"&::-webkit-scrollbar-track":{width:"6px",overflow:"hidden"},"&::-webkit-scrollbar-thumb":{background:"#DEDEE0",borderRadius:"100px"},"::-webkit-scrollbar-button":{backgroundColor:"white",display:"block",visibility:"hidden",borderStyle:"solid",height:"3px",width:"6px"}}},e.createElement(at,{w:"full",flexWrap:"wrap",css:{gap:"8px"}},e.createElement(k,{icon:J,maxW:"37px",maxH:"40px",bg:o.includes("Mercedes")?"autoOrange.100":"autoGrey.600",boxSize:4,onClick:()=>S("Mercedes")}),e.createElement(k,{icon:J,maxW:"37px",maxH:"40px",boxSize:4,onClick:()=>S("Mercedes")}),e.createElement(k,{icon:R,maxW:"37px",maxH:"40px",bg:o.includes("BMW")?"autoOrange.100":"autoGrey.600",boxSize:5,onClick:()=>S("BMW")}),e.createElement(k,{icon:R,maxW:"37px",maxH:"40px",boxSize:5,onClick:()=>S("BMW")}),e.createElement(k,{icon:R,maxW:"37px",maxH:"40px",boxSize:5,onClick:()=>S("BMW")}),e.createElement(k,{icon:R,maxW:"37px",maxH:"40px",boxSize:5,onClick:()=>S("BMW")})),O.map(b=>e.createElement(Q,{p:"0",key:b},b.length===1?e.createElement(lt,{pt:"4",fontSize:"14px"},b," ",e.createElement(ae,{w:"40px",mt:"6px",borderColor:"autoGrey.400"})):e.createElement(U,{onClick:()=>S(b),isTruncated:!0,maxW:"full",color:o.includes(b)?"autoOrange.500":"#000"},j(b))))))))},Wt=l=>{var t=B(l,[]);const[a,r]=f.exports.useState(!1),[n,s]=f.exports.useState([]),[o,c]=f.exports.useState(""),[d,p]=f.exports.useState(""),[C,x]=f.exports.useState(""),g=F(),[m,E]=f.exports.useState(!0),{models:i}=v(u=>u.carsReducer),{models:M}=v(u=>u.selectedCarFilters),{brands:S}=v(u=>u.selectedCarFilters);f.exports.useEffect(()=>{i.length?E(!1):(E(!0),r(!1),p(""),c(""),s([]))},[i]),f.exports.useEffect(()=>{a&&p(h.join(", ")),O()},[n,a]),f.exports.useEffect(()=>{S.length?g(ce(S)):g(Fe([]))},[S]),f.exports.useEffect(()=>{M.length?(s(M),E(!1)):s([])},[M]);const h=n.reduce((u,P)=>{const _=P.models;return u.concat(_)},[]),O=()=>{n.length?c(`${h.join(", ")}`):c("Models")},b=({brand:u,model:P})=>{let _=!1;n.forEach((Z,I)=>{if(Z.brand===u)if(Z.models.includes(P)){const z=Z.models.filter(D=>D!==P);s([...n.slice(0,I),{brand:u,models:z},...n.slice(I+1)]),_=!0}else s([...n.slice(0,I),{brand:u,models:[...Z.models,P]},...n.slice(I+1)]),_=!0}),_||s([...n,{brand:u,models:[P]}])},W=n.reduce((u,P)=>u.concat(P.models),[]),G=i.map(u=>({brand:u.brand,models:u.models.filter(P=>P.toLowerCase().includes(C.toLowerCase()))})).filter(u=>u.models.length);return e.createElement(le,L(w({title:"Select Brand First"},t),{areOptionsOpen:a}),e.createElement(re,{isActive:a,onClick:()=>{r(!1),O(),g(H(n)),p(""),x("")}}),e.createElement(ne,null,e.createElement(de,{onClick:()=>{m||r(!0)},areOptionsSelected:!!W.length,isDisabled:m,areOptionsOpen:a,onFocus:()=>{r(!0),O(),p("")},clearCb:u=>{u.stopPropagation&&u.stopPropagation(),s([]),p(""),c(""),g(H([])),r(!1)}},e.createElement(ze,{label:"Model",isDisabled:m,placeholder:o,value:d?j(d):C,onChange:u=>x(u.currentTarget.value)})),e.createElement(oe,{isOpen:a},G.map(u=>e.createElement(A,{key:u.brand,align:"flex-start",w:"full"},e.createElement(T,{pl:"4",fontSize:"14px",opacity:"0.5"},u.brand),u.models.map(P=>e.createElement(Le,{key:P,w:"full",p:"4",borderRadius:"none",display:"flex",justifyContent:"flex-start",variant:"ghost",_hover:{bg:"autoGrey.100"},onClick:_=>{_.preventDefault(),b({brand:u.brand,model:P})}},e.createElement(Pe,{colorScheme:"autoOrange",isChecked:h.includes(P)},e.createElement(T,null,P)))))))))},Ye=a=>{var r=a,{children:t}=r,l=B(r,["children"]);return e.createElement(A,w({overflowY:"scroll",h:"full",w:"full",spacing:"0",css:{"&::-webkit-scrollbar":{width:"4px"},"&::-webkit-scrollbar-thumb":{background:"#DEDEE0",borderRadius:"100px"}}},l),t)},Ve=(t,l)=>{const a=Array(l-t+1).fill(0),r=t;return a.map((n,s)=>s+r)},Gt=l=>{var t=B(l,[]);const[a,r]=f.exports.useState(!1),[n,s]=f.exports.useState(0),[o,c]=f.exports.useState(0),[d,p]=f.exports.useState(""),{yearFrom:C,yearTo:x}=v(i=>i.selectedCarFilters),g=F();f.exports.useEffect(()=>{p(n||o?`${n} - ${o}`:"Year")},[n,o]),f.exports.useEffect(()=>{C&&s(Number(C)),x&&c(Number(x))},[C,x]);const m=i=>{n===i?s(0):i>=o?(s(i),c(i)):s(i)},E=i=>{o===i?(c(0),s(0)):(i<=n&&s(i),c(i))};return e.createElement(le,L(w({},t),{areOptionsOpen:a}),e.createElement(re,{isActive:a,onClick:()=>{r(!1),g(We(n)),g(Ge(o))}}),e.createElement(ne,null,e.createElement(de,{areOptionsOpen:a,clearCb:i=>{i.stopPropagation&&i.stopPropagation(),c(0),s(0),g(We(0)),g(Ge(0)),p(""),r(!1)},areOptionsSelected:!!(n||o),onClick:()=>r(i=>!i)},e.createElement(te,{pl:"4",h:"40px",w:"full",_hover:{bg:"autoGrey.200"},borderRadius:"8px"},e.createElement(T,{opacity:a?"1":"0.5"},d))),e.createElement(oe,{isOpen:a,w:"full"},e.createElement(te,{h:"290px",w:"full",divider:e.createElement(rt,{borderColor:"autoGrey.400"}),pr:"2px"},e.createElement(A,{h:"full",w:"full",spacing:"2"},e.createElement(T,{fontSize:"16px",pr:"4px"},"From"),e.createElement(Ye,{css:{"&::-webkit-scrollbar":{display:"none"}}},Ve(1980,2021).map(i=>e.createElement(U,{fontSize:"14px",key:i,p:"2",lineHeight:"21px",w:"full",color:n===i?"autoOrange.400":"#000",onClick:()=>m(i),_hover:{bg:"autoGrey.100"}},i)))),e.createElement(A,{h:"full",w:"full",spacing:"2"},e.createElement(T,{fontSize:"16px",pr:"8px"},"To"),e.createElement(Ye,{css:{"&::-webkit-scrollbar":{display:"none"}}},Ve(1980,2021).map(i=>e.createElement(U,{fontSize:"14px",p:"2",key:i,lineHeight:"21px",w:"full",color:o===i?"autoOrange.400":"#000",onClick:()=>E(i),_hover:{bg:"autoGrey.100"}},i))))))))},Ue=r=>{var n=r,{searchWord:t,setSearchWord:l}=n,a=B(n,["searchWord","setSearchWord"]);return e.createElement(Me,{w:"full"},e.createElement(He,{children:e.createElement(Ne,{fill:"autoGrey.400"})}),e.createElement(K,{children:e.createElement(X,{w:"full",h:"full"},e.createElement(Ie,{icon:ee,onClick:()=>{l("")},bg:"transparent"})),display:t?"block":"none"}),e.createElement(nt,w({placeholder:"Search",borderRadius:"8px",variant:"filled",pl:"40px",value:t,onChange:s=>l(s.target.value)},a)))},Ct=s=>{var o=s,{cardCount:t,children:l,p:a="16px 0px",spacing:r=["11px",null,null,"16px"]}=o,n=B(o,["cardCount","children","p","spacing"]);return e.createElement(ht,w({overflow:"auto",p:a,gap:r,gridTemplateColumns:[`repeat(${t}, 1fr)`,null,null,`repeat(${t}, 1fr)`],css:{"&::-webkit-scrollbar":{display:"none"}}},n),l)},St=({isOpen:t,onClose:l,finalFocusRef:a})=>{const r=f.exports.useRef(null),[n,s]=f.exports.useState(!0),[o,c]=f.exports.useState(""),[d,p]=f.exports.useState([]),{brands:C}=v(h=>h.carsReducer),{brands:x}=v(h=>h.selectedCarFilters),g=F(),{isMobile:m}=ot();f.exports.useEffect(()=>{x.length?p(x):p([])},[x]);const E=De(C).filter(h=>h.toLocaleLowerCase().includes(o.toLocaleLowerCase())),i=Et({onSwipedDown:()=>{l()}}),M=h=>{if(d.includes(h))p(d.filter(O=>O!==h));else{const O=[...new Set(d.concat(h))];p(O)}},S=()=>{g($(d)),g(ce(d)),l()};return e.createElement(we,{isOpen:t,onClose:l,initialFocusRef:r,placement:"bottom",finalFocusRef:a},e.createElement(Be,null),e.createElement(Oe,{h:"80%",borderTopRadius:"16px",p:"32px 48px 16px 48px"},e.createElement(ve,L(w({},i),{borderTopRadius:"16px",p:"0"})," ",e.createElement(A,{spacing:"4",pb:"4",bg:"white",zIndex:"10",w:"full"},e.createElement(Ue,{searchWord:o,setSearchWord:c,onFocus:()=>{s(!1)},onBlur:()=>{s(!0)}}),e.createElement(ct,{mainText:"Top Brands",mainFontSize:"16px",display:m&&n?"block":"none"}),e.createElement(Ct,{cardCount:6,w:"full",display:m&&n?"grid":"none",p:"0",gap:"10px"},e.createElement(k,{icon:J,maxW:["38px","50px"],maxH:["38px","50px"],boxSize:5}),e.createElement(k,{icon:J,maxW:["38px","50px"],maxH:["38px","50px"],boxSize:5,bg:d.includes("MERCEDES")?"autoOrange.100":"autoGrey.600",onClick:()=>M("MERCEDES")}),e.createElement(k,{icon:R,maxW:["38px","50px"],maxH:["38px","50px"],boxSize:5,bg:d.includes("BMW")?"autoOrange.100":"autoGrey.600",onClick:()=>M("BMW")}),e.createElement(k,{icon:R,maxW:["38px","50px"],maxH:["38px","50px"],boxSize:5,bg:d.includes("BMW")?"autoOrange.100":"autoGrey.600",onClick:()=>M("BMW")}),e.createElement(k,{icon:R,maxW:["38px","50px"],maxH:["38px","50px"],boxSize:5,bg:d.includes("BMW")?"autoOrange.100":"autoGrey.600"}),e.createElement(k,{icon:R,maxW:["38px","50px"],maxH:["38px","50px"],boxSize:5,bg:d.includes("BMW")?"autoOrange.100":"autoGrey.600"})))),e.createElement(ke,{p:"0"},e.createElement(A,{alignItems:"flex-start",w:"full",overflowY:"scroll",spacing:"2",pt:"4"},E.map(h=>e.createElement(Q,{key:h,p:"0"},h.length===1?e.createElement(dt,{fontSize:"16px",fontWeight:"light"},h,e.createElement(ae,{w:"40px",mt:"6px",borderColor:"autoGrey.400"})):e.createElement(U,{onClick:()=>M(h),color:d.includes(h)?"autoOrange.500":"#000",fontSize:"16px"},h))))),e.createElement(_e,{p:"16px 0"},e.createElement(Ae,{ref:r,p:"0.5",onClick:S},"Apply"))))},$e=c=>{var d=c,{onClick:t,label:l,onClear:a,hasValue:r,isDisabled:n=!1,textOpacity:s="0.4"}=d,o=B(d,["onClick","label","onClear","hasValue","isDisabled","textOpacity"]);return e.createElement(te,w({h:["44px",null,"40px",null,null,"62px"],w:"full",bg:"white",borderRadius:"8px",onClick:()=>{!n&&t&&t()},pl:"4",pr:"3",justify:"space-between"},o),e.createElement(T,{opacity:n?"0.2":s,fontSize:["16px",null,null,"18px",null,"24px"],isTruncated:!0},l),r?e.createElement(Ie,{icon:ee,"aria-label":"clear-selected",p:"0",pr:"4px",minW:"0",opacity:"0.6",onClick:p=>{p.stopPropagation&&p.stopPropagation(),a&&a()}}):e.createElement(q,{as:Ze,boxSize:4,opacity:n?"0.2":s}))},jt=a=>{var r=a,{w:t="full"}=r,l=B(r,["w"]);const n=f.exports.useRef(null),s=F(),{brands:o}=v(C=>C.selectedCarFilters),{isOpen:c,onClose:d,onOpen:p}=Re();return e.createElement(Q,L(w({},l),{minW:t,maxW:t}),e.createElement($e,{onClick:p,label:j(o.join(", "))||"Brands",hasValue:!!o.length,onClear:()=>s($([]))}),e.createElement(St,{finalFocusRef:n,isOpen:c,onClose:d}))},yt=f.exports.forwardRef((c,o)=>{var d=c,{isOpen:t,onClose:l,onSubmit:a,header:r,children:n}=d,s=B(d,["isOpen","onClose","onSubmit","header","children"]);return e.createElement(we,w({isOpen:t,onClose:l,placement:"bottom"},s),e.createElement(Be,null),e.createElement(Oe,{maxH:"80%",borderTopRadius:"16px",p:"32px 48px 0px 48px"},e.createElement(ve,{p:"0px 0px 24px",display:r?"block":"none"},r),e.createElement(ke,{h:"200px",p:"3px"},n),e.createElement(_e,{p:"16px 0"},e.createElement(Ae,{ref:o,onClick:a},"Apply"))))}),Mt=({isOpen:t,onClose:l,allSelectedModels:a})=>{const r=f.exports.useRef(null),[n,s]=f.exports.useState(""),[o,c]=f.exports.useState([]),{models:d}=v(m=>m.carsReducer),{models:p}=v(m=>m.selectedCarFilters),C=F();f.exports.useEffect(()=>{p.length?c(p):c([])},[p]);const x=({brand:m,model:E})=>{let i=!1;o.forEach((M,S)=>{if(M.brand===m)if(M.models.includes(E)){const h=M.models.filter(O=>O!==E);c([...o.slice(0,S),{brand:m,models:h},...o.slice(S+1)]),i=!0}else c([...o.slice(0,S),{brand:m,models:[...M.models,E]},...o.slice(S+1)]),i=!0}),i||c([...o,{brand:m,models:[E]}])},g=d.map(m=>({brand:m.brand,models:m.models.filter(E=>E.toLowerCase().includes(n.toLowerCase()))})).filter(m=>m.models.length);return e.createElement(yt,{initialFocusRef:r,ref:r,isOpen:t,onClose:l,onSubmit:()=>{C(H(o)),l()},header:e.createElement(Ue,{searchWord:n,setSearchWord:s})},e.createElement(A,{w:"full",alignItems:"flex-start",h:"300px",spacing:"16px"},g.map(m=>e.createElement(A,{key:m.brand,align:"flex-start"},e.createElement(st,{opacity:"0.5"},m.brand),m.models.map(E=>e.createElement(Pe,{colorScheme:"autoOrange",defaultChecked:a.includes(E),onChange:i=>{i.preventDefault(),x({brand:m.brand,model:E})},key:E},E))))))},Ht=a=>{var r=a,{w:t="full"}=r,l=B(r,["w"]);const{isOpen:n,onClose:s,onOpen:o}=Re(),c=F(),{models:d}=v(g=>g.carsReducer),{models:p}=v(g=>g.selectedCarFilters),C=()=>{d.length!==0&&o()},x=p.reduce((g,m)=>{const E=m.models;return g.concat(E)},[]);return e.createElement(Q,w({minW:t,maxW:t},l),e.createElement($e,{onClick:C,label:x.length?x.join(", "):"Models",isDisabled:!d.length,hasValue:!!p.length,onClear:()=>c(H([]))}),e.createElement(Mt,{isOpen:n,onClose:s,allSelectedModels:x}))},Qe=({query:t,queryName:l})=>{Array.from(t.keys()).forEach(a=>{a.includes(`${l}`)&&t.delete(a)})},Nt=({query:t,dispatch:l,history:a,filters:r})=>{const{brands:n,models:s,yearFrom:o,yearTo:c,engineFrom:d,engineTo:p,conditions:C,types:x,locations:g,transmission:m,keys:E,drives:i,salesStatus:M,fuels:S,cylinders:h,priceFrom:O,priceTo:b}=r,{BRAND:W,MODEL:G,YEAR_FROM:u,YEAR_TO:P,CONDITION:_,TYPE:Z,LOCATION:I,TRANSMISSION:z,KEYS:D,DRIVE:fe,SALES_STATUS:me,FUEL_TYPE:ue,CYLINDER:Ee,PRICE_FROM:xe,PRICE_TO:he,ENGINE_FROM:ge,ENGINE_TO:be}=ut;t.delete(W),t.delete(u),t.delete(xe),t.delete(he),t.delete(P),t.delete(_),t.delete(Z),t.delete(I),t.delete(z),t.delete(D),t.delete(fe),t.delete(me),t.delete(ue),t.delete(Ee),t.delete(ge),t.delete(be),Qe({query:t,queryName:G}),l(ft()),n.length?n.map(y=>{t.append(W,y)}):Qe({query:t,queryName:G}),s.length&&s.map(y=>{y.models.map(Ke=>{t.append(`${G}[${y.brand}]`,Ke)})}),o&&t.set(u,o),E&&t.set(D,E),c&&t.set(P,c),O&&t.set(xe,O),b&&t.set(he,b),d&&t.set(ge,d),p&&t.set(be,p),C.map(y=>{t.append(_,y)}),x.map(y=>{t.append(Z,y)}),g.map(y=>{t.append(I,y)}),m.map(y=>{t.append(z,y)}),M.map(y=>t.append(me,y)),S.map(y=>t.append(ue,y)),h.map(y=>t.append(Ee,y)),i.map(y=>t.append(fe,y)),t.set("page","1"),a.push({pathname:"/catalog",search:t.toString()}),l(mt(t)),l(je(t.toString())),l(je(t.toString()))};export{Zt as A,Ft as B,Lt as C,K as I,Wt as M,de as S,k as T,Ye as V,Gt as Y,Tt as a,yt as b,$e as c,jt as d,Ht as e,Ct as f,R as g,J as h,Ve as r,Nt as s,It as u};
