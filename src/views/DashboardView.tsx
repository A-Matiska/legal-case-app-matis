import { events, evidence, people, documents, lawyerQuestions } from "../data";
import { useCaseDispatch } from "../state/caseStore";

const INITIALS: Record<string, string> = {
  "p-andrea": "AM",
  "p-karel": "KO",
  "p-traiva": "TR",
};

export function DashboardView() {
  const dispatch = useCaseDispatch();
  const keyPeople = people.slice(0, 3);

  function openView(view: "timeline" | "evidence" | "documents" | "notes") {
    dispatch({ type: "SET_VIEW", view });
  }

  function openPerson(id: string) {
    dispatch({ type: "SELECT", id });
    dispatch({ type: "SET_VIEW", view: "people" });
  }

  return (
    <section className="view" data-view="dashboard" id="view-dashboard">
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
    </section>
  );
}
