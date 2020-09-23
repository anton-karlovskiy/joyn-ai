
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { useLocation, useHistory } from 'react-router-dom';

import ButtonLink from 'components/UI/ButtonLink';
import { ReactComponent as AnalyticsIcon } from 'assets/icons/svgs/analytics.svg';
import { ReactComponent as AllocationIcon } from 'assets/icons/svgs/allocation.svg';
import { ReactComponent as RouteIcon } from 'assets/icons/svgs/route.svg';
import { ReactComponent as ComponentsIcon } from 'assets/icons/svgs/components.svg';
import { ReactComponent as UserIcon } from 'assets/icons/svgs/user.svg';
import { ReactComponent as SettingsIcon } from 'assets/icons/svgs/settings.svg';
import { ReactComponent as MinusIcon } from 'assets/icons/svgs/minus.svg';
import { ReactComponent as ChevronRight } from 'assets/icons/svgs/chevron-right.svg';
import { ReactComponent as DropdownExpand } from 'assets/icons/svgs/dropdown-expand.svg';
import { PAGES } from 'utils/constants/links';

const LIST_ITEM_HEIGHT = 62;

const useStyles = makeStyles(theme => ({
  list: {
    padding: theme.spacing(30/8, 0)
  },
  itemHeight: {
    minHeight: LIST_ITEM_HEIGHT
  },
  selectedListItemBackgroundColor: {
    backgroundColor: `${theme.palette.primary.light} !important`
  },
  selectedListItemColor: {
    color: theme.palette.primary.main
  },
  nested: {
    paddingLeft: theme.spacing(2)
  },
  subList: {
    // TODO: hardcoded
    backgroundColor: '#384252'
  },
  selectedSubListItem: {
    // TODO: hardcoded
    backgroundColor: '#303640 !important'
  },
  itemIcon: {
    color: 'inherit',
    minWidth: theme.spacing(5)
  }
}));

const menuItems = [
  {
    title: 'Analytics',
    icon: <AnalyticsIcon />,
    subMenuItems: []
  },
  {
    title: 'Allocation',
    icon: <AllocationIcon />,
    subMenuItems: [
      {
        title: 'Manage Networks',
        link: PAGES.MANGE_NETWORKS
      },
      {
        title: 'Monthly Close',
        link: PAGES.MONTHLY_CLOSE
      },
      {
        title: 'Allocation Config',
        link: PAGES.ALLOCATION_CONFIG
      },
      {
        title: 'Scheduler',
        link: PAGES.SCHEDULER
      }
    ]
  },
  {
    title: 'Operations',
    icon: <RouteIcon />,
    subMenuItems: []
  },
  {
    title: 'Components',
    icon: <ComponentsIcon />,
    subMenuItems: [
      {
        title: 'Assets',
        link: PAGES.ASSETS
      },
      {
        title: 'Reading Views',
        link: PAGES.READING_VIEWS
      },
      {
        title: 'Picklists',
        link: PAGES.PICKLISTS
      }
    ]
  },
  {
    title: 'Manage Access',
    icon: <UserIcon />,
    subMenuItems: []
  },
  {
    title: 'Account Settings',
    icon: <SettingsIcon />,
    subMenuItems: []
  }
];

const DrawerMenuList = ({
  isOpen,
  handleDrawerOpen
}) => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [selectedSubIndex, setSelectedSubIndex] = React.useState(0);
  const [openedIndexes, setOpenedIndexes] = React.useState([]);
  const { pathname } = useLocation();
  const history = useHistory();
  React.useEffect(() => {
    let found = false;
    for (let index = 0; index < menuItems.length; index++) {
      for (let subIndex = 0; subIndex < menuItems[index].subMenuItems.length; subIndex++) {
        const link = menuItems[index].subMenuItems[subIndex].link;
        if (pathname.includes(link)) {
          found = true;
          if (selectedIndex !== index) {
            setSelectedIndex(index);
          }
          if (selectedSubIndex !== subIndex) {
            setSelectedSubIndex(subIndex);
          }
          setOpenedIndexes(prevOpenedIndexes => {
            let nextOpenedIndexes;
            if (prevOpenedIndexes.includes(index)) {
              nextOpenedIndexes = prevOpenedIndexes;
            } else {
              nextOpenedIndexes = [...prevOpenedIndexes, index];
            }
            return nextOpenedIndexes;
          });
          handleDrawerOpen();
          break;
        }
      }
      if (found) break;
    }
  }, [pathname, handleDrawerOpen, selectedIndex, selectedSubIndex]);

  const handleMenuItemClick = newIndex => event => {
    /**
     * TODO: there's a bug on the console in React.StrictMode.
     * MEMO: Disabled React.StrictMode for now.
     * RE:
     * https://github.com/mui-org/material-ui/issues/13394
     * https://stackoverflow.com/questions/61220424/material-ui-drawer-finddomnode-is-deprecated-in-strictmode
     */
    setOpenedIndexes(prevOpenedIndexes => {
      let nextOpenedIndexes;
      if (prevOpenedIndexes.includes(newIndex)) {
        if (newIndex === selectedIndex) {
          nextOpenedIndexes = prevOpenedIndexes.filter(prevOpenedIndex => prevOpenedIndex !== newIndex);
        } else {
          history.push(menuItems[newIndex].subMenuItems[0]?.link);
          nextOpenedIndexes = prevOpenedIndexes;
        }
      } else {
        history.push(menuItems[newIndex].subMenuItems[0]?.link);
        nextOpenedIndexes = [...prevOpenedIndexes, newIndex];
      }
      return nextOpenedIndexes;
    });
  };

  return (
    <List className={classes.list}>
      {menuItems.map((menuItem, index) => {
        const isSelectedMenuItem = selectedIndex === index;
        const isOpenedMenuItem = openedIndexes.includes(index);

        return (
          <div key={menuItem.title}>
            <ListItem
              button
              classes={{
                root: classes.itemHeight,
                selected: clsx(classes.selectedListItemBackgroundColor, classes.selectedListItemColor)
              }}
              selected={isSelectedMenuItem}
              onClick={handleMenuItemClick(index)}>
              <ListItemIcon className={classes.itemIcon}>{menuItem.icon}</ListItemIcon>
              <ListItemText
                // primaryTypographyProps={{ variant: isOpen ? 'button' : 'caption' }}
                primary={menuItem.title} />
              {isOpen && (
                <ListItemSecondaryAction className={clsx({ [classes.selectedListItemColor]: isSelectedMenuItem })}>
                  {isOpenedMenuItem ? (
                    <DropdownExpand />
                  ) : (
                    <ChevronRight />
                  )}
                </ListItemSecondaryAction>
              )}
            </ListItem>
            <Collapse
              in={isOpenedMenuItem}
              timeout='auto'
              unmountOnExit>
              <List
                className={classes.subList}
                component='div'
                disablePadding>
                {menuItem.subMenuItems.map((subMenuItem, subIndex) => {
                  const isSelectedSubMenuItem = selectedSubIndex === subIndex;

                  return (
                    <ListItem
                      button
                      key={`${menuItem.title}-${subMenuItem.title}`}
                      to={subMenuItem.link}
                      component={ButtonLink}
                      selected={isSelectedMenuItem && isSelectedSubMenuItem}
                      classes={{
                        root: clsx(classes.nested, classes.itemHeight),
                        selected: classes.selectedSubListItem
                      }}>
                      <ListItemIcon className={classes.itemIcon}>
                        <MinusIcon />
                      </ListItemIcon>
                      <ListItemText primary={subMenuItem.title} />
                    </ListItem>
                  );
                })}
              </List>
            </Collapse>
          </div>
        );
      })}
    </List>
  );
};

export default DrawerMenuList;
