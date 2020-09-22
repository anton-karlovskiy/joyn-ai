
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import JoynAppBar from 'parts/JoynAppBar';
import JoynDrawer from 'parts/JoynDrawer';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    minHeight: theme.custom.layout.appBarHeight
  },
  content: {
    flexGrow: 1
  }
}));

const Layout = React.forwardRef(({
  children
}, ref) => {
  const classes = useStyles();
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const isDrawerOpenRef = React.useRef(isDrawerOpen);
  React.useEffect(() => {
    isDrawerOpenRef.current = isDrawerOpen;
  });
  const handleDrawerOpen = React.useCallback(() => {
    if (!isDrawerOpenRef.current) {
      setIsDrawerOpen(true);
    }
  }, [setIsDrawerOpen]);
  const handleDrawerClose = () => {
    if (isDrawerOpen) {
      setIsDrawerOpen(false);
    }
  };

  return (
    <div
      ref={ref}
      className={classes.root}>
      <JoynAppBar
        isDrawerOpen={isDrawerOpen}
        handleDrawerOpen={handleDrawerOpen} />
      <JoynDrawer
        isOpen={isDrawerOpen}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
});

export default Layout;
