import React, { useState, useEffect } from 'react';

import moment from 'moment';

import { getDaysInMonth, isIsoStringsEqual } from '../../shared/services/utils';

import { getAll } from '../../api/days-api';

import Header from './components/Header';
import DayPopup from './components/DayPopup';

const Calendar = () => {
  const [words, setWords] = useState([]);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);

  useEffect(() => {
    getAllDays();
  }, []);

  const days = getDaysInMonth(month, year);

  const getAllDays = async () => {
    const data = await getAll();
    setWords(data);
    setCurDate();
  };

  const handleNext = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const handlePrev = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const setCurDate = () => {
    const curDate = new Date();
    setMonth(curDate.getMonth());
    setYear(curDate.getFullYear());
  };

  const setDate = ({ year, month }) => {
    setMonth(month);
    setYear(year);
  };

  return (
    <div>
      <Header
        month={month}
        year={year}
        onSetDate={setDate}
        onReset={setCurDate}
        onNext={handleNext}
        onPrev={handlePrev} />

      <div className='flex-row' style={{ flexWrap: 'wrap' }}>
        {days.map(day => {
          const date = moment(day).format('DD-MM-YYYY');
          const filteredDay = words.find(item => item.date === date);

          return (
            <DayPopup
              key={day}
              date={day}
              words={filteredDay && filteredDay.words}
              count={filteredDay && filteredDay.count}
            />);
        }
        )}
      </div>
    </div>
  );
};

export default Calendar;