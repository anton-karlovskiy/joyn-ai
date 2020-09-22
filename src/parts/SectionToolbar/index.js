
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 3),
    height: theme.custom.layout.sectionToolbarHeight,
    backgroundColor: theme.palette.primary.lighter
  },
  grown: {
    flexGrow: 1
  }
}));

const SectionToolbar = ({
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

export default SectionToolbar;
