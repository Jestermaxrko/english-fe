import React from 'react';
import IconButton from '@material-ui/core/IconButton';

import { Add } from '@material-ui/icons';

import withStyles from '@material-ui/core/styles/withStyles';

const styles = ({color, layout}) => ({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: `1px solid ${color.lightPeriwinkle}`,
    marginBottom: 25,
    width: '100%',
    ...layout.row,
  },
  button: {
    padding: 5,
    borderRadius: 0,
    backgroundColor: 'rgba(0, 255, 0, 0.50)',
    '&:hover': {
      backgroundColor: 'rgba(0, 255, 0, 0.50)'
    }
  },
});

const TranslationHeader = ({ onAdd, classes }) => (
  <div className={classes.container}>
    Translations               
    <IconButton
      classes={{root: classes.button}}
      onClick={onAdd}> 
      <Add/> 
    </IconButton>
  </div>
);

export default withStyles(styles)(TranslationHeader);
