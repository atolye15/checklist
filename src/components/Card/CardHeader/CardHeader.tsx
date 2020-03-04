import React, { FC } from 'react';
import cx from 'classnames';

import '../c-card.scss';

interface Props {
  className?: string;
}

const CardHeader: FC<Props> = ({ className, children }) => (
  <header className={cx('c-card__header', className)}>{children}</header>
);

export default CardHeader;
