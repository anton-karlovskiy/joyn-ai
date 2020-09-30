
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';

import ToolbarActions from 'parts/ToolbarActions';
import CrossIconButton from 'components/JoynIconButtons/CrossIconButton';

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    minWidth: 600,
    backgroundColor: theme.palette.background.paper,
    border: `solid 1px ${theme.custom.palette.grey.main}`,
    borderRadius: 8,
    padding: theme.spacing(42/8, 54/8)
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 24,
    borderBottom: `1px solid rgba(0, 0, 0, 0.5)`
  },
  body: {
    paddingTop: 30,
    paddingBottom: 34
  },
  footer: {}
}));

const JoynModal = React.forwardRef(({
  title,
  description,
  actions,
  onClose,
  ...rest
}, ref) => {
  const classes = useStyles();

  return (
    <Modal
      ref={ref}
      onClose={onClose}
      {...rest}>
      <div
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          outline: 'none'
        }}
        className={classes.paper}>
        <div className={classes.header}>
          <Typography variant='h5'>
            {title}
          </Typography>
          <CrossIconButton onClick={onClose} />
        </div>
        <div className={classes.body}>
          <Typography variant='body1'>
            {description}
          </Typography>
        </div>
        <div className={classes.footer}>
          <ToolbarActions>
            {actions}
          </ToolbarActions>
        </div>
      </div>
    </Modal>
  );
});

export default JoynModal;
