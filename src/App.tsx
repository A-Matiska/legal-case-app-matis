import { useEffect, useState, type ReactElement } from "react";
import { Sidebar } from "./components/Sidebar";
import { TopBar } from "./components/TopBar";
import { FilterChips } from "./components/FilterChips";
import { DetailPanel } from "./components/DetailPanel";
import { DashboardView } from "./views/DashboardView";
import { TimelineView } from "./views/TimelineView";
import { EvidenceView } from "./views/EvidenceView";
import { PeopleView } from "./views/PeopleView";
import { DocumentsView } from "./views/DocumentsView";
import { NotesView } from "./views/NotesView";
import { ExportView } from "./views/ExportView";
import { useCaseState } from "./state/caseStore";
import { useHashSync } from "./state/useHashSync";
import { useKeyboardNav } from "./hooks/useKeyboardNav";
import type { ViewId } from "./types";

const VIEWS: Record<ViewId, () => ReactElement> = {
  dashboard: DashboardView,
  timeline: TimelineView,
  evidence: EvidenceView,
  people: PeopleView,
  documents: DocumentsView,
  notes: NotesView,
  export: ExportView,
};

export function App() {
  const state = useCaseState();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  useHashSync();
  useKeyboardNav();

  useEffect(() => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const apply = () => {
      const effective =
        state.theme === "auto" ? (mql.matches ? "dark" : "light") : state.theme;
      document.documentElement.dataset.theme = effective;
    };
    apply();
    if (state.theme === "auto") {
      mql.addEventListener("change", apply);
      return () => mql.removeEventListener("change", apply);
    }
  }, [state.theme]);

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Přeskočit na obsah
      </a>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="workspace" id="main-content">
        <TopBar onMenuClick={() => setSidebarOpen((open) => !open)} />
        <FilterChips />

        {(Object.keys(VIEWS) as ViewId[]).map((viewId) => {
          const ViewComponent = VIEWS[viewId];
          return (
            <div key={viewId} hidden={state.view !== viewId}>
              <ViewComponent />
            </div>
          );
        })}
      </main>

      <DetailPanel />
    </div>
  );
}
