import React, { useState } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import WordsListItem from './WordsListItem';
import WordsListHeader from './WordListHeader';
import AddWordModal from '../AddWordModal';
import { FixedSizeList as List } from 'react-window';

const styles = ({ breakpoints }) => ({
  divider: {
    height: '100%',
    position: 'absolute',
    left: 'calc(50% - 1px)',
    width: 2,
    backgroundColor: '#9c6a7b',
    zIndex: 1
  },
  modalContainer: {
    display: 'none',
    [breakpoints.down('xs')]: {
      display: 'flex',
    },
  }
});

const WordsList = ({ from, to, words, classes, dictionaryId }) => {

  const [reverseCol, setReverseCol] = useState(false);

  const onChange = () => setReverseCol(!reverseCol);

  const rowRenderer = ({ index, style }) => {
    return <div style={style}>
      <WordsListItem word={words[index]} reverseCol={reverseCol}/>
    </div>;
  };

  return (
    <div>
      <div className={classes.modalContainer}>
        <AddWordModal dictionaryId={dictionaryId} />
      </div>
      {/* <div className={classes.divider} /> */}
      <WordsListHeader 
        onChangeMode={onChange} 
        from={reverseCol ? to : from} 
        to={reverseCol ? from : to} />
      <List
        className="List"
        height={window.innerHeight - 195}
        itemCount={words.length}
        itemSize={50}
        width='100%'>
        {rowRenderer}
      </List>
    </div>
  );
};

export default withStyles(styles)(WordsList);
