import{S as p,c as h,d as g,a as d,e as k,f as x,g as b,P as j,W as f,b as E}from"./three.module-206db482.js";/* empty css              */import{O as F}from"./OrbitControls-b2284f51.js";import{G as y}from"./lil-gui.esm-1e0f7d72.js";const s=document.querySelector("canvas.webgl"),a=new p,v=new h,z=v.load(["jjk/px.png","jjk/nx.png","jjk/py.png","jjk/ny.png","jjk/pz.png","jjk/nz.png"]),i=new g({metalness:.7,roughness:.2,envMap:z});i.needsUpdate=!0;const w=new y;w.add(i,"metalness").min(0).max(1).step(1e-4);w.add(i,"roughness").min(0).max(1).step(1e-4);const o=new d(new k(.5,16,16),i);o.position.x=-1.5;const l=new d(new x(1,1),i),r=new d(new b(.3,.2,16,32),i);r.position.x=1.5;a.add(o,l,r);const e={width:window.innerWidth,height:window.innerHeight},t=new j(75,e.width/e.height);t.position.z=5;a.add(t);const m=new F(t,s);m.enableDamping=!0;window.addEventListener("resize",()=>{e.width=window.innerWidth,e.height=window.innerHeight,t.aspect=e.width/e.height,c.setSize(e.width,e.height),t.updateProjectionMatrix()});window.addEventListener("dblclick",()=>{document.fullscreenElement||document.webkitFullscreenElement?document.exitFullscreen?document.exitFullscreen():document.webkitFullscreenElement&&document.webkitFullscreenElement():s.requestFullscreen?s.requestFullscreen():s.webkitFullscreenElement&&s.webkitFullscreenElement()});const c=new f({canvas:s});c.setSize(e.width,e.height);c.render(a,t);const S=new E,u=()=>{const n=S.getElapsedTime();o.rotation.y=1*n,l.rotation.y=.1*n,r.rotation.y=.1*n,o.rotation.x=.15*n,l.rotation.x=.15*n,r.rotation.x=.15*n,m.update(),c.render(a,t),window.requestAnimationFrame(u)};u();
//# sourceMappingURL=page2-d86cdf80.js.map