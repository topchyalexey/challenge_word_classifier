"use strict";function testBit(e){return bits[Math.floor(e/32)]>>>e%32&1}function hash(e,i){for(var a=1,t=0;t<e.length;++t)a=i*a+e.charCodeAt(t)&4294967295;return Math.abs(a)%size}function test(e){for(var i=0;i<seeds.length;i++){var a=seeds[i];if(!testBit(hash(e,a)%size))return!1}return!0}var stemmer=function(){function e(){}function i(){console.log(Array.prototype.slice.call(arguments).join(" "))}var a={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},t={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""};return function(o,u){var s,n,l,c,r,y;return y=u?i:e,3>o.length?o:(l=o.substr(0,1),"y"==l&&(o=l.toUpperCase()+o.substr(1)),c=/^(.+?)(ss|i)es$/,n=/^(.+?)([^s])s$/,c.test(o)?(o=o.replace(c,"$1$2"),y("1a",c,o)):n.test(o)&&(o=o.replace(n,"$1$2"),y("1a",n,o)),c=/^(.+?)eed$/,n=/^(.+?)(ed|ing)$/,c.test(o)?(n=c.exec(o),c=/^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*/,c.test(n[1])&&(c=/.$/,o=o.replace(c,""),y("1b",c,o))):n.test(o)&&(n=n.exec(o),s=n[1],n=/^([^aeiou][^aeiouy]*)?[aeiouy]/,n.test(s)&&(o=s,y("1b",n,o),n=/(at|bl|iz)$/,r=/([^aeiouylsz])\1$/,s=/^[^aeiou][^aeiouy]*[aeiouy][^aeiouwxy]$/,n.test(o)?(o+="e",y("1b",n,o)):r.test(o)?(c=/.$/,o=o.replace(c,""),y("1b",r,o)):s.test(o)&&(o+="e",y("1b",s,o)))),c=/^(.*[aeiouy].*)y$/,c.test(o)&&(n=c.exec(o),s=n[1],o=s+"i",y("1c",c,o)),c=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,c.test(o)&&(n=c.exec(o),s=n[1],n=n[2],c=/^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*/,c.test(s)&&(o=s+a[n],y("2",c,o))),c=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,c.test(o)&&(n=c.exec(o),s=n[1],n=n[2],c=/^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*/,c.test(s)&&(o=s+t[n],y("3",c,o))),c=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,n=/^(.+?)(s|t)(ion)$/,c.test(o)?(n=c.exec(o),s=n[1],c=/^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*/,c.test(s)&&(o=s,y("4",c,o))):n.test(o)&&(n=n.exec(o),s=n[1]+n[2],n=/^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*/,n.test(s)&&(o=s,y("4",n,o))),c=/^(.+?)e$/,c.test(o)&&(n=c.exec(o),s=n[1],c=/^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*/,n=/^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*([aeiouy][aeiou]*)?$/,r=/^[^aeiou][^aeiouy]*[aeiouy][^aeiouwxy]$/,c.test(s)||n.test(s)&&!r.test(s))&&(o=s,y("5",c,n,r,o)),c=/ll$/,n=/^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*/,c.test(o)&&n.test(o)&&(c=/.$/,o=o.replace(c,""),y("5",c,n,o)),"y"==l&&(o=l.toLowerCase()+o.substr(1)),o)}}(),size=502433,seeds=[342],bits=[];exports.init=function(e){for(var i=0;i<e.length/4;i++)bits[i]=e.readInt32BE(4*i)},exports.test=function(e){return 1===e.length||2===e.length?!0:e.length>=16?!1:-1!==e.indexOf("''")?!1:(e.endsWith("'s")&&(e=e.slice(0,-2)),e.endsWith("ed")&&(e=e.slice(0,-2)),e.endsWith("es")&&(e=e.slice(0,-2)),e.endsWith("s")&&-1===["a","e","i","o","u","y"].indexOf(e.charAt(e.length-2))&&(e=e.slice(0,-1)),test(stemmer(e)))};