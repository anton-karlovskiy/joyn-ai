
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 3),
    height: theme.custom.layout.topToolbarHeight,
    backgroundColor: theme.palette.primary.lighter
  },
  grown: {
    flexGrow: 1
  }
}));

const TopToolbar = ({
  className,
  leftPart,
  rightPart
}) => {
  const classes = useStyles();

  return (
    <header className={clsx(classes.root, className)}>
      {leftPart}
      <div className={classes.grown} />
      {rightPart}
    </header>
  );
};

export default TopToolbar;
