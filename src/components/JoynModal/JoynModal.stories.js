
import React from 'react';

import JoynButton from 'components/JoynButton';
import JoynModal from 'components/JoynModal';
import BUTTON_TYPES from 'utils/constants/button-types';

const Template = args => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <JoynButton
        type={BUTTON_TYPES.PRIMARY}
        onClick={handleOpen}>
        Open Modal
      </JoynButton>
      <JoynModal
        open={isOpen}
        onClose={handleClose}
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
        }
        {...args} />
    </>
  );
};

const Default = Template.bind({});
Default.args = {
  'aria-labelledby': 'joyn-modal-title',
  'aria-describedby': 'joyn-modal-description',
  title: 'Confirm Delete',
  description: 'Are you sure you want to delete the picklist option ‘Calaveras’ ? You will not be able to undo this action.'
};

export default {
  title: 'JoynModal',
  component: JoynModal
};

export {
  Default
};
