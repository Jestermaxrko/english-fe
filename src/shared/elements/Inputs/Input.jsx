import React from 'react';
import { connect, getIn } from 'formik';
import MUIInput from '@material-ui/core/Input';
import InputAdornment from './UnputAdornment';
import withStyles from '@material-ui/core/styles/withStyles';

export const styles = ({ color }) => ({
  root: {
    flex: 1,
    border: `1px solid ${color.blue}`,
    padding: 5,
    height: 42,
    boxSizing: 'border-box',
  },
});

const Input = ({ classes, onChange, value, name, placeholder, type, Icon, formik }) => (
  <MUIInput
    id={name}
    name={name}
    value={getIn(formik.values, name) || value || ''}
    onChange={onChange || formik.handleChange}
    onBlur={formik.handleBlur}
    placeholder={placeholder}
    type={type || 'text'}
    fullWidth
    disableUnderline
    startAdornment={
      Icon && <InputAdornment Icon={Icon}/>
    }
    classes={classes} />
);

export default connect(withStyles(styles)(Input));
