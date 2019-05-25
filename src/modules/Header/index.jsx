import React from 'react';
import { withRouter } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import NavBar from './NavBar';

import HeaderMenu from './HeaderMenu';

const styles = ({ color }) => ({
  header: {
    height: 55,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: color.primary,
    justifyContent: 'space-between',
    position: 'relative',
  },
  buttonLabel: {
    color: color.light,
    fontWeight: 500,
    textTransform: 'capitalize',
  },
  logOutIcon: {
    color: '#840101',
    marginLeft: 5
  }
});

const Header = ({ classes }) => {

  return (
    <div className={classes.header}>
      <NavBar />
      <HeaderMenu/>
    </div>
  );
};

export default withRouter(withStyles(styles)(Header));
