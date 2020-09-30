
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';

import TopToolbar from 'parts/TopToolbar';
import MainZone, { MainZoneContent } from 'parts/MainZone';
import FormZone, { FormZoneRow } from 'parts/FormZone';
import ToolbarActions from 'parts/ToolbarActions';
import GenericPicklistOptionsTable from 'containers/GenericPicklistOptionsTable';
import JoynInputField from 'components/JoynInputField';
import JoynRadioButtonsGroup from 'components/JoynRadioButtonsGroup';
import JoynButton from 'components/JoynButton';
import ExpandCollapseToggleButton from 'components/ExpandCollapseToggleButton';
import BUTTON_TYPES from 'utils/constants/button-types';
import { ReactComponent as EditIcon } from 'assets/icons/svgs/edit.svg';

const ViewPicklist = () => {
  const [isExpanded, setIsExpanded] = React.useState(true);
  const toggleExpansion = () => {
    setIsExpanded(prev => !prev);
  };

  return (
    <MainZone>
      <MainZoneContent>
        <TopToolbar
          leftPart={
            <Typography variant='h6'>
              Country
            </Typography>
          }
          rightPart={
            <ToolbarActions>
              <JoynButton
                type={BUTTON_TYPES.SECONDARY}
                startIcon={<EditIcon />}>
                Edit
              </JoynButton>
              <ExpandCollapseToggleButton
                isExpanded={isExpanded}
                onClick={toggleExpansion} />
            </ToolbarActions>
          } />
        <Collapse in={isExpanded}>
          <FormZone>
            <FormZoneRow>
              <JoynInputField
                id='name'
                label='Name'
                placeholder='Specify'
                value='Country'
                readOnly
                required />
              <JoynInputField
                id='display-name'
                label='Display Name'
                placeholder='Specify'
                value='Country'
                readOnly
                required />
            </FormZoneRow>
            <JoynRadioButtonsGroup
              disabled
              value={false}
              label='Load Picklist options from a pick list options set'
              options={[
                {
                  value: true,
                  label: 'Yes'
                },
                {
                  value: false,
                  label: 'No'
                }
              ]}
              row />
            <FormZoneRow>
              {/* TODO: replace with a proper component */}
              <JoynInputField
                id='parent-option-group'
                label='Parent Option Group'
                placeholder=''
                value='State'
                readOnly />
            </FormZoneRow>
          </FormZone>
        </Collapse>
        <GenericPicklistOptionsTable />
      </MainZoneContent>
    </MainZone>
  );
};

export default ViewPicklist;
