/* hocba.js – Học bạ & phân tích học tập (cần index.html bản mới nhất) */
const HB={c:'',q:'',L:[]},HBDAY=864e5,HBTY={tn:'Trắc nghiệm',ds:'Đúng/Sai',tl:'Trả lời ngắn'};
const HBLV=[['⚪','Chưa tham gia'],['🔴','Lâu không học'],['🟡','Ít tham gia'],['🟢','Tích cực']];
const hbTs=r=>typeof r.ts==='number'?r.ts:Date.parse(r.ts)||0;
const hbP=v=>v[1]?v[0]/v[1]*100:0;

function hbStats(rs){
 const tp={},ty={};let sum=0;
 rs.forEach(r=>{sum+=pc(r);const x=r.x||{};
  if(x.pt)Object.entries(x.pt).forEach(([k,v])=>{const o=tp[k]||(tp[k]=[0,0]);o[0]+=v[0];o[1]+=v[1]});
  else{const o=tp[r.t]||(tp[r.t]=[0,0]);o[0]+=r.h;o[1]+=r.q}
  if(x.ty)Object.entries(x.ty).forEach(([k,v])=>{const o=ty[k]||(ty[k]=[0,0]);o[0]+=v[0];o[1]+=v[1]})});
 const n=rs.length,now=Date.now(),rec=rs.filter(r=>now-hbTs(r)<14*HBDAY).length;
 const days=new Set(rs.map(r=>new Date(hbTs(r)).toDateString())).size;
 const s=[...rs].sort((a,b)=>hbTs(a)-hbTs(b)),m=a=>a.reduce((x,r)=>x+pc(r),0)/a.length;
 let trend=0;if(n>=4){const h=n>>1;trend=m(s.slice(h))-m(s.slice(0,h))}
 return{n,rec,days,avg:n?sum/n:0,trend,tp,ty,s,
  weak:Object.entries(tp).filter(([k,v])=>v[1]&&hbP(v)<50).sort((a,b)=>hbP(a[1])-hbP(b[1])),
  tyw:Object.entries(ty).filter(([k,v])=>v[1]>=3&&hbP(v)<50),
  lv:!n?0:rec>=3?3:rec>=1?2:1}}

function hbRemark(o,nm){
 if(!o.n)return nm+': chưa tham gia THỬ SỨC / thi thử nào.';
 let t=nm+' – '+HBLV[o.lv][1]+': '+o.rec+' lượt trong 14 ngày gần đây, '+o.days+' ngày có học; đúng trung bình '+fp(o.avg)+'.';
 if(o.trend>8)t+=' Đang tiến bộ.';else if(o.trend<-8)t+=' Kết quả có xu hướng giảm.';
 if(o.weak.length)t+=' Kiến thức còn yếu: '+o.weak.slice(0,3).map(([k,v])=>k+' ('+fp(hbP(v))+')').join('; ')+'.';
 if(o.tyw.length)t+=' Gặp khó ở dạng câu: '+o.tyw.map(([k])=>HBTY[k]||k).join(', ')+'.';
 if(o.weak.length||o.tyw.length)t+=' Nên ôn lại phần trên và luyện thêm.';
 else if(o.avg>=80)t+=' Nắm chắc kiến thức, có thể thử đề khó hơn.';
 return t}

function hbView(){
 const all=RM.length?RM:RS,R=D._cls||{},m={};
 all.forEach(r=>{const k=r.n+'|'+r.c;(m[k]=m[k]||{n:r.n,c:r.c,rs:[]}).rs.push(r)});
 Object.entries(R).forEach(([c,ns])=>ns.forEach(n=>{const k=n+'|'+c;m[k]=m[k]||{n,c,rs:[]}}));
 const cls=[...new Set(Object.values(m).map(x=>x.c).filter(Boolean))].sort(),q=H_q();
 function H_q(){return HB.q.toLowerCase()}
 const L=Object.values(m).filter(x=>(!HB.c||x.c===HB.c)&&(!q||x.n.toLowerCase().includes(q))).map(x=>({...x,o:hbStats(x.rs)})).sort((a,b)=>a.o.lv-b.o.lv||a.o.avg-b.o.avg);
 HB.L=L;
 const cnt=[0,0,0,0],ct={};
 L.forEach(x=>{cnt[x.o.lv]++;Object.entries(x.o.tp).forEach(([k,v])=>{const o=ct[k]||(ct[k]=[0,0]);o[0]+=v[0];o[1]+=v[1]})});
 const wk=Object.entries(ct).sort((a,b)=>hbP(a[1])-hbP(b[1])).slice(0,5);
 modal(`<h2 style="margin:0 0 8px">📈 Học bạ &amp; phân tích học tập</h2>
<div class="row"><select id="hc" style="flex:1"><option value="">Tất cả lớp</option>${cls.map(c=>`<option ${c===HB.c?'selected':''}>${esc(c)}</option>`).join('')}</select><input id="hq" placeholder="Tìm học sinh" value="${esc(HB.q)}" style="flex:1"><button class="btn g" data-hb="sync">↻ Tải từ Google Sheet</button></div>
<p class="s" style="margin-top:8px">Nguồn: ${RM.length?'Google Sheet':'thiết bị này'} · ${HBLV.map((l,i)=>l[0]+' '+l[1]+': <b>'+cnt[i]+'</b>').join(' · ')}</p>
<b>Kiến thức cả lớp còn yếu (thấp nhất)</b>${tbl(['Chủ đề','% đúng','Số câu'],wk.map(([k,v])=>[esc(k),fp(hbP(v)),v[1]]))}
<b>Học sinh (cần chú ý xếp trước)</b>${tbl(['Học sinh','Lớp','Lượt','Lần cuối','% TB','Mức độ',''],L.map((x,i)=>[esc(x.n),esc(x.c),x.o.n,x.o.n?new Date(hbTs(x.o.s[x.o.n-1])).toLocaleDateString('vi-VN'):'–',x.o.n?fp(x.o.avg):'–',HBLV[x.o.lv].join(' '),`<button class="btn g sm" data-hb="st" data-i="${i}">Hồ sơ</button>`]))}
<details><summary><b>Nhận xét tự động cả lớp (chép để dán vào học bạ)</b></summary><textarea readonly style="min-height:160px">${esc(L.map(x=>hbRemark(x.o,x.n+(x.c?' ('+x.c+')':''))).join('\n\n'))}</textarea></details>`)}

function hbProf(n,c,rs,back){
 const o=hbStats(rs),p=a=>Object.entries(a).sort((x,y)=>hbP(x[1])-hbP(y[1]));
 modal(`<h3 style="margin:0">${esc(n)} ${c?'– '+esc(c):''}</h3><p>${esc(hbRemark(o,n))}</p>
<b>Theo chủ đề / phần kiến thức</b>${tbl(['Chủ đề','% đúng','Số câu'],p(o.tp).map(([k,v])=>[esc(k),fp(hbP(v)),+v[1].toFixed(1)]))}
${Object.keys(o.ty).length?'<b>Theo dạng câu</b>'+tbl(['Dạng','% đúng','Số câu'],p(o.ty).map(([k,v])=>[HBTY[k]||k,fp(hbP(v)),v[1]])):''}
<b>Lịch sử gần đây</b>${tbl(['Ngày','Đề / chủ đề','Hình thức','% đúng','Điểm'],[...o.s].reverse().slice(0,15).map(r=>[new Date(hbTs(r)).toLocaleDateString('vi-VN'),esc(r.t),r.m==='exam'?'Thi thử':esc(r.m),fp(pc(r)),r.s]))}
${back}`)}

function hbMine(){
 if(!TS.nm||!TS.cl){modal('<p>Hãy chọn lớp và họ tên ở mục THỬ SỨC hoặc THI THỬ trước, rồi mở lại Học bạ.</p><button class="btn g" data-x="hub">◀ Quay lại</button>');return}
 hbProf(TS.nm,TS.cl,RS.filter(r=>r.n===TS.nm&&r.c===TS.cl),'<button class="btn g" data-x="hub" style="margin-top:10px">◀ Quay lại</button>')}

async function hbSync(){
 const u=EP();if(!u)return;
 try{const v=await (await fetch(u)).json();
  RM=v.filter(x=>typeof x[5]==='number').map(x=>{let o;try{o=x[9]?JSON.parse(x[9]):undefined}catch(e){}
   return{ts:Date.parse(x[0])||x[0],n:String(x[1]),c:String(x[2]),t:String(x[3]),m:String(x[4]),h:x[5],q:x[6],s:x[7],d:x[8],x:o}})}catch(e){}
 hbView()}

document.addEventListener('click',e=>{const b=e.target.closest('[data-hb]');if(!b)return;const a=b.dataset.hb;
 if(a==='sync')hbSync();
 else if(a==='back')hbView();
 else if(a==='st'){const x=HB.L[+b.dataset.i];hbProf(x.n,x.c,x.rs,'<button class="btn g" data-hb="back" style="margin-top:10px">◀ Quay lại danh sách</button>')}});
document.addEventListener('change',e=>{const t=e.target;
 if(t.id==='hc'){HB.c=t.value;hbView()}else if(t.id==='hq'){HB.q=t.value.trim();hbView()}});

(()=>{const a=$('an');if(a){a.textContent='📈 Học bạ & phân tích';a.onclick=hbView}})();
