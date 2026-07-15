import { useState, useRef } from "react";
import { events, evidence, people, documents, lawyerQuestions } from "../data";
import { useCaseDispatch } from "../state/caseStore";

const INITIALS: Record<string, string> = {
  "p-andrea": "AM",
  "p-karel": "KO",
  "p-traiva": "TR",
};

type PanelId = "postaveni" | "kontext" | "vzorec" | "naroky";

const storageKey = (id: PanelId) => `case-shrnuti-${id}`;

function loadSaved(): Partial<Record<PanelId, string>> {
  const ids: PanelId[] = ["postaveni", "kontext", "vzorec", "naroky"];
  const out: Partial<Record<PanelId, string>> = {};
  ids.forEach((id) => {
    const v = localStorage.getItem(storageKey(id));
    if (v) out[id] = v;
  });
  return out;
}

function AccordionPanel({
  id,
  title,
  open,
  onToggle,
  savedHtml,
  onSave,
  onReset,
  children,
}: {
  id: PanelId;
  title: string;
  open: boolean;
  onToggle: () => void;
  savedHtml?: string;
  onSave: (id: PanelId, html: string) => void;
  onReset: (id: PanelId) => void;
  children: React.ReactNode;
}) {
  const [editing, setEditing] = useState(false);
  const [editHtml, setEditHtml] = useState("");
  const editRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  function startEdit() {
    const html = savedHtml ?? bodyRef.current?.innerHTML ?? "";
    setEditHtml(html);
    setEditing(true);
    setTimeout(() => editRef.current?.focus(), 50);
  }

  function saveEdit() {
    if (!editRef.current) return;
    onSave(id, editRef.current.innerHTML);
    setEditing(false);
  }

  function cancelEdit() {
    setEditing(false);
  }

  return (
    <div className="shrnuti-panel">
      <button
        className="shrnuti-toggle"
        type="button"
        aria-expanded={open}
        aria-controls={`shrnuti-body-${id}`}
        onClick={onToggle}
      >
        <span>{title}</span>
        <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
          {open && !editing && (
            <span
              className="shrnuti-edit-btn"
              role="button"
              tabIndex={0}
              title="Upravit text"
              onClick={(e) => { e.stopPropagation(); startEdit(); }}
              onKeyDown={(e) => { if (e.key === "Enter") { e.stopPropagation(); startEdit(); } }}
            >✏️</span>
          )}
          {open && savedHtml && !editing && (
            <span
              className="shrnuti-edit-btn"
              role="button"
              tabIndex={0}
              title="Obnovit původní text"
              onClick={(e) => {
                e.stopPropagation();
                if (window.confirm("Obnovit původní text panelu?")) onReset(id);
              }}
              onKeyDown={(e) => { if (e.key === "Enter") { e.stopPropagation(); onReset(id); } }}
            >↺</span>
          )}
          <span className="shrnuti-chevron" aria-hidden="true">{open ? "▲" : "▼"}</span>
        </span>
      </button>

      {open && (
        <div className="shrnuti-body" id={`shrnuti-body-${id}`} ref={bodyRef}>
          {editing ? (
            <>
              <div
                ref={editRef}
                contentEditable
                suppressContentEditableWarning
                className="shrnuti-editable"
                dangerouslySetInnerHTML={{ __html: editHtml }}
                onKeyDown={(e) => {
                  if ((e.ctrlKey || e.metaKey) && e.key === "s") { e.preventDefault(); saveEdit(); }
                  if (e.key === "Escape") cancelEdit();
                }}
              />
              <div className="shrnuti-edit-actions">
                <button type="button" className="shrnuti-save-btn" onClick={saveEdit}>
                  Uložit (Ctrl+S)
                </button>
                <button type="button" className="shrnuti-cancel-btn" onClick={cancelEdit}>
                  Zrušit
                </button>
              </div>
            </>
          ) : savedHtml ? (
            <div dangerouslySetInnerHTML={{ __html: savedHtml }} />
          ) : (
            children
          )}
        </div>
      )}
    </div>
  );
}

export function DashboardView() {
  const dispatch = useCaseDispatch();
  const keyPeople = people.slice(0, 3);
  const [openPanels, setOpenPanels] = useState<Set<PanelId>>(new Set(["naroky"]));
  const [savedContent, setSavedContent] = useState<Partial<Record<PanelId, string>>>(loadSaved);

  function toggle(id: PanelId) {
    setOpenPanels((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function handleSave(id: PanelId, html: string) {
    localStorage.setItem(storageKey(id), html);
    setSavedContent((prev) => ({ ...prev, [id]: html }));
  }

  function handleReset(id: PanelId) {
    localStorage.removeItem(storageKey(id));
    setSavedContent((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  }

  function openView(view: "timeline" | "evidence" | "documents" | "notes") {
    dispatch({ type: "SET_VIEW", view });
  }

  function openPerson(id: string) {
    dispatch({ type: "SELECT", id });
    dispatch({ type: "SET_VIEW", view: "people" });
  }

  const panelProps = (id: PanelId) => ({
    id,
    open: openPanels.has(id),
    onToggle: () => toggle(id),
    savedHtml: savedContent[id],
    onSave: handleSave,
    onReset: handleReset,
  });

  return (
    <section className="view" data-view="dashboard" id="view-dashboard">

      <div className="dash-people-row">
        {keyPeople.map((p) => (
          <button
            key={p.id}
            className="dash-person-card"
            onClick={() => openPerson(p.id)}
            aria-label={`Otevřít detail osoby: ${p.name}`}
          >
            <div className="dash-person-avatar">
              {INITIALS[p.id] ?? p.name.slice(0, 2).toUpperCase()}
            </div>
            <div className="dash-person-info">
              <strong>{p.name}</strong>
              <span>{p.role}</span>
            </div>
          </button>
        ))}
      </div>

      <div className="dash-stats-row">
        <button className="card stat-card dash-stat" onClick={() => openView("timeline")}>
          <span>Události v časové ose</span>
          <strong>{events.length}</strong>
        </button>
        <button className="card stat-card dash-stat" onClick={() => openView("evidence")}>
          <span>Podklady</span>
          <strong>{evidence.length}</strong>
        </button>
        <button className="card stat-card dash-stat" onClick={() => openView("documents")}>
          <span>Dokumenty</span>
          <strong>{documents.length}</strong>
        </button>
        <button className="card stat-card dash-stat" onClick={() => openView("notes")}>
          <span>Otázky na konzultaci</span>
          <strong>{lawyerQuestions.length}</strong>
        </button>
      </div>

      <div className="shrnuti-situace">
        <h2 className="shrnuti-heading">Shrnutí situace a milníky</h2>

        <AccordionPanel {...panelProps("postaveni")} title="K mé osobě a postavení">
          <p>
            U TRAIVA s.r.o. jsem zaměstnána na hlavním pracovním poměru od{" "}
            <strong>19. 1. 2021</strong>, formálně na pozici{" "}
            <em>produktový manažer</em>. Fakticky jsem vykonávala podstatně
            širší agendu — kompletní online i offline marketing, obchod, B2B,
            akvizici, HR a celkový provoz firmy. Poslední přibližně rok a půl
            jsem se navíc dobrovolně, jako samouk, ujala implementace nového
            ERP systému (Odoo) včetně programování — nikdo jiný ve firmě to
            neovládal a majitel se o to nechtěl starat.{" "}
            <em>
              Problémy s implementací majitel následně označil za mé
              „manažerské selhání" — a já jsem díky událostem, které popisuji
              níže, zjistila, že s poctivostí se dnes asi nikam nedojdeš.
            </em>
          </p>
          <p>
            Posledních přibližně pět let se majitel (Karel Ospalík) do chodu
            firmy zapojoval jen minimálně; veškerý provoz i klíčová rozhodování
            ležela na mně — a to dávno předtím, než jsem byla{" "}
            <strong>24. 6. 2024</strong> formálně jmenována druhou jednatelkou.
            Tuto funkci jsem vykonávala{" "}
            <strong>bez uzavřené smlouvy o výkonu funkce a bez jakékoli odměny</strong>.
          </p>
          <div className="shrnuti-sub">
            <div className="shrnuti-sub-title">Struktura odměňování</div>
            <p>
              Zaměstnanci měli dlouhodobě mzdu rozdělenou na HPP + DPP
              u TRAIVA s.r.o. a DPP u spřízněné rodinné firmy{" "}
              <strong>TRAIVA Safety s.r.o.</strong> — vlastněné dcerou majitele,
              jejíž jednatelem je zeť majitele (rovněž zaměstnaný u TRAIVA s.r.o.).
            </p>
          </div>
        </AccordionPanel>

        <AccordionPanel {...panelProps("kontext")} title="Kontext — prodej firmy a eskalace">
          <p>
            Majitel se rozhodl firmu prodat, zřejmě mnohem dříve než jsem si
            původně myslela a než jsem se to — v té době ještě jako jednatelka
            společnosti — vůbec dozvěděla. Od jeho zetě, mého kolegy a rovněž
            zaměstnance firmy, jsem se tuto skutečnost dozvěděla{" "}
            <strong>úplně náhodou koncem roku 2025</strong> s tím, že ji
            majitel záměrně přede mnou tají a nesmím ho tedy „prozradit",
            že to už vím.
          </p>
          <p>
            <strong>Únor 2026:</strong> majitel na mě naléhal, abych odjela
            na dovolenou „odpočinout si". Ve stejném termínu probíhaly ve firmě
            schůzky jeho zetě s potenciálními kupci. Zeť mi tuto skutečnost
            následně potvrdil s tím, že majitel prodej „zvažuje". Přímými doklady
            k těmto schůzkám nedisponuji, mám však za to, že jsou dohledatelné
            (kalendáře, e-mailová komunikace, svědci); jednoho ze zájemců jsem
            ve firmě osobně opakovaně zaznamenala.
          </p>
          <p>
            Protože jsem situaci nechápala, konzultovala jsem ji se svým známým
            podnikatelem Karlem Neffem, pro kterého externě zajišťuji marketing.
            Z toho vzešel jeho záměr firmu koupit. Kontakt jsem předala zeti
            (ne přímo majiteli) — aby neprozradila, že o prodeji vím od zetě.
            Neffe při jednáních majiteli sdělil, že chce, abych firmu nadále
            vedla já. Ospalík s ním uzavřel <strong>NDA</strong> (mám k dispozici)
            a rozběhla se jednání.
          </p>
          <p>
            Při vyžádání finančních výkazů pro due diligence — které jsem mimo
            jiné osobně zpracovávala — majiteli došlo, že kupující bude cenu
            snižovat. Důvody:
          </p>
          <ul className="shrnuti-list">
            <li>
              Firma vykazuje náklady u spřízněných osob, které se jeví jako
              nadhodnocené — nájem budovy a strojů, fakturované služby.
              Konkrétně: TRAIVA Safety s.r.o. (vlastněná dcerou majitele)
              prodala budovu s pozemky a příslušenstvím firmě TRAIVA s.r.o.
              V souvislosti s touto transakcí jsem byla na pokyn Ospalíka
              osobně přihlásit změnu provozovny a sídla společnosti
              na živnostenském úřadě — původní adresa Pohraniční 104,
              nová Pohraniční 2911/13b. Prodej nemovitosti spřízněnou osobou
              mohl být jedním z prvních kroků, kdy byl majitel o prodeji
              firmy již rozhodnut. Posouzení obvyklosti ceny transakce
              ponechávám zcela na advokátovi.
            </li>
            <li>
              Fungování firmy fakticky stojí na mých znalostech — jako jediná
              znám veškeré procesy a funkčnost celého ERP systému.{" "}
              <strong>Výrobní proces</strong> (kusovníky, sklad, postupy) je
              nepopsaný a nedokončený; vlastní výroba bezpečnostních tabulek
              tvoří přes 40 % ročního zisku — to mohlo ovlivnit hodnotu
              firmy při DD.
            </li>
            <li>
              Září 2025: najat Tomáš Maralík s pokynem převzít ERP agendu.
              Požádala jsem o odklad zaškolení — nedokončený systém
              + nedostatek kapacity. Majitel to neakceptoval.
            </li>
          </ul>
          <p>
            Majitel se zřejmě mylně domnívá, že jsem Neffemu mohla poskytnout
            interní informace — vše, co jsem mu sdělila či zaslala, jsem
            předem konzultovala s majitelem.
          </p>
        </AccordionPanel>

        <AccordionPanel {...panelProps("vzorec")} title="Vzorec jednání zaměstnavatele">
          <ul className="shrnuti-list">
            <li>Nejprve mi předal veškeré kompetence — následně je „za trest" postupně odebíral.</li>
            <li>Systematicky snižoval odměny.</li>
            <li>Eskaloval e-mailovou komunikaci.</li>
            <li>Odměny začal vázat na budoucí výkony; již vykonanou práci neřešil.</li>
            <li>
              Dlouhodobě na mě nepřímo — aniž by to kdy výslovně vyslovil —
              vytvářel tlak k ukončení pracovního poměru dohodou.
            </li>
            <li>
              Zatajil probíhající prodej firmy; odebrání kompetencí zdůvodnil
              tím, že mám „moc práce" a nechce mě zatěžovat.
            </li>
          </ul>
          <p>
            Dne <strong>12. 5. 2026</strong> mě majitel odvolal z funkce
            jednatelky, ze dne na den mi nařídil čerpání dovolené (14 dní /
            10 pracovních) a odebral přístupy do všech interních systémů.
            Dokumenty mi byly předloženy pouze k podpisu — kopie mi{" "}
            <strong>nebyly poskytnuty</strong>.
          </p>
          <p>
            Na písemné výzvy zaměstnavatel nereagoval. Výpověď z pracovního
            poměru jsem neobdržela — pracovní poměr formálně nadále trvá
            (ověřit na konzultaci).
          </p>
        </AccordionPanel>

        <AccordionPanel {...panelProps("naroky")} title="Okruhy nároků k posouzení">
          <div className="shrnuti-sub">
            <div className="shrnuti-sub-title">a) Neuhrazené přesčasy</div>
            <ul className="shrnuti-list">
              <li>
                <strong>Rok 2026</strong> (9. 3. – 30. 5.): celkem odpracováno
                673 h 43 min (data Timely); po odečtení fondu pracovní doby
                = přesčas cca 200 hodin.
              </li>
              <li>
                <strong>Rok 2025:</strong> Timely spuštěna až v březnu 2026 —
                zatím kvalifikovaný odhad podložený nočními e-maily, časy
                odeslání a záznamy videohovorů s programátory. Výpočet nedokončen.
              </li>
            </ul>
          </div>

          <div className="shrnuti-sub">
            <div className="shrnuti-sub-title">b) Odměna za výkon funkce jednatelky</div>
            <p>
              Funkci jednatelky vykonávám od <strong>24. 6. 2024</strong> bez
              smlouvy o výkonu funkce a bez jakékoli odměny.
            </p>
          </div>

          <div className="shrnuti-sub">
            <div className="shrnuti-sub-title">c) Přislíbené a nerealizované odměny</div>
            <ul className="shrnuti-list">
              <li>
                5 % z čistého zisku — e-mail Ospalíka ze{" "}
                <strong>4. 8. 2023</strong>
              </li>
              <li>
                Opce na 10% obchodní podíl (hodnota ~2,2 mil. Kč) — tamtéž
              </li>
              <li>
                Prémie 200 000 Kč za dokončení Odoo — projektový plán
                ze <strong>23. 6. 2025</strong>; nevyplacena
              </li>
              <li>Téma odměny jednatelky otevřeno ~12. 3. 2026 — bez výsledku</li>
            </ul>
          </div>

          <div className="shrnuti-sub">
            <div className="shrnuti-sub-title">d) Postup zaměstnavatele po 12. 5. 2026</div>
            <p>
              Odvolání z funkce, nařízená dovolená a odebrání přístupů —
              vnímám jako možnou odvetu v souvislosti s výše popsaným
              průběhem prodeje firmy.
            </p>
          </div>
        </AccordionPanel>

      </div>
    </section>
  );
}
