import React from 'react';
import moment from 'moment';
import withStyles from '@material-ui/core/styles/withStyles';

import { days } from '../../../const/date';

const styles = ({ color, layout }) => ({
  container: {
    padding: 5,
    height: 100,
    width: 100,
    margin: 5,
    backgroundColor: color.lightBlue,
    ...layout.column,
  },
  today: {
    backgroundColor: color.lightGreen,
  },
  number: {
    fontSize: 25,
  },
  day: {
    marginLeft: 5,
    marginTop: 5
  },
  words: {
    textAlign: 'right'
  }

});

const Day = ({ date, classes, count, onClick }) => {
  const today = moment(date).format('DD-MM-YYYY') === moment().format('DD-MM-YYYY');
  const fullDate = new Date(date);
  const dayInMonth = fullDate.getDate();
  const dayInWeek = fullDate.getDay();

  const onDayClick = () => count && onClick();

  const arr = [[1,2], [1,2]];

  const sum = arr.reduce((acc, row) => acc + row.reduce((acc2, item) => acc2 + item, 0) , 0)

    console.log(sum);

  return (
    <div onClick={onDayClick} className={`${classes.container} ${today && classes.today}`}>
      <div className='flex-row flex-align-center'>
        <div className={classes.number}>{dayInMonth}</div>
        <div className={classes.day}>{days[dayInWeek]}</div>
      </div>
      {count && <div className={classes.words}>Words: {count}</div>}
    </div>
  );
};

export default withStyles(styles)(Day);