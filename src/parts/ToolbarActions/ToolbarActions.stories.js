
import React from 'react';

import ToolbarActions from 'parts/ToolbarActions';
import JoynButton from 'components/JoynButton';
import { ReactComponent as LighteningIcon } from 'assets/icons/svgs/lightening.svg';
import { ReactComponent as SaveIcon } from 'assets/icons/svgs/save.svg';
import { ReactComponent as SettingsIcon } from 'assets/icons/svgs/settings.svg';
import BUTTON_TYPES from 'utils/constants/button-types';

// TODO: this story should be associated with TopToolBar/BottomToolbar story
const Template = args => <ToolbarActions {...args} />;

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
  title: 'ToolbarActions',
  component: ToolbarActions
};

export {
  Default
};
