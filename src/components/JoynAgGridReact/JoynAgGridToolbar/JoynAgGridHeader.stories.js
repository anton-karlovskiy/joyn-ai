
import React from 'react';

import JoynAgGridToolbar from 'components/JoynAgGridReact/JoynAgGridToolbar';
import JoynSearchBar from 'components/JoynSearchBar';
import DownloadIconButton from 'components/JoynIconButtons/DownloadIconButton';

const Template = args => {
  return (
    <JoynAgGridToolbar
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
  title: 'JoynAgGridToolbar',
  component: JoynAgGridToolbar
};

export {
  Default
};
