import React  from 'react';
import { connect, getIn, ErrorMessage } from 'formik';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = ({ color }) => ({
  root: {
    flex: 1,
    border: `1px solid ${color.blue}`,
    padding: 5,
    height: 42,
    boxSizing: 'border-box',
  }
});

const AppInput = ({ classes, onChange, value, name, label, formik }) => (
  <div className='flex-column' style={{ margin: '10px 0' }}>
    <InputLabel htmlFor={name}>{label}</InputLabel>
    <Input
      id={name}
      name={name}
      value={getIn(formik.values, name) || value}
      onChange={formik.handleChange || onChange}
      onBlur={formik.handleBlur}
      disableUnderline
      classes={classes}
    />
    <ErrorMessage name={name}/>
  </div>
);

export default connect(withStyles(styles)(AppInput));
