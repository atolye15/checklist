import React, { FC, ReactNode } from 'react';
import cx from 'classnames';

import './c-blockquote.scss';

interface Props {
  children: ReactNode;
  className?: string;
}

const Blockquote: FC<Props> = ({ children, className }) => (
  <blockquote className={cx('c-blockquote', className)}>{children}</blockquote>
);

export default Blockquote;
