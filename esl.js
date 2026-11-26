/* ---------- giao diện riêng của module ESL (tự chèn, không đụng CSS web chính) ---------- */
(function(){const css=`
.esl{--ep:#15803d;--eb2:#dcfce7}
.eh{display:flex;flex-wrap:wrap;gap:8px 14px;align-items:center;margin-bottom:10px}.et{font-weight:900;font-size:19px;color:var(--ep)}.ep{flex:1;min-width:180px;font-size:14px;color:#4b5f54}.edone{color:#15803d;font-weight:800}
.etabs{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px}.etabs button{flex:1;min-width:130px;border:2px solid var(--bd,#d3e5d8);background:#fff;border-radius:12px;padding:10px 8px;font-weight:800;cursor:pointer;font-size:14px;color:#14281d}.etabs button.on{background:var(--ep);color:#fff;border-color:var(--ep)}
.egrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:12px;margin-top:10px}
.ecard{perspective:900px;height:270px;cursor:pointer}.ein{position:relative;width:100%;height:100%;transition:transform .5s;transform-style:preserve-3d}.ecard.on .ein{transform:rotateY(180deg)}
.ef0{position:absolute;inset:0;backface-visibility:hidden;-webkit-backface-visibility:hidden;border-radius:16px;border:2px solid #bbf7d0;background:#fff;padding:10px;display:flex;flex-direction:column;align-items:center;justify-content:space-between;text-align:center;overflow:hidden;box-shadow:0 3px 8px #0000000f}
.ef0.back{transform:rotateY(180deg);background:#f0fdf4;justify-content:center;gap:5px}
.eimg{width:100%;height:130px;object-fit:cover;border-radius:12px;display:block;background:#f0fdf4}.eph{display:flex;align-items:center;justify-content:center;font-size:54px}
.ew{font-weight:900;font-size:20px;color:#14281d;cursor:pointer;line-height:1.15}.ipa{color:#0369a1;font-size:15px}.evi{font-size:20px;font-weight:800;color:#b45309}.eex{font-size:13px;color:#4b5f54}
.eb{display:flex;gap:6px;flex-wrap:wrap;justify-content:center}.ebtn{border:0;border-radius:10px;background:#e0f2fe;color:#075985;font-weight:800;padding:7px 11px;cursor:pointer;font-size:14px;min-height:36px}.ebtn.s{padding:3px 8px;min-height:0}.ebtn.ok{background:#bbf7d0;color:#14532d}.ebtn.no{background:#fee2e2;color:#991b1b}
.erev{position:absolute;top:8px;left:8px;background:#f59e0b;color:#3b2a00;font-size:11px;font-weight:900;border-radius:8px;padding:2px 7px;z-index:2}.erev.s{position:static;font-size:10px}.ebd{position:absolute;top:6px;right:10px;font-size:20px;z-index:2}
.ess{border:1px solid #bbf7d0;border-radius:14px;padding:12px;margin-bottom:10px;background:#fcfffc}.ent{display:flex;gap:10px;align-items:center}.esn{background:var(--ep);color:#fff;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;flex:none}.esen{flex:1;font-size:18px;font-weight:700}.esvi{margin-top:8px;padding:8px 10px;background:#fef9c3;border-radius:10px;font-weight:600}
.esl mark{background:#fde047;border-radius:4px;padding:0 3px;color:inherit}
.exb{margin-top:10px;padding:10px;border:2px dashed #86efac;border-radius:12px}.exs{font-size:18px}.exs.big{font-size:22px;text-align:center;line-height:1.7}.exbl{display:inline-block;min-width:90px;border-bottom:3px solid #0284c7;text-align:center;font-weight:900;color:#0284c7;padding:0 6px}.exbl.ok{color:#15803d;border-color:#15803d}.exbl.rev{color:#b45309;border-color:#b45309}.exbl.no{color:#dc2626;border-color:#dc2626}
.chip{display:inline-flex;align-items:center;gap:4px;border:2px solid #86efac;background:#fff;border-radius:999px;padding:7px 14px;font-weight:800;cursor:pointer;font-size:15px;color:#14281d;min-height:38px}.chip.sel{background:#15803d;color:#fff;border-color:#15803d}.chip.used{opacity:.4}.chip:disabled{opacity:.55;cursor:default}
.efb{padding:10px 12px;border-radius:12px;margin-top:8px;font-size:15px;line-height:1.5}.efb.good{background:#dcfce7;color:#14532d}.efb.hint{background:#fef9c3;color:#713f12}
.ggrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:12px}.gcard{border-radius:16px;padding:14px;text-align:center;display:flex;flex-direction:column;gap:4px;align-items:center}.gic{font-size:40px}.gn{font-weight:900;font-size:15px}.gv{font-size:13px;color:#4b5f54}.gs{font-size:12.5px;color:#374151}.gcard .btn{margin-top:6px;width:100%}
.gh{display:flex;gap:10px;align-items:center;margin-bottom:10px;flex-wrap:wrap}.gtop{display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;align-items:center;margin-bottom:8px;font-size:16px}
.gq{text-align:center;padding:10px}.gimg{max-width:260px;width:80%;max-height:200px;object-fit:cover;border-radius:14px;margin:0 auto;display:block}.gclue{font-size:21px;font-weight:800;margin:10px 0}.gmask{letter-spacing:4px;font-size:28px;color:#0284c7}.gdash{font-size:24px;letter-spacing:3px;margin:8px 0;color:#6b7280}
.gtxt{border:2px solid #86efac;border-radius:10px;padding:10px 12px;font-size:18px;min-width:200px;max-width:100%}.gres{text-align:center;padding:20px 10px}.gstars{font-size:46px}.gsc{font-size:30px;font-weight:900;color:var(--ep);margin:6px 0}
.oln{min-height:54px;display:flex;flex-wrap:wrap;gap:6px;justify-content:center;align-items:center;padding:10px;border:2px dashed #86efac;border-radius:12px;background:#f8fffa;margin-top:8px}.mgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:10px}.mtile{border:3px solid #bbf7d0;border-radius:14px;background:#fff;overflow:hidden;cursor:pointer;text-align:center}.mtile img{width:100%;height:100px;object-fit:cover;display:block}.mtx{height:100px;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:18px;padding:6px;color:#b45309}.mslot{padding:6px;font-weight:900;background:#f0fdf4;min-height:32px}
.mtile.ok{border-color:#16a34a}.mtile.ok .mslot{background:#bbf7d0;color:#14532d}.mtile.rev .mslot{background:#fde68a}.mtile.shake{animation:eshake .45s;border-color:#f87171}
@keyframes eshake{0%,100%{transform:none}20%{transform:translateX(-7px)}60%{transform:translateX(7px)}}
.mbank{display:flex;flex-wrap:wrap;gap:8px;margin:12px 0;justify-content:center}
.wsw{display:flex;gap:14px;flex-wrap:wrap;align-items:flex-start}.wsg{display:grid;gap:2px;flex:1 1 320px;max-width:520px;user-select:none;-webkit-user-select:none;background:#f0fdf4;padding:6px;border-radius:12px}
.wc{aspect-ratio:1;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:clamp(12px,3.4vw,19px);background:#fff;border-radius:6px;cursor:pointer}.wc.sel{background:#fde047}.wc.fd{color:#fff}.wc.f0{background:#16a34a}.wc.f1{background:#0284c7}.wc.f2{background:#d97706}.wc.f3{background:#db2777}.wc.f4{background:#7c3aed}.wc.f5{background:#0d9488}
.wsl{flex:1 1 160px;display:flex;flex-direction:column;gap:6px}.wsx{padding:6px 10px;border:2px solid #bbf7d0;border-radius:10px;display:flex;flex-direction:column}.wsx small{color:#6b7280}.wsx.fnd{text-decoration:line-through;opacity:.55;background:#dcfce7}
.fgrid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}.fcard{perspective:700px;height:100px;cursor:pointer}.fin{position:relative;width:100%;height:100%;transition:transform .4s;transform-style:preserve-3d}.fcard.on .fin,.fcard.ok .fin{transform:rotateY(180deg)}
.fbk,.ffr{position:absolute;inset:0;backface-visibility:hidden;-webkit-backface-visibility:hidden;border-radius:12px;display:flex;align-items:center;justify-content:center;text-align:center;padding:4px;overflow:hidden}.fbk{background:#15803d;color:#fff;font-size:28px}.ffr{transform:rotateY(180deg);background:#fff;border:3px solid #86efac}.ffr img{width:100%;height:100%;object-fit:cover}.fx{font-size:14px;font-weight:700}.fx.big{font-size:17px;font-weight:900}.fcard.ok .ffr{background:#dcfce7;border-color:#16a34a}
.qq{font-size:20px;font-weight:800;margin:10px 0}.qopts{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:8px;max-width:640px;margin:0 auto}.qo{border:2px solid #86efac;background:#fff;border-radius:12px;padding:12px;font-size:16px;font-weight:700;cursor:pointer;min-height:48px}.qo.ok{background:#bbf7d0;border-color:#16a34a}.qo.no{background:#fee2e2;border-color:#dc2626}
.lf h3{margin:0 0 8px}.lfp{font-size:20px;line-height:2.4;margin:12px 0;padding:12px;background:#f8fffa;border:1px solid #bbf7d0;border-radius:12px}.lfw{display:inline-block;position:relative;margin:0 2px;vertical-align:baseline}.lfi{border:0;border-bottom:3px solid #0284c7;background:#e0f2fe;font-size:19px;text-align:center;border-radius:6px 6px 0 0;padding:2px 4px;max-width:100%;font-family:inherit}.lfi.ok{background:#bbf7d0;border-color:#16a34a}.lfi.no{background:#fee2e2;border-color:#dc2626}.hnt{display:block;position:absolute;left:0;right:0;top:100%;font-size:11px;color:#b45309;text-align:center;line-height:1.1;white-space:nowrap}.lfb{padding:8px 0}
.gadm{border:1px solid #d3e5d8;border-radius:12px;padding:8px 12px;margin-bottom:8px;background:#fcfffc}.gadm summary{cursor:pointer;padding:4px 0}.gfl{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:8px 14px;margin-top:8px}.gfl input[type=number],.gfl select{width:100%}
.lftok{line-height:2.2;font-size:18px;padding:10px;border:1px dashed #86efac;border-radius:10px;background:#fcfffc}.tk{cursor:pointer;border-radius:6px;padding:1px 3px}.tk:hover{background:#e0f2fe}.tk.hid{background:#fde047;font-weight:800;text-decoration:underline}
.grid2{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:14px}
html.m .wsl{flex-direction:row;flex-wrap:wrap}html.m .wsx{flex:1 1 44%}@media(max-width:760px){.wsl{flex-direction:row;flex-wrap:wrap}.wsx{flex:1 1 44%}}
html.m .egrid{grid-template-columns:repeat(2,1fr);gap:8px}html.m .ecard{height:250px}html.m .ew{font-size:17px}html.m .eimg{height:105px}html.m .etabs button{min-width:46%;padding:9px 4px;font-size:13px}html.m .fgrid{grid-template-columns:repeat(3,1fr)}html.m .lfp{font-size:18px}html.m .gtxt{min-width:0;width:100%}
@media(max-width:760px){.egrid{grid-template-columns:repeat(2,1fr);gap:8px}.ecard{height:250px}.etabs button{min-width:46%}.fgrid{grid-template-columns:repeat(3,1fr)}}
`;const s=document.createElement("style");s.id="eslcss";s.textContent=css;document.head.appendChild(s)})();
(function(){const s=document.createElement("style");s.id="eslcss2";s.textContent=`
.pgrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}.pcol{display:flex;flex-direction:column;gap:8px}.pc{border:2px solid #86efac;background:#fff;border-radius:12px;padding:10px;font-size:15px;font-weight:700;cursor:pointer;text-align:left;min-height:46px;color:#14281d}.pc.sel{background:#15803d;color:#fff;border-color:#15803d}.pc.ok{background:#bbf7d0;border-color:#16a34a}.pc.rev{background:#fde68a;border-color:#d97706}.pc.shake{animation:eshake .45s;border-color:#f87171}.pc:disabled{cursor:default}
.lfn{border:0;background:#0284c7;color:#fff;border-radius:8px;font-size:12px;font-weight:800;padding:2px 6px;margin-right:2px;cursor:pointer;vertical-align:middle}
.lfclip{margin:10px 0;padding:8px;background:#0b1f14;border-radius:12px;text-align:center}.lfclip video,.lfclip iframe{width:100%;max-width:560px;aspect-ratio:16/9;border:0;border-radius:10px;background:#000}.lfclip .btn{margin-top:6px}
`;document.head.appendChild(s)})();
/* =====================================================================
   SCIENCE ESL – LEARN & PLAY  (module rời, chạy kèm index.html)
   Tệp này: esl.js  ·  Dữ liệu nội dung: esl-data.json (xuất từ tab 🔤 ESL)
   Ghép vào web chính bằng thẻ <script src="esl.js"></script>.
   Nếu thiếu tệp này, web chính vẫn chạy bình thường (chỉ không có mục ESL).
   Cấu trúc: p1 lõi & dữ liệu · p2 giao diện học sinh · p3 trò chơi · p4 quản lý giáo viên
   ===================================================================== */
(function(){
"use strict";
const E=window.ESL={preview:false};
const KEY_EDIT="esl_edited",KEY_PUB="esl_pubAt",KEY_PROG="esl_prog";

/* ---------- tiện ích ---------- */
const rnd=n=>Math.floor(Math.random()*n);
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=rnd(i+1);[a[i],a[j]]=[a[j],a[i]]}return a};
const pick=(a,n)=>shuffle(a).slice(0,n);
const reEsc=s=>String(s).replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
const uid=p=>(p||"e")+Date.now().toString(36)+Math.random().toString(36).slice(2,6);
const G=id=>document.getElementById(id);
const num=(v,d,min,max)=>{v=parseFloat(v);if(!isFinite(v))v=d;if(min!=null&&v<min)v=min;if(max!=null&&v>max)v=max;return v};
E.u={rnd,shuffle,pick,reEsc,uid,num};

/* ---------- lưu trữ (IndexedDB riêng, không đụng dữ liệu web chính) ---------- */
function idb(){return new Promise((res,rej)=>{const r=indexedDB.open("khtn-esl",1);r.onupgradeneeded=()=>r.result.createObjectStore("kv");r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)})}
async function idbGet(k){const d=await idb();return new Promise((res,rej)=>{const q=d.transaction("kv").objectStore("kv").get(k);q.onsuccess=()=>res(q.result);q.onerror=()=>rej(q.error)})}
async function idbSet(k,v){const d=await idb();return new Promise((res,rej)=>{const t=d.transaction("kv","readwrite");t.objectStore("kv").put(v,k);t.oncomplete=()=>res();t.onerror=()=>rej(t.error)})}
const blank=()=>({app:"khtn-esl",v:1,savedAt:0,words:[],sents:[],games:{},listen:{},quiz:{},items:{},pairs:{},cfg:{voice:"",rate:.9}});
function norm(d){const b=blank();d=d||{};return{app:"khtn-esl",v:1,savedAt:+d.savedAt||0,words:Array.isArray(d.words)?d.words:[],sents:Array.isArray(d.sents)?d.sents:[],games:d.games&&typeof d.games==="object"?d.games:{},listen:d.listen&&typeof d.listen==="object"?d.listen:{},quiz:d.quiz&&typeof d.quiz==="object"?d.quiz:{},items:d.items&&typeof d.items==="object"?d.items:{},pairs:d.pairs&&typeof d.pairs==="object"?d.pairs:{},cfg:Object.assign(b.cfg,d.cfg||{})}}
let DATA=blank(),loaded=false,saveT=0;
E.data=()=>DATA;
E.loaded=()=>loaded;
E.ready=(async()=>{
 let local=null,remote=null;
 try{local=await idbGet("data")}catch(e){}
 try{const r=await fetch("esl-data.json?v="+Date.now(),{cache:"no-cache"});if(r.ok){const j=await r.json();if(j&&j.app==="khtn-esl")remote=j}}catch(e){}
 const ed=Number(localStorage.getItem(KEY_EDIT)||0);
 if(remote&&(remote.savedAt>=ed||!local))DATA=norm(remote);else if(local)DATA=norm(local);
 loaded=true;try{if(window.speechSynthesis)speechSynthesis.getVoices()}catch(e){}
})();
function save(){DATA.savedAt=Date.now();try{localStorage.setItem(KEY_EDIT,String(DATA.savedAt))}catch(e){}
 clearTimeout(saveT);saveT=setTimeout(flush,350)}
async function flush(){clearTimeout(saveT);try{await idbSet("data",DATA)}catch(e){if(window.toast)toast("Bộ nhớ trình duyệt đầy – hãy tải esl-data.json để sao lưu.","err")}}
E.save=save;E.flush=flush;
window.addEventListener("pagehide",()=>{if(saveT)flush()});

/* ---------- truy vấn dữ liệu ---------- */
const lw=lid=>DATA.words.filter(w=>w.lesson===lid);
const ls=lid=>DATA.sents.filter(s=>s.lesson===lid);
const wById=id=>DATA.words.find(w=>w.id===id);
E.q={lw,ls,wById};
const GAMEDEF={
 match:{name:"MATCH THE PICTURE",icon:"🖼️",vn:"Ghép từ với hình",col:"#dcfce7"},
 guess:{name:"GUESS THE WORD",icon:"🔎",vn:"Đoán từ khóa",col:"#fef9c3"},
 search:{name:"WORD SEARCH",icon:"🔠",vn:"Tìm từ trong bảng chữ",col:"#e0f2fe"},
 flip:{name:"FLIP & MATCH",icon:"🃏",vn:"Lật thẻ ghép cặp",col:"#fce7f3"},
 fill:{name:"FILL IN THE BLANKS",icon:"✍️",vn:"Điền từ vào câu",col:"#ede9fe"},
 order:{name:"SENTENCE ORDER",icon:"🔀",vn:"Sắp xếp từ/cụm từ thành câu",col:"#fae8ff"},
 odd:{name:"ODD ONE OUT",icon:"🧩",vn:"Tìm từ khác loại",col:"#ccfbf1"},
 tf:{name:"TRUE OR FALSE",icon:"✅",vn:"Đúng hay sai",col:"#fee2e2"},
 fix:{name:"FIX THE MISTAKE",icon:"🛠️",vn:"Sửa câu sai",col:"#e0e7ff"},
 pairs:{name:"MATCH PAIRS",icon:"🔗",vn:"Ghép cặp",col:"#fef3c7"},
 quiz:{name:"SCIENCE QUIZ",icon:"⚡",vn:"Trắc nghiệm nhanh",col:"#ffedd5"}};
const GORDER=["match","guess","search","flip","fill","order","odd","tf","fix","pairs","quiz"],GPLAY=GORDER.filter(t=>t!=="quiz");
const GDEFAULT=["match","guess","flip"];
const gcfgDefault=t=>({match:{n:6,pts:10,plays:0},guess:{n:6,pts:10,bonus:5,tries:3,plays:0},search:{n:8,pts:10,time:0,plays:0},flip:{n:6,pts:10,mode:"vi",plays:0},fill:{n:6,pts:10,mode:"bank",plays:0},order:{n:5,pts:10,plays:0},odd:{n:5,pts:10,plays:0},tf:{n:5,pts:10,plays:0},fix:{n:5,pts:10,plays:0},pairs:{n:6,pts:10,plays:0},quiz:{n:8,pts:10,time:0,qs:"",plays:0}})[t];
const its=(lid,t)=>(DATA.items[lid]||[]).filter(i=>i.types&&i.types.includes(t));const prs=lid=>DATA.pairs[lid]||[];
function gamesOf(lid){const g=DATA.games[lid];if(Array.isArray(g))return g.filter(x=>GAMEDEF[x.type]&&x.type!=="quiz");
 const have=[["order",its(lid,"scramble").length],["fill",its(lid,"fill").length],["tf",its(lid,"tf").length],["odd",its(lid,"odd").length],["pairs",prs(lid).length],["fix",its(lid,"fix").length]].filter(x=>x[1]).map(x=>x[0]).slice(0,2);
 const t=["match","flip",...(have.length?have:["guess"])];return t.map(t=>({type:t,cfg:gcfgDefault(t),auto:true}))}
E.GAMEDEF=GAMEDEF;E.GORDER=GORDER;E.its=its;E.prs=prs;E.gamesOf=gamesOf;E.gcfgDefault=gcfgDefault;

/* ---------- giọng đọc & âm thanh ---------- */
const voices=()=>{try{return(window.speechSynthesis?speechSynthesis.getVoices():[]).filter(v=>/^en/i.test(v.lang))}catch(e){return[]}};
let curAudio=null;
function stopSound(){try{if(window.speechSynthesis)speechSynthesis.cancel()}catch(e){}if(curAudio){try{curAudio.pause()}catch(e){}curAudio=null}}
function say(text,rate){if(!window.speechSynthesis||typeof SpeechSynthesisUtterance==="undefined"){if(window.toast)toast("Thiết bị này chưa hỗ trợ giọng đọc. Hãy dùng tệp audio.","err");return false}
 try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(String(text));u.lang="en-US";const vs=voices(),v=vs.find(v=>v.name===DATA.cfg.voice)||vs.find(v=>/en-US/i.test(v.lang))||vs[0];if(v){u.voice=v;u.lang=v.lang}u.rate=(rate||1)*(DATA.cfg.rate||.9);speechSynthesis.speak(u);return true}catch(e){return false}}
function playSrc(src,rate,onend){stopSound();try{curAudio=new Audio(src);curAudio.playbackRate=rate||1;if(onend)curAudio.onended=onend;curAudio.play().catch(()=>{if(window.toast)toast("Không phát được audio","err")})}catch(e){}}
function speakWord(w,slow){if(!w)return;if(w.audio)playSrc(w.audio,slow?.75:1);else say(w.en,slow?.65:1)}
E.u.say=say;E.u.stop=stopSound;E.u.speakWord=speakWord;E.say=id=>{const w=wById(id);if(w)speakWord(w);if(w)mark(w.lesson,id)};

/* ---------- tiến độ học sinh (lưu theo họ tên + lớp + bài) ---------- */
const tmp={};let warned=false;
const newRec=(lid,w)=>({n:w.n||"",c:w.c||"",test:!!w.test,lesson:lid,learned:[],st:{},games:{},listen:{best:0,max:0,plays:0,listens:0},sec:0,done:false,at:0});
function target(lid){const w=window.who?who():null;if(E.preview||!w)return{tmp:true,w:w||{n:"",c:""}};return{tmp:false,w}}
function rec(lid){const t=target(lid);if(t.tmp)return tmp[lid]||(tmp[lid]=newRec(lid,t.w));
 const a=store.get(KEY_PROG,[]),r=a.find(x=>x.n===t.w.n&&x.c===t.w.c&&x.lesson===lid&&!!x.test===!!t.w.test);return r||newRec(lid,t.w)}
function upd(lid,fn){const t=target(lid);
 if(t.tmp){const r=tmp[lid]||(tmp[lid]=newRec(lid,t.w));fn(r);checkDone(lid,r);if(!E.preview&&!t.w.n&&!warned){warned=true;if(window.toast)toast("Con chưa nhập họ tên nên tiến độ ESL chưa được lưu. Bấm “Nhập họ tên” ở Trang chủ nhé.","err")}return r}
 const a=store.get(KEY_PROG,[]);let r=a.find(x=>x.n===t.w.n&&x.c===t.w.c&&x.lesson===lid&&!!x.test===!!t.w.test);if(!r){r=newRec(lid,t.w);a.push(r)}
 fn(r);checkDone(lid,r);r.at=Date.now();store.set(KEY_PROG,a);return r}
function checkDone(lid,r){const ws=lw(lid);const gp=Object.keys(r.games||{}).length;r.done=!!(ws.length&&ws.every(w=>r.learned.includes(w.id))&&gp>=1&&(r.listen.plays>0||!(DATA.listen[lid]&&DATA.listen[lid].text)))}
function mark(lid,id){upd(lid,r=>{if(!r.learned.includes(id))r.learned.push(id)});if(E.headUpd)E.headUpd()}
E.rec=rec;E.upd=upd;E.mark=mark;
setInterval(()=>{if(document.hidden||E.preview||!G("eslroot")||!E.cur)return;const w=window.who?who():null;if(!w)return;upd(E.cur,r=>{r.sec+=5})},5000);

/* ---------- từ khóa trong câu & tạo ô trống ---------- */
function hl(text,ws){const keys=ws.map(w=>w.en).filter(Boolean).sort((a,b)=>b.length-a.length);if(!keys.length)return esc(text);
 const re=new RegExp("\\b(?:"+keys.map(reEsc).join("|")+")(?:s|es)?\\b","gi");let out="",last=0,m;
 while((m=re.exec(text))){out+=esc(text.slice(last,m.index))+"<mark>"+esc(m[0])+"</mark>";last=m.index+m[0].length;if(m[0].length===0)re.lastIndex++}
 return out+esc(text.slice(last))}
function cloze(text,ws){text=String(text||"");const keys=ws.map(w=>w.en).filter(Boolean).sort((a,b)=>b.length-a.length);
 for(const k of keys){const m=new RegExp("\\b"+reEsc(k)+"(?:s|es)?\\b","i").exec(text);if(m)return{pre:text.slice(0,m.index),ans:m[0],post:text.slice(m.index+m[0].length),word:ws.find(w=>w.en===k)}}
 const toks=[...text.matchAll(/[A-Za-z][A-Za-z'’-]{3,}/g)];if(!toks.length)return null;const t=toks.sort((a,b)=>b[0].length-a[0].length)[0];
 return{pre:text.slice(0,t.index),ans:t[0],post:text.slice(t.index+t[0].length),word:null}}
E.u.hl=hl;E.u.cloze=cloze;

/* ---------- hệ thống gợi ý 3 cấp (không tạo cảm giác bị phạt) ---------- */
function hintHTML(n,ans,w){const first=ans?ans[0]:"",len=ans?ans.length:0;
 if(n<=1)return w&&w.vi?`💡 Gợi ý 1: nghĩa tiếng Việt là “<b>${esc(w.vi)}</b>”.${w.img?` <img src="${w.img}" style="height:48px;border-radius:8px;vertical-align:middle">`:""}`:`💡 Gợi ý 1: từ này có <b>${len}</b> chữ cái.`;
 if(n===2)return `💡 Gợi ý 2: từ bắt đầu bằng chữ “<b>${esc(first)}</b>” và có <b>${len}</b> chữ cái.${w&&w.def?`<br>Mô tả: ${esc(w.def)}`:""}`;
 return `📖 Đáp án là “<b>${esc(ans)}</b>”${w&&w.vi?` – ${esc(w.vi)}`:""}.${w&&w.ex?`<br><i>${hl(w.ex,[w])}</i>`:""}<br>Không sao đâu, con chơi lại để nhớ thêm nhé!`}
const KIND=["Gần đúng rồi, thử lại nhé! 💪","Chưa đúng, con xem gợi ý nhé 🌱","Cố lên, sắp được rồi! ⭐"];
E.u.hint=hintHTML;E.u.kind=KIND;
const cmp=(a,b)=>String(a||"").trim().toLowerCase().replace(/\s+/g," ")===String(b||"").trim().toLowerCase().replace(/\s+/g," ");
E.u.cmp=cmp;

/* =====================================================================
   GIAO DIỆN HỌC SINH: KEY WORDS · USEFUL SENTENCES · LET'S PLAY · LISTEN & FILL
   ===================================================================== */
const S={lid:null,tab:"kw",flip:{},filter:"all",showVi:{},ex:{},game:null,lf:null};
E.S=S;
const TABS=[["kw","🔤","KEY WORDS"],["ss","💬","USEFUL SENTENCES"],["lf","🎧","LISTEN & FILL"],["play","🎮","LET'S PLAY"],["qz","❓","QUIZ"]];
const fmtT=s=>s<60?s+" giây":Math.round(s/60)+" phút";
const imgOf=(w,cls)=>w.img?`<img class="${cls||"eimg"}" src="${w.img}" alt="${esc(w.en)}" loading="lazy">`:`<div class="${cls||"eimg"} eph">🔬</div>`;

E.lesson=function(l,el,pv){
 E.preview=!!pv;
 if(!loaded){el.innerHTML=`<div class="empty">⏳ Đang tải nội dung ESL…</div>`;E.ready.then(()=>{const e2=G("sec");if(e2&&document.body.contains(e2)&&(V.sec==="esl"||pv))E.lesson(l,pv?el:e2,pv)});return}
 if(S.lid!==l.id){S.lid=l.id;S.tab="kw";S.flip={};S.filter="all";S.showVi={};S.ex={};S.game=null;S.lf=null}
 E.cur=l.id;el.innerHTML=`<div id="eslroot" class="esl"></div>`;draw()};

function empty(msg){return `<div class="empty">${msg}${isTeacher()&&!E.preview?`<br><button class="btn sm" style="margin-top:8px" onclick="ESL.edit('${S.lid}')">✏ Soạn nội dung ESL cho bài này</button>`:""}</div>`}
function head(l){const ws=lw(l.id),rc=rec(l.id),nl=ws.filter(w=>rc.learned.includes(w.id)).length,nk=ws.filter(w=>rc.st[w.id]===1).length;
 return `<div class="eh"><div class="et">🔤 SCIENCE ESL – LEARN &amp; PLAY</div><div class="ep" id="ehead">${ws.length?`Đã học <b>${nl}/${ws.length}</b> từ · Nhớ <b>${nk}</b> · ⏱ ${fmtT(rc.sec||0)}${rc.done?` · <span class="edone">✅ Hoàn thành</span>`:""}`:""}</div>${isTeacher()&&!E.preview?`<button class="btn sm sec" onclick="ESL.edit('${l.id}')">✏ Soạn ESL bài này</button>`:""}</div>`}
E.headUpd=function(){const e=G("ehead");if(!e||!S.lid)return;const ws=lw(S.lid),rc=rec(S.lid),nl=ws.filter(w=>rc.learned.includes(w.id)).length,nk=ws.filter(w=>rc.st[w.id]===1).length;
 e.innerHTML=ws.length?`Đã học <b>${nl}/${ws.length}</b> từ · Nhớ <b>${nk}</b> · ⏱ ${fmtT(rc.sec||0)}${rc.done?` · <span class="edone">✅ Hoàn thành</span>`:""}`:""};
function draw(){const r=G("eslroot");if(!r)return;const l=findLesson(S.lid);if(!l)return;
 r.innerHTML=head(l)+`<div class="etabs">${TABS.map(([k,ic,n])=>`<button class="${S.tab===k?"on":""}" onclick="ESL.tab('${k}')"><span>${ic}</span> ${n}</button>`).join("")}</div><div id="ebody">${S.tab==="kw"?kwHTML(l):S.tab==="ss"?ssHTML(l):S.tab==="play"?playHTML(l):S.tab==="qz"?`<div id="gbox" class="gbox"></div>`:lfHTML(l)}</div>`;
 if(S.tab==="play"&&S.game)gameStart(S.game.idx,true);if(S.tab==="qz")gameStart(-1)}
E.tab=k=>{stopSound();S.tab=k;S.game=k==="qz"?{idx:-1,type:"quiz"}:null;draw()};
E.edit=lid=>{const l=findLesson(lid);if(!l)return;AS.g=l.g;AS.lesson=lid;AS.tab="v";go({name:"adm",adm:"esl"})};

/* ---------- 1. KEY WORDS ---------- */
function kwHTML(l){const ws=lw(l.id);if(!ws.length)return empty("Bài này chưa có từ khóa ESL. Con quay lại sau nhé!");
 const rc=rec(l.id),unk=ws.filter(w=>rc.st[w.id]!==1),show=S.filter==="unk"?unk:ws;
 return `<div class="row ef"><span class="seg"><button class="${S.filter==="all"?"on":""}" onclick="ESL.filt('all')">Tất cả (${ws.length})</button><button class="${S.filter==="unk"?"on":""}" onclick="ESL.filt('unk')">Từ chưa nhớ (${unk.length})</button></span><span class="muted" style="font-size:13px">Bấm 🔊 để nghe · bấm thẻ để lật xem nghĩa</span></div>
 ${show.length?`<div class="egrid">${show.map(w=>cardHTML(w,rc)).join("")}</div>`:`<div class="empty">🎉 Con đã nhớ hết các từ của bài này!</div>`}`}
function badge(w,rc){const s=rc.st[w.id];return s===1?"✔":s===-1?"✖":""}
function cardHTML(w,rc){const on=S.flip[w.id]?"on":"";
 return `<div class="ecard ${on}" data-id="${w.id}" onclick="ESL.flipCard('${w.id}')"><div class="ein">
 <div class="ef0 front">${w.rev?`<span class="erev">ÔN TẬP</span>`:""}<span class="ebd" data-b="${w.id}">${badge(w,rc)}</span>${imgOf(w)}<div class="ew" onclick="event.stopPropagation();ESL.say('${w.id}')">${esc(w.en)}</div><div class="eb"><button class="ebtn" onclick="event.stopPropagation();ESL.say('${w.id}')" aria-label="Nghe">🔊</button><button class="ebtn" onclick="event.stopPropagation();ESL.flipCard('${w.id}')">🔄 Xem nghĩa</button></div></div>
 <div class="ef0 back"><div class="ew">${esc(w.en)} <button class="ebtn s" onclick="event.stopPropagation();ESL.say('${w.id}')">🔊</button></div>${w.ipa?`<div class="ipa">/${esc(String(w.ipa).replace(/^\/|\/$/g,""))}/</div>`:""}<div class="evi">${esc(w.vi)}</div>${w.ex?`<div class="eex">${hl(w.ex,[w])}</div>`:""}<div class="eb"><button class="ebtn ok" onclick="event.stopPropagation();ESL.setSt('${w.id}',1)">✔ Đã nhớ</button><button class="ebtn no" onclick="event.stopPropagation();ESL.setSt('${w.id}',-1)">✖ Chưa nhớ</button></div></div></div></div>`}
E.filt=f=>{S.filter=f;draw()};
E.flipCard=id=>{const el=document.querySelector(`.ecard[data-id="${id}"]`);if(!el)return;S.flip[id]=!S.flip[id];el.classList.toggle("on",!!S.flip[id]);if(S.flip[id])mark(S.lid,id)};
E.setSt=(id,v)=>{upd(S.lid,r=>{r.st[id]=v;if(!r.learned.includes(id))r.learned.push(id)});const b=document.querySelector(`[data-b="${id}"]`);if(b)b.textContent=v===1?"✔":"✖";
 if(window.toast)toast(v===1?"✔ Đã đánh dấu: nhớ rồi":"✖ Đã đánh dấu: cần ôn lại");E.headUpd();
 if(S.filter==="unk"&&v===1)setTimeout(()=>{if(S.tab==="kw"&&G("eslroot"))draw()},500)};

/* ---------- 2. USEFUL SENTENCES ---------- */
function ssHTML(l){const ss=ls(l.id),ws=lw(l.id);if(!ss.length)return empty("Bài này chưa có mẫu câu. Con quay lại sau nhé!");
 return `<div class="row" style="margin-bottom:8px"><button class="btn sm" onclick="ESL.playType('order')">🔀 Luyện sắp xếp từ thành câu</button></div>`+ss.map((s,i)=>{const x=S.ex[s.id]||{},cz=cloze(s.en,ws);
  return `<div class="ess"><div class="ent"><b class="esn">${i+1}</b><div class="esen">${hl(s.en,ws)}</div><button class="ebtn s" onclick="ESL.saySent('${s.id}')">🔊</button></div>
  <div class="row" style="margin-top:6px"><button class="btn sm sec" onclick="ESL.togVi('${s.id}')">${S.showVi[s.id]?"🙈 Ẩn nghĩa":"👁 Xem nghĩa"}</button>${cz?`<button class="btn sm blue" onclick="ESL.exOpen('${s.id}')">✍ Bài tập điền từ</button>`:""}</div>
  ${S.showVi[s.id]?`<div class="esvi">${esc(s.vi||"(chưa có nghĩa)")}</div>`:""}
  ${x.open&&cz?exHTML(s,cz,x):""}</div>`}).join("")}
E.saySent=id=>{const s=DATA.sents.find(x=>x.id===id);if(!s)return;if(s.audio)playSrc(s.audio);else say(s.en)};
E.togVi=id=>{S.showVi[id]=!S.showVi[id];draw()};
E.exOpen=id=>{const s=DATA.sents.find(x=>x.id===id),cz=cloze(s.en,lw(S.lid));if(!cz)return;let x=S.ex[id];
 if(!x){const pool=lw(S.lid).map(w=>w.en).filter(e=>!cmp(e,cz.ans));const more=DATA.words.map(w=>w.en).filter(e=>!cmp(e,cz.ans)&&!pool.includes(e));
  const d=pick([...new Set([...pool,...shuffle(more)])],3);x=S.ex[id]={open:true,att:0,done:false,opts:shuffle([cz.ans,...d]),msg:""}}
 else x.open=!x.open;draw()};
function exHTML(s,cz,x){return `<div class="exb"><div class="exs">${esc(cz.pre)}<span class="exbl ${x.done?(x.ok?"ok":"rev"):""}">${x.done?esc(cz.ans):"＿＿＿＿＿"}</span>${esc(cz.post)}</div>
 <div class="row" style="margin:8px 0">${x.opts.map(o=>`<button class="chip" ${x.done?"disabled":""} onclick="ESL.exPick('${s.id}',this.dataset.o)" data-o="${esc(o)}">${esc(o)}</button>`).join("")}</div>${x.msg?`<div class="efb ${x.ok?"good":"hint"}">${x.msg}</div>`:""}</div>`}
E.exPick=(id,o)=>{const s=DATA.sents.find(z=>z.id===id),ws=lw(S.lid),cz=cloze(s.en,ws),x=S.ex[id];if(!x||x.done)return;
 if(cmp(o,cz.ans)){x.done=true;x.ok=true;x.msg=`🎉 Chính xác!${cz.word&&cz.word.vi?` “${esc(cz.ans)}” nghĩa là “${esc(cz.word.vi)}”.`:""}`;if(!x.att&&cz.word)mark(S.lid,cz.word.id)}
 else{x.att++;x.msg=KIND[Math.min(x.att,3)-1]+"<br>"+hintHTML(x.att,cz.ans,cz.word);if(x.att>=3){x.done=true;x.ok=false}}draw()};

/* ---------- 3. LET'S PLAY (thư viện game) ---------- */
function playHTML(l){const ws=lw(l.id);if(!ws.length)return empty("Bài này chưa có từ khóa nên chưa có trò chơi.");
 if(S.game)return `<div id="gbox" class="gbox"></div>`;
 const gs=gamesOf(l.id),rc=rec(l.id);
 if(!gs.length)return empty("Giáo viên chưa chọn trò chơi cho bài này.");
 return `<div class="ggrid">${gs.map((g,i)=>{const d=GAMEDEF[g.type],st=rc.games[g.type],lim=g.cfg.plays>0&&st&&st.plays>=g.cfg.plays&&!isTeacher();
  return `<div class="gcard" style="background:${d.col}"><div class="gic">${d.icon}</div><div class="gn">${d.name}</div><div class="gv">${d.vn}</div>${st?`<div class="gs">⭐ Cao nhất: <b>${st.best}/${st.max}</b> · ${st.plays} lần chơi</div>`:`<div class="gs">Chưa chơi</div>`}${g.cfg.plays>0?`<div class="gs">Số lượt: ${st?st.plays:0}/${g.cfg.plays}</div>`:""}<button class="btn" ${lim?"disabled":""} onclick="ESL.play(${i})">${lim?"Hết lượt":"▶ Chơi"}</button></div>`}).join("")}</div>`}
E.play=i=>{S.game={idx:i};draw()};
E.playType=t=>{S.tab="play";S.game={idx:-1,type:t};draw()};
E.quit=()=>{stopSound();S.game=null;draw()};
function gameStart(i){const l=findLesson(S.lid),gs=gamesOf(l.id),g=i>=0?gs[i]:(S.game&&S.game.type?{type:S.game.type,cfg:S.game.type==="quiz"?Object.assign({},gcfgDefault("quiz"),{n:5},DATA.cfg.quiz||{}):gcfgDefault(S.game.type)}:null),box=G("gbox");if(!g||!box){S.game=null;return draw()}
 const all=lw(l.id),sel=g.cfg.words&&g.cfg.words.length?all.filter(w=>g.cfg.words.includes(w.id)):all,words=sel.length?sel:all;
 const d=GAMEDEF[g.type];
 box.innerHTML=`<div class="gh">${S.tab==="qz"?"":`<button class="btn sm sec" onclick="ESL.quit()">⬅ Chọn game khác</button>`}<b>${S.tab==="qz"?"❓ QUIZ – Câu hỏi trắc nghiệm":d.icon+" "+d.name}</b></div><div id="gin"></div>`;
 const inner=G("gin");
 const ctx={lesson:l,words,all,cfg:g.cfg,type:g.type,pts:num(g.cfg.pts,10,1,100),
  finish(score,max,note){upd(l.id,r=>{const o=r.games[g.type]||(r.games[g.type]={best:0,max:0,plays:0,last:0,lastMax:0});o.plays++;o.last=score;o.lastMax=max;if(!o.max||score/Math.max(1,max)>=o.best/Math.max(1,o.max)){o.best=score;o.max=max}o.at=Date.now()});E.headUpd();resultScreen(inner,ctx,score,max,note)},
  again(){gameStart(i)}};
 const fn=GAMES[g.type];if(!fn){inner.innerHTML=`<div class="empty">Trò chơi này chưa sẵn sàng.</div>`;return}
 try{fn(inner,ctx)}catch(e){console.error(e);inner.innerHTML=`<div class="empty">Có lỗi khi mở trò chơi. Con thử trò khác nhé.</div>`}}
function resultScreen(box,ctx,score,max,note){const p=max?score/max:0,st=p>=.9?3:p>=.6?2:p>=.3?1:0;
 box.innerHTML=`<div class="gres"><div class="gstars">${"⭐".repeat(st)}${"☆".repeat(3-st)}</div><h3>${p>=.9?"Tuyệt vời! 🎉":p>=.6?"Làm tốt lắm! 👏":p>=.3?"Cố gắng tốt! 💪":"Chưa sao đâu, thử lại nhé! 🌱"}</h3><div class="gsc">${score} / ${max} điểm</div>${note?`<p class="muted">${note}</p>`:""}<div class="row" style="justify-content:center"><button class="btn" onclick="ESL.again()">🔁 Chơi lại</button>${S.tab==="qz"?"":`<button class="btn sec" onclick="ESL.quit()">⬅ Chọn game khác</button>`}</div></div>`;
 E.again=()=>ctx.again()}
E.gameStart=gameStart;

/* ---------- 4. LISTEN & FILL ---------- */
const WRE=/[A-Za-z0-9'’-]+|[^A-Za-z0-9'’-]+/g,ISW=/^[A-Za-z0-9'’-]+$/;
const tok=t=>String(t||"").match(WRE)||[];
E.u.tok=tok;E.u.isw=t=>ISW.test(t);
function lfCfg(lid){return DATA.listen[lid]||null}
function lfHTML(l){const c=lfCfg(l.id);if(!c||!c.text)return empty("Bài này chưa có hoạt động nghe và điền từ.");
 if(!S.lf||S.lf.lid!==l.id)S.lf={lid:l.id,vals:{},res:{},checks:0,plays:0,hint:0,shown:false,bank:null};
 const L=S.lf,toks=tok(c.text),hid=(c.hide||[]).filter(i=>toks[i]&&ISW.test(toks[i]));
 if(!L.bank)L.bank=shuffle(hid.map(i=>toks[i]));
 const ws=lw(l.id),max=c.maxPlays>0?c.maxPlays:0,left=max?Math.max(0,max-L.plays):null;
 const ok=hid.filter(i=>L.res[i]===true).length,all=hid.length,hidS=hid.slice().sort((a,b)=>a-b);
 const para=toks.map((t,i)=>{if(!hid.includes(i))return esc(t);const v=L.vals[i]||"",st=L.res[i];
  const w=ws.find(x=>cmp(x.en,t)),h=L.hint>0&&st!==true?`<small class="hnt">${L.hint>=3?"→ "+esc(t):L.hint===2?esc(t[0])+"… ("+t.length+")":(w&&w.vi?esc(w.vi):esc(t[0])+"…")}</small>`:"";
  const hn=hidS.indexOf(i)+1;return `<span class="lfw"><button class="lfn" title="Nghe vị trí số ${hn}" onclick="ESL.lfClip(${hn})">${hn}▶</button><input class="lfi ${st===true?"ok":st===false?"no":""}" data-i="${i}" value="${esc(v)}" style="width:${Math.max(4,t.length+2)}ch" ${st===true?"readonly":""} autocomplete="off" autocapitalize="off" spellcheck="false" oninput="ESL.lfIn(${i},this.value)" onfocus="ESL.lfFocus(${i})">${h}</span>`}).join("");
 const showAnsOK=L.checks>=1&&(ok===all||L.checks>=3||c.showAns);
 return `<div class="lf"><h3>🎧 ${esc(c.title||"Listen and fill in the blanks")}</h3>
 <div class="row"><button class="btn" onclick="ESL.lfPlay(1)" ${left===0?"disabled":""}>▶ Play Audio</button><button class="btn sec" onclick="ESL.lfPlay(1)" ${left===0?"disabled":""}>🔁 Nghe lại</button><button class="btn sec" onclick="ESL.lfPlay(.7)" ${left===0?"disabled":""}>🐢 Nghe chậm</button><button class="btn sm sec" onclick="ESL.u.stop()">⏹</button>${max?`<span class="muted">Còn ${left} lần nghe</span>`:""}</div>
 ${L.clipView?clipHTML(L.clipView):""}<div class="lfp">${para}</div>
 ${c.bank!==false&&L.bank.length?`<div class="lfb"><b>Word bank:</b> ${L.bank.map(w=>`<button class="chip ${hid.some(i=>cmp(L.vals[i],w)&&L.res[i]===true)?"used":""}" onclick="ESL.lfBank(this.dataset.w)" data-w="${esc(w)}">${esc(w)}</button>`).join("")}</div>`:""}
 <div class="row" style="margin-top:10px"><button class="btn" onclick="ESL.lfCheck()">✔ Check Answer</button>${c.hint!==false?`<button class="btn warn" onclick="ESL.lfHint()">💡 Show Hint</button>`:""}${showAnsOK?`<button class="btn sec" onclick="ESL.lfShow()">📖 Show Answer</button>`:""}<button class="btn sec" onclick="ESL.lfReset()">🔄 Làm lại</button></div>
 ${L.checks?`<div class="efb ${ok===all?"good":"hint"}">${ok===all?`🎉 Chính xác hết rồi! Điểm: <b>${ok}/${all}</b>`:`Điểm hiện tại: <b>${ok}/${all}</b>. ${KIND[Math.min(L.checks,3)-1]}`}</div>`:""}</div>`}
/* clip 1–5: audio, video tải lên, link YouTube/Drive hoặc link tệp; thiếu clip thì máy đọc câu chứa chỗ trống */
const ytId=u=>{const m=/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/.exec(u||"");return m?m[1]:""};
function clipHTML(v){const close=`<button class="btn sm sec" onclick="ESL.lfClipClose()">✖ Đóng</button>`;
 if(v.t==="v")return `<div class="lfclip"><video controls autoplay playsinline src="${v.src}"></video>${close}</div>`;
 if(v.t==="yt")return `<div class="lfclip"><iframe src="https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1" allow="autoplay;encrypted-media" allowfullscreen></iframe>${close}</div>`;
 if(v.t==="dr")return `<div class="lfclip"><iframe src="https://drive.google.com/file/d/${v.id}/preview" allowfullscreen></iframe>${close}</div>`;
 return ""}
E.lfClipClose=()=>{if(S.lf)S.lf.clipView=null;draw()};
E.lfClip=n=>{const c=lfCfg(S.lid),L=S.lf;if(!c||!L)return;const max=c.maxPlays>0?c.maxPlays:0;if(max&&L.plays>=max)return toast("Con đã dùng hết số lần nghe.","err");
 const{toks,hid}=lfIdx(c),hs=hid.slice().sort((a,b)=>a-b),ti=hs[n-1],clip=(c.clips||{})[n];L.plays++;upd(S.lid,r=>{r.listen.listens++});stopSound();L.clipView=null;
 if(clip){const src=String(clip);
  if(/^data:video/i.test(src)||/\.(mp4|webm|mov)(\?|$)/i.test(src))L.clipView={t:"v",src};
  else if(/^data:audio/i.test(src)||/\.(mp3|wav|m4a|ogg)(\?|$)/i.test(src))playSrc(src);
  else if(ytId(src))L.clipView={t:"yt",id:ytId(src)};
  else{const d=/drive\.google\.com\/file\/d\/([\w-]+)/.exec(src);if(d)L.clipView={t:"dr",id:d[1]};else window.open(src,"_blank","noopener")}}
 else{let pos=0,off=0;for(let k=0;k<ti;k++)pos+=toks[k].length;const txt=toks.join("");const re=/[^.!?\n]+[.!?]*/g;let m,sent=txt;while((m=re.exec(txt))){if(pos>=m.index&&pos<m.index+m[0].length){sent=m[0].trim();break}}say(sent,1)}
 draw()};
function lfIdx(c){const toks=tok(c.text);return{toks,hid:(c.hide||[]).filter(i=>toks[i]&&ISW.test(toks[i]))}}
E.lfIn=(i,v)=>{if(S.lf)S.lf.vals[i]=v;if(S.lf)delete S.lf.res[i]};
E.lfFocus=i=>{if(S.lf)S.lf.focus=i};
E.lfPlay=rate=>{const c=lfCfg(S.lid),L=S.lf;if(!c||!L)return;const max=c.maxPlays>0?c.maxPlays:0;if(max&&L.plays>=max){return toast("Con đã dùng hết số lần nghe.","err")}
 L.plays++;upd(S.lid,r=>{r.listen.listens++});
 if(c.audio)playSrc(c.audio,rate);else say(c.text,rate*(c.rate||1));draw()};
E.lfBank=w=>{const c=lfCfg(S.lid),L=S.lf;const{hid}=lfIdx(c);let t=hid.includes(L.focus)&&!L.vals[L.focus]?L.focus:hid.find(i=>!L.vals[i]);if(t==null)t=L.focus;if(t==null)return;L.vals[t]=w;delete L.res[t];draw()};
function lfScore(c,L,final){const{toks,hid}=lfIdx(c);let ok=0;hid.forEach(i=>{const good=cmp(L.vals[i],toks[i]);L.res[i]=good?true:(L.vals[i]?false:undefined);if(good)ok++});return{ok,all:hid.length}}
E.lfCheck=()=>{const c=lfCfg(S.lid),L=S.lf;if(!c||!L)return;L.checks++;const s=lfScore(c,L);L.hint=s.ok===s.all?0:Math.min(3,Math.max(L.hint,L.checks));
 upd(S.lid,r=>{const o=r.listen;o.plays++;o.last=s.ok;if(!o.max||s.ok/Math.max(1,s.all)>=o.best/Math.max(1,o.max)){o.best=s.ok;o.max=s.all}});E.headUpd();draw()};
E.lfHint=()=>{const L=S.lf;L.hint=Math.min(3,L.hint+1);draw()};
E.lfShow=()=>{const c=lfCfg(S.lid),L=S.lf,{toks,hid}=lfIdx(c);hid.forEach(i=>{L.vals[i]=toks[i];L.res[i]=true});L.hint=0;draw()};
E.lfReset=()=>{const L=S.lf;if(!L)return;L.vals={};L.res={};L.checks=0;L.hint=0;L.bank=null;draw()};

/* =====================================================================
   THƯ VIỆN TRÒ CHƠI – mỗi game: GAMES.<loại>(khung, ctx)
   ctx = {words, all, cfg, pts, finish(score,max,ghiChú), again()}
   Thêm game mới chỉ cần thêm 1 hàm vào GAMES + 1 dòng trong GAMEDEF.
   ===================================================================== */
const GAMES={};E.GAMES=GAMES;
const cnt=(ctx,def,max)=>Math.max(1,Math.min(num(ctx.cfg.n,def,1,max),ctx.words.length));
const alive=box=>document.body.contains(box);
const fbox=(box,html,cls)=>{const f=box.querySelector(".gfb");if(f){f.className="gfb efb "+(cls||"hint");f.innerHTML=html}};
const SHELL=(sc,extra)=>`<div class="gtop"><span>⭐ Điểm: <b id="gsc">${sc}</b></span>${extra||""}</div>`;
const setSc=(box,v)=>{const e=box.querySelector("#gsc");if(e)e.textContent=Math.round(v*10)/10};

/* ===== GAME 1 – MATCH THE PICTURE ===== */
GAMES.match=function(box,ctx){const ws=pick(ctx.words,cnt(ctx,6,10)),pts=ctx.pts;
 let sel=null,score=0,left=ws.length;const wrong={},done={};
 const tiles=shuffle(ws),bank=shuffle(ws);
 box.innerHTML=SHELL(0,`<span class="muted">Chọn một từ, rồi chạm vào hình đúng (hoặc kéo thả).</span>`)+
  `<div class="mgrid">${tiles.map(w=>`<div class="mtile" data-id="${w.id}">${w.img?`<img src="${w.img}" alt="">`:`<div class="mtx">${esc(w.vi)}</div>`}<div class="mslot">?</div></div>`).join("")}</div>
  <div class="mbank">${bank.map(w=>`<button class="chip mchip" draggable="true" data-id="${w.id}">${esc(w.en)}</button>`).join("")}</div><div class="gfb efb hint">Chọn một từ ở phía dưới nhé 👇</div>`;
 const chips=()=>[...box.querySelectorAll(".mchip")];
 function setSel(id){sel=id;chips().forEach(c=>c.classList.toggle("sel",c.dataset.id===id))}
 function attempt(wordId,tileId){const tile=box.querySelector(`.mtile[data-id="${tileId}"]`),chip=box.querySelector(`.mchip[data-id="${wordId}"]`);if(!tile||!chip||done[tileId])return;
  const w=wById(wordId),tw=wById(tileId);
  if(wordId===tileId){done[tileId]=1;score+=wrong[wordId]?pts/2:pts;left--;tile.classList.add("ok");tile.querySelector(".mslot").textContent=w.en;chip.remove();setSel(null);setSc(box,score);speakWord(w);fbox(box,"🎉 Chính xác!"+(w.ex?` <i>${hl(w.ex,[w])}</i>`:""),"good")}
  else{wrong[wordId]=(wrong[wordId]||0)+1;tile.classList.add("shake");setTimeout(()=>tile.classList.remove("shake"),500);const n=wrong[wordId];
   if(n>=3){done[wordId]=1;const t2=box.querySelector(`.mtile[data-id="${wordId}"]`);if(t2){t2.classList.add("rev");t2.querySelector(".mslot").textContent=w.en}chip.remove();left--;setSel(null);fbox(box,hintHTML(3,w.en,w));}
   else fbox(box,KIND[n-1]+"<br>"+(n===1?`“<b>${esc(w.en)}</b>” nghĩa là “${esc(w.vi)}”. Hãy nhìn lại hình nhé!`:`💡 Từ cần ghép bắt đầu bằng chữ “<b>${esc(w.en[0])}</b>”.`),"hint")}
  if(left<=0)setTimeout(()=>alive(box)&&ctx.finish(score,ws.length*pts),700)}
 box.onclick=e=>{const c=e.target.closest(".mchip"),t=e.target.closest(".mtile");
  if(c){speakWord(wById(c.dataset.id));setSel(sel===c.dataset.id?null:c.dataset.id);if(sel)fbox(box,"Giờ chạm vào hình tương ứng nhé 👆","hint")}
  else if(t){if(!sel)return fbox(box,"Hãy chọn một từ ở phía dưới trước nhé 👇","hint");attempt(sel,t.dataset.id)}};
 box.ondragstart=e=>{const c=e.target.closest(".mchip");if(c){e.dataTransfer.setData("text/plain",c.dataset.id);setSel(c.dataset.id)}};
 box.ondragover=e=>{if(e.target.closest(".mtile"))e.preventDefault()};
 box.ondrop=e=>{const t=e.target.closest(".mtile");if(!t)return;e.preventDefault();const id=e.dataTransfer.getData("text/plain");if(id)attempt(id,t.dataset.id)}};

/* ===== GAME 2 – GUESS THE WORD ===== */
GAMES.guess=function(box,ctx){const rounds=pick(ctx.words,cnt(ctx,6,15)),pts=ctx.pts,bonus=num(ctx.cfg.bonus,0,0,50),maxTry=num(ctx.cfg.tries,3,1,6);
 let i=0,score=0;
 const KINDS=["img","def","vi","first","blanks"];
 const avail=(k,w)=>k==="img"?!!w.img:k==="def"?!!w.def:true;
 const mask=w=>w.en.split("").map((c,k)=>/[A-Za-z]/.test(c)&&k%2===1?"_":c).join(" ");
 function clue(w,k){return k==="img"?imgOf(w,"gimg"):k==="def"?`<div class="gclue">📖 ${esc(w.def)}</div>`:k==="vi"?`<div class="gclue">🇻🇳 ${esc(w.vi)}</div>`:k==="first"?`<div class="gclue">Chữ cái đầu: <b>${esc(w.en[0].toUpperCase())}</b> · ${w.en.length} chữ cái</div>`:`<div class="gclue gmask">${esc(mask(w))}</div>`}
 function round(){if(!alive(box))return;if(i>=rounds.length)return ctx.finish(score,rounds.length*(pts+bonus));
  const w=rounds[i];let tries=0;const ks=KINDS.filter(k=>avail(k,w)),k0=ks[i%ks.length];
  box.innerHTML=SHELL(score,`<span class="muted">Câu ${i+1}/${rounds.length}</span>`)+`<div class="gq">${clue(w,k0)}<div class="gdash">${w.en.split("").map(c=>c===" "?"&nbsp;&nbsp;":"＿").join(" ")}</div>
   <div class="row" style="justify-content:center"><input id="gin2" class="gtxt" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Nhập từ tiếng Anh…"><button class="btn" id="gok">Kiểm tra</button></div></div><div class="gfb efb hint">Con có ${maxTry} lần thử, đừng lo nếu sai nhé 🌱</div>`;
  const inp=box.querySelector("#gin2");setTimeout(()=>{try{inp.focus()}catch(e){}},50);
  const next=()=>{i++;setTimeout(round,1400)};
  const go1=()=>{const v=inp.value.trim();if(!v)return;tries++;
   if(cmp(v,w.en)){const g=tries===1?pts+bonus:tries===2?pts*.6:pts*.3;score+=g;speakWord(w);fbox(box,`🎉 Đúng rồi! +${Math.round(g*10)/10} điểm.${w.ex?`<br><i>${hl(w.ex,[w])}</i>`:""}`,"good");setSc(box,score);box.querySelector("#gok").disabled=true;inp.disabled=true;next()}
   else if(tries>=maxTry){fbox(box,hintHTML(3,w.en,w),"hint");box.querySelector("#gok").disabled=true;inp.disabled=true;next()}
   else{fbox(box,KIND[Math.min(tries,3)-1]+"<br>"+hintHTML(Math.min(tries,2),w.en,w),"hint");inp.value="";inp.focus()}};
  box.querySelector("#gok").onclick=go1;inp.onkeydown=e=>{if(e.key==="Enter")go1()}}
 round()};

/* ===== GAME 3 – WORD SEARCH ===== */
function genGrid(list,size){const dirs=[[0,1],[1,0],[1,1],[-1,1]],g=Array.from({length:size},()=>Array(size).fill("")),placed=[];
 for(const w of list.slice().sort((a,b)=>b.txt.length-a.txt.length)){let ok=false;const L=w.txt.length;
  for(let t=0;t<300&&!ok;t++){const d=dirs[rnd(4)],r=rnd(size),c=rnd(size),er=r+d[0]*(L-1),ec=c+d[1]*(L-1);if(er<0||er>=size||ec<0||ec>=size)continue;let fit=true;
   for(let k=0;k<L;k++){const ch=g[r+d[0]*k][c+d[1]*k];if(ch&&ch!==w.txt[k]){fit=false;break}}if(!fit)continue;
   for(let k=0;k<L;k++)g[r+d[0]*k][c+d[1]*k]=w.txt[k];placed.push({w:w.w,txt:w.txt,r,c,d});ok=true}
  if(!ok)return null}
 const A="ABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<size;r++)for(let c=0;c<size;c++)if(!g[r][c])g[r][c]=A[rnd(26)];return{g,placed}}
E.u.genGrid=genGrid;
GAMES.search=function(box,ctx){const pts=ctx.pts;
 let list=pick(ctx.words,cnt(ctx,8,12)).map(w=>({w,txt:w.en.toUpperCase().replace(/[^A-Z]/g,"")})).filter(x=>x.txt.length>=2&&x.txt.length<=14);
 if(!list.length){box.innerHTML=`<div class="empty">Các từ của bài này không phù hợp để tạo bảng chữ cái.</div>`;return}
 let size=Math.max(10,Math.max(...list.map(x=>x.txt.length))+1),res=null,tries=0;
 while(!res&&tries<40){res=genGrid(list,Math.min(size,15));tries++;if(tries%6===0)size++}
 if(!res){box.innerHTML=`<div class="empty">Không tạo được bảng chữ, hãy thử lại.</div>`;return}
 const{g,placed}=res,N=g.length,found={};let score=0,t0=Date.now(),limit=num(ctx.cfg.time,0,0,3600),over=false,start=null,sel=[],drag=false;
 box.innerHTML=SHELL(0,`<span id="gtm" class="muted">⏱ 0:00</span>`)+`<div class="wsw"><div class="wsg" id="wsg" style="grid-template-columns:repeat(${N},1fr)">${g.map((row,r)=>row.map((ch,c)=>`<div class="wc" data-r="${r}" data-c="${c}">${ch}</div>`).join("")).join("")}</div>
  <div class="wsl" id="wsl">${placed.map(p=>`<div class="wsx" data-w="${p.w.id}"><b>${esc(p.w.en)}</b><small>${esc(p.w.vi)}</small></div>`).join("")}</div></div><div class="gfb efb hint">Kéo ngón tay (hoặc chuột) từ chữ đầu đến chữ cuối của từ. Hoặc chạm chữ đầu rồi chạm chữ cuối.</div>`;
 const grid=box.querySelector("#wsg"),cell=(r,c)=>grid.querySelector(`.wc[data-r="${r}"][data-c="${c}"]`);
 const line=(a,b)=>{const dr=b.r-a.r,dc=b.c-a.c;if(!(dr===0||dc===0||Math.abs(dr)===Math.abs(dc)))return[a];const n=Math.max(Math.abs(dr),Math.abs(dc)),sr=Math.sign(dr),sc=Math.sign(dc),out=[];for(let k=0;k<=n;k++)out.push({r:a.r+sr*k,c:a.c+sc*k});return out};
 const paint=cs=>{grid.querySelectorAll(".wc.sel").forEach(e=>e.classList.remove("sel"));cs.forEach(p=>{const e=cell(p.r,p.c);if(e)e.classList.add("sel")})};
 const at=e=>{const el=document.elementFromPoint(e.clientX,e.clientY),c=el&&el.closest&&el.closest(".wc");return c&&grid.contains(c)?{r:+c.dataset.r,c:+c.dataset.c}:null};
 function check(cs){if(cs.length<2)return false;const s=cs.map(p=>g[p.r][p.c]).join(""),rv=s.split("").reverse().join("");
  const hit=placed.find(p=>!found[p.w.id]&&(p.txt===s||p.txt===rv));
  if(hit){found[hit.w.id]=1;score+=pts;cs.forEach(p=>cell(p.r,p.c).classList.add("fd","f"+(Object.keys(found).length%6)));const x=box.querySelector(`.wsx[data-w="${hit.w.id}"]`);if(x)x.classList.add("fnd");setSc(box,score);speakWord(hit.w);fbox(box,`🎉 Tìm thấy “<b>${esc(hit.w.en)}</b>” – ${esc(hit.w.vi)}`,"good");
   if(Object.keys(found).length===placed.length)setTimeout(()=>alive(box)&&fin(),600);return true}return false}
 function fin(){clearInterval(iv);const secs=Math.round((Date.now()-t0)/1000);ctx.finish(score,placed.length*pts,over?"Hết giờ rồi, con chơi lại để tìm đủ nhé!":`Thời gian: ${secs} giây.`)}
 grid.style.touchAction="none";
 grid.onpointerdown=e=>{const p=at(e);if(!p)return;e.preventDefault();drag=true;if(start&&!sel.length){const cs=line(start,p);paint([]);const ok=check(cs);if(!ok)fbox(box,"Chưa phải từ cần tìm, thử lại nhé 🌱","hint");start=null;drag=false;return}start=p;sel=[p];paint(sel)};
 grid.onpointermove=e=>{if(!drag||!start)return;const p=at(e);if(!p)return;sel=line(start,p);paint(sel)};
 const up=e=>{if(!drag)return;drag=false;if(sel.length<=1){sel=[];return}const ok=check(sel);if(!ok)fbox(box,"Chưa phải từ cần tìm, thử lại nhé 🌱","hint");paint([]);sel=[];start=null};
 grid.onpointerup=up;grid.onpointercancel=()=>{drag=false;paint([]);sel=[];start=null};
 const iv=setInterval(()=>{if(!alive(box))return clearInterval(iv);const s=Math.round((Date.now()-t0)/1000),e=box.querySelector("#gtm");
  if(limit){const r=limit-s;if(e)e.textContent="⏱ Còn "+Math.max(0,r)+" giây";if(r<=0){over=true;fin()}}else if(e)e.textContent="⏱ "+Math.floor(s/60)+":"+String(s%60).padStart(2,"0")},500)};

/* ===== GAME 4 – FLIP & MATCH ===== */
GAMES.flip=function(box,ctx){const ws=pick(ctx.words,cnt(ctx,6,8)),pts=ctx.pts,mode=ctx.cfg.mode||"vi";
 const side=w=>{const m=mode==="mix"?(w.img&&rnd(2)?"img":(w.def&&rnd(3)===0?"def":"vi")):mode;
  return m==="img"&&w.img?`<img src="${w.img}" alt="">`:m==="def"&&w.def?`<span class="fx">${esc(w.def)}</span>`:`<span class="fx">${esc(w.vi)}</span>`};
 const cards=shuffle(ws.flatMap(w=>[{id:w.id,k:"en",h:`<span class="fx big">${esc(w.en)}</span>`},{id:w.id,k:"o",h:side(w)}]));
 let first=null,lock=false,moves=0,pairs=0;
 box.innerHTML=SHELL(0,`<span class="muted">Lượt lật: <b id="gmv">0</b></span>`)+`<div class="fgrid">${cards.map((c,i)=>`<div class="fcard" data-i="${i}"><div class="fin"><div class="fbk">❓</div><div class="ffr">${c.h}</div></div></div>`).join("")}</div><div class="gfb efb hint">Lật hai thẻ để tìm cặp giống nhau (từ tiếng Anh – nghĩa/hình).</div>`;
 box.onclick=e=>{const el=e.target.closest(".fcard");if(!el||lock||el.classList.contains("on")||el.classList.contains("ok"))return;
  el.classList.add("on");const c=cards[+el.dataset.i];if(c.k==="en")speakWord(wById(c.id));
  if(!first){first={el,c};return}
  moves++;box.querySelector("#gmv").textContent=moves;const a=first;first=null;
  if(a.c.id===c.id&&a.c.k!==c.k){pairs++;a.el.classList.add("ok");el.classList.add("ok");const w=wById(c.id);fbox(box,`🎉 Đúng cặp! “<b>${esc(w.en)}</b>” = ${esc(w.vi)}`,"good");
   const sc=Math.max(0,pairs*pts);setSc(box,sc);if(pairs===ws.length){const full=ws.length*pts,fin=Math.max(Math.round(full*.3),full-Math.max(0,moves-ws.length)*Math.round(pts/4));setTimeout(()=>alive(box)&&ctx.finish(fin,full,`Con hoàn thành sau ${moves} lượt lật.`),700)}}
  else{lock=true;fbox(box,"Chưa phải cặp, con nhớ vị trí rồi thử lại nhé 🌱","hint");setTimeout(()=>{a.el.classList.remove("on");el.classList.remove("on");lock=false},900)}}};

/* ---- dùng chung cho các game dạng "từng câu" ---- */
const nz=s=>String(s||"").toLowerCase().replace(/[^a-z0-9\s']/g,"").replace(/\s+/g," ").trim();
const hintC=(n,it,ans)=>n<=1?(it&&it.hint?`💡 Gợi ý 1: ${esc(it.hint)}`:`💡 Gợi ý 1: đáp án có ${String(ans).length} ký tự.`):n===2?`💡 Gợi ý 2: bắt đầu bằng “<b>${esc(String(ans).slice(0,Math.min(String(ans).length,n===2?4:1)))}</b>…”.`:`📖 Đáp án: <b>${esc(ans)}</b>${it&&it.expl?`<br>${esc(it.expl)}`:""}<br>Không sao đâu, con chơi lại để nhớ thêm nhé!`;
const empt=(box,msg)=>{box.innerHTML=`<div class="empty">${msg}</div>`};
/* chạy lần lượt từng mục: draw(it,i,next) tự vẽ; gọi done(điểm) khi xong mục */
function seq(box,ctx,items,draw){let i=0,score=0;const max=items.length*ctx.pts;
 const step=()=>{if(!alive(box))return;if(i>=items.length)return ctx.finish(Math.round(score*10)/10,max);const idx=i;
  box.innerHTML=SHELL(score,`<span class="muted">Câu ${idx+1}/${items.length}</span>`)+`<div class="q-area"></div><div class="gfb efb hint"></div><div class="row nx" style="justify-content:center;margin-top:8px"></div>`;
  draw(items[idx],box.querySelector(".q-area"),(g,wait)=>{score+=g;setSc(box,score);i++;setTimeout(step,wait||1500)})};
 step();return{add(g){score+=g}}}
const itemTxt=x=>x.q||"";

/* ===== GAME 5 – FILL IN THE BLANKS (câu mẫu + dòng Fill trong Excel) ===== */
GAMES.fill=function(box,ctx){const pts=ctx.pts,mode=ctx.cfg.mode||"bank",lid=ctx.lesson.id,n=num(ctx.cfg.n,6,1,15);
 const custom=its(lid,"fill").map(x=>{const m=/^([\s\S]*?)_{2,}([\s\S]*)$/.exec(x.q||"");const ans=x.a&&x.a.fill;return m&&ans?{cz:{pre:m[1],post:m[2],ans,word:null},x,opts:x.opts&&x.opts.length>=2?x.opts:null,vi:""}:null}).filter(Boolean);
 let sen=ls(lid).map(s=>({cz:cloze(s.en,ctx.all),vi:s.vi})).filter(x=>x.cz);
 if(custom.length+sen.length<n)ctx.words.filter(w=>w.ex).forEach(w=>{const cz=cloze(w.ex,[w]);if(cz&&!sen.some(x=>x.cz.pre+x.cz.ans+x.cz.post===w.ex))sen.push({cz,vi:w.vi})});
 const items=[...shuffle(custom),...shuffle(sen)].slice(0,n);
 if(!items.length)return empt(box,"Bài này chưa có câu mẫu hoặc câu Fill để chơi.");
 seq(box,ctx,items,(it,area,done)=>{const cz=it.cz;let att=0;
  const pool=ctx.all.map(w=>w.en).filter(e=>!cmp(e,cz.ans)),more=DATA.words.map(w=>w.en).filter(e=>!cmp(e,cz.ans)&&!pool.includes(e));
  const opts=it.opts?shuffle(it.opts.some(o=>cmp(o,cz.ans))?it.opts:[cz.ans,...it.opts]):shuffle([cz.ans,...pick([...new Set([...pool,...shuffle(more)])],5)]);
  area.innerHTML=`<div class="gq"><div class="exs big">${esc(cz.pre)}<span class="exbl" id="fbl">＿＿＿＿＿</span>${esc(cz.post)}</div>${it.vi?`<div class="muted" style="text-align:center">${esc(it.vi)}</div>`:""}${mode==="type"&&!it.opts?`<div class="row" style="justify-content:center;margin-top:10px"><input id="fti" class="gtxt" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Nhập từ…"><button class="btn" id="fok">Kiểm tra</button></div>`:`<div class="row" style="justify-content:center;margin-top:10px">${opts.map(o=>`<button class="chip fopt" draggable="true" data-o="${esc(o)}">${esc(o)}</button>`).join("")}</div>`}</div>`;
  const fb=h=>fbox(box,h.h,h.c),bl=area.querySelector("#fbl"),lock=()=>area.querySelectorAll(".fopt,#fok,#fti").forEach(e=>e.disabled=true);
  function submit(v){if(!v)return;att++;
   if(cmp(v,cz.ans)){const g=att===1?pts:att===2?pts*.5:pts*.25;bl.textContent=cz.ans;bl.classList.add("ok");fb({h:`🎉 Chính xác!${cz.word&&cz.word.vi?` “${esc(cz.ans)}” nghĩa là “${esc(cz.word.vi)}”.`:""}${it.x&&it.x.expl?`<br>${esc(it.x.expl)}`:""}`,c:"good"});lock();if(cz.word)mark(ctx.lesson.id,cz.word.id);done(g,1500)}
   else if(att>=3){bl.textContent=cz.ans;bl.classList.add("rev");fb({h:it.x?hintC(3,it.x,cz.ans):hintHTML(3,cz.ans,cz.word),c:"hint"});lock();done(0,2600)}
   else{bl.textContent=v;bl.classList.add("no");setTimeout(()=>{if(alive(box)){bl.textContent="＿＿＿＿＿";bl.classList.remove("no")}},700);fb({h:KIND[att-1]+"<br>"+(it.x?hintC(att,it.x,cz.ans):hintHTML(att,cz.ans,cz.word)),c:"hint"})}}
  if(area.querySelector("#fti")){const inp=area.querySelector("#fti");inp.onkeydown=e=>{if(e.key==="Enter")submit(inp.value.trim())};area.querySelector("#fok").onclick=()=>{submit(inp.value.trim());inp.value=""};setTimeout(()=>{try{inp.focus()}catch(e){}},50)}
  else{area.onclick=e=>{const b=e.target.closest(".fopt");if(b&&!b.disabled)submit(b.dataset.o)};area.ondragstart=e=>{const b=e.target.closest(".fopt");if(b)e.dataTransfer.setData("text/plain",b.dataset.o)};area.ondragover=e=>{if(e.target.closest("#fbl"))e.preventDefault()};area.ondrop=e=>{if(e.target.closest("#fbl")){e.preventDefault();submit(e.dataTransfer.getData("text/plain"))}}}})};

/* ===== GAME 6 – QUIZ (5 câu trắc nghiệm từ Excel + câu tự sinh từ từ khóa) ===== */
GAMES.quiz=function(box,ctx){const pts=ctx.pts,n=num(ctx.cfg.n,5,1,15),tm=num(ctx.cfg.time,0,0,120),lid=ctx.lesson.id,W=ctx.all.length>=2?ctx.all:DATA.words;
 const others=(w,f)=>{const pool=[...new Set(W.filter(x=>x.id!==w.id).map(f).filter(Boolean))],more=[...new Set(DATA.words.filter(x=>x.id!==w.id).map(f).filter(Boolean))];return pick([...new Set([...pool,...shuffle(more)])],3)};
 const custom=its(lid,"quiz").filter(x=>x.opts&&x.opts.length>=2&&x.a&&x.a.quiz).map(x=>({q:x.q,img:x.img||"",ans:x.a.quiz,opts:shuffle(x.opts),expl:x.expl,hint:x.hint}));
 String((ctx.cfg.qs||"")+"\n"+(DATA.quiz[lid]||"")).split(/\r?\n/).map(l=>l.trim()).filter(Boolean).forEach(l=>{const p=l.split("|").map(x=>x.trim()).filter(Boolean);if(p.length>=3)custom.push({q:p[0],img:"",ans:p[1],opts:shuffle(p.slice(1))})});
 let list=shuffle(custom).slice(0,n);
 if(list.length<n){const auto=[];ctx.words.forEach(w=>{const t=[];
  if(w.img)t.push({q:"What is this? (Đây là gì?)",img:w.img,ans:w.en,opts:shuffle([w.en,...others(w,x=>x.en)]),w});
  t.push({q:`“${w.vi}” trong tiếng Anh là gì?`,ans:w.en,opts:shuffle([w.en,...others(w,x=>x.en)]),w});
  t.push({q:`“${w.en}” nghĩa là gì?`,ans:w.vi,opts:shuffle([w.vi,...others(w,x=>x.vi)]),w});
  if(w.def)t.push({q:`Which word? “${w.def}”`,ans:w.en,opts:shuffle([w.en,...others(w,x=>x.en)]),w});auto.push(t[rnd(t.length)])});
  list=list.concat(pick(auto.filter(q=>q.opts.length>=2),n-list.length))}
 if(!list.length)return empt(box,"Bài này chưa có câu hỏi trắc nghiệm.");
 let timer=null;
 seq(box,ctx,list,(q,area,done)=>{let answered=false,left=tm;clearInterval(timer);
  area.innerHTML=`${tm?`<div id="qtm" class="muted" style="text-align:right">⏱ ${tm}s</div>`:""}<div class="gq">${q.img?`<img class="gimg" src="${q.img}" alt="">`:""}<div class="qq">${esc(q.q)}</div><div class="qopts">${q.opts.map(o=>`<button class="qo" data-o="${esc(o)}">${esc(o)}</button>`).join("")}</div></div>`;
  const nx=g=>{const r=box.querySelector(".nx");r.innerHTML=`<button class="btn" id="qn">Câu tiếp ▶</button>`;r.querySelector("#qn").onclick=()=>done(g,1)};
  function answer(o){if(answered)return;answered=true;clearInterval(timer);const good=o!==null&&cmp(o,q.ans);
   area.querySelectorAll(".qo").forEach(b=>{b.disabled=true;if(cmp(b.dataset.o,q.ans))b.classList.add("ok");else if(o!==null&&b.dataset.o===o)b.classList.add("no")});
   fbox(box,good?`🎉 Chính xác!${q.expl?`<br>${esc(q.expl)}`:""}`:(o===null?"⏰ Hết giờ rồi! ":"Chưa đúng, không sao nhé! ")+`Đáp án: <b>${esc(q.ans)}</b>.${q.expl?`<br>${esc(q.expl)}`:q.w&&q.w.ex?`<br><i>${hl(q.w.ex,[q.w])}</i>`:""}`,good?"good":"hint");
   if(q.w)speakWord(q.w);nx(good?pts:0)}
  area.querySelectorAll(".qo").forEach(b=>b.onclick=()=>answer(b.dataset.o));
  if(tm)timer=setInterval(()=>{if(!alive(box))return clearInterval(timer);left--;const e=box.querySelector("#qtm");if(e)e.textContent="⏱ "+Math.max(0,left)+"s";if(left<=0)answer(null)},1000)})};

/* ===== GAME 7 – SENTENCE ORDER (sắp xếp từ / cụm từ thành câu) ===== */
GAMES.order=function(box,ctx){const lid=ctx.lesson.id;
 let items=ls(lid).map(s=>({en:s.en.trim(),vi:s.vi,chunks:s.chunks&&s.chunks.length>1?s.chunks:null}));
 its(lid,"scramble").forEach(x=>{if(x.sentence)items.push({en:x.sentence.trim(),vi:x.hint||"",chunks:x.chunks&&x.chunks.length>1?x.chunks:null,expl:x.expl})});
 if(items.length<3)ctx.words.filter(w=>w.ex).forEach(w=>{if(!items.some(x=>x.en===w.ex.trim()))items.push({en:w.ex.trim(),vi:w.vi,chunks:null})});
 items=pick(items.filter(x=>(x.chunks||x.en.split(/\s+/)).length>=3),num(ctx.cfg.n,5,1,12));
 if(!items.length)return empt(box,"Bài này chưa có mẫu câu (từ 3 từ/cụm trở lên) để chơi sắp xếp.");
 seq(box,ctx,items,(it,area,done)=>{const toks=it.chunks||it.en.split(/\s+/),exp=toks.join(" ");let order=shuffle(toks.map((_,k)=>k)),tries=0,placed=[],locked=0,fin=false;
  for(let t=0;t<20&&order.every((v,k)=>v===k);t++)order=shuffle(order);
  area.innerHTML=`<div class="gq"><div class="gclue" style="font-size:18px">🇻🇳 ${esc(it.vi||"Sắp xếp các từ/cụm từ thành câu đúng")}</div><div class="oln" id="oln"></div><div class="row" style="justify-content:center;margin-top:10px" id="obk"></div><div class="row" style="justify-content:center;margin-top:12px"><button class="btn" id="ock">✔ Kiểm tra</button><button class="btn sec" id="orst">↺ Làm lại câu này</button></div></div>`;
  const draw2=()=>{area.querySelector("#oln").innerHTML=placed.length?placed.map((k,n)=>`<button class="chip ${n<locked?"used":"sel"}" data-n="${n}">${esc(toks[k])}</button>`).join(""):`<span class="muted">Chạm vào các từ bên dưới theo đúng thứ tự…</span>`;area.querySelector("#obk").innerHTML=order.filter(k=>!placed.includes(k)).map(k=>`<button class="chip" data-k="${k}">${esc(toks[k])}</button>`).join("")};draw2();
  area.onclick=e=>{if(fin)return;const b=e.target.closest(".chip");if(!b)return;if(b.dataset.k!=null){placed.push(+b.dataset.k);draw2()}else if(b.dataset.n!=null){const n=+b.dataset.n;if(n<locked)return;placed.splice(n,1);draw2()}};
  area.querySelector("#orst").onclick=()=>{if(!fin){placed=placed.slice(0,locked);draw2()}};
  area.querySelector("#ock").onclick=()=>{if(fin)return;if(placed.length<toks.length)return fbox(box,"Con hãy đặt đủ tất cả các từ/cụm từ nhé 🌱","hint");tries++;
   if(cmp(placed.map(k=>toks[k]).join(" "),exp)){fin=true;fbox(box,`🎉 Chính xác! ${esc(it.en)}${it.expl?`<br>${esc(it.expl)}`:""}`,"good");say(it.en);done(tries===1?ctx.pts:tries===2?ctx.pts*.5:ctx.pts*.25,1800)}
   else if(tries>=3){fin=true;placed=toks.map((_,k)=>k);locked=toks.length;draw2();fbox(box,`📖 Câu đúng là: <b>${esc(exp)}</b><br>Không sao đâu, con chơi lại để nhớ thêm nhé!`,"hint");done(0,3000)}
   else{const n=tries===1?1:2;placed=[];for(let k=0;k<n;k++)placed.push(k);locked=n;draw2();fbox(box,KIND[tries-1]+`<br>💡 Gợi ý ${tries}: câu bắt đầu bằng “<b>${esc(toks.slice(0,n).join(" "))}</b>”. Mình đã đặt sẵn giúp con.`,"hint")}}})};

/* ===== GAME 8 – ODD ONE OUT ===== */
GAMES.odd=function(box,ctx){const items=pick(its(ctx.lesson.id,"odd").filter(x=>x.odd&&x.odd.length>=3&&x.a&&x.a.odd),num(ctx.cfg.n,5,1,12));
 if(!items.length)return empt(box,"Bài này chưa có câu Odd One Out (dòng OddOneOut trong Excel).");
 seq(box,ctx,items,(x,area,done)=>{let att=0,off=new Set(),fin=false;const opts=shuffle(x.odd);
  area.innerHTML=`<div class="gq"><div class="qq">${esc(x.q||"Find the odd one out.")}</div><div class="qopts">${opts.map(o=>`<button class="qo" data-o="${esc(o)}">${esc(o)}</button>`).join("")}</div></div>`;
  area.onclick=e=>{const b=e.target.closest(".qo");if(!b||b.disabled||fin)return;const o=b.dataset.o;att++;
   if(cmp(o,x.a.odd)){fin=true;b.classList.add("ok");area.querySelectorAll(".qo").forEach(z=>z.disabled=true);fbox(box,`🎉 Chính xác! “${esc(o)}” là từ khác loại.${x.expl?`<br>${esc(x.expl)}`:""}`,"good");done(att===1?ctx.pts:att===2?ctx.pts*.5:ctx.pts*.25,1800)}
   else{b.classList.add("no");b.disabled=true;if(att>=3){fin=true;area.querySelectorAll(".qo").forEach(z=>{z.disabled=true;if(cmp(z.dataset.o,x.a.odd))z.classList.add("ok")});fbox(box,hintC(3,x,x.a.odd),"hint");done(0,2800)}else fbox(box,KIND[att-1]+"<br>"+hintC(att,x,x.a.odd),"hint")}}})};

/* ===== GAME 9 – TRUE OR FALSE ===== */
GAMES.tf=function(box,ctx){const items=pick(its(ctx.lesson.id,"tf").filter(x=>x.q&&typeof(x.a&&x.a.tf)==="boolean"),num(ctx.cfg.n,5,1,15));
 if(!items.length)return empt(box,"Bài này chưa có câu True/False (dòng TrueFalse trong Excel).");
 seq(box,ctx,items,(x,area,done)=>{let fin=false;
  area.innerHTML=`<div class="gq"><div class="qq">${esc(x.q)}</div><div class="qopts" style="max-width:420px"><button class="qo" data-v="1">✔ TRUE – Đúng</button><button class="qo" data-v="0">✖ FALSE – Sai</button></div></div>`;
  area.onclick=e=>{const b=e.target.closest(".qo");if(!b||fin)return;fin=true;const v=b.dataset.v==="1",good=v===x.a.tf;
   area.querySelectorAll(".qo").forEach(z=>{z.disabled=true;if((z.dataset.v==="1")===x.a.tf)z.classList.add("ok");else if(z===b)z.classList.add("no")});
   fbox(box,good?`🎉 Chính xác!${x.expl?`<br>${esc(x.expl)}`:""}`:`Chưa đúng, không sao nhé! Nhận định này là <b>${x.a.tf?"ĐÚNG":"SAI"}</b>.${x.hint?`<br>💡 ${esc(x.hint)}`:""}${x.expl?`<br>${esc(x.expl)}`:""}`,good?"good":"hint");done(good?ctx.pts:0,2200)}})};

/* ===== GAME 10 – FIX THE MISTAKE ===== */
GAMES.fix=function(box,ctx){const items=pick(its(ctx.lesson.id,"fix").filter(x=>x.q&&x.a&&x.a.fix),num(ctx.cfg.n,5,1,12));
 if(!items.length)return empt(box,"Bài này chưa có câu Fix the Mistake (dòng FixMistake trong Excel).");
 seq(box,ctx,items,(x,area,done)=>{let att=0,fin=false;const wrong=String(x.q).replace(/^\s*find and correct the mistake\s*[:：-]?\s*/i,"").trim();
  area.innerHTML=`<div class="gq"><div class="muted">Tìm lỗi và viết lại câu đúng:</div><div class="gclue" style="font-size:19px;color:#b91c1c">${esc(wrong)}</div><textarea id="fxt" class="gtxt" style="width:100%;max-width:560px;min-height:70px" autocomplete="off" autocapitalize="off" spellcheck="false">${esc(wrong)}</textarea><div class="row" style="justify-content:center;margin-top:8px"><button class="btn" id="fxk">✔ Kiểm tra</button></div></div>`;
  const inp=area.querySelector("#fxt");
  area.querySelector("#fxk").onclick=()=>{if(fin)return;const v=inp.value;if(!v.trim())return;att++;
   if(nz(v)===nz(x.a.fix)){fin=true;fbox(box,`🎉 Chính xác! ${esc(x.a.fix)}${x.expl?`<br>${esc(x.expl)}`:""}`,"good");say(x.a.fix);done(att===1?ctx.pts:att===2?ctx.pts*.5:ctx.pts*.25,1800)}
   else if(att>=3){fin=true;inp.value=x.a.fix;fbox(box,hintC(3,x,x.a.fix),"hint");done(0,3000)}
   else fbox(box,KIND[att-1]+"<br>"+(att===1?hintC(1,x,x.a.fix):`💡 Gợi ý 2: câu đúng bắt đầu bằng “<b>${esc(x.a.fix.split(/\s+/).slice(0,3).join(" "))}</b>…”.`),"hint")}})};

/* ===== GAME 11 – MATCH PAIRS (ghép vế trái – vế phải) ===== */
GAMES.pairs=function(box,ctx){const list=pick(prs(ctx.lesson.id).filter(p=>p.l&&p.r),num(ctx.cfg.n,6,2,10)),pts=ctx.pts;
 if(list.length<2)return empt(box,"Bài này chưa có cặp ghép (trang MatchPairs trong Excel, cần ít nhất 2 cặp).");
 let sel=null,left=list.length,score=0;const wrong={},done={};
 box.innerHTML=SHELL(0,`<span class="muted">Chạm một vế bên trái, rồi chạm vế phải tương ứng.</span>`)+`<div class="pgrid"><div class="pcol">${shuffle(list.map((p,k)=>k)).map(k=>`<button class="pc pl" data-k="${k}">${esc(list[k].l)}</button>`).join("")}</div><div class="pcol">${shuffle(list.map((p,k)=>k)).map(k=>`<button class="pc pr" data-k="${k}">${esc(list[k].r)}</button>`).join("")}</div></div><div class="gfb efb hint">Chọn một vế bên trái trước nhé 👈</div>`;
 const L=k=>box.querySelector(`.pl[data-k="${k}"]`),R=k=>box.querySelector(`.pr[data-k="${k}"]`);
 box.onclick=e=>{const l=e.target.closest(".pl"),r=e.target.closest(".pr");
  if(l&&!l.disabled){box.querySelectorAll(".pl.sel").forEach(z=>z.classList.remove("sel"));sel=l.dataset.k;l.classList.add("sel");fbox(box,"Giờ chạm vế bên phải tương ứng 👉","hint");return}
  if(r&&!r.disabled){if(sel==null)return fbox(box,"Hãy chọn một vế bên trái trước nhé 👈","hint");const k=sel;
   if(r.dataset.k===k){done[k]=1;score+=wrong[k]?pts/2:pts;left--;[L(k),r].forEach(z=>{z.classList.remove("sel");z.classList.add("ok");z.disabled=true});sel=null;setSc(box,score);fbox(box,`🎉 Đúng cặp! ${esc(list[k].l)} → ${esc(list[k].r)}`,"good")}
   else{wrong[k]=(wrong[k]||0)+1;r.classList.add("shake");setTimeout(()=>r.classList.remove("shake"),450);const n=wrong[k];
    if(n>=3){done[k]=1;left--;[L(k),R(k)].forEach(z=>{z.classList.remove("sel");z.classList.add("rev");z.disabled=true});sel=null;fbox(box,`📖 ${esc(list[k].l)} → <b>${esc(list[k].r)}</b><br>Không sao đâu, con chơi lại để nhớ thêm nhé!`,"hint")}
    else fbox(box,KIND[n-1]+"<br>"+(n===1?(list[k].hint?`💡 ${esc(list[k].hint)}`:`💡 Hãy đọc kỹ vế trái “${esc(list[k].l)}” nhé.`):`💡 Vế phải bắt đầu bằng “<b>${esc(list[k].r.slice(0,4))}</b>…”.`),"hint")}
   if(left<=0)setTimeout(()=>alive(box)&&ctx.finish(Math.round(score*10)/10,list.length*pts),700)}};
};

/* =====================================================================
   KHU QUẢN TRỊ ESL (ESL CONTENT MANAGER) – chỉ giáo viên thấy
   ===================================================================== */
const AS={g:null,lesson:null,tab:"v",all:false,rep:"student",repClass:"",repQ:"",repTest:false};
E.AS=AS;
const ATABS=[["i","📥 Nhập nhanh"],["v","📚 Từ khóa"],["s","💬 Mẫu câu"],["l","🎧 Nghe & điền từ"],["g","🎮 Trò chơi"],["x","🧩 Câu hỏi & game"],["p","👁 Xem trước"],["r","📊 Báo cáo"],["d","💾 Dữ liệu"]];
const lessonOpts=()=>chaptersOf(AS.g).map(c=>`<optgroup label="${esc(c.name)}">${c.lessons.map(l=>`<option value="${l.id}" ${l.id===AS.lesson?"selected":""}>Bài ${l.no}. ${esc(l.name)} (${lw(l.id).filter(w=>!w.rev).length} từ)</option>`).join("")}</optgroup>`).join("");
E.admin=function(){E.preview=false;
 if(!loaded){G("main").innerHTML=`<div class="card"><div class="empty">⏳ Đang tải dữ liệu ESL…</div></div>`;E.ready.then(()=>{if(V.name==="adm"&&V.adm==="esl")E.admin()});return}
 if(!AS.g)AS.g=V.g||GR[0][0];
 if(AS.lesson&&!findLesson(AS.lesson))AS.lesson=null;
 const tabNeedsLesson=["v","s","g","l","p","x"].includes(AS.tab),showSel=tabNeedsLesson||AS.tab==="i",l=AS.lesson?findLesson(AS.lesson):null;
 const dirty=Number(localStorage.getItem(KEY_EDIT)||0)>Number(localStorage.getItem(KEY_PUB)||0)&&(DATA.words.length||DATA.sents.length);
 G("main").innerHTML=`<div class="card esl"><h2>🔤 SCIENCE ESL – Quản lý nội dung</h2>${dirty?`<div class="efb hint" style="margin-bottom:8px">⚠ Nội dung ESL có thay đổi CHƯA xuất bản. Vào tab <b>💾 Dữ liệu</b> → “Tải esl-data.json” rồi tải lên GitHub cùng thư mục với index.html.</div>`:""}
 <div class="row" style="margin-bottom:10px">${gradeSeg(AS.g,"ESL.pickGrade")}${showSel?`<select id="esLs" onchange="ESL.pickLesson(this.value)" style="min-width:230px;max-width:100%"><option value="">— Chọn bài học —</option>${lessonOpts()}</select>`:""}</div>
 <div class="tabs" style="margin-bottom:10px">${ATABS.map(([k,n])=>`<button class="${AS.tab===k?"on":""}" onclick="ESL.admTab('${k}')">${n}</button>`).join("")}</div>
 <div id="eadm">${tabNeedsLesson&&!l?`<div class="empty">Hãy chọn lớp và bài học ở trên để soạn nội dung ESL.</div>`:AS.tab==="i"?importAdm(l):AS.tab==="x"?itemsAdm(l):AS.tab==="v"?vocabAdm(l):AS.tab==="s"?sentAdm(l):AS.tab==="g"?gameAdm(l):AS.tab==="l"?listenAdm(l):AS.tab==="p"?`<div id="eslpv"></div>`:AS.tab==="r"?reportAdm():dataAdm()}</div></div>`;
 if(AS.tab==="p"&&l){E.lesson(l,G("eslpv"),true)}
 if(AS.tab==="l"&&l)lsBindTokens()};
E.pickGrade=g=>{AS.g=g;AS.lesson=null;E.admin()};
E.pickLesson=id=>{AS.lesson=id||null;E.admin()};
E.admTab=k=>{AS.tab=k;E.admin()};
const reload=()=>E.admin();

/* ---------- ảnh & audio ---------- */
let TMP={img:"",audio:""};
async function pickImg(f,prev){if(!f)return;try{TMP.img=await shrinkImage(await readDataURL(f),560,.8);const i=G(prev);if(i){i.src=TMP.img;i.style.display=""}}catch(e){toast("Không đọc được hình","err")}}
async function pickAudio(f,lab){if(!f)return;if(f.size>2*1024*1024&&!confirm("Tệp audio nặng "+(f.size/1048576).toFixed(1)+" MB sẽ làm tệp dữ liệu lớn. Nên dùng giọng đọc tự động. Vẫn dùng?"))return;
 try{TMP.audio=await readDataURL(f);const e=G(lab);if(e)e.textContent="✅ "+f.name}catch(e){toast("Không đọc được audio","err")}}
E.pickImg=(el,prev)=>{pickImg(el.files[0],prev);el.value=""};
E.pickAudio=(el,lab)=>{pickAudio(el.files[0],lab);el.value=""};
E.clrImg=prev=>{TMP.img="";const i=G(prev);if(i){i.src="";i.style.display="none"}};
E.clrAudio=lab=>{TMP.audio="";const e=G(lab);if(e)e.textContent="(chưa có – sẽ dùng giọng đọc tự động)"};
const fld=(lab,html)=>`<div class="fg"><label>${lab}</label>${html}</div>`;
const mediaFields=w=>fld("Hình minh họa",`<div class="row"><button class="btn sm sec" type="button" onclick="G_('wfi').click()">🖼 Chọn hình</button><button class="btn sm red" type="button" onclick="ESL.clrImg('wfp')">✖ Bỏ hình</button><input type="file" id="wfi" accept="image/*" class="hidden" onchange="ESL.pickImg(this,'wfp')"></div><img id="wfp" src="${w.img||""}" style="max-width:100%;max-height:140px;margin-top:6px;border-radius:10px;${w.img?"":"display:none"}">`)+
 fld("Audio phát âm",`<div class="row"><button class="btn sm sec" type="button" onclick="G_('wfa').click()">🎵 Tải audio</button><button class="btn sm red" type="button" onclick="ESL.clrAudio('wal')">✖ Bỏ audio</button><button class="btn sm" type="button" onclick="ESL.testWord()">🔊 Nghe thử</button><input type="file" id="wfa" accept="audio/*" class="hidden" onchange="ESL.pickAudio(this,'wal')"></div><div id="wal" class="muted" style="font-size:13px">${w.audio?"✅ Đã có audio":"(chưa có – sẽ dùng giọng đọc tự động)"}</div>`);
window.G_=G;
E.testWord=()=>{const en=G("wfe")?G("wfe").value:"";if(TMP.audio)playSrc(TMP.audio);else if(en)say(en)};

/* ---------- 1. Vocabulary Manager ---------- */
function vocabAdm(l){const mine=lw(l.id),list=AS.all?DATA.words.slice().sort((a,b)=>String(a.en).localeCompare(String(b.en))):mine,nNew=mine.filter(w=>!w.rev).length;
 return `<div class="row"><button class="btn" onclick="ESL.wForm()">➕ Thêm từ</button><button class="btn sec" onclick="ESL.wBulk()">📝 Thêm nhiều từ</button><label style="margin-left:auto"><input type="checkbox" ${AS.all?"checked":""} onchange="ESL.setAll(this.checked)"> Xem toàn bộ ngân hàng từ (${DATA.words.length})</label></div>
 <p class="muted" style="margin:8px 0">Bài ${l.no}: <b>${nNew}</b> từ khóa mới${nNew>12?" ⚠ (nên khoảng 10 từ/bài)":""} · <b>${mine.length-nNew}</b> từ ôn tập. Từ ôn tập là từ dùng lại, không tính là từ mới.</p>
 ${list.length?`<div style="overflow:auto"><table class="t"><tr><th>Hình</th><th>English</th><th>IPA</th><th>Nghĩa</th><th>Âm</th>${AS.all?"<th>Bài</th>":""}<th></th></tr>${list.map(w=>`<tr><td>${w.img?`<img src="${w.img}" style="height:38px;border-radius:6px">`:"—"}</td><td><b>${esc(w.en)}</b>${w.rev?` <span class="erev s">ôn tập</span>`:""}</td><td>${esc(w.ipa||"")}</td><td>${esc(w.vi)}</td><td>${w.audio?"🎵":"🔊"}</td>${AS.all?`<td>${esc(lessonShort(w.lesson))}</td>`:""}<td style="white-space:nowrap"><button class="btn sm sec" onclick="ESL.wForm('${w.id}')">✏</button> <button class="btn sm red" onclick="ESL.wDel('${w.id}')">🗑</button></td></tr>`).join("")}</table></div>`:`<div class="empty">Chưa có từ nào. Bấm “Thêm từ”.</div>`}`}
E.setAll=v=>{AS.all=v;reload()};
E.wForm=id=>{const w=id?wById(id):{};TMP={img:w.img||"",audio:w.audio||""};
 modal(`<h3>${id?"✏ Sửa từ khóa":"➕ Thêm từ khóa"} – ${esc(lessonShort(AS.lesson))}</h3>${fld("English word *",`<input type="text" id="wfe" style="width:100%" value="${esc(w.en||"")}" placeholder="cell division">`)}${fld("Phiên âm IPA",`<input type="text" id="wfip" style="width:100%" value="${esc(w.ipa||"")}" placeholder="sel dɪˈvɪʒn">`)}${fld("Nghĩa tiếng Việt *",`<input type="text" id="wfv" style="width:100%" value="${esc(w.vi||"")}" placeholder="sự phân chia tế bào">`)}${fld("Câu ví dụ ngắn",`<input type="text" id="wfx" style="width:100%" value="${esc(w.ex||"")}" placeholder="Cell division produces new cells.">`)}${fld("Mô tả bằng tiếng Anh <span class='muted'>(dùng cho game đoán từ, không bắt buộc)</span>",`<input type="text" id="wfd" style="width:100%" value="${esc(w.def||"")}" placeholder="The process by which one cell becomes two.">`)}${mediaFields(w)}
 <label style="display:block;margin:8px 0"><input type="checkbox" id="wfr" ${w.rev?"checked":""}> Đây là <b>từ ôn tập</b> (đã học ở bài khác)</label><div class="row"><button class="btn" onclick="ESL.wSave('${id||""}')">💾 Lưu</button><button class="btn sec" onclick="closeModal()">Hủy</button></div>`,true)};
function wFromForm(){return{en:G("wfe").value.trim(),ipa:G("wfip").value.trim(),vi:G("wfv").value.trim(),ex:G("wfx").value.trim(),def:G("wfd").value.trim(),rev:G("wfr").checked}}
E.wSave=id=>{const f=wFromForm();if(!f.en||!f.vi)return toast("Cần nhập từ tiếng Anh và nghĩa tiếng Việt","err");
 const old=id?wById(id):null,low=f.en.toLowerCase();
 if(!old||old.en.toLowerCase()!==low){const same=DATA.words.find(x=>x.en.toLowerCase()===low&&x.id!==id);
  if(same){if(same.lesson===AS.lesson)return toast(`Từ “${f.en}” đã có trong bài này rồi.`,"err");
   if(!confirm(`⚠ Từ “${f.en}” đã được dùng ở “${lessonShort(same.lesson)}”.\n\nBấm OK để thêm vào bài này như TỪ ÔN TẬP (không tính là từ mới).\nBấm Hủy để quay lại sửa.`))return;f.rev=true}}
 if(old)Object.assign(old,f,{img:TMP.img,audio:TMP.audio});else DATA.words.push({id:uid("w"),lesson:AS.lesson,...f,img:TMP.img,audio:TMP.audio});
 save();closeModal();toast("✅ Đã lưu từ khóa");reload()};
E.wDel=id=>{const w=wById(id);if(!w||!confirm(`Xóa từ “${w.en}”?`))return;DATA.words=DATA.words.filter(x=>x.id!==id);
 Object.values(DATA.games).forEach(a=>Array.isArray(a)&&a.forEach(g=>{if(g.cfg&&g.cfg.words)g.cfg.words=g.cfg.words.filter(x=>x!==id)}));save();reload()};
E.wBulk=()=>modal(`<h3>📝 Thêm nhiều từ – ${esc(lessonShort(AS.lesson))}</h3><p class="muted">Mỗi dòng một từ, ngăn cách bằng dấu <b>|</b> hoặc Tab:<br><code>English | IPA | Nghĩa tiếng Việt | Câu ví dụ</code><br>Ví dụ: <code>cell | sel | tế bào | A cell is very small.</code><br>Hình và audio thêm sau bằng nút ✏. Từ trùng ở bài khác sẽ tự thêm thành <b>từ ôn tập</b>.</p><textarea id="wbk" style="width:100%;min-height:200px"></textarea><div class="row" style="margin-top:8px"><button class="btn" onclick="ESL.wBulkSave()">💾 Thêm</button><button class="btn sec" onclick="closeModal()">Hủy</button></div>`,true);
E.wBulkSave=()=>{let a=0,r=0,s=0;G("wbk").value.split(/\r?\n/).forEach(line=>{const p=line.split(/\s*\|\s*|\t/).map(x=>x.trim());if(p.length<2||!p[0])return;
  let en=p[0],ipa="",vi="",ex="";if(p.length===2)vi=p[1];else{ipa=p[1];vi=p[2]||"";ex=p[3]||""}if(!vi){s++;return}
  const same=DATA.words.find(x=>x.en.toLowerCase()===en.toLowerCase());if(same&&same.lesson===AS.lesson){s++;return}
  DATA.words.push({id:uid("w"),lesson:AS.lesson,en,ipa,vi,ex,def:"",img:"",audio:"",rev:!!same});same?r++:a++});
 save();closeModal();toast(`✅ Thêm ${a} từ mới, ${r} từ ôn tập${s?`, bỏ qua ${s} dòng`:""}`);reload()};

/* ---------- 2. Sentence Manager ---------- */
function sentAdm(l){const list=ls(l.id);
 return `<div class="row"><button class="btn" onclick="ESL.sForm()">➕ Thêm mẫu câu</button><button class="btn sec" onclick="ESL.sBulk()">📝 Thêm nhiều câu</button></div><p class="muted" style="margin:8px 0">Mỗi bài khoảng 3 mẫu câu, dùng các từ khóa của bài (từ khóa sẽ tự được tô nổi bật).</p>
 ${list.length?list.map((s,i)=>`<div class="ess"><div class="ent"><b class="esn">${i+1}</b><div class="esen">${hl(s.en,lw(l.id))}</div>${s.audio?"🎵":""}<button class="btn sm sec" onclick="ESL.saySent('${s.id}')">🔊</button><button class="btn sm sec" onclick="ESL.sForm('${s.id}')">✏</button><button class="btn sm red" onclick="ESL.sDel('${s.id}')">🗑</button></div><div class="esvi" style="display:block">${esc(s.vi||"")}</div></div>`).join(""):`<div class="empty">Chưa có mẫu câu.</div>`}`}
E.sForm=id=>{const s=id?DATA.sents.find(x=>x.id===id):{};TMP={img:"",audio:s.audio||""};
 modal(`<h3>${id?"✏ Sửa":"➕ Thêm"} mẫu câu</h3>${fld("Câu tiếng Anh *",`<textarea id="sfe" style="width:100%;min-height:70px">${esc(s.en||"")}</textarea>`)}${fld("Nghĩa tiếng Việt",`<textarea id="sfv" style="width:100%;min-height:60px">${esc(s.vi||"")}</textarea>`)}${fld("Audio",`<div class="row"><button class="btn sm sec" type="button" onclick="G_('sfa').click()">🎵 Tải audio</button><button class="btn sm red" type="button" onclick="ESL.clrAudio('wal')">✖ Bỏ audio</button><button class="btn sm" type="button" onclick="ESL.testSent()">🔊 Nghe thử</button><input type="file" id="sfa" accept="audio/*" class="hidden" onchange="ESL.pickAudio(this,'wal')"></div><div id="wal" class="muted" style="font-size:13px">${s.audio?"✅ Đã có audio":"(chưa có – sẽ dùng giọng đọc tự động)"}</div>`)}<div class="row"><button class="btn" onclick="ESL.sSave('${id||""}')">💾 Lưu</button><button class="btn sec" onclick="closeModal()">Hủy</button></div>`)};
E.testSent=()=>{if(TMP.audio)playSrc(TMP.audio);else say(G("sfe").value)};
E.sSave=id=>{const en=G("sfe").value.trim(),vi=G("sfv").value.trim();if(!en)return toast("Hãy nhập câu tiếng Anh","err");
 if(id){Object.assign(DATA.sents.find(x=>x.id===id),{en,vi,audio:TMP.audio})}else DATA.sents.push({id:uid("s"),lesson:AS.lesson,en,vi,audio:TMP.audio});save();closeModal();reload()};
E.sDel=id=>{if(!confirm("Xóa mẫu câu này?"))return;DATA.sents=DATA.sents.filter(x=>x.id!==id);save();reload()};
E.sBulk=()=>modal(`<h3>📝 Thêm nhiều câu</h3><p class="muted">Mỗi dòng một câu: <code>English sentence | Nghĩa tiếng Việt</code></p><textarea id="sbk" style="width:100%;min-height:160px"></textarea><div class="row" style="margin-top:8px"><button class="btn" onclick="ESL.sBulkSave()">💾 Thêm</button><button class="btn sec" onclick="closeModal()">Hủy</button></div>`);
E.sBulkSave=()=>{let n=0;G("sbk").value.split(/\r?\n/).forEach(l=>{const p=l.split(/\s*\|\s*|\t/);if(p[0]&&p[0].trim()){DATA.sents.push({id:uid("s"),lesson:AS.lesson,en:p[0].trim(),vi:(p[1]||"").trim(),audio:""});n++}});save();closeModal();toast(`✅ Đã thêm ${n} câu`);reload()};

/* ---------- 3. Game Manager ---------- */
const GF={odd:["n","pts","plays"],tf:["n","pts","plays"],fix:["n","pts","plays"],pairs:["n","pts","plays"],order:["n","pts","plays"],match:["n","pts","plays"],guess:["n","pts","bonus","tries","plays"],search:["n","pts","time","plays"],flip:["n","pts","mode","plays"],fill:["n","pts","mode","plays"],quiz:["n","pts","time","plays","qs"]};
const GL={n:["Số câu / cặp / từ",1,15],pts:["Điểm mỗi câu",1,100],bonus:["Điểm thưởng (đúng lần 1)",0,50],tries:["Số lần đoán",1,6],plays:["Số lượt chơi tối đa (0 = không giới hạn)",0,99],time:["Thời gian (giây, 0 = không tính giờ)",0,3600]};
function gameAdm(l){const ws=lw(l.id),nq=(DATA.quiz[l.id]||"").split(/\r?\n/).filter(x=>x.trim()).length,cur=gamesOf(l.id),auto=cur.length&&cur[0].auto,byT=Object.fromEntries(cur.map(g=>[g.type,g]));
 return `<p class="muted">Chọn khoảng 3 trò chơi cho bài ${l.no}. ${auto?"<b>Đang dùng bộ game mặc định</b> – bấm Lưu để cố định lựa chọn của thầy/cô.":""} Game dùng chung thư viện, không cần viết lại code.${nq?` Bài này có <b>${nq}</b> câu quiz nhập từ Excel (tự dùng trong Science Quiz).`:""}</p>
 ${GPLAY.map(t=>{const d=GAMEDEF[t],g=byT[t],cfg=Object.assign({},gcfgDefault(t),g?g.cfg:{});
  return `<details class="gadm" ${g?"open":""}><summary><label><input type="checkbox" id="g_${t}_on" ${g?"checked":""} onclick="event.stopPropagation()"> ${d.icon} <b>${d.name}</b> – ${d.vn}</label></summary><div class="gfl">
  ${GF[t].map(f=>f==="mode"?`<div class="fg"><label>Kiểu thẻ</label><select id="g_${t}_mode">${(t==="flip"?[["vi","English – Tiếng Việt"],["img","English – Hình"],["def","English – Mô tả"],["mix","Trộn các kiểu"]]:[["bank","Chọn / kéo từ trong ngân hàng từ"],["type","Nhập trực tiếp từ"]]).map(([v,n])=>`<option value="${v}" ${cfg.mode===v?"selected":""}>${n}</option>`).join("")}</select></div>`:f==="qs"?`<div class="fg" style="grid-column:1/-1"><label>Câu hỏi tự soạn (không bắt buộc) – mỗi dòng: <code>Câu hỏi | đáp án ĐÚNG | sai 1 | sai 2 | sai 3</code></label><textarea id="g_${t}_qs" style="width:100%;min-height:80px">${esc(cfg.qs||"")}</textarea></div>`:`<div class="fg"><label>${GL[f][0]}</label><input type="number" id="g_${t}_${f}" value="${cfg[f]}" min="${GL[f][1]}" max="${GL[f][2]}"></div>`).join("")}
  <div class="fg" style="grid-column:1/-1"><label>Từ khóa dùng trong game <span class="muted">(bỏ chọn hết = dùng tất cả từ của bài)</span></label><div class="row">${ws.map(w=>`<label class="chip"><input type="checkbox" name="g_${t}_w" value="${w.id}" ${cfg.words&&cfg.words.includes(w.id)?"checked":""}> ${esc(w.en)}</label>`).join("")||"<span class='muted'>Bài chưa có từ.</span>"}</div></div></div></details>`}).join("")}
 <div class="card" style="margin-top:10px"><h4 style="margin:0 0 6px">❓ Tab QUIZ – câu hỏi trắc nghiệm (áp dụng cho mọi bài)</h4><div class="gfl"><div class="fg"><label>Số câu mỗi lượt</label><input type="number" id="q_n" value="${num((DATA.cfg.quiz||{}).n,5,1,15)}" min="1" max="15"></div><div class="fg"><label>Điểm mỗi câu</label><input type="number" id="q_pts" value="${num((DATA.cfg.quiz||{}).pts,10,1,100)}"></div><div class="fg"><label>Giây mỗi câu (0 = không tính giờ)</label><input type="number" id="q_time" value="${num((DATA.cfg.quiz||{}).time,0,0,120)}"></div></div></div>
 <div class="row" style="margin-top:10px"><button class="btn" onclick="ESL.gSave()">💾 Lưu lựa chọn game</button></div>`}
E.gSave=()=>{const out=[];DATA.cfg.quiz={n:num(G("q_n").value,5,1,15),pts:num(G("q_pts").value,10,1,100),time:num(G("q_time").value,0,0,120)};GPLAY.forEach(t=>{if(!G("g_"+t+"_on").checked)return;const cfg={};GF[t].forEach(f=>{const e=G(`g_${t}_${f}`);if(!e)return;cfg[f]=f==="mode"||f==="qs"?e.value:num(e.value,gcfgDefault(t)[f]||0,GL[f]?GL[f][1]:0,GL[f]?GL[f][2]:9999)});
  cfg.words=[...document.querySelectorAll(`input[name="g_${t}_w"]:checked`)].map(e=>e.value);out.push({type:t,cfg})});
 DATA.games[AS.lesson]=out;save();toast(`✅ Đã lưu ${out.length} trò chơi cho bài này${out.length>4?" (nên chọn khoảng 3)":""}`)};

/* ---------- 4. Listening Manager ---------- */
function listenAdm(l){const c=DATA.listen[l.id]||{title:"Listen and fill in the blanks",text:"",hide:[],bank:true,hint:true,showAns:false,maxPlays:0,rate:1};TMP={img:"",audio:c.audio||""};LC=JSON.parse(JSON.stringify(Object.assign({hide:[]},c,{audio:undefined})));LC.clips=LC.clips||{};
 return `<p class="muted">Đoạn văn khoảng 3–5 câu, dùng từ khóa và mẫu câu của bài. Chọn từ cần ẩn bằng cách bấm vào từ.</p>
 ${fld("Tiêu đề hoạt động",`<input type="text" id="lft" style="width:100%" value="${esc(c.title||"")}">`)}${fld("Đoạn văn <button class='btn sm sec' type='button' onclick='ESL.lsFromSents()'>✨ Tạo từ các mẫu câu của bài</button>",`<textarea id="lfx" style="width:100%;min-height:110px" oninput="ESL.lsText()">${esc(c.text||"")}</textarea>`)}
 <div class="fg"><label>Bấm vào từ để ẩn / hiện (từ ẩn = ô trống – nên chọn 5 chỗ)</label><div id="lftok" class="lftok"></div><div class="row" style="margin-top:6px"><button class="btn sm blue" onclick="ESL.lsAuto()">✨ Tự ẩn các từ khóa của bài</button><button class="btn sm sec" onclick="ESL.lsClear()">Bỏ ẩn hết</button></div></div>
 <div class="fg"><label>🎬 Clip cho từng chỗ trống (audio, video hoặc link YouTube/Drive) – học sinh bấm nút số để nghe/xem</label><div id="lfclips"></div><input type="file" id="lfc" accept="audio/*,video/*" class="hidden" onchange="ESL.clipFile(this)"></div>
 <div class="gfl"><div class="fg"><label>Số lần nghe tối đa (0 = không giới hạn)</label><input type="number" id="lfm" value="${c.maxPlays||0}" min="0" max="20"></div><div class="fg"><label>Tốc độ giọng đọc (1 = bình thường)</label><input type="number" id="lfr" step=".1" value="${c.rate||1}" min=".5" max="1.5"></div></div>
 <label style="display:block;margin:6px 0"><input type="checkbox" id="lfb" ${c.bank!==false?"checked":""}> Hiện ngân hàng từ (word bank)</label><label style="display:block;margin:6px 0"><input type="checkbox" id="lfh" ${c.hint!==false?"checked":""}> Cho phép nút gợi ý (Show Hint)</label><label style="display:block;margin:6px 0"><input type="checkbox" id="lfs" ${c.showAns?"checked":""}> Cho phép Show Answer ngay sau lần kiểm tra đầu</label>
 ${fld("Audio của đoạn văn",`<div class="row"><button class="btn sm sec" type="button" onclick="G_('lfa').click()">🎵 Tải audio</button><button class="btn sm red" type="button" onclick="ESL.clrAudio('wal')">✖ Bỏ audio</button><button class="btn sm" type="button" onclick="ESL.lsTest()">🔊 Nghe thử</button><input type="file" id="lfa" accept="audio/*" class="hidden" onchange="ESL.pickAudio(this,'wal')"></div><div id="wal" class="muted" style="font-size:13px">${c.audio?"✅ Đã có audio":"(chưa có – sẽ dùng giọng đọc tự động của thiết bị)"}</div>`)}
 <div class="row"><button class="btn" onclick="ESL.lsSave()">💾 Lưu</button>${DATA.listen[l.id]?`<button class="btn red" onclick="ESL.lsDel()">🗑 Xóa hoạt động</button>`:""}</div>`}
let LC={hide:[]};
function lsBindTokens(){const t=G("lftok");if(t)lsTok()}
function lsTok(){lsClips();const txt=G("lfx").value,toks=tok(txt);G("lftok").innerHTML=toks.map((t,i)=>ISWx(t)?`<span class="tk ${LC.hide.includes(i)?"hid":""}" onclick="ESL.lsToggle(${i})">${esc(t)}</span>`:esc(t).replace(/\n/g,"<br>")).join("")||`<span class="muted">(nhập đoạn văn ở trên)</span>`}
const ISWx=t=>/^[A-Za-z0-9'’-]+$/.test(t);
function lsClips(){const e=G("lfclips");if(!e)return;const n=LC.hide.length;
 e.innerHTML=n?Array.from({length:n},(_,i)=>{const k=i+1,c=LC.clips[k]||"",isData=/^data:/.test(c);return `<div class="row" style="margin-bottom:6px"><b style="min-width:62px">Chỗ ${k}:</b><button class="btn sm sec" type="button" onclick="ESL.clipPick(${k})">📎 Tải clip</button><input type="text" placeholder="hoặc dán link YouTube / Drive / .mp3 / .mp4" style="flex:1;min-width:180px" value="${isData?"":esc(c)}" onchange="ESL.clipUrl(${k},this.value)"><span class="muted" style="font-size:13px">${isData?"✅ đã tải clip ("+Math.round(c.length*.75/1024)+" KB)":c?"✅ link":"(trống – máy sẽ đọc câu chứa chỗ này)"}</span>${c?`<button class="btn sm red" type="button" onclick="ESL.clipClr(${k})">✖</button>`:""}</div>`}).join(""):`<span class="muted">Chọn từ cần ẩn ở trên, mỗi chỗ trống sẽ có một clip số 1, 2, 3…</span>`}
let clipK=0;
E.clipPick=k=>{clipK=k;G("lfc").click()};
E.clipFile=async el=>{const f=el.files[0];el.value="";if(!f)return;if(f.size>3*1048576&&!confirm("Clip nặng "+(f.size/1048576).toFixed(1)+" MB làm tệp dữ liệu rất lớn. Nên dán link YouTube/Drive. Vẫn tải lên?"))return;try{LC.clips[clipK]=await readDataURL(f);lsClips()}catch(e){toast("Không đọc được clip","err")}};
E.clipUrl=(k,v)=>{v=v.trim();if(v)LC.clips[k]=/^https?:/i.test(v)?v:"https://"+v;else delete LC.clips[k];lsClips()};
E.clipClr=k=>{delete LC.clips[k];lsClips()};
E.lsText=()=>{LC.hide=[];lsTok()};
E.lsToggle=i=>{const k=LC.hide.indexOf(i);k<0?LC.hide.push(i):LC.hide.splice(k,1);lsTok()};
E.lsAuto=()=>{const toks=tok(G("lfx").value),ws=lw(AS.lesson).map(w=>w.en.toLowerCase());const parts=new Set();ws.forEach(w=>w.split(/\s+/).forEach(p=>parts.add(p)));
 LC.hide=[];toks.forEach((t,i)=>{if(!ISWx(t))return;const x=t.toLowerCase();if(parts.has(x)||parts.has(x.replace(/(es|s)$/,"")))LC.hide.push(i)});lsTok();if(!LC.hide.length)toast("Không tìm thấy từ khóa nào trong đoạn văn","err")};
E.lsClear=()=>{LC.hide=[];lsTok()};
E.lsFromSents=()=>{const t=ls(AS.lesson).map(s=>s.en).join(" ");if(!t)return toast("Bài chưa có mẫu câu","err");G("lfx").value=t;LC.hide=[];E.lsAuto()};
E.lsTest=()=>{const t=G("lfx").value;if(TMP.audio)playSrc(TMP.audio);else say(t,num(G("lfr").value,1,.5,1.5))};
E.lsSave=()=>{const text=G("lfx").value.trim();if(!text)return toast("Hãy nhập đoạn văn","err");if(!LC.hide.length&&!confirm("Chưa chọn từ nào để ẩn. Vẫn lưu?"))return;
 DATA.listen[AS.lesson]={title:G("lft").value.trim()||"Listen and fill in the blanks",text:G("lfx").value,hide:LC.hide.slice().sort((a,b)=>a-b),clips:Object.fromEntries(Object.entries(LC.clips||{}).filter(([k])=>+k<=LC.hide.length)),maxPlays:num(G("lfm").value,0,0,20),rate:num(G("lfr").value,1,.5,1.5),bank:G("lfb").checked,hint:G("lfh").checked,showAns:G("lfs").checked,audio:TMP.audio||""};
 if(S.lf&&S.lf.lid===AS.lesson)S.lf=null;save();toast("✅ Đã lưu hoạt động nghe");reload()};
E.lsDel=()=>{if(!confirm("Xóa hoạt động nghe của bài này?"))return;delete DATA.listen[AS.lesson];S.lf=null;save();reload()};

/* ---------- 5. Báo cáo tiến độ ---------- */
function allRecs(){return store.get(KEY_PROG,[]).filter(r=>AS.repTest||!r.test)}
const pct=(a,b)=>b?Math.round(a*100/b):0;
function agg(rs){const g={learned:0,known:0,gp:0,gb:0,gm:0,lb:0,lm:0,lp:0,sec:0,done:0,plays:0};
 rs.forEach(r=>{g.learned+=r.learned.length;g.known+=Object.values(r.st).filter(v=>v===1).length;Object.values(r.games||{}).forEach(o=>{g.gp+=o.plays;g.gb+=o.best;g.gm+=o.max});g.lb+=r.listen.best;g.lm+=r.listen.max;g.lp+=r.listen.listens;g.sec+=r.sec||0;g.done+=r.done?1:0});return g}
function reportData(){let rs=allRecs();if(AS.repClass)rs=rs.filter(r=>r.c===AS.repClass);const q=AS.repQ.trim().toLowerCase();if(q)rs=rs.filter(r=>(r.n+" "+r.c).toLowerCase().includes(q));
 const by=(f)=>{const m={};rs.forEach(r=>{(m[f(r)]=m[f(r)]||[]).push(r)});return Object.entries(m)};
 const gcols=["Số từ đã học","Số từ nhớ","Số lần chơi game","Điểm game TB (%)","Điểm Listen & Fill (%)","Số lần nghe","Thời gian học (phút)","Bài hoàn thành"];
 const gv=a=>[a.learned,a.known,a.gp,pct(a.gb,a.gm),pct(a.lb,a.lm),a.lp,Math.round(a.sec/60),a.done];
 if(AS.rep==="student")return{head:["Học sinh","Lớp","Số bài",...gcols],rows:by(r=>r.n+"|"+r.c).map(([k,a])=>[a[0].n,a[0].c,a.length,...gv(agg(a))])};
 if(AS.rep==="class")return{head:["Lớp","Số học sinh","Số bài",...gcols],rows:by(r=>r.c).map(([k,a])=>[k,new Set(a.map(r=>r.n)).size,a.length,...gv(agg(a))])};
 if(AS.rep==="lesson")return{head:["Bài học","Số học sinh",...gcols],rows:by(r=>r.lesson).map(([k,a])=>[lessonShort(k),new Set(a.map(r=>r.n+r.c)).size,...gv(agg(a))])};
 if(AS.rep==="game"){const rows=[];GORDER.forEach(t=>{const a=rs.filter(r=>r.games&&r.games[t]);if(!a.length)return;let p=0,b=0,m=0;a.forEach(r=>{p+=r.games[t].plays;b+=r.games[t].best;m+=r.games[t].max});rows.push([GAMEDEF[t].name,new Set(a.map(r=>r.n+r.c)).size,p,pct(b,m)])});return{head:["Trò chơi","Số học sinh chơi","Số lần chơi","Điểm cao nhất TB (%)"],rows}}
 return{head:["Học sinh","Lớp","Bài học","Điểm (đúng/tổng)","Số lần kiểm tra","Số lần nghe"],rows:rs.filter(r=>r.listen.max).map(r=>[r.n,r.c,lessonShort(r.lesson),r.listen.best+"/"+r.listen.max,r.listen.plays,r.listen.listens])}}
function reportAdm(){const rs=allRecs(),classes=[...new Set(rs.map(r=>r.c))].sort(),d=reportData();
 return `<p class="muted">Kết quả ESL được lưu trên trình duyệt của từng học sinh, riêng với kết quả KHTN. Bảng dưới là dữ liệu có trên thiết bị này.</p>
 <div class="row" style="margin-bottom:8px"><span class="seg">${[["student","Học sinh"],["class","Lớp"],["lesson","Bài học"],["game","Game"],["listen","Nghe"]].map(([k,n])=>`<button class="${AS.rep===k?"on":""}" onclick="ESL.rep('${k}')">${n}</button>`).join("")}</span>
 <select onchange="ESL.repClass(this.value)"><option value="">Tất cả lớp</option>${classes.map(c=>`<option ${AS.repClass===c?"selected":""}>${esc(c)}</option>`).join("")}</select><input type="text" id="repq" placeholder="Tìm học sinh…" value="${esc(AS.repQ)}" oninput="ESL.repQ(this.value)"><label><input type="checkbox" ${AS.repTest?"checked":""} onchange="ESL.repTest(this.checked)"> Gồm bài thử nghiệm</label><button class="btn sm" onclick="ESL.repCsv()">⬇ Xuất CSV (Excel)</button></div>
 ${d.rows.length?`<div style="overflow:auto"><table class="t"><tr>${d.head.map(h=>`<th>${esc(h)}</th>`).join("")}</tr>${d.rows.map(r=>`<tr>${r.map(c=>`<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</table></div>`:`<div class="empty">Chưa có kết quả nào.</div>`}`}
E.rep=k=>{AS.rep=k;reload()};E.repClass=v=>{AS.repClass=v;reload()};E.repTest=v=>{AS.repTest=v;reload()};
E.repQ=v=>{AS.repQ=v;const t=G("eadm");if(t){t.innerHTML=reportAdm();const i=G("repq");if(i){i.focus();i.setSelectionRange(v.length,v.length)}}};
E.repCsv=()=>{const d=reportData(),q=c=>'"'+String(c).replace(/"/g,'""')+'"';download(new Blob(["﻿"+[d.head,...d.rows].map(r=>r.map(q).join(",")).join("\r\n")],{type:"text/csv;charset=utf-8"}),"bao-cao-esl-"+AS.rep+".csv")};

/* ---------- 6. Dữ liệu: xuất bản, sao lưu, giọng đọc ---------- */
const bytes=()=>JSON.stringify(DATA).length;
function dataAdm(){const b=bytes(),vs=voices(),big=b>60*1048576;
 return `<div class="grid2"><div class="card"><h3>📤 Xuất bản nội dung ESL</h3><p>${DATA.words.length} từ · ${DATA.sents.length} câu · ${Object.keys(DATA.listen).length} bài nghe · Dung lượng <b class="${big?"bad2":"ok2"}">${(b/1048576).toFixed(2)} MB</b></p><p class="muted">Bấm nút dưới để tải <b>esl-data.json</b>, rồi tải lên GitHub <b>cùng thư mục với index.html</b> và tệp <b>esl.js</b>. Tệp này cũng là bản sao lưu nội dung ESL.${big?"<br><b class='bad2'>Tệp lớn – nên bỏ bớt audio tải lên.</b>":""}</p><div class="row"><button class="btn" onclick="ESL.exportJson()">⬇ Tải esl-data.json</button></div></div>
 <div class="card"><h3>📂 Nhập / khôi phục</h3><p class="muted">Nhập tệp esl-data.json đã sao lưu. Nội dung hiện tại sẽ bị thay thế.</p><div class="row"><button class="btn sec" onclick="G_('eimp').click()">📂 Chọn tệp JSON</button><input type="file" id="eimp" accept=".json,application/json" class="hidden" onchange="ESL.importJson(this.files[0]);this.value=''"><button class="btn red sm" onclick="ESL.reset()">↺ Xóa hết nội dung ESL</button></div></div>
 <div class="card"><h3>🔊 Giọng đọc tự động</h3><p class="muted">Dùng khi từ/câu chưa có tệp audio. Mỗi thiết bị có giọng khác nhau – nên tải audio cho nội dung quan trọng.</p>${vs.length?`<div class="fg"><label>Giọng đọc</label><select id="evo" onchange="ESL.setVoice()"><option value="">Tự chọn (en-US)</option>${vs.map(v=>`<option value="${esc(v.name)}" ${DATA.cfg.voice===v.name?"selected":""}>${esc(v.name)} (${esc(v.lang)})</option>`).join("")}</select></div>`:`<p class="muted">Trình duyệt này chưa có giọng tiếng Anh.</p>`}<div class="fg"><label>Tốc độ đọc: <b id="evl">${DATA.cfg.rate}</b></label><input type="range" id="evr" min=".5" max="1.3" step=".05" value="${DATA.cfg.rate}" oninput="ESL.setVoice()"></div><button class="btn sm" onclick="ESL.u.say('The cell is the basic unit of life.',1)">▶ Nghe thử</button></div></div>`}
E.setVoice=()=>{const v=G("evo"),r=G("evr");if(v)DATA.cfg.voice=v.value;DATA.cfg.rate=num(r.value,.9,.5,1.3);G("evl").textContent=DATA.cfg.rate;save()};
E.exportJson=()=>{DATA.savedAt=Date.now();try{localStorage.setItem(KEY_EDIT,String(DATA.savedAt));localStorage.setItem(KEY_PUB,String(Date.now()))}catch(e){}flush();
 download(new Blob([JSON.stringify(DATA)],{type:"application/json"}),"esl-data.json");toast("✅ Đã tạo esl-data.json. Hãy tải tệp này lên GitHub.");reload()};
E.importJson=f=>{if(!f)return;const r=new FileReader();r.onload=()=>{try{const d=JSON.parse(r.result);if(!d||d.app!=="khtn-esl")return toast("Tệp không đúng định dạng ESL","err");
  if(!confirm(`Tệp có ${(d.words||[]).length} từ, ${(d.sents||[]).length} câu. Nhập sẽ THAY THẾ nội dung ESL hiện tại. Tiếp tục?`))return;DATA=norm(d);save();toast("✅ Đã nhập dữ liệu ESL");reload()}catch(e){toast("Không đọc được tệp","err")}};r.readAsText(f)};
E.reset=()=>{if(!confirm("Xóa TẤT CẢ nội dung ESL? Nên tải esl-data.json sao lưu trước."))return;DATA=blank();save();reload()};


/* ---------- 7. Câu hỏi & game (ngân hàng item từ Excel: xem, sửa, xóa) ---------- */
const TYPES=[["quiz","Quiz (trắc nghiệm)"],["fill","Fill (điền từ ___)"],["scramble","Scramble (sắp xếp câu)"],["odd","OddOneOut"],["tf","TrueFalse"],["fix","FixMistake"]];
const ansShow=x=>{const a=x.a||{};return a.quiz||a.fill||a.odd||a.fix||(typeof a.tf==="boolean"?(a.tf?"TRUE":"FALSE"):"")||(x.sentence||"")};
function itemsAdm(l){const it=DATA.items[l.id]||[],pr=DATA.pairs[l.id]||[];
 return `<div class="row"><button class="btn" onclick="ESL.itForm()">➕ Thêm câu hỏi / game</button><button class="btn sec" onclick="ESL.prForm()">🔗 Thêm cặp ghép</button><button class="btn sec" onclick="ESL.admTab('i')">📥 Nhập hàng loạt từ Excel</button></div>
 <p class="muted" style="margin:8px 0">Bài ${l.no}: <b>${it.filter(x=>x.types.includes("quiz")).length}</b> câu trắc nghiệm · <b>${it.length}</b> mục tổng · <b>${pr.length}</b> cặp ghép. Các mục này tự được dùng trong tab QUIZ và các game tương ứng.</p>
 ${it.length?`<div style="overflow:auto"><table class="t"><tr><th>Loại</th><th>Câu hỏi / câu</th><th>Đáp án</th><th></th></tr>${it.map(x=>`<tr><td>${x.types.map(t=>`<span class="erev s">${esc(t)}</span>`).join(" ")}</td><td>${esc((x.q||x.sentence||"").slice(0,90))}</td><td>${esc(String(ansShow(x)).slice(0,50))}</td><td style="white-space:nowrap"><button class="btn sm sec" onclick="ESL.itForm('${x.id}')">✏</button> <button class="btn sm red" onclick="ESL.itDel('${x.id}')">🗑</button></td></tr>`).join("")}</table></div>`:`<div class="empty">Chưa có mục nào. Thêm tại đây hoặc nhập từ Excel.</div>`}
 ${pr.length?`<h4 style="margin:12px 0 4px">🔗 Cặp ghép</h4><table class="t"><tr><th>Vế trái</th><th>Vế phải</th><th></th></tr>${pr.map((p,i)=>`<tr><td>${esc(p.l)}</td><td>${esc(p.r)}</td><td><button class="btn sm sec" onclick="ESL.prForm(${i})">✏</button> <button class="btn sm red" onclick="ESL.prDel(${i})">🗑</button></td></tr>`).join("")}</table>`:""}`}
E.itDel=id=>{if(!confirm("Xóa mục này?"))return;DATA.items[AS.lesson]=(DATA.items[AS.lesson]||[]).filter(x=>x.id!==id);save();reload()};
E.itForm=id=>{const x=id?(DATA.items[AS.lesson]||[]).find(y=>y.id===id):{types:["quiz"],opts:[],odd:[],a:{}};const o=x.opts||[],od=x.odd||[],a=x.a||{};
 const ansLetter=(arr,t)=>{const i=arr.findIndex(z=>cmp(z,t));return i>=0?"ABCD"[i]:""};
 modal(`<h3>${id?"✏ Sửa":"➕ Thêm"} câu hỏi / game</h3><div class="fg"><label>Dùng cho game (chọn một hoặc nhiều)</label><div class="row">${TYPES.map(([k,n])=>`<label class="chip"><input type="checkbox" name="itt" value="${k}" ${x.types.includes(k)?"checked":""}> ${n}</label>`).join("")}</div></div>
 ${fld("Câu hỏi / nhận định / câu có ___ / câu sai",`<textarea id="itq" style="width:100%;min-height:60px">${esc(x.q||"")}</textarea>`)}
 <div class="gfl">${[0,1,2,3].map(i=>`<div class="fg"><label>Option ${"ABCD"[i]}</label><input type="text" id="ito${i}" value="${esc(o[i]||"")}"></div>`).join("")}${[0,1,2,3].map(i=>`<div class="fg"><label>Odd ${"ABCD"[i]} (OddOneOut)</label><input type="text" id="itd${i}" value="${esc(od[i]||"")}"></div>`).join("")}</div>
 ${fld("Answer – Quiz: A/B/C/D · Fill: từ cần điền · OddOneOut: A/B/C/D · TrueFalse: TRUE/FALSE · FixMistake: câu đúng",`<input type="text" id="ita" style="width:100%" value="${esc(x.raw||ansLetter(o,a.quiz)||a.fill||ansLetter(od,a.odd)||(typeof a.tf==="boolean"?(a.tf?"TRUE":"FALSE"):"")||a.fix||"")}">`)}
 ${fld("Sentence (Scramble) – câu đúng",`<input type="text" id="its_" style="width:100%" value="${esc(x.sentence||"")}">`)}${fld("Words (Scramble) – các cụm từ ngăn bằng |, bỏ trống = tách theo từ",`<input type="text" id="itw" style="width:100%" value="${esc((x.chunks||[]).join("|"))}">`)}
 ${fld("Hint (gợi ý)",`<input type="text" id="ith" style="width:100%" value="${esc(x.hint||"")}">`)}${fld("Explanation (giải thích)",`<input type="text" id="itx" style="width:100%" value="${esc(x.expl||"")}">`)}
 <div class="row"><button class="btn" onclick="ESL.itSave('${id||""}')">💾 Lưu</button><button class="btn sec" onclick="closeModal()">Hủy</button></div>`,true)};
E.itSave=id=>{const types=[...document.querySelectorAll('input[name="itt"]:checked')].map(e=>e.value);if(!types.length)return toast("Hãy chọn ít nhất một loại game","err");
 const v=k=>G(k).value.trim(),opts=[0,1,2,3].map(i=>v("ito"+i)).filter(Boolean),odd=[0,1,2,3].map(i=>v("itd"+i)).filter(Boolean),raw=v("ita"),q=v("itq"),sentence=v("its_"),chunks=v("itw").split("|").map(s=>s.trim()).filter(Boolean);
 const pickL=(arr)=>{const i="ABCD".indexOf(raw.toUpperCase());return /^[A-D]$/i.test(raw)&&arr[i]!==undefined?arr[i]:""},a={};
 const err=[];
 if(types.includes("quiz")){a.quiz=pickL(opts);if(!q||opts.length<2||!a.quiz)err.push("Quiz cần câu hỏi, ≥2 option và Answer là A–D")}
 if(types.includes("fill")){a.fill=/^[A-D]$/i.test(raw)&&opts.length?pickL(opts):raw;if(!/_{2,}/.test(q)||!a.fill)err.push("Fill cần câu có ___ và đáp án")}
 if(types.includes("scramble")){if(!sentence)err.push("Scramble cần Sentence")}
 if(types.includes("odd")){a.odd=pickL(odd);if(odd.length<3||!a.odd)err.push("OddOneOut cần ≥3 Odd và Answer A–D")}
 if(types.includes("tf")){const t=/^(true|t|dung|đúng|yes|1)$/i.test(raw),f=/^(false|f|sai|no|0)$/i.test(raw);if(!q||(!t&&!f))err.push("TrueFalse cần nhận định và Answer TRUE/FALSE");a.tf=t}
 if(types.includes("fix")){a.fix=raw;if(!q||!raw)err.push("FixMistake cần câu sai và câu đúng")}
 if(err.length)return toast(err[0],"err");
 const item={id:id||uid("i"),types,q,opts,odd,a,raw,sentence,chunks,hint:v("ith"),expl:v("itx"),src:"m",img:""};const arr=DATA.items[AS.lesson]||(DATA.items[AS.lesson]=[]);
 if(id){const k=arr.findIndex(y=>y.id===id);item.src=arr[k].src||"m";item.img=arr[k].img||"";arr[k]=item}else arr.push(item);save();closeModal();toast("✅ Đã lưu");reload()};
E.prForm=i=>{const p=i!=null?DATA.pairs[AS.lesson][i]:{};modal(`<h3>${i!=null?"✏ Sửa":"🔗 Thêm"} cặp ghép</h3>${fld("Vế trái (LeftItem)",`<input type="text" id="pl" style="width:100%" value="${esc(p.l||"")}">`)}${fld("Vế phải (RightItem)",`<input type="text" id="pr" style="width:100%" value="${esc(p.r||"")}">`)}${fld("Hint",`<input type="text" id="ph" style="width:100%" value="${esc(p.hint||"")}">`)}<div class="row"><button class="btn" onclick="ESL.prSave(${i!=null?i:-1})">💾 Lưu</button><button class="btn sec" onclick="closeModal()">Hủy</button></div>`)};
E.prSave=i=>{const l=G("pl").value.trim(),r=G("pr").value.trim();if(!l||!r)return toast("Cần nhập cả hai vế","err");const arr=DATA.pairs[AS.lesson]||(DATA.pairs[AS.lesson]=[]),o={l,r,hint:G("ph").value.trim()};i>=0?arr[i]=o:arr.push(o);save();closeModal();reload()};
E.prDel=i=>{DATA.pairs[AS.lesson].splice(i,1);save();reload()};

/* =====================================================================
   NHẬP NHANH: 1 workbook Excel cho cả lớp (khung English Game Lab) + ghép ảnh/audio/video theo tên tệp
   Sheets: Keywords · Sentences · Listening · Quiz · GameData · MatchPairs · Games
   ===================================================================== */
const rmDia=s=>String(s||"").normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/đ/gi,"d").toLowerCase();
const slug=s=>rmDia(s).replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"");
const hk=h=>rmDia(h).replace(/\(.*?\)/g,"").replace(/[^a-z0-9]/g,"");
const GAMEKEY=[["pairs",["pair","ghep cap"]],["odd",["odd","khac loai"]],["tf",["true","false","tf","dung sai"]],["fix",["fix","sua"]],["order",["order","scramble","sap xep"]],["fill",["fill","dien tu"]],["search",["search","tim tu"]],["flip",["flip","lat the"]],["guess",["guess","doan"]],["match",["match","ghep"]]];
function gameFromCell(v){const s=rmDia(v).trim();if(!s)return null;const m=/^(\d+)/.exec(s);if(m&&GPLAY[+m[1]-1])return GPLAY[+m[1]-1];for(const[k,ws]of GAMEKEY)if(ws.some(x=>s.includes(x)))return k;return null}
const lessonByNo=(g,n)=>lessonsOf(g).find(l=>String(l.no)===String(parseInt(n,10)));
const yes=v=>/^(x|1|co|yes|y|true|on tap)$/i.test(rmDia(v).trim());
const TMAP=s=>{s=rmDia(s).replace(/[^a-z]/g,"");return s.startsWith("quiz")?"quiz":s.startsWith("fill")?"fill":s.startsWith("scramble")?"scramble":s.startsWith("odd")?"odd":(s.startsWith("true")||s==="tf"||s.startsWith("false"))?"tf":s.startsWith("fix")?"fix":""};
const SH={
 k:["Keywords",["Lesson (số bài)","English","IPA","Vietnamese","Example","Definition (optional)","Review (x)"],[12,22,22,26,44,40,12]],
 s:["Sentences",["Lesson (số bài)","Sentence","Vietnamese","Words (cụm từ ngăn bằng |, không bắt buộc)"],[12,56,50,50]],
 l:["Listening",["Lesson (số bài)","Title","Passage (đặt 5 từ cần ẩn trong [ ])","MaxPlays","Link1","Link2","Link3","Link4","Link5"],[12,28,90,10,24,24,24,24,24]],
 q:["Quiz",["Lesson (số bài)","Question","OptionA","OptionB","OptionC","OptionD","Answer (A/B/C/D)","Hint","Explanation"],[12,50,22,22,22,22,12,34,44]],
 d:["GameData",["Lesson (số bài)","ID","Topic","GameTypes","Question","ImageURL","OptionA","OptionB","OptionC","OptionD","Answer","Hint","Explanation","Sentence","Words","OddA","OddB","OddC","OddD","Difficulty"],[12,6,16,34,44,14,18,18,18,18,22,30,36,36,34,14,14,14,14,10]],
 p:["MatchPairs",["Lesson (số bài)","ID","Topic","LeftItem","RightItem","Hint"],[12,6,16,24,44,30]],
 g:["Games",["Lesson (số bài)","Game1","Game2","Game3","Game4"],[12,18,18,18,18]]};
const sheetOf=(k,rows)=>({name:SH[k][0],head:SH[k][1],rows,widths:SH[k][2]});
function catSh(g){const rows=[["Số bài","Tên bài","Chương"],...lessonsOf(g).map(l=>[l.no,l.name,l.ch.name])];return{name:"Lessons",xml:sheetXml(rows,{widths:[10,60,50],style:ri=>ri===0?1:2})}}
const GUIDE=["ESL – EXCEL TEMPLATE · HỆ THỐNG TỰ HỌC KHTN & SINH HỌC","",
"MỘT workbook dùng cho CẢ LỚP. Cột đầu của mọi trang là “Lesson (số bài)” – lấy số từ trang Lessons. Dòng “Ví dụ” được bỏ qua. Trang nào không dùng có thể để trống. Nhập lại nhiều lần an toàn.","",
"① Keywords – 5–10 từ khóa mỗi bài: English, IPA, Vietnamese, Example (câu ví dụ), Definition (mô tả tiếng Anh, tùy chọn). Review = x nếu là từ ôn tập (đã học ở bài khác).",
"② Sentences – mẫu câu đơn giản, đúng thứ tự muốn hiển thị. Cột Words (tùy chọn): các từ/cụm từ của câu, ngăn bằng | để dùng cho game sắp xếp, ví dụ: Cells|are|the basic units|of life. Bỏ trống = tách theo từng từ.",
"③ Listening – một dòng cho mỗi bài: đoạn văn ngắn, đặt 5 từ cần ẩn trong [ ], ví dụ: A [cell] has a [nucleus]. Cột Link1–Link5 (tùy chọn): link YouTube/Drive/.mp3/.mp4 cho chỗ trống số 1–5. Hoặc tải tệp ở tab Nhập nhanh: nghe1.mp4 … nghe5.mp4 (hay 1.mp4 … 5.mp4 với video).",
"④ Quiz – 5 câu trắc nghiệm đơn giản mỗi bài: Question, OptionA–D, Answer (A/B/C/D), Hint, Explanation. Dùng cho tab QUIZ.",
"⑤ GameData – khung English Game Lab: mỗi dòng là một câu/nhiệm vụ. GameTypes dùng mã (ngăn bằng ; ): Quiz · Fill · Scramble · OddOneOut · TrueFalse · FixMistake.",
"   Quiz: Question + OptionA–D + Answer (A–D) · Fill: Question có ___ + Answer (từ cần điền, hoặc A–D nếu có Option) · Scramble: Sentence (+ Words) · OddOneOut: OddA–OddD + Answer (A–D) · TrueFalse: Question + Answer TRUE/FALSE · FixMistake: Question (câu sai) + Answer (câu đúng).",
"⑥ MatchPairs – mỗi dòng là một cặp: LeftItem – RightItem (+ Hint). Nên 4–6 cặp mỗi bài.",
"⑦ Games – chọn 3–4 game cho từng bài (ghi tên hoặc số): 1 Match picture · 2 Guess · 3 Word Search · 4 Flip · 5 Fill · 6 Sentence Order · 7 Odd One Out · 8 True/False · 9 Fix Mistake · 10 Match Pairs. Bài không có dòng sẽ dùng bộ mặc định: Match + Flip + 2 game có dữ liệu từ GameData/MatchPairs.","",
"Gợi ý bộ học liệu gọn cho mỗi bài: 8–10 từ khóa · 3 mẫu câu · 1 đoạn nghe 5 chỗ trống · 5 câu Quiz · 4–6 dòng GameData (Scramble, Fill, TrueFalse, OddOneOut) · 4–6 cặp MatchPairs."];
E.tplXlsx=()=>{const g=AS.g,pad=n=>Array.from({length:n},()=>[""]);
 const sheets=[sheetOf("k",[["Ví dụ","cell","sel","tế bào","A cell is very small.","The basic unit of life.",""],["Ví dụ","nucleus","ˈnjuːkliəs","nhân tế bào","The nucleus controls the cell.","The control centre of the cell.",""],...pad(8)]),
  sheetOf("s",[["Ví dụ","Cells are the basic units of life.","Tế bào là đơn vị cơ bản của sự sống.","Cells|are|the basic units|of life"],...pad(3)]),
  sheetOf("l",[["Ví dụ","Listen and fill in","A [cell] is very small. The [nucleus] controls the cell. The [membrane] surrounds the cell. Cells need [energy] to [grow].",3,"","","","",""],...pad(2)]),
  sheetOf("q",[["Ví dụ","What is the function of the nucleus?","Makes energy","Controls cell activities","Stores water","Makes food","B","It controls the cell.","The nucleus contains genetic material."],...pad(4)]),
  sheetOf("d",[["Ví dụ",1,"Cell Biology","Fill;Quiz","The cell membrane ___ the cell.","","surrounds","controls","divides","colours","A","Think about the outer boundary.","The membrane surrounds the cell.","The cell membrane surrounds the cell.","The|cell membrane|surrounds|the cell","","","","","Easy"],
    ["Ví dụ",2,"Cell Biology","Scramble","Arrange the words to make a correct sentence.","","","","","","Cells are the basic units of life.","Start with 'Cells'.","This sentence describes cells.","Cells are the basic units of life.","Cells|are|the basic units|of life","","","","","Easy"],
    ["Ví dụ",3,"Cell Biology","OddOneOut","Find the odd one out.","","","","","","C","Three are cell parts.","Bicycle is not a cell part.","","","Nucleus","Cytoplasm","Bicycle","Cell membrane","Easy"],
    ["Ví dụ",4,"Cell Biology","TrueFalse","The nucleus controls cell activities.","","","","","","TRUE","Think about the function of the nucleus.","This statement is true.","","","","","","","Easy"],
    ["Ví dụ",5,"Cell Biology","FixMistake","Find and correct the mistake: The nucleus make energy for the cell.","","","","","","The nucleus controls cell activities.","Check the function.","The nucleus controls cell activities.","","","","","","","Medium"],...pad(6)]),
  sheetOf("p",[["Ví dụ",1,"Cell Biology","Nucleus","Controls cell activities","Think of the control centre."],["Ví dụ",2,"Cell Biology","Chloroplast","Site of photosynthesis","Green organelle"],...pad(6)]),
  sheetOf("g",[["Ví dụ","6 Sentence Order","5 Fill","8 True/False","10 Match Pairs"],...pad(3)]),catSh(g)];
 download(buildWorkbook(sheets,GUIDE),`Mau-ESL-${gName(g).replace(" ","")}.xlsx`);toast("✅ Đã tải mẫu Excel ESL. Điền xong thì tải lại ở tab này.")};

/* ---- xuất nội dung hiện có ra Excel ---- */
const bracketText=c=>{const toks=tok(c.text),hide=new Set(c.hide||[]);return toks.map((t,i)=>hide.has(i)?"["+t+"]":t).join("")};
function ansOf(x){if(x.raw)return x.raw;const a=x.a||{},L=(arr,t)=>{const i=arr.findIndex(z=>cmp(z,t));return i>=0?"ABCD"[i]:""};return a.quiz?L(x.opts||[],a.quiz):a.fill||(a.odd?L(x.odd||[],a.odd):"")||(typeof a.tf==="boolean"?(a.tf?"TRUE":"FALSE"):"")||a.fix||""}
E.exportXlsx=()=>{const g=AS.g,K=[],Sn=[],Li=[],Q=[],D=[],P=[],Gm=[];
 lessonsOf(g).forEach(l=>{lw(l.id).forEach(w=>K.push([l.no,w.en,w.ipa||"",w.vi,w.ex||"",w.def||"",w.rev?"x":""]));ls(l.id).forEach(s=>Sn.push([l.no,s.en,s.vi||"",(s.chunks||[]).join("|")]));
  const c=DATA.listen[l.id];if(c&&c.text){const cl=c.clips||{};Li.push([l.no,c.title||"",bracketText(c),c.maxPlays||0,...[1,2,3,4,5].map(k=>/^data:/.test(cl[k]||"")?"":(cl[k]||""))])}
  (DATA.items[l.id]||[]).forEach((x,i)=>{const o=x.opts||[],od=x.odd||[];if(x.src==="q")Q.push([l.no,x.q,o[0]||"",o[1]||"",o[2]||"",o[3]||"",ansOf(x),x.hint||"",x.expl||""]);
   else D.push([l.no,i+1,l.name,x.types.map(t=>({quiz:"Quiz",fill:"Fill",scramble:"Scramble",odd:"OddOneOut",tf:"TrueFalse",fix:"FixMistake"})[t]).join(";"),x.q||"","",o[0]||"",o[1]||"",o[2]||"",o[3]||"",ansOf(x),x.hint||"",x.expl||"",x.sentence||"",(x.chunks||[]).join("|"),od[0]||"",od[1]||"",od[2]||"",od[3]||"",""])});
  (DATA.pairs[l.id]||[]).forEach((p,i)=>P.push([l.no,i+1,l.name,p.l,p.r,p.hint||""]));
  const arr=DATA.games[l.id];if(Array.isArray(arr))Gm.push([l.no,...arr.filter(x=>x.type!=="quiz").map(x=>GAMEDEF[x.type].name)])});
 if(!(K.length+Sn.length+Li.length+Q.length+D.length+P.length))return toast("Lớp này chưa có nội dung ESL để xuất","err");
 download(buildWorkbook([sheetOf("k",K),sheetOf("s",Sn),sheetOf("l",Li),sheetOf("q",Q),sheetOf("d",D),sheetOf("p",P),sheetOf("g",Gm),catSh(g)],GUIDE),`ESL-${gName(g).replace(" ","")}-${new Date().toISOString().slice(0,10)}.xlsx`);toast("✅ Đã xuất nội dung ESL ra Excel (clip tải lên không nằm trong Excel)")};

/* ---- đọc Excel thành "kế hoạch nhập" ---- */
let PLAN=null;
const autoHide=(text,lid)=>{const parts=new Set();lw(lid).forEach(w=>w.en.toLowerCase().split(/\s+/).forEach(p=>parts.add(p)));const h=[];tok(text).forEach((t,i)=>{if(!ISWx(t))return;const x=t.toLowerCase();if(parts.has(x)||parts.has(x.replace(/(es|s)$/,"")))h.push(i)});return h};
function parseBracket(raw){let out="",i=0;const ranges=[];raw=String(raw||"");
 while(i<raw.length){const a=raw.indexOf("[",i);if(a<0){out+=raw.slice(i);break}const b=raw.indexOf("]",a);if(b<0){out+=raw.slice(i);break}out+=raw.slice(i,a);const s=out.length;out+=raw.slice(a+1,b);ranges.push([s,out.length]);i=b+1}
 const hide=[];let pos=0;tok(out).forEach((t,k)=>{const s=pos,e=pos+t.length;pos=e;if(ISWx(t)&&ranges.some(([a,b])=>s>=a&&e<=b))hide.push(k)});return{text:out,hide}}
function tableOf(sh){if(!sh||!sh.rows.length)return[];const keys=sh.rows[0].map(hk);return sh.rows.slice(1).map((r,i)=>{const o={};keys.forEach((k,j)=>{if(k&&o[k]===undefined)o[k]=r[j]});return{n:i+2,o}})}
const V_=(o,...ks)=>{for(const k of ks){const x=o[k];if(x!=null&&String(x).trim()!=="")return String(x).trim()}return""};
async function readPlan(file){const g=AS.g,sh=await xlsxSheets(await file.arrayBuffer()),P={g,words:[],sents:[],listen:[],items:[],pairs:[],games:[],errors:[],warns:[],lessons:new Set(),seen:{q:new Set(),g:new Set(),p:new Set()}};
 const find=re=>sh.find(x=>re.test(rmDia(x.name).trim()));
 const lessonOf=(o,name,n)=>{const raw=V_(o,"lesson","bai","baiso");if(/^(vi du|example)/.test(rmDia(raw)))return null;
  let l=null;if(raw)l=lessonByNo(g,raw);else{const t=V_(o,"topic");if(!t)return null;const T=rmDia(t);l=lessonsOf(g).find(x=>{const N=rmDia(x.name);return N===T||T.includes(N)})||(/(\d+)/.test(T)?lessonByNo(g,/(\d+)/.exec(T)[1]):null)}
  if(!l){P.errors.push(`Trang “${name}”, dòng ${n}: không tìm thấy bài “${raw||V_(o,"topic")}” ở ${gName(g)}.`);return null}P.lessons.add(l.id);return l};
 const each=(re,cb)=>{const x=find(re);if(!x)return;tableOf(x).forEach(({n,o})=>{const l=lessonOf(o,x.name,n);if(l)cb(l,o,n,x.name)})};
 each(/^(keywords?|tu khoa)/,(l,o,n)=>{const en=V_(o,"english","tuvung"),vi=V_(o,"vietnamese","nghia","nghiatiengviet");if(!en||!vi){P.errors.push(`Keywords, dòng ${n}: thiếu English hoặc Vietnamese.`);return}P.words.push({lid:l.id,en,ipa:V_(o,"ipa"),vi,ex:V_(o,"example","cauvidu"),def:V_(o,"definition","mota"),rev:yes(V_(o,"review","tuontap"))})});
 each(/^(sentences?|mau cau)/,(l,o,n)=>{const en=V_(o,"sentence","cautienganh");if(!en)return;const ch=V_(o,"words").split("|").map(s=>s.trim()).filter(Boolean);P.sents.push({lid:l.id,en,vi:V_(o,"vietnamese","nghia","nghiatiengviet"),chunks:ch.length>1?ch:[]})});
 each(/^(listening|nghe)/,(l,o,n)=>{const raw=V_(o,"passage","doanvan");if(!raw){P.errors.push(`Listening, dòng ${n}: thiếu đoạn văn (Passage).`);return}const hasB=/\[[^\]]+\]/.test(raw);let t=raw,h=null;if(hasB){const x=parseBracket(raw);t=x.text;h=x.hide}
  const clips={};[1,2,3,4,5].forEach(k=>{const u=V_(o,"link"+k);if(u)clips[k]=/^https?:/i.test(u)?u:"https://"+u});
  P.listen.push({lid:l.id,title:V_(o,"title","tieude")||"Listen and fill in the blanks",text:t,hide:h,maxPlays:Math.max(0,parseInt(V_(o,"maxplays","solannghe"),10)||0),clips});
  const nh=(h||autoHide(t,l.id)).length;if(nh!==5)P.warns.push(`${lessonShort(l.id)}: đoạn nghe có ${nh} chỗ trống (nên đúng 5).`)});
 each(/^(quiz|trac nghiem)/,(l,o,n)=>{const q=V_(o,"question","cauhoi");let raw4=[V_(o,"optiona"),V_(o,"optionb"),V_(o,"optionc"),V_(o,"optiond")],ans=V_(o,"answer","dapan"),a="";
  if(!raw4.some(Boolean)&&V_(o,"dapandung")){raw4=[V_(o,"dapandung"),V_(o,"sai1"),V_(o,"sai2"),V_(o,"sai3")];ans="A"}
  const opts=raw4.filter(Boolean);if(/^[A-D]$/i.test(ans))a=raw4["ABCD".indexOf(ans.toUpperCase())]||"";
  if(!q||opts.length<2||!a){P.errors.push(`Quiz, dòng ${n}: cần Question, ít nhất 2 Option và Answer là A–D trỏ tới option có nội dung.`);return}
  P.seen.q.add(l.id);P.items.push({id:uid("i"),lesson:l.id,src:"q",types:["quiz"],q,opts,odd:[],a:{quiz:a},raw:ans.toUpperCase(),sentence:"",chunks:[],hint:V_(o,"hint","goiy"),expl:V_(o,"explanation","giaithich"),img:""})});
 each(/^gamedata/,(l,o,n)=>{const types=V_(o,"gametypes").split(/[;,|\/]+/).map(TMAP).filter(Boolean);if(!types.length){P.errors.push(`GameData, dòng ${n}: GameTypes không hợp lệ (dùng Quiz; Fill; Scramble; OddOneOut; TrueFalse; FixMistake).`);return}
  const q=V_(o,"question"),raw4=[V_(o,"optiona"),V_(o,"optionb"),V_(o,"optionc"),V_(o,"optiond")],odd4=[V_(o,"odda"),V_(o,"oddb"),V_(o,"oddc"),V_(o,"oddd")],ans=V_(o,"answer"),sentence=V_(o,"sentence"),chunks=V_(o,"words").split("|").map(s=>s.trim()).filter(Boolean);
  const pk=(arr)=>/^[A-D]$/i.test(ans)?(arr["ABCD".indexOf(ans.toUpperCase())]||""):"",a={},ok=[];
  for(const t of types){if(t==="quiz"){const x=pk(raw4);if(q&&raw4.filter(Boolean).length>=2&&x){a.quiz=x;ok.push(t)}else P.warns.push(`GameData dòng ${n}: bỏ Quiz (thiếu Option hoặc Answer A–D).`)}
   else if(t==="fill"){const x=/^[A-D]$/i.test(ans)&&raw4.some(Boolean)?pk(raw4):ans;if(/_{2,}/.test(q)&&x&&!/^[A-D]$/.test(x)){a.fill=x;ok.push(t)}else P.warns.push(`GameData dòng ${n}: bỏ Fill (cần câu có ___ và đáp án).`)}
   else if(t==="scramble"){if(sentence){ok.push(t)}else P.warns.push(`GameData dòng ${n}: bỏ Scramble (thiếu Sentence).`)}
   else if(t==="odd"){const x=pk(odd4);if(odd4.filter(Boolean).length>=3&&x){a.odd=x;ok.push(t)}else P.warns.push(`GameData dòng ${n}: bỏ OddOneOut (cần ≥3 Odd và Answer A–D).`)}
   else if(t==="tf"){const T=rmDia(ans);if(q&&/^(true|t|dung|yes|1)$/.test(T)){a.tf=true;ok.push(t)}else if(q&&/^(false|f|sai|no|0)$/.test(T)){a.tf=false;ok.push(t)}else P.warns.push(`GameData dòng ${n}: bỏ TrueFalse (Answer phải là TRUE/FALSE).`)}
   else if(t==="fix"){if(q&&ans&&!/^[A-D]$/i.test(ans)){a.fix=ans;ok.push(t)}else P.warns.push(`GameData dòng ${n}: bỏ FixMistake (cần câu sai và câu đúng).`)}}
  if(!ok.length)return;P.seen.g.add(l.id);const img=V_(o,"imageurl");
  P.items.push({id:uid("i"),lesson:l.id,src:"g",types:ok,q,opts:raw4.filter(Boolean),odd:odd4.filter(Boolean),a,raw:ans,sentence,chunks:chunks.length>1?chunks:[],hint:V_(o,"hint"),expl:V_(o,"explanation"),img:/^https?:/i.test(img)?img:""})});
 each(/^matchpairs?/,(l,o,n)=>{const L=V_(o,"leftitem","left"),R=V_(o,"rightitem","right");if(!L||!R){P.errors.push(`MatchPairs, dòng ${n}: thiếu LeftItem hoặc RightItem.`);return}P.seen.p.add(l.id);P.pairs.push({lid:l.id,l:L,r:R,hint:V_(o,"hint")})});
 each(/^(games|tro choi)$/,(l,o,n,name)=>{const ts=[];["game1","game2","game3","game4","game5"].forEach(k=>{const c=V_(o,k);if(!c)return;const t=gameFromCell(c);if(!t)P.warns.push(`Games, dòng ${n}: không hiểu “${c}”.`);else if(!ts.includes(t))ts.push(t)});if(ts.length)P.games.push({lid:l.id,types:ts})});
 const nw={};P.words.forEach(w=>{if(!w.rev)nw[w.lid]=(nw[w.lid]||0)+1});Object.entries(nw).forEach(([k,v])=>{if(v>10)P.warns.push(`${lessonShort(k)}: ${v} từ khóa mới (nên 5–10).`)});
 const nq={};P.items.forEach(x=>{if(x.src==="q")nq[x.lesson]=(nq[x.lesson]||0)+1});Object.entries(nq).forEach(([k,v])=>{if(v!==5)P.warns.push(`${lessonShort(k)}: ${v} câu Quiz (nên 5).`)});
 P.words.forEach(w=>{const o=DATA.words.find(x=>x.en.toLowerCase()===w.en.toLowerCase()&&x.lesson!==w.lid);if(o&&!w.rev&&!P.words.some(x=>x!==w&&x.lid===o.lesson&&x.en.toLowerCase()===w.en.toLowerCase()))P.warns.push(`“${w.en}” đã có ở “${lessonShort(o.lesson)}” → sẽ nhập thành từ ÔN TẬP.`)});
 return P}
function applyPlan(P){let nw=0,uw=0,nr=0;
 P.words.forEach(w=>{const same=DATA.words.find(x=>x.lesson===w.lid&&x.en.toLowerCase()===w.en.toLowerCase());
  if(same){["ipa","vi","ex","def"].forEach(k=>{if(w[k])same[k]=w[k]});if(w.rev)same.rev=true;uw++}
  else{const other=DATA.words.find(x=>x.en.toLowerCase()===w.en.toLowerCase()),rev=w.rev||!!other;if(rev&&!w.rev)nr++;DATA.words.push({id:uid("w"),lesson:w.lid,en:w.en,ipa:w.ipa,vi:w.vi,ex:w.ex,def:w.def,img:"",audio:"",rev});nw++}});
 new Set(P.sents.map(s=>s.lid)).forEach(lid=>{const old=ls(lid);DATA.sents=DATA.sents.filter(s=>s.lesson!==lid);P.sents.filter(s=>s.lid===lid).forEach((s,i)=>DATA.sents.push({id:uid("s"),lesson:lid,en:s.en,vi:s.vi,chunks:s.chunks,audio:old[i]?old[i].audio||"":""}))});
 P.listen.forEach(c=>{const old=DATA.listen[c.lid]||{};const hide=c.hide||autoHide(c.text,c.lid);const clips=Object.assign({},old.clips||{},c.clips||{});DATA.listen[c.lid]={title:c.title,text:c.text,hide,maxPlays:c.maxPlays,rate:old.rate||1,bank:old.bank!==false,hint:old.hint!==false,showAns:!!old.showAns,audio:old.audio||"",clips}});
 ["q","g"].forEach(src=>P.seen[src].forEach(lid=>{DATA.items[lid]=(DATA.items[lid]||[]).filter(x=>(x.src||"m")!==src)}));
 P.items.forEach(x=>{(DATA.items[x.lesson]||(DATA.items[x.lesson]=[])).push(x)});
 P.seen.p.forEach(lid=>{DATA.pairs[lid]=P.pairs.filter(p=>p.lid===lid).map(p=>({l:p.l,r:p.r,hint:p.hint}))});
 P.games.forEach(x=>{const old=Array.isArray(DATA.games[x.lid])?DATA.games[x.lid]:[];DATA.games[x.lid]=x.types.map(t=>old.find(y=>y.type===t)||{type:t,cfg:gcfgDefault(t)})});
 save();return{nw,uw,nr}}
E.xlsPick=async el=>{const f=el.files[0];el.value="";if(!f)return;if(!/\.xlsx$/i.test(f.name))return toast("Hãy chọn tệp .xlsx (Excel). Tệp .xls cũ: mở và “Lưu thành” .xlsx.","err");
 try{PLAN=await readPlan(f);PLAN.name=f.name;E.admin()}catch(e){console.error(e);toast("Không đọc được tệp: "+e.message,"err")}};
E.planApply=()=>{if(!PLAN)return;const P=PLAN,r=applyPlan(P);toast(`✅ Đã nhập: ${r.nw} từ mới${r.uw?`, ${r.uw} từ cập nhật`:""}${r.nr?`, ${r.nr} từ ôn tập`:""}, ${P.sents.length} câu, ${P.listen.length} bài nghe, ${P.items.length} mục Quiz/GameData, ${P.pairs.length} cặp ghép`);PLAN=null;E.admin()};
E.planCancel=()=>{PLAN=null;E.admin()};

/* ---- ghép ảnh / audio / video theo tên tệp ---- */
let MEDIA=[];
const isImg=f=>/^image\//.test(f.type)||/\.(png|jpe?g|gif|webp|bmp)$/i.test(f.name),isAud=f=>/^audio\//.test(f.type)||/\.(mp3|wav|m4a|ogg|oga|aac)$/i.test(f.name),isVid=f=>/^video\//.test(f.type)||/\.(mp4|webm|mov|m4v)$/i.test(f.name);
function matchFile(f,lessonId){const base=f.name.replace(/\.[^.]+$/,"");let b=slug(base),lid=lessonId,pref="";
 const m=/^b(\d+)-(.+)$/.exec(b);if(m){const l=lessonByNo(AS.g,m[1]);if(!l)return{f,ok:false,why:`Không có bài số ${m[1]}`};lid=l.id;b=m[2];pref=` (bài ${m[1]})`}
 if(!lid)return{f,ok:false,why:"Chưa chọn bài (hoặc đặt tên B3_từ.jpg)"};
 const img=isImg(f),aud=isAud(f),vid=isVid(f);if(!img&&!aud&&!vid)return{f,ok:false,why:"Không phải ảnh/audio/video"};
 const ws=lw(lid),sn=ls(lid),c=DATA.listen[lid];let k;
 const clip=n=>c?(n>=1&&n<=Math.max(5,(c.hide||[]).length)?{f,ok:true,t:{k:"clip",lid,n},desc:`Clip chỗ trống số ${n} của bài nghe${pref}`}:{f,ok:false,why:"Số chỗ trống không hợp lệ"}):{f,ok:false,why:"Bài này chưa có hoạt động Nghe & điền từ"};
 if((aud||vid)&&(k=/^(?:nghe|listen|listening|o|blank|clip|cho)-?(\d+)$/.exec(b)))return clip(+k[1]);
 if(vid&&(k=/^(\d+)$/.exec(b)))return clip(+k[1]);
 if(aud&&/^(nghe|listen|listening|doan-van|passage|reading|bai-doc|doc|audio)$/.test(b))return c?{f,ok:true,t:{k:"listen",lid},desc:`Audio cả đoạn nghe${pref}`}:{f,ok:false,why:"Bài này chưa có hoạt động Nghe & điền từ"};
 if(vid)return{f,ok:false,why:"Video: đặt tên nghe1…nghe5 hoặc 1…5"};
 if((k=/^(?:t|tu|w|word)-?(\d+)$/.exec(b))||(img&&(k=/^(\d+)$/.exec(b)))){const n=+k[1],w=ws[n-1];return w?{f,ok:true,t:{k:img?"wimg":"waud",id:w.id},desc:`${img?"Hình":"Audio"} của từ ${n}: ${w.en}${pref}`}:{f,ok:false,why:`Bài chỉ có ${ws.length} từ`}}
 if(aud&&(k=/^(?:c|cau|s|sent|sentence)?-?(\d+)$/.exec(b))){const n=+k[1],s=sn[n-1];return s?{f,ok:true,t:{k:"saud",id:s.id},desc:`Audio mẫu câu ${n}: “${s.en.slice(0,28)}…”${pref}`}:{f,ok:false,why:`Bài chỉ có ${sn.length} mẫu câu`}}
 const w=ws.find(x=>slug(x.en)===b);if(w)return{f,ok:true,t:{k:img?"wimg":"waud",id:w.id},desc:`${img?"Hình":"Audio"} của từ “${w.en}”${pref}`};
 return{f,ok:false,why:"Tên không khớp từ khóa nào của bài"+(pref||" đã chọn")}}
E.mediaPick=el=>{MEDIA=[...el.files].map(f=>matchFile(f,AS.lesson));el.value="";E.admin()};
E.mediaApply=async()=>{let n=0;const ok=MEDIA.filter(m=>m.ok),btn=G("mapply");
 for(let i=0;i<ok.length;i++){const m=ok[i],t=m.t;if(btn)btn.textContent=`⏳ ${i+1}/${ok.length}…`;
  try{if(t.k==="wimg")wById(t.id).img=await shrinkImage(await readDataURL(m.f),560,.8);
   else{const d=await readDataURL(m.f);if(t.k==="waud")wById(t.id).audio=d;else if(t.k==="saud")DATA.sents.find(s=>s.id===t.id).audio=d;else if(t.k==="listen")DATA.listen[t.lid].audio=d;else if(t.k==="clip"){const c=DATA.listen[t.lid];c.clips=c.clips||{};c.clips[t.n]=d}}n++}catch(e){console.warn(e)}}
 save();MEDIA=[];toast(`✅ Đã ghép ${n}/${ok.length} tệp`);E.admin()};
E.mediaCancel=()=>{MEDIA=[];E.admin()};

/* ---- giao diện tab Nhập nhanh ---- */
function importAdm(l){const P=PLAN,cnt={};if(P)P.items.forEach(x=>x.types.forEach(t=>cnt[t]=(cnt[t]||0)+1));
 const planUI=P?`<div class="card" style="border:2px solid #86efac"><h3>🔍 Xem trước: ${esc(P.name)}</h3><p>Áp dụng cho <b>${esc(gName(P.g))}</b> · ${P.lessons.size} bài: <b>${P.words.length}</b> từ khóa · <b>${P.sents.length}</b> mẫu câu · <b>${P.listen.length}</b> bài nghe · <b>${P.items.filter(x=>x.src==="q").length}</b> câu Quiz · GameData: ${Object.entries(cnt).filter(([t])=>t!=="quiz"||P.items.some(x=>x.src==="g"&&x.types.includes("quiz"))).map(([t,v])=>`${t} ${v}`).join(", ")||"0"} · <b>${P.pairs.length}</b> cặp ghép · <b>${P.games.length}</b> bài chọn game.</p>
  ${P.errors.length?`<div class="efb hint"><b>${P.errors.length} lỗi (các dòng này bị bỏ qua):</b><br>${P.errors.slice(0,12).map(esc).join("<br>")}</div>`:""}${P.warns.length?`<div class="efb hint"><b>Lưu ý:</b><br>${P.warns.slice(0,14).map(esc).join("<br>")}</div>`:""}
  <div class="row" style="margin-top:8px"><button class="btn" onclick="ESL.planApply()" ${P.words.length+P.sents.length+P.listen.length+P.items.length+P.pairs.length+P.games.length?"":"disabled"}>✅ Nhập vào hệ thống</button><button class="btn sec" onclick="ESL.planCancel()">Hủy</button></div></div>`:"";
 const mUI=MEDIA.length?`<div class="card" style="border:2px solid #86efac"><h3>🔍 Xem trước ghép tệp</h3><div style="max-height:300px;overflow:auto"><table class="t"><tr><th>Tệp</th><th>Sẽ ghép vào</th></tr>${MEDIA.map(m=>`<tr><td>${esc(m.f.name)}</td><td>${m.ok?`✅ ${esc(m.desc)}`:`<span class="bad2">⚠ ${esc(m.why)}</span>`}</td></tr>`).join("")}</table></div><div class="row" style="margin-top:8px"><button class="btn" id="mapply" onclick="ESL.mediaApply()" ${MEDIA.some(m=>m.ok)?"":"disabled"}>✅ Ghép ${MEDIA.filter(m=>m.ok).length} tệp</button><button class="btn sec" onclick="ESL.mediaCancel()">Hủy</button></div></div>`:"";
 return `<p class="muted">Soạn học liệu nhanh: <b>1 workbook Excel cho cả lớp</b> + <b>chọn nhiều ảnh/audio/video một lần</b>. Đang làm việc với <b>${esc(gName(AS.g))}</b>${l?` · bài đã chọn: <b>${esc(lessonShort(l.id))}</b>`:""}.</p>
 ${planUI}${mUI}
 <div class="grid2"><div class="card"><h3>① Excel – 5 mục của một bài ESL</h3><table class="t" style="font-size:13px;margin-bottom:8px"><tr><th>Trang</th><th>Nội dung</th></tr><tr><td><b>Keywords</b></td><td>5–10 từ khóa</td></tr><tr><td><b>Sentences</b></td><td>Mẫu câu (+ cụm từ để sắp xếp)</td></tr><tr><td><b>Listening</b></td><td>Đoạn văn 5 chỗ trống [ ] + link clip 1–5</td></tr><tr><td><b>Quiz</b></td><td>5 câu trắc nghiệm</td></tr><tr><td><b>GameData</b></td><td>Fill · Scramble · OddOneOut · TrueFalse · FixMistake · Quiz</td></tr><tr><td><b>MatchPairs</b></td><td>Ghép cặp</td></tr><tr><td><b>Games</b></td><td>Chọn game cho từng bài</td></tr></table><div class="row"><button class="btn" onclick="ESL.tplXlsx()">⬇ Tải mẫu Excel</button><button class="btn blue" onclick="G_('xlsIn').click()">📤 Tải Excel lên</button><button class="btn sec" onclick="ESL.exportXlsx()">📑 Xuất nội dung hiện có ra Excel</button><input type="file" id="xlsIn" accept=".xlsx" class="hidden" onchange="ESL.xlsPick(this)"></div><p class="muted" style="font-size:13px;margin-top:8px">Khung GameData/MatchPairs giữ đúng cột của file English Game Lab (thêm cột Lesson). Nhập lại nhiều lần an toàn, hình/audio đã ghép được giữ.</p></div>
 <div class="card"><h3>② Ảnh, audio, video – ghép tự động theo tên tệp</h3><p class="muted" style="margin:0 0 6px">Chọn <b>bài ở trên</b>, rồi chọn nhiều tệp một lần:</p><table class="t" style="font-size:13px"><tr><th>Tên tệp</th><th>Ghép vào</th></tr>
 <tr><td><code>cell.jpg</code> · <code>cell.mp3</code></td><td>Hình / audio của từ <b>cell</b></td></tr><tr><td><code>1.jpg</code> … <code>10.jpg</code></td><td>Hình của từ thứ 1…10</td></tr><tr><td><code>1.mp3</code> … <code>5.mp3</code></td><td>Audio <b>mẫu câu</b> thứ 1…5</td></tr><tr><td><code>nghe1.mp4</code> … <code>nghe5.mp4</code><br><code>1.mp4</code> … <code>5.mp4</code> (video)</td><td><b>Clip chỗ trống số 1…5</b> của bài nghe (audio hoặc video)</td></tr><tr><td><code>nghe.mp3</code></td><td>Audio cả đoạn nghe</td></tr><tr><td><code>B3_cell.jpg</code></td><td>Từ cell của <b>bài 3</b> (không cần chọn bài)</td></tr></table>
 <div class="row" style="margin-top:8px"><button class="btn blue" onclick="G_('medIn').click()">🖼🎵🎬 Chọn nhiều tệp</button><input type="file" id="medIn" accept="image/*,audio/*,video/*" multiple class="hidden" onchange="ESL.mediaPick(this)"></div><p class="muted" style="font-size:13px;margin-top:8px">Video nặng làm tệp dữ liệu rất lớn: nên dùng clip ngắn hoặc dán link YouTube/Drive ở cột Link1–Link5. Không có clip thì máy đọc câu chứa chỗ trống.</p></div></div>`}

/* ---------- kết thúc module ---------- */
})();
