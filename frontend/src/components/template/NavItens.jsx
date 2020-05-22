import React from 'react'
import {Link } from 'react-router-dom'

export default props =>
  <nav className='menu'>
    <Link to="/">
      <i className="fa fa-home"></i> Inicio
    </Link>
    <Link to="/users">
      <i className='fa fa-users'></i> Usuários
    </Link>
    <Link to="/admin">
      <i className="fa fa-user-secret"></i> Administradores
    </Link>
  </nav>
