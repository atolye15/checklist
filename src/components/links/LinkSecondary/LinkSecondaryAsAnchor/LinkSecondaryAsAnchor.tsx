import React, { FC } from 'react';
import cx from 'classnames';

import '../c-link-secondary.scss';

type Props = {
  className?: string;
  active?: string;
} & JSX.IntrinsicElements['a'];

const LinkSecondaryAsAnchor: FC<Props> = ({ className, children, active, ...rest }) => (
  <a className={cx('c-link-secondary', { 'is-active': active }, className)} {...rest}>
    {children}
  </a>
);

export default LinkSecondaryAsAnchor;
