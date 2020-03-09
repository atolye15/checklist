import React, { FC } from 'react';
import cx from 'classnames';

import '../c-link-light.scss';
import UnstyledButton, { Props as UnstyledButtonProps } from '../../../UnstyledButton';

type Props = {
  active?: string;
} & UnstyledButtonProps;

const LinkLightAsButton: FC<Props> = ({ className, children, active, ...rest }) => (
  <UnstyledButton className={cx('c-link-light', { 'is-active': active }, className)} {...rest}>
    {children}
  </UnstyledButton>
);

export default LinkLightAsButton;
