
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: theme.custom.layout.bottomToolbarHeight,
    boxShadow: '0 -1px 6px 0 rgba(0, 0, 0, 0.06)',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 3)
  }
}));

// TODO: the story should be associated with a form zone
const BottomToolbar = React.forwardRef(({
  className,
  children
}, ref) => {
  const classes = useStyles();

  return (
    <footer
      ref={ref}
      className={clsx(
        classes.root,
        className
      )}>
      {children}
    </footer>
  );
});

export default BottomToolbar;
