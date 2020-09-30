
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

const picklistLoadingOptions = [
  {
    value: true,
    label: 'Yes'
  },
  {
    value: false,
    label: 'No'
  }
];

const AddOrEditPicklist = () => {
  const [isLoadingOptionFromSet, setIsLoadingOptionFromSet] = React.useState(picklistLoadingOptions[1].value);
  const toggleLoadingOptionFromSet = () => {
    setIsLoadingOptionFromSet(prev => !prev);
  };

  return (
    <MainZone>
      <MainZoneContent>
        <TopToolbar
          leftPart={(
            <Typography variant='h6'>
              Generic Picklist
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
              id='display-name'
              label='Display Name'
              placeholder='Specify'
              required />
          </FormZoneRow>
          <JoynRadioButtonsGroup
            value={isLoadingOptionFromSet}
            onChange={toggleLoadingOptionFromSet}
            label='Load Picklist options from a pick list options set'
            options={picklistLoadingOptions}
            row />
          <FormZoneRow>
            <JoynAsyncSearchBar
              style={{
                display: isLoadingOptionFromSet ? 'inline-block' : 'none'
              }}
              label='Parent Option Group'
              placeholder='Choose' />
          </FormZoneRow>
        </FormZone>
      </MainZoneContent>
      <BottomToolbar>
        <ToolbarActions>
          <JoynButton type={BUTTON_TYPES.SECONDARY}>
            Cancel
          </JoynButton>
          <JoynButton type={BUTTON_TYPES.PRIMARY}>
            Add Picklist
          </JoynButton>
        </ToolbarActions>
      </BottomToolbar>
    </MainZone>
  );
};

export default AddOrEditPicklist;
