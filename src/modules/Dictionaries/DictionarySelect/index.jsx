import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import withStyles from '@material-ui/core/styles/withStyles';

import Spinner from '../../../shared/elements/Spinner';
import DictionaryCard from './DictionaryCard';
import EmptyDictionarySelect from '../../DictionariesList/EmptyList';

const DICTIONARIES_QUERY = gql`{
  dictionaries {
    name
    from
    to
    id 
  }
}
`;

const styles = ({ breakpoints }) => ({
  container: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
    boxSizing: 'border-box',
    width: '100%',
  },
  scrollContainer: {
    width: '60vw',
    height: '80%',
    display: 'flex',
    overflowX: 'auto',
    position: 'relative',
    padding: '10px 0',
    boxSizing: 'border-box',
    [breakpoints.down('xs')]: {
      height: '100%',
      width: '100%',
      padding: '0 10px',
      overflowY: 'auto',
    }
  },
  content: {
    width: 2000,
    padding: 2,
    display: 'flex',
    [breakpoints.down('xs')]: {
      flexDirection: 'column',
      width: '100%'
    }
  },
  emptyContainer: {
    display: 'none',
    [breakpoints.down('xs')]: {
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden'
    }
  }
});

const DictionarySelect = ({ classes }) => {
  return (
    <div className={classes.container}>
      <div className={classes.scrollContainer}>
        <div className={classes.content}>
          <Query query={DICTIONARIES_QUERY}>
            {({ data, loading, error }) => {
              if (loading) return <Spinner />;
              if (error) {
                return <div>Errrs</div>;
              }
              if (data.dictionaries.length) {
                return (
                  data.dictionaries.map(item => <DictionaryCard key={item.id} {...item} />)
                );
              }
              return <div className={classes.emptyContainer}>
                <EmptyDictionarySelect />
              </div>;
            }}
          </Query>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(DictionarySelect);
