import React from 'react';

import CategoryTagLink from './CategoryTagLink';

const Wrapper = (storyFn: any) => <div style={{ padding: 8 }}>{storyFn()}</div>;

const DemoItem = ({ size }: { size?: any }) => (
  <div style={{ padding: 4, display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
    <CategoryTagLink to="./" category="default" size={size} className="u-margin-2xsmall">
      #default
    </CategoryTagLink>
    <CategoryTagLink to="./" category="general" size={size} className="u-margin-2xsmall">
      #general
    </CategoryTagLink>
    <CategoryTagLink to="./" category="front-end" size={size} className="u-margin-2xsmall">
      #front-end
    </CategoryTagLink>
    <CategoryTagLink to="./" category="back-end" size={size} className="u-margin-2xsmall">
      #back-end
    </CategoryTagLink>
    <CategoryTagLink to="./" category="design" size={size} className="u-margin-2xsmall">
      #design
    </CategoryTagLink>
    <CategoryTagLink to="./" category="project-management" size={size} className="u-margin-2xsmall">
      #project-management
    </CategoryTagLink>
    <CategoryTagLink to="./" category="human-resources" size={size} className="u-margin-2xsmall">
      #human-resources
    </CategoryTagLink>
    <CategoryTagLink to="./" category="marketing" size={size} className="u-margin-2xsmall">
      #marketing
    </CategoryTagLink>
    <CategoryTagLink to="./" category="devops" size={size} className="u-margin-2xsmall">
      #devops
    </CategoryTagLink>
  </div>
);

export default {
  title: 'CategoryTagLink',
  decorators: [Wrapper],
};

export const defaultViews = () => <DemoItem />;
export const Small = () => <DemoItem size="small" />;
