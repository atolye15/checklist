import React, { FC } from 'react';
import cx from 'classnames';

import '../c-icon-button.scss';
import Icon, { IconName } from '../../../Icon';
import ButtonAsLink, { Props as LinkButtonProps } from '../../ButtonAsLink';

interface Props extends LinkButtonProps {
  iconName: IconName;
}

const IconButton: FC<Props> = ({ className, iconName, ...rest }) => (
  <ButtonAsLink className={cx('c-icon-button', className)} {...rest}>
    <Icon className="c-icon-button__icon" name={iconName} />
  </ButtonAsLink>
);

export default IconButton;
