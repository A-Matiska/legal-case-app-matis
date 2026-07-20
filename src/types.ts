export type TagId =
  | "pracovněprávní"
  | "obchodní"
  | "GDPR"
  | "Odoo"
  | "mzda"
  | "DPP"
  | "diskriminace"
  | "jednatel"
  | "OIP"
  | "GPS"
  | "vozidla";

export type ViewId =
  | "dashboard"
  | "timeline"
  | "evidence"
  | "people"
  | "documents"
  | "notes"
  | "export";

export interface NavItem {
  id: ViewId;
  label: string;
  icon: string;
}

interface Base {
  id: string;
  tags: TagId[];
}

/** A timeline event, as Andrea experienced it. */
export interface CaseEvent extends Base {
  date: string;
  year: string;
  title: string;
  text: string;
  legal?: string;
  /** Raw short names as originally written (kept for full-text search). */
  personRefs: string[];
  /** Raw evidence/document title strings as originally written (kept for full-text search). */
  evidenceRefs: string[];
  /** Resolved via alias maps in data/relations.ts. */
  relatedPersonIds: string[];
  relatedEvidenceIds: string[];
  relatedDocumentIds: string[];
}

/** A piece of supporting evidence Andrea is relying on. */
export interface Evidence extends Base {
  title: string;
  type: string;
  date: string;
  strength: 1 | 2 | 3 | 4 | 5;
  proves: string[];
  risk?: string;
  file?: string;
  personRefs: string[];
  relatedPersonIds: string[];
}

/** A person or organization involved in the case. */
export interface Person extends Base {
  name: string;
  role: string;
  documents: number;
  events: number;
  claims: number;
}

/** A document filed in the Google Drive case folder. */
export interface CaseDocument extends Base {
  title: string;
  type: string;
  date: string;
  file?: string;
  text?: string;
  /** Why the file isn't linked yet — e.g. stuck on a company account we no longer have access to. */
  unavailableReason?: string;
}

export type DetailKind = "Událost" | "Podklad" | "Osoba" | "Dokument";

export type DetailItem =
  | ({ kind: "event" } & CaseEvent)
  | ({ kind: "evidence" } & Evidence)
  | ({ kind: "person" } & Person)
  | ({ kind: "document" } & CaseDocument);

export interface CaseState {
  view: ViewId;
  query: string;
  filters: Set<TagId>;
  selectedId: string | null;
  theme: "light" | "dark" | "auto";
}
