import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = ({color}) => ({
  error: {
    position: 'absolute',
    color: color.red,
    bottom: 3,
    fontSize: 12
  }
});

const InputError = ({ classes, error }) => (
  <div className={classes.error}>
    {error}
  </div>
);

export default withStyles(styles)(InputError);
