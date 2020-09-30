
import React from 'react';

import JoynIconButtonBase from 'components/UI/JoynIconButtonBase';
import { ReactComponent as CrossIcon } from 'assets/icons/svgs/cross.svg';

const CrossIconButton = props => {
  return (
    <JoynIconButtonBase {...props}>
      <CrossIcon />
    </JoynIconButtonBase>
  );
};

export default CrossIconButton;
