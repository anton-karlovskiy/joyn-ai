
import React from 'react';

import { JoynMenuItem } from 'components/UI/JoynMenu';
import ThreeDotMenu from 'components/ThreeDotMenu';
import { ReactComponent as ViewIcon } from 'assets/icons/svgs/view.svg';
import { ReactComponent as ExploreIcon } from 'assets/icons/svgs/explore.svg';
import { ReactComponent as MoveIcon } from 'assets/icons/svgs/move.svg';
import { ReactComponent as DuplicateIcon } from 'assets/icons/svgs/duplicate.svg';

const Template = args => {
  return (
    <>
      <ThreeDotMenu {...args}>
        <JoynMenuItem
          icon={<ExploreIcon />}
          text='Explore Network Group' />
        <JoynMenuItem
          icon={<MoveIcon />}
          text='Move' />
        <JoynMenuItem
          icon={<DuplicateIcon />}
          text='Duplicate' />
        <JoynMenuItem
          icon={<ViewIcon />}
          text='View' />
      </ThreeDotMenu>
    </>
  );
};

const Default = Template.bind({});
Default.args = {
  id: 'three-dot-menu'
};

export default {
  title: 'ThreeDotMenu',
  component: ThreeDotMenu
};

export {
  Default
};
