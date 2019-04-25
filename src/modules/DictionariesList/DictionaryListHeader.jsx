import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import DictionarySearch from './DictionarySearch';

// import { styles } from './styles';

const styles = ({ color, breakpoints }) => ({
  bookIcon: {
    color: color.grey
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 40,
    borderBottom: '1px solid #ccc',
    position: 'relative',
    boxSizing: 'border-box'
  },
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
    <div
      className={classes.container}>
      <DictionarySearch />
    </div>
  );
};

export default withStyles(styles)(DictionaryListHeader);
