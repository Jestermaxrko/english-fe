import React  from 'react';
import Input from '../../../../shared/elements/Inputs/OutlinedInput';

import IconButton from '@material-ui/core/IconButton';

import { Close } from '@material-ui/icons';

import withStyles from '@material-ui/core/styles/withStyles';

const styles = ({ color, layout }) => ({
  closeBtnContainer: {
    ...layout.row,
    justifyContent: 'flex-end'
  },
  closeBtn: {
    position: 'absolute',
    right: 0,
    top: -12,
    backgroundColor: color.red,
    padding: '2px 5px',
    borderRadius: 0,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    fontSize: 10,
    zIndex: 1,
    '&:hover': {
      backgroundColor: color.red
    }
  },
  icon: {
    color: color.white,
  },
  disabled: {
    backgroundColor: color.lightPeriwinkle
  }
});

const TranslationItem = ({ name, onRemove, disabled, classes }) => {
  return (
    <div className='full-width relative'>
      <IconButton
        disabled={disabled}
        onClick={onRemove}
        classes={{
          disabled: classes.disabled,
          root: classes.closeBtn,
        }}>
        <Close className={classes.icon}/>
      </IconButton>
      <Input name={name} />
    </div>

  );
};

export default withStyles(styles)(TranslationItem);
