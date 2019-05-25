import React from 'react';
import { Formik } from 'formik';
import GeneralInfoForm from './GeneralInfoForm';

import { generalInitialValues, generalValidationSchema } from './validationSchema';

const GeneralInfo = () => {
  return <div className='flex'>
    <Formik
      initialValues={generalInitialValues}
      validationSchema={generalValidationSchema}
      render={({setValues, setErrors, values}) => {
        return (
          <GeneralInfoForm setValues={setValues} setErrors={setErrors} values={values}/>
        );
      }}
    />

  </div>;
};

export default GeneralInfo;

