import React from 'react';
import { Router, Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './core/components/Navbar';
import Admin from './pages/Admin';
import Login from './pages/auth/Login';
import history from './core/utils/history'
import PrivateRoute from './core/components/Routes/PrivateRoutes';


const Routes = () => (
    <Router history={history}>
       <Navbar />
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Redirect from="/admin" to="/admin/cadastrar" exact/>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
        </Switch>
    </Router>
  );

export default Routes;