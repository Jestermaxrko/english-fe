import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import cn from 'classnames';

const styles = {
  row: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    borderBottom: '1px solid #ccc',
    boxSizing: 'border-box',
  },
  column: {
    flex: 1,
    padding: '0 10px'
  },
  place: {
    width: 50,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&.place_1': {
      backgroundColor: '#FFD70080'
    },
    '&.place_2': {
      backgroundColor: '#C0C0C080'
    },
    '&.place_3': {
      backgroundColor: '#cc663380'
    }
  }
};

const RatingRow = ({ classes, place, user, score }) => {
  return (
    <div className={classes.row}>
      <div className={cn(classes.place, `place_${place}`)}>{place}</div>
      <div className={classes.column}>{user}</div>
      <div className={classes.column}>{score}</div>
    </div>
  )
};

export default withStyles(styles)(RatingRow);
