/* khoidau.js – màn hình chọn vai trò (Giáo viên / Học sinh) + đếm lượt truy cập, số người đang xem
   (nạp sau giaodien.js) */
(()=>{
const st=document.createElement('style');
st.textContent=`.stats{display:inline-flex;flex-wrap:wrap;gap:4px 16px;justify-content:center;margin-top:6px;padding:3px 16px;border-radius:99px;background:rgba(0,0,0,.28);color:#fff;font-size:14px;font-weight:700}.stats a{color:#ffd23f;text-decoration:none}
#gate{position:fixed;inset:0;z-index:300;display:flex;align-items:center;justify-content:center;padding:calc(16px + env(safe-area-inset-top,0px)) 16px calc(16px + env(safe-area-inset-bottom,0px));overflow:auto;background:linear-gradient(135deg,#0b6b52,#2bb673 55%,#8bd96b)}
#gate .gb{background:var(--card);color:var(--tx);border-radius:24px;padding:28px 24px;max-width:560px;width:100%;text-align:center;box-shadow:0 20px 50px rgba(0,0,0,.35)}
#gate h1{margin:6px 0 4px;font-size:clamp(18px,4vw,26px);color:var(--pri)}
#gate .gr{display:flex;gap:14px;flex-wrap:wrap;margin-top:18px}
#gate .gr button{flex:1 1 200px;border:0;border-radius:20px;padding:22px 12px;font:800 20px inherit;font-family:inherit;cursor:pointer;display:flex;flex-direction:column;gap:6px;align-items:center}
#gate .gr button span{font-size:44px}
.g1{background:#f5a524;color:#2b1c00}.g2{background:#3b82c4;color:#fff}
#gate .gl{display:inline-block;margin-top:20px;background:#0b4f3f;color:#ffd23f;padding:6px 20px;border-radius:12px;font-weight:900;font-size:20px;text-decoration:none}
#gate input,#gate select{margin-top:8px}
#gate .skip{background:none;border:0;color:var(--mut);text-decoration:underline;cursor:pointer;font:inherit;margin-top:12px}`;
document.head.append(st);

/* ---------- Màn hình chọn vai trò ---------- */
const gate=()=>$('gate')||(()=>{const d=document.createElement('div');d.id='gate';document.body.append(d);return d})();
function step1(){gate().innerHTML=`<div class="gb"><div style="font-size:34px">🌿🦋🧬🐞🌱</div><h1>HỆ THỐNG TỰ HỌC MÔN KHTN &amp; SINH HỌC</h1><p style="font-size:20px;font-weight:700;margin:12px 0 0">Bạn là GIÁO VIÊN hay HỌC SINH?</p>
<div class="gr"><button class="g1" data-gk="t"><span>👩‍🏫</span>GIÁO VIÊN</button><button class="g2" data-gk="s"><span>🧑‍🎓</span>HỌC SINH</button></div>
${typeof gvHtml==='function'?gvHtml():''}
<a class="gl" href="https://www.nbk.edu.vn" target="_blank" rel="noopener">📖 www.nbk.edu.vn</a></div>`}
function step2(){const f=idForm().replace('id="tnm"','id="gn"').replace('id="tcl"','id="gc"');
 gate().innerHTML=`<div class="gb"><div style="font-size:34px">🧑‍🎓</div><h1>THÔNG TIN HỌC SINH</h1><p class="s">Nhập họ tên và lớp để lưu kết quả học tập của em.</p>${f}
<div id="gw" class="s" style="color:#e5484d;min-height:22px;margin-top:6px"></div><button class="btn w" data-gk="go" style="font-size:18px;padding:12px 30px">▶ VÀO HỌC</button>
<div><button class="skip" data-gk="skip">Bỏ qua</button> · <button class="skip" data-gk="back">◀ Quay lại</button></div></div>`}
function who(){const w=$('who');if(w)w.textContent=U.t?'👩‍🏫 Giáo viên':TS.nm?'👤 '+TS.nm+(TS.cl?' – '+TS.cl:''):'🧑‍🎓 Học sinh'}
function enter(role,skip){
 sessionStorage.setItem('bio_role',role);
 if(role==='t'){U.t=true;store.set('bio_isT',true)}
 else{U.t=false;if(skip){TS.nm='';TS.cl=''}}
 sessionStorage.setItem('bio_who',JSON.stringify({nm:TS.nm,cl:TS.cl}));
 if(role==='s'&&TS.nm)store.set('bio_last',{nm:TS.nm,cl:TS.cl});
 save();render();const g=$('gate');if(g)g.remove();who()}
document.addEventListener('click',e=>{
 const b=e.target.closest('[data-gk]');
 if(b){const k=b.dataset.gk;
  if(k==='t')enter('t');else if(k==='s')step2();else if(k==='back')step1();else if(k==='skip')enter('s',true);
  else if(k==='go'){TS.nm=($('gn').value||'').trim();TS.cl=($('gc').value||'').trim();
   if(!TS.nm||!TS.cl){$('gw').textContent='Hãy nhập đủ họ tên và lớp, hoặc chọn “Bỏ qua”.';return}enter('s')}
  return}
 if(e.target.closest('#role')){e.preventDefault();sessionStorage.removeItem('bio_role');step1()}});
document.addEventListener('change',e=>{const t=e.target;
 if(t.id==='gn')TS.nm=t.value.trim();
 else if(t.id==='gc'){TS.cl=t.value.trim();if(Object.keys(D._cls||{}).length){TS.nm='';step2()}}});

/* nút Giáo viên trên banner cũng cập nhật vai trò của phiên */
const o=$('tm').onclick;$('tm').onclick=ev=>{o(ev);sessionStorage.setItem('bio_role',U.t?'t':'s');who()};

const role=sessionStorage.getItem('bio_role');
if(location.hash.startsWith('#play=')){/* vào từ link bài thi: bỏ qua màn hình chọn vai trò */}
else if(!role){const l=store.get('bio_last',null);if(l){TS.nm=l.nm;TS.cl=l.cl}step1()}
else if(role==='t')U.t=true;
else{U.t=false;try{const w=JSON.parse(sessionStorage.getItem('bio_who')||'{}');TS.nm=w.nm||'';TS.cl=w.cl||''}catch(e){}}
render();who();

/* ---------- Đếm lượt truy cập & số người đang xem ---------- */
/* Dùng dịch vụ đếm miễn phí abacus.jasoncameron.dev. Đổi NS thành tên riêng của bạn để số liệu không lẫn với trang khác. */
const CN='https://abacus.jasoncameron.dev',NS='nbk-khtn-sinh-hoc';
const jget=async p=>{const r=await fetch(CN+p);if(!r.ok)return 0;const j=await r.json();return +j.value||0};
const fmt=n=>n.toLocaleString('vi-VN');
async function stats(){
 const b=Math.floor(Date.now()/6e5),el=(Date.now()%6e5)/6e4;
 try{
  /* lượt truy cập: tính 1 lần cho mỗi phiên, tải lại trang không tăng thêm */
  let v;if(!sessionStorage.getItem('bio_v')){sessionStorage.setItem('bio_v','1');v=await jget('/hit/'+NS+'/visits')}else v=await jget('/get/'+NS+'/visits');
  $('cv').textContent=fmt(v);
  /* đang xem: mỗi người báo danh 1 lần trong mỗi khung 10 phút; ước tính từ khung hiện tại và khung trước */
  let cur;if(sessionStorage.getItem('bio_b')!==String(b)){sessionStorage.setItem('bio_b',String(b));cur=await jget('/hit/'+NS+'/on'+b)}else cur=await jget('/get/'+NS+'/on'+b);
  const prev=el<3?await jget('/get/'+NS+'/on'+(b-1)):0;
  $('co').textContent='≈ '+fmt(Math.max(cur,prev,1))}
 catch(e){if($('cv').textContent==='…')$('cv').textContent='–';if($('co').textContent==='…')$('co').textContent='–'}}
stats();setInterval(stats,9e4);
})();
