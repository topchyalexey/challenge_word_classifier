var b,l;module.exports={init:function(e){b=e,l=8*e.length},test:function(e){for(var t=e.length,n=0,r=0,o="esainortlcudmph'gbyfvkwzxjq",i=[40,44,66,78,89,102,106,113,116,118,114,92,78];t>n;++n)r+=o.indexOf(e[n]);if(r>i[t-3]||t>15||3>t||-1!=e.search(/^([^ao])\1|(.)\2\2|'([^s]|.{2,}|)$|[^eaiouy]{5}|[eaiouy]{5}|jq|jx|jz/))return 0;for(n=r=0;t>n;n++)r=(r<<5)-r+e.charCodeAt(n);return n=(2147483647&r)%l,b.readUInt8(b.length-1-~~(n/8))>>n%8&1}};