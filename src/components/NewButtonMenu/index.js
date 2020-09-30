
import React from 'react';

import JoynMenu from 'components/UI/JoynMenu';
import JoynButton from 'components/JoynButton';
import { ReactComponent as PlusIcon } from 'assets/icons/svgs/plus.svg';
import BUTTON_TYPES from 'utils/constants/button-types';

const NewButtonMenu = props => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isOpen = Boolean(anchorEl);

  const handleOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <JoynButton
        type={isOpen ? BUTTON_TYPES.SECONDARY : BUTTON_TYPES.PRIMARY}
        startIcon={<PlusIcon />}
        onClick={handleOpen}>
        New
      </JoynButton>
      <JoynMenu
        open={isOpen}
        onClose={handleClose}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: -6,
          horizontal: 'center'
        }}
        {...props} />
    </>
  );
};

export default NewButtonMenu;
