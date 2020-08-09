import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import MainRouter from './main';


const AppRouter = () => (
    <Router>
        <Switch>         
        <Route path="/">
            <MainRouter />
        </Route>        
        </Switch>        
    </Router>

);

export default AppRouter;