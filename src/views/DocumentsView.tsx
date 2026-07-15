import { documents } from "../data";
import { matches } from "../lib/search";
import { driveFolderUrl } from "../lib/constants";
import { useCaseDispatch, useCaseState } from "../state/caseStore";
import { TitleBlock } from "../components/TitleBlock";
import { TagRow } from "../components/TagRow";
import { EmptyState } from "../components/EmptyState";
import { CardShell } from "../components/CardShell";
import { Highlight } from "../components/Highlight";
import type { CaseDocument } from "../types";

function DocumentCard({ item }: { item: CaseDocument }) {
  const dispatch = useCaseDispatch();
  return (
    <CardShell id={item.id} extraClassName="document-card">
      <div className="meta">
        {item.type} · {item.date}
      </div>
      <h2 className="section-heading">
        <Highlight text={item.title} />
      </h2>
      <TagRow tags={item.tags} />
      {item.text && <p className="doc-text">{item.text}</p>}
      <div className="doc-actions">
        <button
          className="ghost-button"
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            dispatch({ type: "SELECT", id: item.id });
          }}
        >
          Detail
        </button>
        {item.file ? (
          <a
            className="ghost-button file-link"
            href={item.file}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => event.stopPropagation()}
          >
            Otevřít soubor ↗
          </a>
        ) : (
          <span className="file-missing">
            {item.unavailableReason ?? "soubor zatím nenahrán"}
          </span>
        )}
      </div>
    </CardShell>
  );
}

export function DocumentsView() {
  const state = useCaseState();
  const items = documents.filter((e) => matches(e, state.query, state.filters));
  return (
    <section className="view" data-view="documents">
      <TitleBlock
        title="Dokumenty"
        subtitle={
          <>
            Soubory ukládám do složky na Google Drive —{" "}
            <a href={driveFolderUrl} target="_blank" rel="noopener noreferrer">
              otevřít celou složku
            </a>
            . Kde odkaz chybí, je to buď proto, že soubor ještě nenahraju,
            nebo — u části podkladů z firemního e-mailu, SharePointu či
            Trella — se k originálu bez přístupu na firemní profil vůbec
            nedostanu.
          </>
        }
      />
      {items.length ? (
        <div className="document-grid">
          {items.map((item) => (
            <DocumentCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
    </section>
  );
}
