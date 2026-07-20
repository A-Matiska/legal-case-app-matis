import { createContext, useContext, useReducer, type Dispatch, type ReactNode } from "react";
import type { CaseState, TagId, ViewId } from "../types";

type Action =
  | { type: "SET_VIEW"; view: ViewId }
  | { type: "SET_QUERY"; query: string }
  | { type: "TOGGLE_FILTER"; tag: TagId }
  | { type: "CLEAR_SEARCH" }
  | { type: "SELECT"; id: string | null }
  | { type: "TOGGLE_THEME" }
  | { type: "HYDRATE"; view?: ViewId; selectedId?: string | null };

function initialState(): CaseState {
  const stored = localStorage.getItem("case-theme") as "light" | "dark" | "auto" | null;
  const theme: "light" | "dark" | "auto" = stored ?? "auto";
  return { view: "dashboard", query: "", filters: new Set(), selectedId: null, theme };
}

function reducer(state: CaseState, action: Action): CaseState {
  switch (action.type) {
    case "SET_VIEW":
      return { ...state, view: action.view };
    case "SET_QUERY":
      return { ...state, query: action.query };
    case "TOGGLE_FILTER": {
      const filters = new Set(state.filters);
      filters.has(action.tag) ? filters.delete(action.tag) : filters.add(action.tag);
      return { ...state, filters };
    }
    case "CLEAR_SEARCH":
      return { ...state, query: "", filters: new Set(), selectedId: null };
    case "SELECT":
      return { ...state, selectedId: action.id };
    case "TOGGLE_THEME": {
      const order = ["light", "dark", "auto"] as const;
      const theme = order[(order.indexOf(state.theme) + 1) % order.length];
      localStorage.setItem("case-theme", theme);
      return { ...state, theme };
    }
    case "HYDRATE":
      return { ...state, view: action.view ?? state.view, selectedId: action.selectedId ?? state.selectedId };
    default:
      return state;
  }
}

const StateContext = createContext<CaseState | null>(null);
const DispatchContext = createContext<Dispatch<Action> | null>(null);

export function CaseStoreProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, undefined, initialState);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export function useCaseState(): CaseState {
  const ctx = useContext(StateContext);
  if (!ctx) throw new Error("useCaseState must be used within CaseStoreProvider");
  return ctx;
}

export function useCaseDispatch(): Dispatch<Action> {
  const ctx = useContext(DispatchContext);
  if (!ctx) throw new Error("useCaseDispatch must be used within CaseStoreProvider");
  return ctx;
}
