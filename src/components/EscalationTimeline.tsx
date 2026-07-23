import { useCaseDispatch } from "../state/caseStore";

/**
 * Uzly odkazují na konkrétní událost v časové ose (eventId). Uzel s eventId
 * null zůstane obyčejným textem — událost k němu v ose zatím není.
 */
const steps = [
  { date: "31. 3. 2026", label: "DPP Traiva Safety ukončena (plošně)", eventId: "ev-traiva-safety-dpp" },
  { date: "duben 2026", label: "Prémie klesají, „režim práce manažerů“ k podpisu", eventId: "ev-2026-rezim" },
  {
    date: "12. 5. 2026",
    label:
      "ODVOLÁNÍ z funkce + karta + oznámení o sledování GPS polohy operátorem + nařízení okamžitého čerpání dovolené",
    eventId: "ev-2026-odvolani",
  },
  {
    date: "10./11. 6. 2026",
    label: "Odebrání pracovních přístupů — počátek překážky v práci (§ 208)",
    eventId: "ev-2026-pristupy",
  },
  { date: "červen 2026", label: "Mzda vykázána jako „neomluvená absence“", eventId: "ev-2026-vyplatni-paska" },
  {
    date: "14. 7. 2026",
    label: "Protest proti klasifikaci absence a výzva k opravě mzdového výměru (§ 208)",
    eventId: "ev-2026-protest-absence",
  },
  {
    date: "15. 7. 2026",
    label: "Okamžité zrušení pracovního poměru zaměstnavatelem dle § 55",
    eventId: "ev-2026-ozp",
  },
  {
    date: "20. 7. 2026",
    label:
      "Vyjádřila jsem nesouhlas s okamžitým zrušením — jde o neplatné rozvázání pracovního poměru, trvám na dalším zaměstnávání (§ 69 ZP)",
    eventId: "ev-2026-oznameni-69",
  },
] as const;

const KEY_INDEX = 2;

export function EscalationTimeline() {
  const dispatch = useCaseDispatch();

  function jumpTo(eventId: string) {
    dispatch({ type: "SET_VIEW", view: "timeline" });
    dispatch({ type: "SELECT", id: eventId });
    // Dva snímky počkat, než se časová osa vykreslí, teprve pak scrollovat.
    requestAnimationFrame(() =>
      requestAnimationFrame(() =>
        document.querySelector(`[data-card-nav="${eventId}"]`)?.scrollIntoView({ behavior: "smooth", block: "center" })
      )
    );
  }

  return (
    <section className="dashboard-widget escalation-widget" aria-labelledby="escalation-title">
      <h2 id="escalation-title">Vzorec eskalace</h2>
      <ol className="escalation-axis">
        {steps.map(({ date, label, eventId }, index) => (
          <li className={index === KEY_INDEX ? "key-node" : ""} key={date}>
            <span className="escalation-dot" aria-hidden="true" />
            <time>{date}</time>
            {eventId ? (
              <button type="button" className="escalation-jump" onClick={() => jumpTo(eventId)}>
                {label}
              </button>
            ) : (
              <p>{label}</p>
            )}
          </li>
        ))}
      </ol>
      <p className="escalation-hint">Klikni na událost — otevře se v časové ose.</p>
    </section>
  );
}
