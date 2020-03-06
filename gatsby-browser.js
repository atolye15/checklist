import React from 'react';

import activeChecklistContext from './src/context/activeChecklist';
import activeChecklistStore from './src/store/activeChecklist';

const activeChecklistValue = {
  getActiveChecklist: () => {
    return activeChecklistStore.get();
  },
  setActiveChecklist: active => {
    activeChecklistStore.update(active);
  },
};

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = ({ element }) => {
  return (
    <activeChecklistContext.Provider value={activeChecklistValue}>
      {element}
    </activeChecklistContext.Provider>
  );
};
