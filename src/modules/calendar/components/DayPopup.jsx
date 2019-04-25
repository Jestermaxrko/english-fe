import React, { Fragment } from 'react';

import withStyles from '@material-ui/core/styles/withStyles';

import Day from './Day';
import Modal from '../../../shared/elements/ModalWindow/index';
import { useModal } from '../../../shared/elements/ModalWindow/useModal';

import Reader from '../../Reader';

const styles = () => ({

});

const DayPopover = ({ date, words, count }) => {

  const [open, handleAction] = useModal();

  return (
    <Fragment>
      <Day onClick={handleAction} date={date} count={count} />
      <Modal
        open={open}
        onOpen={handleAction}
        onClose={handleAction}
      >
        <Reader words={words || []}/>
      </Modal>
    </Fragment>
  );
};

export default withStyles(styles)(DayPopover);
