import type { CaseEvent } from "../types";

// relatedPersonIds/relatedEvidenceIds/relatedDocumentIds are filled in by the
// resolver in ./relations.ts — left as empty arrays here, source of truth is personRefs/evidenceRefs.
export const rawEvents: Omit<CaseEvent, "relatedPersonIds" | "relatedEvidenceIds" | "relatedDocumentIds">[] = [
  {
    "id": "ev-2021-whatsapp",
    "date": "20. 5. 2021",
    "year": "2021",
    "title": "Podmínky odměňování k pozici produktové/obchodní manažerky",
    "text": "Komunikace přes WhatsApp zachycuje podmínky odměňování dohodnuté k mé tehdejší pozici produktové/obchodní manažerky — šlo o jiné podmínky než pozdější příslib podílů. Zpráva z 20. 5. 2021, 13:20: „probereme odměnu za duben a podíl na výsledcích do budoucna“ — podíl na výsledcích tu byl poprvé zmíněn do budoucna, konkrétní podoba (5 % ze zisku, 10 % z prodeje) přišla až v e-mailu ze 4. 8. 2023. V té době svým slibům ještě dostál — na rozdíl od pozdějšího vývoje.",
    "legal": "Beru to jako začátek celé dohody o mém odměňování — tady padla první zmínka o podílu na výsledcích. Co z toho plyne, nechám na Vašem posouzení.",
    "tags": [
      "obchodní"
    ],
    "personRefs": [
      "Andrea Matis",
      "Karel Ospalík"
    ],
    "evidenceRefs": [
      "WhatsApp 20. 5. 2021"
    ]
  },
  {
    "id": "ev-2022-funkce",
    "date": "~2022",
    "year": "2022",
    "title": "Přidávání a rozšiřování pracovní náplně, funkcí a pravomocí",
    "text": "Fakticky jsem podepisovala smlouvy, jednala s bankami a řešila personální věci ještě před formálním jmenováním. Postupně na mě majitel nabaloval čím dál širší agendu: zplnomocnění ve věcech pracovněprávních, jednání s bankou i se státními institucemi, hledání a vyjednávání podmínek s novými B2B partnery, výběrová řízení na veřejné zakázky, vyřizování dotací, zajišťování pracovnělékařských prohlídek pro zaměstnance a samostatnou expanzi a integraci na tři mezinárodní marketplaces. Když přišla jakákoliv kontrola (ČOI, živnostenský úřad, hasiči apod.), jednala jsem s nimi osobně, následně prováděla veškeré úkony k nápravě zjištění a komunikaci vedla tak, aby z toho firma měla vždy co nejmenší postih či sankce. A spoustu dalších věcí, které si už ani nevybavím všechny.",
    "legal": "Za tuto neustále rostoucí pracovní náplň jsem neměla žádnou smlouvu ani odměnu navíc — nevím, jestli z toho něco plyne.",
    "tags": [
      "jednatel",
      "obchodní"
    ],
    "personRefs": [
      "Andrea Matis"
    ],
    "evidenceRefs": [
      "Fio banka + smlouvy — Období I",
      "Smlouva o pracovnělékařských službách",
      "Fio dokumenty 8/2023"
    ]
  },
  {
    "id": "ev-2023-navrh-odmen",
    "date": "4. 8. 2023",
    "year": "2023",
    "title": "E-mail „Návrh Tvých odměn a smlouvy na obchodní podíl“",
    "text": "Pan Ospalík mi poslal e-mail „Návrh Tvých odměn a smlouvy na obchodní podíl — k projednání“. Přílohou byl přímo dokument „Odměny a smlouva Andrea“ (5 % ze zisku po zdanění, 10% podíl = 2,2 mil. Kč, převod podílu po kumulaci bonusů, smlouva o smlouvě budoucí) s účinností od 1. 1. 2024. Autor i odesílatel návrhu je tedy doložen: pan Ospalík, 4. 8. 2023. K 1. 1. 2024 pak podle tohoto návrhu nabylo účinnosti jmenování i příslib podílů (5 % ze zisku, 10 % z prodeje).",
    "legal": "Originál e-mailu (.msg) mám zajištěný včetně hlaviček s DKIM podpisem Gmailu — odesláno 4. 8. 2023, 12:26, z charlie.ospalik@gmail.com na a.matis@traiva.cz. Dokument s podmínkami tedy prokazatelně vytvořil a poslal pan Ospalík.",
    "tags": [
      "obchodní",
      "jednatel",
      "mzda"
    ],
    "personRefs": [
      "Andrea Matis",
      "Karel Ospalík"
    ],
    "evidenceRefs": [
      "E-mail 4. 8. 2023 — návrh odměn (.msg zajištěn)"
    ]
  },
  {
    "id": "ev-2024-ospalik-odchod",
    "date": "2024",
    "year": "2024",
    "title": "Karel Ospalík odcházel do důchodu — žádal odstranění z kontaktů e-shopu",
    "text": "V roce 2024 jsem panu Ospalíkovi podepisovala výpověď, když odcházel do důchodu. Požádal mě o odstranění z kontaktní stránky e-shopu, protože mu prý stále a často telefonovali naši zákazníci. Zároveň jsme už tehdy měli otevřené téma ERP/systémů — oba jsme měli vlastní testovací účty v Odoo i na systémech jiných poskytovatelů. Vzhledem k jeho dlouhodobému pobytu v zahraničí jsem místo něj absolvovala i několik auditů interních systémů.",
    "legal": "Připadá mi to jako výrazný rozpor — přesně to, o co mě sám tehdy požádal pro sebe (odstranění z kontaktů), teď o dva roky později udělal on mně, jenže v mnohem širším rozsahu (celý web, ne jen kontakty) a bez jakéhokoliv vypořádání. V době, kdy se úpravy webu zadávaly (2024–2025), na webu skutečně vůbec nefiguroval — jeho přání bylo respektováno. Nyní je ale v kontaktech nově uveden jako CEO, zatímco já jsem z webu kompletně zmizela. Chci to dát do souvislosti s odstraněním z firemního webu 12. 5. 2026.",
    "tags": [
      "jednatel",
      "pracovněprávní"
    ],
    "personRefs": [
      "Andrea Matis",
      "Karel Ospalík"
    ],
    "evidenceRefs": []
  },
  {
    "id": "ev-2024-jmenovani",
    "date": "24. 6. 2024",
    "year": "2024",
    "title": "Formální jmenování jednatelkou",
    "text": "Byla jsem jmenována jednatelkou usnesením jediného společníka; smlouvu o výkonu funkce jsme nikdy nesepsali.",
    "legal": "Smlouva o výkonu funkce nevznikla — co to znamená pro odměnu, chci probrat.",
    "tags": [
      "jednatel",
      "obchodní"
    ],
    "personRefs": [
      "Andrea Matis",
      "Karel Ospalík"
    ],
    "evidenceRefs": [
      "Usnesení 24. 6. 2024"
    ]
  },
  {
    "id": "ev-2024-erp-zacatek",
    "date": "29. 4. 2024",
    "year": "2024",
    "title": "Začátek intenzivní práce na ERP",
    "text": "Projekt ERP systému jsem začala intenzivně řešit od 29. 4. 2024 — ještě před podpisem smlouvy s Quest solutions. Nejprve jsem na něm pracovala s panem Plačkem, později už samostatně. O možnostech Odoo jsme s panem Ospalíkem mluvili už v roce 2023.",
    "legal": "Toto datum uvádím podle svého vlastního dobového e-mailu z 8. 8. 2025, kde jsem historii projektu shrnovala.",
    "tags": [
      "Odoo",
      "pracovněprávní"
    ],
    "personRefs": [
      "Andrea Matis",
      "Michal Plaček"
    ],
    "evidenceRefs": [
      "Můj e-mail 8. 8. 2025 — shrnutí historie projektu"
    ]
  },
  {
    "id": "ev-2024-odoo-schvaleni",
    "date": "21. 6. 2024",
    "year": "2024",
    "title": "Schválení Odoo a výběr dodavatele Quest",
    "text": "Schválení Odoo a výběr implementačního partnera (firma Quest solutions s.r.o.) proběhlo ve spolupráci s panem Ospalíkem. Po podpisu smlouvy ale prohlásil, že jde o projekt na mou zodpovědnost, nad rámec mé pracovní náplně, a že s tím nechce mít nic společného. Smlouvu s Quest solutions s.r.o. (zastoupenou Jakubem Bradou) jsem sama dojednala; podepsána byla a nabyla účinnosti 21. 6. 2024, tři dny před mým formálním jmenováním jednatelkou 24. 6. 2024 — to ale považuji za náhodu, ne záměr. Smlouva počítala s implementací za 450 hodin (770 004 Kč s DPH) a plánovaným dokončením do 1. 6. 2025; interně jsme si ale domlouvali dřívější ostrý start k 1. 11. 2024. Do té doby jsem měla sama vše připraveno na testovacím účtu, ale zmizela mi předpřipravená záloha pilotního projektu na Githubu. Mezitím se společníci Questu, Jakub Brada a Michal Plaček, rozdělili — zůstal pan Plaček a firma se přejmenovala na ODOPRO; víc na pozadí té změny nevidím. Od té doby se muselo začít vše nanovo, ale panu Plačkovi se to dařilo tajit asi měsíc a půl, až do 1. 11. 2024, kdy měl být ostrý start.",
    "legal": "Od plánovaného startu 1. 11. 2024 začal kolotoč mých kontrol, eskalací a školení programátorského jazyka a podobně. Původní projektový plán a přílohy jasně ukazují, že jedinou stěžejní osobou projektu jsem měla být já.",
    "tags": [
      "Odoo",
      "pracovněprávní",
      "obchodní"
    ],
    "personRefs": [
      "Andrea Matis",
      "Karel Ospalík",
      "Michal Plaček"
    ],
    "evidenceRefs": [
      "Smlouva Quest solutions s.r.o. — implementace Odoo, 21. 6. 2024",
      "Původní projektový plán Odoo a přílohy"
    ]
  },
  {
    "id": "ev-2025-odoo",
    "date": "01/2025",
    "year": "2025",
    "title": "Druhý pokus spuštění Odoo do ostrého provozu",
    "text": "01/2025 proběhl druhý pokus spustit Odoo do ostrého provozu — první (1. 11. 2024) se nezdařil kvůli rozpadu firmy Quest/ODOPRO. Kontaktní osobou byl mimo jiné Michal Plaček. K projektu jsem tehdy zároveň vyřizovala dotační podporu z fondu ministerstva práce a průmyslu, který v té době poskytoval podnikatelům v Moravskoslezském kraji podporu na nákup strojů a zařízení a v rámci digitalizace i na implementaci ERP systému/software.",
    "legal": "Projekt jsem fakticky vedla já — téměř rok a půl intenzivní, z velké části samostatné práce na narovnání celého ERP od základu po nepovedené implementaci ODOPRO, včetně vyřízení dotační podpory na jeho financování. Odoo nebyl IT projekt, ale řízení provozního rizika: bez něj by firma nebyla v prodejném stavu — správně nastavené párování plateb dává přehled cash flow, nutný i pro prodej firmy (viz moje prohlášení v Poznámkách).",
    "tags": [
      "Odoo",
      "mzda",
      "DPP",
      "pracovněprávní"
    ],
    "personRefs": [
      "Andrea Matis",
      "Tomáš Maralík",
      "Michal Plaček"
    ],
    "evidenceRefs": [
      "Odoo komunikace",
      "E-maily",
      "Úkoly v systému"
    ]
  },
  {
    "id": "ev-2025-moratorium-skoleni",
    "date": "18. 6. 2025",
    "year": "2025",
    "title": "Moratorium na externí školení",
    "text": "Pan Ospalík e-mailem (mně a Jiřímu Premusovi) vyhlásil moratorium na jakákoli externí školení, dokud nebude jisté, že personál dokonale zná Odoo. Zrušil tím i školení na Excel nebo IT dovednosti, které jsem navrhovala — argumentoval, že na ně není podepsaná smlouva.",
    "legal": "Vydal to kvůli mně, abych se nevzdělávala v ničem jiném než v Odoo — přesně den před tím, než mi napsal, že systém vedení projektu bude „po jeho“, a týden před zahájením projektového plánu 23. 6. 2025.",
    "tags": [
      "Odoo",
      "pracovněprávní"
    ],
    "personRefs": [
      "Andrea Matis",
      "Karel Ospalík",
      "Jiří Premus"
    ],
    "evidenceRefs": [
      "E-mail Ospalíka 18. 6. 2025 — moratorium na školení"
    ]
  },
  {
    "id": "ev-2025-prislib",
    "date": "23. 6. 2025",
    "year": "2025",
    "title": "Projektový plán Odoo — písemný příslib prémie 200 000 Kč",
    "text": "Pan Ospalík mi 19. 6. 2025 e-mailem napsal: „Nemůžeme pověřit takovým úkolem někoho, kdo je tu zcela nový. Protože ani za 6 měsíců systém vedení projektu ala Plaček, Kokoruďa ani Tvůj nevedl k odstranění všech kritických chyb, bude systém vedení projektu po mém. ... Chtěl bych, abys se v tom stala profesionálem. Ty na to máš. Očekávám rozpracovaný plán do pondělí 23. 6.“ Projektový plán Oprava kritických chyb v implementaci Odoo: já jako projektová manažerka, zahájení 23. 6. 2025, termín oprav 30. 9. 2025. Dokument doslovně: „V případě částečného splnění bude prémie i standardní odměny (na základě hospodářských výsledků) krácena poměrně dle vyřešených chyb.“ Krácení se tedy výslovně týká i mé BĚŽNÉ odměny, ne jen mimořádné prémie za Odoo. Plán zároveň uvádí moji mzdu jako „65 000 Kč čistého / měsíčně“ — tato částka ale neodpovídá mým výplatním páskám z té doby, kde mám jako základní mzdu vedenou jinou (nižší) částku. Dokument tedy uvádí nesprávný/nadhodnocený údaj o mé skutečné základní mzdě.",
    "legal": "Implementátora jsem si podle plánu měla zajistit sama. Tři měsíce jsem jednala s dodavateli Odoo řešení pro ČR a SR — nikdo nechtěl opravovat nezdokumentovanou práci původního dodavatele (Quest/ODOPRO, p. Plaček); kapacitu nabízeli nejdřív od září, a ideálně stavět celé znovu. Spolupráci s Origamis (Brno) pomohlo doporučení externího ERP specialisty z Bratislavy, se kterým jsem se radila; do září 2025 byl ale Origamis jen expertní poradce, takže narovnávání zůstalo na mně — učila jsem se vše za pochodu sama. Prémie mi nebyla vyplacena — chci probrat, co z toho plyne. DŮLEŽITÉ: projekt začal 23. 6. 2025 — přesně v měsíci, kdy mi klesla na nulu i běžná odměna. Dokument výslovně píše, že se krácení „na základě hospodářských výsledků“ týká i standardní odměny, ale vyhodnocení má proběhnout až k 30. 9. 2025, ne hned na začátku. Chci se zeptat, jestli krácení mé běžné mzdy měsíc po startu projektu bylo v souladu s tímto plánem.",
    "tags": [
      "Odoo",
      "mzda",
      "pracovněprávní"
    ],
    "personRefs": [
      "Andrea Matis",
      "Karel Ospalík"
    ],
    "evidenceRefs": [
      "Projektový plán Odoo 23. 6. 2025 — příslib prémie",
      "E-mail Ospalíka 19. 6. 2025 — zadání termínu do pondělí 23. 6."
    ]
  },
  {
    "id": "ev-2025-odebrani-agendy",
    "date": "červen 2025",
    "year": "2025",
    "title": "Odebrání agendy výpočtu mezd — poprvé sáhl na mé odměny",
    "text": "Byla mi odebrána část dosavadních pracovních agend, zejména výpočet mezd, který byl převeden na jiného pracovníka. Zároveň jsem ztratila přístup k podkladům, do nichž jsem dříve v rámci práce běžně nahlížela. Podklady pro mzdy se předtím konzultovaly ve složení já, jednatel Ospalík a Jiří Premus; výsledná tabulka rozdělení mezd byla po celou dobu přístupná celému vedení včetně mě a výpočet mezd patřil mezi mé pracovní povinnosti. Poté, co mi byl výpočet mezd odebrán, převzal ho pan Premus, který tabulku zasílá přímo mzdové účetní k zadání do systému — do podkladu jsem tím ztratila vhled a viděla jsem ho už jen výjimečně. Mzdová účetní o výši odměn nerozhoduje.",
    "legal": "Tohle vnímám jako skutečný začátek tlaku — ne až e-mail z 11. 3. 2026. Podnět OIP to potvrzuje: „Přibližně od poloviny roku 2025 došlo k odebrání části mých dosavadních pracovních agend, zejména výpočtu mezd.“ Ve své žádosti zaměstnavateli z 11. 6. 2026 jsem tento proces popsala písemně a formálně požádala o doložení podkladů, na jejichž základě byly moje odměny stanovovány a následně snižovány.",
    "tags": [
      "pracovněprávní",
      "mzda"
    ],
    "personRefs": [
      "Andrea Matis",
      "Karel Ospalík",
      "Jiří Premus"
    ],
    "evidenceRefs": [
      "Podnět OIP FINAL",
      "Žádost zaměstnavateli 11. 6. 2026 — popis procesu stanovení mezd"
    ]
  },
  {
    "id": "ev-2025-tiche-signaly",
    "date": "4. 7. – 8. 8. 2025",
    "year": "2025",
    "title": "„O lidech, zrcadlech a tichých signálech“ — a moje odpověď",
    "text": "Pan Ospalík mi 4. 7. 2025 poslal e-mail nazvaný „Moje myšlenky - O lidech, zrcadlech a tichých signálech“ — vágní text o důvěře, transparentnosti a potřebě „resetu“, bez konkrétního obsahu. Skoro dva týdny jsem nad odpovědí přemýšlela a několikrát ji upravila. V odpovědi z 8. 8. 2025 jsem podrobně popsala své nasazení (ERP jsem intenzivně řešila od 29. 4. 2024, smazanou zálohu pilotního projektu na Githubu), zpochybnění restrikce mých odměn jsem označila za demotivující až možná upřímně urážející, a připomněla mu, že na mě čekal sedm měsíců ještě předtím, než jsem vůbec nastoupila do firmy — protože jsem chtěla nejdřív dokončit rozpracovaný projekt u předchozího zaměstnavatele. Vytýkal mi totiž, že není vidět rychlý progres, a měl dojem, že když se mi to nepovedlo hned, dávám od toho ruce pryč.",
    "tags": [
      "pracovněprávní",
      "diskriminace",
      "Odoo"
    ],
    "personRefs": [
      "Andrea Matis",
      "Karel Ospalík"
    ],
    "evidenceRefs": [
      "E-mail Ospalíka 4. 7. 2025 — O lidech, zrcadlech a tichých signálech",
      "Moje odpověď 8. 8. 2025"
    ]
  },
  {
    "id": "ev-2025-it-konzultace",
    "date": "léto 2025",
    "year": "2025",
    "title": "Společná konzultace o přijetí nového IT pracovníka",
    "text": "V létě 2025 jsme s panem Ospalíkem společně řešili možnost přijetí nového IT pracovníka, který by mi byl k ruce a pomáhal se správou interních systémů, spravovaných webů a aplikací — nejen s Odoo. Shodli jsme se, že vzhledem ke všem povinnostem, které jsem aktuálně vykonávala, naplánovaným pracím s vývojářem (DEV) a další agendě, by to v tu chvíli nebylo vhodné — neměla bych prostor ani kapacitu naučit nového kolegu všechny systémy a prioritou pro mě bylo dokončit projekt Odoo, který by mi přijetí a zaučení nového člověka jen zdrželo. Pan Ospalík můj názor tehdy akceptoval, v praxi ho ale nerespektoval.",
    "legal": "Chci to dát do souvislosti s tím, co následovalo — sám tehdy uznal, že nemám kapacitu na nic navíc, přesto na mě později dál nabaloval další úkoly a odpovědnost.",
    "tags": [
      "Odoo",
      "pracovněprávní"
    ],
    "personRefs": [
      "Andrea Matis",
      "Karel Ospalík"
    ],
    "evidenceRefs": []
  },
  {
    "id": "ev-2025-maralik",
    "date": "září 2025",
    "year": "2025",
    "title": "Najat Tomáš Maralík a zesílení e-mailových výtek",
    "text": "Byl najat nový IT kolega Tomáš Maralík, který měl postupně převzít ERP agendu — podle mě k tomu ale neměl dostatečné zkušenosti. Zároveň zesílily e-mailové výtky, urgence a postupné omezování mého postavení.",
    "legal": "Vnímám to jako druhou fázi tlaku, který začal už v červnu odebráním mzdové agendy a odtud dál gradoval. Zpětně to vidím jako přípravu na moje nahrazení.",
    "tags": [
      "Odoo",
      "pracovněprávní",
      "diskriminace"
    ],
    "personRefs": [
      "Andrea Matis",
      "Tomáš Maralík",
      "Karel Ospalík"
    ],
    "evidenceRefs": [
      "E-mail Maralíka 4. 5. 2026",
      "Odoo komunikace",
      "E-mailové výtky",
      "Výzva 30. 4. 2026"
    ]
  },
  {
    "id": "ev-2026-vyuka",
    "date": "01/2026",
    "year": "2026",
    "title": "Zaškolování Maralíka v Odoo",
    "text": "Začala jsem pana Maralíka učit Odoo ERP na přání pana Ospalíka.",
    "legal": "Dokládá, že jsem dál normálně pracovala a předávala své know-how.",
    "tags": [
      "Odoo",
      "pracovněprávní"
    ],
    "personRefs": [
      "Andrea Matis",
      "Tomáš Maralík",
      "Karel Ospalík"
    ],
    "evidenceRefs": [
      "Odoo komunikace",
      "Timely report"
    ]
  },
  {
    "id": "ev-2026-rezim",
    "date": "březen 2026",
    "year": "2026",
    "title": "Návrh režimu práce manažerů",
    "text": "Pan Ospalík předložil návrh k připomínkování; moje připomínky ale nebyly nijak zapracovány ani akceptovány. Navrhoval mimo jiné, že manažeři nesmí mít víc než 3 nápady/podněty za týden, a argumentoval to tím, abychom měli osobní život, volný čas a podobně. Právě na základě jeho vlastního podnětu jsem si začala měřit pracovní dobu (viz Timely). Režim se měl oficiálně týkat i kolegy Premuse — od doby, kdy jsem do firmy nastoupila, měla být podle mě jeho manažerská pozice upravena podle faktického stavu. Český zákoník práce ale jeho fakticky vykonávanou funkci (\"povolání zeť\") neřadí do žádné z prací; podle rozvrhu docházel do firmy hlavně k dobití auta a na procházku, aby bylo vidět, že tam byl. Že bylo připomínkování jen formální, dokládá i jeho e-mail z 2. 4. 2026: napsal, že pokud nikdo nedodal žádné návrhy na úpravu, považuje předpis rovnou za schválený, a poslal ho k podpisu — bez ohledu na to, zda k němu připomínky reálně byly. V navazujícím e-mailu z 22. 4. 2026 dodal, že jakmile něco vydá jako vnitřní předpis, je to „červená čára jako všude jinde\", a zmínil, že kolega Jiří Premus mezitím vypracoval vlastní plán práce.",
    "legal": "Verze 1 zachycuje pravidla odměňování tak, jak jsem jim tehdy rozuměla — připomínkování bylo podle mě jen formální. Zvláštní pro mě je, že stejný přísný režim měl platit i pro pana Premuse, jehož skutečná pracovní náplň podle mě neodpovídala ničemu, co zákoník práce zná jako druh práce — chci se zeptat, co z tohoto nerovného zacházení plyne. Důležité: tím, že sám argumentoval omezením nápadů kvůli potřebě mít osobní život a volný čas, prokazatelně věděl, že se pracuje i po pracovní době — to považuji za přímý důkaz jeho vědomí o mých přesčasech. E-maily z 2. a 22. 4. 2026 mám zajištěné a chci je dát do souvislosti s tím, jak vznikla i následná verze 2 (viz 3. 6. 2026) — proces připomínkování byl podle mě od začátku jen formalita.",
    "tags": [
      "mzda",
      "pracovněprávní"
    ],
    "personRefs": [
      "Andrea Matis",
      "Karel Ospalík"
    ],
    "evidenceRefs": [
      "Vnitřní směrnice verze 1",
      "E-mail Ospalíka 2.–22. 4. 2026 — schválení předpisu \"mlčením\""
    ]
  },
  {
    "id": "ev-2026-duediligence",
    "date": "12. 3. 2026",
    "year": "2026",
    "title": "Pokyn ke kompletaci dokumentů pro due diligence",
    "text": "Dostala jsem pokyn ke kompletaci dokumentů; teprve poté mi došel účel — příprava prodeje firmy běžela od jara 2026 bez mého vědomí a užší výběr 2 zájemců probíhal bez mé účasti.",
    "legal": "Působí to na mě, jako by odvolání bylo načasované k prodeji a já z něj byla záměrně vyloučena — posouzení nechám na Vás.",
    "tags": [
      "obchodní",
      "jednatel"
    ],
    "personRefs": [
      "Andrea Matis",
      "Karel Ospalík"
    ],
    "evidenceRefs": [
      "Podklad advokát vozidla PRIORITA"
    ]
  },
  {
    "id": "ev-2026-ssangyong",
    "date": "jaro 2026",
    "year": "2026",
    "title": "Prodej vozidla SsangYong Korando",
    "text": "Vozidlo jsem si předtím zaplatila z bonusové složky své mzdy a odměn, ale nikdy nebylo přepsáno na mě jako fyzickou osobu — pořád bylo vedené na TRAIVA s.r.o. Prodala jsem ho v době, kdy jsem byla jednatelkou — podle notářského zápisu jsem mohla samostatně jednat do 1 mil. Kč, prodej za 330 000 Kč byl tedy v mém oprávnění. Čistý výtěžek 237 593 Kč (330 000 − provize 33 000 − náklady 59 407) mám fyzicky u sebe. Příjmový doklad uvádí vyplacení komitentovi Traiva — to neodpovídá skutečnosti.",
    "legal": "Hotovost nechávám netknutou stranou; jak ji správně vypořádat, chci probrat na konzultaci. Kvůli tomu, že auto bylo formálně vedené na firmu, i když jsem ho zaplatila ze svých odměn, se mě pan Ospalík snaží nyní vyhrožovat udáním za zpronevěru — chci probrat, jak se proti tomu bránit.",
    "tags": [
      "vozidla",
      "obchodní"
    ],
    "personRefs": [
      "Andrea Matis",
      "Karel Ospalík",
      "Karel Neffe"
    ],
    "evidenceRefs": [
      "Doklady k vozidlům",
      "Pokladní doklad 237 593 Kč"
    ]
  },
  {
    "id": "ev-2026-origamis-samouk",
    "date": "27. 4. 2026",
    "year": "2026",
    "title": "Ospalík znevažuje mou odbornost přímo vůči dodavateli Origamis",
    "text": "22. 4. 2026 jsem oslovila pana Hrdličku z firmy Origamis s poptávkou na správu projektu Traiva-shop a upgrade na Odoo 19 — žádala jsem o nacenění analýzy, migrace produkční databáze, nastavení výrobního workflow a integrace GLS. Pan Ospalík na to 27. 4. 2026 odpověděl přímo panu Hrdličkovi, ne mně soukromě, a napsal doslova: „Připravit si firmu na cestu do pekel s firmou a jedním samoukem, kteří ani za půl roku nedokázali zavést ani základní funkci - znát pohledávky. Jiná cesta s nimi nevede.\" Slovem „samouk\" tak vedle profesionální firmy Origamis označil mě.",
    "legal": "Není to jen soukromá poznámka mezi námi — napsal to přímo obchodnímu partnerovi, se kterým jsem sama jednala o zakázce. Vnímám to jako znevažování mé odbornosti navenek, ne jen interní kritiku.",
    "tags": [
      "Odoo",
      "pracovněprávní",
      "diskriminace"
    ],
    "personRefs": [
      "Andrea Matis",
      "Karel Ospalík"
    ],
    "evidenceRefs": [
      "E-mail Ospalíka Hrdličkovi 27. 4. 2026 — \"jeden samouk\""
    ]
  },
  {
    "id": "ev-2026-slatanina",
    "date": "27. 4. 2026",
    "year": "2026",
    "title": "Ospalík kritizuje mé shrnutí projektu a moje pracovní tempo",
    "text": "Téhož dne (27. 4. 2026) mi Ospalík odpověděl i na shrnutí aktuálního stavu projektu párování plateb v Odoo, které jsem mu poslala 23. 4. 2026. Šlo záměrně jen o stručné shrnutí — kompletní podrobnou projektovou dokumentaci (desítky stran) jsem měla připravenou, ale on sám řekl, že si tak rozsáhlý dokument nepřečte, takže jsem mu podle jeho vlastního přání poslala jen zhuštěný přehled. Přesto ho označil za „z části nepravdivou slátaninu vytvořenou na základě neúplných nebo zavádějících informací“ a sarkasticky psal o „odbornících“ v uvozovkách. Dodal: „není to tím, že by jsi neuměla dobře pracovat. Je to tím, že pod tlakem si neumíš organizovat čas, vytýčit priority a pracovat týmově“ — a rovnou to spojil s trváním na dodržování vnitřního předpisu Režim práce manažerů.",
    "legal": "Kritizoval shrnutí, které vzniklo přesně podle jeho vlastního zadání — sám odmítl číst obsáhlou dokumentaci, a když jsem mu proto poslala stručnější verzi, vytkl mi, že je to nepravdivé a povrchní. Přijde mi to jako rozpor, který sám vyrobil. Zároveň to znovu propojuje s předpisem o režimu práce manažerů, který zmiňuji u bodu 16.",
    "tags": [
      "Odoo",
      "pracovněprávní",
      "diskriminace"
    ],
    "personRefs": [
      "Andrea Matis",
      "Karel Ospalík"
    ],
    "evidenceRefs": [
      "E-mail Ospalíka 27. 4. 2026 — shrnutí párování plateb \"slátanina\""
    ]
  },
  {
    "id": "ev-2026-vyzva",
    "date": "30. 4. 2026",
    "year": "2026",
    "title": "Výzva a přehled požadavků",
    "text": "Poslala jsem výzvu s přehledem svých požadavků; krátce poté začaly kroky proti mně.",
    "legal": "Časová návaznost dalších událostí na tuto výzvu mi přijde důležitá.",
    "tags": [
      "pracovněprávní",
      "obchodní"
    ],
    "personRefs": [
      "Andrea Matis",
      "Karel Ospalík"
    ],
    "evidenceRefs": [
      "Výzva 30. 4. 2026",
      "Finanční rekonciliace"
    ]
  },
  {
    "id": "ev-2026-maralik-mail",
    "date": "4. 5. 2026",
    "year": "2026",
    "title": "E-mail Maralíka Ospalíkovi bez vědomí AM",
    "text": "O e-mailu jsem nevěděla; beru ho jako potvrzení toho, komu je pan Maralík loajální. Pan Maralík — pod tlakem pana Ospalíka, který ho ten den urgoval — prezentoval svůj AI-asistovaný skript (BRL) jako trvalé řešení párování plateb, ačkoli šlo o nadstavbu nad cizím vývojem a o dočasné řešení, které jsem sama schválila jen jako můstek pro uzávěrku. Paralelní nasazení porušovalo architekturu, kterou jsme od nepovedené implementace ODOPRO narovnávali s Origamis.",
    "legal": "Podkopalo to moji autoritu procesní vlastnice a zpochybnilo, že vím, co dělám — týden před mým odvoláním. Počítám s tím, že by pan Maralík nesvědčil v můj prospěch.",
    "tags": [
      "Odoo",
      "pracovněprávní"
    ],
    "personRefs": [
      "Tomáš Maralík",
      "Karel Ospalík",
      "Andrea Matis"
    ],
    "evidenceRefs": [
      "E-mail Maralíka 4. 5. 2026",
      "Odoo párování plateb — stav projektu 7. 5. 2026"
    ]
  },
  {
    "id": "ev-2026-email-zakaz",
    "date": "8. 5. 2026",
    "year": "2026",
    "title": "Zákaz komunikace z jiné než firemní e-mailové adresy",
    "text": "Dostala jsem formální zákaz komunikovat z jiné než firemní e-mailové adresy.",
    "legal": "Dávám do souvislosti s pozdějším odebráním firemních přístupů — pak jsem neměla jak komunikovat.",
    "tags": [
      "pracovněprávní"
    ],
    "personRefs": [
      "Andrea Matis",
      "Karel Ospalík"
    ],
    "evidenceRefs": [
      "E-mailová komunikace"
    ]
  },
  {
    "id": "ev-2026-odvolani",
    "date": "12. 5. 2026",
    "year": "2026",
    "title": "Odvolání z funkce, karta a GPS",
    "text": "V jeden den jsem byla odvolána z funkce jednatelky (podpis rozhodnutí jsem odmítla, kopii mi nepředali), byla mi zablokována firemní karta, přišla SMS o aktivaci GPS sledování bez mého souhlasu, byla mi nařízena dovolená ze dne na den (bez předchozího upozornění na termín — tu jsem k podpisu dostala a podepsala, ale vlastní kopii mi také nepředali) a začalo postupné odebírání všech přístupů do systémů, se kterými jsem pracovala.",
    "legal": "Vše proběhlo v jeden den — co z toho pro mě plyne, chci probrat.",
    "tags": [
      "jednatel",
      "GPS",
      "GDPR",
      "obchodní",
      "pracovněprávní"
    ],
    "personRefs": [
      "Andrea Matis",
      "Karel Ospalík",
      "Vojtěch Ospalík"
    ],
    "evidenceRefs": [
      "SMS 12. 5. 2026",
      "Prohlášení o doručení 21. 5. 2026"
    ]
  },
  {
    "id": "ev-2026-web-odstraneni",
    "date": "12. 5. 2026",
    "year": "2026",
    "title": "Odstranění z firemního webu",
    "text": "Podle kolegů je firemní web v tomto stavu už ode dne, kdy mě pan Ospalík odvolal z funkce jednatelky — 12. 5. 2026. Byla jsem z něj kompletně odstraněna: zmizely všechny moje články, kontaktní formulář i moje údaje. Stav jsem si potvrdila screenshotem stránky Náš tým z 15. 6. 2026, kde už nejsem uvedena. Že jsem na této stránce skutečně dlouhodobě figurovala, dokládá i to, že jsem si sama (2024–2025) s externí agenturou Sniper Design zadávala její redesign a úpravy funkcionality.",
    "legal": "Vnímám odstranění jako účelové — snahu vymazat moji roli ve firmě navenek, ještě než bylo cokoliv vypořádáno, a to hned v den odvolání. Ironické mi přijde, že přesně o totéž (kompletní vymazání odevšad) mě sám žádal v roce 2024, když odcházel do důchodu. V kontaktech je přitom nyní nově přidán Karel Ospalík jako CEO — v době, kdy se úpravy webu zadávaly Sniper Designu (2024–2025), on sám na webu vůbec nefiguroval, protože si to po formálním odchodu do důchodu přál.",
    "tags": [
      "pracovněprávní",
      "GDPR",
      "jednatel"
    ],
    "personRefs": [
      "Andrea Matis",
      "Karel Ospalík"
    ],
    "evidenceRefs": [
      "Screenshot stránky Náš tým 15. 6. 2026",
      "E-mailové vlákno „sniperdesign zakázky“ 2024–2025"
    ]
  },
  {
    "id": "ev-2026-bmw-incident",
    "date": "5/2026 (datum ověřit)",
    "year": "2026",
    "title": "Incident s BMW X1 — zadržení vozidla a odpojení GPS",
    "text": "Přijela jsem na sídlo firmy vozem BMW X1 (vlastník Under8/NK Technology, já výhradní řidič dle Přílohy č. 1 ke smlouvě o pronájmu). V kanceláři jsme byli sami, bez svědků. Pan Ospalík mě uvedl v omyl — pod záminkou, že „se jde projet“, si vzal klíče od BMW a s vozidlem odjel; pohyb vozidla jsem sledovala přes GPS. Týž den mi napsal na WhatsApp, že mi „do odvolání ruší home office“. Asi o hodinu později mi napsal, že „potřebuje BMW asi tak na týden“ a abych se „nestarala proč“. Vozidlo pak zadržel a znemožnil mi jeho užívání; vydání/užívání vozu spojil s požadavkem, abych mu vrátila hotovost přijatou za prodej SsangYong Korando. Odpojil také GPS z vozidla, které patří NK. Cítila jsem se v této situaci ohrožená a vyděšená.",
    "legal": "Jak se na zadržení auta, odpojení GPS a podmiňování vydání dívat právně, netuším — prosím o posouzení. Zrušení home office „do odvolání“ tímto incidentem přímo souvisí s tím, že jsem měla výkon práce z domova sjednaný v pracovní smlouvě (viz moje žádost zaměstnavateli 11. 6. 2026) — jeho zrušení bez opory ve smlouvě považuji za překážku v práci na straně zaměstnavatele.",
    "tags": [
      "vozidla",
      "pracovněprávní",
      "GPS"
    ],
    "personRefs": [
      "Andrea Matis",
      "Karel Ospalík",
      "Karel Neffe"
    ],
    "evidenceRefs": [
      "Záznam incidentu s vozidlem",
      "WhatsApp zprávy o BMW a home office"
    ]
  },
  {
    "id": "ev-2026-karta",
    "date": "19. 5. 2026",
    "year": "2026",
    "title": "Pozastavení plateb na firemní kartě",
    "text": "Platby na mé firemní kartě byly jednostranně pozastaveny.",
    "legal": "Další omezení hned po odvolání.",
    "tags": [
      "jednatel",
      "pracovněprávní"
    ],
    "personRefs": [
      "Andrea Matis",
      "Karel Ospalík"
    ],
    "evidenceRefs": [
      "Záznamy platební karty",
      "Interní komunikace"
    ]
  },
  {
    "id": "ev-2026-doruceni",
    "date": "21. 5. 2026",
    "year": "2026",
    "title": "Prohlášení o doručení rozhodnutí o odvolání",
    "text": "Podala jsem písemné prohlášení o průběhu doručení; kopii rozhodnutí o odvolání jsem nedostala.",
    "legal": "Nevím, jestli takový postup byl formálně v pořádku — chci se zeptat.",
    "tags": [
      "jednatel",
      "obchodní"
    ],
    "personRefs": [
      "Andrea Matis",
      "Karel Ospalík"
    ],
    "evidenceRefs": [
      "Prohlášení o doručení 21. 5. 2026"
    ]
  },
  {
    "id": "ev-2026-pristupy",
    "date": "konec 5/2026",
    "year": "2026",
    "title": "Odebrání přístupů",
    "text": "Byl mi odebrán firemní e-mail, OneDrive/SharePoint i systémy třetích stran; zároveň po mně byly požadovány výstupy. Ty stěžejní přístupy mi odebral až poté, co jsem se na půl dne „vrátila“ z nařízené dovolené.",
    "legal": "Bez přístupů nemohu pracovat, i když pracovat chci — jak se to posuzuje, nechám na Vás.",
    "tags": [
      "pracovněprávní",
      "mzda"
    ],
    "personRefs": [
      "Andrea Matis",
      "Karel Ospalík"
    ],
    "evidenceRefs": [
      "Záznamy přístupů",
      "E-mail 11. 6. 2026"
    ]
  },
  {
    "id": "ev-2026-smernice2",
    "date": "3. 6. 2026",
    "year": "2026",
    "title": "Nová vnitřní směrnice verze 2",
    "text": "Nová směrnice Režim práce a měření výsledků manažerů verze 2, tentokrát už bez možnosti připomínkování.",
    "legal": "Chci porovnat, co se změnilo oproti verzi 1, kterou jsem znala. Verzi 1 už v dubnu 2026 sám prohlásil za schválenou „mlčením\" a upozornil, že jakmile něco vydá jako vnitřní předpis, je to pro něj červená čára (viz e-maily z 2. a 22. 4. 2026) — verze 2 na to navazuje, tentokrát ale bez jakéhokoliv prostoru pro připomínky.",
    "tags": [
      "mzda",
      "pracovněprávní"
    ],
    "personRefs": [
      "Andrea Matis",
      "Karel Ospalík"
    ],
    "evidenceRefs": [
      "Vnitřní směrnice verze 1 + 2"
    ]
  },
  {
    "id": "ev-2026-zp208",
    "date": "11. 6. 2026",
    "year": "2026",
    "title": "Žádost o obnovení přístupů a vyúčtování mzdy",
    "text": "Poslala jsem formální písemnou žádost (na vědomí Jiří Premus, Eva Orel, Tomáš Maralík, Jakub Šatánek, Kateřina Hájková) se čtyřmi požadavky: 1) obnovení přístupů k e-mailu, OneDrive/SharePoint a systémům třetích stran, nebo zpřístupnění konkrétních podkladů odpovědnou osobou (Eva Orel), plus doložení auditních logů s vyznačením data odebrání mého přístupu; 2) obnovení práce z domova sjednané v pracovní smlouvě (kterou sama nemám k dispozici, žádám o kopii) — zdůraznila jsem, že po celou dobu pracovního poměru nebyly žádné mé úkoly fakticky neproveditelné z domova; 3) písemné vyúčtování mzdy za posledních 36 měsíců, doložení důvodu snížení prémiové složky (duben 2025: 47 700 Kč hrubého → duben 2026: 0 Kč) a podkladů, na jejichž základě byly odměny stanovovány; upozornila jsem, že navýšení základní mzdy v roce 2026 je jen běžná inflační valorizace a sloučení mzdové složky do základu, ne kompenzace za zrušenou prémii; požádala jsem i o právní titul k jakémukoliv započtení vůči mé mzdě; 4) žádost o písemnou formu další komunikace.",
    "legal": "Chtěla jsem doložit, že pracovat chci a překážka není na mé straně — výslovně jsem to i pojmenovala jako překážku v práci na straně zaměstnavatele. Zdůraznila jsem, že nečerpám nemocenskou a mám naopak převedeno cca 20 dní nevyčerpané dovolené z předchozího roku — snížení odměn tedy nesouvisí s neodpracovanou dobou. U případného započtení jsem sama aktivně žádala o doložení právního titulu, což chci mít na paměti u otázky vypořádání hotovosti 237 593 Kč.",
    "tags": [
      "mzda",
      "pracovněprávní"
    ],
    "personRefs": [
      "Andrea Matis",
      "Karel Ospalík",
      "Jiří Premus",
      "Eva Orel",
      "Tomáš Maralík"
    ],
    "evidenceRefs": [
      "E-mail 11. 6. 2026",
      "Žádost zaměstnavateli 11. 6. 2026 (plné znění)"
    ]
  },
  {
    "id": "ev-2026-stav",
    "date": "19. 6. 2026",
    "year": "2026",
    "title": "Stav ke dni sepsání",
    "text": "Jsem bez přístupů a fakticky bez možnosti pracovat, a to od 12. 5. 2026.",
    "legal": "Výchozí stav, se kterým přicházím na konzultaci.",
    "tags": [
      "mzda",
      "pracovněprávní"
    ],
    "personRefs": [
      "Andrea Matis"
    ],
    "evidenceRefs": [
      "Podklady pro advokáta",
      "E-mail 11. 6. 2026"
    ]
  }
];
