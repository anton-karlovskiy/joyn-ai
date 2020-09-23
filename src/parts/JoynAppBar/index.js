
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { ReactComponent as ExploreIcon } from 'assets/icons/svgs/explore.svg';
import Typography from '@material-ui/core/Typography';

import JoynIconButtonBase from 'components/UI/JoynIconButtonBase';

const useStyles = makeStyles(theme => ({
  appBar: {
    boxShadow: theme.custom.shadows[0],
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: theme.custom.layout.drawerWidth,
    width: `calc(100% - ${theme.custom.layout.drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: 'none'
  },
  toolbar: {
    minHeight: theme.custom.layout.appBarHeight,
    justifyContent: 'space-between'
  },
  toolbarLeft: {
    display: 'flex',
    alignItems: 'center'
  },
  toolbarRight: {}
}));

const JoynAppBar = ({
  isDrawerOpen,
  handleDrawerOpen,
  // TODO: hardcoded
  title = 'Manage Picklists',
  actions
}) => {
  const classes = useStyles();

  return (
    <AppBar
      color='inherit'
      position='fixed'
      className={clsx(classes.appBar, {
        [classes.appBarShift]: isDrawerOpen
      })}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.toolbarLeft}>
          <JoynIconButtonBase
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            className={clsx(classes.menuButton, {
              [classes.hide]: isDrawerOpen
            })}>
            <ExploreIcon />
          </JoynIconButtonBase>
          <Typography
            variant='h5'
            noWrap>
            {title}
          </Typography>
        </div>
        <div className={classes.toolbarRight}>
          {actions}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default JoynAppBar;
