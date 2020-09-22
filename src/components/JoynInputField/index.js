
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

import JoynInputBase from 'components/UI/JoynInputBase';

const useStyles = makeStyles(theme => ({
  typeScale: {
    ...theme.typography.body2
  },
  inputLabelRoot: {
    color: theme.palette.text.primary,
    transform: 'translate(0, 1.5px) scale(1)'
  },
  // TODO: according to convention, it's not necessary
  // inputLabelError: {
  //   color: 'unset !important'
  // }
  inputLabelAsterisk: {
    color: theme.palette.error.main
  }
}));

const JoynInputField = ({
  id,
  label,
  required,
  error,
  helperText,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <FormControl
      required={required}
      error={error}>
      {label && (
        <InputLabel
          shrink
          classes={{
            root: clsx(classes.inputLabelRoot, classes.typeScale),
            // error: classes.inputLabelError
            asterisk: classes.inputLabelAsterisk
          }}
          htmlFor={id}>
          {label}
        </InputLabel>
      )}
      <JoynInputBase
        id={id}
        hasLabel={!!label}
        {...rest} />
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};

export default JoynInputField;
