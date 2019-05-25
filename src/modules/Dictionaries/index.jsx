import React from 'react';
import Dictionary from './Dictionary';
import { Route, Switch, Redirect } from 'react-router-dom';
import Activity from './Activity';
import DictionarySelect from './DictionarySelect';

import SideBar from '../SideBar';

import AddDictionary from '../DictionariesList/AddDictionaryModal';
import DeleteDictionary from './Dictionary/DictionaryHeader/DeleteDictionaryModal';

const Dictionaries = ( ) => {
  return (
    <div className='flex flex-row full-height' style={{ overflow: 'hidden' }}>
      <SideBar/>

      <div className='full-width'>

        <Switch>
          {/* <Route exact path='/dictionaries' component={() => <div>HEllo</div>}/> */}
          <Route exact path='/dictionaries/new' component={AddDictionary} />

          <Route exact path='/dictionaries/:id/words' component={Dictionary} />
          <Route exact path='/dictionaries/:id/delete' component={DeleteDictionary} />
          <Route exact path='/dictionaries/:id/activity' component={Activity} />
          <Route exact path='/dictionaries' component={DictionarySelect} />
          
          <Redirect to={'/dictionaries/'} />
        </Switch>
      </div>

    </div>
  );
};

export default Dictionaries;
