import React from 'react';
import Button from '@material-ui/core/Button';

import { Add } from '@material-ui/icons';

import withStyles from '@material-ui/core/styles/withStyles';

const styles = ({color, layout}) => ({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
    borderBottom: `2px solid ${color.lightPeriwinkle}`,
    margin: '10px 0',
    ...layout.row
  },
  button: {
    backgroundColor: color.green,
    marginLeft: 5,
    color: color.white,
    '&:hover': {
      backgroundColor: color.darkGreen
    }
  },
});

const TranslationHeader = ({ onAdd, classes }) => (
  <div className={classes.container}>
    Translation                
    <Button
      classes={{root: classes.button}}
      onClick={onAdd}> 
      <Add/> 
    </Button>
  </div>
);

export default withStyles(styles)(TranslationHeader);
