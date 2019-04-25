import React from 'react';
import Input from '../../../shared/elements/Input';
import Button from '@material-ui/core/Button';

import { Close } from '@material-ui/icons';

import withStyles from '@material-ui/core/styles/withStyles';

const styles = ({color, layout}) => ({
  container: {
    //alignItems: 'center',
    marginBottom: 10,
    ...layout.column
  },
  closeBtnContainer: {
    ...layout.row,
    justifyContent: 'flex-end'
  },
  closeBtn: {
    backgroundColor: color.grapefruit,
    color: color.white,
    padding: '2px 5px',
    borderRadius: 2,
    fontSize: 10
  },
  disabled: {
    backgroundColor: color.lightPeriwinkle
  }
});

const TranslationItem = ({name, onChange, value, onRemove, disabled, classes }) => {
  return (
    <div className={classes.container}>
      <div className={classes.closeBtnContainer}>
        <Button 
          disabled={disabled} 
          className={classes.closeBtn} 
          onClick={onRemove}
          classes={{disabled: classes.disabled}}
        > 
          <Close/>
        </Button>
      </div>
      <Input name={name} onChange={onChange} value={value}/>
    </div>
  );
};

export default withStyles(styles)(TranslationItem);
