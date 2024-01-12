import{j as u}from"./jsx-runtime.KYujgZxC.js";import{r as c}from"./index.068npczX.js";import{u as p}from"./use-motion-value.5OV0e2u_.js";import{u as A}from"./use-scroll.qRjFZ1aC.js";import{i as v,u as _,c as S,f as j,a as x,b as F,M as w,d as y,e as b,g,h as I,m as R}from"./motion.n9FrB57f.js";const T=t=>typeof t=="object"&&t.mix,N=t=>T(t)?t.mix:void 0;function z(...t){const e=!Array.isArray(t[0]),n=e?0:-1,s=t[0+n],r=t[1+n],o=t[2+n],i=t[3+n],a=v(r,o,{mixer:N(o[0]),...i});return e?a(s):a}function C(t,e){const n=p(e()),s=()=>n.set(e());return s(),_(()=>{const r=()=>j.update(s,!1,!0),o=t.map(i=>i.on("change",r));return()=>{o.forEach(i=>i()),S(s)}}),n}function D(t){x.current=[],t();const e=C(x.current,t);return x.current=void 0,e}function h(t,e,n,s){if(typeof t=="function")return D(t);const r=typeof e=="function"?e:z(e,n,s);return Array.isArray(t)?V(t,r):V([t],([o])=>r(o))}function V(t,e){const n=F(()=>[]);return C(t,()=>{n.length=0;const s=t.length;for(let r=0;r<s;r++)n[r]=t[r].get();return e(n)})}function L(t,e={}){const{isStatic:n}=c.useContext(w),s=c.useRef(null),r=p(y(t)?t.get():t),o=()=>{s.current&&s.current.stop()};return c.useInsertionEffect(()=>r.attach((i,a)=>{if(n)return a(i);if(o(),s.current=b({keyframes:[r.get(),i],velocity:r.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...e,onUpdate:a}),!g.isProcessing){const l=performance.now()-g.timestamp;l<30&&(s.current.time=I(l))}return r.get()},o),[JSON.stringify(e)]),_(()=>{if(y(t))return t.on("change",i=>r.set(parseFloat(i)))},[r]),r}function U(t,e,n){c.useInsertionEffect(()=>t.on(e,n),[t,e,n])}function $(t){const e=p(t.getVelocity());return U(t,"velocityChange",n=>{e.set(n)}),e}function B(t){const e=c.useRef(0),{isStatic:n}=c.useContext(w);c.useEffect(()=>{if(n)return;const s=({timestamp:r,delta:o})=>{e.current||(e.current=r),t(r-e.current,o)};return j.update(s,!0),()=>S(s)},[t])}const H=(t,e,n)=>{const s=e-t;return((n-t)%s+s)%s+t},q=({heading:t,wrap:e,className:n="",baseVelocity:s=5})=>{const r=p(0),{scrollY:o}=A(),i=$(o),a=L(i,{damping:50,stiffness:400}),l=h(a,[0,1e3],[0,5],{clamp:!1}),E=h(r,d=>`${H(e[0],e[1],d)}%`),f=c.useRef(1);return B((d,M)=>{let m=f.current*s*(M/1e3);l.get()<-5?f.current=-1:(l.get()>5,f.current=1),m+=f.current*m*l.get(),r.set(r.get()+m)}),u.jsx("div",{className:`-z-10 pointer-events-none absolute left-1/2 -translate-x-1/2 [mask:linear-gradient(90deg,transparent,white_30%,white_70%,transparent)] max-w-[2000px] [text-shadow:3px_3px_0_white,-3px_3px_0_white,-3px_-3px_0_white,3px_-3px_0_white] text-primary-900 ${n}`,children:u.jsxs(R.div,{className:"text-9xl font-bold flex gap-20",style:{x:E},children:[u.jsx("p",{children:t}),u.jsx("p",{children:t}),u.jsx("p",{children:t}),u.jsx("p",{children:t}),u.jsx("p",{children:t})]})})};export{q as S};
