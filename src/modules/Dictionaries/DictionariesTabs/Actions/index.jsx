import React, { useState } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Popover from '@material-ui/core/Popover';
import MoreVert from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';

import ActionsContent from './ActionsContent';

const usePopover = () => {
  const [anchorEl, setAnchorEl] = useState();
  const onOpen = ({ currentTarget }) => setAnchorEl(currentTarget);
  const onClose = () => setAnchorEl(null);
  return [anchorEl, onOpen, onClose];
};

const styles = () => ({
  button: {
    padding: 2,
    marginRight: 5,
    // position: 'absolute',
    right: 0,
    top: 0,
  },
  activeIndicator: {
    position: 'absolute',
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'green',
    top: 5,
    right: 3,
  }
});
const Actions = ({classes}) => {
  const [anchorEl, onOpen, onClose] = usePopover();

  return (
    <div>
      <IconButton className={classes.button} onClick={onOpen}>
        <MoreVert />
      </IconButton>

      <Popover
        id="simple-popper"
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={onClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <ActionsContent/>
      </Popover>

    </div>
  );
};

export default withStyles(styles)(Actions);
