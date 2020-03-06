import React, { FC } from 'react';
import cx from 'classnames';

import '../c-link-light.scss';

type Props = {
  className?: string;
  active?: string;
} & JSX.IntrinsicElements['a'];

const LinkLightAsAnchor: FC<Props> = ({ className, children, active, ...rest }) => (
  <a className={cx('c-link-light', { 'is-active': active }, className)} {...rest}>
    {children}
  </a>
);

export default LinkLightAsAnchor;
