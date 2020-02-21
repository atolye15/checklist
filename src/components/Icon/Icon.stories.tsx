import React, { ReactNode } from 'react';

import Icon from './Icon';

const icons = [
  'behance',
  'dribbble',
  'facebook',
  'github',
  'instagram',
  'linkedin',
  'medium',
  'meetup',
  'twitter',
  'youtube',
  'atolye15-logo',
  'arrow-left',
  'arrow-right',
  'check-circle',
  'close',
  'logo-mark',
  'menu',
  'search',
];

const Box = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      border: '1px solid #ccc',
      padding: '4px',
      display: 'inline-block',
      textAlign: 'center',
      fontSize: 32,
      flexShrink: 0,
      color: '#444',
    }}
  >
    {children}
  </div>
);

export default {
  title: 'Icon',
};

export const list = () => (
  <div
    style={{
      display: 'grid',
      gridGap: 12,
      gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr) )',
      padding: 8,
    }}
  >
    {icons.map((icon: any) => (
      <Box key={icon}>
        <Icon name={icon} />
        <span
          style={{
            fontSize: 12,
            display: 'block',
            userSelect: 'all',
            MozUserSelect: 'all',
            WebkitUserSelect: 'all',
          }}
        >
          {icon}
        </span>
      </Box>
    ))}
  </div>
);
