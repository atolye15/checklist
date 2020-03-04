import React, { FC } from 'react';
import cx from 'classnames';

import LinkLight from '../../links/LinkLight';

import '../c-card.scss';

interface Props {
  className?: string;
  to: string;
}

const CardTitle: FC<Props> = ({ className, to, children }) => (
  <h4 className={cx('c-card__title', className)}>
    <LinkLight className="c-card__title-link" to={to}>
      {children}
    </LinkLight>
  </h4>
);

export default CardTitle;
