
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

import { ReactComponent as ChevronLeftIcon } from 'assets/icons/svgs/chevron-left.svg';
import { ReactComponent as ChevronRightIcon } from 'assets/icons/svgs/chevron-right.svg';
import DrawerMenuList from './DrawerMenuList';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: theme.custom.layout.drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  paper: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main
  },
  paperAnchorDockedLeft: {
    borderRight: 'none'
  },
  drawerOpen: {
    width: theme.custom.layout.drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: theme.spacing(7 + 1/8),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9 + 1/8)
    }
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.custom.shadows[0],
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    minHeight: `${theme.custom.layout.appBarHeight}px !important`
  }
}));

const JoynDrawer = React.forwardRef(({
  isOpen,
  handleDrawerOpen,
  handleDrawerClose
}, ref) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Drawer
      ref={ref}
      variant='permanent'
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: isOpen,
        [classes.drawerClose]: !isOpen
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: isOpen,
          [classes.drawerClose]: !isOpen
        }, classes.paper),
        paperAnchorDockedLeft: classes.paperAnchorDockedLeft
      }}>
      <div className={classes.toolbar}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </div>
      <Divider />
      <DrawerMenuList
        isOpen={isOpen}
        handleDrawerOpen={handleDrawerOpen} />
    </Drawer>
  );
});

export default JoynDrawer;
