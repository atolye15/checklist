import React, { FC } from 'react';
import cx from 'classnames';

import '../c-link-brand.scss';

type Props = {
  className?: string;
  active?: boolean;
} & JSX.IntrinsicElements['a'];

const LinkBrandAsAnchor: FC<Props> = ({ className, children, active, ...rest }) => (
  <a className={cx('c-link-brand', { 'is-active': active }, className)} {...rest}>
    {children}
  </a>
);

export default LinkBrandAsAnchor;
