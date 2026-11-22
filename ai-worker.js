/* ai-worker.js – máy chủ trung gian cho khung "Hỏi trợ lý AI" (Cloudflare Workers, miễn phí)
   Khóa API được giữ trong Worker, KHÔNG nằm trong trang web nên học sinh không lấy được.

   CÁCH CÀI (khoảng 10 phút):
   1. Lấy khóa API tại console.anthropic.com (mục API keys). Nên đặt hạn mức chi tiêu hằng tháng ở mục Billing/Limits.
   2. Vào dash.cloudflare.com → Workers & Pages → Create → Create Worker → đặt tên (vd: bio-ai) → Deploy → Edit code.
   3. Xóa mã mẫu, dán toàn bộ file này vào → Deploy.
   4. Settings → Variables and Secrets → thêm:
        ANTHROPIC_API_KEY  (loại Secret)  = khóa API ở bước 1
        ALLOWED_ORIGIN     (loại Text)    = https://phamducsn-nbk.github.io   (địa chỉ trang của bạn, không có dấu / cuối)
   5. Chép địa chỉ Worker (dạng https://bio-ai.<tên>.workers.dev) → vào trang, đăng nhập Quản trị →
      dán vào ô "Link máy chủ AI" ở khung Hỏi trợ lý AI → bấm 💾 Sao lưu → lưu thành data.json → tải lên GitHub.
*/
const MODEL='claude-haiku-5-5';
const SYSTEM='Bạn là trợ lý học tập môn Khoa học tự nhiên và Sinh học cho học sinh Việt Nam (lớp 6–12). '
 +'Trả lời bằng tiếng Việt, đúng kiến thức chương trình, giải thích dễ hiểu, ngắn gọn (tối đa khoảng 150 từ), có ví dụ gần gũi khi cần. '
 +'Viết văn bản thường, không dùng ký hiệu markdown như #, *, **. '
 +'Chỉ trả lời các câu hỏi liên quan đến bài học và khoa học; với nội dung khác hãy lịch sự mời học sinh quay lại bài học. '
 +'Nếu học sinh nhờ giải thẳng đáp án bài kiểm tra, hãy gợi ý cách nghĩ thay vì chỉ đưa đáp án.';

const cut=(s,n)=>String(s==null?'':s).slice(0,n);

export default{
 async fetch(req,env){
  const allow=env.ALLOWED_ORIGIN||'https://phamducsn-nbk.github.io';
  const origin=req.headers.get('Origin')||'';
  const cors={'Access-Control-Allow-Origin':allow,'Access-Control-Allow-Methods':'POST, OPTIONS','Access-Control-Allow-Headers':'Content-Type','Vary':'Origin'};
  const out=(o,status=200)=>new Response(JSON.stringify(o),{status,headers:{...cors,'Content-Type':'application/json; charset=utf-8'}});

  if(req.method==='OPTIONS')return new Response(null,{status:204,headers:cors});
  if(req.method!=='POST')return out({error:'Method not allowed'},405);
  if(origin!==allow)return out({error:'Origin không được phép'},403);
  if(!env.ANTHROPIC_API_KEY)return out({error:'Chưa cài ANTHROPIC_API_KEY'},500);

  let b;try{b=JSON.parse(await req.text())}catch(e){return out({error:'Dữ liệu không hợp lệ'},400)}
  const q=cut(b.q,500).trim();if(!q)return out({error:'Thiếu câu hỏi'},400);

  const messages=[];
  (Array.isArray(b.history)?b.history.slice(-3):[]).forEach(h=>{
   const hq=cut(h&&h.q,500).trim(),ha=cut(h&&h.a,1500).trim();
   if(hq&&ha){messages.push({role:'user',content:hq});messages.push({role:'assistant',content:ha})}});
  messages.push({role:'user',content:'[Học sinh '+cut(b.grade,20)+', đang học bài "'+cut(b.lesson,120)+'"]\n'+q});

  try{
   const r=await fetch('https://api.anthropic.com/v1/messages',{method:'POST',
    headers:{'x-api-key':env.ANTHROPIC_API_KEY,'anthropic-version':'2023-06-01','content-type':'application/json'},
    body:JSON.stringify({model:env.MODEL||MODEL,max_tokens:500,system:SYSTEM,messages})});
   if(!r.ok)return out({error:'Trợ lý AI đang bận, thử lại sau.'},502);
   const j=await r.json();
   const text=(j.content||[]).filter(x=>x.type==='text').map(x=>x.text).join('\n').trim();
   return out({answer:text||'Mình chưa có câu trả lời, em thử hỏi lại nhé.'})}
  catch(e){return out({error:'Không kết nối được trợ lý AI.'},502)}
 }
};
