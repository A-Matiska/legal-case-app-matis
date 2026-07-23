export type ClaimStatus = "uplatneno" | "k-uplatneni" | "sporne" | "bezi";
export type ClaimGroup = "vycislene" | "odhad" | "variabilni";

export interface Claim {
  id: string;
  label: string;
  amount: number | null;
  basis: string;
  status: ClaimStatus;
  group: ClaimGroup;
  note?: string;
}

export const claims: Claim[] = [
  {
    id: "nahrada-208",
    label: "Náhrada mzdy za červen (§ 208)",
    amount: 65899,
    basis: "§ 208 ZP",
    status: "uplatneno",
    group: "vycislene",
  },
  {
    id: "premie",
    label: "Nevyplacené prémie (roční)",
    amount: 402397,
    basis: "mzdové nároky",
    status: "sporne",
    group: "vycislene",
  },
  {
    id: "opce",
    label: "Přislíbená odměna",
    amount: 2200000,
    basis: "e-mail Ospalíka 4. 8. 2023",
    status: "sporne",
    group: "odhad",
    note: "buď 5 % z čistého zisku KAŽDÝ ROK (2023 ≈ 380 tis. · 2024 ≈ 250 tis. · 2025 ≈ 338 tis. → za 2023–2025 ≈ 970 tis. + poměrná část 2026), nebo opce na 10 % obchodní podíl (~2,2 mil.); částečně splaceno; přesné vyčíslení k ověření s advokátem",
  },
  {
    id: "nahrada-69",
    label: "Náhrada mzdy za dobu sporu (§ 69)",
    amount: null,
    basis: "§ 69 ZP — běží od 20. 7. 2026 (dodání oznámení do datové schránky, ID 1736600458)",
    status: "bezi",
    group: "variabilni",
  },
  {
    id: "odvody",
    label: "Doplatky mzdy a odvodů",
    amount: null,
    basis: "§ 208 / pojistné",
    status: "k-uplatneni",
    group: "variabilni",
  },
  {
    id: "dovolena-nevycerpana",
    label: "Náhrada za nevyčerpanou dovolenou (§ 222)",
    amount: 60773,
    basis: "§ 222 ZP · 16,60 dne (132,80 h) dle mé pásky 6/2026",
    status: "k-uplatneni",
    group: "vycislene",
    note: "sporně až 26,60 dne (≈ 97 400 Kč) — 10 dnů dovolené mi bylo 12. 5. 2026 nařízeno ze dne na den v rozporu s § 217 odst. 1 ZP (14denní lhůta), neměly by se proto počítat jako vyčerpané",
  },
  {
    id: "dovolena-dpp",
    label: "Dovolená z DPP (od 1. 1. 2024)",
    amount: null,
    basis: "§ 211 a násl. ZP — od 1/2024 vzniká dovolená i z DPP a DPČ",
    status: "k-uplatneni",
    group: "odhad",
    note: "NIKDO neeviduje odpracované hodiny na DPP — dovolená z nich proto nikdy nebyla vypočtena, poskytnuta ani proplacena. Vést evidenci odpracované doby je povinnost zaměstnavatele (§ 96 ZP); chybějící evidence jde k jeho tíži, ne k mé. Hodinová sazba je přitom uvedena přímo v DPP — účetní upravovala vykázané hodiny tak, aby se vešly pod zákonný strop 300 h/rok (§ 75 ZP); vykázané hodiny proto neodpovídají skutečně odpracované době.",
  },
  {
    id: "prumer-podhodnoceny",
    label: "Podhodnocený průměrný výdělek — dopad na VŠECHNY náhrady",
    amount: null,
    basis: "§ 351 a násl. ZP",
    status: "sporne",
    group: "odhad",
    note: "mou jednu mzdu zaměstnavatel rozděloval na HPP + 2× DPP, takže se do průměru pro HPP počítá jen část; navíc mi byly v rozhodném období osekány prémie. ⚠️ DVOUSEČNÉ: v období 6/2024–5/2026 jsem byla jednatelkou a mzdy sama zpracovávala — před uplatněním probrat s advokátem, zda přínos převáží riziko protiargumentu o spoluodpovědnosti.",
  },
];
