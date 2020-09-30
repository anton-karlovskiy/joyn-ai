
import React from 'react';

import NewButtonMenu from 'components/NewButtonMenu';
import { JoynMenuItem } from 'components/UI/JoynMenu';
import { ReactComponent as PicklistIcon } from 'assets/icons/svgs/picklist.svg';
import { ReactComponent as TransporterIcon } from 'assets/icons/svgs/transporter.svg';
import { ReactComponent as PurchaserIcon } from 'assets/icons/svgs/purchaser.svg';
import { ReactComponent as TankStrappingIcon } from 'assets/icons/svgs/tank-strapping.svg';
import { ReactComponent as DynamicLookupIcon } from 'assets/icons/svgs/lookup.svg';

const Template = args => {
  return (
    <>
      <NewButtonMenu {...args}>
        <JoynMenuItem
          icon={<PicklistIcon />}
          text='Generic Picklist' />
        <JoynMenuItem
          icon={<TransporterIcon />}
          text='Transporter' />
        <JoynMenuItem
          icon={<PurchaserIcon />}
          text='Purchaser' />
        <JoynMenuItem
          icon={<TankStrappingIcon />}
          text='Tank Strapping' />
        <JoynMenuItem
          icon={<DynamicLookupIcon />}
          text='Dynamic Lookup' />
      </NewButtonMenu>
    </>
  );
};

const Default = Template.bind({});
Default.args = {
  id: 'three-dot-menu'
};

export default {
  title: 'NewButtonMenu',
  component: NewButtonMenu
};

export {
  Default
};
