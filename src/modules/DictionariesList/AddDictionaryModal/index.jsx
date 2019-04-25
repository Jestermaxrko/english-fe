import React, { Fragment } from 'react';

import { withRouter } from 'react-router-dom';
import ModalWindow from '../../../shared/elements/ModalWindow';
import ModalHeader from '../../../shared/elements/ModalWindow/ModalHeader';

import AddDictionaryContent from './AddDictionaryContent';

const AddDictionaryModal = ({ history }) => {
  const onClose = () => history.push('/dictionaries');
  return (
    <Fragment>
      <ModalWindow open={true} onClose={onClose}>
        <ModalHeader title='Add Dictionary' onClose={onClose} />
        <AddDictionaryContent onClose={onClose} />
      </ModalWindow>
    </Fragment>
  );
};

export default withRouter(AddDictionaryModal);
