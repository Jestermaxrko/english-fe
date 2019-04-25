import React from 'react';
import FormControl from './FormControl';
import Input from './Input';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = () => ({
  // input: {
  //   fontSize: 15,
  //   color: '#999',
  // },
  root: {
    border: 'none',
    borderBottom: '1px solid #ccc',
  }
});

const AdornmentInput = props => {
  return (
    <FormControl name={props.name} label={props.label} required={props.required}>
      <Input {...props} />
    </FormControl>
  );
};

export default withStyles(styles)(AdornmentInput);
