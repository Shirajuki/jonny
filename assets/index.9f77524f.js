import{l as d,i as m}from"./vendor.4c2c9d6a.js";const w=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}};w();const f=document.getElementById("wave");if(f){const r=f.getContext("2d"),l=f.height,c=f.width,i=[{x:Math.floor(Math.random()*1e3),dx:1,y:1,color:"rgba(133, 110, 255,0.4)"},{x:Math.floor(Math.random()*1e3),dx:.5,y:1,color:"rgba(55, 37, 145,0.6)"},{x:Math.floor(Math.random()*1e3),dx:.1,y:1,color:"rgba(108, 83, 233,1)"}],e=(o,s,n,h)=>{let a=0,u=0,y=17,g=45;for(o.beginPath(),o.lineWidth=1,o.fillStyle=h;a<c+10;)u=l/2-n*2+y*Math.sin((a+s)/g),o.lineTo(a,u),a+=100;o.lineTo(a,200),o.lineTo(0,200),o.fill()},t=()=>{r.clearRect(0,0,c,l),r.save(),r.translate(0,15);for(let o=i.length-1,s=o;s>=0;s--){const n=i[s];e(r,n.x,n.y,n.color),n.x+=n.dx}r.restore(),window.requestAnimationFrame(t)};t()}d.init();d.addDriver("scrollY",function(){return window.scrollY});d.addElements(".shape",{scrollY:{translateY:[["elInY","elCenterY","elOutY"],[-50,0,50]]}});d.addElements(".desktop",{scrollY:{translateY:[["elInY","elCenterY","elOutY"],[-100,0,100]]}});d.addElements(".mobile",{scrollY:{translateY:[["elInY","elCenterY","elOutY"],[-80,0,80]]}});m(".inview-js").on("enter",function(r){r.classList.add("in-view")}).check();m.offset(window.innerHeight/8);
