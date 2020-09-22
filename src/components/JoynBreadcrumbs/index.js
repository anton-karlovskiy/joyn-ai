
import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: {},
  icon: {
    marginRight: theme.spacing(1)
  },
  separator: {
    color: theme.palette.text.primary,
    margin: 0
  },
  defaultSeparator: {
    width: 1,
    height: 13,
    // TODO: Should be based on designed typography
    fontSize: 16,
    fontStretch: 'normal',
    lineHeight: 1.06,
    letterSpacing: 'normal',
    textAlign: 'left',
    backgroundColor: theme.palette.primary.main
  }
}));

const CustomLink = withStyles(theme => ({
  root: {
    display: 'flex',
    color: theme.palette.text.primary,
    // TODO: should be based on designed typography
    fontSize: 16,
    alignItems: 'center',
    margin: theme.spacing(0, 2)
  }
}))(props => <Link {...props} />);

const JoynBreadcrumbs = ({ routes = [], separator, children, ...rest }) => {
  const classes = useStyles();

  const renderIcon = (icon, props ) => React.cloneElement(icon, { ...props });

  return (
    <Breadcrumbs
      {...rest}
      aria-label='breadcrumb'
      classes={{
        root: classes.root,
        separator: classes.separator
      }}
      separator={separator || <span className={classes.defaultSeparator} />}>
      {routes?.length > 0 ? routes.map(item => (
        <CustomLink
          {...item}
          key={item.title}
          color='inherit'>
          {item.icon ? renderIcon(item.icon, { className: classes.icon }) : null}
          {item.title}
        </CustomLink>
      )) : children}
    </Breadcrumbs>
  );
};

JoynBreadcrumbs.Link = CustomLink;

JoynBreadcrumbs.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape({})),
  separator: PropTypes.node
};

export default JoynBreadcrumbs;
