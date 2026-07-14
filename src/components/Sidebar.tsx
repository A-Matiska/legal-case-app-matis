import { navItems } from "../data";
import { events, evidence } from "../data";
import { people } from "../data";
import { documents } from "../data";
import { matches } from "../lib/search";
import { useCaseDispatch, useCaseState } from "../state/caseStore";
import type { ViewId } from "../types";

export function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const state = useCaseState();
  const dispatch = useCaseDispatch();

  const counts: Partial<Record<ViewId, number>> = {
    timeline: events.filter((e) => matches(e, state.query, state.filters)).length,
    evidence: evidence.filter((e) => matches(e, state.query, state.filters)).length,
    people: people.filter((e) => matches(e, state.query, state.filters)).length,
    documents: documents.filter((e) => matches(e, state.query, state.filters)).length,
  };

  return (
    <aside className={`sidebar${open ? " open" : ""}`} aria-label="Hlavní navigace">
      <div className="brand">
        <div className="brand-mark" aria-hidden="true">
          §
        </div>
        <div>
          <strong>Podklady pro advokátní kancelář</strong>
          <span>Spisový přehled TRAIVA s.r.o. §</span>
        </div>
      </div>

      <nav className="nav-list">
        {navItems.map((item) => (
          <button
            key={item.id}
            className="nav-item"
            type="button"
            aria-current={state.view === item.id ? "page" : "false"}
            onClick={() => {
              dispatch({ type: "SET_VIEW", view: item.id });
              onClose();
            }}
          >
            <span className="nav-left">
              <span className="nav-icon">{item.icon}</span>
              <span>{item.label}</span>
            </span>
            <span className="nav-count">{counts[item.id] ?? ""}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button
          className="icon-button theme-toggle"
          type="button"
          aria-label="Přepnout režim zobrazení"
          title="Přepnout režim"
          onClick={() => dispatch({ type: "TOGGLE_THEME" })}
        >
          <span aria-hidden="true">{state.theme === "dark" ? "☼" : "☾"}</span>
        </button>
        <button className="primary-button compact" type="button" onClick={() => window.print()}>
          Export PDF
        </button>
      </div>
    </aside>
  );
}
