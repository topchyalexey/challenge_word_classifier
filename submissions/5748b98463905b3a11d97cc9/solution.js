function mth(){for(var t,r,n,e,o=[],l={},i=psb.length,u=i;u--;)for(t=i;t--;)for(r=i;r--;)for(n=i;n--;)e=psb[u]+psb[t]+psb[r]+psb[n],o.push(e),l[e]=o.length;return{list:o,thm:l}}function unDt(t,r,n){var e,o,l,i,u,f,h,s,d,a,c,g,w,b,p,v=Math.ceil(n/8);for(v%4>0&&(v+=4-v%4),e=[],o=0;v/4>o;o++)for(l=t.readInt32LE(4*o),i=0;32>i;i++)u=32*o+i,gbt(l,i)&&e.push(u);for(f=e.length,h=Math.ceil(f/8),h%4>0&&(h+=4-h%4),s=Array(r),d=h*r,o=0;r>o;o++){for(a=new Uint32Array(f),a.fill(0),l=0,c=0;h/4>c;c++)for(l=t.readInt32BE(v+o*h+4*c),i=0;32>i;i++)g=32*c+i,g<a.length&&gbt(l,i)&&(a[g]=1);s[o]=a}for(w=t.toString("ascii",d+v).split("#"),b=Array(s.length),o=0;o<b.length;o++){for(p=new Uint32Array(n),p.fill(0),c=0;c<e.length;c++)p[e[c]]=s[o][c];b[o]=p}return{cube:b,udclm:e.sort(),unrecWords:w}}function chkW(t,r,n,e,o){var l,i,u;if(-1!==n.indexOf(t))return!1;for(t=dvwd(t),l=0;l<t.length;l++)if(i=padWord(t.substring(l,l+o),o),u=e.thm[i],0===r[l][u])return!1;return!0}function padWord(t,r){for(var n=r-t.length;n--;)t+="'";return t}function dvwd(t){return t.replace(RegExp("["+vowels+"]","g"),"'")}function gbt(t,r){return(t>>>r)%2!=0}function init(t){var r=unDt(t,wd.mwl,wd.threes.list.length);wd.cube=r.cube,wd.unrecWords=r.unrecWords}function test(t){if(t.length>wd.mwl)return!1;var r=chkW(t,wd.cube,wd.unrecWords,wd.threes,wd.bln);return r}var psb="g'hpmducltroniase",vowels="qjxzwkvfyb",ew=["sileness$"],wd={bln:4,mwl:14,threes:mth()};module.exports={init:init,test:test};