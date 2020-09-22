
import React from 'react';
import Typography from '@material-ui/core/Typography';

import SectionToolbar from 'parts/SectionToolbar';
import JoynTabs from 'components/JoynTabs';
import GenericPicklistTable from 'containers/GenericPicklistTable';

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

const Picklists = () => {
  const [selectedTabIndex, setSelectedTabIndex] = React.useState(0);

  const handleTabChange = (event, newIndex) => {
    setSelectedTabIndex(newIndex);
  };

  return (
    <>
      <SectionToolbar
        leftPart={(
          <Typography variant='h6'>
            Generic Picklists
          </Typography>
        )}
        rightPart={(
          <div
            style={{
              height: '100%',
              display: 'flex',
              alignItems: 'flex-end'
            }}>
            <JoynTabs
              options={options}
              value={selectedTabIndex}
              onChange={handleTabChange} />
          </div>
        )} />
      <GenericPicklistTable />
    </>
  );
};

export default Picklists;
