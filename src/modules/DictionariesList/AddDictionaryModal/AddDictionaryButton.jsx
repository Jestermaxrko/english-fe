import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Add from '@material-ui/icons/Add';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const styles = ({ color }) => ({
  button: {
    padding: 5,
    borderRadius: 0,
    width: '100%',
    backgroundColor: color.darkGreen,
    '&:hover': {
      backgroundColor: 'rgba(0, 255, 0, 0.50)'
    }
  },
  label: {
    color: color.light
  }
});

const AddDictionaryButton = ({ classes }) => {
  return (
    <NavLink to='/dictionaries/new'>
      <Button varaint='contained' classes={{ root: classes.button, label: classes.label }}>
        <Add /> <div>Add Dictionary</div>
      </Button>
    </NavLink>
  );
};

export default withStyles(styles)(AddDictionaryButton);
