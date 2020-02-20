import React from 'react';

import Tag from './Tag';

export default {
  component: Tag,
  title: 'Tag',
};

export const withDefault = () => (
  <div>
    <h4 className="u-color-primary">default</h4>
    <div>
      <Tag tag="tag-1" selected={false} />
      <Tag tag="tag-1" selected />
    </div>

    <h4 className="u-color-primary">front-end</h4>
    <div>
      <Tag tag="tag-1" theme="front-end" selected={false} />
      <Tag tag="tag-1" theme="front-end" selected />
    </div>

    <h4 className="u-color-primary">back-end</h4>
    <div>
      <Tag tag="tag-1" theme="back-end" selected={false} />
      <Tag tag="tag-1" theme="back-end" selected />
    </div>

    <h4 className="u-color-primary">design</h4>
    <div>
      <Tag tag="tag-1" theme="design" selected={false} />
      <Tag tag="tag-1" theme="design" selected />
    </div>

    <h4 className="u-color-primary">general</h4>
    <div>
      <Tag tag="tag-1" theme="general" selected={false} />
      <Tag tag="tag-1" theme="general" selected />
    </div>

    <h4 className="u-color-primary">human-resources</h4>
    <div>
      <Tag tag="tag-1" theme="human-resources" selected={false} />
      <Tag tag="tag-1" theme="human-resources" selected />
    </div>

    <h4 className="u-color-primary">marketing</h4>
    <div>
      <Tag tag="tag-1" theme="marketing" selected={false} />
      <Tag tag="tag-1" theme="marketing" selected />
    </div>

    <h4 className="u-color-primary">project management</h4>
    <div>
      <Tag tag="tag-1" theme="project-management" selected={false} />
      <Tag tag="tag-1" theme="project-management" selected />
    </div>
  </div>
);
