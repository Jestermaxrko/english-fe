import React from 'react';
import FormControl from './FormControl';
import Input from './Input';

const OutlinedInput = props => {
  return (
    <FormControl name={props.name} label={props.label} required={props.required}>
      <Input {...props} />
    </FormControl>
  );
};

export default OutlinedInput;
