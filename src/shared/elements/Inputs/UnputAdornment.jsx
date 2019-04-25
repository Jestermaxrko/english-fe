import React from 'react';
import MUIInputAdornment from '@material-ui/core/InputAdornment';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = () => ({
  icon: { color: '#93a4b0' },
});

const InputAdornment = ({ classes, Icon }) => {
  return <MUIInputAdornment position='start'>
    {Icon ? <Icon className={classes.icon}/> : ''}
  </MUIInputAdornment>;
};

export default withStyles(styles)(InputAdornment);
