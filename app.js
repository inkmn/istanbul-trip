/* Истанбул 8: апп логик */
(function(){
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const P=Object.fromEntries(PLACES.map(p=>[p.id,p]));
const IMG=k=>`img/${k}.jpg`;
const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const CAT={see:["🏛️","Үзмэр"],mosque:["🕌","Сүм"],museum:["🖼️","Музей"],market:["🛍️","Зах"],food:["🍽️","Ресторан"],cafe:["☕","Кафе"],hammam:["🧖‍♀️","Хамам"],show:["🎭","Үзүүлбэр"],transport:["🚋","Тээвэр"],area:["🏘️","Хороолол"]};
const CATCOL={see:"#c8962e",mosque:"#1f7a8c",museum:"#6a4c93",market:"#b23a48",food:"#e07a2f",cafe:"#8a5a2b",hammam:"#2e7d5b",show:"#8e3b8e",transport:"#0f2a44",area:"#3a7ca5"};
const WX={rain:"🌧️",heavy:"⛈️",light:"🌦️",good:"🌤️"};
const gm=q=>`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
const dirs=(lat,lng,mode)=>`https://www.google.com/maps/dir/?api=1&origin=${TRIP.hotel.lat},${TRIP.hotel.lng}&destination=${lat},${lng}&travelmode=${mode||'walking'}`;
const dirsTransit=(lat,lng)=>`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=transit`;
let fx={...TRIP.fx}, cur=localStorage.getItem('cur')||'try';
const money=t=>{ if(cur==='eur') return (t/fx.eur_try).toFixed(0)+' €'; if(cur==='mnt') return Math.round(t*fx.try_mnt/1000)+'k ₮'; return t.toLocaleString('en')+' ₺'; };
const istNow=()=>{ const s=new Date().toLocaleString('en-US',{timeZone:'Europe/Istanbul',hour12:false}); return new Date(s); };
const istDate=()=>{ const d=istNow(); return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'); };
const wxIcon=w=> w.mm>=20?'⛈️': w.mm>=5?'🌧️': w.mm>=1?'🌦️': w.p>=50?'⛅':'🌤️';
const DOW=['Ня','Да','Мя','Лх','Пү','Ба','Бя'];

/* ---------- theme ---------- */
const th=localStorage.getItem('theme'); if(th) document.documentElement.dataset.theme=th;
$('#themeBtn').onclick=()=>{ const cur=document.documentElement.dataset.theme; const dark=cur?cur==='dark':matchMedia('(prefers-color-scheme:dark)').matches; const n=dark?'light':'dark'; document.documentElement.dataset.theme=n; localStorage.setItem('theme',n); };

/* ---------- nav ---------- */
let map=null;
function show(v){ $$('.view').forEach(e=>e.classList.toggle('on',e.id==='v-'+v)); $$('.nav button').forEach(b=>b.classList.toggle('on',b.dataset.v===v)); history.replaceState(null,'','#'+v); window.scrollTo(0,0); if(v==='map') initMap(); }
$$('.nav button').forEach(b=>b.onclick=()=>show(b.dataset.v));

/* ---------- place sheet ---------- */
function placeChip(id){ const p=P[id]; if(!p) return ''; return `<a class="pl" href="#" data-place="${id}"><img src="${IMG(p.img)}" alt="" loading="lazy">${esc(p.name)} ›</a>`; }
function openPlace(id){
  const p=P[id]; if(!p) return;
  const c=CAT[p.cat]||["📍",""];
  const days=DAYS.filter(d=>d.slots.some(s=>s.place===id||(s.places||[]).includes(id))).map(d=>`<span class="pill">${d.dow} ${d.date.slice(5).replace('-','.')}</span>`).join('');
  $('#sheet').innerHTML=`<div class="grab"></div><button class="close" id="shClose">✕</button>
  <div class="pic"><img src="${IMG(p.img)}" alt="${esc(p.name)}" data-lb="${p.img}"><span class="cat">${c[0]} ${c[1]}</span></div>
  <div class="body"><h2>${esc(p.name)}</h2><div class="tr">${esc(p.tr)} ${days}</div>
  <div class="kv"><b>Цаг</b><span>${esc(p.hours)}</span>${p.closed?`<b>Хаалттай</b><span style="color:var(--red)">${esc(p.closed)}</span>`:''}<b>Үнэ</b><span>${esc(p.price)}</span></div>
  <p>${p.desc}</p>
  ${p.tips&&p.tips.length?`<h3 style="font-size:15px;margin-top:10px">💡 Зөвлөгөө</h3><ul>${p.tips.map(t=>`<li>${t}</li>`).join('')}</ul>`:''}
  <div class="btns"><a class="btn" href="${dirs(p.lat,p.lng,'walking')}" target="_blank" rel="noopener">🚶 Буудлаас зам</a><a class="btn alt" href="${dirsTransit(p.lat,p.lng)}" target="_blank" rel="noopener">🚋 Нийтийн тээвэр</a></div>
  <div class="btns"><a class="btn ghost" href="${gm(p.q||p.name)}" target="_blank" rel="noopener">📍 Google Maps</a>${p.site?`<a class="btn ghost" href="${p.site}" target="_blank" rel="noopener">🌐 Вэб хуудас</a>`:''}<button class="btn ghost" data-mapgo="${id}">🗺️ Зураг дээр</button></div>
  <div class="sub" style="font-size:12px;margin-top:6px">Зураг: Wikimedia Commons, ${esc(CREDITS[p.img]||'')}</div></div>`;
  $('#sheet').scrollTop=0; $('#sheet').classList.add('on'); $('#sheetBg').classList.add('on');
  $('#shClose').onclick=closeSheet;
  $('[data-mapgo]').onclick=()=>{ closeSheet(); show('map'); setTimeout(()=>{ map.setView([p.lat,p.lng],16); markers[id]&&markers[id].openPopup(); },150); };
}
function closeSheet(){ $('#sheet').classList.remove('on'); $('#sheetBg').classList.remove('on'); }
$('#sheetBg').onclick=closeSheet;
document.addEventListener('click',e=>{
  const a=e.target.closest('[data-place]'); if(a){ e.preventDefault(); openPlace(a.dataset.place); return; }
  const l=e.target.closest('[data-lb]'); if(l){ $('#lbImg').src=IMG(l.dataset.lb); $('#lbCap').textContent='Wikimedia Commons · '+(CREDITS[l.dataset.lb]||''); $('#lb').classList.add('on'); return; }
  if(e.target.closest('#lb')) $('#lb').classList.remove('on');
});
/* swipe down to close sheet */
let sy=0; $('#sheet').addEventListener('touchstart',e=>{sy=e.touches[0].clientY;},{passive:true});
$('#sheet').addEventListener('touchend',e=>{ if($('#sheet').scrollTop<=0 && e.changedTouches[0].clientY-sy>90) closeSheet(); },{passive:true});

/* ---------- HOME ---------- */
function renderHome(){
  const now=istNow(), today=istDate();
  const dep=new Date(TRIP.flight.dep); let ms=dep-new Date(); if(ms<0) ms=0;
  const dd=Math.floor(ms/864e5), hh=Math.floor(ms%864e5/36e5), mm=Math.floor(ms%36e5/6e4);
  const td=DAYS.find(d=>d.date===today);
  const tIdx=DAYS.findIndex(d=>d.date===today);
  const w=TRIP.weatherStatic.find(x=>x.d===today);
  const pr=TRIP.prayer.find(x=>x.d===today);
  const nowMin=now.getHours()*60+now.getMinutes();
  let todayHtml='';
  if(td){
    const cur=td.slots.filter(s=>{const [h,m]=s.t.split(':').map(Number);return h*60+m<=nowMin;}).pop();
    const next=td.slots.find(s=>{const [h,m]=s.t.split(':').map(Number);return h*60+m>nowMin;});
    todayHtml=`<div class="card"><h2>${WX[td.wx]} Өнөөдөр: ${td.dow}, ${td.title}</h2>
      ${cur?`<div class="sub">Одоо</div><div style="font-weight:700;font-size:16px">${cur.t} · ${esc(cur.title)}</div>`:''}
      ${next?`<div class="sub" style="margin-top:6px">Дараа нь</div><div style="font-weight:700">${next.t} · ${esc(next.title)}</div>`:''}
      ${pr?`<div class="sub" style="margin-top:8px">🕌 Мөргөл: Өглөө ${pr.g} · Үд ${pr.o} · Үдээс хойш ${pr.i} · Орой ${pr.a} · Шөнө ${pr.y}${pr.note?`<br><span style="color:var(--red)">${pr.note}</span>`:''}</div>`:''}
      <div class="btns"><button class="btn" data-day="${td.id}">📅 Өнөөдрийн хөтөлбөр</button></div></div>`;
  } else {
    todayHtml=`<div class="card"><h2>Аялал ${new Date()<new Date('2026-10-13')?'эхлээгүй':'дууссан'}</h2><div class="sub">Истанбулын цаг: ${now.toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'})}</div></div>`;
  }
  $('#c-home').innerHTML=`
  <div class="hero"><img src="${IMG('bosphorus')}" alt="Босфор" data-lb="bosphorus"><div class="cap"><h2>Истанбул, 8 эмэгтэйн аялал</h2><p>2026.10.13 (Мя) – 10.19 (Да) · Күчүк Аясофья буудал</p></div></div>
  <div class="count"><div><b>${dd}</b><span>хоног</span></div><div><b>${hh}</b><span>цаг</span></div><div><b>${mm}</b><span>мин</span></div><div style="background:var(--teal)"><b>✈️</b><span>TK236 Да 18:30</span></div></div>
  ${todayHtml}
  <div class="card"><h2>🌦️ Цаг агаар, 7 хоног <span class="sub" id="wxSrc" style="font-weight:400;font-size:12px">(урьдчилсан, 10.13)</span></h2><div class="wx" id="wx">${wxGrid(TRIP.weatherStatic,today)}</div>
    <div class="warn" style="margin-top:10px">Лх, Пү хүчтэй бороо, салхи 33–35 км/ц: шүхэр биш, бүрээстэй куртка. Дотор үзмэрүүд (Цөөрөм, Топкапы, музей, хамам) тэр өдрүүдэд.</div></div>
  <div class="card"><h2>💱 Ханш <span class="sub" id="fxSrc" style="font-weight:400;font-size:12px">(10.13)</span></h2>
    <div class="stats"><div class="stat"><b id="fx1">${fx.try_mnt}</b><span>₮ / 1 ₺</span></div><div class="stat"><b id="fx2">${fx.eur_try}</b><span>₺ / 1 €</span></div><div class="stat"><b id="fx3">${fx.usd_try}</b><span>₺ / 1 $</span></div></div>
    <div class="sub" style="margin-top:8px">Валют: Их зах, Хипподромын döviz цэгүүд (банкнаас сайн, комиссгүй). Картаар төлөхөд ₺-өөр (TRY) сонго, 'DCC' биш.</div></div>
  <div class="card"><h2>📊 Товч</h2><div class="stats"><div class="stat"><b>7</b><span>өдөр</span></div><div class="stat"><b>${PLACES.length}</b><span>газар</span></div><div class="stat"><b>≈38.5k ₺</b><span>хүнд (≈2.8M ₮)</span></div></div>
    <div class="sub" style="margin-top:8px">Дундаж олон улсын жуулчны зарцуулалт ≈ 100–130 €/өдөр, буудлаас гадуур. Хэмнэлттэй хувилбар ≈ 23,000 ₺. Тооцоолуур: Бусад → Төсөв.</div></div>
  <div class="card"><h2>⚡ Хурдан</h2><div class="btns">
    <a class="btn" href="${gm('Yusuf Aşkın Sokak 16 Küçük Ayasofya Fatih')}" target="_blank" rel="noopener">🏨 Буудал руу</a>
    <a class="btn alt" href="https://www.bitaksi.com/" target="_blank" rel="noopener">🚕 BiTaksi</a></div>
    <div class="btns"><a class="btn red" href="tel:112">🚨 112 яаралтай</a><a class="btn ghost" href="tel:155">👮 155 цагдаа</a></div>
    <div class="sub" style="margin-top:6px">Буудлын хаяг таксичинд: <b>Yusuf Aşkın Sokak 16, Küçük Ayasofya</b> (Sultanahmet).</div></div>
  <div class="card"><h2>🗓️ 7 өдөр</h2>${DAYS.map((d,i)=>`<div class="row" data-day="${d.id}" style="cursor:pointer"><img src="${IMG(d.img)}" alt="" loading="lazy"><div><div class="n">${WX[d.wx]} ${d.dow} ${d.date.slice(5).replace('-','.')} · ${esc(d.title)}</div><div class="d">${d.slots.length} алхам · ${esc(d.total)}</div></div></div>`).join('')}</div>
  <div class="foot">Зургууд: Wikimedia Commons (CC). Үнэ, цаг 2026.10.13-ны байдлаар, өөрчлөгдөж болно.</div>`;
  $$('#c-home [data-day]').forEach(e=>e.onclick=()=>{ show('days'); renderDay(e.dataset.day); });
}
function wxGrid(arr,today){ return arr.map(w=>{ const d=new Date(w.d+'T12:00:00'); return `<div class="${w.d===today?'today':''}"><div class="d">${DOW[d.getDay()]} ${d.getDate()}</div><div class="i">${wxIcon(w)}</div><div class="t">${w.hi}°<span style="color:var(--mute)">/${w.lo}°</span></div><div class="p">${w.p}% ${w.mm}мм</div><div class="p">💨${w.wind}</div></div>`; }).join(''); }
async function liveWeather(){
  try{ const r=await fetch('https://api.open-meteo.com/v1/forecast?latitude=41.0082&longitude=28.9784&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max,wind_speed_10m_max&timezone=Europe%2FIstanbul&start_date=2026-10-13&end_date=2026-10-19'); const j=await r.json();
    const arr=j.daily.time.map((t,i)=>({d:t,hi:Math.round(j.daily.temperature_2m_max[i]),lo:Math.round(j.daily.temperature_2m_min[i]),p:j.daily.precipitation_probability_max[i]??0,mm:Math.round(j.daily.precipitation_sum[i]),wind:Math.round(j.daily.wind_speed_10m_max[i])}));
    if(arr.length&&$('#wx')){ $('#wx').innerHTML=wxGrid(arr,istDate()); $('#wxSrc').textContent='(шууд, Open-Meteo)'; }
  }catch(e){}
}
async function liveFx(){
  try{ const r=await fetch('https://open.er-api.com/v6/latest/TRY'); const j=await r.json(); if(j.result==='success'){ fx.try_mnt=Math.round(j.rates.MNT); fx.eur_try=+(1/j.rates.EUR).toFixed(1); fx.usd_try=+(1/j.rates.USD).toFixed(1);
    if($('#fx1')){ $('#fx1').textContent=fx.try_mnt; $('#fx2').textContent=fx.eur_try; $('#fx3').textContent=fx.usd_try; $('#fxSrc').textContent='(шууд, '+j.time_last_update_utc.slice(5,16)+')'; } } }catch(e){}
}

/* ---------- DAYS ---------- */
let curDay=null;
function renderDayChips(){ $('#dayChips').innerHTML=DAYS.map(d=>`<button class="chip" data-d="${d.id}">${d.dow} ${d.date.slice(8)}<small>${WX[d.wx]} ${esc(d.title.split(',')[0])}</small></button>`).join(''); $$('#dayChips .chip').forEach(b=>b.onclick=()=>renderDay(b.dataset.d)); }
function renderDay(id){
  curDay=id; const d=DAYS.find(x=>x.id===id); const today=istDate()===d.date; const now=istNow(); const nowMin=now.getHours()*60+now.getMinutes();
  $$('#dayChips .chip').forEach(b=>b.classList.toggle('on',b.dataset.d===id));
  const chip=$(`#dayChips .chip[data-d="${id}"]`); chip&&chip.scrollIntoView({inline:'center',block:'nearest',behavior:'smooth'});
  const w=TRIP.weatherStatic.find(x=>x.d===d.date); const pr=TRIP.prayer.find(x=>x.d===d.date);
  let curIdx=-1; if(today) d.slots.forEach((s,i)=>{const [h,m]=s.t.split(':').map(Number); if(h*60+m<=nowMin) curIdx=i;});
  const i=DAYS.indexOf(d);
  $('#c-day').innerHTML=`
  <div class="hero" style="aspect-ratio:16/9"><img src="${IMG(d.img)}" alt="" data-lb="${d.img}"><div class="cap"><h2>${d.dow}, ${d.date.slice(5).replace('-','.')}</h2><p>${esc(d.title)}</p></div></div>
  <div style="display:flex;flex-wrap:wrap;gap:4px;margin:0 0 6px">${w?`<span class="pill">${wxIcon(w)} ${w.hi}°/${w.lo}° · ${w.p}% · ${w.mm} мм</span>`:''}<span class="pill gold">💰 ${esc(d.total)}</span>${pr?`<span class="pill">🕌 ${pr.o} · ${pr.i} · ${pr.a}</span>`:''}</div>
  ${pr&&pr.note?`<div class="warn">${pr.note}</div>`:''}
  <div class="card">${d.slots.map((s,k)=>`<div class="slot ${k===curIdx?'now-slot':''}"><div class="tm ${k===curIdx?'now':''}">${s.t}</div><div>
      <div class="tt">${esc(s.title)}${s.cost?`<span class="cost">${esc(s.cost)}</span>`:''}</div>
      ${s.html?`<div class="tx">${s.html}</div>`:''}
      ${[s.place,...(s.places||[])].filter(Boolean).map(placeChip).join('')}
      ${s.route?`<details><summary>🧭 ${esc(s.route.label)}</summary><ol>${s.route.steps.map(x=>`<li>${x}</li>`).join('')}</ol>${s.route.alt?`<p class="alt">${s.route.alt}</p>`:''}</details>`:''}
    </div></div>`).join('')}</div>
  ${d.alt?`<div class="card"><h2>🔄 Хувилбар</h2><div style="font-size:14px">${d.alt}</div></div>`:''}
  <div class="btns"><button class="btn ghost" ${i===0?'disabled':''} data-nav="${i-1}">‹ Өмнөх</button><button class="btn" data-mapday="${d.id}">🗺️ Зураг дээр</button><button class="btn ghost" ${i===DAYS.length-1?'disabled':''} data-nav="${i+1}">Дараах ›</button></div>`;
  $$('#c-day [data-nav]').forEach(b=>b.onclick=()=>{ if(!b.disabled){ renderDay(DAYS[+b.dataset.nav].id); window.scrollTo(0,0);} });
  $('#c-day [data-mapday]').onclick=()=>{ show('map'); setMapDay(d.id); };
  const ns=$('#c-day .now-slot'); if(ns) setTimeout(()=>ns.scrollIntoView({block:'center',behavior:'smooth'}),100);
}

/* ---------- PLACES ---------- */
let catF='all';
function renderCatChips(){ const cats=['all',...Object.keys(CAT)]; $('#catChips').innerHTML=cats.map(c=>`<button class="chip ${c===catF?'on':''}" data-c="${c}">${c==='all'?'Бүгд':CAT[c][0]+' '+CAT[c][1]}</button>`).join(''); $$('#catChips .chip').forEach(b=>b.onclick=()=>{catF=b.dataset.c; renderCatChips(); renderPlaces();}); }
function renderPlaces(){
  const q=($('#q').value||'').toLowerCase();
  const list=PLACES.filter(p=>(catF==='all'||p.cat===catF)&&(!q||(p.name+' '+p.tr+' '+p.desc).toLowerCase().includes(q)));
  $('#c-places').innerHTML=list.map(p=>`<div class="tile" data-place="${p.id}"><img src="${IMG(p.img)}" alt="" loading="lazy"><span class="b">${CAT[p.cat][0]} ${CAT[p.cat][1]}</span><div class="t">${esc(p.name)}<small>${esc(p.price)}</small></div></div>`).join('')||'<div class="sub">Олдсонгүй</div>';
}
$('#q').oninput=renderPlaces;

/* ---------- MAP ---------- */
let markers={}, dayLine=null, meMarker=null;
function dayPlaceIds(d){ const ids=[]; d.slots.forEach(s=>[s.place,...(s.places||[])].forEach(x=>{ if(x&&P[x]&&!ids.includes(x)) ids.push(x); })); return ids; }
function initMap(){
  if(map){ setTimeout(()=>map.invalidateSize(),50); return; }
  map=L.map('mapEl',{zoomControl:false}).setView([41.012,28.98],13);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© OpenStreetMap contributors',maxZoom:19}).addTo(map);
  L.control.zoom({position:'topright'}).addTo(map);
  PLACES.forEach(p=>{ const ic=L.divIcon({className:'',html:`<div class="mk" style="background:${CATCOL[p.cat]}"><span>${CAT[p.cat][0]}</span></div>`,iconSize:[30,30],iconAnchor:[15,30],popupAnchor:[0,-28]});
    const m=L.marker([p.lat,p.lng],{icon:ic}).addTo(map).bindPopup(`<b>${esc(p.name)}</b><br><span style="color:#666">${esc(p.price)}</span><br><button data-place="${p.id}">Дэлгэрэнгүй ›</button>`); markers[p.id]=m; });
  L.marker([TRIP.hotel.lat,TRIP.hotel.lng],{icon:L.divIcon({className:'',html:'<div class="mk" style="background:#b23a48;width:36px;height:36px"><span>🏨</span></div>',iconSize:[36,36],iconAnchor:[18,36]}),zIndexOffset:1000}).addTo(map).bindPopup('<b>Буудал</b><br>Yusuf Aşkın Sk. 16');
  const Me=L.Control.extend({onAdd(){ const b=L.DomUtil.create('button'); b.innerHTML='⌖'; b.style.cssText='width:34px;height:34px;font-size:20px;background:#fff;border:2px solid rgba(0,0,0,.2);border-radius:4px;cursor:pointer'; b.onclick=()=>navigator.geolocation&&navigator.geolocation.getCurrentPosition(pos=>{ const ll=[pos.coords.latitude,pos.coords.longitude]; if(meMarker) meMarker.setLatLng(ll); else meMarker=L.circleMarker(ll,{radius:9,color:'#fff',weight:3,fillColor:'#1a73e8',fillOpacity:1}).addTo(map).bindPopup('Та энд'); map.setView(ll,15); },()=>alert('Байршил авах боломжгүй')); return b; }});
  new Me({position:'topright'}).addTo(map);
  $('#mapChips').innerHTML=`<button class="chip on" data-md="all">Бүгд</button>`+DAYS.map(d=>`<button class="chip" data-md="${d.id}">${d.dow} ${d.date.slice(8)}</button>`).join('');
  $$('#mapChips .chip').forEach(b=>b.onclick=()=>setMapDay(b.dataset.md));
  setTimeout(()=>{map.invalidateSize(); setMapDay('all');},100);
}
function setMapDay(id){
  if(!map) initMap();
  $$('#mapChips .chip').forEach(b=>b.classList.toggle('on',b.dataset.md===id));
  if(dayLine){ map.removeLayer(dayLine); dayLine=null; }
  if(id==='all'){ Object.values(markers).forEach(m=>m.addTo(map)); map.fitBounds(L.latLngBounds(PLACES.filter(p=>!['airport','buyukada'].includes(p.id)).map(p=>[p.lat,p.lng])),{padding:[20,20]}); return; }
  const d=DAYS.find(x=>x.id===id); const ids=dayPlaceIds(d);
  Object.entries(markers).forEach(([k,m])=>{ if(ids.includes(k)) m.addTo(map); else map.removeLayer(m); });
  const pts=[[TRIP.hotel.lat,TRIP.hotel.lng],...ids.filter(k=>k!=='airport'&&k!=='hotel').map(k=>[P[k].lat,P[k].lng])];
  if(pts.length>1){ dayLine=L.polyline(pts,{color:'#1f7a8c',weight:3,dashArray:'6 6',opacity:.8}).addTo(map); map.fitBounds(dayLine.getBounds(),{padding:[30,30]}); }
}

/* ---------- MORE ---------- */
const BUDGET=[
  ["Тасалбар",[["Ая София (галерей)",1270,1],["Цөөрөм",1950,1],["Топкапы + Харем",2750,1],["Археологийн музей",760,1],["Хора сүм (хувилбар)",1150,0],["Галата цамхаг",1520,1],["Дервишийн сема",1600,1],["Босфорын тойрог",340,1],["Долмабахче",2650,1],["Cağaloğlu хамам",3500,1],["Охидын цамхаг (борооны хувилбар)",1620,0]]],
  ["Хоол",[["Мя: Balıkçı Sabahattin",1400,1],["Лх: Köftecisi + Matbah",1300,1],["Пү: Konyalı + Hamdi",1600,1],["Ба: Pandeli + Karaköy Lokantası",1800,1],["Бя: Çiya + kumpir + Neolokal",4950,1],["Ня: Milto + Asmalı Cavit",2200,1],["Да: өглөөний цай, хөнгөн хоол",500,1],["Өглөөний цай, зууш, цай/кофе ×7",2800,1]]],
  ["Тээвэр",[["Havaist IST→Aksaray (ирэх)",310,1],["Истанбулкарт ×7 өдөр",1100,1],["Гатлага онгоц: Кадыкөй, Бешикташ, Арлууд",550,1],["Такси хуваах (орой, бороо)",600,1],["Ван буудал→IST (хүнд)",440,1]]],
  ["Бусад",[["Бэлэг, lokum, баклава",2500,1],["Худалдаа (хувцас, керамик, …)",5000,0],["Нөөц (10%)",2500,1]]]
];
function renderMore(){
  const b=k=>{ const s=localStorage.getItem('b_'+k); return s===null?null:s==='1'; };
  const bud=BUDGET.map(([g,items],gi)=>`<h3>${g}</h3>${items.map(([n,v,def],ii)=>{const k=gi+'_'+ii; const on=b(k)??!!def; return `<div class="item"><input type="checkbox" data-bk="${k}" data-v="${v}" ${on?'checked':''}><span class="nm">${esc(n)}</span><span class="v">${money(v)}</span></div>`;}).join('')}`).join('');
  $('#c-more').innerHTML=`
  ${acc('🍽️ Хоол, амттан: юу идэх вэ', FOOD.map(f=>`<div class="row"><img src="${IMG(f.img)}" alt="" loading="lazy" data-lb="${f.img}"><div><div class="n">${esc(f.n)} <span class="pill">${esc(f.p)}</span></div><div class="d">${esc(f.d)}</div></div></div>`).join(''), true)}
  ${acc('🚋 Тээвэр: Истанбулкарт, трам, онгоц, такси', transportHtml())}
  ${acc('💰 Төсөв тооцоолуур (нэг хүнд)', `<div class="seg" id="curSeg"><button data-cur="try" class="${cur==='try'?'on':''}">₺ лир</button><button data-cur="eur" class="${cur==='eur'?'on':''}">€ евро</button><button data-cur="mnt" class="${cur==='mnt'?'on':''}">₮ төгрөг</button></div><div class="bud" id="bud">${bud}<div class="tot"><span>Нийт нэг хүнд</span><span id="budTot"></span></div><div class="sub" id="budAll"></div></div><div class="sub" style="margin-top:8px">Буудлын төлбөр ороогүй. Сонголтууд утсанд хадгалагдана.</div>`)}
  ${acc('✅ Шалгах хуудас', Object.entries(CHECKS).map(([g,items])=>`<h3>${esc(g)}</h3>${items.map((t,i)=>{const k='c_'+g+'_'+i; const on=localStorage.getItem(k)==='1'; return `<div class="ck ${on?'done':''}"><input type="checkbox" id="${k}" data-ck="${k}" ${on?'checked':''}><label for="${k}">${esc(t)}</label></div>`;}).join('')}`).join(''))}
  ${acc('🛍️ Худалдаа: юу, хаана', `<table><tr><th>Юу</th><th>Хаана</th><th>Үнэ</th></tr>${SHOP.map(s=>`<tr><td><b>${esc(s.n)}</b></td><td>${esc(s.w)}</td><td>${esc(s.p)}</td></tr>`).join('')}</table><div class="warn">Tax Free: нэг дэлгүүрт 1,200 ₺-ээс дээш, 'Tax Free' тэмдэгтэй дэлгүүрт паспортоор маягт авна. Нисэх буудалд бүртгэлийн ӨМНӨ гаалийн тамга, дараа нь буцаан олголтын цэг (Global Blue). Буцаалт ≈ 10–12%.</div>`)}
  ${acc('🗣️ Турк хэллэг', PHRASES.map(p=>`<div class="ph"><div><b>${esc(p[1])}</b><br><i>${esc(p[2])}</i></div><div>${esc(p[0])}</div></div>`).join(''))}
  ${acc('🛡️ Аюулгүй байдал, яаралтай', safetyHtml())}
  ${acc('🔗 Албан ёсны холбоосууд', LINKS.map(l=>`<div class="ck"><a href="${l[1]}" target="_blank" rel="noopener">${esc(l[0])} ↗</a></div>`).join(''))}
  ${acc('📷 Зургийн эх сурвалж', `<div class="sub">Бүх зураг Wikimedia Commons-оос, Creative Commons лицензтэй. Зохиогчид, лиценз файл бүрийн хуудсанд.</div>`+Object.entries(CREDITS).map(([k,f])=>`<div class="ck" style="font-size:12px"><a href="https://commons.wikimedia.org/wiki/File:${encodeURIComponent(f)}" target="_blank" rel="noopener">${esc(k)}: ${esc(f.slice(0,50))}${f.length>50?'…':''}</a></div>`).join(''))}
  <div class="foot">Истанбул 8 · 2026.10 · Үнэ, цагийн хуваарь өөрчлөгдөж болно, албан ёсны хуудаснаас шалга.</div>`;
  $$('#c-more .acc>button').forEach(b=>b.onclick=()=>b.parentElement.classList.toggle('open'));
  $$('#curSeg button').forEach(b=>b.onclick=()=>{cur=b.dataset.cur; localStorage.setItem('cur',cur); renderMore(); $$('#c-more .acc')[2].classList.add('open');});
  $$('[data-bk]').forEach(i=>i.onchange=()=>{ localStorage.setItem('b_'+i.dataset.bk,i.checked?'1':'0'); budTot(); });
  $$('[data-ck]').forEach(i=>i.onchange=()=>{ localStorage.setItem(i.dataset.ck,i.checked?'1':'0'); i.parentElement.classList.toggle('done',i.checked); });
  budTot();
}
function budTot(){ let t=0; $$('[data-bk]').forEach(i=>{ if(i.checked) t+=+i.dataset.v; }); const el=$('#budTot'); if(!el) return; el.textContent=money(t); $('#budAll').textContent=`= ${t.toLocaleString('en')} ₺ · ${(t/fx.eur_try).toFixed(0)} € · ${(t*fx.try_mnt/1e6).toFixed(2)} сая ₮ · 8 хүн нийт ≈ ${(t*8/1000).toFixed(0)}k ₺`; }
function acc(title,body,open){ return `<div class="acc ${open?'open':''}"><button>${title}</button><div>${body}</div></div>`; }
function transportHtml(){ return `
<h3>💳 Истанбулкарт</h3><p>3 карттай. Нэг картаар олон хүн дараалан хүрж болно (3+3+2). Нэг хүрэлт <b>46.20 ₺</b>, 2 цагийн дотор дамжих <b>34.40 ₺</b>. Цэнэглэх: буудал бүрийн шар машин (bilet matik), бэлэн мөнгөөр, 400–500 ₺ картанд. Өдөрт хүнд ≈ 150 ₺.</p>
<h3>🚋 T1 трам (Sultanahmet буудал, буудлаас 10 мин)</h3>
<table><tr><th>Kabataş чиглэл →</th><th>← Bağcılar чиглэл</th></tr><tr><td>1 Gülhane (Топкапы, музей)<br>2 Sirkeci (Hodjapasha)<br>3 <b>Eminönü</b> (онгоц, Амтлагчийн зах)<br>4 <b>Karaköy</b> (Галата, Tünel)<br>5 Tophane<br>6 Fındıklı<br>7 <b>Kabataş</b> (Долмабахче, Таксим F1)</td><td>1 Çemberlitaş<br>2 <b>Beyazıt-Kapalıçarşı</b> (Их зах)<br>3 Laleli<br>4 <b>Aksaray</b> (Havaist)</td></tr></table>
<p class="sub">05:00–00:00, 5–10 мин тутам. Оргил цагт шахцалдана, цүнхээ урдаа.</p>
<h3>⛴️ Гатлага онгоц (Şehir Hatları, 59 ₺, Истанбулкарт)</h3>
<table><tr><th>Чиглэл</th><th>Цаг</th><th>Үргэлжлэх</th></tr>
<tr><td>Eminönü → Kadıköy</td><td>Бя 09:35, 09:55, 10:15, цаашид 20 мин тутам</td><td>20–25 мин</td></tr>
<tr><td>Kadıköy → Beşiktaş</td><td>30 мин тутам</td><td>20 мин</td></tr>
<tr><td>Eminönü → Üsküdar</td><td>20 мин тутам</td><td>15 мин</td></tr>
<tr><td>Eminönü Boğaz Hattı (Босфор)</td><td>14:30 (хөлгөөс шалга)</td><td>2 цаг, 340 ₺</td></tr>
<tr><td>Turyol Eminönü → Büyükada</td><td>08:40, 09:40, 10:40</td><td>75 мин, ≈ 150–200 ₺</td></tr>
<tr><td>Turyol Büyükada → Eminönü</td><td>14:15, 15:15, 16:15, 17:00, 18:00</td><td>75 мин</td></tr>
<tr><td>Kabataş → Adalar (Şehir Hatları)</td><td>Ня 09:05, 12:05</td><td>105 мин, 137 ₺</td></tr>
<tr><td>Haliç: Eminönü → Fener/Balat</td><td>цагт 1</td><td>20 мин</td></tr></table>
<h3>🚌 Автобус (İETT)</h3><p>Eminönü → Balat: <b>99, 99A, 36CE</b> (Yeni Cami-гийн хажуугийн буудал). Beşiktaş → Ortaköy → Kabataş: <b>22, 25E, 40, 40T</b>. Урдаас сууж картаар хүрнэ.</p>
<h3>🚕 Такси</h3><p>Тоолуур: суух 35 ₺ + 23.6 ₺/км, хамгийн бага 100 ₺. 8 хүн = 2 такси. <b>BiTaksi</b> апп (картаар төлнө, маргаангүй). Султанахметын орчмын тоолуургүй таксиас татгалз: "Taksimetre, lütfen". Жишээ: буудал → Каракөй 150 ₺, → Хамам 100 ₺, → Chora 250 ₺, → Ortaköy 300 ₺.</p>
<h3>✈️ Нисэх буудал</h3><p><b>Havaist HVL-1</b> IST ↔ Aksaray, 20–30 мин тутам, 265–355 ₺, карт/Истанбулкарт (бэлэн мөнгө авахгүй), -2 давхар. 70–90 мин. Sultanahmet чиглэлийн Havaist зогссон. <b>Ван</b> 8 хүн + ачаа ≈ 3,500 ₺, 60–75 мин, буудлын хаалганаас. Такси ≈ 1,800 ₺ нэг машин (4 хүн).</p>
<h3>🚶 Алхах зай буудлаас</h3><p>Хөх сүм 7 мин · Ая София 11 мин · Трам 10 мин · Цөөрөм 12 мин · Топкапы хаалга 15 мин · Их зах 18 мин · Эминөнү 25 мин (эсвэл трам 3 буудал). Гудамж эгц, чулуун: тав тухтай гутал.</p>`; }
function safetyHtml(){ return `
<div class="btns"><a class="btn red" href="tel:112">🚨 112 (яаралтай, бүх төрөл)</a><a class="btn ghost" href="tel:155">👮 155 цагдаа</a></div>
<p><b>Жуулчны цагдаа</b> (Turizm Polisi) Султанахмет, Ая Софиягийн хажууд, Yerebatan Cd. 6, англиар ярьдаг.</p>
<p><b>Монгол Улсын ЭСЯ</b> Анкарад; Истанбулд консулын газаргүй. Утасны дугаарыг явахын өмнө ГХЯ-ны сайтаас шалгаж утсандаа хадгал.</p>
<h3>Түгээмэл заль</h3><ul>
<li><b>Истиклалын "найз"</b>: бар руу урьж, 20,000 ₺ тооцоо. Татгалз.</li>
<li><b>Гутал цэвэрлэгч</b> сойзоо "унагана", буцааж өгвөл "үнэгүй" цэвэрлээд мөнгө нэхнэ.</li>
<li><b>Такси</b> тоолуургүй, урт зам: BiTaksi.</li>
<li><b>Ресторан</b>: менютэй тооцоог тулга, "хүргэлтийн" зууш нэмж бичдэг. Загасны үнийг жингээр асуу.</li>
<li><b>Хивс</b>: "цайнд урих" = 2 цагийн борлуулалт.</li>
<li>Их захад, трам дээр цүнх урдаа, утсаа хойд халаасанд бүү хий.</li></ul>
<h3>Эрүүл мэнд</h3><p>Эмийн сан (Eczane) олон, улаан "E" тэмдэг; хувийн эмнэлэг: Acıbadem, American Hospital (Нишанташы). Ус: савласан, 20 ₺. Аяллын даатгалын дугаар утсанд.</p>
<h3>Сүмийн дэг</h3><p>Мөр, өвдөг халхалсан, эмэгтэйчүүд алчуур. Гутлаа тайлж уутанд. Мөргөлийн үеэр жуулчдыг оруулахгүй (30 мин өмнө, дараа). Баасан 12:00–14:30 Ая София, Хөх сүм хаалттай.</p>`; }

/* ---------- boot ---------- */
renderHome(); renderDayChips(); renderCatChips(); renderPlaces(); renderMore();
const todayD=DAYS.find(d=>d.date===istDate()); renderDay(todayD?todayD.id:'d1');
liveWeather(); liveFx();
const h=location.hash.replace('#',''); if(['home','days','places','map','more'].includes(h)) show(h); if(h.startsWith('p/')){ show('places'); setTimeout(()=>openPlace(h.slice(2)),200); } if(h.startsWith('d/')){ show('days'); renderDay(h.slice(2)); }
setInterval(()=>{ if($('#v-home').classList.contains('on')) renderHome(); },60000);
})();
