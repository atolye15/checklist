import React, { FC } from 'react';
import cx from 'classnames';

import './c-button.scss';

export type ButtonTheme = 'primary' | 'secondary';
export type ButtonSize = 'normal' | 'medium';

export type Props<T = JSX.IntrinsicElements['button']> = T & {
  theme?: ButtonTheme;
  size?: ButtonSize;
};

const Button: FC<Props> = ({
  size = 'normal',
  children,
  theme = 'primary',
  className,
  ...rest
}: Props) => {
  return (
    <button
      className={cx(
        'c-button',
        `c-button--${theme}`,
        {
          [`c-button--${size}`]: size !== 'normal',
        },
        className,
      )}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
