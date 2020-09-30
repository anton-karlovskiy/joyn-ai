
import React from 'react';
import { useHistory } from 'react-router-dom';

import ThreeDotMenu from 'components/ThreeDotMenu';
import { JoynMenuItem } from 'components/UI/JoynMenu';
import JoynModal from 'components/JoynModal';
import JoynButton from 'components/JoynButton';
import { ReactComponent as EditIcon } from 'assets/icons/svgs/edit.svg';
import { ReactComponent as DeleteIcon } from 'assets/icons/svgs/delete.svg';
import { PAGES } from 'utils/constants/links';
import { GENERICS } from 'utils/constants//common';
import PAYLOAD_KEYS from 'utils/constants/payload-keys';
import BUTTON_TYPES from 'utils/constants/button-types';

const ActionsRenderer = props => {
  const history = useHistory();
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = React.useState(false);

  const handleOpen = () => {
    setIsConfirmDeleteOpen(true);
  };

  const handleClose = () => {
    setIsConfirmDeleteOpen(false);
  };

  return (
    <>
      <ThreeDotMenu id={props.value}>
        <JoynMenuItem
          onClick={() => history.push(
            PAGES.PICKLISTS_GENERICS_EDIT_OPTION
              .replace(`:${GENERICS.ID}`, props.node.data[PAYLOAD_KEYS.PICKLIST_OPTIONS_SET_ID])
              .replace(`:${GENERICS.OPTION_ID}`, props.node.data[PAYLOAD_KEYS.ID])
          )}
          icon={<EditIcon />}
          text='Edit' />
        <JoynMenuItem
          onClick={handleOpen}
          icon={<DeleteIcon />}
          text='Delete' />
      </ThreeDotMenu>
      <JoynModal
        open={isConfirmDeleteOpen}
        onClose={handleClose}
        title='Confirm Delete'
        description='Are you sure you want to delete the picklist option ‘Calaveras’ ? You will not be able to undo this action.'
        actions={
          <>
            <JoynButton
              type={BUTTON_TYPES.SECONDARY}
              onClick={handleClose}>
              Cancel
            </JoynButton>
            <JoynButton type={BUTTON_TYPES.PRIMARY}>
              Confirm Delete
            </JoynButton>
          </>
        } />
    </>
  );
};

export default ActionsRenderer;
