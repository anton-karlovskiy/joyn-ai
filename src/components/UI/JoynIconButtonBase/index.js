
import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';

const JoynIconButtonBase = React.forwardRef(({
  children,
  loading,
  disabled,
  color,
  ...rest
}, ref) => {
  return (
    <IconButton
      disabled={loading || disabled}
      color={color}
      ref={ref}
      {...rest}>
      {loading ? (
        <CircularProgress
          color={color === 'primary' ? 'secondary' : 'primary'}
          size={16} />
      ) : (
        <>
          {children}
        </>
      )}
    </IconButton>
  );
});

JoynIconButtonBase.propTypes = {
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  size: PropTypes.oneOf(['small', 'medium']),
  onClick: PropTypes.func
};

export default JoynIconButtonBase;
