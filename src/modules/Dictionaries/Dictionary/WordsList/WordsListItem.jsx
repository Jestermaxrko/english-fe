import React, { useState } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import ListItem from '@material-ui/core/ListItem';

const styles = () => ({
  row: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    borderBottom: '1px solid #afc5ee',
    position: 'relative',
    boxSizing: 'border-box'
  },
  original: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    // borderRight: '2px solid #9c6a7b',
  },
  translation: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    flex: 1,
    cursor: 'pointer',
    backgroundColor: '#f5f5f5',
    padding: 0,
    margin: 0,
  }

});

const WordsListItem = ({ classes, word, reverseCol }) => {
  const [hidden, setHidden] = useState(true);
  return (
    <div className={classes.row}>
      <div className={classes.original}>
        {reverseCol ? word.translation.join(', ') : word.word}
      </div>

      <ListItem
        button
        classes={{ root: classes.translation }}
        onClick={() => setHidden(!hidden)}>
        {!hidden && (reverseCol ? word.word : word.translation.join(', '))}
      </ListItem>
    </div >
  );
};

export default withStyles(styles)(WordsListItem);
