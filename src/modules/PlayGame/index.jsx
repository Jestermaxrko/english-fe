import React, { useState, Fragment } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Button } from '@material-ui/core';
import OutlinedInput from '../../shared/elements/Inputs/OutlinedInput';

const styles = {
  container: {
    width: '50%',
    margin: 'auto',
    marginTop: 50,
    // padding: 20,
    border: '1px solid #ccc',
    overflow: 'hidden'
  },
  progressBar: {
    position: 'relative',
    height: 10,
    borderBottom: '1px solid #ccc'
  },
  progress: {
    backgroundColor: '#5add82',
    position: 'absolute',
    top: 0,
    left: 0,
    height: 10
  },
  playSpace: {
    height: 250,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  boldText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  score: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green'
  }
};

const words = [
  { question: 'Стіл', answer: 'table' },
  { question: 'Слово', answer: 'word' },
  { question: 'Рука', answer: 'hand' },
  { question: 'Голова', answer: 'head' },
  { question: 'Нога', answer: 'leg' },
]

const PlayGame = ({ classes }) => {
  const [wordIndex, setWordIndex] = useState(-1);
  const [curWord, setCurWord] = useState('');
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [score, setScore] = useState(0);

  const handleNext = () => {
    console.log('Enter')
    const isRight = words[wordIndex].answer.toLowerCase() === curWord.toLowerCase();

    if (isRight) {
      setScore(prev => prev + 1);
    } else {
      setWrongAnswers(prev => [...prev, words[wordIndex].question]);
    }
    setWordIndex(prev => prev + 1);
    setCurWord('');
  }

  return (
    <div className={classes.container}>

      <div className={classes.progressBar}>
        <div className={classes.progress} style={{ width: `${parseInt((wordIndex + 1) / words.length * 100)}%` }} />
      </div>

      <div className={classes.playSpace}>
        {wordIndex === -1 && <Button color='primary' variant='contained' onClick={() => setWordIndex(0)}> Start </Button>}

        {wordIndex > -1 && wordIndex !== words.length && (
          <Fragment>
            <div style={{ marginBottom: 50 }}>

              <div className={classes.boldText} style={{ fontSize: 24, display: 'flex', justifyContent: 'center' }}>
                {words[wordIndex].question}
              </div>

              <OutlinedInput
                value={curWord}
                onKeyPress={({ key }) => {
                  console.log(key)

                  if (key === 'Enter') handleNext()
                }}
                onChange={({ target: { value } }) => setCurWord(value)} />


              <Button fullWidth color='primary' variant='contained' onClick={handleNext}> Next </Button>
            </div>
          </Fragment>
        )}

        {wordIndex === words.length && (
          <Fragment>
            <div style={{ marginTop: 30 }} />
            <div className={classes.boldText}>Your Score</div>
            <div className={classes.score}>{score}</div>
            {wrongAnswers.length > 0 && <Fragment>
              <div className={classes.boldText}>Wrong words:</div>
              {wrongAnswers.map(word => <div>{word}</div>)}
            </Fragment>}
          </Fragment>
        )}
      </div>
    </div>
  )
};

export default withStyles(styles)(PlayGame);
