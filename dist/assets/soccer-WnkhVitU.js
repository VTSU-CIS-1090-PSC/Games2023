import{s as t,b as o,t as S}from"./index-UWOARnK8.js";import{W as h}from"./screen-Cr7SDrX4.js";const n=200,E=400;let s=t[0];s.image="🥅";s.x=750;s.y=80;let e=t[1];e.image="⚽";let M="Soccer";const T={"background-color":"skyblue","background-image":"linear-gradient(#424299, skyblue)","border-bottom":"50px solid green"};function D(r,a){let i=Math.abs(r.x-a.x),d=Math.abs(r.y-a.y);return i<10&&d<10}let l=0;function W(r,a){if(D(e,s)){S.title="Goal!!!";return}for(let i=2;i<=12;i++)D(e,t[i])&&(e.x=e.y=0);o.right&&(e.x+=n*a),o.left&&(e.x-=n*a),o.up&&(e.y+=n*a),o.down&&(e.y-=n*a),e.y+=l*a,l=l-E*a,e.y<80&&(l=l*-.8,e.y=80),e.y>500&&(l=l*-.8,e.y=500),e.x<0&&(e.x=0),e.x>h&&(e.x=h)}const y=t[2];y.image="🧱";y.x=400;y.y=80;const c=t[3];c.image="🧱";c.x=400;c.y=140;const x=t[4];x.image="🧱";x.x=400;x.y=200;const g=t[5];g.image="🧱";g.x=200;g.y=470;const m=t[6];m.image="🧱";m.x=200;m.y=400;const f=t[7];f.image="🧱";f.x=200;f.y=330;const u=t[8];u.image="🧱";u.x=200;u.y=260;const w=t[9];w.image="🧱";w.x=600;w.y=470;const b=t[10];b.image="🧱";b.x=600;b.y=400;const p=t[11];p.image="🧱";p.x=600;p.y=330;const k=t[12];k.image="🧱";k.x=600;k.y=260;export{T as background,W as frame,M as name};