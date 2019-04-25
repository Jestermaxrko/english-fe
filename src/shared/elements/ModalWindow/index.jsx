
import React, { Fragment } from 'react';
import Modal from '@material-ui/core/Modal';

import withStyles from '@material-ui/core/styles/withStyles';
// own

const styles = ({breakpoints, color}) => ({
  paper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minHeight: 250,
    outline: 'none',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 8,
    overflow: 'hidden',
    width: 500,
    backgroundColor: color.light,
    maxHeight: '80%',
    [breakpoints.down('xs')]: {
      width: '100%',
      top: 0,
      left: 0,
      bottom: 0,
      transform: 'unset',
      borderRadius: 0,
      maxHeight: '100%',
    },
  },
});

const ModalWindow = ({ classes, children, open, onClose }) => {
  return <Fragment>
    <Modal
      onClose={onClose}
      open={open}>
      <div className={classes.paper}>
        {children}
      </div>
    </Modal>
  </Fragment>;
};

export default withStyles(styles)(ModalWindow);
