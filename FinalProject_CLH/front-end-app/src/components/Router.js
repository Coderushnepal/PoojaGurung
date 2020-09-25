import React from 'react';
import Main from './main';
import Favorites from './favourites';
import * as routes from '../constants/routes';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import  { Login, Register } from './login';
import history from '../utils/history';



const Router = () => (
  <BrowserRouter history={ history }>
   <Switch>
       <Route exact path ={routes.HOME}>{Main}</Route>
       <Route exact path ={routes.FAVORITES}>{Favorites}</Route>
       <Route exact path ={routes.LOGIN}>{Login}</Route>
       <Route exact path ={routes.REGISTER}>{Register}</Route>
   </Switch>
  </BrowserRouter>
);

export default Router;