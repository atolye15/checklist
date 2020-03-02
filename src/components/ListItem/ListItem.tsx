import React, { FC, ReactNode, useState } from 'react';
import CheckListItem from '../Checklist/ChecklistItem/ChecklistItem';

interface Props {
  className: string;
  key: string;
  children: ReactNode;
}

/* eslint-disable react/jsx-props-no-spreading */
const ListItem: FC<Props> = ({ className, children, key }) => {
  const [isChecked, updateIsChecked] = useState(false);

  const updateCheckStatus = () => {
    updateIsChecked(!isChecked);
  };

  if (className === 'task-list-item' && Array.isArray(children)) {
    const [, title, , ...description] = children;

    return (
      <CheckListItem
        id={`todo-${key}`}
        title={title}
        checked={isChecked}
        description={description}
        onClick={() => {
          updateCheckStatus();
        }}
      />
    );
  }

  return (
    <li className={className} key={key}>
      {children}
    </li>
  );
};
/* eslint-enable react/jsx-props-no-spreading */

export default ListItem;
