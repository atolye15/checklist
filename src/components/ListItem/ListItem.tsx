import React, { FC, ReactNode, useContext } from 'react';
import CheckListItem from '../Checklist/ChecklistItem/ChecklistItem';
import useTodoState from '../../hooks/useTodoState';
import activeChecklistContext from '../../context/activeChecklist';

interface Props {
  className: string;
  children: ReactNode;
}

/* eslint-disable react/jsx-props-no-spreading */
const ListItem: FC<Props> = ({ className, children }) => {
  const { getActiveChecklist } = useContext(activeChecklistContext);
  const [todos, updateTodos] = useTodoState(getActiveChecklist() || '');

  const updateCheckStatus = (itemId: string) => {
    const nextState = todos.includes(itemId) ? todos.filter(t => t !== itemId) : [...todos, itemId];
    updateTodos(nextState);
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
        onClick={() => {
          updateCheckStatus(itemId);
        }}
      />
    );
  }

  return <li className={className}>{children}</li>;
};
/* eslint-enable react/jsx-props-no-spreading */

export default ListItem;
