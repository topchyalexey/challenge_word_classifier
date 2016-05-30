var f,S=0.5
/**fuzzyset.js
*@licence BSD
*Copyright (c) 2016 Glen Chiacchieri*/
var F=function(){var a=function(a,b,c,d){var e={version:"0.0.1"};a=a||[],e.gramSizeLower=c||2,e.gramSizeUpper=d||3,e.useLevenshtein="boolean"!=typeof b?!0:b,e.exactSet={},e.matchDict={},e.items={};var f=function(a,b){for(var d,e,c=[],f=0;f<=b.length;f++)for(var g=0;g<=a.length;g++)e=f&&g?a.charAt(g-1)===b.charAt(f-1)?d:Math.min(c[g],c[g-1],d)+1:f+g,d=c[g],c[g]=e;return c.pop()},g=function(a,b){if(null===a&&null===b)throw"Trying to compare two null values";if(null===a||null===b)return 0;a=String(a),b=String(b);var c=f(a,b);return a.length>b.length?1-c/a.length:1-c/b.length},h=/[^\w, ]+/,i=function(a,b){b=b||2;var c="-"+a.toLowerCase().replace(h,"")+"-",d=b-c.length,e=[];if(d>0)for(var f=0;d>f;++f)a+="-";for(var f=0;f<c.length-b+1;++f)e.push(c.slice(f,f+b));return e},j=function(a,b){b=b||2;var c={},d=i(a,b),e=0;for(e;e<d.length;++e)d[e]in c?c[d[e]]+=1:c[d[e]]=1;return c};e.get=function(a,b){var c=this._get(a);return c||"undefined"==typeof b?c:b},e._get=function(a){var b=this._normalizeStr(a),c=this.exactSet[b];if(c)return[[1,c]];for(var d=[],e=this.gramSizeUpper;e>=this.gramSizeLower;--e)if(d=this.__get(a,e))return d;return null},e.__get=function(a,b){function o(a){for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}var i,k,l,m,n,c=this._normalizeStr(a),d={},e=j(c,b),f=this.items[b],h=0;for(i in e)if(k=e[i],h+=Math.pow(k,2),i in this.matchDict)for(l=0;l<this.matchDict[i].length;++l)m=this.matchDict[i][l][0],n=this.matchDict[i][l][1],m in d?d[m]+=k*n:d[m]=k*n;if(o(d))return null;var r,p=Math.sqrt(h),q=[];for(var s in d)r=d[s],q.push([r/(p*f[s][0]),f[s][1]]);var t=function(a,b){return a[0]<b[0]?1:a[0]>b[0]?-1:0};if(q.sort(t),this.useLevenshtein){for(var u=[],v=Math.min(50,q.length),l=0;v>l;++l)u.push([g(q[l][1],c),q[l][1]]);q=u,q.sort(t)}for(var u=[],l=0;l<q.length;++l)q[l][0]==q[0][0]&&u.push([q[l][0],this.exactSet[q[l][1]]]);return u},e.add=function(a){var b=this._normalizeStr(a);if(b in this.exactSet)return!1;var c=this.gramSizeLower;for(c;c<this.gramSizeUpper+1;++c)this._add(a,c)},e._add=function(a,b){var c=this._normalizeStr(a),d=this.items[b]||[],e=d.length;d.push(0);var h,i,f=j(c,b),g=0;for(h in f)i=f[h],g+=Math.pow(i,2),h in this.matchDict?this.matchDict[h].push([e,i]):this.matchDict[h]=[[e,i]];var k=Math.sqrt(g);d[e]=[k,c],this.items[b]=d,this.exactSet[c]=a},e._normalizeStr=function(a){return a.toLowerCase()},e.length=function(){var b,a=0;for(b in this.exactSet)this.exactSet.hasOwnProperty(b)&&(a+=1);return a},e.isEmpty=function(){for(var a in this.exactSet)if(this.exactSet.hasOwnProperty(a))return!1;return!0},e.values=function(){var b,a=[];for(b in this.exactSet)this.exactSet.hasOwnProperty(b)&&a.push(this.exactSet[b]);return a};var k=e.gramSizeLower;for(k;k<e.gramSizeUpper+1;++k)e.items[k]=[];for(k=0;k<a.length;++k)e.add(a[k]);return e};return a}()
module.exports={init:(a)=>{f=new F(a.toString().split(' '))},test:(a)=>{var b=f.get(a);if(b&&b.length&&b[0][0]>=S)return true;return false}}