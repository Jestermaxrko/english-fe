import React from 'react';

import ReactCountryFlag from 'react-country-flag';

const style = {
  borderRadius: '50%',
  marginRight: 5,
  backgroundSize: 'cover',
  width: 20,
  height: 20,
};

const CountryFlag = ({ iso }) => {
  return (
    <ReactCountryFlag
      styleProps={style}
      code={iso.toLowerCase()}
      svg
    />
  );
};

export default CountryFlag; 
