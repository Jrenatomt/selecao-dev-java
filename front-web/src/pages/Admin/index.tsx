import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Create from './components/Create';
import SideBar from './components/SideBar';
import './styles.scss'


const Admin = () => (
    <div className="admin-container">
        <SideBar />
        <div className="admin-content">
          <Switch>

             <Route path="/admin/cadastrar">
                 <Create />
              </Route>

              <Route path="/admin/persons">
                 <h1>persons</h1>
              </Route>

              <Route path="/admin/:personsId">
                 <h1>Editar</h1>
              </Route>


          </Switch>
        </div>
    </div>
)

export default Admin;