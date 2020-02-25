import React from 'react';

import Tag from './Tag';

const Wrapper = (storyFn: any) => <div style={{ padding: 8 }}>{storyFn()}</div>;

const DemoItem = ({ size }: { size?: any }) => (
  <div style={{ padding: 4, display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
    <Tag to="./" theme="default" size={size} className="u-margin-2xsmall">
      #default
    </Tag>
    <Tag to="./" theme="blue" size={size} className="u-margin-2xsmall">
      #blue
    </Tag>
    <Tag to="./" theme="dodger-blue" size={size} className="u-margin-2xsmall">
      #dodger-blue
    </Tag>
    <Tag to="./" theme="electric-violet" size={size} className="u-margin-2xsmall">
      #electric-violet
    </Tag>
    <Tag to="./" theme="fuzzy-wuzzy-brown" size={size} className="u-margin-2xsmall">
      #fuzzy-wuzzy-brown
    </Tag>
    <Tag to="./" theme="rose" size={size} className="u-margin-2xsmall">
      #rose
    </Tag>
    <Tag to="./" theme="purple-heart" size={size} className="u-margin-2xsmall">
      #purple-heart
    </Tag>
    <Tag to="./" theme="clementine" size={size} className="u-margin-2xsmall">
      #clementine
    </Tag>
    <Tag to="./" theme="gossamer" size={size} className="u-margin-2xsmall">
      #gossamer
    </Tag>
  </div>
);

export default {
  title: 'Tag',
  decorators: [Wrapper],
};

export const defaultViews = () => <DemoItem />;
export const Small = () => <DemoItem size="small" />;
