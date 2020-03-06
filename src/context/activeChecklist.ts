import { createContext } from 'react';

export interface ActiveChecklistContext {
  activeChecklist: string;
  setActiveChecklist: (active: string) => void;
}

/* eslint-disable @typescript-eslint/no-empty-function */
export const activeChecklistDefault = {
  activeChecklist: '',
  setActiveChecklist: () => {},
};
/* eslint-enable @typescript-eslint/no-empty-function */

const activeChecklistContext = createContext<ActiveChecklistContext>(activeChecklistDefault);

export default activeChecklistContext;
