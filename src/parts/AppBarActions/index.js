
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    '& > *:not(:last-child)': {
      marginRight: theme.spacing(1)
    }
  }
}));

const AppBarActions = React.forwardRef(({
  className,
  children,
  ...rest
}, ref) => {
  const classes = useStyles();

  return (
    <div
      ref={ref}
      className={clsx(classes.root, className)}
      {...rest}>
      {children}
    </div>
  );
});

export default AppBarActions;
