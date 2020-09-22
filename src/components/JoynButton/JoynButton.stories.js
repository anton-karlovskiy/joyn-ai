
import React from 'react';

import JoynButton from 'components/JoynButton';
import BUTTON_TYPES from 'utils/constants/button-types';
import { ReactComponent as SaveIcon } from 'assets/icons/svgs/save.svg';

const Template = args => <JoynButton {...args} />;

const PrimaryDefault = Template.bind({});
PrimaryDefault.args = {
  type: BUTTON_TYPES.PRIMARY,
  children: 'Primary'
};

const PrimaryWithStartIcon = Template.bind({});
PrimaryWithStartIcon.args = {
  type: BUTTON_TYPES.PRIMARY,
  children: 'Primary',
  startIcon: <SaveIcon />
};

const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  type: BUTTON_TYPES.PRIMARY,
  children: 'Primary',
  disabled: true
};

const PrimaryLoading = Template.bind({});
PrimaryLoading.args = {
  type: BUTTON_TYPES.PRIMARY,
  children: 'Primary',
  loading: true
};

const SecondaryDefault = Template.bind({});
SecondaryDefault.args = {
  type: BUTTON_TYPES.SECONDARY,
  children: 'Secondary'
};

const SecondaryWithStartIcon = Template.bind({});
SecondaryWithStartIcon.args = {
  type: BUTTON_TYPES.SECONDARY,
  children: 'Secondary',
  startIcon: <SaveIcon />
};

const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  type: BUTTON_TYPES.SECONDARY,
  children: 'Secondary',
  disabled: true
};

const SecondaryLoading = Template.bind({});
SecondaryLoading.args = {
  type: BUTTON_TYPES.SECONDARY,
  children: 'Secondary',
  loading: true
};

const TertiaryDefault = Template.bind({});
TertiaryDefault.args = {
  type: BUTTON_TYPES.TERTIARY,
  children: 'Tertiary'
};

const TertiaryWithStartIcon = Template.bind({});
TertiaryWithStartIcon.args = {
  type: BUTTON_TYPES.TERTIARY,
  children: 'Tertiary',
  startIcon: <SaveIcon />
};

const TertiaryDisabled = Template.bind({});
TertiaryDisabled.args = {
  type: BUTTON_TYPES.TERTIARY,
  children: 'Tertiary',
  disabled: true
};

const TertiaryLoading = Template.bind({});
TertiaryLoading.args = {
  type: BUTTON_TYPES.TERTIARY,
  children: 'Tertiary',
  loading: true
};

export default {
  title: 'JoynButton',
  component: JoynButton
};

export {
  PrimaryDefault,
  PrimaryWithStartIcon,
  PrimaryDisabled,
  PrimaryLoading,
  SecondaryDefault,
  SecondaryWithStartIcon,
  SecondaryDisabled,
  SecondaryLoading,
  TertiaryDefault,
  TertiaryWithStartIcon,
  TertiaryDisabled,
  TertiaryLoading
};
