
import React, { useState } from 'react';

import Counter from 'components/Counter';

const Template = args => {
  const [value, setValue] = useState(0);
  return (
    <Counter
      {...args}
      handleChange={setValue}
      value={value} />
  );
};

const Default = Template.bind({});
Default.args = {};

const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};


export default {
  title: 'Counter',
  component: Counter
};

export {
  Default,
  Disabled
};
