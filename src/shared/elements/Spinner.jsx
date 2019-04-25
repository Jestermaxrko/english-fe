import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
  spinner: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

const Spinner = ({ size, classes }) => (
  <div className={classes.spinner}>
    <CircularProgress size={size}/>
  </div>
);

export default withStyles(styles)(Spinner);
