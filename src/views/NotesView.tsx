import { useState, useEffect } from "react";
import { lawyerQuestions } from "../data";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { TitleBlock } from "../components/TitleBlock";

interface NoteEntry {
  id: string;
  author: string;
  date: string;
  text: string;
}

function loadEntries(): NoteEntry[] {
  try {
    const raw = localStorage.getItem("case-notes-entries");
    if (raw) return JSON.parse(raw) as NoteEntry[];
  } catch {}
  // Migrate legacy plain-text notes
  const legacy = localStorage.getItem("case-notes");
  if (legacy?.trim()) {
    return [{ id: "legacy-0", author: "Ing. Andrea Matis", date: new Date(0).toISOString(), text: legacy.trim() }];
  }
  return [];
}

function saveEntries(entries: NoteEntry[]) {
  localStorage.setItem("case-notes-entries", JSON.stringify(entries));
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (d.getFullYear() === 1970) return "dříve (přeneseno)";
  return d.toLocaleDateString("cs-CZ", { day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" });
}

function initials(name: string): string {
  return name.trim().split(/\s+/).map(w => w[0]).join("").toUpperCase().slice(0, 2) || "?";
}

export function NotesView() {
  const [author, setAuthor] = useLocalStorage("case-author", "");
  const [entries, setEntries] = useState<NoteEntry[]>(loadEntries);
  const [draft, setDraft] = useState("");

  useEffect(() => { saveEntries(entries); }, [entries]);

  function addNote() {
    const text = draft.trim();
    if (!text) return;
    setEntries(prev => [{
      id: `note-${Date.now()}`,
      author: author.trim() || "Anonymní",
      date: new Date().toISOString(),
      text,
    }, ...prev]);
    setDraft("");
  }

  function deleteEntry(id: string) {
    if (!confirm("Smazat tuto poznámku?")) return;
    setEntries(prev => prev.filter(e => e.id !== id));
  }

  return (
    <section className="view" data-view="notes">
      <TitleBlock title="Moje poznámky" subtitle="Poznámky se ukládají v prohlížeči na tomto zařízení." />

      {/* Composer */}
      <article className="card note-card">
        <div className="note-author-row">
          <label className="note-author-label" htmlFor="noteAuthor">Vaše jméno</label>
          <input
            id="noteAuthor"
            className="note-author-input"
            type="text"
            placeholder="Ing. Andrea Matis"
            value={author}
            onChange={e => setAuthor(e.target.value)}
          />
        </div>
        <label className="sr-only" htmlFor="noteDraft">Nová poznámka</label>
        <textarea
          id="noteDraft"
          placeholder="Napište poznámku — otázky, procesní taktiku, chybějící přílohy..."
          value={draft}
          onChange={e => setDraft(e.target.value)}
          style={{ marginTop: 12 }}
        />
        <div className="note-actions">
          <button className="btn-add-note" onClick={addNote} disabled={!draft.trim()}>
            + Přidat poznámku
          </button>
        </div>
      </article>

      {/* Saved entries */}
      {entries.length > 0 && (
        <div className="notes-entries">
          {entries.map(entry => (
            <article key={entry.id} className="card note-entry">
              <div className="note-entry-header">
                <span className="note-avatar">{initials(entry.author)}</span>
                <div className="note-entry-meta">
                  <span className="note-entry-author">{entry.author}</span>
                  <span className="note-entry-date">{formatDate(entry.date)}</span>
                </div>
                <button className="note-delete" onClick={() => deleteEntry(entry.id)} title="Smazat" aria-label="Smazat poznámku">✕</button>
              </div>
              <p className="note-entry-text">{entry.text}</p>
            </article>
          ))}
        </div>
      )}

      {/* Context cards */}
      <div className="notes-layout" style={{ marginTop: 16 }}>
        <article className="card note-card">
          <h2 className="section-heading">Kontrolní seznam</h2>
          <ul className="mini-list">
            <li><span>Doplnit originály příloh</span><strong>□</strong></li>
            <li><span>Zeptat se na promlčení</span><strong>□</strong></li>
            <li><span>Zeptat se, co je pracovní a co obchodní věc</span><strong>□</strong></li>
            <li><span>Doplnit podklady k částkám</span><strong>□</strong></li>
          </ul>
        </article>
        <article className="card note-card">
          <h2 className="section-heading">Kontext: struktura mzdy (HPP + DPP)</h2>
          <p>
            Mzda byla ve firmě standardně rozdělena mezi hlavní pracovní poměr a dvě dohody o provedení práce (DPP TRAIVA s.r.o. a DPP
            Traiva Safety s.r.o.). Takhle to měli nastavené všichni zaměstnanci, věděli o tom a akceptovali to. DPP Traiva Safety byla v
            dubnu 2026 zrušena všem zaměstnancům v souvislosti s prodejem firmy — pro mě to znamenalo o 6 460 Kč čistého měsíčně méně,
            nešlo ale o krok mířený jen na mě. Částka z DPP Traiva Safety byla všem zaměstnancům „přidána" do mzdy z hlavního pracovního
            poměru. Uvádím to pro úplnost, aby byl jasný vývoj mého celkového příjmu při čtení výplatních pásek.
          </p>
        </article>
      </div>

      <article className="card note-card" style={{ marginTop: 16 }}>
        <h2 className="section-heading">Moje prohlášení k projektu Odoo</h2>
        <p>
          <em>
            „Řešení Odoo nebyl IT projekt, ale řízení provozního rizika. Pokud by se tyto věci neřešily, firma by nebyla v prodejném
            stavu. Z e-mailů je zřejmé, že jsem dlouhodobě pracovala s úkoly a odpovědností, které měly přímý dopad na hodnotu firmy
            při prodeji — ať už šlo o řízení rizik, stabilitu, plánování, cenotvorbu nebo auditní připravenost. Nejde o subjektivní
            pocit přínosu, ale o konkrétní kroky, které zvyšují valuaci a snižují rizika pro kupce. Proto je legitimní bavit se o
            odpovídajících odměnách."
          </em>
        </p>
      </article>

      <article className="card note-card" style={{ marginTop: 16 }}>
        <h2 className="section-heading">
          Body k obhajobě — Okamžité zrušení PP (15. 7. 2026)
        </h2>
        <p>
          <em>
            Toto jsou moje první poznámky k jednotlivým bodům obvinění — ne
            právní hodnocení, jen podklad pro konzultaci.
          </em>
        </p>
        <ul className="mini-list">
          <li>
            <span>
              <strong>1) T-Mobile admin. práva (15. 5. 2026):</strong> Síť
              jsem administrovala běžně v rámci své agendy. Chci ověřit, kdy
              přesně jsem byla prokazatelně seznámena s odvoláním a zda
              úkon spadal do mé dosavadní běžné činnosti.
            </span>
            <strong>□</strong>
          </li>
          <li>
            <span>
              <strong>2) Otevírání e-mailových schránek:</strong> Přístupy
              v příloze č. 1 jsou datované 27. 4. a 20. 4. 2026 — tedy
              2–3 týdny PŘED mým odvoláním 12. 5. 2026, kdy jsem byla stále
              jednatelkou s plným oprávněním. Tvrzení o jednání „bez
              oprávnění po odvolání" tomu neodpovídá.
            </span>
            <strong>□</strong>
          </li>
          <li>
            <span>
              <strong>3) Data pro Karla Neffeho (8. 4., 2. 3. 2026):</strong>{" "}
              V té době už probíhalo jednání o prodeji firmy s NDA
              podepsanou samotným Ospalíkem. Potřebuji ujasnit, zda šlo
              o podklady, které jsem zpracovávala v rámci své role a s jeho
              vědomím, nebo o samostatnou iniciativu.
            </span>
            <strong>□</strong>
          </li>
          <li>
            <span>
              <strong>4) Finanční výkazy na pavelcermak@kb.cz (19. 3. 2026):</strong>{" "}
              Zpracování finančních výkazů pro due diligence jsem dělala
              osobně jako součást své pracovní/jednatelské agendy — potřebuji
              ověřit, kdo je Pavel Čermák a v jaké souvislosti jsem mu
              podklady posílala.
            </span>
            <strong>□</strong>
          </li>
          <li>
            <span>
              <strong>5) Neomluvená absence (červen–červenec 2026):</strong>{" "}
              Navazuje na můj protest z 14. 7. 2026 (§ 208 ZP). Nový
              protiargument zaměstnavatele — záložní e-mail
              amatis.traiva@gmail.com — je třeba prověřit: měla jsem k němu
              reálně přístup a věděla jsem, že se má používat k plnění
              pracovních úkolů?
            </span>
            <strong>□</strong>
          </li>
          <li>
            <span>
              <strong>6) Smazání dat ve schránce j.premus@traiva.cz (21. 4. 2026):</strong>{" "}
              Nejzávažnější bod kvůli zmínce § 230 trestního zákoníku.
              Potřebuji si sama vybavit a sepsat kontext této události co
              nejdřív a probrat to s advokátem prioritně.
            </span>
            <strong>□</strong>
          </li>
          <li>
            <span>
              <strong>Kontextové body (vozidlo, BMW, nákupy):</strong>{" "}
              K prodeji vozidla a nájmu BMW mám vlastní verzi události
              (viz záznam o incidentu s BMW X1) — Ospalík mi vozidlo sám
              zadržel a podmínil vrácením peněz za SsangYong. K 10 nákupům
              bez dokladů potřebuji dohledat, zda účtenky existují.
            </span>
            <strong>□</strong>
          </li>
        </ul>
      </article>

      <article className="card note-card" style={{ marginTop: 16 }}>
        <h2 className="section-heading">Moje otázky na konzultaci</h2>
        <ul className="mini-list">
          {lawyerQuestions.map((question, index) => (
            <li key={index}>
              <span>{index + 1}. {question}</span>
              <strong>□</strong>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
