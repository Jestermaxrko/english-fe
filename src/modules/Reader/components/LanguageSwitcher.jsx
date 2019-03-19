import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import SwapHoriz from '@material-ui/icons/SwapHoriz';

import withStyles from '@material-ui/core/styles/withStyles';

const styles = {
  root: {
    position: 'absolute',
    left: 'calc(50% - 24px)',
    top: 'calc(50% - 24px)'
  }
};

const LanguageSwitcher = ({classes, onClick }) => {
  return <IconButton classes={classes} onClick={onClick}><SwapHoriz/></IconButton>;
};

export default withStyles(styles)(LanguageSwitcher);