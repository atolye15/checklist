import React, { FC } from 'react';
import cx from 'classnames';

import logo from '../../images/logo.svg';

import './c-logo.scss';

interface Props {
  className?: string;
}

const Logo: FC<Props> = ({ className }) => (
  <img className={cx('c-logo', className)} src={logo} alt="Checklist" />
);

export default Logo;
