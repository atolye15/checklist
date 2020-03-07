import { createContext } from 'react';

export interface TodosContext {
  todos: string[];
  setTodos: (next: string[]) => void;
}

/* eslint-disable @typescript-eslint/no-empty-function */
export const todosDefault = {
  todos: [],
  setTodos: () => {},
};
/* eslint-enable @typescript-eslint/no-empty-function */

const todosContext = createContext<TodosContext>(todosDefault);

export default todosContext;
