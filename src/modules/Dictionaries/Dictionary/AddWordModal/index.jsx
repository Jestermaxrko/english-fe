import React, { Fragment } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Add } from '@material-ui/icons';

import { useModal } from '../../../../shared/elements/ModalWindow/useModal';
import ModalWindow from '../../../../shared/elements/ModalWindow';
import ModalHeader from '../../../../shared/elements/ModalWindow/ModalHeader';

import AddWordContent from './AddWordContent';
import { Button, Fab } from '@material-ui/core';

const styles = ({ breakpoints, color }) => ({
  button: {
    padding: 5,
    borderRadius: 0,
    backgroundColor: color.darkGreen,
    '&:hover': {
      backgroundColor: 'rgba(0, 255, 0, 0.50)'
    },

    [breakpoints.down('xs')]: {
      display: 'none'
    },
  },
  fabButton: {
    display: 'none',
    [breakpoints.down('xs')]: {
      display: 'flex',
      position: 'absolute',
      bottom: 60,
      left: 5,
      backgroundColor: color.darkGreen,
      zIndex: 2
    },
  },
  btnContainer: {
    width: 28,
    height: 28,
    marginRight: 5,
    position: 'relative',
    [breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  btn: {
    height: 28,
    backgroundColor: color.lightGreen,
    color: color.green,
    borderRadius: 28,
    position: 'absolute',
    right: 0,
    padding: '0px 2px',
    width: 100,
  },
  label: {
    color: color.green,
    fontWeight: 600
  },
  fabLabel: {
    color: color.light
  }

});

const AddDictionaryModal = ({ classes, dictionaryId, from }) => {
  const [open, handleAction] = useModal();

  return (
    <Fragment>

      <div className={classes.btnContainer}>
        <Button
          varaint='contained'
          onClick={handleAction}
          classes={{
            root: classes.btn,
            label: classes.label
          }}>
          + Add Word
        </Button>
      </div>

      <Fab
        onClick={handleAction}
        classes={{ root: classes.fabButton, label: classes.fabLabel }}>
        <Add />
      </Fab>

      <ModalWindow open={open} onClose={handleAction}>
        <ModalHeader title='Add Word' onClose={handleAction} />
        <AddWordContent onClose={handleAction} dictionaryId={dictionaryId} from={from}/>
      </ModalWindow>

    </Fragment>
  );
};

export default withStyles(styles)(AddDictionaryModal);
