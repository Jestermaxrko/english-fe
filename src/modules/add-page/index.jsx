import React, { Component, Fragment } from 'react';

import Input from '../../shared/elements/Input';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import { Formik, Form, FieldArray, getIn } from 'formik';

import http from '../../api/http-sevice';

import TranslationItem from './components/TranslationItem';
import TranslationHeader from './components/TranslationHeader';
import { wordSchema as validationSchema } from '../../const/validationSchemas';

const styles = ({ colors, layout }) => {

}

const initialValues = {
  original: '',
  translation: ['']
}

const AddPage = ({ classes }) => {

  const onSubmit = (values) => {
    console.log(values);
    http.post('http://localhost:8000', values).then(res => console.log(res));
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => onSubmit(values)}
      render={({ handleChange, values, handleSubmit }) => (
        <Form style={{ width: '50%', margin: 'auto' }}>
          <div className='flex flex-column'>
            <Input label='original word' name='original' onChange={handleChange} />
          </div>


          {console.log(values)}
          <FieldArray
            name="translation"
            render={arrayHelpers => (
              <Fragment>
                <TranslationHeader onAdd={() => { arrayHelpers.push('') }} />

                {values.translation.map((word, index) => (
                  <TranslationItem
                    name={`translation.${index}`}
                    value={getIn(values, `translation.${index}`)}
                    onChange={handleChange}
                    disabled={values.translation.length === 1}
                    index={index}
                    onRemove={() =>  { 
                      arrayHelpers.remove(index)}} />
                ))}

              </Fragment>)}/>

          <Button 
            onClick={handleSubmit}
            fullWidth 
            variant='contained' 
            color='primary'>
            Save
          </Button>

        </Form>
      )}
    />
  )
}

export default withStyles(styles)(AddPage);
