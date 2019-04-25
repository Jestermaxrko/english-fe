import React, { Fragment } from 'react';
import Input from '../../../../shared/elements/Inputs/OutlinedInput';
import { Formik, Form, FieldArray } from 'formik';
import { Mutation } from 'react-apollo';

import { initialValues, validationSchema, CREATE_WORD_MUTATION, DICTIONARY_QUERY, ACTIVITY_QUERY } from './utils';
import TranslationItem from './TranslationItem';
import TranslationHeader from './TranslationHeader';
import ModalFooter from '../../../../shared/elements/ModalWindow/ModalFooter';
import InputError from '../../../../shared/elements/Inputs/InputError';

import CategorySelect from './CategorySelect';

const AddWordContent = ({ onClose, dictionaryId }) => {

  const updateWords = (store, { data: { createWord } }) => {
    const { dictionary } = store.readQuery({ query: DICTIONARY_QUERY, variables: { id: dictionaryId } });

    const wordIndex = dictionary.words.findIndex(item => item.id === createWord.id);

    if (wordIndex < 0) dictionary.words = [createWord, ...dictionary.words];
    else dictionary.words[wordIndex] = createWord;

    store.writeQuery({
      query: DICTIONARY_QUERY,
      data: { dictionary },
    });

    try {
      const { dayAggs } = store.readQuery({ query: ACTIVITY_QUERY, variables: { dictionaryId } });
      dayAggs[dayAggs.length - 1].total += 1;
      store.writeQuery({ query: ACTIVITY_QUERY, data: { dayAggs }, variables: { dictionaryId } });
      onClose();
    } catch{
      onClose();
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      render={({ values, isValid }) => (
        <Mutation
          mutation={CREATE_WORD_MUTATION}
          variables={{ ...values, dictionaryId }}
          update={updateWords}
        >
          {(handleSubmit, { loading, error }) => (
            <Form className='modal--form'>
              <div className='modal--content'>
                <div className='full-width'>
                  <Input label='Word' name='word' />
                  <CategorySelect />
                </div>

                <FieldArray
                  name="translation"
                  render={arrayHelpers => (
                    <Fragment>
                      <div className='relative full-width'>
                        <TranslationHeader onAdd={() => { arrayHelpers.push(''); }} />
                        {error && <InputError error='You already have this word and translations' />}
                      </div>

                      {values.translation.map((word, index) => (
                        <TranslationItem
                          name={`translation.${index}`}
                          key={index}
                          disabled={values.translation.length === 1}
                          index={index}
                          onRemove={() => {
                            arrayHelpers.remove(index);
                          }} />
                      ))}

                    </Fragment>)} />
              </div>
              <ModalFooter onClose={onClose} loading={loading} disabled={!isValid} onSubmit={handleSubmit} />
            </Form>
          )}

        </Mutation>
      )}
    />
  );
};

export default AddWordContent;
