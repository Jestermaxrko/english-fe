import React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import { BookOutlined } from '@material-ui/icons';
import AddDictionaryButton from './AddDictionaryModal/AddDictionaryButton';

const styles = ({ color }) => ({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: color.blue,
    minWidth: 300
  },
});

const EmptyList = ({ classes }) => {
  return <div className={classes.container}>
    <BookOutlined />
    <div>You have no dictionaries yet</div>
    <AddDictionaryButton/>
  </div>;
};

export default withStyles(styles)(EmptyList);
