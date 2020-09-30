
import React from 'react';

import JoynRadioButtonsGroup from 'components/JoynRadioButtonsGroup';

const options = [
  {
    value: 'female',
    label: 'Female'
  },
  {
    value: 'male',
    label: 'Male'
  }
];

const defaultArgs = {
  options,
  label: 'Gender'
};

const Template = args => {
  const [value, setValue] = React.useState('female');
  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <JoynRadioButtonsGroup
      value={value}
      onChange={handleChange}
      {...args} />
  );
};

const Default = Template.bind({});
Default.args = {
  ...defaultArgs
};

const Horizontal = Template.bind({});
Horizontal.args = {
  ...defaultArgs,
  row: true
};

const OptionDisabled = Template.bind({});
OptionDisabled.args = {
  ...defaultArgs,
  options: [
    ...options,
    {
      value: 'other',
      label: 'Other',
      disabled: true
    }
  ]
};

const GroupDisabled = Template.bind({});
GroupDisabled.args = {
  ...defaultArgs,
  value: 'female',
  disabled: true
};

export default {
  title: 'JoynRadioButtonsGroup',
  component: JoynRadioButtonsGroup
};

export {
  Default,
  Horizontal,
  OptionDisabled,
  GroupDisabled
};
