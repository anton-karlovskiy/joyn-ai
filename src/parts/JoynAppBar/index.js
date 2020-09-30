
import React from 'react';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { ReactComponent as ExploreIcon } from 'assets/icons/svgs/explore.svg';
import Typography from '@material-ui/core/Typography';

import JoynIconButtonBase from 'components/UI/JoynIconButtonBase';
import AppBarActions from 'parts/AppBarActions';
import JoynButton from 'components/JoynButton';
import NewButtonMenu from 'components/NewButtonMenu';
import { JoynMenuItem } from 'components/UI/JoynMenu';
import { ReactComponent as PicklistIcon } from 'assets/icons/svgs/picklist.svg';
import { ReactComponent as TransporterIcon } from 'assets/icons/svgs/transporter.svg';
import { ReactComponent as PurchaserIcon } from 'assets/icons/svgs/purchaser.svg';
import { ReactComponent as TankStrappingIcon } from 'assets/icons/svgs/tank-strapping.svg';
import { ReactComponent as DynamicLookupIcon } from 'assets/icons/svgs/lookup.svg';
import { ReactComponent as SettingsIcon } from 'assets/icons/svgs/settings.svg';
import BUTTON_TYPES from 'utils/constants/button-types';
import { PAGES } from 'utils/constants/links';

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
  hidden: {
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

const menuItems = [
  {
    icon: <PicklistIcon />,
    text: 'Generic Picklist',
    link: PAGES.PICKLISTS_GENERICS_ADD
  },
  {
    icon: <TransporterIcon />,
    text: 'Transporter',
    link: PAGES.PICKLISTS_TRANSPORTERS_ADD
  },
  {
    icon: <PurchaserIcon />,
    text: 'Purchaser',
    link: PAGES.PICKLISTS_PURCHASERS_ADD
  },
  {
    icon: <TankStrappingIcon />,
    text: 'Tank Strapping',
    link: PAGES.PICKLISTS_TANK_STRAPPINGS_ADD
  },
  {
    icon: <DynamicLookupIcon />,
    text: 'Dynamic Lookup',
    link: PAGES.PICKLISTS_DYNAMIC_LOOKUPS_ADD
  }
];

const JoynAppBar = ({
  isDrawerOpen,
  handleDrawerOpen,
  // TODO: hardcoded
  title = 'Manage Picklists',
  actions
}) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <AppBar
      color='inherit'
      position='fixed'
      className={clsx(classes.appBar, {
        [classes.appBarShift]: isDrawerOpen
      })}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.toolbarLeft}>
          {/* TODO: replace it based on the design */}
          <JoynIconButtonBase
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            className={clsx(classes.menuButton, {
              [classes.hidden]: isDrawerOpen
            })}>
            <ExploreIcon />
          </JoynIconButtonBase>
          <Typography
            variant='h5'
            noWrap>
            {title}
          </Typography>
        </div>
        {/* TODO: needs to be dynamic for pages */}
        <AppBarActions className={classes.toolbarRight}>
          {/* {actions} */}
          <JoynButton
            type={BUTTON_TYPES.TERTIARY}
            startIcon={<SettingsIcon />}>
            Configure
          </JoynButton>
          <NewButtonMenu>
            {menuItems.map(menuItem => (
              <JoynMenuItem
                key={menuItem.text}
                onClick={() => history.push(menuItem.link)}
                icon={menuItem.icon}
                text={menuItem.text} />
            ))}
          </NewButtonMenu>
        </AppBarActions>
      </Toolbar>
    </AppBar>
  );
};

export default JoynAppBar;
