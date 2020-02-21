import React, { FC } from 'react';
import cx from 'classnames';

import './c-icon-button.scss';
import Button, { Props as ButtonProps } from '..';
import Icon, { IconName } from '../../Icon';

interface Props extends ButtonProps {
  iconName: IconName;
}

const IconButton: FC<Props> = ({ className, iconName, ...rest }) => (
  <Button className={cx('c-icon-button', className)} {...rest}>
    <Icon className="c-icon-button__icon" name={iconName} />
  </Button>
);

export default IconButton;
