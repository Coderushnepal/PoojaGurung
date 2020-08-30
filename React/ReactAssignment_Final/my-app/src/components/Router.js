import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './main';
import Favorites from './favorites';

import * as routes from '../constants/routes';

const Router = () => (
  <BrowserRouter>
   <Switch>
       <Route exact path ={routes.HOME}>{Main}</Route>
       <Route exact path ={routes.FAVORITES}>{Favorites}</Route>
   </Switch>
  </BrowserRouter>
);

export default Router;