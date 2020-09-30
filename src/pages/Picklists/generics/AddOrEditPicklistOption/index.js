
import React from 'react';
import Typography from '@material-ui/core/Typography';

import TopToolbar from 'parts/TopToolbar';
import BottomToolbar from 'parts/BottomToolbar';
import MainZone, { MainZoneContent } from 'parts/MainZone';
import FormZone, { FormZoneRow } from 'parts/FormZone';
import ToolbarActions from 'parts/ToolbarActions';
import JoynInputField from 'components/JoynInputField';
import JoynRadioButtonsGroup from 'components/JoynRadioButtonsGroup';
import JoynAsyncSearchBar from 'components/JoynAsyncSearchBar';
import JoynButton from 'components/JoynButton';
import BUTTON_TYPES from 'utils/constants/button-types';

const isActiveOptions = [
  {
    value: true,
    label: 'Yes'
  },
  {
    value: false,
    label: 'No'
  }
];

const AddOrEditPicklistOption = () => {
  const [isActive, setIsActive] = React.useState(isActiveOptions[1].value);
  const handleIsActive = () => {
    setIsActive(prev => !prev);
  };

  return (
    <MainZone>
      <MainZoneContent>
        <TopToolbar
          leftPart={(
            <Typography variant='h6'>
              Country
            </Typography>
          )} />
        <FormZone>
          <FormZoneRow>
            <JoynInputField
              id='name'
              label='Name'
              placeholder='Specify'
              required />
            <JoynInputField
              id='code'
              label='Code'
              placeholder='Specify'
              required />
          </FormZoneRow>
          <FormZoneRow>
            <JoynInputField
              id='description'
              label='Description'
              placeholder='Specify' />
          </FormZoneRow>
          <FormZoneRow>
            <JoynInputField
              id='value'
              label='Value'
              placeholder='Specify' />
            <JoynInputField
              id='sort-order'
              label='Sort Order'
              placeholder='Specify' />
          </FormZoneRow>
          <FormZoneRow>
            <JoynAsyncSearchBar
              label='Parent Option Group'
              placeholder='Choose' />
            <JoynRadioButtonsGroup
              value={isActive}
              onChange={handleIsActive}
              label='Is Active'
              options={isActiveOptions}
              row />
          </FormZoneRow>
        </FormZone>
      </MainZoneContent>
      <BottomToolbar>
        <ToolbarActions>
          <JoynButton type={BUTTON_TYPES.SECONDARY}>
            Cancel
          </JoynButton>
          <JoynButton type={BUTTON_TYPES.PRIMARY}>
            Add Picklist Option
          </JoynButton>
        </ToolbarActions>
      </BottomToolbar>
    </MainZone>
  );
};

export default AddOrEditPicklistOption;
