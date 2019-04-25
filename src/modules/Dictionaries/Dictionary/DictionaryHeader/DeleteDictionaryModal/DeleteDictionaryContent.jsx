import React from 'react';
import { Mutation } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import gql from 'graphql-tag';

import ModalFooter from '../../../../../shared/elements/ModalWindow/ModalFooter';

const DELETE_MUTATION = gql`
mutation deleteDictionary($id: String!) {
  deleteDictionary(id: $id) {
    id
  }
}
`;
const DICTIONARIES_QUERY = gql`{
  dictionaries {
    name
    from
    to
    id
  }
}
`;

const DeleteDictionaryContent = ({ dictionaryId, history, onClose }) => {
  const updateQuery = (store, { data: { deleteDictionary } }) => {
    const { dictionaries } = store.readQuery({ query: DICTIONARIES_QUERY });
    const newArray = dictionaries.filter(item => item.id !== deleteDictionary.id);
    store.writeQuery({ query: DICTIONARIES_QUERY, data: { dictionaries: newArray } });
    history.push('/dictionaries');
  };

  return (
    <Mutation
      mutation={DELETE_MUTATION}
      variables={{ id: dictionaryId }}
      update={updateQuery}>
      {(handleDelete, { loading }) => (
        <div className='modal--form'>
          <div className='modal--content flex-column flex-justify-center'>
            Do you really want to delete this dictionary ?
          </div>
          <ModalFooter onClose={onClose} loading={loading} onSubmit={handleDelete} />
        </div>
      )}
    </Mutation>
  );
};

export default withRouter(DeleteDictionaryContent);
