const s=(a,o=".")=>{const t=new Date(a),e=t.getDate(),n=t.getMonth()+1;return`${t.getFullYear()}${o}${n<=9?"0"+n:n}${o}${e<=9?"0"+e:e}`},$=(a,o=".")=>{const t=new Date(a),e=t.getDate(),n=t.getMonth()+1,c=t.getFullYear();return`${e<=9?"0"+e:e}${o}${n<=9?"0"+n:n}${o}${c}`};export{$ as a,s as d};