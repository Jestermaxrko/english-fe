import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutline from '@material-ui/icons/DeleteOutline';

const styles = () => ({
  button: { padding: 5 },
});

const DeleteDictionaryModal = ({ classes, match }) => {
  return (
    <NavLink to={`/dictionaries/${match.params.id}/delete`}>
      <IconButton classes={{ root: classes.button }}>
        <DeleteOutline />
      </IconButton>
    </NavLink>
  );
};

export default withRouter(withStyles(styles)(DeleteDictionaryModal));
