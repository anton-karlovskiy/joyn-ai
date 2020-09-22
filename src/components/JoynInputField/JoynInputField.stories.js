
import React from 'react';

import JoynInputField from 'components/JoynInputField';

const Template = args => {
  const [value, setValue] = React.useState('');

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <JoynInputField
      value={value}
      onChange={handleChange}
      {...args} />
  );
};

const defaultArgs = {
  id: 'joyn-input-field',
  placeholder: 'placeholder',
  label: ''
};

const Default = Template.bind({});
Default.args = {
  ...defaultArgs
};

const ReadOnly = Template.bind({});
ReadOnly.args = {
  ...defaultArgs,
  value: 'read only',
  readOnly: true
};

const WithLabel = Template.bind({});
WithLabel.args = {
  ...defaultArgs,
  label: 'label'
};

const Error = Template.bind({});
Error.args = {
  ...defaultArgs,
  label: 'error',
  error: true,
  helperText: 'helper text'
};

const Required = Template.bind({});
Required.args = {
  ...defaultArgs,
  label: 'required',
  required: true
};

export default {
  title: 'JoynInputField',
  component: JoynInputField
};

export {
  Default,
  ReadOnly,
  WithLabel,
  Error,
  Required
};
