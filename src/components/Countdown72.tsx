import { useCaseDispatch } from "../state/caseStore";

/**
 * Výrazný odpočet do prekluzivní lhůty pro žalobu na neplatnost okamžitého
 * zrušení pracovního poměru (§ 72 ZP). Zmeškání = zánik práva, proto stojí
 * na vrcholu dashboardu.
 */
const ZALOBA_72 = "2026-09-15";
const dayMs = 86_400_000;
const dateFormat = new Intl.DateTimeFormat("cs-CZ", { day: "numeric", month: "numeric", year: "numeric" });

function dnyDoDne(iso: string): number {
  const today = new Date();
  const todayUtc = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
  const [y, m, d] = iso.split("-").map(Number);
  return Math.ceil((Date.UTC(y, m - 1, d) - todayUtc) / dayMs);
}

export function Countdown72() {
  const dispatch = useCaseDispatch();
  const days = dnyDoDne(ZALOBA_72);
  const [y, m, d] = ZALOBA_72.split("-").map(Number);
  const stav = days < 0 ? "po" : days <= 21 ? "kriticke" : days <= 45 ? "blizko" : "bezne";

  const hlavni =
    days < 0 ? `Lhůta uplynula před ${Math.abs(days)} dny` : days === 0 ? "Poslední den lhůty!" : `${days}`;

  return (
    <section className={`countdown-72 cd-${stav}`} aria-labelledby="cd72-title">
      <div className="cd72-body">
        <p className="cd72-eyebrow">Prekluzivní lhůta · § 72 ZP</p>
        <h2 id="cd72-title">Žaloba na neplatnost okamžitého zrušení</h2>
        <p className="cd72-note">
          Podat u soudu nejpozději <strong>{dateFormat.format(new Date(y, m - 1, d))}</strong>. Zmeškání znamená
          zánik práva — lhůtu nelze prodloužit ani prominout. Oznámení dle § 69 tuto žalobu nenahrazuje.
        </p>
      </div>
      <div className="cd72-count" role="timer" aria-live="polite">
        {days >= 0 && <span className="cd72-num">{hlavni}</span>}
        <span className="cd72-unit">{days < 0 ? hlavni : days === 0 ? "" : days === 1 ? "den zbývá" : "dní zbývá"}</span>
        <button type="button" className="cd72-link" onClick={() => dispatch({ type: "SET_VIEW", view: "notes" })}>
          Otázky na konzultaci →
        </button>
      </div>
    </section>
  );
}
