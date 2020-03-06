import React, { FC, ReactNode } from 'react';

import CheckListItem from '../Checklist/ChecklistItem/ChecklistItem';
import useTodoState from '../../hooks/useTodoState';

interface Props {
  className: string;
  children: ReactNode;
}

/* eslint-disable react/jsx-props-no-spreading */
const ListItem: FC<Props> = ({ className, children }) => {
  const [todos, updateTodos] = useTodoState();

  if (className === 'task-list-item' && Array.isArray(children)) {
    const [, title, , ...description] = children;
    const itemId = title as string;

    return (
      <CheckListItem
        id={itemId}
        title={title}
        checked={todos.includes(itemId)}
        description={description}
        onClick={() => {
          updateTodos(itemId);
        }}
      />
    );
  }

  return <li className={className}>{children}</li>;
};
/* eslint-enable react/jsx-props-no-spreading */

export default ListItem;
