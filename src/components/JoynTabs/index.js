
import React from 'react';
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

/**
 * @param {*} id
 * @param {*} index
 * @return {*} description
 */
function a11yProps(id, index) {
  return {
    id: `joyn-tab-${id}-${index}`,
    'aria-controls': `joyn-tabpanel-${index}`
  };
}

const JoynTabs = React.forwardRef(({
  id,
  options,
  ...rest
}, ref) => {
  const classes = useStyles();

  return (
    <Tabs
      ref={ref}
      classes={{
        root: classes.root,
        indicator: classes.indicator
      }}
      aria-label='joyn tabs'
      {...rest}>
      {options.map((tabItem, index) => (
        <Tab
          key={tabItem.label}
          classes={{
            root: classes.tab,
            selected: classes.selected
          }}
          label={tabItem.label}
          {...a11yProps(id, index)} />
      ))}
    </Tabs>
  );
});

export default JoynTabs;
