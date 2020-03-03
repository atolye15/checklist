import React, { FC } from 'react';
import cx from 'classnames';

import '../c-icon-button.scss';
import Icon, { IconName } from '../../../Icon';
import LinkButton, { Props as LinkButtonProps } from '../../LinkButton';

interface Props extends LinkButtonProps {
  iconName: IconName;
}

const IconButton: FC<Props> = ({ className, iconName, ...rest }) => (
  <LinkButton className={cx('c-icon-button', className)} {...rest}>
    <Icon className="c-icon-button__icon" name={iconName} />
  </LinkButton>
);

export default IconButton;
