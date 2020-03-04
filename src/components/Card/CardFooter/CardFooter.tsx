import React, { FC } from 'react';
import cx from 'classnames';

import '../c-card.scss';

interface Props {
  className?: string;
}

const CardFooter: FC<Props> = ({ className, children }) => (
  <footer className={cx('c-card__footer', className)}>{children}</footer>
);

export default CardFooter;
