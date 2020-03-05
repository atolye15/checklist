import React, { FC } from 'react';
import cx from 'classnames';

import './c-unstyled-button.scss';

export type Props = {
  className?: string;
} & JSX.IntrinsicElements['button'];

const UnstyledButton: FC<Props> = ({ className, children, type = 'button', ...otherProps }) => (
  <button className={cx('c-unstyled-button', className)} type={type} {...otherProps}>
    {children}
  </button>
);

export default UnstyledButton;
