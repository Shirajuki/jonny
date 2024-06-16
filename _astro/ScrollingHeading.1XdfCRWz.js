import{j as a}from"./jsx-runtime.KYujgZxC.js";import{r as u}from"./index.068npczX.js";import{u as p,a as A}from"./use-motion-value-event.g9YvgHPQ.js";import{u as E}from"./use-scroll.yCNW8A3O.js";import{i as b,u as _,c as S,f as j,a as x,b as F,M as w,d as y,e as R,g,h as T,m as I}from"./motion.8qeVckjW.js";const N=t=>typeof t=="object"&&t.mix,z=t=>N(t)?t.mix:void 0;function D(...t){const e=!Array.isArray(t[0]),r=e?0:-1,s=t[0+r],n=t[1+r],o=t[2+r],i=t[3+r],c=b(n,o,{mixer:z(o[0]),...i});return e?c(s):c}function C(t,e){const r=p(e()),s=()=>r.set(e());return s(),_(()=>{const n=()=>j.update(s,!1,!0),o=t.map(i=>i.on("change",n));return()=>{o.forEach(i=>i()),S(s)}}),r}function L(t){x.current=[],t();const e=C(x.current,t);return x.current=void 0,e}function h(t,e,r,s){if(typeof t=="function")return L(t);const n=typeof e=="function"?e:D(e,r,s);return Array.isArray(t)?V(t,n):V([t],([o])=>n(o))}function V(t,e){const r=F(()=>[]);return C(t,()=>{r.length=0;const s=t.length;for(let n=0;n<s;n++)r[n]=t[n].get();return e(r)})}function U(t,e={}){const{isStatic:r}=u.useContext(w),s=u.useRef(null),n=p(y(t)?t.get():t),o=()=>{s.current&&s.current.stop()};return u.useInsertionEffect(()=>n.attach((i,c)=>{if(r)return c(i);if(o(),s.current=R({keyframes:[n.get(),i],velocity:n.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...e,onUpdate:c}),!g.isProcessing){const l=performance.now()-g.timestamp;l<30&&(s.current.time=T(l))}return n.get()},o),[JSON.stringify(e)]),_(()=>{if(y(t))return t.on("change",i=>n.set(parseFloat(i)))},[n]),n}function $(t){const e=p(t.getVelocity());return A(t,"velocityChange",r=>{e.set(r)}),e}function k(t){const e=u.useRef(0),{isStatic:r}=u.useContext(w);u.useEffect(()=>{if(r)return;const s=({timestamp:n,delta:o})=>{e.current||(e.current=n),t(n-e.current,o)};return j.update(s,!0),()=>S(s)},[t])}const B=(t,e,r)=>{const s=e-t;return((r-t)%s+s)%s+t},q=({heading:t,wrap:e,className:r="",baseVelocity:s=5})=>{const n=p(0),{scrollY:o}=E(),i=$(o),c=U(i,{damping:50,stiffness:400}),l=h(c,[0,1e3],[0,5],{clamp:!1}),v=h(n,d=>`${B(e[0],e[1],d)}%`),f=u.useRef(1);return k((d,M)=>{let m=f.current*s*(M/1e3);l.get()<-5?f.current=-1:(l.get()>5,f.current=1),m+=f.current*m*l.get(),n.set(n.get()+m)}),a.jsx("div",{className:`-z-10 pointer-events-none absolute left-1/2 -translate-x-1/2 [mask:linear-gradient(90deg,transparent,white_30%,white_70%,transparent)] max-w-[2000px] [text-shadow:3px_3px_0_white,-3px_3px_0_white,-3px_-3px_0_white,3px_-3px_0_white] text-primary-900 ${r}`,children:a.jsxs(I.div,{className:"text-9xl font-bold flex gap-20",style:{x:v},children:[a.jsx("p",{children:t}),a.jsx("p",{children:t}),a.jsx("p",{children:t}),a.jsx("p",{children:t}),a.jsx("p",{children:t})]})})};export{q as S};
