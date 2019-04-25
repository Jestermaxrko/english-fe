import React, { useEffect, useState } from 'react';
import { getAll } from '../../api/words-api';
import WordsList from './components/WordsList';
import WordListHeader from './components/WordsListHeader';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = ({ color, breakpoints }) => ({
  container: {
    width: '50%',
    margin: 'auto',
    boxSizing: 'border-box',
    border: 'solid 1px #ccc',
    backgroundColor: color.light,
    [breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  fullContainer: {
    width: '100%',
    backgroundColor: color.light
  }
});

const Reader = ({ classes, ...props }) => {
  const [words, setWords] = useState([]);
  const [showOriginal, setShowOriginal] = useState(true);

  useEffect(() => {
    getAllWords();
  }, []);

  const getAllWords = async () => {
    setWords(props.words || await getAll());
  };

  const onChangeLanguage = () => setShowOriginal(!showOriginal);

  return (
    <div className={props.words && props.words.length ? classes.fullContainer : classes.container}>
      <WordListHeader onChangeLanguage={onChangeLanguage} />

      {words.map(word => {
        return (
          <WordsList
            
            original={showOriginal ? word.original || word.english : word.translation}
            translation={showOriginal ? word.translation[0] : word.original || word.english}
          />
        );
      })}

    </div>
  );
};

export default withStyles(styles)(Reader);
