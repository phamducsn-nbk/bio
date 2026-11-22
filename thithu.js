/* thithu.js – Thi thử: trắc nghiệm, đúng/sai, trả lời ngắn (cần index.html và hocba.js) */
(()=>{
const X={ex:null,tm:null,re:null,sel:null,req:0};
const TYN={tn:'Trắc nghiệm',ds:'Đúng/Sai',tl:'Trả lời ngắn'};
const bank=()=>D._ex||(D._ex={});
const nz=s=>{const v=String(s).trim().toLowerCase().replace(/\s+/g,' ').replace(',','.');return v!==''&&!isNaN(+v)?String(+v):v};
const idf=()=>idForm().replace('id="tnm"','id="xn"').replace('id="tcl"','id="xc"');
const okU=x=>/^https:\/\/script\.google\.com\//.test(x||'');

/* Dòng câu hỏi:
   TN|Câu hỏi|A|B|C|D|B
   DS|Câu dẫn|ý a|ý b|ý c|ý d|ĐSĐS
   TL|Câu hỏi|đáp án 1;đáp án 2 */
function parse(t,topic){return (t||'').split('\n').map(l=>l.trim()).filter(Boolean).map(l=>{
 const p=l.split('|').map(x=>x.trim()),y=p[0].toUpperCase();
 if(y==='TN'&&p.length>=5){const k=LET.indexOf(p[p.length-1].toUpperCase()),o=p.slice(2,-1);return k>=0&&k<o.length?{y:'tn',q:p[1],o,k,t:topic}:null}
 if(y==='DS'&&p.length===7&&/^[ĐSDTFđsdtf]{4}$/.test(p[6]))return{y:'ds',q:p[1],o:p.slice(2,6),k:[...p[6].toUpperCase()].map(c=>'ĐDT'.includes(c)),t:topic};
 if(y==='TL'&&p.length>=3)return{y:'tl',q:p[1],a:p[2].split(';').map(s=>s.trim()).filter(Boolean),t:topic};
 return null}).filter(Boolean)}

async function exOpen(){
 X.re=exOpen;
 if(!U.t)try{const r=await fetch('data.json');if(r.ok){const v=await r.json();if(v&&v._ex)D._ex=v._ex}}catch(e){}
 const B=bank(),ks=Object.keys(B).filter(k=>parse(B[k],k).length);
 const s=X.sel||(X.sel={topics:[],tn:10,ds:2,tl:3,min:45,title:'Đề thi thử'});
 s.topics=s.topics.filter(k=>ks.includes(k));
 const cnt=k=>{const c={tn:0,ds:0,tl:0};parse(B[k],k).forEach(q=>c[q.y]++);return `TN ${c.tn} · ĐS ${c.ds} · TL ${c.tl}`};
 modal(`<h2 style="margin:0">📝 THI THỬ</h2><p class="s">Đề gồm trắc nghiệm, đúng/sai (4 ý) và trả lời ngắn. Điểm quy về thang 10.</p>
${ks.length?`<b>1. Chủ đề</b>${ks.map(k=>`<label class="it" style="justify-content:flex-start;gap:8px"><input type="checkbox" style="width:auto" data-x="tp" data-v="${esc(k)}" ${s.topics.includes(k)?'checked':''}> <span>${esc(k)} <small class="s">(${cnt(k)})</small></span></label>`).join('')}
<b>2. Cấu trúc đề</b><div class="row" style="margin:6px 0">TN <input id="xtn" type="number" min="0" value="${s.tn}" style="width:70px"> ĐS <input id="xds" type="number" min="0" value="${s.ds}" style="width:70px"> TL <input id="xtl" type="number" min="0" value="${s.tl}" style="width:70px"> Thời gian <input id="xmin" type="number" min="1" value="${s.min}" style="width:80px"> phút</div>
<input id="xtt" value="${esc(s.title)}" placeholder="Tên đề">${idf()}
<div class="row" style="margin-top:12px"><button class="btn" data-x="go">▶ Thi ngay</button>${U.t?'<button class="btn w" data-x="share">🔗 Link / QR / mã cho lớp</button>':''}</div>`:'<p class="s">Chưa có ngân hàng đề thi thử.</p>'}
<div class="row" style="margin-top:10px">${U.t?'<button class="btn g" data-x="edit">✏️ Soạn ngân hàng đề</button>':''}<button class="btn g" data-x="mine">📈 Học bạ của con</button></div>
<hr style="border:0;border-top:1px solid var(--bd);margin:14px 0"><b>Có mã hoặc link đề từ giáo viên?</b><div class="row" style="margin-top:6px"><input id="xcd" placeholder="Dán link hoặc mã" style="flex:1"><button class="btn g" data-x="code">Vào thi</button></div>`)}

function exEdit(t){
 t=t||'';X.re=()=>exEdit(t);const B=bank(),ks=Object.keys(B);
 modal(`<h3 style="margin:0">✏️ Ngân hàng đề thi thử</h3><p class="s">Mỗi dòng một câu:<br><code>TN|Câu hỏi|A|B|C|D|B</code><br><code>DS|Câu dẫn|ý a|ý b|ý c|ý d|ĐSĐS</code><br><code>TL|Câu hỏi|đáp án 1;đáp án 2</code></p>
<div class="row"><select id="xet" style="flex:1"><option value="">+ Chủ đề mới</option>${ks.map(k=>`<option ${k===t?'selected':''}>${esc(k)}</option>`).join('')}</select><input id="xen" placeholder="Tên chủ đề mới (vd: SINH 12 – Di truyền)" style="flex:2"></div>
<textarea id="xex" style="margin-top:8px">${esc(B[t]||'')}</textarea><p class="s" id="xec"></p>
<div class="row"><button class="btn" data-x="save">Lưu</button><button class="btn g" data-x="del">Xóa chủ đề</button><button class="btn g" data-x="hub">◀ Quay lại</button></div>`)}

function build(){
 const B=bank(),s=X.sel,pool={tn:[],ds:[],tl:[]};
 s.topics.forEach(k=>parse(B[k],k).forEach(q=>pool[q.y].push(q)));
 return{kind:'exam',t:s.title||'Đề thi thử',min:+s.min||45,q:['tn','ds','tl'].flatMap(y=>shuffle(pool[y]).slice(0,s[y])),e:EP()}}

async function exShare(d0){
 const d=d0||build();if(!d.q.length)return;
 const c=await enc(d),url=location.href.split('#')[0]+'#play='+c;await loadQR();let qr;
 try{const x=qrcode(0,'L');x.addData(url);x.make();qr='<div class="qr">'+x.createSvgTag(4,0)+'</div>'}catch(e){qr='<p class="s">Link quá dài để tạo QR – hãy giảm số câu.</p>'}
 modal(`<h3 style="margin:0">🔗 ${esc(d.t)}</h3><p class="s">${d.q.length} câu · ${d.min} phút. Học sinh quét QR hoặc mở link là vào thi.</p><div style="text-align:center">${qr}</div>
<p><b>Link</b></p><div class="row"><input id="sl" readonly value="${esc(url)}" style="flex:1"><button class="btn g" data-ts="cp" data-v="sl">Chép</button></div>
<p><b>Mã tham gia</b></p><div class="row"><input id="sc" readonly value="${esc(c)}" style="flex:1"><button class="btn g" data-ts="cp" data-v="sc">Chép</button></div>
<button class="btn g" data-x="hub" style="margin-top:12px">◀ Quay lại</button>`)}

function exIntro(d){
 X.ex=d;X.re=()=>exIntro(d);const c={};d.q.forEach(q=>c[q.y]=(c[q.y]||0)+1);
 modal(`<h2 style="margin:0">📝 ${esc(d.t)}</h2><p class="s">${d.q.length} câu (TN ${c.tn||0} · ĐS ${c.ds||0} · TL ${c.tl||0}) · ${d.min} phút</p>${idf()}<button class="btn" data-x="start" style="margin-top:10px">▶ Bắt đầu làm bài</button>`)}

function exRun(){
 const d=X.ex;clearInterval(X.tm);X.t0=Date.now();let last='';
 const html=d.q.map((q,i)=>{
  const h=q.y!==last?`<h3 style="margin:16px 0 4px">${q.y==='tn'?'Phần I – Trắc nghiệm':q.y==='ds'?'Phần II – Đúng / Sai':'Phần III – Trả lời ngắn'}</h3>`:'';last=q.y;
  const body=q.y==='tn'?q.o.map((o,j)=>`<label class="it" style="justify-content:flex-start;gap:8px"><input type="radio" style="width:auto" name="xa${i}" value="${j}"> ${LET[j]}. ${esc(o)}</label>`).join('')
   :q.y==='ds'?q.o.map((o,j)=>`<div class="it"><span>${'abcd'[j]}) ${esc(o)}</span><span style="white-space:nowrap"><label><input type="radio" style="width:auto" name="xd${i}_${j}" value="T"> Đúng</label> <label><input type="radio" style="width:auto" name="xd${i}_${j}" value="F"> Sai</label></span></div>`).join('')
   :`<input id="xt${i}" placeholder="Nhập đáp án" style="margin-top:8px">`;
  return h+`<div class="card" style="margin:8px 0"><b>Câu ${i+1}.</b> ${esc(q.q)}${body}</div>`}).join('');
 modal(`<div style="position:sticky;top:-18px;background:var(--card);padding:6px 0;z-index:2"><b>${esc(d.t)}</b> · còn <b id="xtm"></b></div>${html}<button class="btn" data-x="submit">Nộp bài</button>`);
 const tick=()=>{const t=$('xtm');if(!t){clearInterval(X.tm);return}
  const r=d.min*60-Math.round((Date.now()-X.t0)/1000),z=Math.max(0,r);
  t.textContent=Math.floor(z/60)+':'+String(z%60).padStart(2,'0');if(r<=0){clearInterval(X.tm);exSubmit()}};
 tick();X.tm=setInterval(tick,1000)}

function exSubmit(){
 clearInterval(X.tm);const d=X.ex;let e=0;const mx=d.q.length,ty={tn:[0,0],ds:[0,0],tl:[0,0]},pt={},bad=[];
 d.q.forEach((q,i)=>{let g=0;
  if(q.y==='tn'){const v=document.querySelector(`input[name=xa${i}]:checked`);g=v&&+v.value===q.k?1:0}
  else if(q.y==='ds'){let c=0;q.k.forEach((k,j)=>{const v=document.querySelector(`input[name=xd${i}_${j}]:checked`);if(v&&(v.value==='T')===k)c++});g=[0,.1,.25,.5,1][c]}
  else{const v=nz($('xt'+i).value);g=v&&q.a.some(a=>nz(a)===v)?1:0}
  e+=g;ty[q.y][0]+=g;ty[q.y][1]++;const o=pt[q.t]||(pt[q.t]=[0,0]);o[0]+=g;o[1]++;if(g<1)bad.push([i,q])});
 const s10=+(e/mx*10).toFixed(2);
 const r={ts:Date.now(),n:TS.nm,c:TS.cl,t:d.t,m:'exam',h:+e.toFixed(2),q:mx,s:s10,d:Math.round((Date.now()-X.t0)/1000),x:{ty,pt}};
 let note='<p class="s">Chưa chọn lớp / tên nên kết quả không được ghi lại.</p>';
 if(r.n&&r.c){RS.push(r);store.set('bio_res',RS);const u=[d.e,EP()].find(okU);
  if(u){try{fetch(u,{method:'POST',mode:'no-cors',body:JSON.stringify(r)}).catch(()=>{})}catch(x){}}
  note='<p class="s">✅ Đã ghi kết quả'+(u?' và gửi cho giáo viên.':' trên thiết bị này.')+'</p>'}
 const ans=q=>q.y==='tn'?LET[q.k]+'. '+q.o[q.k]:q.y==='ds'?q.k.map((k,j)=>'abcd'[j]+(k?'Đ':'S')).join(' '):q.a.join(' / ');
 modal(`<h2 style="margin:0">🏁 Điểm: ${s10}/10</h2><p class="s">${esc(d.t)}</p>${note}
${tbl(['Phần','Điểm','Tối đa'],['tn','ds','tl'].filter(y=>ty[y][1]).map(y=>[TYN[y],+ty[y][0].toFixed(2),ty[y][1]]))}
<b>Câu chưa đúng hết (${bad.length})</b>${bad.map(([i,q])=>`<div class="it"><span>Câu ${i+1}: ${esc(q.q)}<br><small class="s">Đáp án: ${esc(ans(q))}</small></span></div>`).join('')}
<div class="row" style="margin-top:12px"><button class="btn" data-x="again">🔁 Làm lại</button><button class="btn g" data-x="close">Đóng</button><button class="btn g" data-x="mine">📈 Học bạ của con</button></div>`)}

document.addEventListener('click',async e=>{
 const b=e.target.closest('[data-x]');if(!b)return;const a=b.dataset.x;
 if(a==='hub')exOpen();
 else if(a==='close')$('mx').click();
 else if(a==='go'){const d=build();if(!d.q.length)return;X.req=0;exIntro(d)}
 else if(a==='share')exShare();
 else if(a==='edit')exEdit();
 else if(a==='start'){TS.nm=($('xn').value||'').trim();TS.cl=($('xc').value||'').trim();
  if(X.req&&(!TS.nm||!TS.cl)){if(!$('mc').querySelector('.warn'))b.insertAdjacentHTML('afterend','<p class="s warn" style="color:#e5484d">Hãy chọn / nhập đủ lớp và họ tên.</p>');return}
  exRun()}
 else if(a==='submit')exSubmit();
 else if(a==='again')exIntro(X.ex);
 else if(a==='mine'){if(typeof hbMine==='function')hbMine()}
 else if(a==='code'){let s=$('xcd').value.trim();const i=s.indexOf('#play=');if(i>=0)s=s.slice(i+6);
  try{const d=await dec(s);if(d.kind==='exam'){X.req=1;exIntro(d)}else tsIntro(d)}catch(x){$('xcd').value='';$('xcd').placeholder='Mã hoặc link không hợp lệ'}}
 else if(a==='save'){const n=$('xet').value||$('xen').value.trim();if(!n)return;bank()[n]=$('xex').value;save();
  $('xec').textContent='Đã lưu – '+parse($('xex').value,n).length+' câu hợp lệ. Nhớ bấm Sao lưu và lưu thành data.json để học sinh luyện đề.'}
 else if(a==='del'){const n=$('xet').value;if(n&&twice(b,'xd')){delete bank()[n];save();exEdit()}}});

document.addEventListener('change',e=>{
 const t=e.target,s=X.sel;
 if(t.id==='xn')TS.nm=t.value.trim();
 else if(t.id==='xc'){TS.cl=t.value.trim();if(Object.keys(D._cls||{}).length){TS.nm='';X.re&&X.re()}}
 else if(t.id==='xet')exEdit(t.value);
 else if(s&&t.dataset.x==='tp')s.topics=t.checked?[...s.topics,t.dataset.v]:s.topics.filter(k=>k!==t.dataset.v);
 else if(s){const f={xtn:'tn',xds:'ds',xtl:'tl',xmin:'min',xtt:'title'}[t.id];if(f)s[f]=f==='title'?t.value:Math.max(0,+t.value||0)}});

/* Link đề thi dùng chung #play= với THỬ SỨC */
const _ti=tsIntro;tsIntro=d=>{if(d&&d.kind==='exam'){X.req=1;exIntro(d)}else _ti(d)};
(async()=>{const h=location.hash;if(h.startsWith('#play=')){try{const d=await dec(h.slice(6));if(d.kind==='exam'){X.req=1;exIntro(d)}}catch(e){}}})();

/* Nút nổi THI THỬ */
const st=document.createElement('style');
st.textContent='.xb{position:fixed;right:16px;bottom:calc(92px + env(safe-area-inset-bottom,0px));z-index:20;border:0;cursor:pointer;background:var(--pri);color:var(--card);padding:10px 16px;border-radius:14px;font:700 15px inherit;font-family:inherit;box-shadow:0 6px 18px rgba(0,0,0,.25)}';
document.head.append(st);
const fb=document.createElement('button');fb.className='xb';fb.textContent='📝 THI THỬ';fb.onclick=exOpen;document.body.append(fb);
window.exX=X;window.exParse=parse;window.exNz=nz;window.exIntroPub=exIntro;window.exShareD=exShare;
})();
