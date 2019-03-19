import React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import { NavLink } from 'react-router-dom';

const styles = ({ color }) => ({
  header: {
    height: 55,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'red',
    backgroundColor: color.blue
  },
  link: {
    height: 55,
    boxSizing: 'border-box',
    padding: '10px 50px',
    textTransform: 'capitalize',
    color: '#fff',
    
  }
});

const menuItems = ['words', 'add', 'calendar'];

const Header = ({ classes }) => {
  return (
    <div className={classes.header}>

      {menuItems.map(item => <NavLink key={item} className={classes.link} to={'/' + item}>{item}</NavLink>)}

    </div>
  );
};

export default withStyles(styles)(Header);