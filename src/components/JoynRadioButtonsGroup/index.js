
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import PropTypes from 'prop-types';

// TODO: double-check
const useRadioStyles = makeStyles(theme => ({
  root: {
    '&:hover': {
      backgroundColor: 'transparent'
    },
    marginRight: theme.spacing(1)
  },
  icon: {
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxSizing: 'border-box',
    border: `1px solid ${theme.palette.text.hint}`,
    '$root.Mui-focusVisible &': {
      // TODO: hardcoded
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
      border: 'none'
    },
    'input:hover ~ &': {
      border: `1px solid ${theme.palette.primary.light}`
    },
    'input:disabled ~ &': {
      border: `1px solid ${theme.custom.palette.grey.lightest}`
    }
  },
  checkedIcon: {
    boxSizing: 'border-box',
    border: `1px solid ${theme.palette.primary.main}`,
    width: 16,
    height: 16,
    borderRadius: '50%',
    '&:before': {
      display: 'block',
      width: 14,
      height: 14,
      backgroundImage:
        `radial-gradient(
          circle at 7px 7px,
          ${theme.palette.primary.light},
          ${theme.palette.primary.light} 45%,
          transparent 0%
        )`,
      content: '""'
    },
    'input:disabled ~ &': {
      border: `1px solid ${theme.palette.action.disabled}`,
      '&:before': {
        backgroundImage:
          `radial-gradient(
            circle at 7px 7px,
            ${theme.palette.primary.lightest},${theme.palette.primary.lightest} 45%,
            transparent 0%
          )`
      }
    }
  }
}));

const JoynRadio = props => {
  const classes = useRadioStyles();

  return (
    <Radio
      color='default'
      className={classes.root}
      disableRipple
      checkedIcon={
        <span className={clsx(classes.checkedIcon)} />
      }
      icon={
        <span className={classes.icon} />
      }
      {...props} />
  );
};

const useStyles = makeStyles(theme => ({
  label: {
    color: theme.palette.text.primary,
    ...theme.typography.body2,
    marginRight: theme.spacing(2)
  },
  formLabel: {
    color: theme.palette.text.primary,
    ...theme.typography.body2
  }
}));

const JoynRadioButtonsGroup = ({
  label,
  name,
  options,
  value,
  onChange,
  row,
  className,
  disabled,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <FormControl
      className={className}
      disabled={disabled}
      component='fieldset'>
      <FormLabel
        component='legend'
        className={classes.formLabel}>
        {label}
      </FormLabel>
      <RadioGroup
        row={row}
        name={name}
        aria-label={name}
        value={value}
        onChange={onChange}
        {...rest}>
        {options.map(option => (
          <FormControlLabel
            key={option.label}
            classes={{
              label: classes.label
            }}
            disabled={option.disabled ?? false}
            label={option.label}
            value={option.value}
            control={<JoynRadio />} />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

JoynRadioButtonsGroup.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({}))
};

export default JoynRadioButtonsGroup;
