function stemmer(a){var b,c,d,e,f,g,h;if(a.length<3)return a;if(d=a.substr(0,1),"y"==d&&(a=d.toUpperCase()+a.substr(1)),e=/^(.+?)(ss|i)es$/,f=/^(.+?)([^s])s$/,e.test(a)?a=a.replace(e,"$1$2"):f.test(a)&&(a=a.replace(f,"$1$2")),e=/^(.+?)eed$/,f=/^(.+?)(ed|ing)$/,e.test(a)){var j=e.exec(a);e=new RegExp(mgr0),e.test(j[1])&&(e=/.$/,a=a.replace(e,""))}else if(f.test(a)){var j=f.exec(a);b=j[1],f=new RegExp(s_v),f.test(b)&&(a=b,f=/(at|bl|iz)$/,g=new RegExp("([^aeiouylsz])\\1$"),h=new RegExp("^"+C+v+"[^aeiouwxy]$"),f.test(a)?a+="e":g.test(a)?(e=/.$/,a=a.replace(e,"")):h.test(a)&&(a+="e"))}if(e=/^(.+?)y$/,e.test(a)){var j=e.exec(a);b=j[1],e=new RegExp(s_v),e.test(b)&&(a=b+"i")}if(e=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,e.test(a)){var j=e.exec(a);b=j[1],c=j[2],e=new RegExp(mgr0),e.test(b)&&(a=b+step2list[c])}if(e=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,e.test(a)){var j=e.exec(a);b=j[1],c=j[2],e=new RegExp(mgr0),e.test(b)&&(a=b+step3list[c])}if(e=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,f=/^(.+?)(s|t)(ion)$/,e.test(a)){var j=e.exec(a);b=j[1],e=new RegExp(mgr1),e.test(b)&&(a=b)}else if(f.test(a)){var j=f.exec(a);b=j[1]+j[2],f=new RegExp(mgr1),f.test(b)&&(a=b)}if(e=/^(.+?)e$/,e.test(a)){var j=e.exec(a);b=j[1],e=new RegExp(mgr1),f=new RegExp(meq1),g=new RegExp("^"+C+v+"[^aeiouwxy]$"),(e.test(b)||f.test(b)&&!g.test(b))&&(a=b)}return e=/ll$/,f=new RegExp(mgr1),e.test(a)&&f.test(a)&&(e=/.$/,a=a.replace(e,"")),"y"==d&&(a=d.toLowerCase()+a.substr(1)),a}function findTrieWord(a,b){if(0===b)return!1;b=b||dict;for(var c in b)if(0===a.indexOf(c)){var d="number"==typeof b[c]&&b[c]?dict.$[b[c]]:b[c];return c.length===a.length?0===d||0===d.$:findTrieWord(a.slice(c.length),d)}return!1}var step2list={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},step3list={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},c="[^aeiou]",v="[aeiouy]",C=c+"[^aeiouy]*",V=v+"[aeiou]*",mgr0="^("+C+")?"+V+C,meq1="^("+C+")?"+V+C+"("+V+")?$",mgr1="^("+C+")?"+V+C+V+C,s_v="^("+C+")?"+v,memo={},memoizingStemmer=function(a){return memo[a]||(memo[a]=stemmer(a)),memo[a]},dict,mostCommonEnglishWords=["the","be","to","of","and","a","in","that","have","i","it","for","not","on","with","he","as","you","do","at","this","but","his","by","from","they","we","say","her","she","or","an","will","my","one"];exports.init=function(data){dict=eval("("+data+")")},exports.test=function(a){for(var b=0;b<mostCommonEnglishWords.length;b++)if(a==mostCommonEnglishWords[b])return!0;"'s"==a.slice(-2)&&(a=a.slice(0,-2)),a=a.toLowerCase();var c=stemmer(a);return findTrieWord(c)};
