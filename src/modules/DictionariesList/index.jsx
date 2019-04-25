import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { withRouter } from 'react-router-dom';

import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';

import DictionaryListItem from './DictionaryListItem';
import DictionaryListHeader from './DictionaryListHeader';
import EmptyList from './EmptyList';
import Spinner from '../../shared/elements/Spinner';
import AddDictionaryButton from '../DictionariesList/AddDictionaryModal/AddDictionaryButton';

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
  root: {
    width: 330,
    // height: 300,
    position: 'relative',
    borderRadius: 10,
    padding: 0,
    boxShadow: 'none',
    [breakpoints.down('xs')]: {
      width: 250
    },
  },
  scrollableArea: {
    height: 'calc(100vh - 130px)',
    overflowY: 'auto',
    [breakpoints.down('xs')]: {
      height: 'calc(100vh - 74px)'
    },
  }

});

const DictionariesList = ({ classes, onClose }) => {
  return (
    <Query query={DICTIONARIES_QUERY}>
      {({ loading, data }) => {
        if (loading) return <Spinner/>;
        if (data.dictionaries) {
          return (
            data.dictionaries.length ?
              <List classes={{ root: classes.root }}>
                <DictionaryListHeader count={data.dictionaries.length} />
                <div className={classes.scrollableArea}>
                  {data.dictionaries.map(item => (
                    <DictionaryListItem
                      onClose={onClose}
                      key={item.id}
                      item={item} />
                  ))}
                </div>
                <AddDictionaryButton />
              </List>
              :
              <EmptyList />
          );
        }
      }}
    </Query>
  );
};

export default withRouter(withStyles(styles)(DictionariesList));
