
import React from 'react';

import JoynTabs from 'components/JoynTabs';

const JoynTabsWithController = props => {
  const [selectedTabIndex, setSelectedTabIndex] = React.useState(0);

  const handleTabChange = (event, newIndex) => {
    setSelectedTabIndex(newIndex);
  };

  return (
    <JoynTabs
      value={selectedTabIndex}
      onChange={handleTabChange}
      {...props} />
  );
};

const Template = args => <JoynTabsWithController {...args} />;

const GenericPicklistsTabs = Template.bind({});
GenericPicklistsTabs.args = {
  id: 'picklist',
  options: [
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
  ]
};

export default {
  title: 'JoynTabs',
  component: JoynTabs
};

export {
  GenericPicklistsTabs
};
