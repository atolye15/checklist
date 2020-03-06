import React, { FC, ReactNode, useContext } from 'react';

import CheckListItem from '../Checklist/ChecklistItem/ChecklistItem';
import todosContext from '../../context/todos';

interface Props {
  className: string;
  children: ReactNode;
}

/* eslint-disable react/jsx-props-no-spreading */
const ListItem: FC<Props> = ({ className, children }) => {
  const { todos, setTodos } = useContext(todosContext);

  const handleTodosUpdate = (itemId: string) => () => {
    const next = todos.includes(itemId) ? todos.filter(t => t !== itemId) : [...todos, itemId];
    setTodos(next);
  };

  if (className === 'task-list-item' && Array.isArray(children)) {
    const [, title, , ...description] = children;
    const itemId = title as string;

    return (
      <CheckListItem
        id={itemId}
        title={title}
        checked={todos.includes(itemId)}
        description={description}
        onClick={handleTodosUpdate(itemId)}
      />
    );
  }

  return <li className={className}>{children}</li>;
};
/* eslint-enable react/jsx-props-no-spreading */

export default ListItem;
