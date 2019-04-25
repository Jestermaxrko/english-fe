import React, { useState, useEffect  } from 'react';
import { withRouter } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import Popover from '@material-ui/core/Popover';
import FilterList from '@material-ui/icons/FilterList';
import IconButton from '@material-ui/core/IconButton';

import WordsFilterContent from './WordsFilterContent';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';

const usePopover = () => {
  const [anchorEl, setAnchorEl] = useState();
  const onOpen = ({ currentTarget }) => setAnchorEl(currentTarget);
  const onClose = () => setAnchorEl(null);
  return [anchorEl, onOpen, onClose];
};

const styles = () => ({
  button: {
    padding: 2,
    marginLeft: 5
  },
  activeIndicator: {
    position: 'absolute',
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'green',
    top: 5,
    right: 3,
  }
});

const initFilter = {
  sort: -1,
  categories: []
};

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

const changed = (sort, categories) => {
  return (initFilter.sort !== sort || categories.length !== initFilter.categories.length);
};

const WordsFilter = ({ classes, match, client }) => {
  const [anchorEl, onOpen, onClose] = usePopover();
  const [sort, setSort] = useState(-1);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setSort(-1);
    setCategories([]);
    client.writeQuery({
      query: LOCAL_FILTER,
      data: { wordsFilter: {
        query: '',
        filter: [],
        sort: -1,
        __typename: 'WordsFilter',
      } }
    });
  }, [match.params.id]);

  const onChangeSort = () => setSort(-1 * sort);

  const handleClose = async () => {
    const { wordsFilter } = client.readQuery({query: LOCAL_FILTER});

    const { data: { dictionary } } = await client.query({
      query: FILTERED_DICTIONARY_QUERY, variables: {
        id: match.params.id,
        sort,
        query: wordsFilter.query,
        filter: categories
      }
    });

    wordsFilter.sort = sort;
    wordsFilter.filter = categories;

    client.writeQuery({
      query: LOCAL_FILTER,
      data: { wordsFilter }
    });

    client.writeQuery({
      query: FILTERED_DICTIONARY_QUERY,
      variables: { id: match.params.id },
      data: { dictionary }
    });

    onClose();
  };

  return (
    <div>
      <IconButton className={classes.button} onClick={onOpen}>
        {changed(sort, categories) && <div className={classes.activeIndicator} />}
        <FilterList />
      </IconButton>

      <Popover
        id="simple-popper"
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <WordsFilterContent
          sort={sort}
          onChangeSort={onChangeSort}
          categories={categories}
          onChangeCategories={categories => setCategories(categories)}

        />
      </Popover>

    </div>
  );
};

export default withRouter(withApollo(withStyles(styles)(WordsFilter)));
