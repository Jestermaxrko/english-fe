import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import DictionariesList from '../DictionariesList';

const styles = ({ breakpoints }) => ({
  list: {
    display: 'block',
    backgroundColor: '#fff2da',
    borderRight: '1px solid #ccc',
    [breakpoints.down('xs')]: {
      display: 'none'
    },
  }
});

const SideBar = ({ classes }) => {
  return (
    <div className={classes.list}>
      <DictionariesList />
    </div>
  );
};

export default withStyles(styles)(SideBar);
