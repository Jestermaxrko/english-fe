import React from 'react';
import { withRouter } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import NavBar from './NavBar';
import { ExitToApp } from '@material-ui/icons';
import Button from '@material-ui/core/Button';

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

const Header = ({ classes, history }) => {
  const logOut = () => {
    window.localStorage.clear();
    history.push('/auth/sign-in');
  };

  return (
    <div className={classes.header}>
      <NavBar />

      <div onClick={logOut}>
        <Button classes={{ label: classes.buttonLabel }}>
          Logout <ExitToApp className={classes.logOutIcon}/>
        </Button>
      </div>

    </div>
  );
};

export default withRouter(withStyles(styles)(Header));
