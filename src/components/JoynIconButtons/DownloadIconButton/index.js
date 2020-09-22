
import React from 'react';

import JoynIconButtonBase from 'components/UI/JoynIconButtonBase';
import { ReactComponent as DownloadIcon } from 'assets/icons/svgs/download.svg';

const DownloadIconButton = props => {
  return (
    <JoynIconButtonBase {...props}>
      <DownloadIcon />
    </JoynIconButtonBase>
  );
};

export default DownloadIconButton;
