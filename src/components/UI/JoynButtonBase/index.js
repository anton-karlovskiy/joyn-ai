
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import clsx from 'clsx';

import ButtonLink from 'components/UI/ButtonLink';

/**
 * TODO:
 * Spacing (padding) is not defined in the design.
 * Button size is not defined in the design.
 */
const useStyles = makeStyles(theme => ({
  root: {
    textTransform: 'none',
    '&:disabled': {
      backgroundColor: theme.palette.action.disabledBackground
    }
  },
  loadingSpinner: {
    margin: theme.spacing(0, .5)
  }
}));

const JoynButtonBase = React.forwardRef(({
  className,
  variant,
  color,
  loading,
  disabled,
  href,
  ...rest
}, ref) => {
  const classes = useStyles();

  return (
    <Button
      className={clsx(
        classes.root,
        { [classes.containedButton]: variant === 'contained' },
        className
      )}
      color={color}
      variant={variant}
      disabled={loading || disabled}
      ref={ref}
      component={href ? ButtonLink : 'button'}
      href={href}
      endIcon={loading && (
        <CircularProgress
          color={color === 'primary' ? 'secondary' : 'primary'}
          size={16}
          className={classes.loadingSpinner} />
      )}
      {...rest} />
  );
});

JoynButtonBase.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.string,
  // TODO: hardcoded
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node
};

export default JoynButtonBase;
