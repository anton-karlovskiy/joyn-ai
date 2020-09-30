
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import JoynMenu from 'components/UI/JoynMenu';
import MenuDotIconButton from 'components/JoynIconButtons/MenuDotIconButton';

const useStyles = makeStyles(theme => ({
  root: {
    '&:hover': {
      backgroundColor: theme.palette.primary.light
    }
  },
  active: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main
  }
}));

const ThreeDotMenu = props => {
  const classes = useStyles();
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
      <MenuDotIconButton
        onClick={handleOpen}
        classes={{
          root: clsx(
            classes.root,
            { [classes.active]: isOpen }
          )
        }}
        size='small' />
      <JoynMenu
        open={isOpen}
        onClose={handleClose}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: -5,
          horizontal: 'right'
        }}
        {...props} />
    </>
  );
};

export default ThreeDotMenu;
