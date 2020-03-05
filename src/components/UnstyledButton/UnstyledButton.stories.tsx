import React from 'react';

import UnstyledButton from './UnstyledButton';

const Wrapper = (storyFn: any) => <div style={{ padding: 8 }}>{storyFn()}</div>;

export default {
  title: 'UnstyledButton',
  decorators: [Wrapper],
};

export const defaultView = () => <UnstyledButton>Hello World!</UnstyledButton>;
