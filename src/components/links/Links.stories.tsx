import React from 'react';

import LinkSecondary from './LinkSecondary';
import LinkLight from './LinkLight';
import LinkBrand from './LinkBrand';
import LinkSecondaryAsAnchor from './LinkSecondary/LinkSecondaryAsAnchor';
import LinkLightAsAnchor from './LinkLight/LinkLightAsAnchor/LinkLightAsAnchor';
import LinkBrandAsAnchor from './LinkBrand/LinkBrandAsAnchor';

const Wrapper = (storyFn: any) => (
  <div style={{ padding: 8, backgroundColor: '#101013' }}>{storyFn()}</div>
);

export default {
  title: 'Links',
  decorators: [Wrapper],
};

export const secondary = () => (
  <>
    <LinkSecondary to="./">Hello</LinkSecondary>
    <LinkSecondaryAsAnchor href="./">As Anchor</LinkSecondaryAsAnchor>
  </>
);
export const white = () => (
  <>
    <LinkLight to="./">Hello</LinkLight>
    <LinkLightAsAnchor href="./">As Anchor</LinkLightAsAnchor>
  </>
);
export const brand = () => (
  <>
    <LinkBrand to="./">Hello</LinkBrand>
    <LinkBrandAsAnchor href="./">As Anchor</LinkBrandAsAnchor>
  </>
);
