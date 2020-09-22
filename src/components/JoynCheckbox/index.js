import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';

const useCheckboxStyles = makeStyles( theme => ({
  root: {
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  icon: {
    boxSizing: 'border-box',
    borderRadius: 2,
    width: 16,
    height: 16,
    border: `1px solid ${theme.palette.text.hint}`,
    backgroundColor: theme.palette.common.white, // TODO: hardcoded
    '$root.Mui-focusVisible &': {

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
    width: 16,
    height: 16,
    borderRadius: 2,
    border: `1px solid ${theme.palette.primary.main}`,
    '&:before': {
      display: 'block',
      width: 11,
      height: 11,
      borderRadius: 2,
      backgroundColor: theme.palette.primary.light,
      marginLeft: 1,
      marginTop: 1,
      content: '""'
    },
    'input:disabled ~ &': {
      border: `1px solid ${theme.palette.action.disabled}`,
      '&:before': {
      }
    }
  }
}));

const StyledCheckbox = props => {
  const classes = useCheckboxStyles();

  return (
    <Checkbox
      className={classes.root}
      disableRipple
      color='default'
      checkedIcon={<span className={classes.checkedIcon} />}
      icon={<span className={classes.icon} />}
      inputProps={{ 'aria-label': 'decorative checkbox' }}
      {...props} />
  );
};

const useStyles = makeStyles(theme => ({
  label: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(2)
  },
  group: props => ({
    flexDirection: props.isInline ? 'row' : 'column'
  }),
  formLabel: {
    ...theme.typography.body2
  },
  disabled: {
    '& .Mui-disabled': {
      color: theme.palette.text.primary
    }
  }
}));

const JoynCheckbox = ({ options, name, values, label, handleChange, isInline, className }) => {
  const classes = useStyles({ isInline });
  return (
    <div className={className}>
      {/* TODO: create global label component for all types of inputs */}
      <FormLabel className={classes.formLabel}>{label}</FormLabel>
      <FormGroup className={classes.group}>
        {options.map(item => {
          const { handleChange: handleCheckboxChange, ...restItems } = item;
          return (
            <FormControlLabel
              key={item.value}
              control={<StyledCheckbox onChange={handleCheckboxChange} />}
              checked={values.indexOf(item.value) !== -1}
              onChange={() => {
                const newValues = [...values];
                if (newValues.indexOf(item.value) === -1) {
                  newValues.push(item.value);
                  handleChange(newValues);
                } else {
                // Filter the array to deselect option
                  handleChange(newValues.filter(val => val !== item.value));
                }
              }}
              classes={{ label: classes.label, disabled: classes.disabled }}
              name={name}
              {...restItems} />
          );
        })}

      </FormGroup>
    </div>
  );
};

JoynCheckbox.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string),
  isInline: PropTypes.bool,
  handleChange: PropTypes.func,
  name: PropTypes.string
};

JoynCheckbox.defaultProps = {
  values: [],
  isInline: false,
  handleChange: () => {}
};

export default JoynCheckbox;

