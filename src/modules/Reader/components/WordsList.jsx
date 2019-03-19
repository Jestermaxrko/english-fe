import React, { useState, useEffect } from 'react';

import withStyles from '@material-ui/core/styles/withStyles';

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    borderBottom: '1px solid #ccc'
  },
  translation: {
    backgroundColor: '#f3ebeb',
    cursor: 'pointer'
  },
  word: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    padding: 20
  }
};

const WordList = ({ original, translation, classes }) => {
  const [show, setShow] = useState(false);

  useEffect(() => setShow(false), [original]);

  const onClick = () => setShow(true);

  return (
    <div className={classes.container}>
      <div className={`${classes.word}`}>
        {original}
      </div>

      <div className={`${classes.word} ${classes.translation}`} onClick={onClick}>
        {show && translation}
      </div>
    </div>
  );
};

export default withStyles(styles)(WordList);