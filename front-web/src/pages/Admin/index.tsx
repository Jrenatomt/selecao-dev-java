import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Search from '../Search';
import Create from './components/Create';
import SideBar from './components/SideBar';
import Person from './Person';
import './styles.scss'


const Admin = () => (
    <div className="admin-container">
        <SideBar />
        <div className="admin-content">
          <Switch>
             <Route path="/admin/cadastrar" exact>
                 <Create />
              </Route>
              <Route path="/admin/persons/:personId" exact>
                 <Create />
              </Route>
              <Route path="/admin/persons" exact>
                 <Person />
              </Route>
              <Route path="/admin/search" exact>
                 <Search />
              </Route>
          </Switch>
        </div>
    </div>
)

export default Admin;