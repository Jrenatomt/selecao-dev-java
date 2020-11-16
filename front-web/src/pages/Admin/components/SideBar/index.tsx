import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss'

const SideBar = () => (
    <nav className="admin-nav-container">
    <ul>
        <li>
          <NavLink to="/admin/persons" className="admin-nav-item" >Listar Pessoas</NavLink>
        </li>
        <li>
        <NavLink to="/admin/cadastrar"  className="admin-nav-item" >Cadastrar Pessoas</NavLink>
        </li>
        <li>
        <NavLink to="/admin/:personsId"  className="admin-nav-item" >Editar Pessoas</NavLink>
        </li>
    </ul>
</nav>
);

export default SideBar;