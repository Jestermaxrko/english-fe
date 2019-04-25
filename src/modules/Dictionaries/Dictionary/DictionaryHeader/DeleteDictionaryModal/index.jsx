import React  from 'react';

import {  withRouter } from 'react-router-dom';

import ModalWindow from '../../../../../shared/elements/ModalWindow';
import ModalHeader from '../../../../../shared/elements/ModalWindow/ModalHeader';

import DeleteDictionaryContent from './DeleteDictionaryContent';

const DeleteDictionaryModal = ({ match, history }) => {

  const onClose = () => {
    history.push(`/dictionaries/${match.params.id}/words`);
  };

  return (
    <ModalWindow open={true} onClose={onClose}>
      <ModalHeader title='Delete Dictionary' onClose={onClose} />
      <DeleteDictionaryContent onClose={onClose} dictionaryId={match.params.id}/>
    </ModalWindow>
  );
};

export default withRouter(DeleteDictionaryModal);
