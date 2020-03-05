import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import todoStore from '../store/todo';

const useTodoState = (key: string): [string[], Dispatch<SetStateAction<string[]>>] => {
  const initialState = todoStore.get(key);

  const [todos, updateTodos] = useState<string[]>(initialState);

  useEffect(() => {
    if (key) {
      todoStore.update(key, todos);
    }
  }, [key, todos]);

  return [todos, updateTodos];
};

export default useTodoState;
