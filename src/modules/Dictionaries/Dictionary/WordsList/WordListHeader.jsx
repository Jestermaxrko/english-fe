import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import LanguageSwitcher from './LanguageSwicher';

const styles = () => ({
  row: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    boxSizing: 'border-box',
    borderBottom: '1px solid #afc5ee',
    position: 'relative',
  },
  column: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    textTransform: 'uppercase'
    // borderRight: '2px solid #9c6a7b',
  },

});

const WordsListHeader = ({ classes, from, to, onChangeMode }) => {
  return (
    <div className={classes.row}>
      <LanguageSwitcher onClick={onChangeMode}/>
      <div className={classes.column}>
        {from}
      </div>
      <div className={classes.column}>
        {to}
      </div>
    </div>
  );
};

export default withStyles(styles)(WordsListHeader);
