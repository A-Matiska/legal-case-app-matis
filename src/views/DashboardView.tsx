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
            >âśŹď¸Ź</span>
          )}
          {open && savedHtml && !editing && (
            <span
              className="shrnuti-edit-btn"
              role="button"
              tabIndex={0}
              title="Obnovit pĹŻvodnĂ­ text"
              onClick={(e) => {
                e.stopPropagation();
                if (window.confirm("Obnovit pĹŻvodnĂ­ text panelu?")) onReset(id);
              }}
              onKeyDown={(e) => { if (e.key === "Enter") { e.stopPropagation(); onReset(id); } }}
            >â†ş</span>
          )}
          <span className="shrnuti-chevron" aria-hidden="true">{open ? "â–˛" : "â–Ľ"}</span>
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
                  UloĹľit (Ctrl+S)
                </button>
                <button type="button" className="shrnuti-cancel-btn" onClick={cancelEdit}>
                  ZruĹˇit
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
            aria-label={`OtevĹ™Ă­t detail osoby: ${p.name}`}
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
          <span>UdĂˇlosti v ÄŤasovĂ© ose</span>
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
          <span>OtĂˇzky na konzultaci</span>
          <strong>{lawyerQuestions.length}</strong>
        </button>
      </div>

      <div className="shrnuti-situace">
        <h2 className="shrnuti-heading">ShrnutĂ­ situace a milnĂ­ky</h2>

        <AccordionPanel {...panelProps("postaveni")} title="1 Â· K mĂ© osobÄ› a postavenĂ­">
          <p>
            U TRAIVA s.r.o. jsem zamÄ›stnĂˇna na hlavnĂ­m pracovnĂ­m pomÄ›ru od{" "}
            <strong>19. 1. 2021</strong>, formĂˇlnÄ› na pozici{" "}
            <em>produktovĂ˝ manaĹľer</em>. Fakticky jsem vykonĂˇvala podstatnÄ›
            ĹˇirĹˇĂ­ agendu â€” kompletnĂ­ online i offline marketing, obchod, B2B,
            akvizici, HR a celkovĂ˝ provoz firmy. PoslednĂ­ pĹ™ibliĹľnÄ› rok a pĹŻl
            jsem se navĂ­c dobrovolnÄ›, jako samouk, ujala implementace novĂ©ho
            ERP systĂ©mu (Odoo) vÄŤetnÄ› programovĂˇnĂ­ â€” nikdo jinĂ˝ ve firmÄ› to
            neovlĂˇdal a majitel se o to nechtÄ›l starat.{" "}
            <em>
              ProblĂ©my s implementacĂ­ majitel nĂˇslednÄ› oznaÄŤil za mĂ©
              â€žmanaĹľerskĂ© selhĂˇnĂ­" â€” a jĂˇ jsem dĂ­ky udĂˇlostem, kterĂ© popisuji
              nĂ­Ĺľe, zjistila, Ĺľe s poctivostĂ­ se dnes asi nikam nedojdeĹˇ.
            </em>
          </p>
          <p>
            PoslednĂ­ch pĹ™ibliĹľnÄ› pÄ›t let se majitel (Karel OspalĂ­k) do chodu
            firmy zapojoval jen minimĂˇlnÄ›; veĹˇkerĂ˝ provoz i klĂ­ÄŤovĂˇ rozhodovĂˇnĂ­
            leĹľela na mnÄ› â€” a to dĂˇvno pĹ™edtĂ­m, neĹľ jsem byla{" "}
            <strong>24. 6. 2024</strong> formĂˇlnÄ› jmenovĂˇna druhou jednatelkou.
            Tuto funkci jsem vykonĂˇvala{" "}
            <strong>bez uzavĹ™enĂ© smlouvy o vĂ˝konu funkce a bez jakĂ©koli odmÄ›ny</strong>.
          </p>
          <div className="shrnuti-sub">
            <div className="shrnuti-sub-title">Struktura odmÄ›ĹovĂˇnĂ­</div>
            <p>
              ZamÄ›stnanci mÄ›li dlouhodobÄ› mzdu rozdÄ›lenou na HPP + DPP
              u TRAIVA s.r.o. a DPP u spĹ™Ă­znÄ›nĂ© rodinnĂ© firmy{" "}
              <strong>TRAIVA Safety s.r.o.</strong> â€” vlastnÄ›nĂ© dcerou majitele,
              jejĂ­Ĺľ jednatelem je zeĹĄ majitele (rovnÄ›Ĺľ zamÄ›stnanĂ˝ u TRAIVA s.r.o.).
            </p>
          </div>
        </AccordionPanel>

        <AccordionPanel {...panelProps("kontext")} title="2 Â· Kontext â€” prodej firmy a eskalace">
          <p>
            Majitel se rozhodl firmu prodat, zĹ™ejmÄ› mnohem dĹ™Ă­ve neĹľ jsem si
            pĹŻvodnÄ› myslela a neĹľ jsem se to â€” v tĂ© dobÄ› jeĹˇtÄ› jako jednatelka
            spoleÄŤnosti â€” vĹŻbec dozvÄ›dÄ›la. Od jeho zetÄ›, mĂ©ho kolegy a rovnÄ›Ĺľ
            zamÄ›stnance firmy, jsem se tuto skuteÄŤnost dozvÄ›dÄ›la{" "}
            <strong>ĂşplnÄ› nĂˇhodou koncem roku 2025</strong> s tĂ­m, Ĺľe ji
            majitel zĂˇmÄ›rnÄ› pĹ™ede mnou tajĂ­ a nesmĂ­m ho tedy â€žprozradit",
            Ĺľe to uĹľ vĂ­m.
          </p>
          <p>
            <strong>Ăšnor 2026:</strong> majitel na mÄ› nalĂ©hal, abych odjela
            na dovolenou â€žodpoÄŤinout si". Ve stejnĂ©m termĂ­nu probĂ­haly ve firmÄ›
            schĹŻzky jeho zetÄ› s potenciĂˇlnĂ­mi kupci. ZeĹĄ mi tuto skuteÄŤnost
            nĂˇslednÄ› potvrdil s tĂ­m, Ĺľe majitel prodej â€žzvaĹľuje". PĹ™Ă­mĂ˝mi doklady
            k tÄ›mto schĹŻzkĂˇm nedisponuji, mĂˇm vĹˇak za to, Ĺľe jsou dohledatelnĂ©
            (kalendĂˇĹ™e, e-mailovĂˇ komunikace, svÄ›dci); jednoho ze zĂˇjemcĹŻ jsem
            ve firmÄ› osobnÄ› opakovanÄ› zaznamenala.
          </p>
          <p>
            ProtoĹľe jsem situaci nechĂˇpala, konzultovala jsem ji se svĂ˝m znĂˇmĂ˝m
            podnikatelem Karlem Neffem, pro kterĂ©ho externÄ› zajiĹˇĹĄuji marketing.
            Z toho vzeĹˇel jeho zĂˇmÄ›r firmu koupit. Kontakt jsem pĹ™edala zeti
            (ne pĹ™Ă­mo majiteli) â€” aby neprozradila, Ĺľe o prodeji vĂ­m od zetÄ›.
            Neffe pĹ™i jednĂˇnĂ­ch majiteli sdÄ›lil, Ĺľe chce, abych firmu nadĂˇle
            vedla jĂˇ. OspalĂ­k s nĂ­m uzavĹ™el <strong>NDA</strong> (mĂˇm k dispozici)
            a rozbÄ›hla se jednĂˇnĂ­.
          </p>
          <p>
            PĹ™i vyĹľĂˇdĂˇnĂ­ finanÄŤnĂ­ch vĂ˝kazĹŻ pro due diligence â€” kterĂ© jsem mimo
            jinĂ© osobnÄ› zpracovĂˇvala â€” majiteli doĹˇlo, Ĺľe kupujĂ­cĂ­ bude cenu
            sniĹľovat. DĹŻvody:
          </p>
          <ul className="shrnuti-list">
            <li>
              Firma vykazuje nĂˇklady u spĹ™Ă­znÄ›nĂ˝ch osob, kterĂ© se jevĂ­ jako
              nadhodnocenĂ© â€” nĂˇjem budovy a strojĹŻ, fakturovanĂ© sluĹľby.
              KonkrĂ©tnÄ›: TRAIVA Safety s.r.o. (vlastnÄ›nĂˇ dcerou majitele)
              prodala budovu s pozemky a pĹ™Ă­sluĹˇenstvĂ­m firmÄ› TRAIVA s.r.o.
              V souvislosti s touto transakcĂ­ jsem byla na pokyn OspalĂ­ka
              osobnÄ› pĹ™ihlĂˇsit zmÄ›nu provozovny a sĂ­dla spoleÄŤnosti
              na ĹľivnostenskĂ©m ĂşĹ™adÄ› â€” pĹŻvodnĂ­ adresa PohraniÄŤnĂ­ 104,
              novĂˇ PohraniÄŤnĂ­ 2911/13b. Prodej nemovitosti spĹ™Ă­znÄ›nou osobou
              mohl bĂ˝t jednĂ­m z prvnĂ­ch krokĹŻ, kdy byl majitel o prodeji
              firmy jiĹľ rozhodnut. PosouzenĂ­ obvyklosti ceny transakce
              ponechĂˇvĂˇm zcela na advokĂˇtovi.
            </li>
            <li>
              FungovĂˇnĂ­ firmy fakticky stojĂ­ na mĂ˝ch znalostech â€” jako jedinĂˇ
              znĂˇm veĹˇkerĂ© procesy a funkÄŤnost celĂ©ho ERP systĂ©mu.{" "}
              <strong>VĂ˝robnĂ­ proces</strong> (kusovnĂ­ky, sklad, postupy) je
              nepopsanĂ˝ a nedokonÄŤenĂ˝; vlastnĂ­ vĂ˝roba bezpeÄŤnostnĂ­ch tabulek
              tvoĹ™Ă­ pĹ™es 40 % roÄŤnĂ­ho zisku â€” to mohlo ovlivnit hodnotu
              firmy pĹ™i DD.
            </li>
            <li>
              ZĂˇĹ™Ă­ 2025: najat TomĂˇĹˇ MaralĂ­k s pokynem pĹ™evzĂ­t ERP agendu.
              PoĹľĂˇdala jsem o odklad zaĹˇkolenĂ­ â€” nedokonÄŤenĂ˝ systĂ©m
              + nedostatek kapacity. Majitel to neakceptoval.
            </li>
          </ul>
          <p>
            Majitel se zĹ™ejmÄ› mylnÄ› domnĂ­vĂˇ, Ĺľe jsem Neffemu mohla poskytnout
            internĂ­ informace â€” vĹˇe, co jsem mu sdÄ›lila ÄŤi zaslala, jsem
            pĹ™edem konzultovala s majitelem.
          </p>
        </AccordionPanel>

        <AccordionPanel {...panelProps("vzorec")} title="3 Â· Vzorec jednĂˇnĂ­ zamÄ›stnavatele">
          <ul className="shrnuti-list">
            <li>Nejprve mi pĹ™edal veĹˇkerĂ© kompetence â€” nĂˇslednÄ› je â€žza trest" postupnÄ› odebĂ­ral.</li>
            <li>Systematicky sniĹľoval odmÄ›ny.</li>
            <li>Eskaloval e-mailovou komunikaci.</li>
            <li>OdmÄ›ny zaÄŤal vĂˇzat na budoucĂ­ vĂ˝kony; jiĹľ vykonanou prĂˇci neĹ™eĹˇil.</li>
            <li>
              DlouhodobÄ› na mÄ› nepĹ™Ă­mo â€” aniĹľ by to kdy vĂ˝slovnÄ› vyslovil â€”
              vytvĂˇĹ™el tlak k ukonÄŤenĂ­ pracovnĂ­ho pomÄ›ru dohodou.
            </li>
            <li>
              Zatajil probĂ­hajĂ­cĂ­ prodej firmy; odebrĂˇnĂ­ kompetencĂ­ zdĹŻvodnil
              tĂ­m, Ĺľe mĂˇm â€žmoc prĂˇce" a nechce mÄ› zatÄ›Ĺľovat.
            </li>
          </ul>
          <p>
            Dne <strong>12. 5. 2026</strong> mÄ› majitel odvolal z funkce
            jednatelky, ze dne na den mi naĹ™Ă­dil ÄŤerpĂˇnĂ­ dovolenĂ© (14 dnĂ­ /
            10 pracovnĂ­ch) a odebral pĹ™Ă­stupy do vĹˇech internĂ­ch systĂ©mĹŻ.
            Dokumenty mi byly pĹ™edloĹľeny pouze k podpisu â€” kopie mi{" "}
            <strong>nebyly poskytnuty</strong>.
          </p>
          <p>
            Na pĂ­semnĂ© vĂ˝zvy zamÄ›stnavatel nereagoval. VĂ˝povÄ›ÄŹ z pracovnĂ­ho
            pomÄ›ru jsem neobdrĹľela â€” pracovnĂ­ pomÄ›r formĂˇlnÄ› nadĂˇle trvĂˇ
            (ovÄ›Ĺ™it na konzultaci).
          </p>
        </AccordionPanel>

        <AccordionPanel {...panelProps("naroky")} title="4 Â· Okruhy nĂˇrokĹŻ k posouzenĂ­">
          <div className="shrnuti-sub">
            <div className="shrnuti-sub-title">a) NeuhrazenĂ© pĹ™esÄŤasy</div>
            <ul className="shrnuti-list">
              <li>
                <strong>Rok 2026</strong> (9. 3. â€“ 30. 5.): celkem odpracovĂˇno
                673 h 43 min (data Timely); po odeÄŤtenĂ­ fondu pracovnĂ­ doby
                = pĹ™esÄŤas cca 200 hodin.
              </li>
              <li>
                <strong>Rok 2025:</strong> Timely spuĹˇtÄ›na aĹľ v bĹ™eznu 2026 â€”
                zatĂ­m kvalifikovanĂ˝ odhad podloĹľenĂ˝ noÄŤnĂ­mi e-maily, ÄŤasy
                odeslĂˇnĂ­ a zĂˇznamy videohovorĹŻ s programĂˇtory. VĂ˝poÄŤet nedokonÄŤen.
              </li>
            </ul>
          </div>

          <div className="shrnuti-sub">
            <div className="shrnuti-sub-title">b) OdmÄ›na za vĂ˝kon funkce jednatelky</div>
            <p>
              Funkci jednatelky vykonĂˇvĂˇm od <strong>24. 6. 2024</strong> bez
              smlouvy o vĂ˝konu funkce a bez jakĂ©koli odmÄ›ny.
            </p>
          </div>

          <div className="shrnuti-sub">
            <div className="shrnuti-sub-title">c) PĹ™islĂ­benĂ© a nerealizovanĂ© odmÄ›ny</div>
            <ul className="shrnuti-list">
              <li>
                5 % z ÄŤistĂ©ho zisku â€” e-mail OspalĂ­ka ze{" "}
                <strong>4. 8. 2023</strong>
              </li>
              <li>
                Opce na 10% obchodnĂ­ podĂ­l (hodnota ~2,2 mil. KÄŤ) â€” tamtĂ©Ĺľ
              </li>
              <li>
                PrĂ©mie 200 000 KÄŤ za dokonÄŤenĂ­ Odoo â€” projektovĂ˝ plĂˇn
                ze <strong>23. 6. 2025</strong>; nevyplacena
              </li>
              <li>TĂ©ma odmÄ›ny jednatelky otevĹ™eno ~12. 3. 2026 â€” bez vĂ˝sledku</li>
            </ul>
          </div>

          <div className="shrnuti-sub">
            <div className="shrnuti-sub-title">d) Postup zamÄ›stnavatele po 12. 5. 2026</div>
            <p>
              OdvolĂˇnĂ­ z funkce, naĹ™Ă­zenĂˇ dovolenĂˇ a odebrĂˇnĂ­ pĹ™Ă­stupĹŻ â€”
              vnĂ­mĂˇm jako moĹľnou odvetu v souvislosti s vĂ˝Ĺˇe popsanĂ˝m
              prĹŻbÄ›hem prodeje firmy.
            </p>
          </div>
        </AccordionPanel>

      </div>
    </section>
  );
}
