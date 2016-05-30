function checkInBuffer(e,n,i){var t=i,r=!0,l=7;if(t.length>l+1)for(var s=0;s<t.length;s+=l-2){for(var a=t.substr(s,l),u=a.length,o=0;l-u>o;o++)a+="0";r=r&&unpack(e,n,a)}else r=unpack(e,n,t);return r}function unpack(e,n,i){var t=n(i);return 0!=(e[Math.floor(t/8)]&1<<7-t%8)}function ly(e){for(var n=new Uint32Array(1),i=0;i<e.length;i++)n[0]=1664525*n[0]+e.charCodeAt(i)*(i+2)+1013904223;return n[0]%513575}function prepareWord(e){var n,i,t=e.toLowerCase(),r=0;for(r=0;r<pr.length;r++)if(n=pr[r],i=t.substr(0,n[0].length),n.indexOf(i)>=0){t=t.split(i)[1];break}for(r=0;r<af.length;r++)if(n=af[r],i=t.slice(-1*n[0].length),n.indexOf(i)>=0){t=t.slice(0,-1*n[0].length);break}return sp(t)}var sp=function(){function e(e,n){if(n instanceof Array){if(~n.indexOf(e))return e}else for(var i in n)if(i===e)return n[i];return!1}function n(e,i,t){if(null==t)return n(e,0,i);for(var r,l,s=e.slice(),a=0;a<t.length&&(r=t[a],r=p[r]||(p[r]=new RegExp(t[a]+"$")),l=t[a+1],e="function"==typeof l?e.replace(r,function(e){var n=arguments[""+(arguments.length-2)];return n>=i?l.apply(null,arguments):e+" "}):e.replace(r,function(e){var n=arguments[""+(arguments.length-2)];return n>=i?l:e+" "}),e===s);a+=2);return e.replace(/ /g,"")}function i(e,n){return null==n&&(n=e.length-2),e.length<3&&(n=0),!!(!~t.indexOf(e[n-1])&&~t.indexOf(e[n])&&!~r.indexOf(e[n+1])||0===n&&~t.indexOf(e[n])&&!~t.indexOf(e[n+1]))}var t="aeiouy",r=t+"wxY",l="cdeghkmnrt",s=RegExp("^.*?(["+t+"][^"+t+"]|$)"),a=/^(gener|commun|arsen)/,u=/(bb|dd|ff|gg|mm|nn|pp|rr|tt)$/,o=RegExp("(["+t+"])y","g"),c=RegExp("(.[^"+t+"])[yY]$"),f={skis:"ski",skies:"sky",dying:"die",lying:"lie",tying:"tie",idly:"idl",gently:"gentl",ugly:"ugli",early:"earli",only:"onli",singly:"singl",sky:"sky",news:"news",howe:"howe",atlas:"atlas",cosmos:"cosmos",bias:"bias",andes:"andes"},g=["inning","outing","canning","herring","earring","proceed","exceed","succeed"],p={};return function(r){var p=e(r,f);if(p)return p;if(r.length<3)return r;"y"===r[0]&&(r="Y"+r.substr(1)),r=r.replace(o,"$1Y");var h,d;h=(d=a.exec(r))?d[0].length:s.exec(r)[0].length;var y=h+s.exec(r.substr(h))[0].length;return r=r.replace(/^'/,""),r=r.replace(/'(s'?)?$/,""),r=n(r,["sses","ss","(ied|ies)",function(e,n,i){return i>1?"i":"ie"},"(["+t+"].*?[^us])s",function(e,n){return n}]),(p=e(r,g))?p:(r=n(r,["(eed|eedly)",function(e,n,i){return i>=h?"ee":e+" "},"(["+t+"].*?)(ed|edly|ing|ingly)",function(e,n,t,l){return/(?:at|bl|iz)$/.test(n)?n+"e":u.test(n)?n.substr(0,n.length-1):i(r.substr(0,l+n.length))&&l+n.length<=h?n+"e":n}]),r=r.replace(c,"$1i"),r=n(r,h,["(izer|ization)","ize","(ational|ation|ator)","ate","enci","ence","anci","ance","abli","able","entli","ent","tional","tion","(alism|aliti|alli)","al","fulness","ful","(ousli|ousness)","ous","(iveness|iviti)","ive","(biliti|bli)","ble","ogi",function(e,n){return"l"===r[n-1]?"og":"ogi"},"fulli","ful","lessli","less","li",function(e,n){return~l.indexOf(r[n-1])?"":"li"}]),r=n(r,h,["ational","ate","tional","tion","alize","al","(icate|iciti|ical)","ic","(ful|ness)","","ative",function(e,n){return n>=y?"":"ative"}]),r=n(r,y,["(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ism|ate|iti|ous|ive|ize)","","ion",function(e,n){return~"st".indexOf(r[n-1])?"":e}]),r=n(r,h,["e",function(e,n){return n>=y||!i(r,n-2)?"":"e"},"l",function(e,n){return"l"===r[n-1]&&n>=y?"":"l"}]),r=r.replace(/Y/g,"y"))}}(),hD,pr=[["multi","micro","photo","under","super","inter","hyper"],["over","anti","semi","fore","post","back"],["non","dis","mis","pre","out","sub"],["un","up"]],af=[["less","like","ship"],["'s"]];module.exports={init:function(e){hD=e},test:function(e){var n=prepareWord(e),i=n.length;return 13>=i&&i>2&&n.indexOf("'")<0&&!e.startsWith("'")&&!e.endsWith("'")&&checkInBuffer(hD,ly,n)}};