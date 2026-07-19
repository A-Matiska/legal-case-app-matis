/**
 * Alias maps bridging the original free-text reference strings (as Andrea
 * wrote them in event/evidence "people"/"evidence" fields) to real entity
 * IDs, so the detail panel can render actual clickable cross-navigation
 * instead of dead display text.
 *
 * NOT every reference string maps to something — many were always meant as
 * loose descriptive citations ("E-maily", "Interní komunikace", "Odoo
 * komunikace"...) with no dedicated evidence/document card behind them.
 * That's expected, not a bug: unmapped strings are still shown as plain
 * text in the UI, they just aren't clickable. The data-integrity test
 * (see __tests__/integrity.test.ts) only asserts that every alias that DOES
 * exist points at a real, existing ID — not that every string resolves.
 */

export const personAlias: Record<string, string> = {
  "Andrea Matis": "p-andrea",
  "Karel Ospalík": "p-karel",
  "Michal Plaček": "p-placek",
  "Tomáš Maralík": "p-tomas",
  "Karel Neffe": "p-neffe",
  "Vojtěch Ospalík": "p-vojtech",
  "Charlie Ospalík": "p-karel", // Gmailový alias Karla Ospalíka
  "Karin Švédová": "p-karin-svedova",
  // "Jiří Premus" and "Eva Orel" are mentioned in events but have no
  // dedicated Person card — intentionally left unmapped.
};

/** Raw ref string -> evidence[] id */
export const evidenceAlias: Record<string, string> = {
  "WhatsApp 20. 5. 2021": "e-whatsapp",
  "Fio banka + smlouvy — Období I": "e-obdobi1",
  "Usnesení 24. 6. 2024": "e-usneseni",
  "Projektový plán Odoo 23. 6. 2025 — příslib prémie": "e-odoo-prislib",
  "Finanční rekonciliace": "e-rekonciliace",
  "E-mail Maralíka 4. 5. 2026": "e-maralik",
  "Výzva 30. 4. 2026": "e-vyzva",
  "Timely report": "e-timely",
  "Vnitřní směrnice verze 1": "e-smernice",
  "Vnitřní směrnice verze 1 + 2": "e-smernice",
  "Doklady k vozidlům": "e-vozidla-doklady",
  "Pokladní doklad 237 593 Kč": "e-vozidla-doklady",
  "SMS 12. 5. 2026": "e-gps",
  "Prohlášení o doručení 21. 5. 2026": "e-doruceni",
  "Záznam incidentu s vozidlem": "e-incident",
  "E-mail 11. 6. 2026": "e-email-208",
};

/** Raw ref string -> documents[] id */
export const documentAlias: Record<string, string> = {
  "Smlouva o pracovnělékařských službách": "d-lekarske",
  "Fio dokumenty 8/2023": "d-fio-2023",
  "Smlouva Quest solutions s.r.o. — implementace Odoo, 21. 6. 2024": "d-odoo-smlouva-quest",
  "Původní projektový plán Odoo a přílohy": "d-odoo-plan-puvodni",
  "Podnět OIP FINAL": "d-oip",
  "Žádost zaměstnavateli 11. 6. 2026 — popis procesu stanovení mezd": "d-email-208",
  "Žádost zaměstnavateli 11. 6. 2026 (plné znění)": "d-email-208",
  "Podklad advokát vozidla PRIORITA": "d-vozidla",
  "Odoo párování plateb — stav projektu 7. 5. 2026": "d-odoo-stav",
  "Podklady pro advokáta": "d-main",
  "E-mail Ospalíka 2.–22. 4. 2026 — schválení předpisu \"mlčením\"": "d-rezim-schvaleni",
  "E-mail Ospalíka Hrdličkovi 27. 4. 2026 — \"jeden samouk\"": "d-origamis-samouk",
  "E-mail Ospalíka 27. 4. 2026 — shrnutí párování plateb \"slátanina\"": "d-parovani-slatanina",
  "E-mail Neffe/Ospalík 8.-9. 6. 2026 — výpověď nájemní smlouvy vozu": "d-neffe-vypoved",
  "Celý výpis z karty 22. 5. 2026": "d-vypis-karty-22-5",
  "Podklad pro DD 6. 5. 2026": "d-dd-podklad",
  "FW: Nájem auta 8. 5. 2026": "d-najem-auta",
  "Nátlak na podpis odlvolání jednatelky – záznam": "d-natlek-odvolani",
  "Strategický plán 2025 — souhrn pro poradu vedení 14. 1. 2026": "d-strategicky-plan-2025",
};
