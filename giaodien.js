/* giaodien.js – giao diện học sinh / giáo viên, tạo đề kiểm tra, xuất Word, hỏi AI
   (nạp sau hocba.js và thithu.js) */
const SECS=[['tt','📖','HỌC KIẾN THỨC','#2bb673'],['on','🧠','CỦNG CỐ – ÔN TẬP','#3b82c4'],['tn','🧪','THÍ NGHIỆM ẢO','#7c5cd6'],['vd','🌍','VẬN DỤNG','#e07b39'],['kt','📝','LÀM BÀI KIỂM TRA','#e5484d']];
const SL=s=>s[0]==='kt'&&U.t?['🛠️','TẠO ĐỀ KIỂM TRA']:[s[1],s[2]];
const SX={type:'mix',n:10,scope:'l'},TE={g:0,sel:[],tn:10,ds:2,tl:3,min:45,d:null};
let PQ=[];
const gdr=u=>{const m=u.match(/drive\.google\.com\/file\/d\/([\w-]+)/);return m?'https://drive.google.com/uc?export=view&id='+m[1]:u};
const isImg=u=>/\.(png|jpe?g|gif|webp|svg)(\?|#|$)/i.test(u)||/drive\.google\.com\/(file\/d\/|uc\?)/.test(u);
const cntS=t=>{const c={tn:0,ds:0,tl:0};exParse(t||'','').forEach(q=>c[q.y]++);return `TN ${c.tn} · ĐS ${c.ds} · TL ${c.tl}`};

/* ---------- Nội dung từng mục ---------- */
function media(les,k,T,withFile){
 const sc=secOf(les,k);let h='';
 if(T)h+=`<p class="s">${k==='tn'?'Dán link thí nghiệm ảo (Google Site…).':'Ảnh infographic: dán <b>link ảnh</b> hoặc đường dẫn file đã đưa vào repo (vd: files/bai1.png) để học sinh nhìn thấy. File tải trực tiếp chỉ xem được trên máy này.'}</p>`
  +(withFile?'<input type="file" id="fi" multiple style="margin-bottom:8px">':'')
  +`<div class="row" style="margin-bottom:10px"><input id="lk" placeholder="Tiêu đề" style="flex:1"><input id="lu" placeholder="${k==='tn'?'https://sites.google.com/…':'Link hoặc files/ten-anh.png'}" style="flex:2"><button class="btn" data-n="addlink">+ Thêm</button></div>`;
 sc.f.forEach(f=>{const del=T?` <button class="btn g sm" data-a="df" data-id="${f.id}">🗑️</button>`:'';
  h+=f.t.startsWith('image/')?`<div><img class="inf" data-bid="${f.id}" alt="${esc(f.n)}">${del}</div>`
   :`<div class="it"><span>${ico(f.t,f.n)} ${esc(f.n)}</span><span><button class="btn g sm" data-a="vf" data-id="${f.id}">Xem</button>${del}</span></div>`});
 sc.l.forEach(x=>{const del=T?` <button class="btn g sm" data-a="dk" data-id="${x.id}">🗑️</button>`:'';
  h+=k==='tn'?`<a class="lab" href="${esc(x.u)}" target="_blank" rel="noopener noreferrer">🧪 ${esc(x.t||'Mở thí nghiệm ảo')} ↗</a>${del}`
   :isImg(x.u)?`<div><img class="inf" src="${esc(gdr(x.u))}" alt="${esc(x.t||'')}">${x.t?`<div class="s">${esc(x.t)}</div>`:''}${del}</div>`
   :`<div class="it"><a href="${esc(x.u)}" target="_blank" rel="noopener noreferrer" style="color:var(--pri);font-weight:600">🔗 ${esc(x.t||x.u)}</a>${del}</div>`});
 return h||`<p class="s">${k==='tn'?'Chưa có đường link thí nghiệm ảo.':'Chưa có nội dung.'}</p>`}

function practice(les,T){
 PQ=exParse(les.ex||'',les.n);
 const lab={tn:'Trắc nghiệm',ds:'Đúng/Sai',tl:'Điền từ'};
 const ed=T?`<p class="s">Mỗi dòng một câu:<br><code>TN|Câu hỏi|A|B|C|D|B</code><br><code>DS|Câu dẫn|ý a|ý b|ý c|ý d|ĐSĐS</code><br><code>TL|Câu hỏi điền từ|đáp án 1;đáp án 2</code><br>Hiện có ${PQ.length} câu hợp lệ (${cntS(les.ex)}).</p><textarea id="lex">${esc(les.ex||'')}</textarea><p><b>Xem trước như học sinh:</b></p>`:'';
 return ed+(PQ.length?PQ.map((q,i)=>`<div class="card" style="margin:10px 0" id="pq${i}"><b>Câu ${i+1}.</b> ${esc(q.q)} <small style="background:var(--pri2);color:var(--pri);padding:1px 8px;border-radius:9px">${lab[q.y]}</small>`
  +(q.y==='tn'?q.o.map((o,j)=>`<button class="opt" data-g="tn" data-i="${i}" data-j="${j}">${LET[j]}. ${esc(o)}</button>`).join('')
  :q.y==='ds'?q.o.map((o,j)=>`<div class="it"><span>${'abcd'[j]}) ${esc(o)}</span><span style="white-space:nowrap"><button class="btn g sm" data-g="ds" data-i="${i}" data-j="${j}" data-v="1">Đúng</button> <button class="btn g sm" data-g="ds" data-i="${i}" data-j="${j}" data-v="0">Sai</button></span></div>`).join('')
  :`<div class="row" style="margin-top:8px"><input id="pt${i}" placeholder="Điền đáp án" style="flex:1"><button class="btn" data-g="tl" data-i="${i}">Kiểm tra</button></div>`)
  +'<div class="fb" style="margin-top:6px;font-weight:600"></div></div>').join(''):'<p class="s">Bài này chưa có câu hỏi ôn tập.</p>')}

function vdBody(les,T){
 const cols=['#e07b39','#2bb673','#3b82c4','#7c5cd6'];
 return (T?`<p class="s">Mỗi dòng một tình huống thực tế liên quan đến bài học.</p><textarea id="lvd">${esc(les.vd||'')}</textarea>`:'')
 +((les.vd||'').split('\n').map(s=>s.trim()).filter(Boolean).map((s,i)=>`<div class="card" style="margin:8px 0;border-left:6px solid ${cols[i%4]}">🌱 ${esc(s)}</div>`).join('')||'<p class="s">Chưa có tình huống vận dụng.</p>')}

/* ---------- Làm bài kiểm tra (học sinh) ---------- */
const ktPool=(les,L)=>(SX.scope==='g'?L:SX.scope==='c'&&les.c?L.filter(x=>x.c===les.c):[les]).flatMap(x=>exParse(x.ex||'',x.n));
const ktPlan=n=>{if(SX.type==='mix'){const a=Math.round(n*.6),b=Math.round(n*.2);return{tn:a,ds:b,tl:n-a-b}}return{tn:0,ds:0,tl:0,[SX.type]:n}};
const ktMin=p=>Math.max(5,Math.ceil(p.tn+p.ds*2+p.tl*2));
function ktBody(les,L){
 const c={tn:0,ds:0,tl:0};ktPool(les,L).forEach(q=>c[q.y]++);const p=ktPlan(SX.n),o=(v,t)=>`<option value="${v}" ${SX.scope===v?'selected':''}>${t}</option>`;
 return `<p class="s">Ngân hàng câu hỏi đang chọn: TN ${c.tn} · ĐS ${c.ds} · TL ${c.tl}</p>
<b>Phạm vi</b><select id="ks" style="margin:6px 0 12px">${o('l','Bài này')}${o('c','Cả chương (cùng chương với bài này)')}${o('g','Tất cả bài của lớp')}</select>
<div><b>Dạng bài</b></div>${[['tn','Trắc nghiệm'],['ds','Đúng / Sai'],['tl','Trả lời ngắn'],['mix','Tổng hợp (60% TN · 20% ĐS · 20% TL)']].map(([k,t])=>`<button class="opt ${SX.type===k?'on':''}" data-n="kty" data-v="${k}">${t}</button>`).join('')}
<p><b>Số câu</b> <input id="kn" type="number" min="1" max="60" value="${SX.n}" style="width:90px"> <span class="s">→ thời gian làm bài: <b>${ktMin(p)} phút</b> (TN 1 phút/câu, ĐS và TL 2 phút/câu)</span></p>
<button class="btn w" data-n="kgo" style="font-size:17px">▶ Bắt đầu làm bài</button>`}

/* ---------- Hỏi AI ---------- */
const AIH={};
const aiEp=()=>{const u=D._ai||store.get('bio_ai','');return /^https:\/\//.test(u)?u:''};
const aiFmt=t=>esc(t).replace(/\*\*(.+?)\*\*/g,'<b>$1</b>').replace(/^#+\s*/gm,'');
const aiLog=id=>(AIH[id]||[]).map(m=>`<div class="aq">🙋 ${esc(m.q)}</div><div class="aa">${m.p?'⏳ Đang suy nghĩ…':aiFmt(m.a)}</div>`).join('');
function aiCard(les,T){const ep=aiEp();return `<div class="card aic"><h2>🤖 Hỏi trợ lý AI</h2><p class="s">Đặt câu hỏi về bài “${esc(les.n)}”. Câu trả lời hiện ngay bên dưới.</p><textarea id="aiq" maxlength="500" style="min-height:80px" placeholder="Ví dụ: Giải thích giúp em…"></textarea><button class="btn" data-n="ai" id="aib" style="margin-top:8px">Gửi câu hỏi</button><p class="s" id="ain" style="margin:8px 0 0;color:#e5484d">${ep?'':(T?'Chưa có link máy chủ AI – dán vào ô bên dưới (xem ai-worker.js).':'Trợ lý AI chưa được bật. Em hãy hỏi giáo viên nhé.')}</p><div id="ail">${aiLog(les.id)}</div>${T?`<input id="aie" value="${esc(D._ai||store.get('bio_ai',''))}" placeholder="(Quản trị) Link máy chủ AI https://…workers.dev" style="margin-top:10px"><p class="s">Sau khi dán link: bấm Sao lưu và tải data.json lên GitHub để học sinh dùng được.</p>`:''}</div>`}
async function aiAsk(){
 const{les}=cur(),qe=$('aiq'),q=(qe.value||'').trim();if(!q)return;
 const ep=aiEp(),H=AIH[les.id]||(AIH[les.id]=[]);
 if(!ep){$('ain').textContent=U.t?'Chưa có link máy chủ AI – dán vào ô bên dưới (xem ai-worker.js).':'Trợ lý AI chưa được bật. Em hãy hỏi giáo viên nhé.';return}
 $('ain').textContent='';
 const hist=H.filter(m=>!m.p&&m.a).slice(-3).map(m=>({q:m.q,a:m.a})),it={q,a:'',p:true};
 H.unshift(it);qe.value='';$('ail').innerHTML=aiLog(les.id);
 const btn=$('aib');btn.disabled=true;btn.textContent='Đang trả lời…';
 const ac=new AbortController(),tm=setTimeout(()=>ac.abort(),30000);
 try{const r=await fetch(ep,{method:'POST',headers:{'Content-Type':'text/plain'},body:JSON.stringify({q,lesson:les.n,grade:G[U.g],history:hist}),signal:ac.signal});
  const t=await r.text();let a=t;try{const j=JSON.parse(t);a=j.answer||j.error||t}catch(x){}
  it.a=r.ok?a:'Xin lỗi, trợ lý AI đang bận. Em thử lại sau ít phút nhé.'}
 catch(x){it.a='Không kết nối được trợ lý AI. Em kiểm tra mạng rồi thử lại nhé.'}
 clearTimeout(tm);it.p=false;
 if($('ail')&&cur().les&&cur().les.id===les.id){$('ail').innerHTML=aiLog(les.id);const b=$('aib');b.disabled=false;b.textContent='Gửi câu hỏi'}}

/* ---------- Giáo viên: tạo đề, xuất Word ---------- */
const mkSel=(id,on)=>{TE.sel=TE.sel.filter(x=>x!==id);if(on)TE.sel.push(id)};
function mkSync(){if(TE.lu!==U.g){TE.g=U.g;TE.sel=[];TE.lu=U.g}}
function mkHtml(){
 mkSync();const Lg=D[G[TE.g]]||[],ch={};Lg.forEach(x=>{const c=x.c||'Chưa phân chương';(ch[c]=ch[c]||[]).push(x)});
 return `<b>1. Nội dung</b> <select id="mg" style="width:auto;margin:0 0 8px 8px">${G.map((g,i)=>`<option value="${i}" ${i===TE.g?'selected':''}>${g}</option>`).join('')}</select>
<p class="s">Bấm tên chương để mở danh sách bài, tích chọn các bài cần lấy câu hỏi.</p>
${Object.entries(ch).map(([c,ls])=>`<details class="card" style="padding:8px 12px;margin:6px 0"><summary><label><input type="checkbox" style="width:auto" data-m="ch" ${ls.every(x=>TE.sel.includes(x.id))?'checked':''}> <b>${esc(c)}</b></label></summary>${ls.map(x=>`<label class="it" style="justify-content:flex-start;gap:8px"><input type="checkbox" style="width:auto" data-m="ls" data-id="${x.id}" ${TE.sel.includes(x.id)?'checked':''}> <span>${esc(x.n)} <small class="s">(${cntS(x.ex)})</small></span></label>`).join('')}</details>`).join('')||'<p class="s">Lớp này chưa có bài.</p>'}
<p><b>2. Thời gian</b> ${[15,45].map(m=>`<label style="margin:0 10px"><input type="radio" name="mt" value="${m}" style="width:auto" ${TE.min===m?'checked':''}> ${m} phút</label>`).join('')} hoặc <input id="mmin" type="number" min="1" value="${TE.min}" style="width:80px"> phút</p>
<p><b>3. Số câu hỏi</b> TN <input id="mtn" type="number" min="0" value="${TE.tn}" style="width:70px"> Đúng/Sai <input id="mds" type="number" min="0" value="${TE.ds}" style="width:70px"> Trả lời ngắn <input id="mtl" type="number" min="0" value="${TE.tl}" style="width:70px"></p>
<button class="btn w" data-n="mkgo">📄 Tạo đề</button>`}
function mkOpen(){modal('<h2 style="margin:0 0 8px">📝 TẠO ĐỀ KIỂM TRA</h2>'+mkHtml())}
const mkInline=()=>U.t&&U.s==='kt'&&$('md').style.display!=='flex';

function docHtml(d){
 const by=y=>d.q.filter(q=>q.y===y),sec=(t,y,f)=>by(y).length?`<p><b>${t}</b></p>`+by(y).map(f).join(''):'';
 const st=(q,i)=>`<p><b>Câu ${i+1}.</b> ${esc(q.q)}</p>`;
 return `<table width="100%"><tr><td align="center" width="40%"><b>TRƯỜNG ..............................</b></td><td align="center"><b>${esc(d.t)}</b><br><i>Thời gian làm bài: ${d.min} phút</i></td></tr></table><p>Họ và tên: ................................................ Lớp: ..........</p>`
 +sec('PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn. Mỗi câu hỏi thí sinh chỉ chọn một phương án.','tn',(q,i)=>st(q,i)+q.o.map((o,j)=>`<p style="margin-left:1cm">${LET[j]}. ${esc(o)}</p>`).join(''))
 +sec('PHẦN II. Câu trắc nghiệm đúng sai. Trong mỗi ý a), b), c), d) ở mỗi câu, thí sinh chọn đúng hoặc sai.','ds',(q,i)=>st(q,i)+q.o.map((o,j)=>`<p style="margin-left:1cm">${'abcd'[j]}) ${esc(o)}</p>`).join(''))
 +sec('PHẦN III. Câu trắc nghiệm trả lời ngắn.','tl',(q,i)=>st(q,i)+'<p style="margin-left:1cm">Trả lời: ..............................</p>')
 +'<p align="center"><b>--- HẾT ---</b></p><br style="page-break-before:always"><p align="center"><b>ĐÁP ÁN</b></p>'
 +(by('tn').length?'<p><b>Phần I:</b> '+by('tn').map((q,i)=>(i+1)+'-'+LET[q.k]).join('; ')+'</p>':'')
 +(by('ds').length?'<p><b>Phần II:</b> '+by('ds').map((q,i)=>(i+1)+': '+q.k.map((k,j)=>'abcd'[j]+'-'+(k?'Đ':'S')).join(', ')).join('; ')+'</p>':'')
 +(by('tl').length?'<p><b>Phần III:</b> '+by('tl').map((q,i)=>(i+1)+': '+esc(q.a[0])).join('; ')+'</p>':'')}

function mkGo(){
 const Lg=D[G[TE.g]]||[],sel=Lg.filter(x=>TE.sel.includes(x.id)),pool=sel.flatMap(x=>exParse(x.ex||'',x.n));
 const q=['tn','ds','tl'].flatMap(y=>shuffle(pool.filter(x=>x.y===y)).slice(0,TE[y]));
 if(!q.length){modal('<p>Chưa chọn bài, hoặc các bài đã chọn chưa có câu hỏi.</p><button class="btn g" data-n="mk">◀ Quay lại</button>');return}
 TE.d={kind:'exam',t:'ĐỀ KIỂM TRA '+G[TE.g]+(sel.length===1?' – '+sel[0].n:''),min:TE.min,q,e:EP()};
 const c=y=>q.filter(x=>x.y===y).length;
 modal(`<h3 style="margin:0">Đã tạo đề: ${q.length} câu · ${TE.min} phút</h3><p class="s">TN ${c('tn')}/${TE.tn} · ĐS ${c('ds')}/${TE.ds} · TL ${c('tl')}/${TE.tl}${q.length<TE.tn+TE.ds+TE.tl?' (ngân hàng chưa đủ câu như yêu cầu)':''}</p>
<div class="row"><button class="btn w" data-n="mkdoc">⬇️ Xuất Word</button><button class="btn" data-n="mkshare">🔗 Link / QR làm online</button><button class="btn g" data-n="mkgo">🔁 Tạo đề khác</button><button class="btn g" data-n="mk">◀ Chỉnh nội dung</button></div>
<div style="border:1px solid var(--bd);border-radius:10px;padding:14px;margin-top:12px;background:#fff;color:#000;font-family:'Times New Roman',serif">${docHtml(TE.d)}</div>`)}

function mkDoc(){
 const h='\ufeff<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="utf-8"><title>Đề kiểm tra</title><style>@page Section1{size:21cm 29.7cm;margin:2cm 2cm 2cm 2.5cm}div.Section1{page:Section1}body{font-family:"Times New Roman";font-size:13pt}p{margin:3pt 0}</style></head><body><div class="Section1">'+docHtml(TE.d)+'</div></body></html>';
 const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([h],{type:'application/msword'}));a.download='de-kiem-tra.doc';document.body.append(a);a.click();a.remove()}

/* ---------- Sự kiện ---------- */
document.addEventListener('click',async e=>{
 const g=e.target.closest('[data-g]');
 if(g){const i=+g.dataset.i,q=PQ[i],box=$('pq'+i),fb=box.querySelector('.fb');
  if(g.dataset.g==='tn'){if(box.dataset.done)return;box.dataset.done=1;const j=+g.dataset.j;
   box.querySelectorAll('.opt').forEach((o,x)=>{if(x===q.k)o.classList.add('ok');else if(x===j)o.classList.add('no')});
   fb.textContent=j===q.k?'✅ Chính xác!':'❌ Chưa đúng. Đáp án đúng: '+LET[q.k]+'.'}
  else if(g.dataset.g==='ds'){const j=+g.dataset.j,v=g.dataset.v==='1',ok=v===q.k[j];
   g.closest('.it').querySelectorAll('button').forEach(x=>x.disabled=true);g.style.outline='3px solid '+(ok?'#2bb673':'#e5484d');
   if(!ok)fb.insertAdjacentHTML('beforeend','<div>❌ Ý '+'abcd'[j]+' đáp án đúng là '+(q.k[j]?'Đúng':'Sai')+'.</div>')}
  else{const v=exNz($('pt'+i).value),ok=v&&q.a.some(a=>exNz(a)===v);fb.textContent=ok?'✅ Chính xác!':'❌ Chưa đúng. Đáp án: '+q.a.join(' / ')}
  return}
 const b=e.target.closest('[data-n]');if(!b)return;const a=b.dataset.n;
 if(a==='mk'){if($('md').style.display==='flex')$('mx').click();if(cur().les){U.s='kt';save();render()}else mkOpen()}else if(a==='mkgo')mkGo();else if(a==='mkdoc')mkDoc();else if(a==='mkshare')exShareD(TE.d);
 else if(a==='hb')hbView();else if(a==='bk')$('bk').onclick();
 else if(a==='kty'){SX.type=b.dataset.v;render()}
 else if(a==='kgo'){const{L,les}=cur(),pool=ktPool(les,L),p=ktPlan(SX.n),q=['tn','ds','tl'].flatMap(y=>shuffle(pool.filter(x=>x.y===y)).slice(0,p[y]));
  if(!q.length){modal('<p>Chưa có câu hỏi phù hợp. Hãy chọn phạm vi rộng hơn hoặc dạng bài khác.</p>');return}
  exX.req=1;exIntroPub({kind:'exam',t:'Kiểm tra – '+les.n,min:ktMin({tn:q.filter(x=>x.y==='tn').length,ds:q.filter(x=>x.y==='ds').length,tl:q.filter(x=>x.y==='tl').length}),q,e:EP()})}
 else if(a==='addlink'){const{les}=cur();let u=$('lu').value.trim();if(!u)return;if(!/^(https?:\/\/|files\/|\.\/)/i.test(u))u='https://'+u;
  secOf(les,U.s).l.push({id:uid(),t:$('lk').value.trim(),u});save();render()}
 else if(a==='ai')aiAsk()});

document.addEventListener('change',e=>{const t=e.target;
 if(t.id==='ks'){SX.scope=t.value;render()}
 else if(t.id==='kn'){SX.n=Math.max(1,Math.min(60,+t.value||10));render()}
 else if(t.id==='lex'){cur().les.ex=t.value;save();render()}
 else if(t.id==='lvd'){cur().les.vd=t.value;save();render()}
 else if(t.id==='aie'){D._ai=t.value.trim();save();render()}
 else if(t.id==='mg'){TE.g=+t.value;TE.sel=[];mkInline()?render():mkOpen()}
 else if(t.dataset.m==='ch'){t.closest('details').querySelectorAll('[data-m=ls]').forEach(c=>{c.checked=t.checked;mkSel(c.dataset.id,t.checked)})}
 else if(t.dataset.m==='ls')mkSel(t.dataset.id,t.checked);
 else if(t.name==='mt'){TE.min=+t.value;$('mmin').value=t.value}
 else if(t.id==='mmin')TE.min=Math.max(1,+t.value||45);
 else if(['mtn','mds','mtl'].includes(t.id))TE[t.id.slice(1)]=Math.max(0,+t.value||0)});

/* ---------- Giao diện chính ---------- */
function render(){
 const T=U.t,{L,les}=cur();if(!SECS.some(s=>s[0]===U.s))U.s='tt';
 if(!$('tbar')){const d=document.createElement('div');d.id='tbar';$('gr').after(d)}
 $('gr').innerHTML=G.map((g,i)=>`<button data-a="g" data-i="${i}" class="${i===U.g?'on':''}">${g}</button>`).join('');
 $('tbar').style.display=T?'flex':'none';
 $('tbar').innerHTML='<b>🔧 KHU VỰC GIÁO VIÊN</b><button class="btn w" data-n="mk" style="font-size:16px;padding:10px 20px">📝 TẠO ĐỀ KIỂM TRA</button><button class="btn g" data-n="hb">📈 Học bạ &amp; phân tích</button><button class="btn g" data-n="bk">💾 Sao lưu (data.json)</button>';
 $('tm').textContent=T?'🔓 Thoát GV':'👩‍🏫 Giáo viên';$('bk').style.display=$('an').style.display='none';
 $('ls').innerHTML='<div class="card"><h2>'+G[U.g]+' – Danh sách bài</h2>'+(L.length?L.map(x=>`<button class="li ${les&&x.id===les.id?'on':''}" data-a="l" data-id="${x.id}">${esc(x.n)}</button>`).join(''):'<p class="s">Chưa có bài nào.</p>')+(T?'<div class="row" style="margin-top:10px"><input id="nl" placeholder="Bài 1: …"><button class="btn" data-a="al">+ Thêm bài</button></div>':'')+'</div>';
 if(!les){$('mn').innerHTML='<div class="card">'+(T?'Hãy thêm bài học đầu tiên ở khung bên trái.':'Lớp này chưa có bài học.')+'</div>';return}
 const sec=SECS.find(s=>s[0]===U.s),ai=U.s!=='kt';
 const body=U.s==='on'?practice(les,T):U.s==='vd'?vdBody(les,T):U.s==='kt'?(T?mkHtml():ktBody(les,L)):media(les,U.s,T,U.s==='tt');
 $('mn').innerHTML=`<div class="card hd">${T?`<input id="lt" value="${esc(les.n)}" style="font-size:20px;font-weight:700"><input id="lc" value="${esc(les.c||'')}" placeholder="Thuộc chương (vd: Chương 1 – Di truyền)" style="margin-top:8px"><button class="btn g sm" data-a="dl" style="margin-top:8px">🗑️ Xóa bài này</button>`:`<h2 style="font-size:22px">${esc(les.n)}</h2>`}</div>
<div class="tabs">${SECS.map(s=>`<button style="--c:${s[3]}" data-a="s" data-k="${s[0]}" class="${s[0]===U.s?'on':''}">${SL(s).join(' ')}</button>`).join('')}</div>
<div class="mw ${ai?'':'one'}"><div class="card"><h2>${SL(sec).join(' ')}</h2>${body}</div>${ai?aiCard(les,T):''}</div>`;
 document.querySelectorAll('img[data-bid]').forEach(async im=>{const bl=await dbop('readonly',o=>o.get(im.dataset.bid));if(bl)im.src=URL.createObjectURL(bl)})}

$('tm').onclick=()=>{U.t=!U.t;if(U.t)store.set('bio_isT',true);save();render()};
(async()=>{
 /* Học sinh (máy chưa từng bật chế độ giáo viên) luôn nạp nội dung mới nhất từ data.json */
 if(!store.get('bio_isT',false)){U.t=false;
  try{const r=await fetch('data.json?'+Date.now());if(r.ok){const v=await r.json();if(v&&typeof v==='object'&&!Array.isArray(v)){D=v;store.set('bio_data',D)}}}catch(e){}}
 render()})();
