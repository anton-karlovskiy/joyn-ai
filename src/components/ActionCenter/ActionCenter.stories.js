
import React from 'react';

import ActionCenter from 'components/ActionCenter';
import JoynButton from 'components/JoynButton';
import { ReactComponent as LighteningIcon } from 'assets/icons/svgs/lightening.svg';
import { ReactComponent as SaveIcon } from 'assets/icons/svgs/save.svg';
import { ReactComponent as SettingsIcon } from 'assets/icons/svgs/settings.svg';
import BUTTON_TYPES from 'utils/constants/button-types';

const Template = args => <ActionCenter {...args} />;

const Default = Template.bind({});
Default.args = {
  children:
    <>
      <JoynButton
        type={BUTTON_TYPES.TERTIARY}
        startIcon={<SettingsIcon />}>
        Configure
      </JoynButton>
      <JoynButton
        type={BUTTON_TYPES.PRIMARY}
        startIcon={<SaveIcon />}>
        Save
      </JoynButton>
      <JoynButton
        type={BUTTON_TYPES.SECONDARY}
        startIcon={<LighteningIcon />}>
        Action
      </JoynButton>
    </>
};

export default {
  title: 'ActionCenter',
  component: ActionCenter
};

export {
  Default
};
