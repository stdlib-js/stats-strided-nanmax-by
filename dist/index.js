"use strict";var q=function(i,a){return function(){try{return a||i((a={exports:{}}).exports,a),a.exports}catch(u){throw (a=0, u)}};};var m=q(function(I,d){
var y=require('@stdlib/math-base-assert-is-nan/dist'),Z=require('@stdlib/math-base-assert-is-positive-zero/dist');function j(i,a,u,t,c,s){var n,v,o,e,r,f;if(n=a.data,v=a.accessors[0],i===1||u===0)return r=c.call(s,v(n,t),0,t,n),r===void 0||y(r)?NaN:r;for(e=t,f=0;f<i&&(o=c.call(s,v(n,e),f,e,n),!(o===o&&o!==void 0));f++)e+=u;if(f===i)return NaN;for(f+=1,f;f<i;f++)e+=u,r=c.call(s,v(n,e),f,e,n),!(r===void 0||y(r))&&(r>o||r===o&&Z(r))&&(o=r);return o}d.exports=j
});var l=q(function(J,x){
var N=require('@stdlib/math-base-assert-is-nan/dist'),O=require('@stdlib/math-base-assert-is-positive-zero/dist'),R=require('@stdlib/array-base-arraylike2object/dist'),w=m();function z(i,a,u,t,c,s){var n,v,o,e,r;if(i<=0)return NaN;if(o=R(a),o.accessorProtocol)return w(i,o,u,t,c,s);if(i===1||u===0)return e=c.call(s,a[t],0,t,a),e===void 0?NaN:e;for(v=t,r=0;r<i&&(n=c.call(s,a[v],r,v,a),!(n===n&&n!==void 0));r++)v+=u;if(r===i)return NaN;for(r+=1,r;r<i;r++)v+=u,e=c.call(s,a[v],r,v,a),!(e===void 0||N(e))&&(e>n||e===n&&O(e))&&(n=e);return n}x.exports=z
});var B=q(function(K,p){
var C=require('@stdlib/strided-base-stride2offset/dist'),D=l();function E(i,a,u,t,c){return D(i,a,u,C(i,u),t,c)}p.exports=E
});var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),P=B(),G=l();F(P,"ndarray",G);module.exports=P;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
