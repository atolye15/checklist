import { useContext, useLayoutEffect, useState } from 'react';

import todoStore from '../store/todo';
import activeChecklistContext from '../context/activeChecklist';

const useTodoState = (): [string[], (itemId: string) => void] => {
  const { getActiveChecklist } = useContext(activeChecklistContext);
  const [todos, setTodos] = useState<string[]>([]);

  useLayoutEffect(() => {
    const activeChecklist = getActiveChecklist();

    if (!activeChecklist) {
      return;
    }

    const checklistTodos = todoStore.get(activeChecklist);
    setTodos(checklistTodos);
  }, []);

  const updateTodos = (itemId: string) => {
    const activeChecklist = getActiveChecklist();

    if (!activeChecklist) {
      return;
    }

    const checklistTodos = todoStore.get(activeChecklist);

    const next = checklistTodos.includes(itemId)
      ? checklistTodos.filter(t => t !== itemId)
      : [...checklistTodos, itemId];

    setTodos(next);
    todoStore.update(activeChecklist, next);
  };

  return [todos, updateTodos];
};

export default useTodoState;
