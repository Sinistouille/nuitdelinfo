import{V as m,W as V,X as b,Y as D,Z as p,c as h,s as R,a as I,f as _,_ as L,$ as O,a0 as Y,a1 as H,a2 as $,a3 as C,a4 as M,e as W,G as j,h as E,z as k,K as z,i as G}from"./runtime.BxbSig_V.js";import{a as K,r as N,h as v}from"./events.CQKBbnPS.js";import{b as P}from"./disclose-version.5-VYsvCH.js";const X=["touchstart","touchmove"];function Z(t){return X.includes(t)}function Q(t,e){var n=e==null?"":typeof e=="object"?e+"":e;n!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=n,t.nodeValue=n==null?"":n+"")}function q(t,e){return A(t,e)}function U(t,e){m(),e.intro=e.intro??!1;const n=e.target,u=E,l=_;try{for(var a=V(n);a&&(a.nodeType!==8||a.data!==b);)a=D(a);if(!a)throw p;h(!0),R(a),I();const d=A(t,{...e,anchor:a});if(_===null||_.nodeType!==8||_.data!==L)throw O(),p;return h(!1),d}catch(d){if(d===p)return e.recover===!1&&Y(),m(),H(n),h(!1),q(t,e);throw d}finally{h(u),R(l)}}const i=new Map;function A(t,{target:e,anchor:n,props:u={},events:l,context:a,intro:d=!0}){m();var y=new Set,g=o=>{for(var r=0;r<o.length;r++){var s=o[r];if(!y.has(s)){y.add(s);var f=Z(s);e.addEventListener(s,v,{passive:f});var T=i.get(s);T===void 0?(document.addEventListener(s,v,{passive:f}),i.set(s,1)):i.set(s,T+1)}}};g($(K)),N.add(g);var c=void 0,S=C(()=>{var o=n??e.appendChild(M());return W(()=>{if(a){j({});var r=G;r.c=a}l&&(u.$$events=l),E&&P(o,null),c=t(o,u)||{},E&&(k.nodes_end=_),a&&z()}),()=>{var f;for(var r of y){e.removeEventListener(r,v);var s=i.get(r);--s===0?(document.removeEventListener(r,v),i.delete(r)):i.set(r,s)}N.delete(g),w.delete(c),o!==n&&((f=o.parentNode)==null||f.removeChild(o))}});return w.set(c,S),c}let w=new WeakMap;function x(t){const e=w.get(t);e&&e()}export{U as h,q as m,Q as s,x as u};