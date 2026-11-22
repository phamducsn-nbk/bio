/* khoidau.js – nhập thông tin học sinh (1 lần mỗi phiên), đăng nhập quản trị, đếm lượt truy cập & người đang xem
   (nạp sau tuychinh.js) */
(()=>{
/* Mã quản trị mặc định: nbk@2026  →  HÃY ĐỔI (bấm “🔐 Quản trị” cuối trang → “Tạo mã mới” → dán dòng hiện ra vào đây) */
const ADMIN_HASH='1243c606020058da293ae9be4304523247c1116546b5363950d2236c2237e97e';

const st=document.createElement('style');
st.textContent=`.stats{display:inline-flex;flex-wrap:wrap;gap:4px 16px;justify-content:center;margin-top:6px;padding:3px 16px;border-radius:99px;background:rgba(0,0,0,.28);color:#fff;font-size:14px;font-weight:700}
#tm{display:none}html.adm #tm{display:inline-block}
#gate{position:fixed;inset:0;z-index:300;display:flex;align-items:center;justify-content:center;padding:calc(16px + env(safe-area-inset-top,0px)) 16px calc(16px + env(safe-area-inset-bottom,0px));overflow:auto;background:linear-gradient(135deg,#0b6b52,#2bb673 55%,#8bd96b)}
#gate .gb{background:var(--card);color:var(--tx);border-radius:24px;padding:28px 24px;max-width:560px;width:100%;text-align:center;box-shadow:0 20px 50px rgba(0,0,0,.35)}
#gate h1{margin:6px 0 4px;font-size:clamp(18px,4vw,26px);color:var(--pri)}
#gate .gl{display:inline-block;margin-top:20px;background:#0b4f3f;color:#ffd23f;padding:6px 20px;border-radius:12px;font-weight:900;font-size:20px;text-decoration:none}
#gate input,#gate select{margin-top:8px}
#gate .skip{background:none;border:0;color:var(--mut);text-decoration:underline;cursor:pointer;font:inherit;margin-top:12px}`;
document.head.append(st);

/* ---------- Thông tin học sinh (không còn hỏi vai trò) ---------- */
const gate=()=>$('gate')||(()=>{const d=document.createElement('div');d.id='gate';document.body.append(d);return d})();
function stuForm(){const f=idForm().replace('id="tnm"','id="gn"').replace('id="tcl"','id="gc"');
 gate().innerHTML=`<div class="gb"><div style="font-size:34px">🌿🦋🧬🐞🌱</div><h1>HỆ THỐNG TỰ HỌC KHTN &amp; SINH HỌC</h1><p class="s" style="margin-top:10px">Hãy nhập họ tên và lớp để hệ thống ghi nhận nỗ lực học tập của con.</p>${f}
<div id="gw" class="s" style="color:#e5484d;min-height:22px;margin-top:6px"></div><button class="btn w" data-gk="go" style="font-size:18px;padding:12px 30px">▶ VÀO HỌC</button>
<div><button class="skip" data-gk="skip">Bỏ qua</button></div>
${typeof gvHtml==='function'?gvHtml():''}
<a class="gl" href="https://www.nbk.edu.vn" target="_blank" rel="noopener">📖 www.nbk.edu.vn</a></div>`}
function enter(skip){
 if(skip){TS.nm='';TS.cl=''}
 sessionStorage.setItem('bio_in','1');
 sessionStorage.setItem('bio_who',JSON.stringify({nm:TS.nm,cl:TS.cl}));
 if(TS.nm)store.set('bio_last',{nm:TS.nm,cl:TS.cl});
 const g=$('gate');if(g)g.remove();render()}
document.addEventListener('click',e=>{
 const b=e.target.closest('[data-gk]');
 if(b){const k=b.dataset.gk;
  if(k==='skip')enter(true);
  else if(k==='go'){TS.nm=($('gn').value||'').trim();TS.cl=($('gc').value||'').trim();
   if(!TS.nm||!TS.cl){$('gw').textContent='Hãy nhập đủ họ tên và lớp, hoặc chọn “Bỏ qua”.';return}enter(false)}
  return}
 if(e.target.closest('#chg')){e.preventDefault();stuForm()}
 else if(e.target.closest('#adm')){e.preventDefault();loginUI()}});
document.addEventListener('change',e=>{const t=e.target;
 if(t.id==='gn')TS.nm=t.value.trim();
 else if(t.id==='gc'){TS.cl=t.value.trim();if(Object.keys(D._cls||{}).length){TS.nm='';stuForm()}}});

/* ---------- Quản trị (chế độ giáo viên, tạo đề…) ---------- */
/* Lưu ý: kiểm tra mã nằm ở trình duyệt nên chỉ ngăn học sinh vô tình vào; muốn bảo mật thật cần máy chủ. */
const sha=async s=>[...new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode('nbk-bio:'+s)))].map(x=>x.toString(16).padStart(2,'0')).join('');
let bad=0,lock=0;
function setAdmin(on){
 U.t=on;document.documentElement.classList.toggle('adm',on);
 if(on){sessionStorage.setItem('bio_adm','1');store.set('bio_isT',true)}else sessionStorage.removeItem('bio_adm');
 save();render()}
function loginUI(){
 modal(`<h3 style="margin:0 0 6px">🔐 Quản trị</h3><p class="s">Nhập mã quản trị để soạn bài, tạo đề kiểm tra và xem học bạ.</p>
<input id="ap" type="password" placeholder="Mã quản trị" autocomplete="current-password"><div id="am" class="s" style="color:#e5484d;min-height:22px;margin-top:6px"></div>
<button class="btn" id="ago">Đăng nhập</button>
<details><summary class="s">Tạo mã mới</summary><p class="s">Nhập mã mới, rồi dán dòng kết quả vào đầu file khoidau.js (thay dòng const ADMIN_HASH=…).</p><div class="row"><input id="np" placeholder="Mã mới" style="flex:1"><button class="btn g" id="ngo">Tạo</button></div><textarea id="nh" readonly style="min-height:60px;margin-top:8px"></textarea></details>`);
 const go=async()=>{
  if(Date.now()<lock){$('am').textContent='Nhập sai nhiều lần, thử lại sau '+Math.ceil((lock-Date.now())/1000)+' giây.';return}
  if(!(window.crypto&&crypto.subtle)){$('am').textContent='Trình duyệt không hỗ trợ đăng nhập (cần mở trang bằng https).';return}
  if(await sha($('ap').value)===ADMIN_HASH){bad=0;$('mx').click();setAdmin(true)}
  else{bad++;if(bad>=5){lock=Date.now()+30000;bad=0}$('am').textContent='Mã không đúng.'}};
 $('ago').onclick=go;$('ap').onkeydown=e=>{if(e.key==='Enter')go()};
 $('ngo').onclick=async()=>{const v=$('np').value;if(!v||!crypto.subtle)return;$('nh').value="const ADMIN_HASH='"+await sha(v)+"';"};
 setTimeout(()=>$('ap').focus(),50)}
$('tm').onclick=()=>{if(U.t)setAdmin(false);else loginUI()};

/* ---------- Khởi động ---------- */
const play=location.hash.startsWith('#play=');
const adm=sessionStorage.getItem('bio_adm')==='1';
U.t=adm;document.documentElement.classList.toggle('adm',adm);
try{const w=JSON.parse(sessionStorage.getItem('bio_who')||'null');if(w){TS.nm=w.nm||'';TS.cl=w.cl||''}else{const l=store.get('bio_last',null);if(l){TS.nm=l.nm;TS.cl=l.cl}}}catch(e){}
if(!play&&!adm&&!sessionStorage.getItem('bio_in')&&location.hash!=='#admin')stuForm();
render();
if(location.hash==='#admin'&&!adm)loginUI();

/* chân trang nhỏ */
const ft=document.createElement('div');ft.className='ft2';
ft.innerHTML='<a id="chg">👤 Đổi thông tin học sinh</a> · <a id="adm">🔐 Quản trị</a>';document.body.append(ft);

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
