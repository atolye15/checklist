import React, { FC, ReactNode, useState } from 'react';
import cx from 'classnames';

interface Props {
  className: string;
  children: ReactNode;
}

/* eslint-disable react/jsx-props-no-spreading */
const ListItem: FC<Props> = ({ className, children, ...rest }) => {
  const [isChecked, updateIsChecked] = useState(false);

  const updateCheckStatus = () => {
    updateIsChecked(!isChecked);
  };

  if (className === 'task-list-item' && Array.isArray(children)) {
    const [, title, , ...description] = children;

    return (
      <li className={cx(className, { 'is-checked': isChecked })} {...rest}>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>
          <input type="checkbox" checked={isChecked} onChange={updateCheckStatus} />
          <h3>{title}</h3>
          {description.length && <p>{description}</p>}
        </label>
      </li>
    );
  }

  return (
    <li className={className} {...rest}>
      {children}
    </li>
  );
};
/* eslint-enable react/jsx-props-no-spreading */

export default ListItem;
