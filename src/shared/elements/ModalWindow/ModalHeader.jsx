import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Close } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';

const styles = ({ color }) => ({
  container: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: color.primary,
    color: color.light,
    padding: 10,

    boxSizing: 'border-box'
  },
  title: {
    textTranform: 'uppercase'
  },
  button: {
    padding: 5,
    color: color.light
  }
});

const ModalHeader = ({ classes, onClose, title }) => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>{title}</div>
      <IconButton onClick={onClose} className={classes.button}>
        <Close />
      </IconButton>
    </div>
  );
};

export default withStyles(styles)(ModalHeader);
