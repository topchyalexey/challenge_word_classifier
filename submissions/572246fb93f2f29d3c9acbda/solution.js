function Bits(){function t(t){return r[Math.floor(t/32)]>>>t%32&1}function n(t){r[Math.floor(t/32)]|=1<<t%32}var r=[];return{test:t,set:n}}function Hash(){var t=Math.floor(32*Math.random())+32;return function(n){for(var r=1,o=0;o<n.length;++o)r=t*r+n.charCodeAt(o)&4294967295;return r}}function Bloom(t,n){function r(r){for(var o=0;o<n.length;++o)e.set(n[o](r)%t)}function o(r){for(var o=0;o<n.length;++o)if(!e.test(n[o](r)%t))return!1;return!0}var e=Bits();return{add:r,test:o}}function init(n){for(var r=n.toString().split("\n"),o=0;o<r.length;++o)t.add(r[o])}var t=Bloom(1e4,[Hash(),Hash()]);module.exports={init:init,test:t.test};
