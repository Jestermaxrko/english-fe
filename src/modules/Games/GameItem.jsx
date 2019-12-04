import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Rating from './Rating';

const styles = () => ({
  row: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    borderBottom: '1px solid #ccc'
  },
  column: {
    flex: 1,
    paddding: '0 10px'
  }
});

const GameItem = ({ classes, name, author, participants, results = [] }) => {
  return (
    <div className={classes.row}>
      <div className={classes.column}>{name}</div>
      <div className={classes.column}>{author}</div>
      <div className={classes.column}>{participants || results.length}</div>
      <div className={classes.column}>{typeof results === 'string' ? results : <Rating results={results} />}</div>
    </div>
  )
};

export default withStyles(styles)(GameItem);
