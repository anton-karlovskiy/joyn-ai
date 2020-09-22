import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import JoynInputBase from 'components/UI/JoynInputBase';
import JoynIconButtonBase from 'components/UI/JoynIconButtonBase';
import { ReactComponent as PlusIcon } from 'assets/icons/svgs/plus.svg';
import { ReactComponent as MinusIcon } from 'assets/icons/svgs/minus.svg';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',

    '& > button:first-child': {
      borderTopLeftRadius: 4,
      borderTopRightRadius: 0,
      borderBottomLeftRadius: 4,
      borderBottomRightRadius: 0
    },
    '& > button:last-child': {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 4,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 4
    }
  },
  iconButton: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.text.hint,
    '&:hover': {
      backgroundColor: theme.palette.common.white,
      borderColor: theme.palette.primary.main
    },
    '&:active': {
      backgroundColor: theme.palette.primary.light
    }
  },
  inputRoot: props => ({
    width: 64, // TODO: hardcoded
    boxSizing: 'border-box',
    borderRadius: props.disabled ? 4 : 0,
    borderLeftWidth: 0,
    borderTopWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: props.disabled ? theme.palette.text.lightest : theme.custom.palette.grey.hint,
    color: theme.palette.text.secondary
  }),
  input: {
    '&:[type=number]': {
      '-moz-appearance': 'textfield'
    },
    '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0
    }

  },
  disabled: {
    color: theme.palette.text.secondary,
    borderLeftWidth: '1px !important',
    borderRightWidth: '1px !important'
  },
  focused: {
    borderLeftWidth: '1px !important',
    borderRightWidth: '1px !important'
  }
}));

const Counter = ({ reverse, name, handleChange, value, max, min, disabled, ...rest }) => {
  const inputRef = useRef();
  const classes = useStyles({ disabled });


  const handleClickAdd = () => {
    const num = inputRef.current.value ? Number(inputRef.current.value) : 0;
    if (num === max) {
      return;
    }
    handleChange(num + 1);
  };

  const handleClickSubtract = () => {
    const num = inputRef.current.value ? Number(inputRef.current.value) : 0;
    if (num === min) {
      return;
    }
    handleChange(num - 1);
  };
  return (
    <div className={classes.root}>
      {!disabled &&
      <JoynIconButtonBase
        classes={{ root: classes.iconButton }}
        size='small'
        color='primary'
        onClick={handleClickAdd}>
        <PlusIcon />
      </JoynIconButtonBase>}
      <JoynInputBase
        inputRef={inputRef}
        type='number'
        classes={{ root: classes.inputRoot, input: classes.input, disabled: classes.disabled, focused: classes.focused }}
        name={name}
        onChange={e => handleChange(e.target.value)}
        value={value}
        max={max}
        min={min}
        disabled={disabled}
        {...rest} />
      {!disabled &&
      <JoynIconButtonBase
        classes={{ root: classes.iconButton }}
        size='small'
        color='primary'
        onClick={handleClickSubtract}>
        <MinusIcon />
      </JoynIconButtonBase>}
    </div>
  );
};

Counter.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number,
  max: PropTypes.number,
  min: PropTypes.number,
  disabled: PropTypes.bool,
  handleChange: PropTypes.func
};

Counter.defaultProps = {
  max: Number.POSITIVE_INFINITY,
  min: Number.NEGATIVE_INFINITY,
  value: 0,
  disabled: false,
  handleChange: () => {}
};

export default Counter;
