
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    minHeight:
      `calc(100vh - ${theme.custom.layout.appBarHeight}px)`
  },
  content: {
    paddingBottom: theme.custom.layout.bottomToolbarHeight
  }
}));

// TODO: write a story
const MainZoneContent = React.forwardRef(({
  children
}, ref) => {
  const classes = useStyles();

  return (
    <div
      ref={ref}
      className={classes.content}>
      {children}
    </div>
  );
});

const MainZone = React.forwardRef(({
  children
}, ref) => {
  const classes = useStyles();

  return (
    <div
      ref={ref}
      className={classes.root}>
      {children}
    </div>
  );
});

export {
  MainZoneContent
};

export default MainZone;
