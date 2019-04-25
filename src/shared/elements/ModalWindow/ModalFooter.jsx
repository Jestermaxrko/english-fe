import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = ({ color }) => ({
  container: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: color.grey,
    color: color.light,
    padding: 10,
    position: 'relative',
    boxSizing: 'border-box'
  },
  title: {
    textTranform: 'uppercase'
  },
  button: {
    padding: 5,
    color: color.light
  },
  loading: {
    position: 'absolute',
    top: -2,
    left: 0,
    width: '100%'
  }
});

const ModalFooter = ({ classes, onClose, onSubmit, disabled, loading }) => {
  return (
    <div className={classes.container}>
      {loading && <LinearProgress className={classes.loading} />}
      <Button onClick={onClose}>Cancel</Button>
      <Button onClick={onSubmit} disabled={disabled} color='primary' variant='contained'>Save</Button>
    </div>
  );
};

export default withStyles(styles)(ModalFooter);
