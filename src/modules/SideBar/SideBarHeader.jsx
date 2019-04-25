import React, { Fragment } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import { NavLink } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import { BookOutlined } from '@material-ui/icons';

// import { styles } from './styles';

const styles = ({ color, breakpoints }) => ({
  link: {
    display: 'flex',
    height: 55,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    textTransform: 'capitalize',
    color: '#fff',
    backgroundColor: color.primary,
    transition: 'background-color 0.5s ease',
    borderRight: '1px solid #90929a',
    '&:hover': {
      // opacity: 0.7,
      backgroundColor: color.darkPrimary,
      color: color.light
    }
  },
  activeLink: {
    backgroundColor: color.orange,
    color: color.primary,
    '&:hover': {
      backgroundColor: color.darkOrange,
      transition: 'background-color 0.5s ease',
    }
  },
  button: {
    padding: 3,
    marginRight: 5
  },
  disabled: {
    backgroundColor: '#ccc',
  },
  icon: {
    color: color.primary,
  },
  title: {
    [breakpoints.down('xs')]: {
      display: 'none'
    },
  },
});

const DictionaryListHeader = ({ classes }) => {
  return (
    <Fragment>

      <NavLink
        to='/dictionaries/'
        exact
        className={classes.link}
        activeClassName={classes.activeLink}>
        <IconButton disabled classes={{ root: classes.button, disabled: classes.disabled }}>
          <BookOutlined className={classes.icon} />
        </IconButton>
        <div className={classes.title}>Dictionaries</div>
      </NavLink>
    </Fragment>
  );
};

export default withStyles(styles)(DictionaryListHeader);
