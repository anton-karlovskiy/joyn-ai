
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const TAB_HEIGHT = 32;

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.primary.main,
    minHeight: TAB_HEIGHT
  },
  indicator: {
    display: 'none'
  },
  tab: {
    textTransform: 'none',
    backgroundColor: theme.custom.palette.grey.lightest,
    maxWidth: 130,
    minHeight: TAB_HEIGHT,
    // TODO: UX improvement with https://material-ui.com/components/dividers/
    borderRight: '1px solid currentColor',
    '&:last-child': {
      borderRight: 'none'
    }
  },
  selected: {
    backgroundColor: theme.palette.primary.light
  }
}));

const JoynTab = ({
  classes: propClasses = {},
  ...rest
}) => {
  const {
    root: tabRootClass,
    selected: tabSelectedClass,
    ...restPropClasses
  } = propClasses;
  const classes = useStyles();

  return (
    <Tab
      classes={{
        root: clsx(classes.tab, tabRootClass),
        selected: clsx(classes.selected, tabSelectedClass),
        ...restPropClasses
      }}
      {...rest} />
  );
};

const JoynTabs = React.forwardRef(({
  classes: propClasses = {},
  ...rest
}, ref) => {
  const {
    root: tabsRootClass,
    indicator: tabsIndicatorClass,
    ...restPropClasses
  } = propClasses;
  const classes = useStyles();

  return (
    <Tabs
      ref={ref}
      classes={{
        root: clsx(classes.root, tabsRootClass),
        indicator: clsx(classes.indicator, tabsIndicatorClass),
        ...restPropClasses
      }}
      aria-label='joyn tabs'
      {...rest} />
  );
});

export {
  JoynTab
};

export default JoynTabs;
