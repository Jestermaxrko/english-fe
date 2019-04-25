import React, { useState, Fragment } from 'react';
import Popover from '@material-ui/core/Popover';
import { months } from '../../../const/date';

import withStyles from '@material-ui/core/styles/withStyles';

const styles = () => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: 160,
    padding: 5
  },
  item: {
    width: 35,
    margin: 2,
    borderRadius: 2,
    cursor: 'pointer',
    backgroundColor: 'aliceblue',
    textAlign: 'center'
  },
  selected: {
    backgroundColor: 'red'
  }

});

const MonthPicker = ({ classes, month, year, onSetDate, selectedMonth }) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleAction = (event) => {
    setOpen(!open);
    setAnchorEl(event && event.target);
  };

  return (
    <Fragment>
      <div onClick={handleAction}>{months[month]}, {year}</div>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleAction}
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
        transformOrigin={{ horizontal: 'center', vertical: 'top' }}
      >
        <div className={classes.container}>
          {months.map((item, index) => {
            return <div 
              key={index}
              className={`${classes.item} ${selectedMonth === index && classes.selected}`} 
              onClick={() => {
                onSetDate({ year: 2019, month: index });
                handleAction();
              }
              }>{item.slice(0, 3)}</div>;
          })}
        </div>
      </Popover>
    </Fragment>
  );
};

export default withStyles(styles)(MonthPicker);
