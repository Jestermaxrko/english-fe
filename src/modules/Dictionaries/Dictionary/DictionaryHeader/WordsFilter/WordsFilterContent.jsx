import React  from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ListItem from '@material-ui/core/ListItem';

import CategoryFilter from './CategoryFilter';

const styles = ({color}) => ({
  container: {
    padding: 0,
    width: 200,
  },
  row: {
    paddingLeft: 10,
    justifyContent: 'space-between',
    borderBottom: `1px solid ${color.lightBlue}`
  },
  reverseIcon: {
    transform: 'rotate(180deg)'
  },
  title: {
    color: color.primary
  },
 
});

const WordsFilterContent = ({ classes, sort, onChangeSort, categories, onChangeCategories }) => {
 
  return (
    <div className={classes.container}>
      <ListItem className={classes.row} button onClick={onChangeSort}>
        <div className={classes.title}>Sort by Date</div> 
        <ArrowDownward 
          className={`${classes.title} ${sort > 0 ? classes.reverseIcon: ''}`}/>
      </ListItem>

      <CategoryFilter categories={categories} onChangeCategories={onChangeCategories}/>
    </div>
  );
};

export default withStyles(styles)(WordsFilterContent);
