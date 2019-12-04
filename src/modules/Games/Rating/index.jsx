import React, { Fragment, useState } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import RatingIcon from '@material-ui/icons/Equalizer';
import IconButton from '@material-ui/core/IconButton';
import PlayIcon from '@material-ui/icons/PlayArrow';
import ModalWindow from '../../../shared/elements/ModalWindow';
import { useModal } from '../../../shared/elements/ModalWindow/useModal';
import RatingRow from './RatingRow';

const styles = {
  container: {
    padding: 20
  }
};

const Rating = ({ classes, results }) => {
  const [open, handleClick] = useModal();
  const sortedResults = results.sort((a, b) => b.score - a.score)

  return (
    <Fragment>
      <IconButton onClick={handleClick}>
        <RatingIcon />
      </IconButton>

      <IconButton onClick={() => window.location.replace('/play-game')}>
        <PlayIcon style={{ color: 'green' }} />
      </IconButton>

      <ModalWindow open={open} onClose={handleClick}>
        <div className={classes.container}>
          <RatingRow place='#' user='User' score='Score' />
          {sortedResults.map((result, index) => (
            <RatingRow place={index + 1} user={result.user} score={result.score} />
          ))}
        </div>
      </ModalWindow>
    </Fragment>
  )
};

export default withStyles(styles)(Rating);
