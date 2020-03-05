import React from 'react';

import activeChecklistContext from './src/context/activeChecklist';
import activeChecklistStore from './src/store/activeChecklist';

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = ({ element }) => {
  const value = {
    getActiveChecklist: () => {
      return activeChecklistStore.get();
    },
    setActiveChecklist: active => {
      activeChecklistStore.update(active);
    },
  };

  return <activeChecklistContext.Provider value={value}>{element}</activeChecklistContext.Provider>;
};
