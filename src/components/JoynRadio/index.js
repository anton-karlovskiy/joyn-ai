import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import PropTypes from 'prop-types';

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
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
      border: 'none'
    },
    'input:hover ~ &': {
      border: `1px solid ${theme.palette.primary.light}` // TODO: hardcoded
    },
    'input:disabled ~ &': {
      border: `1px solid ${theme.custom.palette.grey.lightest}`
    }
  },
  checkedIcon: {
    boxSizing: 'border-box',
    border: '1px solid #424f62',
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

const StyledRadio = props => {
  const classes = useRadioStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color='default'
      checkedIcon={<span className={clsx(classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props} />
  );
};

const useStyles = makeStyles(theme => ({
  group: props=> ({
    flexDirection: props.isInline ? 'row' : 'column'
  }),
  label: {
    marginRight: theme.spacing(2)
  },
  disabled: {
    '& .Mui-disabled': {
      color: theme.palette.text.primary
    }
  },
  formLabel: {
    ...theme.typography.body2
  }
}));

const JoynRadio = ({ label, name, options, handleChange, value, isInline, className, ...rest }) => {
  const classes = useStyles({ isInline });
  return (
    <div className={className}>
      {/* TODO: create global label component for all types of inputs */}
      <FormLabel
        component='legend'
        className={classes.formLabel}>{label}
      </FormLabel>
      <RadioGroup
        defaultValue='female'
        aria-label={name}
        name={name}
        onChange={handleChange}
        classes={{ root: classes.group }}
        value={value}
        {...rest}>
        {options.map(item => {
          const { handleChange: handleRadioChange, ...restItems } = item;
          return <FormControlLabel
            classes={{ disabled: classes.disabled, label: classes.label }}
            key={item.value}
            control={<StyledRadio />}
            onChange={handleRadioChange}
            {...restItems} />;
        })}
      </RadioGroup>
    </div>
  );
};

JoynRadio.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({})),
  handleChange: PropTypes.func,
  isInline: PropTypes.bool
};

JoynRadio.defaultProps = {
  handleChange: () => {},
  isInline: false
};

export default JoynRadio;
