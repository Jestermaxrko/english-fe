import React from 'react';
import { ErrorMessage } from 'formik';
import InputLabel from '@material-ui/core/InputLabel';
import MUIFormControl from '@material-ui/core/FormControl';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = ({color}) => ({
  optional: {
    fontSize: 10
  },
  formControl: {
    // marginTop: 15,
    // flex: 1,
    flex: 1,
    paddingBottom: 20
  },
  error: {
    position: 'absolute',
    color: color.red,
    bottom: 3,
    fontSize: 12
  }
});

const FormControl = ({ classes, children, name, label, required }) => (
  <MUIFormControl fullWidth className={classes.formControl}>
    <InputLabel shrink disableAnimation>
      {label}
      {required && '*'}
    </InputLabel>
    {children}
    {/* <Input id="component-simple" value={this.state.name} onChange={this.handleChange} /> */}
    <ErrorMessage className={classes.error} name={name} component='div' />
  </MUIFormControl>
);

export default  withStyles(styles)(FormControl);
