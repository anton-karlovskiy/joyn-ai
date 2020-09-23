
import React from 'react';

import JoynTabs, { JoynTab } from 'components/JoynTabs';

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

const Template = args => <JoynTabsWithController {...args} />;

const GenericPicklistsTabs = Template.bind({});
GenericPicklistsTabs.args = {
  id: 'picklist'
};

export default {
  title: 'JoynTabs',
  component: JoynTabs
};

export {
  GenericPicklistsTabs
};
