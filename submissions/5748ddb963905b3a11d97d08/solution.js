!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n;n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,n.solution=t()}}(function(){return function t(n,r,e){function i(f,u){if(!r[f]){if(!n[f]){var a="function"==typeof require&&require;if(!u&&a)return a(f,!0);if(o)return o(f,!0);var s=new Error("Cannot find module '"+f+"'");throw s.code="MODULE_NOT_FOUND",s}var l=r[f]={exports:{}};n[f][0].call(l.exports,function(t){var r=n[f][1][t];return i(r?r:t)},l,l.exports,t,n,r,e)}return r[f].exports}for(var o="function"==typeof require&&require,f=0;f<e.length;f++)i(e[f]);return i}({1:[function(t,n,r){!function(n){function r(t,n){var r,o=e(t,n),f=o.length,u=o[f-1];return r=new i.BloomFilter(o.slice(0,f-1),u)}function e(t,n){var r=[],e=t.readInt32BE(n),i=1;for(i;e/4>i;i++)r.push(t.readInt32BE(n+4*i));return r}n.init=r;var i=t("bloomfilter")}("undefined"!=typeof r?r:this)},{bloomfilter:2}],2:[function(t,n,r){!function(t){function n(t,n){var r;"number"!=typeof t&&(r=t,t=32*r.length);var e=Math.ceil(t/32),i=-1;if(this.m=t=32*e,this.k=n,u){var o=1<<Math.ceil(Math.log(Math.ceil(Math.log(t)/Math.LN2/8))/Math.LN2),f=1===o?Uint8Array:2===o?Uint16Array:Uint32Array,a=new ArrayBuffer(o*n),s=this.buckets=new Int32Array(e);if(r)for(;++i<e;)s[i]=r[i];this._locations=new f(a)}else{var s=this.buckets=[];if(r)for(;++i<e;)s[i]=r[i];else for(;++i<e;)s[i]=0;this._locations=[]}}function r(t){return t-=t>>1&1431655765,t=(858993459&t)+(t>>2&858993459),16843009*(t+(t>>4)&252645135)>>24}function e(t){for(var n=2166136261,r=0,e=t.length;e>r;++r){var o=t.charCodeAt(r),u=65280&o;u&&(n=i(n^u>>8)),n=i(n^255&o)}return f(n)}function i(t){return t+(t<<1)+(t<<4)+(t<<7)+(t<<8)+(t<<24)}function o(t){return f(i(t))}function f(t){return t+=t<<13,t^=t>>>7,t+=t<<3,t^=t>>>17,t+=t<<5,4294967295&t}t.BloomFilter=n,t.fnv_1a=e,t.fnv_1a_b=o;var u="undefined"!=typeof ArrayBuffer;n.prototype.locations=function(t){for(var n=this.k,r=this.m,i=this._locations,f=e(t),u=o(f),a=f%r,s=0;n>s;++s)i[s]=0>a?a+r:a,a=(a+u)%r;return i},n.prototype.add=function(t){for(var n=this.locations(t+""),r=this.k,e=this.buckets,i=0;r>i;++i)e[Math.floor(n[i]/32)]|=1<<n[i]%32},n.prototype.test=function(t){for(var n=this.locations(t+""),r=this.k,e=this.buckets,i=0;r>i;++i){var o=n[i];if(0===(e[Math.floor(o/32)]&1<<o%32))return!1}return!0},n.prototype.size=function(){for(var t=this.buckets,n=0,e=0,i=t.length;i>e;++e)n+=r(t[e]);return-this.m*Math.log(1-n/this.m)/this.k}}("undefined"!=typeof r?r:this)},{}],3:[function(t,n,r){!function(t){function n(t,n){var r={},e=n+t.readInt32BE(n);for(n+=4;e>n;){var i=t.readInt8(n);t.writeInt8(i,n),n+=1;var o=t.toString(void 0,n,n+i);n+=i;var f=t.readFloatBE(n);n+=4,r[o]=f}return r}t.buffer_to_cv_gram=n}("undefined"!=typeof r?r:this)},{}],4:[function(t,n,r){!function(t){function n(t,n){var r={},e=t.toString(void 0,n),i=e.split("\n");return i.forEach(function(t){var n=t.split(/\s+/),e=+n[0],i=n.slice(1);i.forEach(function(t){r[t]=e})}),r}t.buffer_to_ngram=n}("undefined"!=typeof r?r:this)},{}],5:[function(t,n,r){var e,o,f,u=t("./bloom.js"),a=t("./read_ngram.js"),s=t("./read_cv_gram.js");r.init=function(t){f=u.init(t,0);var n=t.readInt32BE(0),r=t.readInt32BE(n);o=s.buffer_to_cv_gram(t,n),e=a.buffer_to_ngram(t,r+n)},r.test=function(t){var n=t.toLowerCase().trim(),r=l(n);if(r===!1||r===!0)return r;var e=c(n);if(e===!0||e===!1)return e;var i=n.length,o=h(n,i,e);return o};var l=function(t){return t.length>60||59===t.length?!1:t.length>=35&&t.length<=44?!1:t.length>=46&&t.length<=57?!1:t.length>=15&&t.length<=60?v(t):void 0},c=function(t){var n=["bj","bq","cx","ej","ek","fh","fj","fk","fq","gf","gj","gx","gz","hx","jb","jf","jh","jk","jl","jm","jq","jw","jx","kf","kh","kq","kx","kz","lk","lq","mq","mz","nk","nn","nx","oq","pj","pz","qj","qo","qz","rk","rz","sz","tf","tj","tq","tz","ue","uf","uj","uo","uq","uy","uz","vh","vk","vq","vy","vz","wj","wn","wq","wx","wz","xf","xg","xh","xj","xk","xm","xy","xz","yc","yg","yh","yj","yk","yl","yk","yl","yq","yw","yx","zc","ze","zf","zh","zj","zk","zl","zm","zp","zq","zv","zw","zx"],r=["bq","fk","gx","hx","jz","jq","jx","kx","kz","lk","lq","mq","qg","qj","qx","qz","rz","uo","uq","vk","vq","vz","wq","wx","wz","xg","xj","xk","xz","yj","yk","yz","yx","zc","zf","zj","zx"],i=["gz","jb","jf","jh","jq","jw","jx","jz","kq","kz","wj","wq","wz","xg","xh","xj","xk","tq","vk","vq","vz","qg","qk","qj","qo","qw","qz","pz","zf","zp","zq","zv","zw","zx","yj","yq","yj","yq","yw","mq"],f=0,u=0;if(1===t.length)return!0;if(2===t.length)return!z(t,n);if(z(t.substring(t.length-2,t.length),i))return!1;if(z(t.substring(0,2),r))return!1;if(z(t.substring(0,2),n))return v(t);for(var a=g(t),s=0;s<t.length;s++){if(!(t.substring(s,s+3)in e))return!1;f-=+e[t.substring(s,s+3)].toFixed(4)}for(var s=0;s<a.length;s++){if(!(a.substring(s,s+3)in o))return!1;u-=+o[a.substring(s,s+3)].toFixed(4)}return-u-f},h=function(t,n,r){var e={4:[-12.66,-22.67,-32.83],5:[-16.03,-27.08,-39.53],6:[-19.59,-32.99,-45.36],7:[-22.86,-38.37,-53.68],8:[-26.71,-42.46,-58.14],9:[-30.77,-48.42,-70.05],10:[-33.46,-52.31,-71.31],11:[-37.44,-50.28,-77.44],12:[-41.24,-55,-74.55],13:[-45.42,-58.23,-75.94],14:[-48.14,-60.67,-81.33],15:[-52.83,-65.28,-87.08],3:[-9.1,-16.39,-22.51]},i=e[n][0],o=e[n][1],f=e[n][2];return v(t)?!0:r>i?!1:f>r?!1:r>=o},v=function(t){return f.test(t)},g=function(t){var n="";for(i=0;i<t.length;i++)n+=z(t[i],["a","e","i","o","u"])?"v":"'"===t[i]?"p":"c";return n},z=function(t,n){for(var r=0;r<n.length;r++)if(n[r]===t)return!0;return!1}},{"./bloom.js":1,"./read_cv_gram.js":3,"./read_ngram.js":4}]},{},[5])(5)});
