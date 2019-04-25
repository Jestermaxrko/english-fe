import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import ListItem from '@material-ui/core/ListItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Autorenew from '@material-ui/icons/Autorenew';
import Spinner from '../../../../../shared/elements/Spinner';

const styles = ({ color }) => ({
  container: {
    width: 200,
  },
  row: {
    justifyContent: 'space-between',
    padding: 0,
    color: color.blue
  },
  formControl: {
    margin: 0,
    width: '100%',

  },
  header: {
    padding: '3px 10px',
    // borderBottom: `1px solid ${color.lightBlue}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  label: {
    color: color.blue,
    fontSize: 12,
  },
  button: {
    padding: 2,
    color: color.blue,
    backgroundColor: color.lightBlue
  },
  title: {
    color: color.blue
  }
});

export const CATEGORIES_QUERY = gql`
{
  categories {
    id
    name
  }
}
`;

const CategoryFilter = ({ classes, categories, onChangeCategories }) => {

  const onChange = ({ target: { value, checked } }) => {
    const newCategories = [...categories];
    if (checked) {
      newCategories.push(value);
      onChangeCategories(newCategories);
    } else {
      onChangeCategories(newCategories.filter(item => item !== value));
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes.title}>Categories</div>
        <IconButton  
          onClick={() => onChangeCategories([])}
          className={classes.button}>
          <Autorenew />
        </IconButton>

      </div>
      <Query query={CATEGORIES_QUERY}>
        {({ data, loading }) => {
          if(loading) return <Spinner/>;
          if (data.categories) {

            if(!data.categories.length) {
              return <div className='flex-row flex-justify-center'>No categories yet</div>;
            }

            return (
              data.categories.map(item => (
                <ListItem className={classes.row} button>
                  <FormControlLabel
                    className={classes.formControl}
                    classes={{ label: classes.label }}
                    control={
                      <Checkbox
                        checked={categories.includes(item.id)}
                        onChange={onChange}
                        value={item.id}
                      />
                    }
                    label={item.name}
                  />
                </ListItem>
              ))
            );
          }
          return <div />;

        }}
      </Query>

    </div>
  );
};

export default withStyles(styles)(CategoryFilter);
