import React from 'react';

import Card from './Card';
import CardHeader from './CardHeader';
import CardTitle from './CardTitle';
import CardFooter from './CardFooter';

const Wrapper = (storyFn: any) => <div style={{ padding: 8 }}>{storyFn()}</div>;

export default {
  title: 'Card',
  decorators: [Wrapper],
};

export const defaultView = () => (
  <Card>
    <CardHeader>
      <CardTitle to="./">Releasing a Stage Project for a Web Project</CardTitle>
    </CardHeader>
    <p className="u-margin-top-0">
      At vero eos censes tantas res gessisse sine causa, mox videro; interea hoc epicurus in animis
      nostris inesse notionem.
    </p>
    <CardFooter>Footer</CardFooter>
  </Card>
);
