import { events, evidence, people, documents, lawyerQuestions } from "../data";
import { TitleBlock } from "../components/TitleBlock";
import { useCaseDispatch } from "../state/caseStore";

const INITIALS: Record<string, string> = {
  "p-andrea": "AM",
  "p-karel": "KO",
  "p-traiva": "TR",
};

const TAG_COLORS: Record<string, string> = {
  "pracovněprávní": "#0071e3",
  "obchodní": "#1d8a4e",
  "mzda": "#b06407",
  "jednatel": "#8944ab",
  "GDPR": "#de3131",
  "Odoo": "#0077b5",
  "DPP": "#c96800",
  "OIP": "#2b7a4b",
  "GPS": "#555",
  "vozidla": "#555",
};

export function DashboardView() {
  const dispatch = useCaseDispatch();
  const keyPeople = people.slice(0, 3);

  const grouped: Record<string, typeof events> = {};
  for (const ev of events) {
    if (!grouped[ev.year]) grouped[ev.year] = [];
    grouped[ev.year].push(ev);
  }
  const sortedYears = Object.keys(grouped).sort();

  function openEvent(id: string) {
    dispatch({ type: "SELECT", id });
    dispatch({ type: "SET_VIEW", view: "timeline" });
  }

  function openView(view: "timeline" | "evidence" | "documents" | "notes") {
    dispatch({ type: "SET_VIEW", view });
  }

  function openPerson(id: string) {
    dispatch({ type: "SELECT", id });
    dispatch({ type: "SET_VIEW", view: "people" });
  }

  return (
    <section className="view" data-view="dashboard" id="view-dashboard">
      <div className="dash-eyebrow">Spisový přehled · TRAIVA s.r.o.</div>
      <TitleBlock
        title="Případ Andrea Matis"
        subtitle="Podklady ke konzultaci — události, dokumenty a komunikace tak, jak je vnímám já. Právní posouzení nechávám na Vás."
      />

      {/* Klíčové osoby */}
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

      {/* Stat tiles */}
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

      {/* Časová osa */}
      <div className="dash-timeline-header">
        <h2>Chronologie případu</h2>
        <button className="btn-ghost" onClick={() => openView("timeline")}>
          Zobrazit vše →
        </button>
      </div>

      <div className="timeline dash-timeline">
        {sortedYears.map((year) => (
          <div key={year} className="timeline-era-group">
            <div className="timeline-era">
              <span>{year}</span>
              <span className="timeline-era-count">{grouped[year].length} {grouped[year].length === 1 ? "událost" : grouped[year].length < 5 ? "události" : "událostí"}</span>
            </div>
            {grouped[year].map((ev) => (
              <button
                key={ev.id}
                className="timeline-item dash-tl-item"
                onClick={() => openEvent(ev.id)}
                aria-label={`Otevřít událost: ${ev.title}`}
              >
                <div className="timeline-marker">
                  <span>{ev.date.slice(0, 2).replace(/\D/, "·")}</span>
                </div>
                <div className="timeline-content">
                  <p className="meta">{ev.date}</p>
                  <h3 className="section-heading">{ev.title}</h3>
                  <p className="timeline-text">
                    {ev.text.length > 160 ? ev.text.slice(0, 160).trimEnd() + "…" : ev.text}
                  </p>
                  {ev.tags.length > 0 && (
                    <div className="tag-row">
                      {ev.tags.map((tag) => (
                        <span
                          key={tag}
                          className="tag"
                          style={TAG_COLORS[tag] ? { background: TAG_COLORS[tag] + "18", color: TAG_COLORS[tag] } : undefined}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
