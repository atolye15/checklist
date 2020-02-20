import React from 'react';

import Tag from './Tag';

export default {
  component: Tag,
  title: 'Tag',
};

export const withDefault = () => <Tag tag="tag-1" selected />;
