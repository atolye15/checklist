import React, { FC } from 'react';
import cx from 'classnames';

import '../c-button.scss';

import { Props as ButtonProps } from '..';

export type Props = ButtonProps<JSX.IntrinsicElements['a']>;

const ButtonAsAnchor: FC<Props> = ({
  size = 'normal',
  children,
  theme = 'primary',
  className,
  ...rest
}: Props) => {
  return (
    <a
      className={cx(
        'c-button',
        `c-button--${theme}`,
        {
          [`c-button--${size}`]: size !== 'normal',
        },
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  );
};

export default ButtonAsAnchor;
