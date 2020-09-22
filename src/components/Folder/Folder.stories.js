
import React from 'react';
import Folder from 'components/Folder';
import { ReactComponent as ViewIcon } from 'assets/icons/svgs/view.svg';
import { ReactComponent as ExploreIcon } from 'assets/icons/svgs/explore.svg';
import { ReactComponent as MoveIcon } from 'assets/icons/svgs/move.svg';
import { ReactComponent as DuplicateIcon } from 'assets/icons/svgs/duplicate.svg';

import Menu from 'components/UI/JoynMenu';
const { MenuItem, MenuItemText, MenuItemIcon } = Menu;

const Template = args => <Folder {...args} />;

const CardMenu = props => (
  <Menu {...props}>
    <MenuItem>
      <MenuItemIcon>
        <ExploreIcon fontSize='small' />
      </MenuItemIcon>
      <MenuItemText>Explore Network Group</MenuItemText>
    </MenuItem>
    <MenuItem>
      <MenuItemIcon>
        <MoveIcon fontSize='small' />
      </MenuItemIcon>
      <MenuItemText>Move</MenuItemText>
    </MenuItem>
    <MenuItem>
      <MenuItemIcon>
        <DuplicateIcon fontSize='small' />
      </MenuItemIcon>
      <MenuItemText>Duplicate</MenuItemText>
    </MenuItem>
    <MenuItem>
      <MenuItemIcon>
        <ViewIcon fontSize='small' />
      </MenuItemIcon>
      <MenuItemText>View</MenuItemText>
    </MenuItem>
  </Menu>
);

const Default = Template.bind({});
Default.args = {
  menu: CardMenu,
  title: 'Title',
  subheader: 'This is a sub heading'
};

const Disabled = Template.bind({});
Disabled.args = {
  title: 'Title',
  subheader: 'This is a subheader',
  menu: CardMenu,
  disabled: true
};
export default {
  title: 'Folder',
  component: Menu
};

export {
  Default,
  Disabled
};
