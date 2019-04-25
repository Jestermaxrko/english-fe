import React from 'react';
import { withRouter } from 'react-router-dom';
import Input from '../../../shared/elements/Inputs/OutlinedInput';
import Select from '../../../shared/elements/Inputs/OutlinedSelect';
import { Formik, Form } from 'formik';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import ModalFooter from '../../../shared/elements/ModalWindow/ModalFooter';
import { initialValues, validationSchema, CREATE_MUTATION } from './validation-schema';

import MenuItem from '@material-ui/core/MenuItem';

import { languages } from '../../../const/languages';
import CountryFlag from '../../../shared/elements/CountryFlag';

const DICTIONARIES_QUERY = gql`{
  dictionaries {
    name
    from
    to
    id
  }
}
`;

const capitalize = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const AddDictionaryContent = ({ onClose, history }) => {

  const updateDictionaries = (store, { data: { createDictionary } }) => {
    const data = store.readQuery({ query: DICTIONARIES_QUERY });
    store.writeQuery({
      query: DICTIONARIES_QUERY,
      data: { dictionaries: [createDictionary, ...data.dictionaries] },
    });
    history.push(`/dictionaries/${createDictionary.id}/words`);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      render={({ values, isValid }) => {
        const filteredOptions = languages.filter(item => (
          item !== values.from && item !== values.to
        ));

        const options = filteredOptions.map(item => (
          <MenuItem
            className='capitalize'
            key={item.name}
            value={item.name}>
            <CountryFlag iso={item.iso} />
            {capitalize(item.name)}
          </MenuItem>
        ));

        return (
          <Mutation
            mutation={CREATE_MUTATION}
            variables={values}
            update={updateDictionaries}
          >
            {(handleSubmit, { loading }) => (
              <Form className='modal--form'>
                <div className='modal--content'>
                  <Input name='name' label='Custom Name' />
                  <Select name='from' label='From' options={options} required />
                  <Select name='to' label='To' options={options} required />
                </div>
                <ModalFooter disabled={!isValid} loading={loading} onClose={onClose} onSubmit={handleSubmit} />
              </Form>
            )}
          </Mutation>

        );
      }} />
  );
};

export default withRouter(AddDictionaryContent);
