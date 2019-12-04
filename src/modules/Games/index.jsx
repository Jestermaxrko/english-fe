import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import GameItem from './GameItem';

const styles = {
  container: {
    width: '50%',
    margin: 'auto',
    marginTop: 50,
  }
};

const games = [
  {
    name: 'Easy Game',
    author: 'Max',
    results: [
      {
        user: 'Max',
        score: 5
      },
      {
        user: 'User Max 2',
        score: 3
      },
      {
        user: 'test User 3',
        score: 1
      }, {
        user: 'Max test',
        score: 2
      },
      {
        user: 'Test',
        score: 4
      }

    ]
  },
  {
    name: 'Sport Theme',
    author: 'Taras',
    results: [
      {
        user: 'Max',
        score: 9
      },
      {
        user: 'User Max 2',
        score: 8
      },
      {
        user: 'test User 3',
        score: 6
      }, {
        user: 'Max test',
        score: 7
      },
      {
        user: 'Test',
        score: 5
      }
    ]
  },
  {
    name: 'School Theme',
    author: 'Igor'
  }
]

const header = {
  name: 'Name',
  author: 'Author',
  participants: 'Participants',
  results: 'Results'
}

const Games = ({ classes }) => {
  return (
    <div className={classes.container}>
      <GameItem {...header} />
      {games.map(game => (
        <GameItem {...game} />
      ))}
    </div>
  )
};

export default withStyles(styles)(Games);
