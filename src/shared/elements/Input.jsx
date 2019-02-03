import React, { Fragment } from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = ({ colors }) => ({
  root: {
    flex: 1,
    border: `1px solid ${colors.blue}`,
    padding: 5,
    height: 42,
    boxSizing: 'border-box'
  }  
})

const AppInput = ({ classes, onChange,value, name, label }) => (
  <Fragment>
    <InputLabel htmlFor={name}>{label}</InputLabel>
    <Input  
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      disableUnderline
      classes={{
        root: classes.root
      }}
      />
  </Fragment>
)

export default withStyles(styles)(AppInput);