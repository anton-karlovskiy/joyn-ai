
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: 32,
    '& > *:not(:last-child)': {
      marginBottom: 24
    }
  },
  row: {
    '& > *:not(:last-child)': {
      marginRight: 80
    }
  }
}));

const FormZoneRow = React.forwardRef(({
  children
}, ref) => {
  const classes = useStyles();

  return (
    <div
      ref={ref}
      className={classes.row}>
      {children}
    </div>
  );
});

// TODO: write a story
const FormZone = React.forwardRef(({
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
  FormZoneRow
};

export default FormZone;
