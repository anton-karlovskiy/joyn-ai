
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
// import CardContent from '@material-ui/core/CardContent';
import MenuDotIconButton from 'components/JoynIconButtons/MenuDotIconButton';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1.5),
    width: 240,
    height: 120,
    borderRadius: 8,
    border: `1px solid ${theme.palette.text.hint}`,
    padding: theme.spacing(2),
    cursor: 'default',
    opacity: 1
  },
  disabled: {
    pointerEvents: 'none',
    opacity: .5
  },
  headerRoot: {
    padding: 0
  },
  subheader: {
    color: theme.palette.info.main,
    fontSize: 12
  },
  action: {
    marginTop: theme.spacing(0),
    marginRight: theme.spacing(0)
  }
}));

const Folder = ({
  title,
  subheader,
  menu: Menu,
  disabled
}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isOpen = Boolean(anchorEl);

  return (
    <Card
      classes={{
        root: clsx(
          classes.root,
          { [classes.disabled]: disabled }
        )
      }}
      elevation={0}>
      <CardHeader
        action={
          <MenuDotIconButton
            aria-label='menu'
            onClick={handleClick}
            isActive={isOpen} />
        }
        title={title}
        subheader={subheader}
        classes={{
          root: classes.headerRoot,
          subheader: classes.subheader,
          action: classes.action
        }} />
      {/* <CardContent></CardContent> */}
      {Menu && (
        <Menu
          anchorEl={anchorEl}
          handleClose={handleClose}
          isOpen={isOpen} />
      )}
    </Card>
  );
};

export default Folder;
