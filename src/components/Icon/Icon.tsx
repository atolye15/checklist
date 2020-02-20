import React, { FC } from 'react';
import cx from 'classnames';

import sprite from './sprite.svg';

import './c-icon.scss';

export type IconName = {};

export interface Props {
  name: IconName;
  className?: string;
}

const Icon: FC<Props> = ({ name, className }) => (
  <svg className={cx('c-icon', className)}>
    <use xlinkHref={`${sprite}#icon-${name}`} />
  </svg>
);

export default Icon;
