import React, { FC, ReactNode, useState } from 'react';

import activeChecklistContext from './context/activeChecklist';
import todosContext from './context/todos';

import activeChecklistStore from './store/activeChecklist';
import todoStore from './store/todo';

interface Props {
  children: ReactNode;
}

const Root: FC<Props> = ({ children }) => {
  const [activeChecklist, setActiveChecklist] = useState('');
  const [todos, setTodos] = useState<string[]>([]);

  const activeChecklistValue = {
    activeChecklist,
    setActiveChecklist: (next: string) => {
      setActiveChecklist(next);
      activeChecklistStore.update(next);
    },
  };

  const todosValue = {
    todos,
    setTodos: (next: string[]) => {
      if (!activeChecklist) {
        return;
      }

      setTodos(next);
      todoStore.update(activeChecklist, next);
    },
  };

  return (
    <activeChecklistContext.Provider value={activeChecklistValue}>
      <todosContext.Provider value={todosValue}>{children}</todosContext.Provider>
    </activeChecklistContext.Provider>
  );
};

export default Root;
