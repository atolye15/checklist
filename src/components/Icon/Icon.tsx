import React, { FC } from 'react';
import cx from 'classnames';

import sprite from './sprite.svg';

import './c-icon.scss';

export type IconName =
  | 'behance'
  | 'dribbble'
  | 'facebook'
  | 'github'
  | 'instagram'
  | 'linkedin'
  | 'medium'
  | 'meetup'
  | 'twitter'
  | 'youtube'
  | 'atolye15-logo'
  | 'arrow-left'
  | 'arrow-right'
  | 'check-circle'
  | 'close'
  | 'logo-mark'
  | 'menu'
  | 'search'
  | 'checkmark'
  | 'external-link';

export interface Props {
  name: IconName;
  className?: string;
  ariaHidden?: boolean;
}

const Icon: FC<Props> = ({ name, className, ariaHidden }) => (
  <svg className={cx('c-icon', className)} aria-hidden={ariaHidden}>
    <use xlinkHref={`${sprite}#icon-${name}`} />
  </svg>
);

export default Icon;
