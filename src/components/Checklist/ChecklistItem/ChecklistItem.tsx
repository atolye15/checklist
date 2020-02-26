import React, { FC } from 'react';
import cx from 'classnames';

import Icon from '../../Icon';

import './c-checklist-item.scss';

enum KEY_CODES {
  ENTER = 13,
  SPACE = 32,
}

type Props = {
  className?: string;
  title: string;
  description?: string;
  checked?: boolean;
  id: string;
  onClick?: JSX.IntrinsicElements['div']['onClick'];
  onKeyPress?: JSX.IntrinsicElements['div']['onKeyPress'];
  onKeyboardClick?: JSX.IntrinsicElements['div']['onKeyPress'];
};

const CheckListItem: FC<Props> = ({
  className,
  id,
  title,
  description,
  checked,
  onClick,
  onKeyPress,
  onKeyboardClick,
}) => {
  const handleKeyPress: JSX.IntrinsicElements['div']['onKeyPress'] = event => {
    // toggle dropdown when press enter or space
    if (event.charCode === KEY_CODES.ENTER || event.charCode === KEY_CODES.SPACE) {
      event.currentTarget.click();

      if (event.charCode === KEY_CODES.SPACE) {
        event.preventDefault();
      }

      if (onKeyboardClick) {
        onKeyboardClick(event);
      }
    }

    if (onKeyPress) {
      onKeyPress(event);
    }
  };
  return (
    <div
      className={cx('c-checklist-item', { 'is-checked': checked }, className)}
      role="checkbox"
      aria-checked={checked}
      tabIndex={0}
      onClick={onClick}
      onKeyPress={handleKeyPress}
      aria-labelledby={`${id}-title`}
      aria-describedby={`${id}-description`}
      id={id}
    >
      <div className="c-checklist-item__checkbox" aria-hidden>
        {checked && <Icon name="checkmark" />}
      </div>
      <div className="c-checklist-item__content">
        <div className="c-checklist-item__title" id={`${id}-title`}>
          {title}
        </div>
        {description && (
          <p className="c-checklist-item__description" id={`${id}-description`}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default CheckListItem;
