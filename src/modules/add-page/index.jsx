import React, { Component, Fragment, useState } from 'react';

import Input from '../../shared/elements/Input';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import { Formik, Form, FieldArray, getIn } from 'formik';

import http from '../../api/http-service';

import TranslationItem from './components/TranslationItem';
import TranslationHeader from './components/TranslationHeader';
import { wordSchema as validationSchema } from '../../const/validationSchemas';

import { addWord } from '../../api/words-api';

const styles = ({ color, layout, breakpoints }) => ({
  form: {
    width: '50%',
    margin: 'auto',
    [breakpoints.down('xs')]: {
      width: '100%',
    },
  }
});

const initialValues = {
  original: '',
  translation: ['']
};

const AddPage = ({ classes }) => {

  const [error, setError] = useState('');

  const onSubmit = async (values, resetForm) => {

    try {
      await addWord(values);
      resetForm();
    } catch(err) {
      setError(err.error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values, resetForm);
      }}
      render={({ handleChange, values, handleSubmit, errors }) => (

        <Form className={classes.form}>

          <div className='flex flex-column'>
            <Input label='original word' name='original' onChange={handleChange} />
          </div>

          <FieldArray
            name="translation"
            render={arrayHelpers => (
              <Fragment>
                <TranslationHeader onAdd={() => { arrayHelpers.push(''); }} />

                {values.translation.map((word, index) => (
                  <TranslationItem
                    name={`translation.${index}`}
                    value={getIn(values, `translation.${index}`)}
                    onChange={handleChange}
                    disabled={values.translation.length === 1}
                    index={index}
                    onRemove={() => {
                      arrayHelpers.remove(index);
                    }} />
                ))}

              </Fragment>)} />

          <Button
            onClick={handleSubmit}
            fullWidth
            variant='contained'
            color='primary'>
            Save
          </Button>

          {error && <div>{error}</div>}

        </Form>
      )}
    />
  );
};

export default withStyles(styles)(AddPage);
