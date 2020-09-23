
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles(theme => ({
  inputRoot: {
    maxHeight: 32,
    boxSizing: 'border-box',
    color: theme.palette.text.secondary,
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${theme.palette.text.hint}`,
    '&:focus-within': {
      borderColor: theme.palette.primary.main
    },
    transition: theme.transitions.create('border-color')
  },
  inputRootReadOnly: {
    borderColor: `${theme.custom.palette.grey.lightest} !important`
  },
  inputRootLabelSpace: {
    'label + &': {
      marginTop: theme.spacing(18/8)
    }
  },
  inputRootError: {
    borderColor: `${theme.palette.error.main} !important`
  },
  inputInput: {
    padding: theme.spacing(1, 12/8)
  },
  inputAdornmentRoot: {
    color: theme.palette.text.hint
  },
  inputAdornmentPositionStart: {
    marginLeft: theme.spacing(12/8),
    marginRight: 0
  },
  inputAdornmentPositionEnd: {
    marginLeft: 0
  },
  typeScale: {
    ...theme.typography.body2
  }
}));

const JoynInputAdornment = React.forwardRef((props, ref) => {
  const classes = useStyles();

  return (
    <InputAdornment
      ref={ref}
      classes={{
        root: classes.inputAdornmentRoot,
        positionStart: classes.inputAdornmentPositionStart,
        positionEnd: classes.inputAdornmentPositionEnd
      }}
      disablePointerEvents
      {...props} />
  );
});

const JoynInputBase = React.forwardRef(({
  hasLabel,
  classes: propClasses = {},
  startAdornment: propStartAdornment,
  endAdornment: propEndAdornment,
  readOnly,
  ...rest
}, ref) => {
  const classes = useStyles();
  const {
    root: inputRootPropClass,
    input: inputInputClass,
    ...restPropClasses
  } = propClasses;

  return (
    <InputBase
      ref={ref}
      startAdornment={
        propStartAdornment && (
          <JoynInputAdornment position='start'>
            {propStartAdornment}
          </JoynInputAdornment>
        )
      }
      endAdornment={
        propEndAdornment && (
          <JoynInputAdornment position='end'>
            {propEndAdornment}
          </JoynInputAdornment>
        )
      }
      classes={{
        root: clsx(
          classes.inputRoot,
          classes.typeScale,
          { [classes.inputRootReadOnly]: readOnly },
          { [classes.inputRootLabelSpace]: hasLabel },
          inputRootPropClass
        ),
        input: clsx(
          classes.inputInput,
          inputInputClass
        ),
        error: classes.inputRootError,
        ...restPropClasses
      }}
      {...rest} />
  );
});

export default JoynInputBase;
