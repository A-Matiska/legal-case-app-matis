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
    "text": "Pan Ospalík mi poslal e-mail „Návrh Tvých odměn a smlouvy na obchodní podíl — k projednání“. Přílohou byl přímo dokument „Odměny a smlouva Andrea“ (5 % ze zisku po zdanění, 10% podíl = 2,2 mil. Kč, převod podílu po kumulaci bonusů, smlouva o smlouvě budoucí) s účinností od 1. 1. 2024. Autor i odesílatel návrhu je tedy doložen: pan Ospalík, 4. 8. 2023. K 1. 1. 2024 pak podle tohoto návrhu nabylo účinnosti jmenování i příslib podílů (5 % ze zisku, 10 % z prodeje). Samotná smlouva o převodu podílu ale nikdy oficiálně sepsána nebyla — zůstalo jen u tohoto návrhu a e-mailové komunikace.",
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
    "text": "Pan Ospalík e-mailem (mně a na vědomí Jiřímu Premusovi) vyhlásil moratorium na jakákoli externí školení, dokud nebude jisté, že personál dokonale zná Odoo. Zrušil tím i školení na Excel nebo IT dovednosti, které jsem navrhovala — právě z důvodu lepší orientace v jakémkoli interním systému — a měla na ně schváleno i financování z tehdejší výzvy MPSV na podporu vzdělávání ve firmách a digitalizaci. Argumentoval, že na ně není podepsaná smlouva.",
    "legal": "Vydal to kvůli mně, abych se nevzdělávala v ničem jiném než v Odoo, i když šlo o vzdělávání ku prospěchu věci a já jsem přitom intenzivně pracovala na opravách Odoo — což bylo i mým vlastním cílem. Vydal to přesně den před tím, než mi napsal, že systém vedení projektu bude „po jeho“, a týden před zahájením projektového plánu 23. 6. 2025. Pro doplnění: samotný systém ani naše nastavení sám neviděl ani v demo verzi až do jara 2026.",
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
    "text": "Do té doby se pan Ospalík o samotnou implementaci Odoo ani o nic jiného kolem systému nezajímal — zásoboval mě ale nesmyslnými návody z ChatGPT, jak mám systém nastavovat, přestože si ho sám ještě ani jednou neotevřel. Pan Ospalík mi 19. 6. 2025 e-mailem napsal: „Nemůžeme pověřit takovým úkolem někoho, kdo je tu zcela nový. Protože ani za 6 měsíců systém vedení projektu ala Plaček, Kokoruďa ani Tvůj nevedl k odstranění všech kritických chyb, bude systém vedení projektu po mém. ... Chtěl bych, abys se v tom stala profesionálem. Ty na to máš. Očekávám rozpracovaný plán do pondělí 23. 6.“ Projektový plán Oprava kritických chyb v implementaci Odoo: já jako projektová manažerka, zahájení 23. 6. 2025, termín oprav 30. 9. 2025. Dokument doslovně: „V případě částečného splnění bude prémie i standardní odměny (na základě hospodářských výsledků) krácena poměrně dle vyřešených chyb.“ Krácení se tedy výslovně týká i mé BĚŽNÉ odměny, ne jen mimořádné prémie za Odoo. Plán zároveň uvádí moji mzdu jako „65 000 Kč čistého / měsíčně“ — tato částka ale neodpovídá mým výplatním páskám z té doby, kde mám jako základní mzdu vedenou jinou (nižší) částku. Dokument tedy uvádí nesprávný/nadhodnocený údaj o mé skutečné základní mzdě.",
    "legal": "Implementátora jsem si podle plánu měla zajistit sama. Tři měsíce jsem jednala s dodavateli Odoo řešení pro ČR a SR — nikdo nechtěl opravovat nezdokumentovanou práci původního dodavatele (Quest/ODOPRO, p. Plaček); kapacitu nabízeli nejdřív od září, a ideálně stavět celé znovu. Spolupráci s Origamis (Brno) pomohlo doporučení externího ERP specialisty z Bratislavy, se kterým jsem se radila; do září 2025 byl ale Origamis jen expertní poradce, takže narovnávání zůstalo na mně — učila jsem se vše za pochodu sama. Prémie mi nebyla vyplacena — chci probrat, co z toho plyne. DŮLEŽITÉ: projekt začal 23. 6. 2025 — přesně v měsíci, kdy mi klesla na nulu i běžná odměna. Dokument výslovně píše, že se krácení „na základě hospodářských výsledků“ týká i standardní odměny, ale vyhodnocení má proběhnout až k 30. 9. 2025, ne hned na začátku. Chci se zeptat, jestli krácení mé běžné mzdy měsíc po startu projektu bylo v souladu s tímto plánem. Ve výplatních páskách mi základní mzda v té době navýšena nebyla a nebyly mi ani vyplaceny běžné bonusy. Ospalíkova citovaná reakce z 19. 6. 2025 byla mimo jiné reakcí na to, že jsem pověřila asistentku zápisem reportu chyb v nastavení systému.",
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
    "text": "Pan Ospalík mi 4. 7. 2025 poslal e-mail nazvaný „Moje myšlenky - O lidech, zrcadlech a tichých signálech“ — vágní text o důvěře, transparentnosti a potřebě „resetu“, bez konkrétního obsahu; údajně nabyl dojmu, že dávám ruce pryč od neúspěšného projektu. Skoro dva týdny jsem nad odpovědí přemýšlela a několikrát ji upravila. V odpovědi z 8. 8. 2025 jsem podrobně popsala své nasazení, i přesto, že byl ve všech zásadních e-mailech jen „na vědomí“ (ERP jsem intenzivně řešila od 29. 4. 2024, smazanou zálohu pilotního projektu na Githubu). Zpochybnění restrikce mých odměn jsem označila za demotivující až možná upřímně urážející a napsala mu, že „z boje neutíkám a od nedokončené práce taky ne“ — ať si vzpomene, že on sám na mě čekal sedm měsíců, než jsem vůbec nastoupila do firmy, protože jsem chtěla nejdřív dokončit svěřený projekt u předchozího zaměstnavatele. Poté jsme měli osobní schůzku, kde mi vytýkal, že není vidět rychlý progres, a měl dojem, že když se mi to nepovedlo hned, dávám od toho ruce pryč. Vysvětlila jsem mu situaci s programátory a to, že jeho termín je nereálný kvůli vytížení Origamis jinými projekty.",
    "tags": [
      "pracovněprávní",
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
    "text": "I přesto, že jsme se v srpnu shodli, že toto ještě necháme otevřené, mi Ospalík oznámil, že byl najat nový kolega Tomáš Maralík, který dříve pracoval v jiné firmě jako IT, s pokynem, že by měl postupně převzít ERP agendu. Nesouhlasila jsem s tím, ale dala jsem tomu šanci a několikrát jsem si ho na různých situacích otestovala — pracoval ale v jiném IT oboru a neměl dostatečné zkušenosti se žádným ze systémů, které se u nás používaly. Zadání zatím dostával pouze od Ospalíka a netýkalo se agendy, kterou jsem spravovala nebo nastavovala já (e-shop, interní systémy, ERP). Zároveň zesílily e-mailové výtky, urgence a postupné omezování mého postavení.",
    "legal": "Vnímám to jako druhou fázi tlaku, který začal už v červnu odebráním mzdové agendy a odtud dál gradoval. Zpětně to vidím jako začátek přípravy na moje nahrazení.",
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
    "text": "Dostala jsem pokyn ke kompletaci dokumentů; teprve poté mi došel účel — příprava prodeje firmy běžela od podzimu 2025 bez mého vědomí (užší výběr 2 zájemců probíhal bez mé účasti, term sheet podepsán 30. 3. 2026). Součástí byla i příprava podkladu k objasnění struktury nákladů pro potenciálního kupujícího ještě před samotnou due diligence (6. 5. 2026) — mimo jiné jsem měla od účetní vyžádat všechny účty za benzín 2025–26 a nechat sestavit knihu jízd všech firemních aut.",
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
      "Podklad advokát vozidla PRIORITA",
      "Podklad pro DD 6. 5. 2026"
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
      "pracovněprávní"
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
      "pracovněprávní"
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
    "text": "Připravila jsem výzvu s přehledem svých požadavků, ale nakonec jsem ji neposlala.",
    "legal": "Dokument dokládá, jak jsem tehdy vnímala situaci a jaké požadavky bych měla — i když jsem ho nakonec neodeslala.",
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
    "id": "ev-2026-dataroom",
    "date": "3.–4. 5. 2026",
    "year": "2026",
    "title": "Data Room pro due diligence — konfrontace Ospalíka a valuace 90 mil. Kč",
    "text": "3. 5. 2026 mi Ospalík napsal, že Karel Neffe ho informoval, že jsem mu sdělila zpoždění kompletace dataroomu. Ospalík pak v e-mailu rozebral jednotlivé položky DD a u většiny konstatoval, že je lze dodat okamžitě nebo do týdne — e-mail zakončil: „Takže nevím proč se kompletace dataroomu se zpozdí.“ Navazující den (4. 5.) jsem Ospalíkovi zaslala finanční přehled struktury nákladů Traivy 2021–2025, který si Neffe vyžádal jako podklad pro investory — přehled vycházel výhradně z dat dataroomu a auditovaných závěrek. Požádala jsem Ospalíka o připomínky do 5. 5., protože Neffe měl 6. 5. jednání s investory. Z vlákna vyplývá dohodnutá transakční cena: normalizovaná EBITDA 12,1 mil. Kč × 5 = 60 mil. Kč + nemovitost 30 mil. Kč = 90 mil. Kč.",
    "legal": "Data Room jsem aktivně připravovala já. Ospalík sám v e-mailu prokázal, že většina položek mohla být dodána rychle — přesto mě den předtím konfrontoval se zprávou, že zpoždění přišlo ‚od Andreji'. Pět pracovních dnů po tomto e-mailovém vláknu (12. 5.) jsem byla odvolána. Vychází mi, že prodej firmy Neffemu aktivně probíhal v době mého odvolání — a přitom jsem to byla já, kdo DD koordinoval. Dávám to do přímé souvislosti s otázkou pro advokáta ‚Dá se prodej firmy nějak pozastavit, dokud se nevypořádají moje nároky?'",
    "tags": [
      "obchodní",
      "pracovněprávní"
    ],
    "personRefs": [
      "Andrea Matis",
      "Karel Ospalík",
      "Karel Neffe"
    ],
    "evidenceRefs": [
      "E-mail Ospalíka 3. 5. 2026 — Data Room",
      "E-mail AM 4. 5. 2026 — finanční přehled pro DD"
    ]
  },
  {
    "id": "ev-2026-vysledky-prace",
    "date": "6. 5. 2026",
    "year": "2026",
    "title": "Požadavek Ospalíka na „Výsledky práce“",
    "text": "6. 5. 2026 mi Ospalík napsal: „Možná jen nemám informace, protože se Ti neodesílaly e-maily.\" Požadoval seznam názvů marketingových akcí za rok 2025 a 2026, které měly „významný, odhadnutelný nebo vyčíslitelný dopad na ekonomiku firmy\". Ospalík přitom sám 14. 1. 2026 připravil pro poradu vedení Strategický plán 2025 — vyhodnocení, ve kterém nesplnění cílů e-shopu (+150 produktů) přičetl „vysokému pracovnímu zatížení při implementaci Odoo\" a nesplnění marketingových nástrojů přičetl nespolehlivému externímu dodavateli Sniper — ne marketing manažerovi. Čtyři měsíce poté, šest dní před mým odvoláním, po mně stejné výsledky retroaktivně požadoval jako doklad mé práce.",
    "legal": "E-mail přišel 6. 5. 2026 — šest dní před mým odvoláním a v době aktivního DD procesu. Interpretuju ho jako snahu retroaktivně dokladovat, že moje práce nemá měřitelný přínos. Přitom vlastní firemní dokument z 14. 1. 2026 přičítal nesplnění cílů Odoo zatížení a externímu dodavateli — ne mně. Chci s advokátem probrat, zda tento rozpor (vlastní vyhodnocení vs. následná obvinění) dokládá účelovost požadavku a zda jde o formu postihu za uplatnění mých práv.",
    "tags": [
      "pracovněprávní",
      "mzda"
    ],
    "personRefs": [
      "Andrea Matis",
      "Karel Ospalík"
    ],
    "evidenceRefs": [
      "E-mail Ospalíka 6. 5. 2026 — Výsledky práce",
      "Strategický plán 2025 — souhrn pro poradu vedení 14. 1. 2026"
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
    "text": "V e-mailu k tématu nájmu auta (přes doménu Karla Neffeho) mi Ospalík napsal doslova: „K tomu jsem už vše řekl telefonicky. Nepiš mi emaily z andrea@gt-sports.cz nebo jiných než firemního.“ Ve stejném e-mailu mi zároveň vytkl, že neví, jaká je navržená prodejní cena starého vozidla, což označil za „opět porušení firemní instrukce i zvyku ve firmě“.",
    "legal": "Dávám do souvislosti s pozdějším odebráním firemních přístupů — pak jsem neměla jak komunikovat.",
    "tags": [
      "pracovněprávní"
    ],
    "personRefs": [
      "Andrea Matis",
      "Karel Ospalík"
    ],
    "evidenceRefs": [
      "E-mailová komunikace",
      "FW: Nájem auta 8. 5. 2026"
    ]
  },
  {
    "id": "ev-2026-odvolani",
    "date": "12. 5. 2026",
    "year": "2026",
    "title": "Odvolání z funkce, karta a GPS",
    "text": "V jeden den jsem byla odvolána z funkce jednatelky (podpis rozhodnutí jsem odmítla, kopii mi nepředali), byla mi zablokována firemní karta, přišla SMS o aktivaci GPS sledování bez mého souhlasu, byla mi nařízena dovolená ze dne na den (bez předchozího upozornění na termín — tu jsem k podpisu dostala a podepsala, ale vlastní kopii mi také nepředali) a začalo postupné odebírání všech přístupů do systémů, se kterými jsem pracovala.",
    "tags": [
      "jednatel",
      "GPS",
      "GDPR",
      "obchodní",
      "pracovněprávní"
    ],
    "personRefs": [
      "Andrea Matis",
      "Karel Ospalík"
    ],
    "evidenceRefs": [
      "SMS 12. 5. 2026",
      "Prohlášení o doručení 21. 5. 2026",
      "Nátlak na podpis odlvolání jednatelky – záznam"
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
    "id": "ev-2026-karta",
    "date": "19. 5. 2026",
    "year": "2026",
    "title": "Pozastavení plateb na firemní kartě — obvinění ze soukromých plateb",
    "text": "19. 5. 2026 mi Ospalík poslal e-mail s předmětem „Obrat vs náklady“: „Za rok jsme zvýšili obrat o 3 miliony a náklady na kartě a i jiné, jsi zvýšilo o 2,5 milionů. Pozastavuji nové platby na Tvé kartě do doby než budou dodány všechny účty a vyřešeny některé zřejmě soukromé platby. Vše na základě firemních předpisů. Jen na kartě 1,7 mil. Náklady za posledních 12 měsíců. Musíme to vyhodnotit.“ O tři dny později, 22. 5. 2026, jsem si vyžádala celý výpis z karty — potřebovala jsem doložit všechny položky, které z ní byly strženy neoprávněně nebo chybně, a obvinění ze soukromých plateb vyvrátit. Má firemní karta přitom sloužila jako hlavní platební prostředek pro online marketingové systémy (Meta Ads, Google Ads), PPC poplatky a SW licence — tedy výdaje přímo svázané s obratem eshopu — a pro drobné firemní nákupy. Kartou navíc platila i Eva Orel a případně další zaměstnanci.",
    "legal": "Obvinění ze „zejmě soukromých plateb“ přišlo 7 dní po odvolání, bez předložení jakýchkoli konkrétních položek. Karta sloužila výhradně k firemním účelům (PPC, SW licence, marketingové systémy, drobné nákupy) — v systémech jsou k tomu doklady. Výpis jsem si vyžádala sama, abych obvinění vyvrátila — ne abych něco skrývala. Kartou platila i Eva Orel a případně další zaměstnanci, přesto obvinění míří jen na mě. Chci probrat: (1) jak se toto obvinění právně kvalifikuje, (2) zda zastavení platební karty bylo oprávněné, (3) zda nárůst nákladů o 2,5 mil. koreluje s nárůstem obratu o 3 mil. (tedy de facto 83 % nákladová efektivita nárůstu obratu).",
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
      "Interní komunikace",
      "Celý výpis z karty 22. 5. 2026"
    ]
  },
  {
    "id": "ev-2026-smernice2",
    "date": "3. 6. 2026",
    "year": "2026",
    "title": "Nová vnitřní směrnice verze 2",
    "text": "Dne 3. 6. 2026 vydána nová vnitřní směrnice „Režim práce a měření výsledků manažerů verze 2\" — bez jakéhokoliv prostoru pro připomínky. Verzi 1 této směrnice přitom Ospalík sám v dubnu 2026 prohlásil za schválenou „mlčením\" a upozornil, že jakmile něco vydá jako vnitřní předpis, je to pro něj červená čára (viz e-maily z 2. a 22. 4. 2026). Verze 2 na tuto logiku navazuje, tentokrát ale bez jakéhokoliv dalšího prostoru pro připomínky — vydána 22 dní po mém odvolání, v době, kdy jsem neměla přístupy ani možnost plnit úkoly, které směrnice ukládá.",
    "legal": "Chci s advokátem probrat: (1) zda lze jednostranné vydání vnitřního předpisu bez možnosti připomínkování zpochybnit, zvláště jde-li o předpis zavedený v době, kdy jsem neměla přístupy k systémům; (2) zda je směrnice platná vůči mně jako zaměstnankyni, která o ní nebyla řádně informována; (3) jaký vliv má prohlášení „schválení mlčením\" u verze 1 na případný postih za její nesplnění.",
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
    "id": "ev-2026-bmw-incident",
    "date": "8. 6. 2026",
    "year": "2026",
    "title": "Incident s BMW X1 — zadržení vozidla, odpojení GPS a výpověď nájmu (8.–9. 6. 2026)",
    "text": "8. 6. 2026 byl posledním dnem, kdy jsem byla fyzicky přítomna na pracovišti. Dne 8. 6. 2026 jsem přijela na sídlo firmy vozem BMW X1 (vlastník Under8/NK Technology — Karel Neffe, já výhradní řidič dle Přílohy č. 1 ke smlouvě o pronájmu). V kanceláři jsme byli sami, bez svědků. Pan Ospalík mě uvedl v omyl — pod záminkou, že „se jde projet\", si vzal klíče od BMW a s vozidlem odjel; pohyb vozidla jsem sledovala přes GPS. Týž den mi napsal na WhatsApp, že mi „do odvolání ruší home office\". Asi o hodinu později mi napsal, že „potřebuje BMW asi tak na týden\" a abych se „nestarala proč\". Vozidlo pak zadržel a znemožnil mi jeho užívání; vydání vozu podmínil požadavkem, abych mu vrátila hotovost přijatou za prodej SsangYong Korando. Odpojil také GPS přístup k vozidlu, které patří NK Technology/Karel Neffe. Cítila jsem se v této situaci ohrožená a vyděšená. Téhož dne (8. 6. 2026) napsal Karel Neffe Ospalíkovi (v kopii mně, Jiřímu Premusovi, Evě Orel a Barboře Zikmundové), že mu Ospalík při telefonátu lhal a zároveň smazal jeho přístup k vozu i k GPS poloze — kvůli tomu mu s okamžitou platností vypověděl smlouvu o pronájmu a oznámil, že si vůz osobně vyzvedne následující večer. Ospalík mu 9. 6. 2026 odpověděl, že Traiva s.r.o. nesouhlasí s tvrzením o porušení smlouvy ani s tím, že by vozidlo bylo dle smlouvy určeno k mému výhradnímu užívání — přitom Přílohu č. 1 sám nikdy neviděl a v dalších e-mailech mě vyzýval, ať mu ji doložím.",
    "legal": "Jak se na zadržení auta, odpojení GPS a podmiňování vydání dívat právně, netuším — prosím o posouzení. Zrušení home office „do odvolání\" přímo souvisí s pracovní smlouvou (viz žádost 11. 6. 2026) — považuji za překážku v práci na straně zaměstnavatele. Neffova okamžitá výpověď nájmu kvůli Ospalíkově lži potvrzuje moji verzi incidentu a dokládá, že GPS přístup Ospalík skutečně smazal. Ospalík navíc Přílohu č. 1 sám neznal — jak obstojí jeho tvrzení, že výhradní užívání nebylo sjednáno?",
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
      "WhatsApp zprávy o BMW a home office",
      "E-mail Neffe/Ospalík 8.-9. 6. 2026 — výpověď nájemní smlouvy vozu"
    ]
  },
  {
    "id": "ev-2026-eskalace-9-6",
    "date": "9. 6. 2026",
    "year": "2026",
    "title": "Telefonní a osobní nátlak 8.–12. 6.: zrušení HO, svolávání porad, systematické ignorování telefonátů",
    "text": "Po incidentu s BMW (8. 6. 2026) Ospalík od 9. 6. téměř denně volal a chtěl se setkat nebo mluvit telefonicky. Rozhodla jsem se po 8. 6. veškerou komunikaci přesměrovat do písemné formy — veškeré příchozí hovory od 9. 6. jsou proto v historii zaznamenány jako zmeškané. Přehled příchozích hovorů (všechny zmeškané od 9. 6.): 9. 6.: 13:53, 14:33, 18:36, 19:09, 20:31 — 5 pokusů; 10. 6.: 13:22, 13:42, 13:43, 13:50, 15:38, 15:38, 15:40 — 7 pokusů, přestože ráno téhož dne právě probíhala porada, kde mě veřejně obvinil z krádeže; 11. 6.: 8:09, 9:34, 10:47, 15:43, 16:28 — 5 pokusů (zároveň mi ten den definitivně zablokoval přístupy ke všem systémům); 12. 6.: 10:25, 11:19, 14:46 — 3 pokusy. Celkem 9.–12. 6. jde o 20 zmeškaných hovorů v průběhu 4 dnů. WhatsApp 8. 6. 15:07: „Dokud nebudou vyřešeny všechny resty, do odvolání ruším tvoji práci z domova. Ode dneška.\" 9. 6. 18:41: „Zítra 10.6. v 8:00 je porada vedení.\" 10. 6. 19:23: „Zítra 7:30 je porada vedoucích k projektu. Účast nutná.\"",
    "legal": "Zrušení home office „do odvolání\" bez předchozího projednání považuji za jednostrannou změnu pracovních podmínek (pracovní smlouva home office obsahuje). 20 zmeškaných hovorů za 4 dny po incidentu, kdy jsem explicitně sdělila, že vše chci řešit písemně, chci probrat jako možný nátlak a pokus obejít písemnou komunikaci. Svolávání porad na ráno, kdy jsem prokazatelně ze zdravotních důvodů nemohla přijít, a hrozba „nemluvených směn\" za absenci ze zdravotních důvodů — chci probrat jako možné šikanózní jednání. Nátlak na telefonickou (off-record) komunikaci bezprostředně po incidentu vnímám jako snahu omezit důkazní stopu. Žádost o písemnou formu veškeré komunikace jsem formalizovala dopisem zaslaným 11. 6. 2026.",
    "tags": [
      "pracovněprávní",
      "GPS"
    ],
    "personRefs": [
      "Andrea Matis",
      "Karel Ospalík"
    ],
    "evidenceRefs": [
      "WhatsApp archiv — eskalace 9. 6. 2026"
    ]
  },
  {
    "id": "ev-2026-porada-difamace",
    "date": "10. 6. 2026",
    "year": "2026",
    "title": "Porada vedení 10. 6. — zákaz vstupu, zákaz kontaktu se zaměstnanci, nařčení z krádeže 100 000 Kč",
    "text": "Ospalík svolal poradu vedení na 10. 6. 2026 v 8:00 (oznámení WhatsApp 9. 6. v 18:41). Nebyla jsem přítomna — hospitalizace a vyšetření po lékařském zákroku 9. 6. Na poradě sdělil zaměstnancům: (1) mám zákaz vstupu do prostor společnosti; (2) zaměstnancům zakázal jakýkoli kontakt se mnou pod hrozbou výpovědi; (3) prohlásil, že jsem ukradla z firemního účtu 100 000 Kč a dosud je nevrátila. Tato tvrzení jsou nepravdivá. O obsahu porady jsem se dozvěděla zprostředkovaně od zaměstnanců, kteří mě kontaktovali přes osobní kanály, přestože jim to bylo výslovně zakázáno. Ještě týž den v 19:23 Ospalík svolal druhou poradu na 11. 6. v 7:30 („porada vedoucích k projektu, účast nutná\") — ani té jsem se nemohla zúčastnit ze zdravotních důvodů.",
    "legal": "Veřejné nařčení z krádeže před kolektivem zaměstnanců považuji za difamaci (poškození dobré pověsti) a zároveň za potenciálně trestněprávně relevantní jednání. Zákaz kontaktu zaměstnanců se mnou pod hrozbou výpovědi vnímám jako: (a) obstrukci mého přístupu k důkazům a svědkům; (b) nátlak na potenciální svědky před soudním/správním řízením; (c) psychický nátlak na zaměstnance samotné (hrozba ztráty zaměstnání). Chci probrat, zda je prokazatelné nařčení z krádeže bez právního podkladu samostatným deliktním titulem a jak zajistit svědecké výpovědi zaměstnanců, kteří mi informaci předali.",
    "tags": [
      "pracovněprávní",
      "obchodní"
    ],
    "personRefs": [
      "Andrea Matis",
      "Karel Ospalík"
    ],
    "evidenceRefs": [
      "Svědecké výpovědi zaměstnanců — porada červen 2026"
    ]
  },
  {
    "id": "ev-2026-pristupy",
    "date": "10. 6. 2026",
    "year": "2026",
    "title": "Odebírání přístupů: zahájeno 10. 6., od 11. 6. 2026 definitivně zablokován přístup ke všem firemním systémům",
    "text": "V průběhu května 2026 mi byly postupně omezovány přístupy k systémům. Dne 10. 6. 2026 jsem strávila půl dne snahou uložit a exportovat veškeré potřebné dokumenty — tato aktivita je doložitelná záznamem v aplikaci Timely. Od 11. 6. 2026 mi byl definitivně zablokován přístup ke všem firemním účtům a systémům: firemní e-mail, OneDrive/SharePoint, vzdálené připojení (VPN/remote desktop), firemní bankovní účet a veškeré online systémy třetích stran, které jsem v rámci své práce používala a spravovala. Bez těchto přístupů jsem nebyla schopna plnit zaměstnavatelem požadované úkoly ani doložit podklady, které Ospalík zároveň po mně písemně vyžadoval. OIP podnět tuto situaci kvalifikuje jako možnou překážku v práci na straně zaměstnavatele (§ 208 zákoníku práce).",
    "legal": "OIP kvalifikuje situaci jako možnou překážku v práci na straně zaměstnavatele (§ 208 ZP). Zablokování přístupu k firemnímu bankovnímu účtu 11. 6. navazuje časově na nařčení z krádeže 100 000 Kč, které Ospalík pronesl na poradě 10. 6. — chci probrat, zda toto opatření bylo preventivní reakcí na vlastní nepravdivé obvinění a co z toho pro mě právně plyne. Dále chci probrat, jak odebrání přístupů ovlivňuje nárok na náhradu mzdy a zda mi zaměstnavatel mohl přístupy jednostranně odebrat.",
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
    "id": "ev-2026-zp208",
    "date": "11. 6. 2026",
    "year": "2026",
    "title": "Formální dopis Ospalíkovi e-mailem — 4 požadavky, lhůta 5 prac. dnů (11. 6. 2026)",
    "text": "Dne 11. 6. 2026 jsem zaslala Ospalíkovi formální e-mail (kopie: Premus, Orel, Maralík, Šatánek, Hájková) se čtyřmi požadavky a lhůtou 5 pracovních dnů (tj. do 18. 6. 2026): 1) obnovení přístupu k e-mailu, OneDrive/SharePoint a SaaS aplikacím (nebo export podkladů Evou Orel), plus auditní logy s datem odebrání přístupu; 2) obnovení home office dle pracovní smlouvy (kopii smlouvy nemám, žádám o ni) — všechny mé úkoly byly po celou dobu fakticky vykonávány na dálku; 3) písemné vyúčtování mzdy za 36 měsíců (promlčecí lhůta), doložení důvodu snížení prémiové složky (duben 2025: 47 700 Kč → duben 2026: 0 Kč) a právní titul k jakémukoli započtení vůči mzdě; 4) písemná forma veškeré komunikace. Souběžně mi Ospalík e-mailem (9. 6. a 11. 6. WhatsApp) požadoval doklady k prodeji firemního auta a podklady do účetnictví — odpověděla jsem, že bez přístupu k firemním systémům je předložit nemohu. Do 18. 6. 2026 (konec lhůty) nepřišla žádná odpověď ani částečné plnění.",
    "legal": "Dopis explicitně pojmenoval situaci jako překážku v práci na straně zaměstnavatele (§ 208 ZP). Ospalíkův protipožadavek na doklady, když mi sám zablokoval přístup k systémům kde jsou uloženy, považuji za rozporný — chci probrat, zda za jejich nesplnění mohu být postižena. Lhůta 5 pracovních dnů uplynula bez reakce, čímž bylo splněno podmínka pro eskalaci.",
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
    "id": "ev-2026-vyzva2",
    "date": "16. 6. 2026",
    "year": "2026",
    "title": "Formální výzva 2 + OIP podnět — odesláno 16. 6., doručeno datovkou 25. 6. 2026",
    "text": "Dne 16. 6. 2026, po uplynutí lhůty 5 pracovních dnů bez jakékoli odpovědi zaměstnavatele, jsem učinila dva kroky. Za prvé: podala jsem podnět k Oblastnímu inspektorátu práce (OIP). Za druhé: zaslala jsem Ospalíkovi formální výzvu 2 — „eskalaci žádosti ze dne 11. 6. 2026 na úroveň právně závazného požadavku\" — současně třemi kanály: datovou schránkou, e-mailem a doporučenou poštou. Datová schránka potvrdila doručení 25. 6. 2026 (Ospalík si zprávu přečetl, nebo uplynulo 10 dnů a nastalo fiktivní doručení). Výzva obsahovala konkrétní lhůty: do 20. 6. 2026 obnovení přístupů nebo export podkladů a obnovení home office; do 30. 6. 2026 vyúčtování mzdy za 36 měsíců a písemné zdůvodnění snížení bonusové složky; ihned zahájení písemné komunikace. Nové požadavky: auditní logy (GDPR čl. 15 + § 96 ZP) a doložení rovného zacházení se srovnatelnými zaměstnanci (§ 16 ZP). Varování: pokud bylo snížení bonusu reakcí na uplatnění zákonných práv, jde o odvetné opatření (§ 346b odst. 4 ZP). Odpověď ani plnění nepřišlo ani na tuto výzvu.",
    "legal": "OIP podnět podán 16. 6. 2026 — inspektorát bude prošetřovat jednání zaměstnavatele. Výzva 2 cituje § 38 odst. 1 písm. a) ZP (povinnost přidělovat práci), § 208 ZP (překážka v práci), § 346b odst. 4 ZP (zákaz odvetných opatření), § 141 ZP (splatnost mzdy), § 16 ZP (rovné zacházení), GDPR čl. 15 + § 96 ZP (auditní logy). Lhůta do 20. 6. pro přístupy a HO uplynula bez reakce. Lhůta do 30. 6. pro mzdu a zdůvodnění bonusu rovněž bez reakce. Ignorování formálních výzev zaslaných třemi kanály (datovka, e-mail, doporučená pošta) chci probrat jako klíčový argument pro soudní/správní řízení.",
    "tags": [
      "pracovněprávní",
      "OIP"
    ],
    "personRefs": [
      "Charlie Ospalík"
    ],
    "evidenceRefs": [
      "Výpis z datové schránky — žádost o obnovení přístupů 17. 6. 2026"
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
  },
  {
    "id": "ev-2026-vyplatni-paska",
    "date": "13. 7. 2026",
    "year": "2026",
    "title": "Výplatní páska červen 2026 — 20 dní neomluvenou absencí, průměrný výdělek nevyplacen",
    "text": "Dne 13. 7. 2026 přišla výplatní páska za červen 2026 (TRAIVA s.r.o., zaměstnanec zam14 Matis Andrea). Tarif měsíční: 63 000 Kč. Fond pracovní doby: 22 dnů, 176 hodin. Odpracováno: 0 hodin. Zaměstnavatel klasifikoval 20 pracovních dnů (160 hodin) jako neomluvené absence — přičemž správná klasifikace měla být překážky v práci na straně zaměstnavatele (§ 208 ZP). Dovolená: 2 dny (16 hodin). Vyplaceno: 7 322 Kč hrubého, čistá mzda 4 236 Kč. Průměrný výdělek pro náhrady: 457,63 Kč/hodinu. Při správné klasifikaci (§ 208 ZP) by náhrada za 160 hodin činila 73 221 Kč hrubého. Zaměstnavatel neodvedl povinné pojistné — zdravotní pojištění a ČSSZ — v plné výši. Tuto skutečnost jsem bezodkladně doplnila do podnětu na Oblastní inspektorát práce (OIP). K dnešnímu dni (14. 7. 2026) jsem neobdržela žádnou výpověď ani jiné formální rozvázání pracovního poměru — pracovní poměr tedy formálně stále trvá.",
    "legal": "Klasifikace 20 dnů jako neomluvená absence je fakticky nesprávná: byla jsem připravena a ochotna pracovat (doloženo formálními výzvami z 11. 6. a 16. 6. 2026), ale zaměstnavatel odebral veškeré pracovní přístupy — čímž sám vytvořil překážku (§ 208 ZP). Správná klasifikace: překážky na straně zaměstnavatele, nárok: průměrný výdělek (457,63 Kč/h × 160 h = 73 221 Kč hrubého). Neodvedení pojistného v zákonné výši je dalším porušením — doplněno do OIP podnětu. Absence výpovědi ke dni 14. 7. 2026 má dvojí právní význam: (1) pracovní poměr trvá, nárok na mzdu/náhradu narůstá každý den; (2) zaměstnavatel dosud nepostupoval formálně — možná vyčkává nebo připravuje jiný postup. Klasifikace jako neomluvená absence je nebezpečná: dává podklad pro výpověď (§ 52 písm. g ZP) nebo okamžité zrušení (§ 55 odst. 1 písm. b ZP) — považuji to za účelové vytváření důvodů k rozvázání. Chci probrat: (1) jak formálně a bez zbytečného odkladu zpochybnit klasifikaci; (2) zda narůstající dluh na mzdě (§ 208 ZP) zvyšuje moji vyjednávací pozici; (3) jak se bránit případné výpovědi opírající se o neomluvené absence.",
    "tags": [
      "pracovněprávní",
      "mzda"
    ],
    "personRefs": [
      "Charlie Ospalík",
      "Kateřina Hájková"
    ],
    "evidenceRefs": [
      "Výplatní páska — červen 2026 (TRAIVA s.r.o.)"
    ]
  },
  {
    "id": "ev-2026-protest-absence",
    "date": "14. 7. 2026",
    "year": "2026",
    "title": "Protest + výzva k opravě mzdy — odesláno datovou schránkou",
    "text": "Dne 14. 7. 2026 v 17:55:17 byl zaměstnavateli TRAIVA, s.r.o. odeslán formální protest + výzva k opravě výplatní pásky za červen 2026. Zasláno datovou schránkou (PDZ), ID zprávy: 1734487765, ID schránky příjemce: gwn73br, K rukám: Ing. Karel Ospalík, Do vlastních rukou: Ano. EV0 (podána) i EV5 (dodána do schránky příjemce): 14. 7. 2026 v 17:55:17 — doručena okamžitě. Přílohy: průvodní text zprávy + Andrea_Matis_vyzva_k_oprave_mzdoveho_vymeru.pdf. Obsah výzvy: (1) překlasifikování 20 dnů z neomluvené absence na překážky v práci § 208 ZP, (2) doplacení rozdílu mzdy 65 898,80 Kč hrubého na účet 2298163003/0800, (3) doplacení pojistného ZP + ČSSZ. Prodlení od 11. 7. 2026, zákonný úrok § 1970 OZ. Lhůta k plnění: 28. 7. 2026.",
    "legal": "Datová schránka zajišťuje prokazatelnost doručení. EV5 = technické doručení do schránky příjemce. Typ zprávy PDZ (Poštovní datová zpráva) — pro soukromoprávní doručování. \"Do vlastních rukou: Ano\" — Ospalík musí zprávu osobně otevřít, jinak nastane fiktivní doručení. Fiktivní doručení: 10 dní od EV5, tj. nejpozději 24. 7. 2026. Lhůta v dopise 28. 7. 2026 je 10 pracovních dní od doručení — k posouzení advokátem: pokud doručení nastalo 24. 7. (fiktivní), běží 10 pracovních dní od 24. 7. (= 7. 8. 2026), nikoliv do 28. 7. — v každém případě je 28. 7. jako fixní deadline formálně správný a pro advokáta dostatečný. Odeslání protestu zakládá: (1) prokazatelnou výzvu k plnění, (2) fixuje prodlení od 11. 7. 2026 (§ 1970 OZ), (3) vylučuje argument zaměstnavatele o nevědomosti nároku, (4) je klíčovým podkladem pro soudní/správní řízení. Dokumenty k doložení: ID zprávy 1734487765, potvrzení z datovka.gov.cz uloženo.",
    "tags": [
      "pracovněprávní",
      "mzda"
    ],
    "personRefs": [
      "Charlie Ospalík"
    ],
    "evidenceRefs": [
      "Potvrzení o odeslání datové zprávy ID 1734487765 (14. 7. 2026 17:55)",
      "Textová zpráva zaslaná datovou schránkou — protest (14. 7. 2026)",
      "Protest proti klasifikaci absence + výzva k opravě mzdového výměru — příloha datovky (14. 7. 2026)"
    ]
  },
  {
    "id": "ev-2025-erp-tlumeni-reklamy",
    "date": "leden 2025",
    "year": "2025",
    "title": "Vědomé tlumení reklamy při spuštění ERP Odoo (leden–srpen 2025)",
    "text": "Po spuštění ERP Odoo v lednu 2025 bylo na úrovni vedení rozhodnuto o záměrném utlumení reklamy na dobu přibližně 6–9 měsíců. Důvodem byl přechod na nový systém a nutnost stabilizace procesů. Pokles výkonnosti marketingu v tomto období nebyl selháním marketingové manažerky, ale vědomým provozním rozhodnutím schváleným vedením.",
    "legal": "Klíčový exkulpační důkaz: Ing. Ospalík v DD (due diligence) komunikaci z jara 2026 sám vysvětlil: 'pokles v roce 2025 vysvětlen spuštěním ERP v lednu 2025 a vědomým tlumením reklamy cca 6–9 měsíců'. Tato skutečnost vylučuje, aby jakékoli hodnocení výkonu Ing. Matis v 1. pololetí 2025 vycházelo pouze z poklesu marketingových výsledků. Pro advokáta: přímé vyvracení případných tvrzení zaměstnavatele o neuspokojivém výkonu v tomto období.",
    "tags": [
      "pracovněprávní",
      "obchodní",
      "Odoo"
    ],
    "personRefs": [
      "Karel Ospalík"
    ],
    "evidenceRefs": [
      "DD komunikace — vědomé tlumení reklamy po spuštění ERP Odoo (leden 2025)"
    ]
  },
  {
    "id": "ev-2025-karin-expedice",
    "date": "říjen 2025",
    "year": "2025",
    "title": "Přijetí Karin Švédové — posila expedice, nikoliv marketing (podzim 2025)",
    "text": "V říjnu 2025 byla přijata Karin Švédová jako dočasná posila expedice v důsledku výpadku personálu (dlouhodobé PN a dovolené zaměstnankyň expedice). Ing. Matis zajistila nábor jako provozní opatření; v plánu bylo Karin přesunout na prodejna místo Dany Rogalové bez navýšení stavu. Ing. Ospalík byl s plánem obeznámen a sám zmrazil organizační změny kvůli probíhající akvizici. Karin nikdy nevykonávala marketingové úkoly.",
    "legal": "E-mail Ing. Matis → Jiří Premus (30. 4. 2026, předmět 'Stav pracovníků a náklady') prokazuje: (1) Karin přijata jako zástup na expedici v období PN, (2) Ing. Matis koordinovala postup s vedením, (3) Ospalík zmrazil změny kvůli akvizici — proto nebyla Karin přesunuta dle plánu. Teams chat s Barborou Slonkovou (říjen 2025) dokládá provozní kontext přijetí. Závěr: jakékoli tvrzení zaměstnavatele, že Karin byla přijata jako marketingová specialistka nebo bez vědomí vedení, je interními zdroji vyvráceno.",
    "tags": [
      "pracovněprávní",
      "obchodní"
    ],
    "personRefs": [
      "Karel Ospalík",
      "Jiří Premus"
    ],
    "evidenceRefs": [
      "E-mail 'Stav pracovníků a náklady' — Ing. Matis → Jiří Premus (30. 4. 2026)",
      "Teams chat Barbora Slonková — kontext přijetí Karin Švédové (říjen 2025)"
    ]  },

  {
    "id": "ev-traiva-safety-dpp",
    "date": "2021–2026",
    "year": "2021",
    "title": "Struktura odměňování — HPP + DPP u TRAIVA Safety s.r.o.",
    "text": "Zaměstnanci TRAIVA s.r.o. měli dlouhodobě mzdu rozdělenou na dvě složky: HPP + DPP u TRAIVA s.r.o. a DPP u spřízněné rodinné firmy TRAIVA Safety s.r.o. TRAIVA Safety s.r.o. je vlastněná dcerou majitele Karla Opalíka; jednatelem je zeť Ospalíka, který je zároveň zaměstnaný u TRAIVA s.r.o. Tato struktura platila i pro mou odměnu po celou dobu trvání pracovního poměru.",
    "legal": "Chci probrat, jaké právní důsledky má tato struktura odměňování — zejm. zda rozdělení odměny mezi dvě spřízněné firmy ovlivňuje výpočet průměrného výdělku, přesčasů a případných náhrad. Zda šlo o standardní praxi nebo účelové rozvrhání, nechám na posouzení advokáta.",
    "tags": ["mzda", "pracovněprávní", "DPP"],
    "personRefs": ["Andrea Matis", "Karel Ospalík"],
    "evidenceRefs": ["Výplatní pásky — DPP TRAIVA Safety s.r.o."]
  },
  {
    "id": "ev-2026-dovolena-kupci",
    "date": "únor 2026",
    "year": "2026",
    "title": "Vynucená dovolená v době schůzek s potenciálními kupci firmy",
    "text": "V únoru 2026 na mě majitel Karel Ospalík naléhal, abych odjela na dovolenou „odpočinout si“. Ve stejném termínu probíhaly ve firmě schůzky jeho zetě (jako zástupce majitele) s potenciálními kupci. Tuto skutečnost mi zeť následně potvrdil s tím, že majitel prodej „zvažuje“. Přímými doklady k těmto schůzkám nedisponuji; mám za to, že jsou dohledaté (kalendáře, e-mailová komunikace, svědky). Jednoho ze zájemců jsem ve firmě osobně opakovaně zaznamenala.",
    "legal": "Dávám do souvislosti s celkovým vzorcem chování — odebrání mé přítomnosti ve firmě v klíčový okamžik jednání o prodeji. Chci probrat, zda lze nepřítomnost v době due diligence a schůzek s kupci považovat za součást účelového jednání zaměstnavatele.",
    "tags": ["pracovněprávní", "obchodní"],
    "personRefs": ["Andrea Matis", "Karel Ospalík"],
    "evidenceRefs": []
  }
,
  {
    "id": "ev-2026-okamzite-zruseni",
    "date": "15. 7. 2026",
    "year": "2026",
    "title": "Zaměstnavatel doručil okamžité zrušení pracovního poměru (§ 55 odst. 1 písm. b) ZP)",
    "text": "Dne 15. 7. 2026 mi zaměstnavatel (zastoupen Ing. Karlem Ospalíkem) doručil datovou schránkou, e-mailem a poštou Okamžité zrušení pracovního poměru dle § 55 odst. 1 písm. b) zákoníku práce. Uvádí šest důvodů: (1) 15. 5. 2026 — údajná neoprávněná změna administrátorského oprávnění k firemní síti T-Mobile po mém odvolání z jednatelství; (2) 15. 6. 2026 nahlášené, údajně svévolné otevírání e-mailových schránek zaměstnanců a jednatele — příloha č. 1 uvádí konkrétní přístupy z 27. 4. a 20. 4. 2026; (3) přeposlání interních dat (tržby, marže, výroba) Karlu Neffemu 8. 4. a 2. 3. 2026; (4) zaslání finančních výkazů firmy na e-mail pavelcermak@kb.cz 19. 3. 2026 — kvalifikováno zaměstnavatelem jako vyzrazení obchodního tajemství; (5) neomluvená absence cca 28 pracovních dnů v červnu–červenci 2026 — zaměstnavatel odmítl můj protest z 14. 7. 2026 s odkazem na záložní e-mail amatis.traiva@gmail.com; (6) 13. 7. 2026 nahlášené údajné smazání dat v e-mailové schránce j.premus@traiva.cz dne 21. 4. 2026 — zaměstnavatel zmiňuje možné naplnění § 230 trestního zákoníku. Jako dokreslující kontext dále uvádí prodej vozidla (Under8 s.r.o., 330 000 Kč), nájem BMW X1 a 10 nákupů bez dokladů z doby mého jednatelství a zmiňuje probíhající posouzení trestní odpovědnosti advokátní kanceláří zaměstnavatele.",
    "legal": "Klíčové k ověření s advokátem: většina jednání v bodech 1–4 i v kontextové části se odehrála v době, kdy jsem byla jednatelkou (do 12. 5. 2026), nebo dokonce před odvoláním — bod 2 uvádí přístupy z 27. 4. a 20. 4. 2026, tedy 2–3 týdny PŘED odvoláním, což oslabuje tvrzení o jednání 'bez oprávnění po odvolání'. Bod 5 navazuje na už dokumentovaný spor o klasifikaci § 208 ZP (viz Protest 14. 7. 2026) — nově se objevuje protiargument o záložním e-mailu amatis.traiva@gmail.com, který je třeba prověřit. Bod 6 je potenciálně nejzávažnější kvůli zmínce trestní odpovědnosti — vyžaduje okamžitou konzultaci. Zaměstnavatel tvrdí, že PP končí okamžikem doručení — je třeba posoudit lhůtu a možnost žaloby na neplatnost okamžitého zrušení (§ 72 ZP, obvykle 2 měsíce od skončení PP) a nároky, které mezitím vznikly (přesčasy, odměna jednatelky, mzda za červen).",
    "tags": ["pracovněprávní", "jednatel", "obchodní"],
    "personRefs": ["Andrea Matis", "Karel Ospalík", "Karel Neffe"],
    "evidenceRefs": ["Okamžité zrušení pracovního poměru zaměstnavatelem 15. 7. 2026 + příloha č. 1"]
  }
,
  {
    "id": "ev-2026-trello-pristupy",
    "date": "16. 7. 2026",
    "year": "2026",
    "title": "Odebrání přístupů k Trello boardům",
    "text": "Dne 16. 7. 2026 dopoledne mi byly odebrány přístupy k oběma Trello boardům vedeným pod firemním účtem TRAIVA ('Marketing produktů Traiva' a 'AM – Marketingové strategie a věrnostní program'), na kterých jsem dlouhodobě vedla strategické marketingové plánování. K obsahu už nemám přístup, mám k dispozici jen dříve zaznamenaná meta-data.",
    "legal": "Odebrání přístupu přišlo den po doručení okamžitého zrušení pracovního poměru (15. 7. 2026) — časová souvislost dokresluje pokračující odebírání přístupů do firemních systémů i po formálním ukončení PP. Chci probrat, zda a jak dokládat obsah těchto boardů (screenshoty, historie, svědci), když už k nim nemám přístup.",
    "tags": ["pracovněprávní", "obchodní"],
    "personRefs": ["Andrea Matis", "Karel Ospalík"],
    "evidenceRefs": ["Trello board 'Marketing produktů Traiva'", "Trello board 'AM – Marketingové strategie a věrnostní program'"]
  }


,
  {
    "id": "ev-2026-karin-koerce",
    "date": "10. 6. 2026",
    "year": "2026",
    "title": "Karin Švédová: nátlak na odchod, přeřazení na uklízečku, verbální napadení — souběžně s poradou",
    "text": "Ve stejný den, kdy Ospalík veřejně difamoval Andreu (7:30), se odehrávaly i tyto události potvrzené podnětem k OIP Karin Švédové (podán 17. 7. 2026): 9:00 — Karin (asistentka expedice, přijata Andreou) povolána do zasedačky za přítomnosti Natalie Baloghové a Nikol Kostkové; Ospalík ji vyzval k podpisu dohody o rozvázání bez odstupného s účinností od 11. 6. 2026, bez udání důvodu. 13:00 — po odmítnutí jí oznámil přeřazení na pozici uklízečky (třetí přeřazení od října 2025); prováděl BOZP školení pro třídění odpadu v kontejnerech. 13:30 — předložil výtku datovanou retroaktivně k 1. 6. 2026; při odmítnutí podpisu křičel a opakovaně ji slovně napadl ('blbá', 'hloupá'); teprve po uklidnění přivolal kolegyně Nikol Kostkovou a Šárku Mullerovou jako svědkyně předání. 11. 6. 2026 — Karin nastoupila na pracovní neschopnost pro psychické obtíže. Za červen 2026 Ospalík nařídil mzdové účetní Kateřině Hájkové nevyplatit Karin odměnu z DPP.",
    "legal": "Karin Švédová je nezávislý svědek, jehož OIP podnět (ID f83b0ad4, 17. 7. 2026) z ÚŘEDNÍ evidence potvrzuje: (a) veřejnou pomluvu Andreou s 100 000 Kč na ranní poradě; (b) plošný zákaz kontaktu zaměstnanců s Andreou; (c) Andreinu roli 'přímé nadřízené' (= manažerské postavení). Vzorec retroaktivní výtky vůči Karin (předána v den eskalace, nikoliv v datum na dokumentu) je totožný s přístupem Ospalíka vůči Andree. Svědkyně jmenovány v OIP podnětu: Natalie Baloghová, Nikol Kostková, Šárka Mullerová.",
    "tags": [
      "pracovněprávní"
    ],
    "personRefs": [
      "Karel Ospalík",
      "Karin Švédová"
    ],
    "evidenceRefs": [
      "Podnět OIP Karin Švédové 17. 7. 2026",
      "Výtka Karin Švédové 10. 6. 2026"
    ]
  }
,
  {
    "id": "ev-2026-ozp",
    "date": "15. 7. 2026",
    "year": "2026",
    "title": "Okamžité zrušení pracovního poměru (§ 55 odst. 1 písm. b ZP) — doručeno 15. 7. 2026",
    "text": "Traiva s.r.o. zastoupená Ing. Karlem Ospalíkem doručila 15. 7. 2026 (datová schránka + e-mail + pošta) 13stránkové okamžité zrušení pracovního poměru dle § 55 odst. 1 písm. b) zákoníku práce. Šest uváděných důvodů: (1) neoprávněná změna admin. práv T-Mobile GPS 12./15. 5. 2026; (2) přístup do e-mailových schránek zaměstnanců (příloha č. 1: logy 20.–30. 4. 2026); (3) přeposílání interních informací Karlu Neffemu; (4) zaslání finančních výkazů na pavelcermak@kb.cz; (5) neomluvená absence červen 2026 (20 prac. dní); (6) smazání dat ve schránce j.premus@traiva.cz. Dokument zároveň zmiňuje 'probíhající posouzení trestní odpovědnosti'. OZP doručeno 2 dny po třetí výzvě datovou schránkou (14. 7.) a v den, kdy Karin Švédová sepisovala OIP podnět (podán 17. 7.).",
    "legal": "Lhůta § 72 ZP pro žalobu na neplatnost: 15. 9. 2026 (2 měsíce od doručení) — prekluzivní, zmeškání = zánik práva. Lhůta § 58 odst. 1 ZP (subjektivní): zaměstnavatel musí prokázat, že se o každém důvodu dozvěděl nejpozději 2 měsíce před 15. 7. 2026 (tj. nejpozději 15. 5. 2026). Dubnové přístupy 'objeveny' v červnu–červenci = po třech výzvách datovou schránkou = retaliační vzorec doložitelný chronologií.",
    "tags": [
      "pracovněprávní",
      "jednatel",
      "obchodní"
    ],
    "personRefs": [
      "Andrea Matis",
      "Karel Ospalík"
    ],
    "evidenceRefs": [
      "Okamžité zrušení pracovního poměru 15. 7. 2026",
      "Podklad pro advokáta: Analýza OZP"
    ]
  }
,
  {
    "id": "ev-2026-karin-oip",
    "date": "17. 7. 2026",
    "year": "2026",
    "title": "Karin Švédová podala podnět k OIP — úřední korobrace pomluvy a zákazu kontaktu",
    "text": "Karin Švédová (přijata Andreou, přeřazena na uklízečku po odmítnutí výpovědi 10. 6., od 11. 6. na PN pro psychické obtíže) podala 17. 7. 2026 formální podnět k Oblastnímu inspektorátu práce pro Moravskoslezský kraj a Olomoucký kraj. Podání potvrzeno SÚIP (ID f83b0ad4-7041-4a79-924a-643cd19a6948, číslo podání 20260001). Podnět z NEZÁVISLÉHO zdroje a ÚŘEDNÍ evidence potvrzuje: veřejnou pomluvu Andreou ('neoprávněný výběr 100 000 Kč') na ranní poradě 10. 6. 2026 před všemi zaměstnanci, plošný zákaz kontaktu zaměstnanců s Andreou, a označení Andreou jako 'přímé nadřízené'. Karin zároveň upozorňuje na systémový vzorec: DPP jako obcházení zákonného odměňování, výtky vydávané retroaktivně v den eskalace, přeřazování bez písemného dodatku.",
    "legal": "Podnět k OIP je VEŘEJNÝ DOKUMENT s úřední evidencí — nelze ho zpochybnit jako soukromé sdělení. Potvrzuje pomluvu (§ 184 TZ, § 82 OZ) z nezávislého zdroje: Karin nebyla nikdy v pracovněprávním sporu s Andreou, nemá zájem na výsledku Andreina sporu. Svědkyně jmenovány v OIP podnětu: Natalie Baloghová, Nikol Kostková, Šárka Mullerová, Kateřina Hájková. Inspektorát práce nyní má povinnost kontrolu provést — výsledek kontroly bude dalším důkazem v Andreině věci.",
    "tags": [
      "pracovněprávní",
      "OIP"
    ],
    "personRefs": [
      "Andrea Matis",
      "Karin Švédová",
      "Karel Ospalík"
    ],
    "evidenceRefs": [
      "Podnět OIP Karin Švédové 17. 7. 2026",
      "Osvědčení o digitálním úkonu SÚIP"
    ]
  }

];
