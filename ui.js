/* UI strings: mn / en / tr */
window.UI = {
mn: {
  title:"Истанбул 8", sub:"2026.10.13–19 · Истанбул, Азийн тал, арлууд", htmlLang:"mn",
  nav:{home:"Нүүр",days:"Өдрүүд",places:"Газрууд",map:"Зураг",more:"Бусад"},
  cat:{see:"Үзмэр",mosque:"Сүм",museum:"Музей",market:"Зах",food:"Ресторан",cafe:"Кафе",hammam:"Хамам",show:"Үзүүлбэр",transport:"Тээвэр",area:"Хороолол"},
  dow:['Ня','Да','Мя','Лх','Пү','Ба','Бя'], capp:"Каппадоки", istanbul:"Истанбул", all:"Бүгд", alt:"хувилбар",
  search:"Хайх: Ая София, kumpir, трам…", notFound:"Олдсонгүй", mapHint:"📍 тэмдэг дарж дэлгэрэнгүй. ⌖ товч: миний байршил.",
  hours:"Цаг", closed:"Хаалттай", price:"Үнэ", tips:"💡 Зөвлөгөө", fromHotel:"🚶 Буудлаас зам", fromCave:"🚐 Агуйн буудлаас", transit:"🚋 Нийтийн тээвэр", web:"🌐 Вэб хуудас", onMap:"🗺️ Зураг дээр", photo:"Зураг: Wikimedia Commons",
  heroT:"Истанбул, 8 эмэгтэй", heroS:"2026.10.13 (Мя) – 10.19 (Да) · Пү Кадыкөй, Ба Босфорын Азийн эрэг, Ня Бүйүкада",
  days_:"хоног", hrs:"цаг", mins:"мин", mmu:"мм", flight:"TK236 Да 18:30",
  today:"Өнөөдөр", now:"Одоо", next:"Дараа нь", prayer:"🕌 Мөргөл", pr:["Өглөө","Үд","Үдээс хойш","Орой","Шөнө"], todayPlan:"📅 Өнөөдрийн хөтөлбөр",
  notStarted:"Аялал эхлээгүй", ended:"Аялал дууссан", istTime:"Истанбулын цаг",
  weather:"🌦️ Цаг агаар, 7 хоног", wxStatic:"(урьдчилсан, 10.13)", wxLive:"(шууд, Open-Meteo)",
  wxNote:"Нар жаргах: Пү 18:24, Ба 18:22, Бя 18:20, Ня 18:19. Урьдчилсан мэдээ 10.14-ний байдлаар.", dawn:"",
  wxWarn:"Пү өглөө, Бя үд дунд ширүүн бороо (Бя 22 мм): бүрээстэй куртка, дотор үзвэрүүд. Баасан (Азийн эрэг) ба Ням (арал) хуурай: долоо хоногийн хамгийн сайн хоёр өдөр.",
  fx:"💱 Ханш", fxStatic:"(10.13)", fxLive:"(шууд, ", fxNote:"Валют: Их зах, Хипподромын döviz цэгүүд (банкнаас сайн, комиссгүй). Картаар төлөхөд ₺-өөр (TRY) сонго, 'DCC' биш.",
  summary:"📊 Товч", s1:"өдөр, Истанбул", s2:"газар", s3:"хүнд (≈ 685 € ≈ 2.85M ₮)",
  sumNote:"Истанбулын 6 бүтэн өдөр олон улсын жуулчны дундаж түвшинд (100–130 €/өдөр, байргүй): бүх ордон, музей, хамам, дервиш, Michelin оройн хоол орсон. Каппадокийг хассанаар хүнд ≈ 36,000 ₺ хэмнэгдсэн. Хэмнэлттэй ≈ 31,000 ₺. Тооцоолуур: Бусад → Төсөв.",
  quick:"⚡ Хурдан", toHotel:"🏨 Буудал руу", emerg:"🚨 112 яаралтай", police:"👮 155 цагдаа", addrNote:"Буудлын хаяг таксичинд: <b>Yusuf Aşkın Sokak 16, Küçük Ayasofya</b> (Sultanahmet).",
  sevenDays:"🗓️ 7 өдөр", steps:"алхам", foot:"Зургууд: Wikimedia Commons (CC). Үнэ, цаг 2026.10.13-ны байдлаар, өөрчлөгдөж болно.",
  altH:"🔄 Хувилбар", prev:"‹ Өмнөх", nextD:"Дараах ›", detail:"Дэлгэрэнгүй ›", hotel:"Буудал", youHere:"Та энд", noGeo:"Байршил авах боломжгүй",
  accFood:"🍽️ Хоол, амттан: юу идэх вэ", accTr:"🚋 Тээвэр: Истанбулкарт, трам, онгоц, такси", accBud:"💰 Төсөв тооцоолуур (нэг хүнд)", accCk:"✅ Шалгах хуудас", accShop:"🛍️ Худалдаа: юу, хаана", accPh:"🗣️ Турк хэллэг", accSafe:"🛡️ Аюулгүй байдал, яаралтай", accLinks:"🔗 Албан ёсны холбоосууд", accCred:"📷 Зургийн эх сурвалж",
  cur:["₺ лир","€ евро","₮ төгрөг"], total:"Нийт нэг хүнд", budAll:(t,e,m,a)=>`= ${t} ₺ · ${e} € · ${m} сая ₮ · 8 хүн нийт ≈ ${a}k ₺`, budNote:"Буудлын төлбөр ороогүй. Сонголтууд утсанд хадгалагдана.",
  shopH:["Юу","Хаана","Үнэ"], taxFree:"Tax Free: нэг дэлгүүрт 1,200 ₺-ээс дээш, 'Tax Free' тэмдэгтэй дэлгүүрт паспортоор маягт авна. Нисэх буудалд бүртгэлийн ӨМНӨ гаалийн тамга, дараа нь буцаан олголтын цэг (Global Blue). Буцаалт ≈ 10–12%.",
  credIntro:"Бүх зураг Wikimedia Commons-оос, Creative Commons лицензтэй. Зохиогчид, лиценз файл бүрийн хуудсанд.", foot2:"Истанбул 8 · 2026.10 · Үнэ, цагийн хуваарь өөрчлөгдөж болно, албан ёсны хуудаснаас шалга.",
  budget:[
    ["Истанбулын тасалбар",["Ая София (галерей)","Цөөрөм","Топкапы + Харем","Археологийн музей","Долмабахче","Cağaloğlu хамам","Дервишийн сема","Галата цамхаг (Бя, хүсвэл)","Хора сүм (хүсвэл)","Hürrem Sultan тансаг хамам (оронд нь)"]],
    ["Азийн тал, арал",["Бейлербейи ордон","Истанбул Модерн","Пера музей","Çamlıca цамхаг (хүсвэл)","Охидын цамхаг руу завь (хүсвэл)","Kılıç Ali Paşa хамам (хүсвэл)","Бүйүкада гатлага ×2","Арлын цахилгаан минибус","Кадыкөй, Үскүдар хөлөг ×4"]],
    ["Хоол",["Мя: Balıkçı Sabahattin","Лх: Köftecisi + Neolokal","Пү: Konyalı + Çiya","Ба: Ченгелкөй + Kanaat","Бя: Karaköy Lokantası + Matbah","Ня: арлын загас + Hamdi","Да: өглөөний цай, хөнгөн хоол","Өглөөний цай, зууш, цай/кофе, ус"]],
    ["Тээвэр",["Havaist IST→Aksaray (ирэх)","Истанбулкарт (трам, автобус, хөлөг ≈ 20 уншилт)","Такси хуваах (Чамлыжа, орой, бороо)","Ван буудал→IST Да (хүнд)"]],
    ["Бусад",["Бэлэг, lokum, баклава","Худалдаа (хувцас, керамик, …)","Нөөц ≈ 6%"]]],
  accRest:"⭐ Ресторан, хоол: хаана юу идэх вэ", restIntro:"Michelin 2026 (3-р сард зарласан): Туркт 17 одтой ресторан, 2 одтой нь зөвхөн TURK Fatih Tutak (Истанбул) ба Vino Locale (Измир); Истанбулд Araf шинээр 1 од авсан; Neolokal одоо, Ногоон одоо хадгалсан. Алтан тэмдэг = манай хөтөлбөрт орсон өдөр. Нэр дээр дарвал Google Maps.",
  restCat:{fine:"Michelin, дээд зэрэг",ottoman:"Османы ордны хоол, lokanta сонгодог",kebab:"Кебаб, köfte, ocakbaşı",fish:"Загас, meyhane",bfast:"Өглөөний цай, кофе",sweet:"Амттан, гудамжны хоол"},
  restTips:`<h3>Зөвлөгөө</h3><ul>
<li><b>Захиалга:</b> 8 хүн бол заавал. WhatsApp-аар "Merhaba, 8 kişi için [өдөр] [цаг] rezervasyon yapabilir miyiz?" гэж бичихэд ихэнх нь 1 цагийн дотор хариулна. Lokanta (Kanaat, Çiya, Hacı Abdullah) захиалга авдаггүй, 19:00-д ирвэл суудаг.</li>
<li><b>Lokanta</b> = лангуун дээрх бэлэн хоолноос заана, хурдан, хямд, цэвэр; Туркийн жинхэнэ өдөр тутмын хоол. <b>Meyhane</b> = meze + раки + загас, удаан, дуутай, орой. <b>Ocakbaşı</b> = нүүрсэн шарлагын өмнө суудаг кебабын газар.</li>
<li><b>Цаг:</b> туркууд 20:00-оос хойш идэж эхэлдэг; 19:00-д ирвэл ширээ олдоно, 21:00-д дүүрэн. Үдийн lokanta 12:00–14:00 хамгийн шинэхэн.</li>
<li><b>Тооцоо:</b> цайны мөнгө 5–10% бэлнээр (картаар нэмдэггүй). "Servis ücreti" 10% бичсэн бол дахиж өгөхгүй. Зарим газар meze-г асуулгүй авчирна: хэрэггүй бол буцаа, тооцоонд ордог.</li>
<li><b>Загас</b> жингээр (kg үнэ): захиалахаасаа өмнө "Bu kaç lira?" гэж асуу. Намрын загас: lüfer (10 сар яг улирал), palamut, çupra, levrek.</li>
<li><b>Султанахметын заль:</b> зурагтай меню, гудамжинд татдаг хүн, "жуулчны меню" = дунд зэрэг, 2 дахин үнэ. Манай хөтөлбөрийн Balıkçı Sabahattin, Matbah, Köftecisi Selim Usta найдвартай.</li>
<li><b>Архи:</b> Османы lokanta, Çiya, Kanaat, Hacı Abdullah архигүй; meyhane, загасны ресторан, Hamdi, Michelin-д байдаг. Раки 70 мл ≈ 250 ₺, Efes шар айраг 150 ₺.</li>
<li><b>Цагаан хоолтон:</b> zeytinyağlı (оливын тосонд чанасан ногоо), meze, börek, gözleme, pide, çiğ köfte (одоо махгүй) хаа сайгүй.</li>
<li><b>Ус</b> саванд, 20–30 ₺; цай (çay) 30–50 ₺, турк кофе 80–120 ₺. Боов, simit өглөө 25 ₺.</li>
<li><b>Бэлэн мөнгө:</b> гудамжны хоол, чайн цэцэрлэг, арлын жижиг газрууд карт авахгүй байж болно. Том ресторан бүгд карт.</li></ul>`,

  transport:`
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
<h3>⛴️ Азийн тал</h3><p><b>Хөлөг</b> Eminönü → Üsküdar 15 мин, → Kadıköy 20–25 мин, 20 мин тутам, 06:30–23:00, Истанбулкарт 59 ₺ (гадаа суудал баруун талд). <b>Марамарай</b> Sirkeci → Üsküdar 4 мин, → Ayrılık Çeşmesi (Кадыкөй) 11 мин, Босфорын доогуур, 00:00 хүртэл. <b>Автобус 15 / 15F</b> Üsküdar хөлгийн урдаас эрэг дагуу Kuzguncuk (10 мин) → Beylerbeyi → Çengelköy (20 мин), 10 мин тутам, Истанбулкарт. Чамлыжа, Салажак руу такси (BiTaksi) 2 машин ≈ 250 ₺ тус бүр. <b>Арлууд:</b> Turyol Eminönü 09:40 → Büyükada 10:55, буцах 15:15; арал дээр цахилгаан минибус 100–150 ₺, дугуй, машин үгүй.</p>
<h3>🚶 Алхах зай буудлаас</h3><p>Хөх сүм 7 мин · Ая София 11 мин · Трам 10 мин · Цөөрөм 12 мин · Топкапы хаалга 15 мин · Их зах 18 мин · Эминөнү 25 мин (эсвэл трам 3 буудал). Гудамж эгц, чулуун: тав тухтай гутал.</p>`,
  safety:`
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
<h3>Сүмийн дэг</h3><p>Мөр, өвдөг халхалсан, эмэгтэйчүүд алчуур. Гутлаа тайлж уутанд. Мөргөлийн үеэр жуулчдыг оруулахгүй (30 мин өмнө, дараа). Баасан 12:00–14:30 Ая София, Хөх сүм хаалттай.</p>`
},
en: {
  title:"Istanbul 8", sub:"13–19 Oct 2026 · Istanbul, Asian side, islands", htmlLang:"en",
  nav:{home:"Home",days:"Days",places:"Places",map:"Map",more:"More"},
  cat:{see:"Sight",mosque:"Mosque",museum:"Museum",market:"Bazaar",food:"Restaurant",cafe:"Café",hammam:"Hammam",show:"Show",transport:"Transport",area:"Neighbourhood"},
  dow:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'], capp:"Cappadocia", istanbul:"Istanbul", all:"All", alt:"alternative",
  search:"Search: Hagia Sophia, kumpir, tram…", notFound:"Nothing found", mapHint:"📍 tap a marker for details. ⌖ button: my location.",
  hours:"Hours", closed:"Closed", price:"Price", tips:"💡 Tips", fromHotel:"🚶 Route from hotel", fromCave:"🚐 From cave hotel", transit:"🚋 Public transport", web:"🌐 Website", onMap:"🗺️ On map", photo:"Photo: Wikimedia Commons",
  heroT:"Istanbul, 8 women", heroS:"Tue 13 – Mon 19 Oct 2026 · Thu Kadıköy, Fri Asian Bosphorus shore, Sun Büyükada",
  days_:"days", hrs:"hours", mins:"min", mmu:"mm", flight:"TK236 Mon 18:30",
  today:"Today", now:"Now", next:"Next", prayer:"🕌 Prayer", pr:["Dawn","Noon","Afternoon","Sunset","Night"], todayPlan:"📅 Today's plan",
  notStarted:"Trip hasn't started", ended:"Trip is over", istTime:"Istanbul time",
  weather:"🌦️ Weather, 7 days", wxStatic:"(forecast of 13 Oct)", wxLive:"(live, Open-Meteo)",
  wxNote:"Sunset: Thu 18:24, Fri 18:22, Sat 18:20, Sun 18:19. Forecast as of 14 Oct.", dawn:"",
  wxWarn:"Heavy rain Thu morning and Sat midday (Sat 22 mm): rain jacket, indoor sights. Friday (Asian shore) and Sunday (island) are dry: the two best days of the week.",
  fx:"💱 Exchange rates", fxStatic:"(13 Oct)", fxLive:"(live, ", fxNote:"Cash: döviz offices in the Grand Bazaar and around the Hippodrome (better than banks, no fee). When paying by card choose ₺ (TRY), never 'DCC'.",
  summary:"📊 At a glance", s1:"days, Istanbul", s2:"places", s3:"per person (≈ €685 ≈ 2.85M ₮)",
  sumNote:"6 full days in Istanbul at the average international-tourist level (€100–130/day, no lodging): all palaces, museums, hammam, dervishes and a Michelin dinner included. Dropping Cappadocia saves ≈ 36,000 ₺ per person. Budget version ≈ 31,000 ₺. Calculator: More → Budget.",
  quick:"⚡ Quick", toHotel:"🏨 To the hotel", emerg:"🚨 112 emergency", police:"👮 155 police", addrNote:"Hotel address for taxi drivers: <b>Yusuf Aşkın Sokak 16, Küçük Ayasofya</b> (Sultanahmet).",
  sevenDays:"🗓️ 7 days", steps:"steps", foot:"Photos: Wikimedia Commons (CC). Prices and hours as of 13 Oct 2026, subject to change.",
  altH:"🔄 Alternatives", prev:"‹ Previous", nextD:"Next ›", detail:"Details ›", hotel:"Hotel", youHere:"You are here", noGeo:"Location unavailable",
  accFood:"🍽️ Food & sweets: what to eat", accTr:"🚋 Transport: İstanbulkart, tram, ferry, taxi", accBud:"💰 Budget calculator (per person)", accCk:"✅ Checklist", accShop:"🛍️ Shopping: what, where", accPh:"🗣️ Turkish phrases", accSafe:"🛡️ Safety & emergencies", accLinks:"🔗 Official links", accCred:"📷 Photo credits",
  cur:["₺ lira","€ euro","₮ tögrög"], total:"Total per person", budAll:(t,e,m,a)=>`= ${t} ₺ · ${e} € · ${m}M ₮ · group of 8 ≈ ${a}k ₺`, budNote:"Istanbul hotel not included. Your selections are saved on this phone.",
  shopH:["What","Where","Price"], taxFree:"Tax Free: for purchases over 1,200 ₺ in one shop with a 'Tax Free' sign, get a form with your passport. At the airport get the customs stamp BEFORE check-in, then the refund desk (Global Blue). Refund ≈ 10–12%.",
  credIntro:"All photos from Wikimedia Commons under Creative Commons licences. Authors and licences on each file page.", foot2:"Istanbul 8 · Oct 2026 · Prices and timetables may change; check the official pages.",
  budget:[
    ["Istanbul tickets",["Hagia Sophia (gallery)","Basilica Cistern","Topkapı + Harem","Archaeology Museum","Dolmabahçe","Cağaloğlu hammam","Whirling dervish sema","Galata Tower (Sat, optional)","Chora Church (optional)","Hürrem Sultan luxury hammam (instead)"]],
    ["Asian side, island",["Beylerbeyi Palace","Istanbul Modern","Pera Museum","Çamlıca Tower (optional)","Boat to Maiden's Tower (optional)","Kılıç Ali Paşa hammam (optional)","Büyükada ferry ×2","Island electric minibus","Kadıköy, Üsküdar ferries ×4"]],
    ["Food",["Tue: Balıkçı Sabahattin","Wed: Köftecisi + Neolokal","Thu: Konyalı + Çiya","Fri: Çengelköy + Kanaat","Sat: Karaköy Lokantası + Matbah","Sun: island fish + Hamdi","Mon: breakfast, light lunch","Breakfasts, snacks, tea/coffee, water"]],
    ["Transport",["Havaist IST→Aksaray (arrival)","İstanbulkart (tram, bus, ferry ≈ 20 taps)","Shared taxis (Çamlıca, evenings, rain)","Van hotel→IST Mon (per person)"]],
    ["Other",["Gifts, lokum, baklava","Shopping (clothes, ceramics, …)","Reserve ≈ 6%"]]],
  accRest:"⭐ Restaurants & food: where to eat what", restIntro:"Michelin 2026 (announced in March): 17 starred restaurants in Türkiye; the only two-star ones are TURK Fatih Tutak (Istanbul) and Vino Locale (İzmir); Araf in Istanbul is a new one-star; Neolokal kept its star and Green Star. Gold tag = the day it's in our plan. Tap a name for Google Maps.",
  restCat:{fine:"Michelin, fine dining",ottoman:"Ottoman palace food, lokanta classics",kebab:"Kebab, köfte, ocakbaşı",fish:"Fish, meyhane",bfast:"Breakfast, coffee",sweet:"Sweets, street food"},
  restTips:`<h3>Tips</h3><ul>
<li><b>Reservations:</b> essential for 8. On WhatsApp write "Merhaba, 8 kişi için [day] [time] rezervasyon yapabilir miyiz?"; most reply within an hour. Lokantas (Kanaat, Çiya, Hacı Abdullah) don't take bookings; arrive at 19:00 and you'll sit.</li>
<li><b>Lokanta</b> = point at ready-cooked dishes on the counter, fast, cheap, clean; real everyday Turkish food. <b>Meyhane</b> = meze + rakı + fish, slow, loud, late. <b>Ocakbaşı</b> = a kebab house where you sit around the charcoal grill.</li>
<li><b>Timing:</b> Turks start dinner after 20:00; at 19:00 you'll find a table, by 21:00 it's full. Lunch lokantas are freshest 12:00–14:00.</li>
<li><b>The bill:</b> tip 5–10% in cash (can't be added to the card). If a 10% "servis ücreti" is printed, don't tip again. Some places bring meze unasked: send it back if you don't want it, it's charged.</li>
<li><b>Fish</b> is priced by weight (per kg): ask "Bu kaç lira?" before ordering. Autumn fish: lüfer (bluefish, October is peak), palamut, çupra, levrek.</li>
<li><b>Sultanahmet traps:</b> photo menus, touts in the street, "tourist menu" = mediocre at double the price. Balıkçı Sabahattin, Matbah and Köftecisi Selim Usta in our plan are reliable.</li>
<li><b>Alcohol:</b> Ottoman lokantas, Çiya, Kanaat and Hacı Abdullah are dry; meyhanes, fish restaurants, Hamdi and the Michelin places serve it. Rakı 70 ml ≈ 250 ₺, Efes beer 150 ₺.</li>
<li><b>Vegetarians:</b> zeytinyağlı (vegetables cooked in olive oil), meze, börek, gözleme, pide and çiğ köfte (meatless nowadays) are everywhere.</li>
<li><b>Water</b> bottled, 20–30 ₺; tea (çay) 30–50 ₺, Turkish coffee 80–120 ₺. Simit in the morning 25 ₺.</li>
<li><b>Cash:</b> street food, tea gardens and small island places may not take cards. All big restaurants do.</li></ul>`,

  transport:`
<h3>💳 İstanbulkart</h3><p>We have 3 cards. One card can be tapped for several people in a row (3+3+2). One tap <b>46.20 ₺</b>, a transfer within 2 h <b>34.40 ₺</b>. Top up at the yellow machines (bilet matik) in every station, cash, 400–500 ₺ per card. About 150 ₺ per person per day.</p>
<h3>🚋 T1 tram (Sultanahmet stop, 10 min from the hotel)</h3>
<table><tr><th>Towards Kabataş →</th><th>← Towards Bağcılar</th></tr><tr><td>1 Gülhane (Topkapı, museum)<br>2 Sirkeci (Hodjapasha)<br>3 <b>Eminönü</b> (ferries, Spice Bazaar)<br>4 <b>Karaköy</b> (Galata, Tünel)<br>5 Tophane<br>6 Fındıklı<br>7 <b>Kabataş</b> (Dolmabahçe, Taksim F1)</td><td>1 Çemberlitaş<br>2 <b>Beyazıt-Kapalıçarşı</b> (Grand Bazaar)<br>3 Laleli<br>4 <b>Aksaray</b> (Havaist)</td></tr></table>
<p class="sub">05:00–00:00, every 5–10 min. Crowded at rush hour, keep bags in front.</p>
<h3>⛴️ Ferries (Şehir Hatları, 59 ₺, İstanbulkart)</h3>
<table><tr><th>Route</th><th>Times</th><th>Duration</th></tr>
<tr><td>Eminönü → Kadıköy</td><td>Sat 09:35, 09:55, 10:15, then every 20 min</td><td>20–25 min</td></tr>
<tr><td>Kadıköy → Beşiktaş</td><td>every 30 min</td><td>20 min</td></tr>
<tr><td>Eminönü → Üsküdar</td><td>every 20 min</td><td>15 min</td></tr>
<tr><td>Eminönü Boğaz Hattı (Bosphorus)</td><td>14:30 (check at the pier)</td><td>2 h, 340 ₺</td></tr>
<tr><td>Turyol Eminönü → Büyükada</td><td>08:40, 09:40, 10:40</td><td>75 min, ≈ 150–200 ₺</td></tr>
<tr><td>Turyol Büyükada → Eminönü</td><td>14:15, 15:15, 16:15, 17:00, 18:00</td><td>75 min</td></tr>
<tr><td>Kabataş → Adalar (Şehir Hatları)</td><td>Sun 09:05, 12:05</td><td>105 min, 137 ₺</td></tr>
<tr><td>Haliç: Eminönü → Fener/Balat</td><td>hourly</td><td>20 min</td></tr></table>
<h3>🚌 Buses (İETT)</h3><p>Eminönü → Balat: <b>99, 99A, 36CE</b> (stop next to Yeni Cami). Beşiktaş → Ortaköy → Kabataş: <b>22, 25E, 40, 40T</b>. Board at the front and tap the card.</p>
<h3>🚕 Taxi</h3><p>Meter: 35 ₺ flagfall + 23.6 ₺/km, minimum 100 ₺. 8 people = 2 taxis. <b>BiTaksi</b> app (pay by card, no arguments). Refuse meterless taxis around Sultanahmet: "Taksimetre, lütfen". Examples: hotel → Karaköy 150 ₺, → hammam 100 ₺, → Chora 250 ₺, → Ortaköy 300 ₺.</p>
<h3>✈️ Airport</h3><p><b>Havaist HVL-1</b> IST ↔ Aksaray, every 20–30 min, 265–355 ₺, card/İstanbulkart (no cash), level -2. 70–90 min. The Sultanahmet Havaist line is suspended. <b>Van</b> for 8 + luggage ≈ 3,500 ₺, 60–75 min, from the hotel door. Taxi ≈ 1,800 ₺ per car (4 people).</p>
<h3>⛴️ Asian side</h3><p><b>Ferries</b> Eminönü → Üsküdar 15 min, → Kadıköy 20–25 min, every 20 min, 06:30–23:00, İstanbulkart 59 ₺ (outside seats on the right). <b>Marmaray</b> Sirkeci → Üsküdar 4 min, → Ayrılık Çeşmesi (Kadıköy) 11 min, under the Bosphorus, until 00:00. <b>Bus 15 / 15F</b> from in front of the Üsküdar pier along the shore to Kuzguncuk (10 min) → Beylerbeyi → Çengelköy (20 min), every 10 min, İstanbulkart. To Çamlıca and Salacak, taxis (BiTaksi), 2 cars ≈ 250 ₺ each. <b>Islands:</b> Turyol Eminönü 09:40 → Büyükada 10:55, back 15:15; on the island an electric minibus 100–150 ₺, no bikes or cars.</p>
<h3>🚶 Walking distances from the hotel</h3><p>Blue Mosque 7 min · Hagia Sophia 11 min · Tram 10 min · Cistern 12 min · Topkapı gate 15 min · Grand Bazaar 18 min · Eminönü 25 min (or tram 3 stops). Steep cobbled streets: comfortable shoes.</p>`,
  safety:`
<div class="btns"><a class="btn red" href="tel:112">🚨 112 (all emergencies)</a><a class="btn ghost" href="tel:155">👮 155 police</a></div>
<p><b>Tourist police</b> (Turizm Polisi) in Sultanahmet next to Hagia Sophia, Yerebatan Cd. 6, English-speaking.</p>
<p><b>Embassy of Mongolia</b> is in Ankara; no consulate in Istanbul. Check the phone number on the Foreign Ministry site before departure and save it.</p>
<h3>Common scams</h3><ul>
<li><b>The İstiklal "friend"</b>: invites you to a bar, bill of 20,000 ₺. Decline.</li>
<li><b>Shoe shiner</b> "drops" his brush; if you return it he cleans your shoes "for free" and demands money.</li>
<li><b>Taxi</b> without meter, long route: use BiTaksi.</li>
<li><b>Restaurants</b>: check the bill against the menu; "complimentary" starters get added. Ask the fish price by weight.</li>
<li><b>Carpets</b>: "come for tea" = a 2-hour sales pitch.</li>
<li>Grand Bazaar and trams: bag in front, phone not in the back pocket.</li></ul>
<h3>Health</h3><p>Pharmacies (Eczane) everywhere, red "E" sign; private hospitals: Acıbadem, American Hospital (Nişantaşı). Drink bottled water, 20 ₺. Keep the travel-insurance number on your phone.</p>
<h3>Mosque etiquette</h3><p>Shoulders and knees covered, women wear a headscarf. Shoes off into a bag. No tourists during prayers (30 min before and after). Friday 12:00–14:30 Hagia Sophia and Blue Mosque closed.</p>`
},
tr: {
  title:"İstanbul 8", sub:"13–19 Ekim 2026 · İstanbul, Anadolu yakası, Adalar", htmlLang:"tr",
  nav:{home:"Ana sayfa",days:"Günler",places:"Yerler",map:"Harita",more:"Diğer"},
  cat:{see:"Gezilecek",mosque:"Cami",museum:"Müze",market:"Çarşı",food:"Restoran",cafe:"Kafe",hammam:"Hamam",show:"Gösteri",transport:"Ulaşım",area:"Semt"},
  dow:['Paz','Pzt','Sal','Çar','Per','Cum','Cmt'], capp:"Kapadokya", istanbul:"İstanbul", all:"Tümü", alt:"alternatif",
  search:"Ara: Ayasofya, kumpir, tramvay…", notFound:"Sonuç yok", mapHint:"📍 işarete dokunun: ayrıntılar. ⌖ düğmesi: konumum.",
  hours:"Saat", closed:"Kapalı", price:"Ücret", tips:"💡 İpuçları", fromHotel:"🚶 Otelden yol", fromCave:"🚐 Mağara otelden", transit:"🚋 Toplu taşıma", web:"🌐 Web sitesi", onMap:"🗺️ Haritada", photo:"Fotoğraf: Wikimedia Commons",
  heroT:"İstanbul, 8 kadın", heroS:"13 Ekim (Sal) – 19 Ekim (Pzt) 2026 · Per Kadıköy, Cum Boğaz'ın Anadolu kıyısı, Paz Büyükada",
  days_:"gün", hrs:"saat", mins:"dk", mmu:"mm", flight:"TK236 Pzt 18:30",
  today:"Bugün", now:"Şimdi", next:"Sonraki", prayer:"🕌 Namaz", pr:["Güneş","Öğle","İkindi","Akşam","Yatsı"], todayPlan:"📅 Bugünün programı",
  notStarted:"Seyahat henüz başlamadı", ended:"Seyahat bitti", istTime:"İstanbul saati",
  weather:"🌦️ Hava durumu, 7 gün", wxStatic:"(13 Ekim tahmini)", wxLive:"(canlı, Open-Meteo)",
  wxNote:"Gün batımı: Per 18:24, Cum 18:22, Cmt 18:20, Paz 18:19. Tahmin 14 Ekim itibarıyla.", dawn:"",
  wxWarn:"Per sabah ve Cmt öğlen kuvvetli yağmur (Cmt 22 mm): yağmurluk, kapalı mekânlar. Cuma (Anadolu kıyısı) ve Pazar (ada) kuru: haftanın en iyi iki günü.",
  fx:"💱 Kur", fxStatic:"(13 Ekim)", fxLive:"(canlı, ", fxNote:"Nakit: Kapalıçarşı ve Hipodrom çevresindeki döviz büroları (bankadan iyi, komisyonsuz). Kartla öderken ₺ (TRY) seçin, 'DCC' değil.",
  summary:"📊 Özet", s1:"gün, İstanbul", s2:"yer", s3:"kişi başı (≈ 685 € ≈ 2,85M ₮)",
  sumNote:"İstanbul'da 6 tam gün uluslararası turist ortalaması (günde 100–130 €, konaklama hariç): tüm saraylar, müzeler, hamam, sema ve bir Michelin akşam yemeği dahil. Kapadokya'nın çıkarılması kişi başı ≈ 36.000 ₺ tasarruf. Ekonomik seçenek ≈ 31.000 ₺. Hesaplayıcı: Diğer → Bütçe.",
  quick:"⚡ Hızlı", toHotel:"🏨 Otele", emerg:"🚨 112 acil", police:"👮 155 polis", addrNote:"Taksici için otel adresi: <b>Yusuf Aşkın Sokak 16, Küçük Ayasofya</b> (Sultanahmet).",
  sevenDays:"🗓️ 7 gün", steps:"adım", foot:"Fotoğraflar: Wikimedia Commons (CC). Fiyat ve saatler 13.10.2026 itibarıyla, değişebilir.",
  altH:"🔄 Alternatifler", prev:"‹ Önceki", nextD:"Sonraki ›", detail:"Ayrıntı ›", hotel:"Otel", youHere:"Buradasınız", noGeo:"Konum alınamadı",
  accFood:"🍽️ Yemek ve tatlı: ne yenir", accTr:"🚋 Ulaşım: İstanbulkart, tramvay, vapur, taksi", accBud:"💰 Bütçe hesaplayıcı (kişi başı)", accCk:"✅ Kontrol listesi", accShop:"🛍️ Alışveriş: ne, nerede", accPh:"🗣️ Türkçe–Moğolca sözlük", accSafe:"🛡️ Güvenlik ve acil durum", accLinks:"🔗 Resmî bağlantılar", accCred:"📷 Fotoğraf kaynakları",
  cur:["₺ lira","€ euro","₮ tugrik"], total:"Kişi başı toplam", budAll:(t,e,m,a)=>`= ${t} ₺ · ${e} € · ${m}M ₮ · 8 kişi ≈ ${a}k ₺`, budNote:"İstanbul oteli dahil değil. Seçimler bu telefonda saklanır.",
  shopH:["Ne","Nerede","Fiyat"], taxFree:"Tax Free: tek mağazada 1.200 ₺ üzeri alışverişte 'Tax Free' işaretli mağazadan pasaportla form alın. Havalimanında check-in'den ÖNCE gümrük kaşesi, sonra iade noktası (Global Blue). İade ≈ %10–12.",
  credIntro:"Tüm fotoğraflar Wikimedia Commons'tan, Creative Commons lisanslı. Yazar ve lisans her dosya sayfasında.", foot2:"İstanbul 8 · Ekim 2026 · Fiyat ve tarifeler değişebilir, resmî sayfalardan kontrol edin.",
  budget:[
    ["İstanbul biletleri",["Ayasofya (galeri)","Yerebatan Sarnıcı","Topkapı + Harem","Arkeoloji Müzesi","Dolmabahçe","Cağaloğlu Hamamı","Sema töreni","Galata Kulesi (Cmt, isteğe bağlı)","Kariye (isteğe bağlı)","Hürrem Sultan lüks hamam (yerine)"]],
    ["Anadolu yakası, ada",["Beylerbeyi Sarayı","İstanbul Modern","Pera Müzesi","Çamlıca Kulesi (isteğe bağlı)","Kız Kulesi teknesi (isteğe bağlı)","Kılıç Ali Paşa Hamamı (isteğe bağlı)","Büyükada vapuru ×2","Ada elektrikli minibüs","Kadıköy, Üsküdar vapuru ×4"]],
    ["Yemek",["Sal: Balıkçı Sabahattin","Çar: Köftecisi + Neolokal","Per: Konyalı + Çiya","Cum: Çengelköy + Kanaat","Cmt: Karaköy Lokantası + Matbah","Paz: ada balığı + Hamdi","Pzt: kahvaltı, hafif öğle","Kahvaltılar, atıştırmalık, çay/kahve, su"]],
    ["Ulaşım",["Havaist IST→Aksaray (varış)","İstanbulkart (tramvay, otobüs, vapur ≈ 20 geçiş)","Paylaşımlı taksi (Çamlıca, akşam, yağmur)","Minibüs otel→IST Pzt (kişi başı)"]],
    ["Diğer",["Hediye, lokum, baklava","Alışveriş (giyim, seramik, …)","Yedek ≈ %6"]]],
  accRest:"⭐ Restoran ve yemek: nerede ne yenir", restIntro:"Michelin 2026 (Mart'ta açıklandı): Türkiye'de 17 yıldızlı restoran; iki yıldızlılar yalnız TURK Fatih Tutak (İstanbul) ve Vino Locale (İzmir); İstanbul'da Araf yeni 1 yıldız; Neolokal yıldızını ve Yeşil Yıldız'ını korudu. Altın etiket = programımızdaki gün. İsme dokununca Google Haritalar.",
  restCat:{fine:"Michelin, üst düzey",ottoman:"Osmanlı saray mutfağı, lokanta klasikleri",kebab:"Kebap, köfte, ocakbaşı",fish:"Balık, meyhane",bfast:"Kahvaltı, kahve",sweet:"Tatlı, sokak lezzetleri"},
  restTips:`<h3>İpuçları</h3><ul>
<li><b>Rezervasyon:</b> 8 kişi için şart. WhatsApp'tan "Merhaba, 8 kişi için [gün] [saat] rezervasyon yapabilir miyiz?" yazın; çoğu bir saat içinde yanıtlar. Lokantalar (Kanaat, Çiya, Hacı Abdullah) rezervasyon almaz; 19:00'da gelin, oturursunuz.</li>
<li><b>Lokanta</b> = tezgâhtaki hazır yemeklerden seçim, hızlı, ucuz, temiz; gerçek günlük Türk mutfağı. <b>Meyhane</b> = meze + rakı + balık, yavaş, gürültülü, geç. <b>Ocakbaşı</b> = kömür ızgaranın başında oturulan kebapçı.</li>
<li><b>Zamanlama:</b> Türkler akşam yemeğine 20:00'den sonra başlar; 19:00'da masa bulunur, 21:00'de dolar. Öğle lokantaları 12:00–14:00 en tazedir.</li>
<li><b>Hesap:</b> bahşiş %5–10 nakit (karta eklenmez). %10 "servis ücreti" yazılmışsa tekrar vermeyin. Bazı yerler sormadan meze getirir: istemiyorsanız geri gönderin, hesaba yazılır.</li>
<li><b>Balık</b> kiloyla: sipariş vermeden "Bu kaç lira?" diye sorun. Sonbahar balıkları: lüfer (Ekim tam mevsim), palamut, çupra, levrek.</li>
<li><b>Sultanahmet tuzakları:</b> fotoğraflı menü, sokakta çağıran garson, "turist menüsü" = vasat ve iki kat fiyat. Programımızdaki Balıkçı Sabahattin, Matbah, Köftecisi Selim Usta güvenilir.</li>
<li><b>Alkol:</b> Osmanlı lokantaları, Çiya, Kanaat, Hacı Abdullah alkolsüz; meyhaneler, balıkçılar, Hamdi ve Michelin mekânlarında var. Rakı 70 ml ≈ 250 ₺, Efes 150 ₺.</li>
<li><b>Vejetaryen:</b> zeytinyağlılar, meze, börek, gözleme, pide, çiğ köfte (artık etsiz) her yerde.</li>
<li><b>Su</b> şişe, 20–30 ₺; çay 30–50 ₺, Türk kahvesi 80–120 ₺. Sabah simit 25 ₺.</li>
<li><b>Nakit:</b> sokak lezzetleri, çay bahçeleri, adadaki küçük yerler kart almayabilir. Büyük restoranların hepsi alır.</li></ul>`,

  transport:`
<h3>💳 İstanbulkart</h3><p>3 kartımız var. Bir kartla arka arkaya birkaç kişi geçebilir (3+3+2). Bir geçiş <b>46,20 ₺</b>, 2 saat içinde aktarma <b>34,40 ₺</b>. Dolum: her duraktaki sarı bilet matik, nakit, kart başına 400–500 ₺. Kişi başı günde ≈ 150 ₺.</p>
<h3>🚋 T1 tramvay (Sultanahmet durağı, otelden 10 dk)</h3>
<table><tr><th>Kabataş yönü →</th><th>← Bağcılar yönü</th></tr><tr><td>1 Gülhane (Topkapı, müze)<br>2 Sirkeci (Hodjapasha)<br>3 <b>Eminönü</b> (vapur, Mısır Çarşısı)<br>4 <b>Karaköy</b> (Galata, Tünel)<br>5 Tophane<br>6 Fındıklı<br>7 <b>Kabataş</b> (Dolmabahçe, Taksim F1)</td><td>1 Çemberlitaş<br>2 <b>Beyazıt-Kapalıçarşı</b><br>3 Laleli<br>4 <b>Aksaray</b> (Havaist)</td></tr></table>
<p class="sub">05:00–00:00, 5–10 dk'da bir. Yoğun saatlerde kalabalık, çanta önde.</p>
<h3>⛴️ Vapur (Şehir Hatları, 59 ₺, İstanbulkart)</h3>
<table><tr><th>Hat</th><th>Saat</th><th>Süre</th></tr>
<tr><td>Eminönü → Kadıköy</td><td>Cmt 09:35, 09:55, 10:15, sonra 20 dk'da bir</td><td>20–25 dk</td></tr>
<tr><td>Kadıköy → Beşiktaş</td><td>30 dk'da bir</td><td>20 dk</td></tr>
<tr><td>Eminönü → Üsküdar</td><td>20 dk'da bir</td><td>15 dk</td></tr>
<tr><td>Eminönü Boğaz Hattı</td><td>14:30 (iskelede kontrol edin)</td><td>2 saat, 340 ₺</td></tr>
<tr><td>Turyol Eminönü → Büyükada</td><td>08:40, 09:40, 10:40</td><td>75 dk, ≈ 150–200 ₺</td></tr>
<tr><td>Turyol Büyükada → Eminönü</td><td>14:15, 15:15, 16:15, 17:00, 18:00</td><td>75 dk</td></tr>
<tr><td>Kabataş → Adalar (Şehir Hatları)</td><td>Paz 09:05, 12:05</td><td>105 dk, 137 ₺</td></tr>
<tr><td>Haliç: Eminönü → Fener/Balat</td><td>saatte 1</td><td>20 dk</td></tr></table>
<h3>🚌 Otobüs (İETT)</h3><p>Eminönü → Balat: <b>99, 99A, 36CE</b> (Yeni Cami yanındaki durak). Beşiktaş → Ortaköy → Kabataş: <b>22, 25E, 40, 40T</b>. Önden binip kart okutun.</p>
<h3>🚕 Taksi</h3><p>Taksimetre: açılış 35 ₺ + 23,6 ₺/km, en az 100 ₺. 8 kişi = 2 taksi. <b>BiTaksi</b> uygulaması (kartla ödeme, tartışma yok). Sultanahmet çevresinde taksimetresiz taksiyi reddedin: "Taksimetre, lütfen". Örnek: otel → Karaköy 150 ₺, → hamam 100 ₺, → Kariye 250 ₺, → Ortaköy 300 ₺.</p>
<h3>✈️ Havalimanı</h3><p><b>Havaist HVL-1</b> IST ↔ Aksaray, 20–30 dk'da bir, 265–355 ₺, kart/İstanbulkart (nakit yok), -2. kat. 70–90 dk. Sultanahmet Havaist hattı askıda. <b>Minibüs</b> 8 kişi + bagaj ≈ 3.500 ₺, 60–75 dk, otel kapısından. Taksi araç başı ≈ 1.800 ₺ (4 kişi).</p>
<h3>⛴️ Anadolu yakası</h3><p><b>Vapur</b> Eminönü → Üsküdar 15 dk, → Kadıköy 20–25 dk, 20 dk'da bir, 06:30–23:00, İstanbulkart 59 ₺ (dış koltuklar sağ tarafta). <b>Marmaray</b> Sirkeci → Üsküdar 4 dk, → Ayrılık Çeşmesi (Kadıköy) 11 dk, Boğaz'ın altından, 00:00'a kadar. <b>15 / 15F otobüsü</b> Üsküdar iskelesinin önünden sahil boyunca Kuzguncuk (10 dk) → Beylerbeyi → Çengelköy (20 dk), 10 dk'da bir, İstanbulkart. Çamlıca ve Salacak'a taksi (BiTaksi), 2 araç ≈ 250 ₺'şer. <b>Adalar:</b> Turyol Eminönü 09:40 → Büyükada 10:55, dönüş 15:15; adada elektrikli minibüs 100–150 ₺, bisiklet ve araba yok.</p>
<h3>🚶 Otelden yürüme mesafeleri</h3><p>Sultanahmet Camii 7 dk · Ayasofya 11 dk · Tramvay 10 dk · Sarnıç 12 dk · Topkapı kapısı 15 dk · Kapalıçarşı 18 dk · Eminönü 25 dk (veya tramvay 3 durak). Dik, kaldırım taşlı sokaklar: rahat ayakkabı.</p>`,
  safety:`
<div class="btns"><a class="btn red" href="tel:112">🚨 112 (tüm acil durumlar)</a><a class="btn ghost" href="tel:155">👮 155 polis</a></div>
<p><b>Turizm Polisi</b> Sultanahmet, Ayasofya yanı, Yerebatan Cd. 6, İngilizce konuşulur.</p>
<p><b>Moğolistan Büyükelçiliği</b> Ankara'da; İstanbul'da konsolosluk yok. Telefonu yola çıkmadan Dışişleri sitesinden kontrol edip kaydedin.</p>
<h3>Sık görülen dolandırıcılıklar</h3><ul>
<li><b>İstiklal'deki "arkadaş"</b>: bara davet, 20.000 ₺ hesap. Reddedin.</li>
<li><b>Ayakkabı boyacısı</b> fırçasını "düşürür"; geri verirseniz "bedava" boyayıp para ister.</li>
<li><b>Taksi</b> taksimetresiz, uzun yol: BiTaksi.</li>
<li><b>Restoran</b>: hesabı menüyle karşılaştırın; "ikram" mezeler eklenir. Balık fiyatını kiloyla sorun.</li>
<li><b>Halı</b>: "çaya buyurun" = 2 saatlik satış.</li>
<li>Kapalıçarşı ve tramvayda çanta önde, telefon arka cepte değil.</li></ul>
<h3>Sağlık</h3><p>Eczane her yerde, kırmızı "E"; özel hastane: Acıbadem, Amerikan Hastanesi (Nişantaşı). Şişe su, 20 ₺. Seyahat sigortası numarası telefonda.</p>
<h3>Cami adabı</h3><p>Omuz ve diz kapalı, kadınlar başörtüsü. Ayakkabı çıkarılıp poşete. Namaz sırasında turist alınmaz (30 dk önce ve sonra). Cuma 12:00–14:30 Ayasofya ve Sultanahmet Camii kapalı.</p>`
}
};
