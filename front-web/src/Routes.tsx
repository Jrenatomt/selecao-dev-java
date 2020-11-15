import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './core/components/Navbar';
import Login from './pages/auth/Login';
import Person from './pages/Person';

const Routes = () => (
    <BrowserRouter>
       <Navbar />
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/persons" >
            <Person />
          </Route>
         

        </Switch>
    </BrowserRouter>
  );

export default Routes;