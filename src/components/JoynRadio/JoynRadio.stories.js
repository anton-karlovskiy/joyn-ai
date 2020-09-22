import React from 'react';
import JoynRadio from 'components/JoynRadio';

const options = [
  {
    value: 'female',
    label: 'Female'
  },
  {
    value: 'male',
    label: 'Male'
  },
  {
    value: 'other',
    label: 'Other',
    handleChange: e => alert(e.target.value)
  }
];
const Template = args => {
  const [value, setValue] = React.useState('female');
  return (
    <div>
      <JoynRadio
        {...args}
        value={value}
        handleChange={e => setValue(e.target.value)} />
    </div>
  );
};

const Default = Template.bind({});
Default.args = {
  options: options,
  label: 'Gender'
};

const Inline = Template.bind({});
Inline.args = {
  options: options,
  label: 'Gender',
  isInline: true
};

const Disabled = Template.bind({});
Disabled.args = {
  options: options.map(item => ({ ...item, disabled: true })),
  label: 'Gender'
};

export default {
  title: 'JoynRadio',
  component: JoynRadio
};

export {
  Default,
  Inline,
  Disabled
};
