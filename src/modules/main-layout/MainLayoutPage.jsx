import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddPage from '../add-page';


const MainLayout = () => {
  return <div>
    <div>HEllo</div>
    <Route path='/add' component={() => <AddPage/>} />
  </div>
}

export default MainLayout;