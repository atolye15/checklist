import React, { FC } from 'react';
import cx from 'classnames';

import { Theme } from '../../utils/theme';

import './c-card.scss';

type Props = {
  className?: string;
  theme?: Theme;
};

const Card: FC<Props> = ({ className, theme = 'default', children }) => (
  <div className={cx('c-card', `c-card--theme-${theme}`, className)}>{children}</div>
);

export default Card;
