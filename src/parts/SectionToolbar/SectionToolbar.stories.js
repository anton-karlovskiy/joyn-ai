
import React from 'react';
import Typography from '@material-ui/core/Typography';

import SectionToolbar from 'parts/SectionToolbar';
import JoynTabs, { JoynTab } from 'components/JoynTabs';
import * as JoynTabsStories from 'components/JoynTabs/JoynTabs.stories';

// TODO: duplicated at src\components\JoynTabs\JoynTabs.stories.js
const options = [
  {
    label: 'Generic Picklists'
  },
  {
    label: 'Transporters'
  },
  {
    label: 'Purchasers'
  },
  {
    label: 'Tank Strapping'
  },
  {
    label: 'Dynamic Lookup'
  }
];

const JoynTabsWithController = ({
  id,
  ...rest
}) => {
  const [selectedTabIndex, setSelectedTabIndex] = React.useState(0);

  const handleTabChange = (event, newIndex) => {
    setSelectedTabIndex(newIndex);
  };

  return (
    <JoynTabs
      value={selectedTabIndex}
      onChange={handleTabChange}
      {...rest}>
      {options.map((option, index) => (
        <JoynTab
          key={option.label}
          id={`joyn-tab-${id}-${index}`}
          aria-controls={`joyn-tabpanel-${index}`}
          label={option.label} />
      ))}
    </JoynTabs>
  );
};

const Template = args => (
  <SectionToolbar {...args} />
);

const Default = Template.bind({});
Default.args = {
  leftPart: (
    <Typography variant='h6'>
      Generic Picklists
    </Typography>
  ),
  rightPart: (
    <div
      style={{
        height: '100%',
        display: 'flex',
        alignItems: 'flex-end'
      }}>
      <JoynTabsWithController {...JoynTabsStories.GenericPicklistsTabs.args} />
    </div>
  )
};

export default {
  title: 'SectionToolbar',
  component: SectionToolbar
};

export {
  Default
};
