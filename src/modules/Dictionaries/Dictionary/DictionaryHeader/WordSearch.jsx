import React, { useState } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Input from '@material-ui/core/Input';
import { Search, Clear } from '@material-ui/icons';
import InputAdornment from '@material-ui/core/InputAdornment';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import { withRouter } from 'react-router-dom';

const styles = ({ color }) => ({
  root: {
    height: 30,
    width: 200,
    paddingLeft: 10,
    backgroundColor: '#ebe9f1',
    borderRadius: 5,
  },
  input: {
    fontWeight: 500,
    fontSize: 12,
    color: color.darkGreen,
  },
  icon: {
    color: '#89a7a4',
    maxHeight: 200,
    height: 30,
    margin: 0,
    width: 40,
    cursor: 'pointer',
    justifyContent: 'center',
    borderLeft: '2px solid #55bdab',
    '&:hover': {
      color: color.green
    }
  },
  clearAdornment: {
    position: 'absolute',
    right: 40,
    cursor: 'pointer',
    color: color.red,
  },
  clearIcon: {
    fontSize: 14
  }
});

const FILTERED_DICTIONARY_QUERY = gql`
  query dictionary($id: String, $sort: Int, $filter: [String], $query: String) {
    dictionary(id: $id, sort: $sort, filter: $filter, query: $query) {
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

const LOCAL_FILTER = gql`
  {
    wordsFilter @client {
      sort,
      filter,
      query 
    } 
  }
`;

const WordSearch = ({ classes, wordsCount, client, match }) => {
  const [searchQuery, setQuery] = useState('');

  const onChange = ({ target: { value } }) => {
    setQuery(value);
  };

  const handleKeyDown = ({ key }) => {
    key === 'Enter' && onSearch();
  };

  const onClear = () => {
    setQuery('');
    onSearch('');
  };

  const onSearch = async(query = searchQuery) => {
    const { wordsFilter } = client.readQuery({ query: LOCAL_FILTER });
    const { data: { dictionary } } = await client.query({
      query: FILTERED_DICTIONARY_QUERY, variables: {
        id: match.params.id,
        sort: wordsFilter.sort,
        filter: wordsFilter.filter,
        query,
        
      }
    });

    wordsFilter.query = query;

    client.writeQuery({
      query: LOCAL_FILTER,
      data: { wordsFilter }
    });

    client.writeQuery({
      query: FILTERED_DICTIONARY_QUERY,
      variables: { id: match.params.id },
      data: { dictionary }
    });

  };

  return (
    <Input
      classes={{
        root: classes.root,
        input: classes.input
      }}
      disableUnderline
      value={searchQuery}
      onChange={onChange}
      onKeyDown={handleKeyDown}
      placeholder={`Search in ${wordsCount || ''} words`}
      endAdornment={
        <InputAdornment
          classes={{ root: classes.icon }}
          onClick={onSearch}>
          <Search />
        </InputAdornment>
      }
      startAdornment={
        searchQuery && <InputAdornment
          classes={{root: classes.clearAdornment}}
          onClick={onClear}>
          <Clear className={classes.clearIcon}/>
        </InputAdornment>
      }
    />
  );
};

export default withRouter(withApollo(withStyles(styles)(WordSearch)));
