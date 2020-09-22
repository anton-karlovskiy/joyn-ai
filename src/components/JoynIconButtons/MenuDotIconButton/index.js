
import React from 'react';

import JoynIconButtonBase from 'components/UI/JoynIconButtonBase';
import { ReactComponent as MenuDotIcon } from 'assets/icons/svgs/menu-dot.svg';

const MenuDotIconButton = props => {
  return (
    <JoynIconButtonBase {...props}>
      <MenuDotIcon />
    </JoynIconButtonBase>
  );
};

export default MenuDotIconButton;
