import React from 'react';
import { NavLink } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import IconButton from '@material-ui/core/IconButton';
import BookOutlined from '@material-ui/icons/BookOutlined';
import { withApollo } from 'react-apollo';

import { styles } from './styles';

const menuItems = [
  {
    icon: BookOutlined,
    title: 'dictionaries'
  },
];

const NavBar = ({ classes }) => {
  return (
    <div className={classes.container}>
      {menuItems.map(item => {
        const Icon = item.icon;
        return (
          <NavLink
            key={item.title}
            to={`/${item.title}`}
            className={classes.link}
            activeClassName={classes.activeLink}
          >
            <IconButton disabled classes={{ root: classes.button, disabled: classes.disabled }}>
              <Icon className={classes.icon} />
            </IconButton>
            <div className={classes.title}>{item.title}</div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default withApollo(withStyles(styles)(NavBar));

