module.exports.test=(e)=>{return e.length>60||e.match("xj|qj|qx|qz|vq|jq|zx|jx|jz|''|'j|'q|'x|'z")?!1:(o=h(e.replace(/'s$/,""))%l,!!(b[o/8|0]&1<<o%8))},module.exports.init=(e)=>{b=e,l=8*e.length};h=(e)=>{for(var t,o=e.length,r=0^o,c=0;o>=4;)t=255&e.charCodeAt(c)|(255&e.charCodeAt(++c))<<8|(255&e.charCodeAt(++c))<<16|(255&e.charCodeAt(++c))<<24,t=1540483477*(65535&t)+((1540483477*(t>>>16)&65535)<<16),t^=t>>>24,t=1540483477*(65535&t)+((1540483477*(t>>>16)&65535)<<16),r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16)^t,o-=4,++c;switch(o){case 3:r^=(255&e.charCodeAt(c+2))<<16;case 2:r^=(255&e.charCodeAt(c+1))<<8;case 1:r^=255&e.charCodeAt(c),r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16)}return r^=r>>>13,r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16),r^=r>>>15,r>>>0};
