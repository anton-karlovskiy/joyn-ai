import React from 'react';
import JoynCheckbox from 'components/JoynCheckbox';

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
    label: 'Other'
  }
];
const Template = args => {
  const [values, setValues] = React.useState(['female']);
  return (
    <div>
      <JoynCheckbox
        {...args}
        values={values}
        handleChange={v => setValues(v)} />
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
  title: 'JoynCheckbox',
  component: JoynCheckbox
};

export {
  Default,
  Inline,
  Disabled
};
