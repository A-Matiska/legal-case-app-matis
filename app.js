const state = {
  view: "dashboard",
  query: "",
  filters: new Set(),
  selected: null,
  theme: localStorage.getItem("case-theme") || "light",
};

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: "⌂" },
  { id: "timeline", label: "Časová osa", icon: "│" },
  { id: "evidence", label: "Podklady", icon: "□" },
  { id: "people", label: "Osoby", icon: "○" },
  { id: "documents", label: "Dokumenty", icon: "▤" },
  { id: "notes", label: "Poznámky", icon: "✎" },
  { id: "export", label: "Export", icon: "⇩" },
];

const tags = ["pracovněprávní", "obchodní", "GDPR", "Odoo", "mzda", "DPP", "diskriminace", "jednatel", "OIP", "GPS", "vozidla"];

const events = [
  {
    id: "ev-2021-whatsapp",
    date: "20. 5. 2021",
    year: "2021",
    title: "Podmínky odměňování k pozici produktové/obchodní manažerky",
    text: "Komunikace přes WhatsApp zachycuje podmínky odměňování dohodnuté k mé tehdejší pozici produktové/obchodní manažerky — šlo o jiné podmínky než pozdější příslib podílů. Zpráva z 20. 5. 2021, 13:20: „probereme odměnu za duben a podíl na výsledcích do budoucna“ — podíl na výsledcích tu byl poprvé zmíněn do budoucna, konkrétní podoba (5 % ze zisku, 10 % z prodeje) přišla až v e-mailu ze 4. 8. 2023. V té době svým slibům ještě dostál — na rozdíl od pozdějšího vývoje.",
    people: ["Andrea Matis", "Karel Ospalík"],
    evidence: ["WhatsApp 20. 5. 2021"],
    legal: "Beru to jako začátek celé dohody o mém odměňování — tady padla první zmínka o podílu na výsledcích. Co z toho plyne, nechám na Vašem posouzení.",
    tags: ["obchodní"],
  },
  {
    id: "ev-2022-funkce",
    date: "~2022",
    year: "2022",
    title: "Přidávání a rozšiřování pracovní náplně, funkcí a pravomocí",
    text: "Fakticky jsem podepisovala smlouvy, jednala s bankami a řešila personální věci ještě před formálním jmenováním. Postupně na mě majitel nabaloval čím dál širší agendu: zplnomocnění ve věcech pracovněprávních, jednání s bankou i se státními institucemi, hledání a vyjednávání podmínek s novými B2B partnery, výběrová řízení na veřejné zakázky, vyřizování dotací, zajišťování pracovnělékařských prohlídek pro zaměstnance a samostatnou expanzi a integraci na tři mezinárodní marketplaces. Když přišla jakákoliv kontrola (ČOI, živnostenský úřad, hasiči apod.), jednala jsem s nimi osobně, následně prováděla veškeré úkony k nápravě zjištění a komunikaci vedla tak, aby z toho firma měla vždy co nejmenší postih či sankce. A spoustu dalších věcí, které si už ani nevybavím všechny.",
    people: ["Andrea Matis"],
    evidence: ["Fio banka + smlouvy — Období I", "Smlouva o pracovnělékařských službách", "Fio dokumenty 8/2023"],
    legal: "Za tuto neustále rostoucí pracovní náplň jsem neměla žádnou smlouvu ani odměnu navíc — nevím, jestli z toho něco plyne.",
    tags: ["jednatel", "obchodní"],
  },
  {
    id: "ev-2023-navrh-odmen",
    date: "4. 8. 2023",
    year: "2023",
    title: "E-mail „Návrh Tvých odměn a smlouvy na obchodní podíl“",
    text: "Pan Ospalík mi poslal e-mail „Návrh Tvých odměn a smlouvy na obchodní podíl — k projednání“. Přílohou byl přímo dokument „Odměny a smlouva Andrea“ (5 % ze zisku po zdanění, 10% podíl = 2,2 mil. Kč, převod podílu po kumulaci bonusů, smlouva o smlouvě budoucí) s účinností od 1. 1. 2024. Autor i odesílatel návrhu je tedy doložen: pan Ospalík, 4. 8. 2023. K 1. 1. 2024 pak podle tohoto návrhu nabylo účinnosti jmenování i příslib podílů (5 % ze zisku, 10 % z prodeje).",
    people: ["Andrea Matis", "Karel Ospalík"],
    evidence: ["E-mail 4. 8. 2023 — návrh odměn (.msg zajištěn)"],
    legal: "Originál e-mailu (.msg) mám zajištěný včetně hlaviček s DKIM podpisem Gmailu — odesláno 4. 8. 2023, 12:26, z charlie.ospalik@gmail.com na a.matis@traiva.cz. Dokument s podmínkami tedy prokazatelně vytvořil a poslal pan Ospalík.",
    tags: ["obchodní", "jednatel", "mzda"],
  },
  {
    id: "ev-2024-ospalik-odchod",
    date: "2024",
    year: "2024",
    title: "Karel Ospalík odcházel do důchodu — žádal odstranění z kontaktů e-shopu",
    text: "V roce 2024 jsem panu Ospalíkovi podepisovala výpověď, když odcházel do důchodu. Požádal mě o odstranění z kontaktní stránky e-shopu, protože mu prý stále a často telefonovali naši zákazníci. Zároveň jsme už tehdy měli otevřené téma ERP/systémů — oba jsme měli vlastní testovací účty v Odoo i na systémech jiných poskytovatelů. Vzhledem k jeho dlouhodobému pobytu v zahraničí jsem místo něj absolvovala i několik auditů interních systémů.",
    people: ["Andrea Matis", "Karel Ospalík"],
    evidence: [],
    legal: "Připadá mi to jako výrazný rozpor — přesně to, o co mě sám tehdy požádal pro sebe (odstranění z kontaktů), teď o dva roky později udělal on mně, jenže v mnohem širším rozsahu (celý web, ne jen kontakty) a bez jakéhokoliv vypořádání. V době, kdy se úpravy webu zadávaly (2024–2025), na webu skutečně vůbec nefiguroval — jeho přání bylo respektováno. Nyní je ale v kontaktech nově uveden jako CEO, zatímco já jsem z webu kompletně zmizela. Chci to dát do souvislosti s odstraněním z firemního webu 12. 5. 2026.",
    tags: ["jednatel", "pracovněprávní"],
  },
  {
    id: "ev-2024-jmenovani",
    date: "24. 6. 2024",
    year: "2024",
    title: "Formální jmenování jednatelkou",
    text: "Byla jsem jmenována jednatelkou usnesením jediného společníka; smlouvu o výkonu funkce jsme nikdy nesepsali.",
    people: ["Andrea Matis", "Karel Ospalík"],
    evidence: ["Usnesení 24. 6. 2024"],
    legal: "Smlouva o výkonu funkce nevznikla — co to znamená pro odměnu, chci probrat.",
    tags: ["jednatel", "obchodní"],
  },
  {
    id: "ev-2024-erp-zacatek",
    date: "29. 4. 2024",
    year: "2024",
    title: "Začátek intenzivní práce na ERP",
    text: "Projekt ERP systému jsem začala intenzivně řešit od 29. 4. 2024 — ještě před podpisem smlouvy s Quest solutions. Nejprve jsem na něm pracovala s panem Plačkem, později už samostatně. O možnostech Odoo jsme s panem Ospalíkem mluvili už v roce 2023.",
    people: ["Andrea Matis", "Michal Plaček"],
    evidence: ["Můj e-mail 8. 8. 2025 — shrnutí historie projektu"],
    legal: "Toto datum uvádím podle svého vlastního dobového e-mailu z 8. 8. 2025, kde jsem historii projektu shrnovala.",
    tags: ["Odoo", "pracovněprávní"],
  },
  {
    id: "ev-2024-odoo-schvaleni",
    date: "21. 6. 2024",
    year: "2024",
    title: "Schválení Odoo a výběr dodavatele Quest",
    text: "Schválení Odoo a výběr implementačního partnera (firma Quest solutions s.r.o.) proběhlo ve spolupráci s panem Ospalíkem. Po podpisu smlouvy ale prohlásil, že jde o projekt na mou zodpovědnost, nad rámec mé pracovní náplně, a že s tím nechce mít nic společného. Smlouvu s Quest solutions s.r.o. (zastoupenou Jakubem Bradou) jsem sama dojednala; podepsána byla a nabyla účinnosti 21. 6. 2024, tři dny před mým formálním jmenováním jednatelkou 24. 6. 2024 — to ale považuji za náhodu, ne záměr. Smlouva počítala s implementací za 450 hodin (770 004 Kč s DPH) a plánovaným dokončením do 1. 6. 2025; interně jsme si ale domlouvali dřívější ostrý start k 1. 11. 2024. Do té doby jsem měla sama vše připraveno na testovacím účtu, ale zmizela mi předpřipravená záloha pilotního projektu na Githubu. Mezitím se společníci Questu, Jakub Brada a Michal Plaček, rozdělili — zůstal pan Plaček a firma se přejmenovala na ODOPRO; víc na pozadí té změny nevidím. Od té doby se muselo začít vše nanovo, ale panu Plačkovi se to dařilo tajit asi měsíc a půl, až do 1. 11. 2024, kdy měl být ostrý start.",
    people: ["Andrea Matis", "Karel Ospalík", "Michal Plaček"],
    evidence: ["Smlouva Quest solutions s.r.o. — implementace Odoo, 21. 6. 2024", "Původní projektový plán Odoo a přílohy"],
    legal: "Od plánovaného startu 1. 11. 2024 začal kolotoč mých kontrol, eskalací a školení programátorského jazyka a podobně. Původní projektový plán a přílohy jasně ukazují, že jedinou stěžejní osobou projektu jsem měla být já.",
    tags: ["Odoo", "pracovněprávní", "obchodní"],
  },
  {
    id: "ev-2025-odoo",
    date: "01/2025",
    year: "2025",
    title: "Druhý pokus spuštění Odoo do ostrého provozu",
    text: "01/2025 proběhl druhý pokus spustit Odoo do ostrého provozu — první (1. 11. 2024) se nezdařil kvůli rozpadu firmy Quest/ODOPRO. Kontaktní osobou byl mimo jiné Michal Plaček. K projektu jsem tehdy zároveň vyřizovala dotační podporu z fondu ministerstva práce a průmyslu, který v té době poskytoval podnikatelům v Moravskoslezském kraji podporu na nákup strojů a zařízení a v rámci digitalizace i na implementaci ERP systému/software.",
    people: ["Andrea Matis", "Tomáš Maralík", "Michal Plaček"],
    evidence: ["Odoo komunikace", "E-maily", "Úkoly v systému"],
    legal: "Projekt jsem fakticky vedla já — téměř rok a půl intenzivní, z velké části samostatné práce na narovnání celého ERP od základu po nepovedené implementaci ODOPRO, včetně vyřízení dotační podpory na jeho financování. Odoo nebyl IT projekt, ale řízení provozního rizika: bez něj by firma nebyla v prodejném stavu — správně nastavené párování plateb dává přehled cash flow, nutný i pro prodej firmy (viz moje prohlášení v Poznámkách).",
    tags: ["Odoo", "mzda", "DPP", "pracovněprávní"],
  },
  {
    id: "ev-2025-moratorium-skoleni",
    date: "18. 6. 2025",
    year: "2025",
    title: "Moratorium na externí školení",
    text: "Pan Ospalík e-mailem (mně a Jiřímu Premusovi) vyhlásil moratorium na jakákoli externí školení, dokud nebude jisté, že personál dokonale zná Odoo. Zrušil tím i školení na Excel nebo IT dovednosti, které jsem navrhovala — argumentoval, že na ně není podepsaná smlouva.",
    people: ["Andrea Matis", "Karel Ospalík", "Jiří Premus"],
    evidence: ["E-mail Ospalíka 18. 6. 2025 — moratorium na školení"],
    legal: "Vydal to kvůli mně, abych se nevzdělávala v ničem jiném než v Odoo — přesně den před tím, než mi napsal, že systém vedení projektu bude „po jeho“, a týden před zahájením projektového plánu 23. 6. 2025.",
    tags: ["Odoo", "pracovněprávní"],
  },
  {
    id: "ev-2025-prislib",
    date: "23. 6. 2025",
    year: "2025",
    title: "Projektový plán Odoo — písemný příslib prémie 200 000 Kč",
    text: "Pan Ospalík mi 19. 6. 2025 e-mailem napsal: „Nemůžeme pověřit takovým úkolem někoho, kdo je tu zcela nový. Protože ani za 6 měsíců systém vedení projektu ala Plaček, Kokoruďa ani Tvůj nevedl k odstranění všech kritických chyb, bude systém vedení projektu po mém. ... Chtěl bych, abys se v tom stala profesionálem. Ty na to máš. Očekávám rozpracovaný plán do pondělí 23. 6.“ Projektový plán Oprava kritických chyb v implementaci Odoo: já jako projektová manažerka, zahájení 23. 6. 2025, termín oprav 30. 9. 2025. Dokument doslovně: „V případě částečného splnění bude prémie i standardní odměny (na základě hospodářských výsledků) krácena poměrně dle vyřešených chyb.“ Krácení se tedy výslovně týká i mé BĚŽNÉ odměny, ne jen mimořádné prémie za Odoo. Plán zároveň uvádí moji mzdu jako „65 000 Kč čistého / měsíčně“ — tato částka ale neodpovídá mým výplatním páskám z té doby, kde mám jako základní mzdu vedenou jinou (nižší) částku. Dokument tedy uvádí nesprávný/nadhodnocený údaj o mé skutečné základní mzdě.",
    people: ["Andrea Matis", "Karel Ospalík"],
    evidence: ["Projektový plán Odoo 23. 6. 2025 — příslib prémie", "E-mail Ospalíka 19. 6. 2025 — zadání termínu do pondělí 23. 6."],
    legal: "Implementátora jsem si podle plánu měla zajistit sama. Tři měsíce jsem jednala s dodavateli Odoo řešení pro ČR a SR — nikdo nechtěl opravovat nezdokumentovanou práci původního dodavatele (Quest/ODOPRO, p. Plaček); kapacitu nabízeli nejdřív od září, a ideálně stavět celé znovu. Spolupráci s Origamis (Brno) pomohlo doporučení externího ERP specialisty z Bratislavy, se kterým jsem se radila; do září 2025 byl ale Origamis jen expertní poradce, takže narovnávání zůstalo na mně — učila jsem se vše za pochodu sama. Prémie mi nebyla vyplacena — chci probrat, co z toho plyne. DŮLEŽITÉ: projekt začal 23. 6. 2025 — přesně v měsíci, kdy mi klesla na nulu i běžná odměna. Dokument výslovně píše, že se krácení „na základě hospodářských výsledků“ týká i standardní odměny, ale vyhodnocení má proběhnout až k 30. 9. 2025, ne hned na začátku. Chci se zeptat, jestli krácení mé běžné mzdy měsíc po startu projektu bylo v souladu s tímto plánem.",
    tags: ["Odoo", "mzda", "pracovněprávní"],
  },
  {
    id: "ev-2025-odebrani-agendy",
    date: "červen 2025",
    year: "2025",
    title: "Odebrání agendy výpočtu mezd — poprvé sáhl na mé odměny",
    text: "Byla mi odebrána část dosavadních pracovních agend, zejména výpočet mezd, který byl převeden na jiného pracovníka. Zároveň jsem ztratila přístup k podkladům, do nichž jsem dříve v rámci práce běžně nahlížela.",
    people: ["Andrea Matis", "Karel Ospalík"],
    evidence: ["Podnět OIP FINAL"],
    legal: "Tohle vnímám jako skutečný začátek tlaku — ne až e-mail z 11. 3. 2026. Podnět OIP to potvrzuje: „Přibližně od poloviny roku 2025 došlo k odebrání části mých dosavadních pracovních agend, zejména výpočtu mezd.“",
    tags: ["pracovněprávní", "mzda"],
  },
  {
    id: "ev-2025-tiche-signaly",
    date: "4. 7. – 8. 8. 2025",
    year: "2025",
    title: "„O lidech, zrcadlech a tichých signálech“ — a moje odpověď",
    text: "Pan Ospalík mi 4. 7. 2025 poslal e-mail nazvaný „Moje myšlenky - O lidech, zrcadlech a tichých signálech“ — vágní text o důvěře, transparentnosti a potřebě „resetu“, bez konkrétního obsahu. Skoro dva týdny jsem nad odpovědí přemýšlela a několikrát ji upravila. V odpovědi z 8. 8. 2025 jsem podrobně popsala své nasazení (ERP jsem intenzivně řešila od 29. 4. 2024, smazanou zálohu pilotního projektu na Githubu), zpochybnění restrikce mých odměn jsem označila za demotivující a upřímně urážející, a připomněla, že na začátku svého působení ve firmě jsem čekala sedm měsíců, než mi dokončil slíbenou věc z mého předchozího zaměstnání.",
    people: ["Andrea Matis", "Karel Ospalík"],
    evidence: ["E-mail Ospalíka 4. 7. 2025 — O lidech, zrcadlech a tichých signálech", "Moje odpověď 8. 8. 2025"],
    legal: "Tuto svou odpověď jsem 8. 8. 2025 poslala i na e-mail pana Neffeho (neffe@gt-sports.cz) — dokládá to, že byl do vnitřního napětí zasvěcen mnohem dřív, než ukazuje zbytek časové osy. Vnímám ten první e-mail jako psychologický tlak bez konkrétního obsahu — chci probrat, jestli má tohle nějakou právní relevanci.",
    tags: ["pracovněprávní", "diskriminace", "Odoo"],
  },
  {
    id: "ev-2025-maralik",
    date: "září 2025",
    year: "2025",
    title: "Najat Tomáš Maralík a zesílení e-mailových výtek",
    text: "Byl najat nový IT kolega Tomáš Maralík, který měl postupně převzít ERP agendu — podle mě k tomu ale neměl dostatečné zkušenosti. Zároveň zesílily e-mailové výtky, urgence a postupné omezování mého postavení.",
    people: ["Andrea Matis", "Tomáš Maralík", "Karel Ospalík"],
    evidence: ["E-mail Maralíka 4. 5. 2026", "Odoo komunikace", "E-mailové výtky", "Výzva 30. 4. 2026"],
    legal: "Vnímám to jako druhou fázi tlaku, který začal už v červnu odebráním mzdové agendy a odtud dál gradoval. Zpětně to vidím jako přípravu na moje nahrazení.",
    tags: ["Odoo", "pracovněprávní", "diskriminace"],
  },
  {
    id: "ev-2026-vyuka",
    date: "01/2026",
    year: "2026",
    title: "Zaškolování Maralíka v Odoo",
    text: "Začala jsem pana Maralíka učit Odoo ERP na přání pana Ospalíka.",
    people: ["Andrea Matis", "Tomáš Maralík", "Karel Ospalík"],
    evidence: ["Odoo komunikace", "Timely report"],
    legal: "Dokládá, že jsem dál normálně pracovala a předávala své know-how.",
    tags: ["Odoo", "pracovněprávní"],
  },
  {
    id: "ev-2026-rezim",
    date: "březen 2026",
    year: "2026",
    title: "Návrh režimu práce manažerů",
    text: "Pan Ospalík předložil návrh k připomínkování; moje připomínky ale nebyly nijak zapracovány ani akceptovány. Navrhoval mimo jiné, že manažeři nesmí mít víc než 3 nápady/podněty za týden, a argumentoval to tím, abychom měli osobní život, volný čas a podobně. Právě na základě jeho vlastního podnětu jsem si začala měřit pracovní dobu (viz Timely). Režim se měl oficiálně týkat i kolegy Premuse — od doby, kdy jsem do firmy nastoupila, měla být podle mě jeho manažerská pozice upravena podle faktického stavu. Český zákoník práce ale jeho fakticky vykonávanou funkci (\"povolání zeť\") neřadí do žádné z prací; podle rozvrhu docházel do firmy hlavně k dobití auta a na procházku, aby bylo vidět, že tam byl.",
    people: ["Andrea Matis", "Karel Ospalík"],
    evidence: ["Vnitřní směrnice verze 1"],
    legal: "Verze 1 zachycuje pravidla odměňování tak, jak jsem jim tehdy rozuměla — připomínkování bylo podle mě jen formální. Zvláštní pro mě je, že stejný přísný režim měl platit i pro pana Premuse, jehož skutečná pracovní náplň podle mě neodpovídala ničemu, co zákoník práce zná jako druh práce — chci se zeptat, co z tohoto nerovného zacházení plyne. Důležité: tím, že sám argumentoval omezením nápadů kvůli potřebě mít osobní život a volný čas, prokazatelně věděl, že se pracuje i po pracovní době — to považuji za přímý důkaz jeho vědomí o mých přesčasech.",
    tags: ["mzda", "pracovněprávní"],
  },
  {
    id: "ev-2026-duediligence",
    date: "12. 3. 2026",
    year: "2026",
    title: "Pokyn ke kompletaci dokumentů pro due diligence",
    text: "Dostala jsem pokyn ke kompletaci dokumentů; teprve poté mi došel účel — příprava prodeje firmy běžela od jara 2026 bez mého vědomí a užší výběr 2 zájemců probíhal bez mé účasti.",
    people: ["Andrea Matis", "Karel Ospalík"],
    evidence: ["Podklad advokát vozidla PRIORITA"],
    legal: "Působí to na mě, jako by odvolání bylo načasované k prodeji a já z něj byla záměrně vyloučena — posouzení nechám na Vás.",
    tags: ["obchodní", "jednatel"],
  },
  {
    id: "ev-2026-ssangyong",
    date: "jaro 2026",
    year: "2026",
    title: "Prodej vozidla SsangYong Korando",
    text: "Vozidlo jsem si předtím zaplatila z bonusové složky své mzdy a odměn, ale nikdy nebylo přepsáno na mě jako fyzickou osobu — pořád bylo vedené na TRAIVA s.r.o. Prodala jsem ho v době, kdy jsem byla jednatelkou — podle notářského zápisu jsem mohla samostatně jednat do 1 mil. Kč, prodej za 330 000 Kč byl tedy v mém oprávnění. Čistý výtěžek 237 593 Kč (330 000 − provize 33 000 − náklady 59 407) mám fyzicky u sebe. Příjmový doklad uvádí vyplacení komitentovi Traiva — to neodpovídá skutečnosti.",
    people: ["Andrea Matis", "Karel Ospalík", "Karel Neffe"],
    evidence: ["Doklady k vozidlům", "Pokladní doklad 237 593 Kč"],
    legal: "Hotovost nechávám netknutou stranou; jak ji správně vypořádat, chci probrat na konzultaci. Kvůli tomu, že auto bylo formálně vedené na firmu, i když jsem ho zaplatila ze svých odměn, se mě pan Ospalík snaží nyní vyhrožovat udáním za zpronevěru — chci probrat, jak se proti tomu bránit.",
    tags: ["vozidla", "obchodní"],
  },
  {
    id: "ev-2026-vyzva",
    date: "30. 4. 2026",
    year: "2026",
    title: "Výzva a přehled požadavků",
    text: "Poslala jsem výzvu s přehledem svých požadavků; krátce poté začaly kroky proti mně.",
    people: ["Andrea Matis", "Karel Ospalík"],
    evidence: ["Výzva 30. 4. 2026", "Finanční rekonciliace"],
    legal: "Časová návaznost dalších událostí na tuto výzvu mi přijde důležitá.",
    tags: ["pracovněprávní", "obchodní"],
  },
  {
    id: "ev-2026-maralik-mail",
    date: "4. 5. 2026",
    year: "2026",
    title: "E-mail Maralíka Ospalíkovi bez vědomí AM",
    text: "O e-mailu jsem nevěděla; beru ho jako potvrzení toho, komu je pan Maralík loajální. Pan Maralík — pod tlakem pana Ospalíka, který ho ten den urgoval — prezentoval svůj AI-asistovaný skript (BRL) jako trvalé řešení párování plateb, ačkoli šlo o nadstavbu nad cizím vývojem a o dočasné řešení, které jsem sama schválila jen jako můstek pro uzávěrku. Paralelní nasazení porušovalo architekturu, kterou jsme od nepovedené implementace ODOPRO narovnávali s Origamis.",
    people: ["Tomáš Maralík", "Karel Ospalík", "Andrea Matis"],
    evidence: ["E-mail Maralíka 4. 5. 2026", "Odoo párování plateb — stav projektu 7. 5. 2026"],
    legal: "Podkopalo to moji autoritu procesní vlastnice a zpochybnilo, že vím, co dělám — týden před mým odvoláním. Počítám s tím, že by pan Maralík nesvědčil v můj prospěch.",
    tags: ["Odoo", "pracovněprávní"],
  },
  {
    id: "ev-2026-email-zakaz",
    date: "8. 5. 2026",
    year: "2026",
    title: "Zákaz komunikace z jiné než firemní e-mailové adresy",
    text: "Dostala jsem formální zákaz komunikovat z jiné než firemní e-mailové adresy.",
    people: ["Andrea Matis", "Karel Ospalík"],
    evidence: ["E-mailová komunikace"],
    legal: "Dávám do souvislosti s pozdějším odebráním firemních přístupů — pak jsem neměla jak komunikovat.",
    tags: ["pracovněprávní"],
  },
  {
    id: "ev-2026-odvolani",
    date: "12. 5. 2026",
    year: "2026",
    title: "Odvolání z funkce, karta a GPS",
    text: "V jeden den jsem byla odvolána z funkce jednatelky (podpis rozhodnutí jsem odmítla, kopii mi nepředali), byla mi zablokována firemní karta, přišla SMS o aktivaci GPS sledování bez mého souhlasu, byla mi nařízena dovolená ze dne na den (bez předchozího upozornění na termín — tu jsem k podpisu dostala a podepsala, ale vlastní kopii mi také nepředali) a začalo postupné odebírání všech přístupů do systémů, se kterými jsem pracovala.",
    people: ["Andrea Matis", "Karel Ospalík", "Vojtěch Ospalík"],
    evidence: ["SMS 12. 5. 2026", "Prohlášení o doručení 21. 5. 2026"],
    legal: "Vše proběhlo v jeden den — co z toho pro mě plyne, chci probrat.",
    tags: ["jednatel", "GPS", "GDPR", "obchodní", "pracovněprávní"],
  },
  {
    id: "ev-2026-web-odstraneni",
    date: "12. 5. 2026",
    year: "2026",
    title: "Odstranění z firemního webu",
    text: "Podle kolegů je firemní web v tomto stavu už ode dne, kdy mě pan Ospalík odvolal z funkce jednatelky — 12. 5. 2026. Byla jsem z něj kompletně odstraněna: zmizely všechny moje články, kontaktní formulář i moje údaje. Stav jsem si potvrdila screenshotem stránky Náš tým z 15. 6. 2026, kde už nejsem uvedena. Že jsem na této stránce skutečně dlouhodobě figurovala, dokládá i to, že jsem si sama (2024–2025) s externí agenturou Sniper Design zadávala její redesign a úpravy funkcionality.",
    people: ["Andrea Matis", "Karel Ospalík"],
    evidence: ["Screenshot stránky Náš tým 15. 6. 2026", "E-mailové vlákno „sniperdesign zakázky“ 2024–2025"],
    legal: "Vnímám odstranění jako účelové — snahu vymazat moji roli ve firmě navenek, ještě než bylo cokoliv vypořádáno, a to hned v den odvolání. Ironické mi přijde, že přesně o totéž (kompletní vymazání odevšad) mě sám žádal v roce 2024, když odcházel do důchodu. V kontaktech je přitom nyní nově přidán Karel Ospalík jako CEO — v době, kdy se úpravy webu zadávaly Sniper Designu (2024–2025), on sám na webu vůbec nefiguroval, protože si to po formálním odchodu do důchodu přál.",
    tags: ["pracovněprávní", "GDPR", "jednatel"],
  },
  {
    id: "ev-2026-bmw-incident",
    date: "5/2026 (datum ověřit)",
    year: "2026",
    title: "Incident s BMW X1 — zadržení vozidla a odpojení GPS",
    text: "Pan Ospalík ode mě pod záminkou převzal klíče od BMW X1 (vlastník Under8/NK, já výhradní řidič dle Přílohy č. 1) a týž den mi písemně zrušil home office. Vozidlo zadržel a jeho vydání podmínil vrácením hotovosti za SsangYong; odpojil také GPS z vozidla, které patří NK. Při jednání beze svědků jsem se cítila ohrožená.",
    people: ["Andrea Matis", "Karel Ospalík", "Karel Neffe"],
    evidence: ["Záznam incidentu s vozidlem", "WhatsApp zprávy o BMW a home office"],
    legal: "Jak se na zadržení auta, odpojení GPS a podmiňování vydání dívat právně, netuším — prosím o posouzení.",
    tags: ["vozidla", "pracovněprávní", "GPS"],
  },
  {
    id: "ev-2026-karta",
    date: "19. 5. 2026",
    year: "2026",
    title: "Pozastavení plateb na firemní kartě",
    text: "Platby na mé firemní kartě byly jednostranně pozastaveny.",
    people: ["Andrea Matis", "Karel Ospalík"],
    evidence: ["Záznamy platební karty", "Interní komunikace"],
    legal: "Další omezení hned po odvolání.",
    tags: ["jednatel", "pracovněprávní"],
  },
  {
    id: "ev-2026-doruceni",
    date: "21. 5. 2026",
    year: "2026",
    title: "Prohlášení o doručení rozhodnutí o odvolání",
    text: "Podala jsem písemné prohlášení o průběhu doručení; kopii rozhodnutí o odvolání jsem nedostala.",
    people: ["Andrea Matis", "Karel Ospalík"],
    evidence: ["Prohlášení o doručení 21. 5. 2026"],
    legal: "Nevím, jestli takový postup byl formálně v pořádku — chci se zeptat.",
    tags: ["jednatel", "obchodní"],
  },
  {
    id: "ev-2026-pristupy",
    date: "konec 5/2026",
    year: "2026",
    title: "Odebrání přístupů",
    text: "Byl mi odebrán firemní e-mail, OneDrive/SharePoint i systémy třetích stran; zároveň po mně byly požadovány výstupy. Ty stěžejní přístupy mi odebral až poté, co jsem se na půl dne „vrátila“ z nařízené dovolené.",
    people: ["Andrea Matis", "Karel Ospalík"],
    evidence: ["Záznamy přístupů", "E-mail 11. 6. 2026"],
    legal: "Bez přístupů nemohu pracovat, i když pracovat chci — jak se to posuzuje, nechám na Vás.",
    tags: ["pracovněprávní", "mzda"],
  },
  {
    id: "ev-2026-smernice2",
    date: "3. 6. 2026",
    year: "2026",
    title: "Nová vnitřní směrnice verze 2",
    text: "Nová směrnice Režim práce a měření výsledků manažerů verze 2, tentokrát už bez možnosti připomínkování.",
    people: ["Andrea Matis", "Karel Ospalík"],
    evidence: ["Vnitřní směrnice verze 1 + 2"],
    legal: "Chci porovnat, co se změnilo oproti verzi 1, kterou jsem znala.",
    tags: ["mzda", "pracovněprávní"],
  },
  {
    id: "ev-2026-zp208",
    date: "11. 6. 2026",
    year: "2026",
    title: "Žádost o obnovení přístupů a vyúčtování mzdy",
    text: "Poslala jsem formální žádost o obnovení přístupů a vyúčtování mzdy (e-mail odeslán ve 23:59).",
    people: ["Andrea Matis", "Karel Ospalík"],
    evidence: ["E-mail 11. 6. 2026"],
    legal: "Chtěla jsem doložit, že pracovat chci a překážka není na mé straně.",
    tags: ["mzda", "pracovněprávní"],
  },
  {
    id: "ev-2026-stav",
    date: "19. 6. 2026",
    year: "2026",
    title: "Stav ke dni sepsání",
    text: "Jsem bez přístupů a fakticky bez možnosti pracovat, a to od 12. 5. 2026.",
    people: ["Andrea Matis"],
    evidence: ["Podklady pro advokáta", "E-mail 11. 6. 2026"],
    legal: "Výchozí stav, se kterým přicházím na konzultaci.",
    tags: ["mzda", "pracovněprávní"],
  },
];

const evidence = [
  { id: "e-whatsapp", title: "WhatsApp 20. 5. 2021", type: "Komunikace", date: "20. 5. 2021", strength: 5, proves: ["podmínky odměňování k pozici produktové/obchodní manažerky", "první zmínka o podílu na výsledcích do budoucna", "moje osobní iniciativa"], risk: "Export chatu zajištěn na Drive (zpráva 20. 5. 2021, 13:20: „probereme odměnu za duben a podíl na výsledcích do budoucna“). Konkrétní podíly 5 % / 10 % přišly až e-mailem 4. 8. 2023.", file: "https://drive.google.com/file/d/17-QQlBM_O_F5DwRXIPcWHScBjr2GoIf4/view", tags: ["obchodní"], people: ["Andrea Matis", "Karel Ospalík"] },
  { id: "e-potvrzeni", title: "Formální potvrzení 1. 1. 2024", type: "Dokument / e-mail", date: "1. 1. 2024", strength: 5, proves: ["potvrzení slibu", "záměr pana Ospalíka", "moje jmenování", "návrh mi pan Ospalík poslal e-mailem už 4. 8. 2023"], risk: "Kopie zajištěna — dokument Odměny a smlouva Andrea i originál e-mailu ze 4. 8. 2023 (.msg s hlavičkami) jsou na Drive.", file: "https://drive.google.com/file/d/10c_dDHxW25JV8M8YPoEYFLROQOmIoX0S/view", tags: ["jednatel", "obchodní"], people: ["Andrea Matis", "Karel Ospalík"] },
  { id: "e-usneseni", title: "Usnesení 24. 6. 2024", type: "Firemní dokument", date: "24. 6. 2024", strength: 5, proves: ["moje jmenování jednatelkou č. 2 (NZ 160/2024)", "samostatné zastupování do 1 mil. Kč — prodej SsangYong za 330 000 Kč byl v mém oprávnění", "funkci jsem vykonávala bez smlouvy"], risk: "Notářský zápis zajištěn na Drive. Smlouva o výkonu funkce nikdy nevznikla — zeptat se, co to znamená.", file: "https://drive.google.com/file/d/1eCAa25alrAYcvMjsaBmiR_GSXIW1OhTj/view", tags: ["jednatel", "obchodní"], people: ["Andrea Matis"] },
  { id: "e-odoo-prislib", title: "Projektový plán Odoo 23. 6. 2025 — příslib prémie", type: "Projektový plán (dokument)", date: "23. 6. 2025", strength: 5, proves: ["písemný příslib prémie 200 000 Kč (sekce 9)", "termín dokončení oprav 30. 9. 2025", "při částečném splnění poměrné krácení"], risk: "Dokument zajištěn na Drive. Termín 30. 9. 2025 byl nereálný: kvůli nezdokumentované práci původního dodavatele nikdo opravy nechtěl převzít (kapacity až od září, doporučení stavět znovu) — Origamis jsem po 3 měsících jednání získala do 09/2025 jen jako poradce. Prémie nevyplacena.", tags: ["Odoo", "mzda"], people: ["Andrea Matis", "Karel Ospalík"], file: "https://drive.google.com/file/d/1FrVQQwA-fRW6GJwdnDmo0kXz7wYg4tvI/view" },
  { id: "e-rekonciliace", title: "Finanční rekonciliace 30. 4. 2026", type: "Finanční podklad", date: "30. 4. 2026", strength: 4, proves: ["optimalizace 25-27 mil. Kč", "podklad pro výpočet 5 % podílu"], risk: "Vytvořila jsem si to jako vlastní poznámky pro sebe — nikdy je nikdo neviděl, jsou přísně důvěrné. Vycházím ale výhradně z účetních uzávěrek, daňových přiznání a stavu účtů firmy — všechno je to doložitelné, nejde o odhad od oka.", file: "https://drive.google.com/file/d/1PRXtPPldc0yY25mBHotKh7fITXUa45Ax/view", tags: ["obchodní"], people: ["Andrea Matis"] },
  { id: "e-paska", title: "Výplatní pásky HPP + DPP 04/2025", type: "Mzdový dokument", date: "duben 2025", strength: 4, proves: ["průměrný výdělek 549,18 Kč/h", "moje mzdová základna", "3 souběžné smlouvy"], risk: "Musím dohledat DPP smlouvy — na těch pozicích jsem fakticky nepracovala.", tags: ["mzda", "DPP", "pracovněprávní"], people: ["Andrea Matis"] },
  { id: "e-dpp", title: "DPP smlouvy TRAIVA + Traiva Safety", type: "Smlouvy", date: "2021-2026", strength: 4, proves: ["mzda byla rozdělena mezi 1× HPP a 2× DPP — TRAIVA: „kompletace a úpravy výrobků“, Safety: „správa webu“", "šlo o standardní nastavení pro všechny zaměstnance, které jsem znala a akceptovala", "limit 300 h/rok, 25 h/měsíc, výplata na můj běžný účet"], risk: "Kopie zajištěny — 4 podepsané dohody (2025 + 2026) na Drive.", file: "https://drive.google.com/drive/folders/1YLt0OQusVLWSpipF4unEdlyQHfjx130M", tags: ["DPP", "mzda", "pracovněprávní"], people: ["Andrea Matis"] },
  { id: "e-oip", title: "OIP podnět připraven", type: "Úřední podání", date: "2026", strength: 3, proves: ["souhrn toho, co považuji za porušení vůči mně"], risk: "Zatím neodesláno — chci se poradit, zda a kdy podat (OIP Ostrava).", tags: ["OIP", "pracovněprávní"], people: ["Andrea Matis"] },
  { id: "e-vyzva", title: "Výzva 30. 4. 2026", type: "Výzva / přehled požadavků", date: "30. 4. 2026", strength: 5, proves: ["moje požadavky vznesené písemně", "poté začaly kroky proti mně"], risk: "Časovou návaznost považuji za důležitou — posoudí advokát.", tags: ["pracovněprávní", "obchodní"], people: ["Andrea Matis", "Karel Ospalík"] },
  { id: "e-email-208", title: "E-mail 11. 6. 2026", type: "E-mail", date: "11. 6. 2026", strength: 5, proves: ["moje žádost o přístupy", "ochota pracovat"], risk: "Odesláno z mé soukromé adresy ve 23:59 — firemní mi byla odebrána.", tags: ["mzda", "pracovněprávní"], people: ["Andrea Matis", "Karel Ospalík"] },
  { id: "e-timely", title: "Timely report 673h 43m", type: "Evidence pracovní doby", date: "3-5/2026", strength: 4, proves: ["moje přesčasy", "noční práce", "rozsah práce"], risk: "O používání Timely jsem zaměstnavatele dříve informovala. Ke každému záznamu Timely automaticky generuje log a časové razítko — nejde tedy o dodatečně sepsaný odhad, ale o průběžně strojově zaznamenávanou evidenci.", tags: ["mzda", "pracovněprávní"], people: ["Andrea Matis"] },
  { id: "e-gps", title: "SMS T-Mobile — lokalizace SIM 12.–20. 5. 2026", type: "SMS (screenshot zajištěn)", date: "12. 5. 2026", strength: 4, proves: ["12. 5. 11:23 — zapnuta lokalizace mé SIM (služba Kde je) bez mého souhlasu", "13. 5. 9:00 — lokalizace vypnuta", "20. 5. 10:14 — zapnuta další služba na mém čísle"], risk: "SMS výslovně říká „O lokalizaci nebudete vědět“ — o aktivaci jsem se dozvěděla jen z této zprávy. Screenshot zajištěn na Drive.", file: "https://drive.google.com/file/d/1R_K_qFHMwjBQb-WXERUERcWfWPgll4zT/view", tags: ["GPS", "GDPR", "pracovněprávní"], people: ["Andrea Matis", "Karel Ospalík"] },
  { id: "e-maralik", title: "E-mail Maralíka 4. 5. 2026", type: "E-mail", date: "4. 5. 2026", strength: 3, proves: ["loajalita pana Maralíka k panu Ospalíkovi"], risk: "Nepočítám s ním jako se svědkem v můj prospěch.", tags: ["Odoo", "pracovněprávní"], people: ["Tomáš Maralík", "Karel Ospalík"] },
  { id: "e-doruceni", title: "Prohlášení o doručení 21. 5. 2026", type: "Prohlášení", date: "21. 5. 2026", strength: 3, proves: ["průběh doručení", "podpis rozhodnutí o odvolání jsem odmítla a kopii mi nepředali — dokument jsem si ale sama stáhla (z justice.cz nebo firemního serveru, ještě když jsem měla přístupy)"], risk: "Zeptat se, zda byl postup formálně v pořádku a zda původ kopie něčemu vadí. Dokument je na Drive.", file: "https://drive.google.com/file/d/1ChNAkLj2o5Cvjbc2JfRfXQN6oVFFCr4R/view", tags: ["jednatel", "obchodní"], people: ["Andrea Matis"] },
  { id: "e-paska-2025-05", title: "Výplatní páska 05/2025 — prémie na vrcholu (61 907 Kč)", type: "Mzdové dokumenty (HPP)", date: "05/2025", strength: 5, proves: ["hrubá mzda 112 771 Kč, z toho prémie 61 907 Kč", "průměr pro náhrady 549,18 Kč/h — hodnota, ze které později došlo k poklesu"], risk: "Zajištěno na Drive. Referenční bod pro srovnání s pozdějším poklesem.", tags: ["mzda"], people: ["Andrea Matis"], file: "https://drive.google.com/file/d/1tVyS-yASuMZFa4vXXTNCkkctzyOePVtD/view" },
  { id: "e-paska-2025-06-08", title: "Výplatní pásky 06–08/2025 — prémie 0 Kč dva měsíce, pak částečné doplacení", type: "Mzdové dokumenty (HPP)", date: "06-08/2025", strength: 4, proves: ["červen 2025: prémie 0 Kč — přesně měsíc zahájení projektového plánu Odoo (23. 6. 2025)", "červenec 2025: prémie také 0 Kč (podle mě — skutečná červencová páska zatím nedohledána, e-mail „7/2025“ obsahuje duplicitně červnová data)", "srpen 2025: mi bylo 31 000 Kč vráceno/doplaceno — ne nová prémie, ale částečné narovnání za předchozí dva nulové měsíce"], risk: "Zajištěno na Drive (červen, srpen). Souvisí to podle mě s projektovým plánem Odoo z 23. 6. 2025 — ten sice váže krácení standardní odměny až na vyhodnocení k 30. 9. 2025, ale moje běžná odměna klesla na nulu už v měsíci zahájení projektu. Chci probrat s advokátem, jestli to bylo v souladu s plánem — a najít skutečnou červencovou pásku.", tags: ["mzda", "Odoo"], people: ["Andrea Matis"], file: "https://drive.google.com/drive/folders/10cYncs-DqJjerMVHXjwAdaNLvDQOKl4V" },
  { id: "e-paska-2025-12", title: "Výplatní páska 12/2025 — prémie už klesla na 14 800 Kč", type: "Mzdové dokumenty (HPP)", date: "12/2025", strength: 4, proves: ["prémie klesla z 61 907 Kč (05/2025) na 14 800 Kč — pokles začal dřív, než jsem čekala", "čerpáno 27 dní / 216 h dovolené v prosinci"], risk: "Zajištěno na Drive. Podle mě tlak nezačal až mým e-mailem z 11. 3. 2026 — začal už v červnu 2025 a zesílil v září 2025, kdy byl najat nový IT kolega. Chci probrat s advokátem, jak se tahle dřívější časová linie promítá do posouzení.", tags: ["mzda"], people: ["Andrea Matis"], file: "https://drive.google.com/file/d/1Cq_4cxc_w9ySSvTbgx5HkdjjdWT-8aRi/view" },
  { id: "e-paska-2026", title: "Výplatní pásky 2-5/2026 — prémie 0 a pokles průměru", type: "Mzdové dokumenty", date: "2-5/2026", strength: 5, proves: ["prémie 0 Kč (úplný pokles ze 61 907 Kč v 05/2025)", "průměr pro náhrady klesl na 457,63 Kč/h (z 549,18)", "květen 2026: měsíc krytý převážně náhradami (dovolená + placené volno, 43 932 Kč) — řádek překážek zaměstnavatel nevykazuje, přestože mi odebral přístupy"], risk: "Zajištěno na Drive (7 pásek 2-5/2026). Dovolená mi byla NAŘÍZENA 12. 5. 2026 — v den odvolání, ze dne na den, bez předchozího upozornění na termín; nařízení jsem podepsala, ale vlastní kopii mi nepředali. Rozhodnutí o odvolání jsem naopak odmítla podepsat. Zeptat se advokáta: smí se dovolená nařizovat takto, a smí firma dobu bez přístupů vykazovat jako mou dovolenou místo překážek na své straně?", tags: ["mzda", "pracovněprávní"], people: ["Andrea Matis"], file: "https://drive.google.com/drive/folders/10cYncs-DqJjerMVHXjwAdaNLvDQOKl4V" },
  { id: "e-obdobi1", title: "Fio banka + smlouvy — Období I", type: "Bankovní a smluvní dokumentace", date: "2021-2024", strength: 4, proves: ["jednala jsem s bankou za firmu už v 8/2023", "29. 4. 2024 jsem podepsala rámcovou kupní smlouvu se Západoslovenskou distribučnou za firmu — 2 měsíce před jmenováním", "podepisovala jsem i další smlouvy (pracovnělékařské služby)", "faktický výkon funkce před 24. 6. 2024"], risk: "Doklady zajištěny na Drive (složka 6 Období I). Doplnit jména svědků.", tags: ["jednatel", "obchodní"], people: ["Andrea Matis"], file: "https://drive.google.com/drive/folders/1HNxdu3BUiVnsyqLsz3beE1RdfzDHrNYv" },
  { id: "e-vozidla-doklady", title: "Doklady k vozidlům + pokladní doklad", type: "Smlouvy / účetní doklady", date: "2026", strength: 4, proves: ["prodej SsangYong 330 000 Kč", "čistý výtěžek 237 593 Kč", "rozpor dokladu se skutečností", "Příloha č. 1 — já jako výhradní řidič BMW"], risk: "Musím doložit smlouvy, předávací protokol, plnou moc a doklady, že jsem SsangYong splácela ze svých odměn.", tags: ["vozidla", "obchodní"], people: ["Andrea Matis", "Karel Ospalík", "Karel Neffe"] },
  { id: "e-incident", title: "Záznam incidentu s vozidlem", type: "Vlastní záznam + WhatsApp", date: "5/2026", strength: 3, proves: ["zadržení BMW", "zrušení home office týž den", "podmínění vydání vrácením hotovosti", "odpojení GPS"], risk: "Jednání proběhlo beze svědků; musím zajistit screenshoty WhatsApp s datem/časem a záznam GPS o pohybu BMW.", tags: ["vozidla", "pracovněprávní", "GPS"], people: ["Andrea Matis", "Karel Ospalík"] },
  { id: "e-smernice", title: "Vnitřní směrnice verze 1 + 2", type: "Interní směrnice", date: "2026", strength: 4, proves: ["pravidla odměňování", "manažerský režim", "změny podmínek"], risk: "Verze 1 z doby slibu je podle mě důležitá pro základ bonusu.", tags: ["mzda", "pracovněprávní"], people: ["Andrea Matis", "Karel Ospalík"] },
];

const people = [
  { id: "p-andrea", name: "Ing. Andrea Matis", role: "zaměstnanec HPP, produktová manažerka, jednatelka 24. 6. 2024 - 12. 5. 2026", documents: 23, events: 20, claims: 7, tags: ["jednatel", "mzda", "DPP", "pracovněprávní"] },
  { id: "p-karel", name: "Ing. Karel Ospalík", role: "jednatel a jediný vlastník TRAIVA s.r.o.", documents: 15, events: 18, claims: 7, tags: ["obchodní", "GPS", "pracovněprávní"] },
  { id: "p-traiva", name: "TRAIVA s.r.o.", role: "zaměstnavatel, rodinná firma v procesu prodeje", documents: 15, events: 20, claims: 7, tags: ["pracovněprávní", "obchodní"] },
  { id: "p-neffe", name: "Karel Neffe", role: "potenciální kupující doporučený AM, NKtech s.r.o. + GTSPORTS; vlastník BMW X1 (Under8/NK Technology), komisionář prodeje SsangYongu; do vnitřního napětí zasvěcen už od 8. 8. 2025 (moje odpověď na e-mail Ospalíka)", documents: 4, events: 5, claims: 3, tags: ["obchodní", "vozidla"] },
  { id: "p-quest", name: "Quest s.r.o. / ODOPRO s.r.o.", role: "původní ERP dodavatel; podzim 2024 se společníci Jakub Brada a Michal Plaček rozdělili, zůstal p. Plaček a firma se přejmenovala na ODOPRO — implementaci nechal nezdokumentovanou, radil se ve facebookových poradnách a najímal externí programátory", documents: 5, events: 4, claims: 1, tags: ["Odoo"] },
  { id: "p-origamis", name: "Origamis (Brno)", role: "expertní poradce Odoo od léta 2025, plná realizace od 09/2025; získala jsem je po 3 měsících jednání s dodavateli pro ČR a SR, s doporučením externího ERP specialisty z Bratislavy", documents: 3, events: 2, claims: 1, tags: ["Odoo"] },
  { id: "p-placek", name: "Michal Plaček", role: "kontakt ERP dodavatele", documents: 4, events: 4, claims: 1, tags: ["Odoo"] },
  { id: "p-tomas", name: "Tomáš Maralík", role: "IT asistent najatý od 09/2025; dokument označuje jako rizikového svědka", documents: 5, events: 6, claims: 2, tags: ["Odoo", "pracovněprávní"] },
  { id: "p-vojtech", name: "Vojtěch Ospalík", role: "související osoba u odvolání a interních kroků", documents: 3, events: 2, claims: 1, tags: ["jednatel"] },
];

const driveFolderUrl = "https://drive.google.com/drive/folders/1cHt8gpq7G0hVBAz4sqKPYYGAhJVf_BDJ";

const documents = [
  { id: "d-main", title: "Podklady pro advokáta Matis", type: "hlavní spis", date: "19. 6. 2026", tags: ["pracovněprávní", "obchodní"], file: "https://docs.google.com/document/d/1mbjYSxnS4vBEAi9slsNKMU9BG0HeBb5CBNyMXR-vWR0/edit" },
  { id: "d-odoo-plan-puvodni", title: "Původní projektový plán Odoo a přílohy (Quest)", type: "projektový plán + přílohy, podzim 2024", date: "podzim 2024", tags: ["Odoo", "pracovněprávní"], file: "https://drive.google.com/drive/u/0/folders/1TdLGqBCNzM-u4cfPJ8P3O7aEGiIiKzAX" },
  { id: "d-odoo-smlouva-quest", title: "Smlouva Quest solutions s.r.o. — implementace Odoo", type: "smlouva o dílo, účinná 21. 6. 2024", date: "21. 6. 2024", tags: ["Odoo", "obchodní"], file: "https://drive.google.com/file/d/1GxFBBo826MEQbquhT-UeWtN3HrHYm2JZ/view" },
  { id: "d-whatsapp", title: "WhatsApp 20. 5. 2021 (plný přepis konverzace)", type: "důkazní příloha", date: "2021", tags: ["obchodní"], file: "https://drive.google.com/file/d/1MW_PSKNiBfFRo8swK--78Fqmpzjpf2iJ/view" },
  { id: "d-potvrzeni", title: "Formální potvrzení 1. 1. 2024 (Odměny a smlouva)", type: "důkazní příloha", date: "1. 1. 2024", tags: ["jednatel", "obchodní"], file: "https://drive.google.com/file/d/12GHeMwprTYm71fh0DZg-mw299h2KzPD-/view" },
  { id: "d-usneseni", title: "Notářský zápis — jmenování jednatelkou", type: "rozhodnutí jediného společníka (sken)", date: "24. 6. 2024", tags: ["jednatel"], file: "https://drive.google.com/file/d/1eCAa25alrAYcvMjsaBmiR_GSXIW1OhTj/view" },  { id: "d-payroll", title: "Výplatní pásky 04/2025, 05/2025, 12/2025 + 02–05/2026 (13×)", type: "mzdová příloha — vývoj prémií od vrcholu po pokles na nulu", date: "2025-2026", tags: ["mzda", "DPP"], file: "https://drive.google.com/drive/folders/10cYncs-DqJjerMVHXjwAdaNLvDQOKl4V" },
  { id: "d-timely", title: "Timely výkaz činnosti 3–4/2026", type: "evidence pracovní doby", date: "3-4/2026", tags: ["mzda", "pracovněprávní"], file: "https://drive.google.com/file/d/1EoD5fzM1_kKVf4ZjlslXeKcq-rp3EB4y/view" },
  { id: "d-dpp", title: "DPP TRAIVA + Traiva Safety (4 podepsané dohody)", type: "TRAIVA: „kompletace výrobků“ 400/500 Kč·h; Safety: „správa webu“ 400 Kč·h", date: "2025-2026", tags: ["DPP", "mzda"], file: "https://drive.google.com/drive/folders/1YLt0OQusVLWSpipF4unEdlyQHfjx130M" },
  { id: "d-mzdovy-vymer", title: "Mzdový výměr od 1. 4. 2026", type: "základní mzda 63 000 Kč (bez prémií)", date: "1. 4. 2026", tags: ["mzda", "pracovněprávní"], file: "https://drive.google.com/file/d/1d-Lcg37_8b-hHvUa4bbU2kNb94qRgUw4/view" },
  { id: "d-zsd", title: "Rámcová kupní smlouva ZSD (Bratislava) — můj podpis za firmu", type: "podepsáno 29. 4. 2024 — 2 měsíce před jmenováním jednatelkou", date: "29. 4. 2024", tags: ["jednatel", "obchodní"], file: "https://drive.google.com/file/d/1Kj40mPnCi7YRAcMCo9vCKTOYKSDWLem_/view" },
  { id: "d-dukazy-firemni", title: "Důkazy z firemního — prodej firmy a odměny (15 souborů)", type: "e-mail „Návrh Tvých odměn a smlouvy na obchodní podíl“, shrnutí návrhu, valuace podílu, NDA Neffe, dohoda o postupu transakce, struktura data roomu, rejstřík důkazů", date: "2024-2026", tags: ["obchodní", "jednatel", "mzda"], file: "https://drive.google.com/drive/folders/1vQhI7o9ecoMZcycIK7PaROTNjjHOJhk4" },
  { id: "d-odoo", title: "Projektový plán Odoo — písemný příslib prémie 200 000 Kč", type: "projektový plán se sekcí 9 o odměně", date: "23. 6. 2025", tags: ["Odoo", "mzda"], file: "https://drive.google.com/file/d/1FrVQQwA-fRW6GJwdnDmo0kXz7wYg4tvI/view" },
  { id: "d-odoo-stav", title: "Odoo párování plateb — stav projektu", type: "projektová dokumentace (moje)", date: "7. 5. 2026", tags: ["Odoo", "pracovněprávní"], file: "https://drive.google.com/file/d/1CaXnuzkUO5jItixm90We5bK4vukU4iR7/view" },
  { id: "d-odoo-strategie", title: "Odoo párování plateb — strategické podklady", type: "můj interní podklad (důvěrné)", date: "22. 4. 2026", tags: ["Odoo", "obchodní"], file: "https://drive.google.com/file/d/11PCHAUQUmFpzWnAp6kou09I6cYwuGYbM/view" },
  { id: "d-rekonciliace", title: "Finanční rekonciliace (FINAL)", type: "důvěrný finanční podklad", date: "30. 4. 2026", tags: ["obchodní"], file: "https://drive.google.com/file/d/1PRXtPPldc0yY25mBHotKh7fITXUa45Ax/view" },
  { id: "d-whatsapp-original", title: "WhatsApp export — originál chatu (2021–2025)", type: "originální export komunikace", date: "2021-2025", tags: ["obchodní", "pracovněprávní"], file: "https://drive.google.com/file/d/17-QQlBM_O_F5DwRXIPcWHScBjr2GoIf4/view" },
  { id: "d-vyzva", title: "Výzva 30. 4. 2026", type: "moje písemná výzva", date: "30. 4. 2026", tags: ["pracovněprávní", "obchodní"], file: "https://drive.google.com/file/d/1yK5SERsZKFvaKkulsqf9J-sWNW5zrHuE/view" },
  { id: "d-prohlaseni", title: "Prohlášení o doručení odvolání", type: "moje prohlášení", date: "21. 5. 2026", tags: ["jednatel", "obchodní"], file: "https://drive.google.com/file/d/1qRMMzc0uhl8roKjXbLnyE7bSu-to3_ID/view" },
  { id: "d-gps", title: "SMS T-Mobile — GPS lokalizace (screenshot)", type: "aktivace 12. 5., deaktivace 13. 5., nová služba 20. 5.", date: "12.-20. 5. 2026", tags: ["GPS", "GDPR"], file: "https://drive.google.com/file/d/1R_K_qFHMwjBQb-WXERUERcWfWPgll4zT/view" },
  { id: "d-email-208", title: "Žádost o obnovení přístupů", type: "e-mail / žádost", date: "11. 6. 2026", tags: ["mzda", "pracovněprávní"], file: "https://drive.google.com/file/d/12PYgmPifc5Ej-pYyFd__1ExD5WNo2r1K/view" },
  { id: "d-oip", title: "OIP podnět (FINAL)", type: "připravené podání", date: "2026", tags: ["OIP"], file: "https://drive.google.com/file/d/1MGVUBMj5yhXNn47GuPD67U5FHKObaqYI/view" },
  { id: "d-oip2", title: "OIP podnět — 2. výzva (pracovní verze)", type: "rozpracovaný dokument", date: "6/2026", tags: ["OIP"], file: "https://docs.google.com/document/d/1hSdi-SluswOhDW55VgOb4PAhmIDkodvJ_NpGeEuDJhE/edit" },
  { id: "d-rezim", title: "Režim práce manažerů od 3. 6. 2026", type: "vnitřní směrnice verze 2", date: "3. 6. 2026", tags: ["mzda", "pracovněprávní"], file: "https://drive.google.com/file/d/1bPYww1sHboUIAW-zus83_VsrdL1GrJTr/view" },
  { id: "d-analyza", title: "Situační analýza (verze 15)", type: "můj podrobný popis situace", date: "2026", tags: ["pracovněprávní", "obchodní"], file: "https://drive.google.com/file/d/1nl1ihjBOb6CdPmWvr746cLB8qs9LX8iG/view" },
  { id: "d-advokat-v3", title: "Podklad pro advokáta v3 (DOCX)", type: "starší verze hlavního spisu", date: "2026", tags: ["pracovněprávní", "obchodní"], file: "https://drive.google.com/file/d/1oTx0zLE2GOrLEXCKSxBOSAa_jFj2nmTq/view" },
  { id: "d-sliby", title: "Přehled slibů a nevyplacených odměn", type: "můj chronologický přehled (9 položek)", date: "22. 6. 2026", tags: ["mzda", "obchodní", "jednatel"], file: "https://docs.google.com/document/d/10cjzhW4CUKvDxQRmZRjxCjQKpGFdqFcFabXkz8yQMUQ/edit" },
  { id: "d-pracovni-smlouva", title: "Pracovní smlouva", type: "smlouva — nástup 19. 1. 2021, produktová manažerka", date: "19. 1. 2021", tags: ["pracovněprávní", "mzda"], file: "https://drive.google.com/file/d/1yRmqslu0TipZ1Ate2ZBYwa4oMkp5oCWK/view" },
  { id: "d-rozhodnuti-odvolani", title: "Rozhodnutí jediného společníka — odvolání", type: "stáhla jsem si z justice.cz nebo firemního serveru (ověřit zdroj)", date: "12. 5. 2026", tags: ["jednatel", "obchodní"], file: "https://drive.google.com/file/d/1ChNAkLj2o5Cvjbc2JfRfXQN6oVFFCr4R/view" },
  { id: "d-fio-2023", title: "Fio banka — dokumenty TRAIVA 8/2023", type: "bankovní dokumentace (Období I)", date: "8/2023", tags: ["jednatel", "obchodní"], file: "https://drive.google.com/file/d/1iySiQ3EC3M1aTmwarJ5JXMWJoLmFK_SB/view" },
  { id: "d-fio-sprava", title: "Fio — smlouva o elektronické správě účtů", type: "bankovní dokumentace (Období I)", date: "2023", tags: ["jednatel", "obchodní"], file: "https://drive.google.com/file/d/1Na7vlC2DB7sjfGS77J5DFHHtXNfsVeq5/view" },
  { id: "d-lekarske", title: "Smlouva o pracovnělékařských službách", type: "smlouva za firmu (Období I)", date: "před 6/2024", tags: ["jednatel", "pracovněprávní"], file: "https://drive.google.com/file/d/1PAtdFe44ERMxTwHbxdzLmZJYCHJXfyKc/view" },
  { id: "d-prijem-potvrzeni", title: "Potvrzení o výši příjmu (žádost o úvěr)", type: "potvrzení podepsané 18. 11. 2025", date: "18. 11. 2025", tags: ["mzda"], file: "https://drive.google.com/file/d/1diRhLApgp71Gb_seiO9F1FhJ4DiMTJO_/view" },
  { id: "d-prijem-zam", title: "Potvrzení zaměstnavatele o příjmech 11/2024–10/2025", type: "průměrný čistý příjem 72 931 Kč/měs", date: "11/2025", tags: ["mzda"], file: "https://drive.google.com/file/d/1tFRbuOn-jrSbUFWHszJgdp8YKC3c1pha/view" },
  { id: "d-kalkulace", title: "Kalkulace částek 2026", type: "moje tabulka výpočtů", date: "19. 6. 2026", tags: ["mzda", "obchodní"], file: "https://docs.google.com/spreadsheets/d/1lJm9IDy0TLJS6fobZ2JJtPxFp16LP4zDvJOEugkosTA/edit" },
  { id: "d-vozidla", title: "Podklad advokát vozidla PRIORITA", type: "prioritní podklad", date: "2026", tags: ["vozidla", "obchodní", "pracovněprávní"], file: "https://drive.google.com/file/d/1vAK_0erlIG0q-XeU8PL2t8RwRuiHDr9M/view" },
  { id: "d-incident", title: "Záznam incidentu s vozidlem", type: "záznam incidentu", date: "5/2026", tags: ["vozidla", "GPS"], file: "https://drive.google.com/file/d/1LWRXAEHDuZ2W6iYO_HwIavRJUPsVuUka/view" },
];

const lawyerQuestions = [
  "Do kdy si ještě můžu nárokovat věci z Období I, než se to promlčí?",
  "Dá se po něm vůbec vymáhat to, co mi sliboval přes WhatsApp v roce 2021 a pak e-mailem v roce 2023 (podmínky odměňování k mé pozici, a od 1. 1. 2024 příslib podílů)?",
  "Ten nesmyslně krátký dvouměsíční termín na Odoo — může kvůli němu přijít o nárok na tu odměnu?",
  "Dá se vůbec dokázat, že mi záměrně znemožnil splnit podmínku pro těch 10 % podílu z prodeje?",
  "Má finanční „optimalizace“ firmy vliv na výši mých 5 % ze zisku?",
  "Co je nejlepší první krok, pokud se rozhodnu jít k soudu?",
  "Dá se prodej firmy nějak pozastavit, dokud se nevypořádají moje nároky?",
  "Jak mám dokázat, že o mých přesčasech věděl?",
  "Jak se řeší situace, kdy mi vzal přístupy do systémů, a přitom po mně pořád chce výstupy z práce?",
  "Dá se to sledování přes GPS bez mého souhlasu žalovat samo o sobě?",
  "Mám nárok na to, aby mi zaplatil moje právní náklady?",
  "Jak se v mém případě stanoví přiměřená odměna jednatelky?",
  "Jak mám naložit s těmi 237 593 Kč v hotovosti, abych to případně mohla započíst proti svým nárokům, ale nehrozila mi za to zpronevěra?",
  "Můžu se reálně dostat do problémů kvůli SsangYongu — zaplatila jsem ho ze svých odměn, ale pořád je vedený na firmu, ne na mě?",
  "Co na to řeknete, že mi zadržel BMW, odpojil z něj GPS a vydání auta podmiňoval vrácením peněz?",
  "Můžu po zaměstnavateli chtít kopie dokumentů, které jsem podepsala, ale nikdy nedostala (třeba to nařízení dovolené z 12. 5. 2026), a taky svou pracovní korespondenci z firemního e-mailu a SharePointu — je tam mimo jiné i písemný příslib odměny za Odoo z června 2025? A co když mezitím stihl něco smazat?",
  "Směl mi 12. 5. 2026 nařídit dovolenou ze dne na den, bez jakéhokoliv předchozího oznámení — a pak si jako moji dovolenou vykazovat i dobu, kdy mi sám odebral přístupy?",
  "Podle mě na mě nezačal tlačit až 11. 3. 2026, ale už v červnu 2025, kdy mi vzal agendu výpočtu mezd, a v září 2025 to zesílilo s příchodem nového IT kolegy — mění tahle delší časová linie nějak právní posouzení?",
  "Co pro mě znamená, že mě hned v den odvolání (12. 5. 2026) odstranili z firemního webu — všechny moje články, kontaktní formulář, moje údaje — ještě předtím, než se cokoliv vypořádalo? Má to nějaký právní význam?",
];

const formatMoney = (value) => new Intl.NumberFormat("cs-CZ", { style: "currency", currency: "CZK", maximumFractionDigits: 0 }).format(value);

function matches(item) {
  const query = state.query.trim().toLowerCase();
  const text = JSON.stringify(item).toLowerCase();
  const queryMatch = !query || text.includes(query);
  const filterMatch = state.filters.size === 0 || [...state.filters].some((tag) => item.tags?.includes(tag));
  return queryMatch && filterMatch;
}

function render() {
  document.documentElement.dataset.theme = state.theme;
  renderNav();
  renderFilters();
  renderViews();
  renderDetail();
}

function renderNav() {
  const counts = {
    dashboard: "",
    timeline: events.filter(matches).length,
    evidence: evidence.filter(matches).length,
    people: people.filter(matches).length,
    documents: documents.filter(matches).length,
    notes: "",
    export: "",
  };

  document.getElementById("navList").innerHTML = navItems
    .map((item) => `
      <button class="nav-item" type="button" data-nav="${item.id}" aria-current="${state.view === item.id ? "page" : "false"}">
        <span class="nav-left"><span class="nav-icon">${item.icon}</span><span>${item.label}</span></span>
        <span class="nav-count">${counts[item.id] ?? ""}</span>
      </button>
    `)
    .join("");
}

function renderFilters() {
  document.getElementById("filterRow").innerHTML = tags
    .map((tag) => `<button class="filter-chip ${state.filters.has(tag) ? "active" : ""}" type="button" data-filter="${tag}">${tag}</button>`)
    .join("");
}

function renderViews() {
  document.querySelectorAll(".view").forEach((view) => {
    view.hidden = view.dataset.view !== state.view;
  });

  renderDashboard();
  renderTimeline();
  renderEvidence();
  renderPeople();
  renderDocuments();
  renderNotes();
  renderExport();
}

function titleBlock(title, subtitle) {
  return `
    <div class="page-title">
      <div>
        <h1>${title}</h1>
        <p>${subtitle}</p>
      </div>
    </div>
  `;
}

function renderDashboard() {
  const keyPeople = people.slice(0, 3);
  document.getElementById("view-dashboard").innerHTML = `
    <div class="dash-eyebrow">Spisový přehled · TRAIVA s.r.o.</div>
    ${titleBlock("Případ Andrea Matis", "Podklady, které jsem si připravila ke konzultaci: události, dokumenty a komunikace tak, jak je vnímám já. Právní posouzení nechávám na Vás.")}
    <div class="dashboard-layout">
      <article class="card summary-panel">
        <h2>Přehled případu</h2>
        <ul class="mini-list">
          <li><span>Události v časové ose</span><strong>${events.length}</strong></li>
          <li><span>Podklady</span><strong>${evidence.length}</strong></li>
          <li><span>Dokumenty</span><strong>${documents.length}</strong></li>
          <li><span>Otázky na konzultaci</span><strong>${lawyerQuestions.length}</strong></li>
        </ul>
      </article>
      <article class="card insight-panel">
        <h2>Klíčové osoby</h2>
        <ul class="mini-list">
          ${keyPeople.map((item) => `<li><span>${item.name}</span><strong>${item.role}</strong></li>`).join("")}
        </ul>
      </article>
    </div>
  `;
}

function stat(label, value, sub = "", accent = "") {
  const style = accent ? ` style="--stat-accent:${accent}"` : "";
  return `<article class="card stat-card"${style}><span>${label}</span><strong>${value}</strong>${sub ? `<span class="stat-sub">${sub}</span>` : ""}</article>`;
}

function renderTimeline() {
  const items = events.filter(matches);
  let lastYear = null;
  const rows = items
    .map((item, index) => {
      const yearHeading = item.year !== lastYear ? `<div class="timeline-era"><span>${item.year}</span></div>` : "";
      lastYear = item.year;
      return yearHeading + timelineItem(item, index + 1);
    })
    .join("");
  document.getElementById("view-timeline").innerHTML = `
    ${titleBlock("Časová osa", "Události, jak jsem je zažila, s odkazy na osoby, podklady a moje poznámky.")}
    ${items.length ? `<div class="timeline">${rows}</div>` : emptyState()}
  `;
}

function timelineItem(item, order) {
  return `
    <article class="timeline-item">
      <div class="timeline-marker" aria-hidden="true">${order}</div>
      <div class="timeline-content">
        <div class="meta">${item.date}</div>
        <h2 class="section-heading">${item.title}</h2>
        <p class="timeline-text">${item.text}</p>
        ${tagRow(item.tags)}
        <button class="ghost-button" type="button" data-select="${item.id}" data-kind="Událost">Detail</button>
      </div>
    </article>
  `;
}

function renderEvidence() {
  const items = evidence.filter(matches);
  document.getElementById("view-evidence").innerHTML = `
    ${titleBlock("Moje podklady", "U každého podkladu uvádím, co podle mě dokládá, jak je pro mě důležitý a co k němu ještě musím dohledat.")}
    ${items.length ? `<div class="evidence-grid">${items.map(evidenceCard).join("")}</div>` : emptyState()}
  `;
}

function evidenceCard(item) {
  return `
    <article class="card evidence-card">
      <div class="meta">${item.type} · ${item.date}</div>
      <h2 class="section-heading">${item.title}</h2>
      <div class="strength">${"★".repeat(item.strength)}${"☆".repeat(5 - item.strength)}</div>
      <p class="tagline">Podle mě dokládá: ${item.proves.join(", ")}</p>
      ${item.risk ? `<p class="tagline">Poznámka: ${item.risk}</p>` : ""}
      ${tagRow(item.tags)}
      <button class="ghost-button" type="button" data-select="${item.id}" data-kind="Podklad">Detail</button>
    </article>
  `;
}

function renderPeople() {
  const items = people.filter(matches);
  document.getElementById("view-people").innerHTML = `
    ${titleBlock("Přehled osob", "Profily osob propojují roli, dokumenty, události a související oblasti.")}
    ${items.length ? `<div class="people-grid">${items.map(personCard).join("")}</div>` : emptyState()}
  `;
}

function personCard(item) {
  return `
    <article class="card person-card">
      <div class="meta">${item.role}</div>
      <h2 class="section-heading">${item.name}</h2>
      <ul class="mini-list">
        <li><span>Dokumenty</span><strong>${item.documents}</strong></li>
        <li><span>Události</span><strong>${item.events}</strong></li>
      </ul>
      ${tagRow(item.tags)}
      <button class="ghost-button" type="button" data-select="${item.id}" data-kind="Osoba">Detail</button>
    </article>
  `;
}

function renderDocuments() {
  const items = documents.filter(matches);
  document.getElementById("view-documents").innerHTML = `
    ${titleBlock("Dokumenty", `Soubory ukládám do složky na Google Drive — <a href="${driveFolderUrl}" target="_blank" rel="noopener">otevřít celou složku</a>. Kde odkaz zatím chybí, soubor teprve nahraji.`)}
    ${items.length ? `<div class="document-grid">${items.map(documentCard).join("")}</div>` : emptyState()}
  `;
}

function documentCard(item) {
  return `
    <article class="card document-card">
      <div class="meta">${item.type} · ${item.date}</div>
      <h2 class="section-heading">${item.title}</h2>
      ${tagRow(item.tags)}
      <div class="doc-actions">
        <button class="ghost-button" type="button" data-select="${item.id}" data-kind="Dokument">Detail</button>
        ${item.file
          ? `<a class="ghost-button file-link" href="${item.file}" target="_blank" rel="noopener">Otevřít soubor ↗</a>`
          : `<span class="file-missing">soubor zatím nenahrán</span>`}
      </div>
    </article>
  `;
}

function renderNotes() {
  const saved = localStorage.getItem("case-notes") || "";
  document.getElementById("view-notes").innerHTML = `
    ${titleBlock("Moje poznámky", "Poznámky se ukládají jen v prohlížeči na tomto zařízení.")}
    <div class="notes-layout">
      <article class="card note-card">
        <label class="sr-only" for="caseNotes">Poznámky</label>
        <textarea id="caseNotes" placeholder="Doplnit otázky pro advokáta, procesní taktiku, chybějící přílohy...">${saved}</textarea>
      </article>
      <article class="card note-card">
        <h2 class="section-heading">Kontrolní seznam</h2>
        <ul class="mini-list">
          <li><span>Doplnit originály příloh</span><strong>□</strong></li>
          <li><span>Zeptat se na promlčení</span><strong>□</strong></li>
          <li><span>Zeptat se, co je pracovní a co obchodní věc</span><strong>□</strong></li>
          <li><span>Doplnit podklady k částkám</span><strong>□</strong></li>
        </ul>
      </article>
    </div>
    <article class="card note-card" style="margin-top: 16px">
      <h2 class="section-heading">Kontext: struktura mzdy (HPP + DPP)</h2>
      <p>Mzda byla ve firmě standardně rozdělena mezi hlavní pracovní poměr a dvě dohody o provedení práce (DPP TRAIVA s.r.o. a DPP Traiva Safety s.r.o.). Takhle to měli nastavené všichni zaměstnanci, věděli o tom a akceptovali to. DPP Traiva Safety byla v dubnu 2026 zrušena všem zaměstnancům v souvislosti s prodejem firmy — pro mě to znamenalo o 6 460 Kč čistého měsíčně méně, nešlo ale o krok mířený jen na mě. Částka z DPP Traiva Safety byla všem zaměstnancům „přidána“ do mzdy z hlavního pracovního poměru. Uvádím to pro úplnost, aby byl jasný vývoj mého celkového příjmu při čtení výplatních pásek.</p>
    </article>
    <article class="card note-card" style="margin-top: 16px">
      <h2 class="section-heading">Moje prohlášení k projektu Odoo</h2>
      <p><em>„Řešení Odoo nebyl IT projekt, ale řízení provozního rizika. Pokud by se tyto věci neřešily, firma by nebyla v prodejném stavu. Z e-mailů je zřejmé, že jsem dlouhodobě pracovala s úkoly a odpovědností, které měly přímý dopad na hodnotu firmy při prodeji — ať už šlo o řízení rizik, stabilitu, plánování, cenotvorbu nebo auditní připravenost. Nejde o subjektivní pocit přínosu, ale o konkrétní kroky, které zvyšují valuaci a snižují rizika pro kupce. Proto je legitimní bavit se o odpovídajících odměnách."</em></p>
    </article>
    <article class="card note-card" style="margin-top: 16px">
      <h2 class="section-heading">Moje otázky na konzultaci</h2>
      <ul class="mini-list">
        ${lawyerQuestions.map((question, index) => `<li><span>${index + 1}. ${question}</span><strong>□</strong></li>`).join("")}
      </ul>
    </article>
  `;
}

function renderExport() {
  document.getElementById("view-export").innerHTML = `
    ${titleBlock("Export do PDF", "Export používá tiskový dialog prohlížeče. Zvolte Uložit jako PDF.")}
    <article class="card summary-panel">
      <h2>Možnosti exportu</h2>
      <p>Kompletní spis obsahuje dashboard, časovou osu, podklady, osoby i dokumenty. Filtrování a vyhledávání můžete použít před exportem pro užší výstup.</p>
      <div class="export-actions">
        <button class="primary-button" type="button" data-print>Exportovat celý spis</button>
        <button class="ghost-button" type="button" data-goto="timeline">Pouze časová osa</button>
        <button class="ghost-button" type="button" data-goto="evidence">Pouze podklady</button>
      </div>
    </article>
  `;
}

function tagRow(itemTags = []) {
  return `<div class="tag-row">${itemTags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>`;
}

function emptyState() {
  return `<div class="empty-state">Žádné položky neodpovídají aktuálnímu hledání nebo filtrům.</div>`;
}

function renderDetail() {
  const detail = document.getElementById("detailPanel");
  const panel = document.querySelector(".detail-panel");
  const allItems = [...events, ...evidence, ...people, ...documents];
  const item = allItems.find((entry) => entry.id === state.selected);

  if (!item) {
    panel.classList.remove("open");
    detail.innerHTML = `<div class="detail-empty">Vyberte událost, podklad, osobu, dokument nebo částku pro detail.</div>`;
    return;
  }

  panel.classList.add("open");
  detail.innerHTML = `
    <article class="detail-card">
      <button class="icon-button detail-close" type="button" data-close-detail aria-label="Zavřít detail">✕</button>
      <div class="meta">${item.date || item.role || item.type || "Detail"}</div>
      <h2>${item.title || item.name}</h2>
      ${tagRow(item.tags)}
      <div class="detail-section"><h3>Popis</h3><p>${item.text || item.note || item.role || "Položka připravená k doplnění."}</p></div>
      ${item.legal ? `<div class="detail-section"><h3>Moje poznámka</h3><p>${item.legal}</p></div>` : ""}
      ${item.proves ? `<div class="detail-section"><h3>Podle mě dokládá</h3><p>${item.proves.join(", ")}</p></div>` : ""}
      ${item.risk ? `<div class="detail-section"><h3>K doložení / poznámka</h3><p>${item.risk}</p></div>` : ""}
      ${item.people ? `<div class="detail-section"><h3>Osoby</h3><p>${item.people.join(", ")}</p></div>` : ""}
      ${item.evidence ? `<div class="detail-section"><h3>Související podklady</h3><p>${item.evidence.join(", ")}</p></div>` : ""}
      ${item.amount ? `<div class="detail-section"><h3>Částka</h3><p>${item.min !== undefined ? `MIN ${formatMoney(item.min)} · STŘED ${formatMoney(item.amount)} · MAX ${formatMoney(item.max)}` : formatMoney(item.amount)}</p></div>` : ""}
      ${item.file ? `<div class="detail-section"><h3>Soubor</h3><p><a href="${item.file}" target="_blank" rel="noopener">Otevřít na Google Drive ↗</a></p></div>` : ""}
    </article>
  `;
}

document.addEventListener("click", (event) => {
  const nav = event.target.closest("[data-nav]");
  const filter = event.target.closest("[data-filter]");
  const select = event.target.closest("[data-select]");
  const print = event.target.closest("[data-print]");
  const goto = event.target.closest("[data-goto]");

  if (nav) {
    state.view = nav.dataset.nav;
    document.querySelector(".sidebar").classList.remove("open");
    render();
  }

  if (filter) {
    const tag = filter.dataset.filter;
    state.filters.has(tag) ? state.filters.delete(tag) : state.filters.add(tag);
    clearHiddenSelection();
    render();
  }

  if (select) {
    state.selected = select.dataset.select;
    renderDetail();
  }

  if (event.target.closest("[data-close-detail]")) {
    state.selected = null;
    renderDetail();
  }

  if (print) {
    window.print();
  }

  if (goto) {
    state.view = goto.dataset.goto;
    render();
  }
});

document.getElementById("globalSearch").addEventListener("input", (event) => {
  state.query = event.target.value;
  clearHiddenSelection();
  render();
});

document.getElementById("clearSearch").addEventListener("click", () => {
  state.query = "";
  state.filters.clear();
  state.selected = null;
  document.getElementById("globalSearch").value = "";
  render();
});

document.getElementById("themeToggle").addEventListener("click", () => {
  state.theme = state.theme === "dark" ? "light" : "dark";
  localStorage.setItem("case-theme", state.theme);
  document.getElementById("themeIcon").textContent = state.theme === "dark" ? "☼" : "☾";
  render();
});

document.getElementById("menuButton").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("open");
});

document.addEventListener("input", (event) => {
  if (event.target.id === "caseNotes") {
    localStorage.setItem("case-notes", event.target.value);
  }
});

function clearHiddenSelection() {
  if (!state.selected) return;
  const allItems = [...events, ...evidence, ...people, ...documents];
  const item = allItems.find((entry) => entry.id === state.selected);
  if (item && !matches(item)) {
    state.selected = null;
  }
}

document.getElementById("printButton").addEventListener("click", () => window.print());
document.getElementById("themeIcon").textContent = state.theme === "dark" ? "☼" : "☾";
render();
