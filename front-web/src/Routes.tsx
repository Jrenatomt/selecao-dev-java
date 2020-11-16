import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './core/components/Navbar';
import Admin from './pages/Admin';
import Login from './pages/auth/Login';


const Routes = () => (
    <BrowserRouter>
       <Navbar />
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Redirect from="/admin" to="/admin/create" exact/>
          <Route path="/admin">
            <Admin />
          </Route>
        </Switch>
    </BrowserRouter>
  );

export default Routes;