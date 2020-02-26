import React, { FC } from 'react';
import cx from 'classnames';

import './c-checklist.scss';

type Props = {
  className?: string;
};

const Checklist: FC<Props> = ({ children, className }) => (
  <div className={cx('c-checklist', className)}>{children}</div>
);

export default Checklist;
