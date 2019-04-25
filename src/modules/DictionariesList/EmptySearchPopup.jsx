import React from 'react';
import Popover from '@material-ui/core/Popover';
import withStyles from '@material-ui/core/styles/withStyles';
import Close from '@material-ui/icons/Close';

const styles = ({ color }) => ({
  container: {
    width: 330,
    // boxShadow: 'none',
    marginLeft: -16,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    borderRadius: 0,
    borderTop: `1px solid ${color.lightBlue}`,
    color: color.blue
  },
  icon: {
    position: 'absolute',
    cursor: 'pointer',
    top: 5,
    right: 5,
    height: 20,
    width: 20
  }
});

const EmptySearchPopup = ({ classes, anchorEl, onClose }) => {
  return (
    <Popover
      id="simple-popper"
      open={!!anchorEl}
      anchorEl={anchorEl}
      onClose={onClose}
      classes={{ paper: classes.container }}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}>
      <Close className={classes.icon} onClick={onClose}/>
      No dictionaries found
    </Popover>
  );
};

export default withStyles(styles)(EmptySearchPopup);
