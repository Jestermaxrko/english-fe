import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import gql from 'graphql-tag';
import { Query, withApollo } from 'react-apollo';

import WordList from './WordsList';
import DictionaryHeader from './DictionaryHeader';

import DictionaryTabs from '../DictionariesTabs';

const DICTIONARY_QUERY = gql`
  query dictionary($id: String) {
    dictionary(id: $id) {
      from
      to
      words {
        id
        word
        translation
      }
    }
  }
`;

const styles = () => ({
  wrapper: {
    boxSizing: 'border-box',
    flex: 1,
    // margin: '0 10px',
  },
 
});

const Dictionary = ({ classes, match }) => {
  return (
    <div className={classes.wrapper}>

      <Query query={DICTIONARY_QUERY} variables={{ id: match.params.id }}>
        {({ data, loading, error }) => {
          if (loading) return <div/>;
          if (error) return <Redirect to='/dictionaries' />;
          if (data) {
            const { dictionary: { from, to, words } } = data;
            return (
              <Fragment>
                <DictionaryTabs/>
                <DictionaryHeader wordsCount={words.length} from={from} dictionaryId={match.params.id} />
                <WordList from={from} to={to} words={words} dictionaryId={match.params.id}/>
              </Fragment>
            );
          }
        }}
      </Query>
    </div>
  );
};

export default withApollo(withStyles(styles)(Dictionary));
