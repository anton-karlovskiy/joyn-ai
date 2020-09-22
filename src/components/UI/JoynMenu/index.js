
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  joynMenuPaper: {
    boxShadow: theme.custom.shadows[0],
    border: `solid 0.5px ${theme.palette.text.hint}`,
    padding: theme.spacing(0, 2)
  },
  joynMenuItemRoot: {
    color: theme.palette.primary.main,
    paddingLeft: 0,
    paddingRight: 0,
    '&:not(:last-child)': {
      borderBottom: `0.5px solid ${theme.palette.text.hint}`
    }
  },
  joynListItemIconRoot: {
    minWidth: 40
  }
}));

const JoynListItemIcon = React.forwardRef(({
  classes: propClasses = {},
  ...rest
}, ref) => {
  const classes = useStyles();
  const {
    root: rootPropClass,
    ...restPropClasses
  } = propClasses;

  return (
    <ListItemIcon
      ref={ref}
      classes={{
        root: clsx(classes.joynListItemIconRoot, rootPropClass),
        ...restPropClasses
      }}
      {...rest} />
  );
});

const JoynListItemText = React.forwardRef(({
  classes: propClasses,
  children,
  ...rest
}, ref) => {
  return (
    <ListItemText
      ref={ref}
      disableTypography
      {...rest}>
      <Typography variant='subtitle4'>
        {children}
      </Typography>
    </ListItemText>
  );
});

const JoynMenuItem = React.forwardRef(({
  icon,
  text,
  classes: propClasses = {},
  children,
  ...rest
}, ref) => {
  const classes = useStyles();
  const {
    root: rootPropClass,
    ...restPropClasses
  } = propClasses;

  return (
    <MenuItem
      ref={ref}
      classes={{
        root: clsx(classes.joynMenuItemRoot, rootPropClass),
        ...restPropClasses
      }}
      {...rest}>
      {children || (
        <>
          {icon && (
            <JoynListItemIcon>
              {icon}
            </JoynListItemIcon>
          )}
          {text && (
            <JoynListItemText>
              {text}
            </JoynListItemText>
          )}
        </>
      )}
    </MenuItem>
  );
});

const JoynMenu = React.forwardRef(({
  classes: propClasses = {},
  anchorOrigin = {
    vertical: 'bottom',
    horizontal: 'center'
  },
  transformOrigin = {
    vertical: 'top',
    horizontal: 'center'
  },
  ...rest
}, ref) => {
  const classes = useStyles();
  const {
    paper: paperPropClass,
    ...restPropClasses
  } = propClasses;

  return (
    <Menu
      ref={ref}
      keepMounted
      elevation={0}
      getContentAnchorEl={null}
      classes={{
        paper: clsx(classes.joynMenuPaper, paperPropClass),
        ...restPropClasses
      }}
      anchorOrigin={anchorOrigin}
      transformOrigin={transformOrigin}
      {...rest} />
  );
});

export {
  JoynMenuItem,
  JoynListItemIcon,
  JoynListItemText
};

export default JoynMenu;
