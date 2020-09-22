
import React from 'react';

import JoynAgGridHeader from 'components/JoynAgGridReact/JoynAgGridHeader';
import JoynSearchBar from 'components/JoynSearchBar';
import DownloadIconButton from 'components/JoynIconButtons/DownloadIconButton';

const Template = args => {
  return (
    <JoynAgGridHeader
      leftPart={
        <JoynSearchBar />
      }
      rightPart={<DownloadIconButton />}
      {...args} />
  );
};

const Default = Template.bind({});
Default.args = {};

export default {
  title: 'JoynAgGridHeader',
  component: JoynAgGridHeader
};

export {
  Default
};
