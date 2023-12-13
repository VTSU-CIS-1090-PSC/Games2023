(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const w="modulepreload",L=function(e){return"/"+e},p={},i=function(t,s,a){if(!s||s.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(s.map(r=>{if(r=L(r),r in p)return;p[r]=!0;const n=r.endsWith(".css"),f=n?'[rel="stylesheet"]':"";if(!!a)for(let u=o.length-1;u>=0;u--){const d=o[u];if(d.href===r&&(!n||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${f}`))return;const c=document.createElement("link");if(c.rel=n?"stylesheet":w,n||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),n)return new Promise((u,d)=>{c.addEventListener("load",u),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t()).catch(r=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=r,window.dispatchEvent(n),!n.defaultPrevented)throw r})},T=(e,t)=>{const s=e[t];return s?typeof s=="function"?s():Promise.resolve(s):new Promise((a,o)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(o.bind(null,new Error("Unknown variable dynamic import: "+t)))})};let l={up:!1,down:!1,left:!1,right:!1,space:!1,enter:!1};document.onkeyup=document.onkeydown=function(e){let t=e.type=="keydown";switch(e.key){case"ArrowUp":e.preventDefault(),l.up=t;break;case"ArrowDown":e.preventDefault(),l.down=t;break;case"ArrowLeft":e.preventDefault(),l.left=t;break;case"ArrowRight":e.preventDefault(),l.right=t;break;case" ":e.preventDefault(),l.space=t;break;case"Enter":e.preventDefault(),l.enter=t;break}};const b=30;let P=document.querySelector("#screen"),v=[];for(let e=0;e<b;e++){let t={image:"",x:0,y:0,flipH:!1,flipV:!1,rotation:0},s=document.createElement("div");s.className="sprite",t._div=s,P.appendChild(s),v.push(t)}function D(){for(let e of v){let t=e._div;t.innerText=e.image,t.style.color=e.color,t.style.left=e.x-t.clientWidth/2+"px",t.style.bottom=e.y-t.clientHeight/2+"px",t.style.transform=`rotate(${e.rotation}deg) scale(${e.flipH?-1:1},${e.flipV?-1:1})`}}let g=document.querySelector("#screen > h1"),h=document.querySelector("#screen > h2"),m={title:"",score:"",color:"black"};function O(){g.innerHTML=m.title,h.innerHTML=m.score,g.style.color=m.color,h.style.color=m.color}window.addEventListener("hashchange",e=>{var t;(t=window.location.hash)!=null&&t.substring(1)&&window.location.reload()});var y;const E=(y=window.location.hash)==null?void 0:y.substring(1);E&&T(Object.assign({"./games/bird.js":()=>i(()=>import("./bird-ts--syb-.js"),__vite__mapDeps([0,1])),"./games/comet.js":()=>i(()=>import("./comet-m2GE0Rvl.js"),__vite__mapDeps([2,1])),"./games/cow.js":()=>i(()=>import("./cow-BGxs_9Qv.js"),__vite__mapDeps([3,1])),"./games/descent.js":()=>i(()=>import("./descent--9cOFThL.js"),__vite__mapDeps([4,1])),"./games/goon.js":()=>i(()=>import("./goon-F4wNCFxD.js"),__vite__mapDeps([5,1])),"./games/hoops.js":()=>i(()=>import("./hoops-QlCGiao-.js"),__vite__mapDeps([6,1])),"./games/hurdle.js":()=>i(()=>import("./hurdle-FqNC1hXx.js"),__vite__mapDeps([7,1])),"./games/key.js":()=>i(()=>import("./key-nvdRnRkR.js"),__vite__mapDeps([8,1])),"./games/money.js":()=>i(()=>import("./money-ZDx0O9zG.js"),__vite__mapDeps([])),"./games/penguin.js":()=>i(()=>import("./penguin-63mcBPss.js"),__vite__mapDeps([9,1])),"./games/shape.js":()=>i(()=>import("./shape-K1lHqK5U.js"),__vite__mapDeps([10,1])),"./games/snow.js":()=>i(()=>import("./snow-SDSWDm9P.js"),__vite__mapDeps([11,1])),"./games/soccer.js":()=>i(()=>import("./soccer-WnkhVitU.js"),__vite__mapDeps([12,1])),"./games/track.js":()=>i(()=>import("./track-GyU9LBUB.js"),__vite__mapDeps([]))}),`./games/${E}.js`).then(e=>{const t=document.querySelector("#background"),s=document.querySelector("#name");s.innerHTML=e.name;const a=new Date().getTime();let o=a;requestAnimationFrame(r);function r(){const n=new Date().getTime(),f=(n-o)/1e3,_=(n-a)/1e3;o=n,e.frame(_,f),D();for(const c in e.background)t.style[c]=e.background[c];O(),requestAnimationFrame(r)}});export{l as b,v as s,m as t};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/bird-ts--syb-.js","assets/screen-Cr7SDrX4.js","assets/comet-m2GE0Rvl.js","assets/cow-BGxs_9Qv.js","assets/descent--9cOFThL.js","assets/goon-F4wNCFxD.js","assets/hoops-QlCGiao-.js","assets/hurdle-FqNC1hXx.js","assets/key-nvdRnRkR.js","assets/penguin-63mcBPss.js","assets/shape-K1lHqK5U.js","assets/snow-SDSWDm9P.js","assets/soccer-WnkhVitU.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}