import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { connect, getIn } from 'formik';
import FormControl from './FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { styles } from './Input';

const OutlinedSelect = props => {
  const { formik, onChange, value, name, classes, options, onAddItem } = props;

  const handleChange = (e) => {
    if(e.target.value === -1) return onAddItem();

    if(formik) {
      formik.handleChange(e);
      onChange && onChange(e);
    } else {
      onChange && onChange(e);
    } 
  };

  return (
    <FormControl name={props.name} label={props.label} required={props.required}>
      <Select
        id={name}
        name={name}
        value={value || getIn(formik.values, name) ||  ''}
        onChange={handleChange}
        onBlur={formik.handleBlur}
        fullWidth
        displayEmpty
        classes={classes}
        disableUnderline>
        
        {onAddItem && <MenuItem value={-1} >
          + Add
        </MenuItem>}
        
        <MenuItem value="">
          <em>None</em>
        </MenuItem>

        {options}
        
      </Select>
    </FormControl>
  );
};

export default connect(withStyles(styles)(OutlinedSelect));

