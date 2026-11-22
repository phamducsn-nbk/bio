/* tuychinh.js – giao diện thích ứng điện thoại / máy tính + nút chọn chế độ giao diện
   (nạp sau giaodien.js, trước khoidau.js) */
(()=>{
const VM=[['auto','🔄','Tự động'],['m','📱','Điện thoại'],['d','🖥️','Máy tính']];
const VP='width=device-width, initial-scale=1, viewport-fit=cover';

const css=`
/* sửa cỡ chữ nút (khai báo font cũ bị trình duyệt bỏ qua) */
button,input,select,textarea{font-family:inherit}
.btn{font-size:15px;font-weight:600}.btn.sm{font-size:13px}
nav button,.tabs button{font-size:15px;font-weight:700}
.li,.opt{font-size:16px}
#gate .gr button{font-size:20px;font-weight:800}
.lay>*,.mw>*,.two>*{min-width:0}
.tabs{flex-wrap:wrap}
.hb{display:flex;gap:8px;align-items:center;flex:none;margin-left:auto}
.hb .btn{white-space:nowrap}
html.m .stats{flex-wrap:nowrap;white-space:nowrap;max-width:100%}
html.m .nbk{white-space:nowrap}
html:not(.m) header{flex-wrap:wrap}
@media (min-width:1100px){
 html:not(.m) body header{flex-wrap:nowrap}
 html:not(.m) body header>.ht{flex:none}
 html:not(.m) body header>.nbkw{order:2;flex:1 1 0;min-width:0;flex-direction:column;flex-wrap:nowrap;gap:6px;margin:0}
 html:not(.m) body header>.hb{order:3;margin-left:0}
 html:not(.m) body .nbk{font-size:clamp(16px,1.6vw,26px)}
 html:not(.m) body .stats{font-size:13px}
}
.aq{background:var(--pri2);padding:8px 12px;border-radius:12px 12px 12px 4px;margin:10px 0 4px;font-weight:600;word-break:break-word}
.aa{background:var(--bg);border:1px solid var(--bd);padding:8px 12px;border-radius:12px;white-space:pre-wrap;line-height:1.55;word-break:break-word}
#ail{max-height:60vh;overflow-y:auto;margin-top:6px}
.ft2{text-align:center;font-size:12px;color:var(--mut);padding:18px 12px calc(18px + env(safe-area-inset-bottom,0px))}
.ft2 a{color:var(--mut);text-decoration:underline;cursor:pointer;margin:0 8px}
html:not(.m) header>.nbkw{flex:0 0 100%;order:3;display:flex;justify-content:center;align-items:center;flex-wrap:wrap;gap:6px 18px;margin:2px 0 0}
html:not(.m) .stats{margin-top:0}
#vm .vl{margin-left:4px}
#gate .gv{margin-top:16px;color:var(--mut);font-size:14px}
#gate .gv button{border:2px solid var(--bd);background:var(--bg);color:var(--tx);border-radius:10px;padding:6px 10px;margin:4px 2px;cursor:pointer;font-size:14px;font-weight:600}
#gate .gv button.on,.vmo.on{border-color:var(--pri);background:var(--pri2);color:var(--pri)}

/* ===== Chế độ điện thoại (html.m) ===== */
html.m body{overflow-x:hidden}
html.m header{display:grid;grid-template-columns:1fr auto;gap:4px 8px;align-items:center;padding:8px 12px;flex-wrap:initial}
html.m header>.dc{opacity:.22}html.m header>.dc:nth-of-type(n+5){display:none}
html.m header>.hi{display:none}
html.m header>.ht{display:contents}
html.m header .ht h1{grid-column:1;grid-row:1;font-size:15px;line-height:1.25;margin:0}
html.m header .sub{grid-column:1/-1;grid-row:2;flex-wrap:nowrap;white-space:nowrap;justify-content:space-between;gap:4px;font-size:2.6vw;margin:2px 0 0}
html.m .hb{display:flex;gap:6px;grid-column:2;grid-row:1;justify-content:flex-end;align-items:center}
html.m .hb .btn{padding:6px 9px;font-size:12px;min-height:34px}
html.m .hb .vl{display:none}
html.m header>.nbkw{grid-column:1/-1;grid-row:3;margin:2px 0 0;flex:none}
html.m .nbk{font-size:17px;padding:4px 14px}
html.m .stats{font-size:11.5px;padding:3px 10px;gap:2px 10px;margin-top:5px}
html.m nav{padding:6px 8px;gap:4px;scrollbar-width:none}html.m nav::-webkit-scrollbar{display:none}
html.m nav button{padding:8px 12px;font-size:14px}
html.m #tbar{padding:6px 10px;font-size:13px}
html.m #tbar .btn{padding:7px 10px;font-size:13px}
html.m .lay{display:block;padding:10px}
html.m #ls{margin-bottom:10px}
html.m #ls .card{display:flex;gap:6px;align-items:center;overflow-x:auto;padding:8px 10px;margin:0;scrollbar-width:thin}
html.m #ls .card h2{flex:none;font-size:14px;margin:0;white-space:nowrap}html.m #ls .card h2::after{display:none}
html.m #ls .card .s{margin:0;white-space:nowrap}
html.m #ls .li{width:auto;flex:none;white-space:nowrap;border:1px solid var(--bd);padding:7px 12px}
html.m #ls .li.on{border-color:var(--pri)}
html.m #ls .row{flex:none;min-width:260px;margin:0!important}
html.m .card{padding:12px;border-radius:14px}
html.m .tabs{flex-wrap:nowrap;overflow-x:auto;scroll-snap-type:x proximity;margin-bottom:10px;padding-bottom:4px;scrollbar-width:none}
html.m .tabs::-webkit-scrollbar{display:none}
html.m .tabs button{flex:none;font-size:13px;padding:9px 12px;scroll-snap-align:start}
html.m .mw,html.m .two{grid-template-columns:1fr}
html.m input,html.m textarea,html.m select{font-size:16px}
html.m .btn{min-height:40px}html.m .btn.sm{min-height:34px}
html.m .opt{padding:14px}
html.m .row{gap:6px}
html.m .it{flex-wrap:wrap}
html.m table.pn td,html.m table.pn th{padding:5px 6px;font-size:13px}
html.m .mdl{align-items:flex-end;padding:0}
html.m .mb{width:100%;max-width:100%;min-width:0;max-height:92dvh;border-radius:18px 18px 0 0;padding:18px 14px calc(16px + env(safe-area-inset-bottom,0px))}
html.m .mb iframe{width:100%!important}
html.m #gate .gb{padding:20px 16px;border-radius:20px}
html.m #gate .gr button{flex-basis:100%;padding:16px 10px}
html.m #gate .gr button span{font-size:36px}
html.m .lab{padding:16px}
/* giả lập điện thoại khi chọn chế độ điện thoại trên màn hình rộng */
html.fm body{max-width:480px;margin:0 auto;box-shadow:0 0 40px rgba(0,0,0,.25)}
html.fm header,html.fm nav{max-width:480px}
`;
const st=document.createElement('style');st.textContent=css;document.head.append(st);

/* gom nút trên banner vào một nhóm, đánh dấu icon / tiêu đề */
const hd=document.querySelector('header');
const divs=[...hd.children].filter(x=>x.tagName==='DIV'&&!x.classList.contains('nbkw')&&!x.classList.contains('sp'));
if(divs[0])divs[0].classList.add('hi');
if(divs[1])divs[1].classList.add('ht');
const hb=document.createElement('div');hb.className='hb';
const vm=document.createElement('button');vm.id='vm';vm.className='btn g';vm.type='button';
['an','bk','tm','theme'].forEach(id=>{const e=$(id);if(e)hb.append(e)});
hb.append(vm);
(hd.querySelector('.nbkw')||null)?hd.insertBefore(hb,hd.querySelector('.nbkw')):hd.append(hb);

/* ---------- chọn chế độ ---------- */
const mq=matchMedia('(max-width:760px)');
function apply(){
 const mode=store.get('bio_view','auto'),R=document.documentElement,meta=document.querySelector('meta[name=viewport]');
 const narrow=mq.matches,m=mode==='m'||(mode==='auto'&&narrow);
 R.classList.toggle('m',m);R.classList.toggle('fm',mode==='m'&&!narrow);
 const want=mode==='d'?'width=1100':VP;if(meta&&meta.content!==want)meta.content=want;
 fitBanner();
 const cur=VM.find(x=>x[0]===mode);
 vm.innerHTML='<span>'+cur[1]+'</span><span class="vl">'+cur[2]+'</span>';
 vm.title='Chế độ giao diện: '+cur[2]+' (bấm để đổi)';
 document.querySelectorAll('[data-vm]').forEach(b=>b.classList.toggle('on',b.dataset.vm===mode));
 document.querySelectorAll('#gate .gv button').forEach(b=>b.classList.toggle('on',b.dataset.vm===mode))}
window.setView=m=>{store.set('bio_view',m);apply()};
window.gvHtml=()=>'<div class="gv">Giao diện: '+VM.map(([k,i,n])=>`<button data-vm="${k}">${i} ${n}</button>`).join('')+'</div>';
vm.onclick=()=>{const cur=store.get('bio_view','auto'),i=VM.findIndex(x=>x[0]===cur);setView(VM[(i+1)%VM.length][0])};
document.addEventListener('click',e=>{const b=e.target.closest('[data-vm]');if(b)setView(b.dataset.vm)});
(mq.addEventListener?mq.addEventListener('change',apply):mq.addListener(apply));
apply();

/* ---------- Tự chỉnh cỡ chữ banner ở chế độ điện thoại ---------- */
function fitTo(el,max,min,ok){if(!el)return;let s=max;el.style.fontSize=s+'px';while(s>min&&!ok()){s-=.5;el.style.fontSize=s+'px'}}
function fitBanner(){
 const R=document.documentElement,h1=hd.querySelector('.ht h1'),sub=hd.querySelector('.sub'),link=hd.querySelector('.nbk'),stats=$('stats'),box=hd.querySelector('.nbkw');
 [h1,sub,link,stats].forEach(e=>e&&(e.style.fontSize=''));
 if(!R.classList.contains('m'))return;
 const W=hd.clientWidth;
 /* chữ chạy ngang hàng: to nhất có thể mà vẫn vừa một dòng */
 fitTo(sub,Math.min(13.5,W/26),8,()=>sub.scrollWidth<=sub.clientWidth+1);
 fitTo(link,Math.min(20,W/17),12,()=>link.getBoundingClientRect().width<=box.clientWidth-6);
 fitTo(stats,Math.min(12.5,W/29),9,()=>stats.getBoundingClientRect().width<=box.clientWidth-2);
 /* tiêu đề: tối đa 2 dòng và không tràn sang nút bên cạnh */
 fitTo(h1,Math.min(21,W/17),12,()=>h1.scrollWidth<=h1.clientWidth+1&&h1.getBoundingClientRect().height<=parseFloat(getComputedStyle(h1).fontSize)*1.25*2+2)}
let fq=0;const refit=()=>{cancelAnimationFrame(fq);fq=requestAnimationFrame(fitBanner)};
addEventListener('resize',refit);addEventListener('orientationchange',()=>setTimeout(refit,250));
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(refit);
if($('stats'))new MutationObserver(refit).observe($('stats'),{childList:true,characterData:true,subtree:true});
if($('tm'))new MutationObserver(refit).observe($('tm'),{childList:true,characterData:true,subtree:true});

/* sau mỗi lần vẽ lại: đưa mục đang chọn vào tầm nhìn (điện thoại) */
const r0=render;
render=function(){r0();fitBanner();
 if(document.documentElement.classList.contains('m'))
  document.querySelectorAll('.tabs .on,#ls .li.on,#gr .on').forEach(e=>e.scrollIntoView({inline:'center',block:'nearest'}))};
})();
