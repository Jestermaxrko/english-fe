import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Refresh from '@material-ui/icons/Refresh';

import MonthPicker from './MonthPicker';

const Header = ({ month, year, onNext, onPrev, onReset, onSetDate }) => {
  const curDate = new Date();
  const curMonth = curDate.getMonth();

  return <div className='flex-row flex-space-between flex-align-center'>
    <IconButton onClick={onPrev}>
      <ChevronLeft />
    </IconButton>

    <div>
      <MonthPicker month={month} year={year} onSetDate={onSetDate} selectedMonth={month}/>
      {curMonth !== month && <IconButton onClick={onReset}>
        <Refresh />
      </IconButton>}
    </div>

    <IconButton onClick={onNext}>
      <ChevronRight />
    </IconButton>
  </div>;
};

export default Header;