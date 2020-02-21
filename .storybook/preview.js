import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};

global.__PATH_PREFIX__ = '';

import '../src/styles/main.scss';
import './storybook.scss';

addDecorator(
  withInfo({
    styles: {
      header: {
        h1: {
          marginRight: '20px',
          fontSize: '25px',
          display: 'inline',
          color: '#333',
        },
        body: {
          paddingTop: 0,
          paddingBottom: 0,
        },
        h2: {
          display: 'inline',
          color: '#999',
        },
      },
      infoBody: {
        padding: '16px',
        lineHeight: '2',
      },
      source: {
        h1: {
          color: '#333',
        },
      },
      propTableHead: {
        color: '#333',
      },
    },
    inline: false,
    source: false,
  }),
);
