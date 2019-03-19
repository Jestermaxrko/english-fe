import React, { useState } from 'react';

import LanguageSwitcher from './LanguageSwitcher';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = ({ color }) => ({
  container: {
    position: 'relative',
    display: 'flex',
    flex: 1,
    borderBottom: '1px solid #ccc',
    backgroundColor: color.lightBlueGrey
  },
  word: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    padding: 20
  }
});

const WordListHeader = ({ classes, onChangeLanguage }) => {
  return (
    <div className={classes.container}>
      <LanguageSwitcher onClick={onChangeLanguage}/>
      <div className={`${classes.word}`}> Word </div>
      <div className={classes.word}> Translation </div>
    </div>
  );
};

export default withStyles(styles)(WordListHeader);