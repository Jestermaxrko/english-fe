import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { useModal } from '../../../shared/elements/ModalWindow/useModal';
import withStyles from '@material-ui/core/styles/withStyles';

import { BookOutlined } from '@material-ui/icons';

import IconButton from '@material-ui/core/IconButton';
import DictionariesList from '../../DictionariesList';

const styles = ({ color, breakpoints }) => ({
  drawerButton: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    cursor: 'pointer',
    display: 'none',
    [breakpoints.down('xs')]: {
      width: 'auto',
      display: 'flex'
    },
  },
  button: {
    padding: 3,
    height: 30,
    width: 30,
    marginRight: 5,
    backgroundColor: color.lightBlue,
  },
  label: {
    color: color.blue + '!important',

  }
});

const DictionaryDrawer = ({ classes }) => {
  const [open, handleAction] = useModal();
  return (
    <div className={classes.drawerButton} onClick={handleAction}>
      <IconButton
        classes={{ root: classes.button, label: classes.label }}
        
      >
        <BookOutlined />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={handleAction}>
        <div
          tabIndex={0}
          role="button">
          <DictionariesList onClose={handleAction} />
        </div>
      </Drawer>
    </div>
  );

};

export default withStyles(styles)(DictionaryDrawer);
