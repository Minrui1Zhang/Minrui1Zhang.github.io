const slides=[...document.querySelectorAll('.slide')];
const deck=document.querySelector('#deck');
const counter=document.querySelector('#counter');
const previous=document.querySelector('#prev');
const next=document.querySelector('#next');
const toc=document.querySelector('#toc');
const lightbox=document.querySelector('#lightbox');
let current=0,notesVisible=false;
function sync(index){
 current=Math.max(0,Math.min(slides.length-1,index));
 counter.textContent=`${String(current+1).padStart(2,'0')} / ${slides.length}`;
 document.querySelector('#progress').style.width=`${(current+1)/slides.length*100}%`;
 previous.disabled=current===0;next.disabled=current===slides.length-1;
 document.querySelectorAll('nav a').forEach(a=>{const target=document.querySelector(a.hash);const active=Boolean(target && target.dataset.paper===slides[current].dataset.paper);a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','true');else a.removeAttribute('aria-current')});
 if(location.hash!==`#slide-${current+1}`)history.replaceState(null,'',`#slide-${current+1}`);
}
function go(index){index=Math.max(0,Math.min(slides.length-1,index));sync(index);deck.scrollTo({top:slides[index].offsetTop,behavior:'instant'});}
let pending=false;
deck.addEventListener('scroll',()=>{if(pending)return;pending=true;requestAnimationFrame(()=>{const y=deck.scrollTop+2;let index=0;slides.forEach((s,i)=>{if(s.offsetTop<=y)index=i});sync(index);pending=false})},{passive:true});
previous.addEventListener('click',()=>go(current-1));next.addEventListener('click',()=>go(current+1));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();go(Number(a.hash.replace('#slide-',''))-1)}));
document.querySelector('.toc-grid').innerHTML=slides.map((s,i)=>`<a href="#slide-${i+1}"><span>${String(i+1).padStart(2,'0')}</span>${s.querySelector('h1').textContent}</a>`).join('');
toc.querySelectorAll('a').forEach((a,i)=>a.addEventListener('click',e=>{e.preventDefault();toc.close();go(i)}));
document.querySelector('#indexButton').addEventListener('click',()=>toc.showModal());
document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',()=>b.closest('dialog').close()));
document.querySelectorAll('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close()}}));
document.querySelectorAll('[data-image]').forEach(b=>b.addEventListener('click',()=>{const img=lightbox.querySelector('img');img.src=b.dataset.image;img.alt=b.querySelector('img').alt;lightbox.showModal()}));
function toggleNotes(){notesVisible=!notesVisible;document.querySelectorAll('.speaker-note').forEach(n=>n.hidden=!notesVisible);document.querySelector('#notes').setAttribute('aria-pressed',String(notesVisible));go(current)}
document.querySelector('#notes').addEventListener('click',toggleNotes);
async function toggleFullscreen(){try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen()}catch{document.querySelector('#fullscreen').textContent='请按 F11'}}
document.querySelector('#fullscreen').addEventListener('click',toggleFullscreen);
document.addEventListener('keydown',e=>{
 if(document.querySelector('dialog[open]')||e.ctrlKey||e.metaKey||e.altKey)return;
 if(e.target.closest('button,a,input,textarea,select') && (e.key===' '||e.key==='Enter'))return;
 if(['ArrowRight','ArrowDown','PageDown',' '].includes(e.key)){e.preventDefault();go(current+1)}
 else if(['ArrowLeft','ArrowUp','PageUp'].includes(e.key)){e.preventDefault();go(current-1)}
 else if(e.key==='Home'){e.preventDefault();go(0)}else if(e.key==='End'){e.preventDefault();go(slides.length-1)}
 else if(e.key.toLowerCase()==='n')toggleNotes();else if(e.key.toLowerCase()==='f')toggleFullscreen();
});
window.addEventListener('hashchange',()=>{const n=Number(location.hash.replace('#slide-',''));if(Number.isInteger(n)&&n>0&&n<=slides.length)go(n-1)});
window.addEventListener('resize',()=>go(current));
const initial=Number(location.hash.replace('#slide-',''));
go(Number.isInteger(initial)&&initial>0&&initial<=slides.length?initial-1:0);
window.addEventListener('load',()=>go(current));
