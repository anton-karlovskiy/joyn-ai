
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 3),
    height: 64
  },
  grown: {
    flexGrow: 1
  }
}));

const JoynAgGridHeader = ({
  className,
  leftPart,
  rightPart
}) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)}>
      {leftPart}
      <div className={classes.grown} />
      {rightPart}
    </div>
  );
};

export default JoynAgGridHeader;
