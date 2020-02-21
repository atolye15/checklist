import React, { FC } from 'react';
import cx from 'classnames';
import { Link, GatsbyLinkProps } from 'gatsby';

import '../c-button.scss';

import { Props as ButtonProps } from '..';

type Props = ButtonProps<Omit<GatsbyLinkProps<{}>, 'ref'>>;

const LinkButton: FC<Props> = ({
  size = 'normal',
  children,
  theme = 'primary',
  className,
  ...rest
}: Props) => {
  return (
    <Link
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
    </Link>
  );
};

export default LinkButton;
