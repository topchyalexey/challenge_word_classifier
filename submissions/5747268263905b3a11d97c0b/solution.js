let f=String.fromCharCode,B=61000,E=86222,V=[],g={},s={},p={},d={},y={},Z={},z=0,S=i=>{let a=i%27,b=(i/27)%27,s=f(97+i/729);if(b)s+=f(96+b);if(a)s+=f(96+a);return s},q=w=>{let r=w.replace(/'s/,''),t='',c=0,h=0,i,k;for(i=0;i<r.length;i++)if(r[i].match(/[eyuioa]/)){if(c)t+=c>8?8:c;}else c++;if(w.length>15||!w.match(/^[\w]+('s)?$/)||y[r]||(r.length>3&&!p[r.slice(0,3)])||(t&&!g[t]))return 0;for(k in d)if(w.includes(k))return 0;if(r.length<4)return s[r];r=r.slice(0,7);for(i=0;i<r.length;i++)h=(h*1664525+r.charCodeAt(i)+1013930520)%0x100000000;h=(h&0x7FFFFFFF)%(B*8);return (V[h>>5]>>(h%32))&1;};module.exports = {init(b){let l=0,i;for(i=0;i<B;i+=4)V[i/4]=b.readInt32LE(i);for(;i<70076;i+=4)g[l+=b.readInt32LE(i)]=1;for(l=0;i<78866;i+=2)s[S(l+=b.readInt16LE(i))]=1;for(l=0;i<85846;i+=2)p[S(l+=b.readInt16LE(i))]=1;for(;i<E;i+=2)d[f(b[i])+f(b[i+1])]=1;b.toString('utf8',E).split(' ').forEach(w=>y[w]=1);},test(w){let t=q(w),r=z>1500000&&!Z[w]?0:t;if(z<6000000){z++;if(t)Z[w]=1;}return !!r;}};