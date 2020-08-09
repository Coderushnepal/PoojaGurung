import React from 'react';
import { Route, Switch} from 'react-router-dom';

import Main from './Main';
import Counter from './Counter';
import HelloUser from './User';
import MyFirstComponent from './MyFirstComponent';
//import FourOFour from './fourofour';

const MainRouter = () => (
  <Switch>
    <Route exact path="/FirstComponent" component={MyFirstComponent} /> 
    <Route exact path="/RedBull" component={HelloUser} /> 
    <Route exact path="/Counter" component={Counter} />
    <Route exact path="/" component={Main} /> 
   {/* // <Route path="*" component={FourOFour}/>  */}
  </Switch>
);

export default MainRouter;