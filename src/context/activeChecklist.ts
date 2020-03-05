import { createContext } from 'react';

export interface ActiveChecklistContext {
  getActiveChecklist: () => string | undefined;
  setActiveChecklist: (active: string) => void;
}

/* eslint-disable @typescript-eslint/no-empty-function */
export const activeChecklistDefault = {
  getActiveChecklist: () => undefined,
  setActiveChecklist: () => {},
};
/* eslint-enable @typescript-eslint/no-empty-function */

const activeChecklistContext = createContext<ActiveChecklistContext>(activeChecklistDefault);

export default activeChecklistContext;
