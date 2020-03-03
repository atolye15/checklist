import React, { SFC, ReactNode } from 'react';

import Button from '.';
import { ButtonTheme, ButtonSize } from './Button';
import Icon from '../Icon';
import LinkButton from './LinkButton';

interface Props {
  theme: ButtonTheme;
  size?: ButtonSize;
  children: ReactNode;
}

const Wrapper = (storyFn: any) => <div style={{ padding: 8 }}>{storyFn()}</div>;

const DemoItem = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      paddingTop: 8,
      paddingBottom: 8,
    }}
  >
    {children}
  </div>
);

export default {
  title: 'Button',
  decorators: [Wrapper],
};

const ButtonDemo: SFC<Props> = ({ theme, size, children }) => (
  <>
    <DemoItem>
      <Button theme={theme} size={size}>
        {children}
      </Button>
      <LinkButton theme={theme} size={size} to="./" className="u-margin-left-small">
        Link {children}
      </LinkButton>
    </DemoItem>
    <DemoItem>
      <Button theme={theme} size={size} disabled>
        Disabled
      </Button>
    </DemoItem>
    <DemoItem>
      <Button theme={theme} size={size}>
        Longer Text or Emphasis
      </Button>
    </DemoItem>
    <DemoItem>
      <Button theme={theme}>
        Improve this checklist
        <Icon name="arrow-right" className="u-margin-left-small" />
      </Button>
    </DemoItem>
  </>
);

export const primary = () => <ButtonDemo theme="primary">Button</ButtonDemo>;
export const secondary = () => <ButtonDemo theme="secondary">Button</ButtonDemo>;
export const tertiary = () => <ButtonDemo theme="tertiary">Button</ButtonDemo>;
export const medium = () => (
  <ButtonDemo theme="primary" size="medium">
    Button
  </ButtonDemo>
);
