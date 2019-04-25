import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import AddWordModal from '../AddWordModal';

import WordSearch from './WordSearch';
import WordsFilter from './WordsFilter';

const styles = ({ breakpoints }) => ({
  container: {
    backgoundColor: '#ccc',
    borderBottom: '1px solid #ccc',
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    padding: '0 30px',
    [breakpoints.down('xs')]: {
      padding: '0 5px',
    },
  },
});

const DictionaryHeader = ({ classes, wordsCount, dictionaryId }) => {
  return (
    <div className={classes.container}>
      <AddWordModal dictionaryId={dictionaryId} />
      <WordSearch wordsCount={wordsCount}/>
      <WordsFilter/>
    </div>
  );
};

export default withStyles(styles)(DictionaryHeader);
